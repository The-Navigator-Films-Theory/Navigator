import { flashcards, games } from '../../data/raw-data/quizzes';
import type { QuizQuestion } from '../../types';
import { supabase } from '../supabase/client';

type FetchQuizQuestionsParams = {
  theoryId?: string;
  limit?: number;
  shuffle?: boolean;
};

function shuffleItems<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

function parseCorrectAnswerId(
  rawCorrectAnswer: unknown,
  fallbackOptionIds: string[],
  fallbackByLetter: Record<string, string>
): string {
  if (typeof rawCorrectAnswer === 'string') {
    if (fallbackOptionIds.includes(rawCorrectAnswer)) {
      return rawCorrectAnswer;
    }

    const numberMatch = rawCorrectAnswer.match(/(\d+)$/);
    if (numberMatch) {
      const optionIndex = Number(numberMatch[1]) - 1;
      const optionId = fallbackOptionIds[optionIndex];
      if (optionId) return optionId;
    }

    const byLetter = fallbackByLetter[rawCorrectAnswer.toUpperCase()];
    if (byLetter) return byLetter;
  }

  return fallbackOptionIds[0] ?? '';
}

export async function fetchQuizQuestions(
  params: FetchQuizQuestionsParams = {},
): Promise<QuizQuestion[]> {
  const { theoryId, limit = 40, shuffle = true } = params;

  const { data: scopedQuizzes, error: scopedQuizzesError } = await supabase
    .from('quizzes')
    .select('id, topic')
    .eq('status', 'published')
    .eq('topic', theoryId ?? '');

  if (scopedQuizzesError) {
    throw scopedQuizzesError;
  }

  let quizzes = scopedQuizzes ?? [];

  // Keep previous behavior: if no quiz exists for a theory, fall back to all quizzes.
  if (quizzes.length === 0) {
    const { data: allQuizzes, error: allQuizzesError } = await supabase
      .from('quizzes')
      .select('id, topic')
      .eq('status', 'published');

    if (allQuizzesError) {
      throw allQuizzesError;
    }

    quizzes = allQuizzes ?? [];
  }

  if (quizzes.length === 0) {
    return [];
  }

  const quizIdToTopic = new Map<string, string>(
    quizzes
      .filter((quiz): quiz is { id: string; topic: string } =>
        typeof quiz.id === 'string' && typeof quiz.topic === 'string'
      )
      .map((quiz) => [quiz.id, quiz.topic])
  );

  const quizIds = [...quizIdToTopic.keys()];
  const { data: questionRows, error: questionRowsError } = await supabase
    .from('quiz_questions')
    .select('*')
    .in('quiz_id', quizIds);

  if (questionRowsError) {
    throw questionRowsError;
  }

  const normalizedQuestions: QuizQuestion[] = (questionRows ?? [])
    .map((row) => {
      const record = row as Record<string, unknown>;
      const quizId = typeof record.quiz_id === 'string' ? record.quiz_id : null;
      const mappedTheoryId = quizId ? (quizIdToTopic.get(quizId) ?? 'general') : 'general';
      const questionId = typeof record.id === 'string' ? record.id : crypto.randomUUID();

      let options = [] as { id: string; text: string }[];
      const legacyOptions = record.options;

      if (isStringArray(legacyOptions)) {
        options = legacyOptions.slice(0, 4).map((text, index) => ({
          id: `${questionId}-${index + 1}`,
          text,
        }));
      } else {
        const modernOptions = [
          record.option_a,
          record.option_b,
          record.option_c,
          record.option_d,
        ].map((value) => (typeof value === 'string' ? value : ''));

        options = modernOptions.map((text, index) => ({
          id: `${questionId}-${index + 1}`,
          text,
        }));
      }

      const fallbackByLetter: Record<string, string> = {
        A: options[0]?.id ?? '',
        B: options[1]?.id ?? '',
        C: options[2]?.id ?? '',
        D: options[3]?.id ?? '',
      };
      const correctAnswerRaw = record.correct_answer ?? record.correct_option;
      const correctAnswer = parseCorrectAnswerId(
        correctAnswerRaw,
        options.map((option) => option.id),
        fallbackByLetter
      );

      return {
        id: questionId,
        theoryId: mappedTheoryId,
        question: typeof record.question_text === 'string' ? record.question_text : '',
        options,
        correctAnswer,
        explanation: typeof record.explanation === 'string' ? record.explanation : '',
      };
    })
    .filter((question) => question.question.length > 0 && question.options.length > 0);

  const selected = shuffle ? shuffleItems(normalizedQuestions) : [...normalizedQuestions];

  return selected.slice(0, limit);
}

export async function fetchQuizStats(): Promise<{
  questionCount: number;
  theoryCount: number;
}> {
  const { data: quizzes, error: quizzesError } = await supabase
    .from('quizzes')
    .select('id, topic')
    .eq('status', 'published');

  if (quizzesError) {
    throw quizzesError;
  }

  const quizIds = (quizzes ?? [])
    .map((quiz) => quiz.id)
    .filter((id): id is string => typeof id === 'string');

  let questionCount = 0;
  if (quizIds.length > 0) {
    const { count, error: questionsError } = await supabase
      .from('quiz_questions')
      .select('*', { count: 'exact', head: true })
      .in('quiz_id', quizIds);

    if (questionsError) {
      throw questionsError;
    }

    questionCount = count ?? 0;
  }

  const theoryCount = new Set(
    (quizzes ?? [])
      .map((quiz) => quiz.topic)
      .filter((topic): topic is string => typeof topic === 'string' && topic.length > 0)
  ).size;

  return {
    questionCount,
    theoryCount,
  };
}

export async function fetchLearningHubStats(): Promise<{
  questionCount: number;
  theoryCount: number;
  flashcardCount: number;
  gameCount: number;
}> {
  const quizStats = await fetchQuizStats();

  return {
    ...quizStats,
    flashcardCount: flashcards.length,
    gameCount: games.length,
  };
}

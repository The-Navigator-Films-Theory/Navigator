import type { QuizQuestion } from '../../types';
import { getOrCreateAnonymousUserId } from '../engagement';
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

function getCorrectIndex(rawCorrectAnswer: unknown): number {
  if (typeof rawCorrectAnswer !== 'string') return 0;

  const value = rawCorrectAnswer.trim().toLowerCase();

  if (value === 'a') return 0;
  if (value === 'b') return 1;
  if (value === 'c') return 2;
  if (value === 'd') return 3;

  const numberMatch = value.match(/(\d+)$/);
  if (numberMatch) {
    const parsed = Number(numberMatch[1]) - 1;
    if (Number.isFinite(parsed) && parsed >= 0 && parsed <= 3) {
      return parsed;
    }
  }

  return 0;
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
      .filter(
        (quiz): quiz is { id: string; topic: string } =>
          typeof quiz.id === 'string' && typeof quiz.topic === 'string',
      )
      .map((quiz) => [quiz.id, quiz.topic]),
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

      let rawOptions: string[] = [];

      if (isStringArray(record.options)) {
        rawOptions = record.options.slice(0, 4);
      } else {
        const modernOptions = [
          record.option_a,
          record.option_b,
          record.option_c,
          record.option_d,
        ]
          .filter((value): value is string => typeof value === 'string' && value.trim().length > 0)
          .slice(0, 4);

        rawOptions = modernOptions;
      }

      if (rawOptions.length === 0) return null;

      const baseOptions = rawOptions.map((text, index) => ({
        id: `opt-${index}`,
        text,
      }));

      const correctIndex = getCorrectIndex(record.correct_answer ?? record.correct_option);
      const correctOption = baseOptions[correctIndex] ?? baseOptions[0];

      const shuffledOptions = shuffle ? shuffleItems(baseOptions) : baseOptions;

      const correctAnswer =
        shuffledOptions.find((option) => option.text === correctOption.text)?.id ??
        shuffledOptions[0]?.id ??
        '';

      return {
        id: questionId,
        theoryId: mappedTheoryId,
        question: typeof record.question_text === 'string' ? record.question_text : '',
        options: shuffledOptions,
        correctAnswer,
        explanation: typeof record.explanation === 'string' ? record.explanation : '',
      };
    })
    .filter((question): question is QuizQuestion => {
      return Boolean(question && question.question.length > 0 && question.options.length > 0);
    });

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
      .filter((topic): topic is string => typeof topic === 'string' && topic.length > 0),
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

  // Fetch flashcard count from vocabulary_terms table
  const { count: flashcardCount } = await supabase
    .from('vocabulary_terms')
    .select('*', { count: 'exact', head: true })
    .eq('status', 'published');

  // Games table doesn't exist in current schema
  const gameCount = 0;

  return {
    ...quizStats,
    flashcardCount: flashcardCount ?? 0,
    gameCount,
  };
}

export type LearningProgressStats = {
  quizBestScore: string | null;
  cardsStudied: number;
  gamesPlayed: number;
  theoriesMastered: number;
};

type EngagementRow = {
  event_type: string;
  related_id: string | null;
  metadata: Record<string, unknown> | null;
};

function getNumber(value: unknown): number | null {
  if (typeof value === 'number' && Number.isFinite(value)) return value;
  if (typeof value === 'string' && value.trim() !== '') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }
  return null;
}

export async function fetchLearningProgressStats(): Promise<LearningProgressStats> {
  const anonUserId = getOrCreateAnonymousUserId();

  if (!anonUserId) {
    return {
      quizBestScore: null,
      cardsStudied: 0,
      gamesPlayed: 0,
      theoriesMastered: 0,
    };
  }

  const { data, error } = await supabase
    .from('user_engagement')
    .select('event_type, related_id, metadata')
    .contains('metadata', { anon_user_id: anonUserId });

  if (error) {
    throw error;
  }

  const rows = (data || []) as EngagementRow[];

  const completedQuizEvents = rows.filter((row) => row.event_type === 'completed_quiz');
  const studiedCards = rows.filter((row) => row.event_type === 'studied_flashcard');
  const playedGames = rows.filter((row) => row.event_type === 'played_game');

  let bestScoreText: string | null = null;
  let bestPercent = -1;
  const masteredTheoryIds = new Set<string>();

  completedQuizEvents.forEach((event) => {
    const meta = event.metadata ?? {};
    const score = getNumber(meta.score);
    const total = getNumber(meta.totalQuestions ?? meta.total_questions);
    let percent = getNumber(meta.percent);

    if (percent === null && score !== null && total && total > 0) {
      percent = Math.round((score / total) * 100);
    }

    if (percent !== null && percent > bestPercent && score !== null && total !== null) {
      bestPercent = percent;
      bestScoreText = `${score}/${total} (${percent}%)`;
    }

    if (percent !== null && percent >= 70 && event.related_id) {
      masteredTheoryIds.add(event.related_id);
    }
  });

  const uniqueStudiedCards = new Set(
    studiedCards
      .map((row) => row.related_id)
      .filter((value): value is string => Boolean(value)),
  );

  return {
    quizBestScore: bestScoreText,
    cardsStudied: uniqueStudiedCards.size,
    gamesPlayed: playedGames.length,
    theoriesMastered: masteredTheoryIds.size,
  };
}
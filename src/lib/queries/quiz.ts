import { quizQuestions } from '../../data/raw-data/quizzes';
import type { QuizQuestion } from '../../types';

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

export async function fetchQuizQuestions(
  params: FetchQuizQuestionsParams = {},
): Promise<QuizQuestion[]> {
  const { theoryId, limit = 40, shuffle = true } = params;

  const filtered = theoryId
    ? quizQuestions.filter((question) => question.theoryId === theoryId)
    : quizQuestions;

  const pool = filtered.length > 0 ? filtered : quizQuestions;
  const selected = shuffle ? shuffleItems(pool) : [...pool];

  return selected.slice(0, limit);
}

export async function fetchQuizStats(): Promise<{
  questionCount: number;
  theoryCount: number;
}> {
  const theoryCount = new Set(quizQuestions.map((question) => question.theoryId)).size;

  return {
    questionCount: quizQuestions.length,
    theoryCount,
  };
}

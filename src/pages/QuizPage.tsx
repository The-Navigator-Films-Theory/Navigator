import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../components/common/ErrorState';
import Loading from '../components/common/Loading';
import QuizQuestion from '../components/quiz/QuizQuestion';
import { useQuiz } from '../hooks/quiz/useQuiz';
import { fetchQuizQuestions } from '../lib/queries/quiz';
import type { QuizQuestion as QuizQuestionType } from '../types';
import styles from './QuizPage.module.scss';

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function randomizeQuestions(questions: QuizQuestionType[]): QuizQuestionType[] {
  const withShuffledOptions = questions.map((question) => ({
    ...question,
    options: shuffleArray(question.options),
  }));

  return shuffleArray(withShuffledOptions);
}

type QuizRunnerProps = {
  theoryId: string;
  questions: QuizQuestionType[];
  onTryAgain: () => void;
};

function QuizRunner({ theoryId, questions, onTryAgain }: QuizRunnerProps) {
  const {
    currentQuestion,
    currentQuestionIndex,
    score,
    selectedAnswer,
    isFinished,
    isCorrect,
    totalQuestions,
    handleNextQuestion,
    handleSelectAnswer,
  } = useQuiz(theoryId, questions);

  if (isFinished) {
    return (
      <div className={styles.quizPage}>
        <div className={styles.results}>
          <h2>Quiz Complete!</h2>
          <p>
            Your score: {score} / {totalQuestions}
          </p>
          <button onClick={onTryAgain} className={styles.restartButton}>
            Try Again
          </button>
          <Link to="/learn" className={styles.backLink}>
            Back to Hub
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.quizPage}>
      <div className={styles.header}>
        <Link to="/learn" className={styles.backLink}>
          <ChevronLeft size={20} />
          Back to Hub
        </Link>
        <div className={styles.progress}>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </div>
      </div>

      {currentQuestion && (
        <QuizQuestion
          question={currentQuestion}
          selectedAnswer={selectedAnswer}
          isCorrect={isCorrect}
          onSelectAnswer={handleSelectAnswer}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
}

const QuizPage = () => {
  const { theoryId = 'general' } = useParams<{ theoryId: string }>();
  const [quizVersion, setQuizVersion] = useState(0);

  const {
    data: questions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['quizQuestions', theoryId],
    queryFn: () => fetchQuizQuestions({ theoryId, limit: 10, shuffle: false }),
    enabled: !!theoryId,
  });

  const playableQuestions = useMemo(() => {
    return randomizeQuestions(questions ?? []);
  }, [questions, quizVersion]);

  const handleTryAgain = () => {
    setQuizVersion((prev) => prev + 1);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (!playableQuestions.length) {
    return <ErrorState message="No quiz questions available." />;
  }

  return (
    <QuizRunner
      key={quizVersion}
      theoryId={theoryId}
      questions={playableQuestions}
      onTryAgain={handleTryAgain}
    />
  );
};

export default QuizPage;
import { useQuery } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../components/common/ErrorState';
import Loading from '../components/common/Loading';
import QuizQuestion from '../components/quiz/QuizQuestion';
import { useQuiz } from '../hooks/quiz/useQuiz';
import { fetchQuizQuestions } from '../lib/queries/quiz';
import styles from './QuizPage.module.scss';

const QuizPage = () => {
  const { theoryId = 'general' } = useParams<{ theoryId: string }>();

  const {
    data: questions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['quizQuestions', theoryId],
    queryFn: () => fetchQuizQuestions({ theoryId, limit: 10, shuffle: true }),
    enabled: !!theoryId,
  });

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
    handleRestart,
  } = useQuiz(theoryId, questions || []);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (isFinished) {
    return (
      <div className={styles.quizPage}>
        <div className={styles.results}>
          <h2>Quiz Complete!</h2>
          <p>
            Your score: {score} / {totalQuestions}
          </p>
          <button onClick={handleRestart} className={styles.restartButton}>
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
};

export default QuizPage;

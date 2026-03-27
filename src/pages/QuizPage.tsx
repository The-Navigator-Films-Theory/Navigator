import { useQuery } from '@tanstack/react-query';
import { ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ErrorState from '../components/common/ErrorState';
import Loading from '../components/common/Loading';
import QuizQuestion from '../components/quiz/QuizQuestion';
import { fetchQuizQuestions } from '../lib/queries/quiz';
import styles from './QuizPage.module.scss';

const QuizPage = () => {
  const { theoryId } = useParams<{ theoryId: string }>();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const {
    data: questions,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['quizQuestions', theoryId],
        queryFn: () => fetchQuizQuestions({ theoryId, limit: 10, shuffle: true }),
  });

  const handleNextQuestion = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < (questions?.length || 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorState message={error.message} />;
  }

  if (isQuizFinished) {
    return (
      <div className={styles.quizPage}>
        <div className={styles.results}>
          <h2>Quiz Complete!</h2>
          <p>
            Your score: {score} / {questions?.length}
          </p>
          <Link to="/learn" className={styles.backLink}>
            Back to Hub
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = questions?.[currentQuestionIndex];

  return (
    <div className={styles.quizPage}>
      <div className={styles.header}>
        <Link to="/learn" className={styles.backLink}>
          <ChevronLeft size={20} />
          Back to Hub
        </Link>
        <div className={styles.progress}>
          Question {currentQuestionIndex + 1} of {questions?.length || 10}
        </div>
      </div>
      {currentQuestion && (
        <QuizQuestion
          key={currentQuestion.id}
          question={currentQuestion}
          onNext={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default QuizPage;

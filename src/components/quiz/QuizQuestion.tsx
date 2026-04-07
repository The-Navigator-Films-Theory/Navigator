import { CheckCircle2, XCircle } from 'lucide-react';
import React from 'react';
import type { QuizQuestion as IQuizQuestion, QuizQuestionOption } from '../../types';
import Button from '../ui/Button';
import styles from './QuizQuestion.module.scss';

interface QuizQuestionProps {
  question: IQuizQuestion;
  selectedAnswer: string | null;
  isCorrect: boolean;
  currentQuestionIndex: number;
  totalQuestions: number;
  onSelectAnswer: (answerId: string) => void;
  onNext: () => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  currentQuestionIndex,
  totalQuestions,
  onSelectAnswer,
  onNext,
}) => {
  const isAnswered = selectedAnswer !== null;
  const progressPercent = totalQuestions > 0 ? ((currentQuestionIndex + 1) / totalQuestions) * 100 : 0;

  const getOptionClass = (optionId: string) => {
    if (!isAnswered) {
      return styles.option;
    }
    const isCorrectChoice = optionId === question.correctAnswer;
    if (selectedAnswer === optionId) {
      return isCorrectChoice ? styles.correct : styles.incorrect;
    }
    if (isCorrectChoice) {
      return styles.correct;
    }
    return styles.option;
  };

  const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className={styles.quizQuestion}>
      <p className={styles.questionCounter}>
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </p>
      <div className={styles.progressTrack} aria-label="Quiz progress" role="progressbar" aria-valuemin={1} aria-valuemax={totalQuestions} aria-valuenow={currentQuestionIndex + 1}>
        <div className={styles.progressFill} style={{ width: `${progressPercent}%` }} />
      </div>
      <h2 className={styles.questionText}>{question.question}</h2>
      <div className={styles.optionsGrid}>
        {question.options.map((option: QuizQuestionOption, index: number) => (
          <div
            key={option.id}
            className={getOptionClass(option.id)}
            onClick={() => onSelectAnswer(option.id)}
          >
            <span className={styles.optionLetter}>{getOptionLetter(index)}</span>
            <span className={styles.optionText}>{option.text}</span>
            {isAnswered && selectedAnswer === option.id && (
              <span className={styles.optionIcon}>
                {option.id === question.correctAnswer ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <XCircle size={20} />
                )}
              </span>
            )}
            {isAnswered &&
              option.id === question.correctAnswer &&
              selectedAnswer !== option.id && (
                <span className={styles.optionIcon}>
                  <CheckCircle2 size={20} />
                </span>
              )}
          </div>
        ))}
      </div>
      <div className={styles.bottomContainer}>
        <div className={`${styles.explanation} ${isAnswered ? styles.visible : ''}`}>
          <p>
            <strong>Explanation:</strong>
          </p>
          <p>{question.explanation}</p>
        </div>
        <Button
          onClick={onNext}
          className={styles.nextButton}
          disabled={!isAnswered}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default QuizQuestion;

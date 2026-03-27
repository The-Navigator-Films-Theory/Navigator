import { CheckCircle2, XCircle } from 'lucide-react';
import React, { useState } from 'react';
import type { QuizQuestion as IQuizQuestion, QuizQuestionOption } from '../../types';
import Button from '../ui/Button';
import styles from './QuizQuestion.module.scss';

interface QuizQuestionProps {
  question: IQuizQuestion;
  onNext: (isCorrect: boolean) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ question, onNext }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (optionId: string) => {
    if (isAnswered) return;
    setSelectedOption(optionId);
    setIsAnswered(true);
  };

  const getOptionClass = (optionId: string) => {
    if (!isAnswered) {
      return styles.option;
    }
    const isCorrect = optionId === question.correctAnswer;
    if (selectedOption === optionId) {
      return isCorrect ? styles.correct : styles.incorrect;
    }
    if (isCorrect) {
      return styles.correct;
    }
    return styles.option;
  };

  const getOptionLetter = (index: number) => String.fromCharCode(65 + index);

  return (
    <div className={styles.quizQuestion}>
      <h2 className={styles.questionText}>{question.question}</h2>
      <div className={styles.optionsGrid}>
        {question.options.map((option: QuizQuestionOption, index: number) => (
          <div
            key={option.id}
            className={getOptionClass(option.id)}
            onClick={() => handleOptionClick(option.id)}
          >
            <span className={styles.optionLetter}>{getOptionLetter(index)}</span>
            <span className={styles.optionText}>{option.text}</span>
            {isAnswered && selectedOption === option.id && (
              <span className={styles.optionIcon}>
                {option.id === question.correctAnswer ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <XCircle size={20} />
                )}
              </span>
            )}
             {isAnswered && option.id === question.correctAnswer && selectedOption !== option.id && (
              <span className={styles.optionIcon}>
                <CheckCircle2 size={20} />
              </span>
            )}
          </div>
        ))}
      </div>
      {isAnswered && (
        <div className={styles.explanation}>
          <p>
            <strong>Explanation:</strong>
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
      {isAnswered && (
        <Button
          onClick={() => onNext(selectedOption === question.correctAnswer)}
          className={styles.nextButton}
        >
          Next Question
        </Button>
      )}
    </div>
  );
};

export default QuizQuestion;

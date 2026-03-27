import { useState, useEffect, useMemo } from 'react';
import type { QuizQuestion } from '../../types';

const getStorageKey = (theoryId: string) => `quizState_${theoryId}`;

export const useQuiz = (theoryId: string, questions: QuizQuestion[]) => {
  const storageKey = getStorageKey(theoryId);

  const getInitialState = () => {
    try {
      const savedState = localStorage.getItem(storageKey);
      if (savedState) {
        const { currentQuestionIndex, score } = JSON.parse(savedState);
        // Basic validation
        if (
          typeof currentQuestionIndex === 'number' &&
          typeof score === 'number' &&
          currentQuestionIndex < questions.length
        ) {
          return {
            currentQuestionIndex,
            score,
            selectedAnswer: null,
            isFinished: false,
          };
        }
      }
    } catch (error) {
      console.error('Failed to parse quiz state from localStorage:', error);
    }
    return {
      currentQuestionIndex: 0,
      score: 0,
      selectedAnswer: null,
      isFinished: false,
    };
  };

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(
    getInitialState().currentQuestionIndex
  );
  const [score, setScore] = useState(getInitialState().score);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (questions.length > 0 && !isFinished) {
      try {
        const stateToSave = JSON.stringify({ currentQuestionIndex, score });
        localStorage.setItem(storageKey, stateToSave);
      } catch (error) {
        console.error('Failed to save quiz state to localStorage:', error);
      }
    }
  }, [currentQuestionIndex, score, storageKey, isFinished, questions.length]);

  const currentQuestion = useMemo(() => questions[currentQuestionIndex], [
    questions,
    currentQuestionIndex,
  ]);

  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setIsFinished(true);
      localStorage.removeItem(storageKey);
    }
  };

  const handleSelectAnswer = (answerId: string) => {
    if (selectedAnswer) return; // Prevent changing answer

    setSelectedAnswer(answerId);
    if (answerId === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleRestart = () => {
    localStorage.removeItem(storageKey);
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsFinished(false);
  };

  return {
    currentQuestion,
    currentQuestionIndex,
    score,
    selectedAnswer,
    isFinished,
    isCorrect,
    totalQuestions: questions.length,
    handleNextQuestion,
    handleSelectAnswer,
    handleRestart,
  };
};

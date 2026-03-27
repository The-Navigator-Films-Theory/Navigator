import { useState, useMemo } from 'react';
import type { QuizQuestion } from '../../types';

// @ts-ignore
export const useQuiz = (theoryId: string, questions: QuizQuestion[]) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

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

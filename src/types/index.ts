// Re-export all types from this module
export type { Database, Json } from './database.types';
export type { Theory } from './theory';

// Citation type for film theory citations
export interface Citation {
  id: string;
  type: string;
  title: string;
  author: string;
  year: number;
  journal?: string;
  publisher?: string;
  pages?: string;
  theoryIds: string[];
  description: string;
  academicSignificance: string;
  keyQuotes: string[];
  critiques?: string[];
  keyConceptsExplained?: Record<string, string>;
}

// Film type for films data
export interface Film {
  id: string;
  title: string;
  director: string;
  year: number;
  poster: string;
  description: string;
  relevantTheories: string[];
}

// Quiz types
export interface QuizQuestionOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string;
  theoryId: string;
  question: string;
  options: QuizQuestionOption[];
  correctAnswer: string; // This should be the ID of the correct QuizQuestionOption
  explanation: string;
}

export interface Flashcard {
  id: string;
  front?: string;
  back?: string;
  category?: string;
  theoryId?: string;
  term?: string;
  definition?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  type: string;
  difficulty?: string;
  theoryIds?: string[];
}

// Vocabulary term for film theory terminology
export interface VocabularyTerm {
  id: string;
  term: string;
  pronunciation?: string;
  definition: string;
  etymology: string;
  categories: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  relatedTerms: string[];
  relatedTheories: string[];
  usageExample: string;
  featured?: boolean;
}

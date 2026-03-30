import fs from 'fs';
import { films } from './src/data/raw-data/films';
import { flashcards, games, quizQuestions } from './src/data/raw-data/quizzes';
import { theories } from './src/data/raw-data/theories';
import { vocabularyTerms } from './src/data/raw-data/vocabulary';

const data = {
  theories,
  vocabulary: vocabularyTerms,
  films,
  quizQuestions,
  games,
  flashcards
};

// This writes a combined JSON file
fs.writeFileSync('./src/data/raw_data.json', JSON.stringify(data, null, 2));
console.log('✅ Success! Data extracted to src/data/raw_data.json');
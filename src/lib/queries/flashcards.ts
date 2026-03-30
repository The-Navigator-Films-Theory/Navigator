import type { VocabularyTerm } from './vocabulary';
import { fetchVocabularyTerms } from './vocabulary';

export type FlashcardItem = {
  id: string;
  term: string;
  definition: string;
  theoryLabel: string;
};

function toTheoryLabel(term: VocabularyTerm): string {
  const theoryId = term.related_theories[0] ?? 'general';

  if (!theoryId || theoryId === 'general') {
    return 'General Theory';
  }

  const words = theoryId
    .split('-')
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1));

  return `${words.join(' ')} Theory`;
}

export async function fetchFlashcards(): Promise<FlashcardItem[]> {
  const terms = await fetchVocabularyTerms({ sort: 'az' });

  return terms.map((term) => ({
    id: term.id,
    term: term.term,
    definition: term.definition,
    theoryLabel: toTheoryLabel(term),
  }));
}

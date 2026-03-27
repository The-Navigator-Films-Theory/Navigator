import type { Database } from '../../types/database.types';
import { supabase } from '../supabase/client';

type VocabularyRow = Database['public']['Tables']['vocabulary_terms']['Row'];

export type VocabularyTerm = {
  id: string;
  term: string;
  definition: string;
  example_usage: string | null;
  difficulty: string | null;
  tags: string[];
  related_terms: string[];
  pronunciation: string | null;
  etymology: string | null;
  related_theories: string[];
  featured: boolean;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
};

function asStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((item): item is string => typeof item === 'string');
}

function toVocabularyTerm(row: VocabularyRow): VocabularyTerm {
  return {
    id: row.id,
    term: row.term,
    definition: row.definition,
    example_usage: row.example_usage,
    difficulty: row.difficulty,
    tags: asStringArray(row.tags),
    related_terms: asStringArray(row.related_terms),
    pronunciation: row.pronunciation,
    etymology: row.etymology,
    related_theories: Array.isArray(row.related_theories)
      ? row.related_theories.filter((item): item is string => typeof item === 'string')
      : [],
    featured: Boolean(row.featured),
    status: row.status === 'published' ? 'published' : 'draft',
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function fetchVocabularyTerms(params?: {
  q?: string;
  difficulty?: string;
  sort?: 'az' | 'za';
}): Promise<VocabularyTerm[]> {
  let query = supabase
    .from('vocabulary_terms')
    .select('*')
    .eq('status', 'published');

  if (params?.difficulty && params.difficulty !== 'all') {
    query = query.eq('difficulty', params.difficulty);
  }

  if (params?.q) {
    const search = params.q.trim();

    if (search) {
      query = query.or(
        `term.ilike.%${search}%,definition.ilike.%${search}%,etymology.ilike.%${search}%`
      );
    }
  }

  const ascending = params?.sort !== 'za';

  const { data, error } = await query.order('term', { ascending });

  if (error) throw error;

  return (data ?? []).map((row) => toVocabularyTerm(row as VocabularyRow));
}

export async function fetchFeaturedVocabularyTerms(): Promise<VocabularyTerm[]> {
  const { data, error } = await supabase
    .from('vocabulary_terms')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('term')
    .limit(3);

  if (error) throw error;

  return (data ?? []).map((row) => toVocabularyTerm(row as VocabularyRow));
}
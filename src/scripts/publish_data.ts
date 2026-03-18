import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config({ path: '.env' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env');
}

const supabase = createClient(
  supabaseUrl,
  supabaseServiceRoleKey
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function publish() {
  const rawData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../src/data/raw_data.json'), 'utf8'));

  console.log('Publishing to Supabase...');

  const theoriesPayload = rawData.theories.map((t: any) => ({
    title: t.title ?? t.name,
    slug: t.slug ?? t.id,
    category: t.category ?? null,
    overview: t.overview ?? t.summary ?? null,
    history: t.history ?? t.historicalContext ?? null,
    key_points: t.key_points ?? t.keyPoints ?? null,
    key_thinkers: t.key_thinkers ?? t.keyThinkers ?? null,
    representative_films: t.representative_films ?? t.representativeFilms ?? null,
    citations: t.citations ?? null,
    status: 'published',
  }));

  const vocabularyPayload = rawData.vocabulary.map((v: any) => ({
    term: v.term,
    definition: v.definition,
    example_usage: v.example_usage ?? v.usageExample ?? null,
    difficulty: v.difficulty ?? null,
    tags: v.tags ?? v.categories ?? null,
    related_terms: v.related_terms ?? v.relatedTerms ?? null,
    status: 'published',
  }));

  const filmsPayload = rawData.films.map((f: any) => ({
    title: f.title,
    year: f.year ?? null,
    director: f.director ?? null,
    synopsis: f.synopsis ?? f.description ?? null,
  }));

  // 1. Theories
  const { data: tData, error: tErr } = await supabase.from('theories').upsert(
    theoriesPayload,
    { onConflict: 'slug' }
  ) as { data: any[] | null; error: any };
  console.log('Theories:', tErr ? `Error: ${tErr.message}` : `${theoriesPayload.length} rows processed`);
  if (tErr) console.error(tErr);

  // 2. Vocabulary
  const { data: vData, error: vErr } = await supabase.from('vocabulary_terms').upsert(
    vocabularyPayload,
    { onConflict: 'term' }
  ) as { data: any[] | null; error: any };
  console.log('Vocabulary:', vErr ? `Error: ${vErr.message}` : `${vocabularyPayload.length} rows processed`);
  if (vErr) console.error(vErr);

  // 3. Films
  const { data: fData, error: fErr } = await supabase.from('films').insert(filmsPayload) as { data: any[] | null; error: any };
  console.log('Films:', fErr ? `Error: ${fErr.message}` : `${filmsPayload.length} rows inserted`);
  if (fErr) console.error(fErr);
}

publish();
import { supabase } from '../supabase/client';

type FilmRow = {
  id: string;
  title: string;
  year: number | null;
  director: string | null;
  synopsis: string | null;
  created_at: string;
  updated_at: string;
  film_id: string | null;
  poster_url: string | null;
  relevant_theories: string[] | null;
};

export type Film = {
  id: string;
  title: string;
  year: number | null;
  director: string | null;
  synopsis: string | null;
  poster_url: string | null;
  relevant_theories: string[] | null;
};

function toFilm(row: FilmRow): Film {
  return {
    id: row.id,
    title: row.title,
    year: row.year,
    director: row.director,
    synopsis: row.synopsis,
    poster_url: row.poster_url,
    relevant_theories: row.relevant_theories,
  };
}

function scoreFilm(film: Film): number {
  let score = 0;

  if (film.relevant_theories && film.relevant_theories.length > 0) score += 10;
  if (film.poster_url) score += 3;
  if (film.synopsis) score += 2;
  if (film.director) score += 1;
  if (film.year) score += 1;

  return score;
}

function dedupeFilms(films: Film[]): Film[] {
  const filmMap = new Map<string, Film>();

  for (const film of films) {
    const key = `${film.title.trim().toLowerCase()}__${film.year ?? 'no-year'}`;
    const existing = filmMap.get(key);

    if (!existing) {
      filmMap.set(key, film);
      continue;
    }

    if (scoreFilm(film) > scoreFilm(existing)) {
      filmMap.set(key, film);
    }
  }

  return Array.from(filmMap.values());
}

export async function fetchFilms(): Promise<Film[]> {
  const { data, error } = await (supabase as any)
    .from('films')
    .select('*')
    .order('title');

  if (error) {
    console.error('Error fetching films:', error);
    throw error;
  }

  const rows = (data ?? []) as FilmRow[];
  const films = rows.map(toFilm);

  return dedupeFilms(films);
}

export async function fetchFilmById(id: string): Promise<Film | null> {
  const { data, error } = await (supabase as any)
    .from('films')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching film:', error);
    return null;
  }

  return toFilm(data as FilmRow);
}
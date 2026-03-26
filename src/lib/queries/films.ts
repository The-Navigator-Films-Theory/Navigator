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
  return rows.map(toFilm);
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
// Project Attribution
// Owner: Gail McFarland
// Contributors: Jay Choksi, Dhairya Patel, Rishyu Babariya

import type { Database } from '../../types/database.types';
import type { Theory, TheoryCitation, TheoryFilm } from '../../types/theory';
import { supabase } from '../supabase/client';


type TheoryRow = Database['public']['Tables']['theories']['Row'];
type CitationRow = Database['public']['Tables']['citations']['Row'];

function asStringArray(value: TheoryRow['key_points']): string[] | null {
  if (!Array.isArray(value)) return null;
  const allStrings = value.every((entry) => typeof entry === 'string');
  return allStrings ? (value as string[]) : null;
}

function toFilmArray(value: TheoryRow['representative_films']): TheoryFilm[] | null {
  if (!Array.isArray(value)) return null;

  const films = value
    .slice(0, 3)
    .map((entry, index): TheoryFilm | null => {
      if (typeof entry === 'string') {
        const [title, subtitle] = entry.split('|').map((part) => part.trim());
        return {
          title: title || entry,
          subtitle: subtitle || 'Representative film',
          image: `https://images.pexels.com/photos/${7991579 + index}/pexels-photo-${7991579 + index}.jpeg?w=400`,
        };
      }

      if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
        const obj = entry as Record<string, unknown>;
        const title = typeof obj.title === 'string' && obj.title.trim() ? obj.title.trim() : null;
        if (!title) return null;

        const director = typeof obj.director === 'string' ? obj.director : '';
        const year = typeof obj.year === 'number' ? String(obj.year) : '';
        const subtitle = [director, year].filter(Boolean).join(' • ') || 'Representative film';

        const poster = typeof obj.poster === 'string' ? obj.poster : '';
        const posterUrl = typeof obj.poster_url === 'string' ? obj.poster_url : '';
        const image = poster || posterUrl || `https://images.pexels.com/photos/${7991579 + index}/pexels-photo-${7991579 + index}.jpeg?w=400`;

        return { title, subtitle, image };
      }

      return null;
    })
    .filter((item): item is TheoryFilm => item !== null);

  return films.length > 0 ? films : null;
}

function toCitationArray(value: TheoryRow['citations']): string[] | null {
  if (!Array.isArray(value)) return null;

  const citations = value
    .map((entry): string | null => {
      if (typeof entry === 'string') return entry;

      if (entry && typeof entry === 'object' && !Array.isArray(entry)) {
        const obj = entry as Record<string, unknown>;
        const title = typeof obj.title === 'string' ? obj.title : '';
        const author = typeof obj.author === 'string' ? obj.author : '';
        const year = typeof obj.year === 'number' ? String(obj.year) : '';

        if (!title && !author) return null;
        return [title, author, year].filter(Boolean).join(' — ');
      }

      return null;
    })
    .filter((item): item is string => Boolean(item));

  return citations.length > 0 ? citations : null;
}

function toTheory(row: TheoryRow): Theory {
  return {
    id: row.id,
    title: row.title,
    slug: row.slug,
    category: row.category,
    overview: row.overview,
    history: row.history,
    description: row.description,
    key_points: asStringArray(row.key_points),
    key_thinkers: asStringArray(row.key_thinkers),
    representative_films: toFilmArray(row.representative_films),
    citations: toCitationArray(row.citations),
    color: row.color,
    status: row.status === 'published' ? 'published' : 'draft',
    created_at: row.created_at,
    updated_at: row.updated_at,
  };
}

export async function fetchTheories(params: { q?: string; category?: string }): Promise<Theory[]> {
  let query = supabase.from('theories').select('*').eq('status', 'published');

  if (params.category) {
    query = query.eq('category', params.category);
  }

  if (params.q) {
    query = query.ilike('title', `%${params.q}%`);
  }

  const { data, error } = await query.order('title');
  if (error) throw error;
  const rows = (data ?? []) as TheoryRow[];
  return rows.map(toTheory);
}

export async function fetchTheoryBySlug(slug: string): Promise<Theory> {
  const { data, error } = await supabase
    .from('theories')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) throw error;
  return toTheory(data as TheoryRow);
}

export async function fetchTheoryCitations(theoryId: string): Promise<TheoryCitation[]> {
  const { data, error } = await supabase
    .from('citations')
    .select('id, title, author, year, description, theory_ids, status')
    .contains('theory_ids', [theoryId])
    .eq('status', 'published')
    .order('year', { ascending: false, nullsFirst: false })
    .limit(3);

  if (error) {
    return [];
  }

  const rows = (data ?? []) as CitationRow[];
  return rows.map((row) => ({
    id: row.id,
    title: row.title,
    author: row.author,
    year: row.year,
    description: row.description,
  }));
}

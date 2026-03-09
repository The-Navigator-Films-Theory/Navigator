export type Theory = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  overview: string | null;
  history: string | null;
  key_points: string[] | null;
  key_thinkers: string[] | null;
  representative_films: string[] | null;
  citations: string[] | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
};

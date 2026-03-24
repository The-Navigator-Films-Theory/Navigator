export type TheoryFilm = {
  title: string;
  subtitle: string;
  image: string;
};

export type TheoryCitation = {
  id: string;
  title: string;
  author: string | null;
  year: number | null;
  description: string | null;
};

export type Theory = {
  id: string;
  title: string;
  slug: string;
  category: string | null;
  overview: string | null;
  history: string | null;
  description: string | null;
  key_points: string[] | null;
  key_thinkers: string[] | null;
  representative_films: TheoryFilm[] | null;
  citations: string[] | null;
  color: string | null;
  status: 'draft' | 'published';
  created_at: string;
  updated_at: string;
};

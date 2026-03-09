import type { Theory } from '../../types/theory';
import { supabase } from '../supabase/client';

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
  return (data ?? []) as Theory[];
}

export async function fetchTheoryBySlug(slug: string): Promise<Theory> {
  const { data, error } = await supabase
    .from('theories')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) throw error;
  return data as Theory;
}

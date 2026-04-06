import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../lib/supabase/client';
import type { Theory } from '../../types/theory';

export function useTheories() {
  return useQuery({
    queryKey: ['theories'],
    queryFn: async () => {
      const { data, error } = await supabase.from('theories').select('*').order('title');

      if (error) throw error;
      return (data || []) as Theory[];
    },
  });
}

export function useTheoryManagement() {
  const queryClient = useQueryClient();
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const createTheoryMutation = useMutation({
    mutationFn: async (data: { title: string; slug: string; category: string; overview: string; description: string; history: string }) => {
      const { error } = await supabase.from('theories').insert([
        {
          ...data,
          status: 'draft',
          key_points: [],
          key_thinkers: [],
          representative_films: [],
          citations: [],
        },
      ]);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['theories'] });
      setToastMessage({ type: 'success', text: 'Theory created successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to create theory: ${error.message}` });
    },
  });

  const updateTheoryMutation = useMutation({
    mutationFn: async ({ id, ...data }: { id: string; title: string; slug: string; category: string; overview: string; description: string; history: string }) => {
      const { error } = await supabase.from('theories').update(data).eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['theories'] });
      setToastMessage({ type: 'success', text: 'Theory updated successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to update theory: ${error.message}` });
    },
  });

  const deleteTheoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('theories').delete().eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['theories'] });
      setToastMessage({ type: 'success', text: 'Theory deleted successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to delete theory: ${error.message}` });
    },
  });

  const publishTheoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from('theories')
        .update({ status: 'published', published_at: new Date().toISOString() })
        .eq('id', id)
        .select('id')
        .maybeSingle();

      if (error) throw error;
      if (!data) {
        throw new Error('No theory was updated. Check RLS policies for theories update access.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['theories'] });
      setToastMessage({ type: 'success', text: 'Theory published successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to publish theory: ${error.message}` });
    },
  });

  const unpublishTheoryMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from('theories')
        .update({ status: 'draft', published_at: null })
        .eq('id', id)
        .select('id')
        .maybeSingle();

      if (error) throw error;
      if (!data) {
        throw new Error('No theory was updated. Check RLS policies for theories update access.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['theories'] });
      setToastMessage({ type: 'success', text: 'Theory unpublished successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to unpublish theory: ${error.message}` });
    },
  });

  return {
    create: createTheoryMutation,
    update: updateTheoryMutation,
    delete: deleteTheoryMutation,
    publish: publishTheoryMutation,
    unpublish: unpublishTheoryMutation,
    toastMessage,
    clearToast: () => setToastMessage(null),
  };
}

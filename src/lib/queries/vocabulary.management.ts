import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { supabase } from '../supabase/client';
import type { VocabularyTerm } from './vocabulary';

export function useVocabularyTerms() {
  return useQuery({
    queryKey: ['vocabulary_terms'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('vocabulary_terms')
        .select('*')
        .order('term');

      if (error) throw error;
      return (data || []) as VocabularyTerm[];
    },
  });
}

export type VocabularyFormData = {
  term: string;
  definition: string;
  example_usage: string;
  difficulty: string;
  pronunciation: string;
  etymology: string;
  tags: string[];
  related_terms: string[];
  related_theories: string[];
};

export function useVocabularyManagement() {
  const queryClient = useQueryClient();
  const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const createMutation = useMutation({
    mutationFn: async (data: VocabularyFormData) => {
      const { error } = await supabase.from('vocabulary_terms').insert([
        {
          ...data,
          status: 'draft',
          featured: false,
        },
      ]);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vocabulary_terms'] });
      setToastMessage({ type: 'success', text: 'Term created successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to create term: ${error.message}` });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({
      id,
      ...data
    }: { id: string } & VocabularyFormData) => {
      const { error } = await supabase.from('vocabulary_terms').update(data).eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vocabulary_terms'] });
      setToastMessage({ type: 'success', text: 'Term updated successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to update term: ${error.message}` });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('vocabulary_terms').delete().eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vocabulary_terms'] });
      setToastMessage({ type: 'success', text: 'Term deleted successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to delete term: ${error.message}` });
    },
  });

  const publishMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('vocabulary_terms')
        .update({ status: 'published', updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vocabulary_terms'] });
      setToastMessage({ type: 'success', text: 'Term published successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to publish term: ${error.message}` });
    },
  });

  const unpublishMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('vocabulary_terms').update({ status: 'draft' }).eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['vocabulary_terms'] });
      setToastMessage({ type: 'success', text: 'Term unpublished successfully' });
      setTimeout(() => setToastMessage(null), 3000);
    },
    onError: (error) => {
      setToastMessage({ type: 'error', text: `Failed to unpublish term: ${error.message}` });
    },
  });

  return {
    create: createMutation,
    update: updateMutation,
    delete: deleteMutation,
    publish: publishMutation,
    unpublish: unpublishMutation,
    toastMessage,
    clearToast: () => setToastMessage(null),
  };
}

import { useQuery } from '@tanstack/react-query';
import { supabase } from '../supabase/client';

export type AnalyticsSummary = {
  published_theories: number;
  draft_theories: number;
  published_vocabulary: number;
  draft_vocabulary: number;
  published_quizzes: number;
  draft_quizzes: number;
  unique_users: number;
  total_engagement_events: number;
};

export type UserEngagementEvent = {
  id: string;
  user_id: string;
  event_type: string;
  related_id: string | null;
  related_type: string | null;
  metadata: Record<string, unknown> | null;
  created_at: string;
};

export type ContentPopularity = {
  id: string;
  title: string;
  type: 'theory' | 'vocabulary' | 'quiz';
  view_count: number;
};

export function useAnalyticsSummary() {
  return useQuery({
    queryKey: ['analytics_summary'],
    queryFn: async () => {
      // Query each table to build summary
      const theoriesResult = await supabase.from('theories').select('status');
      const vocabularyResult = await supabase.from('vocabulary_terms').select('status');
      const engagementResult = await supabase
        .from('user_engagement')
        .select('user_id, event_type');

      const theories = theoriesResult.data || [];
      const vocabulary = vocabularyResult.data || [];
      const engagement = engagementResult.data || [];

      const publishedTheories = theories.filter(
        (t: { status: string }) => t.status === 'published'
      ).length;
      const draftTheories = theories.filter(
        (t: { status: string }) => t.status === 'draft'
      ).length;
      const publishedVocab = vocabulary.filter(
        (v: { status: string }) => v.status === 'published'
      ).length;
      const draftVocab = vocabulary.filter(
        (v: { status: string }) => v.status === 'draft'
      ).length;

      const uniqueUsers = new Set(
        engagement
          .map((e: { user_id: string | null }) => e.user_id)
          .filter((id): id is string => id !== null)
      ).size;

      return {
        published_theories: publishedTheories,
        draft_theories: draftTheories,
        published_vocabulary: publishedVocab,
        draft_vocabulary: draftVocab,
        published_quizzes: 0,
        draft_quizzes: 0,
        unique_users: uniqueUsers,
        total_engagement_events: engagement.length,
      } as AnalyticsSummary;
    },
  });
}

export function useUserEngagementEvents(limit = 50) {
  return useQuery({
    queryKey: ['user_engagement_events', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('user_engagement')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(limit);

      if (error) throw error;
      return (data || []) as UserEngagementEvent[];
    },
  });
}

export function useMostViewedContent() {
  return useQuery({
    queryKey: ['most_viewed_content'],
    queryFn: async () => {
      // Get most viewed theories
      const { data: theories, error: theoriesError } = await supabase
        .from('user_engagement')
        .select('related_id')
        .eq('related_type', 'theory')
        .eq('event_type', 'viewed_theory');

      if (theoriesError) throw theoriesError;

      // Get most viewed vocabulary
      const { data: vocabulary, error: vocabError } = await supabase
        .from('user_engagement')
        .select('related_id')
        .eq('related_type', 'vocabulary')
        .eq('event_type', 'viewed_vocabulary');

      if (vocabError) throw vocabError;

      // Count occurrences
      const theoryCounts = new Map<string | null, number>();
      const vocabCounts = new Map<string | null, number>();

      theories?.forEach((event: { related_id: string | null }) => {
        if (event.related_id) {
          theoryCounts.set(event.related_id, (theoryCounts.get(event.related_id) ?? 0) + 1);
        }
      });

      vocabulary?.forEach((event: { related_id: string | null }) => {
        if (event.related_id) {
          vocabCounts.set(event.related_id, (vocabCounts.get(event.related_id) ?? 0) + 1);
        }
      });

      // Get top theories
      const topTheoryIds = Array.from(theoryCounts.entries())
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([id]) => id) as string[];

      const topVocabIds = Array.from(vocabCounts.entries())
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([id]) => id) as string[];

      // Fetch full data
      let theoryData: ContentPopularity[] = [];
      let vocabData: ContentPopularity[] = [];

      if (topTheoryIds.length > 0) {
        const { data, error } = await supabase
          .from('theories')
          .select('id, title')
          .in('id', topTheoryIds);

        if (!error && data) {
          theoryData = data.map((t: { id: string; title: string }) => ({
            id: t.id,
            title: t.title,
            type: 'theory' as const,
            view_count: theoryCounts.get(t.id) ?? 0,
          }));
        }
      }

      if (topVocabIds.length > 0) {
        const { data, error } = await supabase
          .from('vocabulary_terms')
          .select('id, term')
          .in('id', topVocabIds);

        if (!error && data) {
          vocabData = data.map((v: { id: string; term: string }) => ({
            id: v.id,
            title: v.term,
            type: 'vocabulary' as const,
            view_count: vocabCounts.get(v.id) ?? 0,
          }));
        }
      }

      return [...theoryData, ...vocabData];
    },
  });
}

export function useEventStats() {
  return useQuery({
    queryKey: ['event_stats'],
    queryFn: async () => {
      const { data, error } = await supabase.from('user_engagement').select('event_type');

      if (error) throw error;

      const stats = new Map<string, number>();
      data?.forEach((event: { event_type: string }) => {
        stats.set(event.event_type, (stats.get(event.event_type) ?? 0) + 1);
      });

      return Array.from(stats.entries()).map(([type, count]) => ({
        type,
        count,
      }));
    },
  });
}

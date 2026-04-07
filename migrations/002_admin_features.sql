-- Migration: Admin feature enhancements
-- Adds admin tracking, user engagement analytics, and audit logging

-- ============================================
-- 1. ALTER ADMIN_USERS TABLE
-- ============================================
ALTER TABLE public.admin_users
  ADD COLUMN IF NOT EXISTS last_login timestamptz,
  ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();

-- ============================================
-- 2. CREATE USER_ENGAGEMENT TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS public.user_engagement (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  event_type text NOT NULL,
  -- event_type: 'viewed_theory', 'completed_quiz', 'viewed_vocabulary', 'quiz_attempt'
  related_id uuid,
  -- related to theories.id, vocabulary_terms.id, or quizzes.id
  related_type text,
  -- 'theory', 'vocabulary', 'quiz'
  metadata jsonb DEFAULT '{}'::jsonb,
  -- store score, duration, answers, etc.
  created_at timestamptz NOT NULL DEFAULT now()
);

-- ============================================
-- 3. INDEXES FOR PERFORMANCE
-- ============================================
CREATE INDEX IF NOT EXISTS idx_user_engagement_user_id
  ON public.user_engagement(user_id);

CREATE INDEX IF NOT EXISTS idx_user_engagement_event_type
  ON public.user_engagement(event_type);

CREATE INDEX IF NOT EXISTS idx_user_engagement_created_at
  ON public.user_engagement(created_at);

CREATE INDEX IF NOT EXISTS idx_user_engagement_related_id
  ON public.user_engagement(related_id);

-- ============================================
-- 4. VIEW FOR ADMIN ANALYTICS
-- ============================================
CREATE OR REPLACE VIEW public.admin_analytics AS
SELECT
  (SELECT COUNT(*) FROM public.theories WHERE status = 'published') as published_theories,
  (SELECT COUNT(*) FROM public.theories WHERE status = 'draft') as draft_theories,
  (SELECT COUNT(*) FROM public.vocabulary_terms WHERE status = 'published') as published_vocabulary,
  (SELECT COUNT(*) FROM public.vocabulary_terms WHERE status = 'draft') as draft_vocabulary,
  (SELECT COUNT(*) FROM public.quizzes WHERE status = 'published') as published_quizzes,
  (SELECT COUNT(*) FROM public.quizzes WHERE status = 'draft') as draft_quizzes,
  (SELECT COUNT(DISTINCT user_id) FROM public.user_engagement) as unique_users,
  (SELECT COUNT(*) FROM public.user_engagement) as total_engagement_events;

-- ============================================================
-- FILM THEORY NAVIGATOR - RLS
-- Team: Navigator
-- Purpose:
-- - Enable Row Level Security on all project tables
-- ============================================================

alter table public.admin_users enable row level security;
alter table public.theories enable row level security;
alter table public.vocabulary_terms enable row level security;
alter table public.quizzes enable row level security;
alter table public.quiz_questions enable row level security;
alter table public.quiz_attempts enable row level security;
alter table public.quiz_answers enable row level security;
alter table public.analysis_templates enable row level security;
alter table public.films enable row level security;
alter table public.film_theory_map enable row level security;
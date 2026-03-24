-- ============================================================
-- FILM THEORY NAVIGATOR - SCHEMA
-- Team: Navigator
-- Purpose:
-- - Extensions
-- - Functions
-- - Tables
-- - Indexes
-- - Triggers
-- ============================================================

-- ============================================================
-- 1. EXTENSIONS
-- ============================================================
create extension if not exists pgcrypto;

-- ============================================================
-- 2. FUNCTIONS
-- ============================================================
create or replace function public.update_modified_column()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
-- 3. TABLES
-- ============================================================

-- ------------------------------------------------------------
-- admin_users
-- ------------------------------------------------------------
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade
);

-- ------------------------------------------------------------
-- theories
-- ------------------------------------------------------------
create table if not exists public.theories (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text not null unique,
  category text,
  overview text,
  history text,
  key_points jsonb default '[]'::jsonb,
  key_thinkers jsonb default '[]'::jsonb,
  representative_films jsonb default '[]'::jsonb,
  citations jsonb default '[]'::jsonb,
  status text not null default 'draft',
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint theories_status_check check (status in ('draft', 'published'))
);

-- ------------------------------------------------------------
-- vocabulary_terms
-- ------------------------------------------------------------
create table if not exists public.vocabulary_terms (
  id uuid primary key default gen_random_uuid(),
  term text not null unique,
  definition text not null,
  example_usage text,
  difficulty text,
  tags jsonb not null default '[]'::jsonb,
  related_terms jsonb not null default '[]'::jsonb,
  status text not null default 'draft',
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint vocabulary_terms_status_check check (status in ('draft', 'published')),
  constraint vocabulary_terms_term_not_blank check (btrim(term) <> ''),
  constraint vocabulary_terms_definition_not_blank check (btrim(definition) <> '')
);

-- ------------------------------------------------------------
-- quizzes
-- ------------------------------------------------------------
create table if not exists public.quizzes (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  topic text not null,
  description text,
  difficulty text,
  status text not null default 'draft',
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint quizzes_status_check check (status in ('draft', 'published')),
  constraint quizzes_title_not_blank check (btrim(title) <> ''),
  constraint quizzes_topic_not_blank check (btrim(topic) <> '')
);

-- ------------------------------------------------------------
-- quiz_questions
-- ------------------------------------------------------------
create table if not exists public.quiz_questions (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  question_text text not null,
  option_a text not null,
  option_b text not null,
  option_c text not null,
  option_d text not null,
  correct_option text not null,
  explanation text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint quiz_questions_correct_option_check check (correct_option in ('A', 'B', 'C', 'D')),
  constraint quiz_questions_text_not_blank check (btrim(question_text) <> ''),
  constraint quiz_questions_option_a_not_blank check (btrim(option_a) <> ''),
  constraint quiz_questions_option_b_not_blank check (btrim(option_b) <> ''),
  constraint quiz_questions_option_c_not_blank check (btrim(option_c) <> ''),
  constraint quiz_questions_option_d_not_blank check (btrim(option_d) <> '')
);

-- ------------------------------------------------------------
-- quiz_attempts
-- ------------------------------------------------------------
create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  quiz_id uuid not null references public.quizzes(id) on delete cascade,
  user_id uuid references auth.users(id) on delete set null,
  score integer,
  total_questions integer,
  percent numeric(5,2),
  started_at timestamptz not null default now(),
  completed_at timestamptz,
  constraint quiz_attempts_score_nonnegative check (score is null or score >= 0),
  constraint quiz_attempts_total_nonnegative check (total_questions is null or total_questions >= 0),
  constraint quiz_attempts_percent_range check (percent is null or (percent >= 0 and percent <= 100)),
  constraint quiz_attempts_completed_after_started check (completed_at is null or completed_at >= started_at)
);

-- ------------------------------------------------------------
-- quiz_answers
-- ------------------------------------------------------------
create table if not exists public.quiz_answers (
  attempt_id uuid not null references public.quiz_attempts(id) on delete cascade,
  question_id uuid not null references public.quiz_questions(id) on delete cascade,
  selected_option text,
  is_correct boolean,
  primary key (attempt_id, question_id),
  constraint quiz_answers_selected_option_check check (
    selected_option is null or selected_option in ('A', 'B', 'C', 'D')
  )
);

-- ------------------------------------------------------------
-- analysis_templates
-- ------------------------------------------------------------
create table if not exists public.analysis_templates (
  id uuid primary key default gen_random_uuid(),
  theory_id uuid not null references public.theories(id) on delete cascade,
  title text not null,
  template_body jsonb not null default '{}'::jsonb,
  status text not null default 'draft',
  published_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint analysis_templates_status_check check (status in ('draft', 'published')),
  constraint analysis_templates_title_not_blank check (btrim(title) <> '')
);

-- ------------------------------------------------------------
-- films
-- ------------------------------------------------------------
create table if not exists public.films (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  year integer,
  director text,
  synopsis text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint films_title_not_blank check (btrim(title) <> ''),
  constraint films_year_reasonable check (year is null or (year >= 1888 and year <= 2100))
);

-- ------------------------------------------------------------
-- film_theory_map
-- ------------------------------------------------------------
create table if not exists public.film_theory_map (
  film_id uuid not null references public.films(id) on delete cascade,
  theory_id uuid not null references public.theories(id) on delete cascade,
  primary key (film_id, theory_id)
);

-- ============================================================
-- 4. INDEXES
-- ============================================================
create index if not exists idx_theories_status on public.theories(status);
create index if not exists idx_theories_category on public.theories(category);
create index if not exists idx_theories_published_at on public.theories(published_at);
create index if not exists idx_theories_created_by on public.theories(created_by);

create index if not exists idx_vocabulary_terms_status on public.vocabulary_terms(status);
create index if not exists idx_vocabulary_terms_published_at on public.vocabulary_terms(published_at);
create index if not exists idx_vocabulary_terms_created_by on public.vocabulary_terms(created_by);

create index if not exists idx_quizzes_status on public.quizzes(status);
create index if not exists idx_quizzes_topic on public.quizzes(topic);
create index if not exists idx_quizzes_published_at on public.quizzes(published_at);
create index if not exists idx_quizzes_created_by on public.quizzes(created_by);

create index if not exists idx_quiz_questions_quiz_id on public.quiz_questions(quiz_id);

create index if not exists idx_quiz_attempts_quiz_id on public.quiz_attempts(quiz_id);
create index if not exists idx_quiz_attempts_user_id on public.quiz_attempts(user_id);
create index if not exists idx_quiz_attempts_started_at on public.quiz_attempts(started_at);

create index if not exists idx_quiz_answers_question_id on public.quiz_answers(question_id);

create index if not exists idx_analysis_templates_theory_id on public.analysis_templates(theory_id);
create index if not exists idx_analysis_templates_status on public.analysis_templates(status);
create index if not exists idx_analysis_templates_published_at on public.analysis_templates(published_at);

create index if not exists idx_films_title on public.films(title);

create index if not exists idx_film_theory_map_theory_id on public.film_theory_map(theory_id);

-- ============================================================
-- 5. TRIGGERS
-- ============================================================
drop trigger if exists update_theories_updated_at on public.theories;
create trigger update_theories_updated_at
before update on public.theories
for each row
execute procedure public.update_modified_column();

drop trigger if exists update_vocabulary_terms_updated_at on public.vocabulary_terms;
create trigger update_vocabulary_terms_updated_at
before update on public.vocabulary_terms
for each row
execute procedure public.update_modified_column();

drop trigger if exists update_quizzes_updated_at on public.quizzes;
create trigger update_quizzes_updated_at
before update on public.quizzes
for each row
execute procedure public.update_modified_column();

drop trigger if exists update_quiz_questions_updated_at on public.quiz_questions;
create trigger update_quiz_questions_updated_at
before update on public.quiz_questions
for each row
execute procedure public.update_modified_column();

drop trigger if exists update_analysis_templates_updated_at on public.analysis_templates;
create trigger update_analysis_templates_updated_at
before update on public.analysis_templates
for each row
execute procedure public.update_modified_column();

drop trigger if exists update_films_updated_at on public.films;
create trigger update_films_updated_at
before update on public.films
for each row
execute procedure public.update_modified_column();
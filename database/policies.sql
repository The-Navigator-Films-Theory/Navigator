-- ============================================================
-- FILM THEORY NAVIGATOR - POLICIES
-- Team: Navigator
-- Purpose:
-- - Public read access for published content
-- - Admin management access
-- - Quiz attempt / answer submission access
-- ============================================================

-- ------------------------------------------------------------
-- admin_users
-- ------------------------------------------------------------
drop policy if exists "admins can read admin_users" on public.admin_users;
create policy "admins can read admin_users"
on public.admin_users
for select
to public
using (auth.uid() = user_id);

-- ------------------------------------------------------------
-- theories
-- ------------------------------------------------------------
drop policy if exists "admins can delete theories" on public.theories;
create policy "admins can delete theories"
on public.theories
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can insert theories" on public.theories;
create policy "admins can insert theories"
on public.theories
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can update theories" on public.theories;
create policy "admins can update theories"
on public.theories
for update
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "public can read published theories" on public.theories;
create policy "public can read published theories"
on public.theories
for select
to public
using (status = 'published');

-- ------------------------------------------------------------
-- vocabulary_terms
-- ------------------------------------------------------------
drop policy if exists "public can read published vocabulary_terms" on public.vocabulary_terms;
create policy "public can read published vocabulary_terms"
on public.vocabulary_terms
for select
to public
using (status = 'published');

drop policy if exists "admins can insert vocabulary_terms" on public.vocabulary_terms;
create policy "admins can insert vocabulary_terms"
on public.vocabulary_terms
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can update vocabulary_terms" on public.vocabulary_terms;
create policy "admins can update vocabulary_terms"
on public.vocabulary_terms
for update
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete vocabulary_terms" on public.vocabulary_terms;
create policy "admins can delete vocabulary_terms"
on public.vocabulary_terms
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

-- ------------------------------------------------------------
-- quizzes
-- ------------------------------------------------------------
drop policy if exists "public can read published quizzes" on public.quizzes;
create policy "public can read published quizzes"
on public.quizzes
for select
to public
using (status = 'published');

drop policy if exists "admins can insert quizzes" on public.quizzes;
create policy "admins can insert quizzes"
on public.quizzes
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can update quizzes" on public.quizzes;
create policy "admins can update quizzes"
on public.quizzes
for update
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete quizzes" on public.quizzes;
create policy "admins can delete quizzes"
on public.quizzes
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

-- ------------------------------------------------------------
-- quiz_questions
-- ------------------------------------------------------------
drop policy if exists "public can read quiz_questions for published quizzes" on public.quiz_questions;
create policy "public can read quiz_questions for published quizzes"
on public.quiz_questions
for select
to public
using (
  exists (
    select 1
    from public.quizzes q
    where q.id = quiz_questions.quiz_id
      and q.status = 'published'
  )
);

drop policy if exists "admins can insert quiz_questions" on public.quiz_questions;
create policy "admins can insert quiz_questions"
on public.quiz_questions
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can update quiz_questions" on public.quiz_questions;
create policy "admins can update quiz_questions"
on public.quiz_questions
for update
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete quiz_questions" on public.quiz_questions;
create policy "admins can delete quiz_questions"
on public.quiz_questions
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

-- ------------------------------------------------------------
-- analysis_templates
-- ------------------------------------------------------------
drop policy if exists "public can read published analysis_templates" on public.analysis_templates;
create policy "public can read published analysis_templates"
on public.analysis_templates
for select
to public
using (
  status = 'published'
  and exists (
    select 1
    from public.theories t
    where t.id = analysis_templates.theory_id
      and t.status = 'published'
  )
);

drop policy if exists "admins can insert analysis_templates" on public.analysis_templates;
create policy "admins can insert analysis_templates"
on public.analysis_templates
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can update analysis_templates" on public.analysis_templates;
create policy "admins can update analysis_templates"
on public.analysis_templates
for update
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete analysis_templates" on public.analysis_templates;
create policy "admins can delete analysis_templates"
on public.analysis_templates
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

-- ------------------------------------------------------------
-- films
-- ------------------------------------------------------------
drop policy if exists "public can read films" on public.films;
create policy "public can read films"
on public.films
for select
to public
using (true);

drop policy if exists "admins can insert films" on public.films;
create policy "admins can insert films"
on public.films
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can update films" on public.films;
create policy "admins can update films"
on public.films
for update
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
)
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete films" on public.films;
create policy "admins can delete films"
on public.films
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

-- ------------------------------------------------------------
-- film_theory_map
-- ------------------------------------------------------------
drop policy if exists "public can read film_theory_map for published theories" on public.film_theory_map;
create policy "public can read film_theory_map for published theories"
on public.film_theory_map
for select
to public
using (
  exists (
    select 1
    from public.theories t
    where t.id = film_theory_map.theory_id
      and t.status = 'published'
  )
);

drop policy if exists "admins can insert film_theory_map" on public.film_theory_map;
create policy "admins can insert film_theory_map"
on public.film_theory_map
for insert
to public
with check (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

drop policy if exists "admins can delete film_theory_map" on public.film_theory_map;
create policy "admins can delete film_theory_map"
on public.film_theory_map
for delete
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);

-- ------------------------------------------------------------
-- quiz_attempts
-- ------------------------------------------------------------
drop policy if exists "anyone can insert quiz_attempts" on public.quiz_attempts;
create policy "anyone can insert quiz_attempts"
on public.quiz_attempts
for insert
to public
with check (true);

drop policy if exists "users can read their own quiz_attempts" on public.quiz_attempts;
create policy "users can read their own quiz_attempts"
on public.quiz_attempts
for select
to public
using (
  user_id = auth.uid()
  or user_id is null
);

-- ------------------------------------------------------------
-- quiz_answers
-- ------------------------------------------------------------
drop policy if exists "anyone can insert quiz_answers" on public.quiz_answers;
create policy "anyone can insert quiz_answers"
on public.quiz_answers
for insert
to public
with check (true);

drop policy if exists "users can read quiz_answers for their attempts" on public.quiz_answers;
create policy "users can read quiz_answers for their attempts"
on public.quiz_answers
for select
to public
using (
  exists (
    select 1
    from public.quiz_attempts qa
    where qa.id = quiz_answers.attempt_id
      and (qa.user_id = auth.uid() or qa.user_id is null)
  )
);

-- ------------------------------------------------------------
-- user_engagement
-- ------------------------------------------------------------
drop policy if exists "anyone can insert user_engagement" on public.user_engagement;
create policy "anyone can insert user_engagement"
on public.user_engagement
for insert
to public
with check (true);

drop policy if exists "users can read their own engagement" on public.user_engagement;
create policy "users can read their own engagement"
on public.user_engagement
for select
to public
using (user_id = auth.uid() or auth.uid() = '00000000-0000-0000-0000-000000000000');

drop policy if exists "admins can read all engagement" on public.user_engagement;
create policy "admins can read all engagement"
on public.user_engagement
for select
to public
using (
  exists (
    select 1
    from public.admin_users au
    where au.user_id = auth.uid()
  )
);
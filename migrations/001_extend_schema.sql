-- Migration: Extend Navigator schema to include all data fields
-- This migration adds missing columns to existing tables and creates new ones

-- ============================================
-- 1. ALTER THEORIES TABLE
-- ============================================
ALTER TABLE theories ADD COLUMN IF NOT EXISTS description TEXT;
ALTER TABLE theories ADD COLUMN IF NOT EXISTS color TEXT;

-- ============================================
-- 2. ALTER VOCABULARY_TERMS TABLE
-- ============================================
ALTER TABLE vocabulary_terms ADD COLUMN IF NOT EXISTS pronunciation TEXT;
ALTER TABLE vocabulary_terms ADD COLUMN IF NOT EXISTS etymology TEXT;
ALTER TABLE vocabulary_terms ADD COLUMN IF NOT EXISTS related_theories TEXT[];
ALTER TABLE vocabulary_terms ADD COLUMN IF NOT EXISTS featured BOOLEAN DEFAULT false;

-- ============================================
-- 3. ALTER FILMS TABLE
-- ============================================
ALTER TABLE films ADD COLUMN IF NOT EXISTS film_id TEXT UNIQUE;
ALTER TABLE films ADD COLUMN IF NOT EXISTS poster_url TEXT;
ALTER TABLE films ADD COLUMN IF NOT EXISTS relevant_theories TEXT[];

-- ============================================
-- 4. CREATE THEORISTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS theorists (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  birth_year INTEGER,
  death_year INTEGER,
  nationality TEXT,
  bio TEXT,
  key_works TEXT[],
  associated_theories TEXT[],
  image TEXT,
  key_contributions TEXT[],
  status TEXT DEFAULT 'published',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- 5. CREATE CITATIONS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS citations (
  id TEXT PRIMARY KEY,
  type TEXT,
  title TEXT NOT NULL,
  author TEXT,
  year INTEGER,
  journal TEXT,
  publisher TEXT,
  pages TEXT,
  theory_ids TEXT[],
  description TEXT,
  academic_significance TEXT,
  key_quotes TEXT[],
  critiques TEXT[],
  key_concepts_explained JSON,
  status TEXT DEFAULT 'published',
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- ============================================
-- 6. ADD RLS POLICIES (if not already exists)
-- ============================================
ALTER TABLE theorists ENABLE ROW LEVEL SECURITY;
ALTER TABLE citations ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all users to select theorists
CREATE POLICY "Allow public read access to theorists" ON theorists
FOR SELECT USING (status = 'published' OR true);

-- Create policy to allow all users to select citations
CREATE POLICY "Allow public read access to citations" ON citations
FOR SELECT USING (status = 'published' OR true);

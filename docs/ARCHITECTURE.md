# Architecture

## Overview

Navigator is a React + TypeScript single-page application for browsing film and media theory content.
The app uses Supabase as the primary backend for persisted content and reads most UI data through query helpers in the lib layer.

## Stack

- Frontend: React 19, TypeScript, Vite
- Data fetching: TanStack Query
- Routing: React Router
- Backend: Supabase (Postgres + REST)
- Styling: SCSS modules + global SCSS variables

## High-Level Layers

- Routing and app bootstrapping: [src/app/router.tsx](../src/app/router.tsx), [src/main.tsx](../src/main.tsx)
- Pages: [src/pages](../src/pages)
- Reusable UI components: [src/components](../src/components)
- Data access/query layer: [src/lib/queries](../src/lib/queries)
- Supabase client config: [src/lib/supabase](../src/lib/supabase)
- Types: [src/types](../src/types)
- Scripts: [src/scripts](../src/scripts)

## Data Flow

1. Source content exists in raw TypeScript/JSON datasets.
2. Publish pipeline normalizes and pushes content to Supabase:
	- [src/scripts/publish_data.ts](../src/scripts/publish_data.ts)
3. UI fetches published content from Supabase through typed query helpers.
4. Components render normalized view models (for example, films and citations in theory modal).

## Core Tables

- theories
- vocabulary_terms
- films
- theorists
- citations

Migration for these structures: [migrations/001_extend_schema.sql](../migrations/001_extend_schema.sql)

## Key Architectural Decisions

- Supabase is treated as runtime source for UI content.
- Query layer performs normalization so UI components stay simple.
- Re-runnable data publishing is supported via upserts (including films by film_id).

## Risks and Constraints

- If raw source fields and DB schema drift, publish script and types can desync.
- Policies in migration are not idempotent by name; rerunning policy creation may require manual cleanup.
- Large UI chunks currently trigger Vite size warnings; consider route-level code splitting.


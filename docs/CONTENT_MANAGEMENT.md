# Content Management

## Source of Truth

- Authoring sources live under [src/data/raw-data](../src/data/raw-data).
- Built JSON artifact: [src/data/raw_data.json](../src/data/raw_data.json).
- Runtime app content is read from Supabase tables.

## Update Workflow

1. Edit source data in [src/data/raw-data](../src/data/raw-data).
2. Ensure generated JSON is up to date.
3. Run publish pipeline:

```bash
npx tsx src/scripts/publish_data.ts
```

4. Verify row counts and sample records in Supabase Table Editor.
5. Smoke test UI pages (theory cards, modal, vocabulary).

## Publish Script Behavior

Script: [src/scripts/publish_data.ts](../src/scripts/publish_data.ts)

- theories: upsert by slug
- vocabulary_terms: upsert by term
- films: upsert by film_id
- theorists: upsert by id
- citations: upsert by id

## Required Environment Variables

- VITE_SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY

## Validation Checklist

- Theories include description and color.
- Vocabulary includes pronunciation/etymology/related_theories/featured.
- Films include poster_url and relevant_theories.
- Theory modal shows films and citations when data exists.

## Common Issues

- Missing module when running TypeScript script:
	- Use tsx command above.
- Duplicate films key errors:
	- Ensure films uses upsert on film_id.
- Missing citations in UI:
	- Confirm citations table has theory_ids linked to the selected theory slug.


# Progress Repo Current

Date: 2026-03-24
Branch: chore/data-migration

## Completed Recently

1. Expanded DB schema for richer content and citations support.
2. Updated TypeScript DB/domain types for new fields.
3. Upgraded publish pipeline to sync theories, vocabulary, films, theorists, and citations.
4. Added theory query normalization for films/citations to improve UI reliability.
5. Refreshed theory library UX:
	- richer cards
	- category pill filters
	- modal detail experience
6. Added modal action footer buttons:
	- Test Your Knowledge
	- Analyze a Film
	- Join Discussion

## Validation State

- Project builds successfully with npm run build.
- Publish script runs with npx tsx src/scripts/publish_data.ts.
- Working tree currently clean.

## Next Recommended Tasks

1. Fill citation links for theories that still show sparse citation content.
2. Add route handlers for modal footer actions.
3. Add targeted tests for query normalization logic.
4. Reduce bundle size warning with code splitting.


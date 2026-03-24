# Git Strategy

## Branching

- main: stable integration branch
- feature/chore branches: active work
- Current working branch example: chore/data-migration

## Commit Style

Use short, meaningful commits with scope prefixes.

Examples:

- db(schema): extend theories and add citations table
- types(database): add citations table types
- script(publish): sync theorists and citations to Supabase
- query(theories): add film/citation normalizers and fetching
- components(filters): add category pills and improved inputs

## Pull Request Guidelines

- Keep PR focused to one theme if possible.
- Include testing notes:
	- build output
	- key UI validation points
	- data migration/publish steps used
- Link related docs updates when behavior changes.

## Suggested Commit Grouping

1. Migration/schema changes
2. Types and query layer
3. Data scripts
4. UI components/pages
5. Styling/theme

## Safety Rules

- Never rewrite shared history unless explicitly coordinated.
- Prefer non-interactive git commands for reproducibility.
- Avoid bundling unrelated refactors with functional changes.


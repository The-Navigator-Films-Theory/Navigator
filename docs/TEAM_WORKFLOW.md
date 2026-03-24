# Team Workflow

## Daily Flow

1. Pull latest branch updates.
2. Run local checks:

```bash
npm install
npm run build
```

3. For data changes, run publish script:

```bash
npx tsx src/scripts/publish_data.ts
```

4. Validate key UI paths in browser.
5. Commit in small, meaningful slices.

## Feature Development Flow

1. Create branch from main or active integration branch.
2. Implement one coherent unit of change.
3. Update docs when behavior or workflow changes.
4. Open PR with:
	- what changed
	- how tested
	- migration/data impact

## Review Checklist

- Build passes.
- No accidental schema/script drift.
- Query layer maps DB JSON safely.
- UI handles missing data gracefully.

## Handoff Notes Format

- Summary
- Files changed
- Commands run
- Known risks
- Next steps


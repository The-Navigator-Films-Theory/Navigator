# Technical Debt

## High Priority

1. Modal footer buttons are visual-only and need route/action handlers.
2. Some theories rely on sparse citation linkage and need content enrichment.
3. Migration policies are not fully idempotent if replayed repeatedly.

## Medium Priority

1. Add unit tests for theory mapper normalization.
2. Add integration checks for publish pipeline field coverage.
3. Reduce large bundle warning via route-level splitting.

## Low Priority

1. Align naming consistency between raw data keys and DB keys.
2. Expand docs with diagrams and lifecycle examples.

## Suggested Owners

- Data pipeline/schema: backend/data owner
- Query normalizers: app data layer owner
- Modal interactions/routes: frontend owner
- Docs/process: tech lead and PM


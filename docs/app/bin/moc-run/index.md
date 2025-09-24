# bin/moc-run

CLI entry for `moc-run`.

Thin wrapper around the `tsx` runtime that auto-selects a default script and forwards flags untouched.

Used mostly to run a typescript/javascript file, useful for testing.

## Remarks

Looks for `dev.ts` or `dev.tsx` when no entry point is supplied, resolves relative paths for cross-platform usage, and exits if no script can be found.

## Example

```bash
npx moc-run
npx moc-run src/playground.tsx --watch
```

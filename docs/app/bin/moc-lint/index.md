# bin/moc-lint

CLI entry for `moc-lint`.

Resolves the project ESLint binary and runs it with shared defaults.

## Remarks

Falls back to `--max-warnings=0 .` when no arguments are provided so teams get fail-fast linting without extra flags.

## Example

```bash
npx moc-lint
npx moc-lint src --fix
```

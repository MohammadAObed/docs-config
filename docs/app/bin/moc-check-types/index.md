# bin/moc-check-types

CLI entry for `moc-check-types`.

Runs the local TypeScript compiler in no-emit mode to surface type errors across the project.

## Remarks

Resolves the `tsc` binary shipped with the consumer (or the config package) and defaults to `--noEmit`, making it safe in CI.

## Example

```bash
npx moc-check-types
npx moc-check-types --project tsconfig.build.json
```

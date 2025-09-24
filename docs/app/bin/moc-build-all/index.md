# bin/moc-build-all

CLI entry for `moc-build-all`.

Exposes a reusable `run` function so the TypeDoc pipeline can generate API docs while the script remains executable.

Builds every package with the shared tsup configuration and runs the size check.

## Remarks

When invoked from the CLI the function forwards arguments to `tsup` and exits with the size check status.

## Example

```bash
npx moc-build-all --watch
```

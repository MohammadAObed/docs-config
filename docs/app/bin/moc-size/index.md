# bin/moc-size

CLI entry for `moc-size`.

Wraps the Size Limit API to measure built artifacts (folders or globs) with preset-aware configuration.

## Remarks

Reads the consumer’s `size-limit` field in `package.json`, expands folders to file lists, and compares
results to the configured threshold. Exits with a non-zero status when the bundle exceeds the limit.

## Example

```bash
npx moc-size
npx moc-size dist --limit 5 kB
```

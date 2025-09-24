# package.json

`package.json` is the manifest that tells Node.js, bundlers, and tooling how to run and build your package.

We will be talking about your package.json, not ours, about what to add & modify:

## Prettier configuration

Point your project at the shared Prettier config shipped with `@mohammad_obed/config`:

Copy content below to your package.json

```json
{
  "prettier": "@mohammad_obed/config/prettier.config"
}
```

That keeps Prettier extension & `prettier --check` and editor formatters aligned with the same rules used across every consumer project.

## Optional: size-limit guardrail

If you use `tsup` (or another bundler) to emit your build artifacts, add a `size-limit` section to catch bundle bloat in CI:

```json
{
  "size-limit": [
    {
      "path": "dist",
      "limit": "2 kB"
    }
  ]
}
```

Increase the `limit` to the maximum compressed bundle size you’re willing to ship; the default example uses `2 kB` so you configure a realistic threshold before enabling CI checks.

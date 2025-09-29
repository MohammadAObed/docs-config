# Variable: default

> `const` **default**: `Config`

Defined in: [prettier.config.js:21](https://github.com/MohammadAObed/config/blob/6e970d6665038ee2c3213da33400ad865a471404/prettier.config.js#L21)

The only Prettier configuration to use in your project’s `package.json`.

## Remarks

- Enforces consistent formatting across all projects.
- Matches ESLint rules to avoid conflicts (e.g., via `eslint-config-prettier`).
- Intended to be the single source of truth — extend or override locally only if needed.

## Example

- Add this line of code to your project's `package.json`:
```json
"prettier": "@mohammad_obed/config/prettier.config"
```

## See

[Prettier Options](https://prettier.io/docs/en/options.html)

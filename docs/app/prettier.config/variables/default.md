# Variable: default

> `const` **default**: `Config`

Defined in: [prettier.config.js:21](https://github.com/MohammadAObed/config/blob/1bf302eda0dd4bb4da2ae9c7dfbbb1ce84a7ad48/prettier.config.js#L21)

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

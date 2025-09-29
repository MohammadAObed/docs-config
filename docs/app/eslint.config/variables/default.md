# Variable: default

> **default**: `ConfigArray`

Defined in: [eslint.config.ts:42](https://github.com/MohammadAObed/config/blob/6e970d6665038ee2c3213da33400ad865a471404/eslint.config.ts#L42)

The only eslint configuration to import and use in your project’s `eslint.config.ts` file.

## Remarks

- Combines TypeScript, React, Hooks, JSON, CSS, Import, and Prettier rules.
- Organized as a flat config using `typescript-eslint.config`.
- Applied in layers:
  - Global ignores
  - TS/React/Imports rules for TS/TSX files
  - JSON rules for `*.json`
  - CSS rules for `*.css`
  - Prettier last to resolve stylistic conflicts

## Example

- Create `eslint.config.ts` in your project root folder, then add the code below
```ts
import config from "@mohammad_obed/config/eslint.config";

export default config;
```

## See

[https://eslint.org/docs/latest/use/configure/configuration-files-new](https://eslint.org/docs/latest/use/configure/configuration-files-new)

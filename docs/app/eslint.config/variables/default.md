# Variable: default

> **default**: `ConfigArray`

Defined in: [eslint.config.ts:42](https://github.com/MohammadAObed/config/blob/1bf302eda0dd4bb4da2ae9c7dfbbb1ce84a7ad48/eslint.config.ts#L42)

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

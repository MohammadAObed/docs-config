# tsconfig.base

**Defined in:** [tsconfig.base.json](https://github.com/MohammadAObed/config/blob/main/tsconfig.base.json)

A reusable baseline TypeScript config for modern ESM projects and packages. It aligns your editors, bundlers, and CI with the same strict rules used across @mohammad_obed/config.

## Usage

2. Create or update your project `tsconfig.json`.
3. Extend the base config and set your project-specific roots, aliases, and include globs:

```json
{
  "extends": "@mohammad_obed/config/tsconfig.base",
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  },
  "include": ["src"]
}
```

The base file already excludes `node_modules`, `dist`, and `docs`, so most library and app layouts are covered out of the box.

### Why `baseUrl` is required

Setting `"baseUrl": "src"` anchors module resolution to your source folder. Without it, the wildcard path alias would be unresolved. Choose whatever folder sits at the root of your TypeScript sources (`"."`, `"packages/*/src"`, etc.).

### Why the `@/*` path alias is recommended

```json
"paths": {
  "@/*": ["*"]
}
```

This alias turns imports like `../../components/Button` into `@/components/Button`, keeping imports shallow as your project grows. The wildcard pattern mirrors the folder structure under `baseUrl`, so no extra maintenance is needed when files move around.

## Customizing

It is common to layer project specifics on top of the base file:

- Provide `paths`, `types`, or `baseUrl` to match your module layout.
- Toggle `noEmit` to `false` if you rely on `tsc` to produce `.d.ts` files directly.
- For React Native or DOM-less environments, adjust the `lib` array to match the runtime.

Because the config is exported at `@mohammad_obed/config/tsconfig.base.json`, every consumer stays on the same defaults while still being able to override only what is necessary.

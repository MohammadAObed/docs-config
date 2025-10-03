# Function: default()

> **default**(`options`): `Options` \| `Options`[] \| (`overrideOptions`) => `MaybePromise`\<`Options` \| `Options`[]\>

Defined in: [tsup.config.js:30](https://github.com/MohammadAObed/config/blob/0959a1c158f2051fc5e6ed358d3899d64d88dfc3/tsup.config.js#L30)

The only tsup build configuration to import and use in your project’s `tsup.config.ts` file.

## Parameters

### options

`Options`

## Returns

`Options` \| `Options`[] \| (`overrideOptions`) => `MaybePromise`\<`Options` \| `Options`[]\>

## Remarks

- Outputs modern ESM (`.mjs`) bundles with type declarations.
- Cleans previous builds and applies tree-shaking by default.
- no `sourcemap`, and its `minified`.
- Accepts extra Options \| tsup options via the `options` parameter for extension.

## Example

- Create `tsup.config.ts` in your project root folder, then add the code below
```ts
import defineConfig from "@mohammad_obed/config/tsup.config";

export default defineConfig({
  entry: ["src"], // add/edit subpaths as needed
  outDir: "dist",
});
```

## See

[tsup Documentation](https://tsup.egoist.dev)

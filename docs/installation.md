---
sidebar_position: 2
---

# Installation

This section explains how to install and set up **@mohammad_obed/config** from scratch in any project.

## 1. Install the package

Run the following command in your project root:

```bash
npm i -D @mohammad_obed/config
```

This will add the package as a dev dependency.

---

## 2. Initial configuration

1. Make sure you have [**Prettier** & **ESLint**](https://mo-docs-common.netlify.app/docs/installations#install-vscode-extensions) extensions installed in VS Code.
2. Open the installed package inside `node_modules/@mohammad_obed/config`.
3. Copy the contents of `vscode.settings.json` into your project’s `.vscode/settings.json` file.
   - If `.vscode` folder does not exist in your project root, create it.
   - Add `.vscode/settings.json` to `.gitignore` so it does not get pushed to your repo.

This file ensures consistent ESLint and Prettier behavior across projects.

---

## 3. TypeScript configuration

Create a `tsconfig.json` in the root folder of your project:

```json
{
  "extends": "@mohammad_obed/config/tsconfig.base.json"
  // You can add your own settings here...
}
```

VS Code will read this configuration and apply the settings automatically.  
You can also run the following command to check types:

```bash
npx moc-check-types
```

:::tip Recommended
Always add these options for cleaner imports:

```json
"compilerOptions": {
  "baseUrl": "src",
  "paths": {
    "@/*": ["*"]
  }
}
```

This allows importing like:

```typescript
import { getRandomNumber } from "@/utils/number";
```

instead of long relative paths like `../../utils/number`.
:::

---

## 4. Prettier configuration

In your `package.json`, add:

```json
"prettier": "@mohammad_obed/config/prettier.config"
```

Make sure you have the **Prettier extension** installed in VS Code.  
Format your code using `Ctrl+Shift+P → Format Document`.

---

## 5. ESLint configuration

In the root of your project, create a file `eslint.config.ts` with:

```typescript
import config from "@mohammad_obed/config/eslint.config";
export default config;
```

VS Code will automatically pick it up.  
You can also lint manually using:

```bash
npx moc-lint
```

Works across TypeScript, React, and React Native.

---

## Important Statement

This package does **not** configure explicit paths for TypeScript, ESLint, or Prettier at the package level.  
Always define project-level paths (e.g., `baseUrl`, `paths`) in **your app's** `tsconfig.json` to avoid paths resolving to the package root.

**Bad (will resolve inside node_modules):**

```json
"baseUrl": "./node_modules/@mohammad_obed/config/src"
```

**Good (set in your project):**

```json
"compilerOptions": {
  "baseUrl": "src",
  "paths": { "@/*": ["*"] }
}
```

---

## 6. Troubleshooting

- If TypeScript is not picking changes:  
  `Ctrl+Shift+P → TypeScript: Restart TS Server`

- If ESLint is not updating:  
  `Ctrl+Shift+P → ESLint: Restart ESLint Server`

- If nothing works:  
  `Ctrl+Shift+P → Developer: Reload Window` or restart VS Code.

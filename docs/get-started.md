---
sidebar_position: 1
---

# Get Started

Welcome temp to **@mohammad_obed/config** — a unified package to standardize ESLint, TypeScript, and Prettier across projects, with small CLI helpers.

It's a one install with very small configuration, then you dont have to worry about the hell of configuring these tools again and again for every new project with too much boilerplate. Its the same config shared across all projects.

This documentation will guide you step by step through installation, configuration, and usage of the package. It also provides a mirror of the package’s files and folders, ensuring complete transparency and reference for every part of the project.

This guide takes you **step by step**:

- Installing and configuring the package
- Setting up VS Code for seamless formatting and linting
- Extending and customizing TypeScript, ESLint, and Prettier settings for your project
- Understanding provided CLI helpers (`moc-check-types`, `moc-lint`)
- Exploring mirrored files and folders for deeper insights

:::caution
Some guides reflect personal workflow and may differ from official docs. Always cross-check with the latest tool documentation.
:::

<!--
# Get Started

Welcome to **@mohammad_obed/config** — one package to rule ESLint, TypeScript, and Prettier, plus tiny CLIs.
This documentation will guide you through installation, setup, and usage to keep your projects consistent and clean.

---

## Installation

Run this command in your project:

```bash
npm i -D @mohammad_obed/config
```

---

## Usage

### Important Statement

This package does **not** configure explicit paths for TypeScript, ESLint, or Prettier.
Paths might otherwise resolve to the package root folder instead of your project root.

**Example:**

```json
"baseUrl": "src"
```

If configured directly, it could become:

```json
"baseUrl": "./node_modules/@mohammad_obed/config/src"
```

---

## Initial Configuration

1. Ensure you have **Prettier** and **ESLint** extensions installed in VS Code.
2. Copy the content of `node_modules/@mohammad_obed/config/vscode.settings.json`
   into your project’s `.vscode/settings.json` file.
   - Create `.vscode/settings.json` if it doesn’t exist.
   - Add `.vscode/settings.json` to `.gitignore` so it does not get pushed to the repo.

This ensures ESLint and Prettier are properly wired into VS Code.

---

## TypeScript Configuration

In your project root, create `tsconfig.json`:

```json
{
  "extends": "@mohammad_obed/config/tsconfig.base.json"
  // Add your own settings here
}
```

VS Code will read this file and apply the configuration.
Check types with:

```bash
npx moc-check-types
```

### Recommended Settings

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

Now you can import files like:

```ts
import { getRandomNumber } from "@/utils/number";
```

Instead of:

```ts
import { getRandomNumber } from "../../utils/number";
```

---

## Prettier Setup

In `package.json`, add:

```json
"prettier": "@mohammad_obed/config/prettier.config"
```

VS Code Prettier extension will pick this up automatically.

Format with: **Ctrl+Shift+P → Format Document**.

---

## ESLint Setup

In your project root, create `eslint.config.ts`:

```ts
import config from "@mohammad_obed/config/eslint.config";
export default config;
```

Check linting with:

```bash
npx moc-lint
```

Works across TypeScript, React, and React Native.
Production installs stay clean.

---

## Notes

- If TypeScript isn’t picking changes → **Ctrl+Shift+P → Restart TS Server**
- If ESLint isn’t picking changes → **Ctrl+Shift+P → Restart ESLint Server**
- If nothing works → **Ctrl+Shift+P → Developer: Reload Window** or restart VS Code

---

## Development

This package was built from scratch:

```bash
npm init -y
npm i typescript
```

Steps:

- Create `tsconfig.base.json` for base config (projects extend this).
- Add `.gitignore`, `README.md`, `prettier.config`, `eslint.config`, etc.
- Configure `.vscode/settings.json` for Prettier & ESLint extensions.

Arrays like `include` or `exclude` are overridden in project-level `tsconfig.json`.

---

## Cloning the Repository

To contribute:

```bash
git clone <repo>
``` -->

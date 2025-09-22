---
sidebar_position: 3
sidebar_class_name: "bottom-divider"
---

# Usage

This section explains how to use **@mohammad_obed/config** after installation.

---

## Formatting code (Prettier)

With the Prettier extension installed in VS Code, the package will apply the shared Prettier configuration automatically.

- Format your code using:  
  `Ctrl+Shift+P → Format Document`
- Or enable "Format on Save" in VS Code settings.

---

## Code quality and linting (ESLint)

VS Code will automatically show linting errors from the shared config.  
You can also run linting manually:

```bash
npx moc-lint
```

Works across TypeScript, React, and React Native projects.

---

## Type checking

To verify TypeScript correctness without relying only on VS Code:

```bash
npx moc-check-types
```

This runs a type check using the shared configuration.

---

## Recommended workflow

- Write code normally in VS Code.
- Let Prettier format on save.
- Fix issues flagged by ESLint inline.
- Before committing, run:

```bash
npx moc-lint && npx moc-check-types
```

This ensures code style and correctness across all projects consistently.

---

## Verifying that VS Code uses the shared config

To confirm the **Prettier** and **ESLint** extensions are reading configuration from `@mohammad_obed/config`:

1. **Prettier**
   - Temporarily change a setting in `node_modules/@mohammad_obed/config/prettier.config` (e.g., `"semi": false`).
   - Save any file.
   - If semicolons disappear, the extension is using the shared config.

2. **ESLint**
   - Temporarily add a rule in your project `eslint.config.ts` (e.g., `"no-console": "error"`).
   - Add a `console.log()` in code.
   - If VS Code flags it immediately, ESLint is using the shared config.

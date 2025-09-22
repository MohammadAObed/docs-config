---
sidebar_class_name: "bottom-placed-1"
---

# Development & Contributing

This section describes how the package **@mohammad_obed/config** is built, how to contribute, and how to extend it safely.

---

## 1. Cloning and setup

[Clone](https://mo-docs-common.netlify.app/docs/guides/project-creation-common#clone-the-repository-in-vs-code-using-git-bash) the repo and install dependencies:

```bash
git clone <your-repo-url>
cd config
npm install
```

---

## 2. Project structure

The package is designed to be **minimal** and **centralized**.  
Key files include:

- `eslint.config.ts` — shared ESLint configuration
- `prettier.config.js` — shared Prettier configuration
- `tsconfig.base.json` — base TypeScript configuration
- `vscode.settings.json` — VS Code workspace settings
- `bin/` — small CLI helpers (`moc-lint`, `moc-check-types`)
- `tsup.config.js` — build configuration for packaging

---

## 3. Making changes

When modifying configs:

- **TypeScript:** Edit `tsconfig.base.json` only for rules that should apply globally. Projects can extend it in their own `tsconfig.json` if needed.
- **ESLint:** Add or adjust rules in `eslint.config.ts`. Keep them general and framework-agnostic.
- **Prettier:** Update `prettier.config.js` for formatting rules. Ensure consistency across all supported projects.
- **VS Code:** Edit `vscode.settings.json` only for defaults that should be consistent across all projects.
- **CLI Helpers:** Add commands in `bin/` for common tasks like linting and type-checking.
- **Build Config:** Modify `tsup.config.js` if you need to change how the package is built or published.
- `package.json` — update dependencies, scripts, and versioning as needed.

---

## 4. Testing changes

After making edits:

- Run the local CLI helpers to verify everything still works:

  ```bash
  npx moc-lint
  npx moc-check-types
  ```

- In VS Code, verify with:
  - **TypeScript:** `Ctrl+Shift+P → TypeScript: Restart TS Server`
  - **ESLint:** `Ctrl+Shift+P → ESLint: Restart ESLint Server`
  - **General:** `Ctrl+Shift+P → Developer: Reload Window`

---

## 5. Versioning and publishing

When ready to publish a new version:

1. Update version in `package.json`.
2. run `npm install` to update version in `package-lock.json`.
3. Commit changes.
4. Run:
   ```bash
   npm publish --access public
   ```

This makes the new version available on npm.

---

## 6. Contribution guidelines

- Keep configs **minimal and consistent**.
- Avoid project-specific rules — those should be extended in consuming apps.
- Always test Prettier, ESLint, and TypeScript in a sample project before publishing.
- Document changes in `CHANGELOG.md`.

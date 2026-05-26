# Commit Message Conventions

This project follows the **Conventional Commits** standard. A well-formatted commit message helps in generating changelogs, automating version bumping, and making project history easy to read and understand.

## Commit Message Format
Each commit message should consist of a **type**, an optional **scope**, and a **subject**:

```
<type>(<optional scope>): <subject>

[optional body]
```

### Example
```bash
feat(auth): add google oauth login support
```

---

## Allowed Types

### 🚀 `feat` (Feature)
A new feature or a significant addition to the codebase.
- **Example:** `feat: add user profile page`

### 🐛 `fix` (Bug Fix)
A fix for a bug or a correction of an issue in the codebase.
- **Example:** `fix: resolve crash when loading empty list`

### 🛠️ `chore` (Chore)
Routine tasks, maintenance, dependency updates, or changes that don't modify `src` or test files. 
- **Example:** `chore: update react to v18`
- **Example:** `chore: prepare release v1.0.0`

### 📝 `docs` (Documentation)
Changes that only affect documentation (e.g., README, inline comments, or creating standard docs).
- **Example:** `docs: update HOW_RELEASE_NEW_VERSION.md`

### 💅 `style` (Style)
Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, CSS styling tweaks).
- **Example:** `style: format file with prettier`

### ♻️ `refactor` (Refactor)
A code change that neither fixes a bug nor adds a feature, but improves the structure or readability.
- **Example:** `refactor: extract user validation logic into a shared hook`

### ⚡ `perf` (Performance)
A code change that improves performance.
- **Example:** `perf: improve rendering speed of the home dashboard`

### 🧪 `test` (Test)
Adding missing tests or correcting existing tests.
- **Example:** `test: add unit tests for login component`

### 🏗️ `build` (Build)
Changes that affect the build system or external dependencies (Vite, npm, Docker).
- **Example:** `build: add terser minification`

### 🚦 `ci` (Continuous Integration)
Changes to CI configuration files and scripts (GitHub Actions, GitLab CI).
- **Example:** `ci: add github action for automated testing`

---

## Best Practices

1. **Keep the subject line short:** Aim for 50 characters or less.
2. **Use the imperative mood:** Write `fix: prevent crash` instead of `fixed crash` or `fixes crash`.
3. **No capitalization or punctuation in the subject:** Do not start the subject line with a capital letter, and do not end it with a period.
4. **Use the body for details:** If a commit requires explanation, leave a blank line after the subject and write a detailed description in the body.

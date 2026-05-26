# How to Release a New Version

This document describes the standard process for releasing a new version of the application using Git tags.

## 1. Prepare the Release
Before creating a release tag, ensure your local branch (e.g., `develop` or `main`) is up to date and you have generated the latest build artifacts (which also updates `public/version.json` with the new timestamp).

```bash
# 1. Pull the latest changes
git pull origin develop

# 2. Build the project (updates version.json and bundles assets)
npm run build

# 3. Commit the new build and version files
git add .
git commit -m "chore: prepare release v1.0.0"

# 4. Push the preparation commit
git push origin develop
```

## 2. Create the Git Tag
Use an annotated tag for releases to include a specific release message, date, and author information. It's best practice to use semantic versioning (e.g., `v1.0.0`, `v1.0.1`, `v2.0.0`).

```bash
# Create the tag (replace v1.0.0 with your actual version)
git tag -a v1.0.0 -m "Release version 1.0.0"
```

*Note: If you just want a lightweight tag without a message, you can run `git tag v1.0.0`.*

## 3. Push the Tag to Remote
Git tags are not pushed to the remote repository by standard `git push` commands. You must explicitly push the tags to trigger the release process on your Git provider.

```bash
# Push the specific tag you just created
git push origin v1.0.0

# OR, push all local tags that aren't on the remote yet
git push --tags
```

## 4. Verification
Once the tag is pushed:
1. Navigate to your repository on GitHub/GitLab.
2. Go to the **Tags** or **Releases** section.
3. You should see your newly pushed tag.
4. If you have a CI/CD pipeline (e.g., GitHub Actions, Vercel, Netlify) configured to watch for tags, pushing this tag will automatically trigger the production deployment.

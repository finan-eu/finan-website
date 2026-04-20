---
description: Generate a changelog entry from recent git commits
---

Generate a changelog entry file in `changelog/` based on recent git commits.

Follow these steps:

1. Get the current date:
   !`date +%Y-%m-%d`

2. Get recent commit history:
   !`git log --oneline -20`

3. Get the full diff stats for the relevant commits (the ones not yet documented in existing changelogs):
   !`git log --stat -5`

4. Check which commits are already documented:
   !`ls changelog/`

5. Read the latest existing changelog to see which commits are already covered, then determine which new commits need to be documented.

6. Create the changelog file at `changelog/YYYY-MM-DD-short-title.md` using this format:

   ```markdown
   # Changelog - YYYY-MM-DD

   ## Summary
   Brief description of the changes made.

   ---

   ## Changes

   ### Category
   #### Change Title
   - **Commit:** `hash`
   - Description of what changed
   - Files affected: list of files

   ---

   ## Files Changed

   ```
   file1 | change summary
   file2 | change summary
   ```

   ## Notes
   - Action items or reminders
   ```

Categorize commits by prefix:
- **feat/** or **feature/** → Features
- **fix/** → Bug Fixes
- **chore/** → Maintenance
- **ci/** or **infra/** → Infrastructure
- **docs/** → Documentation
- **refactor/** → Code Changes
- **cleanup/** → Repository Cleanup

If $ARGUMENTS is provided, use it as the short title in the filename. Otherwise, derive a short title from the commit messages.

After creating the file, run `npm run lint:fix && npm run format` to ensure code quality.

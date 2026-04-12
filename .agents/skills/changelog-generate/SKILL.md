---
name: changelog-generate
description: Generate a changelog file from recent git commits. Use when user wants to document recent changes, create release notes, summarize what was done, track project updates, or generate documentation of commits for a specific date.
---

# Changelog Generate

This skill generates changelog files from git commit history.

## When to Use

- User wants to document recent changes
- Creating release notes for a deployment
- Summarizing what work was done
- Tracking project updates over time
- User says "create changelog", "document changes", "what did we do"

## Steps

1. **Get the current date** for the filename:
   ```bash
   date +%Y-%m-%d
   ```

2. **Create changelog directory** if it doesn't exist:
   ```bash
   mkdir -p changelog
   ```

3. **Get recent commit history**:
   ```bash
   git log --oneline -<number>
   ```

4. **Analyze commits** and categorize them:
   - **feat/** or **feature/** → Features
   - **fix/** → Bug Fixes  
   - **chore/** → Maintenance
   - **ci/** or **infra/** → Infrastructure
   - **docs/** → Documentation
   - **refactor/** → Code Changes
   - **cleanup/** → Repository Cleanup

5. **Create the changelog file** at `changelog/YYYY-MM-DD.md`:
   ```markdown
   # Changelog - YYYY-MM-DD

   ## Summary
   Brief description of the changes made today.

   ## Changes

   ### Category
   #### Change Title
   - **Commit:** `hash`
   - Description of what changed
   - Files affected: list of files

   ## Files Changed
   ```
   file1 | change summary
   file2 | change summary
   ```

   ## Notes
   - Action items or reminders
   ```

6. **Include commit hashes** for easy reference

7. **Group related changes** by category (Content, Infrastructure, Cleanup, etc.)

8. **Add notes section** for follow-up actions or important reminders

## Format Guidelines

- Use `##` for main sections
- Use `###` for categories
- Use `####` for individual changes
- Include full commit hashes (first 7 chars)
- List all files that were modified
- Add action items in Notes section

## Example Structure

```markdown
# Changelog - 2026-04-12

## Summary
Infrastructure updates and content management changes.

## Changes

### Content
#### Unpublish Event Page
- **Commit:** `36a2743`
- Deleted page from src/pages/
- Preserved template in src/templates/

### Infrastructure
#### CI Update
- **Commit:** `ecc910f`
- Updated Node.js version

## Files Changed
src/pages/page.astro | Deleted
.github/workflows/ci.yml | Updated
```

## Tips

- Focus on user-facing changes first
- Include infrastructure changes that affect deployment
- Document cleanup activities for transparency
- Note any manual steps required after deployment
- Keep descriptions concise but informative

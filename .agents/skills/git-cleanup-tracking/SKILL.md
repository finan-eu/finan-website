---
name: git-cleanup-tracking
description: Remove files and directories from git tracking while preserving them locally. Use when files were accidentally committed to git, user wants to exclude files from future commits, cleaning up scraped documentation, removing AI tool configurations, or when .gitignore needs to be updated to exclude new patterns.
---

# Git Cleanup Tracking

This skill helps remove files from git tracking while keeping them in the working directory.

## When to Use

- Files were accidentally committed to git
- User wants to exclude files from future commits
- Cleaning up scraped documentation or temporary files
- Removing AI tool configurations from git
- User says "don't track", "remove from git", "exclude from commits"

## Steps

1. **Identify what's currently tracked**:
   ```bash
   git ls-files | grep <pattern>
   ```

2. **Check if .gitignore exists** and read its contents:
   ```bash
   cat .gitignore
   ```

3. **Add entries to .gitignore** for the files/directories to exclude:
   ```
   # Add to .gitignore
   <directory-name>/
   <filename>
   ```

4. **Remove from git tracking** (preserves local files):
   ```bash
   # For directories
   git rm -r --cached <directory>/
   
   # For files
   git rm --cached <filename>
   ```

5. **Stage .gitignore changes**:
   ```bash
   git add .gitignore
   ```

6. **Commit the cleanup**:
   ```bash
   git commit -m "chore: remove <name> from git tracking and add to .gitignore"
   ```

7. **Verify local files still exist**:
   ```bash
   ls -la <directory>/
   # or
   ls -la <filename>
   ```

8. **Push changes** to remote repository

## Common Patterns to Add to .gitignore

```
# Scraped content
.firecrawl/
.scraped/

# AI tool configs
.claude/
.opencode/
.cursor/

# Documentation
CLAUDE.md
AGENTS.md

# Temporary files
.cache/
.temp/
```

## Notes

- `git rm --cached` removes from git but keeps local files
- Files must also be in .gitignore to prevent re-adding
- Always verify local files are preserved before committing
- This is different from `git rm` which deletes files completely

## Example

Removing .firecrawl/ directory:
1. Added `.firecrawl/` to .gitignore
2. Ran `git rm -r --cached .firecrawl/`
3. Committed with message "chore: remove .firecrawl from git tracking"
4. Verified files still exist locally in `.firecrawl/`

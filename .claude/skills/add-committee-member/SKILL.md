---
name: add-committee-member
description: Add a new committee member with proper Astro image imports. Use when adding committee members, updating committee photos, or fixing image import patterns in committee files.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Bash
---

# Add Committee Member

Add new committee members to country representation files with proper Astro asset optimization.

## Image Import Pattern

**ALWAYS** use this import pattern for committee member images:

```typescript
import type { CommitteeConfig } from './types';
import memberNameImage from '../../../assets/images/committee/{country}/{first-last}.jpg';

const {country}Committee: CommitteeConfig = {
  members: [
    {
      name: 'Member Name',
      imageSrc: memberNameImage,  // Use imported reference
      imageAlt: 'Portrait of Member Name',
      // ... other properties
    },
  ],
} as const satisfies CommitteeConfig;

export default {country}Committee;
```

## Naming Conventions

| Type | Format | Example |
| ------ | --------- | --------- |
| Variable name | `{firstName}{LastName}Image` (camelCase) | `floroCubeloImage` |
| File name | `{first-last}.{ext}` (kebab-case) | `floro-cubelo.jpg` |
| Directory | `src/assets/images/committee/{country}/` | `src/assets/images/committee/finland/` |

## Countries

Valid country values: `denmark`, `faroe-islands`, `finland`, `greenland`, `iceland`, `norway`, `sweden`

## Steps to Add a Member

1. **Verify committee file exists**
   - Check `src/data/representation/committee/{country}Committee.ts`
   - If missing, create using `finlandCommittee.ts` as template

2. **Check for image file**
   - Look in `src/assets/images/committee/{country}/`
   - If missing, inform user where to place it

3. **Add import statement**
   - Add at top of file with other image imports
   - Follow variable naming convention

4. **Add member to array**
   - Use imported reference for `imageSrc`
   - Set `imageAlt` to `Portrait of {Full Name}`
   - Fill required fields: `affiliations`, `role`, `bio`, `linkedinUrl`

## Member Object Structure

```typescript
{
  name: 'Full Name',
  affiliations: 'Credentials, certifications',
  role: 'Position title',
  bio: 'Brief biography',
  imageAlt: 'Portrait of Full Name',
  imageSrc: fullNameImage,
  linkedinUrl: 'https://linkedin.com/in/username',
}
```

## Incorrect Patterns to Fix

```typescript
// BAD: String path
imageSrc: '/images/member.jpg',

// BAD: Relative string path
imageSrc: '../../../assets/images/committee/finland/member.jpg',

// BAD: Placeholder
imageSrc: '/images/image_thumbnail.svg',
```

## Reference

See `src/data/representation/committee/finlandCommittee.ts` for the canonical implementation.

## After Changes

Run `npm run build` to verify all image imports are valid.

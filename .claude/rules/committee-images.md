# Committee Image Import Pattern

When adding or updating committee member photos, **ALWAYS** follow this pattern to ensure proper Astro asset optimization.

## Required Pattern

### 1. Import images from `src/assets/images/committee/[country]/` directory

**Correct Location:**

```
src/assets/images/committee/[country]/[first-last].png
```

**Examples:**

- `src/assets/images/committee/finland/floro-cubelo.jpg`
- `src/assets/images/committee/iceland/marvi-gil.png`
- `src/assets/images/committee/sweden/anna-smith.jpg`

### 2. Import at the top of the committee file

**Variable Naming Convention:** `[firstName][LastName]Image` (camelCase)

**Example:**

```typescript
import type { CommitteeConfig } from './types';
import floroCubeloImage from '../../../assets/images/committee/finland/floro-cubelo.jpg';
import ryannDelosoImage from '../../../assets/images/committee/finland/ryann-deloso.jpg';
import marviGilImage from '../../../assets/images/committee/iceland/marvi-gil.png';
```

### 3. Use the imported reference in `imageSrc`

**Correct:**

```typescript
const finlandCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Floro Cubelo',
      imageSrc: floroCubeloImage,  // ✅ Use imported reference
      imageAlt: 'Portrait of Floro Cubelo',
      // ... other properties
    },
  ],
} as const;
```

**Incorrect:**

```typescript
const finlandCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Floro Cubelo',
      imageSrc: '/images/floro-cubelo.jpg',  // ❌ Don't use string paths
      imageSrc: '../../../assets/images/committee/finland/floro-cubelo.jpg',  // ❌ Don't use relative paths
      // ... other properties
    },
  ],
} as const;
```

## Complete Example

Reference: `src/data/representation/committee/finlandCommittee.ts`

```typescript
import type { CommitteeConfig } from './types';
import floroCubeloImage from '../../../assets/images/committee/finland/floro-cubelo.jpg';
import ryannDelosoImage from '../../../assets/images/committee/finland/ryann-deloso.jpg';
import jeannyMaeBantingTuominenImage from '../../../assets/images/committee/finland/jeanny-mae-banting-tuominen.jpg';
import marieLagundiImage from '../../../assets/images/committee/finland/marie-lagundi.jpg';

const finlandCommittee: CommitteeConfig = {
  members: [
    {
      name: 'Floro Cubelo',
      affiliations: 'TtT, Sh, CGNC, FFNMRCSI, FETNA',
      role: 'Puheenjohtaja',
      bio: 'Akuuttihoitotyö, hoitotiede, kansanterveystiede...',
      imageAlt: 'Portrait of Floro Cubelo',
      imageSrc: floroCubeloImage,
      linkedinUrl: '',
    },
    {
      name: 'Ryann Deloso',
      affiliations: 'YAMK, Sh',
      role: 'Edustaja, Uusimaa',
      bio: 'Hoitotyön yrittäjys, akuuttiosasto, hanke osaaja.',
      imageAlt: 'Portrait of Ryann Deloso',
      imageSrc: ryannDelosoImage,
      linkedinUrl: 'https://www.linkedin.com/in/ryann-deloso/',
    },
  ],
} as const;

export default finlandCommittee;
```

## Why This Pattern Matters

### Astro Asset Optimization Benefits

1. **Automatic Compression**: Reduces file size without quality loss
2. **Format Conversion**: Converts to modern formats (WebP, AVIF) with fallbacks
3. **Responsive Images**: Generates multiple sizes for different screen sizes
4. **Build-time Validation**: Build fails if image files are missing (catches errors early)
5. **Type Safety**: TypeScript ensures image paths are valid

### ❌ What NOT to Do

- **Don't use `public/` directory** - Images in `public/` are NOT optimized by Astro
- **Don't use string paths** - No optimization, no type safety, no build-time validation
- **Don't use placeholder images** - Replace `/images/image_thumbnail.svg` with actual photos

## Image File Naming Convention

**Format:** `first-last.[jpg|png|webp]` (kebab-case)

**Examples:**

- `floro-cubelo.jpg` ✅
- `marvi-gil.png` ✅
- `anna-maria-smith.jpg` ✅
- `Floro_Cubelo.jpg` ❌ (use kebab-case)
- `floroCubelo.jpg` ❌ (use kebab-case)

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`

## Country-Specific Directories

Each country has its own subdirectory under `src/assets/images/committee/`:

- `denmark/`
- `faroe-islands/`
- `finland/`
- `greenland/`
- `iceland/`
- `norway/`
- `sweden/`

## Checklist for Adding New Committee Member Photos

- [ ] Place image in correct country directory: `src/assets/images/committee/[country]/`
- [ ] Name image file using kebab-case: `first-last.jpg`
- [ ] Import image at top of committee file with pattern: `[firstName][LastName]Image`
- [ ] Use imported reference in `imageSrc` property (not string path)
- [ ] Ensure `imageAlt` has descriptive text: `'Portrait of [Full Name]'`
- [ ] Run build to verify image optimization: `npm run build`

## Reference Files

Always refer to these files as examples:

- `src/data/representation/committee/finlandCommittee.ts` - Complete example with 4 members
- `src/data/representation/committee/icelandCommittee.ts` - Single member example
- `src/data/representation/committee/types.ts` - TypeScript interfaces

---
name: astro-unpublish-page
description: Unpublish an Astro page by moving it from src/pages/ to a templates directory while preserving it for future use. Use when a user wants to unpublish a page without deleting it, make a page inaccessible while keeping the code as a template, or remove a page from the site but save it for later reuse.
---

# Unpublish Astro Page

This skill helps unpublish Astro pages while preserving them as templates for future use.

## When to Use

- User wants to unpublish a specific page
- User wants to make a page inaccessible but keep the code
- User wants to remove a page from the site but may reuse it later
- User explicitly says "unpublish", "remove from site", "make inaccessible", or "move to template"

## Steps

1. **Verify page exists** in `src/pages/`:
   ```bash
   ls -la src/pages/<page-name>.astro
   ```

2. **Create templates directory** if it doesn't exist:
   ```bash
   mkdir -p src/templates
   ```

3. **Move the page to templates** (don't delete):
   ```bash
   mv src/pages/<page-name>.astro src/templates/
   ```

4. **Update related files** that reference the page:
   - Check `public/llms-full.txt` and remove the page URL
   - Check `src/data/structuredData.config.ts` and update schema references
   - Check `src/components/StructuredData.astro` and update types if needed
   - Check any navigation or banner components that link to the page

5. **Handle type errors** by updating schema type definitions:
   - Remove unused schema types from component interfaces
   - Comment out schema generation functions if no longer needed

6. **Verify build passes**:
   ```bash
   npm run check
   npm run build
   ```

7. **Commit changes** with message like:
   ```
   chore: unpublish <page-name> page and preserve as template
   ```

8. **After deployment**, remind user to purge Cloudflare cache if page is still accessible

## Notes

- The template remains at `src/templates/<page-name>.astro` for future use
- To republish, copy template back to `src/pages/`
- Consider adding redirect rules in `public/_redirects` if the old URL should redirect elsewhere
- Page will return 404 after cache is cleared/purged

## Example

Unpublishing `triennial-gathering-2026`:
1. Moved `src/pages/triennial-gathering-2026.astro` → `src/templates/triennial-gathering-2026.astro`
2. Updated `public/llms-full.txt` to remove the page
3. Commented out event schema in `structuredData.config.ts`
4. Updated `StructuredData.astro` type definitions

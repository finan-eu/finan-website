# Changelog - 2026-04-20

## Summary

Fixed blog thumbnail images not displaying due to CORS errors on the live site.

---

## Changes

### Bug Fixes

#### Remove crossorigin Attribute from Blog Thumbnails

- **Commit:** `52b3ea6`
- Removed `crossorigin="anonymous"` attribute from `<img>` tags in `Blog.astro`
- The attribute was forcing the browser to make CORS requests for Ghost CMS images hosted at `puls.finan.eu.com`
- The Ghost server does not return `Access-Control-Allow-Origin` headers, causing the browser to block all blog thumbnail images
- Without the attribute, images load as simple requests (no CORS check) and display normally

---

## Files Changed

```
src/components/Blog.astro | Removed crossorigin="anonymous" from img tag
```

## Notes

- No changes needed on the Ghost CMS server side
- The `referrerpolicy="no-referrer"` attribute is retained for privacy

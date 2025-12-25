# Ghost CMS Image Upload SOP

**Standard Operating Procedure for Blog Post Authors**

**Document Version:** 1.0
**Last Updated:** December 25, 2024
**Applies To:** All FiNAN Puls (puls.finan.eu.com) blog post authors

---

## Purpose

This SOP establishes the correct procedure for adding images to Ghost CMS blog posts to ensure:
- ✅ Maximum website performance scores (Best Practices: 92-100)
- ✅ Privacy compliance (no third-party tracking cookies)
- ✅ Full control over image assets
- ✅ Faster page load times
- ✅ Better SEO rankings

## Problem: Why NOT to Use the Unsplash Plugin

Ghost CMS includes a built-in **Unsplash integration** that allows you to search and insert stock photos directly. However, this feature has significant drawbacks:

### Issues with Unsplash Integration

| Issue | Impact |
|-------|--------|
| **Third-party cookies** | Sets tracking cookies (`azk`, `azk-ss`, `ugid`) that reduce Best Practices score from 92-100 to **77** |
| **Privacy concerns** | Unsplash can track readers across websites |
| **External dependency** | Images load from `images.unsplash.com` instead of Ghost's CDN |
| **Browser warnings** | Modern browsers flag third-party cookies as security/privacy issues |
| **License tracking** | Harder to maintain proper attribution records |

### What Happens When You Use Unsplash Plugin

```html
<!-- BAD: Unsplash hotlinked image -->
<img src="https://images.unsplash.com/photo-1234567890?crop=..." />
```

This loads the image from Unsplash's servers and sets third-party cookies on readers' browsers.

---

## ✅ Correct Procedure: Download & Upload Images

Follow these steps for **all images** in your blog posts:

### Step 1: Find Your Image Source

You can use any image source, including:
- **Unsplash** (https://unsplash.com) - Free stock photos
- **Pexels** (https://pexels.com) - Free stock photos
- **Pixabay** (https://pixabay.com) - Free stock photos
- **Your own photos** - Original photography
- **Licensed images** - Purchased stock photos

### Step 2: Download the Image to Your Computer

**For Unsplash:**
1. Go to https://unsplash.com
2. Search for your desired image
3. Click on the image to view full resolution
4. Click the **"Download free"** button (↓ icon in top right)
5. Save the image to your computer (usually Downloads folder)
6. **Copy the photographer's name** for attribution (required by Unsplash license)

**For Pexels/Pixabay:**
1. Search and find your image
2. Click **"Download"** button
3. Save to your computer
4. Note the photographer's name for attribution (if applicable)

**For Your Own Photos:**
1. Ensure images are optimized (recommended: max 2000px width, JPEG format, 80-85% quality)
2. Use descriptive filenames (e.g., `filipino-nurse-finland-hospital.jpg` instead of `IMG_1234.jpg`)

### Step 3: Upload to Ghost CMS

1. **Log in to Ghost Admin**
   - Navigate to https://puls.finan.eu.com/ghost/
   - Enter your credentials

2. **Create or Edit Your Blog Post**
   - Click **"Posts"** in left sidebar
   - Click **"New post"** or edit an existing post

3. **Add the Image**
   - Click the **"+"** button where you want to insert the image
   - Select **"Image"** from the block menu
   - Click **"Upload"** or drag and drop your downloaded image file
   - **Do NOT click "Unsplash" button** ❌

4. **Add Alt Text & Caption**
   - Click on the uploaded image
   - In the right panel, add:
     - **Alt text:** Descriptive text for accessibility (e.g., "Filipino nurse caring for patient in Helsinki hospital")
     - **Caption:** Photo credit if using stock photos (e.g., "Photo by [Photographer Name] on Unsplash")

5. **Verify the Image URL**
   - Click on the image in your post
   - Check that the URL starts with your Ghost CDN domain (e.g., `https://yourcdn.ghostcdn.com/...`)
   - ❌ If it starts with `https://images.unsplash.com/...` you did it wrong - delete and re-upload

### Step 4: Publish or Update

1. Click **"Update"** (for existing posts) or **"Publish"** (for new posts)
2. Verify the post on the live site

---

## Image Optimization Best Practices

### Recommended Image Specifications

| Property | Recommendation | Why |
|----------|---------------|-----|
| **Format** | JPEG for photos, PNG for graphics/logos | Smaller file sizes |
| **Max width** | 2000px | Ghost automatically creates responsive versions |
| **File size** | Under 500KB per image | Faster page loads |
| **Quality** | 80-85% JPEG quality | Balance between quality and file size |
| **Filename** | Descriptive kebab-case (e.g., `nurse-training-oslo.jpg`) | Better SEO and organization |

### Tools for Image Optimization

**Before uploading, optimize images using:**

- **Online tools:**
  - TinyPNG (https://tinypng.com) - Compress PNG and JPEG
  - Squoosh (https://squoosh.app) - Google's image compressor
  - ImageOptim (https://imageoptim.com) - Mac app

- **Bulk tools (for multiple images):**
  - XnConvert (free, cross-platform)
  - Adobe Photoshop (File → Export → Save for Web)

---

## Attribution Guidelines

### Unsplash License Requirements

Unsplash requires attribution (credit to photographer). Always add a caption:

**Format:**
```
Photo by [Photographer Name](https://unsplash.com/@username) on Unsplash
```

**Example:**
```
Photo by National Cancer Institute on Unsplash
```

### Pexels/Pixabay License

Attribution is appreciated but not required. You can optionally credit:

```
Photo by [Photographer Name] on Pexels
```

### Your Own Photos

No attribution needed, but you can add context in captions:

```
FiNAN members at the Annual Gathering 2024, Helsinki
```

---

## Troubleshooting

### Issue: "I Already Used Unsplash Integration"

**How to Fix Existing Posts:**

1. Open the blog post in Ghost editor
2. Click on the Unsplash image
3. Note the image details (or take a screenshot)
4. Delete the image from the post
5. Go to Unsplash.com and find the same image
6. Download it to your computer
7. Re-upload using the correct procedure (Step 3 above)
8. Add attribution in caption
9. Update the post

### Issue: "Image Upload Fails"

**Common causes:**

- File too large (>10MB) - optimize the image first
- Unsupported format - use JPEG or PNG
- Network issue - check your internet connection
- Browser cache - try clearing cache or use incognito mode

### Issue: "Image Looks Blurry"

- Download **high resolution** version (not thumbnail)
- Don't upload images smaller than 1200px width
- Check JPEG quality setting (should be 80-85%, not lower)

---

## Quick Reference Checklist

Before publishing any blog post, verify:

- [ ] All images are **uploaded** (not hotlinked from Unsplash)
- [ ] No image URLs start with `images.unsplash.com`
- [ ] All images have **descriptive alt text**
- [ ] Stock photos have **proper attribution** in captions
- [ ] Images are **optimized** (under 500KB each)
- [ ] Filenames are **descriptive** (not IMG_1234.jpg)

---

## Why This Matters: The Numbers

| Metric | Using Unsplash Plugin | Self-Hosted Upload |
|--------|----------------------|-------------------|
| **Best Practices Score** | 77/100 ⚠️ | 92-100 ✅ |
| **Third-party cookies** | 3 cookies 🍪 | 0 cookies |
| **Privacy compliance** | ⚠️ Tracking present | ✅ No tracking |
| **Page load speed** | Slower (external domain) | Faster (CDN) |
| **Browser warnings** | Yes (console errors) | No |

---

## Questions?

If you have questions about this procedure, contact:

- **Technical Issues:** Website administrator
- **Image Licensing:** Content team lead
- **Ghost CMS Training:** Request a walkthrough session

---

## Revision History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2024-12-25 | Initial SOP created | FiNAN Technical Team |

---

**Remember:** Taking 2 extra minutes to download and upload images correctly will ensure our website maintains top performance scores and protects our readers' privacy. Thank you for following this procedure!

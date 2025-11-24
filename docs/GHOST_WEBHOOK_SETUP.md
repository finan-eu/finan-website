# Ghost CMS → Cloudflare Pages Auto-Deploy Setup

This guide walks you through setting up automatic deployments when you publish or update content on Ghost CMS.

## Overview

When you publish or update a post on Ghost, it will automatically trigger a rebuild and deployment of your Astro website on Cloudflare Pages.

---

## Step 1: Create a Cloudflare Pages Deploy Hook

1. **Log in to Cloudflare Dashboard**
   - Go to https://dash.cloudflare.com
   - Navigate to **Workers & Pages** in the sidebar

2. **Select Your Project**
   - Find and click on your `finan-website` project

3. **Create Deploy Hook**
   - Go to **Settings** tab
   - Scroll down to **Builds & deployments** section
   - Click on **Deploy hooks**
   - Click **Create deploy hook** button

4. **Configure the Deploy Hook**
   - **Deploy hook name**: `Ghost CMS Content Updates` (or any descriptive name)
   - **Branch to build**: `main` (or your production branch)
   - Click **Save**

5. **Copy the Webhook URL**
   - After saving, you'll see a webhook URL like:
   ```
   https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
   ```
   - **Copy this URL** - you'll need it in the next step
   - ⚠️ **Important**: Keep this URL secure - anyone with this URL can trigger deployments

---

## Step 2: Configure Ghost CMS Webhooks

### Access Ghost Admin Panel

1. **Log in to Ghost Admin**
   - Go to your Ghost admin panel (usually `https://your-ghost-site.com/ghost`)
   - Sign in with your admin credentials

### Create Custom Webhook

2. **Navigate to Webhooks Settings**
   - Click **Settings** (gear icon) in the sidebar
   - Click **Integrations** in the left menu
   - Scroll down to **Custom integrations** section
   - Click **+ Add custom integration**

3. **Create New Integration**
   - **Name**: `Cloudflare Pages Deploy` (or any descriptive name)
   - Click **Save**
   - You'll see the integration details page

### Add Webhooks for Post Events

4. **Add Webhook for Published Posts**
   - Scroll to the **Webhooks** section
   - Click **Add webhook**
   - Configure:
     - **Name**: `Deploy on Post Published`
     - **Event**: Select `Post published`
     - **Target URL**: Paste your Cloudflare Deploy Hook URL
   - Click **Create**

5. **Add Webhook for Updated Posts**
   - Click **Add webhook** again
   - Configure:
     - **Name**: `Deploy on Post Updated`
     - **Event**: Select `Post updated`
     - **Target URL**: Paste the same Cloudflare Deploy Hook URL
   - Click **Create**

6. **Optional: Add More Webhook Events**

   You can also add webhooks for other events if needed:
   - `Post unpublished` - rebuild when a post is unpublished
   - `Post deleted` - rebuild when a post is deleted
   - `Post scheduled` - rebuild when a scheduled post goes live
   - `Page published` - if you use Ghost pages
   - `Page updated` - if you use Ghost pages

---

## Step 3: Test the Integration

### Test a Post Update

1. **Edit an Existing Post**
   - Go to your Ghost admin panel
   - Open any published post
   - Make a small change (add a space, update text)
   - Click **Update**

2. **Verify Deployment Triggered**
   - Go back to Cloudflare Pages dashboard
   - Navigate to your project's **Deployments** tab
   - You should see a new deployment started within a few seconds
   - Status will show "Building" → "Success" (takes 1-3 minutes typically)

3. **Check Your Live Site**
   - Once deployment completes, visit your live site
   - Verify the changes appear on the blog section

### Test a New Post

1. **Create a New Post**
   - In Ghost admin, click **Posts** → **New post**
   - Write a test post with title and content
   - Click **Publish** → **Publish**

2. **Verify Deployment**
   - Check Cloudflare Pages deployments
   - Confirm a new build was triggered
   - Wait for deployment to complete

3. **Verify on Site**
   - Visit your website
   - The new post should appear in the News & Events section

---

## Troubleshooting

### Webhook Not Firing

**Check Ghost Webhook Status:**
1. In Ghost Admin → Settings → Integrations
2. Click on your custom integration
3. In the Webhooks section, you'll see a status for each webhook
4. If there are errors, they'll be listed there

**Common Issues:**
- ❌ **Invalid URL**: Double-check the Cloudflare deploy hook URL
- ❌ **Network issues**: Ensure Ghost can reach Cloudflare (no firewall blocking)
- ❌ **Wrong event type**: Verify you selected the correct event (e.g., "Post published")

### Deployment Triggered But Fails

**Check Cloudflare Pages Build Logs:**
1. Go to Cloudflare Pages → Your Project → Deployments
2. Click on the failed deployment
3. Review the build logs for errors
4. Common issues:
   - Environment variables not set (`GHOST_URL`, `GHOST_CONTENT_API_KEY`)
   - Build timeout (if fetching too much data)
   - Dependencies missing

### Deployment Takes Too Long

**Build Time Optimization:**
- Cloudflare Pages free tier: 500 builds/month, 1 concurrent build
- Builds typically take 1-3 minutes for Astro sites
- If builds are slow, check:
  - Number of posts being fetched (currently limited to 6 on homepage)
  - Image optimization settings
  - Dependencies size

### Content Not Updating

**Cache Issues:**
1. **Hard refresh** your browser: `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
2. **Check Cloudflare Cache**:
   - Go to your domain in Cloudflare
   - Navigate to **Caching** → **Configuration**
   - Click **Purge Everything** to clear cache
3. **Verify build completed**: Check deployment logs to ensure build succeeded

---

## Security Best Practices

### Protect Your Deploy Hook URL

- ✅ **Don't commit** the URL to your repository
- ✅ **Don't share** the URL publicly
- ✅ **Rotate if exposed**: Delete and create a new deploy hook if the URL is leaked

### Webhook Authentication (Optional)

Ghost webhooks don't include authentication by default. If you need secure webhooks:

1. **Use Cloudflare Workers** to create a proxy with authentication
2. **Monitor deployments** in Cloudflare Pages to detect unexpected builds
3. **Set up alerts** for deployment failures

---

## Monitoring & Maintenance

### Check Webhook Health

**Monthly Review:**
1. Visit Ghost Admin → Settings → Integrations
2. Check your custom integration
3. Review webhook status and delivery history
4. Look for any failed webhook deliveries

### Monitor Build Quota

**Cloudflare Pages Free Tier:**
- 500 builds/month
- ~16 builds/day average
- Monitor usage in Cloudflare dashboard

**If You Hit Limits:**
- Reduce webhook events (e.g., only use "Post published", not "Post updated")
- Upgrade to Cloudflare Pages Pro ($20/month, 5000 builds)
- Batch content updates to reduce builds

---

## Advanced Configuration

### Selective Rebuilds

If you want to rebuild only for specific posts or tags:

1. **Use Ghost's Webhook Payload**
   - Ghost sends post data with each webhook
   - Create a Cloudflare Worker to filter events
   - Only trigger deploy hook for specific conditions

2. **Example: Only rebuild for published posts with "important" tag**
   ```javascript
   // Cloudflare Worker example (requires custom setup)
   addEventListener('fetch', event => {
     event.respondWith(handleRequest(event.request))
   })

   async function handleRequest(request) {
     const payload = await request.json()

     // Check if post has "important" tag
     const hasImportantTag = payload.post?.tags?.some(tag => tag.slug === 'important')

     if (hasImportantTag) {
       // Trigger Cloudflare Pages deploy hook
       await fetch('YOUR_DEPLOY_HOOK_URL', { method: 'POST' })
     }

     return new Response('OK', { status: 200 })
   }
   ```

---

## Summary

You've successfully set up:

✅ **Cloudflare Pages Deploy Hook** - A URL that triggers site rebuilds
✅ **Ghost Webhooks** - Automatic notifications when content changes
✅ **Auto-deployment pipeline** - New/updated posts automatically appear on your site

**Expected Workflow:**
1. You publish/update a post in Ghost →
2. Ghost sends webhook to Cloudflare →
3. Cloudflare builds your site →
4. Changes appear live (1-3 minutes total)

---

## Need Help?

- **Cloudflare Pages Docs**: https://developers.cloudflare.com/pages/
- **Ghost Webhooks Docs**: https://ghost.org/docs/webhooks/
- **FiNAN Project Issues**: Create an issue in your GitHub repository

---

**Last Updated**: 2025-11-24

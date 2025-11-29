# How to Update Project Links

This guide explains how to update GitHub and Demo links for your projects.

## 📍 Location

All project links are defined in: **`src/components/Projects.tsx`**

## 🔧 How to Update Links

### Step 1: Open the Projects Component

Open the file: `src/components/Projects.tsx`

### Step 2: Find the Projects Array

Look for the `projects` array starting around line 10. Each project object has:
- `githubUrl`: Link to your GitHub repository
- `demoUrl`: Link to your live demo/project (optional)

### Step 3: Update the Links

For each project, update the URLs:

```typescript
{
  id: 1,
  title: "Financial Market Dashboard",
  // ... other properties ...
  githubUrl: "https://github.com/your-username/your-repo", // ← Update this
  demoUrl: "https://your-demo-url.com", // ← Update this (optional)
  // ... rest of project data ...
}
```

### Example

**Before:**
```typescript
githubUrl: "https://github.com/example",
demoUrl: "https://example.com",
```

**After:**
```typescript
githubUrl: "https://github.com/Swayam-arora-2004/financial-dashboard",
demoUrl: "https://financial-dashboard-demo.vercel.app",
```

## 📝 Notes

- **GitHub URL**: Required if you want to show the GitHub button
- **Demo URL**: Optional - if you don't have a demo, you can remove it or set to `null`
- **Hide Buttons**: If you set `githubUrl` or `demoUrl` to `null` or empty string, the button won't show

## 🚀 After Making Changes

1. **Save the file**
2. **Test locally** (optional):
   ```bash
   npm run dev
   ```
3. **Commit and push**:
   ```bash
   git add src/components/Projects.tsx
   git commit -m "Update project links"
   git push origin main
   ```
4. **Redeploy** (if using Vercel):
   ```bash
   vercel --prod
   ```
   Or Vercel will auto-deploy if connected to GitHub.

## 💡 Tips

- Keep your GitHub repositories public if you want others to see your code
- Use shortened URLs for demos if they're very long
- You can add multiple projects by adding more objects to the array
- Each project needs a unique `id` number

## 🔍 Quick Reference

**File to edit:** `src/components/Projects.tsx`  
**Lines to edit:** ~10-53 (projects array)  
**Properties to update:** `githubUrl` and `demoUrl`


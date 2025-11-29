# Setup New Repository

## Step 1: Create New Repository on GitHub

1. Go to: https://github.com/new
2. **Repository name**: `portfolio` (or `swayam-arora-portfolio`)
3. **Description**: "Portfolio website for Swayam Arora - Data Analyst"
4. **Visibility**: Public or Private (your choice)
5. **DO NOT** check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
6. Click **"Create repository"**

## Step 2: Update Git Remote

After creating the repository, GitHub will show you the repository URL. It will look like:
`https://github.com/Swayam-arora-2004/portfolio.git`

Then run these commands:

```bash
# Remove old remote
git remote remove origin

# Add new remote (replace with your new repo URL)
git remote add origin https://github.com/Swayam-arora-2004/portfolio.git

# Verify it's set correctly
git remote -v

# Push to new repository
git push -u origin main
```

## Step 3: Deploy to Vercel

After pushing to the new repository:

```bash
vercel
```

Follow the prompts and deploy!


# How to Push Changes to GitHub

Your changes are committed locally but need to be pushed. There's a git authentication issue.

## Option 1: Use GitHub Personal Access Token (Recommended)

1. **Generate a Personal Access Token:**
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Name it: "Portfolio Push"
   - Select scopes: ✅ `repo` (full control)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Push using the token:**
   ```bash
   git push https://YOUR_TOKEN@github.com/Swayam-arora-2004/swayam-arora-portfolio.git main
   ```
   Replace `YOUR_TOKEN` with the token you copied.

## Option 2: Use GitHub CLI

```bash
# Install GitHub CLI (if not installed)
brew install gh

# Authenticate
gh auth login

# Push
git push origin main
```

## Option 3: Update Git Credentials

```bash
# Clear cached credentials
git credential-osxkeychain erase
host=github.com
protocol=https

# Then push (it will prompt for credentials)
git push origin main
```

## Option 4: Push via GitHub Desktop

1. Download GitHub Desktop: https://desktop.github.com/
2. Add your repository
3. Click "Push origin"

## Current Status

✅ All changes are committed locally
❌ Need to authenticate to push to GitHub

Your commits ready to push:
- Mobile alignment fixes
- Image and resume path corrections
- Contact form improvements


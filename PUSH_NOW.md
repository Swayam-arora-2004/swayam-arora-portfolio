# Push Changes to GitHub - Quick Guide

## Current Status
✅ 2 commits ready to push:
- `fdbd932` - Fix: Improve mobile alignment, responsiveness, and fix image/resume paths
- `0bb297a` - Fix: Improve mobile alignment and responsiveness across all components

## Quick Solution: Use Personal Access Token

### Step 1: Generate Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Name: `Portfolio Push`
4. Expiration: Choose your preference (90 days recommended)
5. Select scope: ✅ **`repo`** (Full control of private repositories)
6. Click **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Push with Token

Run this command (replace `YOUR_TOKEN` with the token you copied):

```bash
git push https://YOUR_TOKEN@github.com/Swayam-arora-2004/swayam-arora-portfolio.git main
```

**Example:**
```bash
git push https://ghp_xxxxxxxxxxxxxxxxxxxx@github.com/Swayam-arora-2004/swayam-arora-portfolio.git main
```

### Step 3: Save Token for Future (Optional)

After the first push, you can configure git to use the token:

```bash
git remote set-url origin https://YOUR_TOKEN@github.com/Swayam-arora-2004/swayam-arora-portfolio.git
```

Or use GitHub CLI (recommended):
```bash
brew install gh
gh auth login
git push origin main
```

## Alternative: GitHub Desktop

1. Download: https://desktop.github.com/
2. Sign in with your GitHub account
3. Add repository
4. Click "Push origin"

---

**Note:** The authentication issue is because git is using cached credentials for a different account. Using a Personal Access Token will solve this.


# Deploy Your Website Now - Step by Step

## Quick Deploy to Vercel

### Step 1: Login to Vercel (if not already logged in)
```bash
vercel login
```
This will open your browser to authenticate.

### Step 2: Deploy to Vercel
```bash
vercel
```

**Answer the prompts:**
- Set up and deploy? → Type `Y` and press Enter
- Which scope? → Select your account (usually option 1)
- Link to existing project? → Type `N` (for first time)
- What's your project's name? → Type `swayam-arora-portfolio` (or any name)
- In which directory is your code located? → Press Enter (uses current directory `./`)

### Step 3: Deploy to Production
```bash
vercel --prod
```

This will give you a production URL like: `https://swayam-arora-portfolio.vercel.app`

### Step 4: Set Environment Variables

1. Go to: https://vercel.com/dashboard
2. Click on your project name
3. Go to **Settings** → **Environment Variables**
4. Click **Add New**
5. Add each variable one by one:

   **Variable 1:**
   - Key: `EMAIL_USER`
   - Value: `aroraswayam0@gmail.com`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **Save**

   **Variable 2:**
   - Key: `EMAIL_APP_PASSWORD`
   - Value: `your-16-character-app-password` (get this from Gmail App Passwords)
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **Save**

   **Variable 3:**
   - Key: `RECIPIENT_EMAIL`
   - Value: `aroraswayam0@gmail.com`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **Save**

   **Variable 4:**
   - Key: `NODE_ENV`
   - Value: `production`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   - Click **Save**

### Step 5: Redeploy with Environment Variables
```bash
vercel --prod
```

### Step 6: Test Your Website

1. Visit your Vercel URL (from Step 3)
2. Fill out the contact form
3. Check your email inbox - you should receive the message!

---

## If You Don't Have Gmail App Password Yet

1. Go to: https://myaccount.google.com/security
2. Enable **2-Step Verification** (if not already enabled)
3. Go to **App passwords** (under 2-Step Verification)
4. Select **Mail** and **Other (Custom name)**
5. Enter name: `Portfolio Contact Form`
6. Click **Generate**
7. **Copy the 16-character password** (no spaces)
8. Use this in Step 4 above

---

## Troubleshooting

**If deployment fails:**
- Check Vercel dashboard → Deployments → Click on failed deployment → View logs
- Make sure all environment variables are set correctly

**If contact form doesn't work:**
- Check browser console (F12) for errors
- Verify environment variables in Vercel dashboard
- Check Vercel function logs

**Need help?** See `DEPLOYMENT_GUIDE.md` for detailed troubleshooting.


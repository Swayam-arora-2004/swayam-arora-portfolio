# Complete Deployment Guide

This guide will help you deploy your portfolio website with a working backend API and email functionality.

## Deployment Options

You have two main options:
1. **Vercel (Recommended)** - Full-stack deployment with serverless functions
2. **GitHub Pages + Vercel** - Frontend on GitHub Pages, Backend on Vercel

## Option 1: Deploy Everything on Vercel (Recommended)

### Step 1: Prepare Your Code

1. Make sure all changes are committed:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```

### Step 2: Deploy to Vercel

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Set up and deploy? **Yes**
   - Which scope? Select your account
   - Link to existing project? **No** (first time) or **Yes** (if redeploying)
   - Project name? Enter a name (e.g., `swayam-arora-portfolio`)
   - Directory? **./** (current directory)
   - Override settings? **No**

4. **For Production Deployment**:
   ```bash
   vercel --prod
   ```

### Step 3: Configure Environment Variables

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

   ```
   EMAIL_USER=aroraswayam0@gmail.com
   EMAIL_APP_PASSWORD=your-16-character-app-password
   RECIPIENT_EMAIL=aroraswayam0@gmail.com
   SUPABASE_URL=your_supabase_url (if using)
   SUPABASE_KEY=your_supabase_key (if using)
   NODE_ENV=production
   ```

5. **Important**: Make sure to select **Production**, **Preview**, and **Development** for each variable

6. **Redeploy** after adding environment variables:
   ```bash
   vercel --prod
   ```

### Step 4: Update Frontend API URL

After deployment, Vercel will give you a URL like: `https://your-project.vercel.app`

1. Update `src/components/Contact.tsx`:
   - Replace the API URL with your Vercel URL, OR
   - Set `VITE_API_URL` environment variable in Vercel to your Vercel URL

2. **Option A - Set Environment Variable** (Recommended):
   - In Vercel dashboard → Settings → Environment Variables
   - Add: `VITE_API_URL=https://your-project.vercel.app`
   - Redeploy

3. **Option B - Hardcode** (Quick fix):
   - Edit `src/components/Contact.tsx`
   - Replace `/api/contact` with `https://your-project.vercel.app/api/contact`

### Step 5: Test Your Deployment

1. Visit your deployed site: `https://your-project.vercel.app`
2. Fill out the contact form
3. Check your email inbox for the notification

## Option 2: GitHub Pages (Frontend) + Vercel (Backend)

### Step 1: Deploy Backend to Vercel

Follow **Option 1, Steps 1-3** to deploy the backend API to Vercel.

### Step 2: Update Frontend API URL

1. Get your Vercel backend URL (e.g., `https://your-backend.vercel.app`)

2. Update `src/components/Contact.tsx`:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL 
     ? `${import.meta.env.VITE_API_URL}/api/contact`
     : 'https://your-backend.vercel.app/api/contact'; // Your Vercel backend URL
   ```

3. Or set environment variable in GitHub Actions:
   - Edit `.github/workflows/deploy.yml`
   - Add `VITE_API_URL` to the build step

### Step 3: Deploy Frontend to GitHub Pages

1. Push your code to GitHub:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push
   ```

2. GitHub Actions will automatically:
   - Build your frontend
   - Deploy to GitHub Pages
   - Available at: `https://your-username.github.io/repo-name`

### Step 4: Update CORS Settings

The backend CORS is already configured for GitHub Pages. If you have a custom domain, add it to `server/index.js`:

```javascript
origin: [
  // ... existing origins
  'https://your-custom-domain.com'
]
```

## Custom Domain Setup

### For Vercel:

1. Go to Vercel project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `VITE_API_URL` if needed

### For GitHub Pages:

1. Go to repository → Settings → Pages
2. Add your custom domain
3. Update CORS in `server/index.js` to include your domain

## Troubleshooting

### Contact Form Not Working

1. **Check Browser Console**:
   - Open DevTools (F12)
   - Check for CORS errors or 404 errors
   - Verify API URL is correct

2. **Check Vercel Logs**:
   - Go to Vercel dashboard → Your project → Logs
   - Look for errors in serverless function execution

3. **Verify Environment Variables**:
   - Ensure all variables are set in Vercel
   - Check that `EMAIL_APP_PASSWORD` is correct (no spaces)
   - Verify `RECIPIENT_EMAIL` is set

4. **Test API Directly**:
   ```bash
   curl -X POST https://your-project.vercel.app/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
   ```

### Email Not Sending

1. **Check Email Configuration**:
   - Verify Gmail App Password is correct
   - Ensure 2-Step Verification is enabled
   - Check Vercel logs for email errors

2. **Test Email Setup Locally**:
   ```bash
   npm run check-email
   ```

### CORS Errors

1. **Add Your Domain**:
   - Update `server/index.js` CORS configuration
   - Include your exact domain (with https://)
   - Redeploy backend

## Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `EMAIL_USER` | Your Gmail address | Yes |
| `EMAIL_APP_PASSWORD` | Gmail App Password (16 chars) | Yes |
| `RECIPIENT_EMAIL` | Where to send notifications | Yes |
| `SUPABASE_URL` | Supabase project URL | No |
| `SUPABASE_KEY` | Supabase anon key | No |
| `NODE_ENV` | Set to `production` | Yes |
| `VITE_API_URL` | Your Vercel backend URL | For frontend |

## Quick Deploy Checklist

- [ ] Code committed and pushed to GitHub
- [ ] Environment variables configured in Vercel
- [ ] Backend deployed to Vercel
- [ ] Frontend API URL updated
- [ ] CORS configured for your domain
- [ ] Test contact form submission
- [ ] Verify email received
- [ ] Custom domain configured (if applicable)

## Support

If you encounter issues:
1. Check Vercel logs
2. Check browser console
3. Verify all environment variables
4. Test API endpoints directly
5. Review this guide's troubleshooting section


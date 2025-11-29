# Quick Deployment Steps

## Deploy to Vercel (Recommended - Full Stack)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Login
```bash
vercel login
```

### 3. Deploy
```bash
vercel
```

When prompted:
- Set up and deploy? **Yes**
- Link to existing project? **No** (first time)
- Project name: `swayam-arora-portfolio` (or your choice)
- Directory: **./** (press Enter)

### 4. Deploy to Production
```bash
vercel --prod
```

### 5. Configure Environment Variables

Go to: https://vercel.com/dashboard → Your Project → Settings → Environment Variables

Add these:
```
EMAIL_USER=aroraswayam0@gmail.com
EMAIL_APP_PASSWORD=your-16-char-app-password
RECIPIENT_EMAIL=aroraswayam0@gmail.com
NODE_ENV=production
```

**Important**: Select **Production**, **Preview**, and **Development** for each variable.

### 6. Redeploy
```bash
vercel --prod
```

### 7. Test
- Visit your Vercel URL
- Submit the contact form
- Check your email!

---

## Alternative: GitHub Pages (Frontend) + Vercel (Backend)

### Backend (Vercel)
Follow steps 1-6 above to deploy backend to Vercel.

### Frontend (GitHub Pages)

1. **Get your Vercel backend URL** (e.g., `https://your-backend.vercel.app`)

2. **Update Contact.tsx** - Replace line 73-76 with:
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL 
     ? `${import.meta.env.VITE_API_URL}/api/contact`
     : 'https://your-backend.vercel.app/api/contact'; // Your Vercel URL
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Configure for deployment"
   git push
   ```

4. GitHub Actions will automatically deploy to GitHub Pages!

---

## Need Help?

See `DEPLOYMENT_GUIDE.md` for detailed instructions and troubleshooting.


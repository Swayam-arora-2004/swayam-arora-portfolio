# GitHub Pages Deployment Guide

This project is configured for automatic deployment to GitHub Pages.

## Prerequisites

1. Make sure your repository is on GitHub
2. Ensure you have write access to the repository

## Setup GitHub Pages

1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Choose "gh-pages" branch
6. Click "Save"

## Automatic Deployment

The project is configured with GitHub Actions that will automatically:
- Build your project when you push to main/master branch
- Deploy to GitHub Pages using the gh-pages branch

## Manual Deployment

If you want to deploy manually:

```bash
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Deploy the built files to the gh-pages branch

## Local Testing

To test the production build locally:

```bash
npm run build
npm run preview
```

## Important Notes

- The base path is automatically set to `/swayam-data-craft/` for production builds
- Make sure your repository name matches the base path in `vite.config.ts`
- The first deployment might take a few minutes to become available
- You can check deployment status in the "Actions" tab of your repository

## Troubleshooting

- If the site shows a 404, check that GitHub Pages is enabled and pointing to the gh-pages branch
- If assets don't load, verify the base path in `vite.config.ts` matches your repository name
- Check the Actions tab for any build errors

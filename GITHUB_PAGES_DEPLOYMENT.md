# Deploying to GitHub Pages

This guide will help you deploy the MindfulEd application to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine

## Setup Steps

1. **Create a GitHub repository**

   Create a new repository on GitHub named `school-loveable` or another name of your choice.

2. **Update the package.json**

   In `package.json`, update the `homepage` field with your GitHub username:

   ```json
   "homepage": "https://gtrev500.github.io/school-loveable",
   ```

3. **Initialize and connect to GitHub**

   ```bash
   # Initialize the git repository (if not already done)
   git init

   # Add all files to staging
   git add .

   # Commit the files
   git commit -m "Initial commit"

   # Add GitHub as remote
   git remote add origin https://github.com/gtrev500/school-loveable.git

   # Push to GitHub
   git push -u origin main
   ```

## Deployment Methods

### Method 1: Manual Deployment

Run the following command to deploy to GitHub Pages:

```bash
npm run deploy
```

This will create a `gh-pages` branch in your repository with the build files.

### Method 2: GitHub Actions (Recommended)

The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically deploy your application when you push to the `main` branch.

1. Ensure your repository has GitHub Pages enabled:
   - Go to your repository settings
   - Navigate to "Pages"
   - Set the source to "GitHub Actions"

2. Push your code to the main branch:
   ```bash
   git push -u origin main
   ```

3. The GitHub Actions workflow will build and deploy your application.

## Verify Deployment

After deployment, your site should be available at:
```
https://gtrev500.github.io/school-loveable/
```

The first deployment might take a few minutes to become available.

## Troubleshooting

1. **404 Page Not Found**
   - Check if GitHub Pages is enabled in your repository settings
   - Ensure the `homepage` field in `package.json` matches your GitHub Pages URL
   - Verify that the `base` path in `vite.config.ts` matches your repository name

2. **Routing Issues**
   - The application uses HashRouter to handle client-side routing on GitHub Pages
   - If you still encounter issues, check for hard-coded paths in your components

3. **Build Failures**
   - Check the GitHub Actions logs for any build errors
   - Ensure all dependencies are correctly installed
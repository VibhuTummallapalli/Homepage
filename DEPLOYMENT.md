# Deployment Guide

## Option 1: GitHub Pages (Recommended for this assignment)

### Steps:

1. **Your code is already pushed to GitHub** ✅

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub: https://github.com/VibhuTummallapalli/Personal-Homepage-Vibhu-Tummallapalli
   - Click on **Settings** (gear icon)
   - Scroll down to **Pages** in the left sidebar
   - Under **Source**, select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**

3. **Wait for deployment** (usually 1-2 minutes)
   - GitHub will show a blue banner "Your site is ready to be published at..."
   - Then it will turn green: "Your site is live at..."

4. **Your website URL will be:**
   ```
   https://vibhutummallapalli.github.io/Personal-Homepage-Vibhu-Tummallapalli/
   ```

5. **Test your site:**
   - Open the URL in different browsers
   - Test on mobile (use browser dev tools or actual device)
   - Check all links work
   - Verify images load correctly

---

## Option 2: Netlify (Alternative)

### Steps:

1. **Sign up/Login to Netlify:**
   - Go to https://netlify.com
   - Sign in with GitHub

2. **Deploy from Git:**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub"
   - Authorize Netlify to access your repos
   - Select: `Personal-Homepage-Vibhu-Tummallapalli`

3. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `.` (root)
   - Click "Deploy site"

4. **Your site URL:**
   - Netlify generates a random URL like: `random-name-12345.netlify.app`
   - You can customize it in Site settings → Domain management

5. **Test deployment:**
   - Click on the deployed URL
   - Test responsiveness and links

---

## Taking Screenshots for Submission

### Desktop Screenshot:
1. Open your deployed site in a browser
2. Zoom to 100%
3. Press `Windows + Shift + S` (Windows) or `Cmd + Shift + 4` (Mac)
4. Capture the full page or use browser extension "Full Page Screen Capture"

### Mobile Screenshot:
1. Open browser DevTools (F12)
2. Click device toggle button (phone icon)
3. Select "iPhone 12 Pro" or similar
4. Take screenshot using DevTools screenshot feature

---

## Submission Checklist

- [ ] Code pushed to GitHub Classroom repository
- [ ] Website deployed to GitHub Pages or Netlify
- [ ] Deployed URL is accessible
- [ ] All requirements met:
  - [ ] Header section ✅
  - [ ] Short bio ✅
  - [ ] Links section ✅
  - [ ] At least one image ✅
  - [ ] CSS styling (Tailwind) ✅
  - [ ] Responsive design ✅
- [ ] Desktop screenshot taken
- [ ] Mobile screenshot taken (optional but recommended)
- [ ] Canvas submission completed with:
  - [ ] Deployed URL
  - [ ] Screenshot(s)

---

## Troubleshooting

### GitHub Pages shows 404:
- Wait 2-3 minutes after enabling Pages
- Check that `index.html` is in the root directory
- Verify branch is set to `main` in Pages settings

### Styles not loading on GitHub Pages:
- Make sure `dist/output.css` is committed
- Check paths are relative: `./dist/output.css` not `/dist/output.css`
- Run `npm run build` before committing

### Netlify build fails:
- Ensure `package.json` and `package-lock.json` are committed
- Check build logs in Netlify dashboard
- Verify build command is `npm run build`

---

## Next Steps (Optional Enhancements)

- Update placeholder images with your own photos
- Add your real social media links
- Include actual project descriptions
- Add animations with Tailwind CSS
- Create more pages (About, Projects, Blog)
- Add contact form functionality
- Implement dark mode toggle

---

**Good luck with your submission! 🚀**

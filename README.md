# Personal Homepage - Vibhu Tummallapalli

A responsive personal homepage built with HTML, CSS, and Tailwind CSS.

## Features

- ✨ Modern, clean design with gradient backgrounds
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🎨 Styled with Tailwind CSS utility classes
- 🖼️ Image gallery and profile section
- 🔗 Social media links (GitHub, LinkedIn, Email, Portfolio)
- 📊 Skills showcase with icons
- 💼 Featured projects section
- 🚀 Fast and lightweight

## Technologies Used

- HTML5
- CSS3
- Tailwind CSS v3.4
- Font Awesome icons
- GitHub Pages / Netlify

## Local Development

1. Clone the repository
```bash
git clone <your-repo-url>
cd Personal-Homepage-Vibhu-Tummallapalli
```

2. Install dependencies
```bash
npm install
```

3. Build Tailwind CSS
```bash
npm run build
```

4. Open `index.html` in your browser

## Deployment

### GitHub Pages

1. Push code to GitHub
2. Go to repository Settings → Pages
3. Select branch (main) and folder (/ root)
4. Save and wait for deployment

### Netlify

1. Push code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `.`
7. Deploy site

## Project Structure

```
Personal-Homepage-Vibhu-Tummallapalli/
├── index.html              # Main HTML file
├── src/
│   └── input.css          # Tailwind CSS source
├── dist/
│   └── output.css         # Compiled CSS
├── package.json           # Node dependencies
├── tailwind.config.js     # Tailwind configuration
├── netlify.toml          # Netlify configuration
└── README.md             # This file
```

## Customization

To personalize this homepage:

1. Update the content in `index.html`:
   - Change name, bio, and description
   - Update social media links
   - Add your own projects
   - Replace profile image URL

2. Modify colors in Tailwind classes:
   - Primary color scheme uses `indigo` and `purple`
   - Update class names to use different colors

3. Rebuild CSS after changes:
```bash
npm run build
```

## License

MIT

## Author

Vibhu Tummallapalli

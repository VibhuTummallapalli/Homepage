# Homepage

Personal homepage for Vibhu Tummallapalli. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) and deployed to GitHub Pages.

Live: https://vibhutummallapalli.github.io/Homepage/

## Tech

- **Astro 5** — static site generator, zero JS by default
- **Tailwind CSS 3** — utility-first styling via `@astrojs/tailwind`
- **TypeScript** — content lives in [`src/data/site.ts`](src/data/site.ts)
- **GitHub Actions** — auto-deploy on push to `main`

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to ./dist
npm run preview  # serve the build locally
```

## Project structure

```
.
├── .github/workflows/deploy.yml   # GitHub Pages deploy
├── astro.config.mjs               # site + base config
├── public/                        # static assets served at /Homepage/*
│   ├── favicon.svg
│   └── images/                    # profile + logos
├── src/
│   ├── components/                # Nav, Section
│   ├── data/site.ts               # all page content
│   ├── layouts/Layout.astro       # HTML shell
│   ├── pages/index.astro          # homepage
│   └── styles/global.css          # Tailwind layer + custom components
├── tailwind.config.mjs
└── tsconfig.json
```

## Editing content

All resume content (bio, education, experience, projects, skills, contact links) lives in [`src/data/site.ts`](src/data/site.ts). Update that file and the page re-renders.

## Deploy

The workflow `.github/workflows/deploy.yml` builds with `withastro/action@v3` and publishes via `actions/deploy-pages@v4`. **One-time setup**: in repo Settings → Pages, set **Source** to **GitHub Actions**.

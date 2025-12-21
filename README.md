# ASDS Space Technologies Website

Astro + Tailwind landing page for ASDS Space Technologies Ltd.

## Commands
- `npm install`
- `npm run dev`
- `npm run build` (outputs static files to `dist/`)
- `npm run preview`

## Docker-compose
If you have docker installed, you can run the dev environment with `sudo docker-compose up`

## Deployment Notes
- Update `GITHUB_USER` and `REPO` in `astro.config.mjs` to match your repository.
- For GitHub Pages project sites, keep `base` at `/${REPO}`; for user/org sites, switch `base` to `/`.

## Content Checklist
- Keep meta defaults in `src/layouts/BaseLayout.astro` aligned with the latest TunaCan positioning.
- Refresh `public/site.webmanifest` with the latest product name and description.
- Ensure every image includes meaningful `alt` text.

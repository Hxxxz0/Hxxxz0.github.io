# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page academic personal website for Haozhe Jia, built with Astro 4 and deployed to GitHub Pages at `hxxxz0.github.io`. All content is server-independent — the site is fully static HTML/CSS with no client-side JavaScript.

## Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server (http://localhost:4321)
npm run build        # Production build to dist/
npm run preview      # Preview the production build locally
```

No test suite exists. Validate changes with `npm run build`, then spot-check locally.

## Architecture

```
src/
  data/site.ts            # All site content — the single source of truth
  layouts/BaseLayout.astro  # HTML shell (<head>, global CSS, <body> wrapper)
  pages/index.astro       # Main page: header + nav + all sections composed inline
  pages/404.astro         # 404 page
  components/*.astro      # One component per page section (Hero, Research, etc.)
  styles/global.css       # All styles (CSS custom properties, layout, typography, responsive)
  env.d.ts                # Astro type declarations
astro.config.mjs          # Sets site URL and static output mode
tsconfig.json             # Extends astro/tsconfigs/strict
```

**Data flow:** `src/data/site.ts` exports a single `siteData` object with typed interfaces (ResearchArea, Publication, ExperienceEntry, ContactLink). Every section component imports `siteData` and maps over its data. There is no CMS, no API, and no props drilling — each component directly imports what it needs.

**Styling:** Pure CSS with custom properties on `:root` for colors, spacing, and shadows. No Tailwind, no preprocessor. Two typefaces from Google Fonts: Manrope (UI) and Source Serif 4 (headings). Responsive breakpoints at 980px and 720px. Respects `prefers-reduced-motion`.

**Components are data-agnostic renderers** — they accept no props, import `siteData` directly, and iterate over arrays. To add or change content, edit `src/data/site.ts`.

## Content editing

All text, links, publications, experience entries, and research areas live in `src/data/site.ts`. The TypeScript interfaces at the top of that file document the shape of each data type. When adding a publication, follow the existing field conventions (`venue`, `role`, `dateRange`, `summary`, optional `href`).

## Git

The repo has no branch protections or CI beyond GitHub Pages deployment. Commit messages use short imperative subjects, often with emoji prefixes (e.g., `🔧 Fix GitHub Pages build`).

## Note

`AGENTS.md` in the root is stale — it describes a previous Jekyll/Ruby version of this site. Ignore it.

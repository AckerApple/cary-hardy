# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based web application for Cary Hardy's website, using the taggedjs library for component-based development. The site is deployed to GitHub Pages.

## Commands

### Development
- `npm run watch` - Watch src folder for changes and auto-rebuild
- `npm run build` - Build HTML and bundle TypeScript (production)
- `npm run build:preview` - Build preview version

### Deployment
- `npm run deploy` - Build and push to GitHub (production)
- `npm run deploy:preview` - Build preview version and push to GitHub
- `npm run save` - Git add, commit with "update" message, and push

### Maintenance
- `npm run update` - Update taggedjs dependency and copy bundles to src and root directories

## Architecture

### Build Process
1. HTML files are merged using `mergeHtmlFiles.cjs` which combines `.src.html` files with `wrap.html`
2. TypeScript is bundled using webpack with the taggedjs-cli loader for HTML string processing
3. Output goes to `/assets/bundle.js` for production or `/preview/assets/bundle.js` for preview

### Component Structure
- Components are TypeScript files ending in `.tag.ts` using the taggedjs library
- Main components: `homeTag`, `adminTag`, `meetupTag`, and `countdown` (clock)
- Components are imported and mounted to DOM elements via script tags in HTML files

### File Organization
- `/src` - TypeScript source files and components
- `/scripts` - Build scripts (TypeScript and CommonJS)
- `/assets` - Built JavaScript bundles and media
- `*.src.html` files - HTML fragments that get merged into full pages
- `wrap.html` - Base HTML template for production pages

### Key Technologies
- TypeScript with ESM modules
- Webpack for bundling with Terser minification
- taggedjs for reactive component framework
- Node.js with ts-node for build scripts
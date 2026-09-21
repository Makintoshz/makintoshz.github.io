# Instructions for AI assistants working on this repo

This repo is the owner's personal website hub, published automatically by GitHub Pages at https://makintoshz.github.io

## Structure
- `index.html` at the root is the home page: a list of links to every site.
- Each site lives in its own folder: `/<site-name>/` -> https://makintoshz.github.io/<site-name>/
- Each site folder must contain its own `index.html` and all of its own assets (images, css, js).

## Rules (must follow)
1. Only create or edit files inside the folder of the site you were asked to work on.
2. Never modify, move, rename or delete any other site folder or its files.
3. The ONLY file outside that folder you may touch is the root `index.html`, and only to add (or update) the one link to that site. Do not change anything else in it.
4. Never delete or change this `CLAUDE.md` file unless the owner explicitly asks.
5. Folder names: lowercase, no spaces, use hyphens (e.g. `note-app`).
6. Use relative paths inside a site (e.g. `images/logo.png`, not `/images/logo.png`) so it works under its sub-path.
7. Keep sites self-contained: no external build step; plain HTML/CSS/JS that works as-is on GitHub Pages.
8. Commit everything for one site in a single commit with a clear message, e.g. `Add noteapp landing page`.

## iOS app landing pages
When asked for a landing page for an iPhone app, include by default:
- Hero section: app name, icon, one-line tagline, App Store button (placeholder link if not provided).
- Features section, screenshots section (placeholders if none given), footer.
- A `privacy/index.html` page inside the site folder (required for App Store submissions) and a support/contact section or `support/index.html`.
- Mobile-first responsive design, light and dark mode.
- Support Arabic (RTL) and/or English as requested.

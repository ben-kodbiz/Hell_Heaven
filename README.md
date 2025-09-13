# Heaven-Hell Interactive (static)

This is a minimal static site to explore Islamic descriptions of Heaven (Jannah) and Hell (Jahannam).
It is intentionally lightweight and designed for GitHub Pages.

## Usage

1. Clone or unzip the project.
2. Open `index.html` locally in a browser for testing.
3. To publish:
   - Push the project to a GitHub repository.
   - In repository Settings → Pages, choose branch `main` (or `gh-pages`) and `/root`.
   - Save and wait a minute — your site will be published.

## Structure

- `index.html` — landing page with two doors.
- `heaven.html` — Heaven content (loads from `data/verses.json`).
- `hell.html` — Hell content (loads from `data/verses.json`).
- `css/style.css` — small custom overrides on top of PicoCSS.
- `js/app.js` — client-side loader & controls.
- `data/verses.json` — foundation Qur'an/Hadith/Scholar entries.

## Notes & Ethics

- Content is sourced from Qur'an, Sahih Hadith, and classical scholars for educational/demo purposes.
- If you publish publicly, consider adding a fuller disclaimer and links to authoritative translations and scholars.


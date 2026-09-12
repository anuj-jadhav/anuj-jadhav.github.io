# anuj-jadhav-site

Personal website for Anuj Jadhav — plain HTML/CSS/JS, no build step, fully
customizable, and free to host on GitHub Pages.

## Structure

```
index.html          About page
projects.html       Projects
publications.html   Publications ("coming soon" placeholder)
cv.html             CV — links cv-placeholder.pdf for download
cv-placeholder.pdf  Placeholder CV file — replace with the real one
css/style.css       All styling (light + dark mode via prefers-color-scheme)
js/script.js        Mobile menu toggle + active-nav-link highlighting
images/             Profile photo (currently a placeholder SVG)
```

## Customize

- **Photo**: replace `images/profile-placeholder.svg` with a real photo
  (e.g. `images/profile.jpg`) and update the `src` in the three HTML files.
- **Colors**: edit the CSS variables at the top of `css/style.css`
  (`--accent`, `--bg`, etc.).
- **Content**: edit the HTML files directly — each page repeats the same
  sidebar markup, so update contact links / nav in all three if they change.
- **CV**: replace `cv-placeholder.pdf` in the project root with your real CV
  (same filename, or update the `href` in `cv.html`), or replace the page's
  download button with a full HTML CV.
- **Publications**: `publications.html` currently just says "Coming soon" —
  replace its `.coming-soon` block with an actual list when ready.

## Deploy to GitHub Pages (free)

1. Create a new GitHub repo. To get the site at the root domain
   `https://anuj-gif-web.github.io/`, name the repo exactly
   `anuj-jadhav.github.io`. Any other repo name works too — the site will
   then live at `https://anuj-gif-web.github.io/<repo-name>/`.
2. Push this folder to that repo:

   ```bash
   cd anuj-jadhav-site
   git init
   git add .
   git commit -m "Initial personal site"
   git branch -M main
   git remote add origin https://github.com/anuj-jadhav/<repo-name>.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Build and deployment → Source** = "Deploy
   from a branch", **Branch** = `main`, folder `/ (root)`. Save.
4. Wait a minute, then visit the URL GitHub shows on that Pages settings
   page.

No Jekyll, no Ruby, no build step — GitHub Pages serves these static files
directly.

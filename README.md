# anuj-jadhav-site

Personal website for Anuj Jadhav — plain HTML/CSS/JS, no build step.

Live at: **https://anuj-jadhav.github.io/**

## Structure

```
index.html          About page
projects.html       Projects
publications.html   Publications ("coming soon" for now)
cv.html             CV — inline PDF preview + download/open links
cv.pdf              The actual CV shown on the CV page
css/style.css       All styling (light + dark mode, manual toggle)
js/script.js        Mobile menu toggle, active-nav-link highlighting, theme toggle
images/             Profile photo
```

## Customize

- **Photo**: replace `images/profile.jpg` (or whatever the current file is —
  check the `src` on the `<img class="avatar">` tag) and keep the same
  filename, or update the `src` in all four HTML files.
- **Colors**: edit the CSS variables at the top of `css/style.css`
  (`--accent`, `--bg`, etc.).
- **Content**: edit the HTML files directly — each page repeats the same
  sidebar markup, so update contact links / nav in all four if they change.
- **CV**: replace `cv.pdf` in the project root with an updated version, same
  filename — the preview on `cv.html` picks it up automatically.
- **Publications**: `publications.html` currently just says "Coming soon" —
  replace its `.coming-soon` block with an actual list when ready.

## Updating the live site

```bash
cd anuj-jadhav-site
git add .
git commit -m "Describe what changed"
git push
```

GitHub Pages rebuilds from `main` automatically within about a minute of
any push — no separate deploy step. If a browser shows a stale version
right after pushing, hard-refresh (Cmd/Ctrl+Shift+R) or wait a few minutes
for its CDN cache to expire.

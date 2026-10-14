# Ajmal's Internet Corner

A handmade internet scrapbook — the personal site of Ajmal, a 17-year-old web
developer and electronics enthusiast. Built with plain HTML, CSS, and vanilla
JavaScript. No frameworks, no build step, no dependencies.

## What's inside

```
/
├── index.html        # all the markup and content
├── style.css         # the whole visual system (mobile-first)
├── script.js         # project data, nav, cat + easter eggs
├── favicon.svg       # custom handmade favicon
├── README.md         # you are here
└── assets/
    ├── images/
    │   └── parts-doodle.svg   # workshop illustration
    ├── doodles/               # arrows, stars, sparkles, squiggles
    ├── parts/                 # taped-on cutouts: esp32, otto, sensors…
    ├── scraps/                # scrap-paper cards (scrap_1.svg … scrap_30.svg)
    └── photos/                # ← drop your own project photos here
```

## Run it locally

It's a static site, so the simplest way is to just open the file:

1. Double-click `index.html` — everything except the two JavaScript-driven
   lists still renders fine.
2. For the full experience (project cards + "currently exploring"), serve it
   over a tiny local server so the browser treats it as a website:

   ```bash
   # Python 3
   python -m http.server 8000

   # then open http://localhost:8000
   ```

   On Windows PowerShell you can also use:

   ```powershell
   py -m http.server 8000
   ```

No install step. No `npm`. Nothing to compile.

## Editing the content

- **Projects** live in the `PROJECTS` array at the top of `script.js`. Each entry
  has a name, description, tech tags, a GitHub link, and an optional live-demo
  link. Only real, verified URLs are listed — projects without a public link
  show a "no public link yet" note instead of a fake button.
- **Currently exploring** scraps live in the `EXPLORING` array in `script.js`.
  They're editable placeholders — change them whenever.
- **Sticker messages** live in `STICKER_MESSAGES` in `script.js`.
- **Project cutouts**: each project shows a taped-on illustration from
  `assets/parts/`, mapped in the `CUTOUTS` object in `script.js` (keyed by the
  project's `visual` field). To use a real photo instead, drop the image in
  `assets/photos/` and either point a `CUTOUTS` entry at it or add a per-project
  `cutout: "assets/photos/my-photo.jpg"` field (see SignBridge for an example).
- **Scrapbook decorations**: the hero "parts bin" strip and the floating
  `.scrapfield` collages in `index.html` reference `assets/parts/*` and
  `assets/scraps/*`. Swap in your own cutouts the same way — keep them small
  (under ~200 KB each) so the page stays fast.
- **The cat**: roams the page, flees the cursor after being clicked, and calms
  down when fed fish from the bucket (bottom-right). Toggle it with "cat: on/off".
- The `<noscript>` blocks in `index.html` keep the project list readable even
  when JavaScript is off.

## Deploy it

Both hosts serve static files directly — no build command required.

### GitHub Pages

1. Push this folder to a GitHub repository.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Pick the branch (e.g. `main`) and the `/ (root)` folder, then save.
5. Your site appears at `https://<username>.github.io/<repo>/`.

### Cloudflare Pages

1. Push the repo to GitHub (or GitLab).
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages →
   Connect to Git**.
3. Select the repository.
4. Leave the **Build command** empty and set **Build output directory** to `/`.
5. Deploy. Cloudflare gives you a `*.pages.dev` URL.

## Before you publish

- Add a `<link rel="canonical">` and an `og:image` to `index.html` once the
  final domain is known (there are `TODO` comments where they belong).
- Update the `sameAs` links in the JSON-LD block and the contact section if your
  handles change.

## Accessibility & performance notes

- Semantic landmarks, a skip link, visible focus styles, and keyboard support
  for the mobile menu (Escape closes it).
- Full `prefers-reduced-motion` support — all animations collapse to a static,
  fully usable layout.
- No trackers, no external JS, no layout-shifting assets. The only external
  request is Google Fonts, which has system-font fallbacks.

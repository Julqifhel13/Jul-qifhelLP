# Jul-qifhel M. Cana — Executive Portfolio

A premium, single-page resume and portfolio site built on the **Kinetic Executive
Portfolio** design system. Built with **React** and [Vite](https://vite.dev) —
component-based to keep it maintainable, compiled to a fast static bundle that
deploys anywhere.

---

## Quick start

```bash
npm install       # once
npm run dev       # local dev server → http://localhost:5173/Jul-qifhelLP/
npm run build     # production build → ./dist
npm run preview   # preview the production build
```

Node 20.19+ (or 22.12+) is required.

> **Note the `/Jul-qifhelLP/` in the dev URL.** The site is configured with that
> base path so it works on GitHub Pages. Plain `http://localhost:5173` returns a
> blank page.

---

## Editing your content

**Almost everything lives in one file: [`src/data/site.js`](src/data/site.js).**

You do not need to touch any JSX or CSS to update the site. Open that file,
change the text between the quote marks, save, and the page updates instantly.

| What you want to change | Where in `src/data/site.js` |
| --- | --- |
| Name, email, phone, location, headshot | `profile` |
| Menu items | `navLinks` |
| The thin status strip under the menu | `ticker` |
| Availability badge, headline, intro, chips, CTA, profile card | `hero` |
| The four number cards (15+, 18+, …) | `stats` |
| About copy, career objective, four capability cards | `about` |
| Jobs, bullet points, tech tags | `experience.roles` |
| Featured project cards | `projects.items` |
| Skill groups and proficiency bars | `skills.groups` |
| Certifications and their filter categories | `certifications.items` |
| Degree, school, dates | `education` |
| Contact methods and availability note | `contact` |
| Footer blurb and link columns | `footer` |

### Adding a certification

Append one line to `certifications.items`:

```js
{ title: 'Your New Certification', issuer: 'Provider', cat: 'cloud', year: '2026' },
```

`cat` must be one of the ids in `certifications.filters` — `cloud`, `data`,
`agile` or `leadership`. The filter tabs and their counts update automatically.

### Adding your headshot

1. Drop the image into `public/`, e.g. `public/jul-qifhel.jpg`.
2. Set `photo: 'jul-qifhel.jpg'` in the `profile` block.

It renders in the hero card; leave it empty and the card falls back to the
gradient "JC" monogram. A square crop of 300×300 or larger works best.

### Adding your CV as a download

1. Drop the PDF into `public/`, e.g. `public/Jul-qifhel-Cana-Resume.pdf`.
2. Set `resumeUrl: 'Jul-qifhel-Cana-Resume.pdf'` in `profile`.

A "Download CV" button appears in the Contact section automatically.

---

## Project structure

```
index.html                 ← page shell: fonts, meta tags, SEO
src/
├── main.jsx               ← entry point
├── App.jsx                ← assembles the sections in order
├── data/site.js           ← all content (edit this)
├── styles/global.css      ← design tokens + shared component styles
├── hooks/
│   ├── useScrollReveal.js ← fade-in on scroll
│   └── useScrollSpy.js    ← highlights the current nav link
└── components/            ← one .jsx + matching .css per section
    ├── Icon.jsx           ← inline SVG icon set
    ├── Header.jsx  Hero.jsx      About.jsx
    ├── Experience.jsx  Projects.jsx  Skills.jsx
    ├── Certifications.jsx  Education.jsx
    ├── Contact.jsx  Footer.jsx
```

### A note on CSS order

[`src/main.jsx`](src/main.jsx) imports `global.css` **before** `App.jsx`. That
order matters: component rules and global rules often share the same
specificity, so whichever comes last in the bundle wins. Keeping globals first
lets a component override a shared rule. Don't reorder those imports.

---

## Design system

Design tokens (colours, type scale, spacing, radii, elevation) are defined once
as CSS custom properties at the top of
[`src/styles/global.css`](src/styles/global.css) and come straight from
`Kinetic-Executive-Portfolio.md`. Change a token there and it propagates
everywhere.

| Breakpoint | Behaviour |
| --- | --- |
| **Desktop ≥ 1024px** | 2rem gutters, 7/5 hero split, 4-column card grids, experience timeline with a glowing rail |
| **Tablet 768–1023px** | 1.5rem gutters, cards reflow to 2 columns, metrics collapse to 2×2 |
| **Mobile ≤ 767px** | 1rem gutters, full-width stack, slide-down navigation, scrollable filter chips |

---

## Deployment

### GitHub Pages (configured and ready)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and
publishes on every push to `main`. One-time setup:

1. On GitHub go to **Settings → Pages → Build and deployment**.
2. Set **Source** to **GitHub Actions**.

The site goes live at `https://julqifhel13.github.io/Jul-qifhelLP/` and
redeploys automatically on every content change you push.

### Custom domain, Vercel or Netlify

The base path is set in [`vite.config.js`](vite.config.js). For a root domain,
build with:

```bash
BASE_PATH=/ npm run build
```

---

## Accessibility & performance notes

- Fully keyboard navigable, with a skip link and visible focus rings.
- All motion is disabled under `prefers-reduced-motion: reduce`.
- Semantic landmarks and `Person` structured data for search engines.
- No UI or animation libraries — just React and hand-written CSS.

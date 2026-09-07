# Jul-qifhel M. Cana — Executive Portfolio

A premium, single-page resume and portfolio site built on the **Kinetic Executive
Portfolio** design system. Built with [Astro](https://astro.build) — component-based
to keep it maintainable, but it compiles to plain static HTML, so it loads fast and
deploys anywhere.

---

## Quick start

```bash
npm install       # once
npm run dev       # local dev server → http://localhost:4321/Jul-qifhelLP
npm run build     # production build → ./dist
npm run preview   # preview the production build
```

Node 18.20+ (or 20.3+ / 22+) is required.

---

## Editing your content

**Almost everything lives in one file: [`src/data/site.js`](src/data/site.js).**

You do not need to touch any HTML or CSS to update the site. Open that file, change
the text between the quote marks, save, and the page updates.

| What you want to change | Where in `src/data/site.js` |
| --- | --- |
| Name, email, phone, location, availability | `profile` |
| Browser tab title & Google description | `seo` |
| Menu items | `navLinks` |
| The thin status strip under the menu | `ticker` |
| Headline, intro paragraph, chips, buttons | `hero` |
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

`cat` must be one of the ids listed in `certifications.filters` — `cloud`, `data`,
`agile` or `leadership`. The filter counts update automatically.

### Adding a job

Append an object to `experience.roles` following the shape of the existing ones.
Set `current: true` on whichever role should show the live green indicator.

### Adding your CV as a download

1. Drop the PDF into the `public/` folder, e.g. `public/Jul-qifhel-Cana-Resume.pdf`.
2. Set `resumeUrl: 'Jul-qifhel-Cana-Resume.pdf'` in the `profile` block.

A "Download CV" button appears in the Contact section automatically.

---

## Design system

Design tokens (colours, type scale, spacing, radii) are defined once as CSS custom
properties at the top of [`src/styles/global.css`](src/styles/global.css) and come
straight from `Kinetic-Executive-Portfolio.md`. Change a token there and it
propagates across every component.

Layout follows the spec's responsive rules:

| Breakpoint | Behaviour |
| --- | --- |
| **Desktop ≥ 1024px** | 2rem gutters, 7/5 hero split, 4-column card grids, experience timeline with a glowing central rail |
| **Tablet 768–1023px** | 1.5rem gutters, cards reflow to 2 columns, metrics collapse to 2×2 |
| **Mobile ≤ 767px** | 1rem gutters, full-width linear stack, slide-down navigation, horizontally scrollable filter chips |

---

## Project structure

```
src/
├── data/site.js          ← all content (edit this)
├── styles/global.css     ← design tokens + shared component styles
├── layouts/Base.astro    ← <head>, fonts, SEO, scroll-reveal + scroll-spy scripts
├── components/           ← one file per section
│   ├── Icon.astro        ← inline SVG icon set
│   ├── Header.astro      ├── Hero.astro       ├── About.astro
│   ├── Experience.astro  ├── Projects.astro   ├── Skills.astro
│   ├── Certifications.astro ├── Education.astro
│   ├── Contact.astro     └── Footer.astro
└── pages/index.astro     ← assembles the sections in order
```

Each component keeps its own styles in a scoped `<style>` block, so editing one
section can't break another.

---

## Deployment

### GitHub Pages (configured and ready)

[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) builds and publishes
on every push to `main`. One-time setup:

1. Push this repository to `https://github.com/Julqifhel13/Jul-qifhelLP`.
2. On GitHub go to **Settings → Pages → Build and deployment**, and set
   **Source** to **GitHub Actions**.

The site then goes live at `https://julqifhel13.github.io/Jul-qifhelLP/`, and
redeploys automatically each time you push a content change.

### Custom domain, Vercel or Netlify

The site is served from a sub-path on GitHub Pages, so it's built with a
`base` of `/Jul-qifhelLP`. If you move it to a root domain, edit
[`astro.config.mjs`](astro.config.mjs):

```js
const SITE_URL = 'https://yourdomain.com';
const BASE_PATH = '/';
```

Or override without editing the file:

```bash
BASE_PATH=/ SITE_URL=https://yourdomain.com npm run build
```

---

## Accessibility & performance notes

- Fully keyboard navigable, with a skip link and visible focus rings.
- All motion is disabled under `prefers-reduced-motion: reduce`.
- Zero client-side frameworks — only a few kilobytes of vanilla JS for the mobile
  menu, certification filters, scroll-spy and reveal animations.
- Semantic landmarks and `Person` structured data for search engines.

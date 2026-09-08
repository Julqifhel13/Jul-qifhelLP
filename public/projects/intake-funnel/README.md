# Project screenshots — Nonprofit & Law Firm Client Intake Funnel

Save the seven screenshots here using **exactly these filenames**. The gallery
opens when the project card is clicked on the Projects section.

| # | Filename | What it shows |
| --- | --- | --- |
| 1 | `mila-about.png` | Mission Impact Legal Advisors — founder story & "Who We Serve" |
| 2 | `mila-practice-areas.png` | Mission Impact Legal Advisors — practice areas & service tiers (the long one) |
| 3 | `mila-mergers.png` | Mission Impact Legal Advisors — Mergers & Transactions page with testimonial |
| 4 | `doctor-mold-pro-about.png` | Doctor Mold Pro — "Welcome to Doctor Mold Pro" founder page |
| 5 | `ymbs-home.png` | Yellow Mountain — home page, "We Embed With Your Team" |
| 6 | `ymbs-team.png` | Yellow Mountain — "Meet the Team" page |
| 7 | `ymbs-services.png` | Yellow Mountain — core services, testimonials & FAQ |

## Notes

- **`.png` or `.jpg` both work** — if you save as `.jpg`, update the matching
  `src` values in [`src/data/site.js`](../../../src/data/site.js) under the
  project's `gallery` array.
- Keep them **full-page screenshots**; the viewer scrolls tall images rather
  than squashing them.
- Width around **1400–2400px** is ideal. Anything wider just inflates the file
  size without looking sharper.
- Consider compressing before committing — a 2400px-wide PNG can be several MB.
  Saving as JPG at ~80% quality, or running them through
  [squoosh.app](https://squoosh.app), keeps the page fast.

Until the files are added, the gallery still opens and tells you which file is
missing, so nothing breaks.

## Changing the captions or order

Both live in [`src/data/site.js`](../../../src/data/site.js) — find
`projects.items`, then the `gallery` array on the first project. Reorder the
entries to reorder the gallery.

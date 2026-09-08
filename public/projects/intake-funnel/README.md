# Project screenshots — Nonprofit & Law Firm Client Intake Funnel

These images power the gallery that opens when the project card is clicked.

| # | File | What it shows |
| --- | --- | --- |
| 1 | `mila-about.jpg` | Mission Impact Legal Advisors — founder story & "Who We Serve" |
| 2 | `mila-practice-areas.jpg` | Mission Impact Legal Advisors — practice areas & service tiers |
| 3 | `mila-mergers.jpg` | Mission Impact Legal Advisors — Mergers & Transactions + testimonial |
| 4 | `doctor-mold-pro-about.jpg` | Doctor Mold Pro — founder page |
| 5 | `ymbs-home.jpg` | Yellow Mountain — home page |
| 6 | `ymbs-team.jpg` | Yellow Mountain — "Meet the Team" |
| 7 | `ymbs-services.jpg` | Yellow Mountain — core services & FAQ |

Each one has a matching `*-thumb.jpg` used by the thumbnail strip, so opening
the gallery doesn't pull seven full-size images.

## Adding or replacing a screenshot

The originals were 2404px-wide PNGs totalling 31 MB, which was far too heavy to
serve. They were converted to **1600px-wide JPEGs at quality 80** (~3 MB total)
and the full-size PNGs moved to `.originals/` in the project root, which is
git-ignored.

To add a new screenshot, keep to the same recipe:

```bash
# from the project root, with sharp installed
npx sharp-cli -i "source.png" -o public/projects/intake-funnel/name.jpg resize 1600 --withoutEnlargement -- jpeg --quality 80
```

Or use [squoosh.app](https://squoosh.app): resize to 1600px wide, export JPEG at
~80% quality. Then make a 240×170 crop from the top for `name-thumb.jpg`.

Finally add the entry to the `gallery` array in
[`src/data/site.js`](../../../src/data/site.js) with its `src`, `thumb` and
`caption`.

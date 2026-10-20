# Showcase graphics

The designed overview for each project — one 16:9 poster, exported from Figma.
It leads that project’s gallery, where the lightbox gives it the full viewport.

It is deliberately NOT the card visual. At card width its type renders around
5px; the card instead rebuilds the same content as markup (`role`,
`highlights`, `preview` in `src/data/site.js`) so it can be read without
zooming.

| File                | Figma frame                                    | Gallery it leads                                  |
| ------------------- | ---------------------------------------------- | ------------------------------------------------- |
| `intake-funnel.jpg` | `7:85` — 01 Client Intake Funnel               | Nonprofit & Law Firm Client Intake Funnel         |
| `automations.jpg`   | `13:113` — 03 Business Automation              | Business Automation & Lead Management             |
| `kcg.jpg`           | `10:76` — 02 Digital Systems & Dashboards      | Digital Systems, Dashboard & Website Development  |

Source file: **Jul-qifhel Cana — Project Showcase Graphics**
(`P27UKVuDuvWZ8KyEBXPS4X`).

## Re-exporting

Export the frame as PNG at 2× (3200×1800), then downscale to **2200 px wide**
and save as JPEG at quality 88. That width covers the card at full container
size on a 2× display; the source PNG is 3–4× the file size for no visible gain.

Each poster also has a 240px `*-thumb.jpg` for the gallery strip.

Keep the figures on the artwork in step with `src/data/site.js`. The card
repeats what the poster says — scope, role, the four build highlights and the
result — because the poster is an image: the markup is what screen readers,
search engines and small screens actually get.

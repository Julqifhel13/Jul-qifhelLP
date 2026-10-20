# Showcase graphics

The card artwork for each project in the Showcase section — one 16:9 poster per
project, exported from Figma rather than drawn in CSS.

| File                | Figma frame                                    | Project card                                      |
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

Keep the figures on the artwork in step with `src/data/site.js` — the `scope`
pill, `result` line and `resultTag` on each project repeat what the graphic
says, because the graphic is an image and the card text is what screen readers
and small screens get.

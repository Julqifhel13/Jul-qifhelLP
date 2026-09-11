# Automation screenshots — Business Automation & Lead Management

GoHighLevel workflow canvases shown when that project card is clicked.

| File | Workflow |
| --- | --- |
| `ymbs-book-call.png` | Yellow Mountain — book-a-call confirmation & staff assignment |
| `ymbs-contact-us.png` | Yellow Mountain — contact form with enquiry-type branching |
| `ymbs-get-guidance.png` | Yellow Mountain — "Get guidance today" enquiry |
| `ymbs-learn-more.png` | Yellow Mountain — "Learn more" nurture & scheduling link |
| `ymbs-seo.png` | Yellow Mountain — SEO enquiry follow-up |
| `ymbs-tech-audit.png` | Yellow Mountain — tech audit request |
| `jtf-ai-question-collection.png` | John T. Floyd — AI receptionist, question analysis & logging |
| `jtf-completed-call-sms.png` | John T. Floyd — post-call note, alert & caller SMS |

Each has a matching `*-thumb.jpg` for the thumbnail strip.

## Why these stay PNG

Unlike the page screenshots in `../intake-funnel/`, these are flat-colour
diagrams with small text. JPEG compression blurs the node labels and resizing
destroys them outright, so these are kept **lossless PNG at native resolution**
(169 KB for all eight). Only the thumbnails are JPEG.

## How they are displayed

These canvases are wide and short — up to 1768×312. Fitting one to the 1040px
viewer would shrink its labels to roughly 6px, so the viewer detects an aspect
ratio above 2:1 and switches to **pan mode**: the image renders at native size
and scrolls horizontally. See `.lb__frame--pan` in
[`Lightbox.css`](../../../src/components/Lightbox.css).

If you add a wide screenshot, nothing extra is needed — the mode is detected
from the image itself on load.

## Adding one

1. Export the canvas as PNG at native resolution (don't scale it down).
2. Save it here with a kebab-case name, plus a 240×170 `-thumb.jpg`
   (`fit: contain` on white, so the diagram shape stays recognisable).
3. Add `src`, `thumb` and `caption` to the `gallery` array on the
   "Business Automation & Lead Management" project in
   [`src/data/site.js`](../../../src/data/site.js).

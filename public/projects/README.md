# Project screenshots

One folder per project card, and inside each, one folder per client. The
`gallery` array on each project in [`src/data/site.js`](../../src/data/site.js)
points at these paths.

```
projects/
├── intake-funnel/            → "Nonprofit & Law Firm Client Intake Funnel"
│   ├── mila/                   about, practice-areas, mergers
│   ├── doctor-mold-pro/        about
│   └── ymbs/                   home, team, services
│
├── automations/              → "Business Automation & Lead Management"
│   ├── ymbs/                   book-call, contact-us, get-guidance,
│   │                           learn-more, seo, tech-audit
│   ├── john-t-floyd/           ai-question-collection, completed-call-sms
│   └── copperstone/            mail-received, mail-scan-request,
│                               forward-request, mail-aging-reminder,
│                               package-received, tour-request,
│                               tour-no-show, vo-onboarding, missed-call
│
└── kcg/                      → "Digital Systems, Dashboard & Website Development"
    ├── admin-dashboard/        overview, panel-1 … panel-4
    ├── client-portal/          panel-1 … panel-5
    └── website/                section-1 … section-4
```

Every image has a matching `*-thumb.jpg` (240×170) for the thumbnail strip, so
opening a gallery never pulls the full-size files.

## Which format to use

It depends on what the screenshot contains — the wrong choice is visible.

| Kind | Format | Why |
| --- | --- | --- |
| Full-page site screenshots (`intake-funnel/`) | JPEG, 1600px wide, q80 | Photographic content; the originals were 31 MB of PNG |
| Workflow canvases (`automations/`) | **Lossless PNG, native size** | Flat colour with small labels — JPEG smears the text and downscaling destroys it |
| UI screenshots (`kcg/`) | JPEG, native width, q86 | Mixed UI and imagery; shown downscaled, which hides artefacts |

## How the viewer picks fit vs pan

[`Lightbox.jsx`](../../src/components/Lightbox.jsx) measures each image as it
loads and switches on aspect ratio:

- **wider than 2.6:1** → pan mode: native size with horizontal scrolling.
  Workflow canvases reach 5.7:1 and are unreadable fitted to the panel.
- **anything else** → fit to the panel width.

2.6 is the dividing line because full-page UI screenshots land near 2.2:1,
where seeing the whole layout matters more than pixel scale, while the
diagrams start around 2.75:1.

Nothing needs configuring per image — add a screenshot of any shape and the
mode follows from the file.

## Adding a screenshot

1. Drop it in the right client folder (create one if it's a new client).
2. Generate a 240×170 `-thumb.jpg` alongside it.
3. Add `src`, `thumb` and `caption` to that project's `gallery` in
   `src/data/site.js`.

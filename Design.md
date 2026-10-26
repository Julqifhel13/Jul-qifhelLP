---
name: Executive Precision
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#45474b'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#76777b'
  outline-variant: '#c6c6cb'
  surface-tint: '#5d5e63'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1a1c20'
  on-primary-container: '#828489'
  inverse-primary: '#c6c6cc'
  secondary: '#575f6d'
  on-secondary: '#ffffff'
  secondary-container: '#d8e0f1'
  on-secondary-container: '#5b6371'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00174b'
  on-tertiary-container: '#497cff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#dbe3f4'
  secondary-fixed-dim: '#bfc7d7'
  on-secondary-fixed: '#141c28'
  on-secondary-fixed-variant: '#3f4755'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-hero:
    fontFamily: Geist
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.035em
  display-hero-mobile:
    fontFamily: Geist
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 42px
    letterSpacing: -0.03em
  headline-xl:
    fontFamily: Geist
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 34px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Geist
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Geist
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 23px
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 19px
    letterSpacing: 0em
  label-code:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: -0.01em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

This design system targets enterprise founders, C-suite executives, and technical engineering leaders seeking high-leverage execution in operations, automation, and AI workflows. The aesthetic merges Apple’s disciplined hardware/software minimalism with high-end architectural editorial design. It conveys calm authority, extreme technical competence, and uncompromising attention to detail.

The visual style blends:
- **Disciplined Precision Minimalism:** Systematic whitespace, disciplined typography, absence of decorative noise, and clarity of information density.
- **Subtle Glassmorphism & Hairline Surface Detailing:** Controlled opacity shifts, 1px translucent borders (`rgba(0, 0, 0, 0.06)` or `rgba(255, 255, 255, 0.1)`), and backdrop blurs to establish structure without weight.
- **Tactile Micro-Interactions:** Subdued interactive states (spring curves, gentle opacity adjustments, and 1–2px micro-translations) that feel responsive, physical, and native.

## Colors

The palette relies on a monochromatic foundation with slate undertones rather than stark black and white, achieving warmth and digital tactility.

- **Primary (`#0F1115`):** Carbon Slate. Anchors typography, high-impact CTA surfaces, and primary structural accents. Replaces harsh `#000000` with deep, rich density.
- **Secondary (`#4A5260`):** Muted Graphite. Used for supporting narrative text, captions, secondary actions, metadata labels, and subtle icons.
- **Tertiary (`#2563EB`):** Precision Signal Blue. Used sparingly for interactive focus rings, active execution states, and system badges (e.g., live operational status, automated hooks).
- **Neutral (`#F8F9FA`):** Alabaster Bone. The foundation canvas, providing a warmer surface than harsh white.

### Supporting Token Conventions
- **Surface Elevation 0 (Canvas):** `#F8F9FA`
- **Surface Elevation 1 (Card/Container):** `#FFFFFF` with `rgba(15, 17, 21, 0.04)` hairline borders.
- **Surface Elevation Glass:** `rgba(255, 255, 255, 0.72)` paired with `backdrop-filter: blur(16px) saturate(180%)`.
- **Dividers & Hairlines:** `rgba(15, 17, 21, 0.08)` (Light) / `rgba(255, 255, 255, 0.10)` (Dark).

## Typography

The typography pairs `Geist`—a clean, engineered grotesque sans-serif evoking Apple's San Francisco—with `JetBrains Mono` for metadata, tags, and technical indicators.

- **Tracking:** Headlines feature negative tracking (`-0.02em` to `-0.035em`) to evoke Swiss architectural modernism.
- **Editorial Contrast:** Restrict weight distribution primarily to Regular (`400`), Medium (`500`), and Semi-bold (`600`). Avoid heavy weights to preserve lightness.
- **Code & Status Tokens:** Use monospaced labels for operational metadata, stack indicators, automation timestamps, and project scopes to reinforce technical rigor.

## Layout & Spacing

The layout is built on a 12-column grid constrained to a maximum content width of `1200px` for editorial balance, expanding to `1400px` on ultrawide displays.

### Form Factor Adaptations
- **Desktop (>= 1024px):** 12-column grid, `gutter: 1.5rem`, outer margin `3rem` to `auto`. Sections leverage generous macro padding (`space-2xl` and `space-3xl`) to create an uncluttered, premium reading cadence.
- **Tablet (768px – 1023px):** 8-column layout, `gutter: 1.25rem`, outer margin `2rem`. Multi-column capability modules collapse cleanly into pairs.
- **Mobile (< 768px):** 4-column layout, `gutter: 1rem`, outer margin `1.25rem`. Complex technical comparison matrices shift to horizontal scroll carousels with subtle scroll fades.

Vertical pacing prioritizes whitespace: section headers, case studies, and stack architectural diagrams are isolated with deliberate vertical breathing room.

## Elevation & Depth

Visual hierarchy is maintained via surface luminance, frosted glass refraction, and 1px hairline borders rather than heavy drop shadows.

- **Level 0 (Base Canvas):** Flat Alabaster `#F8F9FA`.
- **Level 1 (Card & Module Layer):** Pure `#FFFFFF` with a 1px border of `rgba(15, 17, 21, 0.06)`. Subtle ambient shadow: `0 1px 2px rgba(0, 0, 0, 0.02), 0 4px 16px rgba(0, 0, 0, 0.02)`.
- **Level 2 (Interactive Floating / Hover):** Elevated cards shift upward by `2px`, deepening the shadow: `0 8px 24px rgba(15, 17, 21, 0.06)`. Border sharpens to `rgba(15, 17, 21, 0.12)`.
- **Glass Floating (Navigation & Modals):** Background `rgba(248, 249, 250, 0.8)` on canvas, or `rgba(255, 255, 255, 0.8)` on cards, layered with `backdrop-filter: blur(20px) saturate(180%)` and a 1px border of `rgba(255, 255, 255, 0.4)` top-edge reflection.

## Shapes

The design uses continuous curvature (Apple squircle aesthetic) anchored to a geometric baseline:

- **Cards and Structured Containers:** `12px` to `16px` border-radius (`rounded-lg` to `rounded-xl`).
- **Interactive Controls (Inputs, Standard Buttons):** `8px` to `10px` border-radius.
- **Micro-Badges & Meta Chips:** `6px` subtle curve or full pill radii for operational indicators (`9999px`).
- **Dividers & Strokes:** Razor-thin hairlines (`1px`) with crisp non-rounded edges.

## Components

### Buttons
- **Primary:** Dark Carbon Slate background (`#0F1115`), text `#FFFFFF`, 10px radius, 12px vertical by 20px horizontal padding. Hover initiates a subtle brightness ramp (`#22262E`) and a `transform: translateY(-1px)` transition over `200ms cubic-bezier(0.16, 1, 0.3, 1)`.
- **Secondary / Ghost:** Transparent background, hairline border (`1px solid rgba(15, 17, 21, 0.1)`), text `#0F1115`. Hover transitions background to `rgba(15, 17, 21, 0.03)`.
- **Minimal Action:** Pure text button in `#4A5260` with micro-arrow icon, shifting `2px` right on hover.

### Badges & Status Chips
- Constructed with `label-badge` (`JetBrains Mono`).
- Background: `rgba(15, 17, 21, 0.03)`.
- Border: `1px solid rgba(15, 17, 21, 0.08)`.
- Text color: `#4A5260`.
- System operational badge includes a 6px status dot (`#22C55E` or `#2563EB`) with a subtle ambient ping animation.

### Portfolio Cards & Project Panels
- Pure white background, `16px` radius, hairline border `rgba(15, 17, 21, 0.06)`.
- Subtle internal padding (`space-lg` to `space-xl`).
- Hover state smoothly elevates borders to `rgba(15, 17, 21, 0.15)` without dramatic coloration changes.
- Content structured into: Metadata Header (Date/Stack), Editorial Title, Concise Metric Narrative, and Interactive Link Indicator.

### Form Inputs
- Background `#FFFFFF` or `rgba(255, 255, 255, 0.6)` on glass surfaces.
- Border: `1px solid rgba(15, 17, 21, 0.12)`.
- Focus state: `1px solid #0F1115` with an external halo of `0 0 0 3px rgba(37, 99, 235, 0.12)`.
- Typography: `body-md` (`15px`).

### Lists & Case Metrics
- Border-bottom separated with `1px solid rgba(15, 17, 21, 0.06)`.
- Key-value pairs display technical execution: left column displays the domain (Executive Operations, Python Automation, Custom LLM Pipeline), right column displays outcome metrics formatted in `JetBrains Mono`.
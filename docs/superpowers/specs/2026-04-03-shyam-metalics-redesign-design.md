# Shyam Metalics Website Redesign — Design Spec
**Date:** 2026-04-03  
**Author:** Arjun Dhiman  
**Status:** Approved

---

## Overview

Full site redesign covering 5 tasks:
1. Light theme conversion (`#EDF1F5` background, `#0145F2` accent)
2. Three.js 3D fluid wave section dividers (3 waves, behind content)
3. Navbar logo size increase + Hero image/heading fix
4. New animated Footer with legal links
5. Remove unused one-time migration scripts from root

---

## Task 1 — Full Site Light Theme

### Color Token Changes (`src/index.css` `@theme` block)

| Token | Old | New |
|---|---|---|
| `--color-surface` | `#222022` | `#EDF1F5` |
| `--color-surface-dim` | `#222022` | `#E8EDF2` |
| `--color-surface-bright` | `#444244` | `#FFFFFF` |
| `--color-surface-container` | `#2a282a` | `#E2E8F0` |
| `--color-surface-container-low` | `#262426` | `#EDF1F5` |
| `--color-surface-container-high` | `#333133` | `#D6DFE8` |
| `--color-surface-container-highest` | `#3e3c3e` | `#C9D4DF` |
| `--color-surface-container-lowest` | `#1a181a` | `#F5F7FA` |
| `--color-surface-variant` | `#3e3c3e` | `#CBD5E0` |
| `--color-surface-tint` | `#C3D809` | `#0145F2` |
| `--color-background` | `#222022` | `#EDF1F5` |
| `--color-on-background` | `#e5e2e1` | `#0D1117` |
| `--color-on-surface` | `#e5e2e1` | `#0D1117` |
| `--color-on-surface-variant` | `#c4b8b0` | `#4A5568` |
| `--color-primary` | `#C3D809` | `#0145F2` |
| `--color-primary-container` | `#9AAE07` | `#0138C7` |
| `--color-primary-fixed` | `#e8f5a0` | `#E8EFFE` |
| `--color-on-primary` | `#1a1c00` | `#FFFFFF` |
| `--color-on-primary-container` | `#1a1c00` | `#FFFFFF` |
| `--color-outline` | `#7a7574` | `#94A3B8` |
| `--color-outline-variant` | `#4a4544` | `#CBD5E0` |
| `--color-inverse-surface` | `#e5e2e1` | `#0D1117` |
| `--color-inverse-on-surface` | `#313030` | `#EDF1F5` |

### CSS Utility Class Updates (`src/index.css`)

- `.glass-card` → `background: rgba(237,241,245,0.7)`, `backdrop-filter: blur(12px)`
- `.glass-panel` → same as glass-card
- `.molten-gradient` → `linear-gradient(135deg, #0145F2 0%, #0138C7 50%, #0145F2 100%)`
- `.metallic-text` → blue gradient
- `.text-gradient-molten` → `linear-gradient(to right, #0145F2, #5B8EF7, #0145F2)`
- `.industrial-mesh` → `radial-gradient(#CBD5E0 1px, transparent 1px)`
- `.text-glow` → blue glow `rgba(1,69,242,0.6)`
- `.electric-glow` → blue box-shadow
- `.bg-grid-pattern` → blue tinted grid lines

### Hardcoded Color Replacements Across All Pages

All files in `src/` will be scanned and updated:
- `#C3D809` → `#0145F2` (accent)
- `#9AAE07` → `#0138C7` (accent dark)
- `#e8f5a0` → `#E8EFFE` (accent light)
- `#1a181a`, `#222022` (dark backgrounds) → `#EDF1F5` or appropriate light token
- `#1a1c00` (on-primary text) → `#FFFFFF`
- Text colors: `text-zinc-400`, `text-zinc-500`, `text-zinc-600` → `text-slate-600`, `text-slate-500`, `text-slate-400`
- `bg-neutral-900` → `bg-white` or `bg-slate-50`

### Navbar
- Scrolled state bg: `#EDF1F5/90` with light border
- Dropdown bg: `#FFFFFF/95`
- Link text: `text-slate-600` → hover `#0145F2`

---

## Task 2 — Three.js 3D Fluid Wave Dividers

### New Component: `src/components/WaveCanvas.jsx`

**Architecture:**
- Vanilla Three.js (install `three` package)
- `PlaneGeometry` (200 segments × 50 segments) with `ShaderMaterial`
- Custom GLSL vertex shader: multi-frequency sine waves on Y axis
- Fragment shader: `#0145F2` → `#5B8EF7` → `#E8EFFE` gradient based on vertex height
- Canvas positioned `absolute`, `z-index: 0`, full width, height `200–220px`
- Parent section has `position: relative`, content inside has `position: relative; z-index: 10`

**GSAP ScrollTrigger Integration:**
- Each wave canvas observes its own scroll position
- On enter: amplitude animates from `0.3` → `1.5`, speed `0.5` → `1.0`
- On leave-back: reverses
- Smooth easing: `power2.inOut`

**Props:**
```jsx
<WaveCanvas 
  height={200}       // px
  flip={false}       // flips vertically for variety
  intensity={1.0}    // wave amplitude multiplier
/>
```

**Placement (3 dividers):**
| # | Location in Home.jsx | Flip | Height |
|---|---|---|---|
| Wave 1 | After Hero section, before Stats | `false` | `200px` |
| Wave 2 | After Core Materials section | `true` | `220px` |
| Wave 3 | After Partner CTA, before Footer | `false` | `200px` |

**Other pages:** Three.js `WaveCanvas` is only used on Home page (3 dividers). Other pages keep their existing `WaveSection`/`WaveDivider` SVG components — only their colors update to blue (`#0145F2`) as part of Task 1.

**Critical:** Canvas has `pointer-events: none` so it never blocks clicks.

---

## Task 3 — Navbar Logo + Hero Fix

### Logo Size (`src/components/Navbar.jsx`)
- Current: `clamp(46px, 5vw, 60px)` height
- New: `clamp(58px, 5vw, 72px)` height (+12px)
- Width: add explicit `style={{ minWidth: 'auto', width: 'auto' }}` and increase container by ~8px via padding

### Hero Image (`src/pages/Home.jsx` line 53)
- Save provided steel coil image to `public/steel_coil.png`
- Replace external `lh3.googleusercontent.com` URL with `/steel_coil.png`
- Update `alt` text to describe the steel coil

### Hero Heading Fix (`src/pages/Home.jsx` lines 27–29)
- Change `leading-[0.9]` → `leading-[1.0]` to prevent text clipping
- Update gradient span: replace `molten-gradient` with new blue gradient class
- Ensure `bg-clip-text` works with `text-transparent` on the `FUTURE` span

---

## Task 4 — New Animated Footer

### Replace `src/components/Footer.jsx` entirely

**Structure:**
```
[Wave transition into footer]
<footer bg="#0A1628">
  Top Row: Logo | Tagline | Social icons (LinkedIn, Twitter, YouTube)
  ─────────────────────────────────────────────────
  Link Columns (4):
    Company    | Business       | Connect      | Legal
    Leadership | Iron & Steel   | Contact Us   | Terms & Conditions
    Manufacturing | Aluminium   | Sustainability | Privacy Policy
    Careers    | Stainless Steel| Community    | Disclaimer
    News       | Energy & Others| SEL TIGER    | Investor Relations
  ─────────────────────────────────────────────────
  Bottom: © 2026 Shyam Metalics · Made with pride in India
</footer>
```

**Animations (GSAP ScrollTrigger):**
- Footer columns: staggered `y: 40 → 0`, `opacity: 0 → 1`, delay `0.1s` per column
- Logo: fade-in + slight scale `0.9 → 1.0`
- Social icons: pop-in with spring bounce
- Links: `::after` underline slides in from left on hover (`#0145F2`)
- Gradient separator line: width animates `0% → 100%` on scroll enter
- Bottom bar: fade-in last

**Footer bg:** `#0A1628` (deep navy) — provides strong contrast against `#EDF1F5` page

**Remove:** `WaveTop` component usage in old footer. New footer starts directly with the deep navy bg (Wave 3 above handles the transition).

---

## Task 5 — Remove Unused JS Files

The following root-level files are one-time migration/fix scripts. They are not imported anywhere, not referenced in `package.json` scripts, and safe to delete:

- `fix.js`
- `fix_home_colors.js`
- `overhaul.js`
- `phase2_nav.js`
- `phase3_polish.js`
- `inject_home.js`
- `build_pages.js`
- `standardize_nav.js`
- `update_nav.js`
- `download_stitch.js`

**Keep:** `vite.config.js`, `.eslintrc.js`

---

## Implementation Order

1. Install `three` package
2. Update `src/index.css` color tokens + utility classes
3. Create `src/components/WaveCanvas.jsx`
4. Update all pages for hardcoded color replacements
5. Update `src/components/Navbar.jsx` (logo size)
6. Update `src/pages/Home.jsx` (image + heading)
7. Rewrite `src/components/Footer.jsx`
8. Delete unused root JS files

---

## Files Affected

- `src/index.css`
- `src/components/WaveCanvas.jsx` (new)
- `src/components/WaveDivider.jsx` (kept but superseded)
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/AnimatedSection.jsx` (color refs)
- `src/pages/Home.jsx`
- `src/pages/IronAndSteel.jsx`
- `src/pages/Aluminium.jsx`
- `src/pages/StainlessSteel.jsx`
- `src/pages/Energy.jsx`
- `src/pages/Leadership.jsx`
- `src/pages/Manufacturing.jsx`
- `src/pages/Careers.jsx`
- `src/pages/Sustainability.jsx`
- `src/pages/Community.jsx`
- `src/pages/Contact.jsx`
- `src/pages/News.jsx`
- `src/pages/SelTiger.jsx`
- `package.json` (add `three`)
- Root: delete 10 unused JS files

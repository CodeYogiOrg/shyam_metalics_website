# Shyam Metalics Full Site Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the full site from dark industrial theme to light (`#EDF1F5` bg, `#0145F2` accent), add Three.js 3D fluid wave section dividers on every page, increase navbar logo size, fix the hero image/heading, rewrite footer with animations and legal links, and delete unused migration scripts.

**Architecture:** Color tokens are centralized in `src/index.css` `@theme` block — update there first, then sweep hardcoded hex values across all files. A new `WaveCanvas.jsx` component renders a Three.js ShaderMaterial wave on a canvas element, animated via GSAP ScrollTrigger; it replaces `WaveSection` wrappers as standalone 200px dividers between page sections. Footer is fully rewritten with GSAP stagger animations.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, Framer Motion, GSAP + ScrollTrigger, Three.js (install required)

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `package.json` | Modify | Add `three` dependency |
| `src/index.css` | Modify | Update all color tokens + utility classes |
| `src/components/Layout.jsx` | Modify | Update hardcoded `bg-[#222022]` |
| `src/components/WaveCanvas.jsx` | **Create** | Three.js 3D fluid wave divider component |
| `src/components/Navbar.jsx` | Modify | Increase logo height/width, update colors |
| `src/components/Footer.jsx` | Rewrite | Animated footer with legal links, navy bg |
| `src/pages/Home.jsx` | Modify | Steel coil image, heading fix, wave dividers, colors |
| `src/pages/IronAndSteel.jsx` | Modify | Replace WaveSection → section + WaveCanvas, colors |
| `src/pages/Aluminium.jsx` | Modify | Same pattern |
| `src/pages/StainlessSteel.jsx` | Modify | Same pattern |
| `src/pages/Energy.jsx` | Modify | Same pattern |
| `src/pages/Leadership.jsx` | Modify | Same pattern |
| `src/pages/Manufacturing.jsx` | Modify | Same pattern |
| `src/pages/Careers.jsx` | Modify | Same pattern |
| `src/pages/News.jsx` | Modify | Same pattern |
| `src/pages/Sustainability.jsx` | Modify | Same pattern |
| `src/pages/Community.jsx` | Modify | Same pattern |
| `src/pages/Contact.jsx` | Modify | Same pattern |
| `src/pages/SelTiger.jsx` | Modify | Same pattern |
| Root `.js` files (10 files) | Delete | Unused migration scripts |

---

## Task 1: Install Three.js

**Files:**
- Modify: `package.json`

- [ ] **Step 1: Install three**

```bash
cd c:/code/Arjun_Projects/shyam_metalics_22
npm install three
```

Expected output: `added 1 package` (or similar), no errors.

- [ ] **Step 2: Verify install**

```bash
node -e "const THREE = require('three'); console.log(THREE.REVISION)"
```

Expected: prints a revision number like `168`.

- [ ] **Step 3: Commit**

```bash
git add package.json package-lock.json
git commit -m "feat: install three.js for 3D wave dividers"
```

---

## Task 2: Update Color System in `src/index.css`

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Replace the entire `@theme` block**

Open `src/index.css`. Replace the `@theme { ... }` block (lines 3–61) with:

```css
@theme {
  --font-headline: "Inter", sans-serif;
  --font-body: "Inter", sans-serif;
  --font-label: "Manrope", sans-serif;

  --color-surface: #EDF1F5;
  --color-surface-dim: #E8EDF2;
  --color-surface-bright: #FFFFFF;
  --color-surface-container: #E2E8F0;
  --color-surface-container-low: #EDF1F5;
  --color-surface-container-high: #D6DFE8;
  --color-surface-container-highest: #C9D4DF;
  --color-surface-container-lowest: #F5F7FA;
  --color-surface-variant: #CBD5E0;
  --color-surface-tint: #0145F2;

  --color-background: #EDF1F5;
  --color-on-background: #0D1117;
  --color-on-surface: #0D1117;
  --color-on-surface-variant: #4A5568;

  --color-primary: #0145F2;
  --color-primary-container: #0138C7;
  --color-primary-fixed: #E8EFFE;
  --color-primary-fixed-dim: #0145F2;
  --color-on-primary: #FFFFFF;
  --color-on-primary-container: #FFFFFF;
  --color-on-primary-fixed: #001080;
  --color-on-primary-fixed-variant: #0030C0;
  --color-inverse-primary: #5B8EF7;

  --color-secondary: #4A5568;
  --color-secondary-container: #E2E8F0;
  --color-secondary-fixed: #D6DFE8;
  --color-secondary-fixed-dim: #4A5568;
  --color-on-secondary: #FFFFFF;
  --color-on-secondary-container: #0D1117;
  --color-on-secondary-fixed: #0D1117;
  --color-on-secondary-fixed-variant: #2D3748;

  --color-tertiary: #0145F2;
  --color-tertiary-container: #0138C7;
  --color-tertiary-fixed: #E8EFFE;
  --color-tertiary-fixed-dim: #0145F2;
  --color-on-tertiary: #FFFFFF;
  --color-on-tertiary-container: #FFFFFF;
  --color-on-tertiary-fixed: #001080;
  --color-on-tertiary-fixed-variant: #0030C0;

  --color-error: #dc2626;
  --color-error-container: #fee2e2;
  --color-on-error: #FFFFFF;
  --color-on-error-container: #7f1d1d;

  --color-outline: #94A3B8;
  --color-outline-variant: #CBD5E0;
  --color-inverse-surface: #0D1117;
  --color-inverse-on-surface: #EDF1F5;
}
```

- [ ] **Step 2: Update utility classes**

In the same `src/index.css`, replace each utility class body as follows (keep the selector names, only change the values inside):

Replace `.glass-card { ... }` with:
```css
.glass-card {
  background: rgba(237, 241, 245, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(1, 69, 242, 0.08);
}
```

Replace `.glass-panel { ... }` with:
```css
.glass-panel {
  background: rgba(237, 241, 245, 0.75);
  backdrop-filter: blur(12px);
}
```

Replace `.molten-gradient { ... }` with:
```css
.molten-gradient {
  background: linear-gradient(135deg, #0145F2 0%, #0138C7 50%, #0145F2 100%);
}
```

Replace `.metallic-text { ... }` with:
```css
.metallic-text {
  background: linear-gradient(135deg, #0145F2 0%, #5B8EF7 50%, #0145F2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Replace `.text-gradient-molten { ... }` with:
```css
.text-gradient-molten {
  background: linear-gradient(to right, #0145F2, #5B8EF7, #0145F2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

Replace `.industrial-mesh { ... }` with:
```css
.industrial-mesh {
  background-image: radial-gradient(#CBD5E0 1px, transparent 1px);
  background-size: 40px 40px;
}
```

Replace `.text-glow { ... }` with:
```css
.text-glow {
  text-shadow: 0 0 20px rgba(1, 69, 242, 0.5), 0 0 40px rgba(1, 69, 242, 0.25);
}
```

Replace `.electric-glow { ... }` with:
```css
.electric-glow {
  box-shadow: 0 0 40px rgba(1, 69, 242, 0.15);
}
```

Replace `.industrial-glow { ... }` with:
```css
.industrial-glow {
  box-shadow: 0 0 50px -12px rgba(1, 69, 242, 0.2);
}
```

Replace `.bg-grid-pattern { ... }` with:
```css
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(1, 69, 242, 0.05) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(1, 69, 242, 0.05) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

Replace `.bg-mesh { ... }` with:
```css
.bg-mesh {
  background-image: radial-gradient(at 0% 0%, rgba(1, 69, 242, 0.05) 0px, transparent 50%),
                    radial-gradient(at 100% 100%, rgba(1, 56, 199, 0.05) 0px, transparent 50%);
}
```

Replace `.foundry-glow { ... }` with:
```css
.foundry-glow {
  background: radial-gradient(circle at center, rgba(1, 69, 242, 0.08) 0%, transparent 70%);
}
```

Replace `.glow-overlay { ... }` with:
```css
.glow-overlay {
  background: radial-gradient(circle at 50% 50%, rgba(1, 69, 242, 0.08) 0%, transparent 70%);
}
```

Replace `.metallic-gradient { ... }` with:
```css
.metallic-gradient {
  background: linear-gradient(135deg, #0145F2 0%, #0138C7 100%);
}
```

Replace the `@keyframes pulse-glow { ... }` block with:
```css
@keyframes pulse-glow {
  0%, 100% { text-shadow: 0 0 16px rgba(1, 69, 242, 0.8); }
  50% { text-shadow: 0 0 24px rgba(1, 69, 242, 1); }
}
```

- [ ] **Step 3: Verify dev server starts without CSS errors**

```bash
npm run dev
```

Open browser at `http://localhost:3330`. The site should now have a light blue-grey background. Verify no console errors about CSS.

- [ ] **Step 4: Commit**

```bash
git add src/index.css
git commit -m "feat: convert color system to light theme #EDF1F5 + #0145F2"
```

---

## Task 3: Create `src/components/WaveCanvas.jsx`

**Files:**
- Create: `src/components/WaveCanvas.jsx`

- [ ] **Step 1: Create the component**

Create `src/components/WaveCanvas.jsx` with the following content:

```jsx
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const vertexShader = `
  uniform float uTime;
  uniform float uAmplitude;
  varying float vElevation;

  void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    float elevation =
      sin(modelPosition.x * 2.0 + uTime * 1.5) * 0.12 * uAmplitude +
      sin(modelPosition.x * 4.5 + uTime * 2.5) * 0.07 * uAmplitude +
      sin(modelPosition.y * 3.0 + uTime * 2.0) * 0.05 * uAmplitude +
      cos(modelPosition.x * 3.0 + modelPosition.y * 2.0 + uTime * 1.8) * 0.06 * uAmplitude;

    modelPosition.z += elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`

const fragmentShader = `
  uniform vec3 uColorA;
  uniform vec3 uColorB;
  uniform vec3 uColorC;
  varying float vElevation;

  void main() {
    float t = clamp((vElevation + 0.25) / 0.5, 0.0, 1.0);
    vec3 color = mix(uColorA, uColorB, t);
    color = mix(color, uColorC, t * t);
    gl_FragColor = vec4(color, 1.0);
  }
`

export default function WaveCanvas({ height = 200, flip = false, intensity = 1.0 }) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const w = wrapper.clientWidth || window.innerWidth
    renderer.setSize(w, height)

    const aspect = w / height
    const camera = new THREE.OrthographicCamera(
      -aspect / 2, aspect / 2, 0.5, -0.5, 0.1, 10
    )
    camera.position.set(0, 0, 1)
    camera.lookAt(0, 0, 0)

    const uniforms = {
      uTime: { value: 0 },
      uAmplitude: { value: 0.3 * intensity },
      uColorA: { value: new THREE.Color('#0145F2') },
      uColorB: { value: new THREE.Color('#5B8EF7') },
      uColorC: { value: new THREE.Color('#E8EFFE') },
    }

    // Use a wide plane (20 units) so it always covers the viewport at any aspect ratio
    const geometry = new THREE.PlaneGeometry(20, 1, 200, 80)
    const material = new THREE.ShaderMaterial({ vertexShader, fragmentShader, uniforms })
    const mesh = new THREE.Mesh(geometry, material)
    if (flip) mesh.rotation.z = Math.PI
    scene.add(mesh)

    const st = ScrollTrigger.create({
      trigger: wrapper,
      start: 'top 85%',
      end: 'bottom 15%',
      onUpdate: (self) => {
        uniforms.uAmplitude.value = gsap.utils.interpolate(
          0.3 * intensity,
          1.5 * intensity,
          self.progress
        )
      },
    })

    const clock = new THREE.Clock()
    let animId
    const animate = () => {
      animId = requestAnimationFrame(animate)
      uniforms.uTime.value = clock.getElapsedTime()
      renderer.render(scene, camera)
    }
    animate()

    const handleResize = () => {
      const newW = wrapper.clientWidth || window.innerWidth
      const newAspect = newW / height
      renderer.setSize(newW, height)
      camera.left = -newAspect / 2
      camera.right = newAspect / 2
      camera.updateProjectionMatrix()
    }
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animId)
      st.kill()
      renderer.dispose()
      geometry.dispose()
      material.dispose()
      window.removeEventListener('resize', handleResize)
    }
  }, [height, flip, intensity])

  return (
    <div
      ref={wrapperRef}
      style={{ height, width: '100%', pointerEvents: 'none', overflow: 'hidden' }}
    >
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%', display: 'block' }}
      />
    </div>
  )
}
```

- [ ] **Step 2: Test WaveCanvas renders on Home page**

Temporarily add `<WaveCanvas />` at the top of `src/pages/Home.jsx` return (after the first `<>` opening) and `import WaveCanvas from '../components/WaveCanvas'`. Open browser — a blue wave band should appear. Remove the temporary addition after verifying.

- [ ] **Step 3: Commit**

```bash
git add src/components/WaveCanvas.jsx
git commit -m "feat: create Three.js WaveCanvas 3D fluid wave divider component"
```

---

## Task 4: Update `src/components/Layout.jsx` and `src/components/Navbar.jsx`

**Files:**
- Modify: `src/components/Layout.jsx`
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Fix Layout.jsx background**

In `src/components/Layout.jsx` line 14, change:
```jsx
<div className="min-h-screen flex flex-col bg-[#222022]">
```
to:
```jsx
<div className="min-h-screen flex flex-col bg-[#EDF1F5]">
```

- [ ] **Step 2: Update Navbar logo height (+12px)**

In `src/components/Navbar.jsx` line 135, change:
```jsx
style={{ height: 'clamp(46px, 5vw, 60px)' }}
```
to:
```jsx
style={{ height: 'clamp(58px, 5vw, 72px)', minWidth: '8px' }}
```

- [ ] **Step 3: Update Navbar scrolled background**

In `src/components/Navbar.jsx` line 124, change:
```jsx
? 'backdrop-blur-xl bg-[#222022]/80 border-b border-[#C3D809]/15 shadow-[0_4px_30px_rgba(195,216,9,0.1)] py-3'
: 'bg-transparent py-5'
```
to:
```jsx
? 'backdrop-blur-xl bg-[#EDF1F5]/90 border-b border-[#0145F2]/15 shadow-[0_4px_30px_rgba(1,69,242,0.08)] py-3'
: 'bg-transparent py-5'
```

- [ ] **Step 4: Update Navbar dropdown background**

In `src/components/Navbar.jsx` line 45, change:
```jsx
className="w-56 bg-[#1a181a]/95 backdrop-blur-xl shadow-2xl rounded-lg py-2 border border-[#C3D809]/20 overflow-hidden before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-0.5 before:bg-[#C3D809]"
```
to:
```jsx
className="w-56 bg-white/95 backdrop-blur-xl shadow-2xl rounded-lg py-2 border border-[#0145F2]/20 overflow-hidden before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-12 before:h-0.5 before:bg-[#0145F2]"
```

- [ ] **Step 5: Update Navbar dropdown button colors**

In `src/components/Navbar.jsx` line 37, change:
```jsx
className={`flex items-center gap-1 py-2 transition-colors duration-200 ${isActive ? 'text-[#C3D809]' : 'text-zinc-400 hover:text-[#C3D809] group-hover:text-[#C3D809]'}`}
```
to:
```jsx
className={`flex items-center gap-1 py-2 transition-colors duration-200 ${isActive ? 'text-[#0145F2]' : 'text-slate-600 hover:text-[#0145F2] group-hover:text-[#0145F2]'}`}
```

- [ ] **Step 6: Update Navbar dropdown links color**

In `src/components/Navbar.jsx` line 57, change:
```jsx
className="block px-5 py-2.5 text-zinc-400 hover:text-white hover:bg-[#C3D809]/10 hover:pl-6 transition-all duration-200 text-xs tracking-wider"
```
to:
```jsx
className="block px-5 py-2.5 text-slate-600 hover:text-[#0145F2] hover:bg-[#0145F2]/10 hover:pl-6 transition-all duration-200 text-xs tracking-wider"
```

- [ ] **Step 7: Update Navbar active link underline**

In `src/components/Navbar.jsx` line 165, change:
```jsx
className={`py-2 transition-colors duration-200 relative ${
  isLinkActive(link.to)
    ? 'text-[#C3D809]'
    : 'text-zinc-400 hover:text-[#C3D809]'
}`}
```
to:
```jsx
className={`py-2 transition-colors duration-200 relative ${
  isLinkActive(link.to)
    ? 'text-[#0145F2]'
    : 'text-slate-600 hover:text-[#0145F2]'
}`}
```

- [ ] **Step 8: Update Navbar active underline color**

In `src/components/Navbar.jsx` line 168, change:
```jsx
className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C3D809] rounded-full"
```
to:
```jsx
className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0145F2] rounded-full"
```

- [ ] **Step 9: Update SEL TIGER button**

In `src/components/Navbar.jsx` line 185, change:
```jsx
className="hidden sm:block font-[Inter] tracking-tight uppercase font-bold text-[11px] text-[#C3D809] hover:text-[#222022] transition-all duration-300 px-4 py-2 border border-[#C3D809]/30 rounded-full hover:bg-[#C3D809] hover:border-[#C3D809] hover:shadow-[0_0_25px_rgba(195,216,9,0.3)]"
```
to:
```jsx
className="hidden sm:block font-[Inter] tracking-tight uppercase font-bold text-[11px] text-[#0145F2] hover:text-white transition-all duration-300 px-4 py-2 border border-[#0145F2]/30 rounded-full hover:bg-[#0145F2] hover:border-[#0145F2] hover:shadow-[0_0_25px_rgba(1,69,242,0.3)]"
```

- [ ] **Step 10: Update mobile menu background and link colors**

In `src/components/Navbar.jsx` line 217, change:
```jsx
className="px-6 py-6 bg-[#1a181a]/95 backdrop-blur-xl border-t border-[#C3D809]/10 space-y-1 overflow-y-auto max-h-[70vh]"
```
to:
```jsx
className="px-6 py-6 bg-white/95 backdrop-blur-xl border-t border-[#0145F2]/10 space-y-1 overflow-y-auto max-h-[70vh]"
```

In `src/components/Navbar.jsx` line 222, change:
```jsx
className="w-full flex items-center justify-between py-3 px-4 text-zinc-400 hover:text-white font-[Inter] uppercase font-bold text-xs tracking-wider rounded-lg hover:bg-zinc-800/30 transition-all"
```
to:
```jsx
className="w-full flex items-center justify-between py-3 px-4 text-slate-600 hover:text-[#0145F2] font-[Inter] uppercase font-bold text-xs tracking-wider rounded-lg hover:bg-[#0145F2]/5 transition-all"
```

In `src/components/Navbar.jsx` line 246 (mobile child links), change:
```jsx
isLinkActive(child.to)
  ? 'text-[#C3D809] bg-[#C3D809]/5'
  : 'text-zinc-500 hover:text-white hover:bg-zinc-800/30'
```
to:
```jsx
isLinkActive(child.to)
  ? 'text-[#0145F2] bg-[#0145F2]/5'
  : 'text-slate-500 hover:text-[#0145F2] hover:bg-[#0145F2]/5'
```

In `src/components/Navbar.jsx` line 265 (mobile direct links), change:
```jsx
isLinkActive(link.to)
  ? 'text-[#C3D809] bg-[#C3D809]/5'
  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
```
to:
```jsx
isLinkActive(link.to)
  ? 'text-[#0145F2] bg-[#0145F2]/5'
  : 'text-slate-600 hover:text-[#0145F2] hover:bg-[#0145F2]/5'
```

In `src/components/Navbar.jsx` line 276 (mobile SEL TIGER), change:
```jsx
className="block py-3 px-4 text-center text-[#C3D809] font-bold text-xs uppercase tracking-wider border border-[#C3D809]/30 rounded-lg hover:bg-[#C3D809]/10 transition-all mt-4"
```
to:
```jsx
className="block py-3 px-4 text-center text-[#0145F2] font-bold text-xs uppercase tracking-wider border border-[#0145F2]/30 rounded-lg hover:bg-[#0145F2]/10 transition-all mt-4"
```

- [ ] **Step 11: Verify navbar looks correct in browser**

Open `http://localhost:3330`. Navbar should show light background when scrolled, blue accents, logo slightly larger.

- [ ] **Step 12: Commit**

```bash
git add src/components/Layout.jsx src/components/Navbar.jsx
git commit -m "feat: update navbar to light theme + increase logo size"
```

---

## Task 5: Update `src/pages/Home.jsx`

**Files:**
- Modify: `src/pages/Home.jsx`

This task: replace hero image, fix heading, add WaveCanvas dividers, replace all colors.

- [ ] **Step 1: Save the steel coil image**

The user provided a steel coil image in the chat. Save it as `public/steel_coil.png`. If the file doesn't exist yet, ask the user to drop the image into the `public/` folder and name it `steel_coil.png` before proceeding with the Home.jsx rewrite.

- [ ] **Step 2: Rewrite Home.jsx**

Replace the entire contents of `src/pages/Home.jsx` with:

```jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection, { StaggerContainer, StaggerItem, FloatingElement } from '../components/AnimatedSection'
import WaveCanvas from '../components/WaveCanvas'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-[#EDF1F5]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-[#0145F2]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-[#0145F2]/5 rounded-full blur-[100px]"></div>
          <div className="absolute inset-0 industrial-mesh opacity-20"></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <AnimatedSection delay={0.2}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface-container-high border border-[#0145F2]/20">
                  <span className="w-2 h-2 rounded-full bg-[#0145F2] animate-pulse mr-2"></span>
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold">Global Leader in Metal</span>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <h1 className="text-6xl md:text-8xl font-black font-headline leading-[1.0] tracking-tighter text-on-surface">
                  SHAPING THE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0145F2] via-[#5B8EF7] to-[#0145F2]">FUTURE</span> OF METAL
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.6}>
                <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-xl leading-relaxed">
                  A billion-dollar conglomerate redefining industrial excellence through precision engineering and sustainable manufacturing.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={0.8}>
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/iron-and-steel" className="inline-block molten-gradient text-white font-bold px-8 py-4 rounded-md shadow-[0_0_30px_rgba(1,69,242,0.3)] uppercase tracking-tight hover:shadow-[0_0_50px_rgba(1,69,242,0.5)] transition-shadow duration-300">
                      EXPLORE PRODUCTS
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/leadership" className="inline-block bg-surface-container-high border border-[#0145F2]/20 text-on-surface font-bold px-8 py-4 rounded-md hover:bg-surface-container-highest transition-all duration-300 uppercase tracking-tight">
                      OUR LEGACY
                    </Link>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
            <FloatingElement className="relative hidden lg:block" amplitude={15} duration={4}>
              <div className="absolute -inset-10 bg-[#0145F2]/8 rounded-full blur-[80px] animate-pulse"></div>
              <img
                alt="Shiny steel coil roll, industrial grade"
                className="relative z-10 w-full h-auto drop-shadow-[0_0_50px_rgba(1,69,242,0.15)]"
                src="/steel_coil.png"
              />
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Wave Divider 1 */}
      <WaveCanvas height={200} flip={false} intensity={1.0} />

      {/* Stats */}
      <section className="py-24 bg-surface-container-lowest border-y border-[#0145F2]/10">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" staggerDelay={0.15}>
            <StaggerItem>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black font-headline text-on-surface group-hover:text-[#0145F2] transition-colors duration-500 mb-2">12,000+</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-semibold">Workforce strength</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black font-headline text-on-surface group-hover:text-[#0145F2] transition-colors duration-500 mb-2">40+</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-semibold">Countries Exported</div>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="group">
                <motion.div whileHover={{ scale: 1.1 }} className="text-5xl md:text-7xl font-black font-headline text-on-surface group-hover:text-[#0145F2] transition-colors duration-500 mb-2">13.5 MTPA</motion.div>
                <div className="font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant font-semibold">Aggregated Capacity</div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Core Materials */}
      <section className="py-32 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection>
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter mb-4">THE CORE MATERIALS</h2>
                <p className="text-on-surface-variant text-lg leading-relaxed">Precision-engineered alloys and metals serving as the backbone for global infrastructure and technological advancement.</p>
              </div>
              <Link className="font-label text-sm uppercase font-bold tracking-widest text-[#0145F2] hover:text-[#0138C7] transition-colors flex items-center gap-2" to="/iron-and-steel">
                View Product Catalog <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </AnimatedSection>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-4 gap-4" staggerDelay={0.1}>
            <StaggerItem className="md:col-span-2">
              <motion.div whileHover={{ y: -8 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-slate-100/40"></div>
                <img alt="Abstract close-up of heavy steel beams and structural frames with a cool blue industrial tint and sharp lighting" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCl9R44rfHIHq8K5SIe_ty3uiSRlvdN5uSxb2Ufk1sYugyv7-iFWe25jv3ek3dpb6Ey9kSky93ZfIwnShyIxbqbHusM3dU4-Ho9yt4Tt00OVvP0fT2FiwNykNAlxWQL2zLcBK8shgN0Ju_c5vuUG-KC2wZ0Vkl3pw4A6JNIV6wU3eE63_c_L8sc9rs3y3TbzGBaDiZ7mDVN5RcXn0QfPHxYbrRppF9fHcL0hxpBHXFH4K99O-rhGcRX9L1Sx7BJKWp8574800AcAI" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="font-label text-xs uppercase tracking-widest text-[#0145F2] mb-2">Heavy Industry</span>
                  <h3 className="text-3xl font-black font-headline uppercase mb-4">Iron & Steel</h3>
                  <p className="text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm max-w-xs">High-grade structural steel and premium TMT bars for iconic global landmarks.</p>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-slate-100/40"></div>
                <img alt="Polished stainless steel sheets reflecting futuristic laboratory lighting with a smooth mirror finish" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaIqiYEpbLnv1KHdl0b7JYm4PpwhXIfUmzKrWk5kVSo3tmGqjbpxGdw8_rsDjc_J6Z06QU5BsOOncg35ir4hMCwm7iw6uUm_IjAkkaOAcQgOLHy0O_8zheeMADAcvl-iazHDxrlf7EcyszlWN1Bhd_9-hRN9mHcDdhZGmEurmoWvqExpGeX8ZVQhxcYv0JO2nYi4ptxRyK8XOJYooOdpN6Y0zNEv2mmj_t6mSmImzOeYHuNmUMnRzhqTXelllQ2wL_95rmHoJICdc" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="font-label text-xs uppercase tracking-widest text-[#0145F2] mb-2">Refined Tech</span>
                  <h3 className="text-2xl font-black font-headline uppercase mb-4">Stainless Steel</h3>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem>
              <motion.div whileHover={{ y: -8 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[400px]">
                <div className="absolute inset-0 bg-slate-100/40"></div>
                <img alt="Glistening textured aluminium foil rolls with sharp highlights and deep dark shadows in a factory setting" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJdfcIs9WnhlhelFAx25F8vknLBy-bzQ-ktHfs4101X0F0rGokDDqJ_6yLlTr8OUBriehLjUXYB3DdLx-K6AH5GCbbWD3Am17lbIckdJ9EMwgXwt8sQnQi08jFa60c8FKmqXDvWBVN_2cdrk56Id6RyyCJ36q5yxc6taiiuL5NUshUEbKd-sOIFErSS90eKUhV9QyfTmOLlwjE8xonLlWeTTKJlgiOna0WSEfLx1EsJElTOOQRUuzfBlHtYqJVa7EfWGbtWdHW1FY" />
                <div className="relative h-full flex flex-col justify-end p-8">
                  <span className="font-label text-xs uppercase tracking-widest text-[#0145F2] mb-2">Packaging</span>
                  <h3 className="text-2xl font-black font-headline uppercase mb-4">Aluminium Foil</h3>
                </div>
              </motion.div>
            </StaggerItem>
            <StaggerItem className="md:col-span-4">
              <motion.div whileHover={{ y: -5 }} className="group relative overflow-hidden glass-card p-1 rounded-xl h-[300px]">
                <div className="absolute inset-0 bg-slate-100/20"></div>
                <img alt="Raw molten ferro alloy being poured into a mold, creating bright orange sparks against a dark industrial floor" className="absolute inset-0 w-full h-full object-cover mix-blend-soft-light group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Dh1KnCNag5sHZDRJkbxAjBsh82qnV-YUwhuauay7AfN8DdpuG-eLV9GcBL7DtCcX4lupdiU3JkjGpS9VYvyM6_Grt3q3j5bhgx9ujdaL4tV8FZWVZuzbFilqJ7eRet2Te-BV8C-EjD--f82yCf3T0K4w1W57ADrLEaNd9XXc7Q1miX4lLA8oC0j-Cd1U4DwQR7DZP6viUMVegGTdlFp6Flb2cz9yoMypqawFxkSVjY6par_EZVsUc7lV1LFoytBgY9KGmc" />
                <div className="relative h-full flex flex-col justify-center items-center text-center p-8">
                  <h3 className="text-4xl font-black font-headline uppercase mb-2">Ferro Alloys</h3>
                  <p className="text-on-surface-variant max-w-lg">The secret behind the strength of modern alloys, crafted with uncompromised precision in our high-capacity foundries.</p>
                </div>
              </motion.div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Wave Divider 2 */}
      <WaveCanvas height={220} flip={true} intensity={1.2} />

      {/* Industrial Intelligence */}
      <section className="relative py-32 bg-surface-container-low overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <motion.img whileHover={{ scale: 1.05, filter: 'grayscale(0)' }} alt="Wide shot of a massive industrial manufacturing plant with smokestacks and steel structures at dusk under a dark blue sky" className="rounded-xl grayscale transition-all duration-700 w-full h-64 object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0HKAlCTt7gH3Y4o7ojVnrQsJOBQ7Ht-M1seZLdNko8uf5qvPuAdgyTZK3-rfd04OlbdKPw141e45nJ8gJ89BlARLhWtmRKGDtUAkai_0FU_u_ITnEGY5350Ba8-RQJ5hUiTyo_Vo-xNrjcunqDlqkaeCKeUgK5n3DfLnLNlF-X8pj8zEfv8Pso_o7xpU93GlVLTp547j-lmy1Jt06GU_uk1JdOpKmXLE-iH-kBKbGw_rdwZsPE1BL8jEN3ZKajrviq5B6YZf80k8" />
                <motion.img whileHover={{ scale: 1.05, filter: 'grayscale(0)' }} alt="Close up of high-tech automated machinery in a steel factory with glowing control panels and robotic arms" className="rounded-xl translate-y-8 grayscale transition-all duration-700 w-full h-64 object-cover shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9e_kLuSwHS_Ho2x21aBndBrgqZw3YbRefNjomnWN6lg70lJHOYUTCRTgnpZCh2bkowDnHCPzgSsw83inCyQ_FkdsOcLk9CDEIDLl1UMnfRA-9zM0Uny1MAFdURFbTX8NQKI3KvaNJnK73d9FP0nFjBS5z7Q6t8qOm21qsE5FlbkvYYt_sXnys7PZZEGdhfXotqAHYJsjX6-wjASjSG0eoE2Bvqujv04Kcj62FuA8xIvD5eQ2fOHl3jwmN0CHbT1exdr7NVLPW68k" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="order-1 lg:order-2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black font-headline uppercase tracking-tighter leading-none">Industrial Intelligence</h2>
              <div className="h-1 w-24 molten-gradient"></div>
              <p className="text-xl text-on-surface font-light leading-relaxed">
                Our manufacturing dominance is anchored in strategic hubs across <span className="font-bold text-[#0145F2]">West Bengal and Odisha</span>.
                These vertically integrated facilities house the world's most advanced metallurgical technologies.
              </p>
              <ul className="space-y-4 font-label">
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#0145F2]">verified</span>
                  State-of-the-art automation systems
                </li>
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#0145F2]">verified</span>
                  Zero-liquid discharge facilities
                </li>
                <li className="flex items-center gap-4 text-on-surface-variant">
                  <span className="material-symbols-outlined text-[#0145F2]">verified</span>
                  Direct port-to-plant logistics
                </li>
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-[#0145F2]/5 rounded-full blur-[120px]"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <AnimatedSection>
            <h2 className="text-5xl md:text-8xl font-black font-headline uppercase tracking-tighter mb-8 text-on-surface">PARTNER WITH THE LEADERS</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-2xl text-on-surface-variant max-w-3xl mx-auto mb-16 font-light">Join the transformation of global industry. Our engineering experts are ready to solve your most complex metal challenges.</p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="max-w-xl mx-auto glass-card p-10 rounded-2xl border border-[#0145F2]/10 shadow-2xl">
              <form className="space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Name</label>
                    <input className="w-full bg-surface-container-low border border-[#0145F2]/10 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#0145F2]/50 text-on-surface" placeholder="John Doe" type="text" />
                  </div>
                  <div>
                    <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Email</label>
                    <input className="w-full bg-surface-container-low border border-[#0145F2]/10 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#0145F2]/50 text-on-surface" placeholder="john@enterprise.com" type="email" />
                  </div>
                </div>
                <div>
                  <label className="block font-label text-xs uppercase tracking-widest text-on-surface-variant mb-2 ml-1">Message</label>
                  <textarea className="w-full bg-surface-container-low border border-[#0145F2]/10 rounded-md px-4 py-3 focus:ring-2 focus:ring-[#0145F2]/50 text-on-surface" placeholder="How can we assist your project?" rows="4"></textarea>
                </div>
                <motion.button whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(1,69,242,0.4)' }} whileTap={{ scale: 0.98 }} className="w-full molten-gradient text-white font-bold py-4 rounded-md transition-all duration-300 uppercase tracking-widest">
                  Send Inquiry
                </motion.button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Wave Divider 3 */}
      <WaveCanvas height={200} flip={false} intensity={0.8} />
    </>
  )
}
```

- [ ] **Step 3: Verify Home page in browser**

Open `http://localhost:3330`. Check:
- Hero image shows steel coil
- "FUTURE" heading text is not clipped (line height fixed)
- 3 wave canvases visible between sections
- All colors are blue, no yellow-green remaining

- [ ] **Step 4: Commit**

```bash
git add src/pages/Home.jsx public/steel_coil.png
git commit -m "feat: update Home page - steel coil image, heading fix, wave dividers, blue theme"
```

---

## Task 6: Update All Remaining Pages — Color Replacements + WaveCanvas

**Files:**
- Modify: all 12 remaining page files

**Pattern for every page:**
1. Remove `import { WaveSection } from '../components/WaveDivider'` (or `import WaveDivider` / `import { WaveTop }`)
2. Add `import WaveCanvas from '../components/WaveCanvas'`
3. Replace `<WaveSection waves={X} className="...">` → `<section className="...">` (keep all existing classes)
4. Replace `</WaveSection>` → `</section>`
5. Add `<WaveCanvas height={200} flip={false} intensity={1.0} />` between every 2 sections (place Wave 2 with `flip={true}`, Wave 3 with `flip={false}`)
6. Replace all `#C3D809` → `#0145F2`
7. Replace all `#9AAE07` → `#0138C7`
8. Replace all `#1a181a` → `#EDF1F5` (except in SelTiger bg classes — keep as `#0A1628` for contrast)
9. Replace all `#222022` → `#EDF1F5`
10. Replace all `#1a1c00` → `#FFFFFF`
11. Replace `text-zinc-400` → `text-slate-600`
12. Replace `text-zinc-500` → `text-slate-500`
13. Replace `text-zinc-600` → `text-slate-400`
14. Replace `bg-neutral-900` → `bg-white`
15. Replace `border-[#C3D809]/10` → `border-[#0145F2]/10` (and `/20`, `/30` variants same ratio)
16. Replace `bg-[#C3D809]/` → `bg-[#0145F2]/` (gradient/glow blobs)

- [ ] **Step 1: Update `src/pages/IronAndSteel.jsx`**

Apply all 16 replacements above. Then ensure the page structure is:
```
<div className="pt-24">
  <section className="relative min-h-screen flex items-center px-6 md:px-12 overflow-hidden">
    {/* hero content */}
  </section>
  <WaveCanvas height={200} flip={false} intensity={1.0} />
  <section className="py-24 px-6 md:px-12 bg-surface">
    {/* products content */}
  </section>
  <WaveCanvas height={200} flip={true} intensity={1.0} />
  {/* any additional sections */}
  <WaveCanvas height={200} flip={false} intensity={0.8} />
</div>
```

Note: IronAndSteel has 2 WaveSection blocks. Add 3 WaveCanvas: after hero, after products, before end of page.

- [ ] **Step 2: Update `src/pages/Aluminium.jsx`**

Same pattern. Aluminium has 2 WaveSection blocks. Apply all 16 replacements. Add 3 WaveCanvas dividers.

- [ ] **Step 3: Update `src/pages/StainlessSteel.jsx`**

Same pattern. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 4: Update `src/pages/Energy.jsx`**

Same pattern. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 5: Update `src/pages/Leadership.jsx`**

Leadership has 1 WaveSection block (line 28). Apply all 16 replacements. Add 2 WaveCanvas dividers (before and after the WaveSection section).

- [ ] **Step 6: Update `src/pages/Manufacturing.jsx`**

Same pattern. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 7: Update `src/pages/Careers.jsx`**

Same pattern. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 8: Update `src/pages/News.jsx`**

Same pattern. 2 WaveSection blocks. Note: `border-[#C3D809]/10` on line 73 → `border-[#0145F2]/10`. Add 3 WaveCanvas dividers.

- [ ] **Step 9: Update `src/pages/Sustainability.jsx`**

Same pattern. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 10: Update `src/pages/Community.jsx`**

Same pattern. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 11: Update `src/pages/Contact.jsx`**

Contact has no WaveSection content wrappers but imports WaveSection. Remove import. Apply all color replacements. The fixed background blobs on lines 8-9:
```jsx
<div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#C3D809]/5 ...
```
becomes:
```jsx
<div className="fixed top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#0145F2]/5 ...
```
Add 2 WaveCanvas dividers — one after the main form section, one at end of page.

- [ ] **Step 12: Update `src/pages/SelTiger.jsx`**

SelTiger has `bg-[#1a181a]` as a special dark brand color for this section — replace with `bg-[#0A1628]` (deep navy) rather than light `#EDF1F5`, to maintain brand distinction. Apply all other color replacements. 2 WaveSection blocks → 3 WaveCanvas dividers.

- [ ] **Step 13: Verify all pages in browser**

Navigate through each route (`/iron-and-steel`, `/aluminium`, etc.). Check: no yellow-green colors remain, wave dividers appear between sections, text is dark/readable.

- [ ] **Step 14: Commit**

```bash
git add src/pages/
git commit -m "feat: update all pages to light theme + Three.js wave dividers"
```

---

## Task 7: Rewrite `src/components/Footer.jsx`

**Files:**
- Modify (full rewrite): `src/components/Footer.jsx`

- [ ] **Step 1: Rewrite the Footer component**

Replace the entire contents of `src/components/Footer.jsx` with:

```jsx
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const footerColumns = [
  {
    title: 'Company',
    links: [
      { to: '/leadership', label: 'Leadership' },
      { to: '/manufacturing', label: 'Manufacturing' },
      { to: '/careers', label: 'Careers' },
      { to: '/news', label: 'News & Events' },
    ],
  },
  {
    title: 'Business',
    links: [
      { to: '/iron-and-steel', label: 'Iron & Steel' },
      { to: '/aluminium', label: 'Aluminium' },
      { to: '/stainless-steel', label: 'Stainless Steel' },
      { to: '/energy', label: 'Energy & Others' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { to: '/contact', label: 'Contact Us' },
      { to: '/sustainability', label: 'Sustainability' },
      { to: '/community', label: 'Community' },
      { to: '/seltiger', label: 'SEL TIGER' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { to: '/terms', label: 'Terms & Conditions' },
      { to: '/privacy', label: 'Privacy Policy' },
      { to: '/disclaimer', label: 'Disclaimer' },
      { to: '/investors', label: 'Investor Relations' },
    ],
  },
]

export default function Footer() {
  const footerRef = useRef(null)
  const columnsRef = useRef([])
  const logoRef = useRef(null)
  const dividerRef = useRef(null)
  const bottomRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    const ctx = gsap.context(() => {
      // Logo fade-in + scale
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
          },
        }
      )

      // Columns staggered slide-up
      gsap.fromTo(
        columnsRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 80%',
          },
        }
      )

      // Divider line width animation
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 1.2,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: dividerRef.current,
            start: 'top 90%',
          },
        }
      )

      // Bottom bar fade-in last
      gsap.fromTo(
        bottomRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bottomRef.current,
            start: 'top 95%',
          },
        }
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="w-full bg-[#0A1628] py-16 px-6 md:px-12">
      <div className="max-w-[1920px] mx-auto">
        {/* Top: Logo + Tagline + Social */}
        <div ref={logoRef} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-14">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/brand_logo.png"
                className="h-9 transition-all group-hover:brightness-125"
                alt="Shyam Metalics"
              />
              <span className="text-lg font-black text-white tracking-tight">SHYAM METALICS</span>
            </Link>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              A billion-dollar conglomerate redefining industrial excellence through precision engineering.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[
              { label: 'LinkedIn', icon: 'business_center', href: '#' },
              { label: 'Twitter', icon: 'tag', href: '#' },
              { label: 'YouTube', icon: 'play_circle', href: '#' },
            ].map(({ label, icon, href }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#0145F2] hover:bg-[#0145F2]/20 transition-all duration-300"
                aria-label={label}
              >
                <span className="material-symbols-outlined text-base">{icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-14">
          {footerColumns.map((col, i) => (
            <div
              key={col.title}
              ref={(el) => (columnsRef.current[i] = el)}
            >
              <h4 className="font-[Manrope] text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-5 font-bold">
                {col.title}
              </h4>
              <div className="space-y-3">
                {col.links.map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="block text-slate-400 hover:text-white text-sm transition-colors duration-200 relative group"
                  >
                    <span className="relative">
                      {label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#0145F2] group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Animated Divider */}
        <div
          ref={dividerRef}
          className="h-px bg-gradient-to-r from-transparent via-[#0145F2]/40 to-transparent mb-8"
        />

        {/* Bottom Bar */}
        <div ref={bottomRef} className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-[Inter] text-[10px] tracking-widest uppercase text-slate-600">
            &copy; {new Date().getFullYear()} Shyam Metalics &amp; Energy Ltd. All rights reserved.
          </div>
          <div className="font-[Inter] text-[10px] tracking-widest uppercase text-slate-600">
            Made with pride in India 🇮🇳
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Step 2: Verify footer in browser**

Scroll to the bottom of any page. Check:
- Deep navy background (`#0A1628`) visible
- 4 columns: Company, Business, Connect, Legal
- Legal column has Terms & Conditions, Privacy Policy, Disclaimer, Investor Relations
- GSAP animation plays (columns slide up on scroll)
- Link hover underline animation works
- Divider line animates on scroll

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx
git commit -m "feat: rewrite footer with animated columns, legal links, navy theme"
```

---

## Task 8: Delete Unused Migration Scripts

**Files:**
- Delete: 10 root-level JS files

- [ ] **Step 1: Delete all unused scripts**

```bash
cd c:/code/Arjun_Projects/shyam_metalics_22
rm fix.js fix_home_colors.js overhaul.js phase2_nav.js phase3_polish.js inject_home.js build_pages.js standardize_nav.js update_nav.js download_stitch.js
```

- [ ] **Step 2: Verify none of these are referenced anywhere**

```bash
grep -r "fix\.js\|overhaul\.js\|phase2_nav\|phase3_polish\|inject_home\|build_pages\|standardize_nav\|update_nav\|download_stitch\|fix_home_colors" src/ package.json
```

Expected: no matches.

- [ ] **Step 3: Commit**

```bash
git add -A
git commit -m "chore: delete 10 unused one-time migration scripts from root"
```

---

## Task 9: Final Verification

- [ ] **Step 1: Run dev build to check for errors**

```bash
npm run dev
```

Open `http://localhost:3330`. Check browser console for any errors.

- [ ] **Step 2: Verify no old colors remain**

```bash
grep -r "#C3D809\|#9AAE07\|bg-\[#222022\]\|bg-\[#1a181a\]" src/
```

Expected: zero matches (except possibly inside comments or image alt text).

- [ ] **Step 3: Run production build**

```bash
npm run build
```

Expected: build completes without errors.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Shyam Metalics full site redesign - light theme, Three.js waves, new footer"
```

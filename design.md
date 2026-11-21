# TeddyPups U.A.E. — Design System & Visual Specification

---

## 1. Design Philosophy: "Storybook Luxury"

TeddyPups bridges two distinct aesthetic worlds:
1. **Artisanal Storybook Whimsy**: Evoking the warmth, innocence, and emotional tenderness of classic children's picture books (fluffy cartoon mascots, hand-stitched quilt scallops, cursive notes, polaroid memories).
2. **Dubai Luxury Concierge**: Crisp, polished, high-contrast typography, rich cocoa and honey palettes, clean architectural door arches, and instant white-glove communication.

The resulting experience feels tactile, trustworthy, and joyful—turning the intimidating process of finding a rare puppy into an enchanting visual journey.

---

## 2. Color Palette & Design Tokens

### 2.1 Core Palette

| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `--color-cocoa` | `#2A170E` | Primary typography, borders, mascot outlines, dark accents |
| `--color-milk` | `#FFFDF8` | Card backgrounds, pill tags, polaroid photo bases |
| `--color-cream` | `#FFF1D8` | Hero and section sky gradient top, soft backgrounds |
| `--color-honey` | `#F2BE6B` | Mascot fur, golden door knobs, primary warm highlights |
| `--color-toffee` | `#A24A1A` | Primary CTA buttons, door frames, terracotta accents |
| `--color-toffee-deep` | `#8E3E14` | Button hover states, deep shading |
| `--color-ink-soft` | `#7D695B` | Subheadings, metadata, muted body text |
| `--color-whatsapp` | `#1A5336` | WhatsApp button background (trust, instant response) |

### 2.2 Door Finishes & Materials

```css
/* Authentic Wood Finishes for Door Leaves */
--door-terracotta: #A24A1A;
--door-cocoa:      #5A3A28;
--door-honey-oak:  #D4893F;
--door-rosewood:   #B8644A;
--door-espresso:   #422414;
--door-amber:      #D28B3E;
```

### 2.3 Environmental Textures
- **Floor Plank Background**:
  ```css
  background:
    linear-gradient(to bottom, rgba(42, 23, 14, 0.16), transparent 22%),
    repeating-linear-gradient(90deg, transparent 0 calc(11rem - 2px), rgba(42, 23, 14, 0.12) calc(11rem - 2px) 11rem),
    linear-gradient(#E8B06A, #DC9A52);
  border-top: 3px solid #2A170E;
  box-shadow: 0 -12px 0 -6px #F5D9A8;
  ```
- **Quilt Edge Scallop Pattern**:
  Width 76px, height 40px, cream fill `#FFF1D8`, 3px solid outline `#2A170E`, with an internal dashed stitch line (`strokeDasharray: "3.5 5.5"`).

---

## 3. Typography Hierarchy

```
┌─────────────────────────────────────────────────────────────┐
│ Fraunces 800 (Serif Display) — "Premium teacup puppies"     │
│ Patrick Hand (Cursive Script) — "every puppy is family"     │
│ Plus Jakarta Sans (Sans-Serif) — Clean, legible body copy    │
└─────────────────────────────────────────────────────────────┘
```

1. **Display & Headings (`Fraunces`)**:
   - Weights: 700 (Bold), 800 (Black).
   - Character: Soft serifs, gentle curves, organic luxury feel.
   - Applications: Hero headline (`clamp(2.5rem, 5.2vw, 4.2rem)`), section titles (`clamp(2.2rem, 4vw, 3.4rem)`), puppy door names.
2. **Storybook Script (`Patrick Hand`)**:
   - Character: Handwritten, informal, warm, affectionate.
   - Applications: Hero eyebrow *"every puppy is family"*, door stickers (*"Available"*), mascot dialogue speech bubbles, polaroid captions.
3. **Interface & Body (`Plus Jakarta Sans` / System Sans)**:
   - Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold).
   - Character: Neutral, high legibility, modern letterforms.
   - Applications: Descriptions, specifications, metadata, button labels, FAQs.

---

## 4. Mascot Design System ("Teddy")

The brand's mascot, **Teddy**, is an apricot toy poodle with curly fur, floppy ears, a terracotta collar with a gold tag, and an expressive, cheerful face.

```
                  _..---.._
                .'  .---.  '.
               /   (  o  )   \     <-- Floppy Ears & Curls
              |    .'-'-'.    |
              |   (  'v'  )   |    <-- Blushing Cheeks & Tongue
               \   '.___.'   /
                '..__===__..'      <-- Terracotta Collar & Gold Tag
                 /         \
              .-'           '-.
             /  .-.       .-.  \
            |  (   )     (   )  |  <-- 4-Leg Animated Trot
             \  '-'       '-'  /
              '--'         '--'
            ═════════════════════  <-- 3px Dark Wooden Floor Line
```

### 4.1 Mascot Component Variations

| Component | Role | Visual State & Placement |
|---|---|---|
| `TeddyHeroMascot` | Landing Page Hero | Peeking over the scalloped quilt edge; subtle head tilt, blinking eyes, ear twitch |
| `TeddyRunnerMascot` | "Meet the Pups" Showcase | Full body facing right on the 3px floor line; active 4-leg trot when user scrolls |
| `ScrollMascot` | Global Viewport Companion | Fixed position following user progress across sections with reactive speech bubbles |

### 4.2 Mascot Walk Animation Spec
- Leg A (`.tp-runner__leg--fn`, `.tp-runner__leg--bf`): `rotate: 24deg` to `-22deg` (0.32s ease-in-out infinite alternate).
- Leg B (`.tp-runner__leg--ff`, `.tp-runner__leg--bn`): `rotate: -22deg` to `24deg` (0.32s ease-in-out infinite alternate).
- Body Bounce (`.tp-runner__body`): `translate: 0 0` to `0 -5px` (0.16s ease-in-out infinite alternate).
- Tail Wag (`.tp-runner__tail`): `rotate: -16deg` to `14deg` (0.22s ease-in-out infinite alternate).
- Ear Twitch (`.tp-runner__ear`): `rotate: 0deg` to `8deg` (0.16s ease-in-out infinite alternate).

---

## 5. Signature UI Patterns & Micro-Interactions

### 5.1 Arched Showcase Doors
- **Geometry**: Aspect ratio `4 / 5.2`, border `3px solid #2A170E`, `borderRadius: 999px 999px 0 0`.
- **Perspective Reveal**:
  - `perspective: 700px; perspective-origin: 0 50%; transform-origin: 0 50%`.
  - When open (`data-open="true"` or hover): `transform: rotateY(78deg)`.
  - Interior room reveals high-resolution puppy photography with slight scale up (`scale(1.04)`).
- **Available Badge**:
  - White capsule pill with 2px solid `#2A170E` border, rotated `7deg` with a 2px offset drop shadow.
  - Typography: `Patrick Hand` script.

### 5.2 Polaroid Photo Cards
- White cardboard frame (`#FFFDF8`) with 4:5 photo aperture.
- Semi-transparent frosted washi-tape decal at the top center.
- Playful rotational tilts between `-3deg` and `+4deg`.
- Click interaction triggers full-screen lightbox modal with paper texture backdrop.

### 5.3 Paw Cursor
- Interactive SVG paw tracking pointer with low latency.
- Click effect creates animated ripple paw burst.
- Automatically disabled on touch-enabled screens or reduced-motion preferences.

---

## 6. Responsive Layouts & Breakpoints

```
[ Mobile: < 640px ]  ──> Single column, swipeable horizontal rails, compact header
[ Tablet: 640-1024px] ──> 2-3 column grids, scroll-snapped showcases
[ Desktop: > 1024px ] ──> Full 100vh pinned scroll track, interactive cursor, parallax quilt
```

- **Mobile Viewport**:
  - Pinned 100vh track transitions into a native fluid touch rail with zero scroll-locking.
  - Runner mascot docks gracefully to the right edge.
  - WhatsApp quick-action buttons remain fixed in thumb-friendly reach zones.

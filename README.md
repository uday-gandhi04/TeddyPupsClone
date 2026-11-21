# TeddyPups U.A.E. — React Clone

Complete, responsive React + Vite clone of [TeddyPups U.A.E.](https://puppy.instabizweb.com/) using React 18 and React Router v6.

## Quick Start

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
npm run preview
```

## Project Structure

```text
teddypups-uae-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── images/                  # Bundled offline studio puppy & family photos
└── src/
    ├── main.jsx                 # BrowserRouter root mount
    ├── App.jsx                  # Routes, scroll manager, curtain, lightbox & toast
    ├── data/
    │   └── siteData.js          # 15 available puppies, 27 gone-home tickets, 9 FAQs, moments
    ├── styles/
    │   ├── tokens.css           # Palette, typography & tactile paper/wood/cork textures
    │   ├── components.css       # Header, footer, sticker buttons, curtain, Polaroids, modals
    │   └── pages.css            # Section layouts & responsive breakpoints
    ├── components/
    │   ├── MascotSvgs.jsx       # Inline SVG TeddyPups mascot & icon components
    │   ├── Header.jsx           # Sticky scalloped header + mobile drawer
    │   ├── Footer.jsx           # Dark starry espresso footer with sleeping poodle
    │   ├── RouteCurtain.jsx     # Animated walking-mascot route transition curtain
    │   └── PolaroidLightbox.jsx # Polaroid lightbox modal + toast notification
    └── pages/
        ├── HomePage.jsx         # All 8 sections incl. 15-door showcase & WhatsApp mockup
        ├── PuppiesPage.jsx      # Multi-group pill filters synced to URL query params
        ├── PuppyDetailPage.jsx  # Dynamic /puppies/:slug carousel, binder & enquiry postcard
        ├── GoneHomePage.jsx     # 27 tilted "one ticket home" boarding passes
        ├── HappyFamiliesPage.jsx# Lined-paper testimonial + 4-column Polaroid wall
        ├── HowItWorksPage.jsx   # Interactive In Dubai / Imported toggle & Korea-Dubai flight
        ├── FaqPage.jsx          # Live keyword search + 9 corkboard sticky-note accordions
        └── ContactPage.jsx      # Showroom card + interactive fill-in-the-blank letter form
```

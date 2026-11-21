# TeddyPups UAE

A responsive React + Vite website for TeddyPups UAE, featuring a puppy catalog, adoption journey, customer stories, FAQs, showroom contact, and WhatsApp-led enquiries.

## Tech Stack

- React 18
- React Router DOM 6
- Vite 5
- Vanilla CSS
- Inline SVG and bundled image assets

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Vite prints the local development URL in the terminal.

### Production

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |

## Routes

| Route | Page |
|---|---|
| `/` | Home |
| `/puppies` | Puppy directory and filters |
| `/puppies/:slug` | Individual puppy profile |
| `/gone-home` | Previously adopted puppies |
| `/happy-families` | Customer stories and photo gallery |
| `/how-it-works` | Adoption process |
| `/faq` | Frequently asked questions |
| `/contact` | Showroom and enquiry page |

## Key Features

- Responsive desktop and mobile navigation
- Filterable puppy directory
- Dynamic puppy detail pages
- URL-based puppy routes
- WhatsApp enquiry links
- Interactive route transitions
- Polaroid image lightbox
- Searchable FAQ page
- Scroll-aware mascot and reveal animations
- Centralized contact, puppy, FAQ, and gallery data

## Project Structure

```text
.
├── public/
│   ├── brand/                    # Brand logo
│   └── images/                   # Puppy and family assets
├── src/
│   ├── components/               # Shared layout and interactive components
│   ├── data/
│   │   └── siteData.js           # Centralized site content
│   ├── pages/                    # Route-level page components
│   ├── styles/
│   │   ├── tokens.css            # Design tokens
│   │   ├── components.css       # Shared component styles
│   │   ├── pages.css             # Page layouts
│   │   └── animations.css        # Animations and transitions
│   ├── App.jsx                   # Routes and global app state
│   └── main.jsx                  # React and browser router setup
├── architecture.md               # Technical architecture
├── prd.md                        # Product requirements
├── design.md                     # Design documentation
├── phases.md                     # Implementation phases
├── package.json
└── vite.config.js
```

## Content Configuration

Update site content in [src/data/siteData.js](src/data/siteData.js):

- Puppy inventory and detail information
- Contact details and WhatsApp link
- FAQs
- Happy-family gallery content
- Gone-home records

The public image collection is located in [public/images](public/images). Add new asset paths with a leading `/`, for example `/images/puppy.webp`.

## Architecture

The application uses a component-based single-page architecture:

- [src/main.jsx](src/main.jsx) mounts the React application and router.
- [src/App.jsx](src/App.jsx) defines routes and shared lightbox/toast state.
- [src/pages](src/pages) contains route-level views.
- [src/components](src/components) contains shared layout, mascot, navigation, and modal components.
- [src/styles](src/styles) separates design tokens, shared styles, page styles, and animations.

More detail is available in [architecture.md](architecture.md). Product scope and design information are documented in [prd.md](prd.md), [design.md](design.md), and [phases.md](phases.md).

# MF Industrial Solutions

A professional, scalable, SEO-first industrial manufacturing and steel fabrication website built with **React**, **Vite**, and **Tailwind CSS**.

- **Official Domain:** [https://mfindustrialsolutions.com](https://mfindustrialsolutions.com)
- **Legal Entity:** MetalForge Industrial Solutions Private Limited

---

## 🛠️ Technology Stack

- **Core Framework:** React 18 (JavaScript ES6+, JSX)
- **Bundler & Dev Server:** Vite 5
- **Styling:** Tailwind CSS 3 with custom brand tokens derived from the official logo
- **Routing:** React Router DOM 6 (Clean single-level routing)
- **SEO & Metadata:** React Helmet Async, Static Prerendering, Open Graph, Twitter Cards, Sitemap.xml, Robots.txt
- **Icons & Motion:** Lucide React, Framer Motion
- **Form Handling:** React Hook Form, Zod

---

## 📁 Project Architecture

```text
mf-industrial-solutions/
│
├── public/
│   ├── images/
│   │   ├── logo/          # Official MetalForge logo assets
│   │   ├── hero/          # Workshop banners & hero visuals
│   │   ├── products/      # Industrial product imagery
│   │   ├── fabrication/   # Plate cutting, drilling, fit-up shop photos
│   │   ├── galvanizing/   # Hot-dip zinc coating inspection
│   │   ├── quality/       # Quality testing, DFT gauge inspection
│   │   ├── company/       # Facility & team imagery
│   │   └── clients/       # Infrastructure & EPC contractor logos
│   ├── icons/             # Custom SVG icons
│   ├── favicon.ico        # Monogram favicon
│   ├── robots.txt         # Crawler directive
│   └── sitemap.xml        # XML sitemap for search engines
│
├── src/
│   ├── assets/            # Bundled images and icons
│   ├── components/
│   │   ├── layout/        # Navbar, Footer, MainLayout
│   │   ├── common/        # SEO, Button, SectionHeading, Container, ScrollToTop
│   │   ├── home/          # Homepage section components
│   │   ├── products/      # Product cards, grids, specs tables
│   │   ├── about/         # About section components
│   │   └── ui/            # Reusable UI primitives
│   ├── pages/             # Route views (Home, About, Products, Quality, Contact, GetQuote, NotFound)
│   ├── routes/            # AppRoutes configuration
│   ├── data/              # Centralized data stores (company, products, services, navigation)
│   ├── hooks/             # Custom hooks (useScrollToTop)
│   ├── services/          # API client (Axios)
│   ├── utils/             # SEO config, constants
│   ├── styles/            # Tailwind CSS entry (index.css)
│   ├── App.jsx            # HelmetProvider & Root Router Shell
│   └── main.jsx           # React DOM Entrypoint
│
├── scripts/
│   └── prerender.js       # Static HTML prerender generator for SEO
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Prerendering
```bash
npm run build
```
This runs `vite build` followed by `node scripts/prerender.js` to compile the bundles and generate static HTML files for every route (`/`, `/about`, `/products`, `/quality`, `/contact`, `/get-a-quote`), ensuring optimal SEO indexing.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🔍 SEO & Route Architecture

| Route | URL | Purpose |
|---|---|---|
| Home | `/` | Engineering overview & corporate identity |
| About Us | `/about` | Company overview, workshop capabilities, drawing-to-delivery |
| Products | `/products` | Industrial steel products catalog |
| Quality | `/quality` | Multi-stage QA testing & partner galvanizing inspection |
| Contact Us | `/contact` | Workshop communications & inquiry desk |
| Get a Quote | `/get-a-quote` | Direct commercial RFQ & drawing submission |

---

## 🎨 Brand Design Tokens

Derived directly from the official **MetalForge** logo:
- **Forge Red:** `#C10A0E` (Primary CTA, active states, key accents)
- **Forge Red Hover:** `#A5080C`
- **Forge Red Subtle:** `#FEF2F2`
- **Carbon Black:** `#0C0C0C` (Typography, headers, dark elements)
- **Neutral Surface:** `#F9FAFB`
- **Neutral Border:** `#E5E7EB`

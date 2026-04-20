# UXnicorp — Portfolio v4

Main website for UXnicorp, a web development and UX studio based in Argentina. Bilingual (ES/EN), built with Next.js App Router.

Live at [uxnicorp.com](https://www.uxnicorp.com)

## Stack

- **Next.js 15** — App Router, server components, metadata API
- **TypeScript**
- **Tailwind CSS v3**
- **Framer Motion** — animations and scroll-triggered transitions
- **Lenis** — smooth scrolling
- **Lucide React** — icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/
    page.tsx          # Home (ES)
    layout.tsx        # Root layout with metadata and JSON-LD
    sitemap.ts
    robots.ts
    servicios/        # Services listing and slug pages
    casos/            # Case studies
    conceptos/        # Concept showcases (architecture, gastronomy)
    en/               # English version — mirrors the ES structure
  components/
    hero/             # Hero subcomponents (navbar, visual, highlight)
    en/               # English versions of each section
    AnimateIn.tsx     # Scroll-triggered fade-in wrapper
    TransitionLink.tsx
    TransitionProvider.tsx
    LenisProvider.tsx
    LanguageSwitcher.tsx
```

## Notes

- Spanish is the default locale at `/`. English lives under `/en/`.
- Page transitions are handled with `TransitionProvider` and `TransitionLink`.
- Smooth scroll is set up globally via `LenisProvider` in the root layout.
- SEO: each route exports its own `metadata`, structured data (JSON-LD) is injected in the root layout.
- Pricing on service pages supports ARS/USD toggle via `CurrencyProvider`.

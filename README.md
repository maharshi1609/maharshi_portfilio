# Maharshi Patel — Portfolio

Personal portfolio for **Maharshi Patel**, Full Stack Developer (React.js / Next.js).

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and GSAP.
Every icon and interaction is hand-rolled — GSAP is the only runtime UI
dependency.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run lint     # ESLint
```

## Before you deploy — 3 things to fill in

These are the only placeholders in the project. Nothing else is invented: all
content comes from the résumé.

### 1. Profile photo — `public/profile.png`

The hero currently uses a **stand-in photo**. Replace `public/profile.png` with
your preferred headshot (keep the same filename and a square, roughly
1000×1000px image for a crisp result on high-DPI screens). No code change
needed.

### 2. GitHub and LinkedIn URLs — `data/site.ts`

```ts
github: "" as string,     // e.g. "https://github.com/your-username"
linkedin: "" as string,   // e.g. "https://linkedin.com/in/your-handle"
```

While these are empty strings, the GitHub/LinkedIn buttons are **hidden
everywhere** (hero, contact, footer) and omitted from the `sameAs` field in the
structured data — deliberately, so the site never ships a dead or invented link.
Fill either one in and its buttons appear automatically.

### 3. Production URL

Canonical URLs, Open Graph tags, `sitemap.xml` and `robots.txt` are all derived
from one value. Set it at deploy time:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

The fallback in `data/site.ts` is a placeholder (`https://maharshipatel.dev`).

## Project structure

```
app/
  layout.tsx           Metadata, fonts, JSON-LD, pre-paint theme script
  page.tsx             Composes the sections (Server Component)
  not-found.tsx        Custom 404
  opengraph-image.tsx  Generated 1200×630 social card
  icon.svg             Favicon
  robots.ts            robots.txt
  sitemap.ts           sitemap.xml
components/            Navbar, Hero, About, Experience, Skills, Projects,
                       ProjectCard, Education, Contact, Footer, and helpers
                       (Reveal, HeroParallax, TimelineRail drive the motion)
data/                  All content: site, experience, projects, skills, education
lib/                   gsap setup, cn() helper, JSON-LD graph builder
public/profile.png     Hero photo
```

Content is fully separated from presentation — to update the site, edit the
files in `data/`.

## Contact form

There is no mail backend, so the form validates on the client and then hands the
composed message to the visitor's own email client via `mailto:`. Nothing is
silently dropped, and no third-party service is required.

To switch to a real provider later, replace the `mailto:` branch in
`components/ContactForm.tsx` with a `fetch` to a route handler — the validation,
error states and success toast already work.

## SEO

- Title, description, keywords, canonical, Open Graph and Twitter card metadata
- JSON-LD graph: `Person`, `WebSite`, `ProfilePage` and an `ItemList` of projects
- `sitemap.xml` and `robots.txt` generated from `NEXT_PUBLIC_SITE_URL`
- Semantic landmarks, one `<h1>`, and a single `<h2>` per section

Validate structured data with the
[Rich Results Test](https://search.google.com/test/rich-results).

## Animation

GSAP (with ScrollTrigger) drives the scroll-linked motion. It is configured once
in `lib/gsap.ts`, which registers the plugin, sets the shared easing and
duration, and re-measures triggers after `next/font` swaps its faces in.

| Where | What | File |
| --- | --- | --- |
| Every section | Fade-and-rise on scroll, fired once per element | `components/Reveal.tsx` |
| Experience | Timeline rail draws downward, scrubbed to scroll | `components/TimelineRail.tsx` |
| Hero portrait | Scrubbed parallax drift as the hero scrolls away | `components/HeroParallax.tsx` |

**The hero entrance is deliberately CSS, not GSAP** (`hero-in` in
`globals.css`). The hero is the LCP content, and gating it on the GSAP bundle
plus hydration pushed the headline from 2.7s to 5.4s on a throttled mid-tier
connection. The CSS keyframes start at first paint instead, independent of
network speed. GSAP is still used for the hero's parallax, which genuinely
needs scroll position.

Every animation is wrapped in `gsap.matchMedia()`, so `prefers-reduced-motion:
reduce` skips the motion entirely and simply shows the content.

GSAP costs roughly 45 KB gzipped. If you ever want it back, deleting
`lib/gsap.ts`, `HeroParallax` and `TimelineRail`, and reverting `Reveal.tsx` to
an IntersectionObserver toggling a CSS class, removes the dependency.

## Accessibility & motion

- Skip-to-content link, visible focus rings, labelled form fields with
  `aria-invalid` / `role="alert"` errors
- Mobile menu closes on Escape and click-away, and returns focus to its trigger
- All animations respect `prefers-reduced-motion`
- Content stays visible with JavaScript disabled: the hidden starting state is
  scoped to a `.js` class that only a pre-paint script adds, so without scripts
  nothing is ever hidden

## Verified

Checked in a headless browser at 320, 375, 414, 768, 1024, 1440 and 1920px:
no horizontal overflow at any width, no console errors, working mobile nav,
active-section indicator, theme toggle and form validation.

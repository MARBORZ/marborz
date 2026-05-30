# marborz.one — Personal Portfolio

Personal portfolio site. Built from scratch while learning fullstack development — started coding in May 2025.

**Live:** [marborz.one](https://marborz.one)

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | SCSS Modules + CSS custom properties (design tokens) |
| Routing | React Router DOM |
| Animations | Framer Motion (desktop only) |
| i18n | react-i18next (EN / RU / NO) |
| Forms | react-hook-form |
| Backend | Express + Resend (contact form email) |
| Deploy | Vercel + Render |

---

## Project Structure

```
src/
├── assets/
│   ├── project_images/      # Project screenshots
│   └── project_videos/      # Project screen recordings
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectModal.tsx      # Portal-based modal (escapes motion.div stacking context)
│   └── ...
├── hooks/
│   ├── useIsMobile.ts        # Disables animations on mobile
│   └── useInView.ts          # Intersection observer for scroll animations
├── locales/
│   ├── en.json
│   ├── ru.json
│   └── no.json
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── shared/
│   └── projects.ts           # Project data + asset URL resolution
├── styles/
│   ├── tokens.scss           # Design tokens (colors, spacing, typography)
│   └── [Page]/[page].module.scss
├── App.tsx
└── main.tsx
```

---

## Pages

- **Home** — hero, selected projects, approach
- **Projects** — all 14 projects with status filters, featured section, card grid, archive list
- **About** — background, learning path, principles
- **Contact** — form with backend email delivery

---

## Projects (14)

| # | Title | Status |
|---|---|---|
| 01 | Aether | experiment |
| 02 | 2048 | experiment |
| 03 | Yatzy | experiment |
| 04 | Stasis | shipped |
| 05 | HDUFNDSK | active |
| 06 | Kropp Fitness | experiment |
| 07 | Skrekkeparken | experiment |
| 08 | Date Time Wallpaper | experiment |
| 09 | Redbeard VFX | shipped |
| 10 | Todo React | shipped |
| 11 | Skan Jus | shipped |
| 12 | Norden Verk | shipped |
| 13 | Greenfield Farms | shipped |
| 14 | Nordic Market | planned |

Planned projects are disabled (no modal) and show `[ COMING SOON ]` on hover.

---

## i18n

Three languages supported, stored via `i18next-browser-languagedetector`:

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
t('projects.list.stasis.fullDescription')
```

All UI text, project descriptions, and full descriptions are translated in `src/locales/{en,ru,no}.json`.

---

## Key Technical Decisions

**ProjectModal rendered via `createPortal`**
Framer Motion's `motion.div` with `transform` creates a new CSS containing block, which breaks `position: fixed` descendants. The modal is portaled to `document.body` so it positions relative to the viewport regardless of animation wrappers.

**No double borders**
Each section only has `border-bottom`. Adjacent sections share that single line — no `border-top` on the next section.

**Animations only on desktop**
`useIsMobile()` guards all Framer Motion wrappers. Mobile renders plain `div` elements to avoid layout issues from transform-based animations on small screens.

**Vite static asset URLs**
Asset paths in `src/shared/projects.ts` use the Vite-idiomatic pattern so they survive production builds:
```typescript
videoUrl: new URL('../assets/project_videos/stasis.mp4', import.meta.url).href
```

---

## Getting Started

```bash
# Install dependencies
bun install

# Start dev server (http://localhost:5173)
bun run dev

# Build for production
bun run build
```

---

## Author

Amadi Masuev — first-year IT student at Porsgrunn videregående skole, Norway.
Started coding May 2025. Building toward ML engineering.

Email: masuevamadi@gmail.com  
GitHub: [github.com/MARBORZ](https://github.com/MARBORZ)

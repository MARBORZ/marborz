# marborz.one — Personlig portefølje

Personlig porteføljeside. Bygget fra bunnen av mens jeg lærte fullstack-utvikling — begynte å kode i mai 2025.

**Live:** [marborz.one](https://marborz.one)

---

## Stack

| Lag | Teknologi |
|---|---|
| Rammeverk | React 19 + TypeScript |
| Byggverktøy | Vite |
| Styling | SCSS Modules + CSS custom properties (design tokens) |
| Ruting | React Router DOM |
| Animasjoner | Framer Motion (kun desktop) |
| i18n | react-i18next (EN / RU / NO) |
| Skjemaer | react-hook-form |
| Backend | Express + Resend (e-postlevering fra kontaktskjema) |
| Deploy | Vercel |

---

## Prosjektstruktur

```
src/
├── assets/
│   ├── project_images/      # Skjermbilder av prosjekter
│   └── project_videos/      # Skjermopptak av prosjekter
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectModal.tsx      # Portal-basert modal (unngår motion.div stacking context)
│   └── ...
├── hooks/
│   ├── useIsMobile.ts        # Deaktiverer animasjoner på mobil
│   └── useInView.ts          # Intersection observer for scroll-animasjoner
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
│   └── projects.ts           # Prosjektdata + URL-oppløsning for ressurser
├── styles/
│   ├── tokens.scss           # Design tokens (farger, mellomrom, typografi)
│   └── [Page]/[page].module.scss
├── App.tsx
└── main.tsx
```

---

## Sider

- **Home** — hero, utvalgte prosjekter, tilnærming
- **Projects** — alle 14 prosjekter med statusfiltre, featured-seksjon, kortgrid, arkivliste
- **About** — bakgrunn, læringsveien, prinsipper
- **Contact** — skjema med e-postlevering via backend

---

## Prosjekter (14)

| # | Tittel | Status |
|---|---|---|
| 01 | Aether | eksperiment |
| 02 | 2048 | eksperiment |
| 03 | Yatzy | eksperiment |
| 04 | Stasis | ferdig |
| 05 | HDUFNDSK | aktiv |
| 06 | Kropp Fitness | eksperiment |
| 07 | Skrekkeparken | eksperiment |
| 08 | Date Time Wallpaper | eksperiment |
| 09 | Redbeard VFX | ferdig |
| 10 | Todo React | ferdig |
| 11 | Skan Jus | ferdig |
| 12 | Norden Verk | ferdig |
| 13 | Greenfield Farms | ferdig |
| 14 | Nordic Market | planlagt |

Planlagte prosjekter er deaktivert (ingen modal) og viser `[ COMING SOON ]` ved hover.

---

## Internasjonalisering

Tre språk støttes via `i18next-browser-languagedetector`:

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
t('projects.list.stasis.fullDescription')
```

All UI-tekst, prosjektbeskrivelser og fullstendige beskrivelser er oversatt i `src/locales/{en,ru,no}.json`.

---

## Viktige tekniske valg

**ProjectModal via `createPortal`**
Framer Motions `motion.div` med `transform` oppretter en ny CSS containing block, noe som ødelegger `position: fixed` på barn-elementer. Modalen monteres i `document.body` via portal — posisjoneres relativt til viewport uavhengig av animasjonswrappere.

**Ingen doble kanter**
Hver seksjon har kun `border-bottom`. Naboseksjoner deler denne ene linjen — ingen `border-top` på neste seksjon.

**Animasjoner kun på desktop**
`useIsMobile()` kontrollerer alle Framer Motion-wrappere. Mobil rendrer vanlige `div`-elementer for å unngå layout-problemer fra transform-animasjoner på små skjermer.

**Vite statiske ressurs-URLer**
Ressursstier i `src/shared/projects.ts` bruker Vite-idiomet slik at de overlever production-bygg:
```typescript
videoUrl: new URL('../assets/project_videos/stasis.mp4', import.meta.url).href
```

---

## Kom i gang

```bash
# Installer avhengigheter
bun install

# Start dev-server (http://localhost:5173)
bun run dev

# Bygg for produksjon
bun run build
```

---

## Forfatter

Amadi Masuev — første år, IT og medieproduksjon, Porsgrunn videregående skole.
Begynte å kode mai 2025. Jobber mot ML-engineering.

E-post: masuevamadi@gmail.com  
GitHub: [github.com/MARBORZ](https://github.com/MARBORZ)

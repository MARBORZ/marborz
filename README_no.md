# marborz.one — Portfolio Redesign 2026

Et fullstack porteføljenettsted som viser frem ingeniørtenkning og arkitektur fremfor kodevisning.

**Live:** [marborz.one](http://marborz.one)

---

## 🎯 Prosjektmål

Bygge en junior+ nivå portefølje som demonstrerer:
- Ren arkitektur og komponentdesign
- Typesikker frontend med TypeScript
- Riktig tilstandshåndtering og i18n
- Forståelse av avveininger og designbeslutninger

Ikke bare "Jeg kan kode" — men "Jeg forstår hvorfor kode er bygget slik."

---

## 🛠️ Stack

**Frontend:**
- **Vite** — Raskt byggeverktøy
- **React 19** — Nyeste med hooks
- **TypeScript** — Typesikkerhet
- **React Router DOM** — Klient-side routing
- **react-i18next** — Internasjonalisering (EN, RU, NO)
- **react-hook-form** — Skjemahåndtering
- **Framer Motion** — Animasjoner
- **Sass** — CSS-preprosessor

**Backend:**
- **Express** — API-server
- **Resend** — E-postlevering
- **Node.js** — Runtime

---

## 📁 Prosjektstruktur

```
src/
├── components/          # Gjenbrukbare React-komponenter
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── ProjectModal.tsx
│   └── skeletons/       # Lasting-skjeletter
├── pages/               # Sidekomponenter (rutet)
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
├── hooks/               # Tilpassede React hooks
│   ├── useInView.ts
│   └── useIsMobile.ts
├── locales/             # i18n-oversettelser
│   ├── en.json
│   ├── no.json
│   └── ru.json
├── shared/              # Delt konfigurasjon og data
│   ├── config.ts
│   └── projects.ts
├── App.tsx              # Router-oppsett
└── main.tsx             # Inngangspunkt
```

---

## 🚀 Kom i Gang

### Forutsetninger
- Node.js 18+
- Bun (pakkehåndterer)

### Installasjon

```bash
# Installer avhengigheter
bun install

# Start dev-server
bun run dev

# Bygg for produksjon
bun run build
```

Dev-server kjører på `http://localhost:5173`

---

## 🌍 Språk

Støtter 3 språk med cookie-basert persistens:
- **EN** — Engelsk (standard)
- **RU** — Russisk
- **NO** — Norsk

Språkvalg lagret i `lang` cookie. Første brukerpreferanse overstyrer systemspråkdeteksjon.

---

## 📄 Sider

- **Home** — Hero + utvalgte prosjekter + tilnærming
- **Projects** — Fullt prosjektgalleri med filtre
- **About** — Bakgrunn, læringssti, prinsipper
- **Contact** — Kontaktskjema (koblet til backend)

---

## 🎨 Designsystem

Bruker CSS-variabler for:
- Fargepalett
- Typografiregler
- Avstandssystem
- Komponentretningslinjer

---

## 🔧 Utvikling

### Legge til Komponenter

1. Opprett i `src/components/ComponentName.tsx`
2. Eksporter fra `src/components/index.ts`
3. Bruk TypeScript for props
4. Følg designtokens (ingen hardkodede farger)

### Legge til Sider

1. Opprett i `src/pages/PageName.tsx`
2. Legg til rute i `App.tsx`
3. Bruk `useTranslation()` for oversettelser
4. Eksporter fra `src/pages/index.ts`

### Arbeide med i18n

```typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('home.title')}</h1>;
}
```

---

## 🎯 Læringsmål

- React 19 med TypeScript
- Internasjonalisering (i18next)
- React Router v7
- Framer Motion-animasjoner
- Skjemahåndtering med react-hook-form
- Fullstack-arkitektur (React + Express)
- Produksjonsdeployment

---

## 👤 Forfatter

**Amadi Masuev**  
Førsteårs IT-student ved Porsgrunn videregående skole, Norge.

E-post: masuevamadi@gmail.com  
GitHub: [@marborz](https://github.com/marborz)

---

## 📜 Lisens

MIT — Bruk gjerne som referanse eller inspirasjon.

---

**Bygget med intensjonell arkitektur, ikke tilfeldig kompleksitet.**

# marborz.one — Portfolio Redesign 2026

A fullstack portfolio website showcasing engineering thinking and architecture over code showcasing.

**Live:** [marborz.one](http://marborz.one)

---

## 🎯 Project Goal

Portfolio that shows how I think about code, not just that I can write it:
- Clean architecture and component design
- Type-safe frontend with TypeScript
- State management and i18n
- Understanding trade-offs and design decisions

---

## 🛠️ Stack

**Frontend:**
- **Vite** — Fast build tool
- **React 19** — Latest with hooks
- **TypeScript** — Type safety
- **React Router DOM** — Client-side routing
- **react-i18next** — Internationalization (EN, RU, NO)
- **react-hook-form** — Form handling
- **CSS Variables** — Design tokens

**Backend:**
- **Express** — API server
- **Resend** — Email delivery
- **Node.js** — Runtime

---

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── primitives/      # Base components (Heading, Text, Divider)
│   ├── Button.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── FormField.tsx
├── pages/               # Page components (routed)
│   ├── Home.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── hooks/               # Custom React hooks
│   └── useLanguage.ts   # Language context hook
├── locales/             # i18n translations
│   ├── en.json
│   ├── no.json
│   └── ru.json
├── App.tsx              # Router setup
└── main.tsx             # Entry point
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- Bun (package manager)

### Installation

```bash
# Install dependencies
bun install

# Start dev server
bun run dev

# Build for production
bun run build
```

Dev server runs at `http://localhost:5173`

---

## 🌍 Languages

Supports 3 languages with cookie-based persistence:
- **EN** — English (default)
- **RU** — Russian
- **NO** — Norwegian

Language selection stored in `lang` cookie. First user preference overrides system language detection.

---

## 📄 Pages

- **Home** — Hero + selected projects + approach
- **Projects** — Full project gallery with filters
- **About** — Background, learning path, principles
- **Contact** — Contact form (connected to backend)

---

## 🎨 Design System

See [vault/design/DESIGN_TOKENS.md](vault/design/DESIGN_TOKENS.md) for:
- Color palette
- Typography rules
- Spacing system
- Component guidelines

---

## 📚 Project Planning

Development follows INPUT → PROCESSING → OUTPUT methodology.

See [vault/project/PROJECT_PLAN.md](vault/project/PROJECT_PLAN.md) for:
- 8 development stages
- Architecture decisions
- Component specs
- Implementation priorities

---

## 🔧 Development

### Adding Components

1. Create in `src/components/ComponentName.tsx`
2. Export from `src/components/index.ts`
3. Use TypeScript for props
4. Follow design tokens (no hardcoded colors)

### Adding Pages

1. Create in `src/pages/PageName.tsx`
2. Add route in `App.tsx`
3. Use `useLanguage()` for translations
4. Export from `src/pages/index.ts`

### Working with i18n

```typescript
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t('home.title')}</h1>;
}
```

---

## 📊 What's Next

- [ ] Implement core pages
- [ ] Setup contact form with backend
- [ ] Add animations (Framer Motion)
- [ ] Performance optimization
- [ ] Deploy to Vercel

---

## 👤 Author

**Amadi Masuev**  
First-year IT student at Porsgrunn videregående skole, Norway.

Email: masuevamadi@gmail.com  
GitHub: [@marborz](https://github.com/marborz)

---

## 📜 License

MIT — Feel free to use as reference or inspiration.

---

**Built with intentional architecture, not accidental complexity.**

# PROJECT_PLAN — Marborz.one Redesign 2026

## Обзор проекта

| Параметр | Значение |
|----------|----------|
| **Проект** | Редизайн портфолио marborz.one |
| **Цель** | Junior+ портфолио с акцентом на engineering mindset |
| **Стек** | Vite + React 19 + TypeScript + react-i18next + react-hook-form |
| **Дизайн** | Pencil (.pen) — `marborz_design.pen` в корне проекта |
| **Структура** | 4 страницы + Header + Footer + общие компоненты |
| **Архитектура** | Feature-Sliced Design, CSS Modules (SCSS) |

---

## Этапы разработки

### ЭТАП 1: Project Setup ✅ DONE
- Vite + React 19 + TypeScript
- bun как package manager
- React Router, react-i18next, react-hook-form
- Базовая структура папок

---

### ЭТАП 2: Design Tokens & Global Styles ✅ DONE
- `src/styles/tokens.scss` — все переменные ($color-*, $font-*, $spacing-*, $font-size-*, $line-height-*, $letter-spacing-*)
- `src/styles/global.scss` — CSS reset, базовые стили body/a/button/input
- Все модули используют `@use '../tokens' as *`

**Токены:**
```
$color-bg: #f4f2ed
$color-text: #0a0a0a
$color-text-muted: #6b6b68
$color-text-placeholder: #a8a8a4
$color-border: #0a0a0a
$color-surface: #e8e5dd

$font-sans: 'Inter', system-ui, sans-serif
$font-serif: 'Georgia', 'Times New Roman', serif
$font-mono: 'JetBrains Mono', monospace

$letter-spacing-hero: -0.01em
$letter-spacing-title: -0.02em
$letter-spacing-tight: -0.01em
$letter-spacing-wide: 0.08em
$letter-spacing-label: 0.10em
```

---

### ЭТАП 3: Layout & Components ✅ DONE
- `Header.tsx` — фиксированный, nav с active state, language switcher (NO/EN/RU), i18n nav items
- `Footer.tsx` — copyright + next page link, margin-top: $spacing-xl
- `ScrollToTop` — компонент в App.tsx через useLocation
- `Layout.tsx` — Header + children

---

### ЭТАП 4: Страницы ✅ DONE

**Home:**
- Hero 88px (3 строки: sans / serif italic / sans)
- Превью 4 проектов в виде строк (/number | title | *italic sub* | stack | badge | →)
- Approach секция (64px h3 mixed serif/sans)
- CTA с email ссылкой

**Projects:**
- Hero 88px (2 строки)
- Фильтры (ALL/ACTIVE/SHIPPED/EXPERIMENT) + счётчик absolute right
- Featured проект: большая карточка с border, media placeholder, body padding
- Grid 2×2 карточек с border, cardBody, cardMeta (number + status badge)
- Archive список (experiment/planned) как строки

**About:**
- Hero 88px (3 строки)
- Background + Quick Info side-by-side (justify-content: center, gap: 160px)
  - Background: 500px, max-width текста 600px
  - Quick Info: 600px, flex rows с key/value space-between
- Learning Path: квадратный индикатор + name + status + number
- Principles: 3-колоночный grid

**Contact:**
- Hero 88px (2 строки)
- 2-колоночный grid: форма (1fr) + direct contact (420px)
- Форма: react-hook-form, aria-invalid, кнопка SEND → с filter:invert + border
- Direct contact: email, github, location (с координатами), reply languages

---

### ЭТАП 5: i18n ✅ DONE
- 3 языка: NO (default), EN, RU
- Все nav links через `t('nav.key')`
- Все страницы полностью переведены
- Проекты: subtitle на всех 12 проектах в `projects.ts`

---

### ЭТАП 6: Backend Integration 🔴 TODO
- Подключить Contact форму к Resend API
- Express backend (взять из C:/dev/bio-site)
- Email отправка + success/error UX

---

### ЭТАП 6.5: 404 страница 🔴 TODO
- Страница в общем дизайне (hero, breadcrumb, ссылка домой)
- Route `*` в App.tsx
- SCSS модуль `src/styles/NotFound/notFound.module.scss`

---

### ЭТАП 7: Responsive 🔴 TODO
Breakpoints: `480px` (mobile) · `768px` (tablet) · `1024px` (laptop)

- **Header** — hamburger меню на мобильном
- **Hero** — `font-size: clamp(48px, 10vw, 88px)`
- **Home** — project rows → компактный вид
- **Projects** — grid 2×2 → 1 колонка, featured без медиа на мобильном
- **About** — Background + QuickInfo → stacked, principles 3-col → 1-col
- **Contact** — 2-col → 1-col
- **Footer** — проверить

---

### ЭТАП 8: Animations 🔴 TODO
- **Framer Motion** — `npm install framer-motion`
  - Page transitions через `<AnimatePresence>` + React Router
  - Scroll animations (секции появляются при прокрутке)
  - Stagger на project grid cards
  - Hover на project rows (стрелка → сдвигается)
- **Lenis** — smooth scroll через Provider в `main.tsx`
  - `npm install @studio-freight/lenis`
  - Отключить на мобильных (`window.matchMedia('(hover: none)')`)

---

### ЭТАП 9: SEO 🔴 TODO
- `react-helmet-async` или встроенный `<title>` через Vite
- Динамический `<title>` на каждой странице
- `<meta name="description">` уникальный
- Open Graph: `og:title`, `og:description`, `og:image`
- `robots.txt`
- `sitemap.xml`
- Lighthouse audit: Performance / A11y / SEO → цель 90+

---

### ЭТАП 10: Полировка 🔴 TODO
- **Lazy loading** — `React.lazy()` + `<Suspense>` для страниц
- **Skeleton компоненты** — для project cards при загрузке
- 404 страница (см. Этап 6.5)
- Реальные изображения вместо `[ IMAGE PLACEHOLDER ]`
- Реальные описания проектов (fullDescription в projects.ts)

---

## Структура проекта (актуальная)

```
src/
├── components/
│   ├── Header.tsx         # Fixed header, nav, lang switcher
│   ├── Footer.tsx         # Copyright + next page
│   └── Layout.tsx         # Header wrapper
├── pages/
│   ├── Home.tsx
│   ├── Projects.tsx       # Filtering, featured card, grid, archive
│   ├── About.tsx
│   └── Contact.tsx        # react-hook-form
├── shared/
│   └── projects.ts        # Project data + types + subtitle
├── locales/
│   ├── en.json
│   ├── no.json
│   └── ru.json
├── styles/
│   ├── tokens.scss        # Design tokens
│   ├── global.scss        # CSS reset + base
│   ├── Header/header.module.scss
│   ├── Footer/footer.module.scss
│   ├── Home/home.module.scss
│   ├── Projects/projects.module.scss
│   ├── About/about.module.scss
│   └── Contact/contact.module.scss
├── App.tsx                # BrowserRouter в main.tsx, useLocation scroll
└── main.tsx               # global.scss import, BrowserRouter
```

---

## Архитектурные решения

| Решение | Почему |
|---------|--------|
| CSS Modules + SCSS | Изоляция стилей, нет конфликтов, переиспользование через tokens |
| `@use` вместо `@import` | Dart Sass 1.65+ — @import deprecated |
| `filter: invert(1)` на SEND | Элегантный hover без отдельного цвета |
| `position: absolute` на счётчик фильтров | Не двигает кнопки при изменении |
| `clamp($spacing-xl, 5.5vw, 80px)` | Responsive padding без медиа-запросов |
| `subtitle` field в projects.ts | Описание на уровне данных, не translations |

---

## Что работает прямо сейчас
- ✅ Все 4 страницы рендерятся
- ✅ Language switcher NO/EN/RU работает
- ✅ Фильтры проектов работают
- ✅ Форма валидируется (react-hook-form)
- ✅ Scroll to top при навигации
- ✅ CSS reset применяется (global.scss в main.tsx)
- ✅ Responsive базово (900px breakpoint)

## Что не работает / TODO
- ❌ Форма реально не отправляет (нет API)
- ❌ Анимации отсутствуют
- ❌ Мобильный вид не доработан
- ❌ SEO/meta tags нет
- ❌ Deploy не настроен

---

**Last updated:** 2026-05-04
**Current focus:** Styling polish → Backend → Deploy

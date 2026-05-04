# Архитектура — Marborz.one

## Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── Header.tsx       # Fixed, nav, lang switcher
│   ├── Footer.tsx       # Copyright + next page link
│   ├── Layout.tsx       # Header wrapper
│   └── ProjectModal.tsx # Модалка проекта (видео/фото + описание)
│
├── pages/               # Страницы (по одной на роут)
│   ├── Home.tsx
│   ├── Projects.tsx     # Filtering, featured, grid, archive
│   ├── About.tsx
│   └── Contact.tsx      # react-hook-form + fetch API
│
├── shared/              # Данные и типы, не привязанные к UI
│   ├── projects.ts      # 12 проектов, типы, PROJECT_FILTERS константа
│   └── config.ts        # SITE_CONFIG (email, github, location)
│
├── locales/             # i18n переводы
│   ├── en.json
│   ├── no.json          # default язык
│   └── ru.json
│
├── styles/              # SCSS система
│   ├── tokens.scss      # ВСЕ переменные + миксины
│   ├── global.scss      # Reset + базовые стили
│   └── [Page]/          # Модульные стили по страницам
│       └── [page].module.scss
│
├── App.tsx              # Routes + ScrollToTop
└── main.tsx             # Entry point: BrowserRouter + global.scss
```

---

## Ключевые паттерны

### 1. CSS Modules
Каждая страница — свой SCSS модуль. Классы изолированы, нет глобальных конфликтов.

```tsx
import styles from '@/styles/Home/home.module.scss'
<div className={styles.hero}>
```

### 2. Токены через @use
```scss
// ✅ Правильно (Dart Sass 1.65+)
@use '../tokens' as *;

// ❌ Deprecated
@import '../tokens';
```

### 3. Shared config вместо хардкода
```ts
// src/shared/config.ts
export const SITE_CONFIG = {
  email: 'masuevamadi@gmail.com',
  github: 'https://github.com/MARBORZ',
  location: { name: 'Porsgrunn, Norway', mapUrl: '...' }
}
```

### 4. Routing + ScrollToTop
```tsx
// App.tsx
const { pathname } = useLocation()
useEffect(() => window.scrollTo(0, 0), [pathname])
```

### 5. i18n
```tsx
const { t, i18n } = useTranslation()
i18n.changeLanguage('no') // смена языка
t('home.hero.line1')       // получить строку
t('about.learning.items', { returnObjects: true }) // массив объектов
```

### 6. Contact форма
```tsx
// react-hook-form + fetch
const { register, handleSubmit, setError } = useForm()
await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
```

---

## Environment Variables

```env
VITE_API_URL=https://marborz-one.onrender.com
```

CORS настроен только для `marborz.one` — локально форма не отправляет.

---

## Роутинг

| Path | Компонент |
|---|---|
| `/` | Home |
| `/projects` | Projects |
| `/about` | About |
| `/contact` | Contact |

---

## Что НЕ используется (намеренно)
- Tailwind — выбрали SCSS Modules для контроля и обучения
- Redux/Zustand — состояние простое, useState достаточно
- Animations пока — Framer Motion в планах (Этап 7)

---

Last updated: 2026-05-04

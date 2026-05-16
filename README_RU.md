# marborz.one — Личное портфолио

Сайт-портфолио. Написал с нуля пока учился fullstack-разработке — начал программировать в мае 2025.

**Живой сайт:** [marborz.one](https://marborz.one)

---

## Стек

| Слой | Технология |
|---|---|
| Фреймворк | React 19 + TypeScript |
| Сборщик | Vite |
| Стили | SCSS Modules + CSS custom properties (дизайн-токены) |
| Роутинг | React Router DOM |
| Анимации | Framer Motion (только на десктопе) |
| i18n | react-i18next (EN / RU / NO) |
| Формы | react-hook-form |
| Бэкенд | Express + Resend (доставка писем с формы контакта) |
| Деплой | Vercel |

---

## Структура проекта

```
src/
├── assets/
│   ├── project_images/      # Скриншоты проектов
│   └── project_videos/      # Записи экрана проектов
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ProjectModal.tsx      # Модалка через portal (обходит stacking context motion.div)
│   └── ...
├── hooks/
│   ├── useIsMobile.ts        # Отключает анимации на мобильных
│   └── useInView.ts          # Intersection observer для scroll-анимаций
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
│   └── projects.ts           # Данные проектов + разрешение URL ресурсов
├── styles/
│   ├── tokens.scss           # Дизайн-токены (цвета, отступы, типографика)
│   └── [Page]/[page].module.scss
├── App.tsx
└── main.tsx
```

---

## Страницы

- **Home** — хиро, избранные проекты, подход к работе
- **Projects** — все 14 проектов с фильтрами по статусу, featured-блок, сетка карточек, архивный список
- **About** — биография, путь обучения, принципы
- **Contact** — форма с доставкой письма на бэкенде

---

## Проекты (14)

| # | Название | Статус |
|---|---|---|
| 01 | Aether | эксперимент |
| 02 | 2048 | эксперимент |
| 03 | Yatzy | эксперимент |
| 04 | Stasis | готов |
| 05 | HDUFNDSK | активный |
| 06 | Kropp Fitness | эксперимент |
| 07 | Skrekkeparken | эксперимент |
| 08 | Date Time Wallpaper | эксперимент |
| 09 | Redbeard VFX | готов |
| 10 | Todo React | готов |
| 11 | Skan Jus | готов |
| 12 | Norden Verk | готов |
| 13 | Greenfield Farms | готов |
| 14 | Nordic Market | запланирован |

Запланированные проекты задизейблены (без модалки) и показывают `[ COMING SOON ]` при ховере.

---

## Интернационализация

Три языка, хранятся через `i18next-browser-languagedetector`:

```typescript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
t('projects.list.stasis.fullDescription')
```

Весь UI-текст, описания проектов и полные описания переведены в `src/locales/{en,ru,no}.json`.

---

## Ключевые технические решения

**ProjectModal через `createPortal`**
`motion.div` от Framer Motion с `transform` создаёт новый CSS containing block, что ломает `position: fixed` у дочерних элементов. Модалка монтируется в `document.body` через portal — позиционируется относительно вьюпорта независимо от анимационных обёрток.

**Нет двойных бордеров**
Каждая секция имеет только `border-bottom`. Соседние секции делят эту одну линию — у следующей секции нет `border-top`.

**Анимации только на десктопе**
`useIsMobile()` оборачивает все Framer Motion компоненты. На мобильном рендерятся обычные `div` элементы чтобы избежать проблем с layout от transform-анимаций на маленьких экранах.

**URL статических ресурсов через Vite**
Пути к ресурсам в `src/shared/projects.ts` используют Vite-идиоматичный паттерн чтобы выжить в production-сборке:
```typescript
videoUrl: new URL('../assets/project_videos/stasis.mp4', import.meta.url).href
```

---

## Запуск

```bash
# Установить зависимости
bun install

# Запустить dev-сервер (http://localhost:5173)
bun run dev

# Собрать для production
bun run build
```

---

## Автор

Амади Масуев — первый курс, IT и медиапроизводство, Поршгрунн, Норвегия.
Начал программировать в мае 2025. Иду в сторону ML-инженерии.

Email: masuevamadi@gmail.com  
GitHub: [github.com/MARBORZ](https://github.com/MARBORZ)

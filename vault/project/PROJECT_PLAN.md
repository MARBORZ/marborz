# PROJECT_PLAN — Marborz.one Redesign 2026

## 📊 Обзор проекта

| Параметр | Значение |
|----------|----------|
| **Проект** | Redizajn portfolio marborz.one |
| **Цель** | Junior+ portfolio с focus на engineering mindset |
| **Стек** | Vite + React 19 + TypeScript + Express (backend) |
| **Дизайн** | Pencil (.pen) с заранее определённой дизайн-системой |
| **Структура** | 4 страницы + навигация + компоненты |

---

## 🎯 Этапы разработки

### ЭТАП 1: Project Setup ✅ IN PROGRESS
**📥 INPUT:** Создать базовый React + Vite + TypeScript проект
**⚙️ PROCESSING:**
- Vite как build tool (fast, modern)
- React 19 (latest) + TypeScript для type safety
- pnpm как package manager
- Minimal dependencies на этапе (позже добавим React Router, etc)

**📤 OUTPUT:**
- Vite + React 19 + TS проект создан
- Папка структура готова
- Dev server работает локально
- Без Framer Motion / Lenis / React Router пока

**Статус:** Starting now...

---

### ЭТАП 2: Design Tokens & Global Styles
**📥 INPUT:** Применить дизайн-токены в код
**⚙️ PROCESSING:**
- Вытащить дизайн-токены из Pencil (цвета, типография, spacing)
- Создать CSS variables / Tailwind config
- Применить глобальный стиль

**📤 OUTPUT:**
- global.css с всеми токенами
- CSS variables для лёгкого управления стилями
- Всё из [[design/DESIGN_TOKENS.md]]

**Статус:** Pending

---

### ЭТАП 3: Layout & Components
**📥 INPUT:** Создать переиспользуемые компоненты
**⚙️ PROCESSING:**
- Header (навигация, language switcher)
- Button (с вариантами: primary, secondary, ghost)
- Form fields (input, textarea)
- Project card
- Footer

**📤 OUTPUT:**
- components/ папка с React компонентами
- Каждый компонент имеет props, className, clean API
- Все из [[design/COMPONENTS.md]]

**Статус:** Pending

---

### ЭТАП 4: Страницы (Home, Projects, About, Contact)
**📥 INPUT:** Реализовать 4 страницы по дизайну
**⚙️ PROCESSING:**
- Для каждой страницы:
  - Прочитать структуру из дизайна
  - Построить компоненты вверх из базовых
  - Добавить текст, проверить responsive

**📤 OUTPUT:**
- pages/Home.tsx
- pages/Projects.tsx
- pages/About.tsx
- pages/Contact.tsx
- Все работают, все выглядят по дизайну

**Статус:** Pending

---

### ЭТАП 5: Навигация & Routing
**📥 INPUT:** Сделать навигацию между страницами
**⚙️ PROCESSING:**
- React Router (добавим на этом этапе)
- Header навигация
- Smooth transitions

**📤 OUTPUT:**
- React Router настроен
- Все routes работают
- Header меняет active state

**Статус:** Pending

---

### ЭТАП 6: Backend Integration
**📥 INPUT:** Подключить контактную форму к backend
**⚙️ PROCESSING:**
- Скопировать Express backend из C:/dev/bio-site (как есть)
- API endpoints интегрировать в Contact page
- Resend для emails

**📤 OUTPUT:**
- Contact форма отправляет данные на backend
- Emails приходят через Resend
- Error handling + success messages

**Статус:** Pending

---

### ЭТАП 7: Animations & Polish
**📥 INPUT:** Добавить animations и улучшить UX
**⚙️ PROCESSING:**
- Framer Motion (добавим на этом этапе)
- Scroll animations
- Hover states
- Page transitions

**📤 OUTPUT:**
- Плавные animations по всему сайту
- Никакого лишнего — только что улучшает UX

**Статус:** Pending

---

### ЭТАП 8: Deployment & Testing
**📥 INPUT:** Подготовить к production
**⚙️ PROCESSING:**
- Build optimization
- Lighthouse audit
- Deploy на Vercel
- Testing (manual + automated)

**📤 OUTPUT:**
- marborz.one живой и быстрый
- Все работает на мобильных
- Lighthouse зелёный

**Статус:** Pending

---

## 🎨 Дизайн-система

### Цвета (из [[design/DESIGN_TOKENS.md]])
```
color-accent:        #0A0A0A (основной тёмный)
color-bg:            #F4F2ED (фон, бежевый)
color-muted:         #E8E5DD (приглушённый серо-бежевый)
color-text:          #0A0A0A (основной текст)
color-text-secondary: #6B6B68 (вторичный текст)
```

### Типография
```
font-sans:  Inter, system-ui, sans-serif
font-serif: Georgia, serif
font-mono:  JetBrains Mono, monospace
```

### Размеры шрифтов
```
size-xs:   11px
size-sm:   12px
size-base: 16px (body text)
size-lg:   20px
size-xl:   26px
size-2xl:  32px
size-3xl:  44px
size-4xl:  64px (headings)
size-5xl:  88px (hero headings)
```

---

## 📄 Структура страниц

### HOME (02_home_en)
**Секции:**
- Header (nav, language switcher)
- Hero: "Building interfaces that think" (с italics на "interfaces")
- Selected Projects (4 проекта с row layout)
- Approach section (Why I code this way)
- Contact CTA (masuevamadi@gmail.com)
- Footer

### PROJECTS (04_projects_en)
**Секции:**
- Header
- Hero: "Everything I've built and learned from"
- Filter buttons (All, Active, Shipped, Experiments)
- Featured project (большой с видео)
- Project grid (12 projects, 2 колонки)
- Experiments archive

### ABOUT (06_about_en)
**Секции:**
- Header
- Hero: "Three languages at home, one at school, one in the terminal"
- Background информация (1st year IT student)
- Quick info (Location, Status, Stack, Editor)
- Learning path (4 этапа)
- Principles (3 основных принципа)
- Footer

### CONTACT (08_contact_en)
**Секции:**
- Header
- Hero: "Let's talk"
- Contact form (name, email, message)
- Direct contacts (email, github, location)
- Language info
- Footer

---

## 📁 Структура проекта (итоговая)

```
C:/dev/main/marborz/
├── src/
│   ├── components/          # Переиспользуемые компоненты
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── ProjectCard.tsx
│   │   └── ...
│   ├── pages/               # Страницы
│   │   ├── Home.tsx
│   │   ├── Projects.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── styles/              # Глобальные стили
│   │   └── global.css
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── vault/                   # Obsidian vault (этот файл)
├── public/                  # Статические файлы
├── vite.config.ts
├── tsconfig.json
├── package.json
└── pnpm-lock.yaml
```

---

## 🔗 Связанные файлы в vault

Для каждого этапа есть детали в:
- [[../design/DESIGN_TOKENS.md]] — дизайн-токены и их использование
- [[../design/COMPONENTS.md]] — компоненты и их структура
- [[../code/ARCHITECTURE.md]] — архитектурные решения
- [[../notes/NEURAL_CONNECTION_TEMPLATE.md]] — как писать заметки про решения

---

## 📝 Как обновлять этот план

Для каждого решения используй структуру:
1. **INPUT:** Что входит?
2. **PROCESSING:** Какие варианты, трейд-оффы?
3. **OUTPUT:** Итоговое решение и почему?

Создавай заметку в [[../notes/]] и ссылайся на неё здесь.

---

**Last updated:** 2026-05-03  
**Next step:** ✅ Этап 1 — создание Vite проекта

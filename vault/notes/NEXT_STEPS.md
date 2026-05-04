# Следующие шаги — Финальные штрихи
**Дата:** 2026-05-04  
**Статус:** 🔄 В планировании

---

## 🎯 Осталось до завершения

### 1. Применить mixins к остальным SCSS (HIGH)
**Файлы:**
- `src/styles/Projects/projects.module.scss`
- `src/styles/About/about.module.scss`
- `src/styles/Contact/contact.module.scss`
- `src/styles/NotFound/notFound.module.scss`

**Что сделать:**
- Заменить все `@media (max-width: ...)` на `@include mobile/tablet/laptop`
- Использовать `@include transition-opacity` вместо `transition: opacity $transition`
- Убрать дублирующиеся стили

**Результат:** Еще -100 строк кода, полная консистентность

---

### 2. Lazy Loading + Skeleton (HIGH) 🆕
**Цель:** Улучшить perceived performance и UX при загрузке

#### 2.1 React.lazy для страниц
```tsx
// App.tsx
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))

<Suspense fallback={<PageSkeleton />}>
  <Routes>
    <Route path="/" element={<Home />} />
    ...
  </Routes>
</Suspense>
```

#### 2.2 Skeleton компоненты
**Создать:**
- `src/components/skeletons/PageSkeleton.tsx` — для страниц
- `src/components/skeletons/ProjectCardSkeleton.tsx` — для карточек проектов
- `src/components/skeletons/ProjectRowSkeleton.tsx` — для строк проектов

**Стили:**
- Анимация пульсации (shimmer effect)
- Соответствие реальным размерам компонентов
- Использование токенов цветов

#### 2.3 Lazy loading изображений
```tsx
<img 
  src={project.imageUrl} 
  loading="lazy"
  alt={project.title}
/>
```

**Где применить:**
- ProjectModal — featured image
- Projects page — все карточки
- About page — если будут изображения

#### 2.4 Intersection Observer для анимаций
- Анимировать элементы при появлении в viewport
- Использовать для project cards, sections

---

### 3. Animations — Framer Motion (MEDIUM)
**Установка:**
```bash
npm install framer-motion
```

**Что анимировать:**
- Page transitions (fade in/out при смене роута)
- Project cards (stagger animation при загрузке)
- Modal (scale + fade)
- Scroll animations (fade in при скролле)

**Примеры:**
```tsx
// Page transition
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>

// Stagger cards
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  {projects.map((project, i) => (
    <motion.div key={project.id} variants={itemVariants}>
      <ProjectCard {...project} />
    </motion.div>
  ))}
</motion.div>
```

---

### 4. Deploy — Vercel (HIGH)
**Шаги:**
1. Создать аккаунт на Vercel (если нет)
2. Подключить GitHub репозиторий
3. Настроить build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Добавить environment variables (если нужны)
5. Deploy!

**Custom domain:**
- Купить marborz.one (или использовать другой домен)
- Настроить DNS записи
- Добавить домен в Vercel

---

### 5. SEO Optimization (MEDIUM)
**Meta tags в index.html:**
```html
<meta name="description" content="Amadi Masuev — Junior Fullstack Developer Portfolio" />
<meta name="keywords" content="fullstack, developer, react, typescript, portfolio" />
<meta property="og:title" content="Amadi Masuev — Portfolio" />
<meta property="og:description" content="Building interfaces that think" />
<meta property="og:image" content="/og-image.png" />
<meta property="og:url" content="https://marborz.one" />
<meta name="twitter:card" content="summary_large_image" />
```

**Создать:**
- `public/og-image.png` — Open Graph изображение (1200x630px)
- `public/favicon.ico` — фавикон
- `public/robots.txt` — для поисковых роботов
- `public/sitemap.xml` — карта сайта

**React Helmet (опционально):**
```bash
npm install react-helmet-async
```

**Lighthouse audit:**
- Проверить Performance, Accessibility, Best Practices, SEO
- Исправить найденные проблемы

---

### 6. Финальная полировка (LOW)
- [ ] Проверить все переводы (NO/EN/RU)
- [ ] Проверить все ссылки
- [ ] Тестирование на разных устройствах
- [ ] Проверить accessibility (keyboard navigation, screen readers)
- [ ] Добавить loading states для форм
- [ ] Error boundaries для обработки ошибок

---

## Приоритеты

### ✅ Завершено (2026-05-04):
1. ✅ Применить mixins к остальным SCSS — Projects, About, Contact, NotFound
2. ✅ Lazy Loading + Skeleton — React.lazy для всех страниц, 3 skeleton компонента
3. ✅ Animations (Framer Motion) — page transitions, scroll animations, language change skeleton

### Сейчас (следующий шаг):
4. Deploy на Vercel

### Потом:
5. SEO Optimization
6. Финальная полировка

---

## Оценка времени
- Lazy Loading + Skeleton: ~2 часа
- Применить mixins: ~1 час
- Animations: ~2-3 часа
- Deploy: ~1 час
- SEO: ~1-2 часа
- Полировка: ~1-2 часа

**Итого:** ~8-11 часов работы

---

## Связи
- [[SESSION_2026-05-04_code-review]] — предыдущая сессия
- [[../project/PROJECT_PLAN]] — общий план проекта
- [[MARBORZ_PROJECT]] — canvas обзор

---
**Last updated:** 2026-05-04 17:05

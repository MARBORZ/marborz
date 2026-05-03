# COMPONENTS — Структура компонентов

## 📥 INPUT
Какие базовые компоненты нужны для построения 4 страниц?

## ⚙️ PROCESSING
Из дизайна вижу повторяющиеся элементы:
- Header с навигацией (всегда)
- Footer (всегда)
- Buttons (primary, secondary)
- Project cards
- Form fields
- Text elements (headings, body, meta)

## 📤 OUTPUT
8 основных компонентов + примитивы

---

## 🧩 Компоненты (по приоритету)

### 1. Header ⭐ CRITICAL
**Размер:** 1440 × 72px  
**Элементы:**
- Logo `[ MARBORZ.ONE ]` (JetBrains Mono, 12px)
- Navigation (HOME, PROJECTS, ABOUT, CONTACT)
  - Active nav имеет underline (1px, color-accent)
  - Inactive nav — color-text-secondary
- Language switcher (NO / EN с toggle на EN)

**Props:**
```typescript
type HeaderProps = {
  currentPage?: 'home' | 'projects' | 'about' | 'contact';
  currentLang?: 'en' | 'ru';
  onNavClick?: (page: string) => void;
  onLangChange?: (lang: string) => void;
}
```

**Layout:** Absolutely positioned elements (как в дизайне)

---

### 2. Footer ⭐ CRITICAL
**Размер:** 1440 × 80px  
**Элементы:**
- Left: `© 2026 AMADI MASUEV`
- Right: `→ NEXT_PAGE` (зависит от страницы)

**Props:**
```typescript
type FooterProps = {
  nextPage?: string;
}
```

---

### 3. Button ⭐ CRITICAL
**Варианты:**
- **Primary:** Black bg, white text, rounded 4px
- **Secondary:** Transparent, border 1px, black text, rounded 4px
- **Ghost:** Transparent, no border, text with underline on hover

**Props:**
```typescript
type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'base' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}
```

**Размеры:**
- sm: 12px font, padding 8px 12px
- base: 14px font, padding 12px 20px
- lg: 16px font, padding 16px 24px

---

### 4. FormField
**Варианты:** Input, Textarea  
**Элементы:**
- Label (size-sm, mono, color-text-secondary)
- Input field (border-bottom only, 1px color-accent)
- Placeholder (color-muted)

**Props:**
```typescript
type FormFieldProps = {
  label: string;
  type?: 'text' | 'email' | 'textarea';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
}
```

---

### 5. ProjectCard
**Размер:** 620 × 360px (для grid layout)  
**Элементы:**
- Demo video placeholder (color-muted bg)
- Project number `/01`, `/02`, etc (color-text-secondary, mono)
- Status badge (ACTIVE/SHIPPED/EXPERIMENT/PLANNED)
- Project title (size-xl, bold)
- Description (size-base, color-text-secondary)

**Props:**
```typescript
type ProjectCardProps = {
  number: string;
  title: string;
  description: string;
  status: 'active' | 'shipped' | 'experiment' | 'planned';
  videoPlaceholder?: boolean;
}
```

---

### 6. ProjectRow (Home page)
**Размер:** 1280 × 80px (project list row)  
**Элементы:**
- Project number `/01` (color-text-secondary)
- Title (size-xl)
- Tech stack (size-sm, color-text-secondary)
- Status badge
- Arrow indicator (→)

**Props:**
```typescript
type ProjectRowProps = {
  number: string;
  title: string;
  stack: string;
  status: 'active' | 'shipped' | 'experiment' | 'planned';
}
```

---

### 7. FilterButton
**Использование:** Projects page  
**Варианты:**
- Active: Black bg, white text
- Inactive: Transparent, border 1px, black text

**Props:**
```typescript
type FilterButtonProps = {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}
```

---

### 8. Meta (маленький text элемент)
**Использование:** Labels, captions, breadcrumbs  
**Props:**
```typescript
type MetaProps = {
  children: React.ReactNode;
  type?: 'label' | 'caption' | 'breadcrumb';
  color?: 'primary' | 'secondary';
}
```

---

## 🏗️ Примитивы (базовые элементы)

### Heading
```typescript
type HeadingProps = {
  level: 1 | 2 | 3 | 4 | 5; // h1 = size-5xl, h2 = size-4xl, etc
  children: React.ReactNode;
  style?: 'normal' | 'italic'; // italic используется для emphasis
}
```

### Text
```typescript
type TextProps = {
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  color?: 'primary' | 'secondary';
  weight?: 'normal' | 'bold' | '600';
  children: React.ReactNode;
}
```

### Divider
```typescript
type DividerProps = {
  width?: number | string;
  color?: string; // default: color-text
}
```

---

## 📂 Файловая структура

```
src/components/
├── index.ts              # Export all
├── Header.tsx
├── Footer.tsx
├── Button.tsx
├── FormField.tsx
├── ProjectCard.tsx
├── ProjectRow.tsx
├── FilterButton.tsx
├── Meta.tsx
├── primitives/
│   ├── Heading.tsx
│   ├── Text.tsx
│   └── Divider.tsx
└── hooks/
    └── useNav.ts
```

---

## 🎯 Правила реализации

1. **Переиспользуемость:** Компонент должен быть максимально generic
2. **Props API:** Clear, self-documenting names
3. **Styling:** CSS Modules или Tailwind (решим на этапе 2)
4. **Accessibility:** Semantic HTML, proper ARIA labels
5. **Responsive:** Mobile-first approach (позже)
6. **No hardcoded colors:** Используй CSS variables из [[./DESIGN_TOKENS.md]]

---

## 📊 Приоритет реализации

1️⃣ Header + Footer (нужны на всех страницах)  
2️⃣ Button + FormField (используются везде)  
3️⃣ Primitives (Heading, Text, Divider)  
4️⃣ ProjectCard + ProjectRow  
5️⃣ FilterButton + остальное  

---

## 🔗 Связь с другими файлами

- [[./DESIGN_TOKENS.md]] — какие цвета/размеры использовать
- [[../../PROJECT_PLAN.md]] — когда реализовывать
- [[../code/ARCHITECTURE.md]] — как организовать файлы

---

**Last updated:** 2026-05-03  
**Status:** Ready for implementation (Этап 3)

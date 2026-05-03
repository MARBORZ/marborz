# DESIGN_TOKENS — Система токенов

## 🎨 Цвета

### Основные цвета
| Токен | Hex | Использование |
|-------|-----|-----------------|
| `color-accent` | #0A0A0A | Основной тёмный цвет, текст, active элементы |
| `color-bg` | #F4F2ED | Фон страниц, светлые области |
| `color-muted` | #E8E5DD | Фон для secondary элементов |
| `color-text` | #0A0A0A | Основной текст, заголовки |
| `color-text-secondary` | #6B6B68 | Вторичный текст, descriptions, labels |

### Правила использования
- **Dark text on light bg:** #0A0A0A on #F4F2ED (contrast ~18:1)
- **Secondary text:** #6B6B68 for meta info, labels, hints
- **Backgrounds:** #F4F2ED (основной), #E8E5DD (для выделения)
- **No additional colors** — держим минимально

---

## 🔤 Типография

### Семейства шрифтов
```
font-sans:  Inter, system-ui, sans-serif      — основной (body, headings)
font-serif: Georgia, serif                     — для emphasis/italics
font-mono:  JetBrains Mono, monospace          — для навигации, labels, code
```

### Размеры
| Токен | Px | Использование |
|-------|-----|-----------------|
| `size-xs` | 11 | Meta info, small labels |
| `size-sm` | 12 | Navigation, buttons (text) |
| `size-base` | 16 | Body text (стандарт) |
| `size-lg` | 20 | Subheadings |
| `size-xl` | 26 | Section headings |
| `size-2xl` | 32 | Page subheadings |
| `size-3xl` | 44 | Section titles |
| `size-4xl` | 64 | Large headings |
| `size-5xl` | 88 | **Hero headings** |

### Рекомендации по использованию
- **Hero headings:** size-5xl + line-height: 0.95 + letter-spacing: -0.03
- **Page headings:** size-3xl + line-height: 1.1
- **Section titles:** size-2xl
- **Body text:** size-base (16px) + line-height: 1.5-1.65
- **Meta/labels:** size-sm (12px) + letter-spacing: 0.08 + mono font

---

## 📐 Spacing & Layout

### Базовый юнит
- **Base unit:** 8px (всё кратно 8)
- **Padding:** 16px, 24px, 32px (2x, 3x, 4x base)
- **Gap:** 8px, 12px, 16px, 24px между элементами
- **Margin:** 40px, 60px, 80px между секциями

### Viewport
- **Width:** 1440px (max-width для контента)
- **Content padding:** 80px (слева/справа)
- **Breakpoints:** TBD (мобильная версия позже)

---

## 🎯 Компоненты (Правила применения токенов)

### Header
- **Background:** color-bg (#F4F2ED)
- **Text:** color-text (#0A0A0A)
- **Secondary text:** color-text-secondary (#6B6B68)
- **Font:** font-mono, size-sm (12px)
- **Height:** 72px

### Button
- **Primary (filled):** 
  - Background: color-accent (#0A0A0A)
  - Text: color-bg (#F4F2ED)
  - Border-radius: 4px
  
- **Secondary (outline):**
  - Background: transparent
  - Border: 1px color-accent
  - Text: color-accent
  - Border-radius: 4px

- **Ghost:**
  - Background: transparent
  - Text: color-text
  - No border

### Text
- **Headings (h1, h2, h3):** font-sans, color-text
- **Body:** font-sans, color-text, size-base (16px)
- **Secondary:** color-text-secondary
- **Code/Meta:** font-mono, color-text-secondary, size-sm

---

## 📊 CSS Variables (как писать в коде)

```css
:root {
  /* Colors */
  --color-accent: #0A0A0A;
  --color-bg: #F4F2ED;
  --color-muted: #E8E5DD;
  --color-text: #0A0A0A;
  --color-text-secondary: #6B6B68;

  /* Typography */
  --font-sans: Inter, system-ui, sans-serif;
  --font-serif: Georgia, serif;
  --font-mono: JetBrains Mono, monospace;

  /* Font sizes */
  --size-xs: 11px;
  --size-sm: 12px;
  --size-base: 16px;
  --size-lg: 20px;
  --size-xl: 26px;
  --size-2xl: 32px;
  --size-3xl: 44px;
  --size-4xl: 64px;
  --size-5xl: 88px;

  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 12px;
  --spacing-base: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
}
```

---

## ⚠️ Важные правила

1. **Контраст:** Всегда #0A0A0A на #F4F2ED или наоборот
2. **Единственные цвета:** Только 5 цветов в палитре
3. **Типография:** 3 семейства, не больше
4. **Spacing:** Кратно 8px
5. **Никаких теней:** Clean, minimal дизайн
6. **Border-radius:** 0 (sharp) или 4px (slight) или 12px (card)
7. **Letter-spacing:** Для mono font +0.08–0.1, для остального -0.01 to -0.04 (headings)
8. **Line-height:** Body 1.5-1.65, headings 0.95-1.1

---

## 🔗 Где используется

- [[../../PROJECT_PLAN.md]] — основной план
- [[./COMPONENTS.md]] — как применить к компонентам
- [[../code/ARCHITECTURE.md]] — как организовать в коде

---

**Last updated:** 2026-05-03

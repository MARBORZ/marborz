# DESIGN TOKENS — Актуальный справочник

> Источник истины: `src/styles/tokens.scss`
> Все переменные подключаются через `@use '../tokens' as *`

---

## Цвета

| Переменная | Hex | Использование |
|---|---|---|
| `$color-bg` | `#f4f2ed` | Фон страниц (кремовый) |
| `$color-text` | `#0a0a0a` | Основной текст, иконки, бордеры |
| `$color-text-muted` | `#6b6b68` | Лейблы, мета-инфо, вторичный текст |
| `$color-text-placeholder` | `#a8a8a4` | Placeholder в инпутах |
| `$color-border` | `#0a0a0a` | Все разделители (1px solid) |
| `$color-surface` | `#e8e5dd` | Фон карточек, placeholder медиа |
| `$color-error` | `#d32f2f` | Ошибки валидации |
| `$color-success` | `#2e7d32` | Успешная отправка |

**Правило:** максимум 8 цветов. Без теней. Без градиентов.

---

## Типографика

```scss
$font-sans:  'Inter', system-ui, sans-serif;   // заголовки, тело
$font-serif: 'Georgia', 'Times New Roman', serif; // italic акценты в hero
$font-mono:  'JetBrains Mono', monospace;      // nav, labels, код
```

### Размеры шрифтов

| Переменная | px | Где используется |
|---|---|---|
| `$font-size-xs` | 11 | Section labels, мета |
| `$font-size-sm` | 12 | Nav, breadcrumb, monospace текст |
| `$font-size-md` | 14 | Body text, descriptions |
| `$font-size-lg` | 18 | Contact values, subtext |
| `$font-size-xl` | 22 | Card titles (маленькие карточки) |
| `$font-size-2xl` | 26 | Project row titles |
| `$font-size-3xl` | 36 | Section subtitles (Learning path) |
| `$font-size-4xl` | 44 | CTA email, approach h3 маленький |
| `$font-size-5xl` | 56 | Featured project title |
| `$font-size-6xl` | 88 | **Hero h1 на всех страницах** |

### Letter spacing

| Переменная | Значение | Где |
|---|---|---|
| `$letter-spacing-hero` | `-0.01em` | Hero h1 |
| `$letter-spacing-title` | `-0.02em` | CTA email link |
| `$letter-spacing-tight` | `-0.01em` | Card titles |
| `$letter-spacing-wide` | `0.08em` | Nav, breadcrumb |
| `$letter-spacing-label` | `0.10em` | Section labels (caps) |

### Line heights

| Переменная | Значение |
|---|---|
| `$line-height-tight` | `0.95` |
| `$line-height-normal` | `1` |
| `$line-height-relaxed` | `1.1` |
| `$line-height-loose` | `1.55` |

**Глобально для h1-h6:** `line-height: 1.15` (в global.scss)

---

## Spacing

| Переменная | px |
|---|---|
| `$spacing-xs` | 8 |
| `$spacing-sm` | 12 |
| `$spacing-md` | 16 |
| `$spacing-lg` | 24 |
| `$spacing-xl` | 32 |
| `$spacing-2xl` | 48 |
| `$spacing-3xl` | 64 |
| `$spacing-4xl` | 88 |

**Padding страниц:** `$spacing-xl clamp($spacing-xl, 5.5vw, 80px)` — responsive без медиа-запросов

---

## Border radius

| Переменная | px | Где |
|---|---|---|
| `$radius-sm` | 2 | Lang кнопки |
| `$radius-md` | 4 | Status badges, SEND кнопка |
| `$radius-lg` | 12 | — |

---

## Transitions

```scss
$transition: 0.2s; // единый токен для всех transitions
```

---

## Миксины

```scss
@mixin page-layout     // базовая структура .page
@mixin hero-section    // .hero с h1 стилями
@mixin breadcrumb-style
@mixin section-label
```

Использование:
```scss
.page { @include page-layout; }
.hero { @include hero-section; }
```

---

Last updated: 2026-05-04

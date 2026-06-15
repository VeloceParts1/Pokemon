# PokeSource Visual Identity Style Guide

## Brand Overview
**PokeSource** is a premium Pokémon TCG e-commerce destination built on trust, authenticity, and speed. Every visual element communicates reliability, luxury, and a deep connection to the collecting community.

---

## 1. Color Palette

### Primary Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Deep Charcoal** | `#1A1A2E` | Backgrounds, dark mode base, footer |
| **Electric Royal Blue** | `#2D3A8C` | Primary accent, buttons, links, headers |
| **Rich Gold** | `#D4A843` | Premium highlights, price tags, badges, CTAs |
| **Pure White** | `#FFFFFF` | Text on dark backgrounds, cards |
| **Soft Slate** | `#8B8FA3` | Secondary text, muted UI elements |

### Secondary / Accent Colors
| Color | Hex | Usage |
|-------|-----|-------|
| **Electric Purple** | `#6C63FF` | Hover states, glow effects, highlights |
| **Dark Navy** | `#0F1626` | Deepest backgrounds, overlays |
| **Holo Iridescent** | `#E8E0FF` | Card shine effects, decorative elements |
| **Success Green** | `#34D399` | In-stock indicators, positive badges |
| **Warning Amber** | `#F59E0B` | Pre-order badges, limited stock alerts |

### Gradient Palette
```
Primary Gradient:    #2D3A8C → #6C63FF  (Blue to Purple)
Gold Gradient:       #D4A843 → #F5D982  (Gold shimmer)
Dark Gradient:       #1A1A2E → #0F1626  (Charcoal to Navy)
Hero Glow:           #6C63FF → #2D3A8C  (Purple to Blue with opacity)
```

---

## 2. Typography

### Primary Font: **Inter** (sans-serif)
- Clean, modern, highly legible at all sizes
- Used for body text, navigation, buttons, and headings

### Display Font: **Space Grotesk** (sans-serif)
- Slightly more personality, geometric
- Used for hero headings, logos, large display text

### Monospace Font: **JetBrains Mono**
- Used for prices, SKU numbers, order IDs

### Type Scale
| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| **Hero H1** | 56px / 3.5rem | 700 (Bold) | 1.1 |
| **Section H2** | 32px / 2rem | 600 (Semibold) | 1.2 |
| **Card Title** | 20px / 1.25rem | 600 (Semibold) | 1.3 |
| **Body Large** | 18px / 1.125rem | 400 (Regular) | 1.5 |
| **Body** | 16px / 1rem | 400 (Regular) | 1.5 |
| **Small / Caption** | 14px / 0.875rem | 500 (Medium) | 1.4 |
| **Micro / Price** | 12px / 0.75rem | 600 (Semibold) | 1.3 |
| **Price Large** | 24px / 1.5rem | 700 (Bold) | 1.2 |

---

## 3. Spacing & Layout

| Token | Pixels | Tailwind |
|-------|--------|----------|
| xs | 4px | 1 |
| sm | 8px | 2 |
| md | 16px | 4 |
| lg | 24px | 6 |
| xl | 32px | 8 |
| 2xl | 48px | 12 |
| 3xl | 64px | 16 |

### Container Widths
- **Max content width:** 1280px (Tailwind `max-w-7xl`)
- **Narrow content:** 768px (Tailwind `max-w-2xl`)
- **Product grid:** 4 columns desktop → 2 tablet → 1 mobile

---

## 4. UI Component Styling

### Cards / Product Cards
- Background: `#FFFFFF` (light) or `#1E1E3A` (dark)
- Border-radius: 12px (`rounded-xl`)
- Subtle border: 1px solid `rgba(214, 168, 67, 0.15)` (gold tint)
- Shadow: Soft elevated shadow (`shadow-lg`)
- Hover: Lift +2px, gold border glow

### Buttons
- **Primary:** Gold gradient (`#D4A843` → `#F5D982`), dark text, rounded-lg
- **Secondary:** Outlined, gold border, transparent bg
- **Ghost:** No bg, gold text
- **Size:** 14px/16px font, 10px/12px/16px padding, 8px radius

### Badges
- **Pre-order:** Purple bg (`#6C63FF`), white text
- **In Stock:** Green bg (`#34D399`), white text
- **Limited:** Amber bg (`#F59E0B`), dark text
- **Sold Out:** Slate bg (`#8B8FA3`), white text

### Navigation
- Sticky header, dark charcoal bg (`#1A1A2E`)
- Gold logo, white nav links with gold hover
- Cart badge with purple indicator

---

## 5. Image Assets

| Asset | File | Size | Usage |
|-------|------|------|-------|
| **Logo** | `pokesource-logo.png` | 1024×1024 | Site logo, favicon, branding |
| **Hero Banner** | `pokesource-hero-banner.png` | 1536×1024 | Homepage hero section |
| **Booster Pack** | `pokesource-booster-pack.png` | 1024×1024 | Product catalog placeholder |
| **Elite Box** | `pokesource-elite-box.png` | 1024×1024 | Premium product placeholder |
| **Single Card** | `pokesource-single-card.png` | 1024×1024 | Individual card placeholder |

---

## 6. Shadow & Glow System

```css
--shadow-sm:    0 1px 3px rgba(26, 26, 46, 0.1);
--shadow-md:    0 4px 6px rgba(26, 26, 46, 0.12);
--shadow-lg:    0 10px 25px rgba(26, 26, 46, 0.15);
--shadow-xl:    0 20px 50px rgba(26, 26, 46, 0.2);
--glow-gold:    0 0 20px rgba(212, 168, 67, 0.3);
--glow-purple:  0 0 20px rgba(108, 99, 255, 0.3);
```

---

## 7. Animation & Transitions
- **Hover transitions:** 200ms ease-in-out
- **Page transitions:** 300ms ease
- **Reveal animations:** 400ms ease-out with 100ms stagger
- **Card lift:** translateY(-4px) + enhanced shadow
- **Pulse (glow):** Gold/purple glow oscillation on premium badges

---

## 8. Voice & Tone
- **Professional but passionate** — this is for serious collectors
- **Clear and direct** — authenticity is the core promise
- **Community-oriented** — "For traders, by traders"
- **Premium without being pretentious** — high-end but approachable
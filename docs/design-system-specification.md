# Gifted Space Design System Specification v2.0
# ギフテッドスペース デザインシステム仕様書

> A premium, warm, and professional visual system for an NPO supporting youth
> with social difficulties in Ichikawa City, Japan.

---

## Table of Contents

1. [Design Principles](#1-design-principles)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing System](#4-spacing-system)
5. [Border Radius System](#5-border-radius-system)
6. [Shadow System](#6-shadow-system)
7. [Animation System](#7-animation-system)
8. [Component Library](#8-component-library)
9. [Layout System](#9-layout-system)
10. [Background Effects](#10-background-effects)
11. [Performance Guidelines](#11-performance-guidelines)
12. [Tech Stack Recommendation](#12-tech-stack-recommendation)

---

## 1. Design Principles

### Core Philosophy
- **Psychological Safety First**: Every visual element should feel approachable, never intimidating
- **Warm Professionalism**: Convey trust through polish without corporate coldness
- **Gentle Motion**: Animations should feel organic and calming, never jarring
- **Progressive Disclosure**: Reveal information gradually to avoid overwhelming visitors

### Design Language Evolution (v1 -> v2)
- Evolve glass morphism from heavy blur to subtler, more refined translucency
- Shift from purely decorative gradients to purposeful, meaning-carrying color transitions
- Move floating orbs from random decoration to intentional spatial anchors
- Refine 3D card effects for subtlety -- reduce maximum rotation angles
- Add a cohesive motion choreography system (stagger groups, not individual elements)

---

## 2. Color System

### 2.1 Primary Palette (Evolved)

The core blue/orange/purple triad is retained but refined with deeper, more
sophisticated tones and better-defined functional roles.

```css
:root {
  /* ── Blue: Trust & Reliability ── */
  --blue-50:  #EEF4FF;   /* Tinted backgrounds, hover fills */
  --blue-100: #DBE8FE;   /* Badge backgrounds, light accents */
  --blue-200: #BFDBFE;   /* Border highlights */
  --blue-300: #93C5FD;   /* Decorative elements */
  --blue-400: #60A5FA;   /* Icons, secondary actions */
  --blue-500: #3B82F6;   /* Primary buttons, links (MAIN) */
  --blue-600: #2563EB;   /* Hover state for primary */
  --blue-700: #1D4ED8;   /* Active/pressed state */
  --blue-800: #1E3A8A;   /* Dark mode accents */

  /* ── Orange: Warmth & Call-to-Action ── */
  --orange-50:  #FFF8F1;  /* Warm background tint */
  --orange-100: #FFEDD5;  /* Light card backgrounds */
  --orange-200: #FED7AA;  /* Decorative borders */
  --orange-300: #FDBA74;  /* Warm accents */
  --orange-400: #FB923C;  /* Secondary icons */
  --orange-500: #F97316;  /* CTA buttons (MAIN) */
  --orange-600: #EA580C;  /* CTA hover */
  --orange-700: #C2410C;  /* CTA active/pressed */

  /* ── Purple: Creativity & Possibility ── */
  --purple-50:  #FAF5FF;  /* Subtle section backgrounds */
  --purple-100: #F3E8FF;  /* Badge tints */
  --purple-200: #E9D5FF;  /* Decorative fills */
  --purple-300: #D8B4FE;  /* Gradient midpoints */
  --purple-400: #A78BFA;  /* Accent icons */
  --purple-500: #8B5CF6;  /* Gradient text, special highlights */
  --purple-600: #7C3AED;  /* Hover on purple elements */

  /* ── Neutrals (Warm-tinted Slate) ── */
  --gray-25:  #FAFAF8;   /* Page background (warm off-white) */
  --gray-50:  #F8F7F4;   /* Alternate section background */
  --gray-100: #F1F0ED;   /* Card hover backgrounds */
  --gray-200: #E4E3DF;   /* Borders, dividers */
  --gray-300: #C8C7C3;   /* Disabled elements */
  --gray-400: #9C9B97;   /* Placeholder text */
  --gray-500: #6E6D69;   /* Secondary body text */
  --gray-600: #52514D;   /* Body text */
  --gray-700: #3B3A37;   /* Strong body text */
  --gray-800: #252422;   /* Headings */
  --gray-900: #141311;   /* Footer background, highest contrast */

  /* ── Semantic Colors ── */
  --success:  #22C55E;
  --success-light: #DCFCE7;
  --warning:  #EAB308;
  --warning-light: #FEF9C3;
  --error:    #EF4444;
  --error-light: #FEE2E2;
  --info:     #3B82F6;  /* Aliases blue-500 */
  --info-light: #EEF4FF;

  /* ── Surface & Overlay ── */
  --surface-primary:   #FFFFFF;
  --surface-secondary: var(--gray-50);
  --surface-elevated:  #FFFFFF;
  --overlay-light:     rgba(255, 255, 255, 0.75);
  --overlay-dark:      rgba(20, 19, 17, 0.85);
  --overlay-blur:      rgba(255, 255, 255, 0.60);
}
```

### 2.2 Gradient Definitions

```css
:root {
  /* Primary gradients */
  --gradient-hero:       linear-gradient(135deg, var(--blue-500) 0%, var(--purple-500) 50%, var(--orange-500) 100%);
  --gradient-cta:        linear-gradient(135deg, var(--orange-500) 0%, #F59E0B 100%);
  --gradient-primary:    linear-gradient(135deg, var(--blue-500) 0%, var(--blue-600) 100%);
  --gradient-warm:       linear-gradient(135deg, var(--orange-50) 0%, #FEF3C7 50%, var(--purple-50) 100%);
  --gradient-cool:       linear-gradient(135deg, var(--blue-50) 0%, var(--purple-50) 100%);
  --gradient-dark:       linear-gradient(135deg, var(--gray-900) 0%, #1E293B 50%, var(--gray-900) 100%);

  /* Animated gradient for text */
  --gradient-text-animated: linear-gradient(
    135deg,
    var(--blue-500) 0%,
    var(--purple-500) 25%,
    var(--orange-500) 50%,
    var(--purple-500) 75%,
    var(--blue-500) 100%
  );

  /* Orb gradients */
  --gradient-orb-blue:   radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, rgba(191, 219, 254, 0.2) 50%, transparent 70%);
  --gradient-orb-warm:   radial-gradient(circle, rgba(253, 230, 138, 0.5) 0%, rgba(251, 191, 36, 0.2) 50%, transparent 70%);
  --gradient-orb-purple: radial-gradient(circle, rgba(196, 181, 253, 0.4) 0%, rgba(167, 139, 250, 0.15) 50%, transparent 70%);
}
```

### 2.3 Color Usage Rules

| Context                  | Color Token            | Notes                              |
|--------------------------|------------------------|------------------------------------|
| Primary buttons          | `--blue-500`           | Gradient to `--blue-600`           |
| CTA buttons              | `--orange-500`         | Gradient to `#F59E0B` (amber)      |
| Body text                | `--gray-700`           | Warm-tinted dark                   |
| Headings                 | `--gray-800`           | Near-black with warmth             |
| Secondary text           | `--gray-500`           |                                    |
| Page background          | `--gray-25` (#FAFAF8)  | Warm off-white                     |
| Card backgrounds         | `--surface-primary`    | Pure white for contrast            |
| Section alt backgrounds  | `--gray-50`            | Subtle differentiation             |
| Links                    | `--blue-500`           | Hover: `--blue-600`                |
| Destructive actions      | `--error`              | Sparingly used                     |
| Success indicators       | `--success`            | Trust badges, checkmarks           |

---

## 3. Typography

### 3.1 Font Stack

```css
:root {
  --font-primary: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;  /* For code demos if needed */
}
```

Load weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold), 900 (Black).

### 3.2 Type Scale

Using a modular scale with ratio 1.25 (Major Third), base 1rem = 16px.

| Token           | Desktop          | Mobile           | Weight | Line Height | Letter Spacing | Usage                    |
|-----------------|------------------|------------------|--------|-------------|----------------|--------------------------|
| `--text-hero`   | 3.75rem (60px)   | 2.5rem (40px)    | 900    | 1.1         | -0.02em        | Hero headline only       |
| `--text-h1`     | 3rem (48px)      | 2.25rem (36px)   | 900    | 1.15        | -0.02em        | Section headings         |
| `--text-h2`     | 2.25rem (36px)   | 1.75rem (28px)   | 700    | 1.2         | -0.015em       | Subsection headings      |
| `--text-h3`     | 1.5rem (24px)    | 1.25rem (20px)   | 700    | 1.3         | -0.01em        | Card titles, subheads    |
| `--text-h4`     | 1.25rem (20px)   | 1.125rem (18px)  | 700    | 1.4         | 0              | Small headings           |
| `--text-lg`     | 1.125rem (18px)  | 1rem (16px)      | 400    | 1.7         | 0              | Lead paragraphs          |
| `--text-base`   | 1rem (16px)      | 0.9375rem (15px) | 400    | 1.7         | 0              | Body text                |
| `--text-sm`     | 0.875rem (14px)  | 0.8125rem (13px) | 500    | 1.5         | 0.01em         | Labels, nav, captions    |
| `--text-xs`     | 0.75rem (12px)   | 0.75rem (12px)   | 500    | 1.5         | 0.05em         | Badges, micro-labels     |
| `--text-xxs`    | 0.625rem (10px)  | 0.625rem (10px)  | 500    | 1.4         | 0.1em          | Subtitles (e.g. "Gifted Space" under logo) |

### 3.3 Typography CSS Variables

```css
:root {
  --text-hero:  clamp(2.5rem, 5vw + 1rem, 3.75rem);
  --text-h1:    clamp(2.25rem, 4vw + 0.5rem, 3rem);
  --text-h2:    clamp(1.75rem, 3vw + 0.5rem, 2.25rem);
  --text-h3:    clamp(1.25rem, 2vw + 0.25rem, 1.5rem);
  --text-h4:    clamp(1.125rem, 1.5vw + 0.25rem, 1.25rem);
  --text-lg:    clamp(1rem, 1vw + 0.25rem, 1.125rem);
  --text-base:  clamp(0.9375rem, 0.5vw + 0.5rem, 1rem);
  --text-sm:    0.875rem;
  --text-xs:    0.75rem;

  --leading-tight:   1.1;
  --leading-snug:    1.3;
  --leading-normal:  1.5;
  --leading-relaxed: 1.7;
  --leading-loose:   2.0;
}
```

### 3.4 Gradient Text Effect

```css
.gradient-text {
  background: var(--gradient-text-animated);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient-flow 6s ease infinite;
}

@keyframes gradient-flow {
  0%, 100% { background-position: 0% 50%; }
  50%      { background-position: 100% 50%; }
}
```

---

## 4. Spacing System

### 4.1 Base Unit: 4px (0.25rem)

| Token       | Value            | Pixels | Usage Examples                        |
|-------------|------------------|--------|---------------------------------------|
| `--space-0` | 0                | 0      | Reset                                 |
| `--space-1` | 0.25rem          | 4px    | Tight icon gaps                       |
| `--space-2` | 0.5rem           | 8px    | Inline element gaps                   |
| `--space-3` | 0.75rem          | 12px   | Small padding                         |
| `--space-4` | 1rem             | 16px   | Default padding, paragraph spacing    |
| `--space-5` | 1.25rem          | 20px   | Card internal padding (mobile)        |
| `--space-6` | 1.5rem           | 24px   | Component gaps                        |
| `--space-8` | 2rem             | 32px   | Section internal padding              |
| `--space-10`| 2.5rem           | 40px   | Card padding (desktop)                |
| `--space-12`| 3rem             | 48px   | Section heading to content            |
| `--space-16`| 4rem             | 64px   | Section padding (mobile)              |
| `--space-20`| 5rem             | 80px   | Section padding (tablet)              |
| `--space-24`| 6rem             | 96px   | Section padding (desktop)             |
| `--space-32`| 8rem             | 128px  | Hero section padding-top (desktop)    |

### 4.2 Section Spacing Pattern

```css
.section {
  padding-top:    clamp(4rem, 8vw, 8rem);
  padding-bottom: clamp(4rem, 8vw, 8rem);
}

.section-compact {
  padding-top:    clamp(3rem, 5vw, 5rem);
  padding-bottom: clamp(3rem, 5vw, 5rem);
}
```

### 4.3 Component Internal Spacing

| Component         | Padding (Mobile)  | Padding (Desktop) | Gap between items |
|-------------------|-------------------|--------------------|--------------------|
| Card (standard)   | 1.5rem            | 2rem - 2.5rem      | --                 |
| Card (featured)   | 2rem              | 3rem - 4rem        | --                 |
| Nav               | 0.5rem 1.5rem     | 0.5rem 1.5rem      | 0.25rem            |
| Button (standard) | 0.75rem 2rem      | 0.75rem 2rem       | --                 |
| Button (large)    | 1rem 2.5rem       | 1.25rem 3rem       | --                 |
| FAQ item          | 1.5rem            | 2rem               | 1rem               |
| Footer            | 3rem 1.5rem       | 3rem 1.5rem        | 2rem               |

---

## 5. Border Radius System

| Token            | Value    | Usage                                        |
|------------------|----------|----------------------------------------------|
| `--radius-sm`    | 0.5rem   | Small badges, tags, inline elements          |
| `--radius-md`    | 0.75rem  | Buttons (secondary), inputs                  |
| `--radius-lg`    | 1rem     | Small cards, FAQ items, icon containers      |
| `--radius-xl`    | 1.25rem  | Nav logo icon, schedule cards                |
| `--radius-2xl`   | 1.5rem   | Standard cards, modals                       |
| `--radius-3xl`   | 2rem     | Featured cards, image containers             |
| `--radius-4xl`   | 2.5rem   | Hero feature cards, CTA sections             |
| `--radius-full`  | 9999px   | Pill buttons, nav links, badges, avatars     |

```css
:root {
  --radius-sm:   0.5rem;
  --radius-md:   0.75rem;
  --radius-lg:   1rem;
  --radius-xl:   1.25rem;
  --radius-2xl:  1.5rem;
  --radius-3xl:  2rem;
  --radius-4xl:  2.5rem;
  --radius-full: 9999px;
}
```

---

## 6. Shadow System

### 6.1 Elevation Layers

Using layered shadows for natural depth perception.

```css
:root {
  /* Subtle: Cards at rest, nav items */
  --shadow-xs: 0 1px 2px rgba(20, 19, 17, 0.04);

  /* Light: Badges, tags */
  --shadow-sm:
    0 1px 3px rgba(20, 19, 17, 0.06),
    0 1px 2px rgba(20, 19, 17, 0.04);

  /* Standard: Cards, dropdowns */
  --shadow-md:
    0 4px 6px -1px rgba(20, 19, 17, 0.07),
    0 2px 4px -2px rgba(20, 19, 17, 0.05);

  /* Elevated: Hovered cards, floating elements */
  --shadow-lg:
    0 10px 15px -3px rgba(20, 19, 17, 0.08),
    0 4px 6px -4px rgba(20, 19, 17, 0.04);

  /* High: Modals, featured cards */
  --shadow-xl:
    0 20px 25px -5px rgba(20, 19, 17, 0.08),
    0 8px 10px -6px rgba(20, 19, 17, 0.04);

  /* Maximum: Hero image, premium feature card */
  --shadow-2xl:
    0 25px 50px -12px rgba(20, 19, 17, 0.15);

  /* Glass shadow: For glass-morphism elements */
  --shadow-glass:
    0 8px 32px rgba(0, 0, 0, 0.08),
    inset 0 0 0 1px rgba(255, 255, 255, 0.5);

  /* Colored shadows (for buttons) */
  --shadow-blue:    0 10px 30px -5px rgba(59, 130, 246, 0.35);
  --shadow-blue-lg: 0 20px 40px -10px rgba(59, 130, 246, 0.4);
  --shadow-orange:    0 10px 30px -5px rgba(249, 115, 22, 0.35);
  --shadow-orange-lg: 0 20px 40px -10px rgba(249, 115, 22, 0.4);
  --shadow-purple:    0 10px 30px -5px rgba(139, 92, 246, 0.35);

  /* Inner shadow for inset effects */
  --shadow-inner: inset 0 2px 4px rgba(20, 19, 17, 0.05);
}
```

### 6.2 Shadow Usage Rules

| Component State      | Shadow Token       |
|----------------------|--------------------|
| Card (rest)          | `--shadow-md`      |
| Card (hover)         | `--shadow-xl`      |
| Nav (scrolled)       | `--shadow-lg`      |
| Badge                | `--shadow-sm`      |
| Primary button       | `--shadow-blue`    |
| Primary button hover | `--shadow-blue-lg` |
| CTA button           | `--shadow-orange`  |
| CTA button hover     | `--shadow-orange-lg` |
| Hero image           | `--shadow-2xl`     |
| Glass elements       | `--shadow-glass`   |
| Modal / overlay      | `--shadow-2xl`     |
| FAB (mobile)         | `--shadow-xl`      |

---

## 7. Animation System

### 7.1 Timing & Easing

```css
:root {
  /* Durations */
  --duration-instant:  100ms;
  --duration-fast:     150ms;
  --duration-normal:   300ms;
  --duration-slow:     500ms;
  --duration-slower:   800ms;
  --duration-slowest:  1000ms;

  /* Easing curves */
  --ease-default:    cubic-bezier(0.4, 0, 0.2, 1);     /* Standard ease */
  --ease-in:         cubic-bezier(0.4, 0, 1, 1);       /* Accelerate */
  --ease-out:        cubic-bezier(0, 0, 0.2, 1);       /* Decelerate */
  --ease-spring:     cubic-bezier(0.23, 1, 0.32, 1);   /* Smooth spring (MAIN) */
  --ease-bounce:     cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Playful bounce */
  --ease-gentle:     cubic-bezier(0.25, 0.1, 0.25, 1); /* Subtle, organic */

  /* Composite transitions */
  --transition-fast:    var(--duration-fast) var(--ease-default);
  --transition-normal:  var(--duration-normal) var(--ease-default);
  --transition-slow:    var(--duration-slow) var(--ease-spring);
  --transition-spring:  var(--duration-slower) var(--ease-spring);
}
```

### 7.2 Scroll-Triggered Reveal Animations

```css
/* Base reveal state (hidden) */
.reveal {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: opacity var(--duration-slowest) var(--ease-spring),
              transform var(--duration-slowest) var(--ease-spring);
}

.reveal.active {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Directional variants */
.reveal-left  { transform: translateX(-40px); }
.reveal-right { transform: translateX(40px); }
.reveal-scale { transform: scale(0.92); }

.reveal-left.active,
.reveal-right.active,
.reveal-scale.active {
  transform: none;
}

/* Stagger delays for grouped elements */
.stagger-1 { transition-delay: 0.08s; }
.stagger-2 { transition-delay: 0.16s; }
.stagger-3 { transition-delay: 0.24s; }
.stagger-4 { transition-delay: 0.32s; }
.stagger-5 { transition-delay: 0.40s; }
```

**JavaScript (IntersectionObserver):**
```javascript
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  rootMargin: '0px 0px -60px 0px',
  threshold: 0.12
});

document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
  .forEach(el => revealObserver.observe(el));
```

### 7.3 Hover Effects

| Element       | Effect                                              | Duration | Easing        |
|---------------|-----------------------------------------------------|----------|---------------|
| Card          | translateY(-8px), shadow upgrade                    | 500ms    | `--ease-spring` |
| Button        | translateY(-3px), shadow upgrade, shimmer           | 300ms    | `--ease-spring` |
| Nav link      | Background fill + text color change                 | 300ms    | `--ease-default` |
| FAQ item      | translateX(6px), left border accent                 | 400ms    | `--ease-spring` |
| Icon container| scale(1.08) rotate(5deg), bg fill, icon color flip  | 500ms    | `--ease-spring` |
| Image         | scale(1.03), brightness(1.03)                       | 600ms    | `--ease-gentle` |

### 7.4 Micro-Interactions

```css
/* Button press feedback */
.btn:active {
  transform: translateY(-1px) scale(0.98);
  transition-duration: var(--duration-instant);
}

/* Button shimmer sweep on hover */
.btn-shimmer::before {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 100%; height: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%);
  transition: left 0.6s ease;
}
.btn-shimmer:hover::before {
  left: 100%;
}

/* Pulsing live indicator (hero badge) */
@keyframes pulse-dot {
  0%, 100% { opacity: 0.75; transform: scale(1); }
  50%      { opacity: 0; transform: scale(2.5); }
}
.pulse-indicator {
  animation: pulse-dot 2s var(--ease-gentle) infinite;
}

/* Icon bounce on card hover */
.card:hover .card-icon {
  animation: icon-pop 0.5s var(--ease-bounce);
}
@keyframes icon-pop {
  0%, 100% { transform: scale(1); }
  40%      { transform: scale(1.15); }
}
```

### 7.5 Background Ambient Animations

```css
/* Floating orb motion */
@keyframes orb-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50%      { transform: translateY(-25px) scale(1.02); }
}

/* Orb glow pulse */
@keyframes orb-pulse {
  0%, 100% { opacity: 0.35; filter: blur(80px); }
  50%      { opacity: 0.55; filter: blur(100px); }
}

/* Timings per orb (staggered for organic feel) */
.orb-1 { animation: orb-float 10s ease-in-out infinite, orb-pulse 6s ease-in-out infinite; }
.orb-2 { animation: orb-float 12s ease-in-out infinite 2s, orb-pulse 8s ease-in-out infinite 1s; }
.orb-3 { animation: orb-float 14s ease-in-out infinite 4s, orb-pulse 10s ease-in-out infinite 2s; }
```

### 7.6 Loading & Transition States

```css
/* Skeleton loading shimmer */
.skeleton {
  background: linear-gradient(90deg,
    var(--gray-100) 25%,
    var(--gray-200) 50%,
    var(--gray-100) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease infinite;
  border-radius: var(--radius-md);
}
@keyframes skeleton-shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

/* Page transition fade */
.page-enter {
  opacity: 0;
  transform: translateY(10px);
}
.page-enter-active {
  opacity: 1;
  transform: translateY(0);
  transition: all 0.4s var(--ease-spring);
}
```

---

## 8. Component Library

### 8.1 Navigation Bar

**Behavior:**
- Fixed at top, transparent initially
- On scroll (>100px): glass morphism background + shadow
- Optional: hide on scroll-down, show on scroll-up (currently disabled)

```css
.navbar {
  position: fixed;
  width: 100%;
  z-index: 50;
  padding: 1rem 0;
  transition: all var(--duration-slow) var(--ease-default);
}

.navbar.scrolled {
  background: var(--overlay-blur);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: var(--shadow-lg);
  padding: 0.5rem 0;
}
```

**Logo:**
- 48x48px icon container with gradient background (blue -> purple -> orange)
- Border radius: `--radius-2xl` (1.5rem)
- Text: Primary name in `--text-lg` weight 700, subtitle in `--text-xxs` tracking `0.2em`

**Nav Links (Desktop):**
- Font: `--text-sm`, weight 500
- Padding: 0.5rem 1rem
- Border radius: `--radius-full`
- Hover: background `--blue-50`, color `--blue-600`
- Transition: `--transition-normal`

**CTA Button (in Nav):**
- Gradient: `--gradient-cta`
- Padding: 0.625rem 1.5rem
- Border radius: `--radius-full`
- Shadow: `--shadow-orange`

**Mobile Menu:**
- Full-screen overlay, white/95% opacity + backdrop-blur-xl
- Staggered item entrance animation (80ms base + 60ms per item)
- Links: `--text-h3` weight 700
- Close with Escape key

```html
<!-- HTML Structure -->
<nav id="navbar" class="navbar">
  <div class="container flex justify-between items-center">
    <a href="#" class="logo">
      <div class="logo-icon"><!-- Lucide sun icon --></div>
      <div class="logo-text">
        <span class="logo-name">ギフテッドスペース</span>
        <span class="logo-subtitle">Gifted Space</span>
      </div>
    </a>
    <div class="nav-links hidden md:flex"><!-- links --></div>
    <button class="nav-toggle md:hidden"><!-- menu icon --></button>
  </div>
</nav>
```

---

### 8.2 Hero Section

**Layout:**
- 2-column grid on lg+ (content left, image right)
- Full-width stacked on mobile
- Min-height: 100vh (100svh preferred for mobile)
- Padding-top: 8rem (desktop), 7rem (mobile) -- accounts for nav

**Content Side:**
1. **Badge** (pill shape): glass background, blue text, pulsing dot indicator
2. **Headline**: `--text-hero`, weight 900, with gradient-text on key phrase
3. **Subheadline**: `--text-lg`, weight 300, color `--gray-500`
4. **CTA group**: Primary button + secondary outline button
5. **Trust indicators**: Icon + label pairs, opacity 0.7

**Image Side:**
- Rounded container: `--radius-3xl` with 8px white border
- Glow blur behind: gradient blob, opacity 0.4, blur 3rem, pulse animation
- Floating info card overlaid at bottom: glass morphism
- 3D tilt on hover (desktop only): max 8deg rotation

**Scroll Indicator:**
- Centered at bottom, visible on md+ only
- Gentle bounce animation (2s infinite)

```css
.hero {
  position: relative;
  min-height: 100svh;
  padding-top: clamp(7rem, 10vw, 10rem);
  padding-bottom: clamp(3rem, 6vw, 5rem);
  overflow: hidden;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
}
```

---

### 8.3 Section Headers

**Pattern:** All section headings follow a consistent structure.

```html
<div class="section-header text-center">
  <div class="section-label">
    <span class="decoration-dot"></span>
    <span class="label-text">PROGRAMS</span>
    <span class="decoration-dot"></span>
  </div>
  <h2 class="section-title">ギフテッドスペースの活動</h2>
  <p class="section-subtitle">最新の技術は、あなたの「表現」を助ける優しい道具です。</p>
</div>
```

```css
.section-header {
  margin-bottom: clamp(3rem, 5vw, 5rem);
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--blue-500);
  font-size: var(--text-sm);
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.decoration-dot {
  width: 6px;
  height: 6px;
  background: var(--gradient-primary);
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  animation: bounce-gentle 2s ease-in-out infinite;
}

.section-title {
  font-size: var(--text-h1);
  font-weight: 900;
  color: var(--gray-800);
  line-height: var(--leading-tight);
}

.section-subtitle {
  font-size: var(--text-lg);
  color: var(--gray-500);
  max-width: 36rem;
  margin: 1rem auto 0;
}
```

---

### 8.4 Cards

#### Activity Card

```css
.activity-card {
  background: var(--surface-primary);
  padding: clamp(1.5rem, 3vw, 2.5rem);
  border-radius: var(--radius-3xl);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-slow) var(--ease-spring);
  position: relative;
  overflow: hidden;
}

.activity-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
  border-color: var(--blue-200);
}

/* Icon container within card */
.activity-card .icon-wrap {
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-xl);
  background: var(--gradient-cool);
  border: 1px solid rgba(59, 130, 246, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  transition: all var(--duration-slow) var(--ease-spring);
}

.activity-card:hover .icon-wrap {
  background: var(--gradient-primary);
  transform: scale(1.08) rotate(5deg);
  box-shadow: var(--shadow-blue);
}

.activity-card:hover .icon-wrap svg {
  color: white;
}
```

#### Info/Empathy Card (Featured)

```css
.empathy-card {
  background: var(--gradient-warm);
  padding: clamp(2rem, 4vw, 3rem);
  border-radius: var(--radius-4xl);
  border: 1px solid rgba(249, 115, 22, 0.15);
  box-shadow: var(--shadow-lg);
  position: relative;
  overflow: hidden;
}

/* Decorative background icon */
.empathy-card .bg-decor {
  position: absolute;
  top: 0; right: 0;
  width: 8rem; height: 8rem;
  opacity: 0.08;
}
```

#### Stat Card

```css
.stat-card {
  text-align: center;
  padding: 2rem;
}

.stat-value {
  font-size: var(--text-h1);
  font-weight: 900;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.stat-label {
  font-size: var(--text-sm);
  color: var(--gray-500);
  margin-top: 0.5rem;
}
```

#### Schedule Card (Dark Glass)

```css
.schedule-card {
  background: var(--overlay-dark);
  backdrop-filter: blur(20px) saturate(180%);
  border-radius: var(--radius-3xl);
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
              inset 0 0 0 1px rgba(255, 255, 255, 0.1);
}

.schedule-card .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.schedule-card .row:last-child {
  border-bottom: none;
}
```

#### Testimonial Card (New Component)

```css
.testimonial-card {
  background: var(--surface-primary);
  padding: 2rem;
  border-radius: var(--radius-3xl);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-md);
  position: relative;
}

.testimonial-card::before {
  content: '\201C'; /* Opening quote */
  position: absolute;
  top: 1rem;
  left: 1.5rem;
  font-size: 4rem;
  font-weight: 900;
  line-height: 1;
  background: var(--gradient-hero);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0.3;
}

.testimonial-text {
  font-size: var(--text-base);
  color: var(--gray-600);
  line-height: var(--leading-relaxed);
  padding-top: 1rem;
  font-style: italic;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--gray-200);
}

.testimonial-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-full);
  background: var(--gradient-cool);
}

.testimonial-name {
  font-size: var(--text-sm);
  font-weight: 700;
  color: var(--gray-800);
}

.testimonial-role {
  font-size: var(--text-xs);
  color: var(--gray-400);
}
```

---

### 8.5 Buttons

#### Primary Button

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--gradient-primary);
  color: white;
  font-size: var(--text-sm);
  font-weight: 700;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-2xl);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-blue);
  transition: all var(--duration-normal) var(--ease-spring);
  position: relative;
  overflow: hidden;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-blue-lg);
}

.btn-primary:active {
  transform: translateY(-1px) scale(0.98);
}

.btn-primary:focus-visible {
  outline: 3px solid var(--blue-300);
  outline-offset: 3px;
}
```

#### CTA / Secondary Orange Button

```css
.btn-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--gradient-cta);
  color: white;
  font-size: var(--text-sm);
  font-weight: 700;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-2xl);
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-orange);
  transition: all var(--duration-normal) var(--ease-spring);
  position: relative;
  overflow: hidden;
}

.btn-cta:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-orange-lg);
}
```

#### Ghost / Outline Button

```css
.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: var(--surface-primary);
  color: var(--gray-700);
  font-size: var(--text-sm);
  font-weight: 700;
  padding: 0.875rem 2rem;
  border-radius: var(--radius-2xl);
  border: 2px solid var(--gray-200);
  cursor: pointer;
  box-shadow: var(--shadow-sm);
  transition: all var(--duration-normal) var(--ease-default);
}

.btn-ghost:hover {
  border-color: var(--blue-300);
  color: var(--blue-600);
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}
```

#### Large Button Variant

```css
.btn-lg {
  padding: 1.125rem 2.5rem;
  font-size: var(--text-base);
  border-radius: var(--radius-2xl);
}
```

#### Dark Section Ghost Button

```css
.btn-ghost-dark {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 1.125rem 2.5rem;
  border-radius: var(--radius-2xl);
  font-weight: 700;
  transition: all var(--duration-normal) var(--ease-default);
}

.btn-ghost-dark:hover {
  background: rgba(255, 255, 255, 0.2);
}
```

---

### 8.6 FAQ Accordion

**Behavior (v2 Enhancement):**
- Clickable header toggles answer visibility
- Chevron icon rotates 180deg on open
- Answer area animates max-height from 0

```css
.faq-item {
  background: var(--gradient-cool);
  padding: clamp(1.5rem, 3vw, 2rem);
  border-radius: var(--radius-2xl);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-xs);
  transition: all var(--duration-normal) var(--ease-spring);
  overflow: hidden;
}

.faq-item:hover {
  transform: translateX(6px);
  box-shadow: -4px 0 0 var(--blue-500), var(--shadow-sm);
}

.faq-question {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  cursor: pointer;
  font-weight: 700;
  color: var(--gray-800);
}

.faq-question .icon {
  width: 2rem;
  height: 2rem;
  border-radius: var(--radius-md);
  background: var(--blue-100);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.faq-answer {
  padding-left: 3rem;  /* Aligns with question text after icon */
  color: var(--gray-600);
  line-height: var(--leading-relaxed);
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--duration-slow) var(--ease-spring),
              margin-top var(--duration-slow) var(--ease-spring);
}

.faq-item.open .faq-answer {
  max-height: 500px;
  margin-top: 1rem;
}

.faq-chevron {
  transition: transform var(--duration-normal) var(--ease-spring);
  margin-left: auto;
}

.faq-item.open .faq-chevron {
  transform: rotate(180deg);
}
```

---

### 8.7 Footer

```css
.footer {
  background: var(--gray-900);
  color: var(--gray-400);
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .footer-inner {
    flex-direction: row;
    justify-content: space-between;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo-icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: var(--radius-xl);
  background: linear-gradient(135deg, var(--blue-500), var(--orange-500));
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-links {
  display: flex;
  gap: 2rem;
  font-size: var(--text-sm);
}

.footer-links a {
  color: var(--gray-400);
  transition: color var(--duration-fast) var(--ease-default);
}

.footer-links a:hover {
  color: white;
}

.footer-copyright {
  font-size: var(--text-xs);
  color: var(--gray-500);
}
```

---

### 8.8 Floating Action Button (Mobile)

```css
.fab {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius-2xl);
  background: var(--gradient-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  box-shadow: var(--shadow-xl), var(--shadow-blue);
  transition: transform var(--duration-fast) var(--ease-spring);
}

.fab:active {
  transform: scale(0.9);
}

/* Hide on desktop */
@media (min-width: 768px) {
  .fab { display: none; }
}
```

---

### 8.9 Trust Badges

```css
.trust-badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1rem, 2vw, 2rem);
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  background: var(--surface-primary);
  padding: 0.75rem 1.5rem;
  border-radius: var(--radius-2xl);
  border: 1px solid var(--gray-200);
  box-shadow: var(--shadow-xs);
  font-size: var(--text-sm);
  font-weight: 500;
  color: var(--gray-600);
  transition: all var(--duration-normal) var(--ease-default);
}

.trust-badge:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--blue-200);
}

.trust-badge .icon {
  color: var(--gray-400);
}
```

---

### 8.10 Timeline / Roadmap Component (New)

```css
.timeline {
  position: relative;
  padding-left: 2rem;
}

/* Vertical line */
.timeline::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--blue-300),
    var(--purple-300),
    var(--orange-300)
  );
  border-radius: 1px;
}

.timeline-item {
  position: relative;
  padding-bottom: 2.5rem;
  padding-left: 2rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

/* Dot on the line */
.timeline-dot {
  position: absolute;
  left: -1.75rem;
  top: 0.25rem;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: 3px solid var(--gray-25);
  box-shadow: 0 0 0 2px var(--blue-300);
}

.timeline-dot.active {
  box-shadow: 0 0 0 2px var(--blue-500), 0 0 12px rgba(59, 130, 246, 0.4);
}

.timeline-date {
  font-size: var(--text-xs);
  font-weight: 700;
  color: var(--blue-500);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 0.25rem;
}

.timeline-title {
  font-size: var(--text-h4);
  font-weight: 700;
  color: var(--gray-800);
  margin-bottom: 0.5rem;
}

.timeline-description {
  font-size: var(--text-base);
  color: var(--gray-500);
  line-height: var(--leading-relaxed);
}
```

```html
<div class="timeline">
  <div class="timeline-item reveal">
    <div class="timeline-dot active"></div>
    <span class="timeline-date">2024年</span>
    <h4 class="timeline-title">ギフテッドスペース設立</h4>
    <p class="timeline-description">市川市にて若者支援の活動を開始。</p>
  </div>
  <div class="timeline-item reveal stagger-1">
    <div class="timeline-dot"></div>
    <span class="timeline-date">2025年 目標</span>
    <h4 class="timeline-title">NPO法人格取得</h4>
    <p class="timeline-description">法人化に向けた準備を進行中。</p>
  </div>
</div>
```

---

## 9. Layout System

### 9.1 Container

```css
.container {
  width: 100%;
  max-width: 80rem;   /* 1280px */
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 3vw, 3rem);
}

.container-narrow {
  max-width: 48rem;   /* 768px -- for text-heavy sections */
}

.container-wide {
  max-width: 90rem;   /* 1440px -- for full-bleed image sections */
}
```

### 9.2 Grid System

```css
/* Auto-fit responsive grid */
.grid-auto {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 20rem), 1fr));
  gap: 2rem;
}

/* Fixed column grids */
.grid-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.grid-3 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-2 { grid-template-columns: repeat(2, 1fr); }
  .grid-3 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

### 9.3 Responsive Breakpoints

| Name   | Min Width | Usage                                                |
|--------|-----------|------------------------------------------------------|
| `sm`   | 640px     | Two-column button groups, horizontal form layouts    |
| `md`   | 768px     | Nav desktop visible, 2-col grids, reduced section pad |
| `lg`   | 1024px    | Hero 2-col, 3-col grids, tilt/parallax effects ON    |
| `xl`   | 1280px    | Container max-width reached, comfortable spacing     |
| `2xl`  | 1536px    | Extra breathing room (mostly cosmetic)               |

```css
/* Mobile-first breakpoint approach */
/* Base styles: mobile (< 640px) */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1536px) { /* 2xl */ }
```

### 9.4 Section Spacing Pattern

```
[Nav - fixed, ~64px height]
[Hero - min-height: 100svh]
[Section - py: clamp(4rem, 8vw, 8rem)]
  [Section Header - mb: clamp(3rem, 5vw, 5rem)]
  [Content Grid]
[Section - py: clamp(4rem, 8vw, 8rem)]
  ...
[CTA Section - py: clamp(4rem, 8vw, 8rem), dark bg]
[Footer - py: 3rem]
```

---

## 10. Background Effects

### 10.1 Floating Orbs

Three orbs in the hero section providing ambient depth. Each has:

- **Orb 1 (Blue)**: 700px diameter, top-right, fastest cycle (10s float)
- **Orb 2 (Warm/Gold)**: 600px diameter, bottom-left, medium cycle (12s float)
- **Orb 3 (Purple)**: 400px diameter, center-left, slowest cycle (14s float)

**Mobile:** Reduce size by ~40%, increase blur, lower opacity to 0.3.

```css
.orb {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  will-change: transform, opacity;
}

@media (max-width: 768px) {
  .orb {
    opacity: 0.25;
    filter: blur(60px);
  }
  .orb-1 { width: 400px; height: 400px; }
  .orb-2 { width: 350px; height: 350px; }
  .orb-3 { width: 250px; height: 250px; }
}
```

### 10.2 Section Background Blobs

For non-hero sections, use subtle gradient blobs:

```css
.section-blob {
  position: absolute;
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  filter: blur(4rem);
  opacity: 0.3;
  pointer-events: none;
}
```

### 10.3 Mouse-Follow Effect (Desktop Only)

Orbs subtly follow mouse position in the hero section with smooth interpolation
(lerp factor 0.05). Disabled below 1024px viewport width.

### 10.4 Parallax

On scroll, orbs translate at different rates (0.05, 0.08, 0.11 multipliers)
creating depth. Hero image translates at 0.1x scroll speed. Disabled on mobile.

---

## 11. Performance Guidelines

### 11.1 Animation Performance

- Use only `transform` and `opacity` for animations (GPU-composited properties)
- Apply `will-change: transform, opacity` only to actively animating elements
- Pause all animations when tab is hidden (`document.visibilitychange`)
- Respect `prefers-reduced-motion: reduce` -- disable all animations, set opacity to 1
- Use `requestAnimationFrame` for scroll-driven effects, never raw scroll listeners
- Throttle/debounce resize handlers (250ms debounce)

### 11.2 Image Optimization

- Serve WebP with JPEG fallback via `<picture>` element
- Hero image: max 1200px wide, quality 80, lazy-load below fold
- Use `loading="lazy"` on all images except hero
- Use `decoding="async"` on all images
- Provide `width` and `height` attributes to prevent CLS

### 11.3 CSS Performance

- Avoid `backdrop-filter` on more than 3-4 elements simultaneously
- Glass morphism: keep blur radius at 20px max (higher values are costly)
- Limit box-shadow layers to 3 maximum per element
- Use CSS containment (`contain: layout style paint`) on card grids

### 11.4 JavaScript Performance

- IntersectionObserver for scroll reveals (never scroll event + getBoundingClientRect)
- Debounce resize handlers
- Use event delegation where possible
- Lazy-initialize effects that depend on viewport width

### 11.5 Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

Use `font-display: swap` (included in Google Fonts URL by default).

### 11.6 Accessibility Checklist

- Color contrast: WCAG AA minimum (4.5:1 for body text, 3:1 for large text)
- Focus indicators: 3px solid `--blue-500` outline with 3px offset
- Skip-to-content link
- `prefers-reduced-motion` support
- Semantic HTML: proper heading hierarchy, landmark roles
- All interactive elements keyboard-accessible
- Images have descriptive alt text in Japanese
- Form labels associated with inputs

---

## 12. Tech Stack Recommendation

### 12.1 Build Tool: Vite

```
vite@5.x
```

**Rationale:** Fast HMR, native ES modules, minimal config, excellent Tailwind integration.

**Project structure:**
```
src/
  index.html
  css/
    style.css          # Tailwind directives + custom design tokens
    components.css     # Component-specific styles
    animations.css     # All keyframes and animation utilities
  js/
    main.js            # Entry point, initializers
    modules/
      navbar.js        # Nav scroll behavior, mobile menu
      reveal.js        # IntersectionObserver scroll reveals
      effects.js       # Parallax, mouse-follow, tilt
      accordion.js     # FAQ accordion logic
      counters.js      # Counter animations
  assets/
    images/            # Optimized images
    icons/             # SVG icons (or use Lucide via CDN/npm)
    fonts/             # Self-hosted fonts (optional)
public/
  favicon.ico
  og-image.jpg
vite.config.js
tailwind.config.js
postcss.config.js
package.json
```

### 12.2 CSS Approach: Tailwind CSS v3 + Custom CSS

```javascript
// tailwind.config.js
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#EEF4FF', 100: '#DBE8FE', 200: '#BFDBFE',
          300: '#93C5FD', 400: '#60A5FA', 500: '#3B82F6',
          600: '#2563EB', 700: '#1D4ED8', 800: '#1E3A8A',
        },
        orange: {
          50: '#FFF8F1', 100: '#FFEDD5', 200: '#FED7AA',
          300: '#FDBA74', 400: '#FB923C', 500: '#F97316',
          600: '#EA580C', 700: '#C2410C',
        },
        purple: {
          50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D5FF',
          300: '#D8B4FE', 400: '#A78BFA', 500: '#8B5CF6',
          600: '#7C3AED',
        },
        // Warm-tinted neutrals
        gray: {
          25: '#FAFAF8', 50: '#F8F7F4', 100: '#F1F0ED',
          200: '#E4E3DF', 300: '#C8C7C3', 400: '#9C9B97',
          500: '#6E6D69', 600: '#52514D', 700: '#3B3A37',
          800: '#252422', 900: '#141311',
        },
      },
      fontFamily: {
        sans: ['Noto Sans JP', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'blue':    '0 10px 30px -5px rgba(59, 130, 246, 0.35)',
        'blue-lg': '0 20px 40px -10px rgba(59, 130, 246, 0.4)',
        'orange':    '0 10px 30px -5px rgba(249, 115, 22, 0.35)',
        'orange-lg': '0 20px 40px -10px rgba(249, 115, 22, 0.4)',
        'glass':     '0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5)',
      },
      animation: {
        'float':       'float 6s ease-in-out infinite',
        'float-slow':  'float-slow 8s ease-in-out infinite',
        'pulse-glow':  'pulse-glow 4s ease-in-out infinite',
        'gradient':    'gradient-flow 6s ease infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
```

**Custom CSS layers:**
```css
/* style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  /* CSS variables, base resets, typography defaults */
}

@layer components {
  /* .glass, .premium-card, .btn-primary, etc. */
}

@layer utilities {
  /* .gradient-text, .reveal, animation utilities */
}
```

### 12.3 JavaScript Patterns

- **ES Modules**: Each feature in its own module, imported in main.js
- **No framework needed**: Vanilla JS with IntersectionObserver, requestAnimationFrame
- **Progressive Enhancement**: Core content works without JS; animations are additive
- **Event Delegation**: Single listener on document for click-based interactions
- **Lazy Initialization**: Effects that need viewport checks init on DOMContentLoaded, re-check on resize

```javascript
// main.js
import { initNavbar } from './modules/navbar.js';
import { initReveals } from './modules/reveal.js';
import { initEffects } from './modules/effects.js';
import { initAccordion } from './modules/accordion.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initReveals();
  initEffects();
  initAccordion();
});
```

### 12.4 Asset Optimization

- **Images**: Use `vite-imagetools` or pre-optimize with `sharp`
- **Icons**: Lucide via npm (`lucide` package) for tree-shaking, or keep CDN for simplicity
- **Fonts**: Google Fonts CDN with preconnect, or self-host via `@fontsource/noto-sans-jp`
- **CSS**: Tailwind purges unused styles automatically in production
- **JS**: Vite handles code-splitting and minification

### 12.5 Deployment

- **Build command**: `vite build`
- **Output**: `dist/` directory with hashed assets
- **Hosting**: Vercel, Netlify, or Cloudflare Pages (all free tier suitable for NPO)
- **Performance target**: Lighthouse score >= 95 across all categories

---

## Appendix: CSS Variable Reference (Complete)

```css
:root {
  /* Colors */
  --blue-50: #EEF4FF;    --blue-100: #DBE8FE;   --blue-200: #BFDBFE;
  --blue-300: #93C5FD;   --blue-400: #60A5FA;   --blue-500: #3B82F6;
  --blue-600: #2563EB;   --blue-700: #1D4ED8;   --blue-800: #1E3A8A;

  --orange-50: #FFF8F1;  --orange-100: #FFEDD5;  --orange-200: #FED7AA;
  --orange-300: #FDBA74; --orange-400: #FB923C;  --orange-500: #F97316;
  --orange-600: #EA580C; --orange-700: #C2410C;

  --purple-50: #FAF5FF;  --purple-100: #F3E8FF;  --purple-200: #E9D5FF;
  --purple-300: #D8B4FE; --purple-400: #A78BFA;  --purple-500: #8B5CF6;
  --purple-600: #7C3AED;

  --gray-25: #FAFAF8;    --gray-50: #F8F7F4;    --gray-100: #F1F0ED;
  --gray-200: #E4E3DF;   --gray-300: #C8C7C3;   --gray-400: #9C9B97;
  --gray-500: #6E6D69;   --gray-600: #52514D;   --gray-700: #3B3A37;
  --gray-800: #252422;   --gray-900: #141311;

  /* Typography */
  --font-primary: 'Noto Sans JP', -apple-system, BlinkMacSystemFont, sans-serif;
  --text-hero: clamp(2.5rem, 5vw + 1rem, 3.75rem);
  --text-h1:   clamp(2.25rem, 4vw + 0.5rem, 3rem);
  --text-h2:   clamp(1.75rem, 3vw + 0.5rem, 2.25rem);
  --text-h3:   clamp(1.25rem, 2vw + 0.25rem, 1.5rem);
  --text-h4:   clamp(1.125rem, 1.5vw + 0.25rem, 1.25rem);
  --text-lg:   clamp(1rem, 1vw + 0.25rem, 1.125rem);
  --text-base: clamp(0.9375rem, 0.5vw + 0.5rem, 1rem);
  --text-sm:   0.875rem;
  --text-xs:   0.75rem;

  /* Spacing */
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-5: 1.25rem;  --space-6: 1.5rem;
  --space-8: 2rem;     --space-10: 2.5rem;  --space-12: 3rem;
  --space-16: 4rem;    --space-20: 5rem;    --space-24: 6rem;
  --space-32: 8rem;

  /* Radii */
  --radius-sm: 0.5rem;   --radius-md: 0.75rem;  --radius-lg: 1rem;
  --radius-xl: 1.25rem;  --radius-2xl: 1.5rem;  --radius-3xl: 2rem;
  --radius-4xl: 2.5rem;  --radius-full: 9999px;

  /* Shadows */
  --shadow-xs:  0 1px 2px rgba(20,19,17,0.04);
  --shadow-sm:  0 1px 3px rgba(20,19,17,0.06), 0 1px 2px rgba(20,19,17,0.04);
  --shadow-md:  0 4px 6px -1px rgba(20,19,17,0.07), 0 2px 4px -2px rgba(20,19,17,0.05);
  --shadow-lg:  0 10px 15px -3px rgba(20,19,17,0.08), 0 4px 6px -4px rgba(20,19,17,0.04);
  --shadow-xl:  0 20px 25px -5px rgba(20,19,17,0.08), 0 8px 10px -6px rgba(20,19,17,0.04);
  --shadow-2xl: 0 25px 50px -12px rgba(20,19,17,0.15);
  --shadow-glass: 0 8px 32px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.5);
  --shadow-blue:    0 10px 30px -5px rgba(59,130,246,0.35);
  --shadow-blue-lg: 0 20px 40px -10px rgba(59,130,246,0.4);
  --shadow-orange:    0 10px 30px -5px rgba(249,115,22,0.35);
  --shadow-orange-lg: 0 20px 40px -10px rgba(249,115,22,0.4);

  /* Timing */
  --duration-instant: 100ms;  --duration-fast: 150ms;
  --duration-normal: 300ms;   --duration-slow: 500ms;
  --duration-slower: 800ms;   --duration-slowest: 1000ms;

  /* Easing */
  --ease-default: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:  cubic-bezier(0.23, 1, 0.32, 1);
  --ease-bounce:  cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-gentle:  cubic-bezier(0.25, 0.1, 0.25, 1);

  /* Surfaces */
  --surface-primary:   #FFFFFF;
  --surface-secondary: var(--gray-50);
  --overlay-light:     rgba(255, 255, 255, 0.75);
  --overlay-dark:      rgba(20, 19, 17, 0.85);
  --overlay-blur:      rgba(255, 255, 255, 0.60);
}
```

---

*Design System v2.0 -- Gifted Space NPO, Ichikawa City*
*Authored for the rebuild project. All values are production-ready.*

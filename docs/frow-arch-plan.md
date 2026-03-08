# Gifted Space LP - Frow Architecture Plan
# ギフテッドスペース LP フロー・アーキテクチャ設計書

Version: 1.0
Date: 2026-03-08
Author: teammate1 (frow-arch specialist)

---

## 0. Architecture Diagnosis of Current Site

### Problems Identified

1. **Emotional arc is truncated.** The current flow jumps from Hero straight to "Problem/Empathy" -- the user is asked to confront pain before any safety has been established. For an anxious audience, this creates friction, not resonance.

2. **Single monolithic HTML file (41KB).** No build tooling, CDN-loaded Tailwind, no code splitting. This harms performance and makes iteration expensive.

3. **CTA architecture is uniform.** Every CTA says roughly the same thing ("相談・お問い合わせ" / "活動に参加してみる") with no progression in commitment level. The anxious user needs a *ladder* of micro-commitments.

4. **Navigation labels are clinical.** "一人で悩まないで" as a nav item is emotionally heavy -- it presupposes the user's state before they've self-identified.

5. **No family (保護者) pathway.** Parents and young people have fundamentally different information needs, trust thresholds, and decision processes. The current site treats them as one audience.

6. **Trust section is minimal.** Two items in a horizontal bar. For a vulnerable audience, trust architecture needs to be woven throughout, not siloed.

7. **No social proof.** No voices, no testimonials, no "day in the life" narrative. The founder story is strong but lonely.

8. **Footer is minimal.** Missing: legal entity info, privacy link destination, accessibility statement, SNS links, Tokushoho (特定商取引法) considerations for paid activities.

---

## 1. Optimal Section Flow (Frow Sequence)

The frow-arch methodology defines an LP as a *narrative river* with controlled emotional current. Each section must answer: "What does the user need to feel RIGHT NOW to keep scrolling?"

### Target Audience Emotional States at Arrival

| Audience | Entry Emotion | Core Need | Decision Blocker |
|----------|--------------|-----------|-----------------|
| Young person (当事者) | Fear, shame, curiosity mixed with exhaustion | "Is this place safe for someone like me?" | "What if I'm judged?" |
| Parent (保護者) | Worry, guilt, desperate hope | "Can I trust these people with my child?" | "Are they qualified? Is it legitimate?" |

### The Frow Sequence (10 Sections)

```
[ARRIVAL ZONE: Establish Safety]
  1. Hero -- 安心の入り口
  2. Atmosphere -- こんな場所です (Visual Safety Proof)

[RECOGNITION ZONE: Mirror the User]
  3. Empathy -- あなたの気持ち、わかります
  4. Founder Story -- 私も同じでした

[VALUE ZONE: Show the Path]
  5. Activities -- 土曜日の過ごし方
  6. Day Flow -- ある土曜日の一日 (Timeline)

[TRUST ZONE: Remove Doubt]
  7. Voices -- 参加者・ご家族の声
  8. Safety & Partners -- 安心のしくみ
  9. FAQ -- よくあるご質問

[ACTION ZONE: Enable the Step]
  10. Final CTA -- まずは、ここから
  Footer
```

### Rationale for Each Position

**1. Hero (安心の入り口)**
- First 3 seconds decide bounce rate. For anxious users, the hero must communicate SAFETY, not ambition.
- The tagline "土曜日、家族以外のだれかと話せる場所。" is excellent -- keep it.
- Remove aggressive CTAs from hero. Replace with a single soft invitation: "どんな場所か見てみる" (scroll prompt, not form/contact).
- Trust badges (専門家連携, 当事者目線, 家族サポート) stay but should be more prominent -- they are doing critical work.

**2. Atmosphere (こんな場所です) -- NEW SECTION**
- Before ANY text-heavy content, show the space visually.
- 3-4 carefully chosen photographs: the room, people working quietly, tea being shared, a laptop screen with colorful output.
- Minimal text overlay. Let images do the safety communication.
- This is the "virtual doorway peek" -- the anxious user needs to SEE before they READ.
- Implementation: horizontal scroll gallery on mobile, grid on desktop.

**3. Empathy (あなたの気持ち、わかります)**
- NOW the user is ready to see their pain reflected, because they've already felt safe.
- Split into two emotional tracks with a subtle tab or toggle:
  - 当事者の方へ (For those experiencing difficulties)
  - 保護者の方へ (For parents/family)
- Each track: 3 short statements of understanding. No solutions yet -- pure empathy.
- Design: soft background, handwritten-style accent, breathing whitespace.

**4. Founder Story (私も同じでした)**
- Move the founder narrative BEFORE activities. The "why" must precede the "what."
- Current content is strong. Restructure into a tighter narrative arc:
  - The isolation (2-3 sentences)
  - The turning point at Funabashi Support Station
  - The insight: "居場所 > アドバイス" (a safe place matters more than advice)
  - The mission
- Add a real photograph of the founder (replace Unsplash stock).

**5. Activities (土曜日の過ごし方)**
- Rename from "活動内容" -- the current label is institutional. "土曜日の過ごし方" is warmer.
- Keep the 3 activity cards but reframe them:
  - Lead with the HUMAN outcome, not the activity name
  - "AIと一緒にものづくり" not "AIバイブコーディング" (jargon barrier)
  - "自分だけのページを作る" not "ホームページ作成"
  - "お茶を飲みながら話す" not "当事者同士の談話"
- Add a 4th implicit card: "何もしなくてもいい" (It's okay to do nothing) -- this is the ultimate safety signal.

**6. Day Flow (ある土曜日の一日) -- NEW SECTION**
- A visual timeline showing what a typical Saturday looks like:
  - 13:30 到着・お茶タイム
  - 14:00 好きな活動をえらぶ
  - 15:00 おやつ休憩
  - 15:30 もう少し続ける or ゆっくり話す
  - 16:30 おつかれさまでした
- Purpose: reduce the unknown. Anxious people need to PREVIEW the experience to reduce arrival anxiety.
- Design: horizontal timeline on desktop, vertical on mobile. Soft illustrations or icons.

**7. Voices (参加者・ご家族の声) -- NEW SECTION**
- Even if the organization is new, include:
  - Anonymized composite testimonials (clearly labeled as illustrative)
  - Or: quotes from the founder about what participants have shared (with permission)
  - Parent perspective: "最初は心配でしたが..."
- When real testimonials become available, this section is ready.
- Design: speech-bubble cards, soft pastel backgrounds, no photographs (privacy).

**8. Safety & Partners (安心のしくみ)**
- Expand the current minimal trust bar into a full section:
  - Professional support structure (専門家連携の体制)
  - Partnership with Ichikawa City (planned)
  - Funabashi Youth Support Station relationship
  - Staff/volunteer screening or training approach
  - Privacy/confidentiality commitment
  - NPO formation status and governance
- Design: clean grid with icon+title+description. Formal but warm.

**9. FAQ (よくあるご質問)**
- Keep current questions. Add:
  - "初めて行くとき、何を持っていけばいいですか？" (practical anxiety reduction)
  - "子どもが嫌がったらどうすればいいですか？" (parent FAQ)
  - "スタッフはどんな人ですか？" (trust)
  - "費用は¥500以外にかかりますか？" (financial clarity)
- Implement as proper accordion (expand/collapse), not static cards.

**10. Final CTA (まずは、ここから)**
- Commitment ladder with 3 clear options, ordered from lowest to highest commitment:
  1. "まずはLINEで気軽に質問" (LINE friend add -- lowest barrier)
  2. "見学を申し込む" (observation visit -- medium barrier)
  3. "活動に参加する" (full participation -- highest barrier)
- Explicitly state: "お名前を言わなくても大丈夫です。" (You don't have to give your name.)
- Include schedule reminder: next Saturday date, time, location.

---

## 2. Information Architecture

### Content Hierarchy (per section)

```
Section
├── Section Label (small, uppercase, decorative)
├── Headline (H2 -- emotional, not descriptive)
├── Subtext (1-2 lines, expand on headline)
├── Core Content (cards, timeline, text block)
├── Micro-CTA or Transition (leads to next section)
└── Background Treatment (subtle, reinforces mood)
```

### Content Connections (Cross-linking)

| From | To | Mechanism |
|------|----|-----------|
| Hero | Atmosphere | Scroll indicator + visual continuity |
| Empathy | Founder Story | "その気持ち、私も知っています" transition |
| Activities | Day Flow | "実際の土曜日はこんな感じ" bridge text |
| Day Flow | Voices | "参加した方の声" |
| FAQ | Final CTA | "まだ不安がありますか？お気軽に" |
| Every section | Final CTA | Sticky mobile FAB |

### Audience Branching

The site should subtly serve two audiences without forcing an explicit choice:

- **Default path:** Written from the young person's perspective (2nd person: あなた)
- **Parent signals:** Sprinkled throughout -- "保護者の方へ" badges on relevant FAQ items, a parent-specific paragraph in Empathy, parent voice in Voices section
- **Navigation:** Add "保護者の方へ" as a nav item that smooth-scrolls to a parent-relevant anchor

---

## 3. Conversion Architecture

### Micro-Commitment Ladder

```
Level 0: Read / Scroll (passive)
  ↓
Level 1: "どんな場所か見てみる" (scroll to Atmosphere)
  ↓
Level 2: View the Day Flow timeline (reduce unknowns)
  ↓
Level 3: Read FAQ (self-service anxiety reduction)
  ↓
Level 4: Add LINE friend (zero-barrier digital contact)
  ↓
Level 5: Send a message via LINE or form (low barrier)
  ↓
Level 6: Book a visit/observation (medium barrier)
  ↓
Level 7: Attend activity (conversion)
```

### CTA Placement Map

| Section | CTA Type | Label | Style |
|---------|----------|-------|-------|
| Hero | Soft scroll | どんな場所か見てみる | Ghost button with arrow-down |
| Hero | Secondary | 保護者の方はこちら | Text link |
| Atmosphere | None | -- | Let images breathe |
| Empathy | Soft | 私たちの想いを読む | Text link to Founder Story |
| Founder Story | Medium | 活動を見てみる | Outlined button |
| Activities | Medium | ある土曜日の一日を見る | Outlined button |
| Day Flow | Medium-Strong | 見学してみる | Filled button (primary color) |
| Voices | None | -- | Let trust build |
| Safety | Soft | よくある質問を見る | Text link |
| FAQ | Strong | まずはLINEで相談 | Filled button (warm color) |
| Final CTA | Strongest | 3-option ladder | Full CTA block |
| Mobile FAB | Persistent | LINE icon | Floating, bottom-right |

### Friction Reduction Strategies

1. **No registration walls.** Contact via LINE (already installed on most Japanese phones).
2. **Anonymity guarantee.** Explicitly state names are not required.
3. **"見学" (observation) framing.** First visit positioned as watching, not participating.
4. **Schedule visibility.** Always show the next specific Saturday date, not just "毎週土曜."
5. **Cost transparency.** ¥500 with clear "それ以外の費用はかかりません" statement.
6. **Exit freedom.** "途中退室OK" prominent in multiple locations.
7. **Reduced motion option.** Current CSS supports prefers-reduced-motion -- keep this.
8. **Dark mode consideration.** For users who browse at night in their rooms -- consider implementing.

### Micro-Interactions

| Interaction | Purpose | Implementation |
|-------------|---------|----------------|
| Scroll-triggered reveals | Progressive disclosure, rewards scrolling | IntersectionObserver (keep current) |
| FAQ accordion | Reduce visual overwhelm | Click to expand, one-at-a-time |
| Timeline progress | Show day flow progression | Scroll-linked highlight |
| Hover on activity cards | Preview without commitment | Subtle scale + info reveal |
| LINE QR code reveal | Low-barrier contact | Click to show QR, no page navigation |
| "Next Saturday" countdown | Urgency without pressure | Auto-calculated from current date |

---

## 4. Directory Structure

### Proposed Structure (Vite + Vanilla)

```
gifted-space/
├── index.html                    # Entry HTML (minimal shell)
├── package.json
├── vite.config.js
├── postcss.config.js             # For Tailwind CSS (build-time, not CDN)
├── tailwind.config.js            # Extracted from inline script
│
├── public/                       # Static assets (copied as-is)
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── apple-touch-icon.png
│   ├── og-image.jpg              # Open Graph image
│   ├── robots.txt
│   └── sitemap.xml
│
├── src/
│   ├── main.js                   # Entry point: imports CSS, inits all modules
│   ├── styles/
│   │   ├── main.css              # Tailwind directives + imports
│   │   ├── base/
│   │   │   ├── reset.css         # Minimal reset (beyond Tailwind preflight)
│   │   │   ├── typography.css    # Font imports, text utilities
│   │   │   └── variables.css     # CSS custom properties (design tokens)
│   │   ├── components/
│   │   │   ├── buttons.css       # .btn-primary, .btn-ghost, .btn-glow
│   │   │   ├── cards.css         # .premium-card, .glass-card
│   │   │   ├── navigation.css    # Navbar, mobile menu
│   │   │   ├── faq.css           # Accordion styles
│   │   │   ├── timeline.css      # Day flow timeline
│   │   │   └── gallery.css       # Atmosphere photo gallery
│   │   ├── sections/
│   │   │   ├── hero.css
│   │   │   ├── atmosphere.css
│   │   │   ├── empathy.css
│   │   │   ├── founder.css
│   │   │   ├── activities.css
│   │   │   ├── dayflow.css
│   │   │   ├── voices.css
│   │   │   ├── safety.css
│   │   │   ├── faq-section.css
│   │   │   ├── cta.css
│   │   │   └── footer.css
│   │   ├── utilities/
│   │   │   ├── animations.css    # Keyframes, animation classes
│   │   │   ├── decorative.css    # Orbs, dots, gradients
│   │   │   └── responsive.css    # Breakpoint-specific overrides
│   │   └── print.css             # Print stylesheet
│   │
│   ├── js/
│   │   ├── modules/
│   │   │   ├── navigation.js     # Navbar scroll, mobile menu
│   │   │   ├── reveal.js         # IntersectionObserver reveal system
│   │   │   ├── smooth-scroll.js  # Smooth scroll with easing
│   │   │   ├── parallax.js       # Parallax + mouse follow
│   │   │   ├── accordion.js      # FAQ accordion
│   │   │   ├── gallery.js        # Photo gallery (atmosphere section)
│   │   │   ├── timeline.js       # Day flow scroll-linked timeline
│   │   │   ├── countdown.js      # Next Saturday calculator
│   │   │   └── accessibility.js  # Reduced motion, focus management
│   │   └── utils/
│   │       ├── throttle.js
│   │       ├── debounce.js
│   │       └── dates.js          # Japanese date formatting, Saturday calc
│   │
│   └── sections/                 # HTML partials (optional, for maintainability)
│       ├── hero.html
│       ├── atmosphere.html
│       ├── empathy.html
│       ├── founder.html
│       ├── activities.html
│       ├── dayflow.html
│       ├── voices.html
│       ├── safety.html
│       ├── faq.html
│       ├── cta.html
│       └── footer.html
│
├── assets/
│   ├── images/
│   │   ├── hero/                 # Hero section images
│   │   ├── atmosphere/           # Atmosphere gallery photos
│   │   ├── founder/              # Founder photo
│   │   ├── activities/           # Activity illustration/icons
│   │   └── og/                   # Social sharing images
│   ├── icons/
│   │   └── custom/               # Any custom SVG icons
│   └── fonts/                    # Self-hosted fonts (if moving off Google CDN)
│
├── docs/
│   ├── design-guide.md
│   └── frow-arch-plan.md         # This document
│
└── .github/
    └── workflows/
        └── deploy.yml            # CI/CD for static hosting
```

### Key Architecture Decisions

1. **Vite over plain HTML**: Tree-shaking, CSS purging, asset hashing, dev server with HMR. Near-zero config for vanilla projects.

2. **Tailwind as build dependency, not CDN**: The CDN script (`cdn.tailwindcss.com`) is 300KB+ and blocks rendering. Build-time Tailwind produces only the classes actually used (~10-15KB gzipped).

3. **CSS partials by concern**: Section-specific styles in `sections/`, reusable components in `components/`. The `main.css` file imports all via `@import` (resolved by PostCSS).

4. **JS modules**: Each concern is isolated. `main.js` imports and initializes. Vite handles bundling. Dead code is eliminated.

5. **HTML partials (optional)**: For a single-page LP, partials are optional but useful if sections become large. Vite supports `import.meta.glob` for template injection, or use a simple build script.

6. **Self-hosted fonts**: Move Noto Sans JP from Google Fonts CDN to self-hosted with `font-display: swap` for better performance and privacy.

7. **Image optimization**: Vite plugin (`vite-plugin-imagemin`) or manual optimization. Serve WebP with JPEG fallback.

---

## 5. Navigation Design

### Design Principles for This Audience

1. **Minimal labels, maximum clarity.** Anxious users scan, not read. Short labels.
2. **No triggering language in persistent UI.** Nav labels should be neutral/positive, not problem-focused.
3. **Predictable behavior.** No surprises, no unexpected modals, no auto-play.
4. **Escape routes visible.** On mobile, the close button for the menu must be obvious and large.

### Proposed Navigation Structure

#### Desktop (sticky top bar)

```
[Logo: ギフテッドスペース]                    [活動内容] [ある土曜日] [よくある質問] [保護者の方へ]  [LINEで相談 →]
```

| Item | Anchor Target | Rationale |
|------|--------------|-----------|
| 活動内容 | #activities | Core info -- what happens here |
| ある土曜日 | #dayflow | Unique differentiator, reduces anxiety |
| よくある質問 | #faq | Self-service anxiety reduction |
| 保護者の方へ | #empathy-parent | Explicit parent pathway |
| LINEで相談 | LINE deep link | Primary conversion action |

#### Mobile (hamburger → full-screen overlay)

```
[Logo]                              [☰]

Overlay (full screen, white):
  ────────────────────
  ギフテッドスペースとは
  活動内容
  ある土曜日
  よくある質問
  保護者の方へ
  ────────────────────
  [LINEで相談する]  (full-width button)
  ────────────────────
  市川公民館 / 毎週土曜 13:30-16:30
```

#### Mobile FAB (Floating Action Button)

- Position: bottom-right, always visible after scrolling past hero
- Icon: LINE logo (not generic message icon)
- Action: Opens LINE friend add
- Animation: gentle pulse every 10 seconds (not aggressive)
- On scroll up near CTA section: hide FAB (avoid redundancy)

### Navigation Behavior

| State | Behavior |
|-------|----------|
| Top of page | Transparent background, full padding |
| Scrolled > 100px | Glass morphism background, reduced padding, subtle shadow |
| Scrolling down rapidly | (Do NOT hide navbar) -- anxious users need persistent orientation |
| Mobile menu open | Body scroll locked, overlay with staggered item animation |
| Section in viewport | Corresponding nav item gets subtle active indicator (dot, not full highlight) |

### Navigation Anti-Patterns to Avoid

- Do NOT hide the navbar on scroll-down. This audience needs constant orientation.
- Do NOT use hover-triggered dropdowns. They cause anxiety and motor-control issues.
- Do NOT use "お問い合わせ" as the CTA label -- it's formal and implies a process. Use "LINEで相談" -- it's a tool they already know.
- Do NOT put too many items in navigation. 4 items + 1 CTA is the maximum.
- Do NOT use English-only labels. The current mix (English section labels like "Message", "Programs") should be replaced with Japanese throughout.

---

## 6. Implementation Priority

### Phase 1: Foundation (Week 1)
- Set up Vite project structure
- Migrate Tailwind from CDN to build dependency
- Extract CSS into component files
- Extract JS into modules
- Implement new section flow in HTML

### Phase 2: Content (Week 2)
- Write copy for new sections (Atmosphere, Day Flow, Voices)
- Source/create photographs for Atmosphere gallery
- Implement FAQ accordion
- Build Day Flow timeline component
- Create commitment ladder CTA block

### Phase 3: Polish (Week 3)
- LINE integration (friend add link/QR)
- Next Saturday countdown calculator
- Performance optimization (image compression, font subsetting)
- Accessibility audit
- Mobile FAB refinement
- Dark mode (optional/stretch)

---

## 7. Performance Targets

| Metric | Target | Current Estimate |
|--------|--------|-----------------|
| First Contentful Paint | < 1.5s | ~3s (CDN Tailwind blocks) |
| Largest Contentful Paint | < 2.5s | ~4s (hero image unoptimized) |
| Total Bundle Size (JS) | < 20KB gzipped | ~15KB (current, but unoptimized) |
| Total CSS | < 15KB gzipped | ~300KB (CDN Tailwind!) |
| Lighthouse Performance | > 90 | ~60 (estimated) |
| CLS (Cumulative Layout Shift) | < 0.1 | Unknown |

---

## 8. Accessibility Requirements

| Requirement | Implementation |
|-------------|---------------|
| WCAG 2.1 AA compliance | Color contrast, keyboard navigation, screen reader support |
| prefers-reduced-motion | Already implemented -- keep and extend |
| prefers-color-scheme | Implement dark mode with muted, calming palette |
| Focus management | Skip link, visible focus indicators, logical tab order |
| Image alt text | Descriptive, in Japanese, for all content images |
| ARIA landmarks | nav, main, section with aria-label, footer |
| Language | `lang="ja"` on html element (already present) |
| Touch targets | Minimum 44x44px for all interactive elements |

---

## Summary

The core architectural shift is from a **feature-presentation LP** to an **emotional-journey LP**. The current site tells users WHAT Gifted Space does. The rebuilt site must make users FEEL that Gifted Space is safe, and then gently show them the door is open.

The frow sequence (Safety → Recognition → Value → Trust → Action) respects the emotional state of anxious young people and worried parents. Every section earns the right to the next section. No section asks for more trust than has been built.

The directory structure modernizes the build pipeline while keeping the project approachable for a small team. Vite + vanilla JS + build-time Tailwind is the right balance of power and simplicity.

The navigation is minimal, warm, and persistent -- a steady hand on the shoulder, not a salesperson at the door.

# ThermoSave Design System

> Source of truth for visual language, UX tone, and frontend patterns across thermosave.pk.
> Landing page (`components/landing/`) is the reference implementation — match it, don’t invent parallel styles.

When building or changing UI, follow this file. Prefer existing landing components and tokens over new one-offs.

---

## 1. Brand & Product Positioning

**What we sell (messaging):**  
Not heaters. We sell *stopping electricity waste thrown away as heat* for plastic manufacturers.

**Buyer:** Factory owner / GM / maintenance engineer in Pakistan.  
Trust and numbers beat hype. CTA is always a conversation (assessment, call, WhatsApp) — never fake checkout urgency.

**Audience media preference (Pakistan plant buyers):**  
Many decision-makers skim on phone and trust **what they can see on a real machine** more than long English paragraphs. Prefer plant **photos in every story split**, then a Mux + gallery dump — short captions and headlines, not essays. Save dense technical prose for FAQ / assessment follow-up.

**Funnel tone (PAS for industrial B2B):**

1. I didn’t know I had this problem  
2. Oh no — I definitely have this problem (with PKR / units)  
3. These people fixed it for 200+ plants like mine  
4. Let me get a quote / call  

**Copy rules:**

- Confident, factual, slightly understated — engineer to engineer  
- Use plant language: injection molding, barrel heaters, extruders, watt density, downtime  
- Agitate with numbers, not fear language — pull stats into **callout tiles**, not walls of text  
- On industry / process pages: **≤ ~2 short sentences** per story section; image or video does the explaining  
- **Write at ~5th-grade English** (see §1d) — simple words convert; fancy AI prose does not  
- No fake scarcity (“Only 3 spots left!”)  
- Don’t gate basic product info behind forms  
- Phone + WhatsApp must stay visible (especially mobile)

---

## 1b. Conversion Ideology (Hormozi × Brunson)

Use these frameworks whenever writing landing, product, or **industry** pages. Adapt the language to engineer-to-engineer tone — never hypey “guru” voice. Keep the *ideas* from Hormozi/Brunson; say them in **simple English** (§1d).

### Alex Hormozi — value & offer

**Value Equation** (raise left side, shrink right side):

\[
\text{Value} \approx \frac{\text{Dream Outcome} \times \text{Perceived Likelihood of Achievement}}{\text{Time Delay} \times \text{Effort \& Sacrifice}}
\]

| Lever | ThermoSave application |
|-------|------------------------|
| Dream Outcome | Lower kWh / cooler hall / safer touch surfaces / longer heater life — *without* changing output |
| Perceived Likelihood | Named plants, measured PKR/units, photos & Mux plant video, Made in Pakistan, 200+ installs |
| Time Delay | Months payback (not years); typical 7–10 day lead time; assessment → sized jackets |
| Effort & Sacrifice | Removable jackets; no process change; Call / WhatsApp / free assessment — no fake checkout |

**Grand Slam Offer stack** (list concrete deliverables, not vague “solutions”):

1. Core product (e.g. custom jackets sized to barrel + die head)  
2. Bonuses that remove risk (free energy-loss assessment, sizing help, install guidance)  
3. Proof that makes belief easy (plant video, photos, client numbers)  
4. Scarcity/urgency only if *real* (lead time, site visit windows) — **never** fake countdown  

**One-liner for agents:** Lead with the dream outcome in plant language, prove it with numbers and media, then stack the offer so the only remaining friction is “call us.”

### 1c. Research online (agents — industry pages)

When creating or expanding an **industry / process** page (`/industries/[slug]`, `data/industries.ts`):

1. **Research online first** — machine heat loss, typical insulation / jacket savings, surface-temp or kWh claims from OEM and jacket makers.  
2. Prefer engineer-facing sources; do not invent percentages.  
3. Compress into Hormozi/Brunson structure: short headlines, callout stats, plant video/photos — not essay-length research dumps.  
4. Mux **Playback** ID + stills in `public/static/industries/[slug]/`; register nav + footer links.  

Also noted in `AGENTS.md` and `.cursor/rules/thermosave-design.mdc`.

### Russell Brunson — Hook → Story → Offer

Every marketing surface should resolve this sequence:

1. **Hook** — Industry- or machine-specific pain/outcome in the first viewport (headline + one supporting line). Brand stays hero-level (`ThermoSave`), not buried.  
2. **Story / Epiphany Bridge** — Move the buyer through: *I didn’t know → I have this problem → there’s a mechanism → people like me fixed it.* Use PAS sections + mechanism (how jackets keep heat in the melt).  
3. **Offer** — Clear next step: Assessment + Call + WhatsApp. Stack bullets. FAQ kills remaining objections.

**Value ladder (site structure):**

| Rung | URL pattern | Job |
|------|-------------|-----|
| Awareness / industry | `/industries`, `/industries/[slug]` | “This is *my* machine / process” |
| Social proof / clientele | `/clients`, `/clients/[slug]` | “Plants like mine already run this” |
| Proof dump / gallery | `/image-gallery` | Wall of plant Mux + photos (likelihood) |
| Product tools | `/products`, `/products/[slug]` | Choose mica / ceramic / jackets |
| Commitment | `/contact` | Assessment conversation |

Industry pages **hook by process**; clientele pages **prove with named plants**; gallery **dumps plant media**; product pages **sell the tool**; contact **closes**. Cross-link both ways.

### How this maps to our section order

| Brunson / Hormozi | Our section |
|-------------------|-------------|
| Hook | Dark hero: brand + outcome H1 + CTA + dominant plant visual |
| Story — problem | Split: plant photo + short headline/copy (right after hero) |
| Story — agitate | Split: photo + short copy + **stat tiles** (PKR / %) |
| Epiphany / mechanism | Split: install photo + short how-it-works + CTAs |
| Plant proof dump | Mux videos + gallery photos in one uniform tile grid |
| Grand Slam Offer | Offer bullets + CTAs |
| Objection kill | FAQ |
| Close | FinalCTA + StickyContact |

**Do not** invent parallel funnels. Extend PAS with Hormozi value levers and Brunson Hook/Story/Offer — same tone, same CTAs.

**Contact constants** (single source: `components/landing/constants.ts`):

| Channel | Value |
|---------|--------|
| Phone display | `0334 0250893` |
| Phone tel | `+923340250893` |
| WhatsApp | `https://wa.me/923340250893` |
| Email | `thermosavenasir@gmail.com` |
| Founder (`FOUNDER`) | Irfan Nasir · CEO · Gujrat · LinkedIn `irfan-nasir-16aa5bb6` |

---

## 1d. Plain English (anti–AI-slop)

**Why this exists:** Alex Hormozi and Russell Brunson both push the same rule — **simple English sells**. If a fifth-grader can get the point, a busy factory owner will too. Fancy words feel smart to the writer and slow to the buyer.

**Why it matters for ThermoSave (Pakistan):**  
Our buyer is a plant owner / GM / maintenance lead. Many are strong on machines and weak on long English marketing. They skim on a phone between shifts. Complex sentences, “literary” punctuation, and AI-sounding vocabulary make them bounce — not because the offer is wrong, but because the copy feels hard or fake.

**Target:** Headlines and body marketing copy at about a **grade 5 reading level**. Short words. Short sentences. One idea per sentence. Plant terms they already use (extruder, barrel, heater band) are fine — those are *their* words, not jargon for show.

### Hard rules for agents

1. **No em dashes (`—`)** in customer-facing copy. Classic AI tell. Use a period, comma, or rewrite as two short sentences. (Hyphens in compound words like `heat-loss` are fine.)  
2. **No AI-slop vocabulary.** Ban or replace: *delve, leverage, utilize, seamless, robust, cutting-edge, transformative, unlock, elevate, streamline, empower, holistic, paradigm, journey, tapestry, landscape* (of X), *in today’s fast-paced…*, *it’s important to note*, *when it comes to*.  
3. **Prefer small words.** Say *use* not *utilize*, *help* not *facilitate*, *cut waste* not *optimize thermal efficiency*, *keep heat in* not *mitigate radiative losses*.  
4. **Short beats long.** Aim ≤ ~15–20 words per sentence on marketing surfaces. If you need a second thought, start a new sentence.  
5. **Sound like a plant visit, not a blog.** Talk how you’d talk on the shop floor with the owner — clear, direct, numbers first.  
6. **Engineer-to-engineer ≠ academic.** We respect the buyer’s skill. We do **not** write like a white paper abstract.

### Bad → good

| Avoid (AI / hard English) | Prefer (plain / plant) |
|---------------------------|-------------------------|
| “Our jackets mitigate heat loss — unlocking measurable kWh savings.” | “Jackets keep heat in the barrel. You use less power.” |
| “Seamlessly elevate operational efficiency across your extrusion landscape.” | “Extruders run cooler on the outside. Bills go down.” |
| “A comprehensive solution designed to optimize thermal performance.” | “Custom jackets sized to your machine. Less wasted heat.” |
| “In today’s energy-conscious manufacturing environment…” | (Delete. Start with the machine or the number.) |

### Quick self-check before shipping copy

- Would a plant supervisor who learned English at work understand this on first read?  
- Can I say the same thing in fewer, smaller words?  
- Did I use an em dash or a banned “smart” word? Fix it.  
- Is a photo or number doing more work than this paragraph? If yes, cut the paragraph.

Also enforce in `.cursor/rules/thermosave-design.mdc` and `AGENTS.md`.

---

## 2. Visual Direction

**Look:** Industrial heat / steel plant — charcoal planes, copper heat accent, stone light surfaces.  
**Not:** SaaS purple gradients, cream+terracotta lifestyle, broadsheet newspaper, neon glow, pill spam, multi-layer soft shadows, emoji decoration.

**Atmosphere:** Prefer subtle video/photo + dark overlays, radial heat washes, faint technical grid — not flat solid-only backgrounds for hero/final CTA.

**Motion:** 2–3 intentional motions per major marketing surface (fade/slide on enter). Never hide critical copy at `opacity: 0` with no fallback — start partially visible (`opacity ≥ 0.35`) or use CSS that remains readable without JS.

---

## 3. Color Tokens

Use these hex values until CSS variables are fully wired in `css/tailwind.css`. Prefer Tailwind arbitrary values or shared class patterns over inventing new hues.

### Core palette

| Token | Hex | Role |
|-------|-----|------|
| `--ts-ink` | `#0c1014` | Hero / final CTA / dark chrome (nav) |
| `--ts-ink-elevated` | `#12161c` | Dark panels / trust bar cells on dark |
| `--ts-ink-soft` | `#161b22` | Agitate / secondary dark sections |
| `--ts-heat` | `#c45c1a` | Primary CTA, accents, icons, stats |
| `--ts-heat-hover` | `#a84c14` | CTA hover |
| `--ts-heat-glow` | `#f0a060` | Brand wordmark, light-on-dark accent text |
| `--ts-surface` | `#f4f2ee` | Light page sections (problem, proof, FAQ) |
| `--ts-surface-card` | `#faf9f7` | Interactive product/tool tiles on white |
| `--ts-white` | `#ffffff` | White section backgrounds |
| `--ts-border` | stone-200 / stone-300 | Light borders (`border-stone-200`, `border-stone-300`) |
| `--ts-border-dark` | `white/10` | Borders on dark surfaces |
| `--ts-text` | stone-900 | Headings on light |
| `--ts-text-body` | stone-600 / stone-700 | Body on light |
| `--ts-text-on-dark` | stone-100 / white | Text on dark |
| `--ts-text-muted-dark` | stone-300 / stone-400 | Supporting text on dark |
| WhatsApp | `#25D366` | Sticky WhatsApp only |

### shadcn / global primary

Do **not** lean on the default blue `--primary` for ThermoSave marketing CTAs. Marketing buttons use **heat** (`#c45c1a`). Over time, migrate shadcn `--primary` toward heat so product/UI chrome matches; until then, explicit heat classes on landing + global nav CTAs.

### Section background rhythm

Alternate for skimability:

1. Dark ink hero  
2. Light surface problem  
3. Dark soft agitate  
4. White solution  
5. Light surface plant proof dump  
6. White named-plant proof  
7. Light surface products  
8. White FAQ  
9. Dark ink final CTA  

---

## 4. Typography

### Fonts (loaded in `app/layout.tsx`)

| Role | Family | CSS variable |
|------|--------|----------------|
| Display / brand / headings | **Archivo** | `--font-display` |
| Body / UI | **IBM Plex Sans** | `--font-body` (applied via `className`) |

**Never** default to Inter, Roboto, Arial, or system-only stacks for marketing UI.

### Usage

```tsx
// Display
className="font-[family-name:var(--font-display)] font-semibold tracking-tight"

// Eyebrow / section label
className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c45c1a]"

// Body
className="text-base leading-relaxed text-stone-600 md:text-lg"
```

### Scale (marketing)

| Element | Classes (approx.) |
|---------|-------------------|
| Brand in hero | `text-3xl sm:text-4xl md:text-5xl` display + heat-glow |
| H1 | `text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem]` |
| H2 | `text-3xl md:text-4xl` |
| H3 | `text-xl` – `text-2xl` |
| Stat callout | `text-3xl` – `text-4xl` display + heat |
| Small caps label | `text-xs uppercase tracking-[0.14em]` – `tracking-[0.2em]` |

---

## 5. Layout & Spacing

- Content width: `container mx-auto max-w-7xl px-4`
- Section vertical padding: `py-20 md:py-28`
- Sticky header height: `h-16` — heroes must pad top (`pt-24 md:pt-28`) so copy clears the nav
- Prefer **one job per section**: one headline + one short supporting line + content
- Cards: allowed when they are the interaction container (product links, FAQ, proof quotes). Avoid decorative card chrome in heroes. Prefer border + flat fill over heavy shadow.

### Radius

Industrial = restrained. Prefer `rounded-sm` for buttons/tiles; avoid pill (`rounded-full`) except sticky circular contact FAB.

### Borders & shadows

- Light: `border border-stone-200` (or stone-300)
- Dark: `border border-white/10`
- Shadows: minimal; sticky CTAs may use `shadow-lg`. No multi-layer glow stacks.

---

## 6. Components & Patterns

### Primary CTA (heat)

```tsx
<Button
  asChild
  size="lg"
  className="h-12 rounded-sm bg-[#c45c1a] px-6 text-base font-semibold text-white shadow-none hover:bg-[#a84c14]"
>
  <Link href="/contact">Get a Free Energy Loss Assessment</Link>
</Button>
```

### Secondary CTA (on dark)

```tsx
<Button
  asChild
  size="lg"
  variant="outline"
  className="h-12 rounded-sm border-stone-400/70 bg-transparent px-6 text-base text-stone-100 hover:bg-white/10 hover:text-white"
>
  <a href={`tel:${PHONE_TEL}`}>Call Now — {PHONE_DISPLAY}</a>
</Button>
```

### Trust bar

Reuse `components/landing/TrustBar.tsx` with `tone="dark" | "light"`. Stats: 10+ Years · 200+ Clients · 20%+ Avg. Energy Saved · Made in Pakistan.

### Sticky contact

Reuse `components/landing/StickyContact.tsx` on marketing pages (WhatsApp green + heat phone). Keep bottom-right, `z-50`.

### Proof pattern

Pull numbers **out** of quotes into bold stat callouts (`200k+`, `1.3`, etc.), then quote + client name. Logos for Al Khair, Paragon, Gondal live in `/public/static/previousClients/`.

### FAQ

Native `<details>` / `<summary>` with stone dividers — keep light and technical, no gimmicks.

### Product tiles

1-line benefit + “View Details” → product page. Don’t dump full specs on listing/landing.

---

## 7. Navigation (site chrome)

**One global nav only:** `components/ui/navbar-1.tsx`, mounted in `app/layout.tsx`. Never invent a second header, white bar, or page-local nav. `components/NavBar.js` is a thin re-export — do not fork it.

Nav is part of the **industrial dark chrome**, not a white strip floating above the hero.

### Canonical nav IA (keep desktop + mobile + footer aligned)

| Label | Route | Pattern |
|-------|-------|---------|
| Home | `/` | Simple link |
| Products | `/products` + PDP dropdown | Mega-menu (mica / ceramic / jackets + All Products) |
| Industries | `/industries` + slug dropdown | Mega-menu (process pages + All Industries) |
| Clientele | `/clients` | Simple link (case grid; detail at `/clients/[slug]`) |
| Gallery | `/image-gallery` | Simple link |
| Contact | `/contact` | Simple link |
| Get Assessment | `/contact` | Heat primary CTA (desktop); also in mobile sheet |

Phone (`tel:`) and WhatsApp stay visible in the chrome / mobile sheet. Source of truth for numbers: `components/landing/constants.ts`.

When you add a **top-level** marketing section, update all three: desktop `NavigationMenu` items, `mobileLinks`, and `components/Footer.tsx`. When you add an industry/product/client slug, register it in the relevant dropdown (and footer) arrays in `navbar-1.tsx`.

### Chrome states

| State | Treatment |
|-------|-----------|
| Dark-hero route at top of page (see registry below) | Transparent over the hero — hero uses `-mt-16` so ink/photo/video runs under the sticky header (one composition) |
| Scrolled, or light-interior routes (no dark hero) | Solid `bg-[#0c1014]/95` + backdrop blur + `border-white/10` |
| Links | Light stone / white; hover: white / soft wash |
| Primary nav CTA | Heat fill (“Get Assessment”), not default blue |
| Mobile sheet | Dark ink panel, light text, heat CTA |

Logo + wordmark stay readable on dark. Do not reintroduce a solid white header on marketing pages.

### DARK_HERO_ROUTES (must match `hasDarkHero` in `navbar-1.tsx`)

| Route | Hero component | Notes |
|-------|----------------|-------|
| `/` | `components/landing/Hero.tsx` | Compact dark band + plant video |
| `/products` | `CollectionHero` | Compact dark band (same rhythm as industries/clients/gallery) |
| `/products/[slug]` | `ProductHero` | Compact dark hook, then light carousel + product copy split |
| `/industries` | `IndustriesHero` | Compact dark band (canonical short hero) |
| `/industries/[slug]` | `IndustryHero` | Full-bleed plant photo (detail pages) |
| `/clients` | `ClientsHero` | Compact dark band |
| `/clients/[slug]` | `ClientCaseSections` hero | Full-bleed plant/Mux still |
| `/image-gallery` | `GalleryHero` | Compact dark band |
| `/contact` | `ContactHero` | Compact dark band + plant video |

**Collection / marketing index heroes** (home, products, industries, clients, gallery, contact, PDP hook): compact padding band (`pt-24 pb-16 md:pt-28 md:pb-20`), **not** full-viewport `min-h`. Detail industry/client case heroes may still use taller full-bleed media.

### Agent checklist — new marketing page

1. Reuse the global `Navbar` from layout — do not add another header.  
2. If the page opens with a **dark ink hero**: add the path to `hasDarkHero` in `navbar-1.tsx`, give the hero `relative isolate -mt-16 … bg-[#0c1014]` + `pt-24 md:pt-28`, and update this registry.  
3. If the page opens on a **light** surface: leave `hasDarkHero` alone; keep solid dark nav + normal top padding.  
4. If it is a **new top-level** destination: add it to the canonical IA table above, desktop nav, `mobileLinks`, and Footer.  
5. Never ship a white/opaque nav over a dark hero.

---

## 8. Page Templates

### Homepage (canonical funnel)

Order in `app/page.tsx`:

1. Hero + dual CTA + trust bar (compact dark band + plant video)  
2. Problem — **story split**: plant photo + short copy (+ compact pain list)  
3. Agitate — **story split**: plant photo + short copy + **stat tiles**  
4. Solution / mechanism — **story split**: install photo + how-it-works + CTAs, then 3 steps + product tools  
5. Plant proof dump — Mux + plant photos in a uniform tile grid (`LandingMedia` → `/image-gallery`)  
6. Proof (named-plant stats, logos, cities)  
7. Products grid  
8. FAQ  
9. Final CTA  
10. StickyContact  

Same visual rule as industry pages: **do not** stack text-only PAS. Pair every story section with a plant still. Reference: `components/landing/*`

### Interior pages (products, contact, gallery)

- Same fonts, heat CTAs, dark nav chrome  
- Prefer `--ts-surface` / white section rhythm  
- Lead with outcome or clear technical title; keep contact paths obvious  
- Reuse product benefit lines from landing where possible  
- Gallery (`/image-gallery`) is a **proof dump** with soft filters — see Gallery template below  

### Contact (`/contact`)

Commitment rung — assessment conversation. Order via `components/contact/*`:

1. ContactHero — dark ink + plant video/photo plane, brand + assessment H1 + Call / WhatsApp + TrustBar (nav transparent over hero)  
2. ContactBody — plant still strip (4:3 tiles) + how-it-works steps + **who you speak with** (`FOUNDER` in `constants.ts`: Irfan Nasir, CEO, Gujrat + LinkedIn) + direct lines (phone / WhatsApp / email) + assessment form (WhatsApp primary submit, email alternate)  
3. LandingProof  
4. StickyContact  

**Founder vs brand:** Lead with ThermoSave track record (10+ years since ~2016). Name Irfan as the plant contact on Contact + Footer. Do **not** ship a dedicated About / author page unless we later need optional depth. Do **not** use the old AuthorLayout / PortfolioIntroductionSummary stub. Form opens WhatsApp (or mailto) with plant details. No fake checkout. Plain English (§1d): no em dashes in customer-facing copy.

### Products collection (`/products`)

Order in `app/products/page.tsx` via `components/products/*`:

1. Dark ink CollectionHero — compact band (same as industries/clients/gallery) + dual CTA + TrustBar  
2. ProductChooser (which offer / value ladder)  
3. ProductGrid (benefit tiles → PDP)  
4. Proof (shared LandingProof)  
5. CollectionFAQ  
6. FinalCTA + StickyContact  

Conversion copy: `data/productMarketing.ts`. Catalog specs/images: `data/products.ts`.

### Product PDP (`/products/[slug]`)

Order in `layouts/ProductLayout.tsx` — same story rhythm as industry pages:

1. ProductHero — compact dark band (brand + outcome H1 + Assessment / Call / WhatsApp + TrustBar), then light split: carousel + product name / benefit / proof points / CTAs  
2. Problem / Agitate / Mechanism as **split layouts**: product or plant photo + short headline + ≤2 sentences (+ stat tiles on Agitate)  
3. **ProductMedia** — gallery dump in a uniform 4:3 tile grid (band heater cutouts + plant stills for jackets)  
4. Specs (features / details / applications)  
5. Offer stack + proof points + CTAs  
6. LandingProof  
7. Related products (value ladder)  
8. Product FAQ  
9. FinalCTA + StickyContact  

Hero carousel: mica/ceramic use `/static/products/cutouts/` (transparent PNGs). **Insulation jackets keep original plant photos** under `/static/products/00003*.jpeg` — do **not** swap jackets to background-removed cutouts. Do **not** stack three text-only PAS sections.  

### Hero budget (marketing)

First viewport: **brand + one headline + one supporting sentence + CTA group**. Collection/index heroes and PDP hooks use a **compact dark band** (padding only — match `IndustriesHero` / `ClientsHero` / `GalleryHero`). Optional plant video under the band on home/contact. No full-viewport `min-h` on those routes. No stats strips or promo chips overlaid on hero media. Trust bar may sit *under* the CTA group. Detail industry/client pages may keep taller full-bleed plant heroes.

### Industries collection (`/industries`)

Order via `components/industries/*` + `data/industries.ts`:

1. Dark compact IndustriesHero (brand + “by process” H1 + CTA + TrustBar) — canonical short collection hero  
2. Industry grid (benefit tiles → industry page)  
3. LandingProof (optional shared proof)  
4. FinalCTA + StickyContact  

Job: route buyers who think in **machine / process** language (extrusion blow moulding, injection, film, etc.) into a dedicated Hook → Story → Offer page.

### Industry page (`/industries/[slug]`)

**Section order** (story splits first, media dump after):

1. IndustryHero — full-bleed plant photo, brand, outcome H1, Assessment / Call / WhatsApp, TrustBar  
2. Problem / Agitate / Mechanism as **split layouts**: real plant photo (≈ half width) + short headline + ≤2 sentences (+ stat tiles on Agitate)  
3. **IndustryMedia** — Mux plant videos + gallery photos in **one uniform 4:3 tile grid** (video is a grid cell, not a giant portrait player)  
4. Offer stack + CTAs + linked products  
5. LandingProof  
6. Industry FAQ (ok to be text-heavy — optional reading)  
7. FinalCTA + StickyContact  

Do **not** stack three text-only PAS sections — every story split pairs with a plant still. Conversion copy + Mux IDs + story images live in `data/industries.ts`.

### Clientele collection (`/clients`)

Order via `components/clients/*` + `data/clients.ts`:

1. Dark ClientsHero (compact band + brand + “named plants” H1 + CTA + TrustBar)  
2. ClientsGrid (case tiles → `/clients/[slug]`)  
3. LandingProof (shared logos / quotes)  
4. FinalCTA + StickyContact  

Job: raise **perceived likelihood** (Hormozi) with named factories and plant video — not anonymous testimonials.

### Client case study (`/clients/[slug]`)

**Section order:**

1. ClientCaseHero — full-bleed plant/Mux still, brand, **client name**, outcome H1, Assessment / Call / WhatsApp  
2. ClientCaseStory — **plant photo + short copy** split (like industry story sections) + factual callout tiles (location / product type; measured PKR only when we have it). Never text-only.  
3. ClientCaseMedia — Mux plant videos **and** gallery stills in the same **4:3 tile** pattern as industry media (video is a grid cell). Video-only cases should still pull Mux thumbnails into the tile grid.  
4. Offer stack + CTAs  
5. LandingProof  
6. Client FAQ  
7. FinalCTA + StickyContact  

Wire Mux **Playback** IDs in `data/clients.ts`. Prefer plant stills under `/public/static/clients/[slug]/` when available; Mux thumbnail URLs (`image.mux.com`) are fine as interim covers / story images. Plain English (§1d): no em dashes in customer-facing copy.

### Gallery (`/image-gallery`)

Hormozi **perceived likelihood** page — not a product taxonomy. Soft filters only (`All` · `Video` · `Plants` · `Process`); no hard SKU/city folders.

Order via `components/gallery/*` + `data/gallery.ts`:

1. Dark GalleryHero (compact band + brand + “plant proof” H1 + Assessment / Call + TrustBar)  
2. GalleryGrid — soft filter chips + **one uniform 4:3 tile grid** (Mux videos + plant stills; videos are grid cells)  
3. GalleryOffer + CTAs  
4. LandingProof  
5. FinalCTA + StickyContact  

Aggregate from `data/industries.ts` + `data/clients.ts` (+ verified Mux depot extras). Deduplicate by playback ID / image `src`. **Exclude** product cutouts — those stay on PDPs. Caption links to `/clients/[slug]` or `/industries/[slug]` when sourced.

### Visual-first section pattern

```
[ Photo or Mux video — dominant ]
[ Eyebrow + short H2 + 1–2 sentences ]
[ Optional: stat tiles / CTAs ]
```

On mobile: image/video above copy. Never a full-width text block with no adjacent media on industry story sections.

---

## 9. Imagery & Media

| Asset | Path / notes |
|-------|----------------|
| Hero video (homepage) | `/static/videos/00001.mp4` — low opacity under dark overlays |
| Products | `/static/products/` — band heaters use transparent cutouts in `/static/products/cutouts/`; jackets use plant JPEGs (`00003*.jpeg`) with backgrounds intact |
| Industry photos | `/static/industries/[slug]/` |
| Industry plant video | Mux **Playback** IDs (not Asset IDs) in `data/industries.ts` via `@mux/mux-player-react`; source is portrait `239/425`, shown in **4:3 tiles** with `object-fit: contain` (ink letterbox/pillarbox — never crop) |
| Client case studies | `data/clients.ts` + Mux Playback IDs; optional stills in `/static/clients/[slug]/`; Mux thumbnails via `image.mux.com` |
| Client logos | `/static/previousClients/` (AlKhair, ParagonPlastics, GondalPrecast) |
| Logo | `/static/images/logo.png` |

Product photography on light tiles; hero/final CTA stay atmospheric dark. Industry pages lead with **real plant** stills and Mux clips — not stock.

**Industry media rules**

- After hero: story splits (problem → agitate → mechanism), then the plant proof dump  
- Story sections always pair with a dedicated plant still — never text-only PAS  
- In IndustryMedia, Mux clips share the **same 4:3 tile grid** as gallery photos (no oversized portrait video); portrait footage uses contain + ink bars, not cover crop  
- Prefer short captions under images over long body paragraphs  
- Stat tiles > multi-sentence agitate blocks  
- Homepage follows the same photo-first story splits + plant proof dump; keep copy shorter than industry pages, but never drop the images

---

## 10. Accessibility & Quality Bar

- Maintain contrast: white/stone-100 on ink; stone-900 on surface  
- Interactive targets ≥ ~44px on mobile sticky buttons  
- Fix typos in technical copy (credibility signal for engineers)  
- Prefer real measured client numbers over vague claims  
- `tel:` and WhatsApp links must work on mobile  

---

## 11. Implementation Map

| Concern | Location |
|---------|----------|
| Design system (this doc) | `/design.md` |
| Agent enforcement | `.cursor/rules/thermosave-design.mdc` |
| Landing sections | `components/landing/` (incl. `Media.tsx` plant proof dump) |
| Product marketing UI | `components/products/` |
| Industry marketing UI | `components/industries/` |
| Industry copy + Mux IDs | `data/industries.ts` |
| Clientele / case study UI | `components/clients/` |
| Client case copy + Mux IDs | `data/clients.ts` |
| Gallery UI | `components/gallery/` |
| Gallery tile aggregator | `data/gallery.ts` |
| Contact page UI | `components/contact/` |
| Contact/stats constants | `components/landing/constants.ts` |
| Global nav | `components/ui/navbar-1.tsx` |
| Fonts | `app/layout.tsx` |
| Tailwind / theme | `css/tailwind.css` |
| Site metadata copy | `data/siteMetadata.js` |

---

## 12. Do / Don’t Checklist

**Do**

- Lead with outcomes and measured savings  
- Pair every industry story section with a plant still; dump Mux + gallery after mechanism  
- Use Archivo + IBM Plex Sans  
- Use heat `#c45c1a` for primary actions  
- Keep nav dark and integrated with heroes; register every dark-hero route in `hasDarkHero` + §7  
- Keep desktop nav, `mobileLinks`, and Footer IA in sync when adding top-level pages  
- Alternate dark / light section rhythm  
- Offer Call + WhatsApp + assessment form path  
- Write ~5th-grade English; short sentences; plant words they already use  

**Don’t**

- Stack text-only Problem → Agitate → Mechanism (no plant stills) on industry pages
- Oversized portrait Mux player outside the gallery tile grid  
- White opaque navbar over dark hero, or a second/page-local header  
- Shipping a dark-ink hero without adding its path to `hasDarkHero` (gallery/contact-class bug)  
- Purple SaaS gradients or Inter-by-default  
- Fake urgency / squeeze pages for pricing  
- Emotional “bleeding money!!” copy  
- AI-slop English: em dashes (`—`), “leverage / seamless / unlock / elevate,” long fancy sentences  
- Heavy card grids in the hero  
- Hide the phone number  

---

## 13. Evolution

When you ship a new pattern that should become standard:

1. Implement it once in a real page  
2. Document tokens/classes here  
3. Prefer extracting a shared component under `components/landing/` or `components/ui/`  
4. Keep this file and the Cursor rule in sync  

Last aligned with: homepage PAS funnel + products/industry conversion pages + Hormozi×Brunson ideology + plain-English / anti-AI-slop rule (§1d) + hoppers industry + agent online-research rule (2026).

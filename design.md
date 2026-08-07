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

**Funnel tone (PAS for industrial B2B):**

1. I didn’t know I had this problem  
2. Oh no — I definitely have this problem (with PKR / units)  
3. These people fixed it for 200+ plants like mine  
4. Let me get a quote / call  

**Copy rules:**

- Confident, factual, slightly understated — engineer to engineer  
- Use plant language: injection molding, barrel heaters, extruders, watt density, downtime  
- Agitate with numbers, not fear language  
- No fake scarcity (“Only 3 spots left!”)  
- Don’t gate basic product info behind forms  
- Phone + WhatsApp must stay visible (especially mobile)

---

## 1b. Conversion Ideology (Hormozi × Brunson)

Use these frameworks whenever writing landing, product, or **industry** pages. Adapt the language to engineer-to-engineer tone — never hypey “guru” voice.

### Alex Hormozi — value & offer

**Value Equation** (raise left side, shrink right side):

\[
\text{Value} \approx \frac{\text{Dream Outcome} \times \text{Perceived Likelihood of Achievement}}{\text{Time Delay} \times \text{Effort \& Sacrifice}}
\]

| Lever | ThermoSave application |
|-------|------------------------|
| Dream Outcome | Lower kWh / cooler hall / safer touch surfaces / longer heater life — *without* changing output |
| Perceived Likelihood | Named plants, measured PKR/units, photos & Mux plant video, Made in Japan materials, 200+ installs |
| Time Delay | Months payback (not years); typical 7–10 day lead time; assessment → sized jackets |
| Effort & Sacrifice | Removable jackets; no process change; Call / WhatsApp / free assessment — no fake checkout |

**Grand Slam Offer stack** (list concrete deliverables, not vague “solutions”):

1. Core product (e.g. custom jackets sized to barrel + die head)  
2. Bonuses that remove risk (free energy-loss assessment, sizing help, install guidance)  
3. Proof that makes belief easy (plant video, photos, client numbers)  
4. Scarcity/urgency only if *real* (lead time, site visit windows) — **never** fake countdown  

**One-liner for agents:** Lead with the dream outcome in plant language, prove it with numbers and media, then stack the offer so the only remaining friction is “call us.”

### Russell Brunson — Hook → Story → Offer

Every marketing surface should resolve this sequence:

1. **Hook** — Industry- or machine-specific pain/outcome in the first viewport (headline + one supporting line). Brand stays hero-level (`ThermoSave`), not buried.  
2. **Story / Epiphany Bridge** — Move the buyer through: *I didn’t know → I have this problem → there’s a mechanism → people like me fixed it.* Use PAS sections + mechanism (how jackets keep heat in the melt).  
3. **Offer** — Clear next step: Assessment + Call + WhatsApp. Stack bullets. FAQ kills remaining objections.

**Value ladder (site structure):**

| Rung | URL pattern | Job |
|------|-------------|-----|
| Awareness / industry | `/industries`, `/industries/[slug]` | “This is *my* machine / process” |
| Product tools | `/products`, `/products/[slug]` | Choose mica / ceramic / jackets |
| Commitment | `/contact` | Assessment conversation |

Industry pages **hook by process**; product pages **sell the tool**; contact **closes**. Cross-link both ways.

### How this maps to our section order

| Brunson / Hormozi | Our section |
|-------------------|-------------|
| Hook | Dark hero: brand + outcome H1 + CTA + dominant plant visual |
| Story — problem | Light “Problem” |
| Story — agitate | Dark “Agitate” with PKR / kWh |
| Epiphany / mechanism | White “How it works” |
| Proof / likelihood | Photos, Mux videos, LandingProof |
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
5. Light surface proof  
6. White products  
7. Light surface FAQ  
8. Dark ink final CTA  

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

Reuse `components/landing/TrustBar.tsx` with `tone="dark" | "light"`. Stats: 10+ Years · 200+ Clients · 20%+ Avg. Energy Saved · Made in Japan.

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

Nav is part of the **industrial dark chrome**, not a white strip floating above the hero.

| State | Treatment |
|-------|-----------|
| Homepage or industry detail, top of hero | Transparent over the hero plane — hero uses `-mt-16` so ink/photo/video runs under the sticky header (one composition) |
| Scrolled, or other routes | Solid `bg-[#0c1014]/95` + backdrop blur + `border-white/10` |
| Links | Light stone / white; hover: white / soft wash |
| Primary nav CTA | Heat fill (“Get Assessment”), not default blue |
| Mobile sheet | Dark ink panel, light text, heat CTA |

Interior pages that open with a light background still use the solid dark nav (brand chrome). Only the homepage hero pulls content under a transparent bar.

Logo + wordmark stay readable on dark. Do not reintroduce a solid white header on marketing pages.

---

## 8. Page Templates

### Homepage (canonical funnel)

Order in `app/page.tsx`:

1. Hero + dual CTA + trust bar  
2. Problem (3 pains)  
3. Agitate (cost of inaction + numbers)  
4. Solution (3-step process + product tools)  
5. Proof (stats, logos, cities)  
6. Products grid  
7. FAQ  
8. Final CTA  
9. StickyContact  

Reference: `components/landing/*`

### Interior pages (products, contact, gallery)

- Same fonts, heat CTAs, dark nav chrome  
- Prefer `--ts-surface` / white section rhythm  
- Lead with outcome or clear technical title; keep contact paths obvious  
- Reuse product benefit lines from landing where possible  

### Products collection (`/products`)

Order in `app/products/page.tsx` via `components/products/*`:

1. Dark ink CollectionHero + dual CTA + TrustBar  
2. ProductChooser (which offer / value ladder)  
3. ProductGrid (benefit tiles → PDP)  
4. Proof (shared LandingProof)  
5. CollectionFAQ  
6. FinalCTA + StickyContact  

Conversion copy: `data/productMarketing.ts`. Catalog specs/images: `data/products.ts`.

### Product PDP (`/products/[slug]`)

Order in `layouts/ProductLayout.tsx`:

1. ProductHero (carousel + outcome H1 + Assessment / Call / WhatsApp + TrustBar)  
2. Problem → Agitate → Mechanism  
3. Specs (features / details / applications)  
4. Offer stack + CTAs  
5. Product proof points + LandingProof  
6. Related products (value ladder)  
7. Product FAQ  
8. FinalCTA + StickyContact  

### Hero budget (marketing)

First viewport: **brand + one headline + one supporting sentence + CTA group + dominant visual**. No stats strips, schedules, or promo chips overlaid on hero media. Trust bar may sit *under* the CTA group as part of the first composition.

### Industries collection (`/industries`)

Order via `components/industries/*` + `data/industries.ts`:

1. Dark Collection-style hero (brand + “by process” H1 + CTA)  
2. Industry grid (benefit tiles → industry page)  
3. LandingProof (optional shared proof)  
4. FinalCTA + StickyContact  

Job: route buyers who think in **machine / process** language (extrusion blow moulding, injection, film, etc.) into a dedicated Hook → Story → Offer page.

### Industry page (`/industries/[slug]`)

Order (Hormozi value + Brunson Hook/Story/Offer, PAS body):

1. IndustryHero — full-bleed plant photo/video, brand, outcome H1, Assessment / Call / WhatsApp, TrustBar  
2. Problem → Agitate → Mechanism (process-specific copy)  
3. Plant media — Mux videos + application photo grid (real installs)  
4. Offer stack + CTAs + linked products (jackets / heaters)  
5. LandingProof  
6. Industry FAQ  
7. FinalCTA + StickyContact  

Conversion copy + Mux playback IDs live in `data/industries.ts`. Prefer Mux for plant video; keep local MP4 only for generic homepage atmosphere if needed.

---

## 9. Imagery & Media

| Asset | Path / notes |
|-------|----------------|
| Hero video (homepage) | `/static/videos/00001.mp4` — low opacity under dark overlays |
| Products | `/static/products/` |
| Industry photos | `/static/industries/[slug]/` |
| Industry plant video | Mux playback IDs in `data/industries.ts` via `@mux/mux-player-react` |
| Client logos | `/static/previousClients/` (AlKhair, ParagonPlastics, GondalPrecast) |
| Logo | `/static/images/logo.png` |

Product photography on light tiles; hero/final CTA stay atmospheric dark. Industry pages lead with **real plant** stills and Mux clips — not stock.

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
| Landing sections | `components/landing/` |
| Product marketing UI | `components/products/` |
| Industry marketing UI | `components/industries/` |
| Industry copy + Mux IDs | `data/industries.ts` |
| Contact/stats constants | `components/landing/constants.ts` |
| Global nav | `components/ui/navbar-1.tsx` |
| Fonts | `app/layout.tsx` |
| Tailwind / theme | `css/tailwind.css` |
| Site metadata copy | `data/siteMetadata.js` |

---

## 12. Do / Don’t Checklist

**Do**

- Lead with outcomes and measured savings  
- Use Archivo + IBM Plex Sans  
- Use heat `#c45c1a` for primary actions  
- Keep nav dark and integrated with heroes  
- Alternate dark / light section rhythm  
- Offer Call + WhatsApp + assessment form path  

**Don’t**

- White opaque navbar over dark hero  
- Purple SaaS gradients or Inter-by-default  
- Fake urgency / squeeze pages for pricing  
- Emotional “bleeding money!!” copy  
- Heavy card grids in the hero  
- Hide the phone number  

---

## 13. Evolution

When you ship a new pattern that should become standard:

1. Implement it once in a real page  
2. Document tokens/classes here  
3. Prefer extracting a shared component under `components/landing/` or `components/ui/`  
4. Keep this file and the Cursor rule in sync  

Last aligned with: homepage PAS funnel + products/industry conversion pages + Hormozi×Brunson ideology (2026).

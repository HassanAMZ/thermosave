<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ThermoSave agent notes

Also follow **`design.md`** and **`.cursor/rules/thermosave-design.mdc`**.

## Global navbar (required for every marketing page)

**Source of truth:** `design.md` §7 + `components/ui/navbar-1.tsx` (mounted once in `app/layout.tsx`).

- **One nav only** — never invent a second header, white bar, or page-local nav for gallery, contact, or any new route.
- **Canonical links** (desktop + mobile + footer must stay aligned): Home `/` · Products `/products` (+ PDP dropdown) · Industries `/industries` (+ slug dropdown) · Clientele `/clients` · Gallery `/image-gallery` · Contact `/contact` · Get Assessment CTA → `/contact`.
- **Transparent vs solid:** dark-ink heroes use transparent nav at top (hero `-mt-16`); scroll or light interiors (e.g. product PDPs) use solid `bg-[#0c1014]/95`. Route list lives as `hasDarkHero` in `navbar-1.tsx` and must match **DARK_HERO_ROUTES** in `design.md` §7.
- **New dark-hero page:** (1) add path to `hasDarkHero`, (2) hero `relative isolate -mt-16 … bg-[#0c1014]` + top padding, (3) update `design.md` §7 registry. **New top-level section:** also update desktop menu, `mobileLinks`, and `components/Footer.tsx`.

## Research online (required for industry / process work)

When adding or rewriting an **industry / process page**, **do research online** before locking copy or stats:

1. Search how that machine/process loses heat (hopper dryers, extruders, EBM, etc.) and what insulation jackets typically change (surface temp, % heat loss, energy per kg dried).
2. Prefer engineer-facing sources (OEM dryer docs, insulation jacket makers, plastics process guides) over generic marketing blogs.
3. Translate findings into short, plant-language copy and **callout stats** — never paste long research prose into the page.
4. Keep Pakistan buyer preference: **story splits with plant photos after hero, then Mux + gallery dump**; ≤ ~2 sentences per story section (`design.md` §1 / §1b). Videos share the gallery tile grid.
5. Wire Mux **Playback** IDs (not Asset IDs) in `data/industries.ts`; add the route under `app/industries/[slug]/` and nav/footer links.
6. **Plain English** (`design.md` §1d): ~5th-grade reading level; no em dashes; no AI-slop words (_leverage, seamless, unlock…_). Hormozi/Brunson frameworks stay — the _words_ stay simple for Pakistan plant buyers.

If research contradicts an existing number on the site, flag it and align with measured ThermoSave client proof where we have it.

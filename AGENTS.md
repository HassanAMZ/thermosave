<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# ThermoSave agent notes

Also follow **`design.md`** and **`.cursor/rules/thermosave-design.mdc`**.

## Research online (required for industry / process work)

When adding or rewriting an **industry / process page**, **do research online** before locking copy or stats:

1. Search how that machine/process loses heat (hopper dryers, extruders, EBM, etc.) and what insulation jackets typically change (surface temp, % heat loss, energy per kg dried).
2. Prefer engineer-facing sources (OEM dryer docs, insulation jacket makers, plastics process guides) over generic marketing blogs.
3. Translate findings into short, plant-language copy and **callout stats** — never paste long research prose into the page.
4. Keep Pakistan buyer preference: **story splits with plant photos after hero, then Mux + gallery dump**; ≤ ~2 sentences per story section (`design.md` §1 / §1b). Videos share the gallery tile grid.
5. Wire Mux **Playback** IDs (not Asset IDs) in `data/industries.ts`; add the route under `app/industries/[slug]/` and nav/footer links.

If research contradicts an existing number on the site, flag it and align with measured ThermoSave client proof where we have it.

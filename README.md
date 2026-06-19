# Kids & Teens Medical Group — Marketing Website

A pediatric marketing + booking site for Kids & Teens Medical Group (25 LA clinics).
Built from the design handoff in [`design_handoff_kt_website/`](design_handoff_kt_website/).

**Stack:** Next.js 15 (App Router) + React 19 + TypeScript. No backend or database —
the site is fully static and the "booking" flow is an intentional **handoff to healow
Open Access** (eClinicalWorks), so there is nothing to store server-side.

## What's implemented

- **Homepage** ([app/page.tsx](app/page.tsx)) — utility strip, sticky header with two
  mega-menus + mobile drawer, hero with live booking peek card, quick actions, care types,
  searchable locations finder, 20 services, why-us stats, resources, partners, stories,
  testimonial, CTA band, footer.
- **Location detail** ([app/locations/[slug]/page.tsx](app/locations/%5Bslug%5D/page.tsx)) —
  one statically-generated page per clinic (`/locations/tarzana`, etc.) with breadcrumb,
  hero, hours (today highlighted client-side), details, services, providers, map, sticky
  book card, and nearby clinics.
- **Booking modal** ([components/BookingModal.tsx](components/BookingModal.tsx)) — opens from
  every "Book" entry point (hero, nav, care cards, service chips, CTA, location pages).
  It does **not** book; it builds a healow Open Access deep-link carrying the visit context
  and shows a confirm screen with an "Open healow to confirm" external link (HIPAA — the real
  booking is finalized inside healow).
- Production design tokens applied: **Healthcare Blue** `#2563EB`, natural hero, "friendly"
  personality, default roominess. The design-only **Tweaks panel was intentionally dropped.**

> **Roominess note:** the handoff said the reviewer left "Cozy" selected but to confirm with
> stakeholders. This build ships the **Default** spacing (the design's base, 88px sections).
> To switch to Cozy, change `section.block` padding in [app/globals.css](app/globals.css).

## healow / eClinicalWorks integration

All integration URLs live in [lib/config.ts](lib/config.ts) and are read from environment
variables. The baked-in defaults are the **prototype placeholders** — get the real practice
endpoints from Kids & Teens before launch. See [.env.example](.env.example):

```
NEXT_PUBLIC_HEALOW_OPEN_ACCESS   # self-scheduling Open Access URL
NEXT_PUBLIC_PATIENT_PORTAL       # eCW patient portal login
NEXT_PUBLIC_PAY_ONLINE           # online bill pay
NEXT_PUBLIC_FIND_DOCTOR          # provider search
NEXT_PUBLIC_MED_REFILLS / _LAB_RESULTS / _REFERRALS
NEXT_PUBLIC_PRACTICE_CODE        # default KTMGLA
```

---

## Run locally

Requires **Node 18.18+** (Node 22 recommended).

```bash
npm install
cp .env.example .env.local   # optional — defaults work for a demo
npm run dev                  # http://localhost:3000
```

Production build / preview:

```bash
npm run build
npm run start                # serves the optimized build on http://localhost:3000
```

> **Behind a corporate proxy?** If `npm install` or `npm run build` fails with
> `UNABLE_TO_VERIFY_LEAF_SIGNATURE` / `unable to verify the first certificate`, your network
> is intercepting HTTPS with a custom root CA. Trust the OS certificate store for that command:
>
> ```bash
> # macOS / Linux
> NODE_OPTIONS=--use-system-ca npm install
> NODE_OPTIONS=--use-system-ca npm run build
> ```
> ```powershell
> # Windows PowerShell
> $env:NODE_OPTIONS="--use-system-ca"; npm install
> $env:NODE_OPTIONS="--use-system-ca"; npm run build
> ```
> Vercel's build servers are not behind your proxy, so this is a **local-only** workaround.

---

## Deploy to Vercel (free / Hobby plan)

Next.js is Vercel's native framework — zero config.

### Option A — Git (recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. Go to **https://vercel.com → Add New… → Project**, and import the repo.
3. Vercel auto-detects **Next.js**. Leave the defaults:
   - Framework Preset: **Next.js**
   - Build Command: `next build` · Output: `.next` · Install: `npm install`
4. (Optional) **Environment Variables** → add the `NEXT_PUBLIC_*` keys from `.env.example`
   with the real healow URLs. Apply to Production (and Preview if you want).
5. Click **Deploy**. You get a `*.vercel.app` URL in ~1 minute. Every future `git push`
   auto-deploys (production on the main branch, preview deploys on other branches/PRs).

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # first run: links/creates the project, then deploys a preview
vercel --prod   # promote to production
```

Add env vars with `vercel env add NEXT_PUBLIC_HEALOW_OPEN_ACCESS` (repeat per key), or in the
dashboard under **Settings → Environment Variables**.

### Free-plan notes
- This site is fully static (SSG) — it costs essentially nothing and is fast on the Hobby plan.
- Add a custom domain later under **Settings → Domains** (free; you manage DNS).
- Remote images (Unsplash) and the Google Maps embeds are loaded directly by the browser, so
  no image-optimization quota is consumed. Replace Unsplash placeholders with licensed
  Kids & Teens photography before launch.

---

## Project structure

```
app/
  layout.tsx                  # fonts, metadata, <BookingProvider>
  page.tsx                    # homepage
  globals.css                 # all design tokens + component styles (ported from handoff)
  locations/[slug]/page.tsx   # per-clinic detail pages (SSG)
components/                   # SiteHeader, Hero, LocationFinder, BookingModal, Footer, icons…
lib/
  data.ts                     # typed content (care, services, locations, etc.)
  config.ts                   # healow/eCW config + deep-link builder (env-driven)
```
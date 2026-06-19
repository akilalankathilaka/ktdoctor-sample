# Handoff: Kids & Teens Medical Group — Marketing Website

## Overview
A modern marketing/booking website for **Kids & Teens Medical Group**, a pediatric care
network with 25 clinics across Los Angeles. The site lets parents:

- Understand the ways to get care (primary, urgent, telehealth, after-hours, family practice, newborn)
- Browse 20 pediatric services
- Find the nearest of 25 clinics (searchable list + map)
- **Book a same-day appointment** via a modal that hands off to **healow Open Access** (eClinicalWorks)
- Reach patient portal, online bill pay, forms/refills/labs, vaccine schedule, etc.

Two screens are included: **Homepage** (the full marketing page + booking modal) and a
**Location detail page**.

---

## About the Design Files
The files in `designs/` are **design references created in HTML** — high-fidelity prototypes
that show the intended look, layout, copy, and interactions. **They are not production code to
ship as-is.**

Your task is to **recreate these designs in the target codebase's environment**, using its
established patterns, component library, and conventions. If there is no existing codebase yet,
**Next.js (App Router) + React + TypeScript + Tailwind CSS** is the recommended stack for this
kind of content/marketing + light-app site — but use whatever the team already runs.

The prototypes render all repeating content (care cards, services, locations, resources,
stories, booking slots) from **JavaScript data arrays** in a `<script>` at the bottom of
`Homepage.html`. In the real build these should become typed data / CMS content + mapped
components — see **State & Data** below.

---

## Fidelity
**High-fidelity (hifi).** Colors, typography, spacing, radii, shadows, and interactions are final
and intentional. Recreate the UI pixel-accurately using the codebase's libraries. Exact tokens
are listed under **Design Tokens**.

One nuance: the homepage ships with a **Tweaks panel** (bottom-right, `id="twk"`) that lets a
reviewer switch brand accent, hero-image treatment, "personality," and "roominess." **This panel
is a design-exploration tool — do NOT ship it.** Its purpose was to choose the production values.
The chosen production defaults are:

| Tweak | Ship this value |
|---|---|
| Brand accent | **Healthcare Blue** (`#2563EB`) — Option 1, recommended |
| Hero image | **Natural** (no filter) |
| Personality | **Friendly** (rounded cards, multi-color icon accents) |
| Roominess | **Cozy** (the reviewer's last choice — see note) |

> Roominess note: the reviewer left "Cozy" selected. Confirm with stakeholders whether to ship
> Cozy or the original "Default" spacing. The two differ only in section padding / grid gaps
> (values under **Design Tokens → Roominess**). Everything else is unaffected.

The other three accent palettes that were explored (and rejected in favor of Healthcare Blue)
are documented under **Design Tokens → Alternate palettes** in case the team wants them later.

---

## Screens / Views

### 1. Homepage (`designs/Homepage.html`)
Top-to-bottom section order:

1. **Utility strip** (dark, full-width): phone, "text us" link, Patient Portal, Pay Online,
   EN/ES language toggle. Height 42px, background `--ink` `#0c1b2a`, white text.
2. **Sticky header**: logo (rounded "K&T" mark + wordmark + "Medical Group · Los Angeles"),
   nav with two **mega-menus** (Care, Services) and four plain links (Locations, Find a Doctor,
   Resources, About), plus "Find a Doctor" ghost button and "Book Now" primary button. Height
   74px, translucent white with `backdrop-filter: blur(14px)`; gains a bottom border + small
   shadow once the page is scrolled >10px (`.scrolled`). Collapses to a hamburger + slide-in
   drawer below 860px.
3. **Hero**: two-column (`1.02fr / .98fr`, 52px gap). Left = eyebrow pill, H1
   (`clamp(40px,5.2vw,64px)`), lede, two CTAs ("Book a visit" / "Find a clinic"), and a trust row
   (25 LA clinics · 0–21 every age · 18+ yrs · 4.9★ 4,000+ reviews). Right = a 540px-tall rounded
   "visual" card: a full-bleed pediatric photo with a gradient base, a floating "4,000+ 5-star
   reviews" avatar chip (top-right), and a "Next available · Tarzana / Today, 2:40 PM" booking
   card with selectable time slots (bottom).
4. **Quick actions**: 3 cards — Book an Appointment, Find a Doctor, Find a Clinic.
5. **Care** (`#care`): centered head + 3×2 grid of 6 care-type cards (icon tile, "chip" tag,
   title, description, meta list, "Book now" link).
6. **Locations** (`#locations`, tinted bg): two columns. Left = heading, search input, and a
   Google-Maps embed tile. Right = scrollable list of 25 clinics (live-filtered by the search),
   a count, and a "Book a visit" button. Each clinic links to `Location.html?loc=<City>`.
7. **Services** (`#services`): split head + 4-col grid of 20 service "chips" (colored dot + label).
8. **Why us** (blue-tinted bg): copy + checklist on the left, 2×2 stat cards on the right
   (25 clinics / 18+ years / 0–21 / 7 days).
9. **Resources** (`#resources`): centered head + 4-col grid of 8 resource cards.
10. **Partners** strip: centered label + row of partner/affiliation wordmarks.
11. **Stories** (`#about`): split head + 4-col grid of article cards (image, tag, title, date).
12. **Testimonial** (tinted bg): centered 5-star quote + attribution.
13. **CTA band** (blue gradient): heading + "Book Online" / "Call" buttons.
14. **Footer** (dark): brand blurb + socials, four link columns, a contact row (call / text EN /
    text ES), and a legal base row.
15. **Booking modal** (`#bkScrim`), **mobile nav drawer** (`#mnav`) — overlays.

### 2. Location detail (`designs/Location.html`)
Reached from any clinic in the locations list (`?loc=<City>`). Shows breadcrumb, clinic
header/hero, address/hours/contact, map, and a booking entry point. Reuses the same header,
strip, footer, tokens, and button styles as the homepage. Read the file for its full section
list — it is shorter and self-explanatory once the homepage system is understood.

---

## Components (build these as reusable pieces)

| Component | Notes |
|---|---|
| `UtilityStrip` | Dark bar; phone/text/portal/pay links + EN/ES `SegmentedToggle`. |
| `SiteHeader` | Sticky, blur, `.scrolled` state on scroll. Contains `MegaMenu` ×2. |
| `MegaMenu` | Hover/click dropdown. "Care" = 2-col icon list (`.mega-care`, 560px). "Services" = 3-col link groups + footer (`.mega-svc`, 680px). Arrow caret via `::before`. |
| `Button` | Variants: `primary`, `ghost`, `light`, `outline`; size `sm`. Pill radius 100px, `translateY(-2px)` hover. |
| `Eyebrow` | Pill label (`.eyebrow`) and plain variant (`.eyebrow.plain`). |
| `Hero` | Two-col; includes `HeroVisual` (photo + `FloatChip` + `BookingPeekCard`). |
| `QuickActionCard` / `CareCard` / `ServiceChip` / `StatCard` / `ResourceCard` / `StoryCard` / `LocationListItem` | Card primitives; all share the hover lift pattern (`translateY(-4/-5px)` + shadow upgrade). |
| `LocationFinder` | Search input + filtered list + count + map embed. Client-side filter on city/address substring. |
| `BookingModal` | The big one — see **Interactions**. |
| `MobileNavDrawer` | Right slide-in + scrim, <860px. |
| `Footer` | Brand + 4 columns + contact row + legal. |
| `TweaksPanel` | **DO NOT SHIP.** Design tool only. |

Per-card icon-tile color classes: `.c-blue .c-mint .c-amber .c-violet .c-rose` (each = soft bg +
darker fg). These drive the "friendly" multi-color accent system.

---

## Interactions & Behavior

- **Sticky header shadow**: add `.scrolled` when `scrollY > 10`.
- **Mega-menus**: open on `mouseenter` (others close), close on `mouseleave` after ~120ms;
  also toggle on button click. Close on outside click. Hidden entirely below 980px.
- **Mobile drawer**: hamburger opens `#mnav` + `#mscrim`; close on X, scrim click, or any link.
  Locks nothing else; uses `transform: translateX`.
- **Location search**: live `input` filter (case-insensitive substring on city + address),
  updates count, shows an empty state when nothing matches.
- **Hero booking peek card**: clicking a time slot selects it (single-select). In the prototype
  it then opens healow with `{location:'Tarzana', time}`.
- **Booking modal** (`window.ktOpenBook(ctx)`):
  - Opens from every `a[href="#book"]`, hero/CTA book buttons, care "Book now" links (prefill
    `reason`), and service chips (prefill `reason`).
  - Fields: patient type segmented (New / Returning), Reason `<select>` (care types + services),
    Clinic `<select>` (25 locations), Preferred day chips (Today/Tomorrow/This week/Next week),
    Available times grid (8 slots, one preselected = 2:40 PM), child's first name, DOB text.
  - **Submit** does NOT book — it builds a confirmation summary and a **healow Open Access
    deep-link** carrying the context as query params, then shows a confirm state with an "Open
    healow to confirm" external link. This is an intentional *handoff* pattern (HIPAA — the real
    booking is finalized inside healow). Esc / X / scrim-click closes; "Edit details" returns to
    the form.
- **External integration links**: utility-strip + footer "Patient Portal" / "Pay Online" /
  "Find a Doctor", and the matching resource cards, all point at healow/eCW endpoints with
  `target="_blank" rel="noopener"`.
- **Transitions**: cards lift `.18–.22s` on `--ease` = `cubic-bezier(.22,.61,.36,1)`. Buttons
  `.18s`. Modal `.25–.28s`. Respect `prefers-reduced-motion` in the real build.

---

## State & Data

In the prototype, all repeating content lives in JS arrays at the bottom of `Homepage.html`.
Lift these into typed data / CMS collections and render with components:

- **`care[]`** — 6 care types: `[title, colorClass, chipLabel, description, metaLines[], iconKey]`
- **`svcs[]`** — 20 services: `[label, dotColor]`
- **`ws[]`** — 4 why-us stats: `[value, label]`
- **`res[]`** — 8 resource cards: `[title, colorClass, subtitle]`
- **`stories[]`** — 4 article cards: `[tag, title, date, imageURL]`
- **`locs[]`** — 23 clinic rows shown (network states "25"): `[city, streetAddress]`. The booking
  modal and location finder both consume this — make it one shared source.

Runtime UI state needed:
- Header `scrolled` boolean
- Open mega-menu id
- Mobile drawer open boolean
- Location search query (+ derived filtered list & count)
- Booking modal: `{ open, patient, reason, location, day, time, childName, dob, submitted }`

### healow / eCW integration (single source of truth)
The prototype centralizes this in a `KT` config object — replicate it as **environment variables**:

```
healowOpenAccess  = https://healow.com/apps/practice/kids-and-teens-medical-group   // self-scheduling
patientPortal     = https://healow.com/apps/jsp/webview/index.jsp                   // eCW portal login
payOnline         = …                                                               // online bill pay
findDoctor        = …                                                               // provider search
medRefills / labResults / referrals = …
practiceCode      = KTMGLA
phone   = +1 818 361 5437
textEN  = +1 626 298 7121
textES  = +1 818 423 5637
```

> ⚠️ The healow URLs above are **placeholders** the prototype used. Get the **real** Kids & Teens
> healow Open Access practice URL and eCW portal endpoints from the practice before launch.

Deep-link builder (`healowURL(ctx)`): appends `reason`, `location`, `patient_type`, `day`,
`time`, and `practice=KTMGLA` as query params. Confirm with healow which params their Open Access
scheduler actually honors — treat unknown ones as best-effort prefill.

---

## Design Tokens

### Colors (production = Healthcare Blue)
```
--bg        #F8FAFC      page background
--tint      #fafbfd      subtle section background
--ink       #0c1b2a      primary text / dark surfaces
--ink-2     #46586a      secondary text
--ink-3     #6c7d8e      tertiary / muted text
--line      #e6ecf3      borders
--line-2    #eef2f7      hairline borders

--blue        #2563EB    PRIMARY brand
--blue-deep   #1D4ED8    hover / pressed
--blue-soft   #dbeafe    soft fills (icon tiles, focus rings)
--blue-tint   #eff6ff    tinted section backgrounds   (#eff4fc in source — see note)
--glow        rgba(37,99,235,.28)    primary button shadow
--glow-strong rgba(37,99,235,.36)

Accent system (the "friendly" multi-color icon tiles):
--mint  #16A34A / soft #dcfce7      --amber #F59E0B / soft #fef3c7
--violet #7c5ce0 / soft #efebfb     --rose  #DC2626 / soft #fee2e2
```
> Note: the source `:root` has `--blue-tint:#eff4fc`; Option 1's "Light Background" is `#EFF6FF`.
> They're nearly identical — ship `#EFF6FF` per the approved palette.

### Alternate palettes (explored, NOT selected)
Kept for reference only — ship Healthcare Blue.
- **Navy + Sky Blue** — primary `#1E3A8A`, hover `#172e6e`, soft `#dbeafe`, tint `#eef3fb`
- **Blue + Teal** — primary `#14B8A6`, hover `#0f9488`, soft `#ccfbf1`, tint `#f0fdfa`
- **Blue + Purple** — primary `#7C3AED`, hover `#6d28d9`, soft `#ede9fe`, tint `#f5f3ff`

### Typography
- Family: **Hanken Grotesk** (Google Fonts), weights 400/500/600/700/800. Fallback
  `system-ui, sans-serif`.
- Headings: weight 800, `line-height: 1.04`, `letter-spacing: -.035em`.
- H1 hero: `clamp(40px, 5.2vw, 64px)`. Section H2: `clamp(32px, 4vw, 48px)`.
- Body: `line-height: 1.55`. Lede 19px. Section intro 18px. Card body 14.5px. Small/meta 13–13.5px.
- `text-rendering: optimizeLegibility`, `-webkit-font-smoothing: antialiased`.

### Radius
```
--r-sm 10px   --r 16px   --r-lg 22px   --r-xl 30px     (buttons & pills: 100px)
```

### Shadows
```
--sh-sm  0 1px 2px rgba(20,50,90,.05), 0 2px 6px rgba(20,50,90,.05)
--sh     0 8px 24px rgba(20,50,90,.08), 0 2px 6px rgba(20,50,90,.05)
--sh-lg  0 28px 60px rgba(20,50,90,.14), 0 8px 20px rgba(20,50,90,.07)
```

### Layout / spacing
- Container max-width `--maxw: 1240px`, side padding 28px (18px under 560px).
- Section vertical padding: **88px** default · **54px** Cozy · **120px** Spacious.
- Card grid gaps: 18–20px default · 12px Cozy · 26px Spacious.
- Easing `--ease: cubic-bezier(.22,.61,.36,1)`.

### Roominess (if shipping a spacing toggle, otherwise pick one)
- **Cozy** (reviewer's pick): `section.block` 54px, hero pad 40/44px, grid gap 12px, grid margin-top 34px.
- **Default**: `section.block` 88px, hero pad 60/64px, grid gap 18px.
- **Spacious**: `section.block` 120px, hero pad 84/100px, grid gap 26px.

### Breakpoints
`980px` (hero → 1 col, mega hidden, care 2-col, services/resources/stories 2-col),
`860px` (nav → hamburger), `560px` (tighter padding, most grids → 1 col).

---

## Assets
All imagery is sourced from **Unsplash** placeholders (hero pediatric photo, review avatars,
story thumbnails, testimonial avatar) and an embedded **Google Maps** iframe. Replace with
licensed Kids & Teens photography before launch. The logo is a CSS-drawn rounded square with
"K&T" text — replace with the real brand mark/SVG if one exists. All icons are inline SVG
(stroke-based, `stroke-width` 2–2.5) — map them to the codebase's icon set (e.g. Lucide, which
matches this stroke style closely).

---

## Files
- `designs/Homepage.html` — full marketing homepage + booking modal + (strip out) Tweaks panel.
- `designs/Location.html` — clinic detail page; reuses the homepage system.

Both are self-contained HTML (inline `<style>` + `<script>`). Read them directly for exact
markup, copy, and the data arrays. The `KT` config object and the integration-wiring block near
the bottom of `Homepage.html`'s script are the clearest spec for the healow/eCW handoff.

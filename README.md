# Hotel Avantika, Ujjain — React Website

Status: **Structural skeleton / frame only.** This is the file structure,
routing, layout, and reusable components — ready for real content to be
filled in next. No page has final copy, verified facts, prices, or final
images yet. Every placeholder is marked `TODO` in the code.

## Stack
- React + Vite
- React Router (`/`, `/about`, `/rooms`, `/rooms/:slug`, `/dining`,
  `/facilities`, `/explore`, `/gallery`, `/contact`)
- Lucide React (icons)
- Framer Motion (installed, not yet used — reserved for subtle animations only)
- Plain CSS (per-component stylesheets), color system in `src/styles/global.css`

## Run locally
```bash
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
```

## What's built
- Full folder structure per handoff spec (`components/`, `pages/`, `data/`, `styles/`, `seo/`)
- Header (desktop nav + accessible mobile hamburger menu), Footer, Layout shell
- All 8 required pages + room detail route + custom 404 — **no Banquets page/route/link anywhere**
- Reusable components: Button, SectionHeading, PageBanner, Image, RoomCard/RoomGrid,
  GalleryGrid/Lightbox, PlaceCard
- Data-driven pattern for rooms, facilities, attractions, gallery, nav links
  (`src/data/*.js`) — all currently empty/placeholder, ready to be filled
- Lightweight dependency-free `SEO` component (title, meta description, canonical,
  Open Graph, Twitter card) wired into every page
- `public/robots.txt` and `public/sitemap.xml` (placeholder domain)
- Color system, typography (Cormorant Garamond + Inter) matching the
  `final-avantika_hotel.html` reference
- No booking widget on the homepage (per requirements); rooms are display-only
  and all enquiry CTAs route to `/contact`
- Contact form UI works client-side (shows a confirmation message) with no
  fake "email sent" claim, since there's no backend yet

## Research data — now seeded into the project
Cross-checked against Google Maps, Justdial and Wanderlog (Sept 2026),
confirmed as this property ("Railway Hotel Avantika Restaurant and
Dormitory Services"), and written directly into the code:
- **Address**: Near Railway Station Platform No. 1, Malipura, Ujjain, MP 456001
  → Header topbar, Footer, Contact page
- **Phone**: +91 734 258 5735 → Header topbar, Footer, Contact page
- **Domain**: hotelavantika.com set in `SEO.jsx`, `robots.txt`, `sitemap.xml`
  (currently held by another site — owner to arrange/confirm before launch)
- **Location USP**: right beside Ujjain Junction Railway Station, built by
  Western Railway, privately operated → Home hero, About page, Dormitory
  USP section
- **Restaurant**: named "Avantika Restaurant" (from the business's own
  registered name) — cuisine list (thalis, South Indian, pav bhaji) seeded
  into Dining page from guest reviews
- **Facilities**: seeded into `data/facilities.js` and shown on both the
  Facilities page and the homepage preview
- **Attractions**: `data/attractions.js` seeded with factual Ujjain temple
  descriptions; Mahakaleshwar & Harsiddhi note the hotel's walking-distance
  proximity per guest reviews (no exact distance, since none is verified)
- **Room descriptions**: Dormitory / Fresh Rooms / Family Rooms (6–7 guests)
  / Personal Cottages all have real descriptive copy now (see `data/rooms.js`)

## Content pass — pages fleshed out (no longer feel empty)
- **About** now has full copy: Who We Are, History & Background (railway
  heritage), Hospitality Philosophy, a new "Why Guests Choose Us" strengths
  grid, and Connection to Ujjain — all grounded in confirmed research
- **Home**: Welcome intro and Dining preview now have real copy instead of TODO
- **Rooms, Facilities, Explore, Gallery**: each now opens with a real intro
  paragraph instead of jumping straight to the grid
- **Contact**: Reception hours filled in ("Open 24 hours" — backed by guest
  reviews describing owners as available round the clock)
- **Gallery empty state**: shows a visitor-friendly "Photos coming soon"
  message instead of a raw TODO string
- Still explicitly flagged as TODO (not invented): exact establishment year,
  room count, awards/certifications, email, room pricing/sizes, menu pricing

## Still NOT found anywhere publicly — needed directly from the owner
- Email address
- Exact price, size (sq ft) and bed count for each room category
- Full restaurant menu / pricing
- Real photography for rooms, dining, facilities, gallery
- Exact map coordinates for the map embed

## Room categories (confirmed by hotel owner)
Nav renamed from "Rooms & Suites" to **"Rooms & Dormitory"** — Dormitory is
the hotel's core USP and gets a dedicated showcase section on the homepage.
Room types in `src/data/rooms.js` (structure only — price/size/images TODO):
1. **Dormitory** (`isUSP: true`) — flagship offering, highlighted separately
2. Fresh Rooms
3. Family Rooms — 6–7 guests
4. Personal Cottages

## Explicitly NOT built yet (next step)
- Real content: hotel copy, verified facts, prices, room specs, images
- Gallery images + working Lightbox wiring (grid/filter logic is ready)
- Verified map embed (Explore + Contact pages currently show a clearly
  marked `MAP PLACEHOLDER`)
- Structured data (Hotel / LocalBusiness / BreadcrumbList schema)
- Final animation polish (Framer Motion micro-interactions)
- Verified contact details (phone, email, address) — replace all `TODO`s

## Content rules (do not violate)
Do not invent: phone numbers, emails, exact address, room count, prices,
government ownership claims, establishment year, awards, certifications,
or attraction distances. Use `TODO` placeholders until official info is supplied.

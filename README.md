# Hotel Avantika, Ujjain — React Website

Status: **Structural build + content seeding complete.** Real address/phone/
location facts, owner-confirmed room categories, homepage skyline banner
(Simhastha 2028 artwork), a real train stock-photo banner animation,
subtle sitewide hover/interactivity, EmailJS-powered contact + WhatsApp
click-to-chat, legal pages, and a verified Google Maps integration
(Contact + Explore pages + structured data) are all in place.

Remaining gaps are owner-supplied content only — see
[Still outstanding](#still-outstanding-needed-directly-from-the-owner) below.

## Stack

- React + Vite
- React Router (`/`, `/about`, `/rooms`, `/rooms/:slug`, `/dining`,
  `/facilities`, `/explore`, `/gallery`, `/contact`, `/privacy-policy`,
  `/terms-conditions`, `/hotel-policies`)
- Lucide React (icons)
- Framer Motion (installed, available — current animations use plain CSS
  transitions/keyframes for performance; Framer Motion reserved for future
  scroll-triggered reveals)
- Plain CSS (per-component stylesheets), color system + typography in
  `src/styles/global.css`

## Run locally

```
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
```

No environment variables or backend required — fully static. EmailJS
handles form submissions client-side via the keys in `src/emailjsConfig.js`
(EmailJS public keys are designed to be client-side/public by nature).

## What's built

- Full folder structure (`components/`, `pages/`, `data/`, `styles/`, `seo/`)
- Header (desktop nav + accessible mobile hamburger), Footer, Layout shell
- All 8 required nav pages + room detail route + legal pages + custom 404 —
  **no Banquets page/route/link anywhere**
- Reusable components: Button, SectionHeading, PageBanner, Image,
  RoomCard/RoomGrid, GalleryGrid/Lightbox, PlaceCard, WhatsAppButton, HotelMap
- Data-driven pattern for rooms, facilities, attractions, gallery, notices,
  nav links (`src/data/*.js`)
- `SEO` component (title, meta description, canonical, Open Graph, Twitter
  card) wired into every page
- `HotelSchema.jsx` structured data (Hotel/LocalBusiness/BreadcrumbList),
  now including verified `geo` coordinates
- `public/robots.txt` and `public/sitemap.xml`
- Color system and typography (Cormorant Garamond + Inter)
- No booking widget/engine anywhere — all "Book/Enquire" CTAs route to
  `/contact` or WhatsApp
- EmailJS-powered Contact form + newsletter signup
- Floating WhatsApp click-to-chat button
- Verified Google Maps embed (keyless, Place ID-based) on Contact + Explore
  pages, with a matching "Get Directions" link
- Homepage skyline banner using the owner-supplied Simhastha 2028 artwork,
  full and unmodified
- Real train stock-photo banner animation (tiling CSS background, replacing
  the earlier hand-drawn SVG train)
- Subtle hover/load animations sitewide (buttons, cards, images), respecting
  `prefers-reduced-motion`

## Verified facts in use

Cross-checked against Google Maps, Justdial, Wanderlog, and the Google
Places listing "Hotel Avantika" (Sept 2026):

- **Address**: Near Railway Station Platform No. 1, Malipura, Ujjain, MP 456001
- **Phone**: +91 734 258 5735 (alt: 07383402872)
- **GPS coordinates**: 23.1803009, 75.7825463
- **Google Place ID**: `ChIJTfFDRhp1YzkRhMfqFYhT4AE` — used (not raw lat/lng)
  for the map embed and directions link, since a name-based search or bare
  coordinates can resolve to the wrong property. Multiple similarly-named
  Ujjain hotels exist ("Avantika Palace," "Mahakal Avantika Palace," "MPT
  Avantika" — a separate government-run MP Tourism property) — do not
  cross-reference facts between them.
- **Ownership**: built by Western Railway, privately operated
- **Restaurant**: in-house — Gujarati/Punjabi thali, South Indian, biryani,
  pav bhaji
- **Location USP**: directly beside Ujjain Junction Railway Station
- **Nearby landmarks**: Mahakaleshwar Temple, Harsiddhi Temple (walking
  distance, no exact figure verified)

## Room categories (owner-confirmed)

1. **Dormitory** (`isUSP: true`) — flagship offering, dedicated homepage
   "Signature Stay" showcase
2. **Fresh Rooms**
3. **Family Rooms** — sleeps 6–7 guests
4. **Personal Cottages** — private, standalone

Prices are intentionally `null` in `src/data/rooms.js` for all four
categories — real pricing has not been supplied by the owner yet.

## Content rules (do not violate)

Do not invent: phone numbers, emails, exact prices, room count,
establishment year, awards, certifications, or attraction distances beyond
what's listed above. Use `TODO`/neutral placeholders until official info is
supplied. The original reference HTML was a design inspiration source
only — never assume its factual content is true.

## Still outstanding (needed directly from the owner)

- Email address
- Room pricing, sizes, and bed counts for all 4 categories
- Restaurant menu + pricing
- Establishment year / total room count / any certifications
- Real photography — rooms, dormitory, cottages, restaurant, facilities,
  exterior (currently representative Unsplash stock images)
- Real announcements (currently sample placeholders in `src/data/notices.js`)
- Legal review of Privacy Policy / Terms & Conditions / Hotel Policies
- `public/og-default.jpg` — currently missing; site works fine in-browser,
  but links shared on WhatsApp/Facebook/Twitter will show a broken preview
  image until this exists
- Confirmation of the `hotelavantika.com` domain (currently held by another
  site) before launch
- If the owner sets up their own Google Business Profile later, re-check
  the Place ID in `HotelMap.jsx` and `HotelSchema.jsx` still points at the
  right listing

## Also open

- Confirm `HotelSchema.jsx`'s intentionally-omitted fields (`priceRange`,
  `starRating`, `sameAs`) once owner data arrives
- Scroll-triggered section fade-ins using the already-installed Framer
  Motion (nice-to-have, not implemented)
- Full responsive QA + Lighthouse pass once real photography is in
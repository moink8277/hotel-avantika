/**
 * facilities.js
 * Data source for the Facilities page.
 *
 * Seeded from public-listing research (Google Maps / Justdial / Wanderlog,
 * Sept 2026) for Hotel Avantika, Near Railway Station Platform No. 1,
 * Malipura, Ujjain. Items below are supported by multiple independent
 * guest reviews / listings. Anything not directly evidenced (e.g. exact
 * parking availability, which conflicts across sources) is left generic
 * or omitted rather than guessed.
 */
export const facilities = [
  {
    id: "railway-proximity",
    label: "Right Next to the Railway Station",
    icon: "MapPin",
    description:
      "Located beside Ujjain Junction Railway Station, Platform No. 1 — a short walk for arriving and departing guests.",
  },
  {
    id: "dormitory",
    label: "Budget Dormitory Stays",
    icon: "Users",
    description:
      "Clean, shared dormitory beds for solo travellers, pilgrims and groups — our most popular budget option.",
  },
  {
    id: "restaurant",
    label: "In-House Restaurant",
    icon: "UtensilsCrossed",
    description:
      "On-site multi-cuisine restaurant serving thalis, South Indian and North Indian favourites all day.",
  },
  {
    id: "ac-rooms",
    label: "AC & Non-AC Rooms",
    icon: "Wind",
    description: "A choice of air-conditioned and non-AC rooms to suit every budget.",
  },
  {
    id: "front-desk",
    label: "Round-the-Clock Front Desk",
    icon: "ConciergeBell",
    description: "Reception and owners available for guest assistance at all hours.",
  },
  {
    id: "group-family",
    label: "Group & Family Friendly",
    icon: "Home",
    description:
      "From Personal Cottages to Family Rooms for 6–7 guests, we accommodate solo travellers and large groups alike.",
  },
];

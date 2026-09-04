/**
 * rooms.js
 * Data source for Rooms & Dormitory page.
 *
 * Room categories confirmed directly by the hotel owner:
 *   1. Dormitory      — hotel's core USP, showcased prominently
 *   2. Fresh Rooms
 *   3. Family Rooms    — accommodates 6-7 guests
 *   4. Personal Cottages
 *
 * `isUSP: true` marks Dormitory for separate homepage highlighting.
 *
 * Descriptions are written from confirmed general facts (location,
 * dormitory positioning, group/family suitability) — public research
 * did not surface exact pricing, sizes or bed counts for any category,
 * so those fields remain `null`/TODO until the owner supplies them.
 */
// NOTE: `image` fields below are placeholder stock photography (Unsplash)
// used to match the visual reference until real hotel photography is
// supplied — no factual claims are made by these images.
export const rooms = [
  {
    slug: "dormitory",
    name: "Dormitory",
    category: "Dormitory",
    isUSP: true,
    price: null, // TODO: verified price (per bed / per night)
    size: null, // TODO: verified sq.ft
    guests: null, // TODO: verified bed count
    bedType: "Dormitory Beds",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1000&q=85",
    shortDescription:
      "Budget-friendly shared stay, steps from the railway station — Hotel Avantika's signature offering.",
    description:
      "Our Dormitory is ideal for solo travellers, pilgrims, students and groups looking for a clean, safe and affordable place to stay right next to Ujjain Junction Railway Station. Shared beds keep the cost low without compromising on comfort or convenience.",
    amenities: ["Shared Beds", "Common Washroom", "Near Railway Station"],
  },
  {
    slug: "fresh-rooms",
    name: "Fresh Rooms",
    category: "Fresh Rooms",
    isUSP: false,
    price: null,
    size: null,
    guests: null,
    bedType: null,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
    shortDescription: "Comfortable private rooms with the essentials for a relaxed stay.",
    description:
      "Fresh Rooms offer a private, comfortable stay with essential in-room amenities — a good fit for travellers who want their own space at a reasonable price, just minutes from the station.",
    amenities: [],
  },
  {
    slug: "family-rooms",
    name: "Family Rooms",
    category: "Family Rooms",
    isUSP: false,
    price: null,
    size: null,
    guests: "6–7 Guests",
    bedType: null,
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=85",
    shortDescription: "Spacious rooms designed for larger families and groups of 6–7 guests.",
    description:
      "Perfect for families and pilgrim groups travelling together, our Family Rooms comfortably accommodate 6 to 7 guests in one space — keeping everyone together without needing multiple bookings.",
    amenities: ["Accommodates 6–7 Guests"],
  },
  {
    slug: "personal-cottages",
    name: "Personal Cottages",
    category: "Personal Cottages",
    isUSP: false,
    price: null,
    size: null,
    guests: null,
    bedType: null,
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=85",
    shortDescription: "Private, standalone cottages for a more secluded stay.",
    description:
      "For guests who prefer a quieter, more private experience, our Personal Cottages offer a standalone stay away from the shared spaces of the main building.",
    amenities: ["Private & Standalone"],
  },
];

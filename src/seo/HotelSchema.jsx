import { useEffect } from "react";

const SITE_URL = "https://www.hotelavantika.com"; // see note in SEO.jsx re: domain ownership

/**
 * HotelSchema
 * Injects a single site-wide Hotel (schema.org) JSON-LD block for
 * Google's hotel-listing rich results / local SEO (handoff §4).
 *
 * Fields deliberately OMITTED rather than invented, pending owner data:
 * - geo (lat/long)      -> map/location not yet verified (handoff §3.2)
 * - priceRange           -> room prices not yet set (handoff §3.4)
 * - starRating            -> not provided anywhere in the source content
 * - sameAs (social links) -> no social profiles confirmed yet (handoff §4)
 * Add these back in once the owner confirms them — see handoff §6 checklist.
 */
export default function HotelSchema() {
    useEffect(() => {
        const data = {
            "@context": "https://schema.org",
            "@type": "Hotel",
            name: "Hotel Avantika",
            description:
                "A heritage stay in Ujjain, located next to the railway station, offering rooms, dining and easy access to the city's temples and attractions.",
            url: SITE_URL,
            telephone: "+91-734-258-5735", // sourced from public listings, not owner-confirmed — see handoff §3.1
            address: {
                "@type": "PostalAddress",
                streetAddress: "Near Railway Station Platform No. 1, Malipura",
                addressLocality: "Ujjain",
                addressRegion: "Madhya Pradesh",
                postalCode: "456001",
                addressCountry: "IN",
            },
        };

        let script = document.getElementById("hotel-schema");
        if (!script) {
            script = document.createElement("script");
            script.id = "hotel-schema";
            script.type = "application/ld+json";
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);
    }, []);

    return null;
}
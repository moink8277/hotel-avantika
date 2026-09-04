import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import PlaceCard from "../components/explore/PlaceCard";
import { attractions } from "../data/attractions";

/**
 * Explore
 * Local-SEO-important page. Distances intentionally omitted (see
 * data/attractions.js) until verified. Map is a placeholder pending
 * verified hotel location — see MAP PLACEHOLDER comment below.
 */
export default function Explore() {
  return (
    <>
      <SEO
        title="Explore Ujjain"
        description="Discover Ujjain's temples and attractions near Hotel Avantika, including Mahakaleshwar Temple and Mahakal Lok."
        path="/explore"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Explore Ujjain" }]}
        
      />
      <PageBanner
        eyebrow="Discover Ujjain"
        title="Explore Ujjain"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Explore Ujjain" }]}
      />

      <section className="section">
        <p className="body-copy">
          Ujjain is one of India's most sacred cities, and most of its landmark temples are an
          easy trip from Hotel Avantika. Here's what's worth visiting during your stay.
        </p>
        <div className="places-grid">
          {attractions.map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

        {/* MAP PLACEHOLDER — Replace with verified Hotel Avantika Ujjain map embed. */}
        <div className="map-placeholder">📍 Hotel Avantika, Ujjain — map pending verified location</div>
      </section>
    </>
  );
}

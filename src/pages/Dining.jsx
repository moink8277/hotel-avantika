import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";

/**
 * Dining
 * Restaurant name inferred from the hotel's own registered business name
 * ("Railway Hotel Avantika Restaurant and Dormitory Services"). Cuisine
 * list is seeded from multiple independent guest reviews. Exact menu
 * items/prices are still TODO. Images below are placeholder stock photos.
 */
export default function Dining() {
  return (
    <>
      <SEO
        title="Dining"
        description="Avantika Restaurant at Hotel Avantika, Ujjain — multi-cuisine dining right next to the railway station."
        path="/dining"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Dining" }]}
        
      />
      <PageBanner
        eyebrow="Culinary Experience"
        title="Dining at Hotel Avantika"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Dining" }]}
      />

      <section className="dining-preview">
        <div>
          <div className="eyebrow">Restaurant</div>
          <h2>Avantika Restaurant</h2>
          <p>
            Our in-house multi-cuisine restaurant serves guests and walk-in visitors alike — from
            Gujarati and Punjabi thalis to South Indian favourites like dosa, and everyday staples
            like pav bhaji. Whether you're catching a train or settling in for the night, a hot
            meal is always close by.
          </p>
          <Button to="/contact" variant="orange">
            Enquire About Dining
          </Button>
        </div>
        <div className="dining-preview__grid">
          <img
            src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=900&q=80"
            alt="Indian thali meal, representative image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
            alt="South Indian dosa, representative image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=700&q=80"
            alt="Restaurant seating area, representative image"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <SectionHeading eyebrow="Menu" title="What's on Offer" />
        <p className="todo-note">
          TODO: full menu and pricing to be added once finalised with the owner.
        </p>
      </section>
    </>
  );
}

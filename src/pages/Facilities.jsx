import { MapPin, Users, UtensilsCrossed, Wind, ConciergeBell, Home, CircleCheck } from "lucide-react";
import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import { facilities } from "../data/facilities";
import "./Facilities.css";

const ICONS = {
  MapPin,
  Users,
  UtensilsCrossed,
  Wind,
  ConciergeBell,
  Home,
};

/**
 * Facilities
 * Seeded from public-listing research (Sept 2026) — items are supported
 * by multiple independent guest reviews/listings; nothing unverifiable is
 * shown (e.g. exact parking availability, which conflicts across sources).
 */
export default function Facilities() {
  return (
    <>
      <SEO
        title="Facilities"
        description="Guest facilities and services available at Hotel Avantika, Ujjain."
        path="/facilities"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Facilities" }]}
        
      />
      <PageBanner
        eyebrow="Guest Facilities"
        title="Facilities"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Facilities" }]}
      />

      <section className="section">
        <p className="body-copy">
          Whether you're catching a train at odd hours or settling in for a longer stay, these are
          the essentials Hotel Avantika keeps ready for every guest.
        </p>
        <div className="facilities-grid">
          {facilities.map((f) => {
            const Icon = ICONS[f.icon] || CircleCheck;
            return (
              <div className="facility-card" key={f.id}>
                <Icon size={26} aria-hidden="true" />
                <b>{f.label}</b>
                <span>{f.description}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

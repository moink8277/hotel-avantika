import SEO from "../seo/SEO";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import RoomGrid from "../components/rooms/RoomGrid";
import PlaceCard from "../components/explore/PlaceCard";
import { rooms } from "../data/rooms";
import { attractions } from "../data/attractions";
import { notices } from "../data/notices";
import JourneyBanner from "../components/home/JourneyBanner";
import "./Home.css";

/**
 * Home
 * Structure follows the reference closely: Hero (no booking widget) ->
 * Welcome/Stats -> Dormitory USP showcase -> Rooms -> Dining -> Explore
 * Ujjain -> Announcements -> Final CTA.
 */
export default function Home() {
  const uspRooms = rooms.filter((r) => r.isUSP);

  return (
    <>
      <SEO
        title="Hotel in Ujjain | Dormitory, Family Rooms & Cottages Near Railway Station"
        description="Hotel Avantika, Ujjain — located right next to Ujjain Junction Railway Station Platform No. 1. Dormitory stays, Fresh Rooms, Family Rooms (6-7 guests) and Personal Cottages."
        path="/"
      />

      {/* Hero */}
      <section className="hero">
        <div className="hero__content">
          <div className="eyebrow">Welcome to Hotel Avantika</div>
          <h1>Hotel Avantika</h1>
          <h2 className="hero__tagline">A Heritage Stay in the Heart of Ujjain</h2>
          <p>
            Located right next to Ujjain Junction Railway Station (Platform No. 1), Hotel Avantika
            offers easy, walkable access for every traveller — from Dormitory stays to Family
            Rooms and Personal Cottages.
          </p>
          <div className="hero__actions">
            <Button to="/rooms" variant="primary">
              Explore Rooms
            </Button>
            <Button to="/about" variant="outline">
              Explore Hotel
            </Button>
          </div>
        </div>
      </section>

      <JourneyBanner />

      {/* Welcome / Introduction + Highlights */}
      <section className="section">
        <div className="intro">
          <div>
            <div className="eyebrow red">Welcome</div>
            <h2>A Warm Welcome to Ujjain</h2>
            <p>
              Step off the train and you're already home. Hotel Avantika sits right beside Ujjain
              Junction's Platform No. 1, offering shared Dormitory beds, private Fresh Rooms,
              spacious Family Rooms for 6–7 guests, and secluded Personal Cottages — all within a
              short walk of Mahakaleshwar Temple.
            </p>
            <Button to="/about" variant="outline">
              Learn More →
            </Button>
          </div>
          <div className="stats">
            {[
              { label: "Location", value: "Platform No. 1" },
              { label: "Signature Stay", value: "Dormitory" },
              { label: "Dining", value: "In-House" },
              { label: "Groups", value: "Up to 6–7 Guests" },
            ].map((item) => (
              <div className="stat" key={item.label}>
                <span>{item.label}</span>
                <b>{item.value}</b>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Showcase — Dormitory */}
      <section className="section usp-showcase">
        <SectionHeading
          eyebrow="Our Signature Stay"
          title="Dormitory Stays at Hotel Avantika"
          description="Right next to Ujjain Junction Railway Station, our Dormitory is the go-to budget-friendly choice for solo travellers, pilgrims and groups — clean, safe, and steps from the platform."
        />
        <RoomGrid rooms={uspRooms} />
      </section>

      {/* Rooms */}
      <section className="section" id="rooms-preview">
        <div className="section-head">
          <SectionHeading
            eyebrow="Accommodation"
            title="Rooms & Dormitory"
            description="Dormitory, Fresh Rooms, Family Rooms (6-7 guests) and Personal Cottages."
          />
          <Button to="/rooms" variant="outline">
            View All Rooms →
          </Button>
        </div>
        <RoomGrid rooms={rooms} />
      </section>

      {/* Dining */}
      <section className="dining-preview">
        <div>
          <div className="eyebrow">Flavours of Ujjain</div>
          <h2>A Taste of Ujjain</h2>
          <p>
            Avantika Restaurant serves guests around the clock — Gujarati and Punjabi thalis,
            South Indian favourites, and everyday staples like pav bhaji, all without needing to
            step outside.
          </p>
          <Button to="/dining" variant="orange">
            Explore Dining
          </Button>
        </div>
        <div className="dining-preview__grid">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant seating area, representative image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=80"
            alt="Indian thali meal, representative image"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=80"
            alt="South Indian dosa, representative image"
            loading="lazy"
          />
        </div>
      </section>

      {/* Explore Ujjain */}
      <section className="section">
        <div className="section-head">
          <SectionHeading eyebrow="Discover Ujjain" title="Explore the Spiritual Land" />
          <Button to="/explore" variant="outline">
            View All Places →
          </Button>
        </div>
        <div className="places-grid">
          {attractions.slice(0, 6).map((place) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
      </section>

      {/* Announcements — sample/placeholder content */}
      <section className="section">
        <div className="section-head">
          <SectionHeading eyebrow="Important Information" title="Latest Announcements" />
          <Button to="/contact" variant="outline">
            View All Notices →
          </Button>
        </div>
        <div className="notices">
          {notices.map((n) => (
            <div className="notice" key={n.title}>
              <div>
                <strong>{n.title}</strong>
                <small>{n.date}</small>
              </div>
            </div>
          ))}
        </div>
        <p className="todo-note">
          Announcements above are sample placeholders pending real notices from the hotel.
        </p>
      </section>

      {/* Final CTA */}
      <section className="final-cta">
        <h2>Plan Your Stay at Hotel Avantika</h2>
        <Button to="/contact" variant="primary">
          Contact Us
        </Button>
      </section>
    </>
  );
}

import { useState } from "react";
import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import Button from "../components/common/Button";
import RoomRow from "../components/rooms/RoomRow";
import { rooms } from "../data/rooms";

const filterOptions = [
  { label: "All Rooms", value: "all" },
  ...Array.from(new Set(rooms.map((r) => r.category))).map((c) => ({ label: c, value: c })),
];

/**
 * Rooms
 * Display + exploration page only — NOT a booking engine.
 */
export default function Rooms() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredRooms =
    activeFilter === "all" ? rooms : rooms.filter((r) => r.category === activeFilter);

  return (
    <>
      <SEO
        title="Rooms & Dormitory"
        description="Hotel Avantika, Ujjain offers Dormitory stays, Fresh Rooms, Family Rooms (6-7 guests) and Personal Cottages."
        path="/rooms"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Rooms & Dormitory" }]}
        
      />
      <PageBanner
        eyebrow="Accommodation"
        title="Rooms & Dormitory"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Rooms & Dormitory" }]}
      />

      <section className="section">
        <p className="body-copy">
          From a shared Dormitory bed for a night's stopover to a Personal Cottage for a quieter
          stay, every option below is built for travellers passing through Ujjain by train. Browse
          what suits you and reach out to us directly — we don't run an online booking engine, so
          reservations are confirmed by phone or in person.
        </p>

        <div className="room-filter" role="tablist" aria-label="Filter rooms by category">
          {filterOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              role="tab"
              aria-selected={activeFilter === opt.value}
              className={activeFilter === opt.value ? "active" : ""}
              onClick={() => setActiveFilter(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="room-list">
          {filteredRooms.map((room) => (
            <RoomRow key={room.slug} room={room} />
          ))}
        </div>

        <div className="help">
          <div>
            <h3>Need Help Choosing a Room?</h3>
            <p>Our team can help you select the right stay.</p>
          </div>
          <Button to="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}

import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "../seo/SEO";
import Button from "../components/common/Button";
import Image from "../components/common/Image";
import { rooms } from "../data/rooms";

/**
 * RoomDetails
 * Individual room page at /rooms/:slug.
 * Enquiry CTA routes to /contact — no booking engine.
 */
export default function RoomDetails() {
  const { slug } = useParams();
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return <Navigate to="/rooms" replace />;
  }

  return (
    <>
      <SEO
        title={room.name}
        description={room.shortDescription || `${room.name} at Hotel Avantika, Ujjain.`}
        path={`/rooms/${room.slug}`}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Rooms & Dormitory", path: "/rooms" },
          { label: room.name },
        ]}
      />

      <section className="section room-details">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link> &nbsp;›&nbsp; <Link to="/rooms">Rooms & Dormitory</Link> &nbsp;›&nbsp;{" "}
          {room.name}
        </nav>

        <Image src={room.image} alt={room.name} priority className="room-details__image" />

        <h1>{room.name}</h1>
        {room.isUSP && <span className="room-card__badge" style={{ position: "static", display: "inline-block", marginBottom: "10px" }}>Signature Stay</span>}
        {room.price && <p className="room-details__price">₹{room.price} / Night</p>}
        {room.guests && <p className="room-card__guests">{room.guests}</p>}
        <p>{room.description || room.shortDescription}</p>

        {room.amenities?.length > 0 && (
          <ul className="room-details__amenities">
            {room.amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}

        <Button to="/contact" variant="primary">
          Enquire About This Room
        </Button>
      </section>
    </>
  );
}

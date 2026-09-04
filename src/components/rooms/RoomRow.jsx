import Button from "../common/Button";
import Image from "../common/Image";
import "./Rooms.css";

/**
 * RoomRow
 * Horizontal list-style room card (matches reference Rooms page `.room-row`).
 * Display-only — "Book Now" routes to /contact, there is no booking engine.
 */
export default function RoomRow({ room }) {
  const { slug, name, price, size, guests, image, description, shortDescription, amenities = [], isUSP } =
    room;

  return (
    <article className="room-row">
      <Image src={image} alt={name ? `${name} at Hotel Avantika` : ""} className="room-row__image" />
      <div className="room-row__info">
        {price && (
          <span className="room-row__price">
            ₹{price} <small>/ Night</small>
          </span>
        )}
        {isUSP && <span className="room-row__badge">Signature Stay</span>}
        <h3>{name}</h3>
        <p>{description || shortDescription}</p>

        {(guests || size || amenities.length > 0) && (
          <ul className="amenities">
            {guests && <li>{guests}</li>}
            {size && <li>{size}</li>}
            {amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}

        <div className="room-row__actions">
          <Button to={`/rooms/${slug}`} variant="outline">
            View Details
          </Button>
          <Button to="/contact" variant="orange">
            Enquire
          </Button>
        </div>
      </div>
    </article>
  );
}

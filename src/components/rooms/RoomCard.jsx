import Button from "../common/Button";
import Image from "../common/Image";

/**
 * RoomCard
 * Vertical preview card (matches reference Home page `.card`).
 * Price/size/guests are only shown when present — no fabricated numbers.
 */
export default function RoomCard({ room }) {
  const { slug, name, price, image, shortDescription, amenities = [], guests, isUSP } = room;

  return (
    <article className={`room-card ${isUSP ? "room-card--usp" : ""}`}>
      {isUSP && <span className="room-card__badge">Signature Stay</span>}
      <Image
        src={image}
        alt={name ? `${name} at Hotel Avantika` : ""}
        className="room-card__image"
      />
      <div className="room-card__body">
        {price && <span className="room-card__price">₹{price} / Night</span>}
        <h3>{name}</h3>
        {guests && <p className="room-card__guests">{guests}</p>}
        {shortDescription && <p>{shortDescription}</p>}
        {amenities.length > 0 && (
          <ul className="room-card__amenities">
            {amenities.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        )}
        <div className="room-card__actions">
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

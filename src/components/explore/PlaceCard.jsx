import Image from "../common/Image";
import "./Explore.css";

/**
 * PlaceCard
 * Attraction card for Explore Ujjain page.
 * Distance is intentionally NOT shown unless verified (see data/attractions.js).
 */
export default function PlaceCard({ place }) {
  const { name, image, description } = place;
  return (
    <article className="place-card">
      <Image src={image} alt={name} />
      <div className="place-card__body">
        <h3>{name}</h3>
        {description && <p>{description}</p>}
      </div>
    </article>
  );
}

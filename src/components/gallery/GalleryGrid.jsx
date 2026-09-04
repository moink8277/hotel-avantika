import { useState } from "react";
import Image from "../common/Image";
import Lightbox from "./Lightbox";
import "./Gallery.css";

/**
 * GalleryGrid
 * Filterable, responsive image grid with hover effect + keyboard-accessible
 * lightbox preview.
 */
export default function GalleryGrid({ categories = [], images = [] }) {
  const [activeCategory, setActiveCategory] = useState(categories[0] || "All");
  const [activeIndex, setActiveIndex] = useState(null);

  const filtered =
    activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  const activeImage = activeIndex !== null ? filtered[activeIndex] : null;

  const showPrev = () => setActiveIndex((i) => (i - 1 + filtered.length) % filtered.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % filtered.length);

  return (
    <div className="gallery">
      <div className="gallery__filters" role="tablist" aria-label="Gallery categories">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            role="tab"
            aria-selected={activeCategory === cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => {
              setActiveCategory(cat);
              setActiveIndex(null);
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery__grid">
        {filtered.length === 0 && (
          <p className="gallery__empty">Photos coming soon — check back shortly.</p>
        )}
        {filtered.map((img, i) => (
          <button
            key={img.id}
            type="button"
            className="gallery__item"
            onClick={() => setActiveIndex(i)}
            aria-label={`View larger image: ${img.alt}`}
          >
            <Image src={img.src} alt={img.alt} />
          </button>
        ))}
      </div>

      {activeImage && (
        <Lightbox
          image={activeImage}
          onClose={() => setActiveIndex(null)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
}

import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "../common/Image";

/**
 * Lightbox
 * Keyboard-accessible full-screen image preview.
 * TODO: connect to GalleryGrid item clicks once gallery data exists.
 *
 * Props:
 *   image: { src, alt }
 *   onClose, onPrev, onNext: handlers
 */
export default function Lightbox({ image, onClose, onPrev, onNext }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose?.();
      if (e.key === "ArrowLeft") onPrev?.();
      if (e.key === "ArrowRight") onNext?.();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  if (!image) return null;

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
      <button type="button" className="lightbox__close" aria-label="Close preview" onClick={onClose}>
        <X size={28} />
      </button>
      <button type="button" className="lightbox__prev" aria-label="Previous image" onClick={onPrev}>
        <ChevronLeft size={32} />
      </button>
      <Image src={image.src} alt={image.alt} priority className="lightbox__image" />
      <button type="button" className="lightbox__next" aria-label="Next image" onClick={onNext}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
}

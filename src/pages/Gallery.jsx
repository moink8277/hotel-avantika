import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import GalleryGrid from "../components/gallery/GalleryGrid";
import { galleryCategories, galleryImages } from "../data/gallery";

/**
 * Gallery
 * TODO: populate data/gallery.js with verified/licensed photography.
 * Lightbox wiring intentionally deferred until real images exist.
 */
export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Browse photos of Hotel Avantika, Ujjain — rooms, dining, facilities and more."
        path="/gallery"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
        
      />
      <PageBanner
        eyebrow="Gallery"
        title="Photo Gallery"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Gallery" }]}
      />

      <section className="section">
        <p className="body-copy">
          A look at Hotel Avantika — from our rooms and Dormitory to the restaurant, facilities,
          and the city of Ujjain around us.
        </p>
        <GalleryGrid categories={galleryCategories} images={galleryImages} />
      </section>
    </>
  );
}

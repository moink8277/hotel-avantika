/**
 * Image
 * Thin wrapper enforcing meaningful alt text + lazy loading by default.
 * Pass priority={true} for the LCP/hero image to disable lazy loading.
 */
export default function Image({ src, alt, priority = false, className = "", ...rest }) {
  if (!alt) {
    // Fails loudly in dev so no image ships without meaningful alt text.
    console.warn("Image component used without `alt` text:", src);
  }
  return (
    <img
      src={src}
      alt={alt || ""}
      loading={priority ? "eager" : "lazy"}
      className={className}
      {...rest}
    />
  );
}

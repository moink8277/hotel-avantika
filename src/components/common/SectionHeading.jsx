/**
 * SectionHeading
 * Consistent eyebrow + heading + optional supporting text used across
 * homepage and inner-page sections (matches reference .section-head).
 */
export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`section-heading section-heading--${align}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      {title && <h2>{title}</h2>}
      {description && <p>{description}</p>}
    </div>
  );
}

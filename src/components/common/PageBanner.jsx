import { Link } from "react-router-dom";

/**
 * PageBanner
 * Inner-page hero banner (matches reference .page-banner):
 * eyebrow + H1 + breadcrumb trail.
 *
 * breadcrumbs: [{ label: "Home", path: "/" }, { label: "Current Page" }]
 */
export default function PageBanner({ eyebrow, title, breadcrumbs = [] }) {
  return (
    <div className="page-banner">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h1>{title}</h1>
      {breadcrumbs.length > 0 && (
        <nav className="breadcrumb" aria-label="Breadcrumb">
          {breadcrumbs.map((crumb, i) => (
            <span key={crumb.label}>
              {crumb.path ? <Link to={crumb.path}>{crumb.label}</Link> : crumb.label}
              {i < breadcrumbs.length - 1 && <span aria-hidden="true"> &nbsp;›&nbsp; </span>}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
}

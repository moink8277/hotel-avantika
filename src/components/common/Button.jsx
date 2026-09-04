import { Link } from "react-router-dom";

/**
 * Button
 * Unified button/link component. Variants mirror reference: primary (red),
 * orange, outline (blue border).
 *
 * Usage:
 *   <Button to="/rooms" variant="primary">Explore Rooms</Button>
 *   <Button as="button" variant="orange" onClick={...}>Send</Button>
 */
export default function Button({
  children,
  to,
  href,
  variant = "primary",
  as,
  className = "",
  ...rest
}) {
  const classes = `btn ${variant} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={rest.type || "button"} className={classes} {...rest}>
      {children}
    </button>
  );
}

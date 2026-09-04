import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks } from "../../data/navLinks";
import "./Header.css";

/**
 * Header
 * Sticky top bar + main navbar, matching the reference layout:
 * topbar (contact strip) -> navbar (logo + nav links + CTA).
 * Mobile: hamburger toggles a slide/dropdown nav; closes on link click.
 *
 * Phone number below is sourced from the hotel's Google Maps listing
 * (Sept 2026 research) — CONFIRM with owner before final launch.
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="topbar">
        <span className="topbar__contact">
          <Phone size={12} aria-hidden="true" /> +91 734 258 5735
        </span>
        <span className="topbar__tagline">A Heritage Stay in the Heart of Ujjain</span>
      </div>

      <header className="navbar">
        <NavLink to="/" className="logo" onClick={closeMenu} aria-label="Hotel Avantika home">
          <div className="logo__mark" aria-hidden="true">॥</div>
          <div>
            <small>Ujjain, Madhya Pradesh</small>
            <strong>Hotel Avantika</strong>
          </div>
        </NavLink>

        <nav className="nav nav--desktop" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <NavLink to="/contact" className="btn primary nav--desktop-cta">
          Book / Enquire
        </NavLink>

        <button
          type="button"
          className="nav-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <nav
        className={`nav-mobile ${menuOpen ? "nav-mobile--open" : ""}`}
        aria-label="Mobile navigation"
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end={link.path === "/"}
            onClick={closeMenu}
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            {link.label}
          </NavLink>
        ))}
        <NavLink to="/contact" className="btn primary" onClick={closeMenu}>
          Book / Enquire
        </NavLink>
      </nav>
    </>
  );
}

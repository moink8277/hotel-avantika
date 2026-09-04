import { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../../emailjsConfig";
import "./Footer.css";

/**
 * Footer
 * Structural skeleton matching reference footer-grid:
 * brand+intro | quick links | guest services | important | newsletter.
 * NOTE: No "Banquets" link, per project requirements.
 *
 * Address/phone below sourced from public listings (Google Maps/Justdial,
 * Sept 2026 research) for "Hotel Avantika, near Railway Station Platform
 * No.1, Malipura, Ujjain". Multiple reviewers independently describe the
 * property as built by Western Railway and privately operated — CONFIRM
 * this and the exact address/phone with the owner before final launch.
 */
export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("idle"); // idle | sending | done | error

  async function handleSubscribe() {
    if (!newsletterEmail || !newsletterEmail.includes("@")) {
      setNewsletterStatus("error");
      return;
    }
    setNewsletterStatus("sending");
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: "Newsletter Subscriber",
          email: newsletterEmail,
          phone: "N/A",
          subject: "Newsletter Subscription",
          message: `New newsletter signup request from the website footer: ${newsletterEmail}`,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setNewsletterStatus("done");
      setNewsletterEmail("");
    } catch (err) {
      console.error("EmailJS newsletter send failed:", err);
      setNewsletterStatus("error");
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">HOTEL AVANTIKA</div>
          <p>
            A heritage stay in Ujjain, right next to the railway station.
          </p>
          <p>
            📍 Near Railway Station Platform No. 1, Malipura, Ujjain – 456001
            <br />
            ☎ +91 734 258 5735
            <br />
            ✉ TODO: verified email
          </p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/rooms">Rooms &amp; Dormitory</Link>
          <Link to="/dining">Dining</Link>
          <Link to="/facilities">Facilities</Link>
        </div>

        <div>
          <h4>Guest Services</h4>
          <Link to="/rooms">Explore Rooms</Link>
          <Link to="/contact">Reservations / Enquiry</Link>
          <Link to="/contact">Check-in / Check-out</Link>
          <Link to="/contact">Travel Assistance</Link>
        </div>

        <div>
          <h4>Important</h4>
          <Link to="/hotel-policies">Hotel Policies</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-conditions">Terms &amp; Conditions</Link>
          <Link to="/gallery">Gallery</Link>
        </div>

        <div className="newsletter">
          <h4>Newsletter</h4>
          <p>Subscribe for updates and offers.</p>
          {newsletterStatus === "done" ? (
            <p role="status">Thanks — you're subscribed!</p>
          ) : (
            <>
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                value={newsletterEmail}
                onChange={(e) => {
                  setNewsletterEmail(e.target.value);
                  if (newsletterStatus === "error") setNewsletterStatus("idle");
                }}
              />
              <button
                type="button"
                className="btn orange"
                onClick={handleSubscribe}
                disabled={newsletterStatus === "sending"}
              >
                {newsletterStatus === "sending" ? "SUBSCRIBING..." : "SUBSCRIBE"}
              </button>
              {newsletterStatus === "error" && (
                <p role="alert" style={{ color: "var(--color-red)", fontSize: "0.85rem" }}>
                  Please enter a valid email, or try again.
                </p>
              )}
            </>
          )}
        </div>
      </div>

      <div className="copyright">
        <span>© {new Date().getFullYear()} Hotel Avantika, Ujjain. All Rights Reserved.</span>
        <span>Ujjain, Madhya Pradesh, India</span>
      </div>
    </footer>
  );
}
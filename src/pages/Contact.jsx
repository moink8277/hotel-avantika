import { useState } from "react";
import emailjs from "@emailjs/browser";
import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import { EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY } from "../emailjsConfig";
import "./Contact.css";

/**
 * Contact
 * Form now sends real enquiries via EmailJS (see ../emailjsConfig.js
 * for the Service ID / Template ID / Public Key).
 *
 * Address & phone sourced from public listings (Google Maps / Justdial
 * via Wanderlog, Sept 2026). Email still TODO (not found in research).
 * MAP PLACEHOLDER — Replace with verified Hotel Avantika Ujjain map embed.
 */
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSending(true);

    const form = e.target;
    const templateParams = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value || "Not provided",
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setError("Sorry, your message could not be sent right now. Please call us instead.");
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Hotel Avantika, Ujjain for reservations and enquiries."
        path="/contact"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
        
      />
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact Us" }]}
      />

      <section className="section contact-grid">
        <div>
          <div className="eyebrow" style={{ color: "var(--color-red)" }}>
            Get In Touch
          </div>
          <h2>We Are Here to Help</h2>
          <p>Reach out to our team for room enquiries, dining information or general assistance.</p>

          <div className="contact-info">
            <div className="contact-card">
              <b>📍 Address</b>
              <span>Near Railway Station Platform No. 1, Malipura, Ujjain, Madhya Pradesh 456001</span>
            </div>
            <div className="contact-card">
              <b>☎ Phone</b>
              <span>+91 734 258 5735</span>
            </div>
            <div className="contact-card">
              <b>✉ Email</b>
              <span>TODO: verified email address</span>
            </div>
            <div className="contact-card">
              <b>🕘 Reception</b>
              <span>Open 24 hours — front desk and owners available round the clock</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {submitted ? (
            <p role="status" className="form-success">
              Thank you. Your enquiry has been received.
            </p>
          ) : (
            <div className="form-grid">
              <div>
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" placeholder="Enter your name" required />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="Enter your email" required />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" placeholder="Enter phone number" />
              </div>
              <div>
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option>Room Reservation</option>
                  <option>Dining Enquiry</option>
                  <option>General Enquiry</option>
                </select>
              </div>
              <div className="full">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Write your message..." required />
              </div>
              {error && (
                <p className="full" role="alert" style={{ color: "var(--color-red)" }}>
                  {error}
                </p>
              )}

              <div className="full">
                <button
                  type="submit"
                  className="btn primary"
                  style={{ width: "100%" }}
                  disabled={sending}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </div>
          )}
        </form>
      </section>

      <section className="section">
        {/* MAP PLACEHOLDER — Replace with verified Hotel Avantika Ujjain map embed. */}
        <div className="map-placeholder">📍 Hotel Avantika, Ujjain — map pending verified location</div>
      </section>
    </>
  );
}
import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import "../styles/Legal.css";

/**
 * TermsConditions
 * DRAFT / STANDARD TEMPLATE — see note in PrivacyPolicy.jsx. Needs
 * owner sign-off or replacement text before real launch (handoff §6).
 */
export default function TermsConditions() {
    return (
        <>
            <SEO
                title="Terms & Conditions"
                description="Terms and Conditions for using the Hotel Avantika, Ujjain website."
                path="/terms-conditions"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "Terms & Conditions" }]}
                
            />
            <PageBanner
                eyebrow="Legal"
                title="Terms & Conditions"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "Terms & Conditions" }]}
            />

            <section className="section legal-content">
                <p className="body-copy legal-notice">
                    Draft policy — pending final review and sign-off by Hotel Avantika management.
                </p>

                <h2>Acceptance of Terms</h2>
                <p className="body-copy">
                    By using this website, you agree to these Terms &amp; Conditions. If you do not
                    agree, please do not use this site.
                </p>

                <h2>Use of This Website</h2>
                <p className="body-copy">
                    This website is provided for informational purposes — to help you learn about Hotel
                    Avantika's rooms, dining, facilities and location, and to submit enquiries. It is not
                    a booking engine: submitting the contact form sends an enquiry only and does not
                    confirm a reservation.
                </p>

                <h2>Enquiries &amp; Reservations</h2>
                <p className="body-copy">
                    All room availability, pricing and reservation details shared on this website are
                    indicative and subject to confirmation directly with Hotel Avantika by phone or
                    email. Final booking terms are agreed at the time of confirmation with the hotel.
                </p>

                <h2>Accuracy of Information</h2>
                <p className="body-copy">
                    We aim to keep information on this site accurate and up to date, but details such as
                    pricing, room availability and facilities may change without notice. Please confirm
                    current details with the hotel directly before making travel plans.
                </p>

                <h2>Intellectual Property</h2>
                <p className="body-copy">
                    All content on this website — including text, images and design — is the property of
                    Hotel Avantika unless otherwise credited, and may not be reproduced without
                    permission.
                </p>

                <h2>Limitation of Liability</h2>
                <p className="body-copy">
                    Hotel Avantika is not liable for any indirect or incidental loss arising from the use
                    of this website or reliance on information published on it.
                </p>

                <h2>Governing Law</h2>
                <p className="body-copy">
                    These terms are governed by the laws of India, with jurisdiction in Ujjain, Madhya
                    Pradesh.
                </p>

                <h2>Changes to These Terms</h2>
                <p className="body-copy">
                    We may revise these terms at any time. Continued use of the website after changes
                    are posted constitutes acceptance of the updated terms.
                </p>

                <h2>Contact Us</h2>
                <p className="body-copy">
                    For questions about these terms, please reach out via our{" "}
                    <a href="/contact">Contact page</a>.
                </p>
            </section>
        </>
    );
}

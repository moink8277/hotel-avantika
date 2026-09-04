import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import "../styles/Legal.css";

/**
 * PrivacyPolicy
 * DRAFT / STANDARD TEMPLATE — this is generic boilerplate, not
 * hotel-specific or legally reviewed content. Flagged in the handoff
 * doc (§6) as needing the owner's sign-off before real launch, or
 * replacement with owner-provided policy text.
 */
export default function PrivacyPolicy() {
    return (
        <>
            <SEO
                title="Privacy Policy"
                description="Privacy Policy for Hotel Avantika, Ujjain."
                path="/privacy-policy"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]}
                
            />
            <PageBanner
                eyebrow="Legal"
                title="Privacy Policy"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "Privacy Policy" }]}
            />

            <section className="section legal-content">
                <p className="body-copy legal-notice">
                    Draft policy — pending final review and sign-off by Hotel Avantika management.
                </p>

                <h2>Introduction</h2>
                <p className="body-copy">
                    Hotel Avantika ("we", "us", "our") respects your privacy. This policy explains what
                    information we collect through this website, how we use it, and the choices you have.
                </p>

                <h2>Information We Collect</h2>
                <p className="body-copy">
                    When you submit an enquiry through our contact form, we collect the details you
                    provide: your name, email address, phone number, and message content. We do not
                    collect payment information through this website, as it is not a booking engine.
                </p>

                <h2>How We Use Your Information</h2>
                <p className="body-copy">
                    We use the information you submit only to respond to your enquiry — for example, to
                    confirm room availability, answer questions, or follow up on a reservation request.
                    We do not sell or rent your personal information to third parties.
                </p>

                <h2>Cookies</h2>
                <p className="body-copy">
                    This website does not currently use tracking or advertising cookies. If that changes
                    (for example, if analytics are added), this policy will be updated accordingly.
                </p>

                <h2>Data Security</h2>
                <p className="body-copy">
                    We take reasonable steps to protect the information submitted to us. However, no
                    method of transmission over the internet is 100% secure, and we cannot guarantee
                    absolute security.
                </p>

                <h2>Your Rights</h2>
                <p className="body-copy">
                    You may request access to, correction of, or deletion of personal information you
                    have submitted to us by contacting us using the details on our Contact page.
                </p>

                <h2>Changes to This Policy</h2>
                <p className="body-copy">
                    We may update this policy from time to time. The updated version will be posted on
                    this page.
                </p>

                <h2>Contact Us</h2>
                <p className="body-copy">
                    For questions about this policy, please reach out via our{" "}
                    <a href="/contact">Contact page</a>.
                </p>
            </section>
        </>
    );
}
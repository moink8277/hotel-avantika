import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import "../styles/Legal.css";

/**
 * HotelPolicies
 * DRAFT / STANDARD TEMPLATE for a typical Indian hotel. Timings and the
 * cancellation policy are marked TODO — per handoff §6, exact numbers
 * must come from the owner, not be invented.
 */
export default function HotelPolicies() {
    return (
        <>
            <SEO
                title="Hotel Policies"
                description="Check-in, check-out and house policies at Hotel Avantika, Ujjain."
                path="/hotel-policies"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "Hotel Policies" }]}

            />
            <PageBanner
                eyebrow="Legal"
                title="Hotel Policies"
                breadcrumbs={[{ label: "Home", path: "/" }, { label: "Hotel Policies" }]}
            />

            <section className="section legal-content">
                <p className="body-copy legal-notice">
                    Draft policy — timings and cancellation terms marked TODO below need confirmation
                    from Hotel Avantika management before this page goes live.
                </p>

                <h2>Check-in / Check-out</h2>
                <p className="body-copy">
                    Check-in: TODO — confirm standard check-in time with the owner (commonly 12:00 PM at
                    Indian hotels).
                    <br />
                    Check-out: TODO — confirm standard check-out time with the owner (commonly 11:00 AM).
                    <br />
                    Early check-in / late check-out may be available on request, subject to availability.
                </p>

                <h2>Identification</h2>
                <p className="body-copy">
                    As per Indian government regulations, all guests must present a valid photo ID
                    (Aadhaar, Passport, Voter ID, or Driving Licence) at check-in. Foreign nationals must
                    present a valid passport and visa.
                </p>

                <h2>Cancellation &amp; Refund Policy</h2>
                <p className="body-copy">
                    TODO — Hotel Avantika's cancellation and refund terms need to be confirmed directly by
                    the owner (e.g. free cancellation window, any charges for late cancellation or
                    no-show). Do not publish this section with invented figures.
                </p>

                <h2>Extra Guests &amp; Children</h2>
                <p className="body-copy">
                    TODO — confirm with the owner whether extra beds/mattresses are available, any
                    associated charge, and the policy for children sharing a room.
                </p>

                <h2>Smoking &amp; Alcohol</h2>
                <p className="body-copy">
                    TODO — confirm the hotel's smoking policy (designated areas, if any) and alcohol
                    policy with the owner.
                </p>

                <h2>Pets</h2>
                <p className="body-copy">TODO — confirm whether pets are permitted with the owner.</p>

                <h2>Payment</h2>
                <p className="body-copy">
                    TODO — confirm accepted payment methods (cash, UPI, card) with the owner.
                </p>

                <h2>House Rules</h2>
                <p className="body-copy">
                    Guests are requested to maintain quiet hours, respect other guests and hotel staff,
                    and report any damage or maintenance issues to the front desk. The hotel reserves the
                    right to refuse service in case of disruptive behaviour.
                </p>
            </section>
        </>
    );
}
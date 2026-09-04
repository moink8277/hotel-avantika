import SEO from "../seo/SEO";
import PageBanner from "../components/common/PageBanner";
import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import "./About.css";

/**
 * About
 * Copy is grounded in confirmed research (Sept 2026): the property's
 * railway-adjacent location and its room categories. Exact establishment
 * date, room count and awards are left as TODO rather than invented.
 * Images below are placeholder stock photography pending real hotel photos.
 */
export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Hotel Avantika's hospitality philosophy and its connection to Ujjain, right next to the railway station."
        path="/about"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />
      <PageBanner
        eyebrow="Our Story"
        title="About Hotel Avantika"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us" }]}
      />

      <section className="section">
        <div className="about-intro">
          <img
            src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1000&q=85"
            alt="Hotel Avantika reception area, representative image"
            loading="lazy"
          />
          <div>
            <div className="eyebrow red">Introduction</div>
            <h2>Who We Are</h2>
            <p className="body-copy">
              Hotel Avantika sits right beside Ujjain Junction Railway Station's Platform No. 1 —
              making it one of the most convenient places to stay for anyone passing through the
              city, whether you've just stepped off a train or are heading out on one.
            </p>
            <p className="body-copy">
              We welcome everyone from solo travellers and pilgrims to families and larger groups,
              with a range of stays built around comfort, convenience and value: Dormitory beds,
              Fresh Rooms, Family Rooms for 6–7 guests, and Personal Cottages for a quieter,
              private stay.
            </p>
            <Button to="/rooms" variant="primary">
              Explore Our Rooms
            </Button>
          </div>
        </div>

        <div className="strengths-grid" style={{ marginTop: "30px" }}>
          <div className="strength-card">
            <h3>Unbeatable Location</h3>
            <p>Right next to Platform No. 1 — no need for a taxi or long walk with your luggage.</p>
          </div>
          <div className="strength-card">
            <h3>Dormitory for Every Budget</h3>
            <p>Our signature shared stay keeps a night in Ujjain affordable for solo travellers and groups.</p>
          </div>
          <div className="strength-card">
            <h3>Room for the Whole Family</h3>
            <p>Family Rooms comfortably fit 6–7 guests, so groups can stay together, not split across rooms.</p>
          </div>
          <div className="strength-card">
            <h3>Food, Right on Site</h3>
            <p>Avantika Restaurant serves thalis and everyday favourites without you needing to step out.</p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "30px" }}>
        <div className="story">
          <div>
            <div className="eyebrow red">Our Story</div>
            <h2>Built Beside the Station</h2>
            <p className="body-copy">
              The hotel occupies a property built by Western Railway, positioned directly
              alongside the station it serves. It's now run by a private team focused on
              day-to-day hospitality — an in-house restaurant, round-the-clock front desk, and a
              mix of shared and private accommodation built for travellers on the move.
            </p>
            <p className="body-copy">
              This close relationship with the railway station itself is what shapes Hotel
              Avantika's identity: practical, accessible, and built for arrivals and departures at
              any hour.
            </p>
            <p className="todo-note">
              TODO: exact establishment year and further ownership history to be confirmed
              directly by the owner.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80"
            alt="Hotel corridor, representative image"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section" style={{ paddingTop: "10px" }}>
        <SectionHeading eyebrow="Philosophy" title="Our Hospitality Philosophy" />
        <p className="body-copy">
          We believe a good stay shouldn't depend on your budget. That's why the Dormitory sits at
          the heart of what we offer — clean, safe, shared accommodation for travellers who want
          convenience without the cost of a private room — alongside Fresh Rooms, Family Rooms and
          Personal Cottages for guests who want more space or privacy. Our front desk and
          restaurant stay active around the clock, because trains don't run on a 9-to-5 schedule,
          and neither do we.
        </p>
      </section>

      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="management">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=80"
            alt="Front desk area, representative image"
            loading="lazy"
          />
          <div>
            <div className="eyebrow red">Heritage</div>
            <h2>Our Connection to Ujjain</h2>
            <p className="body-copy">
              Ujjain is one of Hinduism's most sacred cities, home to the Mahakaleshwar
              Jyotirlinga — one of the twelve Jyotirlingas of Lord Shiva — along with Harsiddhi
              Temple, Mahakal Lok, and the ghats of the Shipra River. Guests consistently describe
              Hotel Avantika as being within easy walking distance of Mahakaleshwar and Harsiddhi
              Temple, making it a natural base for pilgrims arriving by train for darshan, as well
              as tourists exploring the city's temples and history.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

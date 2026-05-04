import Link from "next/link";
import ProductSpinner from "../components/ProductSpinner";
import ReviewsCarousel from "../components/ReviewsCarousel";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <h1 className="hero__title">
              One-Person Electrical &amp; Air Brake Trailer Diagnostics
            </h1>
            <p className="hero__subtitle">
              Verify trailer lighting, air supply, and brake activation quickly
              and accurately, without a second person in the cab, without
              moving the trailer, without software.
            </p>
            <p className="hero__intro">
              Trailer Dr. is a portable air brake and electrical trailer
              diagnostic tool built for technicians who need fast, reliable
              testing in shops, yards, and mobile roadside environments. The
              smallest and most powerful tool in its class, Trailer Dr. delivers
              30 amps of output in a 15.2 lb waterproof unit used by fleets,
              repair shops, and mobile service operators across the United
              States.
            </p>
            <div className="hero__actions">
              <Link href="/product" className="btn btn--accent">
                Get Started
              </Link>
              <Link href="/features" className="btn btn--outline-light">
                Features &amp; Specs
              </Link>
            </div>
          </div>
          <div className="hero__visual">
            <ProductSpinner />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="how-grid">
            <div className="how-content">
              <p className="section-label">How It Works</p>
              <h2 className="section-title">One Person. One Tool. Complete Testing.</h2>
              <ol className="how-steps">
                <li>
                  <span className="how-step__num">01</span>
                  <div>
                    <h3>Connect to the trailer</h3>
                    <p>
                      Plug into the trailer's 7-way connector. One person can
                      run the full test from the rear of the trailer, with the
                      remote.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="how-step__num">02</span>
                  <div>
                    <h3>Test lights, air, and brakes</h3>
                    <p>
                      Activate electrical functions, supply air, and trigger
                      brakes, all from where the problem actually is.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="how-step__num">03</span>
                  <div>
                    <h3>Confirm and clear</h3>
                    <p>
                      Verify repairs on the spot before the trailer returns to
                      service. Test once, confidently.
                    </p>
                  </div>
                </li>
              </ol>
              <Link href="/features" className="btn btn--primary">
                See All Capabilities
              </Link>
            </div>
            <div className="how-image-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/standard-battery-powered-remote.webp"
                alt="Technician using Trailer Dr. remote control at the rear of a trailer"
                className="how-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section
        className="section value-props-section"
        style={{ backgroundImage: `url(/images/trailer-dr-hero-1.jpeg)` }}
      >
        <div className="container">
          <div className="value-props">
            <div className="value-prop">
              <span className="value-prop__icon material-symbols-outlined" aria-hidden>settings_remote</span>
              <h3>One-Person Operation</h3>
              <p>
                Activate lights, air supply, and brakes from the rear of the
                trailer. No cab access, no second technician required.
              </p>
            </div>
            <div className="value-prop">
              <span className="value-prop__icon material-symbols-outlined" aria-hidden>shield</span>
              <h3>Waterproof &amp; Rugged</h3>
              <p>
                NEMA-rated polycarbonate enclosure built for cold, wet, dusty,
                and harsh field environments, from the shop floor to roadside.
              </p>
            </div>
            <div className="value-prop">
              <span className="value-prop__icon material-symbols-outlined" aria-hidden>bolt</span>
              <h3>Most Power in Its Class</h3>
              <p>
                30A output at 12.8 VDC, delivering 2/3rds more power than
                leading competitors in the most compact package available.
              </p>
            </div>
            <div className="value-prop">
              <span className="value-prop__icon material-symbols-outlined" aria-hidden>scale</span>
              <h3>Smallest &amp; Lightest</h3>
              <p>
                At just 15.2 lbs, Trailer Dr. is the most compact unit in its
                class. Carry it between trailers in any shop or yard. No
                permanent mounting required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="section section--dark stats-bar">
        <div className="container">
          <div className="stats">
            <div className="stat">
              <span className="stat__value">30A</span>
              <span className="stat__label">Most powerful in its class</span>
            </div>
            <div className="stat">
              <span className="stat__value">15.2 lbs</span>
              <span className="stat__label">Lightest in its class</span>
            </div>
            <div className="stat">
              <span className="stat__value">12×10×4"</span>
              <span className="stat__label">Smallest in its class</span>
            </div>
            <div className="stat">
              <span className="stat__value">1 Year</span>
              <span className="stat__label">Warranty with 48-hr repair turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* CVSA Callout */}
      {/* Stat source: CVSA / FMCSA, "2025 International Roadcheck Results," May 2025. https://cvsa.org/news/2025-roadcheck-results/ */}
      <section className="section section--muted">
        <div className="container cvsa-callout">
          <div className="cvsa-callout__stat">
            <span className="cvsa-callout__pct">18.1%</span>
            <p>of commercial vehicles failed 2025 DOT-standard roadside inspections.</p>
            <p className="cvsa-callout__sources">
              <a
                href="https://cvsa.org/news/2025-roadcheck-results/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CVSA 2025 Roadcheck Results
              </a>
              {" · "}
              <a
                href="https://www.thetruckersreport.com/news/brakes-top-2025-roadcheck-service-violations/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TruckersReport Analysis
              </a>
            </p>
          </div>
          <div className="cvsa-callout__body">
            <p className="section-label">Why It Matters</p>
            <h2 className="section-title">Catch Problems Before They Ground Your Fleet</h2>
            <p>
              Brake systems are the #1 cause of out-of-service failures (41%),
              and lighting defects are #3 (14%). Trailer Dr. is built to test
              both, so your crew can catch and confirm repairs before the
              trailer ever faces an inspection.
            </p>
            <Link href="/features" className="btn btn--primary">
              See How It Helps
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="container">
          <p className="section-label">Trusted by Professionals</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container cta">
          <h2 className="section-title">Ready to Keep Your Equipment Moving?</h2>
          <p className="section-subtitle">
            Schedule a demo and see why Trailer Dr. is the most compact,
            most powerful trailer diagnostic tool in its class.
          </p>
          <div className="cta__actions">
            <Link href="/product" className="btn btn--accent">
              Add to Cart
            </Link>
            <Link href="/contact" className="btn btn--outline-light">
              Get in Touch
            </Link>
            <Link href="/features" className="btn btn--outline-light">
              View Specs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;

import Link from "next/link";
import "./About.css";

function About() {
  return (
    <>
      {/* Hero */}
      <section className="section section--page-hero">
        <div className="container about-hero">
          <div className="about-hero__content">
            <p className="section-label">Our Story</p>
            <h1 className="section-title">
              Built by Experience. Designed for Real Work.
            </h1>
            <p className="section-subtitle">
              Trailer Dr. was founded by Bruce Theriault, an equipment
              professional whose career spans more than 30 years working
              hands-on with semi-trucks, trailers, and heavy equipment in the
              trucking and forestry industries.
            </p>
            <p>
              Trailer Dr. was built from firsthand experience maintaining
              equipment in demanding environments where downtime is expensive
              and reliability is critical. The goal from the beginning was to
              create a diagnostic tool that is durable, straightforward to use,
              and supported by people who stand behind it. Not a call center.
            </p>
          </div>

          {/* IMAGE PLACEHOLDER: Founder portrait of Bruce Theriault — ideally a candid
              shot in a shop or field environment alongside a trailer or heavy equipment.
              Natural and hands-on works better than a studio headshot. */}
          <div className="about-img-placeholder about-img-placeholder--portrait">
            <span className="material-symbols-outlined" aria-hidden="true">person</span>
            <p>Bruce Theriault, Founder</p>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="section section--dark about-stats-strip">
        <div className="container">
          <div className="about-stats">
            <div className="about-stat">
              <span className="about-stat__value">30+</span>
              <span className="about-stat__label">Years in trucking and forestry equipment</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">30A</span>
              <span className="about-stat__label">Most powerful in its class</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">1 Year</span>
              <span className="about-stat__label">Warranty on every unit</span>
            </div>
            <div className="about-stat">
              <span className="about-stat__value">48 hr</span>
              <span className="about-stat__label">Repair turnaround</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Approach */}
      <section className="section">
        <div className="container about-grid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/standard-battery-powered-remote.webp"
            alt="Trailer Dr. remote control tester in use at the rear of a trailer"
            className="about-photo"
          />
          <div className="about-bio">
            <p className="section-label">Philosophy</p>
            <h2 className="about-bio__heading">
              A Practical Approach to Trailer Diagnostics
            </h2>
            <p>
              Trailer Dr. focuses on the trailer systems that most often lead
              to inspection failures, downtime, and safety concerns. Rather
              than adding layers of software or unnecessary complexity, the
              product is designed to help technicians verify electrical and
              air brake performance quickly and confidently, right where
              problems occur.
            </p>
            <div className="about-pullquote">
              <p>
                The most compact and most powerful trailer diagnostic tool
                in its class: 30A output, 15.2 lbs, fully waterproof, and
                ready to work without apps, tablets, or Bluetooth pairing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for Conditions */}
      <section className="section section--muted">
        <div className="container">
          <p className="section-label">Built for the Field</p>
          <h2 className="section-title">
            Built for the Conditions You Actually Work In
          </h2>
          <p className="section-subtitle">
            Trailer Dr. is built to perform in real working environments
            across the United States: shops, fleet yards, and mobile
            roadside operations. Not controlled lab settings.
          </p>
          <div className="about-conditions-grid">
            <div className="about-condition-card">
              <span className="material-symbols-outlined about-condition-card__icon" aria-hidden="true">
                shield
              </span>
              <h3>Rugged Construction</h3>
              <p>
                Aluminum cabinet with waterproof NEMA-rated polycarbonate
                enclosure built to handle real field conditions.
              </p>
            </div>
            <div className="about-condition-card">
              <span className="material-symbols-outlined about-condition-card__icon" aria-hidden="true">
                scale
              </span>
              <h3>Compact and Easy to Move</h3>
              <p>
                At 15.2 lbs with a built-in handle, it moves easily
                between trailers in any shop or yard. Works with any
                115V outlet and air supply.
              </p>
            </div>
            <div className="about-condition-card">
              <span className="material-symbols-outlined about-condition-card__icon" aria-hidden="true">
                thermostat
              </span>
              <h3>All-Weather Operation</h3>
              <p>
                Reliable in cold, wet, dusty, and harsh conditions. Built
                for real environments, not controlled lab settings.
              </p>
            </div>
            <div className="about-condition-card">
              <span className="material-symbols-outlined about-condition-card__icon" aria-hidden="true">
                do_not_touch
              </span>
              <h3>No Software Required</h3>
              <p>
                No apps, tablets, or Bluetooth pairing. Plug in, connect,
                test. That is it.
              </p>
            </div>
          </div>
          <p className="about-industries">
            Used by fleets, repair shops, and mobile service operators across
            a wide range of industries nationwide, in shops, yards, roadside,
            and on service vehicles.
          </p>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="section">
        <div className="container">
          <p className="section-label">How We Compare</p>
          <h2 className="section-title">
            Smallest Unit. Most Power. No Compromises.
          </h2>
          <p className="section-subtitle">
            Competing trailer testers are bulkier, less powerful, or require
            software and vehicle mounting. Trailer Dr. was built to outperform
            them all in the conditions that actually matter.
          </p>
          <div className="about-differentiators">
            <div className="about-differentiator">
              <span className="about-differentiator__num">01</span>
              <div>
                <h3>2/3rds More Power</h3>
                <p>
                  30A output at 12.8 VDC. More power means more reliable
                  testing across a wider range of trailer configurations and
                  conditions.
                </p>
              </div>
            </div>
            <div className="about-differentiator">
              <span className="about-differentiator__num">02</span>
              <div>
                <h3>Smallest in Its Class</h3>
                <p>
                  12 x 10 x 4 in, 15.2 lbs, fully waterproof. Competitors
                  are bigger, heavier, and not rated for the elements.
                </p>
              </div>
            </div>
            <div className="about-differentiator">
              <span className="about-differentiator__num">03</span>
              <div>
                <h3>Total Flexibility</h3>
                <p>
                  Works stand-alone or mounted to a service vehicle.
                  Competitors that require vehicle mounting can't say the
                  same.
                </p>
              </div>
            </div>
            <div className="about-differentiator">
              <span className="about-differentiator__num">04</span>
              <div>
                <h3>No Software, Ever</h3>
                <p>
                  No apps, no subscriptions, no pairing. Optional
                  rechargeable remote with integrated work light adds
                  capability without complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty / Service */}
      <section className="section section--muted-solid">
        <div className="container about-warranty-grid">
          <div className="about-warranty-content">
            <p className="section-label">Support</p>
            <h2 className="section-title">Service That Reflects Accountability</h2>
            <p>
              Support and service are a core part of the product. Trailer Dr.
              is backed by a 1-year warranty with a 48-hour repair turnaround
              designed to reduce downtime and keep customers working.
            </p>
            <p>
              Customer support comes directly from the people who build and
              understand the product. The focus is on resolving issues quickly
              and standing behind the tool long after the sale.
            </p>
            <div className="about-warranty-badges">
              <div className="about-warranty-badge">
                <span className="material-symbols-outlined" aria-hidden="true">verified</span>
                <div>
                  <strong>1-Year Warranty</strong>
                  <p>Covers every unit</p>
                </div>
              </div>
              <div className="about-warranty-badge">
                <span className="material-symbols-outlined" aria-hidden="true">schedule</span>
                <div>
                  <strong>48-Hr Repair Turnaround</strong>
                  <p>Back in your hands fast</p>
                </div>
              </div>
              <div className="about-warranty-badge">
                <span className="material-symbols-outlined" aria-hidden="true">support_agent</span>
                <div>
                  <strong>Direct Support</strong>
                  <p>From the people who build it</p>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE PLACEHOLDER: Interior of the Fort Kent workshop, or Bruce at a
              workbench assembling or repairing a unit. Should convey hands-on
              craftsmanship and the direct, personal nature of their support. */}
          <div className="about-img-placeholder about-img-placeholder--landscape">
            <span className="material-symbols-outlined" aria-hidden="true">build</span>
            <p>Fort Kent, Maine</p>
          </div>
        </div>
      </section>

      {/* Continuous Improvement */}
      <section className="section">
        <div className="container about-improvement">
          <div className="about-improvement__content">
            <h2 className="section-title">
              Continuous Improvement Driven by Real Feedback
            </h2>
            <p className="section-subtitle">
              Trailer Dr. continues to evolve based on real-world use. Feedback
              from technicians, fleet operators, and service providers plays a
              direct role in refining the product.
            </p>
          </div>
          <div className="about-improvement__callout">
            <span className="material-symbols-outlined about-improvement__icon" aria-hidden="true">
              forum
            </span>
            <p>
              Suggestions and improvement ideas are welcomed. The goal is not
              just to sell a tool, but to keep making it better for the people
              who rely on it.
            </p>
            <Link href="/contact" className="btn btn--primary">
              Share Feedback
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container about-cta">
          <h2 className="section-title">
            Professional Trailer Diagnostics, Built to Last
          </h2>
          <p className="section-subtitle">
            Trailer Dr. provides a practical solution for diagnosing trailer
            lighting, air, and brake systems with a single, durable tool.
            Simplicity, reliability, and real-world performance. Built in
            Maine, used nationwide.
          </p>
          <Link href="/contact" className="btn btn--accent">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}

export default About;

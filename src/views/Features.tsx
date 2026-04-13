import Link from "next/link";
import { PayPalAddToCartButton } from "../components/PayPalCart";
import "./Features.css";

const specs = [
  { label: "Price", value: "$3,195, includes shipping within the USA" },
  { label: "Warranty", value: "1 Year" },
  { label: "Free Trial", value: "30 days (buyer covers return shipping)" },
  { label: "Output", value: "30 Amps @ 12.8 VDC, most powerful in its class" },
  { label: "External Power Input", value: "115 VAC" },
  { label: "Air Input", value: "125 lbs max air output (self-regulated)" },
  { label: "Connection", value: "7 Way Round Pin" },
  { label: "Controls", value: "Manual & Remote" },
  { label: "Remote Batteries", value: "A23 12V Alkaline (standard); optional rechargeable remote with work light +$99" },
  { label: "Weight", value: "15.2 lbs, lightest in its class" },
  { label: "Dimensions", value: "12 x 10 x 4 in (H x W x D), smallest in its class" },
  { label: "Materials", value: "NEMA 1/2/3/3R/3S/4/4X/6/6P/12/13 Polycarbonate" },
  { label: "Overload Protection", value: "Electronic with buzzer and indicator light" },
];

function Features() {
  return (
    <>
      {/* Hero */}
      <section className="section section--page-hero">
        <div className="container features-hero">
          <div className="features-hero__content">
            <p className="section-label">Features &amp; Specs</p>
            <h1 className="section-title">Electrical and Air Brake Diagnostic Tool</h1>
            <p className="section-subtitle">
              Trailer Dr. is designed to help technicians quickly verify
              trailer lighting, air supply, and brake activation from a
              single position at the rear of the trailer.
            </p>
            <p>
              Built for one-person operation, Trailer Dr. eliminates the need
              to climb into the cab or move the trailer during testing.
              Technicians can activate lights, supply air, and trigger brakes
              directly where problems occur, helping reduce missed faults,
              repeat inspections, and downtime.
            </p>
            <p>
              Used by fleets, repair shops, and mobile service operators
              across the United States. The most compact, most powerful, and
              most rugged package in its class.
            </p>
          </div>
          <div className="features-hero__visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/rechargable-remote-w-flashlight.webp"
              alt="Trailer Dr. rechargeable remote control with integrated work light"
              className="features-hero__image"
            />
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="section">
        <div className="container">
          <div className="features-capabilities">
            <div className="features-capabilities__image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/trailerdr-product-image.webp"
                alt="Trailer Dr. portable trailer diagnostic tool"
                className="features-product-image"
              />
            </div>
            <div className="features-capabilities__content">
              <p className="section-label">Key Capabilities</p>
              <h2 className="section-title">What Trailer Dr. Tests</h2>
              <ul className="capabilities-list">
                <li>Brake, turn, running, and marker lights</li>
                <li>Electrical connections and wiring faults</li>
                <li>
                  ABS fault code reading via industry-standard blink codes.
                  Works on all major trailer brands. No software, no
                  subscriptions, no proprietary dongles required.
                </li>
                <li>Air supply to the trailer (125 lb max, self-regulated)</li>
                <li>Air leaks</li>
                <li>Brake activation and air brake response</li>
                <li>One-person operation via manual controls or wireless remote</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built for the Field */}
      <section className="section section--muted">
        <div className="container">
          <p className="section-label">Built for the Field</p>
          <h2 className="section-title">Smallest Unit. Most Power. No Compromises.</h2>
          <p className="section-subtitle">
            Competing trailer testers sacrifice size for power or require
            vehicle mounting. Trailer Dr. does neither.
          </p>
          <div className="features-field-grid">
            <div className="features-field-card">
              <span className="material-symbols-outlined features-field-card__icon" aria-hidden="true">scale</span>
              <h3>Compact and Easy to Carry</h3>
              <p>15.2 lbs at 12 x 10 x 4 in. The smallest in its class. Works with any 115V outlet and air supply.</p>
            </div>
            <div className="features-field-card">
              <span className="material-symbols-outlined features-field-card__icon" aria-hidden="true">bolt</span>
              <h3>Most Powerful in Its Class</h3>
              <p>30A @ 12.8 VDC. 2/3rds more power than leading competitors.</p>
            </div>
            <div className="features-field-card">
              <span className="material-symbols-outlined features-field-card__icon" aria-hidden="true">shield</span>
              <h3>Fully Waterproof</h3>
              <p>NEMA-rated polycarbonate construction. Built for cold, wet, dusty, and harsh field environments.</p>
            </div>
            <div className="features-field-card">
              <span className="material-symbols-outlined features-field-card__icon" aria-hidden="true">electrical_services</span>
              <h3>Standard Connection</h3>
              <p>7-way round pin connector. Plugs directly into any standard semi-trailer.</p>
            </div>
            <div className="features-field-card">
              <span className="material-symbols-outlined features-field-card__icon" aria-hidden="true">notifications_active</span>
              <h3>Overload Protection</h3>
              <p>Electronic overload protection with audible buzzer and indicator light. Automatically alerts if the circuit is overloaded, protecting the unit and the trailer.</p>
            </div>
            <div className="features-field-card">
              <span className="material-symbols-outlined features-field-card__icon" aria-hidden="true">cell_tower</span>
              <h3>Remote Confirmation Buzzer</h3>
              <p>When you press the remote at the rear of the trailer, an audible signal confirms the command was received. No guessing whether it registered.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Remote */}
      <section className="section">
        <div className="container">
          <div className="features-remote">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/trailer-dr-rechargeable-remote-hero.jpeg"
              alt="Trailer Dr. optional rechargeable remote with integrated work light"
              className="features-remote__image"
            />
            <div className="features-remote__content">
              <p className="section-label">Optional Upgrade</p>
              <h2 className="section-title">Rechargeable Remote with Work Light</h2>
              <p>
                For technicians working in low-visibility conditions, the
                optional rechargeable remote adds an integrated work light,
                keeping both hands free and both eyes on the trailer.
              </p>
              <p className="features-remote__price">+$99</p>
              <Link href="/contact" className="btn btn--primary">
                Ask About This Upgrade
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Works */}
      <section className="section section--muted-solid">
        <div className="container">
          <p className="section-label">Deployment</p>
          <h2 className="section-title">Where Trailer Dr. Works</h2>
          <p className="section-subtitle">
            Most trailer testers are designed for one environment. Trailer Dr.
            works in all of them, including mounted to a service vehicle for
            fully mobile diagnostics.
          </p>
          <div className="features-where-grid">
            <div className="features-where-item">
              <h3>Shop Floor</h3>
              <p>
                Plug into shop power and air supply. Diagnose trailer lighting,
                brakes, and air systems from the rear. No cab access, no
                moving the trailer.
              </p>
            </div>
            <div className="features-where-item">
              <h3>Fleet Yard</h3>
              <p>
                Run from a nearby power and air source. One technician can
                work independently through an entire staged fleet.
              </p>
            </div>
            <div className="features-where-item">
              <h3>Mounted to a Service Vehicle</h3>
              <p>
                Secure Trailer Dr. to your service truck. With onboard
                generator and air compressor, you have a complete mobile
                diagnostic station anywhere you drive.
              </p>
            </div>
            <div className="features-where-item">
              <h3>Field Calls &amp; Roadside</h3>
              <p>
                With a service vehicle supplying 115V power and air, Trailer
                Dr. handles field breakdowns and roadside calls without a shop
                in sight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specs Table */}
      <section className="section section--dark">
        <div className="container">
          <p className="section-label">Technical Specifications</p>
          <h2 className="section-title">Built to Perform</h2>
          <div className="specs-table">
            {specs.map((s) => (
              <div className="spec-row" key={s.label}>
                <span className="spec-label">{s.label}</span>
                <span className="spec-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="section">
        <div className="container features-price">
          <div className="features-price__content">
            <h2 className="section-title">Price &amp; Value</h2>
            <p className="section-subtitle">
              Professional electrical and air brake diagnostics at a fraction
              of the cost of full-scale inspection systems.
            </p>
            <ul className="features-price__details">
              <li><strong>$3,195</strong>, free shipping within the USA</li>
              <li><strong>1-year warranty</strong> with 48-hr repair turnaround</li>
              <li><strong>Free 30-day trial</strong> (buyer covers return shipping)</li>
            </ul>
          </div>
          <div className="features-price__actions">
            <PayPalAddToCartButton />
            <Link href="/contact" className="btn btn--outline">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container features-cta">
          <h2 className="section-title">Have Questions About the Specs?</h2>
          <p className="section-subtitle">
            Reach out to speak directly with the people who build the product.
          </p>
          <Link href="/contact" className="btn btn--accent">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default Features;

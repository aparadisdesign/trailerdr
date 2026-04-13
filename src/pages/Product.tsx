import { useState } from "react";
import { Link } from "react-router-dom";
import imgFront from "../assets/images/trailerdr-product-image.webp";
import imgSideLeft from "../assets/images/product-spinner-v2/4J0A2941.webp";
import imgBack from "../assets/images/product-spinner-v2/4J0A2949.webp";
import imgSideRight from "../assets/images/product-spinner-v2/4J0A2957.webp";
import imgStandardRemote from "../assets/images/standard-battery-powered-remote.webp";
import imgRechargeableRemote from "../assets/images/rechargable-remote-w-flashlight.webp";
import { PayPalAddToCartButton } from "../components/PayPalCart";
import "./Product.css";

const gallery = [
  { src: imgFront,             alt: "Trailer Dr. diagnostic tool — Front View" },
  { src: imgSideLeft,          alt: "Trailer Dr. diagnostic tool — Left Side View" },
  { src: imgBack,              alt: "Trailer Dr. diagnostic tool — Back View" },
  { src: imgSideRight,         alt: "Trailer Dr. diagnostic tool — Right Side View" },
  { src: imgStandardRemote,    alt: "Standard remote (included)" },
  { src: imgRechargeableRemote, alt: "Optional rechargeable remote with work light +$99" },
];

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

function Product() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      {/* Hero / Purchase */}
      <section className="section section--product-hero product-page">
        <div className="container product-page__inner">
          <div className="product-page__info">
            <p className="section-label">Trailer Dr.</p>
            <h1 className="product-page__title">
              Electrical &amp; Air Brake Trailer Diagnostic Tool
            </h1>
            <p className="product-page__description">
              Compact, handle-equipped semi-trailer diagnostic tool for
              one-person operation. Verify trailer lighting, air supply, and
              brake activation from the rear of the trailer. No second person
              or cab access needed.
            </p>
            <ul className="product-page__highlights">
              <li>Remote control of lights, air supply, and brakes</li>
              <li>Waterproof, rugged NEMA-rated enclosure</li>
              <li>15.2 lbs with built-in handle. Move between trailers in any shop or yard.</li>
              <li>1-year warranty · 30-day trial (buyer covers return shipping)</li>
            </ul>

            <div className="product-page__addon">
              <p className="product-page__addon-label">Optional Add-On</p>
              <p>
                Rechargeable remote with integrated work light:{" "}
                <strong>+$99</strong>
              </p>
            </div>

            <div className="product-page__meta">
              <div className="product-page__meta-item">
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  verified
                </span>
                <div>
                  <strong>1-Year Warranty</strong>
                  <p>48-hr repair turnaround. Support from the builders.</p>
                </div>
              </div>
              <div className="product-page__meta-item">
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  schedule
                </span>
                <div>
                  <strong>Free 30-Day Trial</strong>
                  <p>Buyer covers return shipping if returned.</p>
                </div>
              </div>
              <div className="product-page__meta-item">
                <span
                  className="material-symbols-outlined"
                  aria-hidden="true"
                >
                  flag
                </span>
                <div>
                  <strong>Made in the USA</strong>
                  <p>Made in the USA.</p>
                </div>
              </div>
            </div>

            <div className="product-page__specs-link-container">
              <p className="product-page__specs-link-label">Not sure about it yet? See the full specifications and capabilities or schedule a demo and see it in action.</p>
              <div className="product-page__specs-link-buttons">
                <Link to="/features" className="btn btn--outline">
                  View Full Specs
                </Link>
                <Link to="/contact?message=Hi%2C%0A%0AI+would+like+to+schedule+a+demo+of+your+Trailer+Dr.+Trailer+Tester..." className="btn btn--accent">
                  Schedule a Demo
                </Link>
              </div>
            </div>
          </div>

          <div className="product-page__content">
            <div className="product-page__visual">
              <img
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].alt}
                className="product-page__image"
              />
              <div className="product-page__thumbs">
                {gallery.map((item, i) => (
                  <button
                    key={i}
                    className={`product-page__thumb${i === activeIndex ? " product-page__thumb--active" : ""}`}
                    onClick={() => setActiveIndex(i)}
                    aria-label={item.alt}
                  >
                    <img src={item.src} alt={item.alt} />
                  </button>
                ))}
              </div>
            </div>
            <div className="product-page__purchase">
              <div className="product-page__add-to-cart">
                <PayPalAddToCartButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Works */}
      <section className="section">
        <div className="container">
          <p className="section-label">Deployment</p>
          <h2 className="section-title">Works Wherever You Work</h2>
          <p className="section-subtitle">
            Trailer Dr. brings the test to the trailer, not the other way
            around. It performs in every environment technicians actually work in.
          </p>
          <div className="product-where-grid">
            <div className="product-where-card">
              <span
                className="material-symbols-outlined product-where-card__icon"
                aria-hidden="true"
              >
                warehouse
              </span>
              <h3>Shop Floor</h3>
              <p>
                Plug into shore power and run full electrical and air brake
                diagnostics without moving the trailer or calling someone to
                the cab.
              </p>
            </div>
            <div className="product-where-card">
              <span
                className="material-symbols-outlined product-where-card__icon"
                aria-hidden="true"
              >
                grid_view
              </span>
              <h3>Fleet Yard</h3>
              <p>
                Walk the yard and test trailers in line. One technician can
                work through an entire fleet independently, with no vehicle access
                required.
              </p>
            </div>
            <div className="product-where-card">
              <span
                className="material-symbols-outlined product-where-card__icon"
                aria-hidden="true"
              >
                add_road
              </span>
              <h3>Field Calls &amp; Roadside</h3>
              <p>
                With a service vehicle providing 115V power and air, Trailer
                Dr. handles breakdowns and field calls without needing a shop.
              </p>
            </div>
            <div className="product-where-card">
              <span
                className="material-symbols-outlined product-where-card__icon"
                aria-hidden="true"
              >
                fire_truck
              </span>
              <h3>Mounted to a Service Vehicle</h3>
              <p>
                Mount Trailer Dr. to your service truck. With vehicle air and
                power available, you have a fully capable mobile diagnostic
                station. No shop required, anywhere you drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Comparison */}
      <section className="section section--muted">
        <div className="container">
          <p className="section-label">How We Compare</p>
          <h2 className="section-title">
            More Compact. More Powerful. More Flexible.
          </h2>
          <p className="section-subtitle">
            Most trailer testers limit what you can do from the remote and
            require a permanent vehicle mount. Trailer Dr. gives you full
            control from the rear of the trailer, in any environment, with no
            truck required.
          </p>
          <div className="product-compare-table">
            {/* Header */}
            <div className="product-compare-table__header">
              <div className="product-compare-table__feature-col" />
              <div className="product-compare-table__col-label product-compare-table__col-label--ours">
                Trailer Dr.
              </div>
              <div className="product-compare-table__col-label product-compare-table__col-label--theirs">
                Typical Trailer Testers
              </div>
            </div>
            {/* Rows */}
            {[
              {
                feature: "Remote control",
                ours: "9-channel rechargeable remote. Every function at your fingertips from the rear of the trailer.",
                theirs: "Limited remote channels. Not all functions accessible without returning to the box.",
                win: true,
              },
              {
                feature: "Full remote operation",
                ours: "All 9 functions operable from the remote. Never walk back to the box.",
                theirs: "Requires manual interaction at the box to switch between test functions.",
                win: true,
              },
              {
                feature: "Remote power",
                ours: "Rechargeable. No batteries to replace.",
                theirs: "Disposable battery remotes that need replacing in the field.",
                win: true,
              },
              {
                feature: "Vehicle mounting",
                ours: "Not required. Use anywhere with 115V power and an air supply.",
                theirs: "Designed for permanent mounting in a service truck.",
                win: true,
              },
              {
                feature: "Size & weight",
                ours: "12 × 10 × 4 in, 15.2 lbs. Carry it between trailers by hand.",
                theirs: "Larger, heavier units built for fixed shop or vehicle installation.",
                win: true,
              },
              {
                feature: "Weatherproof",
                ours: "Fully waterproof, NEMA-rated polycarbonate enclosure.",
                theirs: "Standard enclosures with no weatherproof rating.",
                win: true,
              },
              {
                feature: "ABS fault code reading",
                ours: "Industry-standard blink codes. Works on all major trailer brands. No software or dongle required.",
                theirs: "Requires proprietary software or a separate diagnostic tool.",
                win: true,
              },
            ].map((row) => (
              <div className="product-compare-table__row" key={row.feature}>
                <div className="product-compare-table__feature">{row.feature}</div>
                <div className="product-compare-table__cell product-compare-table__cell--ours">
                  <span className="material-symbols-outlined product-compare-table__icon product-compare-table__icon--win" aria-hidden="true">
                    check_circle
                  </span>
                  {row.ours}
                </div>
                <div className="product-compare-table__cell product-compare-table__cell--theirs">
                  <span className="material-symbols-outlined product-compare-table__icon product-compare-table__icon--lose" aria-hidden="true">
                    cancel
                  </span>
                  {row.theirs}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Summary */}
      <section className="section">
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">What Trailer Dr. Tests</h2>
          <ul className="product-capabilities">
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
          </ul>
          <Link to="/features" className="btn btn--primary product-capabilities__link">
            View Full Specs &amp; Capabilities
          </Link>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section section--muted-solid">
        <div className="container">
          <p className="section-label">Technical Specifications</p>
          <h2 className="section-title">Built to Perform</h2>
          <div className="specs-table specs-table--light">
            {specs.map((s) => (
              <div className="spec-row" key={s.label}>
                <span className="spec-label">{s.label}</span>
                <span className="spec-value">{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section section--dark">
        <div className="container product-cta">
          <h2 className="section-title">Ready to Order or Have Questions?</h2>
          <p className="section-subtitle">
            Speak directly with the people who build Trailer Dr., or try it
            free for 30 days.
          </p>
          <div className="product-cta__actions">
            <Link to="/contact" className="btn btn--accent">
              Schedule a Demo
            </Link>
            <Link to="/contact" className="btn btn--outline-light">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;

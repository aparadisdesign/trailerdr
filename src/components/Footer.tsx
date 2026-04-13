import Link from "next/link";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link href="/" className="footer__logo" aria-label="Trailer Dr. Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/trailer-dr-logo-white.png"
              alt="Trailer Dr."
              className="footer__logo-img"
            />
          </Link>
          <p className="footer__tagline">
            Portable electrical and air brake trailer diagnostic tool for
            fleets, repair shops, and mobile service operators across the USA.
          </p>
        </div>

        <div className="footer__links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/features">Features &amp; Specs</Link>
          <Link href="/product">Buy</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footer__contact">
          <h4>Get in Touch</h4>
          <a href="mailto:bruce.trailerdr@gmail.com">bruce.trailerdr@gmail.com</a>
          <a href="tel:+12072314967">(207) 231-4967</a>
          <p>Fort Kent, Maine</p>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Trailer Dr. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

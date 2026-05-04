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
          <div className="footer__socials">
            <a
              href="https://www.youtube.com/@thetrailerdr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trailer Dr. on YouTube"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.7 15.5V8.5l6.3 3.5-6.3 3.5z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100068934459035"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Trailer Dr. on Facebook"
              className="footer__social-link"
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z" />
              </svg>
            </a>
          </div>
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
          <p>Fort Kent, Maine</p>
          <a href="tel:+12072314967">(207) 231-4967</a>
          <a href="mailto:bruce.trailerdr@gmail.com">Email Bruce directly: bruce.trailerdr@gmail.com</a>

        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Trailer Dr. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

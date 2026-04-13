import { Link } from "react-router-dom";
import logoWhite from "../assets/images/trailer-dr-logo-white.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo" aria-label="Trailer Dr. Home">
            <img src={logoWhite} alt="Trailer Dr." className="footer__logo-img" />
          </Link>
          <p className="footer__tagline">
            Portable electrical and air brake trailer diagnostic tool for
            fleets, repair shops, and mobile service operators across the USA.
          </p>
        </div>

        <div className="footer__links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features &amp; Specs</Link>
          <Link to="/product">Buy</Link>
          <Link to="/contact">Contact</Link>
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

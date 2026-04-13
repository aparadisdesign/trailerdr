import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import logoWhite from "../assets/images/trailer-dr-logo-white.png";
import logoBlack from "../assets/images/trailer-dr-logo-black.png";
import { PayPalCartButton } from "./PayPalCart";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const lightHero = pathname === "/product";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="site-header">
      <div className="promo-bar" role="region" aria-label="Purchase offer">
        <div className="promo-bar__inner">
          <p className="promo-bar__text">
            <strong>30-day trial</strong>
            <span className="promo-bar__sep" aria-hidden="true">
              {" "}
              ·{" "}
            </span>
            Money-back guarantee if you are not satisfied.{" "}
            <Link to="/product" className="promo-bar__link">
              Learn how Trailer Dr. works.
            </Link>
          </p>
        </div>
      </div>
      <header
        className={`header${scrolled ? " header--scrolled" : ""}${lightHero && !scrolled ? " header--light" : ""}`}
      >
        <div className="header__inner">
          <Link to="/" className="header__logo" aria-label="Trailer Dr. Home">
            <img
              src={scrolled || lightHero ? logoBlack : logoWhite}
              alt="Trailer Dr."
              className="header__logo-img"
            />
          </Link>

          <button
            className={`header__toggle ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/features" onClick={() => setMenuOpen(false)}>
              Features &amp; Specs
            </NavLink>
            <NavLink to="/product" onClick={() => setMenuOpen(false)}>
              Buy
            </NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </nav>

          <div className="header__cart">
            <PayPalCartButton />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

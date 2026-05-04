"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PayPalCartButton } from "./PayPalCart";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const lightHero = pathname === "/product";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc =
    scrolled || lightHero
      ? "/images/trailer-dr-logo-black.png"
      : "/images/trailer-dr-logo-white.png";

  const navLink = (href: string, label: string, end = false) => {
    const isActive = end ? pathname === href : (pathname?.startsWith(href) ?? false);
    return (
      <Link
        href={href}
        onClick={() => setMenuOpen(false)}
        aria-current={isActive ? "page" : undefined}
        className={isActive ? "active" : undefined}
      >
        {label}
      </Link>
    );
  };

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
            <Link href="/product" className="promo-bar__link">
              Learn how Trailer Dr. works.
            </Link>
          </p>
        </div>
      </div>
      <header
        className={`header${scrolled ? " header--scrolled" : ""}${lightHero && !scrolled ? " header--light" : ""}`}
      >
        <div className="header__inner">
          <Link href="/" className="header__logo" aria-label="Trailer Dr. Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} alt="Trailer Dr." className="header__logo-img" />
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
            {navLink("/", "Home", true)}
            {navLink("/about", "About")}
            {navLink("/features", "Features & Specs")}
            {navLink("/product", "Buy")}
            {navLink("/contact", "Contact")}
          </nav>

          <a
            href="tel:+12072314967"
            className="header__phone"
            aria-label="Call (207) 231-4967"
          >
            <span className="material-symbols-outlined" aria-hidden="true">call</span>
            <span className="header__phone-tooltip">(207) 231-4967</span>
          </a>

          <div className="header__cart">
            <PayPalCartButton />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

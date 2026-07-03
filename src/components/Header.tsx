"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PayPalCartButton } from "./PayPalCart";
import "./Header.css";

const ABOUT_DROPDOWN_PATHS = ["/about", "/resources", "/faq"];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const pathname = usePathname();
  const lightHero = pathname === "/product";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setAboutOpen(false);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!aboutOpen) return;
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAboutOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAboutOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [aboutOpen]);

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

            <div
              className={`header__dropdown${ABOUT_DROPDOWN_PATHS.some((p) => pathname?.startsWith(p)) ? " active" : ""}${aboutOpen ? " header__dropdown--open" : ""}`}
              ref={dropdownRef}
            >
              <span className="header__dropdown-row">
                <Link
                  href="/about"
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === "/about" ? "page" : undefined}
                >
                  About
                </Link>
                <button
                  type="button"
                  className="header__dropdown-toggle"
                  aria-expanded={aboutOpen}
                  aria-label="Toggle About menu"
                  onClick={() => setAboutOpen((open) => !open)}
                >
                  <span className="header__dropdown-caret" aria-hidden="true" />
                </button>
              </span>
              <div className="header__submenu">
                {navLink("/resources", "Resources")}
                {navLink("/faq", "FAQs")}
              </div>
            </div>

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

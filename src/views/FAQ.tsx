"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { faqSections, slugify, slugifySection } from "../data/faqData";
import "./FAQ.css";

function formatQuestionCount(count: number): string {
  return `${count} question${count === 1 ? "" : "s"}`;
}

function FAQ() {
  const sectionIds = faqSections.map((section) => slugifySection(section.title));
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const ids = faqSections.map((section) => slugifySection(section.title));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.15, 0.35, 0.6],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function handleNavClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) {
    event.preventDefault();
    const target = document.getElementById(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveId(sectionId);
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="section section--page-hero">
        <div className="container faq-hero">
          <p className="section-label">Support</p>
          <h1 className="section-title">Frequently Asked Questions</h1>
          <p className="section-subtitle">
            Everything to know about how Trailer Dr. works, what it tests,
            what it costs, and how it compares to other portable trailer
            testers.
          </p>
          <p>
            Can&rsquo;t find an answer here?{" "}
            <Link href="/contact">Contact us directly</Link>.
          </p>
        </div>
      </section>

      {/* Topics + content */}
      <section className="section section--muted-solid faq-main">
        <div className="container faq-layout">
          <nav className="faq-sidebar" aria-label="FAQ topics">
            <p className="faq-sidebar-label">Jump to</p>
            <ul>
              {faqSections.map((section) => {
                const sectionId = slugifySection(section.title);

                return (
                  <li key={sectionId}>
                    <a
                      href={`#${sectionId}`}
                      className={`faq-nav-link${activeId === sectionId ? " is-active" : ""}`}
                      aria-current={activeId === sectionId ? "location" : undefined}
                      onClick={(event) => handleNavClick(event, sectionId)}
                    >
                      <span
                        className="faq-nav-icon material-symbols-outlined"
                        aria-hidden="true"
                      >
                        {section.icon}
                      </span>
                      {section.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="faq-content">
            {faqSections.map((section) => {
              const sectionId = slugifySection(section.title);
              const headingId = `${sectionId}-heading`;

              return (
                <section
                  key={sectionId}
                  id={sectionId}
                  className="faq-group"
                  aria-labelledby={headingId}
                >
                  <div className="faq-group-header">
                    <span
                      className="faq-group-icon material-symbols-outlined"
                      aria-hidden="true"
                    >
                      {section.icon}
                    </span>
                    <h2 id={headingId} className="faq-group-title">
                      {section.title}
                    </h2>
                    <span className="faq-question-count">
                      {formatQuestionCount(section.items.length)}
                    </span>
                  </div>

                  <div className="faq-questions">
                    {section.items.map((item) => (
                      <div
                        key={item.question}
                        id={slugify(item.question)}
                        className="faq-question-item"
                      >
                        <h3 className="faq-question-text">{item.question}</h3>
                        <p className="faq-answer-text">{item.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark">
        <div className="container faq-cta">
          <h2 className="section-title">Still Have Questions?</h2>
          <p className="section-subtitle">
            Talk directly to the people who build Trailer Dr.
          </p>
          <Link href="/contact" className="btn btn--accent">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

export default FAQ;

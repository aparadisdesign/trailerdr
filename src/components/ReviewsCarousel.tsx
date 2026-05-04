"use client";
import { useRef } from "react";

const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/place/Trailer+Dr./@47.2456272,-68.5801316,17z/data=!4m8!3m7!1s0x4cbc51c081c63881:0x9760e7e967287ae1!8m2!3d47.2456272!4d-68.5775567!9m1!1b1!16s%2Fg%2F11ry610_lr?entry=ttu&g_ep=EgoyMDI2MDQyOS4wIKXMDSoASAFQAw%3D%3D";

const REVIEWS = [
  {
    text: "We run 12,200 trailers a year using his product. We are very happy with his product and customer service.",
    author: "Jim, Falcon Transportation",
  },
  {
    text: "Excellent quality trailer light and ABS tester. Rugged unit can handle just about anything and perform. An essential for any shop.",
    author: "Jerrold Warne",
  },
  {
    text: "This product allows for very efficient diagnosing of air brake issues and electrical problems. Saves our employees time and frustration. It's the only one-man diagnostic trailer tool I'd recommend.",
    author: "Steve Theriault, TNT Road Company",
  },
  {
    text: "Great purchase!! User friendly and saves time. Best purchase for trailer maintenance available.",
    author: "GBD Farms",
  },
  {
    text: "Great product, great for one man repairs and test on trailers. Remote controlled from under the trailer, back of trailer, or on top. Great for wiring failures.",
    author: "Jeff Blanchette",
  },
  {
    text: "Excellent tester! Very reliable and easy to use. Time saving device.",
    author: "D D",
  },
  {
    text: "Works very well. Had it for years, no issues. Would recommend to others.",
    author: "Jr Theriault",
  },
  {
    text: "Great product makes working on a trailer very efficient!",
    author: "Nick Theriault",
  },
  {
    text: "Use it everyday. Works awesome.",
    author: "Troy",
  },
];

export default function ReviewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".review");
    if (!card) return;
    const gap = parseFloat(getComputedStyle(track).gap) || 32;
    track.scrollBy({ left: dir * (card.offsetWidth + gap), behavior: "smooth" });
  };

  return (
    <div className="reviews-carousel">
      <div className="reviews-track" ref={trackRef}>
        {REVIEWS.map((r, i) => (
          <div key={i} className="review">
            <div className="review__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="review__text">&ldquo;{r.text}&rdquo;</p>
            <p className="review__author">{r.author}</p>
          </div>
        ))}
      </div>
      <div className="reviews-footer">
        <div className="reviews-controls">
          <button
            className="reviews-btn"
            onClick={() => scroll(-1)}
            aria-label="Previous review"
          >
            &#8592;
          </button>
          <button
            className="reviews-btn"
            onClick={() => scroll(1)}
            aria-label="Next review"
          >
            &#8594;
          </button>
        </div>
        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="reviews-google-link"
        >
          <svg
            className="reviews-google-icon"
            viewBox="0 0 48 48"
            width="18"
            height="18"
            aria-hidden="true"
          >
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.95 2.29-8.16 2.29-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
          </svg>
          View all reviews on Google
        </a>
      </div>
    </div>
  );
}

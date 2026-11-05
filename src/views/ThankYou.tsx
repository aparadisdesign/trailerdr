"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import VideoEmbed from "../components/VideoEmbed";
import { trackEvent } from "../lib/gtag";
import "./ThankYou.css";

const DEFAULT_ORDER_VALUE = 3195;
const TRACKED_KEY = "td_purchase_tracked";

const HOW_TO_VIDEOS = [
  {
    youtubeId: "zOUsDC3MOQU",
    title: "How to Hook Up Trailer Dr.",
    embedTitle:
      "How to Hook Up Trailer Dr. to a Semi-Trailer (7-Way Connector, Step by Step)",
    description:
      "Connect the 7-way round pin connector, hang the unit from the trailer's gladhand couplings, and get air and power running before you test.",
  },
  {
    youtubeId: "60ONWkng59A",
    title: "How to Operate Trailer Dr.",
    embedTitle:
      "How to Operate Trailer Dr.: Testing Lights, Air, and Brakes Step by Step",
    description:
      "Activate lights, read ABS blink codes, supply air, and trigger brake activation, using the manual controls or the wireless remote.",
  },
];

/**
 * PayPal auto-returns buyers here after a completed cart checkout
 * (set under PayPal > Payment Links and Buttons > Cart buttons > Auto-return URL).
 * Fires a GA4 `purchase` event once per transaction so Google Ads can count sales.
 * PayPal may append tx (transaction id) and amt (amount); fall back when absent.
 */
export default function ThankYou() {
  const params = useSearchParams();

  useEffect(() => {
    const tx = params.get("tx") || params.get("txn_id") || "";
    const amtRaw = params.get("amt") || params.get("mc_gross") || "";
    const amt = Number.parseFloat(amtRaw);
    const value = Number.isFinite(amt) && amt > 0 ? amt : DEFAULT_ORDER_VALUE;
    const transactionId = tx || `td-${Date.now()}`;

    // Don't double-count a reload or back-button revisit in the same browser.
    try {
      const seen = window.sessionStorage.getItem(TRACKED_KEY);
      if (seen && (!tx || seen === tx)) return;
      window.sessionStorage.setItem(TRACKED_KEY, tx || "1");
    } catch {
      // storage unavailable: still record the purchase
    }

    trackEvent("purchase", {
      transaction_id: transactionId,
      currency: "USD",
      value,
    });
  }, [params]);

  return (
    <div className="thank-you">
      <section className="section section--page-hero">
        <div className="container thank-you-hero">
          <p className="section-label">Order Confirmed</p>
          <h1 className="section-title">Thank You for Your Order</h1>
          <p className="section-subtitle">
            Your payment went through and your order is in. While you wait
            for your Trailer Dr. to ship, review the walkthroughs below so
            you know how to use it when the box arrives.
          </p>
          <p className="thank-you-hero__contact">
            PayPal will email you a receipt. Bruce will be in touch about
            shipping. Call{" "}
            <a href="tel:+12072314967">(207) 231-4967</a> or email{" "}
            <a href="mailto:bruce.trailerdr@gmail.com">
              bruce.trailerdr@gmail.com
            </a>{" "}
            with questions about your order or getting set up.
          </p>
        </div>
      </section>

      <section className="section section--muted thank-you-learn">
        <div className="container">
          <p className="section-label">Before It Ships</p>
          <h2 className="section-title">How to Use Trailer Dr.</h2>
          <p className="section-subtitle">
            Two short videos on connecting the unit and running a full
            electrical and air brake test.
          </p>
          <div className="thank-you-videos">
            {HOW_TO_VIDEOS.map((video) => (
              <article className="thank-you-video" key={video.youtubeId}>
                <VideoEmbed
                  youtubeId={video.youtubeId}
                  title={video.embedTitle}
                />
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </article>
            ))}
          </div>
          <p className="thank-you-more">
            <Link href="/faq">
              Read the FAQs
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

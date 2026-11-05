"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { trackEvent } from "../lib/gtag";

const DEFAULT_ORDER_VALUE = 3195;
const TRACKED_KEY = "td_purchase_tracked";

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
    <section className="section section--page-hero">
      <div className="container">
        <h1 className="section-title">Thank You for Your Order</h1>
        <p className="section-subtitle">
          Your payment went through and your order is in.
        </p>
        <p>
          PayPal will email you a receipt. Bruce will be in touch about
          shipping, and you can reach him any time with questions about your
          order or getting set up.
        </p>
        <p>
          Call <a href="tel:+12072314967">(207) 231-4967</a> or email{" "}
          <a href="mailto:bruce.trailerdr@gmail.com">bruce.trailerdr@gmail.com</a>.
        </p>
        <p>
          <a className="btn btn--primary" href="/faq">
            Read the FAQs
          </a>
        </p>
      </div>
    </section>
  );
}

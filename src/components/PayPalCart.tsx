"use client";

import { createElement, useEffect, useRef } from "react";
import { trackEvent } from "../lib/gtag";

declare global {
  interface Window {
    cartPaypal?: {
      Cart: (opts: { id: string }) => void;
      AddToCart: (opts: { id: string }) => void;
    };
  }
}

/** Trailer Dr. diagnostic unit — shared PayPal cart product */
export const PAYPAL_UNIT_PRODUCT_ID = "WFNZ67AZUTRHY";
/** Standalone extra/replacement rechargeable remote ($130; +$99 upgrade is a unit checkout option) */
export const PAYPAL_REMOTE_PRODUCT_ID = "PBRRKVWHV5LQ8";

function usePayPalInit(initFn: () => void) {
  const initRef = useRef(false);
  const fnRef = useRef(initFn);

  useEffect(() => {
    fnRef.current = initFn;
    if (initRef.current) return;
    const runInit = () => {
      fnRef.current();
      initRef.current = true;
    };
    const tryInit = () => {
      if (typeof window.cartPaypal === "undefined") return;
      clearInterval(id);
      setTimeout(runInit, 0);
    };
    const id = setInterval(tryInit, 200);
    tryInit();
    return () => clearInterval(id);
  }, [initFn]);
}

export function PayPalCartButton() {
  usePayPalInit(() => {
    window.cartPaypal?.Cart({ id: "pp-view-cart" });
  });

  return (
    <div className="paypal-cart-wrap">
      {createElement("paypal-cart-button", { "data-id": "pp-view-cart" })}
    </div>
  );
}

type PayPalAddToCartButtonProps = {
  productId?: string;
  value?: number;
};

export function PayPalAddToCartButton({
  productId = PAYPAL_UNIT_PRODUCT_ID,
  value = 3195,
}: PayPalAddToCartButtonProps) {
  usePayPalInit(() => {
    window.cartPaypal?.AddToCart({ id: productId });
  });

  return (
    <div
      className="paypal-add-wrap"
      onClickCapture={() => trackEvent("add_to_cart", { currency: "USD", value })}
    >
      {createElement("paypal-add-to-cart-button", { "data-id": productId })}
    </div>
  );
}

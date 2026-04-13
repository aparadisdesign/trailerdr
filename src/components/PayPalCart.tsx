import { createElement, useEffect, useRef } from "react";

declare global {
  interface Window {
    cartPaypal?: {
      Cart: (opts: { id: string }) => void;
      AddToCart: (opts: { id: string }) => void;
    };
  }
}

const ADD_TO_CART_PRODUCT_ID = "WFNZ67AZUTRHY";

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

export function PayPalAddToCartButton() {
  usePayPalInit(() => {
    window.cartPaypal?.AddToCart({ id: ADD_TO_CART_PRODUCT_ID });
  });

  return (
    <div className="paypal-add-wrap">
      {createElement("paypal-add-to-cart-button", { "data-id": ADD_TO_CART_PRODUCT_ID })}
    </div>
  );
}

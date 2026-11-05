import type { Metadata } from "next";
import { Suspense } from "react";
import ThankYou from "../../views/ThankYou";

export const metadata: Metadata = {
  title: "Thank You for Your Order",
  description: "Your Trailer Dr. order has been received.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://thetrailerdr.com/thank-you-page",
  },
};

export default function ThankYouPage() {
  return (
    <Suspense>
      <ThankYou />
    </Suspense>
  );
}

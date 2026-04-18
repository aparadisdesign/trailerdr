import type { Metadata } from "next";
import Features from "../../views/Features";

export const metadata: Metadata = {
  title: "Specs & Capabilities | Trailer Dr. Trailer Diagnostic Tool",
  description:
    "Full technical specifications for Trailer Dr.: 30A output, 15.2 lbs, waterproof NEMA-rated enclosure, 125 lb air output, ABS blink code reading, remote control of lights and brakes. Lightest and most compact in its class.",
  alternates: {
    canonical: "https://www.thetrailerdr.com/features",
  },
  openGraph: {
    title: "Specs & Capabilities | Trailer Dr.",
    description:
      "30A output · 15.2 lbs · NEMA waterproof · ABS blink codes · remote control of lights and brakes. Full specs for the Trailer Dr. trailer diagnostic tool.",
    url: "https://www.thetrailerdr.com/features",
    type: "website",
  },
};

export default function FeaturesPage() {
  return <Features />;
}

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
      "30A output, 15.2 lbs, NEMA waterproof, ABS blink codes, remote control of lights and brakes. Full specs for the Trailer Dr. trailer diagnostic tool.",
    url: "https://www.thetrailerdr.com/features",
    type: "website",
  },
};

const featuresSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://www.thetrailerdr.com/product#product",
  "name": "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
  "url": "https://www.thetrailerdr.com/product",
  "brand": {
    "@type": "Brand",
    "name": "Trailer Dr.",
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://www.thetrailerdr.com/#organization",
    "name": "Trailer Dr.",
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Output",
      "value": "30 Amps @ 12.8 VDC",
    },
    {
      "@type": "PropertyValue",
      "name": "External Power Input",
      "value": "115 VAC",
    },
    {
      "@type": "PropertyValue",
      "name": "Air Output",
      "value": "125 lbs max (self-regulated)",
    },
    {
      "@type": "PropertyValue",
      "name": "Trailer Connection",
      "value": "7 Way Round Pin",
    },
    {
      "@type": "PropertyValue",
      "name": "Controls",
      "value": "Manual and remote",
    },
    {
      "@type": "PropertyValue",
      "name": "Weight",
      "value": "15.2 lbs",
    },
    {
      "@type": "PropertyValue",
      "name": "Dimensions",
      "value": "12 x 10 x 4 in (H x W x D)",
    },
    {
      "@type": "PropertyValue",
      "name": "Enclosure Rating",
      "value": "NEMA 1/2/3/3R/3S/4/4X/6/6P/12/13 Polycarbonate",
    },
    {
      "@type": "PropertyValue",
      "name": "Overload Protection",
      "value": "Electronic with audible buzzer and indicator light",
    },
    {
      "@type": "PropertyValue",
      "name": "Warranty",
      "value": "1 Year",
    },
    {
      "@type": "PropertyValue",
      "name": "Free Trial",
      "value": "30 days (buyer covers return shipping)",
    },
    {
      "@type": "PropertyValue",
      "name": "Country of Origin",
      "value": "United States",
    },
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuresSchema) }}
      />
      <Features />
    </>
  );
}

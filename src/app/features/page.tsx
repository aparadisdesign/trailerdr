import type { Metadata } from "next";
import Features from "../../views/Features";
import { productSchemaCore } from "../../data/productSchema";

export const metadata: Metadata = {
  title: "Specs & Capabilities | Trailer Diagnostic Tool",
  description:
    "Full technical specifications for Trailer Dr.: 30A output, 15.2 lbs, waterproof NEMA-rated enclosure, 125 lb air output, ABS blink code reading, remote control of lights and brakes. Lightest and most compact in its class.",
  alternates: {
    canonical: "https://thetrailerdr.com/features",
  },
  openGraph: {
    title: "Specs & Capabilities | Trailer Dr.",
    description:
      "30A output, 15.2 lbs, NEMA waterproof, ABS blink codes, remote control of lights and brakes. Full specs for the Trailer Dr. trailer diagnostic tool.",
    url: "https://thetrailerdr.com/features",
    type: "website",
  },
};

const specProperties = [
  { name: "Output", value: "30 Amps @ 12.8 VDC" },
  { name: "External Power Input", value: "115 VAC" },
  { name: "Air Output", value: "125 lbs max (self-regulated)" },
  { name: "Trailer Connection", value: "7 Way Round Pin" },
  { name: "Controls", value: "Manual and remote" },
  { name: "Weight", value: "15.2 lbs" },
  { name: "Dimensions", value: "12 x 10 x 4 in (H x W x D)" },
  {
    name: "Enclosure Rating",
    value: "NEMA 1/2/3/3R/3S/4/4X/6/6P/12/13 Polycarbonate",
  },
  {
    name: "Overload Protection",
    value: "Electronic with audible buzzer and indicator light",
  },
  { name: "Warranty", value: "1 Year" },
  { name: "Free Trial", value: "30 days (buyer covers return shipping)" },
  { name: "Country of Origin", value: "United States" },
];

const featuresSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://thetrailerdr.com/features#webpage",
      url: "https://thetrailerdr.com/features",
      name: "Specs & Capabilities | Trailer Dr.",
      description:
        "Full technical specifications for Trailer Dr.: 30A output, 15.2 lbs, waterproof NEMA-rated enclosure, 125 lb air output, ABS blink code reading, remote control of lights and brakes.",
      isPartOf: { "@id": "https://thetrailerdr.com/#website" },
      about: { "@id": "https://thetrailerdr.com/product#product" },
      mainEntity: { "@id": "https://thetrailerdr.com/features#specs" },
    },
    {
      "@type": "ItemList",
      "@id": "https://thetrailerdr.com/features#specs",
      name: "Trailer Dr. Technical Specifications",
      numberOfItems: specProperties.length,
      itemListElement: specProperties.map((spec, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: spec.name,
        description: spec.value,
      })),
    },
    {
      ...productSchemaCore,
      additionalProperty: specProperties.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.name,
        value: spec.value,
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://thetrailerdr.com/features#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://thetrailerdr.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Specs & Capabilities",
          item: "https://thetrailerdr.com/features",
        },
      ],
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

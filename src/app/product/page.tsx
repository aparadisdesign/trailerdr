import type { Metadata } from "next";
import Product from "../../views/Product";

export const metadata: Metadata = {
  title: "Buy Trailer Dr. | Portable Air Brake & Light Diagnostic Tool – $3,195",
  description:
    "The most compact, most powerful trailer diagnostic tool. 30A output, 15.2 lbs, fully waterproof. One person operates from the rear of the trailer — no truck or cab access needed. 30-day free trial · 1-year warranty · Made in the USA · Free shipping.",
  alternates: {
    canonical: "https://www.thetrailerdr.com/product",
  },
  openGraph: {
    title: "Buy Trailer Dr. | Portable Air Brake & Light Diagnostic Tool",
    description:
      "Test trailer lights, air supply, and brake activation without a truck. 15.2 lbs, NEMA-rated waterproof enclosure. $3,195 with free US shipping.",
    url: "https://www.thetrailerdr.com/product",
    type: "website",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
  description:
    "Portable one-person trailer diagnostic tool. Verifies trailer lighting, air supply, and brake activation from the rear of the trailer — no truck or cab access needed. 30A output, 15.2 lbs, NEMA-rated waterproof enclosure.",
  brand: {
    "@type": "Brand",
    name: "Trailer Dr.",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Trailer Dr.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Kent",
      addressRegion: "ME",
      addressCountry: "US",
    },
  },
  countryOfOrigin: "US",
  weight: {
    "@type": "QuantitativeValue",
    value: "15.2",
    unitCode: "LBR",
  },
  offers: {
    "@type": "Offer",
    price: "3195.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    seller: {
      "@type": "Organization",
      name: "Trailer Dr.",
    },
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
      merchantReturnDays: 30,
    },
    shippingDetails: {
      "@type": "OfferShippingDetails",
      shippingRate: {
        "@type": "MonetaryAmount",
        value: "0",
        currency: "USD",
      },
      shippingDestination: {
        "@type": "DefinedRegion",
        addressCountry: "US",
      },
    },
  },
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Product />
    </>
  );
}

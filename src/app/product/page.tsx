import type { Metadata } from "next";
import Product from "../../views/Product";

export const metadata: Metadata = {
  title: "Buy Trailer Dr. | Portable Air Brake & Light Diagnostic Tool – $3,195",
  description:
    "The most compact, most powerful trailer diagnostic tool. 30A output, 15.2 lbs, fully waterproof. One person operates from the rear of the trailer. No truck or cab access needed. 30-day free trial, 1-year warranty, made in the USA, free shipping.",
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
  "@id": "https://www.thetrailerdr.com/product#product",
  "name": "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
  "description":
    "Portable one-person semi-trailer light and air brake tester. Verifies trailer lighting, air supply, and brake activation from the rear of the trailer without a truck or cab access. 30A output, 15.2 lbs, NEMA 4/4X/6/6P-rated waterproof polycarbonate enclosure.",
  "image": [
    "https://www.thetrailerdr.com/images/trailerdr-product-image.webp",
    "https://www.thetrailerdr.com/images/product-spinner-v2/4J0A2941.webp",
    "https://www.thetrailerdr.com/images/product-spinner-v2/4J0A2949.webp",
    "https://www.thetrailerdr.com/images/product-spinner-v2/4J0A2957.webp",
  ],
  "brand": {
    "@type": "Brand",
    "name": "Trailer Dr.",
  },
  "manufacturer": {
    "@type": "Organization",
    "@id": "https://www.thetrailerdr.com/#organization",
    "name": "Trailer Dr.",
  },
  "countryOfOrigin": "US",
  "weight": {
    "@type": "QuantitativeValue",
    "value": "15.2",
    "unitCode": "LBR",
  },
  "height": {
    "@type": "QuantitativeValue",
    "value": "12",
    "unitCode": "INH",
  },
  "width": {
    "@type": "QuantitativeValue",
    "value": "10",
    "unitCode": "INH",
  },
  "depth": {
    "@type": "QuantitativeValue",
    "value": "4",
    "unitCode": "INH",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "2",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
      },
      "author": {
        "@type": "Person",
        "name": "Jerrold Warne",
      },
      "reviewBody":
        "Incredible build quality and saved us hours on every trailer inspection. Worth every penny.",
    },
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5",
      },
      "author": {
        "@type": "Organization",
        "name": "GBD Farms",
      },
      "reviewBody":
        "Game changer for air brake diagnostics. One person can now do what used to take two.",
    },
  ],
  "offers": {
    "@type": "Offer",
    "price": "3195.00",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://www.thetrailerdr.com/product",
    "seller": {
      "@type": "Organization",
      "@id": "https://www.thetrailerdr.com/#organization",
      "name": "Trailer Dr.",
    },
    "hasMerchantReturnPolicy": {
      "@type": "MerchantReturnPolicy",
      "returnPolicyCategory": "https://schema.org/MerchantReturnFiniteReturnWindow",
      "merchantReturnDays": 30,
    },
    "shippingDetails": {
      "@type": "OfferShippingDetails",
      "shippingRate": {
        "@type": "MonetaryAmount",
        "value": "0",
        "currency": "USD",
      },
      "shippingDestination": {
        "@type": "DefinedRegion",
        "addressCountry": "US",
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

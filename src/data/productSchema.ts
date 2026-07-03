const productOffer = {
  "@type": "Offer",
  price: "3195.00",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url: "https://thetrailerdr.com/product",
  seller: {
    "@type": "Organization",
    "@id": "https://thetrailerdr.com/#organization",
    name: "Trailer Dr.",
  },
  hasMerchantReturnPolicy: {
    "@type": "MerchantReturnPolicy",
    returnPolicyCategory:
      "https://schema.org/MerchantReturnFiniteReturnWindow",
    merchantReturnDays: 30,
    applicableCountry: "US",
    returnMethod: "https://schema.org/ReturnByMail",
    returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
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
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 1,
        maxValue: 2,
        unitCode: "DAY",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 3,
        maxValue: 7,
        unitCode: "DAY",
      },
    },
  },
} as const;

const productReviews = [
  {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Jerrold Warne",
    },
    reviewBody:
      "Incredible build quality and saved us hours on every trailer inspection. Worth every penny.",
  },
  {
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Organization",
      name: "GBD Farms",
    },
    reviewBody:
      "Game changer for air brake diagnostics. One person can now do what used to take two.",
  },
] as const;

export const productAggregateRating = {
  "@type": "AggregateRating",
  ratingValue: "5",
  reviewCount: "2",
  bestRating: "5",
  worstRating: "1",
} as const;

export const productSchemaCore = {
  "@type": "Product",
  "@id": "https://thetrailerdr.com/product#product",
  name: "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
  url: "https://thetrailerdr.com/product",
  brand: {
    "@type": "Brand",
    name: "Trailer Dr.",
  },
  manufacturer: {
    "@type": "Organization",
    "@id": "https://thetrailerdr.com/#organization",
    name: "Trailer Dr.",
  },
  offers: productOffer,
  aggregateRating: productAggregateRating,
  review: productReviews,
} as const;

export const productPageSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": "https://thetrailerdr.com/product#product",
  name: "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
  description:
    "Portable one-person semi-trailer light and air brake tester. Verifies trailer lighting, air supply, and brake activation from the rear of the trailer without a truck or cab access. 30A output, 15.2 lbs, NEMA 4/4X/6/6P-rated waterproof polycarbonate enclosure.",
  image: [
    "https://thetrailerdr.com/images/trailerdr-product-image.webp",
    "https://thetrailerdr.com/images/product-spinner-v2/4J0A2941.webp",
    "https://thetrailerdr.com/images/product-spinner-v2/4J0A2949.webp",
    "https://thetrailerdr.com/images/product-spinner-v2/4J0A2957.webp",
  ],
  brand: productSchemaCore.brand,
  manufacturer: productSchemaCore.manufacturer,
  countryOfOrigin: "US",
  weight: {
    "@type": "QuantitativeValue",
    value: "15.2",
    unitCode: "LBR",
  },
  height: {
    "@type": "QuantitativeValue",
    value: "12",
    unitCode: "INH",
  },
  width: {
    "@type": "QuantitativeValue",
    value: "10",
    unitCode: "INH",
  },
  depth: {
    "@type": "QuantitativeValue",
    value: "4",
    unitCode: "INH",
  },
  aggregateRating: productAggregateRating,
  review: productReviews,
  offers: productOffer,
};

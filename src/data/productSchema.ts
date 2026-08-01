const seller = {
  "@type": "Organization",
  "@id": "https://thetrailerdr.com/#organization",
  name: "Trailer Dr.",
} as const;

const merchantReturnPolicy = {
  "@type": "MerchantReturnPolicy",
  returnPolicyCategory:
    "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 30,
  applicableCountry: "US",
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
} as const;

const freeUsShippingDetails = {
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
} as const;

const brand = {
  "@type": "Brand",
  name: "Trailer Dr.",
} as const;

const manufacturer = {
  "@type": "Organization",
  "@id": "https://thetrailerdr.com/#organization",
  name: "Trailer Dr.",
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

export const productImages = [
  "https://thetrailerdr.com/images/trailerdr-product-image.webp",
  "https://thetrailerdr.com/images/product-spinner-v2/4J0A2941.webp",
  "https://thetrailerdr.com/images/product-spinner-v2/4J0A2949.webp",
  "https://thetrailerdr.com/images/product-spinner-v2/4J0A2957.webp",
] as const;

export const productDescription =
  "Portable one-person semi-trailer light and air brake tester. Verifies trailer lighting, air supply, and brake activation from the rear of the trailer without a truck or cab access. Includes one standard battery-powered wireless remote. Optional rechargeable remote with work light: +$99 when purchased with the unit ($3,294 total), or $130 as a separate extra or replacement. 30A output, 15.2 lbs, NEMA 4/4X/6/6P-rated waterproof polycarbonate enclosure.";

/** Unit with standard remote (base checkout option) */
const unitOfferStandardRemote = {
  "@type": "Offer",
  "@id": "https://thetrailerdr.com/product#offer-standard-remote",
  name: "Trailer Dr. with Base Battery-Powered Remote",
  description:
    "Diagnostic unit with one standard battery-powered wireless remote included. Free shipping in the contiguous USA.",
  price: "3195.00",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url: "https://thetrailerdr.com/product",
  seller,
  hasMerchantReturnPolicy: merchantReturnPolicy,
  shippingDetails: freeUsShippingDetails,
} as const;

/** Unit with rechargeable remote upgrade (+$99) */
const unitOfferRechargeableRemote = {
  "@type": "Offer",
  "@id": "https://thetrailerdr.com/product#offer-rechargeable-remote",
  name: "Trailer Dr. with Upgraded Rechargeable Remote with Work Light",
  description:
    "Diagnostic unit with upgraded rechargeable remote with work light (+$99 at checkout vs. standard remote). Includes wall plug-in charger. Free shipping in the contiguous USA.",
  price: "3294.00",
  priceCurrency: "USD",
  availability: "https://schema.org/InStock",
  url: "https://thetrailerdr.com/product",
  seller,
  hasMerchantReturnPolicy: merchantReturnPolicy,
  shippingDetails: freeUsShippingDetails,
} as const;

const unitOffers = [
  unitOfferStandardRemote,
  unitOfferRechargeableRemote,
] as const;

export const productSchemaCore = {
  "@type": "Product",
  "@id": "https://thetrailerdr.com/product#product",
  name: "Trailer Dr. Electrical & Air Brake Trailer Diagnostic Tool",
  description: productDescription,
  image: productImages,
  url: "https://thetrailerdr.com/product",
  category: "Commercial Semi-Trailer Diagnostic Tool",
  brand,
  manufacturer,
  offers: unitOffers,
  aggregateRating: productAggregateRating,
  review: productReviews,
} as const;

/** Extra / replacement standard remote — PayPal product option $75 */
export const standardRemoteProductSchema = {
  "@type": "Product",
  "@id": "https://thetrailerdr.com/product#remote-standard",
  name: "Trailer Dr. Extra Base Battery-Powered Remote",
  description:
    "Replacement or extra standard battery-powered wireless remote for Trailer Dr. Must be paired with your unit; pairing instructions are included. $75 when purchased separately. Every new Trailer Dr. unit already includes one standard remote.",
  image: "https://thetrailerdr.com/images/standard-battery-powered-remote.webp",
  url: "https://thetrailerdr.com/product",
  category: "Trailer Diagnostic Tool Accessory",
  brand,
  manufacturer,
  isAccessoryOrSparePartFor: {
    "@id": "https://thetrailerdr.com/product#product",
  },
  offers: {
    "@type": "Offer",
    "@id": "https://thetrailerdr.com/product#offer-remote-standard",
    name: "Extra Base Battery-Powered Remote",
    price: "75.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://thetrailerdr.com/product",
    seller,
    hasMerchantReturnPolicy: merchantReturnPolicy,
  },
} as const;

/** Extra / replacement rechargeable remote — PayPal product option $130 */
export const rechargeableRemoteProductSchema = {
  "@type": "Product",
  "@id": "https://thetrailerdr.com/product#remote-rechargeable",
  name: "Trailer Dr. Extra Rechargeable Remote with Work Light",
  description:
    "Replacement or extra rechargeable wireless remote with integrated work light for Trailer Dr. Must be paired with your unit; pairing instructions and a wall plug-in charger are included. $130 when purchased separately. When upgrading at checkout with a new Trailer Dr. unit, the rechargeable remote is a +$99 option ($3,294 total).",
  image:
    "https://thetrailerdr.com/images/rechargable-remote-w-flashlight.webp",
  url: "https://thetrailerdr.com/product",
  category: "Trailer Diagnostic Tool Accessory",
  brand,
  manufacturer,
  isAccessoryOrSparePartFor: {
    "@id": "https://thetrailerdr.com/product#product",
  },
  offers: {
    "@type": "Offer",
    "@id": "https://thetrailerdr.com/product#offer-remote-rechargeable",
    name: "Extra Rechargeable Remote with Work Light",
    price: "130.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    url: "https://thetrailerdr.com/product",
    seller,
    hasMerchantReturnPolicy: merchantReturnPolicy,
  },
} as const;

export const productPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      "@id": "https://thetrailerdr.com/product#product",
      name: productSchemaCore.name,
      description: productSchemaCore.description,
      image: productSchemaCore.image,
      url: productSchemaCore.url,
      category: productSchemaCore.category,
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
      offers: unitOffers,
      isRelatedTo: [
        { "@id": "https://thetrailerdr.com/product#remote-standard" },
        { "@id": "https://thetrailerdr.com/product#remote-rechargeable" },
      ],
    },
    standardRemoteProductSchema,
    rechargeableRemoteProductSchema,
  ],
};

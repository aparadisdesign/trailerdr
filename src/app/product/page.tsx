import type { Metadata } from "next";
import Product from "../../views/Product";
import { productPageSchema } from "../../data/productSchema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Buy Trailer Dr. | Semi-Trailer Air Brake & Light Diagnostic Tool – $3,195",
  },
  description:
    "Commercial tractor trailer and semi-trailer diagnostic tool. 30A output, 15.2 lbs, fully waterproof. One person operates from the rear of the trailer. Built for commercial trailers, not consumer trailers. 30-day free trial, 1-year warranty, made in the USA, free shipping.",
  alternates: {
    canonical: "https://thetrailerdr.com/product",
  },
  openGraph: {
    title: "Buy Trailer Dr. | Semi-Trailer Air Brake & Light Diagnostic Tool",
    description:
      "Test tractor trailer and semi-trailer lights, air supply, and brake activation without a truck. 15.2 lbs, NEMA-rated waterproof enclosure. $3,195 with free US shipping.",
    url: "https://thetrailerdr.com/product",
    type: "website",
  },
};

export default function ProductPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productPageSchema) }}
      />
      <Product />
    </>
  );
}

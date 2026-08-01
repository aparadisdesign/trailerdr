import type { Metadata } from "next";
import About from "../../views/About";

export const metadata: Metadata = {
  title: "About | American-Made Trailer Diagnostic Tool",
  description:
    "Trailer Dr. is designed and built in the USA by people who work in the trucking industry. Learn about the team behind the tool and why we built it.",
  alternates: {
    canonical: "https://thetrailerdr.com/about",
  },
  openGraph: {
    title: "About Trailer Dr. | American-Made Trailer Diagnostic Tool",
    description:
      "Designed and built in the USA by people who work in the trucking industry.",
    url: "https://thetrailerdr.com/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://thetrailerdr.com/about#webpage",
      "url": "https://thetrailerdr.com/about",
      "name": "About Trailer Dr.",
      "description":
        "Trailer Dr. was founded by Bruce Theriault, an equipment professional with 30+ years in trucking and forestry. Built from firsthand experience maintaining semi-trailers in demanding environments.",
      "about": {
        "@id": "https://thetrailerdr.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://thetrailerdr.com/#organization",
      "name": "Trailer Dr.",
      "url": "https://thetrailerdr.com",
      "telephone": "+1-207-231-4967",
      "email": "bruce.trailerdr@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fort Kent",
        "addressRegion": "ME",
        "addressCountry": "US",
      },
      "founder": {
        "@type": "Person",
        "name": "Bruce Theriault",
        "description":
          "Equipment professional with 30+ years working hands-on with semi-trucks, trailers, and heavy equipment in the trucking and forestry industries.",
      },
      "description":
        "Trailer Dr. designs and builds portable electrical and air brake trailer diagnostic tools in the USA. Built for fleets, repair shops, and mobile service operators nationwide.",
      "areaServed": {
        "@type": "Country",
        "name": "United States",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Trailer Diagnostic Tools",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://thetrailerdr.com/product#product",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://thetrailerdr.com/product#remote-standard",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@id": "https://thetrailerdr.com/product#remote-rechargeable",
            },
          },
        ],
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <About />
    </>
  );
}

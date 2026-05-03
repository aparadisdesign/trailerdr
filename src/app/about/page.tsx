import type { Metadata } from "next";
import About from "../../views/About";

export const metadata: Metadata = {
  title: "About Trailer Dr. | American-Made Trailer Diagnostic Tool",
  description:
    "Trailer Dr. is designed and built in the USA by people who work in the trucking industry. Learn about the team behind the tool and why we built it.",
  alternates: {
    canonical: "https://www.thetrailerdr.com/about",
  },
  openGraph: {
    title: "About Trailer Dr. | American-Made Trailer Diagnostic Tool",
    description:
      "Designed and built in the USA by people who work in the trucking industry.",
    url: "https://www.thetrailerdr.com/about",
    type: "website",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.thetrailerdr.com/about#webpage",
      "url": "https://www.thetrailerdr.com/about",
      "name": "About Trailer Dr.",
      "description":
        "Trailer Dr. was founded by Bruce Theriault, an equipment professional with 30+ years in trucking and forestry. Built from firsthand experience maintaining semi-trailers in demanding environments.",
      "about": {
        "@id": "https://www.thetrailerdr.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.thetrailerdr.com/#organization",
      "name": "Trailer Dr.",
      "url": "https://www.thetrailerdr.com",
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
              "@id": "https://www.thetrailerdr.com/product#product",
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

import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Demo or Get Support",
  description:
    "Speak directly with the people who build Trailer Dr. Schedule a demo, ask a question, or get support. Call (207) 231-4967 or send a message.",
  alternates: {
    canonical: "https://thetrailerdr.com/contact",
  },
  openGraph: {
    title: "Contact Trailer Dr. | Schedule a Demo",
    description:
      "Speak directly with the people who build Trailer Dr. Schedule a demo or ask a question.",
    url: "https://thetrailerdr.com/contact",
    type: "website",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://thetrailerdr.com/contact#webpage",
      "url": "https://thetrailerdr.com/contact",
      "name": "Contact Trailer Dr.",
      "description":
        "Contact Trailer Dr. to schedule a demo, ask a technical question, or place an order. Reach the people who actually build the product.",
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
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+1-207-231-4967",
          "email": "bruce.trailerdr@gmail.com",
          "contactType": "sales",
          "areaServed": "US",
          "availableLanguage": "English",
        },
        {
          "@type": "ContactPoint",
          "telephone": "+1-207-231-4967",
          "email": "bruce.trailerdr@gmail.com",
          "contactType": "customer support",
          "areaServed": "US",
          "availableLanguage": "English",
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <Suspense>
        <Contact />
      </Suspense>
    </>
  );
}

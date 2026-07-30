import type { Metadata } from "next";
import FAQ from "../../views/FAQ";
import { faqSections, slugify } from "../../data/faqData";

export const metadata: Metadata = {
  title: "FAQs | Trailer Dr. Semi-Trailer Electrical & Air Brake Diagnostic Tool",
  description:
    "Answers to common questions about Trailer Dr.: how it works on tractor trailers and semi-trailers, what it tests, specs, pricing, warranty, and who it is for (commercial vs. consumer trailers).",
  alternates: {
    canonical: "https://thetrailerdr.com/faq",
  },
  openGraph: {
    title: "Trailer Dr. FAQs",
    description:
      "How Trailer Dr. works on commercial semi-trailers, what it tests, specs, pricing, warranty, and comparisons to other portable trailer testers.",
    url: "https://thetrailerdr.com/faq",
    type: "website",
  },
};

const faqQuestions = faqSections.flatMap((section) =>
  section.items.map((item) => ({
    "@type": "Question",
    "@id": `https://thetrailerdr.com/faq#${slugify(item.question)}`,
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }))
);

const faqSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": "https://thetrailerdr.com/faq#webpage",
      url: "https://thetrailerdr.com/faq",
      name: "Trailer Dr. Frequently Asked Questions",
      description:
        "Answers to common questions about Trailer Dr.: how it works, what it tests, specs, pricing, warranty, and comparisons to other portable trailer testers.",
      isPartOf: { "@id": "https://thetrailerdr.com/#website" },
      about: { "@id": "https://thetrailerdr.com/product#product" },
      publisher: { "@id": "https://thetrailerdr.com/#organization" },
      mainEntity: faqQuestions,
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://thetrailerdr.com/faq#breadcrumb",
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
          name: "FAQs",
          item: "https://thetrailerdr.com/faq",
        },
      ],
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQ />
    </>
  );
}

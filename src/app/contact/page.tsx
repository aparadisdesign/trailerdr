import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Demo or Get Support",
  description:
    "Speak directly with the people who build Trailer Dr. Schedule a demo, ask a question, or get support. Call (207) 231-4967 or send a message.",
  alternates: {
    canonical: "https://www.thetrailerdr.com/contact",
  },
  openGraph: {
    title: "Contact Trailer Dr. | Schedule a Demo",
    description:
      "Speak directly with the people who build Trailer Dr. Schedule a demo or ask a question.",
    url: "https://www.thetrailerdr.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <Suspense>
      <Contact />
    </Suspense>
  );
}

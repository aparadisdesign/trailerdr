import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
  title: {
    absolute:
      "Trailer Dr. | One-Person Semi-Trailer Electrical & Air Brake Diagnostic Tool",
  },
  description:
    "Trailer Dr. lets one technician test lights, air supply, and brake activation on tractor trailers and commercial semi-trailers. No truck, no second person. Portable, waterproof, Made in the USA.",
  alternates: {
    canonical: "https://thetrailerdr.com",
  },
  openGraph: {
    title: "Trailer Dr. | One-Person Semi-Trailer Diagnostic Tool",
    description:
      "Test tractor trailer and semi-trailer lights, air supply, and brake activation without a truck or a second person. Portable, waterproof, Made in the USA.",
    url: "https://thetrailerdr.com",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thetrailerdr.com/#organization",
      "name": "Trailer Dr.",
      "url": "https://thetrailerdr.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thetrailerdr.com/images/trailerdr-product-image.webp",
      },
      "telephone": "+1-207-231-4967",
      "email": "bruce.trailerdr@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Fort Kent",
        "addressRegion": "ME",
        "addressCountry": "US",
      },
      "description":
        "Trailer Dr. makes portable electrical and air brake diagnostic tools for tractor trailers and commercial semi-trailers. Built for fleets, repair shops, and mobile service operators across the USA.",
      "sameAs": [
        "https://www.youtube.com/@thetrailerdr",
        "https://www.facebook.com/profile.php?id=100068934459035",
        "https://www.google.com/maps/place/Trailer+Dr./@47.2456272,-68.5801316,17z/data=!4m8!3m7!1s0x4cbc51c081c63881:0x9760e7e967287ae1!8m2!3d47.2456272!4d-68.5775567!9m1!1b1!16s%2Fg%2F11ry610_lr",
      ],
      "founder": {
        "@type": "Person",
        "name": "Bruce Theriault",
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://thetrailerdr.com/#website",
      "url": "https://thetrailerdr.com",
      "name": "Trailer Dr.",
      "description":
        "Portable electrical and air brake diagnostic tool for tractor trailers and commercial semi-trailers. One-person operation. No truck required.",
      "publisher": {
        "@id": "https://thetrailerdr.com/#organization",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Home />
    </>
  );
}

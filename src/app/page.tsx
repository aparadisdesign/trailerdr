import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
  title: {
    absolute:
      "Trailer Dr. | One-Person Electrical & Air Brake Trailer Diagnostic Tool",
  },
  description:
    "Trailer Dr. lets one technician test trailer lights, air supply, and brake activation from the rear of the trailer. No truck, no second person. Portable, waterproof, Made in the USA.",
  alternates: {
    canonical: "https://www.thetrailerdr.com",
  },
  openGraph: {
    title: "Trailer Dr. | One-Person Trailer Diagnostic Tool",
    description:
      "Test trailer lights, air supply, and brake activation without a truck or a second person. Portable, waterproof, Made in the USA.",
    url: "https://www.thetrailerdr.com",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.thetrailerdr.com/#organization",
      "name": "Trailer Dr.",
      "url": "https://www.thetrailerdr.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.thetrailerdr.com/images/trailerdr-product-image.webp",
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
        "Trailer Dr. makes portable electrical and air brake trailer diagnostic tools for fleets, repair shops, and mobile service operators across the USA.",
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
      "@id": "https://www.thetrailerdr.com/#website",
      "url": "https://www.thetrailerdr.com",
      "name": "Trailer Dr.",
      "description":
        "Portable electrical and air brake trailer diagnostic tool. One-person operation. No truck required.",
      "publisher": {
        "@id": "https://www.thetrailerdr.com/#organization",
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

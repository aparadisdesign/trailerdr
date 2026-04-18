import type { Metadata } from "next";
import Home from "../views/Home";

export const metadata: Metadata = {
  title: "Trailer Dr. | One-Person Electrical & Air Brake Trailer Diagnostic Tool",
  description:
    "Trailer Dr. lets one technician test trailer lights, air supply, and brake activation from the rear of the trailer — no truck, no second person. Portable, waterproof, Made in the USA.",
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

export default function HomePage() {
  return <Home />;
}

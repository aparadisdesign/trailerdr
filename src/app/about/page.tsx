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
    title: "About Trailer Dr. | Made in Fort Kent, Maine",
    description:
      "Designed and built in Fort Kent, Maine by people who work in the trucking industry.",
    url: "https://www.thetrailerdr.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return <About />;
}

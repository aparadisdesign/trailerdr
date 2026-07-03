import type { Metadata } from "next";
import Resources from "../../views/Resources";
import { resourcesSchema } from "../../data/resourcesData";

export const metadata: Metadata = {
  title: "Resources | News & Videos",
  description:
    "Press coverage and video walkthroughs of Trailer Dr., the portable electrical and air brake trailer diagnostic tool. See setup, operation, and the story behind the tool.",
  alternates: {
    canonical: "https://thetrailerdr.com/resources",
  },
  openGraph: {
    title: "Trailer Dr. Resources | News & Videos",
    description:
      "Press coverage and video walkthroughs of the Trailer Dr. diagnostic tool.",
    url: "https://thetrailerdr.com/resources",
    type: "website",
  },
};

export default function ResourcesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(resourcesSchema) }}
      />
      <Resources />
    </>
  );
}

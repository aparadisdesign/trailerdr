import type { Metadata } from "next";
import Resources from "../../views/Resources";
import {
  pressCoverage,
  resourceVideos,
  videoSchemaId,
} from "../../data/resourcesData";

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

const videoEntities = resourceVideos.map((video) => ({
  "@type": "VideoObject",
  "@id": videoSchemaId(video.youtubeId),
  name: video.title,
  description: video.title,
  embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
  contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
  publisher: { "@id": "https://thetrailerdr.com/#organization" },
  isPartOf: { "@id": "https://thetrailerdr.com/resources#webpage" },
}));

const resourcesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://thetrailerdr.com/resources#webpage",
      url: "https://thetrailerdr.com/resources",
      name: "Trailer Dr. Resources",
      description:
        "Press coverage and video walkthroughs of the Trailer Dr. portable electrical and air brake trailer diagnostic tool.",
      isPartOf: { "@id": "https://thetrailerdr.com/#website" },
      about: { "@id": "https://thetrailerdr.com/product#product" },
      publisher: { "@id": "https://thetrailerdr.com/#organization" },
      hasPart: [
        { "@id": "https://thetrailerdr.com/resources#press-ccj" },
        ...resourceVideos.map((video) => ({
          "@id": videoSchemaId(video.youtubeId),
        })),
      ],
    },
    {
      "@type": "NewsArticle",
      "@id": "https://thetrailerdr.com/resources#press-ccj",
      headline: pressCoverage.headline,
      description: pressCoverage.description,
      url: pressCoverage.url,
      mainEntityOfPage: pressCoverage.url,
      isPartOf: { "@id": "https://thetrailerdr.com/resources#webpage" },
      publisher: {
        "@type": "Organization",
        name: pressCoverage.publisher,
      },
      about: { "@id": "https://thetrailerdr.com/product#product" },
    },
    ...videoEntities,
    {
      "@type": "BreadcrumbList",
      "@id": "https://thetrailerdr.com/resources#breadcrumb",
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
          name: "Resources",
          item: "https://thetrailerdr.com/resources",
        },
      ],
    },
  ],
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

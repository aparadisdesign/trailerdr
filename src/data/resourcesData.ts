export interface ResourceVideo {
  youtubeId: string;
  title: string;
  uploadDate: string;
}

export interface PressArticle {
  headline: string;
  publisher: string;
  url: string;
  description: string;
}

export const RESOURCE_VIDEOS: ResourceVideo[] = [
  {
    youtubeId: "Is3PYLdX4R4",
    title:
      "What Is Trailer Dr.? Portable Electrical & Air Brake Trailer Diagnostic Tool",
    uploadDate: "2026-07-01",
  },
  {
    youtubeId: "KoIQd2e3e-c",
    title: "Trailer Dr. Product Walkthrough: Why We Built It This Way",
    uploadDate: "2026-07-01",
  },
  {
    youtubeId: "zOUsDC3MOQU",
    title:
      "How to Hook Up Trailer Dr. to a Semi-Trailer (7-Way Connector, Step by Step)",
    uploadDate: "2026-07-01",
  },
  {
    youtubeId: "60ONWkng59A",
    title:
      "How to Operate Trailer Dr.: Testing Lights, Air, and Brakes Step by Step",
    uploadDate: "2026-07-01",
  },
];

export const pressCoverage: PressArticle = {
  headline: "Trailer Dr. Featured on CCJDigital.com",
  publisher: "Commercial Carrier Journal",
  url: "https://www.ccjdigital.com/maintenance/article/15827483/trailer-dr-tool-simplifies-electrical-air-brake-diagnostics",
  description:
    "Commercial Carrier Journal covers how Trailer Dr. simplifies electrical and air brake diagnostics for fleets and repair shops.",
};

function videoSchemaId(youtubeId: string): string {
  return `https://thetrailerdr.com/resources#video-${youtubeId}`;
}

const videoEntities = RESOURCE_VIDEOS.map((video) => ({
  "@type": "VideoObject",
  "@id": videoSchemaId(video.youtubeId),
  name: video.title,
  description: video.title,
  uploadDate: video.uploadDate,
  embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
  contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`,
  publisher: { "@id": "https://thetrailerdr.com/#organization" },
  isPartOf: { "@id": "https://thetrailerdr.com/resources#webpage" },
}));

export const resourcesSchema = {
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
        ...RESOURCE_VIDEOS.map((video) => ({
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

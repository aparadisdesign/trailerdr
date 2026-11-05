export interface ResourceVideo {
  youtubeId: string;
  title: string;
  uploadDate: string;
}

export interface PressArticle {
  id: string;
  headline: string;
  publisher: string;
  url: string;
  description: string;
  linkLabel: string;
  datePublished?: string;
  schemaType: "NewsArticle" | "Article";
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

export const pressArticles: PressArticle[] = [
  {
    id: "press-fleet-maintenance",
    headline: "Trailer Dr. Listed on FleetMaintenance.com",
    publisher: "Fleet Maintenance",
    url: "https://www.fleetmaintenance.com/in-the-bay/tools/product/55406624/trailer-dr-trailer-dr",
    description:
      "Fleet Maintenance lists Trailer Dr. as a shop tool for one-person electrical and air brake diagnostics in shops, yards, and mobile service.",
    linkLabel: "View the Listing",
    datePublished: "2026-10-27",
    schemaType: "Article",
  },
  {
    id: "press-ccj",
    headline: "Trailer Dr. Featured on CCJDigital.com",
    publisher: "Commercial Carrier Journal",
    url: "https://www.ccjdigital.com/maintenance/article/15827483/trailer-dr-tool-simplifies-electrical-air-brake-diagnostics",
    description:
      "Commercial Carrier Journal covers how Trailer Dr. simplifies electrical and air brake diagnostics for fleets and repair shops.",
    linkLabel: "Read the Article",
    schemaType: "NewsArticle",
  },
];

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
        ...pressArticles.map((article) => ({
          "@id": `https://thetrailerdr.com/resources#${article.id}`,
        })),
        ...RESOURCE_VIDEOS.map((video) => ({
          "@id": videoSchemaId(video.youtubeId),
        })),
      ],
    },
    ...pressArticles.map((article) => ({
      "@type": article.schemaType,
      "@id": `https://thetrailerdr.com/resources#${article.id}`,
      headline: article.headline,
      description: article.description,
      url: article.url,
      mainEntityOfPage: article.url,
      ...(article.datePublished
        ? { datePublished: article.datePublished }
        : {}),
      isPartOf: { "@id": "https://thetrailerdr.com/resources#webpage" },
      publisher: {
        "@type": "Organization",
        name: article.publisher,
      },
      about: { "@id": "https://thetrailerdr.com/product#product" },
    })),
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

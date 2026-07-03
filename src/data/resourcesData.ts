export interface ResourceVideo {
  youtubeId: string;
  title: string;
}

export interface PressArticle {
  headline: string;
  publisher: string;
  url: string;
  description: string;
}

export const resourceVideos: ResourceVideo[] = [
  {
    youtubeId: "Is3PYLdX4R4",
    title:
      "What Is Trailer Dr.? Portable Electrical & Air Brake Trailer Diagnostic Tool",
  },
  {
    youtubeId: "KoIQd2e3e-c",
    title: "Trailer Dr. Product Walkthrough: Why We Built It This Way",
  },
  {
    youtubeId: "zOUsDC3MOQU",
    title:
      "How to Hook Up Trailer Dr. to a Semi-Trailer (7-Way Connector, Step by Step)",
  },
  {
    youtubeId: "60ONWkng59A",
    title:
      "How to Operate Trailer Dr.: Testing Lights, Air, and Brakes Step by Step",
  },
];

export const pressCoverage: PressArticle = {
  headline: "Trailer Dr. Featured on CCJDigital.com",
  publisher: "Commercial Carrier Journal",
  url: "https://www.ccjdigital.com/maintenance/article/15827483/trailer-dr-tool-simplifies-electrical-air-brake-diagnostics",
  description:
    "Commercial Carrier Journal covers how Trailer Dr. simplifies electrical and air brake diagnostics for fleets and repair shops.",
};

export function videoSchemaId(youtubeId: string): string {
  return `https://thetrailerdr.com/resources#video-${youtubeId}`;
}

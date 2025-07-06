import type { MetadataRoute } from "next";

import { domain } from "@/constants/domain";

const sitemap = (): MetadataRoute.Sitemap => {
  return [
    {
      url: domain,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${domain}/resume`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${domain}/resume-preview`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
};

export default sitemap;

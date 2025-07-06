import type { MetadataRoute } from "next";

import { domain } from "@/constants/domain";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${domain}/sitemap.xml`,
  };
};

export default robots;

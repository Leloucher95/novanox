import type { MetadataRoute } from "next";

import { publicEnv } from "@/lib/env/public";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: new URL("/", publicEnv.appUrl).toString(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

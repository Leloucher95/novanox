import type { MetadataRoute } from "next";

import { publicEnv } from "@/lib/env/public";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/client"],
    },
    sitemap: new URL("/sitemap.xml", publicEnv.appUrl).toString(),
  };
}

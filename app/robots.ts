import type { MetadataRoute } from "next";

const SITE_URL = process.env.SITE_URL;

if (!SITE_URL) {
  throw new Error("SITE_URL is not set");
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

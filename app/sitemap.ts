import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getServiceSlugs } from "@/lib/services";

const SITE_URL = process.env.SITE_URL;

if (!SITE_URL) {
  throw new Error("SITE_URL is not set");
}

/** Revalidate sitemap every hour so new blog posts appear automatically */
export const revalidate = 3600;

const STATIC_PAGES: MetadataRoute.Sitemap = [
  {
    url: SITE_URL,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    url: `${SITE_URL}/contact`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/services`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    url: `${SITE_URL}/terms`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: `${SITE_URL}/privacy`,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 0.5,
  },
  {
    url: `${SITE_URL}/blog`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    url: `${SITE_URL}/audit`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedDate
      ? new Date(post.publishedDate)
      : new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const servicePages: MetadataRoute.Sitemap = getServiceSlugs().map(
    (slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })
  );

  return [...STATIC_PAGES, ...servicePages, ...blogPosts];
}

import type { MetadataRoute } from "next";
import { allStaticRoutes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://example.com";
  const extra = ["/blog/welcome-to-xperthrivr"];

  return [...allStaticRoutes, ...extra].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

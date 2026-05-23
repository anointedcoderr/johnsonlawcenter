import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { practiceAreas } from "@/data/practiceAreas";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const lastModified = new Date();
  const staticRoutes: string[] = [
    "/",
    "/about",
    `/attorney/${site.attorney.slug}`,
    "/practice-areas",
    "/reviews",
    "/service-areas",
    "/contact",
    "/privacy-policy",
    "/legal-disclaimer",
  ];
  const practiceRoutes = practiceAreas.map((a) => `/practice-areas/${a.slug}`);
  return [...staticRoutes, ...practiceRoutes].map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}

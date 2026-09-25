import type { MetadataRoute } from "next";
import { site } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}

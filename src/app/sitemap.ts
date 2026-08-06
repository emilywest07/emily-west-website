import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/research", "/publications", "/teaching", "/cv", "/contact"]; return routes.map((route) => ({ url: `${siteContent.siteUrl}${route}`, lastModified: new Date(), changeFrequency: route === "/publications" ? "monthly" : "yearly", priority: route === "" ? 1 : .7 })); }

import type { MetadataRoute } from "next";
import { countries, englishPath, spanishPath } from "@/lib/countries";

export const dynamic = "force-static";

const base = "https://world-salary-calculator.pages.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return countries.flatMap((country) => [
    {
      url: base + englishPath(country),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: base + englishPath(country),
          es: base + spanishPath(country),
        },
      },
    },
    {
      url: base + spanishPath(country),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: {
        languages: {
          en: base + englishPath(country),
          es: base + spanishPath(country),
        },
      },
    },
  ]);
}

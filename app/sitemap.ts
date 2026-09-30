import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";
import { localizedPath, type Locale } from "@/lib/i18n";

export const dynamic = "force-static";
const base = "https://netsalarymap.online";
const locales: Locale[] = ["en", "es", "de", "fr"];

export default function sitemap(): MetadataRoute.Sitemap {
  return countries.flatMap((country) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, base + localizedPath(country,locale)]));
    return locales.map((locale) => ({
      url: base + localizedPath(country,locale),
      lastModified: new Date("2026-09-29"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: { languages: { ...languages, "x-default": base + localizedPath(country,"en") } },
    }));
  });
}

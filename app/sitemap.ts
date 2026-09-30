import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";
import { localizedPath, type Locale } from "@/lib/i18n";
import { legalPath, type LegalKind } from "@/lib/legal-routes";

export const dynamic = "force-static";
const base = "https://netsalarymap.online";
const locales: Locale[] = ["en", "es", "de", "fr"];

export default function sitemap(): MetadataRoute.Sitemap {
  const countryPages = countries.flatMap((country) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, base + localizedPath(country,locale)]));
    return locales.map((locale) => ({
      url: base + localizedPath(country,locale),
      lastModified: new Date("2026-09-30"),
      changeFrequency: "monthly" as const,
      priority: 0.9,
      alternates: { languages: { ...languages, "x-default": base + localizedPath(country,"en") } },
    }));
  });
  const kinds: LegalKind[] = ["privacy","cookies","legal","contact"];
  const legalPages = kinds.flatMap((kind) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, base + legalPath(locale,kind)]));
    return locales.map((locale) => ({
      url: base + legalPath(locale,kind),
      lastModified: new Date("2026-09-30"),
      changeFrequency: "yearly" as const,
      priority: kind === "contact" ? 0.5 : 0.4,
      alternates: { languages: { ...languages, "x-default": base + legalPath("en",kind) } },
    }));
  });
  return [...countryPages,...legalPages];
}

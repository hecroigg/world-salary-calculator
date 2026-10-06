import type { MetadataRoute } from "next";
import { countries } from "@/lib/countries";
import { localizedPath, type Locale } from "@/lib/i18n";
import { legalPath, type LegalKind } from "@/lib/legal-routes";
import { authorityPath, type AuthorityKind } from "@/lib/authority";
import { articleIds, articlePath, guideRoots } from "@/lib/articles";

export const dynamic = "force-static";
const base = "https://netsalarymap.online";
const locales: Locale[] = ["en", "es", "de", "fr"];

export default function sitemap(): MetadataRoute.Sitemap {
  const countryPages = countries.flatMap((country) => {
    const languages = Object.fromEntries(locales.map((locale) => [locale, base + localizedPath(country,locale)]));
    return locales.map((locale) => ({
      url: base + localizedPath(country,locale),
      lastModified: new Date("2026-10-01"),
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
      lastModified: new Date("2026-10-01"),
      changeFrequency: "yearly" as const,
      priority: kind === "contact" ? 0.5 : 0.4,
      alternates: { languages: { ...languages, "x-default": base + legalPath("en",kind) } },
    }));
  });
  const authorityKinds: AuthorityKind[] = ["about","methodology","sources"];
  const authorityPages=authorityKinds.flatMap(kind=>{const languages=Object.fromEntries(locales.map(locale=>[locale,base+authorityPath(locale,kind)]));return locales.map(locale=>({url:base+authorityPath(locale,kind),lastModified:new Date("2026-10-01"),changeFrequency:"monthly" as const,priority:0.7,alternates:{languages:{...languages,"x-default":base+authorityPath("en",kind)}}}))});
  const articlePages=articleIds.flatMap(id=>{const languages=Object.fromEntries(locales.map(locale=>[locale,base+articlePath(id,locale)]));return locales.map(locale=>({url:base+articlePath(id,locale),lastModified:new Date("2026-10-06"),changeFrequency:"monthly" as const,priority:0.75,alternates:{languages:{...languages,"x-default":base+articlePath(id,"en")}}}))});
  const guideIndexes=locales.map(locale=>({url:base+guideRoots[locale],lastModified:new Date("2026-10-06"),changeFrequency:"monthly" as const,priority:0.8,alternates:{languages:{...Object.fromEntries(locales.map(item=>[item,base+guideRoots[item]])),"x-default":base+guideRoots.en}}}));
  return [...countryPages,...authorityPages,...guideIndexes,...articlePages,...legalPages];
}

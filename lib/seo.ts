import type { Metadata } from "next";
import type { Country } from "./countries";
import { countryName, localizedPath, type Locale } from "./i18n";

export const SITE_URL = "https://netsalarymap.online";
export const TAX_YEAR = 2026;
export const LAST_UPDATED = "2026-10-01";
export const locales: Locale[] = ["en", "es", "de", "fr"];

export function countryHeading(country: Country, locale: Locale) {
  const name = countryName(country, locale);
  if (locale === "es") return `Calculadora de salario neto en ${name} ${TAX_YEAR}`;
  if (locale === "de") return country.id === "austria" ? `Gehaltsrechner Österreich ${TAX_YEAR}` : `Brutto-Netto-Rechner ${name} ${TAX_YEAR}`;
  if (locale === "fr") return `Calculateur de salaire net en ${name} ${TAX_YEAR}`;
  return `${name} Salary Calculator ${TAX_YEAR}`;
}

export function countryDescription(country: Country, locale: Locale) {
  const name = countryName(country, locale);
  const descriptions: Record<Locale, string> = {
    en: `Calculate your ${TAX_YEAR} take-home pay in ${name}. Get one gross-to-net estimate with income tax, employee contributions, minimum wage and a transparent breakdown.`,
    es: `Calcula tu salario neto en ${name} para ${TAX_YEAR}. Obtén una estimación única de bruto a neto con impuestos, cotizaciones, salario mínimo y desglose claro.`,
    de: `Berechne dein Nettogehalt in ${name} für ${TAX_YEAR}. Eine klare Brutto-Netto-Schätzung mit Steuern, Sozialabgaben, Mindestlohn und Aufschlüsselung.`,
    fr: `Calculez votre salaire net en ${name} pour ${TAX_YEAR}. Une estimation brut-net unique avec impôts, cotisations, salaire minimum et détail transparent.`,
  };
  return descriptions[locale];
}

export function languageAlternates(paths: Record<Locale, string>) {
  return { en: paths.en, es: paths.es, de: paths.de, fr: paths.fr, "x-default": paths.en };
}

export function countryMetadata(country: Country, locale: Locale): Metadata {
  const title = countryHeading(country, locale);
  const description = countryDescription(country, locale);
  const paths = Object.fromEntries(locales.map((item) => [item, localizedPath(country, item)])) as Record<Locale, string>;
  const keywords: Record<Locale, string[]> = {
    en: [`${countryName(country, locale)} salary calculator`, "gross to net salary", "net pay calculator", `${TAX_YEAR} income tax`],
    es: [`salario neto ${countryName(country, locale)}`, "calculadora bruto neto", "impuestos sobre el salario", `nómina ${TAX_YEAR}`],
    de: [`Brutto Netto ${countryName(country, locale)}`, "Nettogehalt berechnen", "Gehaltsrechner", `Lohnsteuer ${TAX_YEAR}`],
    fr: [`salaire net ${countryName(country, locale)}`, "calculateur brut net", "impôt sur le salaire", `paie ${TAX_YEAR}`],
  };
  return {
    title,
    description,
    keywords: keywords[locale],
    alternates: { canonical: paths[locale], languages: languageAlternates(paths) },
    openGraph: { type: "website", locale, url: paths[locale], title, description, siteName: "Net Salary Map" },
  };
}

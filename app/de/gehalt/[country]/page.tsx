import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";
import { countries } from "@/lib/countries";
import { countryFromLocalizedSlug, countryName, localizedPath } from "@/lib/i18n";

export function generateStaticParams() { return countries.map((country) => ({ country: localizedPath(country,"de").split("/").pop()! })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryFromLocalizedSlug(countries,"de",slug);
  return {
    title: `Gehaltsrechner ${countryName(country,"de")} 2026 - Brutto zu Netto`,
    description: `Berechne dein geschätztes Nettogehalt in ${countryName(country,"de")} für 2026 inklusive Steuern, Sozialabgaben und Mindestlohn.`,
    alternates: { canonical: localizedPath(country,"de"), languages: { en: localizedPath(country,"en"), es: localizedPath(country,"es"), de: localizedPath(country,"de"), fr: localizedPath(country,"fr"), "x-default": localizedPath(country,"en") } },
  };
}

export default async function GermanCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  return <SalaryCalculator country={countryFromLocalizedSlug(countries,"de",slug)} language="de"/>;
}

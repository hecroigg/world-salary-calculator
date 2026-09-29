import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";
import { countries } from "@/lib/countries";
import { countryFromLocalizedSlug, countryName, localizedPath } from "@/lib/i18n";

export function generateStaticParams() { return countries.map((country) => ({ country: localizedPath(country,"fr").split("/").pop()! })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryFromLocalizedSlug(countries,"fr",slug);
  return {
    title: `Calculateur de salaire ${countryName(country,"fr")} 2026 - Brut en net`,
    description: `Calculez votre salaire net estimé en ${countryName(country,"fr")} pour 2026 avec impôts, cotisations sociales et salaire minimum.`,
    alternates: { canonical: localizedPath(country,"fr"), languages: { en: localizedPath(country,"en"), es: localizedPath(country,"es"), de: localizedPath(country,"de"), fr: localizedPath(country,"fr"), "x-default": localizedPath(country,"en") } },
  };
}

export default async function FrenchCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  return <SalaryCalculator country={countryFromLocalizedSlug(countries,"fr",slug)} language="fr"/>;
}

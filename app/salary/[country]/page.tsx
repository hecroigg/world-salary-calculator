import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";
import { countries, getCountry } from "@/lib/countries";
import { countryName, localizedPath } from "@/lib/i18n";

export function generateStaticParams() { return countries.map((country) => ({ country: country.id })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: id } = await params;
  const country = getCountry(id);
  return {
    title: `${countryName(country,"en")} Salary Calculator 2026 - Gross to Net`,
    description: `Calculate your estimated 2026 net salary in ${countryName(country,"en")}. See income tax, employee contributions, minimum wage and a clear gross-to-net breakdown.`,
    alternates: { canonical: localizedPath(country,"en"), languages: { en: localizedPath(country,"en"), es: localizedPath(country,"es"), de: localizedPath(country,"de"), fr: localizedPath(country,"fr"), "x-default": localizedPath(country,"en") } },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return <SalaryCalculator country={getCountry(country)} language="en"/>;
}

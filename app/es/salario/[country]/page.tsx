import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";
import { countries } from "@/lib/countries";
import { countryFromLocalizedSlug, countryName, localizedPath } from "@/lib/i18n";

export function generateStaticParams() { return countries.map((country) => ({ country: localizedPath(country,"es").split("/").pop()! })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryFromLocalizedSlug(countries,"es",slug);
  return {
    title: `Calculadora de salario neto en ${countryName(country,"es")} 2026`,
    description: `Calcula tu salario neto estimado en ${countryName(country,"es")} para 2026. Impuestos, cotizaciones, salario mínimo y desglose de bruto a neto.`,
    alternates: { canonical: localizedPath(country,"es"), languages: { en: localizedPath(country,"en"), es: localizedPath(country,"es"), de: localizedPath(country,"de"), fr: localizedPath(country,"fr"), "x-default": localizedPath(country,"en") } },
  };
}

export default async function SpanishCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  return <SalaryCalculator country={countryFromLocalizedSlug(countries,"es",slug)} language="es"/>;
}

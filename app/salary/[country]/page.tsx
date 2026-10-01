import type { Metadata } from "next";
import { CountryPageContent } from "@/components/country-page-content";
import { countries, getCountry } from "@/lib/countries";
import { countryMetadata } from "@/lib/seo";

export function generateStaticParams() { return countries.map((country) => ({ country: country.id })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: id } = await params;
  const country = getCountry(id);
  return countryMetadata(country,"en");
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return <CountryPageContent country={getCountry(country)} locale="en"/>;
}

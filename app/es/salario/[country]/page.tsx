import type { Metadata } from "next";
import { CountryPageContent } from "@/components/country-page-content";
import { countries } from "@/lib/countries";
import { countryFromLocalizedSlug, localizedPath } from "@/lib/i18n";
import { countryMetadata } from "@/lib/seo";

export function generateStaticParams() { return countries.map((country) => ({ country: localizedPath(country,"es").split("/").pop()! })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryFromLocalizedSlug(countries,"es",slug);
  return countryMetadata(country,"es");
}

export default async function SpanishCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  return <CountryPageContent country={countryFromLocalizedSlug(countries,"es",slug)} locale="es"/>;
}

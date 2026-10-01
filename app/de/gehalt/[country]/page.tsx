import type { Metadata } from "next";
import { CountryPageContent } from "@/components/country-page-content";
import { countries } from "@/lib/countries";
import { countryFromLocalizedSlug, localizedPath } from "@/lib/i18n";
import { countryMetadata } from "@/lib/seo";

export function generateStaticParams() { return countries.map((country) => ({ country: localizedPath(country,"de").split("/").pop()! })); }

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const { country: slug } = await params;
  const country = countryFromLocalizedSlug(countries,"de",slug);
  return countryMetadata(country,"de");
}

export default async function GermanCountryPage({ params }: { params: Promise<{ country: string }> }) {
  const { country: slug } = await params;
  return <CountryPageContent country={countryFromLocalizedSlug(countries,"de",slug)} locale="de"/>;
}

import type { Metadata } from "next";
import { CountryPageContent } from "@/components/country-page-content";
import { getCountry } from "@/lib/countries";
export const metadata: Metadata = { alternates: { canonical: "/salary/germany" }, robots: { index: false, follow: true } };
export default function Home(){return <CountryPageContent country={getCountry("germany")} locale="en"/>}

import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";
import { countries, englishPath, getCountry, spanishPath } from "@/lib/countries";
export function generateStaticParams(){return countries.map(country=>({country:country.id}))}
export async function generateMetadata({params}:{params:Promise<{country:string}>}):Promise<Metadata>{const {country:id}=await params;const c=getCountry(id);return {title:`${c.en} Salary Calculator 2026 — Gross to Net`,description:`Calculate your estimated 2026 net salary in ${c.en}. See income tax, employee contributions, minimum wage and a clear gross-to-net breakdown.`,alternates:{canonical:englishPath(c),languages:{en:englishPath(c),es:spanishPath(c),"x-default":englishPath(c)}}}}
export default async function CountryPage({params}:{params:Promise<{country:string}>}){const {country}=await params;return <SalaryCalculator country={getCountry(country)} language="en"/>}

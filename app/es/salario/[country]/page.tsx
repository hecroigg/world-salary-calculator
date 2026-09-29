import type { Metadata } from "next";
import { SalaryCalculator } from "@/components/salary-calculator";
import { countries, countryFromSpanishSlug, englishPath, spanishPath } from "@/lib/countries";
export function generateStaticParams(){return countries.map(country=>({country:country.esSlug}))}
export async function generateMetadata({params}:{params:Promise<{country:string}>}):Promise<Metadata>{const {country:slug}=await params;const c=countryFromSpanishSlug(slug);return {title:`Calculadora de salario neto en ${c.es} 2026`,description:`Calcula tu salario neto estimado en ${c.es} para 2026. Impuestos, cotizaciones, salario mínimo y desglose de bruto a neto.`,alternates:{canonical:spanishPath(c),languages:{en:englishPath(c),es:spanishPath(c),"x-default":englishPath(c)}}}}
export default async function SpanishCountryPage({params}:{params:Promise<{country:string}>}){const {country}=await params;return <SalaryCalculator country={countryFromSpanishSlug(country)} language="es"/>}

import type { MetadataRoute } from "next";
import { countries, englishPath, spanishPath } from "@/lib/countries";
const base="https://world-salary-calculator.vercel.app";
export default function sitemap():MetadataRoute.Sitemap{return countries.flatMap(c=>[{url:base+englishPath(c),lastModified:new Date("2026-09-29"),changeFrequency:"monthly" as const,priority:.9,alternates:{languages:{en:base+englishPath(c),es:base+spanishPath(c)}}},{url:base+spanishPath(c),lastModified:new Date("2026-09-29"),changeFrequency:"monthly" as const,priority:.9,alternates:{languages:{en:base+englishPath(c),es:base+spanishPath(c)}}}])}

import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { legalKindFromSlug, legalSlugs } from "@/lib/legal-routes";
import { legalMetadata } from "@/lib/legal-page";

export const generateStaticParams = () => Object.values(legalSlugs.en).map(legal => ({legal}));
export async function generateMetadata({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("en",legal); return kind?legalMetadata("en",kind):{}; }
export default async function Page({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("en",legal); if(!kind) notFound(); return <LegalPage locale="en" kind={kind}/>; }

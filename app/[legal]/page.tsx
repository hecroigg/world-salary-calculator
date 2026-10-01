import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { legalKindFromSlug, legalSlugs } from "@/lib/legal-routes";
import { legalMetadata } from "@/lib/legal-page";
import { AuthorityPage } from "@/components/authority-page";
import { authorityKindFromSlug, authorityMetadata, authoritySlugs } from "@/lib/authority";

export const generateStaticParams = () => [...Object.values(legalSlugs.en),...Object.values(authoritySlugs.en)].map(legal => ({legal}));
export async function generateMetadata({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("en",legal); if(kind) return legalMetadata("en",kind); const authority=authorityKindFromSlug("en",legal); return authority?authorityMetadata("en",authority):{}; }
export default async function Page({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("en",legal); if(kind) return <LegalPage locale="en" kind={kind}/>; const authority=authorityKindFromSlug("en",legal); if(!authority) notFound(); return <AuthorityPage locale="en" kind={authority}/>; }

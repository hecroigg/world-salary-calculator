import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { legalKindFromSlug, legalSlugs } from "@/lib/legal-routes";
import { legalMetadata } from "@/lib/legal-page";
import { AuthorityPage } from "@/components/authority-page";
import { authorityKindFromSlug, authorityMetadata, authoritySlugs } from "@/lib/authority";

export const generateStaticParams = () => [...Object.values(legalSlugs.de),...Object.values(authoritySlugs.de)].map(legal => ({legal}));
export async function generateMetadata({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("de",legal); if(kind) return legalMetadata("de",kind); const authority=authorityKindFromSlug("de",legal); return authority?authorityMetadata("de",authority):{}; }
export default async function Page({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("de",legal); if(kind) return <LegalPage locale="de" kind={kind}/>; const authority=authorityKindFromSlug("de",legal); if(!authority) notFound(); return <AuthorityPage locale="de" kind={authority}/>; }

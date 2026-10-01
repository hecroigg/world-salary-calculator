import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { legalKindFromSlug, legalSlugs } from "@/lib/legal-routes";
import { legalMetadata } from "@/lib/legal-page";
import { AuthorityPage } from "@/components/authority-page";
import { authorityKindFromSlug, authorityMetadata, authoritySlugs } from "@/lib/authority";

export const generateStaticParams = () => [...Object.values(legalSlugs.fr),...Object.values(authoritySlugs.fr)].map(legal => ({legal}));
export async function generateMetadata({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("fr",legal); if(kind) return legalMetadata("fr",kind); const authority=authorityKindFromSlug("fr",legal); return authority?authorityMetadata("fr",authority):{}; }
export default async function Page({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("fr",legal); if(kind) return <LegalPage locale="fr" kind={kind}/>; const authority=authorityKindFromSlug("fr",legal); if(!authority) notFound(); return <AuthorityPage locale="fr" kind={authority}/>; }

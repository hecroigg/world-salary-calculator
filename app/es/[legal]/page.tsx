import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { legalKindFromSlug, legalSlugs } from "@/lib/legal-routes";
import { legalMetadata } from "@/lib/legal-page";
import { AuthorityPage } from "@/components/authority-page";
import { authorityKindFromSlug, authorityMetadata, authoritySlugs } from "@/lib/authority";

export const generateStaticParams = () => [...Object.values(legalSlugs.es),...Object.values(authoritySlugs.es)].map(legal => ({legal}));
export async function generateMetadata({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("es",legal); if(kind) return legalMetadata("es",kind); const authority=authorityKindFromSlug("es",legal); return authority?authorityMetadata("es",authority):{}; }
export default async function Page({params}:{params:Promise<{legal:string}>}) { const {legal}=await params; const kind=legalKindFromSlug("es",legal); if(kind) return <LegalPage locale="es" kind={kind}/>; const authority=authorityKindFromSlug("es",legal); if(!authority) notFound(); return <AuthorityPage locale="es" kind={authority}/>; }

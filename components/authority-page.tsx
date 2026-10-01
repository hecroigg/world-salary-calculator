import { ArrowLeft, Calculator } from "lucide-react";
import { authorityLabels, authorityPath, getAuthorityPage, type AuthorityKind } from "@/lib/authority";
import type { Locale } from "@/lib/i18n";
import { legalNavLabels, legalPath, type LegalKind } from "@/lib/legal-routes";
import { locales } from "@/lib/seo";

const home: Record<Locale,string> = { en:"/salary/germany",es:"/es/salario/alemania",de:"/de/gehalt/deutschland",fr:"/fr/salaire/allemagne" };
const back: Record<Locale,string> = { en:"Back to calculator",es:"Volver a la calculadora",de:"Zurück zum Rechner",fr:"Retour au calculateur" };

export function AuthorityPage({locale,kind}:{locale:Locale;kind:AuthorityKind}) {
  const page=getAuthorityPage(locale,kind);
  const jsonLd={"@context":"https://schema.org","@type":kind==="about"?"AboutPage":"WebPage",name:page.title,description:page.description,url:`https://netsalarymap.online${authorityPath(locale,kind)}`,...(kind==="about"?{about:{"@type":"Organization",name:"Net Salary Map",url:"https://netsalarymap.online",founder:{"@type":"Person",name:"Héctor Fàbrega Roig"}}}:{})};
  return <div className="min-h-screen overflow-x-clip bg-[#f6f8fc] text-slate-950">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/>
    <header className="border-b bg-white"><div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-5"><a href={home[locale]} className="flex min-w-0 items-center gap-3 font-black"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white"><Calculator className="size-5"/></span><span className="hidden truncate sm:inline">Net Salary Map</span></a><nav aria-label="Language" className="flex items-center gap-1">{locales.map(item=><a key={item} href={authorityPath(item,kind)} lang={item} className={`rounded-lg px-2 py-1 text-xs font-bold uppercase ${item===locale?"bg-blue-600 text-white":"text-slate-500 hover:bg-slate-100"}`}>{item}</a>)}</nav><a href={home[locale]} className="flex shrink-0 items-center gap-2 text-sm font-bold text-blue-700"><ArrowLeft className="size-4"/><span className="hidden md:inline">{back[locale]}</span></a></div></header>
    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-5 sm:py-16"><nav aria-label="Breadcrumb" className="mb-6 text-sm font-semibold text-slate-500"><a href={home[locale]} className="hover:text-blue-700">Net Salary Map</a><span className="px-2">/</span><span>{page.title}</span></nav><article className="rounded-[28px] border bg-white p-6 shadow-sm sm:p-10"><p className="text-xs font-bold uppercase tracking-widest text-blue-600">{page.eyebrow}</p><h1 className="mt-3 text-balance text-4xl font-black sm:text-5xl">{page.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{page.intro}</p><div className="mt-10 space-y-9">{page.sections.map(section=><section key={section.heading}><h2 className="text-2xl font-black">{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph} className="mt-3 leading-7 text-slate-600">{paragraph}</p>)}</section>)}</div></article></main>
    <footer className="border-t bg-white"><nav className="mx-auto flex max-w-5xl flex-wrap gap-x-5 gap-y-3 px-5 py-8 text-sm font-semibold text-slate-600">{(["about","methodology","sources"] as AuthorityKind[]).map(item=><a key={item} href={authorityPath(locale,item)}>{authorityLabels[locale][item]}</a>)}{(["privacy","cookies","legal","contact"] as LegalKind[]).map(item=><a key={item} href={legalPath(locale,item)}>{legalNavLabels[locale][item]}</a>)}</nav></footer>
  </div>;
}

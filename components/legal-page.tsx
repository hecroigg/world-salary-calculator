import { Calculator, ArrowLeft, Mail } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { getLegalDocument } from "@/lib/legal";
import { legalPath, type LegalKind } from "@/lib/legal-routes";

const back: Record<Locale,string> = { en: "Back to calculator", es: "Volver a la calculadora", de: "Zurück zum Rechner", fr: "Retour au calculateur" };
const updated: Record<Locale,string> = { en: "Last updated 30 September 2026", es: "Última actualización: 30 de septiembre de 2026", de: "Stand: 30. September 2026", fr: "Dernière mise à jour : 30 septembre 2026" };
const home: Record<Locale,string> = { en: "/salary/germany", es: "/es/salario/alemania", de: "/de/gehalt/deutschland", fr: "/fr/salaire/allemagne" };

export function LegalPage({locale,kind}:{locale:Locale;kind:LegalKind}) {
  const document = getLegalDocument(locale,kind);
  return <div className="min-h-screen bg-[#f6f8fc] text-slate-950">
    <header className="border-b bg-white"><div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4"><a href={home[locale]} className="flex items-center gap-3 font-black"><span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white"><Calculator className="size-5"/></span>Net Salary Map</a><a href={home[locale]} className="flex items-center gap-2 text-sm font-bold text-blue-700"><ArrowLeft className="size-4"/>{back[locale]}</a></div></header>
    <main className="mx-auto max-w-4xl px-5 py-12 sm:py-16"><div className="rounded-[28px] border bg-white p-6 shadow-sm sm:p-10"><p className="text-xs font-bold uppercase tracking-widest text-blue-600">{updated[locale]}</p><h1 className="mt-3 text-4xl font-black sm:text-5xl">{document.title}</h1><p className="mt-5 text-lg leading-8 text-slate-600">{document.intro}</p><div className="mt-10 space-y-9">{document.sections.map(section=><section key={section.heading}><h2 className="text-xl font-black">{section.heading}</h2>{section.paragraphs.map(paragraph=><p key={paragraph} className="mt-3 leading-7 text-slate-600">{paragraph}</p>)}</section>)}</div>{kind==="contact"?<a href="mailto:linkedlab.info@gmail.com" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"><Mail className="size-4"/>linkedlab.info@gmail.com</a>:null}</div></main>
    <footer className="border-t bg-white"><nav className="mx-auto flex max-w-5xl flex-wrap gap-x-5 gap-y-2 px-5 py-8 text-sm font-semibold text-slate-600">{(["privacy","cookies","legal","contact"] as LegalKind[]).map(item=><a key={item} href={legalPath(locale,item)}>{getLegalDocument(locale,item).title}</a>)}</nav></footer>
  </div>;
}

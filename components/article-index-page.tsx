import { ArrowRight, Calculator } from "lucide-react";
import { articleIds, articlePath, getArticle, getArticleDetails, guideRoots } from "@/lib/articles";
import { getCountry } from "@/lib/countries";
import { countryName, localizedPath, type Locale } from "@/lib/i18n";
import { locales } from "@/lib/seo";

const copy:Record<Locale,{eyebrow:string;title:string;intro:string;read:string;calculator:string}>={
  en:{eyebrow:"2026 salary library",title:"Salary guides built around real calculations",intro:"Worked payslips, country comparisons and minimum-wage explainers. Every numerical example uses the same tax engine as the calculators and links to the underlying official sources.",read:"Read guide",calculator:"Open calculator"},
  es:{eyebrow:"Biblioteca salarial 2026",title:"Guías salariales basadas en cálculos reales",intro:"Nóminas calculadas, comparativas entre países y explicaciones de salario mínimo. Cada ejemplo numérico usa el mismo motor fiscal que las calculadoras y enlaza sus fuentes oficiales.",read:"Leer guía",calculator:"Abrir calculadora"},
  de:{eyebrow:"Gehaltsbibliothek 2026",title:"Gehaltsratgeber mit echten Berechnungen",intro:"Berechnete Abrechnungen, Ländervergleiche und Mindestlohn-Erklärungen. Jedes Zahlenbeispiel nutzt denselben Steuermotor wie die Rechner und nennt offizielle Quellen.",read:"Ratgeber lesen",calculator:"Rechner öffnen"},
  fr:{eyebrow:"Bibliothèque salariale 2026",title:"Des guides fondés sur de vrais calculs",intro:"Fiches de paie calculées, comparaisons internationales et explications des salaires minimums. Chaque exemple utilise le même moteur fiscal que les calculateurs et cite ses sources officielles.",read:"Lire le guide",calculator:"Ouvrir le calculateur"},
};

export function ArticleIndexPage({locale}:{locale:Locale}){
  const t=copy[locale];
  const germany=getCountry("germany");
  return <div className="min-h-screen overflow-x-clip bg-[#f6f8fc] text-slate-950">
    <header className="border-b bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-5"><a href={localizedPath(germany,locale)} className="flex items-center gap-3 font-black"><span className="grid size-10 place-items-center rounded-xl bg-blue-600 text-white"><Calculator className="size-5"/></span><span className="hidden sm:inline">Net Salary Map</span></a><nav aria-label="Language" className="flex gap-1">{locales.map(item=><a key={item} href={guideRoots[item]} lang={item} hrefLang={item} className={`rounded-lg px-2 py-1 text-xs font-bold uppercase ${item===locale?"bg-blue-600 text-white":"text-slate-500 hover:bg-slate-100"}`}>{item}</a>)}</nav></div></header>
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-5 sm:py-16"><p className="text-xs font-bold uppercase tracking-widest text-blue-600">{t.eyebrow}</p><h1 className="mt-3 max-w-4xl text-balance text-4xl font-black sm:text-6xl">{t.title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{t.intro}</p><div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">{articleIds.map(id=>{const article=getArticle(id,locale);const details=getArticleDetails(id);const countries=details.countries.slice(0,3).map(getCountry);return <article key={id} className="flex min-w-0 flex-col rounded-3xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"><p className="text-sm" aria-label={countries.map(country=>countryName(country,locale)).join(", ")}>{countries.map(country=>country.flag).join(" ")}</p><h2 className="mt-3 text-xl font-black leading-tight">{article.title}</h2><p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{article.intro}</p><a href={articlePath(id,locale)} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700">{t.read}<ArrowRight className="size-4"/></a></article>})}</div><a href={localizedPath(germany,locale)} className="mt-10 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white">{t.calculator}<ArrowRight className="size-4"/></a></main>
  </div>;
}

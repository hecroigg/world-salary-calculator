import type { Country } from "@/lib/countries";
import { contributionLabel, countryGuides, guideLabels, sourcesFor } from "@/lib/country-guides";
import { countryName, type Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { authorityPath } from "@/lib/authority";
import { articleIds, articlePath, getArticle, getArticleDetails } from "@/lib/articles";
import { relatedCountries } from "@/lib/related-countries";
import { CountryWorkedExamples } from "@/components/country-worked-examples";

const localeTags: Record<Locale,string> = {en:"en-US",es:"es-ES",de:"de-DE",fr:"fr-FR"};
const formatMoney = (value:number,country:Country,locale:Locale) => new Intl.NumberFormat(localeTags[locale],{style:"currency",currency:country.currency,maximumFractionDigits:0}).format(value);

export function CountrySeoContent({country,locale}:{country:Country;locale:Locale}) {
  const t=guideLabels[locale];
  const sources=sourcesFor(country);
  const related=relatedCountries(country);
  const relevantArticles=articleIds.filter(id=>getArticleDetails(id).countries.includes(country.id)).slice(0,4);
  const extra:Record<Locale,{allowances:string;allowanceCopy:string;regional:string;links:string;related:string;guides:string;germany:string;germanyCopy:string}>={
    en:{allowances:"Allowances and deductions",allowanceCopy:`The configured basic allowance is ${formatMoney(country.allowance,country,locale)} per year. Country-specific credits and work deductions are applied by the engine where supported; exceptional personal deductions are not assumed.`,regional:"Regional and payroll differences",links:"Continue researching",related:"Related salary calculators",guides:"Salary guides and worked examples",germany:"Planning life in Germany",germanyCopy:"After estimating take-home pay, compare housing, work and arrival costs with GermanyBase’s practical guides."},
    es:{allowances:"Mínimos y deducciones",allowanceCopy:`El mínimo o deducción básica configurada es ${formatMoney(country.allowance,country,locale)} al año. El motor aplica créditos y gastos laborales cuando están soportados; no presupone deducciones personales excepcionales.`,regional:"Diferencias regionales y de nómina",links:"Seguir investigando",related:"Calculadoras relacionadas",guides:"Guías salariales y ejemplos calculados",germany:"Planificar la vida en Alemania",germanyCopy:"Después de estimar el neto, compara vivienda, trabajo y costes de llegada con las guías prácticas de GermanyBase."},
    de:{allowances:"Freibeträge und Abzüge",allowanceCopy:`Der konfigurierte Grundfreibetrag oder Basisabzug beträgt ${formatMoney(country.allowance,country,locale)} pro Jahr. Unterstützte Gutschriften und Werbungskosten fließen ein; außergewöhnliche persönliche Abzüge werden nicht angenommen.`,regional:"Regionale und abrechnungsbezogene Unterschiede",links:"Weiterführende Informationen",related:"Ähnliche Gehaltsrechner",guides:"Gehaltsratgeber und Rechenbeispiele",germany:"Leben in Deutschland planen",germanyCopy:"Nach der Nettoberechnung helfen die praktischen GermanyBase-Guides bei Wohnen, Arbeit und Ankunftskosten."},
    fr:{allowances:"Abattements et déductions",allowanceCopy:`L’abattement de base configuré est de ${formatMoney(country.allowance,country,locale)} par an. Le moteur applique crédits et frais professionnels lorsqu’ils sont pris en charge, sans supposer de déduction personnelle exceptionnelle.`,regional:"Différences régionales et de paie",links:"Poursuivre la recherche",related:"Calculateurs associés",guides:"Guides salariaux et exemples calculés",germany:"Préparer la vie en Allemagne",germanyCopy:"Après le calcul du net, comparez logement, travail et coûts d’arrivée avec les guides pratiques de GermanyBase."},
  };
  const x=extra[locale];
  return <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-5 lg:px-8">
    <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[1.05fr_.95fr]">
      <article className="min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{country.flag} {countryName(country,locale)}</p>
        <h2 className="mt-2 text-2xl font-black">{t.system}</h2>
        <p className="mt-4 leading-7 text-slate-600">{countryGuides[country.id][locale]}</p>
        <h3 className="mt-7 font-black">{t.contributions}</h3>
        <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">{country.social.map(item=><div key={item.label} className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm"><span className="min-w-0 break-words">{contributionLabel(item.label,locale)}</span><b className="shrink-0 text-right">{item.rate ? `${(item.rate*100).toFixed(item.rate*100%1?2:0)}%` : t.included}</b></div>)}</div>
        <div className="mt-6 rounded-2xl bg-blue-50 p-5"><h3 className="font-black text-blue-950">{t.assumptions}</h3><p className="mt-2 text-sm leading-6 text-blue-950/75">{t.sourceNote}</p></div>
        <h3 className="mt-7 font-black">{x.allowances}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{x.allowanceCopy}</p>
        <h3 className="mt-7 font-black">{x.regional}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{countryGuides[country.id][locale]} {country.note??""}</p>
      </article>
      <article className="min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-black">{t.rates}</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-4 py-3">{t.upTo}</th><th className="px-4 py-3 text-right">{t.rate}</th></tr></thead><tbody className="divide-y">{country.tax.map(([limit,rate],index)=><tr key={`${limit}-${rate}`}><td className="px-4 py-3">{limit===Infinity?`${t.above} ${formatMoney(country.tax[index-1]?.[0]??0,country,locale)}`:formatMoney(limit,country,locale)}</td><td className="px-4 py-3 text-right font-bold">{(rate*100).toFixed(rate*100%1?2:0)}%</td></tr>)}</tbody></table></div>
        <h3 className="mt-7 font-black">{t.sources}</h3>
        <ul className="mt-3 space-y-2">{sources.map(source=><li key={source.url}><a className="text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
        <h3 className="mt-7 font-black">{x.links}</h3><a className="mt-3 block text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href={authorityPath(locale,"methodology")}>{t.assumptions}</a><a className="mt-2 block text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href={authorityPath(locale,"sources")}>{t.sources}</a>
      </article>
    </div>
    <CountryWorkedExamples country={country} locale={locale}/>
    <div className="mt-6 grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-2"><article className="min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7"><h2 className="text-xl font-black">{x.related}</h2><div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">{related.map(item=><a key={item.id} className="rounded-xl bg-slate-50 p-4 font-bold hover:bg-blue-50 hover:text-blue-700" href={localizedPath(item,locale)}>{item.flag} {countryName(item,locale)}</a>)}</div></article><article className="min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7"><h2 className="text-xl font-black">{x.guides}</h2>{relevantArticles.length?<div className="mt-4 space-y-3">{relevantArticles.map(id=><a key={id} className="block font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href={articlePath(id,locale)}>{getArticle(id,locale).title}</a>)}</div>:<p className="mt-3 text-sm leading-7 text-slate-600">{countryGuides[country.id][locale]}</p>}{country.id==="germany"?<div className="mt-6 rounded-2xl bg-blue-50 p-4"><h3 className="font-black text-blue-950">{x.germany}</h3><p className="mt-2 text-sm leading-6 text-blue-950/75">{x.germanyCopy}</p><a href="https://germanybase.de/tools/cost-of-living" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-bold text-blue-800 underline underline-offset-4">GermanyBase</a></div>:null}<a className="mt-4 inline-flex font-bold text-blue-700 underline underline-offset-4" href={authorityPath(locale,"methodology")}>{x.links}</a></article></div>
  </section>;
}

import type { Country } from "@/lib/countries";
import { contributionLabel, countryGuides, guideLabels, sourcesFor } from "@/lib/country-guides";
import { countryName, type Locale } from "@/lib/i18n";

const localeTags: Record<Locale,string> = {en:"en-US",es:"es-ES",de:"de-DE",fr:"fr-FR"};
const formatMoney = (value:number,country:Country,locale:Locale) => new Intl.NumberFormat(localeTags[locale],{style:"currency",currency:country.currency,maximumFractionDigits:0}).format(value);

export function CountrySeoContent({country,locale}:{country:Country;locale:Locale}) {
  const t=guideLabels[locale];
  const sources=sourcesFor(country);
  return <section className="mx-auto w-full min-w-0 max-w-7xl px-4 py-10 sm:px-5 lg:px-8">
    <div className="grid min-w-0 grid-cols-1 gap-6 lg:grid-cols-[1.05fr_.95fr]">
      <article className="min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{country.flag} {countryName(country,locale)}</p>
        <h2 className="mt-2 text-2xl font-black">{t.system}</h2>
        <p className="mt-4 leading-7 text-slate-600">{countryGuides[country.id][locale]}</p>
        <h3 className="mt-7 font-black">{t.contributions}</h3>
        <div className="mt-3 grid min-w-0 grid-cols-1 gap-2 sm:grid-cols-2">{country.social.map(item=><div key={item.label} className="flex min-w-0 items-center justify-between gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm"><span className="min-w-0 break-words">{contributionLabel(item.label,locale)}</span><b className="shrink-0 text-right">{item.rate ? `${(item.rate*100).toFixed(item.rate*100%1?2:0)}%` : t.included}</b></div>)}</div>
        <div className="mt-6 rounded-2xl bg-blue-50 p-5"><h3 className="font-black text-blue-950">{t.assumptions}</h3><p className="mt-2 text-sm leading-6 text-blue-950/75">{t.sourceNote}</p></div>
      </article>
      <article className="min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7">
        <h2 className="text-xl font-black">{t.rates}</h2>
        <div className="mt-4 overflow-hidden rounded-2xl border"><table className="w-full text-left text-sm"><thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-4 py-3">{t.upTo}</th><th className="px-4 py-3 text-right">{t.rate}</th></tr></thead><tbody className="divide-y">{country.tax.map(([limit,rate],index)=><tr key={`${limit}-${rate}`}><td className="px-4 py-3">{limit===Infinity?`${t.above} ${formatMoney(country.tax[index-1]?.[0]??0,country,locale)}`:formatMoney(limit,country,locale)}</td><td className="px-4 py-3 text-right font-bold">{(rate*100).toFixed(rate*100%1?2:0)}%</td></tr>)}</tbody></table></div>
        <h3 className="mt-7 font-black">{t.sources}</h3>
        <ul className="mt-3 space-y-2">{sources.map(source=><li key={source.url}><a className="text-sm font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href={source.url} target="_blank" rel="noreferrer">{source.label}</a></li>)}</ul>
      </article>
    </div>
  </section>;
}

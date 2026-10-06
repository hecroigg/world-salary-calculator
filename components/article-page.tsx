import { ArrowRight, Calculator, ExternalLink } from "lucide-react";
import { articleIds, articlePath, getArticle, getArticleDetails, guideRoots, type ArticleId } from "@/lib/articles";
import { getCountry } from "@/lib/countries";
import { countryName, localizedPath, type Locale } from "@/lib/i18n";
import { calculate } from "@/lib/tax-engine";
import { authorityPath } from "@/lib/authority";
import { locales, SITE_URL } from "@/lib/seo";

const localeTags: Record<Locale, string> = { en: "en-US", es: "es-ES", de: "de-DE", fr: "fr-FR" };

const labels: Record<Locale, {
  guides: string; calculator: string; estimate: string; annualNet: string; monthlyNet: string;
  grossAnnual: string; grossMonthly: string; deductions: string; keep: string; related: string;
  method: string; external: string; sources: string; sourceCopy: string; facts: string; faq: string;
}> = {
  en: { guides: "Salary guides", calculator: "Open calculator", estimate: "Calculated with the live tax engine", annualNet: "Annual net", monthlyNet: "Monthly net", grossAnnual: "gross/year", grossMonthly: "gross/month", deductions: "Deductions", keep: "kept", related: "Related guides", method: "Read the calculation methodology", external: "Practical Germany guides", sources: "Official sources", sourceCopy: "Rates and thresholds used or cross-checked for this article.", facts: "Key figures", faq: "Frequently asked questions" },
  es: { guides: "Guías salariales", calculator: "Abrir calculadora", estimate: "Calculado con el motor fiscal de la web", annualNet: "Neto anual", monthlyNet: "Neto mensual", grossAnnual: "brutos/año", grossMonthly: "brutos/mes", deductions: "Deducciones", keep: "se conserva", related: "Guías relacionadas", method: "Leer la metodología de cálculo", external: "Guías prácticas de Alemania", sources: "Fuentes oficiales", sourceCopy: "Tipos y límites utilizados o contrastados para este artículo.", facts: "Cifras clave", faq: "Preguntas frecuentes" },
  de: { guides: "Gehaltsratgeber", calculator: "Rechner öffnen", estimate: "Mit dem Live-Steuermotor berechnet", annualNet: "Jahresnetto", monthlyNet: "Monatsnetto", grossAnnual: "brutto/Jahr", grossMonthly: "brutto/Monat", deductions: "Abzüge", keep: "verbleiben", related: "Weitere Ratgeber", method: "Berechnungsmethodik lesen", external: "Praktische Deutschland-Guides", sources: "Offizielle Quellen", sourceCopy: "Für diesen Artikel verwendete oder geprüfte Sätze und Grenzen.", facts: "Kennzahlen", faq: "Häufige Fragen" },
  fr: { guides: "Guides salariaux", calculator: "Ouvrir le calculateur", estimate: "Calculé avec le moteur fiscal du site", annualNet: "Net annuel", monthlyNet: "Net mensuel", grossAnnual: "brut/an", grossMonthly: "brut/mois", deductions: "Retenues", keep: "conservés", related: "Guides associés", method: "Lire la méthodologie", external: "Guides pratiques sur l’Allemagne", sources: "Sources officielles", sourceCopy: "Taux et seuils utilisés ou vérifiés pour cet article.", facts: "Chiffres clés", faq: "Questions fréquentes" },
};

function formatMoney(value: number, currency: string, locale: Locale, digits = 0) {
  return new Intl.NumberFormat(localeTags[locale], { style: "currency", currency, minimumFractionDigits: digits, maximumFractionDigits: digits }).format(value);
}

export function ArticlePage({ id, locale }: { id: ArticleId; locale: Locale }) {
  const article = getArticle(id, locale);
  const details = getArticleDetails(id);
  const t = labels[locale];
  const primaryCountry = getCountry(details.countries[0] ?? "germany");
  const path = articlePath(id, locale);
  const examples = details.examples.map((example) => {
    const country = getCountry(example.countryId);
    return { ...example, country, result: calculate(country, example.gross, example.period, example.hours, example.precision) };
  });
  const relatedIds = articleIds.filter((item) => item !== id).sort((a, b) => {
    const aShared = getArticleDetails(a).countries.some((country) => details.countries.includes(country));
    const bShared = getArticleDetails(b).countries.some((country) => details.countries.includes(country));
    return Number(bShared) - Number(aShared);
  }).slice(0, 4);

  const jsonLd = { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", headline: article.title, description: article.description, inLanguage: localeTags[locale], datePublished: "2026-10-06", dateModified: "2026-10-06", mainEntityOfPage: `${SITE_URL}${path}`, author: { "@type": "Person", name: "Héctor Fàbrega Roig" }, publisher: { "@type": "Organization", name: "Net Salary Map", url: SITE_URL } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Net Salary Map", item: `${SITE_URL}${localizedPath(primaryCountry, locale)}` },
      { "@type": "ListItem", position: 2, name: t.guides, item: `${SITE_URL}${guideRoots[locale]}` },
      { "@type": "ListItem", position: 3, name: article.title, item: `${SITE_URL}${path}` },
    ] },
    { "@type": "FAQPage", mainEntity: article.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ] };

  return <div className="min-h-screen overflow-x-clip bg-[#f6f8fc] text-slate-950">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    <header className="border-b bg-white"><div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-4 sm:px-5">
      <a href={localizedPath(primaryCountry, locale)} className="flex min-w-0 items-center gap-3 font-black"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-600 text-white"><Calculator className="size-5" /></span><span className="hidden truncate sm:inline">Net Salary Map</span></a>
      <nav aria-label="Language" className="flex items-center gap-1">{locales.map((item) => <a key={item} href={articlePath(id, item)} lang={item} hrefLang={item} className={`rounded-lg px-2 py-1 text-xs font-bold uppercase ${item === locale ? "bg-blue-600 text-white" : "text-slate-500 hover:bg-slate-100"}`}>{item}</a>)}</nav>
      <a href={localizedPath(primaryCountry, locale)} className="hidden shrink-0 text-sm font-bold text-blue-700 md:block">{t.calculator}: {countryName(primaryCountry, locale)}</a>
    </div></header>

    <main className="mx-auto max-w-4xl px-4 py-10 sm:px-5 sm:py-16">
      <nav aria-label="Breadcrumb" className="mb-7 text-sm font-semibold text-slate-500"><a href={localizedPath(primaryCountry, locale)}>Net Salary Map</a><span className="px-2">/</span><a href={guideRoots[locale]}>{t.guides}</a></nav>
      <article className="rounded-[28px] border bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{t.guides} · 2026</p>
        <h1 className="mt-3 text-balance text-4xl font-black sm:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">{article.intro}</p>
        <a href={localizedPath(primaryCountry, locale)} className="mt-7 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white hover:bg-blue-700">{t.calculator}: {countryName(primaryCountry, locale)}<ArrowRight className="size-4" /></a>

        {article.facts?.length ? <section className="mt-9" aria-labelledby="key-figures"><h2 id="key-figures" className="text-xl font-black">{t.facts}</h2><div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">{article.facts.map((fact) => <div key={`${fact.label}-${fact.value}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-sm font-bold text-slate-500">{fact.label}</p><p className="mt-1 text-xl font-black text-slate-950">{fact.value}</p>{fact.detail ? <p className="mt-1 text-sm text-slate-600">{fact.detail}</p> : null}</div>)}</div></section> : null}

        {examples.length ? <section className="my-9 rounded-2xl bg-[#101c3b] p-5 text-white sm:p-7" aria-labelledby="live-examples"><p id="live-examples" className="text-sm font-bold text-blue-200">{t.estimate}</p><div className={`mt-4 grid grid-cols-1 gap-4 ${examples.length > 1 ? "sm:grid-cols-2" : ""}`}>{examples.map(({ country, gross, period, result }) => {
          const annualGross = period === "monthly" ? gross * 12 : gross;
          return <div key={`${country.id}-${gross}`} className="rounded-xl bg-white/8 p-4 ring-1 ring-white/10"><p className="text-sm font-bold text-blue-200">{country.flag} {countryName(country, locale)}</p><p className="mt-2 text-sm text-slate-300">{formatMoney(gross, country.currency, locale)} {period === "monthly" ? t.grossMonthly : t.grossAnnual}</p><p className="mt-1 text-3xl font-black">{formatMoney(result.annualNet, country.currency, locale)}</p><p className="text-sm text-slate-300">{t.annualNet} · {formatMoney(result.annualNet / 12, country.currency, locale, 2)} {t.monthlyNet.toLowerCase()}</p><div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-300"><span>{t.deductions}: {formatMoney(annualGross - result.annualNet, country.currency, locale)}</span><span>{result.keep.toFixed(2)}% {t.keep}</span></div></div>;
        })}</div></section> : null}

        <div className="space-y-9">{article.sections.map((section) => <section key={section.heading}><h2 className="text-2xl font-black">{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph} className="mt-3 leading-7 text-slate-600">{paragraph}</p>)}</section>)}</div>

        <section className="mt-10 border-t pt-8"><h2 className="text-2xl font-black">{t.faq}</h2>{article.faq.map((item) => <details key={item.question} className="border-b py-4"><summary className="cursor-pointer font-bold">{item.question}</summary><p className="mt-2 leading-7 text-slate-600">{item.answer}</p></details>)}</section>

        {details.sources.length ? <section className="mt-9 rounded-2xl border border-slate-200 bg-slate-50 p-5" aria-labelledby="official-sources"><h2 id="official-sources" className="text-xl font-black">{t.sources}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{t.sourceCopy}</p><ul className="mt-4 space-y-2">{details.sources.map((item) => <li key={item.url}><a href={item.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-start gap-2 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4"><ExternalLink className="mt-1 size-4 shrink-0" />{item.label[locale]}</a></li>)}</ul></section> : null}

        <aside className="mt-9 rounded-2xl bg-blue-50 p-5"><a className="font-bold text-blue-800 underline underline-offset-4" href={authorityPath(locale, "methodology")}>{t.method}</a>{details.countries.includes("germany") ? <p className="mt-3 text-sm leading-6 text-blue-950/75">{locale === "es" ? "Para vivienda, trabajo y trámites, consulta" : locale === "de" ? "Für Wohnen, Arbeit und Behörden siehe" : locale === "fr" ? "Pour le logement, le travail et les démarches, consultez" : "For housing, work and relocation, see"}{" "}<a className="font-bold underline" href="https://germanybase.de/guides/working-in-germany" target="_blank" rel="noopener noreferrer">{t.external}</a>.</p> : null}</aside>
      </article>

      <section className="mt-8"><h2 className="text-xl font-black">{t.related}</h2><div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">{relatedIds.map((item) => <a key={item} href={articlePath(item, locale)} className="rounded-2xl border bg-white p-4 font-bold shadow-sm hover:border-blue-300">{getArticle(item, locale).title}</a>)}</div></section>
    </main>
  </div>;
}

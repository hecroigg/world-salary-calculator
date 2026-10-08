import type { Metadata } from "next";
import { Calculator, Globe2, ShieldCheck, BookOpen, ArrowRight } from "lucide-react";
import { countries } from "@/lib/countries";
import { localizedPath } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Net Salary Map — Gross to net salary calculators by country",
  description: "Compare gross-to-net salary estimates across 25 countries with country-specific tax, social contribution, minimum-wage and methodology notes.",
  alternates: { canonical: "https://netsalarymap.online/" },
  openGraph: {
    title: "Net Salary Map — Gross to net salary calculators by country",
    description: "Country-specific salary calculators, worked examples and source-backed methodology for 25 countries.",
    url: "https://netsalarymap.online/",
    type: "website",
  },
};

export default function Home() {
  return <main className="min-h-screen bg-[#f6f8fc] text-[#111827]">
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 lg:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="grid size-11 place-items-center rounded-xl bg-[#2155f5] text-white shadow-lg shadow-blue-200"><Calculator className="size-5"/></span>
          <span><b className="block text-lg leading-none">Net Salary Map</b><small className="mt-1 block text-xs text-slate-500">2026 salary calculators</small></span>
        </a>
        <nav className="flex flex-wrap justify-end gap-4 text-sm font-bold text-slate-600">
          <a className="hover:text-blue-700" href="/guides">Guides</a>
          <a className="hover:text-blue-700" href="/methodology">Methodology</a>
          <a className="hover:text-blue-700" href="/sources">Sources</a>
          <a className="hover:text-blue-700" href="/about">About</a>
        </nav>
      </div>
    </header>

    <section className="mx-auto max-w-7xl px-5 pb-14 pt-14 lg:px-8 lg:pt-20">
      <div className="max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700"><Globe2 className="size-3.5"/>25 countries · 4 languages · 2026 rules</div>
        <h1 className="text-balance text-4xl font-black tracking-tight sm:text-6xl">See what a salary actually looks like after tax.</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Choose a country, enter your gross salary and inspect estimated tax, social contributions, net pay and the assumptions behind the result. Each country page includes source links and worked examples instead of a calculator alone.</p>
      </div>
      <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
        <div className="rounded-2xl border bg-white p-4 shadow-sm"><ShieldCheck className="size-5 text-blue-600"/><b className="mt-3 block">Source-backed</b><p className="mt-1 text-sm leading-6 text-slate-500">Official tax, social-insurance and labour sources are linked where available.</p></div>
        <div className="rounded-2xl border bg-white p-4 shadow-sm"><Calculator className="size-5 text-blue-600"/><b className="mt-3 block">Country-specific</b><p className="mt-1 text-sm leading-6 text-slate-500">Rules, thresholds, contribution structures and precision options vary by country.</p></div>
        <div className="rounded-2xl border bg-white p-4 shadow-sm"><BookOpen className="size-5 text-blue-600"/><b className="mt-3 block">Explain the result</b><p className="mt-1 text-sm leading-6 text-slate-500">Worked examples and methodology notes show what the estimate includes and where it can differ.</p></div>
      </div>
    </section>

    <section className="border-y bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div><p className="text-xs font-bold uppercase tracking-widest text-blue-600">Choose a calculator</p><h2 className="mt-2 text-3xl font-black">25 country salary calculators</h2></div>
          <a className="inline-flex items-center gap-1 font-bold text-blue-700" href="/guides">Read salary guides <ArrowRight className="size-4"/></a>
        </div>
        <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {countries.map(country => <a key={country.id} href={localizedPath(country,"en")} className="group flex items-center justify-between rounded-2xl border bg-slate-50 px-4 py-4 transition hover:border-blue-200 hover:bg-blue-50">
            <span><span className="mr-2 text-xl">{country.flag}</span><b>{country.en}</b></span><ArrowRight className="size-4 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-700"/>
          </a>)}
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 lg:grid-cols-2 lg:px-8">
      <article className="rounded-3xl border bg-white p-7 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">How to use the estimate</p>
        <h2 className="mt-2 text-2xl font-black">Start with gross salary, then refine the assumptions.</h2>
        <p className="mt-4 leading-7 text-slate-600">The first result is an estimate using standard assumptions. Countries such as Germany, Spain, Switzerland, the United States and Canada expose extra options because tax class, region, canton, state or province can materially change take-home pay.</p>
        <a className="mt-5 inline-flex items-center gap-1 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href="/methodology">Read the calculation methodology <ArrowRight className="size-4"/></a>
      </article>
      <article className="rounded-3xl border bg-white p-7 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-600">What this site does not claim</p>
        <h2 className="mt-2 text-2xl font-black">An estimate is not a payslip or tax return.</h2>
        <p className="mt-4 leading-7 text-slate-600">Employer benefits, deductions, local taxes, family circumstances, special allowances and payroll timing can change the final number. Every calculator page states the main assumptions and links to source material so you can verify the part that matters for your decision.</p>
        <a className="mt-5 inline-flex items-center gap-1 font-bold text-blue-700 underline decoration-blue-200 underline-offset-4" href="/sources">See the source directory <ArrowRight className="size-4"/></a>
      </article>
    </section>

    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-500 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:justify-between"><b className="text-slate-900">Net Salary Map</b><span>Educational estimates · Updated for 2026</span></div>
        <nav className="flex flex-wrap gap-x-5 gap-y-2"><a href="/about">About</a><a href="/methodology">Methodology</a><a href="/sources">Sources</a><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/legal">Legal</a><a href="/contact">Contact</a></nav>
      </div>
    </footer>
  </main>;
}

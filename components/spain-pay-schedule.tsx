"use client";
import { useState } from "react";
import type { Locale } from "@/lib/i18n";
import { annualPayIllustration } from "@/lib/pay-schedule";

const translations: Record<Locale,{title:string;intro:string;annual:string;monthly:string;gross:string;net:string;source:string;warning:string;monthlyInput:string;sourceText:string}> = {
 en:{title:"Spain: 12 or 14 salary payments?",intro:"Compare how the same annual gross salary looks if paid in 12 or 14 equal instalments. The yearly amount stays the same; how you receive it can change your monthly budget.",annual:"Annual gross salary",monthly:"Equal instalments",gross:"Illustrative gross per payment",net:"Annual estimated net divided per payment",source:"Official minimum-wage reference",warning:"This is a budgeting illustration, NOT a payroll simulation. Real extra payments can differ from ordinary months; income tax withholding, contribution bases and deductions are not necessarily spread equally. The annual net estimate above is approximate.",monthlyInput:"When entering a monthly amount in the main calculator, we assume 12 months. Enter the annual gross from your job offer to compare 12 and 14 payments accurately.",sourceText:"BOE: 2026 minimum wage (€1,221/month, at least €17,094/year)"},
 es:{title:"España: ¿12 o 14 pagas?",intro:"Comprueba cómo se reparte el mismo salario bruto anual en 12 o 14 pagos iguales. El importe del año no cambia, pero sí el presupuesto mensual.",annual:"Salario bruto anual",monthly:"Pagas iguales",gross:"Bruto orientativo por paga",net:"Neto anual estimado dividido por paga",source:"Referencia oficial del SMI",warning:"Es una distribución ilustrativa, NO una simulación de nómina. Las pagas extra y las retenciones reales pueden ser distintas; IRPF, bases de cotización y deducciones no se distribuyen necesariamente por igual. El neto anual calculado es aproximado.",monthlyInput:"En la calculadora principal, un bruto mensual equivale a 12 meses. Introduce el bruto anual de tu oferta para comparar correctamente 12 y 14 pagas.",sourceText:"BOE: salario mínimo 2026 (1.221 €/mes y al menos 17.094 €/año)"},
 de:{title:"Spanien: 12 oder 14 Gehaltszahlungen?",intro:"Vergleiche, wie sich dasselbe Jahresbrutto rechnerisch auf 12 oder 14 gleich hohe Zahlungen verteilt. Das Jahresgehalt bleibt unverändert.",annual:"Jahresbrutto",monthly:"Gleiche Zahlungen",gross:"Beispiel-Brutto je Zahlung",net:"Geschätztes Jahresnetto je Zahlung",source:"Amtlicher Mindestlohn",warning:"Nur eine Budget-Aufteilung, keine Lohnabrechnung. Sonderzahlungen, IRPF-Einbehalt, Sozialabgaben und Abzüge werden in der Praxis nicht immer gleichmäßig verteilt. Das Jahresnetto ist eine Schätzung.",monthlyInput:"Die Hauptberechnung behandelt Monatsbrutto als 12 Jahresmonate. Für den Vergleich das Jahresbrutto aus dem Arbeitsangebot eingeben.",sourceText:"Spanisches BOE: Mindestlohn 2026 (€1.221/Monat, mindestens €17.094/Jahr)"},
 fr:{title:"Espagne : 12 ou 14 versements ?",intro:"Comparez le même salaire brut annuel réparti à titre indicatif en 12 ou 14 versements égaux. Le montant annuel ne change pas.",annual:"Salaire brut annuel",monthly:"Versements égaux",gross:"Brut indicatif par versement",net:"Net annuel estimé réparti par versement",source:"Salaire minimum officiel",warning:"Il s'agit d'une répartition budgétaire, PAS d'une simulation de fiche de paie. Les primes, retenues IRPF et cotisations réelles peuvent varier. Le net annuel est estimé.",monthlyInput:"Le calculateur principal interprète un salaire mensuel comme 12 mois. Indiquez le brut annuel de votre offre pour comparer 12 et 14 versements.",sourceText:"BOE : salaire minimum 2026 (1 221 €/mois, au moins 17 094 €/an)"}
};
const locales: Record<Locale,string> = {en:"en-GB",es:"es-ES",de:"de-DE",fr:"fr-FR"};
export function SpainPaySchedule({annualGross,annualNet,locale,annualInput}:{annualGross:number;annualNet:number;locale:Locale;annualInput:boolean}) {
  const [payments,setPayments]=useState<12|14>(14);
  const t=translations[locale];
  const result=annualPayIllustration(annualGross,annualNet);
  const selected=payments===12?result.twelve:result.fourteen;
  const euro=(amount:number)=>new Intl.NumberFormat(locales[locale],{style:"currency",currency:"EUR",maximumFractionDigits:2}).format(amount);
  return <section className="mx-auto w-full max-w-7xl px-4 pb-9 sm:px-5 lg:px-8" aria-labelledby="spanish-pay-schedule">
    <div className="rounded-3xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
      <h2 id="spanish-pay-schedule" className="text-2xl font-black">{t.title}</h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700">{t.intro}</p>
      <p className="mt-3 text-sm font-semibold">{t.annual}: {euro(result.annualGross)}</p>
      <div className="mt-5 flex flex-wrap items-center gap-3"><span className="text-sm font-semibold">{t.monthly}:</span>
        {([12,14] as const).map(n=><button key={n} type="button" aria-pressed={payments===n} onClick={()=>setPayments(n)} className={`rounded-xl border px-4 py-2 text-sm font-bold ${payments===n?"border-blue-600 bg-blue-600 text-white":"border-slate-200 bg-white text-slate-800"}`}>{n}</button>)}
      </div>
      <div aria-live="polite" className="mt-5 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-blue-50 p-4"><p className="text-sm text-slate-600">{t.gross}</p><p className="mt-1 text-2xl font-black">{euro(selected.gross)}</p></div>
        <div className="rounded-xl bg-slate-50 p-4"><p className="text-sm text-slate-600">{t.net}</p><p className="mt-1 text-2xl font-black">{euro(selected.net)}</p></div>
      </div>
      {!annualInput && <p className="mt-4 text-sm font-semibold text-amber-900">{t.monthlyInput}</p>}
      <p className="mt-4 text-xs leading-6 text-slate-600">{t.warning}</p>
      <a className="mt-3 inline-block text-sm font-bold text-blue-700 underline underline-offset-4" href="https://www.boe.es/buscar/act.php?id=BOE-A-2026-3815" target="_blank" rel="noopener noreferrer">{t.source}: {t.sourceText}</a>
      <p className="mt-2 text-xs text-slate-500">2026 · {t.source}</p>
    </div>
  </section>;
}

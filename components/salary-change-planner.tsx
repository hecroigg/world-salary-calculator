"use client";

import { useMemo, useState } from "react";
import type { Country } from "@/lib/countries";
import { calculate, type PrecisionOptions } from "@/lib/tax-engine";
import type { Locale } from "@/lib/i18n";

const labels: Record<Locale, { heading:string; lead:string; raise:string; original:string; proposal:string; monthly:string; yearly:string; difference:string; savings:string; notice:string }> = {
 en:{heading:"What would a salary change mean for your take-home pay?",lead:"Compare the current salary with a realistic proposed raise or cut, keeping your selected personal tax assumptions. This uses the same country calculation as above.",raise:"Change in gross salary",original:"Current estimated net",proposal:"New estimated net",monthly:"Monthly net change",yearly:"Annual net change",difference:"Gross change",savings:"Share of extra gross kept after estimated deductions",notice:"A planning scenario, not a payslip or a guaranteed raise. Tax thresholds, family deductions, location and payroll timing may change the result."},
 es:{heading:"¿Cuánto dinero neto ganarías con un cambio de sueldo?",lead:"Compara tu sueldo con una subida o bajada hipotética manteniendo las circunstancias fiscales que has elegido. Se utiliza la misma calculadora que arriba.",raise:"Cambio del salario bruto",original:"Neto estimado actual",proposal:"Nuevo neto estimado",monthly:"Diferencia neta mensual",yearly:"Diferencia neta anual",difference:"Cambio del bruto",savings:"Parte del aumento bruto que conservarías",notice:"Simulación orientativa, no una nómina ni una subida garantizada. Los tramos, deducciones, ubicación y reglas de nómina pueden variar."},
 de:{heading:"Wie verändert eine Gehaltserhöhung dein Nettogehalt?",lead:"Vergleiche dein aktuelles Einkommen mit einer angenommenen Erhöhung oder Kürzung bei denselben persönlichen Steuereinstellungen wie oben.",raise:"Änderung des Bruttogehalts",original:"Geschätztes Netto bisher",proposal:"Geschätztes Netto danach",monthly:"Nettoänderung pro Monat",yearly:"Nettoänderung pro Jahr",difference:"Bruttoänderung",savings:"Anteil der Bruttoerhöhung, der netto verbleibt",notice:"Ein Planungsszenario, keine verbindliche Lohnabrechnung. Steuergrenzen, Familienabzüge, Arbeitsort und Lohnabrechnung können abweichen."},
 fr:{heading:"Quel serait votre net après une augmentation ?",lead:"Comparez votre salaire actuel à une hausse ou baisse hypothétique, en gardant les mêmes hypothèses personnelles et fiscales que dans le calculateur.",raise:"Variation du brut",original:"Net estimé actuel",proposal:"Nouveau net estimé",monthly:"Écart net mensuel",yearly:"Écart net annuel",difference:"Variation du brut",savings:"Part de l'augmentation brute conservée en net",notice:"Scénario indicatif et non bulletin de paie ni augmentation garantie. Seuils, déductions, lieu et règles de paie peuvent modifier le résultat."}
};

export function SalaryChangePlanner({country,locale,gross,period,precision}:{country:Country;locale:Locale;gross:number;period:"monthly"|"annual";precision:PrecisionOptions}) {
 const [percent,setPercent]=useState(10);
 const t=labels[locale];
 const values=useMemo(()=>{
   const current=calculate(country,Math.max(0,gross),period,40,precision);
   const nextGross=Math.max(0,gross*(1+percent/100));
   const next=calculate(country,nextGross,period,40,precision);
   const difference=next.annualNet-current.annualNet;
   const grossDifference=(nextGross-gross)*(period==="monthly"?12:1);
   return {current,next,difference,grossDifference,retained:grossDifference>0?difference/grossDifference*100:null};
 },[country,gross,percent,period,precision]);
 const money=(n:number)=>new Intl.NumberFormat(({en:"en-US",es:"es-ES",de:"de-DE",fr:"fr-FR"} as const)[locale],{style:"currency",currency:country.currency,maximumFractionDigits:0}).format(n);
 return <section className="mx-auto w-full min-w-0 max-w-7xl px-4 pb-8 sm:px-5 lg:px-8" aria-labelledby="salary-planning-title">
  <div className="rounded-3xl border border-blue-200 bg-white p-5 shadow-sm sm:p-7">
   <p className="text-xs font-bold uppercase tracking-widest text-blue-700">Scenario lab · 2026</p>
   <h2 id="salary-planning-title" className="mt-2 text-2xl font-black">{t.heading}</h2>
   <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{t.lead}</p>
   <label className="mt-6 block max-w-xl">
    <span className="flex justify-between gap-3 text-sm font-bold"><span>{t.raise}</span><span>{percent>0?"+":""}{percent}%</span></span>
    <input className="mt-3 w-full accent-blue-600" type="range" min="-30" max="50" step="5" value={percent} onChange={e=>setPercent(Number(e.target.value))} aria-label={t.raise}/>
    <span className="mt-1 flex justify-between text-xs text-slate-500"><span>−30%</span><span>+50%</span></span>
   </label>
   <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-semibold text-slate-500">{t.original}</p><p className="mt-2 break-words text-xl font-black">{money(values.current.annualNet/12)} / mo</p></div>
    <div className="rounded-2xl bg-blue-50 p-4"><p className="text-xs font-semibold text-blue-700">{t.proposal}</p><p className="mt-2 break-words text-xl font-black">{money(values.next.annualNet/12)} / mo</p></div>
    <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-semibold text-slate-500">{t.monthly}</p><p className="mt-2 break-words text-xl font-black">{values.difference>0?"+":""}{money(values.difference/12)}</p></div>
    <div className="rounded-2xl bg-slate-50 p-4"><p className="text-xs font-semibold text-slate-500">{t.yearly}</p><p className="mt-2 break-words text-xl font-black">{values.difference>0?"+":""}{money(values.difference)}</p></div>
   </div>
   {values.retained!==null && <p className="mt-4 text-sm font-semibold text-slate-700">{t.savings}: {values.retained.toFixed(1)}%</p>}
   <p className="mt-3 text-xs leading-6 text-slate-500">{t.notice}</p>
  </div>
 </section>;
}

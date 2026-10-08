import type { Country } from "@/lib/countries";
import { countryName, type Locale } from "@/lib/i18n";
import { calculate } from "@/lib/tax-engine";

const localeTags: Record<Locale,string> = {en:"en-US",es:"es-ES",de:"de-DE",fr:"fr-FR"};

const scenarios: Record<string,[number,number]> = {
  germany: [3000, 5000],
  spain: [2000, 3500],
  france: [2500, 4500],
  portugal: [1400, 2500],
  italy: [2200, 3800],
  netherlands: [3200, 5200],
  belgium: [3000, 5000],
  luxembourg: [4000, 6500],
  austria: [3000, 5000],
  switzerland: [6500, 9500],
  "united-kingdom": [2500, 4500],
  ireland: [3200, 5200],
  denmark: [35000, 55000],
  sweden: [35000, 55000],
  norway: [45000, 70000],
  finland: [3000, 5000],
  poland: [7000, 12000],
  "czech-republic": [45000, 75000],
  greece: [1400, 2500],
  hungary: [600000, 1000000],
  romania: [7000, 12000],
  croatia: [1600, 2800],
  bulgaria: [2500, 4500],
  "united-states": [5000, 8500],
  canada: [5000, 8000],
};

const copy: Record<Locale,{eyebrow:string;title:string;intro:string;gross:string;net:string;deductions:string;keep:string;note:string}> = {
  en: {eyebrow:"Worked examples",title:"Two salary scenarios using this calculator",intro:"These are illustrative monthly gross salaries, not national averages. They use the calculator's default assumptions so you can see how the model behaves at two different income levels.",gross:"Gross / month",net:"Estimated net",deductions:"Estimated deductions",keep:"Kept",note:"Change the salary and personal options above for your own situation. Regional, family and payroll-specific rules can change the result."},
  es: {eyebrow:"Ejemplos calculados",title:"Dos escenarios salariales con esta calculadora",intro:"Son salarios brutos mensuales ilustrativos, no medias nacionales. Usan los supuestos por defecto para mostrar cómo cambia el resultado entre dos niveles de ingresos.",gross:"Bruto / mes",net:"Neto estimado",deductions:"Deducciones estimadas",keep:"Conservas",note:"Cambia el salario y las opciones personales de arriba para tu situación. Las reglas regionales, familiares y de nómina pueden modificar el resultado."},
  de: {eyebrow:"Rechenbeispiele",title:"Zwei Gehaltsszenarien mit diesem Rechner",intro:"Das sind beispielhafte monatliche Bruttogehälter, keine Landesdurchschnitte. Sie verwenden die Standardannahmen des Rechners und zeigen, wie sich das Ergebnis bei zwei Einkommensstufen verändert.",gross:"Brutto / Monat",net:"Geschätztes Netto",deductions:"Geschätzte Abzüge",keep:"Verbleibend",note:"Passe Gehalt und persönliche Optionen oben an deine Situation an. Regionale, familiäre und abrechnungsbezogene Regeln können das Ergebnis verändern."},
  fr: {eyebrow:"Exemples calculés",title:"Deux scénarios de salaire avec ce calculateur",intro:"Il s'agit de salaires bruts mensuels illustratifs, pas de moyennes nationales. Ils utilisent les hypothèses par défaut du calculateur pour montrer l'effet de deux niveaux de revenu.",gross:"Brut / mois",net:"Net estimé",deductions:"Prélèvements estimés",keep:"Conservé",note:"Modifiez le salaire et les options personnelles ci-dessus pour votre situation. Les règles régionales, familiales et de paie peuvent modifier le résultat."},
};

function money(value:number,country:Country,locale:Locale){
  return new Intl.NumberFormat(localeTags[locale],{style:"currency",currency:country.currency,maximumFractionDigits:0}).format(value);
}

export function CountryWorkedExamples({country,locale}:{country:Country;locale:Locale}) {
  const amounts=scenarios[country.id] || [3000,5000];
  const t=copy[locale];
  const rows=amounts.map(gross=>({gross,result:calculate(country,gross,"monthly",40)}));
  return <article className="mt-6 min-w-0 rounded-3xl border bg-white p-5 shadow-sm sm:p-7">
    <p className="text-xs font-bold uppercase tracking-widest text-blue-600">{t.eyebrow}</p>
    <h2 className="mt-2 text-2xl font-black">{countryName(country,locale)}: {t.title}</h2>
    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{t.intro}</p>
    <div className="mt-5 overflow-hidden rounded-2xl border">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-50 text-xs uppercase tracking-wider text-slate-500"><tr><th className="px-4 py-3">{t.gross}</th><th className="px-4 py-3">{t.net}</th><th className="px-4 py-3">{t.deductions}</th><th className="px-4 py-3 text-right">{t.keep}</th></tr></thead>
        <tbody className="divide-y">{rows.map(({gross,result})=><tr key={gross}><td className="px-4 py-3 font-bold">{money(gross,country,locale)}</td><td className="px-4 py-3">{money(result.net,country,locale)}</td><td className="px-4 py-3">{money(result.deductions,country,locale)}</td><td className="px-4 py-3 text-right font-bold">{result.keep.toFixed(1)}%</td></tr>)}</tbody>
      </table>
    </div>
    <p className="mt-4 text-xs leading-6 text-slate-500">{t.note}</p>
  </article>;
}

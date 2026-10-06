import type { Locale } from "../i18n";
import type { ArticleLocale } from "../article-types";

export type GroupOneId =
  | "spain-2000"
  | "france-3000"
  | "netherlands-4000"
  | "uk-40000";

export const groupOne: Record<GroupOneId, Record<Locale, ArticleLocale>> = {
  "spain-2000": {
    en: {
      slug: "net-salary-spain-2000-gross",
      title: "Net Salary in Spain for €2,000 Gross a Month (2026)",
      description: "A worked 2026 Spanish payslip for €2,000 gross per month, with IRPF, employee Social Security and 12-versus-14-payment figures.",
      intro: "On our standard 2026 profile, €2,000 gross a month produces an estimated €1,600 net. That is a single, reproducible figure: a single employee aged 30, no children, a permanent contract, the average regional IRPF scale and 12 salary payments.",
      facts: [
        { label: "Gross salary", value: "€2,000/month", detail: "€24,000 per year" },
        { label: "Estimated net", value: "€1,600/month", detail: "€19,200 per year" },
        { label: "Employee Social Security", value: "€129.60/month", detail: "6.48% in this model" },
      ],
      sections: [
        { heading: "The payslip in numbers", paragraphs: ["The estimate deducts €129.60 a month for employee Social Security and about €270.37 for IRPF. Total deductions are therefore €399.97, leaving €1,600.03. Rounded to the nearest euro, the take-home figure is €1,600.", "IRPF is not a flat 19% charge on the whole salary. The calculation first applies employee contributions, the €2,000 employment-expense deduction, the work-income reduction where applicable and the personal minimum. The remaining base then moves through the state and average regional bands."] },
        { heading: "What changes with 14 payments", paragraphs: ["If the contract states €24,000 gross a year in 14 equal payments, each gross payment is €1,714.29 instead of €2,000. The annual net remains close to €19,200, but ordinary monthly cash flow is lower and two extra payments arrive during the year.", "Do not compare a 14-payment offer with a 12-payment offer by looking only at the monthly number. Compare €24,000 annual gross with €24,000 annual gross, then check whether extra payments are prorated."] },
        { heading: "When this figure moves", paragraphs: ["Madrid, Catalonia, Andalusia and the other autonomous communities use different regional IRPF scales. Children, disability, pension contributions and a temporary contract also change withholding. In the calculator, choosing a lower or higher regional profile moves the estimate by about four percent of calculated IRPF, not four percent of gross pay.", "The legal 2026 minimum is €1,221 in 14 payments, or €17,094 a year. A €24,000 salary is €6,906 above that annual floor before tax."] },
      ],
      faq: [
        { question: "How much is €2,000 gross net in Spain in 2026?", answer: "Approximately €1,600 net per month on the stated standard profile, or €19,200 net per year." },
        { question: "Is €2,000 gross the same in 12 and 14 payments?", answer: "No. €2,000 paid 12 times is €24,000 a year; €2,000 paid 14 times is €28,000 a year. Always compare the annual gross." },
      ],
    },
    es: {
      slug: "cuanto-es-neto-2000-brutos-espana",
      title: "¿Cuánto es neto 2.000 € brutos al mes en España? (2026)",
      description: "Nómina calculada de 2.000 € brutos al mes en España en 2026: IRPF, Seguridad Social y diferencia entre 12 y 14 pagas.",
      intro: "Con nuestro perfil estándar de 2026, 2.000 € brutos al mes dejan un neto estimado de 1.600 €. Es una cifra única y reproducible: persona soltera de 30 años, sin hijos, contrato indefinido, escala autonómica media y 12 pagas.",
      facts: [
        { label: "Salario bruto", value: "2.000 €/mes", detail: "24.000 € al año" },
        { label: "Neto estimado", value: "1.600 €/mes", detail: "19.200 € al año" },
        { label: "Seguridad Social", value: "129,60 €/mes", detail: "6,48 % en este cálculo" },
      ],
      sections: [
        { heading: "La nómina, cifra por cifra", paragraphs: ["La estimación resta 129,60 € al mes de Seguridad Social y unos 270,37 € de IRPF. Las deducciones suman 399,97 € y el resultado es 1.600,03 €. Redondeado al euro, cobrarías 1.600 € netos.", "El IRPF no se obtiene aplicando un 19 % fijo a todo el sueldo. Primero se descuentan cotizaciones, el gasto deducible general de 2.000 €, la reducción por rendimientos del trabajo cuando corresponde y el mínimo personal. La base restante pasa por los tramos estatal y autonómico medio."] },
        { heading: "Qué ocurre con 14 pagas", paragraphs: ["Si el contrato indica 24.000 € brutos anuales en 14 pagas iguales, cada paga bruta es de 1.714,29 €, no de 2.000 €. El neto anual sigue cerca de 19.200 €, pero las mensualidades ordinarias son menores y aparecen dos pagas extra.", "No compares una oferta de 14 pagas con otra de 12 mirando solo el importe mensual. Compara 24.000 € anuales con 24.000 € anuales y comprueba si las extras están prorrateadas."] },
        { heading: "Cuándo cambia el resultado", paragraphs: ["Madrid, Cataluña, Andalucía y el resto de comunidades tienen escalas autonómicas diferentes. Hijos, discapacidad, aportaciones a pensiones y un contrato temporal también mueven la retención. En la calculadora, el perfil regional bajo o alto modifica alrededor de un 4 % del IRPF calculado, no del salario bruto.", "El SMI de 2026 es 1.221 € en 14 pagas, es decir, 17.094 € anuales. Un sueldo de 24.000 € queda 6.906 € por encima de ese mínimo anual antes de impuestos."] },
      ],
      faq: [
        { question: "¿Cuánto queda neto de 2.000 € brutos en España en 2026?", answer: "Aproximadamente 1.600 € netos al mes con el perfil indicado, o 19.200 € netos al año." },
        { question: "¿2.000 € brutos son lo mismo en 12 que en 14 pagas?", answer: "No. 2.000 € por 12 son 24.000 € anuales; 2.000 € por 14 son 28.000 €. La comparación correcta se hace con el bruto anual." },
      ],
    },
    de: {
      slug: "2000-euro-brutto-netto-spanien",
      title: "2.000 Euro brutto in Spanien: Nettogehalt 2026",
      description: "Konkrete spanische Abrechnung für 2.000 Euro Monatsbrutto 2026 mit IRPF, Sozialversicherung und 12 oder 14 Zahlungen.",
      intro: "Im Standardprofil 2026 ergeben 2.000 Euro Monatsbrutto rund 1.600 Euro netto. Die Zahl basiert auf einer alleinstehenden, 30-jährigen Person ohne Kinder, unbefristetem Vertrag, durchschnittlichem Regionaltarif und zwölf Zahlungen.",
      facts: [
        { label: "Bruttogehalt", value: "2.000 €/Monat", detail: "24.000 € pro Jahr" },
        { label: "Geschätztes Netto", value: "1.600 €/Monat", detail: "19.200 € pro Jahr" },
        { label: "Sozialversicherung", value: "129,60 €/Monat", detail: "6,48 % im Modell" },
      ],
      sections: [
        { heading: "Die Abrechnung in Zahlen", paragraphs: ["Abgezogen werden 129,60 Euro Arbeitnehmerbeiträge und etwa 270,37 Euro IRPF. Insgesamt sind das 399,97 Euro; übrig bleiben 1.600,03 Euro. Auf volle Euro gerundet beträgt das Netto 1.600 Euro.", "IRPF ist keine pauschale 19-Prozent-Abgabe. Beiträge, der allgemeine Werbungskostenabzug von 2.000 Euro, eine mögliche Arbeitseinkommensminderung und der persönliche Freibetrag werden berücksichtigt, bevor die staatlichen und durchschnittlichen regionalen Stufen greifen."] },
        { heading: "Zwölf oder vierzehn Zahlungen", paragraphs: ["Bei 24.000 Euro Jahresbrutto in 14 gleichen Zahlungen beträgt jede Bruttozahlung 1.714,29 Euro. Das Jahresnetto bleibt nahe 19.200 Euro, verteilt sich aber auf kleinere reguläre Monatsbeträge und zwei Sonderzahlungen.", "Vergleiche spanische Angebote deshalb über das Jahresbrutto. 2.000 Euro mal zwölf und 2.000 Euro mal vierzehn sind nicht dasselbe Gehalt."] },
        { heading: "Was das Ergebnis verändert", paragraphs: ["Die autonomen Gemeinschaften haben unterschiedliche IRPF-Skalen. Kinder, Behinderung, Altersvorsorge und ein befristeter Vertrag verändern ebenfalls die Abrechnung. Das regionale Profil im Rechner verändert etwa vier Prozent der berechneten Einkommensteuer, nicht vier Prozent des Bruttos.", "Der gesetzliche Mindestlohn 2026 beträgt 1.221 Euro in 14 Zahlungen beziehungsweise 17.094 Euro jährlich. 24.000 Euro liegen somit 6.906 Euro über dem Jahresminimum."] },
      ],
      faq: [
        { question: "Wie viel netto sind 2.000 Euro brutto in Spanien?", answer: "Im beschriebenen Standardfall etwa 1.600 Euro monatlich beziehungsweise 19.200 Euro jährlich." },
        { question: "Sind 2.000 Euro bei 12 und 14 Zahlungen gleich?", answer: "Nein. Zwölf Zahlungen ergeben 24.000 Euro Jahresbrutto, vierzehn Zahlungen 28.000 Euro." },
      ],
    },
    fr: {
      slug: "salaire-net-espagne-2000-brut",
      title: "2 000 € brut en Espagne : salaire net 2026",
      description: "Fiche de paie espagnole chiffrée pour 2 000 € brut par mois en 2026 : IRPF, sécurité sociale et 12 ou 14 versements.",
      intro: "Avec notre profil standard 2026, 2 000 € brut par mois donnent environ 1 600 € net. Le calcul retient une personne célibataire de 30 ans, sans enfant, en contrat permanent, avec barème régional moyen et douze versements.",
      facts: [
        { label: "Salaire brut", value: "2 000 €/mois", detail: "24 000 € par an" },
        { label: "Net estimé", value: "1 600 €/mois", detail: "19 200 € par an" },
        { label: "Sécurité sociale", value: "129,60 €/mois", detail: "6,48 % dans le modèle" },
      ],
      sections: [
        { heading: "La fiche de paie en chiffres", paragraphs: ["L’estimation retire 129,60 € de sécurité sociale et environ 270,37 € d’IRPF par mois. Les retenues totalisent 399,97 € et laissent 1 600,03 €, soit 1 600 € après arrondi.", "L’IRPF n’est pas un taux uniforme de 19 %. Le calcul tient compte des cotisations, de la déduction générale de 2 000 €, de la réduction sur le revenu du travail et du minimum personnel avant d’appliquer les tranches nationales et régionales moyennes."] },
        { heading: "Douze ou quatorze versements", paragraphs: ["Un contrat de 24 000 € annuels réparti sur 14 versements donne 1 714,29 € brut par versement. Le net annuel reste proche de 19 200 €, mais les mois ordinaires sont plus faibles et deux primes s’ajoutent.", "Pour comparer deux offres espagnoles, partez toujours du brut annuel. 2 000 € versés douze fois ne valent pas 2 000 € versés quatorze fois."] },
        { heading: "Ce qui fait varier le résultat", paragraphs: ["Les communautés autonomes utilisent des barèmes IRPF différents. Enfants, handicap, épargne-retraite et contrat temporaire modifient aussi la retenue. Le profil régional du calculateur ajuste d’environ 4 % l’impôt calculé, pas le salaire brut.", "Le minimum légal 2026 est de 1 221 € sur 14 versements, soit 17 094 € par an. Un salaire de 24 000 € dépasse ce plancher annuel de 6 906 €."] },
      ],
      faq: [
        { question: "Quel net pour 2 000 € brut en Espagne en 2026 ?", answer: "Environ 1 600 € net par mois avec le profil indiqué, soit 19 200 € net par an." },
        { question: "2 000 € brut sont-ils identiques sur 12 et 14 mois ?", answer: "Non. Douze versements représentent 24 000 € annuels et quatorze versements 28 000 €." },
      ],
    },
  },
  "france-3000": {
    en: {
      slug: "net-salary-france-3000-gross",
      title: "Net Salary in France for €3,000 Gross a Month (2026)",
      description: "See a concrete 2026 estimate for €3,000 gross per month in France, including employee contributions and income tax.",
      intro: "A €3,000 French monthly gross salary produces an estimated €2,100 net after employee social contributions and income tax on our standard profile: single, no children and twelve payments.",
      facts: [
        { label: "Gross", value: "€3,000/month", detail: "€36,000 a year" },
        { label: "Estimated net", value: "€2,100/month", detail: "€25,195 a year" },
        { label: "Total deductions", value: "€900/month", detail: "About 30.0% of gross" },
      ],
      sections: [
        { heading: "Where the €900 goes", paragraphs: ["The model assigns €660 a month to employee social contributions and about €240.46 to income tax. The precise result is €2,099.54 net per month, rounded to €2,100.", "French payroll separates net before income tax from the final amount paid after prélèvement à la source. Our number shows the final take-home estimate, so it does not stop at net imposable or net before tax."] },
        { heading: "Income-tax calculation", paragraphs: ["For 2026 taxation of 2025 income, the official scale starts at 0% up to €11,497 per tax share, then 11% to €29,315, 30% to €83,823, 41% to €180,294 and 45% above. The model applies the standard 10% professional-expense deduction and one tax share.", "A married or PACS household and children change the quotient familial. That is why two employees with the same gross salary can have the same social contributions but different withholding rates."] },
        { heading: "Reading a French offer", paragraphs: ["A €36,000 annual offer normally excludes the employer’s contributions, which are paid on top. Meal vouchers, transport reimbursement, bonuses and mutuelle deductions can move the amount on the bank statement.", "Use €25,195 as the annual planning figure under these assumptions. That equals an average €2,099.54 per calendar month, even if variable pay causes individual payslips to differ."] },
      ],
      faq: [
        { question: "How much is €3,000 gross net in France?", answer: "Approximately €2,100 net per month, or €25,195 per year, for a single person without children on the standard profile." },
        { question: "Is the result net before or after income tax?", answer: "After estimated employee contributions and income tax; it represents the amount expected after payroll deductions." },
      ],
    },
    es: {
      slug: "cuanto-es-neto-3000-brutos-francia",
      title: "¿Cuánto es neto 3.000 € brutos en Francia? (2026)",
      description: "Estimación concreta de 3.000 € brutos al mes en Francia en 2026, con cotizaciones del trabajador e impuesto sobre la renta.",
      intro: "Un salario francés de 3.000 € brutos al mes deja aproximadamente 2.100 € netos después de cotizaciones e impuesto con el perfil estándar: persona soltera, sin hijos y doce pagas.",
      facts: [
        { label: "Bruto", value: "3.000 €/mes", detail: "36.000 € al año" },
        { label: "Neto estimado", value: "2.100 €/mes", detail: "25.195 € al año" },
        { label: "Deducciones", value: "900 €/mes", detail: "Aproximadamente el 30,0 %" },
      ],
      sections: [
        { heading: "Dónde van esos 900 euros", paragraphs: ["El modelo destina 660 € mensuales a cotizaciones salariales y unos 240,46 € al impuesto sobre la renta. El resultado sin redondear es 2.099,54 € netos al mes.", "La nómina francesa distingue entre neto antes del impuesto y el importe final tras el prélèvement à la source. Nuestra cifra muestra el ingreso final estimado; no se detiene en el net imposable."] },
        { heading: "Cómo se calcula el impuesto", paragraphs: ["Para la tributación de 2026 sobre rentas de 2025, el baremo oficial aplica 0 % hasta 11.497 € por parte, 11 % hasta 29.315 €, 30 % hasta 83.823 €, 41 % hasta 180.294 € y 45 % por encima. El modelo usa la deducción profesional estándar del 10 % y una parte fiscal.", "Matrimonio, PACS e hijos modifican el quotient familial. Dos personas con el mismo bruto pueden tener cotizaciones parecidas y una retención de impuesto diferente."] },
        { heading: "Cómo leer una oferta francesa", paragraphs: ["Una oferta de 36.000 € anuales suele excluir las cotizaciones de la empresa, que se pagan por encima. Tickets restaurante, transporte, bonus y mutuelle pueden cambiar la transferencia bancaria.", "Para planificar, usa 25.195 € netos anuales con estos supuestos. Equivale a una media de 2.099,54 € por mes natural, aunque las nóminas con variable no sean idénticas."] },
      ],
      faq: [
        { question: "¿Cuánto queda neto de 3.000 € brutos en Francia?", answer: "Unos 2.100 € netos al mes o 25.195 € al año para una persona soltera sin hijos con el perfil estándar." },
        { question: "¿Es neto antes o después del impuesto?", answer: "Después de cotizaciones salariales e impuesto estimado; representa el ingreso final tras descuentos de nómina." },
      ],
    },
    de: {
      slug: "3000-euro-brutto-netto-frankreich",
      title: "3.000 Euro brutto in Frankreich: Netto 2026",
      description: "Konkrete Schätzung für 3.000 Euro Monatsbrutto in Frankreich 2026, einschließlich Arbeitnehmerbeiträgen und Einkommensteuer.",
      intro: "3.000 Euro Monatsbrutto ergeben im französischen Standardprofil ungefähr 2.100 Euro netto nach Sozialbeiträgen und Einkommensteuer: alleinstehend, kinderlos, zwölf Zahlungen.",
      facts: [
        { label: "Brutto", value: "3.000 €/Monat", detail: "36.000 € pro Jahr" },
        { label: "Geschätztes Netto", value: "2.100 €/Monat", detail: "25.195 € pro Jahr" },
        { label: "Abzüge", value: "900 €/Monat", detail: "Rund 30,0 %" },
      ],
      sections: [
        { heading: "Wohin die 900 Euro fließen", paragraphs: ["Das Modell rechnet mit 660 Euro Arbeitnehmerbeiträgen und rund 240,46 Euro Einkommensteuer pro Monat. Exakt bleiben 2.099,54 Euro netto, gerundet 2.100 Euro.", "Die französische Abrechnung unterscheidet Netto vor Quellensteuer und den endgültig ausgezahlten Betrag. Unser Ergebnis zeigt die geschätzte Auszahlung nach prélèvement à la source."] },
        { heading: "Berechnung der Einkommensteuer", paragraphs: ["Für die Veranlagung 2026 des Einkommens 2025 gelten je Steueranteil 0 % bis 11.497 Euro, 11 % bis 29.315 Euro, 30 % bis 83.823 Euro, 41 % bis 180.294 Euro und 45 % darüber. Das Modell nutzt den pauschalen Berufsabzug von 10 % und einen Steueranteil.", "Ehe, PACS und Kinder verändern den quotient familial. Daher können bei gleichem Brutto die Sozialbeiträge ähnlich, die Quellensteuer aber unterschiedlich sein."] },
        { heading: "Ein französisches Angebot lesen", paragraphs: ["36.000 Euro Jahresbrutto schließen Arbeitgeberbeiträge gewöhnlich nicht ein. Essensgutscheine, Fahrtkostenerstattung, Boni und der Arbeitnehmeranteil der mutuelle verändern die tatsächliche Überweisung.", "Für die Planung sind unter diesen Annahmen 25.195 Euro Jahresnetto sinnvoll. Das entspricht durchschnittlich 2.099,54 Euro je Kalendermonat."] },
      ],
      faq: [
        { question: "Wie viel netto sind 3.000 Euro brutto in Frankreich?", answer: "Etwa 2.100 Euro monatlich oder 25.195 Euro jährlich für eine alleinstehende Person ohne Kinder." },
        { question: "Ist das Netto vor oder nach Einkommensteuer?", answer: "Nach geschätzten Arbeitnehmerbeiträgen und Einkommensteuer; es ist die erwartete Auszahlung." },
      ],
    },
    fr: {
      slug: "3000-euros-brut-en-net-france",
      title: "3 000 € brut en net en France en 2026",
      description: "Calcul chiffré de 3 000 € brut par mois en France en 2026, avec cotisations salariales et impôt sur le revenu.",
      intro: "Un salaire de 3 000 € brut par mois donne environ 2 100 € net après cotisations et impôt dans notre profil standard : célibataire, sans enfant et douze versements.",
      facts: [
        { label: "Brut", value: "3 000 €/mois", detail: "36 000 € par an" },
        { label: "Net estimé", value: "2 100 €/mois", detail: "25 195 € par an" },
        { label: "Retenues", value: "900 €/mois", detail: "Environ 30,0 %" },
      ],
      sections: [
        { heading: "Où passent les 900 euros", paragraphs: ["Le modèle retient 660 € de cotisations salariales et environ 240,46 € d’impôt par mois. Le résultat non arrondi est de 2 099,54 € net.", "La fiche de paie distingue le net avant impôt du montant versé après prélèvement à la source. Notre chiffre correspond au net final estimé, pas au seul net imposable."] },
        { heading: "Calcul de l’impôt", paragraphs: ["Pour le barème 2026 applicable aux revenus 2025, chaque part est taxée à 0 % jusqu’à 11 497 €, 11 % jusqu’à 29 315 €, 30 % jusqu’à 83 823 €, 41 % jusqu’à 180 294 € et 45 % au-delà. Le modèle retient l’abattement professionnel de 10 % et une part.", "Mariage, PACS et enfants modifient le quotient familial. Deux salariés au même brut peuvent donc avoir des cotisations proches mais un taux de prélèvement différent."] },
        { heading: "Lire une offre française", paragraphs: ["Une offre de 36 000 € annuels exclut généralement les cotisations patronales. Titres-restaurant, transport, primes et part salariale de mutuelle modifient le virement final.", "Pour un budget, retenez 25 195 € net annuels avec ces hypothèses, soit 2 099,54 € en moyenne par mois civil."] },
      ],
      faq: [
        { question: "Quel net pour 3 000 € brut en France ?", answer: "Environ 2 100 € net par mois ou 25 195 € par an pour une personne célibataire sans enfant." },
        { question: "Le chiffre est-il avant ou après impôt ?", answer: "Après cotisations salariales et impôt estimé; il correspond au montant final attendu." },
      ],
    },
  },
  "netherlands-4000": {
    en: {
      slug: "net-salary-netherlands-4000-gross",
      title: "Net Salary in the Netherlands for €4,000 Gross (2026)",
      description: "Calculate €4,000 gross per month in the Netherlands in 2026 with Box 1 rates, general tax credit and employment tax credit.",
      intro: "At €4,000 gross a month, the 2026 Dutch estimate is €3,179 net, before any employee pension premium. The calculation includes Box 1 tax and national insurance, then subtracts the general and employment tax credits.",
      facts: [
        { label: "Gross", value: "€4,000/month", detail: "€48,000 a year" },
        { label: "Estimated net", value: "€3,179/month", detail: "€38,150 a year" },
        { label: "Tax after credits", value: "€821/month", detail: "€9,850 a year" },
      ],
      sections: [
        { heading: "Why the net is not gross minus 35.75%", paragraphs: ["The first 2026 Box 1 band is 35.75%, but that does not mean every euro of a €48,000 salary loses 35.75%. The algemene heffingskorting and arbeidskorting reduce the calculated tax. In this example the final combined tax and national-insurance amount is €9,850.31 a year.", "The precise engine result is €38,149.69 annual net, or €3,179.14 per month. You keep 79.48% of gross under the standard assumptions."] },
        { heading: "The pension line is employer-specific", paragraphs: ["Many Dutch employees participate in an occupational pension fund. The employee premium depends on the sector, pensionable salary, franchise and employer split, so it is not safely represented by one national percentage. This worked figure excludes an employee pension premium.", "Holiday allowance is also important. A contract may quote €4,000 monthly salary plus 8% holiday allowance, making annual gross €51,840 rather than €48,000. If the €4,000 already includes holiday allowance, do not add it again."] },
        { heading: "30% ruling and other changes", paragraphs: ["An eligible incoming employee can receive part of pay tax-free under the expatriate scheme, subject to the rules and salary threshold. Because eligibility is not automatic, the standard result above does not apply the ruling.", "The legal minimum for workers aged 21 or over is €14.71 per hour from January 2026. The Netherlands no longer expresses the adult minimum as one fixed monthly amount because contracted hours differ."] },
      ],
      faq: [
        { question: "What is €4,000 gross net in the Netherlands?", answer: "About €3,179 net per month in this 2026 standard estimate, excluding an employee occupational-pension premium." },
        { question: "Is holiday allowance included?", answer: "The example treats €4,000 as twelve monthly payments. If 8% holiday allowance is paid on top, annual gross becomes €51,840." },
      ],
    },
    es: {
      slug: "cuanto-es-neto-4000-brutos-paises-bajos",
      title: "4.000 € brutos en Países Bajos: neto en 2026",
      description: "Calcula 4.000 € brutos al mes en Países Bajos en 2026 con tramos Box 1 y créditos fiscales general y laboral.",
      intro: "Con 4.000 € brutos al mes, la estimación neerlandesa de 2026 es 3.179 € netos antes de una posible prima de pensión laboral. El cálculo aplica Box 1 y seguros nacionales y después descuenta los créditos general y de trabajo.",
      facts: [
        { label: "Bruto", value: "4.000 €/mes", detail: "48.000 € al año" },
        { label: "Neto estimado", value: "3.179 €/mes", detail: "38.150 € al año" },
        { label: "Impuesto tras créditos", value: "821 €/mes", detail: "9.850 € al año" },
      ],
      sections: [
        { heading: "Por qué el neto no es bruto menos 35,75 %", paragraphs: ["El primer tramo de Box 1 en 2026 es 35,75 %, pero eso no significa perder ese porcentaje de cada euro. La algemene heffingskorting y la arbeidskorting reducen la cuota. En este ejemplo, impuesto y seguros nacionales quedan en 9.850,31 € anuales.", "El resultado exacto del motor es 38.149,69 € netos al año, o 3.179,14 € al mes. Se conserva el 79,48 % del bruto con los supuestos estándar."] },
        { heading: "La pensión depende del empleador", paragraphs: ["Muchos trabajadores participan en un fondo de pensiones sectorial. La prima del empleado depende del sector, salario pensionable, franquicia y reparto con la empresa; no existe un porcentaje nacional único fiable. Por eso esta cifra no descuenta una prima laboral de pensión.", "También hay que mirar el vakantiegeld. Si el contrato ofrece 4.000 € al mes más un 8 % de paga vacacional, el bruto anual es 51.840 €, no 48.000 €. Si ya está incluido, no lo sumes otra vez."] },
        { heading: "Régimen del 30 % y otros cambios", paragraphs: ["Un trabajador desplazado que cumpla requisitos puede recibir una parte libre de impuestos bajo el régimen de expatriados. Como no es automático y exige condiciones salariales, el resultado estándar no lo aplica.", "El mínimo legal para mayores de 21 años es 14,71 € por hora desde enero de 2026. Ya no hay una única cifra mensual para adultos porque las horas contratadas varían."] },
      ],
      faq: [
        { question: "¿Cuánto queda neto de 4.000 € brutos en Países Bajos?", answer: "Unos 3.179 € netos al mes en 2026, antes de una posible aportación del empleado al plan de pensiones." },
        { question: "¿Está incluida la paga vacacional?", answer: "El ejemplo usa doce pagos de 4.000 €. Si el 8 % de vakantiegeld va aparte, el bruto anual sube a 51.840 €." },
      ],
    },
    de: {
      slug: "4000-euro-brutto-netto-niederlande",
      title: "4.000 Euro brutto in den Niederlanden: Netto 2026",
      description: "4.000 Euro Monatsbrutto in den Niederlanden 2026 mit Box-1-Tarif, allgemeinem und Arbeitseinkommens-Steuerabzug.",
      intro: "Bei 4.000 Euro Monatsbrutto ergibt die niederländische Schätzung 2026 rund 3.179 Euro netto vor einem möglichen Arbeitnehmerbeitrag zur Betriebsrente. Box-1-Steuer und Volksversicherungen werden um beide Steuergutschriften reduziert.",
      facts: [
        { label: "Brutto", value: "4.000 €/Monat", detail: "48.000 € pro Jahr" },
        { label: "Geschätztes Netto", value: "3.179 €/Monat", detail: "38.150 € pro Jahr" },
        { label: "Steuer nach Gutschriften", value: "821 €/Monat", detail: "9.850 € pro Jahr" },
      ],
      sections: [
        { heading: "Warum nicht einfach 35,75 Prozent abgehen", paragraphs: ["Die erste Box-1-Stufe beträgt 2026 zwar 35,75 %, doch algemene heffingskorting und arbeidskorting mindern die berechnete Steuer. Im Beispiel bleiben kombinierte Steuer und Volksversicherung von 9.850,31 Euro im Jahr.", "Das exakte Ergebnis sind 38.149,69 Euro Jahresnetto oder 3.179,14 Euro monatlich. Unter den Standardannahmen bleiben 79,48 % des Bruttos."] },
        { heading: "Betriebsrente ist arbeitgeberspezifisch", paragraphs: ["Viele Beschäftigte zahlen in einen Branchen-Pensionsfonds. Arbeitnehmerprämie, Franchise und Aufteilung unterscheiden sich; ein landesweiter Einheitssatz wäre falsch. Das Beispiel enthält deshalb keinen Arbeitnehmerbeitrag zur Betriebsrente.", "Prüfe außerdem das vakantiegeld. Bei 4.000 Euro Monatslohn plus 8 % Urlaubsgeld beträgt das Jahresbrutto 51.840 statt 48.000 Euro. Ist es bereits enthalten, darf es nicht doppelt gerechnet werden."] },
        { heading: "30-Prozent-Regel und Mindestlohn", paragraphs: ["Berechtigte zugezogene Fachkräfte können einen Teil der Vergütung steuerfrei erhalten. Weil die Regel Voraussetzungen und Gehaltsschwellen hat, wird sie im Standardwert nicht angewendet.", "Der gesetzliche Mindestlohn ab 21 Jahren beträgt seit Januar 2026 14,71 Euro je Stunde. Ein einheitlicher Monatsmindestlohn wird wegen unterschiedlicher Vertragsstunden nicht mehr angegeben."] },
      ],
      faq: [
        { question: "Wie viel netto sind 4.000 Euro brutto in den Niederlanden?", answer: "Rund 3.179 Euro monatlich im Standardfall 2026, vor einem möglichen Betriebsrentenbeitrag." },
        { question: "Ist Urlaubsgeld enthalten?", answer: "Das Beispiel rechnet mit zwölf Zahlungen. Kommen 8 % vakantiegeld hinzu, steigt das Jahresbrutto auf 51.840 Euro." },
      ],
    },
    fr: {
      slug: "4000-euros-brut-net-pays-bas",
      title: "4 000 € brut aux Pays-Bas : salaire net 2026",
      description: "Calcul de 4 000 € brut mensuels aux Pays-Bas en 2026 avec Box 1 et crédits d’impôt général et professionnel.",
      intro: "Pour 4 000 € brut par mois, l’estimation néerlandaise 2026 donne 3 179 € net avant une éventuelle cotisation de retraite professionnelle. Le calcul applique Box 1 puis les crédits général et professionnel.",
      facts: [
        { label: "Brut", value: "4 000 €/mois", detail: "48 000 € par an" },
        { label: "Net estimé", value: "3 179 €/mois", detail: "38 150 € par an" },
        { label: "Impôt après crédits", value: "821 €/mois", detail: "9 850 € par an" },
      ],
      sections: [
        { heading: "Pourquoi il ne suffit pas de retirer 35,75 %", paragraphs: ["La première tranche Box 1 est de 35,75 % en 2026, mais les crédits algemene heffingskorting et arbeidskorting réduisent la charge. Ici, impôt et assurances nationales atteignent 9 850,31 € par an.", "Le résultat exact est de 38 149,69 € net annuels, soit 3 179,14 € par mois. Le salarié conserve 79,48 % du brut selon les hypothèses standard."] },
        { heading: "La retraite dépend de l’employeur", paragraphs: ["De nombreux salariés cotisent à un fonds professionnel. La prime dépend du secteur, du salaire pensionnable, de la franchise et du partage employeur-salarié; il n’existe pas de taux national unique. Ce montant n’en déduit donc pas.", "Vérifiez aussi le vakantiegeld. Avec 4 000 € mensuels plus 8 % de pécule, le brut annuel est de 51 840 € et non 48 000 €. Ne l’ajoutez pas s’il est déjà compris."] },
        { heading: "Règle des 30 % et salaire minimum", paragraphs: ["Un salarié entrant éligible peut recevoir une part exonérée dans le régime des expatriés. Comme l’éligibilité n’est pas automatique, le résultat standard ne l’applique pas.", "Le minimum légal dès 21 ans est de 14,71 € par heure depuis janvier 2026. Les Pays-Bas n’utilisent plus un montant mensuel adulte unique, car les heures contractuelles diffèrent."] },
      ],
      faq: [
        { question: "Quel net pour 4 000 € brut aux Pays-Bas ?", answer: "Environ 3 179 € net par mois en 2026, avant une éventuelle cotisation de retraite professionnelle." },
        { question: "Le pécule de vacances est-il inclus ?", answer: "L’exemple utilise douze paiements. Avec 8 % de vakantiegeld en plus, le brut annuel passe à 51 840 €." },
      ],
    },
  },
  "uk-40000": {
    en: {
      slug: "uk-take-home-pay-40000-salary",
      title: "£40,000 Salary After Tax in the UK (2026/27)",
      description: "A precise take-home estimate for a £40,000 UK salary in 2026/27, showing Income Tax and employee National Insurance.",
      intro: "A £40,000 salary leaves an estimated £32,319.60 a year after Income Tax and employee National Insurance: £2,693.30 a month before pension, student loan or benefits deductions.",
      facts: [
        { label: "Annual gross", value: "£40,000", detail: "£3,333.33 per month" },
        { label: "Annual take-home", value: "£32,319.60", detail: "£2,693.30 per month" },
        { label: "Income Tax + NI", value: "£7,680.40", detail: "You keep 80.80%" },
      ],
      sections: [
        { heading: "Exact breakdown under the standard assumptions", paragraphs: ["The £12,570 Personal Allowance leaves £27,430 taxable at the 20% basic rate, producing £5,486 Income Tax. Employee National Insurance at 8% on earnings from £12,570 to £40,000 adds £2,194.40.", "Subtracting £7,680.40 from £40,000 leaves £32,319.60. Divided by twelve, that is £2,693.30 a month or £621.53 a week on an annualised basis."] },
        { heading: "What is not in the figure", paragraphs: ["The example uses the main England, Wales and Northern Ireland bands and assumes tax code 1257L. Scottish income-tax bands are different. It also assumes no salary sacrifice, workplace-pension contribution, student-loan repayment, taxable benefit or bonus.", "A 5% employee pension based on qualifying or full earnings can reduce cash pay, while salary sacrifice can also reduce Income Tax or National Insurance depending on the arrangement."] },
        { heading: "Minimum wage comparison", paragraphs: ["From April 2026 the National Living Wage for workers aged 21 and over is £12.71 an hour. At 37.5 hours a week for 52 weeks, that is £24,784.50 gross a year.", "A £40,000 salary equals £20.51 per hour on the same 37.5-hour schedule, £7.80 above the statutory hourly floor."] },
      ],
      faq: [
        { question: "What is £40,000 after tax per month in 2026/27?", answer: "£2,693.30 per month under tax code 1257L, outside Scotland, with no pension or student-loan deductions." },
        { question: "How much Income Tax and NI is paid on £40,000?", answer: "£5,486 Income Tax plus £2,194.40 employee National Insurance, totalling £7,680.40." },
      ],
    },
    es: {
      slug: "salario-40000-libras-neto-reino-unido",
      title: "40.000 £ brutas en Reino Unido: neto 2026/27",
      description: "Cálculo preciso del neto de 40.000 £ en Reino Unido en 2026/27 con Income Tax y National Insurance del trabajador.",
      intro: "Un salario de 40.000 £ deja 32.319,60 £ netas al año después de Income Tax y National Insurance: 2.693,30 £ al mes antes de pensión, préstamo estudiantil u otros descuentos.",
      facts: [
        { label: "Bruto anual", value: "40.000 £", detail: "3.333,33 £ al mes" },
        { label: "Neto anual", value: "32.319,60 £", detail: "2.693,30 £ al mes" },
        { label: "Income Tax + NI", value: "7.680,40 £", detail: "Conservas el 80,80 %" },
      ],
      sections: [
        { heading: "Desglose exacto con el perfil estándar", paragraphs: ["La Personal Allowance de 12.570 £ deja 27.430 £ sujetas al tipo básico del 20 %, por lo que el Income Tax es 5.486 £. El National Insurance del 8 % entre 12.570 £ y 40.000 £ suma 2.194,40 £.", "Al restar 7.680,40 £ quedan 32.319,60 £. Dividido entre doce, el resultado es 2.693,30 £ al mes o 621,53 £ por semana de media."] },
        { heading: "Qué no incluye", paragraphs: ["El ejemplo usa los tramos principales de Inglaterra, Gales e Irlanda del Norte y el código 1257L. Escocia tiene tramos propios. No incluye salary sacrifice, pensión laboral, préstamo estudiantil, beneficios en especie ni bonus.", "Una aportación del 5 % a la pensión reduce el dinero disponible, aunque salary sacrifice puede disminuir impuestos o National Insurance según el plan."] },
        { heading: "Comparación con el salario mínimo", paragraphs: ["Desde abril de 2026, el National Living Wage para mayores de 21 años es 12,71 £ por hora. Con 37,5 horas semanales durante 52 semanas, equivale a 24.784,50 £ brutas al año.", "Un salario de 40.000 £ equivale a 20,51 £ por hora con esa jornada: 7,80 £ por encima del mínimo legal."] },
      ],
      faq: [
        { question: "¿Cuánto queda al mes de 40.000 £ en 2026/27?", answer: "2.693,30 £ al mes con código 1257L, fuera de Escocia y sin pensión ni préstamo estudiantil." },
        { question: "¿Cuánto se paga de impuestos y NI?", answer: "5.486 £ de Income Tax y 2.194,40 £ de National Insurance: 7.680,40 £ en total." },
      ],
    },
    de: {
      slug: "40000-pfund-brutto-netto-grossbritannien",
      title: "40.000 Pfund Gehalt nach Steuern 2026/27",
      description: "Präzise Netto-Schätzung für 40.000 Pfund Jahresgehalt im Vereinigten Königreich mit Income Tax und National Insurance.",
      intro: "40.000 Pfund Jahresbrutto ergeben nach Einkommensteuer und Arbeitnehmer-National-Insurance 32.319,60 Pfund netto: 2.693,30 Pfund monatlich vor Rente, Studienkredit oder Sachbezügen.",
      facts: [
        { label: "Jahresbrutto", value: "£40.000", detail: "£3.333,33 pro Monat" },
        { label: "Jahresnetto", value: "£32.319,60", detail: "£2.693,30 pro Monat" },
        { label: "Income Tax + NI", value: "£7.680,40", detail: "80,80 % bleiben" },
      ],
      sections: [
        { heading: "Exakte Aufteilung im Standardfall", paragraphs: ["Nach der Personal Allowance von 12.570 Pfund werden 27.430 Pfund mit 20 % besteuert: 5.486 Pfund Income Tax. National Insurance von 8 % auf den Bereich zwischen 12.570 und 40.000 Pfund beträgt 2.194,40 Pfund.", "Nach insgesamt 7.680,40 Pfund Abzügen bleiben 32.319,60 Pfund. Das sind 2.693,30 Pfund pro Monat oder annualisiert 621,53 Pfund pro Woche."] },
        { heading: "Nicht enthaltene Abzüge", paragraphs: ["Das Beispiel verwendet die Haupttarife für England, Wales und Nordirland sowie Code 1257L. Schottland hat eigene Stufen. Betriebliche Rente, Studienkredit, salary sacrifice, Sachbezüge und Bonus sind nicht enthalten.", "Ein Arbeitnehmerbeitrag von fünf Prozent zur Rente senkt die Auszahlung; salary sacrifice kann je nach Gestaltung auch Steuer oder National Insurance mindern."] },
        { heading: "Vergleich mit dem Mindestlohn", paragraphs: ["Ab April 2026 beträgt der National Living Wage ab 21 Jahren 12,71 Pfund pro Stunde. Bei 37,5 Stunden und 52 Wochen sind das 24.784,50 Pfund Jahresbrutto.", "40.000 Pfund entsprechen bei derselben Arbeitszeit 20,51 Pfund je Stunde und liegen 7,80 Pfund über dem gesetzlichen Satz."] },
      ],
      faq: [
        { question: "Wie viel sind 40.000 Pfund netto pro Monat?", answer: "2.693,30 Pfund im Steuerjahr 2026/27 bei Code 1257L, außerhalb Schottlands und ohne Renten- oder Studienkreditabzug." },
        { question: "Wie hoch sind Income Tax und NI?", answer: "5.486 Pfund Income Tax plus 2.194,40 Pfund National Insurance, insgesamt 7.680,40 Pfund." },
      ],
    },
    fr: {
      slug: "40000-livres-brut-net-royaume-uni",
      title: "40 000 £ brut au Royaume-Uni : net 2026/27",
      description: "Estimation précise du net pour 40 000 £ au Royaume-Uni en 2026/27 avec Income Tax et National Insurance salariale.",
      intro: "Un salaire annuel de 40 000 £ laisse 32 319,60 £ après Income Tax et National Insurance, soit 2 693,30 £ par mois avant retraite, prêt étudiant ou avantages imposables.",
      facts: [
        { label: "Brut annuel", value: "40 000 £", detail: "3 333,33 £ par mois" },
        { label: "Net annuel", value: "32 319,60 £", detail: "2 693,30 £ par mois" },
        { label: "Income Tax + NI", value: "7 680,40 £", detail: "80,80 % conservés" },
      ],
      sections: [
        { heading: "Ventilation exacte du cas standard", paragraphs: ["Après la Personal Allowance de 12 570 £, 27 430 £ sont imposées à 20 %, soit 5 486 £ d’Income Tax. La National Insurance salariale à 8 % entre 12 570 et 40 000 £ représente 2 194,40 £.", "Après 7 680,40 £ de retenues, il reste 32 319,60 £ : 2 693,30 £ par mois ou 621,53 £ par semaine en moyenne annuelle."] },
        { heading: "Ce qui n’est pas inclus", paragraphs: ["Le calcul utilise les tranches d’Angleterre, du pays de Galles et d’Irlande du Nord avec le code 1257L. L’Écosse a ses propres tranches. Retraite, prêt étudiant, salary sacrifice, avantages et primes sont exclus.", "Une cotisation retraite de 5 % réduit le versement disponible, tandis qu’un salary sacrifice peut aussi réduire l’impôt ou la National Insurance selon le dispositif."] },
        { heading: "Comparaison avec le salaire minimum", paragraphs: ["À partir d’avril 2026, le National Living Wage dès 21 ans est de 12,71 £ par heure. À 37,5 heures pendant 52 semaines, cela représente 24 784,50 £ brut par an.", "Un salaire de 40 000 £ correspond à 20,51 £ par heure sur le même horaire, soit 7,80 £ au-dessus du minimum légal."] },
      ],
      faq: [
        { question: "Quel net mensuel pour 40 000 £ en 2026/27 ?", answer: "2 693,30 £ par mois avec le code 1257L, hors Écosse et sans retraite ni prêt étudiant." },
        { question: "Combien d’impôt et de NI sur 40 000 £ ?", answer: "5 486 £ d’Income Tax et 2 194,40 £ de National Insurance, soit 7 680,40 £ au total." },
      ],
    },
  },
};

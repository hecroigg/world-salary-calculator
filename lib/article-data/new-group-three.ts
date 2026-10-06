import type { Locale } from "../i18n";
import type { ArticleLocale } from "../article-types";

export type GroupThreeId =
  | "spain-portugal"
  | "gross-for-3000-net"
  | "europe-minimum-wages"
  | "twelve-fourteen-payments";

export const groupThree: Record<GroupThreeId, Record<Locale, ArticleLocale>> = {
  "spain-portugal": {
    en: {
      slug: "spain-vs-portugal-net-salary",
      title: "Spain vs Portugal Net Salary on €40,000 (2026)",
      description: "Compare €40,000 gross in Spain and Portugal with 2026 tax, Social Security and 12-versus-14-payment assumptions explained.",
      intro: "At €40,000 gross a year, the standard calculation leaves €29,660 net in Spain and €28,818 in Portugal. Spain is €842 ahead in this worked case, but regional Spanish IRPF and Portuguese household deductions can change the order.",
      facts: [
        { label: "Spain net", value: "€29,660/year", detail: "€2,471.67 averaged over 12 months" },
        { label: "Portugal net", value: "€28,818/year", detail: "€2,401.48 averaged over 12 months" },
        { label: "Difference", value: "€842/year", detail: "€70.19 per calendar month" },
      ],
      sections: [
        { heading: "The deductions behind each result", paragraphs: ["Spain deducts about €7,747.96 of IRPF and €2,592 of employee Social Security, leaving €29,660.04. The profile is single, age 30, no children, permanent contract and average regional scale.", "Portugal deducts about €6,782.26 of income tax and €4,400 of employee Social Security at 11%, leaving €28,817.74. It uses the national bracket configuration without household-specific deductions."] },
        { heading: "Fourteen payments do not increase annual salary", paragraphs: ["Both countries often use 14 payments. If €40,000 is divided into 14, each gross payment is €2,857.14. If it is divided into 12, each is €3,333.33. The annual gross and calculated annual net are unchanged.", "Ask whether the quoted monthly amount is multiplied by 12 or 14. A €2,500 monthly offer can mean €30,000 or €35,000 a year—a difference much larger than the tax gap in this comparison."] },
        { heading: "Minimum wage context", paragraphs: ["Spain’s 2026 minimum is €1,221 across 14 payments, or €17,094 annually. Portugal’s national minimum is €920 across 14 payments, or €12,880 annually.", "A €40,000 offer is therefore 2.34 times the Spanish annual minimum and 3.11 times the Portuguese annual minimum. That comparison describes the legal floor, not local purchasing power."] },
      ],
      faq: [
        { question: "Where is €40,000 gross higher net, Spain or Portugal?", answer: "Spain in this standard calculation: €29,660 net versus €28,818 in Portugal, a difference of about €842 a year." },
        { question: "Do 14 payments change annual net?", answer: "No. They change cash-flow timing. The same annual gross produces essentially the same annual tax estimate." },
      ],
    },
    es: {
      slug: "salario-neto-espana-portugal-comparativa",
      title: "Salario neto España vs Portugal con 40.000 € (2026)",
      description: "Compara 40.000 € brutos en España y Portugal con impuestos, Seguridad Social y 12 o 14 pagas explicados.",
      intro: "Con 40.000 € brutos anuales, el cálculo estándar deja 29.660 € netos en España y 28.818 € en Portugal. España queda 842 € por delante en este caso, aunque el IRPF autonómico y las deducciones familiares portuguesas pueden cambiarlo.",
      facts: [
        { label: "Neto España", value: "29.660 €/año", detail: "2.471,67 € de media mensual" },
        { label: "Neto Portugal", value: "28.818 €/año", detail: "2.401,48 € de media mensual" },
        { label: "Diferencia", value: "842 €/año", detail: "70,19 € por mes natural" },
      ],
      sections: [
        { heading: "Las deducciones de cada resultado", paragraphs: ["España descuenta unos 7.747,96 € de IRPF y 2.592 € de Seguridad Social, dejando 29.660,04 €. El perfil es soltero, 30 años, sin hijos, contrato indefinido y escala regional media.", "Portugal descuenta unos 6.782,26 € de IRS y 4.400 € de Segurança Social al 11 %, dejando 28.817,74 €. Usa tramos nacionales sin deducciones familiares específicas."] },
        { heading: "Catorce pagas no aumentan el salario anual", paragraphs: ["En ambos países son habituales 14 pagas. Si 40.000 € se dividen entre 14, cada bruto es 2.857,14 €. Entre 12, son 3.333,33 €. El bruto y neto anual no cambian.", "Pregunta siempre si la cifra mensual se multiplica por 12 o por 14. Una oferta de 2.500 € al mes puede ser 30.000 o 35.000 € anuales: una diferencia mucho mayor que la brecha fiscal de este ejemplo."] },
        { heading: "Contexto de salario mínimo", paragraphs: ["El SMI español de 2026 es 1.221 € en 14 pagas, 17.094 € al año. El mínimo portugués es 920 € en 14 pagas, 12.880 € anuales.", "40.000 € equivalen a 2,34 veces el mínimo anual español y 3,11 veces el portugués. Esto compara suelos legales, no poder adquisitivo local."] },
      ],
      faq: [
        { question: "¿Dónde queda más neto con 40.000 €, España o Portugal?", answer: "En este cálculo, España: 29.660 € frente a 28.818 €, unos 842 € anuales más." },
        { question: "¿Las 14 pagas cambian el neto anual?", answer: "No. Cambian cuándo cobras, pero el mismo bruto anual produce prácticamente el mismo impuesto anual." },
      ],
    },
    de: {
      slug: "nettogehalt-spanien-portugal-vergleich",
      title: "Nettogehalt Spanien vs. Portugal bei 40.000 €",
      description: "40.000 Euro Brutto in Spanien und Portugal mit Steuern, Sozialversicherung und 12 oder 14 Zahlungen vergleichen.",
      intro: "Bei 40.000 Euro Jahresbrutto bleiben im Standardprofil 29.660 Euro in Spanien und 28.818 Euro in Portugal. Spanien liegt 842 Euro vorn; regionale IRPF- und portugiesische Haushaltsabzüge können die Reihenfolge ändern.",
      facts: [
        { label: "Netto Spanien", value: "29.660 €/Jahr", detail: "2.471,67 € Monatsdurchschnitt" },
        { label: "Netto Portugal", value: "28.818 €/Jahr", detail: "2.401,48 € Monatsdurchschnitt" },
        { label: "Differenz", value: "842 €/Jahr", detail: "70,19 € je Kalendermonat" },
      ],
      sections: [
        { heading: "Abzüge hinter den Ergebnissen", paragraphs: ["Spanien zieht etwa 7.747,96 Euro IRPF und 2.592 Euro Sozialversicherung ab. Übrig bleiben 29.660,04 Euro für alleinstehend, 30 Jahre, kinderlos, unbefristet und durchschnittliche Region.", "Portugal zieht rund 6.782,26 Euro IRS und 4.400 Euro Sozialversicherung zu 11 % ab. Übrig bleiben 28.817,74 Euro ohne haushaltsspezifische Abzüge."] },
        { heading: "Vierzehn Zahlungen erhöhen das Jahresgehalt nicht", paragraphs: ["40.000 Euro geteilt durch 14 sind 2.857,14 Euro je Zahlung; geteilt durch zwölf 3.333,33 Euro. Jahresbrutto und berechnetes Jahresnetto bleiben gleich.", "Kläre daher, ob eine Monatsangabe zwölf- oder vierzehnmal gezahlt wird. 2.500 Euro können 30.000 oder 35.000 Euro Jahresbrutto bedeuten."] },
        { heading: "Mindestlohn-Kontext", paragraphs: ["Spaniens Mindestlohn 2026 beträgt 1.221 Euro in 14 Zahlungen beziehungsweise 17.094 Euro jährlich. Portugal zahlt mindestens 920 Euro mal 14, also 12.880 Euro.", "40.000 Euro sind das 2,34-Fache des spanischen und 3,11-Fache des portugiesischen Jahresminimums. Das sagt noch nichts über lokale Kaufkraft aus."] },
      ],
      faq: [
        { question: "Wo ist 40.000 Euro brutto netto höher?", answer: "Im Standardprofil in Spanien: 29.660 gegenüber 28.818 Euro in Portugal, etwa 842 Euro mehr." },
        { question: "Verändern 14 Zahlungen das Jahresnetto?", answer: "Nein. Sie verändern die Auszahlungstermine, nicht das zugrunde liegende Jahresgehalt." },
      ],
    },
    fr: {
      slug: "salaire-net-espagne-portugal-comparaison",
      title: "Salaire net Espagne vs Portugal sur 40 000 €",
      description: "Comparer 40 000 € brut en Espagne et au Portugal avec impôts, sécurité sociale et 12 ou 14 versements.",
      intro: "Pour 40 000 € brut annuels, le calcul standard laisse 29 660 € net en Espagne et 28 818 € au Portugal. L’Espagne devance de 842 €, mais l’IRPF régional et les déductions familiales portugaises peuvent inverser l’écart.",
      facts: [
        { label: "Net Espagne", value: "29 660 €/an", detail: "2 471,67 € par mois en moyenne" },
        { label: "Net Portugal", value: "28 818 €/an", detail: "2 401,48 € par mois en moyenne" },
        { label: "Écart", value: "842 €/an", detail: "70,19 € par mois civil" },
      ],
      sections: [
        { heading: "Les retenues derrière chaque résultat", paragraphs: ["L’Espagne retire environ 7 747,96 € d’IRPF et 2 592 € de sécurité sociale, laissant 29 660,04 €. Profil : célibataire, 30 ans, sans enfant, contrat permanent, région moyenne.", "Le Portugal retire environ 6 782,26 € d’IRS et 4 400 € de sécurité sociale à 11 %, laissant 28 817,74 € sans déductions familiales particulières."] },
        { heading: "Quatorze versements n’augmentent pas l’annuel", paragraphs: ["40 000 € divisés par 14 donnent 2 857,14 € brut par versement; divisés par douze, 3 333,33 €. Le brut et le net annuels ne changent pas.", "Demandez si le mensuel est versé douze ou quatorze fois. Une offre de 2 500 € peut représenter 30 000 ou 35 000 € par an."] },
        { heading: "Contexte du salaire minimum", paragraphs: ["Le minimum espagnol 2026 est de 1 221 € sur 14 versements, soit 17 094 € par an. Le Portugal fixe 920 € sur 14, soit 12 880 €.", "40 000 € valent 2,34 fois le minimum espagnol et 3,11 fois le portugais. Ce rapport ne mesure pas le pouvoir d’achat local."] },
      ],
      faq: [
        { question: "Où 40 000 € brut donnent-ils le meilleur net ?", answer: "Dans ce calcul, en Espagne : 29 660 € contre 28 818 € au Portugal, soit environ 842 € de plus." },
        { question: "Les 14 versements changent-ils le net annuel ?", answer: "Non. Ils changent le calendrier de paiement, pas le salaire annuel de référence." },
      ],
    },
  },
  "gross-for-3000-net": {
    en: {
      slug: "gross-salary-needed-for-3000-net-europe",
      title: "Gross Salary Needed for €3,000 Net a Month (2026)",
      description: "See the exact gross salary our 2026 engines require for €3,000 monthly net in Germany, Spain, France and the Netherlands.",
      intro: "To reach €3,000 net a month on the standard profiles, the calculated annual gross is €56,419 in Germany, €50,761 in Spain, €57,187 in France and €43,942 in the Netherlands. Each value is solved against the same engine used on the country calculator.",
      facts: [
        { label: "Germany", value: "€56,419 gross/year", detail: "€4,701.57 gross per month" },
        { label: "Spain", value: "€50,761 gross/year", detail: "€4,230.06 gross per month" },
        { label: "France", value: "€57,187 gross/year", detail: "€4,765.60 gross per month" },
        { label: "Netherlands", value: "€43,942 gross/year", detail: "€3,661.81 gross per month" },
      ],
      sections: [
        { heading: "How the target was solved", paragraphs: ["For each country, the calculation increases or decreases annual gross until annual net equals €36,000. It does not divide by a fixed take-home percentage. Every iteration runs the country’s progressive tax and contribution logic.", "The numbers are rounded to the nearest euro in the table. At full precision the engine targets €36,000.00 annual net, equivalent to €3,000 averaged across twelve calendar months."] },
        { heading: "The assumptions behind the four numbers", paragraphs: ["Germany uses class I, no children or church tax, age 30 and public insurance. Spain uses a permanent contract and average regional IRPF. France uses one tax share and standard employee contributions. The Netherlands includes Box 1 and tax credits but not an occupational-pension premium or 30% ruling.", "Those are not footnotes to ignore: a German married couple, a Spanish parent or an eligible Dutch expatriate can need a different gross salary for the same bank deposit."] },
        { heading: "Use annual gross when negotiating", paragraphs: ["The target is annual net, so payment schedules cannot distort the comparison. €50,761 in Spain divided into 14 payments is €3,625.77 gross per payment; divided into 12, it is €4,230.06. The annual offer is identical.", "Round the result upward when setting a salary target. Asking for exactly the modelled threshold leaves no margin for pension plans, benefits, insurer-specific rates or payroll rounding."] },
      ],
      faq: [
        { question: "How much gross do I need for €3,000 net in Germany?", answer: "About €56,419 gross per year, or €4,701.57 per month, under the standard class-I public-insurance profile." },
        { question: "Why is the Dutch required gross lower?", answer: "The 2026 tax credits are substantial at this income and the standard estimate excludes an employee occupational-pension premium." },
      ],
    },
    es: {
      slug: "salario-bruto-necesario-para-3000-netos",
      title: "Bruto necesario para cobrar 3.000 € netos al mes (2026)",
      description: "Calcula el bruto exacto que exigen nuestros motores de 2026 para cobrar 3.000 € netos en Alemania, España, Francia y Países Bajos.",
      intro: "Para llegar a 3.000 € netos al mes con los perfiles estándar, el bruto anual calculado es 56.419 € en Alemania, 50.761 € en España, 57.187 € en Francia y 43.942 € en Países Bajos.",
      facts: [
        { label: "Alemania", value: "56.419 € brutos/año", detail: "4.701,57 € brutos al mes" },
        { label: "España", value: "50.761 € brutos/año", detail: "4.230,06 € brutos al mes" },
        { label: "Francia", value: "57.187 € brutos/año", detail: "4.765,60 € brutos al mes" },
        { label: "Países Bajos", value: "43.942 € brutos/año", detail: "3.661,81 € brutos al mes" },
      ],
      sections: [
        { heading: "Cómo se ha resuelto el objetivo", paragraphs: ["El cálculo sube o baja el bruto anual hasta que el neto anual llega a 36.000 €. No divide por un porcentaje fijo: cada iteración ejecuta tramos y cotizaciones del país.", "La tabla redondea al euro. Con precisión completa, el motor busca 36.000,00 € netos anuales, equivalentes a 3.000 € de media en doce meses naturales."] },
        { heading: "Supuestos de las cuatro cifras", paragraphs: ["Alemania: clase I, sin hijos ni iglesia, 30 años y seguro público. España: contrato indefinido y región media. Francia: una parte fiscal y cotizaciones estándar. Países Bajos: Box 1 y créditos, sin pensión profesional ni régimen del 30 %.", "Los supuestos importan. Un matrimonio alemán, un progenitor español o un expatriado neerlandés elegible necesitarán un bruto distinto."] },
        { heading: "Negocia siempre en bruto anual", paragraphs: ["El objetivo es anual para que las pagas no engañen. 50.761 € en España son 3.625,77 € por paga si son 14, o 4.230,06 € si son 12. La oferta anual es la misma.", "Al fijar una aspiración salarial, redondea hacia arriba. Pedir exactamente el umbral no deja margen para pensión, beneficios, seguros o redondeos de nómina."] },
      ],
      faq: [
        { question: "¿Qué bruto necesito para 3.000 € netos en Alemania?", answer: "Unos 56.419 € brutos al año, o 4.701,57 € al mes, con clase I y seguro público." },
        { question: "¿Por qué Países Bajos exige menos bruto?", answer: "Los créditos fiscales de 2026 son importantes y el estándar no resta una pensión profesional del trabajador." },
      ],
    },
    de: {
      slug: "bruttogehalt-fuer-3000-euro-netto",
      title: "Welches Brutto für 3.000 Euro netto im Monat? (2026)",
      description: "Berechnetes Bruttogehalt für 3.000 Euro Monatsnetto in Deutschland, Spanien, Frankreich und den Niederlanden.",
      intro: "Für 3.000 Euro Monatsnetto benötigen die Standardprofile 56.419 Euro Brutto in Deutschland, 50.761 Euro in Spanien, 57.187 Euro in Frankreich und 43.942 Euro in den Niederlanden.",
      facts: [
        { label: "Deutschland", value: "56.419 € brutto/Jahr", detail: "4.701,57 € brutto monatlich" },
        { label: "Spanien", value: "50.761 € brutto/Jahr", detail: "4.230,06 € brutto monatlich" },
        { label: "Frankreich", value: "57.187 € brutto/Jahr", detail: "4.765,60 € brutto monatlich" },
        { label: "Niederlande", value: "43.942 € brutto/Jahr", detail: "3.661,81 € brutto monatlich" },
      ],
      sections: [
        { heading: "So wurde das Ziel berechnet", paragraphs: ["Das Jahresbrutto wird iterativ verändert, bis das Jahresnetto 36.000 Euro erreicht. Es wird kein fester Nettoprozentsatz verwendet; jede Runde berechnet die Länderlogik neu.", "Die Werte sind auf volle Euro gerundet. Intern trifft der Motor 36.000,00 Euro Jahresnetto beziehungsweise durchschnittlich 3.000 Euro je Kalendermonat."] },
        { heading: "Annahmen", paragraphs: ["Deutschland: Klasse I, kinderlos, keine Kirchensteuer, 30 Jahre, gesetzlich versichert. Spanien: unbefristet, Durchschnittsregion. Frankreich: ein Steueranteil. Niederlande: Box 1 und Gutschriften, ohne Betriebsrente und 30-Prozent-Regel.", "Ehe, Kinder, Versicherung oder Expat-Regel können das erforderliche Brutto deutlich verändern."] },
        { heading: "Jahresbrutto verhandeln", paragraphs: ["50.761 Euro in Spanien entsprechen bei 14 Zahlungen 3.625,77 Euro, bei zwölf Zahlungen 4.230,06 Euro. Das Jahresangebot bleibt gleich.", "Runde das Ziel bei Verhandlungen nach oben. Genau am Modellwert bleibt kein Puffer für Pensionspläne, Leistungen oder Abrechnungsrundung."] },
      ],
      faq: [
        { question: "Welches Brutto brauche ich für 3.000 Euro netto in Deutschland?", answer: "Rund 56.419 Euro jährlich beziehungsweise 4.701,57 Euro monatlich in Klasse I mit gesetzlicher Versicherung." },
        { question: "Warum ist das nötige Brutto in den Niederlanden geringer?", answer: "Die Steuergutschriften 2026 sind hoch; eine Betriebsrente ist im Standardwert nicht abgezogen." },
      ],
    },
    fr: {
      slug: "salaire-brut-pour-3000-euros-net",
      title: "Quel salaire brut pour 3 000 € net par mois ? (2026)",
      description: "Salaire brut calculé pour obtenir 3 000 € net en Allemagne, Espagne, France et aux Pays-Bas en 2026.",
      intro: "Pour atteindre 3 000 € net mensuels avec les profils standard, il faut 56 419 € brut en Allemagne, 50 761 € en Espagne, 57 187 € en France et 43 942 € aux Pays-Bas.",
      facts: [
        { label: "Allemagne", value: "56 419 € brut/an", detail: "4 701,57 € brut par mois" },
        { label: "Espagne", value: "50 761 € brut/an", detail: "4 230,06 € brut par mois" },
        { label: "France", value: "57 187 € brut/an", detail: "4 765,60 € brut par mois" },
        { label: "Pays-Bas", value: "43 942 € brut/an", detail: "3 661,81 € brut par mois" },
      ],
      sections: [
        { heading: "Méthode de résolution", paragraphs: ["Le calcul augmente ou réduit le brut annuel jusqu’à obtenir 36 000 € net. Il n’utilise pas un pourcentage fixe : chaque itération exécute les tranches et cotisations nationales.", "Les chiffres sont arrondis à l’euro. À pleine précision, le moteur vise 36 000,00 € net annuels, soit 3 000 € moyens sur douze mois civils."] },
        { heading: "Hypothèses", paragraphs: ["Allemagne : classe I, 30 ans, sans enfant ni culte, assurance publique. Espagne : contrat permanent, région moyenne. France : une part fiscale. Pays-Bas : Box 1 et crédits, sans retraite professionnelle ni règle des 30 %.", "Mariage, enfants, assurance et régime expatrié modifient le brut requis."] },
        { heading: "Négocier en brut annuel", paragraphs: ["50 761 € en Espagne donnent 3 625,77 € sur 14 versements ou 4 230,06 € sur douze. L’offre annuelle reste identique.", "Arrondissez l’objectif vers le haut pour garder une marge face aux retraites, avantages, assurances et arrondis de paie."] },
      ],
      faq: [
        { question: "Quel brut pour 3 000 € net en Allemagne ?", answer: "Environ 56 419 € par an, soit 4 701,57 € par mois, en classe I avec assurance publique." },
        { question: "Pourquoi le brut néerlandais est-il plus faible ?", answer: "Les crédits d’impôt 2026 sont importants et aucune retraite professionnelle n’est retirée du profil standard." },
      ],
    },
  },
  "europe-minimum-wages": {
    en: {
      slug: "minimum-wage-europe-2026-comparison",
      title: "Minimum Wage in Europe: 2026 Comparison",
      description: "Compare official 2026 minimum wages in Germany, Spain, France, the Netherlands, the UK and Portugal with hourly and annual figures.",
      intro: "Minimum wages are not directly comparable until hourly rates and 12-versus-14-payment systems are made explicit. These are the statutory 2026 figures stored by the calculator, with no invented number for countries that lack a national minimum.",
      facts: [
        { label: "Germany", value: "€13.90/hour", detail: "About €28,912 at 40 hours × 52 weeks" },
        { label: "Spain", value: "€1,221 × 14", detail: "€17,094 annual minimum" },
        { label: "France", value: "€12.02/hour", detail: "Gross SMIC hourly rate" },
        { label: "Netherlands", value: "€14.71/hour", detail: "Age 21+, from January 2026" },
        { label: "United Kingdom", value: "£12.71/hour", detail: "Age 21+, from April 2026" },
        { label: "Portugal", value: "€920 × 14", detail: "€12,880 annual minimum" },
      ],
      sections: [
        { heading: "Hourly systems", paragraphs: ["Germany’s legal rate is €13.90 an hour in 2026. France uses a gross hourly SMIC of €12.02. The Netherlands sets €14.71 for workers aged 21 and over, while the UK National Living Wage is £12.71 from April for the same age group.", "Annualising an hourly floor requires a weekly schedule. Germany at 40 hours for 52 weeks gives €28,912; the Dutch rate on the same schedule gives €30,596.80. Those are arithmetic comparisons, not promises of guaranteed weekly hours."] },
        { heading: "Monthly systems with 14 payments", paragraphs: ["Spain’s SMI is €1,221 in 14 payments: €17,094 a year. If the extra payments are prorated across twelve payslips, the equivalent gross is €1,424.50 per month.", "Portugal’s €920 in 14 payments totals €12,880. Prorated across twelve, that is €1,073.33. Quoting only €1,221 versus €920 hides the payment schedule but not the large annual difference."] },
        { heading: "Countries without one national figure", paragraphs: ["Italy, Austria, Denmark, Sweden, Norway, Finland and Switzerland do not have one general national statutory minimum wage. Sector agreements, occupations, cantons or collective bargaining set applicable floors.", "A comparison page should leave those entries blank rather than convert a sector agreement into a fictional national number. The calculator follows that rule."] },
      ],
      faq: [
        { question: "Which listed country has the highest hourly euro minimum?", answer: "Among these euro-denominated hourly rates, the Netherlands is highest at €14.71 for workers aged 21 and over in 2026." },
        { question: "What is Spain’s monthly minimum when prorated to 12 payments?", answer: "€1,424.50 gross per month, because €1,221 multiplied by 14 equals €17,094 a year." },
      ],
    },
    es: {
      slug: "salario-minimo-europa-2026-comparativa",
      title: "Salario mínimo en Europa 2026: comparativa real",
      description: "Compara salarios mínimos oficiales de 2026 en Alemania, España, Francia, Países Bajos, Reino Unido y Portugal.",
      intro: "Los mínimos no se comparan bien sin aclarar si son por hora o en 12 o 14 pagas. Estas son las cifras legales de 2026 guardadas por la calculadora, sin inventar un mínimo para países que no tienen uno nacional.",
      facts: [
        { label: "Alemania", value: "13,90 €/hora", detail: "28.912 € con 40 h × 52 semanas" },
        { label: "España", value: "1.221 € × 14", detail: "17.094 € de mínimo anual" },
        { label: "Francia", value: "12,02 €/hora", detail: "SMIC bruto por hora" },
        { label: "Países Bajos", value: "14,71 €/hora", detail: "21 años o más, enero de 2026" },
        { label: "Reino Unido", value: "12,71 £/hora", detail: "21 años o más, abril de 2026" },
        { label: "Portugal", value: "920 € × 14", detail: "12.880 € de mínimo anual" },
      ],
      sections: [
        { heading: "Sistemas por hora", paragraphs: ["Alemania fija 13,90 € por hora en 2026. Francia usa un SMIC bruto de 12,02 €. Países Bajos establece 14,71 € para mayores de 21 años y Reino Unido 12,71 £ desde abril para esa edad.", "Anualizar exige fijar jornada. Alemania a 40 horas durante 52 semanas da 28.912 €; Países Bajos con el mismo horario, 30.596,80 €. Son comparaciones aritméticas, no horas garantizadas."] },
        { heading: "Sistemas mensuales con 14 pagas", paragraphs: ["El SMI español es 1.221 € en 14 pagas: 17.094 € al año. Con extras prorrateadas en doce nóminas equivale a 1.424,50 € brutos al mes.", "Portugal fija 920 € en 14 pagas, 12.880 € anuales. Prorrateado son 1.073,33 € por mes. Comparar solo 1.221 con 920 oculta el calendario, aunque no la diferencia anual."] },
        { heading: "Países sin una cifra nacional", paragraphs: ["Italia, Austria, Dinamarca, Suecia, Noruega, Finlandia y Suiza no tienen un único salario mínimo legal nacional general. Aplican convenios sectoriales, ocupaciones, cantones o negociación colectiva.", "La tabla deja esos países sin cifra en vez de convertir un convenio concreto en un mínimo nacional falso."] },
      ],
      faq: [
        { question: "¿Qué país de la lista tiene el mínimo por hora en euros más alto?", answer: "Países Bajos, con 14,71 € por hora para trabajadores de 21 años o más en 2026." },
        { question: "¿Cuánto es el SMI español prorrateado en 12 meses?", answer: "1.424,50 € brutos al mes, porque 1.221 € por 14 son 17.094 € anuales." },
      ],
    },
    de: {
      slug: "mindestlohn-europa-2026-vergleich",
      title: "Mindestlohn Europa 2026 im Vergleich",
      description: "Offizielle Mindestlöhne 2026 in Deutschland, Spanien, Frankreich, den Niederlanden, Großbritannien und Portugal vergleichen.",
      intro: "Mindestlöhne sind erst vergleichbar, wenn Stundenlohn und 12 oder 14 Zahlungen klar sind. Hier stehen die gesetzlichen Werte 2026; Länder ohne landesweiten Mindestlohn erhalten keine erfundene Zahl.",
      facts: [
        { label: "Deutschland", value: "13,90 €/Stunde", detail: "28.912 € bei 40 h × 52 Wochen" },
        { label: "Spanien", value: "1.221 € × 14", detail: "17.094 € Jahresminimum" },
        { label: "Frankreich", value: "12,02 €/Stunde", detail: "Brutto-SMIC" },
        { label: "Niederlande", value: "14,71 €/Stunde", detail: "Ab 21, Januar 2026" },
        { label: "Großbritannien", value: "12,71 £/Stunde", detail: "Ab 21, April 2026" },
        { label: "Portugal", value: "920 € × 14", detail: "12.880 € Jahresminimum" },
      ],
      sections: [
        { heading: "Stundenbasierte Systeme", paragraphs: ["Deutschland zahlt 2026 mindestens 13,90 Euro je Stunde, Frankreich 12,02 Euro brutto. Die Niederlande setzen ab 21 Jahren 14,71 Euro an, Großbritannien ab April 12,71 Pfund.", "Für einen Jahreswert braucht man Arbeitszeit. Bei 40 Stunden und 52 Wochen ergeben sich in Deutschland 28.912 Euro und in den Niederlanden 30.596,80 Euro. Das garantiert keine bestimmte Wochenstundenzahl."] },
        { heading: "Monatswerte mit 14 Zahlungen", paragraphs: ["Spanien: 1.221 Euro mal 14 sind 17.094 Euro jährlich. Auf zwölf Abrechnungen verteilt entspricht das 1.424,50 Euro monatlich.", "Portugal: 920 Euro mal 14 sind 12.880 Euro jährlich beziehungsweise 1.073,33 Euro bei zwölf anteiligen Zahlungen."] },
        { heading: "Länder ohne landesweiten Satz", paragraphs: ["Italien, Österreich, Dänemark, Schweden, Norwegen, Finnland und die Schweiz haben keinen allgemeinen nationalen gesetzlichen Mindestlohn. Branchenverträge, Berufe, Kantone oder Kollektivverhandlungen setzen Grenzen.", "Die Tabelle lässt diese Länder leer, statt einen Branchensatz als nationale Zahl auszugeben."] },
      ],
      faq: [
        { question: "Welcher Euro-Stundenlohn ist hier am höchsten?", answer: "Die Niederlande mit 14,71 Euro ab 21 Jahren im Jahr 2026." },
        { question: "Wie hoch ist Spaniens Mindestlohn auf zwölf Monate verteilt?", answer: "1.424,50 Euro brutto monatlich, weil 1.221 mal 14 genau 17.094 Euro ergeben." },
      ],
    },
    fr: {
      slug: "salaire-minimum-europe-2026-comparaison",
      title: "Salaire minimum en Europe : comparaison 2026",
      description: "Comparer les minimums officiels 2026 en Allemagne, Espagne, France, Pays-Bas, Royaume-Uni et Portugal.",
      intro: "Les minimums ne sont comparables qu’en précisant taux horaire et 12 ou 14 versements. Voici les chiffres légaux 2026, sans inventer de montant national pour les pays qui n’en ont pas.",
      facts: [
        { label: "Allemagne", value: "13,90 €/heure", detail: "28 912 € à 40 h × 52 semaines" },
        { label: "Espagne", value: "1 221 € × 14", detail: "17 094 € annuels" },
        { label: "France", value: "12,02 €/heure", detail: "SMIC horaire brut" },
        { label: "Pays-Bas", value: "14,71 €/heure", detail: "21 ans et plus, janvier 2026" },
        { label: "Royaume-Uni", value: "12,71 £/heure", detail: "21 ans et plus, avril 2026" },
        { label: "Portugal", value: "920 € × 14", detail: "12 880 € annuels" },
      ],
      sections: [
        { heading: "Systèmes horaires", paragraphs: ["L’Allemagne fixe 13,90 € en 2026, la France un SMIC brut de 12,02 €. Les Pays-Bas sont à 14,71 € dès 21 ans et le Royaume-Uni à 12,71 £ à partir d’avril.", "Annualiser exige un horaire. À 40 heures sur 52 semaines, l’Allemagne donne 28 912 € et les Pays-Bas 30 596,80 €. Ce calcul ne garantit pas un volume d’heures."] },
        { heading: "Montants mensuels sur 14 versements", paragraphs: ["L’Espagne verse 1 221 € quatorze fois, soit 17 094 € annuels. Proratisé sur douze fiches, cela représente 1 424,50 € brut par mois.", "Le Portugal fixe 920 € sur 14, soit 12 880 € annuels et 1 073,33 € si proratisé sur douze mois."] },
        { heading: "Pays sans chiffre national", paragraphs: ["Italie, Autriche, Danemark, Suède, Norvège, Finlande et Suisse n’ont pas de minimum légal national général. Conventions sectorielles, métiers, cantons ou négociation collective fixent les planchers.", "La comparaison laisse ces pays sans montant plutôt que de transformer une convention en faux minimum national."] },
      ],
      faq: [
        { question: "Quel taux horaire en euros est le plus élevé ici ?", answer: "Les Pays-Bas, à 14,71 € par heure dès 21 ans en 2026." },
        { question: "Quel est le minimum espagnol proratisé sur 12 mois ?", answer: "1 424,50 € brut par mois, car 1 221 € multipliés par 14 donnent 17 094 €." },
      ],
    },
  },
  "twelve-fourteen-payments": {
    en: {
      slug: "12-vs-14-salary-payments-spain-portugal",
      title: "12 vs 14 Salary Payments in Spain and Portugal",
      description: "Understand 12 and 14 salary payments with exact annual, monthly and net examples from Spain and Portugal in 2026.",
      intro: "Fourteen payments do not create two free months of salary. They divide the agreed annual gross into smaller ordinary payments plus two extra payments. A €33,600 Spanish salary is €2,800 gross across 12 payments or €2,400 across 14.",
      facts: [
        { label: "Spain example", value: "€33,600/year", detail: "€2,800 × 12 or €2,400 × 14" },
        { label: "Spain estimated net", value: "€25,484.90/year", detail: "€2,123.74 × 12 or €1,820.35 × 14 average" },
        { label: "Portugal example", value: "€25,200/year", detail: "€2,100 × 12 or €1,800 × 14" },
        { label: "Portugal estimated net", value: "€19,488.45/year", detail: "€1,624.04 × 12 or €1,392.03 × 14 average" },
      ],
      sections: [
        { heading: "The arithmetic employers expect you to know", paragraphs: ["Multiply the gross payment by the number of contractual payments. €2,400 in 14 payments is €33,600 a year; €2,400 in 12 payments is €28,800. A job advert that gives only the monthly figure is incomplete without the payment count.", "When extra payments are prorated, the same €33,600 appears as €2,800 on each of twelve gross payslips. Without proration, ordinary months show €2,400 and two extra gross payments of €2,400 arrive at the agreed dates."] },
        { heading: "Spain worked example", paragraphs: ["On the standard Spanish profile, €33,600 gross produces €25,484.90 annual net after about €5,937.82 IRPF and €2,177.28 Social Security.", "For budgeting, €25,484.90 divided by twelve is €2,123.74 per calendar month. Divided mechanically by fourteen it is €1,820.35, although real withholding across ordinary and extra payslips may not be perfectly uniform."] },
        { heading: "Portugal worked example", paragraphs: ["A Portuguese €1,800 × 14 contract is €25,200 gross a year. The standard engine estimates €19,488.45 annual net after €2,939.55 income tax and €2,772 Social Security.", "That is €1,624.04 averaged across twelve calendar months or €1,392.03 across fourteen equalised net payments. Annual net is the stable comparison number."] },
      ],
      faq: [
        { question: "Is €2,400 in 14 payments better than €2,800 in 12?", answer: "They are the same €33,600 annual gross. The difference is cash-flow timing, not annual salary." },
        { question: "Does tax become higher with 14 payments?", answer: "The annual liability is based on annual income. Withholding per payslip can differ, but the payment count alone does not increase annual tax." },
      ],
    },
    es: {
      slug: "diferencia-12-14-pagas-espana-portugal",
      title: "Diferencia entre 12 y 14 pagas: España y Portugal",
      description: "Entiende 12 y 14 pagas con ejemplos exactos de bruto, mensualidad y neto en España y Portugal en 2026.",
      intro: "Catorce pagas no regalan dos meses de sueldo. Reparten el bruto anual pactado en mensualidades ordinarias menores y dos extras. Un salario español de 33.600 € son 2.800 € en 12 pagas o 2.400 € en 14.",
      facts: [
        { label: "Ejemplo España", value: "33.600 €/año", detail: "2.800 € × 12 o 2.400 € × 14" },
        { label: "Neto España", value: "25.484,90 €/año", detail: "2.123,74 € × 12 o 1.820,35 € × 14 de media" },
        { label: "Ejemplo Portugal", value: "25.200 €/año", detail: "2.100 € × 12 o 1.800 € × 14" },
        { label: "Neto Portugal", value: "19.488,45 €/año", detail: "1.624,04 € × 12 o 1.392,03 € × 14 de media" },
      ],
      sections: [
        { heading: "La cuenta que debes hacer", paragraphs: ["Multiplica el bruto de cada paga por el número de pagas del contrato. 2.400 € en 14 son 33.600 €; 2.400 € en 12 son 28.800 €. Un anuncio que solo indica mensualidad está incompleto.", "Con extras prorrateadas, los mismos 33.600 € aparecen como 2.800 € en cada una de doce nóminas. Sin prorrata, los meses ordinarios muestran 2.400 € y llegan dos extras brutas del mismo importe."] },
        { heading: "Ejemplo calculado de España", paragraphs: ["Con el perfil estándar, 33.600 € brutos dejan 25.484,90 € netos al año tras unos 5.937,82 € de IRPF y 2.177,28 € de Seguridad Social.", "Para presupuesto, 25.484,90 € entre doce son 2.123,74 € por mes natural. Entre catorce son 1.820,35 €, aunque la retención real puede no ser idéntica en nóminas ordinarias y extras."] },
        { heading: "Ejemplo calculado de Portugal", paragraphs: ["Un contrato portugués de 1.800 € por 14 son 25.200 € brutos al año. El motor estima 19.488,45 € netos tras 2.939,55 € de IRS y 2.772 € de Segurança Social.", "Equivale a 1.624,04 € de media en doce meses o 1.392,03 € en catorce pagos netos igualados. El neto anual es la comparación estable."] },
      ],
      faq: [
        { question: "¿Es mejor 2.400 € en 14 pagas o 2.800 € en 12?", answer: "Son el mismo bruto anual de 33.600 €. Solo cambia cuándo recibes el dinero." },
        { question: "¿Se pagan más impuestos por tener 14 pagas?", answer: "La obligación anual depende de la renta anual. Puede cambiar la retención por nómina, pero no el impuesto anual solo por el número de pagas." },
      ],
    },
    de: {
      slug: "12-oder-14-gehaltszahlungen-spanien-portugal",
      title: "12 oder 14 Gehaltszahlungen in Spanien und Portugal",
      description: "Zwölf und vierzehn Gehaltszahlungen mit exakten Brutto- und Nettobeispielen für Spanien und Portugal verstehen.",
      intro: "Vierzehn Zahlungen schenken keine zwei Monatsgehälter. Das vereinbarte Jahresbrutto wird auf kleinere reguläre Beträge und zwei Sonderzahlungen verteilt. 33.600 Euro sind 2.800 mal zwölf oder 2.400 mal vierzehn.",
      facts: [
        { label: "Beispiel Spanien", value: "33.600 €/Jahr", detail: "2.800 € × 12 oder 2.400 € × 14" },
        { label: "Netto Spanien", value: "25.484,90 €/Jahr", detail: "2.123,74 € × 12 oder 1.820,35 € × 14" },
        { label: "Beispiel Portugal", value: "25.200 €/Jahr", detail: "2.100 € × 12 oder 1.800 € × 14" },
        { label: "Netto Portugal", value: "19.488,45 €/Jahr", detail: "1.624,04 € × 12 oder 1.392,03 € × 14" },
      ],
      sections: [
        { heading: "Die entscheidende Rechnung", paragraphs: ["Multipliziere die Bruttozahlung mit der vertraglichen Anzahl. 2.400 Euro mal 14 sind 33.600 Euro; mal zwölf nur 28.800 Euro. Eine Monatsangabe ohne Zahlungszahl ist unvollständig.", "Bei anteiligen Sonderzahlungen erscheinen dieselben 33.600 Euro als 2.800 Euro in zwölf Abrechnungen. Ohne Anteiligkeit sind es 2.400 Euro regulär plus zwei Sonderzahlungen."] },
        { heading: "Spanien-Beispiel", paragraphs: ["Im Standardprofil ergeben 33.600 Euro Brutto 25.484,90 Euro Jahresnetto nach rund 5.937,82 Euro IRPF und 2.177,28 Euro Sozialversicherung.", "Durch zwölf geteilt sind das 2.123,74 Euro je Kalendermonat; durch vierzehn 1.820,35 Euro. Tatsächliche Einbehaltung kann zwischen normalen und Sonderabrechnungen abweichen."] },
        { heading: "Portugal-Beispiel", paragraphs: ["1.800 Euro mal 14 sind 25.200 Euro Jahresbrutto. Das Modell berechnet 19.488,45 Euro Netto nach 2.939,55 Euro IRS und 2.772 Euro Sozialversicherung.", "Das entspricht 1.624,04 Euro im Zwölfmonatsdurchschnitt oder 1.392,03 Euro bei vierzehn gleichmäßigen Nettozahlungen."] },
      ],
      faq: [
        { question: "Sind 2.400 Euro mal 14 besser als 2.800 mal zwölf?", answer: "Nein, beides sind 33.600 Euro Jahresbrutto. Nur der Zahlungszeitpunkt unterscheidet sich." },
        { question: "Fallen bei 14 Zahlungen mehr Steuern an?", answer: "Die Jahressteuer richtet sich nach dem Jahreseinkommen. Die Einbehaltung je Abrechnung kann anders verteilt sein." },
      ],
    },
    fr: {
      slug: "12-ou-14-versements-salaire-espagne-portugal",
      title: "12 ou 14 versements de salaire en Espagne et au Portugal",
      description: "Comprendre 12 et 14 versements avec des exemples bruts et nets précis en Espagne et au Portugal en 2026.",
      intro: "Quatorze versements n’offrent pas deux mois gratuits. Le brut annuel convenu est réparti entre mois ordinaires plus faibles et deux primes. 33 600 € correspondent à 2 800 € sur douze ou 2 400 € sur quatorze.",
      facts: [
        { label: "Exemple Espagne", value: "33 600 €/an", detail: "2 800 € × 12 ou 2 400 € × 14" },
        { label: "Net Espagne", value: "25 484,90 €/an", detail: "2 123,74 € × 12 ou 1 820,35 € × 14" },
        { label: "Exemple Portugal", value: "25 200 €/an", detail: "2 100 € × 12 ou 1 800 € × 14" },
        { label: "Net Portugal", value: "19 488,45 €/an", detail: "1 624,04 € × 12 ou 1 392,03 € × 14" },
      ],
      sections: [
        { heading: "Le calcul à faire", paragraphs: ["Multipliez le brut de chaque versement par leur nombre contractuel. 2 400 € sur 14 donnent 33 600 €; sur douze, 28 800 €. Une annonce avec seulement le mensuel est incomplète.", "Avec primes proratisées, les mêmes 33 600 € apparaissent à 2 800 € sur douze fiches. Sans proratisation, les mois ordinaires sont à 2 400 € plus deux primes identiques."] },
        { heading: "Exemple espagnol", paragraphs: ["Le profil standard transforme 33 600 € brut en 25 484,90 € net annuels après environ 5 937,82 € d’IRPF et 2 177,28 € de sécurité sociale.", "Divisé par douze, cela donne 2 123,74 € par mois civil; par quatorze, 1 820,35 €. Les retenues réelles peuvent varier entre paies ordinaires et primes."] },
        { heading: "Exemple portugais", paragraphs: ["1 800 € multipliés par 14 donnent 25 200 € brut annuels. Le moteur estime 19 488,45 € net après 2 939,55 € d’IRS et 2 772 € de sécurité sociale.", "Cela correspond à 1 624,04 € en moyenne sur douze mois ou 1 392,03 € sur quatorze versements égalisés."] },
      ],
      faq: [
        { question: "2 400 € sur 14 valent-ils mieux que 2 800 € sur 12 ?", answer: "Non. Les deux représentent 33 600 € brut annuels; seul le calendrier change." },
        { question: "Paie-t-on plus d’impôt avec 14 versements ?", answer: "L’impôt annuel dépend du revenu annuel. La retenue par fiche peut être répartie différemment." },
      ],
    },
  },
};

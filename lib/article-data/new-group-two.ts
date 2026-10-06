import type { Locale } from "../i18n";
import type { ArticleLocale } from "../article-types";

export type GroupTwoId =
  | "usa-100000"
  | "canada-70000"
  | "switzerland-100000"
  | "germany-netherlands";

export const groupTwo: Record<GroupTwoId, Record<Locale, ArticleLocale>> = {
  "usa-100000": {
    en: {
      slug: "100000-salary-after-tax-usa",
      title: "$100,000 Salary After Tax in the US (2026)",
      description: "A 2026 federal take-home calculation for a $100,000 US salary with income tax, Social Security and Medicare shown separately.",
      intro: "A single filer earning $100,000 keeps an estimated $79,180 after 2026 federal income tax, Social Security and Medicare. That is $6,598.33 a month before state tax, health insurance or retirement deductions.",
      facts: [
        { label: "Annual gross", value: "$100,000", detail: "$8,333.33 per month" },
        { label: "Federal take-home", value: "$79,180", detail: "$6,598.33 per month" },
        { label: "Federal + FICA", value: "$20,820", detail: "20.82% of gross" },
      ],
      sections: [
        { heading: "The federal calculation", paragraphs: ["The 2026 standard deduction for a single filer is $16,100, leaving $83,900 of taxable income. The first $12,400 is taxed at 10%, the next portion to $50,400 at 12%, and the balance at 22%. Federal income tax is $13,170.", "FICA adds $6,200 of Social Security at 6.2% and $1,450 of Medicare at 1.45%. The $100,000 salary is below the 2026 Social Security wage base of $184,500 and below the additional Medicare threshold."] },
        { heading: "State tax changes the bank deposit", paragraphs: ["The $79,180 figure assumes a 0% state-income-tax setting. Florida, Texas and Washington do not levy a broad individual wage tax, while California, New York and many other states do. Entering a 5% state rate in the advanced calculator subtracts another $5,000 and reduces the estimate to $74,180.", "A precise state calculation may use brackets, deductions and local city taxes rather than one flat rate. The page keeps the federal result separate so the assumption is visible."] },
        { heading: "Payroll deductions beyond tax", paragraphs: ["Employer health insurance, a 401(k), HSA or FSA contribution reduce the cash paycheck but may also lower taxable wages. They are not included in the standard number because the employee chooses them and plans differ.", "The result is an annual tax estimate, not a claim that every semi-monthly paycheck will equal $3,299.17. Payroll withholding can differ during the year and is reconciled on the tax return."] },
      ],
      faq: [
        { question: "How much is $100,000 after federal tax in 2026?", answer: "$79,180 after estimated federal income tax, Social Security and Medicare for a single filer using the standard deduction." },
        { question: "Does the $6,598 monthly net include state tax?", answer: "No. It is the 0% state-tax baseline. A 5% state-rate assumption would lower annual take-home to about $74,180." },
      ],
    },
    es: {
      slug: "100000-dolares-brutos-neto-estados-unidos",
      title: "100.000 $ brutos en Estados Unidos: neto 2026",
      description: "Cálculo federal de 100.000 $ en Estados Unidos en 2026 con impuesto, Social Security y Medicare por separado.",
      intro: "Una persona soltera que gana 100.000 $ conserva unos 79.180 $ después del impuesto federal, Social Security y Medicare de 2026: 6.598,33 $ al mes antes del impuesto estatal, seguro médico o jubilación.",
      facts: [
        { label: "Bruto anual", value: "100.000 $", detail: "8.333,33 $ al mes" },
        { label: "Neto federal", value: "79.180 $", detail: "6.598,33 $ al mes" },
        { label: "Impuesto federal + FICA", value: "20.820 $", detail: "20,82 % del bruto" },
      ],
      sections: [
        { heading: "El cálculo federal", paragraphs: ["La deducción estándar de 2026 para solteros es 16.100 $, por lo que quedan 83.900 $ sujetos a impuesto. Los primeros 12.400 $ tributan al 10 %, el tramo hasta 50.400 $ al 12 % y el resto al 22 %. El impuesto federal es 13.170 $.", "FICA añade 6.200 $ de Social Security al 6,2 % y 1.450 $ de Medicare al 1,45 %. El salario no supera la base máxima de Social Security de 184.500 $ ni el umbral adicional de Medicare."] },
        { heading: "El estado cambia el ingreso", paragraphs: ["Los 79.180 $ usan un impuesto estatal del 0 %. Florida, Texas y Washington no aplican un impuesto general al salario, mientras California, Nueva York y muchos otros estados sí. Con un 5 % estatal, el cálculo resta otros 5.000 $ y deja 74.180 $.", "Un cálculo estatal completo puede usar tramos, deducciones e impuestos municipales. Separamos la cifra federal para que el supuesto sea visible."] },
        { heading: "Otros descuentos de nómina", paragraphs: ["Seguro médico, 401(k), HSA o FSA reducen el cheque disponible y a veces también la renta imponible. No se incluyen porque dependen del plan y de la elección del trabajador.", "La cifra es una estimación anual. La retención de cada nómina puede ser distinta durante el año y después se regulariza en la declaración."] },
      ],
      faq: [
        { question: "¿Cuánto queda de 100.000 $ después de impuestos federales?", answer: "79.180 $ después de impuesto federal, Social Security y Medicare para una persona soltera con deducción estándar." },
        { question: "¿Los 6.598 $ mensuales incluyen impuesto estatal?", answer: "No. Es el caso base con 0 %. Un tipo estatal del 5 % reduciría el neto anual a unos 74.180 $." },
      ],
    },
    de: {
      slug: "100000-dollar-gehalt-netto-usa",
      title: "100.000 Dollar Gehalt nach Steuern in den USA 2026",
      description: "US-Bundesberechnung 2026 für 100.000 Dollar Gehalt mit Einkommensteuer, Social Security und Medicare.",
      intro: "Eine alleinstehende Person mit 100.000 Dollar Gehalt behält nach Bundeseinkommensteuer, Social Security und Medicare geschätzt 79.180 Dollar: 6.598,33 Dollar monatlich vor Bundesstaatsteuer, Krankenversicherung oder Altersvorsorge.",
      facts: [
        { label: "Jahresbrutto", value: "$100.000", detail: "$8.333,33 pro Monat" },
        { label: "Netto nach Bundesabgaben", value: "$79.180", detail: "$6.598,33 pro Monat" },
        { label: "Bundessteuer + FICA", value: "$20.820", detail: "20,82 % des Bruttos" },
      ],
      sections: [
        { heading: "Die Bundesberechnung", paragraphs: ["Der Standardabzug für Alleinstehende beträgt 2026 16.100 Dollar; 83.900 Dollar bleiben steuerpflichtig. 12.400 Dollar werden mit 10 %, der Teil bis 50.400 Dollar mit 12 % und der Rest mit 22 % besteuert. Die Bundeseinkommensteuer beträgt 13.170 Dollar.", "FICA umfasst 6.200 Dollar Social Security zu 6,2 % und 1.450 Dollar Medicare zu 1,45 %. Das Gehalt liegt unter der Social-Security-Grenze von 184.500 Dollar."] },
        { heading: "Bundesstaatsteuer verändert die Auszahlung", paragraphs: ["79.180 Dollar setzen 0 % Bundesstaatsteuer voraus. Florida, Texas und Washington haben keine allgemeine Lohnsteuer, Kalifornien, New York und viele andere Staaten schon. Bei pauschal 5 % sinkt das Netto um weitere 5.000 auf 74.180 Dollar.", "Tatsächliche Bundesstaaten nutzen oft Stufen, Abzüge und kommunale Steuern. Die Bundeszahl bleibt getrennt, damit die Annahme klar ist."] },
        { heading: "Weitere Lohnabzüge", paragraphs: ["Krankenversicherung, 401(k), HSA oder FSA senken die Auszahlung und teils das steuerpflichtige Einkommen. Sie fehlen im Standardwert, weil Tarif und Wahl individuell sind.", "Das Ergebnis ist eine Jahresberechnung. Die tatsächliche Einbehaltung je Gehalt kann schwanken und wird mit der Steuererklärung abgestimmt."] },
      ],
      faq: [
        { question: "Wie viel bleiben von 100.000 Dollar nach Bundessteuer?", answer: "79.180 Dollar nach Bundeseinkommensteuer, Social Security und Medicare für Alleinstehende mit Standardabzug." },
        { question: "Enthält das Monatsnetto Bundesstaatsteuer?", answer: "Nein. Bei angenommenen 5 % würden statt 79.180 nur etwa 74.180 Dollar Jahresnetto bleiben." },
      ],
    },
    fr: {
      slug: "100000-dollars-brut-net-etats-unis",
      title: "100 000 $ brut aux États-Unis : net 2026",
      description: "Calcul fédéral 2026 d’un salaire de 100 000 $ avec impôt, Social Security et Medicare séparés.",
      intro: "Une personne célibataire gagnant 100 000 $ conserve environ 79 180 $ après impôt fédéral, Social Security et Medicare en 2026, soit 6 598,33 $ par mois avant impôt d’État, santé ou retraite.",
      facts: [
        { label: "Brut annuel", value: "100 000 $", detail: "8 333,33 $ par mois" },
        { label: "Net fédéral", value: "79 180 $", detail: "6 598,33 $ par mois" },
        { label: "Impôt fédéral + FICA", value: "20 820 $", detail: "20,82 % du brut" },
      ],
      sections: [
        { heading: "Le calcul fédéral", paragraphs: ["La déduction standard 2026 pour célibataire est de 16 100 $, laissant 83 900 $ imposables. Les premiers 12 400 $ sont taxés à 10 %, la part jusqu’à 50 400 $ à 12 % et le solde à 22 %. L’impôt fédéral atteint 13 170 $.", "FICA ajoute 6 200 $ de Social Security à 6,2 % et 1 450 $ de Medicare à 1,45 %. Le salaire reste sous le plafond Social Security 2026 de 184 500 $."] },
        { heading: "L’impôt d’État change le virement", paragraphs: ["Le résultat de 79 180 $ suppose 0 % d’impôt d’État. La Floride, le Texas et Washington n’ont pas d’impôt général sur les salaires, contrairement à la Californie ou New York. Un taux de 5 % retirerait 5 000 $ et laisserait 74 180 $.", "Un calcul complet peut utiliser tranches, déductions et impôts municipaux. Le montant fédéral reste séparé pour rendre l’hypothèse visible."] },
        { heading: "Autres retenues", paragraphs: ["Assurance santé, 401(k), HSA ou FSA réduisent le chèque et parfois le revenu imposable. Ils ne sont pas inclus car les régimes et choix varient.", "Il s’agit d’une estimation annuelle. La retenue de chaque paie peut varier avant régularisation dans la déclaration."] },
      ],
      faq: [
        { question: "Quel net fédéral sur 100 000 $ en 2026 ?", answer: "79 180 $ après impôt fédéral, Social Security et Medicare pour un célibataire utilisant la déduction standard." },
        { question: "Les 6 598 $ mensuels incluent-ils l’État ?", answer: "Non. Avec un taux d’État de 5 %, le net annuel tomberait à environ 74 180 $." },
      ],
    },
  },
  "canada-70000": {
    en: {
      slug: "70000-salary-after-tax-canada-ontario",
      title: "C$70,000 Salary After Tax in Ontario (2026)",
      description: "A 2026 Ontario take-home calculation for C$70,000 with federal tax, provincial tax, health premium, CPP and EI.",
      intro: "A C$70,000 Ontario salary leaves an estimated C$53,786.27 in 2026, or C$4,482.19 a month. The calculation applies current federal and Ontario brackets, basic credits, CPP, EI and the Ontario health premium.",
      facts: [
        { label: "Annual gross", value: "C$70,000", detail: "C$5,833.33 per month" },
        { label: "Annual net", value: "C$53,786.27", detail: "C$4,482.19 per month" },
        { label: "All deductions", value: "C$16,213.73", detail: "You keep 76.84%" },
      ],
      sections: [
        { heading: "Five deductions, not one tax rate", paragraphs: ["The estimate contains C$7,278.19 federal income tax, C$3,255.73 Ontario tax, a C$600 Ontario health premium, C$3,956.75 CPP and C$1,123.07 Employment Insurance. The total is C$16,213.73.", "For 2026, the first federal bracket is 14% to C$58,523 and the next is 20.5%. Ontario applies 5.05% to C$53,891 and 9.15% to the next slice. Basic personal amounts and payroll credits reduce the gross tax."] },
        { heading: "CPP and EI limits matter", paragraphs: ["CPP is 5.95% on pensionable earnings above the C$3,500 basic exemption up to C$74,600. At C$70,000 the contribution is C$3,956.75. EI is already capped: 1.63% on the C$68,900 maximum gives C$1,123.07.", "At higher salaries CPP and EI stop rising after their annual limits, apart from the second additional CPP band between C$74,600 and C$85,000."] },
        { heading: "Province is part of the answer", paragraphs: ["The same C$70,000 gross produces a different net in Alberta, British Columbia or Quebec because provincial brackets, credits and payroll programs differ. This page is specifically an Ontario calculation, not a Canada-wide average.", "Employer benefits, pension-plan contributions, union dues and taxable benefits are not included in the standard figure. They can move the actual deposit without changing the statutory bracket table."] },
      ],
      faq: [
        { question: "What is C$70,000 after tax in Ontario in 2026?", answer: "Approximately C$53,786.27 a year, or C$4,482.19 a month, under the stated standard payroll assumptions." },
        { question: "How much CPP and EI is deducted?", answer: "C$3,956.75 CPP and C$1,123.07 EI, for C$5,079.82 in combined employee payroll contributions." },
      ],
    },
    es: {
      slug: "70000-dolares-canadienses-neto-ontario",
      title: "70.000 C$ brutos en Ontario: neto 2026",
      description: "Cálculo 2026 de 70.000 C$ en Ontario con impuesto federal, provincial, prima sanitaria, CPP y EI.",
      intro: "Un salario de 70.000 C$ en Ontario deja 53.786,27 C$ netos en 2026, o 4.482,19 C$ al mes. El cálculo aplica tramos federales y provinciales, créditos básicos, CPP, EI y la prima sanitaria de Ontario.",
      facts: [
        { label: "Bruto anual", value: "70.000 C$", detail: "5.833,33 C$ al mes" },
        { label: "Neto anual", value: "53.786,27 C$", detail: "4.482,19 C$ al mes" },
        { label: "Deducciones", value: "16.213,73 C$", detail: "Conservas el 76,84 %" },
      ],
      sections: [
        { heading: "Cinco descuentos, no un tipo único", paragraphs: ["La estimación incluye 7.278,19 C$ de impuesto federal, 3.255,73 C$ de Ontario, 600 C$ de prima sanitaria, 3.956,75 C$ de CPP y 1.123,07 C$ de Employment Insurance. Total: 16.213,73 C$.", "En 2026, el primer tramo federal es 14 % hasta 58.523 C$ y el siguiente 20,5 %. Ontario aplica 5,05 % hasta 53.891 C$ y 9,15 % al tramo siguiente. Los mínimos personales y créditos reducen la cuota."] },
        { heading: "Los topes de CPP y EI", paragraphs: ["CPP cobra 5,95 % sobre la renta pensionable por encima de la exención de 3.500 C$ hasta 74.600 C$. A 70.000 C$ aporta 3.956,75 C$. EI ya alcanza el máximo: 1,63 % de 68.900 C$ son 1.123,07 C$.", "En salarios superiores, CPP y EI dejan de crecer tras sus topes, salvo el segundo tramo adicional de CPP entre 74.600 y 85.000 C$."] },
        { heading: "La provincia forma parte del resultado", paragraphs: ["El mismo bruto da otro neto en Alberta, Columbia Británica o Quebec por sus tramos, créditos y programas. Esta página calcula Ontario, no una media canadiense.", "Pensión de empresa, sindicato, beneficios y seguro complementario no están en la cifra estándar y pueden cambiar el ingreso bancario."] },
      ],
      faq: [
        { question: "¿Cuánto queda de 70.000 C$ en Ontario en 2026?", answer: "Aproximadamente 53.786,27 C$ al año o 4.482,19 C$ al mes con los supuestos indicados." },
        { question: "¿Cuánto se descuenta de CPP y EI?", answer: "3.956,75 C$ de CPP y 1.123,07 C$ de EI: 5.079,82 C$ en total." },
      ],
    },
    de: {
      slug: "70000-kanadische-dollar-netto-ontario",
      title: "70.000 kanadische Dollar netto in Ontario 2026",
      description: "Ontario-Nettoberechnung 2026 für 70.000 C$ mit Bundes- und Provinzsteuer, Gesundheitsprämie, CPP und EI.",
      intro: "70.000 C$ Jahresbrutto in Ontario ergeben 2026 geschätzt 53.786,27 C$ netto oder 4.482,19 C$ monatlich. Berücksichtigt sind aktuelle Stufen, Grundgutschriften, CPP, EI und die Ontario-Gesundheitsprämie.",
      facts: [
        { label: "Jahresbrutto", value: "70.000 C$", detail: "5.833,33 C$ pro Monat" },
        { label: "Jahresnetto", value: "53.786,27 C$", detail: "4.482,19 C$ pro Monat" },
        { label: "Alle Abzüge", value: "16.213,73 C$", detail: "76,84 % bleiben" },
      ],
      sections: [
        { heading: "Fünf Abzüge statt eines Pauschalsatzes", paragraphs: ["Enthalten sind 7.278,19 C$ Bundessteuer, 3.255,73 C$ Ontario-Steuer, 600 C$ Gesundheitsprämie, 3.956,75 C$ CPP und 1.123,07 C$ Employment Insurance. Zusammen sind das 16.213,73 C$.", "2026 gelten bundesweit 14 % bis 58.523 C$ und danach 20,5 %. Ontario berechnet 5,05 % bis 53.891 C$ und 9,15 % auf den nächsten Teil. Persönliche Grundbeträge und Gutschriften mindern die Steuer."] },
        { heading: "CPP- und EI-Grenzen", paragraphs: ["CPP beträgt 5,95 % des Einkommens oberhalb 3.500 C$ bis 74.600 C$. Bei 70.000 C$ sind es 3.956,75 C$. EI ist bereits am Maximum: 1,63 % von 68.900 C$ ergeben 1.123,07 C$.", "Bei höheren Einkommen steigen CPP und EI nach ihren Grenzen nicht weiter, abgesehen vom zweiten CPP-Zusatzband zwischen 74.600 und 85.000 C$."] },
        { heading: "Die Provinz gehört zur Antwort", paragraphs: ["Dasselbe Brutto ergibt in Alberta, British Columbia oder Quebec ein anderes Netto. Diese Seite ist eine Ontario-Berechnung, kein kanadischer Durchschnitt.", "Betriebsrente, Gewerkschaft, Zusatzversicherung und steuerpflichtige Leistungen sind nicht enthalten und können die Überweisung verändern."] },
      ],
      faq: [
        { question: "Wie viel bleiben von 70.000 C$ in Ontario?", answer: "Etwa 53.786,27 C$ jährlich oder 4.482,19 C$ monatlich unter den genannten Annahmen." },
        { question: "Wie hoch sind CPP und EI?", answer: "3.956,75 C$ CPP plus 1.123,07 C$ EI, zusammen 5.079,82 C$." },
      ],
    },
    fr: {
      slug: "70000-dollars-canadiens-net-ontario",
      title: "70 000 C$ brut en Ontario : net 2026",
      description: "Calcul 2026 de 70 000 C$ en Ontario avec impôts fédéral et provincial, contribution santé, RPC et assurance-emploi.",
      intro: "Un salaire de 70 000 C$ en Ontario laisse environ 53 786,27 C$ net en 2026, soit 4 482,19 C$ par mois. Le calcul applique tranches fédérales et ontariennes, crédits, RPC, assurance-emploi et contribution santé.",
      facts: [
        { label: "Brut annuel", value: "70 000 C$", detail: "5 833,33 C$ par mois" },
        { label: "Net annuel", value: "53 786,27 C$", detail: "4 482,19 C$ par mois" },
        { label: "Retenues", value: "16 213,73 C$", detail: "76,84 % conservés" },
      ],
      sections: [
        { heading: "Cinq retenues, pas un taux unique", paragraphs: ["L’estimation comprend 7 278,19 C$ d’impôt fédéral, 3 255,73 C$ d’impôt ontarien, 600 C$ de contribution santé, 3 956,75 C$ de RPC et 1 123,07 C$ d’assurance-emploi, soit 16 213,73 C$.", "En 2026, le fédéral applique 14 % jusqu’à 58 523 C$, puis 20,5 %. L’Ontario applique 5,05 % jusqu’à 53 891 C$, puis 9,15 %. Les montants personnels et crédits réduisent l’impôt brut."] },
        { heading: "Plafonds RPC et assurance-emploi", paragraphs: ["Le RPC prélève 5,95 % au-dessus de l’exemption de 3 500 C$ jusqu’à 74 600 C$. À 70 000 C$, cela donne 3 956,75 C$. L’assurance-emploi est déjà plafonnée : 1,63 % de 68 900 C$ donne 1 123,07 C$.", "Au-dessus, les prélèvements cessent d’augmenter après leurs plafonds, sauf seconde cotisation supplémentaire RPC entre 74 600 et 85 000 C$."] },
        { heading: "La province compte", paragraphs: ["Le même brut donne un net différent en Alberta, Colombie-Britannique ou Québec. Cette page calcule précisément l’Ontario, pas une moyenne canadienne.", "Retraite d’entreprise, syndicat, assurances complémentaires et avantages imposables ne sont pas inclus."] },
      ],
      faq: [
        { question: "Quel net sur 70 000 C$ en Ontario en 2026 ?", answer: "Environ 53 786,27 C$ par an ou 4 482,19 C$ par mois selon les hypothèses indiquées." },
        { question: "Combien pour le RPC et l’assurance-emploi ?", answer: "3 956,75 C$ de RPC et 1 123,07 C$ d’assurance-emploi, soit 5 079,82 C$." },
      ],
    },
  },
  "switzerland-100000": {
    en: {
      slug: "100000-chf-salary-after-tax-switzerland",
      title: "CHF 100,000 Salary After Tax in Switzerland (2026)",
      description: "A transparent Swiss estimate for CHF 100,000 gross in 2026, with income tax, AHV/IV/EO and unemployment insurance.",
      intro: "Using the calculator’s average-canton profile, CHF 100,000 gross produces CHF 87,288 after estimated income tax, AHV/IV/EO and unemployment insurance. That is CHF 7,274 a month before occupational pension and health-insurance premiums.",
      facts: [
        { label: "Annual gross", value: "CHF 100,000", detail: "CHF 8,333.33 per month" },
        { label: "Payroll net estimate", value: "CHF 87,288", detail: "CHF 7,274 per month" },
        { label: "Included deductions", value: "CHF 12,712", detail: "Average-canton tax profile" },
      ],
      sections: [
        { heading: "What the CHF 12,712 contains", paragraphs: ["The worked estimate includes CHF 6,312 income tax, CHF 5,300 AHV/IV/EO and CHF 1,100 unemployment insurance. The employee AHV/IV/EO rate is 5.3% and employee unemployment insurance is 1.1% on this salary.", "Tax is the variable part. Federal, cantonal and municipal rules plus civil status and denomination mean there is no honest single nationwide tax figure. The displayed amount fixes the calculator’s average-canton assumption so the result remains one number."] },
        { heading: "Two major costs are outside the displayed net", paragraphs: ["Occupational pension, or second pillar, depends on age, insured salary and the employer plan. An employee contribution can remove several thousand francs a year from cash pay. It is excluded because CHF 100,000 alone does not determine it.", "Mandatory health insurance is normally paid directly by the resident rather than withheld as a percentage of salary. It is also outside the payroll net. Budget it separately for each household member."] },
        { heading: "Low and high canton profiles", paragraphs: ["In the calculator, the low-canton profile reduces the estimated income-tax component by 28%, while the high profile increases it by 32%. On CHF 100,000, this changes the tax line from CHF 6,312 to roughly CHF 4,545 or CHF 8,332.", "AHV/IV/EO and unemployment rates do not change with that canton selector. The variation comes from the tax estimate, not from federal social-insurance rates."] },
      ],
      faq: [
        { question: "How much is CHF 100,000 net in Switzerland?", answer: "CHF 87,288 in the average-canton payroll estimate, before occupational pension and separately paid health insurance." },
        { question: "Why is health insurance not deducted?", answer: "Swiss mandatory health insurance is normally invoiced to the resident, not calculated as one payroll percentage of salary." },
      ],
    },
    es: {
      slug: "100000-francos-suizos-neto-suiza",
      title: "100.000 CHF brutos en Suiza: neto 2026",
      description: "Estimación transparente de 100.000 CHF en Suiza en 2026 con impuesto, AHV/IV/EO y seguro de desempleo.",
      intro: "Con el perfil de cantón medio, 100.000 CHF brutos dejan 87.288 CHF tras impuesto estimado, AHV/IV/EO y desempleo: 7.274 CHF al mes antes de pensión profesional y seguro médico.",
      facts: [
        { label: "Bruto anual", value: "100.000 CHF", detail: "8.333,33 CHF al mes" },
        { label: "Neto de nómina", value: "87.288 CHF", detail: "7.274 CHF al mes" },
        { label: "Deducciones incluidas", value: "12.712 CHF", detail: "Perfil cantonal medio" },
      ],
      sections: [
        { heading: "Qué contienen los 12.712 CHF", paragraphs: ["La estimación incluye 6.312 CHF de impuesto, 5.300 CHF de AHV/IV/EO y 1.100 CHF de desempleo. El trabajador paga 5,3 % de AHV/IV/EO y 1,1 % de desempleo a este nivel salarial.", "El impuesto es la parte variable. Federación, cantón, municipio, estado civil y confesión impiden una cifra nacional única. Fijamos el supuesto de cantón medio para ofrecer un único resultado reproducible."] },
        { heading: "Dos costes quedan fuera", paragraphs: ["La pensión profesional o segundo pilar depende de edad, salario asegurado y plan de empresa. Puede restar varios miles de francos al año, pero 100.000 CHF de bruto no bastan para calcularla.", "El seguro médico obligatorio suele pagarlo directamente el residente y no se retiene como porcentaje del salario. Debe presupuestarse aparte para cada miembro del hogar."] },
        { heading: "Perfiles cantonales bajo y alto", paragraphs: ["El perfil bajo reduce un 28 % el impuesto estimado y el alto lo aumenta un 32 %. En 100.000 CHF, la línea fiscal pasa de 6.312 CHF a unos 4.545 o 8.332 CHF.", "AHV/IV/EO y desempleo no cambian con ese selector. La diferencia proviene del impuesto, no de las cotizaciones federales."] },
      ],
      faq: [
        { question: "¿Cuánto queda neto de 100.000 CHF en Suiza?", answer: "87.288 CHF con el perfil cantonal medio, antes de pensión profesional y seguro médico pagado por separado." },
        { question: "¿Por qué no se resta el seguro médico?", answer: "Porque normalmente se factura al residente y no se calcula como un porcentaje único de nómina." },
      ],
    },
    de: {
      slug: "100000-franken-brutto-netto-schweiz",
      title: "100.000 Franken brutto: Netto in der Schweiz 2026",
      description: "Transparente Schweizer Schätzung für 100.000 CHF mit Einkommensteuer, AHV/IV/EO und Arbeitslosenversicherung.",
      intro: "Im Profil Durchschnittskanton ergeben 100.000 CHF Brutto 87.288 CHF nach geschätzter Steuer, AHV/IV/EO und Arbeitslosenversicherung: 7.274 CHF monatlich vor Pensionskasse und Krankenkassenprämie.",
      facts: [
        { label: "Jahresbrutto", value: "100.000 CHF", detail: "8.333,33 CHF pro Monat" },
        { label: "Geschätztes Lohnnetto", value: "87.288 CHF", detail: "7.274 CHF pro Monat" },
        { label: "Enthaltene Abzüge", value: "12.712 CHF", detail: "Durchschnittskanton" },
      ],
      sections: [
        { heading: "Bestandteile der 12.712 Franken", paragraphs: ["Enthalten sind 6.312 CHF Einkommensteuer, 5.300 CHF AHV/IV/EO und 1.100 CHF Arbeitslosenversicherung. Arbeitnehmer tragen 5,3 % AHV/IV/EO und auf diesem Gehalt 1,1 % ALV.", "Die Steuer variiert. Bund, Kanton, Gemeinde, Zivilstand und Konfession verhindern eine einzige landesweite Zahl. Das festgelegte Durchschnittsprofil macht das Ergebnis reproduzierbar."] },
        { heading: "Zwei große Kosten fehlen", paragraphs: ["Die Pensionskasse hängt von Alter, versichertem Lohn und Arbeitgeberplan ab und kann mehrere tausend Franken kosten. Aus dem Bruttogehalt allein lässt sie sich nicht bestimmen.", "Die obligatorische Krankenversicherung wird normalerweise direkt bezahlt und nicht als Lohnprozentsatz einbehalten. Sie muss je Haushaltsmitglied separat budgetiert werden."] },
        { heading: "Niedrig- und Hochkanton-Profil", paragraphs: ["Das niedrige Profil senkt die geschätzte Steuer um 28 %, das hohe erhöht sie um 32 %. Bei 100.000 CHF wird aus 6.312 CHF ungefähr 4.545 oder 8.332 CHF.", "AHV/IV/EO und ALV bleiben gleich. Die Abweichung stammt ausschließlich aus der Steuerannahme."] },
      ],
      faq: [
        { question: "Wie viel netto sind 100.000 Franken?", answer: "87.288 CHF im Durchschnittskanton-Profil, vor Pensionskasse und separat gezahlter Krankenversicherung." },
        { question: "Warum fehlt die Krankenkasse?", answer: "Sie wird normalerweise dem Einwohner in Rechnung gestellt und nicht pauschal vom Gehalt abgezogen." },
      ],
    },
    fr: {
      slug: "100000-francs-brut-net-suisse",
      title: "100 000 CHF brut en Suisse : net 2026",
      description: "Estimation suisse transparente pour 100 000 CHF avec impôt, AVS/AI/APG et assurance-chômage.",
      intro: "Avec le profil canton moyen, 100 000 CHF brut donnent 87 288 CHF après impôt estimé, AVS/AI/APG et chômage, soit 7 274 CHF par mois avant caisse de pension et assurance maladie.",
      facts: [
        { label: "Brut annuel", value: "100 000 CHF", detail: "8 333,33 CHF par mois" },
        { label: "Net de paie estimé", value: "87 288 CHF", detail: "7 274 CHF par mois" },
        { label: "Retenues incluses", value: "12 712 CHF", detail: "Profil canton moyen" },
      ],
      sections: [
        { heading: "Contenu des 12 712 francs", paragraphs: ["L’estimation comprend 6 312 CHF d’impôt, 5 300 CHF d’AVS/AI/APG et 1 100 CHF de chômage. Le salarié paie 5,3 % d’AVS/AI/APG et 1,1 % de chômage à ce niveau.", "L’impôt varie selon Confédération, canton, commune, état civil et confession. Le profil canton moyen fixe une hypothèse claire afin de fournir un chiffre unique."] },
        { heading: "Deux coûts importants restent dehors", paragraphs: ["La caisse de pension dépend de l’âge, du salaire assuré et du plan employeur. Elle peut retirer plusieurs milliers de francs, mais le brut seul ne permet pas de la calculer.", "L’assurance maladie obligatoire est généralement payée directement par le résident, pas retenue en pourcentage du salaire. Elle doit être budgétée par membre du foyer."] },
        { heading: "Profils canton bas et élevé", paragraphs: ["Le profil bas réduit l’impôt estimé de 28 % et le profil élevé l’augmente de 32 %. Sur 100 000 CHF, la ligne fiscale passe de 6 312 CHF à environ 4 545 ou 8 332 CHF.", "AVS/AI/APG et chômage ne changent pas. La différence vient de l’hypothèse fiscale."] },
      ],
      faq: [
        { question: "Quel net pour 100 000 CHF en Suisse ?", answer: "87 288 CHF avec le profil canton moyen, avant caisse de pension et assurance maladie payée séparément." },
        { question: "Pourquoi l’assurance maladie n’est-elle pas retirée ?", answer: "Elle est normalement facturée au résident et ne correspond pas à un pourcentage national de paie." },
      ],
    },
  },
  "germany-netherlands": {
    en: {
      slug: "germany-vs-netherlands-net-salary",
      title: "Germany vs Netherlands Net Salary on €50,000 (2026)",
      description: "Compare a €50,000 gross salary in Germany and the Netherlands with one calculation method and explicit 2026 assumptions.",
      intro: "At €50,000 gross a year, the standard estimates are €32,574 net in Germany and €39,140 in the Netherlands. The €6,566 gap needs context: the Dutch figure excludes an employer-specific pension premium, while Germany includes the main statutory insurance deductions.",
      facts: [
        { label: "Germany net", value: "€32,574/year", detail: "€2,714.50 per month" },
        { label: "Netherlands net", value: "€39,140/year", detail: "€3,261.69 per month" },
        { label: "Displayed difference", value: "€6,566/year", detail: "€547.19 per month" },
      ],
      sections: [
        { heading: "Same gross, different payroll structure", paragraphs: ["Germany deducts about €6,551 income tax, €4,650 pension, €4,375 public health, €650 unemployment and €1,200 long-term care in the default profile. The resulting net is €32,574.06.", "The Netherlands applies Box 1 tax and national insurance, then the general and employment credits. The final tax line is €10,859.67, leaving €39,140.33 before any occupational-pension employee premium."] },
        { heading: "Make the comparison fair", paragraphs: ["For Germany we use tax class I, age 30, no children, no church tax and public insurance. For the Netherlands we use twelve salary payments, no 30% ruling and no pension deduction. Those assumptions explain the result better than a headline percentage.", "Dutch holiday allowance can be paid on top of base salary, while German bonuses vary by contract. Compare total guaranteed annual gross before comparing monthly deposits."] },
        { heading: "Net salary is not purchasing power", paragraphs: ["Rent in Amsterdam or Munich can absorb more than the tax gap. Add housing, commuting, health costs outside payroll and childcare in the actual destination city.", "The result answers a narrow question—what remains from the same gross under each default payroll profile. It does not rank either country as universally cheaper or better paid."] },
      ],
      faq: [
        { question: "Where is €50,000 gross higher net, Germany or the Netherlands?", answer: "In these standard profiles, the Netherlands: €39,140 versus €32,574 in Germany, before a Dutch occupational-pension deduction." },
        { question: "Is the €6,566 difference guaranteed?", answer: "No. German tax class and insurance, plus a Dutch pension plan or 30% ruling, can materially change it." },
      ],
    },
    es: {
      slug: "salario-neto-alemania-paises-bajos-comparativa",
      title: "Salario neto Alemania vs Países Bajos con 50.000 € (2026)",
      description: "Compara 50.000 € brutos en Alemania y Países Bajos con el mismo método y supuestos de 2026 claramente definidos.",
      intro: "Con 50.000 € brutos anuales, el perfil estándar deja 32.574 € netos en Alemania y 39.140 € en Países Bajos. La diferencia de 6.566 € necesita contexto: Países Bajos no incluye una pensión laboral específica; Alemania sí incluye sus seguros obligatorios principales.",
      facts: [
        { label: "Neto Alemania", value: "32.574 €/año", detail: "2.714,50 € al mes" },
        { label: "Neto Países Bajos", value: "39.140 €/año", detail: "3.261,69 € al mes" },
        { label: "Diferencia mostrada", value: "6.566 €/año", detail: "547,19 € al mes" },
      ],
      sections: [
        { heading: "Mismo bruto, distinta nómina", paragraphs: ["Alemania descuenta unos 6.551 € de impuesto, 4.650 € de pensión, 4.375 € de salud pública, 650 € de desempleo y 1.200 € de dependencia. El neto resultante es 32.574,06 €.", "Países Bajos aplica Box 1 y seguros nacionales y resta los créditos general y laboral. La cuota final es 10.859,67 €, dejando 39.140,33 € antes de una posible pensión profesional."] },
        { heading: "Cómo hacer una comparación justa", paragraphs: ["En Alemania usamos clase I, 30 años, sin hijos, sin iglesia y seguro público. En Países Bajos usamos doce pagos, sin régimen del 30 % y sin pensión laboral. Estos supuestos explican más que un porcentaje titular.", "El vakantiegeld neerlandés puede pagarse aparte y los bonus alemanes dependen del contrato. Compara el bruto anual total garantizado."] },
        { heading: "Neto no significa poder adquisitivo", paragraphs: ["El alquiler de Ámsterdam o Múnich puede absorber más que la diferencia fiscal. Añade vivienda, transporte, salud fuera de nómina y guardería de la ciudad concreta.", "La comparación responde cuánto queda del mismo bruto en cada perfil. No afirma que un país sea siempre más barato ni que pague mejor."] },
      ],
      faq: [
        { question: "¿Dónde queda más neto con 50.000 €, Alemania o Países Bajos?", answer: "En estos perfiles, Países Bajos: 39.140 € frente a 32.574 €, antes de pensión laboral neerlandesa." },
        { question: "¿La diferencia de 6.566 € está garantizada?", answer: "No. Clase fiscal y seguro alemanes, pensión neerlandesa o régimen del 30 % pueden cambiarla." },
      ],
    },
    de: {
      slug: "nettogehalt-deutschland-niederlande-vergleich",
      title: "Nettogehalt Deutschland vs. Niederlande bei 50.000 €",
      description: "50.000 Euro Brutto in Deutschland und den Niederlanden mit einheitlicher Methode und klaren Annahmen für 2026 vergleichen.",
      intro: "Bei 50.000 Euro Jahresbrutto ergeben die Standardprofile 32.574 Euro netto in Deutschland und 39.140 Euro in den Niederlanden. Die Differenz von 6.566 Euro braucht Kontext: Die niederländische Zahl enthält keinen arbeitgeberspezifischen Pensionsbeitrag.",
      facts: [
        { label: "Netto Deutschland", value: "32.574 €/Jahr", detail: "2.714,50 € pro Monat" },
        { label: "Netto Niederlande", value: "39.140 €/Jahr", detail: "3.261,69 € pro Monat" },
        { label: "Angezeigte Differenz", value: "6.566 €/Jahr", detail: "547,19 € pro Monat" },
      ],
      sections: [
        { heading: "Gleiches Brutto, andere Abrechnung", paragraphs: ["Deutschland zieht rund 6.551 Euro Steuer, 4.650 Euro Rente, 4.375 Euro gesetzliche Krankenversicherung, 650 Euro Arbeitslosigkeit und 1.200 Euro Pflege ab. Übrig bleiben 32.574,06 Euro.", "In den Niederlanden werden Box-1-Steuer und Volksversicherungen um allgemeine und Arbeitseinkommens-Gutschrift vermindert. 10.859,67 Euro Abzug lassen 39.140,33 Euro vor Betriebsrente."] },
        { heading: "Fair vergleichen", paragraphs: ["Deutschland: Klasse I, 30 Jahre, kinderlos, keine Kirchensteuer, gesetzlich versichert. Niederlande: zwölf Zahlungen, keine 30-Prozent-Regel, kein Pensionsbeitrag. Diese Annahmen sind wichtiger als ein pauschaler Prozentsatz.", "Niederländisches vakantiegeld kann zusätzlich kommen, deutsche Boni sind vertraglich. Vergleiche das garantierte Gesamtjahresbrutto."] },
        { heading: "Netto ist nicht Kaufkraft", paragraphs: ["Miete in Amsterdam oder München kann mehr als die Steuerdifferenz ausmachen. Berücksichtige Wohnung, Verkehr, Gesundheitskosten außerhalb der Abrechnung und Betreuung.", "Die Seite beantwortet, was vom gleichen Brutto bleibt. Sie bewertet nicht pauschal, welches Land billiger oder besser bezahlt ist."] },
      ],
      faq: [
        { question: "Wo ist 50.000 Euro brutto netto höher?", answer: "In diesen Profilen in den Niederlanden: 39.140 statt 32.574 Euro, vor niederländischer Betriebsrente." },
        { question: "Ist die Differenz garantiert?", answer: "Nein. Steuerklasse, deutsche Versicherung, niederländische Pensionskasse und 30-Prozent-Regel verändern sie." },
      ],
    },
    fr: {
      slug: "salaire-net-allemagne-pays-bas-comparaison",
      title: "Salaire net Allemagne vs Pays-Bas sur 50 000 €",
      description: "Comparer 50 000 € brut en Allemagne et aux Pays-Bas avec une méthode commune et des hypothèses 2026 explicites.",
      intro: "Pour 50 000 € brut annuels, les profils standard donnent 32 574 € net en Allemagne et 39 140 € aux Pays-Bas. L’écart de 6 566 € doit être nuancé : le chiffre néerlandais exclut une cotisation de retraite professionnelle propre à l’employeur.",
      facts: [
        { label: "Net Allemagne", value: "32 574 €/an", detail: "2 714,50 € par mois" },
        { label: "Net Pays-Bas", value: "39 140 €/an", detail: "3 261,69 € par mois" },
        { label: "Écart affiché", value: "6 566 €/an", detail: "547,19 € par mois" },
      ],
      sections: [
        { heading: "Même brut, paie différente", paragraphs: ["L’Allemagne retire environ 6 551 € d’impôt, 4 650 € de retraite, 4 375 € de santé publique, 650 € de chômage et 1 200 € de dépendance, laissant 32 574,06 €.", "Les Pays-Bas appliquent Box 1 puis les crédits général et professionnel. La retenue finale de 10 859,67 € laisse 39 140,33 € avant retraite professionnelle."] },
        { heading: "Comparer équitablement", paragraphs: ["Allemagne : classe I, 30 ans, sans enfant, sans culte, assurance publique. Pays-Bas : douze paiements, sans règle des 30 % ni retraite professionnelle. Ces hypothèses comptent plus qu’un pourcentage isolé.", "Le vakantiegeld peut s’ajouter aux Pays-Bas et les primes allemandes dépendent du contrat. Comparez le brut annuel garanti."] },
        { heading: "Net ne signifie pas pouvoir d’achat", paragraphs: ["Le loyer à Amsterdam ou Munich peut dépasser l’écart fiscal. Ajoutez logement, transport, santé hors paie et garde d’enfants dans la ville visée.", "La comparaison mesure ce qui reste du même brut; elle ne classe pas un pays comme toujours moins cher ou mieux payé."] },
      ],
      faq: [
        { question: "Où 50 000 € brut donnent-ils le meilleur net ?", answer: "Dans ces profils, aux Pays-Bas : 39 140 € contre 32 574 €, avant retraite professionnelle néerlandaise." },
        { question: "L’écart de 6 566 € est-il garanti ?", answer: "Non. Classe fiscale, assurances allemandes, pension néerlandaise et règle des 30 % peuvent le modifier." },
      ],
    },
  },
};

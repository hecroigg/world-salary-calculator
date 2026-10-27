import type { Locale } from "./i18n";

/** Human-reviewed model scope notes. These are not claims that a payroll feature is implemented. */
export const countryModelLimits: Record<string,Record<Locale,string>> = {
  "germany": {
    "en": "Tax class and statutory versus private health insurance can change wage withholding. This calculator simplifies payroll accounting and does not reproduce each employer's exact monthly payslip.",
    "es": "La clase fiscal y el seguro de salud público o privado alteran las retenciones. Este modelo simplifica la nómina y no reproduce exactamente el recibo del empleador.",
    "de": "Steuerklasse und gesetzliche oder private Krankenversicherung beeinflussen die Abrechnung. Das Modell vereinfacht die Lohnabrechnung und ist keine exakte Gehaltsabrechnung.",
    "fr": "La classe fiscale et l'assurance maladie publique ou privée influencent la paie. Le modèle simplifie les retenues et ne remplace pas le bulletin de salaire."
  },
  "spain": {
    "en": "The autonomous community affects IRPF and Spanish jobs may pay in 12 or 14 instalments. Annual gross pay is the best basis for comparing offers; income-tax withholding may differ from final assessment.",
    "es": "La comunidad autónoma afecta al IRPF y los salarios pueden abonarse en 12 o 14 pagas. Compara el bruto anual: la retención puede diferir del impuesto definitivo.",
    "de": "Die autonome Region beeinflusst die IRPF-Steuer; Löhne können in 12 oder 14 Raten gezahlt werden. Vergleiche Jahresbrutto statt nur Monatsbeträge.",
    "fr": "La région autonome influence l'IRPF et le salaire peut être versé en 12 ou 14 mensualités. Comparez le brut annuel plutôt que le seul salaire mensuel."
  },
  "france": {
    "en": "French payslips distinguish net before income tax, net taxable income and net paid after withholding. Employer contributions and household-specific withholding are not equivalent to a single social-contribution rate.",
    "es": "Una nómina francesa distingue neto antes de IRPF, neto imponible y neto transferido tras retención. Las cuotas y la retención familiar no se reducen a un porcentaje universal.",
    "de": "Französische Lohnabrechnungen unterscheiden Netto vor Steuer, steuerpflichtiges Netto und ausgezahltes Netto. Die Beiträge variieren je nach Beschäftigung.",
    "fr": "Une fiche de paie distingue net avant impôt, net imposable et net payé. Les cotisations et le prélèvement du foyer ne suivent pas un taux social unique."
  },
  "portugal": {
    "en": "Income-tax withholding tables, social security, dependants and holiday/Christmas payments may differ from an annual income-tax estimate. Check how many instalments the offer includes.",
    "es": "Las tablas de retención, las cotizaciones y las pagas de vacaciones y Navidad pueden diferir de una estimación anual. Comprueba cuántas pagas incluye la oferta.",
    "de": "Quellensteuer-Tabellen, Sozialbeiträge und Urlaubs-/Weihnachtszahlungen können vom Jahresmodell abweichen. Prüfe die Anzahl der Zahlungen.",
    "fr": "Les barèmes de retenue, cotisations et primes de vacances/Noël peuvent différer du calcul annuel. Vérifiez le nombre de versements."
  },
  "italy": {
    "en": "Regional and municipal additions, payroll bonuses and employer-specific deductions affect take-home pay; a national bracket table alone cannot predict a precise Italian payslip.",
    "es": "Los recargos regionales y municipales y las deducciones de nómina influyen en el neto. Los tramos estatales no describen por sí solos una nómina exacta.",
    "de": "Regionale und kommunale Zuschläge sowie Freibeträge beeinflussen das Netto; nationale Steuertabellen reichen nicht für die konkrete Abrechnung.",
    "fr": "Les taxes régionales et communales ainsi que les déductions de paie influencent le net; le barème national ne suffit pas."
  },
  "netherlands": {
    "en": "Tax credits, employment credits, pension plans and eligibility for the 30% ruling can materially change Dutch net pay. This is not an assessment of your expat tax eligibility.",
    "es": "Los créditos fiscales, la pensión y la posible regla del 30 % pueden alterar mucho el neto. El cálculo no determina si cumples requisitos de expatriado.",
    "de": "Steuergutschriften, Rentenpläne und eine mögliche 30%-Regelung ändern das Netto erheblich. Die Berechtigung wird nicht geprüft.",
    "fr": "Les crédits d'impôt, retraites et éventuelle règle des 30 % modifient le net. Le calcul ne détermine pas votre admissibilité."
  },
  "belgium": {
    "en": "Local municipal surcharges, marital status and payroll prepayments influence Belgian net salary; annual income tax and monthly withholding need not match.",
    "es": "Los recargos municipales, la situación familiar y las retenciones alteran la nómina belga. La cuota anual y la retención mensual pueden diferir.",
    "de": "Kommunale Zuschläge, Familienstand und Lohnsteuervorauszahlungen beeinflussen den belgischen Nettolohn.",
    "fr": "Les centimes additionnels communaux, la situation familiale et le précompte modifient le salaire net belge."
  },
  "luxembourg": {
    "en": "Resident status, tax class, cross-border work and family arrangements matter significantly in Luxembourg. Do not use a simplified single-worker estimate as a cross-border tax ruling.",
    "es": "La residencia, la clase fiscal y el trabajo transfronterizo cambian mucho el resultado. Esta estimación no resuelve obligaciones entre dos países.",
    "de": "Wohnsitz, Steuerklasse und Grenzarbeit verändern das Netto erheblich. Dieses Modell ist keine grenzüberschreitende Steuerberatung.",
    "fr": "La résidence, la classe fiscale et le travail frontalier changent fortement le net. Ce modèle ne règle pas les obligations transfrontalières."
  },
  "austria": {
    "en": "Austrian payroll commonly handles 13th and 14th payments differently from regular wages. Compare annual total compensation and ask how special payments are taxed.",
    "es": "Las pagas 13.ª y 14.ª suelen tributar de forma distinta al salario habitual. Compara el total bruto anual y su tratamiento.",
    "de": "Das 13. und 14. Gehalt wird häufig anders besteuert als laufender Lohn. Vergleiche immer die jährliche Gesamtvergütung.",
    "fr": "Les 13e et 14e salaires peuvent être imposés autrement que le salaire courant. Comparez la rémunération annuelle totale."
  },
  "switzerland": {
    "en": "Cantonal and municipal taxes, source-tax rules and compulsory health-insurance premiums vary widely. Individual health premiums are generally not payroll deductions in this model.",
    "es": "Los impuestos cantonales y municipales, retenciones y primas de seguro médico varían. El seguro obligatorio suele pagarse fuera de la nómina.",
    "de": "Kantons- und Gemeindesteuern, Quellensteuer und Krankenkassenprämien variieren stark. Private Krankenkassenprämien fehlen im Lohnmodell.",
    "fr": "Impôts cantonaux, communaux, prélèvement à la source et assurance maladie varient fortement. Les primes santé ne figurent pas nécessairement sur la fiche de paie."
  },
  "united-kingdom": {
    "en": "Scottish income-tax bands, pension salary sacrifice, student loans and tax codes can change a UK payslip. This model is a general employee estimate, not HMRC payroll software.",
    "es": "Los tramos escoceses, planes de pensiones, préstamos estudiantiles y códigos fiscales modifican la nómina. Es una aproximación, no software oficial de HMRC.",
    "de": "Schottische Steuersätze, Renten-Entgeltumwandlung, Studienkredite und Tax Codes beeinflussen die britische Abrechnung.",
    "fr": "Les barèmes écossais, retraites, prêts étudiants et codes fiscaux modifient la paie britannique. Ce n'est pas un calcul officiel HMRC."
  },
  "ireland": {
    "en": "PAYE, USC, PRSI and personal tax credits depend on employment and household details. The simplified model does not verify all credit entitlements.",
    "es": "PAYE, USC, PRSI y los créditos fiscales dependen de tu situación. El modelo no verifica el derecho a cada crédito.",
    "de": "PAYE, USC, PRSI und persönliche Steuergutschriften hängen von deinen Angaben ab; nicht alle Ansprüche werden geprüft.",
    "fr": "PAYE, USC, PRSI et crédits personnels dépendent du profil; le modèle ne vérifie pas tous les droits aux crédits."
  },
  "denmark": {
    "en": "Municipal rates, labour-market contributions, pension contributions and church tax can change the result. Tax cards and deductions should be checked with SKAT.",
    "es": "Los tipos municipales, pensiones, cotizaciones laborales e impuesto religioso pueden cambiar el neto. Verifica tu tarjeta fiscal.",
    "de": "Kommunalsteuern, Arbeitsmarktbeitrag, Rente und Kirchensteuer beeinflussen das Netto. Steuerkarte bei SKAT prüfen.",
    "fr": "Taxe communale, cotisation au marché du travail, pension et impôt religieux influencent le net. Vérifiez la carte fiscale."
  },
  "sweden": {
    "en": "Municipal tax rates, job-tax credits and the annual income-tax threshold depend on individual circumstances. The national estimate is not a municipality-specific payslip.",
    "es": "Los tipos municipales, créditos por trabajo y umbrales cambian el neto. La estimación estatal no sustituye la nómina local.",
    "de": "Gemeindesteuersätze, Jobbskatteavdrag und Steuergrenzen beeinflussen das Netto. Die Schätzung ist nicht kommunalspezifisch.",
    "fr": "Les taux communaux, crédits d'activité et seuils changent le net. L'estimation n'est pas un bulletin municipal."
  },
  "norway": {
    "en": "Norwegian tax cards, pension contributions, deductions and variable income affect withholding. The calculation does not replace the personal tax card.",
    "es": "La tarjeta fiscal noruega, pensiones, deducciones e ingresos variables afectan la retención. No sustituye tu tarjeta fiscal.",
    "de": "Norwegische Steuerkarten, Rente, Freibeträge und variable Einkünfte beeinflussen den Lohnsteuerabzug.",
    "fr": "La carte fiscale norvégienne, retraites, déductions et revenus variables influencent la retenue."
  },
  "finland": {
    "en": "Municipal tax, church membership, pension and unemployment contributions change take-home salary. Check the current personal tax card before relying on a net figure.",
    "es": "Impuesto municipal, afiliación religiosa y cotizaciones cambian el neto. Consulta tu tarjeta fiscal.",
    "de": "Kommunalsteuer, Kirchenmitgliedschaft und Sozialbeiträge ändern das Netto. Prüfe deine persönliche Steuerkarte.",
    "fr": "Taxe communale, appartenance religieuse et cotisations modifient le net. Vérifiez votre carte fiscale."
  },
  "poland": {
    "en": "Employment contract type, under-26 exemptions, employee contributions and tax relief can materially change net pay. A single employment profile does not cover civil-law contracts.",
    "es": "El tipo de contrato, exenciones para jóvenes y cotizaciones cambian el neto. Un perfil de empleado no cubre todos los contratos civiles.",
    "de": "Vertragsart, Steuerbefreiungen für Jüngere und Sozialbeiträge beeinflussen das Netto. Nicht alle Beschäftigungsarten sind abgedeckt.",
    "fr": "Le type de contrat, les exonérations pour les jeunes et cotisations modifient le net; tous les contrats ne sont pas couverts."
  },
  "czech-republic": {
    "en": "Personal tax credits, health and social insurance and employment arrangements determine Czech take-home pay. Payroll credits require actual eligibility.",
    "es": "Los créditos fiscales personales, seguro médico y cotizaciones dependen del contrato. Los créditos requieren derecho efectivo.",
    "de": "Steuergutschriften, Kranken- und Sozialversicherung und Vertragsbedingungen bestimmen den Nettolohn.",
    "fr": "Les crédits fiscaux personnels et cotisations santé/sociales dépendent de la situation réelle."
  },
  "greece": {
    "en": "Family-related tax reductions, insurance contributions and extra salary payments can affect Greek net pay. Confirm whether the annual offer includes extra instalments.",
    "es": "Las reducciones familiares, cotizaciones y pagas extra alteran el neto. Comprueba si el bruto anual incluye pagos adicionales.",
    "de": "Familienbezogene Steuervergünstigungen, Sozialbeiträge und Sonderzahlungen können das Netto verändern.",
    "fr": "Réductions pour famille, cotisations et versements supplémentaires influencent le net grec."
  },
  "hungary": {
    "en": "Family tax allowances and age-related exemptions can have a large impact in Hungary. This estimate may not reproduce individual exemptions.",
    "es": "Las bonificaciones familiares y por edad pueden ser decisivas. La estimación no reproduce todas las exenciones individuales.",
    "de": "Familienfreibeträge und altersabhängige Befreiungen beeinflussen das Netto in Ungarn stark.",
    "fr": "Les abattements familiaux et exonérations selon l'âge peuvent fortement changer le net en Hongrie."
  },
  "romania": {
    "en": "Social and health insurance and deductions vary with employee category, sector and special exemptions. Verify your actual payroll regime.",
    "es": "Cotizaciones, categoría de empleo, sector y exenciones especiales pueden modificar el resultado. Verifica tu régimen.",
    "de": "Sozial- und Krankenbeiträge sowie branchenspezifische Erleichterungen können die Abrechnung verändern.",
    "fr": "Cotisations santé/sociales, secteur et exonérations spécifiques peuvent modifier la paie."
  },
  "croatia": {
    "en": "Personal deductions and municipal income-tax decisions affect Croatian payroll. Country-wide representative bands do not capture every municipality.",
    "es": "Las deducciones personales y decisiones fiscales municipales afectan al neto. Los tramos generales no cubren todos los municipios.",
    "de": "Persönliche Freibeträge und kommunale Einkommensteuersätze beeinflussen das Netto.",
    "fr": "Les déductions personnelles et taux municipaux influencent le net croate."
  },
  "bulgaria": {
    "en": "Maximum insurable earnings, employee contribution categories and exemptions can affect the Bulgarian net amount.",
    "es": "El tope de cotización, las categorías de empleo y exenciones modifican el neto búlgaro.",
    "de": "Höchstbeitragsgrundlage, Beitragsgruppen und Befreiungen beeinflussen den Nettolohn in Bulgarien.",
    "fr": "Plafonds de cotisations, catégories et exonérations influencent le net bulgare."
  },
  "united-states": {
    "en": "Federal withholding, FICA, state and local taxes, filing status, healthcare premiums and retirement plans all affect US take-home pay. This is not an IRS withholding calculation.",
    "es": "Retenciones federales, FICA, impuestos estatales y locales, seguro médico y jubilación afectan al neto. No es un cálculo oficial del IRS.",
    "de": "Bundessteuer, FICA, Staats- und Kommunalsteuern, Krankenversicherung und Altersvorsorge beeinflussen das Netto.",
    "fr": "Impôts fédéraux, FICA, taxes locales, assurance santé et retraite changent le net. Ce n'est pas un calcul officiel IRS."
  },
  "canada": {
    "en": "Province, CPP/QPP, employment insurance, federal and provincial tax credits and employer benefits affect Canadian net pay. The selected province is only one input.",
    "es": "Provincia, CPP/QPP, seguro de empleo, créditos fiscales y beneficios laborales cambian el neto. Elegir provincia es solo una variable.",
    "de": "Provinz, CPP/QPP, Arbeitslosenversicherung, Steuergutschriften und Zusatzleistungen beeinflussen das Netto.",
    "fr": "Province, RPC/RRQ, assurance-emploi, crédits fiscaux et prestations influencent le net."
  }
};

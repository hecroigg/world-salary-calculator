import type { Country } from "./countries";

export type Breakdown = { label: string; es: string; de: string; fr: string; amount: number };
export type PrecisionOptions = {
  age?: number; children?: number; marital?: "single" | "married";
  taxClass?: "1" | "3" | "4" | "5"; church?: boolean;
  germanState?: "standard" | "bavaria-bw"; health?: "public" | "private";
  spainRegion?: "average" | "low" | "high"; contract?: "permanent" | "temporary";
  filingStatus?: "single" | "joint" | "head"; stateRate?: number;
  canton?: "average" | "low" | "high";
  province?: "ontario" | "quebec" | "alberta" | "bc";
};
export type Result = { gross: number; net: number; annualNet: number; deductions: number; keep: number; hourly?: number; breakdown: Breakdown[] };

const item = (label: string, es: string, de: string, fr: string, amount: number): Breakdown => ({ label, es, de, fr, amount: Math.max(0, amount) });

function progressive(income: number, bands: [number, number][]) {
  let tax = 0;
  let previous = 0;
  for (const [limit, rate] of bands) {
    const band = Math.max(0, Math.min(income, limit) - previous);
    tax += band * rate;
    previous = limit;
    if (income <= limit) break;
  }
  return Math.max(0, tax);
}

function germany(annual: number, p: PrecisionOptions): Breakdown[] {
  const children = p.children ?? 0;
  const pensionBase = Math.min(annual, 101_400);
  const healthBase = Math.min(annual, 69_750);
  const pension = pensionBase * 0.093;
  const unemployment = pensionBase * 0.013;
  const health = p.health === "private" ? Math.min(annual * 0.0875, 7_200) : healthBase * 0.0875;
  const careRate = (p.age ?? 30) >= 23 && children === 0 ? 0.024 : Math.max(0.008, 0.018 - Math.max(0, children - 1) * 0.0025);
  const care = healthBase * careRate;
  const taxable = Math.max(0, annual - pension - unemployment - health - care - 1_230);

  const tariff = (income: number) => {
    const x = Math.floor(Math.max(0, income));
    if (x <= 12_348) return 0;
    if (x <= 17_799) { const y = (x - 12_348) / 10_000; return (914.51 * y + 1_400) * y; }
    if (x <= 69_878) { const z = (x - 17_799) / 10_000; return (173.1 * z + 2_397) * z + 1_034.87; }
    if (x <= 277_825) return 0.42 * x - 11_135.63;
    return 0.45 * x - 19_470.38;
  };

  const taxClass = p.taxClass ?? "1";
  let incomeTax = taxClass === "3" ? tariff(taxable / 2) * 2 : tariff(taxable);
  if (taxClass === "5") incomeTax *= 1.18;
  const solidarity = incomeTax > 20_350 ? (incomeTax - 20_350) * 0.055 : 0;
  const churchTax = p.church ? incomeTax * (p.germanState === "bavaria-bw" ? 0.08 : 0.09) : 0;
  return [
    item("Income tax", "Impuesto sobre la renta", "Lohnsteuer", "Impôt sur le revenu", incomeTax),
    item("Solidarity surcharge", "Recargo de solidaridad", "Solidaritätszuschlag", "Contribution de solidarité", solidarity),
    item("Pension", "Pensión", "Rentenversicherung", "Retraite", pension),
    item("Health insurance", "Seguro médico", "Krankenversicherung", "Assurance maladie", health),
    item("Unemployment insurance", "Seguro de desempleo", "Arbeitslosenversicherung", "Assurance chômage", unemployment),
    item("Long-term care", "Cuidados de larga duración", "Pflegeversicherung", "Assurance dépendance", care),
    ...(churchTax ? [item("Church tax", "Impuesto eclesiástico", "Kirchensteuer", "Impôt cultuel", churchTax)] : []),
  ];
}

function spain(annual: number, p: PrecisionOptions): Breakdown[] {
  const unemploymentRate = p.contract === "temporary" ? 0.016 : 0.0155;
  const social = Math.min(annual, 58_914) * (0.047 + unemploymentRate + 0.001 + 0.0013);
  const netWorkIncome = Math.max(0, annual - social - 2_000);
  let workReduction = 0;
  if (netWorkIncome <= 14_852) workReduction = 7_302;
  else if (netWorkIncome <= 17_673.52) workReduction = 7_302 - 1.75 * (netWorkIncome - 14_852);
  else if (netWorkIncome <= 19_747.5) workReduction = 2_364.34 - 1.14 * (netWorkIncome - 17_673.52);
  const taxable = Math.max(0, netWorkIncome - Math.max(0, workReduction));
  const scale: [number, number][] = [[12_450, 0.19], [20_200, 0.24], [35_200, 0.30], [60_000, 0.37], [300_000, 0.45], [Infinity, 0.47]];
  const children = p.children ?? 0;
  const childMinimum = children <= 0 ? 0 : children === 1 ? 2_400 : children === 2 ? 5_100 : 9_100 + Math.max(0, children - 3) * 4_500;
  const ageMinimum = (p.age ?? 30) >= 75 ? 2_550 : (p.age ?? 30) >= 65 ? 1_150 : 0;
  const personalMinimum = 5_550 + childMinimum + ageMinimum;
  let incomeTax = Math.max(0, progressive(taxable, scale) - progressive(Math.min(taxable, personalMinimum), scale));
  if (annual < 18_276) incomeTax *= 1 - Math.max(0, Math.min(1, annual <= 16_576 ? 1 : (18_276 - annual) / 1_700));
  if (p.spainRegion === "low") incomeTax *= 0.96;
  if (p.spainRegion === "high") incomeTax *= 1.04;
  return [
    item("Income tax (IRPF)", "Impuesto sobre la renta (IRPF)", "Einkommensteuer (IRPF)", "Impôt sur le revenu (IRPF)", incomeTax),
    item("Social Security", "Seguridad Social", "Sozialversicherung", "Sécurité sociale", social),
  ];
}

function unitedKingdom(annual: number): Breakdown[] {
  const allowance = annual > 100_000 ? Math.max(0, 12_570 - (annual - 100_000) / 2) : 12_570;
  const taxable = Math.max(0, annual - allowance);
  const incomeTax = progressive(taxable, [[37_700, 0.2], [Math.max(37_700, 125_140 - allowance), 0.4], [Infinity, 0.45]]);
  const ni = Math.max(0, Math.min(annual, 50_270) - 12_570) * 0.08 + Math.max(0, annual - 50_270) * 0.02;
  return [item("Income tax", "Impuesto sobre la renta", "Einkommensteuer", "Impôt sur le revenu", incomeTax), item("National Insurance", "National Insurance", "National Insurance", "Assurance nationale", ni)];
}

function unitedStates(annual: number, p: PrecisionOptions): Breakdown[] {
  const status = p.filingStatus ?? "single";
  const multiplier = status === "joint" ? 2 : status === "head" ? 1.5 : 1;
  const deduction = status === "joint" ? 32_200 : status === "head" ? 24_150 : 16_100;
  const taxable = Math.max(0, annual - deduction);
  const incomeTax = progressive(taxable, [[12_400 * multiplier, 0.1], [50_400 * multiplier, 0.12], [105_700 * multiplier, 0.22], [201_775 * multiplier, 0.24], [256_225 * multiplier, 0.32], [640_600 * multiplier, 0.35], [Infinity, 0.37]]);
  const social = Math.min(annual, 184_500) * 0.062;
  const medicare = annual * 0.0145 + Math.max(0, annual - (status === "joint" ? 250_000 : 200_000)) * 0.009;
  const state = annual * (p.stateRate ?? 0);
  return [item("Federal income tax", "Impuesto federal", "Bundeseinkommensteuer", "Impôt fédéral", incomeTax), item("State income tax", "Impuesto estatal", "Bundesstaatsteuer", "Impôt d'État", state), item("Social Security", "Social Security", "Social Security", "Social Security", social), item("Medicare", "Medicare", "Medicare", "Medicare", medicare)];
}

function ireland(annual: number, p: PrecisionOptions): Breakdown[] {
  const standardBand = p.marital === "married" ? 53_000 : 44_000;
  const beforeCredits = Math.min(annual, standardBand) * 0.2 + Math.max(0, annual - standardBand) * 0.4;
  const incomeTax = Math.max(0, beforeCredits - 4_000 - ((p.children ?? 0) > 0 && p.marital !== "married" ? 1_900 : 0));
  const prsi = annual > 18_304 ? annual * 0.042 : 0;
  const usc = progressive(annual, [[12_012, 0.005], [27_382, 0.02], [70_044, 0.03], [Infinity, 0.08]]);
  return [item("Income tax", "Impuesto sobre la renta", "Einkommensteuer", "Impôt sur le revenu", incomeTax), item("PRSI", "PRSI", "PRSI", "PRSI", prsi), item("USC", "USC", "USC", "USC", usc)];
}

function france(annual: number, p: PrecisionOptions): Breakdown[] {
  const social = annual * 0.22;
  const shares = (p.marital === "married" ? 2 : 1) + Math.min(p.children ?? 0, 2) * 0.5 + Math.max(0, (p.children ?? 0) - 2);
  const tax = progressive(Math.max(0, annual * 0.9) / shares, [[11_497, 0], [29_315, 0.11], [83_823, 0.3], [180_294, 0.41], [Infinity, 0.45]]) * shares;
  return [item("Income tax", "Impuesto sobre la renta", "Einkommensteuer", "Impôt sur le revenu", tax), item("Social contributions", "Cotizaciones sociales", "Sozialabgaben", "Cotisations sociales", social)];
}

function netherlands(annual: number): Breakdown[] {
  const grossTax = progressive(annual, [[75_518, 0.3582], [Infinity, 0.495]]);
  const generalCredit = Math.max(0, 3_115 * (1 - Math.max(0, annual - 28_406) / 48_000));
  const employmentCredit = annual <= 45_000 ? Math.min(5_500, annual * 0.12) : Math.max(0, 5_500 - (annual - 45_000) * 0.065);
  return [item("Income tax and national insurance", "Impuesto y seguros nacionales", "Steuern und Volksversicherungen", "Impôt et assurances nationales", Math.max(0, grossTax - generalCredit - employmentCredit))];
}

function canada(annual: number, p: PrecisionOptions): Breakdown[] {
  const federal = Math.max(0, progressive(annual, [[57_375, 0.145], [114_750, 0.205], [177_882, 0.26], [253_414, 0.29], [Infinity, 0.33]]) - 16_129 * 0.145);
  const provinceRates = { ontario: 0.0505, quebec: 0.14, alberta: 0.08, bc: 0.0506 };
  const province = Math.max(0, annual - 15_000) * provinceRates[p.province ?? "ontario"];
  const cpp = Math.max(0, Math.min(annual, 74_600) - 3_500) * 0.0595;
  const ei = Math.min(annual, 68_900) * 0.0164;
  return [item("Federal income tax", "Impuesto federal", "Bundeseinkommensteuer", "Impôt fédéral", federal), item("Provincial tax", "Impuesto provincial", "Provinzsteuer", "Impôt provincial", province), item("CPP / QPP", "CPP / QPP", "CPP / QPP", "CPP / QPP", cpp), item("Employment Insurance", "Seguro de empleo", "Arbeitslosenversicherung", "Assurance-emploi", ei)];
}

function generic(country: Country, annual: number, p: PrecisionOptions): Breakdown[] {
  const socialItems = country.social.map((social) => item(social.label, social.es, social.label, social.label, Math.min(annual, social.cap ?? annual) * social.rate));
  const socialTotal = socialItems.reduce((sum, entry) => sum + entry.amount, 0);
  const scheduleIncludesAllowance = country.tax[0]?.[1] === 0;
  const familyAllowance = (p.children ?? 0) * Math.min(country.allowance * 0.18, annual * 0.03);
  const taxable = Math.max(0, annual - socialTotal - familyAllowance - (scheduleIncludesAllowance ? 0 : country.allowance));
  let incomeTax = progressive(taxable, country.tax);
  if (p.marital === "married") incomeTax *= 0.92;
  if (country.id === "switzerland") incomeTax *= p.canton === "low" ? 0.72 : p.canton === "high" ? 1.32 : 1;
  return [item("Income tax", "Impuesto sobre la renta", "Einkommensteuer", "Impôt sur le revenu", incomeTax), ...socialItems];
}

export function calculate(country: Country, grossInput: number, period: "monthly" | "annual", hours?: number, precision: PrecisionOptions = {}): Result {
  const annual = Math.max(0, period === "monthly" ? grossInput * 12 : grossInput);
  let breakdown: Breakdown[];
  switch (country.id) {
    case "germany": breakdown = germany(annual, precision); break;
    case "spain": breakdown = spain(annual, precision); break;
    case "united-kingdom": breakdown = unitedKingdom(annual); break;
    case "united-states": breakdown = unitedStates(annual, precision); break;
    case "ireland": breakdown = ireland(annual, precision); break;
    case "france": breakdown = france(annual, precision); break;
    case "netherlands": breakdown = netherlands(annual); break;
    case "canada": breakdown = canada(annual, precision); break;
    default: breakdown = generic(country, annual, precision);
  }
  const annualDeductions = Math.min(annual * 0.75, breakdown.reduce((sum, entry) => sum + entry.amount, 0));
  const annualNet = Math.max(0, annual - annualDeductions);
  const monthlyView = period === "monthly";
  const weekly = hours && hours > 0 ? hours : undefined;
  return { gross: grossInput, net: monthlyView ? annualNet / 12 : annualNet, annualNet, deductions: monthlyView ? annualDeductions / 12 : annualDeductions, keep: annual ? annualNet / annual * 100 : 0, hourly: weekly ? annualNet / (weekly * 52) : undefined, breakdown: breakdown.filter((entry) => entry.amount >= 0.5).map((entry) => ({ ...entry, amount: monthlyView ? entry.amount / 12 : entry.amount })) };
}

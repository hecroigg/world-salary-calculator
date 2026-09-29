import type { Country } from "./countries";

export type Breakdown = { label:string; es:string; amount:number };
export type Result = { gross:number; net:number; annualNet:number; deductions:number; keep:number; hourly?:number; breakdown:Breakdown[] };

export function calculate(country:Country, grossInput:number, period:"monthly"|"annual", hours?:number, precision?:Record<string,string|number|boolean>):Result {
  const annual = Math.max(0, period === "monthly" ? grossInput * 12 : grossInput);
  let taxable = Math.max(0, annual - country.allowance);
  let previous = 0, incomeTax = 0;
  for (const [limit, rate] of country.tax) {
    const band = Math.max(0, Math.min(taxable, limit - previous));
    incomeTax += band * rate;
    previous = limit;
    if (taxable <= limit) break;
  }
  if (country.id === "united-states" && precision?.state && precision.state !== "none") incomeTax += annual * Number(precision.state);
  if (country.id === "germany" && precision?.church === true) incomeTax *= 1.08;
  const social = country.social.map(s => ({ label:s.label, es:s.es, amount:Math.min(annual, s.cap ?? annual) * s.rate }));
  const breakdown = [{label:"Income tax",es:"Impuesto sobre la renta",amount:incomeTax},...social];
  const deductions = Math.min(annual*.75, breakdown.reduce((a,b)=>a+b.amount,0));
  const annualNet = Math.max(0,annual-deductions), net = period === "monthly" ? annualNet/12 : annualNet;
  const weekly = hours && hours > 0 ? hours : undefined;
  return {gross:grossInput,net,annualNet,deductions:period === "monthly" ? deductions/12 : deductions,keep:annual?annualNet/annual*100:0,hourly:weekly?annualNet/(weekly*52):undefined,breakdown:breakdown.map(x=>({...x,amount:period === "monthly"?x.amount/12:x.amount}))};
}

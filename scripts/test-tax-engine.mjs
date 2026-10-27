import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
const require=createRequire(import.meta.url);
const ts=require("typescript");
function loadTS(path){
 const source=readFileSync(new URL("../"+path,import.meta.url),"utf8");
 const js=ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}}).outputText;
 const mod={exports:{}};
 new Function("module","exports","require",js)(mod,mod.exports,require);
 return mod.exports;
}
const { countries }=loadTS("lib/countries.ts");
const { calculate }=loadTS("lib/tax-engine.ts");
assert.equal(countries.length,25,"Expected 25 supported countries");
let assertions=0;
for(const country of countries){
 const zero=calculate(country,0,"annual",40);
 assert.equal(zero.net,0,country.id+" zero gross"); assertions++;
 for(const grossMonthly of [1500,3000,5500,10000]){
  const monthly=calculate(country,grossMonthly,"monthly",40);
  const annual=calculate(country,grossMonthly*12,"annual",40);
  for(const [name,value] of [["net",monthly.net],["annualNet",monthly.annualNet],["deductions",monthly.deductions],["hourly",monthly.hourly]]){
   assert.ok(Number.isFinite(value)&&value>=0,country.id+" "+name+" is invalid at "+grossMonthly);assertions++;
  }
  assert.ok(monthly.net<=grossMonthly+0.01,country.id+" net greater than gross");assertions++;
  assert.ok(Math.abs(monthly.annualNet-annual.annualNet)<0.02,country.id+" monthly/annual net mismatch");assertions++;
  assert.ok(Math.abs(monthly.net*12-monthly.annualNet)<0.02,country.id+" monthly projection mismatch");assertions++;
  assert.ok(Math.abs(monthly.net+monthly.deductions-grossMonthly)<0.02,country.id+" net/deduction mismatch");assertions++;
 }
}
const germany=countries.find(c=>c.id==="germany");
assert.ok(germany,"Germany missing");
const low=calculate(germany,12000,"annual",40);
assert.equal(low.breakdown.filter(x=>x.label==="Income tax").reduce((sum,x)=>sum+x.amount,0),0,"German basic allowance should not be taxed");
console.log("Payroll model invariants passed:",assertions,"checks across",countries.length,"countries and four gross-pay scenarios. These tests verify internal consistency, not legal accuracy.");

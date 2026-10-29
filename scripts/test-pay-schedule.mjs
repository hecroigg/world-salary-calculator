import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
const require=createRequire(import.meta.url);
const ts=require("typescript");
const source=readFileSync(new URL("../lib/pay-schedule.ts",import.meta.url),"utf8");
const js=ts.transpileModule(source,{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
const mod={exports:{}};
new Function("module","exports",js)(mod,mod.exports);
const split=mod.exports.annualPayIllustration;
assert.equal(split(36000,27000).twelve.gross,3000);
assert.equal(split(36000,27000).fourteen.gross,36000/14);
assert.equal(split(36000,27000).fourteen.net,27000/14);
assert.equal(split(0,0).twelve.net,0);
for(const [gross,net] of [[17094,14000],[30000,22500],[42000,30000],[60000,40000]]) {
 const s=split(gross,net);
 assert.ok(Math.abs(s.twelve.gross*12 -s.fourteen.gross*14)<0.01);
 assert.ok(Math.abs(s.twelve.net*12-s.fourteen.net*14)<0.01);
}
console.log("Spain 12/14 budgeting comparison: consistency checks passed. This does not validate annual income tax calculations.");

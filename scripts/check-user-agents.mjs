/**
 * Daily, read-only public crawlability audit for both SEO properties.
 * Important: a spoofed Googlebot User-Agent is NOT a verified Googlebot.
 * Browser access/indexing issues fail; simulated Googlebot-only blocks warn.
 */
import { appendFileSync } from "node:fs";

const agents = {
  browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0 Safari/537.36",
  googlebotSimulation: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)",
};
const targets = [
  { url: "https://netsalarymap.online/", type: "html" },
  { url: "https://netsalarymap.online/salary/spain", type: "html" },
  { url: "https://netsalarymap.online/es/salario/espana", type: "html" },
  { url: "https://netsalarymap.online/salary/germany", type: "html" },
  { url: "https://netsalarymap.online/guides", type: "html" },
  { url: "https://netsalarymap.online/sitemap.xml", type: "sitemap" },
  { url: "https://netsalarymap.online/robots.txt", type: "robots" },
  { url: "https://germanybase.de/", type: "html" },
  { url: "https://germanybase.de/es/guides/dias-vacaciones-pagadas-alemania", type: "html" },
  { url: "https://germanybase.de/de/guides/deutschlandticket-preis-regeln-2026", type: "html" },
  { url: "https://germanybase.de/guides/finding-doctor-germany", type: "html" },
  { url: "https://germanybase.de/sitemap.xml", type: "sitemap" },
  { url: "https://germanybase.de/robots.txt", type: "robots" },
];
const failures = [];
const warnings = [];
const results = [];
const validStatus = (res) => res.status >= 200 && res.status < 300;
const norm = (url) => { const u = new URL(url); return u.origin + (u.pathname.replace(/\/+$/,"") || "/"); };
const tagAttr = (tag, name) => tag.match(new RegExp("\\b" + name + "=[\"']([^\"']+)[\"']", "i"))?.[1];
const canonicalOf = (html) => {
  for (const tag of html.match(/<link\b[^>]*>/gi) || []) {
    if (/\bcanonical\b/i.test(tagAttr(tag,"rel") || "")) return tagAttr(tag,"href");
  }
};
const robotNoindex = (html, headers) => {
  const header = headers.get("x-robots-tag") || "";
  return /\bnoindex\b/i.test(header) || (html.match(/<meta\b[^>]*>/gi) || []).some(tag =>
    /\brobots\b/i.test(tagAttr(tag,"name") || "") && /\bnoindex\b/i.test(tagAttr(tag,"content") || "")
  );
};
const blocked = (html, headers) =>
  !!headers.get("cf-mitigated") ||
  (/<title>Just a moment\.\.\./i.test(html) && /cloudflare|challenge/i.test(html));
async function probe(target, agent, name) {
  try {
    const response = await fetch(target.url, {
      headers: { "User-Agent": agent },
      redirect: "follow",
      signal: AbortSignal.timeout(20000),
    });
    const body = await response.text();
    const canonical = target.type === "html" ? canonicalOf(body) : undefined;
    const flags = [];
    if (!validStatus(response)) flags.push("HTTP " + response.status);
    if (blocked(body, response.headers)) flags.push("Cloudflare challenge");
    if (target.type === "html") {
      if (!/<title\b[^>]*>[^<]+<\/title>/i.test(body)) flags.push("missing HTML title");
      if (robotNoindex(body, response.headers)) flags.push("noindex directive");
      if (!canonical) flags.push("missing canonical");
      else {
        try {
          if (norm(new URL(canonical, target.url).href) !== norm(target.url)) flags.push("canonical mismatch: " + canonical);
        } catch { flags.push("invalid canonical"); }
      }
    } else if (target.type === "sitemap" && !/<urlset\b|<sitemapindex\b/i.test(body)) {
      flags.push("missing XML sitemap container");
    } else if (target.type === "robots" && !/Sitemap:\s*https?:\/\//i.test(body)) {
      flags.push("missing sitemap declaration");
    }
    const result = { url: target.url, agent: name, status: response.status, finalUrl: response.url,
      contentType: response.headers.get("content-type"), canonical, flags };
    console.log(JSON.stringify(result));
    return result;
  } catch (error) {
    const result = { url: target.url, agent: name, status: 0, flags: ["network: " + String(error)] };
    console.log(JSON.stringify(result));
    return result;
  }
}
for (const target of targets) {
  const browser = await probe(target, agents.browser, "browser");
  results.push(browser);
  if (browser.flags.length) failures.push(browser);
  // Spoofed User-Agent responses may differ from real verified Googlebot IPs.
  // They are valuable warnings, never conclusive proof of Google deindexing.
  if (target.type === "html" || target.type === "sitemap") {
    const crawler = await probe(target, agents.googlebotSimulation, "simulated-googlebot");
    results.push(crawler);
    if (crawler.flags.length) warnings.push(crawler);
  }
}
const markdown = [
  "## Public SEO accessibility audit",
  "",
  "Checked " + results.length + " URL/user-agent pairs across GermanyBase and NetSalaryMap.",
  "",
  "Browser failures: **" + failures.length + "**; simulated-Googlebot warnings: **" + warnings.length + "**.",
  "",
  ...failures.map(item => "- FAIL " + item.url + " — " + item.flags.join(", ")),
  ...warnings.map(item => "- WARN (simulated bot only) " + item.url + " — " + item.flags.join(", ")),
  "",
  "A simulated Googlebot User-Agent is **not** an authenticated Google crawler. Google Search Console's URL Inspection remains authoritative for actual indexed status.",
  ""
].join("\n");
console.log("\n" + markdown);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, markdown);
if (failures.length) process.exitCode = 1;

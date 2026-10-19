/**
 * Run after `npm run build`: `npm run seo:check`.
 * Ensures sitemap URLs actually map to published static pages with unique canonicals.
 * This catches broken exported routes before Search Console discovers them.
 */
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = "out";
const origin = "https://netsalarymap.online";
const errors = [];
const note = (problem) => errors.push(problem);
const read = (file) => readFileSync(file, "utf8");

for (const file of ["robots.txt", "sitemap.xml", "ads.txt", "index.html"]) {
  if (!existsSync(join(root, file))) note(`Missing ${root}/${file}`);
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

const sitemap = read(join(root, "sitemap.xml"));
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].replaceAll("&amp;", "&"),
);
if (!urls.length) note("Sitemap has no <loc> entries.");
if (!read(join(root, "robots.txt")).includes(origin + "/sitemap.xml")) {
  note("robots.txt does not declare the canonical sitemap.");
}
if (!read(join(root, "ads.txt")).includes("google.com, pub-8337311370258201, DIRECT")) {
  note("ads.txt is missing the configured AdSense publisher.");
}

const seen = new Set();
for (const textUrl of urls) {
  let url;
  try { url = new URL(textUrl); }
  catch { note(`Invalid sitemap URL: ${textUrl}`); continue; }
  if (url.origin !== origin) note(`Wrong host in sitemap: ${textUrl}`);
  if (seen.has(textUrl)) note(`Duplicate sitemap URL: ${textUrl}`);
  seen.add(textUrl);
  const pathname = decodeURIComponent(url.pathname);
  const slug = pathname.replace(/^\/+|\/+$/g, "");
  const choices = slug
    ? [join(root, slug + ".html"), join(root, slug, "index.html")]
    : [join(root, "index.html")];
  const found = choices.find(existsSync);
  if (!found) { note(`Sitemap URL has no exported HTML: ${textUrl}`); continue; }
  const html = read(found);
  if (!/<h1\b/i.test(html)) note(`No h1 on ${textUrl}`);
  if (!/rel="canonical"/.test(html)) note(`No canonical on ${textUrl}`);
  const canonicalMatch = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
  if (canonicalMatch && canonicalMatch[1] !== textUrl) {
    note(`Incorrect canonical ${canonicalMatch[1]} on ${textUrl}`);
  }
  const expectedLang = pathname.startsWith("/es/") ? "es"
    : pathname.startsWith("/de/") ? "de"
    : pathname.startsWith("/fr/") ? "fr" : "en";
  const actualLang = html.match(/<html\b[^>]*\blang="([^"]+)"/)?.[1];
  if (actualLang !== expectedLang) {
    note(`HTML lang ${actualLang || "(missing)"} on ${textUrl}; expected ${expectedLang}`);
  }
  if (/<meta\b[^>]*name="robots"[^>]*noindex/i.test(html)) {
    note(`Sitemap URL marked noindex: ${textUrl}`);
  }
}
if (errors.length) {
  console.error(`SEO output audit failed (${errors.length} issues):\n` + errors.join("\n"));
  process.exit(1);
}
console.log(`SEO output audit passed: ${urls.length} unique sitemap URLs, exported HTML, canonical, language, robots, ads.txt.`);

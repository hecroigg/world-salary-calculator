/**
 * Read-only production crawl: find broken same-host navigation links from pages
 * in the public XML sitemaps. Run in GitHub Actions; no Cloudflare secrets.
 */
const domains = ["https://germanybase.de", "https://netsalarymap.online"];
const concurrency = 6;
async function fetchHtml(url) {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "SiteSEOAudit/1.0 (+https://netsalarymap.online/contact)" },
      signal: AbortSignal.timeout(18000),
    });
    const body = await response.text();
    return { status: response.status, final: response.url, body, type: response.headers.get("content-type") || "" };
  } catch (error) {
    return { status: 0, final: url, body: "", type: "", error: String(error) };
  }
}
async function mapLimit(items, limit, task) {
  const results = Array(items.length);
  let cursor = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    for (;;) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await task(items[index], index);
    }
  }));
  return results;
}
function xmlLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1].replaceAll("&amp;", "&"));
}
function internalHrefUrls(html, base, origin) {
  const found = new Set();
  for (const match of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/gi)) {
    const href = match[1].replaceAll("&amp;", "&");
    if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    try {
      const parsed = new URL(href, base);
      if (parsed.origin !== origin) continue;
      if (parsed.pathname.startsWith("/_next/") || parsed.pathname.startsWith("/cdn-cgi/")) continue;
      found.add(parsed.origin + parsed.pathname);
    } catch { /* ignore malformed values separately */ }
  }
  return found;
}
for (const origin of domains) {
  console.log("\n=== INTERNAL LINK AUDIT", origin, "===");
  const sitemap = await fetchHtml(origin + "/sitemap.xml");
  if (sitemap.status !== 200 || !sitemap.type.includes("xml")) {
    console.log("SITEMAP_ERROR", JSON.stringify({status:sitemap.status,type:sitemap.type,error:sitemap.error||""}));
    continue;
  }
  const urls = [...new Set(xmlLocs(sitemap.body).filter(url=>url.startsWith(origin + "/")))];
  const links = new Map();
  const pages = await mapLimit(urls, concurrency, async url => {
    const page = await fetchHtml(url);
    if (page.status === 200 && page.type.includes("html")) {
      for (const link of internalHrefUrls(page.body, url, origin)) {
        const sources = links.get(link) || [];
        if (sources.length < 4) sources.push(url);
        links.set(link,sources);
      }
    }
    return { url, status: page.status, type: page.type };
  });
  const sitemapErrors = pages.filter(p=>p.status!==200);
  const linksToCheck = [...links.keys()];
  const destinationResults = await mapLimit(linksToCheck, concurrency, async url => {
    const response = await fetchHtml(url);
    return {
      url, status:response.status, final:response.final,
      sources:links.get(url), error:response.error||""
    };
  });
  const badLinks = destinationResults.filter(item=>item.status >= 400 || item.status===0);
  const redirected = destinationResults.filter(item=>item.status===200 &&
    new URL(item.final).pathname !== new URL(item.url).pathname);
  console.log("SUMMARY",JSON.stringify({
    sitemapURLs:urls.length, sitemapErrors:sitemapErrors.length,
    distinctNavigationLinks:linksToCheck.length,
    brokenNavigationLinks:badLinks.length, redirectedNavigationLinks:redirected.length
  }));
  for (const e of sitemapErrors) console.log("SITEMAP_URL_ERROR",JSON.stringify(e));
  for (const e of badLinks) console.log("BROKEN_INTERNAL_LINK",JSON.stringify(e));
  for (const e of redirected.slice(0,30)) console.log("REDIRECTED_INTERNAL_LINK",JSON.stringify(e));
}


/**
 * Historic Search Console exclusions exported 20 Oct 2026 for GermanyBase.
 * All malformed URL samples are from a real export, not generated examples.
 * A 404 can be correct for an invalid URL; only canonicalize to matching pages.
 */
const legacyPaths = [
  "/families:1r5p0rp",
  "/affiliate-disclosure:11df3p8",
  "/guides/best-cities-germany:1cw1k9c",
  "/housing:1t6yafg",
  "/terms:1i5q5a3",
  "/guides/finding-housing-germany:16pyb48",
  "/transport:24w9mi",
  "/guides/anmeldung-germany:14rmo4r",
  "/money:sx2ox",
  "/terms:1i5q5a3:0",
  "/affiliate-disclosure:came54",
  "/corrections-policy:toqqh6",
  "/terms:1i5q5a3:1",
  "/moving-to-germany:1huad1a:0",
  "/students:1xn1p7m",
  "/moving-to-germany:1huad1a",
  "/moving-to-germany:1huad1a:1",
  "/families:tgq9k1",
  "/work:fxa7a3",
  "/guides/moving-to-germany:1l46xfe",
  "/guides/cost-of-living-germany:q4tzi7",
  "/&",
  "/en/guides/rundfunkbeitrag-germany-2026:1gnq423"
];
const lowIndexPaths = [
  "/guides/german-sim-cards",
  "/es/guides/dias-vacaciones-pagadas-alemania",
  "/en/guides/anmeldung-deadline-documents",
  "/en/guides/kindergeld-germany-2026",
  "/en/guides/minijob-germany-2026"
];
console.log("\n=== SEARCH CONSOLE EXACT-URL HTTP AUDIT ===");
const statusProbe = async (path) => {
  const url = "https://germanybase.de" + path;
  try {
    const initial = await fetch(url, {
      redirect: "manual",
      headers: { "User-Agent": "SiteSEOAudit/1.0 (+https://netsalarymap.online/contact)" },
      signal: AbortSignal.timeout(12000)
    });
    const redirect = initial.headers.get("location");
    const followed = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "SiteSEOAudit/1.0 (+https://netsalarymap.online/contact)" },
      signal: AbortSignal.timeout(12000)
    });
    const body = await followed.text();
    return {
      path, firstStatus: initial.status, location: redirect,
      finalStatus: followed.status, final: followed.url,
      title: body.match(/<title[^>]*>([^<]*)<\/title>/i)?.[1] || "",
      canonical: body.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/)?.[1] || null,
      noindex: /<meta[^>]*name="robots"[^>]*noindex/i.test(body),
      cfMitigated: followed.headers.get("cf-mitigated")
    };
  } catch (error) {
    return { path, error: String(error) };
  }
};
const legacyStatus = await mapLimit(legacyPaths, 5, statusProbe);
legacyStatus.forEach(item => console.log("HISTORIC_404", JSON.stringify(item)));
const lowStatus = await mapLimit(lowIndexPaths, 5, statusProbe);
lowStatus.forEach(item => console.log("CRAWLED_NOT_INDEXED", JSON.stringify(item)));

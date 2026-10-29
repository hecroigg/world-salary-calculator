/**
 * Public production diagnostics only; does not mutate Search Console or Cloudflare.
 * Node 22+: npm run seo:live
 */
const sites = [
  { domain: "https://germanybase.de", samples: ["/cities/berlin", "/cities/hamburg", "/cities/cologne", "/authorities", "/guides/anmeldung-germany", "/es/guides", "/de/guides"] },
  { domain: "https://netsalarymap.online", samples: ["/salary/germany", "/es/salario/alemania", "/de/gehalt/deutschland", "/de/gehalt/belgien", "/de/gehalt/bulgarien", "/fr/salaire/allemagne", "/about", "/contact", "/cookies"] },
];
const fetchText = async (url, method = "GET") => {
  try {
    const response = await fetch(url, {
      method,
      redirect: "follow",
      headers: { "User-Agent": "SiteSEOAudit/1.0 (+https://netsalarymap.online/contact)" },
      signal: AbortSignal.timeout(15000),
    });
    return { status: response.status, url: response.url, headers: response.headers, text: method === "GET" ? await response.text() : "" };
  } catch (error) { return { status: 0, error: String(error), url }; }
};
const allResults = [];
for (const site of sites) {
  console.log("\n=== " + site.domain + " ===");
  const [robots, sitemap, ads] = await Promise.all(["/robots.txt", "/sitemap.xml", "/ads.txt"].map(path => fetchText(site.domain + path)));
  for (const [key, result] of [["robots.txt", robots], ["sitemap.xml", sitemap], ["ads.txt", ads]]) {
    console.log(key, "status=",result.status, "final=",result.url, "type=",result.headers?.get("content-type")||"", "size=",result.text?.length||0, result.error||"");
  }
  if (robots.status === 200) console.log("Declared sitemap:",(robots.text.match(/Sitemap:.*/i)||[])[0]||"NOT FOUND");
  if (ads.status === 200) console.log("AdSense publisher present:", ads.text.includes("pub-8337311370258201"));
  let sitemapUrls = sitemap.status === 200
    ? [...sitemap.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1].replaceAll("&amp;","&"))
    : [];
  console.log("Sitemap loc entries:", sitemapUrls.length);
  const raw = [...new Set([...sitemapUrls, ...site.samples.map(path => site.domain + path)])];
  const errors = [];
  for (const [name, response] of [["robots.txt", robots], ["sitemap.xml", sitemap], ["ads.txt", ads]]) {
    if (response.status !== 200) errors.push({url: site.domain + "/" + name, status: response.status, reason: "Required public endpoint unavailable"});
  }
  if (ads.status === 200 && !ads.text.includes("google.com, pub-8337311370258201, DIRECT")) {
    errors.push({url: site.domain + "/ads.txt", reason:"Publisher record not found"});
  }
  if (robots.status === 200 && !robots.text.includes(site.domain + "/sitemap.xml")) {
    errors.push({url: site.domain + "/robots.txt", reason:"Expected sitemap declaration missing"});
  }
  const runQueue = [...raw];
  let passed = 0;
  const workers = Array.from({ length: 6 }, async () => {
    while (runQueue.length) {
      const url = runQueue.shift();
      const response = await fetchText(url);
      const html = response.text || "";
      const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/i)?.[1];
      const isSitemap = sitemapUrls.includes(url);
      const noindex = /<meta\b[^>]*name="robots"[^>]*content="[^"]*noindex/i.test(html);
      if (response.status !== 200 || (isSitemap && (noindex || (html.length < 500 && !html.includes("<html"))))) {
        errors.push({ url, status: response.status, final: response.url, noindex, error: response.error||"", canonical });
      } else passed++;
    }
  });
  await Promise.all(workers);
  console.log("URLs checked:", raw.length, "passed:", passed, "unexpected:", errors.length);
  errors.slice(0, 100).forEach(item=>console.log("ISSUE",JSON.stringify(item)));
  allResults.push({domain: site.domain, tested:raw.length, errors:errors.length, examples:errors.slice(0,15)});
}
console.log("\nAUDIT SUMMARY",JSON.stringify(allResults,null,2));

// Fail the scheduled health check when a required endpoint or sitemap URL is broken.
// The daily Search Console analysis is separate: traffic changes are not HTTP failures.
const unexpected = allResults.reduce((total, item) => total + item.errors, 0);
if (unexpected > 0) {
  console.error("Public SEO watch failed:", unexpected, "unexpected responses. Check Cloudflare and the detailed URLs above.");
  process.exitCode = 1;
}

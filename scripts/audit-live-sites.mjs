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

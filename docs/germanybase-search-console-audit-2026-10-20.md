# GermanyBase Search Console URL audit — 20 October 2026

## Input
User-provided Google Search Console Pages > exclusions > Examples exports, recorded from the report last updated 12 October 2026.

- **22** `404` URLs, of which **21** are canonical routes with spurious `:token` suffixes (some multi-suffix), and **1** is `/&`.
- **34** discovered, not crawled; export shows `1970-01-01` placeholder (interpreted as no crawl date, not a real historical visit).
- **6** crawled, not indexed: **1** has a malformed `:token` suffix and **5** are actual guide URLs.

## Live verification on 20 October
Action log: [GitHub Actions — internal link audit](https://github.com/hecroigg/world-salary-calculator/actions/runs/39394717495).

- 22/22 historic 404s now produce **301** to the matching canonical URL, followed by **200**. The /& path redirects to /.
- The additional malformed URL in crawled-not-indexed is **301 → 200**.
- The remaining 5 crawled-not-indexed guides respond **200**, with expected canonical and no `noindex` in the checked HTML.
- 34/34 discovered-not-indexed URLs respond **200**, appear in the **live 146-URL sitemap**, expose canonicals and no `noindex` in checked HTML.
- Earlier live link crawl found no broken navigation links within the current sitemaps.

## Interpretation
The site's current technical corrections already address the historical malformed URLs. Search Console is a delayed reporting system; **do not add another set of redirect rules or blanket redirects** for these cases. Redirected URL strings are not expected to be indexed separately from their canonical destinations.

Indexability does not guarantee indexing. For the 34 discovery cases, check whether Google re-crawls after the fixed Cloudflare Bot Fight Mode challenge and freshly read sitemap (20 Oct). For the 5 legitimate crawled-not-indexed guides, the likely remaining work is editorial differentiation, useful examples and source quality; the export itself does not prove Google's specific selection reason.

## Recommended owner actions
1. Search Console: inspect 1–3 highest-value legitimate pages with **Test live URL** (e.g., /cities/berlin, /guides/german-tax-id, /guides/jobs-without-german). Use Request indexing sparingly.
2. Under 404, note that validation was already started; monitor for completion. If validation stalls, use Validate Fix only once after confirming the redirects still work.
3. Do not resubmit a good sitemap unnecessarily. Google last read /sitemap.xml successfully on 20 Oct and discovered 146 URLs.
4. Observe Indexing > Pages and Performance > Search results over the following 2–4 weeks; prioritize meaningful impressions and clicks, not simply the index count.
5. GermanyBase's AdSense **Low value content** rejection remains separate: expand thin pages with original value and verify official sources, working tools, trust and user experience before asking for new approval.
6. The exact 62 rows, export dates, and suggested dispositions are in the user-generated `GermanyBase_auditoria_62_URLs_2026-10-20.xlsx`, delivered in the conversation. No sensitive user information is required in the source repository.

## Limitations
- The report reflects one live sample at a point in time; historical Googlebot decisions and current crawl budget remain outside this test.
- Only routes present in exports were checked; more excluded pages may appear as Google discovers additional URLs.

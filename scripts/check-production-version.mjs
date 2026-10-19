/** Checks whether the latest merged SEO improvements reached the public domains. */
const pages = [
 {url:"https://netsalarymap.online/", marker:"Calculators and guides in your language"},
 {url:"https://netsalarymap.online/salary/germany", marker:"Read this calculator in another language"},
 {url:"https://germanybase.de/guides", marker:"Explore guides in your language"},
];
for (const page of pages){
  try {
    const response = await fetch(page.url,{headers:{"User-Agent":"SiteSEOAudit/1.0 (+https://netsalarymap.online/contact)"},signal:AbortSignal.timeout(15000)});
    const html=await response.text();
    const result={url:page.url,http:response.status,published:response.status===200&&html.includes(page.marker),cfMitigated:response.headers.get("cf-mitigated"),marker:page.marker};
    console.log(JSON.stringify(result));
  }catch(e){console.log(JSON.stringify({url:page.url,published:false,error:String(e)}))}
}

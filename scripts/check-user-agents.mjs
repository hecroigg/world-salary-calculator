/** Read-only Cloudflare WAF probe: diagnostics, not proof of Googlebot behavior. */
const targets = [
  "https://germanybase.de/sitemap.xml",
  "https://germanybase.de/cities/berlin",
  "https://germanybase.de/cities/cologne",
  "https://germanybase.de/authorities",
  "https://netsalarymap.online/sitemap.xml"
];
const agents = {
  audit: "SiteSEOAudit/1.0 (+https://netsalarymap.online/contact)",
  browser: "Mozilla/5.0 (Macintosh; Intel Mac OS X 14_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  googlebot: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)"
};
for(const url of targets){
 for(const [name,agent] of Object.entries(agents)){
 try{
  const res=await fetch(url,{headers:{"User-Agent":agent},redirect:"follow",signal:AbortSignal.timeout(15000)});
  const body=await res.text();
  const title=body.match(/<title[^>]*>([^<]+)/i)?.[1]||"";
  console.log(JSON.stringify({url,agent:name,status:res.status,size:body.length,server:res.headers.get("server"),cfRay:res.headers.get("cf-ray"),cfMitigated:res.headers.get("cf-mitigated"),contentType:res.headers.get("content-type"),title,starts:body.slice(0,115).replace(/\s+/g," ")}));
 }catch(e){console.log(JSON.stringify({url,agent:name,error:String(e)}))}
 }
}

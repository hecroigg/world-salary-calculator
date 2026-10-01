import { SalaryCalculator } from "@/components/salary-calculator";
import { CountrySeoContent } from "@/components/country-seo-content";
import type { Country } from "@/lib/countries";
import { faqLabels } from "@/lib/faq-labels";
import { countryName, localizedPath, type Locale } from "@/lib/i18n";
import { uiText } from "@/lib/translations";
import { countryDescription, countryHeading, SITE_URL } from "@/lib/seo";
import { countryGuides } from "@/lib/country-guides";

export function CountryPageContent({country,locale}:{country:Country;locale:Locale}) {
  const t=uiText[locale];
  const heading=countryHeading(country,locale);
  const description=countryDescription(country,locale);
  const path=localizedPath(country,locale);
  const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"WebApplication",name:heading,description,url:`${SITE_URL}${path}`,applicationCategory:"FinanceApplication",operatingSystem:"Any",inLanguage:locale,isAccessibleForFree:true,offers:{"@type":"Offer",price:"0",priceCurrency:country.currency}},
      {"@type":"BreadcrumbList",itemListElement:[
        {"@type":"ListItem",position:1,name:"Net Salary Map",item:SITE_URL},
        {"@type":"ListItem",position:2,name:heading,item:`${SITE_URL}${path}`},
      ]},
      {"@type":"FAQPage",mainEntity:[
        {"@type":"Question",name:t.q1,acceptedAnswer:{"@type":"Answer",text:t.a1}},
        {"@type":"Question",name:t.q2,acceptedAnswer:{"@type":"Answer",text:t.a2}},
        {"@type":"Question",name:faqLabels[locale].question,acceptedAnswer:{"@type":"Answer",text:faqLabels[locale].answer}},
        {"@type":"Question",name:`${countryName(country,locale)} — ${t.assumptions}`,acceptedAnswer:{"@type":"Answer",text:countryGuides[country.id][locale]}},
      ]},
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/><SalaryCalculator country={country} language={locale} heading={heading} intro={description} specificFaq={countryGuides[country.id][locale]} seoContent={<CountrySeoContent country={country} locale={locale}/>}/></>;
}

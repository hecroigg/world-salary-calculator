import { SalaryCalculator } from "@/components/salary-calculator";
import { CountrySeoContent } from "@/components/country-seo-content";
import type { Country } from "@/lib/countries";
import { faqLabels } from "@/lib/faq-labels";
import { countryName, type Locale } from "@/lib/i18n";
import { uiText } from "@/lib/translations";

export function CountryPageContent({country,locale}:{country:Country;locale:Locale}) {
  const t=uiText[locale];
  const jsonLd = {
    "@context":"https://schema.org",
    "@graph":[
      {"@type":"WebApplication",name:`${countryName(country,locale)} Salary Calculator 2026`,applicationCategory:"FinanceApplication",operatingSystem:"Any",isAccessibleForFree:true,offers:{"@type":"Offer",price:"0",priceCurrency:"EUR"}},
      {"@type":"FAQPage",mainEntity:[
        {"@type":"Question",name:t.q1,acceptedAnswer:{"@type":"Answer",text:t.a1}},
        {"@type":"Question",name:t.q2,acceptedAnswer:{"@type":"Answer",text:t.a2}},
        {"@type":"Question",name:faqLabels[locale].question,acceptedAnswer:{"@type":"Answer",text:faqLabels[locale].answer}},
      ]},
    ],
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd).replace(/</g,"\\u003c")}}/><SalaryCalculator country={country} language={locale} seoContent={<CountrySeoContent country={country} locale={locale}/>}/></>;
}

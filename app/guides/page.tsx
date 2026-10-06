import { ArticleIndexPage } from "@/components/article-index-page";
import { guideIndexMetadata } from "@/lib/articles";
export const metadata=guideIndexMetadata("en");
export default function Page(){return <ArticleIndexPage locale="en"/>;}

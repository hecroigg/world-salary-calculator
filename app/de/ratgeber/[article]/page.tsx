import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/article-page";
import { articleFromSlug, articleIds, articleMetadata, articlePath } from "@/lib/articles";
export const generateStaticParams=()=>articleIds.map(id=>({article:articlePath(id,"de").split("/").pop()!}));
export async function generateMetadata({params}:{params:Promise<{article:string}>}){const {article}=await params;const match=articleFromSlug("de",article);return match?articleMetadata(match.id,"de"):{};}
export default async function Page({params}:{params:Promise<{article:string}>}){const {article}=await params;const match=articleFromSlug("de",article);if(!match)notFound();return <ArticlePage id={match.id} locale="de"/>;}

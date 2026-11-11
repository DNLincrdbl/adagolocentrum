import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNews, news } from "@/lib/site";

export function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) return { title: "Hír" };
  return { title: article.title, description: article.lead };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 pt-12 pb-20 md:px-6">
      <Link href="/hirek" className="text-sm font-semibold text-muted underline-offset-4 hover:underline">
        Vissza a hírarchívumba
      </Link>
      <p className="mt-8 text-xs font-semibold tracking-[0.18em] text-muted uppercase">{article.date}</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-balance md:text-5xl">{article.title}</h1>
      <div className={`relative mt-8 aspect-[16/9] overflow-hidden rounded-[1.5rem] ${article.contain ? "bg-paper" : ""}`}>
        <Image src={article.image} alt="" fill className={article.contain ? "object-contain p-6" : "object-cover"} priority />
      </div>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-pretty text-muted">
        {article.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {article.link ? (
          <a href={article.link.href} target="_blank" rel="noreferrer" className="inline-flex font-bold text-accent underline-offset-4 hover:underline">
            {article.link.label}
          </a>
        ) : null}
      </div>
    </article>
  );
}

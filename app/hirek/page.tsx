import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { news } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hírarchívum",
  description: "Hírek a Móricz Bosch Diesel Center műhelyéből.",
};

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Hírarchívum"
        title="Amit a műhely életéből megírtunk."
        lead="CP4 javítás, új próbapad, műhelyszárny és a Diesel Egyesület hajdúböszörményi találkozója."
        image="/from-site/feltoltes/111004_diesel_center.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-3">
        {news.map((item) => (
          <Link key={item.slug} href={`/hirek/${item.slug}`} className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/5">
            <span className="relative block h-48">
              <Image src={item.image} alt="" fill className="object-cover" sizes="(min-width: 1024px) 30vw, 100vw" />
            </span>
            <span className="flex flex-1 flex-col p-5">
              <span className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">{item.date}</span>
              <span className="mt-2 text-lg font-extrabold tracking-tight">{item.title}</span>
              <span className="mt-2 text-sm leading-relaxed text-muted">{item.lead}</span>
            </span>
          </Link>
        ))}
      </section>
    </>
  );
}

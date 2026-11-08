import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";
import { footerGroups, mainNav } from "@/lib/site";

export const metadata: Metadata = {
  title: "Oldaltérkép",
  description: "A Móricz Bosch Diesel Center oldalainak listája.",
};

export default function SitemapPage() {
  const groups = [
    { title: "Főmenü", links: [...mainNav, { href: "/kapcsolat", label: "Kapcsolat" }] },
    ...footerGroups,
  ];

  return (
    <>
      <PageHero eyebrow="Oldaltérkép" title="Minden oldal egy helyen." image="/media/eps-815.jpg" />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        {groups.map((group) => (
          <article key={group.title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5">
            <h2 className="text-lg font-semibold">{group.title}</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {group.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="underline-offset-4 hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </>
  );
}

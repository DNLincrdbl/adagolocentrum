import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { staff } from "@/lib/site";

export const metadata: Metadata = {
  title: "Munkatársaink",
  description: "A Móricz Bosch Diesel Center csapata Hajdúböszörményben.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Munkatársaink"
        title="A műhely névsora."
        lead="Vevőszolgálat és dieselszerelők, a korábbi honlap portréival. A névsorban Fekete Patrik is szerepel."
        image="/from-site/img/0401.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 md:px-6 lg:grid-cols-3 xl:grid-cols-4">
        {staff.map((person) => (
          <article key={person.name} className="overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/5">
            <div className="relative h-64 bg-paper">
              <Image src={person.photo} alt={person.name} fill className="object-cover object-top" sizes="(min-width: 1280px) 22vw, 45vw" />
            </div>
            <div className="p-4">
              <p className="font-extrabold tracking-tight">{person.name}</p>
              <p className="mt-1 text-sm text-muted">{person.role}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

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
        lead="Az irodában fogadunk, a műhelyben a pad mellett dolgozunk."
        image="/from-site/img/0401.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        {(
          [
            ["Akik az irodában várnak.", staff.filter((person) => person.place === "iroda")],
            ["Akik a pad mellett állnak.", staff.filter((person) => person.place === "muhely")],
          ] as const
        ).map(([title, people]) => (
          <div key={title} className="mb-12 last:mb-0">
            <h2 className="text-3xl font-extrabold tracking-tight">{title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {people.map((person) => (
                <article key={person.name} className="overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-black/5">
                  <div className="relative h-64 bg-paper">
                    <Image src={person.photo} alt={person.name} fill className="object-cover object-[center_28%]" sizes="(min-width: 1280px) 22vw, 45vw" />
                    {person.photo.endsWith("szabo-csaba.jpg") ? (
                      <span aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[34%] bg-gradient-to-t from-white/80 via-white/45 to-transparent" />
                    ) : null}
                  </div>
                  <div className="p-4">
                    <p className="font-extrabold tracking-tight">{person.name}</p>
                    <p className="mt-1 text-sm text-muted">{person.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

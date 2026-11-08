import type { Metadata } from "next";
import { BenchGrid } from "@/components/site/BenchGrid";
import { PageHero } from "@/components/site/PageHero";
import { benches, dieselIntro } from "@/lib/benches";

export const metadata: Metadata = {
  title: "Dieseltechnológia",
  description:
    "Bosch, Hartridge, Carbon Zapp, DCI 700, CRI PRO és Megatester berendezések a hajdúböszörményi műhelyben.",
};

export default function DieselPage() {
  return (
    <>
      <PageHero
        eyebrow="Dieseltechnológia"
        title="Tizenhat berendezés, az eredeti sorrendben."
        lead={dieselIntro[0]}
        image="/from-site/img/bosch_eps815cr.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
          {dieselIntro[1]} Minden kártya a régi oldal egy gépe: a fotó, a típuslista és a teljes leírás. A hosszabb szöveg a Több gombbal nyílik.
        </p>
        <BenchGrid />
        <p className="mt-6 text-sm text-muted">{benches.length} vizsgálóberendezés.</p>
      </section>
    </>
  );
}

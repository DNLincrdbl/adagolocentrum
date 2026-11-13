import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { WorkshopGrid } from "@/components/site/WorkshopGrid";
import { workshopLead } from "@/lib/workshop";

export const metadata: Metadata = {
  title: "Szerviz",
  description:
    "Autószerelő műhely Hajdúböszörményben: gépjárműszerviz, diagnosztika, olajcsere, fék, futómű, automata váltó olajcsere, részecskeszűrő tisztítás és CHIP tuning.",
};

export default function WorkshopPage() {
  return (
    <>
      <PageHero
        eyebrow="Szerviz"
        title="Autószerelő műhely."
        lead={workshopLead}
        image="/media/szerviz/gepjarmu.jpg"
        imageClassName="object-[center_40%]"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <WorkshopGrid />
      </section>
    </>
  );
}

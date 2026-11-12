import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Szerviz",
  description: "A Móricz Kft. autószerelő műhelye. A részletes bemutató hamarosan erre az oldalra kerül.",
};

export default function WorkshopPage() {
  return (
    <PageHero
      eyebrow="Szerviz"
      title="Autószerelő műhely."
      lead="A műhely bemutatása hamarosan ide kerül."
      image="/media/workshop.jpg"
    />
  );
}

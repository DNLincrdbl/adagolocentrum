import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ReferenceList } from "@/components/site/ReferenceList";

export const metadata: Metadata = {
  title: "Referenciák",
  description: "Vállalatok és intézmények, amelyek a Móricz Kft. dieseladagoló-szolgáltatását igénybe vették.",
};

export default function ReferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Referenciáink"
        title="Szervizek, volánok, agrárcégek, határon túl is."
        lead="Az elmúlt években az alábbi vállalatok és intézmények vették igénybe a szolgáltatásainkat. A lista a korábbi honlap közlése."
        image="/from-site/img/diesel_adagolo.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <ReferenceList />
      </section>
    </>
  );
}

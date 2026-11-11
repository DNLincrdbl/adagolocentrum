import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ReferenceList } from "@/components/site/ReferenceList";
import { additionalPartners } from "@/lib/catalog";

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
        image="/media/injektor-szivattyu.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <ReferenceList />
        <div className="mt-12">
          <h2 className="text-2xl font-extrabold tracking-tight">További partnerek</h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {additionalPartners.map((name) => (
              <li key={name} className="rounded-full bg-white px-4 py-2 text-sm font-semibold ring-1 ring-black/5">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

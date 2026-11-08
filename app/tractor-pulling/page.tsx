import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { PhotoGrid } from "@/components/site/PhotoGrid";
import { tractor } from "@/lib/catalog";
import { tractorPhotos } from "@/lib/archive";

export const metadata: Metadata = {
  title: "Tractor Pulling",
  description: "Retro Kóboj, a Móricz Kft. 1969-es MTZ 50 tractor pulling gépe.",
};

export default function TractorPage() {
  return (
    <>
      <PageHero
        eyebrow="Tractor Pulling"
        title="Retro Kóboj."
        lead="A Móricz Kft. 1969-es MTZ 50-ese. Motorpal adagoló, 168 lóerő, 29,5 tonna."
        image={tractorPhotos[0]}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["168 LE", "Motor"],
            ["29 500 kg", "Tömeg"],
            ["1969", "Évjárat"],
          ].map(([value, label]) => (
            <div key={label} className="rounded-[1.75rem] bg-ink p-6 text-white">
              <p className="text-4xl font-semibold tracking-tight">{value}</p>
              <p className="mt-2 text-sm text-white/60">{label}</p>
            </div>
          ))}
        </div>
        <dl className="mt-4 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/5">
          {tractor.rows.map(([label, value]) => (
            <div key={label} className="grid gap-1 border-b border-black/5 px-5 py-4 last:border-b-0 sm:grid-cols-[16rem_1fr] sm:px-7">
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="font-semibold">{value}</dd>
            </div>
          ))}
          <div className="grid gap-1 px-5 py-4 sm:grid-cols-[16rem_1fr] sm:px-7">
            <dt className="text-sm text-muted">Tulajdonos</dt>
            <dd className="font-semibold">{tractor.owner}</dd>
          </div>
        </dl>
        <h2 className="mt-12 text-3xl font-extrabold tracking-tight">A Retro Kóboj fotói</h2>
        <p className="mt-2 mb-6 text-sm text-muted">{tractorPhotos.length} kép a 2015-ös galériából.</p>
        <PhotoGrid images={tractorPhotos} alt="Retro Kóboj" />
      </section>
    </>
  );
}

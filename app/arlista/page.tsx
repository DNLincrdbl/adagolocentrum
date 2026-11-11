import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { PriceList } from "@/components/site/PriceList";
import { priceNotice } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Árlista",
  description:
    "Tájékoztató munkadíjak dieseladagoló és common rail javításhoz. Érvényes 2027. január 1-től visszavonásig.",
};

export default function PricePage() {
  return (
    <>
      <PageHero
        eyebrow="Árlista"
        title="Tájékoztató munkadíjak, forintban."
        lead={`Az árak nagyságrendet mutatnak, és ${priceNotice.valid} érvényesek. Csak a munkadíjat tartalmazzák, a beépített alkatrészt nem.`}
        image="/media/closeup.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="mb-8 grid gap-4 md:grid-cols-3">
          <article className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5">
            <p className="text-sm text-muted">Szétszerelés, hibafelmérés</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">Bruttó {priceNotice.split}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Technológiai okból az adagolót szét kell szerelni, tömítéscserénél is. A díj akkor is a megrendelőt terheli, ha az árajánlatot nem fogadja el.
            </p>
          </article>
          <article className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5">
            <p className="text-sm text-muted">Összeszerelés javítás nélkül</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight">Bruttó {priceNotice.reassembly}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Kérésre összeszereljük a behozott adagolót. Ebben az esetben az adagoló nem beépíthető. Elfogadott árajánlatnál külön szét- és összeszerelési díj nincs.
            </p>
          </article>
          <article className="rounded-[1.75rem] bg-ink p-6 text-white">
            <p className="text-sm text-white/60">Árajánlat</p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">Előbb felmérünk, utána számolunk.</p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              A hibafelmérés után előzetes kalkulációt küldünk a várható javítási és anyagköltségről. A javítás a visszajelzés után indul.
            </p>
          </article>
        </div>
        <PriceList />
      </section>
    </>
  );
}

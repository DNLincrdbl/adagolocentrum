import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impresszum",
  description: "A Móricz Kft. honlapjának impresszuma és a tartalom felhasználásának feltételei.",
};

export default function ImprintPage() {
  return (
    <>
      <PageHero
        eyebrow="Impresszum"
        title="A tartalom a Móricz Kft.-é."
        lead={`${company.name} · ${company.address} · ${company.email}`}
        image="/media/closeup.jpg"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <div className="space-y-5 rounded-[1.75rem] bg-white p-7 text-sm leading-relaxed text-pretty text-muted ring-1 ring-black/5 md:p-10">
          <p>
            A honlapon található műalkotásokhoz, grafikákhoz, szövegekhez, védjegyekhez, logókhoz és minden egyéb hozzáférhető tartalomhoz kapcsolódó szerzői és egyéb szellemi tulajdonjogok a Móricz Kft. tulajdonát képezik, vagy azokat a Móricz Kft. engedély alapján használja.
          </p>
          <p>
            A honlap bármely része személyes célra saját számítógépre másolható. Tilos a tartalom más műben, ideértve a saját honlapot is, felhasználni, és tilos bármely más nyilvános vagy kereskedelmi felhasználás. Engedély nélkül a honlap semmilyen része nem használható fel újra.
          </p>
          <p>
            A Móricz Kft. fenntart minden, a tartalomra vonatkozó jogot és jogcímet, beleértve a letölthető szoftvert vagy kódot, a szoftver által generált vagy abban meglévő képet és a kapcsolódó adatokat. Tilos ezek másolása, megváltoztatása, sokszorosítása, feltöltése, továbbítása, terjesztése, visszafordítása, szétbontása vagy egyéb átalakítása.
          </p>
          <p className="font-medium text-ink">
            {company.name}
            <br />
            {company.address}
            <br />
            Adószám: {company.tax}
            <br />
            Cégjegyzékszám: {company.court}
          </p>
        </div>
      </section>
    </>
  );
}

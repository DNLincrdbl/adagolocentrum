import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Minőségpolitika",
  description: "A Móricz Kft. minőségpolitikája: empátia, eredetiség, függetlenség, folyamatosság.",
};

const blocks = [
  {
    title: "Értékeink",
    items: [
      "A piaci igényekhez és a technikai fejlődéshez igazodva folyamatosan javítjuk a szolgáltatás minőségét.",
      "A minőség része a munkatársak szakmai és emberi fejlődése, ezért rendszeresek a továbbképzések.",
      "A társadalmi követelményeknek a szervezet minden szintjén megfelelünk.",
    ],
  },
  {
    title: "Céljaink",
    items: [
      "A szolgáltatási kört a piaci igényekhez bővítjük, az értékesítés minőségét folyamatosan javítjuk.",
      "Az ügyfelek elégedettségét képzett szakemberekkel és korszerű gépekkel érjük el.",
      "Az irányítási rendszert és a folyamatokat folyamatosan fejlesztjük.",
    ],
  },
  {
    title: "Felelősségünk",
    items: [
      "A dieselrendszerek javítását és az alkatrész-kereskedelmet a jogszabályoknak és a hatósági előírásoknak megfelelően, ellenőrzött körülmények között végezzük.",
      "A szükséges erőforrásokat feladatunknak tekintjük biztosítani.",
      "A minőségirányítási rendszert az MSZ EN ISO 9001:2009 és a 89/2007 NKH Elnöki Szabályzat szerint alakítjuk és fejlesztjük.",
    ],
  },
];

export default function QualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Minőségpolitika"
        title="Empátia, eredetiség, függetlenség, folyamatosság."
        lead="A Móricz Kft. dieselrendszerek diagnosztikájával, javításával és alkatrész-értékesítésével foglalkozik, valamint a Bosch, Delphi, Stanadyne és Motorpal termékek garanciális és garanciaidőn túli javításával."
        image="/from-site/img/adagolo_iso.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <article className="rounded-[1.75rem] bg-ink p-8 text-white md:p-12">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/50 uppercase">Küldetés</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-balance md:text-4xl">
            A dieseltechnikában mostani szerepünket erősítve a vevőink minőségi szolgáltatója akarunk lenni.
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
            Azon dolgozunk, hogy a vevő egyre elégedettebb legyen, és újra hozzánk forduljon. Az elégedett vevő új vevőket hoz.
          </p>
        </article>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {blocks.map((block) => (
            <article key={block.title} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5">
              <h2 className="text-xl font-semibold tracking-tight">{block.title}</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

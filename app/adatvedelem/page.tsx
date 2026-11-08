import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Adatvédelem",
  description: "A Móricz Kft. adatkezelési tájékoztatója a honlap látogatói számára.",
};

const points = [
  "A bármilyen úton hozzánk kerülő egyéni adatot, amit annak tulajdonosa nem szándékosan közölt velünk, nem őrzünk meg, és nem adunk tovább.",
  "A tudatosan átadott magántermészetű adatokat csak arra a célra használjuk, amire rendelkezésünkre bocsátották, például a megkeresés megválaszolására vagy statisztikához. Más célból senkinek nem adjuk tovább.",
  "A nyilvános hálózatról hozzáférhető számítógépek háttértárolóin, szoftveres védelemmel sem tárolunk olyan adatot, amit nem a nyilvánosság számára szántak.",
  "Az őrzött magántermészetű adatokat minden elvárható módszerrel védjük attól, hogy illetéktelen kézbe kerüljenek.",
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Adatvédelem"
        title="Amit ránk bíz, arra használjuk, amire kérte."
        lead="A kapcsolatfelvétel és a kérdőív a saját levelezőprogramján keresztül jut el hozzánk. A honlap nem tárolja el az űrlap tartalmát."
        image="/media/workshop.jpg"
      />
      <section className="mx-auto max-w-3xl px-4 py-12 md:px-6">
        <ol className="space-y-3">
          {points.map((point, index) => (
            <li key={point} className="flex gap-4 rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
              <span className="text-sm font-semibold text-muted">{index + 1}</span>
              <p className="text-sm leading-relaxed text-pretty">{point}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/site/PageHero";

export const metadata: Metadata = {
  title: "Szolgáltatások",
  description:
    "Dieseladagolók diagnosztizálása, beállítása, javítása és alkatrész-kereskedelem. Bosch, Delphi, Denso, Stanadyne.",
};

const steps = [
  "Csak kiszerelt fődarabok javítását vállaljuk.",
  "A hiba felméréséhez szétszereljük az adagolót, és beazonosítjuk a sérült alkatrészeket. Tömítéskészlet-cserénél is szét kell szedni, mert a sérült alkatrész tönkreteheti az adagolópadot.",
  "A hibafelmérés után előzetes árkalkulációt készítünk, és értesítjük a várható javítási és anyagköltségről.",
  "Az árajánlat elfogadása után megjavítjuk az adagolót. Elfogadás esetén a szét- és összeszerelés díja a javítási árban benne van.",
  "A kész dieseladagolót a kért címre postázzuk.",
];

const parts = [
  "Soros és rotációs adagolószivattyúk",
  "Common Rail magasnyomású adagolók",
  "Mechanikus, elektromágneses és piezo porlasztók",
  "Csapos és nyílásos porlasztóelem",
  "Bosch, Delphi és Stanadyne üzemanyagszűrők",
  "Adagolószivattyú pótalkatrészek",
  "Összekötő anyagok és üzemanyagadagolók",
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Szolgáltatásaink"
        title="Diagnosztika, javítás, alkatrész."
        lead="Az Európában legelterjedtebb dieseladagolókat vállaljuk: mezőgazdasági gépek, teherautók és személyautók. A szakszerű javítást rövid határidővel."
        image="/from-site/img/adagolo_ellenorzes.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] bg-ink p-7 text-white">
            <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Munkamenet</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight">Öt lépés a postázásig.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Hibakód ismeretében telefonon is segítünk beazonosítani a hibát, és elmondjuk, hogyan kell az adagolót leszerelni. Az ország minden részéről keresnek minket apróbb dieseltechnológiai kérdésekkel is.
            </p>
          </div>
          <ol className="grid gap-3">
            {steps.map((step, index) => (
              <li key={step} className="flex gap-4 rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper text-sm font-semibold">
                  {index + 1}
                </span>
                <p className="text-sm leading-relaxed text-pretty">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[1.75rem] bg-white p-7 ring-1 ring-black/5 md:p-9">
            <h2 className="text-3xl font-semibold tracking-tight">Alkatrészek kis- és nagykereskedelme</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Nemcsak javítunk és felújítunk. Az Európában legelterjedtebb dieseladagolókhoz alkatrészt is kínálunk, versenyképes áron. Bosch, Delphi, Denso és Stanadyne disztribútorok vagyunk.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {parts.map((part) => (
                <li key={part} className="rounded-full bg-paper px-4 py-2 text-sm font-medium">
                  {part}
                </li>
              ))}
            </ul>
          </article>
          <article className="flex flex-col justify-between rounded-[1.75rem] bg-paper p-7 ring-1 ring-black/5">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">A szétszerelés díja akkor is jár, ha nem kéri a javítást.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Bruttó 15 000 vagy 25 000 Ft. Ha az árajánlatot nem fogadja el, az adagolót szétszerelve adjuk vissza. Kérésre összeszereljük, de az nem lesz beépíthető. Az összeszerelés bruttó 10 000 Ft.
              </p>
            </div>
            <Link href="/arlista" className="mt-8 inline-flex w-fit rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white">
              Tájékoztató árlista
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}

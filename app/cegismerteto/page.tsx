import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/site/PageHero";
import { company, milestones } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cégismertető",
  description: "A Móricz Kft. története 1990-től a hajdúböszörményi Bosch Diesel Centerig.",
};

const facts = [
  ["Név", company.name],
  ["Szervizvezető-tulajdonos", company.owner],
  ["Székhely", company.address],
  ["Alapítás", company.founded],
  ["Cégjegyzékszám", company.court],
  ["Adószám", company.tax],
  ["Számlaszám", `${company.bank}, ${company.bankName}`],
  ["E-mail", company.email],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Cégismertető"
        title="Mezőgazdasági műhelyből dieselcentrum."
        lead="A Móricz Kft. 2001-ben alakult, az elődje viszont már 1990-ben gépek javításával indult. 2004 óta a profil kizárólag a dieseladagoló."
        image="/from-site/img/valtra.jpg"
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <div className="relative mb-4 h-72 overflow-hidden rounded-[1.75rem] md:h-96">
          <Image src="/from-site/img/0701.jpg" alt="Az első műhely építése" fill className="object-cover" sizes="(min-width: 768px) 72rem, 100vw" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[1.75rem] bg-white p-7 ring-1 ring-black/5 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">Cégtörténet</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-pretty text-muted">
              <p>
                Az alapítástól a szolgáltatást és a kereskedelmet itthon és külföldön is építettük. 1998-ban a műhely a Valtra traktorok észak-kelet magyarországi szervize lett, később személyautó-javítással is foglalkoztunk.
              </p>
              <p>
                2004 óta a Stanadyne adagolórendszerek magyarországi képviseletét látjuk el. A mezőgazdasági erő- és munkagépek javítását abbahagytuk, és azóta csak dieseladagolókkal foglalkozunk.
              </p>
              <p>
                A gépparkot folyamatosan bővítettük: Stanadyne, Bosch és Hartridge próbapadok, Bosch, Delphi és Denso diagnosztika. 2006-ban érkezett a Bosch EPS 815, 2007-től a Common Rail injektorok, a PD unit injektorok és a unit pumpák is a profil részei. A gyári kapcsolatok adják az alkatrészt és a javítási technológiát.
              </p>
              <p>
                A szervizben 10 teljes állású munkatárs dolgozik. Külföldről is rendszeresen érkezik javítási és felújítási megrendelés.
              </p>
            </div>
          </article>
          <article className="rounded-[1.75rem] bg-ink p-7 text-white md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">Filozófia</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              A vezetés kiemelten kezeli mindazt, ami a minőség javításával növeli a cég teljesítőképességét. Első feladat, hogy a szolgáltatás megfeleljen a vevő követelményeinek.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Az elégedettséget képzett szakemberekkel és korszerű gépekkel érjük el. A stratégiai cél, hogy hosszútávon megfeleljünk a nemzetközi követelményeknek és az ügyfelek elvárásainak.
            </p>
          </article>
        </div>

        <ol className="mt-4 grid gap-3 md:grid-cols-3">
          {milestones.map((item) => (
            <li key={item.year} className="rounded-[1.5rem] bg-white p-5 ring-1 ring-black/5">
              <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">{item.year}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ol>

        <dl className="mt-4 grid gap-3 sm:grid-cols-2">
          {facts.map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] bg-white px-5 py-4 ring-1 ring-black/5">
              <dt className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">{label}</dt>
              <dd className="mt-1 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technológiai fejlesztés",
  description:
    "A Móricz Kft. GINOP_PLUSZ-1.2.4-25-2026-03026 azonosítójú technológiai fejlesztése. Támogatás: 9 961 336 Ft.",
};

const facts = [
  ["Kedvezményezett neve", "MÓRICZ Ipari, Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság"],
  ["Projekt címe", "Technológiai fejlesztés a Móricz Kft-nél"],
  ["Szerződött támogatási összeg", "9.961.336 Ft"],
  ["Támogatás mértéke", "50%"],
  ["A projekt tervezett befejezése", "2027.12.29."],
  ["Projektazonosító", "GINOP_PLUSZ-1.2.4-25-2026-03026"],
  ["Megvalósítási helyszín", "4220 Hajdúböszörmény, Polgári utca 107., hrsz.: 2741/2"],
];

function GrantLogo() {
  return (
    <Image
      src="/brand/szechenyi-terv-plusz.png"
      alt="Széchenyi Terv Plusz. Magyarország Kormánya. Az Európai Unió társfinanszírozásával."
      width={1737}
      height={496}
      className="h-auto w-full"
    />
  );
}

export default function GrantPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 pt-10 pb-20 md:px-6">
      <Link href="/" className="text-sm font-semibold text-muted underline-offset-4 hover:underline">
        Vissza a kezdőlapra
      </Link>

      <section className="mt-8 overflow-hidden rounded-[1.75rem] bg-white p-4 ring-1 ring-black/5 md:p-6">
        <GrantLogo />
        <p className="mt-6 text-xs font-extrabold tracking-[0.18em] text-accent uppercase">Projektleírás</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-balance">Technológiai fejlesztés a Móricz Kft-nél</h1>
        <dl className="mt-8 divide-y divide-black/5">
          {facts.map(([label, value]) => (
            <div key={label} className="grid gap-1 py-3 sm:grid-cols-[16rem_1fr] sm:gap-6">
              <dt className="text-sm font-semibold">{label}</dt>
              <dd className="text-sm leading-relaxed text-muted">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-sm leading-relaxed font-semibold">
          A projekt az Európai Unió támogatásával, a magyar állam társfinanszírozásával valósult meg.
        </p>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-pretty text-muted">
          <p>
            Móricz Kft. ma Magyarország egyik legismertebb dieseladagoló-szervize. Székhelyünk Hajdúböszörményben található, de szolgáltatásainkat az ország egész területén nyújtjuk. A legkorszerűbb Bosch-, Hartridge- és Stanadyne-berendezésekkel felszerelt műhelyünkben az adagolójavítás és felújítás teljes spektrumát végezzük: teljes szét- és összeszerelés, tisztítás, tömítések cseréje, próbapadi ellenőrzés, beszabályozás.
          </p>
          <p>A pályázatunk céljaként a 9531&apos;25 Gépjármű javítása, karbantartási tevékenységünket kívánjuk fejleszteni.</p>
          <p>
            A beruházással olyan eszköz beszerzése valósul meg, amely vállalkozásunknál a támogatási kérelem benyújtásakor nem áll rendelkezésre, és beszerzése révén a vállalkozásunknál a jelenlegi tevékenységéhez kapcsolódóan költséghatékonyabb munkavégzés várható.
          </p>
          <p>Jelenleg 18 fővel dolgozunk (szerelő, adminisztrátor, tanuló). Gyári próbapadok, satupadok, szerszámkészletek, alkatrész tisztító berendezésekkel rendelkezünk.</p>
          <p>A megvalósítási helyszínt a tulajdonostól bérli a cég, így saját tulajdonnak minősül.</p>
          <p>
            A projekt eredményeként az új technológia hosszú távon hozzájárul a cég fejlődéséhez. A fejlesztés célja 1 db AVM2-PC próbapad 3000 bar nyomásszintre történő fejlesztő CR Pump Upgrade berendezés és 1 db EVERT diagnosztikai ollós emelő beszerzése.
          </p>
          <p>
            Tevékenységünk bővítéséhez, fejlesztéséhez, az új típusú szivattyúk vizsgálatához, javításához elengedhetetlen a pályázott eszköz. Az emelő segítség lenne, hogy a helyszínen kiszerelhető legyen a gépjárműből, az adott szerelésre szoruló magasnyomású szivattyú, ugyanúgy a visszahelyezésében is.
          </p>
          <p>
            A beszerzendő eszközök mellett a Pakfun Kft-től a pályázatban meghatározott, kötelezően megvalósítandó információs technológia-fejlesztés, üzleti felhőszolgáltatások igénybevétele keretében beszerzésre kerül a TaSK Feladat- és Projektkezelő Rendszer 1 célterületre vonatkozóan (elektronikus iratkezelési rendszer funkcionális terület), összesen 18 hónapon keresztül, 3 felhasználóra.
          </p>
          <p>
            Az elmúlt években folyamatosan növekvő kereslet mutatkozott főtevékenységünk iránt. Mára már csak nehezen tudjuk ellátni maradéktalanul a hozzánk érkező, bizalmukkal megtisztelő partnereinket. Ennek köszönhetően döntöttünk úgy, hogy nagyobb hangsúlyt kívánunk fektetni cégünk e tevékenységi körére. Versenyképességünk, piacon maradásunk és legfontosabb célként a munkahelymegtartásunk, esetleges teremtésünk alapvető feltétele, hogy lépést tudjunk tartani a kor technikai elvárásaival, valamint a piacon működő egyéb, ágazati versenytársakkal.
          </p>
          <p>A beszerzésre kerülő eszköz a 4220 Hajdúböszörmény, Polgári utca 107. alatti meglévő telephelyünk épületében történne.</p>
          <p>
            A munkavállalók hozzáértésének és a fejlett tárgyi erőforrások rendelkezésre állásának köszönhetően minőségi szolgáltatást tudunk biztosítani partnereinknek, vevőinknek.
          </p>
          <p>
            Mindig fenntartjuk az optimális működéshez szükséges létszámot, mely segíti a hatékony munkavégzést és kimagasló teljesítményt eredményez. Váratlan létszámbeli leépítéseket nem eszközölünk, így dolgozóink biztonságban érzik magukat a pozíciójukban, melynek köszönhetően még hatékonyabban tudják feladataikat ellátni.
          </p>
          <p>
            A technológiai fejlődés mellett a projekt az EU Alapjogi Chartában lefektetett alapelvekkel is harmonizál, az esélyegyenlőség, a fenntarthatóság, valamint a felelős vállalati működés elvei mentén.
          </p>
        </div>
      </section>

      <section className="mt-6 overflow-hidden rounded-[1.75rem] bg-white p-4 ring-1 ring-black/5 md:p-6">
        <GrantLogo />
        <p className="mt-6 text-xs font-extrabold tracking-[0.18em] text-accent uppercase">Sajtóközlemény</p>
        <p className="mt-3 text-sm font-semibold text-muted">2026. október 23.</p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-balance">Technológiai fejlesztés a Móricz Kft-nél</h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-pretty text-muted">
          <p>
            A MÓRICZ Ipari, Kereskedelmi és Szolgáltató Korlátolt Felelősségű Társaság technológiai fejlesztésre irányuló projektje a Széchenyi Terv Plusz keretében valósul meg 9,96 millió forint vissza nem térítendő európai uniós támogatás segítségével.
          </p>
          <p>A beszerzések okát a 9531&apos;25 Gépjármű javítása, karbantartási tevékenységünk iránt megnövekedett kereslet indukálta.</p>
          <p>
            Jelen projekt célja, hogy a Móricz Kft. jelenlegi tevékenységét eszközbeszerzéssel tegye hatékonyabbá, illetve meglévő kapacitásait megújítsa, növelje. A projekt keretében megvalósuló eszközbeszerzéshez kapcsolódó fejlesztés eredményeként a kft. az eddiginél nagyobb eredményt érhet el, illetve stabilitása is növekszik. A projekt eredményeként az új technológia hosszú távon hozzájárul a cég fejlődéséhez. A kor piaci igénye megköveteli egy szervezettől a több lábon állást, ezért jelenlegi fejlesztésünk célja 1 db AVM2-PC próbapad 3000 bar nyomásszintre történő fejlesztő CR Pump Upgrade berendezés és 1 db EVERT diagnosztikai ollós emelő beszerzése. A beszerzendő eszközök mellett a Pakfun Kft-től a pályázatban meghatározott, kötelezően megvalósítandó „Információs technológia-fejlesztés üzleti felhőszolgáltatások” igénybevétele keretében beszerzésre kerül a TaSK Feladat- és Projektkezelő Rendszer 1 célterületre vonatkozóan (elektronikus iratkezelési rendszer funkcionális terület), összesen 18 hónapon keresztül, 3 felhasználóra.
          </p>
          <p>
            Az elmúlt években folyamatosan növekvő kereslet mutatkozott főtevékenységük iránt. Mára már csak nehezen tudják ellátni maradéktalanul a hozzájuk érkező, bizalmukkal megtisztelő partnereket. Ennek köszönhetően döntöttek úgy, hogy nagyobb hangsúlyt kívánnak fektetni a cég e tevékenységi körére. Versenyképességük, piacon maradásuk és legfontosabb célként a munkahelymegtartásuk, esetleges teremtésük alapvető feltétele, hogy lépést tudjanak tartani a kor technikai elvárásaival, valamint a piacon működő egyéb, ágazati versenytársakkal. A fejlesztést követően a vállalkozás elsősorban szolgáltatásainak minőségét tudja növelni, ezáltal a cég versenyhelyzete javul. A fejlesztés eredményeként beszerzendő gépek elhelyezése a 4220 Hajdúböszörmény, Polgári utca 107. szám alatti telephelyünkön történik. A projekt tervezett befejezési dátuma: 2027.12.29.
          </p>
          <p>A projekt azonosító száma: GINOP_PLUSZ-1.2.4-25-2026-03026</p>
          <p>
            A projekt a Széchenyi Terv Plusz program GINOP_PLUSZ-1.2.4-25 kódszámú „Mikro- és kisvállalkozások támogatása a leghátrányosabb helyzetű régiókban, illetve a Szabad Vállalkozási Zónákban” című pályázatának keretében az Európai Unió finanszírozásával valósul meg.
          </p>
          <p>
            További információ kérhető: Móricz Zsolt, ügyvezető. Elérhetőség:{" "}
            <a className="font-semibold text-ink underline-offset-4 hover:underline" href="tel:+36209561955">
              +36 20 956 1955
            </a>
            ,{" "}
            <a className="font-semibold text-ink underline-offset-4 hover:underline" href="mailto:info@adagolocentrum.hu">
              info@adagolocentrum.hu
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "@/components/site/ContactForm";
import { Faq } from "@/components/site/Faq";
import { additionalPartners, references } from "@/lib/catalog";
import { albums } from "@/lib/archive";
import { company, gallery, news, staff } from "@/lib/site";

const stats = [
  { value: "2001", label: "óta diesel rendszerek javítása" },
  { value: "10", label: "szakember a műhelyben" },
  { value: "3000", label: "barig vizsgálunk" },
  { value: "7", label: "teljes körű képviselet" },
];

const reasons = [
  {
    title: "Gyári technológia",
    text: "Bosch, Hartridge, Stanadyne és Carbon Zapp próbapadok, a common rail javításhoz szükséges teljes sorral. Az eddig kiadott Bosch gyári javítási technológiák mindegyikével rendelkezünk.",
    icon: "M4 7h16M4 12h16M4 17h10",
  },
  {
    title: "Rövid határidő",
    text: "A hibát próbapadon mérjük, az árajánlat után a javítás a visszajelzéstől indul.",
    icon: "M12 6v6l4 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z",
  },
  {
    title: "Alkatrész raktárról",
    text: "Bosch, Delphi, Denso, Stanadyne, Motorpal és Continental disztribútorok vagyunk. Egyes típusok azonnal elvihetők.",
    icon: "M4 8h16v11H4zM8 8V5h8v3",
  },
  {
    title: "Országos postázás",
    text: "A műhely Hajdúböszörményben van, a kész adagolót a kért címre küldjük.",
    icon: "M3 12h18M12 3l9 9-9 9",
  },
];

const services = [
  {
    title: "Diagnosztika és javítás",
    text: "Mezőgazdasági gépek, teherautók és személyautók. Szétszerelés, tisztítás, tömítés, próbapad, beszabályozás.",
    href: "/szolgaltatasok",
    image: gallery[2].src,
  },
  {
    title: "Common Rail és CP4",
    text: "Magasnyomású szivattyúk és injektorok vizsgálata, kódolása, javítása, akár 3000 barig.",
    href: "/dieseltechnologia",
    image: gallery[0].src,
  },
  {
    title: "Alkatrész, kis- és nagyker",
    text: "Soros és rotációs szivattyúk, porlasztók, szűrők és pótalkatrészek versenyképes áron.",
    href: "/szolgaltatasok",
    image: gallery[1].src,
  },
];

const steps = [
  "Csak kiszerelt fődarabot veszünk át.",
  "Szétszereljük, és beazonosítjuk a sérült alkatrészeket.",
  "Előzetes árajánlatot küldünk a javításról és az anyagról.",
  "Elfogadás után megjavítjuk és beszabályozzuk.",
  "A kész adagolót a kért címre postázzuk.",
];

const trustNames = [...references.map((item) => item.name), ...additionalPartners];
const office = staff.filter((person) => person.place === "iroda");
const workshop = staff.filter((person) => person.place === "muhely");

function People({ people }: { people: readonly { name: string; role: string; photo: string }[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {people.map((person) => (
        <article key={person.name} className="overflow-hidden rounded-[1.35rem] bg-paper">
          <div className="relative h-52">
            <Image src={person.photo} alt={person.name} fill className="object-cover object-[center_28%]" sizes="(min-width: 1024px) 22vw, 45vw" />
          </div>
          <div className="p-4">
            <p className="font-extrabold tracking-tight">{person.name}</p>
            <p className="mt-0.5 text-sm text-muted">{person.role}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function HomePage() {
  const loop = [...trustNames, ...trustNames];

  return (
    <>
      <section className="px-3 pt-4 sm:px-4 sm:pt-5">
        <div className="rise relative min-h-[40rem] w-full overflow-hidden rounded-[2rem] bg-ink shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/workshop.jpg"
            preload="metadata"
            aria-hidden="true"
          >
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="relative z-10 flex min-h-[40rem] flex-col justify-end p-6 sm:p-10 md:p-14">
            <p className="text-xs font-extrabold tracking-[0.22em] text-accent-bright uppercase">
              Bosch Diesel Center · Hajdúböszörmény
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-balance text-white sm:text-6xl lg:text-7xl">
              Dieseladagoló javítás az egész országnak.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-pretty text-white/80 sm:text-lg">
              A Móricz Kft. ma Magyarország egyik legismertebb dieseladagoló-szervize. A műhely Hajdúböszörményben dolgozik, a szolgáltatást az ország egész területén nyújtjuk.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/szolgaltatasok" className="rounded-full bg-accent px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-accent/30 transition hover:brightness-110">
                Szolgáltatásaink
              </Link>
              <Link href="/kapcsolat" className="rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-ink">
                Kapcsolat
              </Link>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-6 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.value}>
                  <dt className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{stat.value}</dt>
                  <dd className="mt-1 text-sm text-white/70">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-10">
        <p className="text-center text-xs font-extrabold tracking-[0.2em] text-muted uppercase">Akik már bíznak szakértelmünkben</p>
        <div className="marquee-mask mt-5 overflow-hidden">
          <div className="marquee-track flex w-max gap-10 px-4">
            {loop.map((name, index) => (
              <span key={`${name}-${index}`} className="text-sm font-extrabold tracking-tight text-ink/35">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">Miért a Móricz</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">Egy műhely, a teljes diesel-spektrum.</h2>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)]">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/10 text-accent">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d={reason.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 text-lg font-extrabold tracking-tight">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{reason.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-8 bg-accent py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-xs font-extrabold tracking-[0.2em] text-white/80 uppercase">Szolgáltatások</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance text-white md:text-5xl">
                Ami a gépet újra munkába állítja.
              </h2>
            </div>
            <Link href="/szolgaltatasok" className="w-fit rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white">
              Összes szolgáltatás
            </Link>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} href={service.href} className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_50px_-30px_rgba(0,0,0,0.45)]">
                <div className="relative h-52">
                  <Image src={service.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 30vw, 100vw" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.text}</p>
                  <span className="mt-4 inline-flex text-sm font-extrabold text-accent">Részletek →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-4 py-16 md:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        <div className="relative min-h-[28rem] min-w-0 overflow-hidden rounded-[2rem]">
          <Image src="/media/workshop.jpg" alt="A hajdúböszörményi műhely" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex min-w-0 flex-col justify-between rounded-[2rem] bg-ink p-8 text-white md:p-10">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-accent-bright uppercase">A centrum</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance">Hajdúböszörményből, az M35 mellett.</h2>
            <p className="mt-4 text-sm leading-relaxed text-pretty text-white/70">
              Budapesttől másfél óra az M3-ason és az M35-ösön. Debrecen felől a 35-ösön a Polgári utcai lehajtó az utolsó lehetőség a városközpont felé.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
            <div>
              <p className="text-2xl font-extrabold">60 km</p>
              <p className="mt-1 text-xs text-white/60">a román határ</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold">10 fő</p>
              <p className="mt-1 text-xs text-white/60">teljes állásban</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold">CP4</p>
              <p className="mt-1 text-xs text-white/60">2015 óta</p>
            </div>
          </div>
          <Link href="/kapcsolat" className="mt-8 w-fit rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white">
            Útvonal és térkép
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">Csapat</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Akik az irodában várnak.</h2>
            </div>
            <Link href="/munkatarsaink" className="hidden text-sm font-extrabold text-accent sm:inline">
              Teljes névsor
            </Link>
          </div>
          <People people={office} />
          <h3 className="mt-14 text-3xl font-extrabold tracking-tight md:text-4xl">Akik a pad mellett állnak.</h3>
          <People people={workshop} />
        </div>
      </section>

      <section className="bg-ink py-16 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-accent-bright uppercase">Referenciák</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance">Volánok, szervizek, agrárcégek.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Az elmúlt években hazai és határon túli partnerek bízták ránk az adagolóikat. A lista a korábbi honlap közlése.
            </p>
            <Link href="/referenciak" className="mt-6 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white">
              Összes referencia
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {references.slice(0, 4).map((item) => (
              <article key={item.name} className="rounded-[1.35rem] bg-white/8 p-5 ring-1 ring-white/10">
                <p className="text-lg font-extrabold">{item.name}</p>
                <p className="mt-1 text-sm text-white/60">
                  {item.city} · {item.since}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">Munkamenet</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">Öt lépés a postázásig.</h2>
        </div>
        <ol className="mt-8 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step} className="rounded-[1.5rem] bg-white p-5 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.5)]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-accent text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <p className="mt-4 text-sm leading-relaxed font-semibold">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">Galéria</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">Emlékeink</h2>
            </div>
            <Link href="/galeria" className="text-sm font-extrabold text-accent">
              Nagyítás
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {albums.slice(0, 4).map((album) => (
              <Link key={album.id} href={`/galeria?album=${album.id}`} className="group relative min-h-64 overflow-hidden rounded-[1.5rem]">
                <Image src={album.images[0]} alt={album.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 22vw, 45vw" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="block text-lg font-extrabold">{album.title}</span>
                  <span className="mt-1 block text-sm text-white/75">{album.images.length} kép</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">Hírek</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight">A műhely életéből</h2>
          </div>
          <Link href="/hirek" className="text-sm font-extrabold text-accent">
            Archívum
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {news.filter((item) => item.home).map((item) => (
            <Link key={item.slug} href={`/hirek/${item.slug}`} className="flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white shadow-[0_18px_40px_-30px_rgba(0,0,0,0.45)] transition hover:-translate-y-1">
              <span className={`relative block h-52 ${item.contain ? "bg-paper" : ""}`}>
                <Image src={item.image} alt="" fill className={item.contain ? "object-contain p-4" : "object-cover"} sizes="(min-width: 1024px) 30vw, 100vw" />
              </span>
              <span className="flex flex-1 flex-col p-6">
                <span className="text-xs font-extrabold tracking-[0.16em] text-accent uppercase">{item.date}</span>
                <span className="mt-3 text-xl font-extrabold tracking-tight text-balance">{item.title}</span>
                <span className="mt-3 text-sm leading-relaxed text-muted">{item.lead}</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-8 md:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:pb-16">
        <div>
          <p className="text-xs font-extrabold tracking-[0.2em] text-accent uppercase">Gyakori kérdések</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance">Mielőtt behozod az adagolót.</h2>
        </div>
        <Faq />
      </section>

      <section className="px-4 pt-8 pb-6 md:px-6">
        <div className="mx-auto grid max-w-6xl items-start gap-8 rounded-[2rem] bg-ink p-6 md:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12">
          <div className="text-white">
            <p className="text-xs font-extrabold tracking-[0.2em] text-accent-bright uppercase">Beszéljünk</p>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-balance md:text-5xl">A következő adagoló már úton lehet.</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Írjon, vagy hívjon. Az űrlap a saját levelezőprogramját nyitja meg, a cím {company.email}.
            </p>
            <div className="mt-6 space-y-3">
              {company.phones.map((phone) => (
                <a key={phone.tel} href={`tel:${phone.tel}`} className="block">
                  <span className="block text-xs font-bold tracking-[0.14em] text-white/50 uppercase">{phone.role}</span>
                  <span className="text-lg font-extrabold">{phone.phone}</span>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { company, footerGroups, mainNav } from "@/lib/site";

const pages = [...mainNav, { href: "/kapcsolat", label: "Kapcsolat" }];

export function Footer() {
  return (
    <footer className="bg-white">
      <div aria-hidden="true" className="h-40 bg-gradient-to-b from-paper to-white" />
      <div className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="relative grid overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_-36px_rgba(18,18,18,0.35)] lg:min-h-[24rem]">
          <div className="relative z-10 p-8 sm:p-12 lg:w-[56%] lg:py-16 lg:pr-8 lg:pl-14">
            <p className="text-sm font-medium text-muted">Móricz Bosch Diesel Center</p>
            <h2 className="mt-4 max-w-md text-4xl font-semibold tracking-tight text-balance text-ink md:text-5xl">
              Hozd az adagolót. A többit a padon elintézzük.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-muted">
              Diagnosztika, javítás és alkatrész Hajdúböszörményből, az ország egész területére. Hívj, vagy írj, és megmondjuk a következő lépést.
            </p>
            <Link
              href="/kapcsolat"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-black"
            >
              Kapcsolat
              <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="relative min-h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:w-[78%]">
            <Image
              src="/media/closeup.jpg"
              alt="Bosch próbapad közeli képe a műhelyben"
              fill
              className="object-cover object-[72%_center] [mask-image:linear-gradient(to_top,transparent_0%,rgba(0,0,0,0.2)_28%,rgba(0,0,0,0.55)_52%,black_78%)] [-webkit-mask-image:linear-gradient(to_top,transparent_0%,rgba(0,0,0,0.2)_28%,rgba(0,0,0,0.55)_52%,black_78%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.04)_22%,rgba(0,0,0,0.16)_40%,rgba(0,0,0,0.38)_58%,rgba(0,0,0,0.66)_76%,black_100%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.04)_22%,rgba(0,0,0,0.16)_40%,rgba(0,0,0,0.38)_58%,rgba(0,0,0,0.66)_76%,black_100%)]"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>
        </div>

        <div className="grid gap-10 px-2 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:px-4">
          <div>
            <Image
              src="/brand/moricz-logo.png"
              alt="Móricz Bosch Diesel Center"
              width={1646}
              height={490}
              loading="eager"
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Dieseladagoló-szerviz és alkatrész. Bosch, Delphi, Denso, Stanadyne, Motorpal és Continental.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Oldalak</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">A cégről</p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {footerGroups[0].links.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {footerGroups[1].links.map((item) => (
                <li key={item.href}>
                  <Link className="transition hover:text-ink" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-ink">Kapcsolat</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{company.address}</p>
            <a className="mt-3 block text-sm text-muted transition hover:text-ink" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className="mt-3 block text-sm font-semibold text-ink transition hover:text-accent" href={company.tiktok} target="_blank" rel="noreferrer">
              TikTok · Móricz Kft
            </a>
            <ul className="mt-3 space-y-2">
              {company.phones.map((phone) => (
                <li key={phone.tel}>
                  <a className="text-sm text-muted transition hover:text-ink" href={`tel:${phone.tel}`}>
                    <span className="block text-ink">{phone.phone}</span>
                    <span className="text-xs">{phone.role}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-black/10 px-2 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between lg:px-4">
          <p>© 2010–2026 Adagolócentrum · {company.short}</p>
          <div className="flex gap-5">
            {footerGroups[2].links.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-ink">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

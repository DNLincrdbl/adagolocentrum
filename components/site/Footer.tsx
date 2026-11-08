import Image from "next/image";
import Link from "next/link";
import { company, footerGroups, mainNav } from "@/lib/site";

const pages = [...mainNav, { href: "/kapcsolat", label: "Kapcsolat" }];

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="mx-auto max-w-6xl px-4 pt-8 pb-8 md:px-6">
        <div className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_70px_-36px_rgba(18,18,18,0.35)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10 p-8 sm:p-12 lg:py-16 lg:pr-6 lg:pl-14">
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
          <div className="relative min-h-64 lg:min-h-full">
            <Image
              src="/media/closeup.jpg"
              alt="Bosch próbapad közeli képe a műhelyben"
              fill
              className="object-cover object-[70%_center]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/75 lg:to-white/0" />
          </div>
        </div>

        <div className="grid gap-10 px-2 py-14 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.1fr] lg:px-4">
          <div>
            <Image
              src="/brand/logo.png"
              alt="Móricz Bosch Diesel Center"
              width={600}
              height={153}
              className="h-12 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Dieseladagoló-szerviz és alkatrész. Bosch, Delphi, Denso és Stanadyne.
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

        <div className="flex flex-col gap-3 border-t border-black/10 px-2 pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between md:px-4">
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

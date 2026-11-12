"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { company, mainNav } from "@/lib/site";

export function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <Link href="/" className="shrink-0" aria-label="Kezdőlap">
          <Image
            src="/brand/moricz-logo.png"
            alt="Móricz Bosch Diesel Center, Hajdúböszörmény"
            width={1646}
            height={490}
            priority
            loading="eager"
            className="h-10 w-auto sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Főmenü">
          {mainNav.map((item) => {
            const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-1.5 py-2 text-[13px] font-semibold transition xl:px-3 xl:text-sm ${
                  active ? "text-accent" : "text-ink/75 hover:bg-black/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={company.tiktok}
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok, Móricz Kft"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-paper px-3.5 text-sm font-bold text-ink transition hover:bg-ink hover:text-white"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden="true" fill="currentColor">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
            TikTok
          </a>
          <Link
            href="/kapcsolat"
            className="hidden h-11 items-center rounded-full bg-ink px-5 text-sm font-bold text-white transition hover:bg-black sm:inline-flex"
          >
            Kapcsolat
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-paper lg:hidden"
            aria-expanded={open}
            aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-4">
              <span className={`absolute left-0 h-0.5 w-4 rounded-full bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
              <span className={`absolute top-1.5 left-0 h-0.5 w-4 rounded-full bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-4 rounded-full bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
            </span>
          </button>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="reveal" data-open={open}>
          <div className="overflow-hidden" inert={open ? undefined : true}>
            <nav className="border-t border-black/5 bg-white px-4 py-3" aria-label="Mobil menü">
              <div className="mx-auto grid max-w-6xl gap-1">
                {mainNav.map((item) => {
                  const active = item.href === "/" ? path === "/" : path.startsWith(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-2xl px-4 py-3 text-base font-bold ${active ? "bg-accent text-white" : "hover:bg-paper"}`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
                <Link href="/kapcsolat" className="rounded-2xl bg-ink px-4 py-3 text-base font-bold text-white">
                  Kapcsolat
                </Link>
                <a
                  href={company.tiktok}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl px-4 py-3 text-base font-bold hover:bg-paper"
                >
                  TikTok · Móricz Kft
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

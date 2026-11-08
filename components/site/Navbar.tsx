"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/lib/site";

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
            src="/brand/logo.png"
            alt="Móricz Bosch Diesel Center, Hajdúböszörmény"
            width={600}
            height={153}
            priority
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
                className={`rounded-full px-2.5 py-2 text-[13px] font-semibold transition xl:px-3 xl:text-sm ${
                  active ? "text-accent" : "text-ink/75 hover:bg-black/5 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/kapcsolat"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-black sm:inline-flex"
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
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

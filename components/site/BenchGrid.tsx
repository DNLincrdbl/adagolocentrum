"use client";

import Image from "next/image";
import { useState } from "react";
import { benches, type Bench } from "@/lib/benches";

export function BenchGrid() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="grid items-start gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {benches.map((bench) => (
        <BenchCard
          key={bench.image}
          bench={bench}
          open={Boolean(open[bench.image])}
          onToggle={() =>
            setOpen((current) => ({
              ...current,
              [bench.image]: !current[bench.image],
            }))
          }
        />
      ))}
    </div>
  );
}

function BenchCard({ bench, open, onToggle }: { bench: Bench; open: boolean; onToggle: () => void }) {
  const chips = bench.groups.flatMap((group) => group.types);
  const preview = chips.slice(0, 4);
  const panelId = `bench-${bench.image.split("/").pop()}`;

  return (
    <article className="flex flex-col overflow-hidden rounded-[1.75rem] bg-white shadow-[0_18px_40px_-32px_rgba(0,0,0,0.55)] ring-1 ring-black/5">
      <div className="relative h-52 bg-paper">
        <Image src={bench.image} alt={bench.name} fill className="object-contain object-center" sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="line-clamp-2 min-h-[3.5rem] text-lg leading-snug font-extrabold tracking-tight">{bench.name}</h2>
        <div className="mt-3 h-[4.75rem] overflow-hidden">
          {preview.length > 0 ? (
            <div className="flex flex-wrap gap-1.5">
              {preview.map((type, index) => (
                <span key={`${type}-${index}`} className="rounded-full bg-paper px-2.5 py-1 text-xs font-semibold">
                  {type}
                </span>
              ))}
            </div>
          ) : (
            <p className="line-clamp-3 text-sm leading-relaxed text-muted">{bench.details[0]}</p>
          )}
        </div>

        <div className="reveal" data-open={open} id={panelId}>
          <div className="overflow-hidden" inert={open ? undefined : true}>
            <div className="space-y-4 pt-4">
              {bench.groups.map((group) => (
                <div key={group.label}>
                  {group.label !== "Típusok" ? (
                    <p className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">{group.label}</p>
                  ) : null}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {group.types.map((type, index) => (
                      <span key={`${group.label}-${type}-${index}`} className="rounded-full bg-paper px-2.5 py-1 text-xs font-semibold">
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {bench.details.map((detail) => (
                <p key={detail.slice(0, 48)} className="text-sm leading-relaxed text-pretty text-muted">
                  {detail}
                </p>
              ))}
              {bench.links.length > 0 ? (
                <div className="flex flex-col gap-2">
                  {bench.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href.startsWith("http") ? link.href : encodeURI(link.href)}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-bold text-accent underline-offset-4 hover:underline"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <button
          type="button"
          className="mt-4 inline-flex items-center gap-2 self-start text-sm font-extrabold text-accent"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {open ? "Kevesebb" : "Több"}
          <span className={`inline-block transition duration-500 ${open ? "rotate-180" : ""}`} aria-hidden>
            ▾
          </span>
        </button>
      </div>
    </article>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { benches, type Bench } from "@/lib/benches";

export function BenchGrid() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
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
  const panelId = `bench-${bench.image.split("/").pop()}`;
  const [lead, ...rest] = bench.details;
  const hasMore = rest.length > 0 || bench.links.length > 0;

  return (
    <article className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_50px_-36px_rgba(0,0,0,0.55)] ring-1 ring-black/5 lg:grid-cols-2">
      <div className="relative min-h-72 bg-paper sm:min-h-80 lg:min-h-[24rem]">
        <Image
          src={bench.image}
          alt={bench.name}
          fill
          className="object-contain object-center p-6 sm:p-8"
          sizes="(min-width: 1024px) 36rem, 100vw"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">{bench.name}</h2>
        {bench.groups.length > 0 ? (
          <div className="mt-5 space-y-4">
            {bench.groups.map((group) => (
              <div key={group.label}>
                {group.label !== "Típusok" ? (
                  <p className="text-xs font-extrabold tracking-[0.16em] text-muted uppercase">{group.label}</p>
                ) : null}
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.types.map((type, index) => (
                    <span key={`${group.label}-${type}-${index}`} className="rounded-full bg-paper px-3 py-1 text-xs font-semibold">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {lead ? <p className="mt-5 text-sm leading-relaxed text-pretty text-muted">{lead}</p> : null}

        {hasMore ? (
          <div className="reveal" data-open={open} id={panelId}>
            <div className="overflow-hidden" inert={open ? undefined : true}>
              <div className="space-y-4 pt-4">
                {rest.map((detail) => (
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
        ) : null}

        {hasMore ? (
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 self-start text-sm font-extrabold text-accent"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={onToggle}
          >
            {open ? "Kevesebb" : "Több"}
            <span className={`inline-block transition duration-500 ${open ? "rotate-180" : ""}`} aria-hidden>
              ▾
            </span>
          </button>
        ) : null}
      </div>
    </article>
  );
}

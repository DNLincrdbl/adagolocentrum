"use client";

import Image from "next/image";
import { useState } from "react";
import { workshopServices, type WorkshopService } from "@/lib/workshop";

export function WorkshopGrid() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6">
      {workshopServices.map((service) => (
        <ServiceCard
          key={service.image}
          service={service}
          open={Boolean(open[service.image])}
          onToggle={() =>
            setOpen((current) => ({
              ...current,
              [service.image]: !current[service.image],
            }))
          }
        />
      ))}
    </div>
  );
}

function ServiceCard({
  service,
  open,
  onToggle,
}: {
  service: WorkshopService;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `szerviz-${service.image.split("/").pop()}`;
  const [lead, ...rest] = service.details;
  const hasMore = rest.length > 0;

  return (
    <article className="grid overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_50px_-36px_rgba(0,0,0,0.55)] ring-1 ring-black/5 lg:grid-cols-2">
      <div
        className={
          service.fit === "snug"
            ? "relative aspect-[4/5] bg-paper"
            : `relative min-h-72 bg-paper sm:min-h-80 ${service.fit === "contain" ? "lg:min-h-[36rem]" : "lg:min-h-[24rem]"}`
        }
      >
        <Image
          src={service.image}
          alt={service.name}
          fill
          className={
            service.fit === "contain"
              ? "object-contain object-center p-4 sm:p-6"
              : "object-cover object-center"
          }
          sizes="(min-width: 1024px) 36rem, 100vw"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
        <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">{service.name}</h2>
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
              </div>
            </div>
          </div>
        ) : null}

        {service.phone ? (
          <a
            href={`tel:${service.phone.tel}`}
            className="mt-5 inline-flex self-start text-sm font-bold text-accent underline-offset-4 hover:underline"
          >
            Hívjon: {service.phone.phone}
          </a>
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

"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { offers } from "@/lib/offers";

const pauseMs = 4200;
const slideMs = 700;

export function OfferStrip() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const loop = [...offers, ...offers];

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduced(media.matches);
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const id = window.setInterval(() => setIndex((value) => value + 1), pauseMs + slideMs);
    return () => window.clearInterval(id);
  }, [reduced, paused]);

  useEffect(() => {
    if (index < offers.length) return;
    const id = window.setTimeout(() => {
      setAnimate(false);
      setIndex(0);
    }, slideMs);
    return () => window.clearTimeout(id);
  }, [index]);

  useEffect(() => {
    if (animate) return;
    let second = 0;
    const first = window.requestAnimationFrame(() => {
      second = window.requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      window.cancelAnimationFrame(first);
      window.cancelAnimationFrame(second);
    };
  }, [animate]);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-8 md:px-6"
      aria-label="Ajánlatok"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <p className="text-center text-xs font-extrabold tracking-[0.2em] text-muted uppercase">Kattintson a képre a leíráshoz</p>
      {reduced ? (
        <div className="mt-5 grid grid-cols-2 gap-4">
          {offers.map((offer) => (
            <OfferCard key={offer.title} offer={offer} />
          ))}
        </div>
      ) : (
        <div className="mt-5 overflow-hidden">
          <div
            className="flex"
            style={{
              width: `${(loop.length / 2) * 100}%`,
              transform: `translateX(-${(index * 100) / loop.length}%)`,
              transition: animate ? `transform ${slideMs}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
            }}
          >
            {loop.map((offer, position) => {
              const visible = position === index || position === index + 1;
              return (
                <div key={`${offer.title}-${position}`} className="px-2" style={{ width: `${100 / loop.length}%` }}>
                  <OfferCard offer={offer} hidden={!visible} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

function OfferCard({ offer, hidden = false }: { offer: (typeof offers)[number]; hidden?: boolean }) {
  return (
    <a
      href={offer.href}
      target="_blank"
      rel="noreferrer"
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
      aria-label={`${offer.title}, ${offer.kind} megnyitása`}
      className="group block rounded-[1.5rem] bg-white p-4 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition hover:-translate-y-0.5"
    >
      <span className="relative block aspect-[16/10] overflow-hidden rounded-[1.1rem] bg-white">
        <Image src={offer.image} alt="" fill className="object-contain" sizes="(min-width: 768px) 34rem, 45vw" />
      </span>
      <span className="mt-4 flex items-center justify-between gap-3">
        <span className="font-extrabold tracking-tight">{offer.title}</span>
        <span className="text-xs font-extrabold tracking-[0.14em] text-accent uppercase">{offer.kind}</span>
      </span>
    </a>
  );
}

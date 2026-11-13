"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { offers } from "@/lib/offers";

const pauseMs = 3000;
const slideMs = 700;

export function OfferStrip() {
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [reduced, setReduced] = useState(false);
  const [paused, setPaused] = useState(false);
  const [timer, setTimer] = useState(0);
  const reversing = useRef(false);
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
  }, [reduced, paused, timer]);

  useEffect(() => {
    if (reversing.current || index < offers.length) return;
    const id = window.setTimeout(() => {
      if (reversing.current) return;
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

  function go(direction: number) {
    setTimer((value) => value + 1);
    if (direction < 0 && (index === 0 || index === offers.length)) {
      reversing.current = true;
      setAnimate(false);
      setIndex(offers.length);
      window.setTimeout(() => {
        setAnimate(true);
        setIndex(offers.length - 1);
        reversing.current = false;
      }, 32);
      return;
    }
    setIndex((value) => value + direction);
  }

  return (
    <section className="pt-3 lg:pt-4" aria-label="Ajánlatok" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="text-center text-xs font-extrabold tracking-[0.2em] text-muted uppercase">Kattintson a képre a leíráshoz</p>
      <div className="mt-3 flex items-center gap-2">
        <Arrow label="Előző kép" direction="left" onClick={() => go(-1)} />
        <div className="min-w-0 flex-1 overflow-hidden">
          <div
            className="flex"
            style={{
              width: `${(loop.length / 2) * 100}%`,
              transform: `translateX(-${(index * 100) / loop.length}%)`,
              transition: animate && !reduced ? `transform ${slideMs}ms cubic-bezier(0.22, 1, 0.36, 1)` : "none",
              willChange: "transform",
            }}
          >
            {loop.map((offer, position) => {
              const visible = position === index || position === index + 1;
              return (
                <div key={`${offer.title}-${position}`} className="px-1.5" style={{ width: `${100 / loop.length}%` }}>
                  <OfferCard offer={offer} hidden={!visible} />
                </div>
              );
            })}
          </div>
        </div>
        <Arrow label="Következő kép" direction="right" onClick={() => go(1)} />
      </div>
    </section>
  );
}

function Arrow({ label, direction, onClick }: { label: string; direction: "left" | "right"; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink shadow-[0_12px_30px_-18px_rgba(18,18,18,0.8)] ring-1 ring-black/5"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d={direction === "left" ? "M15 5 8 12l7 7" : "m9 5 7 7-7 7"} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

function OfferCard({ offer, hidden = false }: { offer: (typeof offers)[number]; hidden?: boolean }) {
  return (
    <a
      href={offer.href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
      aria-label={`${offer.title}, ${offer.kind} megnyitása`}
      className="group block rounded-[1.25rem] bg-white p-3 shadow-[0_18px_40px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/5 transition-transform duration-300 ease-out hover:-translate-y-0.5"
    >
      <span className="relative block h-28 overflow-hidden rounded-[0.9rem] bg-white sm:h-32 lg:h-36">
        <Image src={offer.image} alt="" fill className="object-contain" sizes="(min-width: 1024px) 28rem, 45vw" />
      </span>
      <span className="mt-2 flex items-center justify-between gap-3">
        <span className="text-sm font-extrabold tracking-tight">{offer.title}</span>
        <span className="text-xs font-extrabold tracking-[0.14em] text-accent uppercase">{offer.kind}</span>
      </span>
    </a>
  );
}

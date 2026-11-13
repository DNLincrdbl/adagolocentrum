"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function PhotoGrid({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value === null ? value : (value + 1) % images.length));
      if (event.key === "ArrowLeft") setActive((value) => (value === null ? value : (value - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, images.length]);

  const photo = active === null ? null : images[active];
  const step = (direction: number) => {
    setActive((value) => (value === null ? value : (value + direction + images.length) % images.length));
  };

  const dialog = photo ? (
    <div
      className="fade-in fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={() => setActive(null)}
    >
      <div className="flex w-full max-w-5xl items-center gap-2 sm:gap-4" onClick={(event) => event.stopPropagation()}>
        {images.length > 1 ? (
          <button
            type="button"
            aria-label="Előző kép"
            onClick={() => step(-1)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M15 5 8 12l7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : null}
        <figure className="min-w-0 flex-1">
          <Image src={photo} alt={alt} width={1600} height={1100} unoptimized className="max-h-[78vh] w-full rounded-[1.5rem] object-contain" />
          <figcaption className="mt-3 flex items-center justify-between text-sm text-white">
            <span>
              {active! + 1} / {images.length}
            </span>
            <button type="button" onClick={() => setActive(null)} className="rounded-full bg-white px-4 py-2 font-semibold text-ink">
              Bezárás
            </button>
          </figcaption>
        </figure>
        {images.length > 1 ? (
          <button
            type="button"
            aria-label="Következő kép"
            onClick={() => step(1)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 5 7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : null}
      </div>
    </div>
  ) : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActive(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-white ring-1 ring-black/5"
          >
            <Image src={src} alt={`${alt} ${index + 1}`} fill unoptimized className="object-cover" sizes="(min-width: 1024px) 22vw, 45vw" />
          </button>
        ))}
      </div>
      {mounted && dialog ? createPortal(dialog, document.body) : null}
    </>
  );
}

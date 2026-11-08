"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function PhotoGrid({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((value) => (value === null ? value : (value + 1) % images.length));
      if (event.key === "ArrowLeft") setActive((value) => (value === null ? value : (value - 1 + images.length) % images.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  const photo = active === null ? null : images[active];

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

      {photo ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setActive(null)}
        >
          <figure className="w-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
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
        </div>
      ) : null}
    </>
  );
}

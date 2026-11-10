"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TARGET = 3000;
const DURATION = 2100;

function easeOut(progress: number) {
  return 1 - (1 - progress) ** 3;
}

export function Loader() {
  const [value, setValue] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    let timer = 0;
    let hold = 0;

    const finish = () => {
      window.clearInterval(timer);
      setValue(TARGET);
      hold = window.setTimeout(() => setLeaving(true), reduced ? 80 : 360);
    };

    if (reduced) {
      finish();
    } else {
      const start = performance.now();
      timer = window.setInterval(() => {
        const progress = Math.min(1, (performance.now() - start) / DURATION);
        setValue(Math.round(easeOut(progress) * TARGET));
        if (progress >= 1) finish();
      }, 16);
    }

    return () => {
      window.clearInterval(timer);
      window.clearTimeout(hold);
      document.body.style.overflow = previous;
    };
  }, []);

  useEffect(() => {
    if (!leaving) return;
    const timeout = window.setTimeout(() => setGone(true), 650);
    return () => window.clearTimeout(timeout);
  }, [leaving]);

  useEffect(() => {
    if (!gone) return;
    document.body.style.overflow = "";
  }, [gone]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-white transition-opacity duration-500 ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label="Betöltés"
      onTransitionEnd={(event) => {
        if (event.target === event.currentTarget && leaving) setGone(true);
      }}
    >
      <div className="flex flex-col items-center px-6">
        <Image
          src="/brand/moricz-logo.png"
          alt="Móricz Bosch Diesel Center"
          width={1646}
          height={490}
          priority
          className="h-16 w-auto sm:h-20"
        />
        <p className="mt-10 flex items-end gap-3 text-ink">
          <span className="text-7xl font-extrabold tracking-tight tabular-nums sm:text-8xl">{value}</span>
          <span className="mb-2 text-2xl font-extrabold tracking-[0.18em] text-accent uppercase sm:mb-3 sm:text-3xl">bar</span>
        </p>
      </div>
    </div>
  );
}

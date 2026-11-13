"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const video = ref.current;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onPlaying = () => setReady(true);
    const apply = () => {
      const prefersReduced = motion.matches;
      setReduced(prefersReduced);
      if (!video) return;
      if (prefersReduced) {
        video.pause();
        setReady(false);
        return;
      }
      if (video.readyState >= 2) setReady(true);
      void video.play().catch(() => setReady(false));
    };

    apply();
    motion.addEventListener("change", apply);
    video?.addEventListener("playing", onPlaying);
    return () => {
      motion.removeEventListener("change", apply);
      video?.removeEventListener("playing", onPlaying);
    };
  }, []);

  return (
    <>
      <Image src="/media/workshop.jpg" alt="" fill priority className="object-cover" sizes="100vw" />
      <video
        ref={ref}
        className={`absolute inset-0 z-[1] h-full w-full object-cover transition-opacity duration-700 ease-out ${ready && !reduced ? "opacity-100" : "opacity-0"}`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>
    </>
  );
}

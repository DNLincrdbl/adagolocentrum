"use client";

import { useEffect, useMemo, useState } from "react";
import type { Album } from "@/lib/archive";
import { PhotoGrid } from "@/components/site/PhotoGrid";

export function GalleryGrid({ albums }: { albums: Album[] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get("album");
    const index = albums.findIndex((album) => album.id === id);
    if (index >= 0) setCurrent(index);
  }, [albums]);
  const album = albums[current] ?? albums[0];
  const images = useMemo(() => album?.images ?? [], [album]);

  return (
    <div>
      <div className="flex gap-2 overflow-x-auto pb-4">
        {albums.map((item, index) => {
          const active = index === current;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-bold transition ${
                active ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-black/5 hover:bg-paper"
              }`}
            >
              {item.title}
              <span className={`ml-2 ${active ? "text-white/60" : "text-muted"}`}>{item.images.length}</span>
            </button>
          );
        })}
      </div>
      <PhotoGrid key={album.id} images={images} alt={album.title} />
    </div>
  );
}

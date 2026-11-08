import type { Metadata } from "next";
import { GalleryGrid } from "@/components/site/GalleryGrid";
import { PageHero } from "@/components/site/PageHero";
import { albums } from "@/lib/archive";
import { gallery } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galéria",
  description: "A Móricz Bosch Diesel Center eredeti műhely-, egyesületi és gépparkfotói.",
};

const allAlbums = [
  ...albums,
  {
    id: "nagy",
    title: "Műhely, nagy felbontás",
    images: gallery.map((item) => item.src),
  },
];

export default function GalleryPage() {
  const cover = albums.find((item) => item.id === "muhely")?.images[0] ?? "/media/workshop.jpg";

  return (
    <>
      <PageHero
        eyebrow="Galéria"
        title="Nyolc album, a műhely teljes fotótára."
        lead="A kezdetek, a műhely, a dieseltechnológia, a Diesel Egyesület és a 2015-ös fejlesztések. Kattintson a képre, a nyilakkal léphet tovább."
        image={cover}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6">
        <GalleryGrid albums={allAlbums} />
      </section>
    </>
  );
}

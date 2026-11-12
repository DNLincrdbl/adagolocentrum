import type { MetadataRoute } from "next";
import { news } from "@/lib/site";

const paths = [
  "",
  "/szolgaltatasok",
  "/szerviz",
  "/dieseltechnologia",
  "/referenciak",
  "/arlista",
  "/galeria",
  "/kapcsolat",
  "/cegismerteto",
  "/minosegpolitika",
  "/munkatarsaink",
  "/ginop",
  "/technologiai-fejlesztes",
  "/hirek",
  "/tractor-pulling",
  "/kerdoiv",
  "/oldalterkep",
  "/impresszum",
  "/adatvedelem",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...paths.map((path) => ({
      url: `https://www.adagolocentrum.hu${path}`,
    })),
    ...news.map((item) => ({
      url: `https://www.adagolocentrum.hu/hirek/${item.slug}`,
    })),
  ];
}

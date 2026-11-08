"use client";

import { useState } from "react";

const items = [
  {
    q: "Csak kiszerelt adagolót vesznek át?",
    a: "Igen. Csak kiszerelt fődarabok javítását vállaljuk. Hibakód alapján telefonon segítünk beazonosítani a hibát, és elmondjuk, hogyan kell leszerelni.",
  },
  {
    q: "Mennyibe kerül a hibafelmérés?",
    a: "A szétszerelés bruttó 15 000 vagy 25 000 Ft. Technológiai okból tömítéscserénél is szét kell szedni az adagolót, mert a sérült alkatrész tönkreteheti a próbapadot.",
  },
  {
    q: "Mi történik, ha nem fogadom el az árajánlatot?",
    a: "A szétszerelés díja akkor is a megrendelőt terheli. Az adagolót szétszerelve adjuk vissza. Kérésre összeszereljük, bruttó 10 000 Ft-ért, de így nem beépíthető.",
  },
  {
    q: "Az árlista tartalmazza az alkatrészt?",
    a: "Nem. A közzétett árak 2023. május 1-jétől érvényes tájékoztató munkadíjak. A beépített alkatrész külön tétel. Elfogadott árajánlatnál a szét- és összeszerelés a javítási árban benne van.",
  },
  {
    q: "Vissza tudják küldeni az adagolót?",
    a: "Igen. A kész dieseladagolót a kért címre postázzuk, az ország egész területére.",
  },
];

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-3">
      {items.map((item, index) => {
        const expanded = open === index;
        return (
          <article key={item.q} className="overflow-hidden rounded-[1.5rem] bg-white shadow-[0_16px_40px_-28px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
              aria-expanded={expanded}
              onClick={() => setOpen(expanded ? -1 : index)}
            >
              <span className="text-base font-extrabold tracking-tight sm:text-lg">{item.q}</span>
              <span
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-full text-lg font-bold text-white transition duration-500 ${expanded ? "rotate-45 bg-ink" : "bg-accent"}`}
              >
                +
              </span>
            </button>
            <div className="reveal" data-open={expanded}>
              <div className="overflow-hidden" inert={expanded ? undefined : true}>
                <p className="px-5 pb-5 text-sm leading-relaxed text-pretty text-muted sm:px-6">{item.a}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

import type { Metadata } from "next";
import { PageHero } from "@/components/site/PageHero";
import { ginopPrograms } from "@/lib/site";

export const metadata: Metadata = {
  title: "GINOP Plusz",
  description: "GINOP Plusz-3.2.1-21 munkaviszony melletti képzések a Móricz Kft.-nél.",
};

export default function GinopPage() {
  return (
    <>
      <PageHero
        eyebrow="GINOP Plusz-3.2.1-21"
        title="Munkaviszony melletti képzés és bértámogatás."
        lead="Kedvezményezett: Móricz Ipari, Kereskedelmi és Szolgáltató Kft. A közlések a korábbi honlap szövege szerint szerepelnek."
        image="/from-site/img/adagolojavitas.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:grid-cols-2 md:px-6">
        {ginopPrograms.map((program) => (
          <article key={program.title} className="flex flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-black/5">
            <p className="text-xs font-semibold tracking-[0.16em] text-muted uppercase">GINOP Plusz-3.2.1-21</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-balance">{program.title}</h2>
            <p className="mt-4 text-3xl font-semibold tracking-tight">{program.amount}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{program.goal}</p>
            <p className="mt-5 text-sm font-semibold">{program.end}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <img
          src="/from-site/img/RRF_kedvezmenyezetti_infoblokk_keretes.svg"
          alt="GINOP Plusz kedvezményezetti információs blokk"
          className="h-auto w-full max-w-xl"
        />
      </section>
    </>
  );
}

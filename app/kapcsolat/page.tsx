import type { Metadata } from "next";
import { ContactForm } from "@/components/site/ContactForm";
import { PageHero } from "@/components/site/PageHero";
import { company } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: "Móricz Kft., 4220 Hajdúböszörmény, Polgári utca 107. Telefon, e-mail és megközelítés.",
};

const mapQuery = `${company.gps.lat},${company.gps.lng}`;
const mapSrc = `https://maps.google.com/maps?q=${mapQuery}+(Móricz+Bosch+Diesel+Center)&z=16&hl=hu&output=embed`;
const mapLink = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Kapcsolat"
        title="Polgári utca 107., a lehajtó mellett."
        lead="60 kilométerre a román és 110 kilométerre az ukrán határtól. Budapest felől másfél óra az M3-ason és az M35-ösön."
        image="/from-site/img/adagolojavitas_telephely.jpg"
      />
      <section className="mx-auto grid max-w-6xl gap-4 px-4 py-12 md:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {company.phones.map((phone) => (
            <a
              key={phone.tel}
              href={`tel:${phone.tel}`}
              className="rounded-[1.5rem] bg-white px-5 py-5 ring-1 ring-black/5 transition duration-300 hover:-translate-y-0.5"
            >
              <span className="block text-xs font-semibold tracking-[0.14em] text-muted uppercase">{phone.role}</span>
              {phone.name ? <span className="mt-2 block font-semibold">{phone.name}</span> : <span className="mt-2 block h-6" aria-hidden="true" />}
              <span className="mt-1 block text-lg font-semibold tracking-tight">{phone.phone}</span>
            </a>
          ))}
        </div>
        <div className="grid items-stretch gap-4 lg:grid-cols-2">
          <article className="flex h-full flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-black/5 md:p-9">
            <h2 className="text-2xl font-semibold tracking-tight">Székhely</h2>
            <p className="mt-4 text-sm leading-relaxed">
              {company.short}
              <br />
              {company.address}
            </p>
            <a className="mt-4 inline-flex font-semibold underline-offset-4 hover:underline" href={`mailto:${company.email}`}>
              {company.email}
            </a>
            <a className="mt-3 inline-flex font-semibold text-accent underline-offset-4 hover:underline" href={company.tiktok} target="_blank" rel="noreferrer">
              TikTok · Móricz Kft
            </a>
            <p className="mt-auto pt-8 text-sm font-semibold">
              GPS: é. sz. {company.gps.lat}°, k. h. {company.gps.lng}°
            </p>
            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex w-fit rounded-full bg-ink px-5 py-3 text-sm font-extrabold text-white"
            >
              Útvonal a Google Térképen
            </a>
          </article>
          <ContactForm className="h-full" />
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12 md:px-6">
        <div className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/5">
          <iframe
            title="Móricz Bosch Diesel Center a Google Térképen"
            src={mapSrc}
            className="h-[70vh] min-h-[28rem] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
    </>
  );
}

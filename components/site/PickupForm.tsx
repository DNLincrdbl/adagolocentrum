"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/site";

export function PickupForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function reset() {
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
    setAccepted(false);
    setError("");
    setSent(false);
  }

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2) {
      setError("Kérjük, adja meg a nevét.");
      return;
    }
    if (address.trim().length < 6) {
      setError("Kérjük, adja meg a címet.");
      return;
    }
    if (phone.replace(/\D/g, "").length < 8) {
      setError("Kérjük, adja meg a telefonszámát.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Kérjük, érvényes e-mail címet adjon meg.");
      return;
    }
    if (!accepted) {
      setError("A rendeléshez az adatkezelési tájékoztató elfogadása szükséges.");
      return;
    }

    const body = `Név: ${name}\nCím: ${address}\nTelefon: ${phone}\nE-mail: ${email}\n\nCsomagfelvételt kérek.`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Csomagfelvétel – ${name}`)}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] bg-ink p-7 text-white sm:p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Csomagfelvétel</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Megnyitottuk az e-mail programot.</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Ha nem jelent meg, írjon közvetlenül a{" "}
          <a className="underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          címre, vagy hívjon minket.
        </p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink">
          Új rendelés
        </button>
      </div>
    );
  }

  return (
    <form id="csomagfelvetel" onSubmit={submit} className="scroll-mt-28 rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 sm:p-8">
      <h2 className="text-2xl font-semibold tracking-tight">Csomagfelvétel</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Field label="Név" value={name} onChange={setName} autoComplete="name" required />
        <Field label="Cím" value={address} onChange={setAddress} autoComplete="street-address" required />
        <Field label="Telefonszám" value={phone} onChange={setPhone} type="tel" autoComplete="tel" required />
        <Field label="Email" value={email} onChange={setEmail} type="email" autoComplete="email" required />
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted md:col-span-2">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => setAccepted(event.target.checked)}
            className="mt-1 h-4 w-4 accent-black"
          />
          <span>
            Az{" "}
            <Link href="/adatvedelem" className="font-semibold text-ink underline-offset-4 hover:underline">
              adatkezelési tájékoztatóban
            </Link>{" "}
            foglaltakat megismertem.
          </span>
        </label>
        {error ? <p className="text-sm font-medium text-red-700 md:col-span-2">{error}</p> : null}
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <button type="submit" className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white">
            Csomagfelvétel kérése
          </button>
          <button type="button" onClick={reset} className="rounded-full bg-paper px-5 py-3 text-sm font-semibold">
            Az adatok törlése
          </button>
        </div>
      </div>
    </form>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  autoComplete,
  required,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-full border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
      />
    </label>
  );
}

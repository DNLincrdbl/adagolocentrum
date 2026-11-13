"use client";

import Link from "next/link";
import { useState } from "react";
import { FormErrorMessage, Honeypot, useFormSender } from "@/components/site/form-send";

export function PickupForm() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { sending, sent, error, setError, send, restart } = useFormSender("/api/csomagfelvetel");

  function clear() {
    setName("");
    setAddress("");
    setPhone("");
    setEmail("");
    setAccepted(false);
  }

  function reset() {
    clear();
    restart();
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
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

    if (await send(event.currentTarget)) clear();
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] bg-ink p-7 text-white sm:p-8">
        <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Csomagfelvétel</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Köszönjük, kérését megkaptuk.</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Kollégánk hamarosan felveszi Önnel a kapcsolatot a csomagfelvétel egyeztetéséhez.
        </p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink">
          Új rendelés
        </button>
      </div>
    );
  }

  return (
    <form
      id="csomagfelvetel"
      method="post"
      action="/api/csomagfelvetel"
      onSubmit={submit}
      className="relative scroll-mt-28 rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 sm:p-8"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Csomagfelvétel</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Honeypot />
        <Field label="Név" name="name" value={name} onChange={setName} autoComplete="name" maxLength={100} required />
        <Field label="Cím" name="address" value={address} onChange={setAddress} autoComplete="street-address" maxLength={200} required />
        <Field label="Telefonszám" name="phone" value={phone} onChange={setPhone} type="tel" autoComplete="tel" maxLength={40} required />
        <Field label="Email" name="email" value={email} onChange={setEmail} type="email" autoComplete="email" maxLength={254} required />
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted md:col-span-2">
          <input
            type="checkbox"
            name="privacy"
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
        {error ? <FormErrorMessage message={error} className="md:col-span-2" /> : null}
        <div className="flex flex-wrap gap-3 md:col-span-2">
          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white disabled:cursor-wait disabled:opacity-60"
          >
            {sending ? "Küldés folyamatban…" : "Csomagfelvétel kérése"}
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
  name,
  value,
  onChange,
  type = "text",
  autoComplete,
  maxLength,
  required,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        maxLength={maxLength}
        required={required}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-full border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
      />
    </label>
  );
}

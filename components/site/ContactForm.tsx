"use client";

import Link from "next/link";
import { useState } from "react";
import { company } from "@/lib/site";

export function ContactForm({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function reset() {
    setName("");
    setEmail("");
    setMessage("");
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
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Kérjük, érvényes e-mail címet adjon meg.");
      return;
    }
    if (message.trim().length < 8) {
      setError("Írja le röviden a kérését.");
      return;
    }
    if (!accepted) {
      setError("Az üzenet küldéséhez az adatkezelési tájékoztató elfogadása szükséges.");
      return;
    }

    const body = `Név: ${name}\nE-mail: ${email}\n\n${message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(`Kapcsolatfelvétel – ${name}`)}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className={`rounded-[1.75rem] bg-ink p-7 text-white sm:p-8 ${className}`}>
        <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Üzenet</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Megnyitottuk az e-mail programot.</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">
          Ha nem jelent meg, írjon közvetlenül a{" "}
          <a className="underline" href={`mailto:${company.email}`}>
            {company.email}
          </a>{" "}
          címre, vagy hívjon minket.
        </p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink">
          Új üzenet
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className={`rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 sm:p-8 ${className}`}>
      <h2 className="text-2xl font-semibold tracking-tight">Kapcsolatfelvétel</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Ha bővebb információt szeretne a szolgáltatásokról, töltse ki az űrlapot. Az elküldés a saját levelezőprogramját nyitja meg.
      </p>
      <div className="mt-6 grid gap-4">
        <Field label="Név" value={name} onChange={setName} autoComplete="name" />
        <Field label="Email" value={email} onChange={setEmail} type="email" autoComplete="email" />
        <label className="block">
          <span className="text-sm font-semibold">Kérés</span>
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            className="mt-2 w-full resize-y rounded-3xl border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
          />
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
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
        {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
        <div className="flex flex-wrap gap-3">
          <button type="submit" className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white">
            Az üzenet elküldése
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
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-full border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
      />
    </label>
  );
}

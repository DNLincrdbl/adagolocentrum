"use client";

import Link from "next/link";
import { useState } from "react";
import { FormErrorMessage, Honeypot, useFormSender } from "@/components/site/form-send";

export function ContactForm({ className = "" }: { className?: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { sending, sent, error, setError, send, restart } = useFormSender("/api/kapcsolat");

  function clear() {
    setName("");
    setEmail("");
    setMessage("");
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

    if (await send(event.currentTarget)) clear();
  }

  if (sent) {
    return (
      <div className={`rounded-[1.75rem] bg-ink p-7 text-white sm:p-8 ${className}`}>
        <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Üzenet</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Köszönjük, üzenetét megkaptuk.</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">Kollégánk hamarosan válaszol a megadott e-mail címre.</p>
        <button type="button" onClick={reset} className="mt-6 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink">
          Új üzenet
        </button>
      </div>
    );
  }

  return (
    <form
      method="post"
      action="/api/kapcsolat"
      onSubmit={submit}
      className={`relative rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 sm:p-8 ${className}`}
    >
      <h2 className="text-2xl font-semibold tracking-tight">Kapcsolatfelvétel</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        Ha bővebb információt szeretne a szolgáltatásokról, töltse ki az űrlapot.
      </p>
      <div className="mt-6 grid gap-4">
        <Honeypot />
        <Field label="Név" name="name" value={name} onChange={setName} autoComplete="name" maxLength={100} />
        <Field label="Email" name="email" value={email} onChange={setEmail} type="email" autoComplete="email" maxLength={254} />
        <label className="block">
          <span className="text-sm font-semibold">Kérés</span>
          <textarea
            name="message"
            maxLength={5000}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            className="mt-2 w-full resize-y rounded-3xl border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
          />
        </label>
        <label className="flex items-start gap-3 text-sm leading-relaxed text-muted">
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
        {error ? <FormErrorMessage message={error} /> : null}
        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={sending}
            className="rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white disabled:cursor-wait disabled:opacity-60"
          >
            {sending ? "Küldés folyamatban…" : "Az üzenet elküldése"}
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
}: {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
  maxLength?: number;
}) {
  return (
    <label className="block">
      <span className="text-sm font-semibold">{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        maxLength={maxLength}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-full border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
      />
    </label>
  );
}

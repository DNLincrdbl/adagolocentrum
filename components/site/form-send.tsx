"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "@/lib/site";

const SEND_FAILED = "Az üzenetet most nem sikerült elküldeni.";
const TOO_MANY = "Túl sok próbálkozás, kérjük, próbálja újra később.";

export function useFormSender(endpoint: string) {
  const startedAt = useRef(0);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function send(form: HTMLFormElement) {
    const data = new FormData(form);
    data.set("startedAt", String(startedAt.current));
    data.set("submittedAt", String(Date.now()));
    setSending(true);
    setError("");
    try {
      const response = await fetch(endpoint, { method: "POST", body: data });
      if (response.ok) {
        setSent(true);
        return true;
      }
      if (response.status === 429) {
        setError(TOO_MANY);
      } else {
        const body = (await response.json().catch(() => null)) as { error?: string } | null;
        setError(response.status === 400 && body?.error ? body.error : SEND_FAILED);
      }
    } catch {
      setError(SEND_FAILED);
    } finally {
      setSending(false);
    }
    return false;
  }

  function restart() {
    startedAt.current = Date.now();
    setSent(false);
    setError("");
  }

  return { sending, sent, error, setError, send, restart };
}

export function Honeypot() {
  return (
    <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
      <label>
        Weboldal
        <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}

export function FormErrorMessage({ message, className = "" }: { message: string; className?: string }) {
  const phone = company.phones[0];
  return (
    <div role="alert" className={`text-sm leading-relaxed text-red-700 ${className}`}>
      <p className="font-medium">{message}</p>
      <p className="mt-1">
        Ha nem sikerül, hívjon minket:{" "}
        <a className="font-semibold underline" href={`tel:${phone.tel}`}>
          {phone.phone}
        </a>
        , vagy írjon az{" "}
        <a className="font-semibold underline" href={`mailto:${company.email}`}>
          {company.email}
        </a>{" "}
        címre.
      </p>
    </div>
  );
}

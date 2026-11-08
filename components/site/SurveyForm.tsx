"use client";

import { useState } from "react";
import { company, ratingLabels, surveyQuestions } from "@/lib/site";

export function SurveyForm() {
  const questions = surveyQuestions.flatMap((group) => group.items);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [scores, setScores] = useState<Record<string, number>>({});
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (name.trim().length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("A név és egy érvényes e-mail cím megadása szükséges.");
      return;
    }
    if (questions.some((question) => !scores[question])) {
      setError("Kérjük, minden kérdést értékeljen 1-től 4-ig.");
      return;
    }

    const lines = questions.map((question) => `${question} ${scores[question]} (${ratingLabels[scores[question] - 1]})`);
    const body = [`Név: ${name}`, `E-mail: ${email}`, "", ...lines, "", note].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent("Vevőelégedettségi kérdőív")}&body=${encodeURIComponent(body)}`;
    setError("");
    setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-[1.75rem] bg-ink px-6 py-10 text-white">
        <h2 className="text-3xl font-semibold tracking-tight">Köszönjük a visszajelzést.</h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/75">
          Az értékelés az e-mail programjába került. Ha az ablak nem nyílt meg, küldje el kézzel az {company.email} címre.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <div className="grid gap-4 rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5 md:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold">Név</span>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="mt-2 w-full rounded-full border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">Email</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-full border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
          />
        </label>
      </div>

      {surveyQuestions.map((group) => (
        <section key={group.group} className="rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5">
          <h2 className="text-xl font-semibold tracking-tight">{group.group}</h2>
          <div className="mt-5 space-y-5">
            {group.items.map((question) => (
              <fieldset key={question}>
                <legend className="text-sm leading-relaxed">{question}</legend>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {ratingLabels.map((label, index) => {
                    const value = index + 1;
                    const selected = scores[question] === value;
                    return (
                      <label
                        key={label}
                        className={`cursor-pointer rounded-2xl px-3 py-3 text-center text-sm transition ${
                          selected ? "bg-ink text-white" : "bg-paper hover:bg-black/5"
                        }`}
                      >
                        <input
                          type="radio"
                          className="sr-only"
                          name={question}
                          checked={selected}
                          onChange={() => setScores((current) => ({ ...current, [question]: value }))}
                        />
                        <span className="block text-base font-semibold">{value}</span>
                        <span className={`mt-1 block text-xs ${selected ? "text-white/70" : "text-muted"}`}>{label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </div>
        </section>
      ))}

      <label className="block rounded-[1.75rem] bg-white p-6 ring-1 ring-black/5">
        <span className="text-sm font-semibold">Megjegyzés</span>
        <textarea
          value={note}
          onChange={(event) => setNote(event.target.value)}
          rows={4}
          className="mt-2 w-full resize-y rounded-3xl border border-black/10 bg-paper px-4 py-3 outline-none ring-ink/15 focus:ring-4"
        />
      </label>

      {error ? <p className="text-sm font-medium text-red-700">{error}</p> : null}
      <button type="submit" className="rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white">
        Kérdőív elküldése
      </button>
    </form>
  );
}

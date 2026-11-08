"use client";

import { useMemo, useState } from "react";
import { references, type Country } from "@/lib/catalog";

const filters: { id: "all" | Country; label: string }[] = [
  { id: "all", label: "Mind" },
  { id: "HU", label: "Magyarország" },
  { id: "SK", label: "Szlovákia" },
  { id: "RO", label: "Románia" },
];

export function ReferenceList() {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<(typeof filters)[number]["id"]>("all");
  const needle = query.trim().toLocaleLowerCase("hu");

  const items = useMemo(
    () =>
      references.filter((item) => {
        const matchesCountry = country === "all" || item.country === country;
        const haystack = `${item.name} ${item.city}`.toLocaleLowerCase("hu");
        return matchesCountry && haystack.includes(needle);
      }),
    [country, needle],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              onClick={() => setCountry(filter.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                country === filter.id ? "bg-ink text-white" : "bg-white text-ink ring-1 ring-black/10 hover:bg-black/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Cég vagy város"
          className="w-full rounded-full border border-black/10 bg-white px-5 py-3 text-sm outline-none ring-ink/20 focus:ring-4 md:max-w-xs"
        />
      </div>

      <p className="mt-5 text-sm text-muted">{items.length} partner</p>

      <div className="mt-4 overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/5">
        <ul>
          {items.map((item) => (
            <li
              key={`${item.name}-${item.city}`}
              className="grid gap-1 border-b border-black/5 px-5 py-4 last:border-b-0 sm:grid-cols-[1fr_auto_auto] sm:items-center sm:gap-6 sm:px-7"
            >
              <span className="font-semibold">{item.name}</span>
              <span className="text-sm text-muted">{item.city}</span>
              <span className="text-sm font-medium tabular-nums">{item.since}</span>
            </li>
          ))}
        </ul>
        {items.length === 0 ? <p className="px-6 py-10 text-center text-muted">Nincs találat.</p> : null}
      </div>
    </div>
  );
}

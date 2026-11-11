"use client";

import { useMemo, useState } from "react";
import { priceGroups } from "@/lib/catalog";

export function PriceList() {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLocaleLowerCase("hu");

  const groups = useMemo(
    () =>
      priceGroups
        .map((group) => ({
          ...group,
          rows: group.rows.filter((row) => row.type.toLocaleLowerCase("hu").includes(needle)),
        }))
        .filter((group) => group.rows.length > 0),
    [needle],
  );

  return (
    <div>
      <label className="block">
        <span className="text-sm font-semibold">Keresés az árlistában</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Például CP4, Stanadyne, porlasztó"
          className="mt-2 w-full rounded-full border border-black/10 bg-white px-5 py-3.5 text-base outline-none ring-ink/20 transition focus:ring-4"
        />
      </label>

      <div className="mt-8 space-y-8">
        {groups.map((group) => (
          <section key={group.id} className="overflow-hidden rounded-[1.75rem] bg-white ring-1 ring-black/5">
            <div className="border-b border-black/5 px-5 py-5 sm:px-7">
              <h2 className="text-2xl font-semibold tracking-tight">{group.title}</h2>
              <p className="mt-1 text-sm text-muted">
                Kapcsolattartó: {group.contact} ·{" "}
                <a className="font-semibold text-ink underline-offset-4 hover:underline" href={`tel:${group.tel}`}>
                  {group.phone}
                </a>
              </p>
              <p className="mt-4 text-center text-lg font-extrabold tracking-tight text-ink">Csak munkadíj</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="text-xs tracking-[0.14em] text-muted uppercase">
                  <tr>
                    <th className="px-5 py-3 font-semibold sm:px-7">Adagolótípus</th>
                    <th className="px-4 py-3 font-semibold">Nettó</th>
                    <th className="px-5 py-3 font-semibold sm:px-7">Bruttó</th>
                  </tr>
                </thead>
                <tbody>
                  {group.rows.map((row) => (
                    <tr key={row.type} className="border-t border-black/5">
                      <td className="px-5 py-3.5 font-medium sm:px-7">{row.type}</td>
                      <td className="px-4 py-3.5 text-muted">{row.net}</td>
                      <td className="px-5 py-3.5 font-semibold sm:px-7">{row.gross}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}
        {groups.length === 0 ? (
          <p className="rounded-[1.75rem] bg-white px-6 py-10 text-center text-muted ring-1 ring-black/5">
            Nincs találat erre a kifejezésre.
          </p>
        ) : null}
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-4 py-16">
      <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">404</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight">Ez az oldal nincs a műhelyben.</h1>
      <p className="mt-4 text-muted">A keresett cím nem található. A kezdőlapról minden szolgáltatás elérhető.</p>
      <Link href="/" className="mt-8 w-fit rounded-full bg-accent px-5 py-3 text-sm font-extrabold text-white">
        Vissza a kezdőlapra
      </Link>
    </section>
  );
}

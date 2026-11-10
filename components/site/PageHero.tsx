import Image from "next/image";

export function PageHero({
  eyebrow,
  title,
  lead,
  image = "/media/workshop.jpg",
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image?: string;
}) {
  return (
    <section className="px-4 pt-6 md:px-6">
      <div className="relative mx-auto min-h-[26rem] max-w-6xl overflow-hidden rounded-[2rem] bg-ink">
        <Image src={image} alt="" fill priority quality={90} className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
        <div className="relative z-10 flex min-h-[26rem] flex-col justify-end p-7 sm:p-10 md:p-14">
          <p className="text-xs font-extrabold tracking-[0.22em] text-accent-bright uppercase">{eyebrow}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lead ? <p className="mt-4 max-w-xl text-base leading-relaxed text-pretty text-white/80 md:text-lg">{lead}</p> : null}
        </div>
      </div>
    </section>
  );
}

import { about, site } from "@/lib/content";

export default function About() {
  return (
    <section id="nosotros" className="relative bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              Quiénes somos
            </span>
            <h2 className="font-display balance mt-4 text-4xl font-light leading-[1.1] text-navy-950 sm:text-5xl">
              Asesoría jurídica cercana, en {site.cities.join(" y ")}.
            </h2>
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-base leading-relaxed text-slate-600">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-4">
            <div className="grid gap-px overflow-hidden rounded-3xl bg-hairline sm:grid-cols-3">
              {about.pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex flex-col bg-paper p-8 transition-colors hover:bg-white"
                >
                  <h3 className="font-display text-xl font-medium text-navy-950">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {pillar.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { practiceAreas, site, whatsappHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-20"
    >
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gold-500/20 blur-[140px]" />
        <div className="absolute bottom-[-15%] right-[-10%] h-[28rem] w-[28rem] rounded-full bg-navy-600/40 blur-[120px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-950 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="reveal is-visible mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
            Despacho jurídico &middot; {site.cities.join(" y ")}
          </p>

          <h1 className="reveal is-visible font-display balance text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Servicios legales con{" "}
            <span className="italic text-gold-300">enfoque humano.</span>
          </h1>

          <p
            className="reveal is-visible mt-8 max-w-xl text-lg leading-relaxed text-white/70 sm:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            {site.tagline}
          </p>

          <div
            className="reveal is-visible mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "220ms" }}
          >
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold-500 px-7 py-3.5 text-center text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_12px_32px_-8px_rgba(198,161,95,0.55)]"
            >
              Solicita una consulta
            </a>
            <a
              href="#servicios"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center text-sm font-semibold text-white transition-all hover:border-white/50 hover:bg-white/5"
            >
              Conoce nuestras áreas
            </a>
          </div>

          <div
            className="reveal is-visible mt-16 flex flex-wrap gap-x-8 gap-y-3"
            style={{ animationDelay: "320ms" }}
          >
            {practiceAreas.map((area) => (
              <span
                key={area.slug}
                className="text-xs font-medium uppercase tracking-[0.15em] text-white/40"
              >
                {area.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#nosotros"
        aria-label="Desplázate para conocer más"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-white sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">Desliza</span>
        <span className="h-9 w-px animate-pulse bg-gradient-to-b from-white/60 to-transparent" />
      </a>
    </section>
  );
}

import { whatsappHref } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

export default function CtaBanner() {
  return (
    <section className="bg-cream px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-navy-950 px-8 py-16 sm:px-16 sm:py-20">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-[100px]" />
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-navy-600/40 blur-[100px]" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="font-display balance max-w-xl text-3xl font-light leading-[1.15] text-white sm:text-4xl lg:text-5xl">
              ¿Necesita apoyo legal? Conversemos.
            </h2>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 whitespace-nowrap rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_12px_32px_-8px_rgba(198,161,95,0.6)]"
            >
              Contáctanos
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

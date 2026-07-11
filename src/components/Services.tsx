"use client";

import { useState } from "react";
import { lawyerServices, practiceAreas } from "@/lib/content";
import {
  BriefcaseIcon,
  BuildingIcon,
  CheckIcon,
  FamilyIcon,
  PlusIcon,
  ScaleIcon,
} from "./icons";

const icons = [BriefcaseIcon, ScaleIcon, FamilyIcon, BuildingIcon];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="servicios" className="relative bg-navy-950 py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[-8%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-gold-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            Áreas de práctica
          </span>
          <h2 className="font-display balance mt-4 text-4xl font-light leading-[1.1] text-white sm:text-5xl">
            Soluciones legales para cada necesidad.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            En Alteza Legal ofrecemos soluciones viables de acuerdo a sus
            necesidades, con atención directa y profesional en cada caso.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-2 lg:gap-6">
          {practiceAreas.map((area, i) => {
            const Icon = icons[i];
            const open = openIndex === i;
            return (
              <div
                key={area.slug}
                className={`overflow-hidden rounded-3xl border transition-colors ${
                  open
                    ? "border-gold-400/30 bg-white/[0.06]"
                    : "border-white/10 bg-white/[0.02] hover:bg-white/[0.04]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-start gap-5 p-7 text-left sm:p-8"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gold-500/10 text-gold-300">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="flex items-center justify-between gap-4">
                      <span className="font-display text-xl font-medium text-white sm:text-2xl">
                        {area.name}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 transition-transform duration-300 ${
                          open ? "rotate-45 border-gold-400/40 text-gold-300" : ""
                        }`}
                      >
                        <PlusIcon className="h-4 w-4" />
                      </span>
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-white/55">
                      {area.summary}
                    </span>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <ul className="flex flex-col gap-3 px-7 pb-8 sm:px-8">
                      {area.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex flex-col gap-5 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h3 className="font-display text-xl font-medium text-white">
              {lawyerServices.title}
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/55">
              {lawyerServices.summary}
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            {lawyerServices.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

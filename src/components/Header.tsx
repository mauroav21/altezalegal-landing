"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappHref } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-navy-950/85 backdrop-blur-xl shadow-[0_1px_0_0_rgba(198,161,95,0.15)]"
          : "bg-gradient-to-b from-navy-950/60 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="#inicio" className="relative z-10 flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/logo-original.png"
            alt="Alteza Legal"
            width={171}
            height={60}
            priority
            fetchPriority="high"
            className="h-9 w-auto brightness-0 invert md:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium tracking-wide text-white/80 transition-colors hover:text-white"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-950 transition-all hover:bg-gold-400 hover:shadow-[0_8px_24px_-8px_rgba(198,161,95,0.6)]"
          >
            Contáctanos
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-white transition-all duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden ${open ? "max-h-[28rem]" : "max-h-0"} overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
      >
        <div className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-medium text-white/90"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${site.phoneHref}`}
            className="py-4 text-lg font-medium text-white/90"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-semibold text-navy-950"
          >
            Contáctanos por WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

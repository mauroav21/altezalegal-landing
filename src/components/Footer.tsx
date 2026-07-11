import Image from "next/image";
import { navLinks, site } from "@/lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Image
              src="/logo-original.png"
              alt="Alteza Legal"
              width={171}
              height={60}
              className="h-9 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {site.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <SocialLink href={site.social.facebook} label="Facebook">
                <path d="M13.5 9H15V6.5h-1.75C11.6 6.5 10.5 7.7 10.5 9.5V11H9v2.5h1.5V19H13v-5.5h1.75L15.25 11H13V9.75c0-.5.25-.75.5-.75Z" />
              </SocialLink>
              <SocialLink href={site.social.instagram} label="Instagram">
                <rect x="4.5" y="4.5" width="15" height="15" rx="4" />
                <circle cx="12" cy="12" r="3.3" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <circle cx="16.2" cy="7.8" r="0.9" />
              </SocialLink>
            </div>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Navegación
            </span>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Contacto
            </span>
            <a href={`tel:${site.phoneHref}`} className="text-sm text-white/70 hover:text-white">
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="text-sm text-white/70 hover:text-white">
              {site.email}
            </a>
            <p className="text-sm text-white/70">
              {site.address.line1}, {site.address.line2}
              <br />
              {site.address.city}, {site.address.zip}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. Todos los derechos reservados.
          </p>
          <a href="#" className="hover:text-white/70">
            Aviso de privacidad
          </a>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-gold-400/40 hover:text-gold-300"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4.5 w-4.5">
        {children}
      </svg>
    </a>
  );
}

import { site } from "@/lib/content";
import ContactForm from "./ContactForm";
import { MailIcon, PhoneIcon, PinIcon } from "./icons";

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.line2}, ${site.address.city}, ${site.address.zip}`
);

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-cream py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
            Contacto
          </span>
          <h2 className="font-display balance mt-4 text-4xl font-light leading-[1.1] text-navy-950 sm:text-5xl">
            Hablemos de tu caso.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Escríbenos y con gusto te atenderemos de manera directa y
            personalizada.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="flex flex-col gap-6 rounded-3xl border border-hairline bg-paper p-8">
              <ContactRow icon={PhoneIcon} label="Teléfono y WhatsApp">
                <a href={`tel:${site.phoneHref}`} className="hover:text-gold-600">
                  {site.phoneDisplay}
                </a>
              </ContactRow>
              <ContactRow icon={MailIcon} label="Correo electrónico">
                <a href={`mailto:${site.email}`} className="hover:text-gold-600">
                  {site.email}
                </a>
              </ContactRow>
              <ContactRow icon={PinIcon} label="Dirección">
                <span>
                  {site.address.line1}, {site.address.line2}
                  <br />
                  {site.address.city}, {site.address.zip}
                </span>
              </ContactRow>
            </div>

            <div className="h-64 overflow-hidden rounded-3xl border border-hairline">
              <iframe
                title="Ubicación de Alteza Legal"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                className="h-full w-full grayscale-[20%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-3xl border border-hairline bg-paper p-8 lg:col-span-7 sm:p-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  children,
}: {
  icon: (props: { className?: string }) => React.ReactElement;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-950/5 text-navy-800">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-base text-ink">{children}</p>
      </div>
    </div>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/content";
import { ArrowRightIcon } from "./icons";

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", message: "" });

  function update(field: keyof typeof values) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((v) => ({ ...v, [field]: e.target.value }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const lines = [
      `Hola, soy ${values.name || "un cliente potencial"}.`,
      values.message || "Me gustaría solicitar información sobre sus servicios legales.",
      values.email ? `Mi correo: ${values.email}` : null,
      values.phone ? `Mi teléfono: ${values.phone}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${site.phoneHref.replace("+", "")}?text=${text}`, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name">
          <input
            id="name"
            required
            value={values.name}
            onChange={update("name")}
            placeholder="Tu nombre completo"
            className={inputClass}
          />
        </Field>
        <Field label="Teléfono" htmlFor="phone">
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={update("phone")}
            placeholder="Tu teléfono"
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Correo electrónico" htmlFor="email">
        <input
          id="email"
          type="email"
          required
          value={values.email}
          onChange={update("email")}
          placeholder="tu@correo.com"
          className={inputClass}
        />
      </Field>

      <Field label="Mensaje" htmlFor="message">
        <textarea
          id="message"
          rows={4}
          required
          value={values.message}
          onChange={update("message")}
          placeholder="¿En qué podemos ayudarte?"
          className={`${inputClass} resize-none`}
        />
      </Field>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-navy-950 px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-navy-800"
      >
        Enviar por WhatsApp
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="text-xs leading-relaxed text-slate-500">
        Al enviar, se abrirá WhatsApp con tu mensaje listo para confirmar. ¿Prefieres
        correo? Escríbenos a{" "}
        <a href={`mailto:${site.email}`} className="font-medium text-navy-800 underline underline-offset-2">
          {site.email}
        </a>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-xl border border-hairline bg-paper px-4 py-3 text-sm text-ink placeholder:text-slate-400 outline-none transition-colors focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </label>
      {children}
    </div>
  );
}

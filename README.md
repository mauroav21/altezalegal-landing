# Alteza Legal — Landing

Landing page de [Alteza Legal](https://altezalegal.com), despacho jurídico
especializado en Derecho Laboral, Civil, Familiar y Administrativo en
Saltillo, Coahuila y Monterrey, Nuevo León.

Rediseño construido con Next.js (App Router), TypeScript y Tailwind CSS v4,
con una dirección visual minimalista inspirada en Apple/Google: tipografía
serif (Fraunces) + sans (Inter), paleta navy/dorado, mucho espacio en
blanco y microinteracciones sutiles.

## Stack

- [Next.js](https://nextjs.org) 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- pnpm

## Desarrollo

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Build de producción

```bash
pnpm build
pnpm start
```

## Estructura

- `src/app` — layout, página principal y metadata (SEO, sitemap, robots).
- `src/components` — secciones de la landing (Header, Hero, About, Services,
  CtaBanner, Contact, Footer, WhatsAppButton).
- `src/lib/content.ts` — contenido del sitio (áreas de práctica, datos de
  contacto) centralizado en un solo lugar.

El formulario de contacto arma el mensaje y lo envía por WhatsApp al número
del despacho; no requiere backend ni credenciales adicionales.

## Deploy

Listo para desplegar en [Vercel](https://vercel.com/new) — solo importa el
repositorio, Vercel detecta Next.js y pnpm automáticamente.

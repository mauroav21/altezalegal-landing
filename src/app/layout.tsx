import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal"],
  weight: ["300", "500"],
});

const frauncesItalic = Fraunces({
  variable: "--font-fraunces-italic",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://altezalegal.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alteza Legal | Despacho de Abogados en Saltillo y Monterrey",
    template: "%s | Alteza Legal",
  },
  description:
    "Alteza Legal es un despacho jurídico especializado en Derecho Laboral, Civil, Familiar y Administrativo en Saltillo, Coahuila y Monterrey, Nuevo León. Asesoría de alta calidad y atención directa a cada cliente.",
  keywords: [
    "abogados Saltillo",
    "abogados Monterrey",
    "despacho jurídico",
    "derecho laboral",
    "derecho civil",
    "derecho familiar",
    "derecho administrativo",
    "Alteza Legal",
  ],
  authors: [{ name: "Alteza Legal" }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: "Alteza Legal",
    title: "Alteza Legal | Despacho de Abogados en Saltillo y Monterrey",
    description:
      "Asesoría jurídica de alta calidad en Derecho Laboral, Civil, Familiar y Administrativo. Atención directa y personalizada en Saltillo y Monterrey.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alteza Legal | Despacho de Abogados en Saltillo y Monterrey",
    description:
      "Asesoría jurídica de alta calidad en Derecho Laboral, Civil, Familiar y Administrativo.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${frauncesItalic.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        {children}
      </body>
    </html>
  );
}

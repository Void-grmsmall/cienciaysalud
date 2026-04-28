import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CIENCIA Y SALUD - Laboratorio Clínico | Rímac, Lima",
  description:
    "Más de mil exámenes a precios cómodos. Recojo de muestras a domicilio 24/7. Resultados en 48 horas. Ubicados en Rímac, Lima. WhatsApp: 931906392.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

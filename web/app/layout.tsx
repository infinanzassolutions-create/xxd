import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700", "800"], variable: "--font-inter" });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-merriweather" });

export const metadata: Metadata = {
  title: "Financore Solutions | Capital inteligente, crecimiento estratégico",
  description:
    "Estructuración empresarial, financiación y crédito, planificación financiera, cumplimiento normativo y mentoría. Acompañamiento real, en español.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${merriweather.variable}`}>
      <body>{children}</body>
    </html>
  );
}

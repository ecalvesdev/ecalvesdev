import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SmoothScroll } from "@/components/SmoothScroll";
import { PageBackground } from "@/components/PageBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { site } from "@/content/site";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecalves.dev"),
  title: {
    default: `${site.name} · Engenharia de Software`,
    template: `%s · ${site.brand}`,
  },
  description:
    "Engenharia de software, desenvolvimento full-stack, automação de processos e soluções com inteligência artificial.",
  openGraph: {
    title: `${site.name} · ${site.brand}`,
    description:
      "Desenvolvimento de sistemas, automação de processos e soluções inteligentes.",
    locale: "pt_BR",
    type: "website",
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
      lang="pt-BR"
      className={`${display.variable} ${GeistSans.variable} ${GeistMono.variable} h-full`}
    >
      <body className="min-h-full bg-void font-sans text-ink antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-[var(--radius-sm)] focus:bg-violet focus:px-3 focus:py-2 focus:text-white"
        >
          Ir para o conteúdo
        </a>
        <SmoothScroll />
        <PageBackground />
        <ScrollProgress />
        <Header />
        <main id="conteudo" className="relative z-10">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}

import { SplitText } from "@/components/SplitText";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/Reveal";
import { SocialLinks } from "@/components/SocialLinks";
import { contact, site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com Elias Castro sobre engenharia de software, automação e soluções com IA. Redirecionamento para WhatsApp.",
  openGraph: {
    title: `Contato · ${site.brand}`,
    description: contact.subtitle,
  },
};

export default function ContatoPage() {
  return (
    <div className="relative overflow-hidden pt-24 md:pt-28">
      <div className="atmosphere" aria-hidden />
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-spot absolute left-1/4 top-28 h-72 w-72" />
        <div className="glow-spot absolute -right-16 bottom-20 h-80 w-80 opacity-60" />
      </div>

      <section className="section relative">
        <div className="container-site relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal className="space-y-6">
            <h1 className="text-hero text-ink">
              <SplitText parts={contact.title} />
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted md:text-lg">
              {contact.subtitle}
            </p>
            <div className="space-y-4 border-t border-[var(--border-subtle)] pt-6">
              <p className="text-sm text-muted">{site.whatsappDisplay}</p>
              <SocialLinks detailedWhatsAppLabel />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}

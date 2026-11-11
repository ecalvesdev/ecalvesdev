import { site } from "@/content/site";

export function buildWhatsAppUrl(name: string, message: string): string {
  const cleanName = name.trim().replace(/\s+/g, " ");
  const cleanMessage = message.trim();
  const text = [
    `Olá, Elias. Meu nome é ${cleanName}.`,
    "",
    cleanMessage,
  ].join("\n");

  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(text)}`;
}

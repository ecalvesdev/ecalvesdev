"use client";

import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export function WhatsAppFab() {
  const pathname = usePathname();
  if (pathname === "/contato") return null;
  return (
    <a
      href={`https://wa.me/${site.whatsappE164}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chamar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 items-center gap-0 overflow-hidden rounded-full bg-spark px-4 text-[#031018] shadow-[0_10px_30px_-8px_color-mix(in_srgb,var(--accent-spark)_60%,transparent)] transition-all duration-300 hover:gap-2 hover:pr-5"
    >
      <MessageCircle size={22} aria-hidden />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-40 group-hover:opacity-100">
        Chamar no WhatsApp
      </span>
    </a>
  );
}

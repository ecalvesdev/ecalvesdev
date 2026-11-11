import { Mail, MessageCircle } from "lucide-react";
import { siGithub, siInstagram } from "simple-icons";
import { contactChannels, site } from "@/content/site";
import { cn } from "@/lib/cn";

/** LinkedIn removido do simple-icons por restrição de marca; path oficial público. */
const linkedinPath =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

function BrandSvg({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden className="fill-current">
      <path d={path} />
    </svg>
  );
}

function ChannelIcon({ id }: { id: (typeof contactChannels)[number]["id"] }) {
  switch (id) {
    case "github":
      return <BrandSvg path={siGithub.path} />;
    case "linkedin":
      return <BrandSvg path={linkedinPath} />;
    case "instagram":
      return <BrandSvg path={siInstagram.path} />;
    case "email":
      return <Mail size={18} aria-hidden />;
    case "whatsapp":
      return <MessageCircle size={18} aria-hidden />;
    default:
      return null;
  }
}

type SocialLinksProps = {
  className?: string;
  /** Inclui número do WhatsApp no aria-label quando true. */
  detailedWhatsAppLabel?: boolean;
};

export function SocialLinks({ className, detailedWhatsAppLabel = false }: SocialLinksProps) {
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {contactChannels.map((channel) => {
        const ariaLabel =
          channel.id === "email"
            ? site.email
            : channel.id === "whatsapp" && detailedWhatsAppLabel
              ? `WhatsApp ${site.whatsappDisplay}`
              : channel.label;

        return (
          <li key={channel.id}>
            <a
              href={channel.href}
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] bg-white/[0.06] text-ink transition hover:bg-lilac/20 hover:text-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac"
              aria-label={ariaLabel}
              {...(channel.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <ChannelIcon id={channel.id} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}

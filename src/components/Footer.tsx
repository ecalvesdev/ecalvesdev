import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "@/components/SocialLinks";
import { footer, site } from "@/content/site";

export function Footer() {
  const year = 2026;

  return (
    <footer className="border-t border-[var(--border-subtle)] py-12 md:py-14">
      <div className="container-site grid gap-10 md:grid-cols-[1.25fr_1fr_1fr] md:gap-12">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3" aria-label="ELIAS CASTRO — início">
            <Image src="/brand/logo-mark.png" alt="" width={70} height={30} className="h-8 w-auto" />
            <span className="font-display text-lg font-bold tracking-[0.14em] text-ink">ELIAS CASTRO</span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-muted">{footer.tagline}</p>
        </div>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.16em] text-muted uppercase">
            {footer.navLabel}
          </p>
          <ul className="space-y-2.5 text-sm">
            {site.nav.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="text-ink transition hover:text-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-xs font-medium tracking-[0.16em] text-muted uppercase">
            {footer.contactLabel}
          </p>
          <SocialLinks />
        </div>
      </div>
      <div className="container-site mt-10 border-t border-[var(--border-subtle)] pt-6 text-sm text-muted">
        © {year} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}

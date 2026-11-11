"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/cn";

function isActive(pathname: string, href: string, hashActive: string) {
  if (href === "/") return pathname === "/" && (hashActive === "inicio" || !hashActive);
  if (href.startsWith("/#")) {
    const id = href.slice(2);
    return pathname === "/" && hashActive === id;
  }
  return pathname === href;
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hashActive, setHashActive] = useState("inicio");

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 16);
      if (pathname !== "/") return;
      const homeIds = site.nav
        .filter((item) => item.href.startsWith("/#") || item.href === "/")
        .map((item) => (item.href === "/" ? "inicio" : item.href.slice(2)));
      let current = "inicio";
      for (const id of homeIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setHashActive(current);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled
          ? "border-b border-[var(--border-subtle)] bg-void/85 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-site flex h-[4.25rem] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-3" aria-label="ELIAS CASTRO — início">
          <Image src="/brand/logo-mark.png" alt="" width={56} height={24} priority className="h-6 w-auto" />
          <span className="font-display text-[0.95rem] font-bold tracking-[0.14em] text-ink">ELIAS CASTRO</span>
        </Link>
        <nav className="hidden items-center gap-1 xl:gap-2 lg:flex" aria-label="Principal">
          {site.nav.map((item) => {
            const active = isActive(pathname, item.href, hashActive);
            return (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "rounded-[var(--radius-sm)] px-2.5 py-2 text-sm transition hover:text-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac",
                  active ? "font-medium text-lilac" : "text-muted",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <Link href={site.cta.href} className="btn btn-primary !min-h-10 !px-5 !text-sm max-lg:!hidden">
          {site.cta.label}
        </Link>
        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--border-subtle)] text-ink transition hover:border-lilac hover:text-lilac focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lilac lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          <span className="sr-only">Abrir menu</span>
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-[var(--border-subtle)] bg-void/95 px-4 py-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {site.nav.map((item) => {
              const active = isActive(pathname, item.href, hashActive);
              return (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-[var(--radius-sm)] px-3 py-3 text-sm transition hover:bg-panel",
                      active ? "font-medium text-lilac" : "text-ink",
                    )}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

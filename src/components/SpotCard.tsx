"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Card cujo brilho interno acompanha o cursor. */
export function SpotCard({
  children,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  return (
    <Tag
      className={cn("spot-card", className)}
      onPointerMove={(event) => {
        const el = event.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
        el.style.setProperty("--my", `${event.clientY - rect.top}px`);
      }}
    >
      {children}
    </Tag>
  );
}

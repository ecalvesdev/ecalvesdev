"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type RevealVariant = "up" | "down" | "left" | "right" | "fade" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  variant?: RevealVariant;
  amount?: number;
  once?: boolean;
};

const offsets: Record<
  RevealVariant,
  { opacity: number; x?: number; y?: number; scale?: number; filter?: string }
> = {
  up: { opacity: 0, y: 48 },
  down: { opacity: 0, y: -40 },
  left: { opacity: 0, x: -56 },
  right: { opacity: 0, x: 56 },
  fade: { opacity: 0 },
  scale: { opacity: 0, scale: 0.9, y: 30 },
};

export function Reveal({
  children,
  className,
  delay = 0,
  y,
  variant = "up",
  amount = 0.15,
  /** false = anima ao entrar e ao sair (rolando para baixo e para cima). */
  once = false,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const from = { ...offsets[variant], filter: "blur(10px)" };
  if (y !== undefined && (variant === "up" || variant === "down")) {
    from.y = variant === "up" ? y : -Math.abs(y);
  }

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      initial={from}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once, amount, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

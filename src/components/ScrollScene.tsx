"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { cn } from "@/lib/cn";

type ScrollSceneProps = {
  children: ReactNode;
  className?: string;
  /** Intensidade do parallax em px (Y). */
  parallax?: number;
};

export function ScrollScene({ children, className, parallax = 24 }: ScrollSceneProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    reduce ? [0, 0, 0] : [parallax * 0.7, 0, -parallax * 0.45],
  );
  if (reduce) {
    return (
      <div ref={ref} className={cn("relative", className)}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={cn("relative will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}

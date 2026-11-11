"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Move e escala o conteúdo conforme a rolagem. */
export function Parallax({
  children,
  className,
  distance = 60,
  scale = [1.08, 1],
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  scale?: [number, number];
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [distance, -distance]);
  const sc = useTransform(scrollYProgress, [0, 0.5], reduce ? [1, 1] : scale);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, scale: sc }}>{children}</motion.div>
    </div>
  );
}

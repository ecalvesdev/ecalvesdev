"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

/** Linha azul que se preenche conforme a timeline é rolada. */
export function TimelineFill() {
  const ref = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 40%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });
  return (
    <span ref={ref} aria-hidden className="pointer-events-none absolute -left-px top-0 h-full w-px">
      <motion.span style={{ scaleY }} className="block h-full w-[2px] origin-top bg-spark shadow-[0_0_12px_var(--accent-spark)]" />
    </span>
  );
}

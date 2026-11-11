"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/** Fundo fixo e discreto: dois focos de luz azul que derivam com a rolagem. */
export function PageBackground() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], reduce ? ["0vh", "0vh"] : ["-5vh", "35vh"]);
  const y2 = useTransform(scrollYProgress, [0, 1], reduce ? ["0vh", "0vh"] : ["40vh", "-10vh"]);
  const x1 = useTransform(scrollYProgress, [0, 0.5, 1], reduce ? ["0vw", "0vw", "0vw"] : ["0vw", "-12vw", "4vw"]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        style={{ y: y1, x: x1 }}
        className="absolute -right-[10vw] top-0 h-[70vh] w-[60vw] rounded-full bg-[#005bff]/[0.13] blur-[140px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -left-[15vw] top-0 h-[60vh] w-[45vw] rounded-full bg-[#0046c7]/[0.12] blur-[140px]"
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  );
}

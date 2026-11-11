"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { Fragment, useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Part = { text: string; className?: string };

/** Título que sobe palavra por palavra quando entra na tela. */
export function SplitText({
  parts,
  delay = 0,
  stagger = 0.06,
}: {
  parts: readonly Part[] | string;
  delay?: number;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const list: readonly Part[] = typeof parts === "string" ? [{ text: parts }] : parts;
  let i = 0;

  return (
    <span ref={ref}>
      {list.flatMap((part, p) =>
        part.text
          .split(" ")
          .filter(Boolean)
          .map((word) => {
            const n = i++;
            return (
              <Fragment key={`${p}-${n}`}>
              <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                <motion.span
                  className={`inline-block ${part.className ?? ""}`}
                  initial={reduce ? false : { y: "115%", rotate: 4, opacity: 0 }}
                  animate={inView ? { y: 0, rotate: 0, opacity: 1 } : { y: "115%", rotate: 4, opacity: 0 }}
                  transition={{ duration: inView ? 0.85 : 0.45, ease, delay: inView ? delay + n * stagger : 0 }}
                >
                  {word}
                </motion.span>
              </span>{" "}
              </Fragment>
            );
          }),
      )}
    </span>
  );
}

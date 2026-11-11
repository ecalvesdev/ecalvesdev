"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { CountUp } from "@/components/CountUp";
import { SceneBackdrop } from "@/components/SceneBackdrop";
import { hero, heroStats } from "@/content/site";
import { getScene } from "@/content/storyboard";

const scene = getScene("identity");
const ease = [0.22, 1, 0.36, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      <motion.span
        className="block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const chipPositions = [
  { left: "0%", top: "26%" },
  { right: "-2%", top: "46%" },
  { left: "4%", top: "68%" },
] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yPortrait = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const yRings = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease, delay },
  });

  return (
    <section ref={ref} id="inicio" className="relative overflow-hidden pt-28 md:pt-32">
      <SceneBackdrop background={scene.background} opacity={0.18} priority />

      <div className="container-site relative grid items-center gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:gap-12">
        <div className="space-y-8">
          <motion.p
            {...fadeUp(0.05)}
            className="inline-flex items-center gap-2.5 rounded-full border border-[var(--border-subtle)] bg-white/[0.03] px-4 py-2 text-[0.8125rem] text-ink backdrop-blur"
          >
            <span className="pulse-dot h-2 w-2 rounded-full bg-spark" aria-hidden />
            {hero.status}
          </motion.p>

          <h1 className="text-hero text-ink">
            <Line delay={0.15}>{hero.headlineTop}</Line>
            <Line delay={0.28}>
              {hero.headlineBefore}
              <span className="mark-spark">{hero.headlineMark}</span>
              {hero.headlineAfter}
            </Line>
            <Line delay={0.4}>{hero.headlineEnd}</Line>
          </h1>

          <motion.p {...fadeUp(0.55)} className="prose-site text-muted">
            {hero.subheadline}
          </motion.p>

          <motion.div {...fadeUp(0.7)} className="flex flex-wrap gap-3">
            <Link href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
              <ArrowRight size={18} className="btn-arrow" aria-hidden />
            </Link>
            <Link href={hero.secondaryCta.href} className="btn btn-ghost">
              {hero.secondaryCta.label}
            </Link>
          </motion.div>

          <motion.dl
            {...fadeUp(0.85)}
            className="grid max-w-xl grid-cols-3 gap-6 border-t border-[var(--border-subtle)] pt-7"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </dt>
                <dd className="mt-1 text-[0.8125rem] leading-snug text-muted">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease, delay: 0.25 }}
          style={{ y: yPortrait }}
          className="relative mx-auto flex w-full max-w-sm items-end justify-center lg:max-w-none"
        >
          <motion.div style={{ y: yRings }} className="pointer-events-none absolute inset-0" aria-hidden>
            <div className="hero-ring left-1/2 top-[8%] aspect-square w-[92%] -translate-x-1/2" />
            <div className="hero-ring left-1/2 top-[18%] aspect-square w-[68%] -translate-x-1/2" />
            <div
              className="absolute left-1/2 top-[14%] h-[62%] w-[80%] -translate-x-1/2 blur-3xl"
              style={{
                background:
                  "radial-gradient(ellipse at center, color-mix(in srgb, #005BFF 38%, transparent), transparent 70%)",
              }}
            />
          </motion.div>

          <div className="relative z-10 aspect-[2/5] max-h-[min(78vh,42rem)] min-h-[26rem] w-full">
            <Image
              src="/brand/elias-castro-full-hd.png"
              alt="Elias de Castro Alves, fotografia profissional de corpo inteiro"
              fill
              priority
              sizes="(max-width: 768px) 160vw, 920px"
              quality={92}
              className="object-contain object-bottom drop-shadow-[0_30px_40px_rgba(0,0,0,0.55)]"
            />
          </div>

          {hero.chips.map((chip, i) => (
            <span
              key={chip}
              className="float-chip absolute z-20 hidden rounded-full bg-[#0b1020]/80 px-3.5 py-2 font-mono text-xs text-ink shadow-xl backdrop-blur-md sm:block"
              style={{ animationDelay: `${i * 1.3}s`, ...chipPositions[i] }}
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-lilac" aria-hidden />
              {chip}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="container-site relative mt-10 pb-8">
        <Link
          href="/#tecnologias"
          className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted transition hover:text-spark"
        >
          <span className="relative block h-9 w-px overflow-hidden bg-white/15" aria-hidden>
            <motion.span
              className="absolute inset-x-0 top-0 h-1/2 bg-spark"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
          Role para ver mais
        </Link>
      </div>
    </section>
  );
}

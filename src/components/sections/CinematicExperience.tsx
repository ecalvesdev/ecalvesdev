"use client";

import { SplitText } from "@/components/SplitText";
import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { MediaEdgeBlend } from "@/components/MediaEdgeBlend";
import { Parallax } from "@/components/Parallax";
import { Reveal } from "@/components/Reveal";
import {
  cinematicClosing,
  cinematicStages,
} from "@/content/cinematic";
import { cn } from "@/lib/cn";

/** Crossfade entre cenas (ms). Dispara antes do `ended` para evitar flash. */
const CROSSFADE_MS = 800;

/**
 * Reel contínuo 1→2→3 (sem pin/scroll).
 * A troca de cena inicia perto do fim do vídeo ativo e cruza com opacity.
 */
export function CinematicExperience() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const transitioningRef = useRef(false);
  const fadeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mediaReady, setMediaReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fadingFrom, setFadingFrom] = useState<number | null>(null);
  const [inView, setInView] = useState(false);

  const armMedia = useCallback(() => setMediaReady(true), []);

  const clearFadeTimer = useCallback(() => {
    if (fadeTimerRef.current) {
      clearTimeout(fadeTimerRef.current);
      fadeTimerRef.current = null;
    }
  }, []);

  const beginCrossfade = useCallback(
    (fromIndex: number) => {
      if (transitioningRef.current) return;
      if (fromIndex !== activeIndex) return;

      const nextIndex = (fromIndex + 1) % cinematicStages.length;
      const next = videoRefs.current[nextIndex];
      transitioningRef.current = true;

      if (next) {
        try {
          next.currentTime = 0;
        } catch {
          /* ignore seek race */
        }
        const play = next.play();
        if (play) void play.catch(() => undefined);
      }

      setFadingFrom(fromIndex);
      setActiveIndex(nextIndex);

      clearFadeTimer();
      fadeTimerRef.current = setTimeout(() => {
        const outgoing = videoRefs.current[fromIndex];
        if (outgoing) {
          outgoing.pause();
          try {
            outgoing.currentTime = 0;
          } catch {
            /* ignore */
          }
        }
        setFadingFrom(null);
        transitioningRef.current = false;
        fadeTimerRef.current = null;
      }, CROSSFADE_MS);
    },
    [activeIndex, clearFadeTimer],
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        setInView(visible);
        if (visible) armMedia();
      },
      { rootMargin: "120px 0px", threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [armMedia]);

  useEffect(() => () => clearFadeTimer(), [clearFadeTimer]);

  useEffect(() => {
    if (reduce || !mediaReady) return;

    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      const shouldPlay =
        inView && (index === activeIndex || index === fadingFrom);
      if (!shouldPlay) {
        if (index !== activeIndex && index !== fadingFrom) video.pause();
        return;
      }
      if (index === activeIndex || index === fadingFrom) {
        if (video.paused && inView) {
          const play = video.play();
          if (play) void play.catch(() => undefined);
        }
      }
    });

    if (!inView) {
      videoRefs.current.forEach((video) => video?.pause());
    }
  }, [activeIndex, fadingFrom, inView, mediaReady, reduce]);

  function jumpTo(index: number) {
    if (index === activeIndex && fadingFrom === null) return;
    clearFadeTimer();
    transitioningRef.current = false;
    setFadingFrom(null);
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        try {
          video.currentTime = 0;
        } catch {
          /* ignore */
        }
      } else {
        video.pause();
        try {
          video.currentTime = 0;
        } catch {
          /* ignore */
        }
      }
    });
    setActiveIndex(index);
  }

  if (reduce) {
    return (
      <section
        id="cinematic"
        aria-label="Apresentação visual"
        className="section relative bg-[#080A12]"
      >
        <div className="container-site space-y-10">
          <Reveal className="max-w-2xl space-y-3">
            <p className="label-tech text-lilac">
              Apresentação
            </p>
            <h2 className="text-section text-ink">
              Engenharia em movimento.
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {cinematicStages.map((stage) => (
              <article key={stage.id} className="space-y-4">
                <MediaEdgeBlend
                  variant="frame"
                  className="relative aspect-video overflow-hidden bg-[#080A12]"
                >
                  <Image
                    src={stage.poster}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 90vw, 33vw"
                    className="object-contain"
                  />
                </MediaEdgeBlend>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {stage.description}
                </p>
              </article>
            ))}
          </div>
          <p className="font-display text-2xl font-semibold tracking-tight text-ink">
            {cinematicClosing}
          </p>
        </div>
      </section>
    );
  }

  const stage = cinematicStages[activeIndex];
  const crossfadeSeconds = CROSSFADE_MS / 1000;

  return (
    <section
      ref={sectionRef}
      id="cinematic"
      aria-label="Apresentação visual contínua"
      className="section relative overflow-hidden bg-[#080A12]"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 70% 40%, color-mix(in srgb, #005BFF 14%, transparent), transparent 70%)",
        }}
      />

      <div className="container-site relative space-y-10">
        <Reveal className="max-w-[40rem] space-y-4">
          <p className="label-tech text-spark">05 / Em movimento</p>
          <h2 className="text-section text-ink"><SplitText parts="Engenharia em movimento." /></h2>
          <p className="prose-site text-muted">
            Sequência contínua — programação, dados, IA e arquitetura no mesmo fio.
          </p>
        </Reveal>

        <Reveal delay={0.06} variant="scale">
          <Parallax distance={24} scale={[0.94, 1]}>
          <MediaEdgeBlend
            variant="frame"
            className="relative aspect-video w-full overflow-hidden bg-[#080A12]"
          >
            {cinematicStages.map((item, index) => {
              const isActive = index === activeIndex;
              const isFading = index === fadingFrom;
              const visible = isActive || isFading;

              return (
                <video
                  key={item.id}
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  className={cn(
                    "absolute inset-0 h-full w-full bg-[#080A12] object-contain",
                    "transition-opacity ease-in-out",
                    isActive ? "opacity-100" : "opacity-0",
                  )}
                  style={{
                    transitionDuration: `${CROSSFADE_MS}ms`,
                    zIndex: isActive ? 2 : isFading ? 1 : 0,
                  }}
                  poster={item.poster}
                  muted
                  playsInline
                  loop={false}
                  preload={
                    !mediaReady
                      ? "none"
                      : index === activeIndex ||
                          index === (activeIndex + 1) % cinematicStages.length
                        ? "auto"
                        : "metadata"
                  }
                  controls={false}
                  disablePictureInPicture
                  aria-hidden={!isActive}
                  tabIndex={-1}
                  src={mediaReady ? item.src : undefined}
                  onTimeUpdate={(event) => {
                    if (!visible || index !== activeIndex) return;
                    const video = event.currentTarget;
                    const { duration, currentTime } = video;
                    if (!Number.isFinite(duration) || duration <= 0) return;
                    if (duration - currentTime <= crossfadeSeconds) {
                      beginCrossfade(index);
                    }
                  }}
                  onEnded={() => {
                    if (index === activeIndex) beginCrossfade(index);
                  }}
                />
              );
            })}
          </MediaEdgeBlend>
          </Parallax>
        </Reveal>

        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="relative min-h-[7rem] max-w-xl">
            {cinematicStages.map((item, index) => (
              <div
                key={item.id}
                className={cn(
                  "transition-opacity ease-in-out",
                  index === activeIndex
                    ? "relative opacity-100"
                    : "pointer-events-none absolute inset-0 opacity-0",
                )}
                style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
                aria-hidden={index !== activeIndex}
              >
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-3 md:items-end">
            <div
              className="flex gap-2"
              aria-label={`Cena ${activeIndex + 1} de ${cinematicStages.length}`}
            >
              {cinematicStages.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={cn(
                    "h-1 w-8 rounded-sm transition-colors duration-300",
                    index === activeIndex ? "bg-spark" : "bg-white/15 hover:bg-white/30",
                  )}
                  aria-label={`Ir para: ${item.title}`}
                  aria-current={index === activeIndex}
                  onClick={() => jumpTo(index)}
                />
              ))}
            </div>
            <p
              className={cn(
                "max-w-sm font-display text-base font-semibold tracking-tight text-ink transition-opacity ease-in-out md:text-right md:text-lg",
                activeIndex === cinematicStages.length - 1
                  ? "opacity-100"
                  : "opacity-40",
              )}
              style={{ transitionDuration: `${CROSSFADE_MS}ms` }}
            >
              {cinematicClosing}
            </p>
            <p className="sr-only">Cena atual: {stage.title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

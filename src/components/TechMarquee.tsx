"use client";

import { useReducedMotion } from "framer-motion";
import { TechBadge } from "@/components/TechBadge";
import type { StackItem } from "@/content/site";
import { cn } from "@/lib/cn";

export type TechMarqueeDirection = "left" | "right";
export type TechMarqueeSpeed = "slow" | "normal" | "fast";

type TechMarqueeTrackProps = {
  items: readonly StackItem[];
  direction?: TechMarqueeDirection;
  speed?: TechMarqueeSpeed;
  pauseOnHover?: boolean;
  className?: string;
  /** Sufixo único para keys quando a mesma tech aparece em faixas distintas. */
  trackId?: string;
};

type TechMarqueeProps = {
  tracks: readonly {
    id: string;
    items: readonly StackItem[];
    direction?: TechMarqueeDirection;
    speed?: TechMarqueeSpeed;
  }[];
  /** Lista plana para o grid reduced-motion / mobile estático. */
  allItems: readonly StackItem[];
  pauseOnHover?: boolean;
  /** Em viewports estreitos, omite a 3ª faixa se houver 3+. */
  collapseThirdOnMobile?: boolean;
  className?: string;
};

function MarqueeRow({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  trackId = "track",
}: TechMarqueeTrackProps) {
  const loop = [...items, ...items];

  return (
    <div
      className={cn(
        "tech-marquee-mask relative overflow-hidden",
        pauseOnHover && "tech-marquee-pause-hover",
        className,
      )}
    >
      <ul
        className={cn(
          "tech-marquee-track flex w-max gap-3 py-1",
          direction === "left" ? "tech-marquee-left" : "tech-marquee-right",
          speed === "slow" && "tech-marquee-speed-slow",
          speed === "fast" && "tech-marquee-speed-fast",
        )}
        aria-hidden
      >
        {loop.map((item, index) => (
          <li key={`${trackId}-${item.id}-${index}`}>
            <TechBadge
              name={item.name}
              shortLabel={item.shortLabel}
              simpleIconSlug={item.simpleIconSlug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function StaticGrid({ items }: { items: readonly StackItem[] }) {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
      {items.map((item) => (
        <li key={item.id} className="min-w-0">
          <TechBadge
            name={item.name}
            shortLabel={item.shortLabel}
            simpleIconSlug={item.simpleIconSlug}
            className="w-full justify-start"
          />
        </li>
      ))}
    </ul>
  );
}

/**
 * Faixas horizontais infinitas (CSS transform).
 * `prefers-reduced-motion` → grid estático navegável.
 */
export function TechMarquee({
  tracks,
  allItems,
  pauseOnHover = true,
  collapseThirdOnMobile = true,
  className,
}: TechMarqueeProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className}>
        <StaticGrid items={allItems} />
      </div>
    );
  }

  return (
    <div className={cn("flex flex-col gap-4", className)} role="presentation">
      <p className="sr-only">
        Lista de tecnologias em faixas animadas. Uma grade estática é usada quando
        a redução de movimento está ativa.
      </p>
      {tracks.map((track, index) => (
        <MarqueeRow
          key={track.id}
          trackId={track.id}
          items={track.items}
          direction={track.direction}
          speed={track.speed}
          pauseOnHover={pauseOnHover}
          className={cn(
            collapseThirdOnMobile && index === 2 && "hidden md:block",
          )}
        />
      ))}
      <div className="sr-only">
        <StaticGrid items={allItems} />
      </div>
    </div>
  );
}


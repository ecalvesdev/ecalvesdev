import Image from "next/image";
import { MediaEdgeBlend } from "@/components/MediaEdgeBlend";
import {
  kitBackgrounds,
  kitDecor,
  type KitBackgroundId,
  type KitDecorId,
} from "@/content/storyboard";
import { cn } from "@/lib/cn";

/** Fundos decorativos desligados: o foco fica no conteúdo. */
const SHOW_BACKDROPS = false;

type SceneBackdropProps = {
  /** Background do kit (cover) ou caminho absoluto em `/kit/...`. */
  src?: string;
  background?: KitBackgroundId;
  decor?: KitDecorId;
  opacity?: number;
  decorOpacity?: number;
  className?: string;
  decorClassName?: string;
  priority?: boolean;
  /** Fade das extremidades para o void; default true para fundos decorativos. */
  edgeBlend?: boolean;
};

export function SceneBackdrop({
  src,
  background,
  decor,
  opacity = 0.35,
  decorOpacity = 0.28,
  className,
  decorClassName,
  priority = false,
  edgeBlend = true,
}: SceneBackdropProps) {
  if (!SHOW_BACKDROPS) return null;
  const imageSrc = src ?? (background ? kitBackgrounds[background] : null);
  /** Overlays sutis: teto ~40% para não competir com tipografia. */
  const clamped = Math.min(Math.max(opacity, 0), 0.4);

  const layers = (
    <>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
          style={{ opacity: clamped }}
        />
      ) : null}
      {decor ? (
        <Image
          src={kitDecor[decor]}
          alt=""
          fill
          sizes="100vw"
          className={cn("object-contain object-center", decorClassName)}
          style={{ opacity: Math.min(Math.max(decorOpacity, 0), 0.4) }}
        />
      ) : null}
    </>
  );

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      {edgeBlend ? (
        <MediaEdgeBlend variant="backdrop" className="absolute inset-0">
          {layers}
        </MediaEdgeBlend>
      ) : (
        layers
      )}
    </div>
  );
}

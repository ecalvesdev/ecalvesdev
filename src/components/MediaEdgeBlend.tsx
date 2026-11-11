import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type MediaEdgeBlendVariant = "frame" | "portrait" | "backdrop";

type MediaEdgeBlendProps = {
  children: ReactNode;
  variant?: MediaEdgeBlendVariant;
  className?: string;
  as?: "div" | "span";
};

/**
 * Aplica mask-image para fade das extremidades no fundo #080A12.
 * Não usar em BrandLogo, cards com borda necessária ou retratos sem variant `portrait`.
 */
export function MediaEdgeBlend({
  children,
  variant = "frame",
  className,
  as: Tag = "div",
}: MediaEdgeBlendProps) {
  return (
    <Tag className={cn("media-edge-blend", `media-edge-blend--${variant}`, className)}>
      {children}
    </Tag>
  );
}

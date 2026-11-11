import Image from "next/image";
import { kitIcons, type KitIconId } from "@/content/storyboard";
import { cn } from "@/lib/cn";

const sizeMap = {
  sm: { px: 40, sizes: "40px" },
  md: { px: 64, sizes: "64px" },
  lg: { px: 96, sizes: "96px" },
  xl: { px: 128, sizes: "128px" },
} as const;

type KitIconProps = {
  name: KitIconId;
  alt?: string;
  size?: keyof typeof sizeMap;
  className?: string;
  priority?: boolean;
};

export function KitIcon({
  name,
  alt = "",
  size = "md",
  className,
  priority = false,
}: KitIconProps) {
  const { px, sizes } = sizeMap[size];

  return (
    <Image
      src={kitIcons[name]}
      alt={alt}
      width={px}
      height={px}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
      style={{ width: px, height: px }}
      aria-hidden={alt ? undefined : true}
    />
  );
}

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  href?: string | null;
  className?: string;
  /** Altura visual (~36–48). Largura acompanha a proporção do PNG (~919×400). */
  height?: number;
  priority?: boolean;
};

export function BrandLogo({
  href = "/",
  className,
  height = 40,
  priority = false,
}: BrandLogoProps) {
  const width = Math.round(height * (915 / 398));
  const image = (
    <Image
      src="/brand/logo-elias-castro.png"
      alt="ELIAS CASTRO"
      width={width}
      height={height}
      priority={priority}
      className={cn("h-auto w-auto max-h-11 object-contain", className)}
      style={{ height, width: "auto" }}
    />
  );

  if (!href) {
    return <span className="inline-flex items-center">{image}</span>;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center transition hover:opacity-90"
      aria-label="ELIAS CASTRO — início"
    >
      {image}
    </Link>
  );
}

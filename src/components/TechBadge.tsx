import { getTechIcon, getTechIconFill } from "@/lib/tech-icons";
import { cn } from "@/lib/cn";

type TechBadgeProps = {
  name: string;
  shortLabel: string;
  simpleIconSlug: string;
  className?: string;
};

export function TechBadge({
  name,
  shortLabel,
  simpleIconSlug,
  className,
}: TechBadgeProps) {
  const icon = simpleIconSlug ? getTechIcon(simpleIconSlug) : undefined;
  const fill = simpleIconSlug ? getTechIconFill(simpleIconSlug) : undefined;

  return (
    <div
      className={cn(
        "tech-badge group inline-flex shrink-0 items-center gap-2.5 rounded-[var(--radius-sm)] bg-[#101322] px-3.5 py-2.5 text-[#F8FAFC] transition duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_0_22px_color-mix(in_srgb,#005BFF_28%,transparent)]",
        className,
      )}
      aria-label={name}
    >
      {icon && fill ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-5 w-5 shrink-0 transition duration-200 group-hover:drop-shadow-[0_0_6px_color-mix(in_srgb,#00BFFF_45%,transparent)]"
          aria-hidden
          style={{ fill }}
        >
          <path d={icon.path} />
        </svg>
      ) : (
        <span
          className="flex h-5 min-w-5 shrink-0 items-center justify-center font-mono text-[10px] font-medium tracking-wide text-[#00BFFF]"
          aria-hidden
        >
          {shortLabel.slice(0, 3)}
        </span>
      )}
      <span className="whitespace-nowrap font-display text-sm font-semibold tracking-tight text-[#F8FAFC]">
        {name}
      </span>
    </div>
  );
}

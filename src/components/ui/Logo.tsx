import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  tone?: "dark" | "light";
  showText?: boolean;
};

/**
 * Original brand mark: a dental arch with a soft accent beneath — a quiet nod
 * to a smile and the curve of a dental arch. Understated and geometric.
 */
export function MorrowMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4.5 19.2C4.5 11.5 8.8 6.4 14 6.4s9.5 5.1 9.5 12.8"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <circle cx="14" cy="21.4" r="2.05" className="text-mint" fill="currentColor" />
    </svg>
  );
}

export function Logo({ className, tone = "dark", showText = true }: LogoProps) {
  const light = tone === "light";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <MorrowMark
        className={cn("size-6 shrink-0", light ? "text-white" : "text-teal")}
      />
      {showText ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.3rem] leading-none",
              light ? "text-white" : "text-heading",
            )}
          >
            Morrow
          </span>
          <span
            className={cn(
              "mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.34em]",
              light ? "text-white/60" : "text-subtle",
            )}
          >
            Dental
          </span>
        </span>
      ) : null}
    </span>
  );
}

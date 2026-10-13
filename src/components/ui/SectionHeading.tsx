import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "invert";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  tone = "default",
  className,
  titleClassName,
}: SectionHeadingProps) {
  const invert = tone === "invert";

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? (
        <span
          className={cn(
            "flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em]",
            align === "center" && "justify-center",
            invert ? "text-mint" : "text-teal",
          )}
        >
          <span
            className={cn("h-px w-7", invert ? "bg-mint/60" : "bg-teal/50")}
            aria-hidden="true"
          />
          {label}
        </span>
      ) : null}

      <h2
        className={cn(
          "mt-5 font-display text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.14]",
          invert ? "text-white" : "text-heading",
          titleClassName,
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8",
            invert ? "text-white/70" : "text-body",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

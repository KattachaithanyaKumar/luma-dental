import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "ghost"
  | "link"
  | "onDark";
export type ButtonSize = "sm" | "md" | "lg" | "icon";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-sans font-semibold transition-[background-color,color,border-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-teal text-white hover:bg-teal-deep",
  secondary:
    "border border-line bg-paper text-heading hover:border-teal hover:text-teal",
  ghost: "text-heading hover:text-teal",
  link: "px-0 text-teal underline-offset-4 hover:underline",
  onDark:
    "border border-white/30 bg-transparent text-white hover:bg-white hover:text-teal-deep",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-[0.85rem]",
  md: "h-11 px-5 text-[0.9rem]",
  lg: "h-12 px-7 text-[0.95rem]",
  icon: "size-10 shrink-0 px-0 text-[0.9rem]",
};

export function buttonClasses(
  variant: ButtonVariant = "primary",
  size: ButtonSize = "md",
  className?: string,
): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClasses(variant, size, className)}
      {...props}
    />
  );
}

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <a className={buttonClasses(variant, size, className)} {...props} />;
}

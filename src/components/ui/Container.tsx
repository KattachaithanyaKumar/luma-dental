import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "article";
  className?: string;
  children: ReactNode;
};

export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full max-w-[1180px] px-5 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

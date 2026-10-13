"use client";

import { useRef, type ReactNode } from "react";
import { motion } from "@/lib/motion";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animate matching descendants (with stagger) instead of the wrapper itself. */
  selector?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  /** Play on mount instead of on scroll — for above-the-fold content. */
  immediate?: boolean;
};

export function Reveal({
  children,
  className,
  selector,
  delay = 0,
  y = motion.reveal.y,
  duration = motion.duration.slow,
  stagger = motion.reveal.stagger,
  immediate = false,
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const targets = selector
          ? gsap.utils.toArray<HTMLElement>(el.querySelectorAll(selector))
          : [el];

        if (!targets.length) return;

        gsap.from(targets, {
          autoAlpha: 0,
          y,
          duration,
          delay,
          stagger: selector ? stagger : 0,
          ease: motion.ease.soft,
          scrollTrigger: immediate
            ? undefined
            : {
                trigger: el,
                start: "top 88%",
                end: "bottom top",
                toggleActions: "play reset play reset",
              },
        });
      });

      return () => mm.revert();
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}

"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { cn } from "@/lib/utils";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const count = items.length;

  const go = (delta: number) =>
    setIndex((prev) => (prev + delta + count) % count);

  return (
    <div
      role="group"
      aria-roledescription="carousel"
      aria-label="Patient feedback"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          go(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          go(1);
        }
      }}
      className="rounded-xl border border-line bg-paper p-7 shadow-card sm:p-10"
    >
      <div aria-live="polite" aria-atomic="true" className="min-h-[15rem]">
        <TestimonialCard testimonial={items[index]} />
      </div>

      <div className="mt-8 flex items-center justify-between gap-6 border-t border-line pt-6">
        <div className="flex items-center gap-2.5" aria-hidden="true">
          {items.map((item, dotIndex) => (
            <span
              key={item.id}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                dotIndex === index ? "w-6 bg-teal" : "w-1.5 bg-line",
              )}
            />
          ))}
        </div>

        <div className="flex items-center gap-5">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-subtle">
            <span className="text-heading">{pad(index + 1)}</span>
            <span className="mx-1.5">/</span>
            {pad(count)}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-line text-heading transition-colors hover:border-teal hover:text-teal"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex size-10 items-center justify-center rounded-full border border-line text-heading transition-colors hover:border-teal hover:text-teal"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

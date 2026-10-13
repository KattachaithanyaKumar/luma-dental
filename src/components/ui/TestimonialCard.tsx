import Image from "next/image";
import { Star } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const rating = testimonial.rating ?? 0;

  return (
    <figure>
      {rating > 0 ? (
        <div
          className="flex gap-1 text-teal"
          aria-label={`Rated ${rating} out of 5`}
        >
          {Array.from({ length: rating }).map((_, index) => (
            <Star
              key={index}
              aria-hidden="true"
              className="size-4"
              fill="currentColor"
            />
          ))}
        </div>
      ) : null}

      <blockquote className="mt-6">
        <p className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.24] text-heading">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </blockquote>

      <figcaption className="mt-8 flex items-center gap-4">
        <span className="relative size-12 shrink-0 overflow-hidden rounded-full bg-sage">
          <Image
            src={testimonial.avatar}
            alt=""
            fill
            sizes="48px"
            className="object-cover"
          />
        </span>
        <span className="flex flex-col">
          <span className="text-sm font-semibold text-heading">
            {testimonial.name}
          </span>
          <span className="text-xs uppercase tracking-[0.12em] text-subtle">
            {testimonial.detail}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

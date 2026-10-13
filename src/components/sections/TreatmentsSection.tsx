"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { services, treatments } from "@/data/services";
import { useAppointment } from "@/components/providers/AppointmentProvider";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/utils";

export function TreatmentsSection() {
  const [active, setActive] = useState(0);
  const { open } = useAppointment();

  return (
    <section id="treatments" className="bg-mist py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionHeading
                label={treatments.label}
                title={treatments.heading}
                description={treatments.description}
              />
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-10 border-t border-line">
                {services.map((treatment, index) => (
                  <li
                    key={treatment.id}
                    id={`treatment-${treatment.id}`}
                    className="scroll-mt-28 border-b border-line"
                  >
                    <button
                      type="button"
                      onClick={() => open(treatment.title)}
                      onMouseEnter={() => setActive(index)}
                      onFocus={() => setActive(index)}
                      aria-label={`Enquire about ${treatment.title}`}
                      className="group grid w-full grid-cols-[auto_1fr_auto] items-start gap-x-5 gap-y-2 py-6 text-left"
                    >
                      <span className="flex size-10 items-center justify-center rounded-md bg-paper text-teal shadow-card">
                        <Icon name={treatment.icon} className="size-5" />
                      </span>

                      <span className="min-w-0">
                        <span className="block text-[1.05rem] font-semibold text-heading transition-colors group-hover:text-teal">
                          {treatment.title}
                        </span>
                        <span className="mt-1 block max-w-lg text-sm leading-6 text-body">
                          {treatment.description}
                        </span>

                        <span className="mt-4 block lg:hidden">
                          <span className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-sage">
                            <Image
                              src={treatment.image.src}
                              alt={treatment.image.alt}
                              fill
                              sizes="320px"
                              className="object-cover"
                            />
                          </span>
                        </span>
                      </span>

                      <span className="flex items-center gap-1.5 self-center text-[0.8rem] font-semibold text-teal">
                        <span className="hidden sm:inline">Enquire</span>
                        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-sage shadow-card">
                {services.map((treatment, index) => (
                  <Image
                    key={treatment.id}
                    src={treatment.image.src}
                    alt={treatment.image.alt}
                    fill
                    sizes="(min-width: 1024px) 460px, 92vw"
                    className={cn(
                      "object-cover transition-opacity duration-500 ease-out",
                      index === active ? "opacity-100" : "opacity-0",
                    )}
                  />
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-subtle">
                  <span className="text-teal">{services[active].number}</span> / 08
                </span>
                <span className="h-px flex-1 bg-line" aria-hidden="true" />
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-heading">
                  {services[active].title}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

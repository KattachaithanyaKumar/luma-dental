"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { patientJourney } from "@/data/patientJourney";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function PatientJourneySection() {
  const [openIds, setOpenIds] = useState<string[]>([
    patientJourney.steps[0].id,
  ]);

  const toggle = (id: string) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );

  return (
    <section id="patient-info" className="bg-mist py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            label={patientJourney.label}
            title={patientJourney.heading}
            description={patientJourney.description}
          />
        </Reveal>

        <Reveal
          selector="[data-step]"
          className="mt-12 flex flex-col divide-y divide-line border-y border-line"
        >
          {patientJourney.steps.map((step) => {
            const isOpen = openIds.includes(step.id);
            return (
              <div key={step.id} data-step>
                <div className="grid gap-x-8 gap-y-3 py-7 sm:grid-cols-[auto_1fr_auto]">
                  <span className="font-display text-2xl leading-none text-teal">
                    {step.number}
                  </span>

                  <div className="max-w-2xl">
                    <h3 className="font-display text-xl text-heading">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-body">
                      {step.summary}
                    </p>

                    <div
                      id={`journey-detail-${step.id}`}
                      role="region"
                      aria-label={step.title}
                      inert={!isOpen}
                      className={cn(
                        "grid transition-all duration-300 ease-out",
                        isOpen
                          ? "mt-3 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="text-sm leading-7 text-subtle">
                          {step.details}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`journey-detail-${step.id}`}
                    onClick={() => toggle(step.id)}
                    className="flex size-10 items-center justify-center self-start rounded-full border border-line text-heading transition-colors hover:border-teal hover:text-teal"
                  >
                    {isOpen ? (
                      <Minus className="size-4" />
                    ) : (
                      <Plus className="size-4" />
                    )}
                    <span className="sr-only">
                      {isOpen ? "Hide details" : "Read details"} for {step.title}
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </Reveal>
      </Container>
    </section>
  );
}

import { Phone } from "lucide-react";
import { appointmentCta } from "@/data/appointments";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppointmentButton } from "@/components/ui/AppointmentButton";

export function AppointmentCTASection() {
  return (
    <section className="bg-teal-deep py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-mint">
                <span className="h-px w-7 bg-mint/50" aria-hidden="true" />
                {appointmentCta.label}
              </span>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-[1.12] text-white">
                {appointmentCta.heading}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.08}>
              <p className="max-w-md text-base leading-8 text-white/70">
                {appointmentCta.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <AppointmentButton variant="onDark" size="lg">
                  {appointmentCta.primaryLabel}
                </AppointmentButton>
                <a
                  href={appointmentCta.secondaryHref}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-2 py-2.5 text-sm font-semibold text-white/80 transition-colors hover:text-white"
                >
                  <Phone className="size-4" />
                  {appointmentCta.secondaryLabel}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

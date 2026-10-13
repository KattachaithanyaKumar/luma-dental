import Image from "next/image";
import { patientCare } from "@/data/patientCare";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function PatientCareSection() {
  return (
    <section className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal">
                <span className="h-px w-7 bg-teal/50" aria-hidden="true" />
                {patientCare.label}
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.14] text-heading">
                {patientCare.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-body">
                {patientCare.body}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="relative aspect-[5/4] overflow-hidden rounded-xl bg-sage shadow-card">
              <Image
                src={patientCare.image.src}
                alt={patientCare.image.alt}
                fill
                sizes="(min-width: 1024px) 560px, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>

        <Reveal
          selector="[data-care]"
          className="mt-12 grid gap-8 rounded-xl bg-teal-deep p-8 sm:grid-cols-3 lg:mt-14 lg:p-10"
        >
          {patientCare.principles.map((principle) => (
            <div key={principle.id} data-care className="flex flex-col">
              <span className="flex size-10 items-center justify-center rounded-md bg-white/10 text-mint">
                <Icon name={principle.icon} className="size-5" />
              </span>
              <h3 className="mt-4 font-display text-lg text-white">
                {principle.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/60">
                {principle.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

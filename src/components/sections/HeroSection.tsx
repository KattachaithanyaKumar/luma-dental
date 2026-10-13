import Image from "next/image";
import { Check } from "lucide-react";
import { hero } from "@/data/hero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const disciplines = hero.disciplines.split(" · ");

export function HeroSection() {
  return (
    <section id="top" className="bg-mist pt-24 pb-16 sm:pt-28 lg:pt-32 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal">
                <span className="h-px w-7 bg-teal/50" aria-hidden="true" />
                {hero.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.06}>
              <h1 className="mt-6 font-display text-[clamp(2.3rem,5vw,3.9rem)] leading-[1.08] text-heading">
                {hero.headline}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-6 max-w-lg text-[1.05rem] leading-8 text-body">
                {hero.supporting}
              </p>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <AppointmentButton size="lg">
                  {hero.primaryCta.label}
                </AppointmentButton>
                <ButtonLink
                  href={hero.secondaryCta.href}
                  variant="secondary"
                  size="lg"
                >
                  {hero.secondaryCta.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1} y={24}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-sage shadow-card">
                <Image
                  src={hero.image.src}
                  alt={hero.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 560px, 92vw"
                  className="object-cover"
                />

                <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-lg bg-paper p-3.5 shadow-card">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-highlight text-teal">
                    <Icon name={hero.trust.icon} className="size-5" />
                  </span>
                  <span className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold text-heading">
                      {hero.trust.label}
                    </span>
                    <span className="mt-0.5 text-[0.8rem] text-subtle">
                      {hero.trust.value}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-5 flex items-center gap-5">
                <span className="relative size-16 shrink-0 overflow-hidden rounded-lg bg-sage">
                  <Image
                    src={hero.supportImage.src}
                    alt={hero.supportImage.alt}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                  {disciplines.map((discipline) => (
                    <li
                      key={discipline}
                      className="flex items-center gap-2 text-[0.83rem] font-medium text-heading"
                    >
                      <Check className="size-3.5 text-teal" aria-hidden="true" />
                      {discipline}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

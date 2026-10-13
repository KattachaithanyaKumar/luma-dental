import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { about } from "@/data/about";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

export function AboutSection() {
  return (
    <section id="about" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <div className="grid grid-cols-5 gap-4">
              <div className="relative col-span-3 aspect-[4/5] overflow-hidden rounded-xl bg-sage">
                <Image
                  src={about.image.src}
                  alt={about.image.alt}
                  fill
                  sizes="(min-width: 1024px) 320px, 55vw"
                  className="object-cover"
                />
              </div>
              <div className="relative col-span-2 mt-12 aspect-[3/4] overflow-hidden rounded-xl bg-sage">
                <Image
                  src={about.secondaryImage.src}
                  alt={about.secondaryImage.alt}
                  fill
                  sizes="(min-width: 1024px) 220px, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-6 lg:pl-4">
            <Reveal>
              <span className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal">
                <span className="h-px w-7 bg-teal/50" aria-hidden="true" />
                {about.label}
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.14] text-heading">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-6 flex flex-col gap-4">
                {about.body.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal
              selector="[data-principle]"
              className="mt-8 flex flex-col divide-y divide-line border-y border-line"
            >
              {about.principles.map((principle) => (
                <div
                  key={principle.id}
                  data-principle
                  className="flex items-start gap-4 py-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-highlight text-teal">
                    <Icon name={principle.icon} className="size-4" />
                  </span>
                  <div>
                    <h3 className="font-sans text-[0.95rem] font-semibold text-heading">
                      {principle.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-body">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <ButtonLink
                href={about.cta.href}
                variant="secondary"
                size="lg"
                className="mt-8"
              >
                {about.cta.label}
                <ArrowRight className="size-4" />
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

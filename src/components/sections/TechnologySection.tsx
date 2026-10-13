import Image from "next/image";
import { technology } from "@/data/technology";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function TechnologySection() {
  return (
    <section className="bg-sage py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <span className="flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-teal">
                <span className="h-px w-7 bg-teal/50" aria-hidden="true" />
                {technology.label}
              </span>
              <h2 className="mt-5 font-display text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.14] text-heading">
                {technology.heading}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-body">
                {technology.body}
              </p>
            </Reveal>

            <Reveal
              selector="[data-highlight]"
              className="mt-9 grid gap-5 sm:grid-cols-3"
            >
              {technology.highlights.map((highlight) => (
                <div key={highlight.id} data-highlight>
                  <span className="flex size-10 items-center justify-center rounded-md bg-paper text-teal shadow-card">
                    <Icon name={highlight.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-sans text-[0.95rem] font-semibold text-heading">
                    {highlight.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-body">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 text-xs text-subtle">{technology.note}</p>
            </Reveal>
          </div>

          <Reveal delay={0.08} className="lg:col-span-6">
            <div className="relative aspect-[13/10] overflow-hidden rounded-xl bg-paper shadow-card">
              <Image
                src={technology.image.src}
                alt={technology.image.alt}
                fill
                sizes="(min-width: 1024px) 560px, 92vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

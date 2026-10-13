import { testimonialsSection, testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TestimonialsCarousel } from "@/components/ui/TestimonialsCarousel";

export function TestimonialsSection() {
  return (
    <section className="bg-sage py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <SectionHeading
                label={testimonialsSection.label}
                title={testimonialsSection.heading}
              />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-6 max-w-xs text-xs leading-6 text-subtle">
                {testimonialsSection.note}
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-8">
            <Reveal delay={0.06}>
              <TestimonialsCarousel items={testimonials} />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

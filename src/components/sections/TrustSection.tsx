import { clinic } from "@/data/clinic";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function TrustSection() {
  return (
    <section className="border-b border-line bg-paper py-14 sm:py-16">
      <Container>
        <Reveal
          selector="[data-promise]"
          className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
        >
          {clinic.promises.map((promise) => (
            <div
              key={promise.id}
              data-promise
              className="flex flex-col gap-3 bg-paper p-6 lg:p-7"
            >
              <span className="flex size-10 items-center justify-center rounded-md bg-sage text-teal">
                <Icon name={promise.icon} className="size-5" />
              </span>
              <h3 className="font-sans text-base font-semibold text-heading">
                {promise.title}
              </h3>
              <p className="text-sm leading-6 text-body">
                {promise.description}
              </p>
            </div>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}

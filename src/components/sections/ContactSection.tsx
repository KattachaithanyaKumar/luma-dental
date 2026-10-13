import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { contact } from "@/data/contact";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AppointmentButton } from "@/components/ui/AppointmentButton";
import { ButtonLink } from "@/components/ui/Button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-mist py-20 sm:py-24 lg:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                label="Visit the practice"
                title="Get in touch or find us."
                description="Questions about a treatment, a first appointment or how we work? Reach out — we are glad to help you take the next step."
              />
            </Reveal>

            <Reveal delay={0.08}>
              <ul className="mt-9 flex flex-col divide-y divide-line border-y border-line">
                <li className="flex items-start gap-4 py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-paper text-teal shadow-card">
                    <MapPin className="size-4" />
                  </span>
                  <div className="text-sm leading-6 text-heading">
                    {contact.address.line1}
                    <br />
                    {contact.address.line2}
                  </div>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-paper text-teal shadow-card">
                    <Phone className="size-4" />
                  </span>
                  <a
                    href={contact.phone.href}
                    className="text-sm text-heading transition-colors hover:text-teal"
                  >
                    {contact.phone.display}
                  </a>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-paper text-teal shadow-card">
                    <Mail className="size-4" />
                  </span>
                  <a
                    href={contact.email.href}
                    className="break-all text-sm text-heading transition-colors hover:text-teal"
                  >
                    {contact.email.display}
                  </a>
                </li>
                <li className="flex items-start gap-4 py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-paper text-teal shadow-card">
                    <Clock className="size-4" />
                  </span>
                  <ul className="flex flex-col gap-1 text-sm text-heading">
                    {contact.hours.map((entry) => (
                      <li key={entry.id} className="flex gap-3">
                        <span className="text-subtle">{entry.label}</span>
                        <span>{entry.value}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8">
                <AppointmentButton size="lg">Book an Appointment</AppointmentButton>
                <p className="mt-3 text-xs text-subtle">
                  Contact details are demonstration placeholders for this
                  template.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-7">
            {contact.map.embedUrl ? (
              <div className="flex h-full flex-col gap-4">
                <div className="relative min-h-[24rem] flex-1 overflow-hidden rounded-xl border border-line bg-sage shadow-card">
                  <iframe
                    title={`Map showing the ${site.name} location`}
                    src={contact.map.embedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[24rem] w-full border-0"
                  />
                </div>
                <div className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-highlight text-teal">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-teal">
                        {contact.address.short}
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-heading">
                        {contact.address.full}
                      </p>
                    </div>
                  </div>
                  <ButtonLink
                    href={contact.map.destinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    className="shrink-0"
                  >
                    <Navigation className="size-4" />
                    Get directions
                  </ButtonLink>
                </div>
              </div>
            ) : (
              <div className="relative h-full min-h-[22rem] overflow-hidden rounded-xl bg-sage shadow-card">
                <Image
                  src={contact.map.image.src}
                  alt={contact.map.image.alt}
                  fill
                  sizes="(min-width: 1024px) 680px, 92vw"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-teal-deep/75 via-teal-deep/10 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-mint">
                      {contact.address.short}
                    </p>
                    <p className="mt-1.5 max-w-xs font-display text-xl text-white">
                      {contact.address.full}
                    </p>
                  </div>
                  <ButtonLink
                    href={contact.map.destinationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="onDark"
                  >
                    <Navigation className="size-4" />
                    Get directions
                  </ButtonLink>
                </div>
              </div>
            )}
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

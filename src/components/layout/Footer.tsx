import { cacheLife } from "next/cache";
import { MapPin, Phone, Mail } from "lucide-react";
import { site } from "@/data/site";
import { contact } from "@/data/contact";
import { footer } from "@/data/footer";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { SocialIcon } from "@/components/ui/SocialIcon";

async function getCopyrightYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="bg-teal-deep text-white/70">
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr] lg:gap-10">
          <div>
            <Logo tone="light" />
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/55">
              {footer.description}
            </p>
            <ul className="mt-7 flex gap-3">
              {site.social.map((social) => (
                <li key={social.id}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-mint hover:text-mint"
                  >
                    <SocialIcon id={social.id} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footer.groups.map((group) => (
            <nav key={group.id} aria-label={group.title}>
              <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mint">
                {group.title}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h2 className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-mint">
              Visit &amp; contact
            </h2>
            <ul className="mt-5 flex flex-col gap-4 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-mint" />
                <span className="text-white/65">
                  {contact.address.line1}
                  <br />
                  {contact.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="size-4 shrink-0 text-mint" />
                <a
                  href={contact.phone.href}
                  className="transition-colors hover:text-white"
                >
                  {contact.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="size-4 shrink-0 text-mint" />
                <a
                  href={contact.email.href}
                  className="break-all transition-colors hover:text-white"
                >
                  {contact.email.display}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/12 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {year} {site.name}. Demo website template.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legal.map((link) => (
              <li key={link.id}>
                <span
                  title="Placeholder link — connect a real page before launch"
                  className="cursor-not-allowed"
                >
                  {link.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

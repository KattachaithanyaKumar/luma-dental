import { team, teamSection } from "@/data/team";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DentistCard } from "@/components/ui/DentistCard";

export function TeamSection() {
  return (
    <section id="team" className="bg-paper py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            label={teamSection.label}
            title={teamSection.heading}
            description={teamSection.description}
          />
        </Reveal>

        <Reveal
          selector="[data-member]"
          className="mt-12 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <div key={member.id} data-member>
              <DentistCard member={member} />
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-12 text-xs text-subtle">{teamSection.note}</p>
        </Reveal>
      </Container>
    </section>
  );
}

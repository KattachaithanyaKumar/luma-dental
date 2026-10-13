import Image from "next/image";
import type { TeamMember } from "@/data/team";

export function DentistCard({ member }: { member: TeamMember }) {
  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-sage">
        <Image
          src={member.image}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="mt-5 flex flex-col">
        <h3 className="font-display text-xl text-heading">{member.name}</h3>
        <p className="mt-1 text-[0.78rem] font-semibold text-teal">
          {member.role}
        </p>
        <p className="mt-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-subtle">
          {member.focus}
        </p>
        <p className="mt-3 text-sm leading-6 text-body">{member.bio}</p>
      </div>
    </article>
  );
}

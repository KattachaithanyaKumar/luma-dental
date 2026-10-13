import type { ReactElement, SVGProps } from "react";
import type { SocialLink } from "@/data/site";

type IconProps = SVGProps<SVGSVGElement>;

function Instagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function Facebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M14 8.5V6.9c0-.8.2-1.2 1.3-1.2H17V3h-2.4c-2.6 0-3.8 1.2-3.8 3.6v1.9H8.5V11h2.3v10h3.2V11h2.3l.4-2.5H14Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Linkedin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M7.8 10v6.4M7.8 7.6v.1M11.4 16.4V10m0 2.6c0-1.3.9-2.4 2.2-2.4s2.2 1 2.2 2.4v3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
} satisfies Record<SocialLink["id"], (props: IconProps) => ReactElement>;

export function SocialIcon({
  id,
  className,
}: {
  id: SocialLink["id"];
  className?: string;
}) {
  const Icon = socialIcons[id];
  return <Icon className={className} />;
}

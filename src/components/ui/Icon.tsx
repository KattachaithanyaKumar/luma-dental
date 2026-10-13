import { createElement } from "react";
import {
  Activity,
  Circle,
  ClipboardCheck,
  ClipboardList,
  Clock,
  HeartPulse,
  Layers,
  MessageCircle,
  Microscope,
  Ruler,
  Scan,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Sun,
} from "lucide-react";

/**
 * Named icon registry so content data can reference icons by string
 * (`{ icon: "shield" }`) without importing components into the data layer.
 */
const registry = {
  activity: Activity,
  shield: ShieldCheck,
  layers: Layers,
  sparkles: Sparkles,
  sun: Sun,
  ruler: Ruler,
  "heart-pulse": HeartPulse,
  clock: Clock,
  stethoscope: Stethoscope,
  scan: Scan,
  microscope: Microscope,
  clipboard: ClipboardList,
  checklist: ClipboardCheck,
  chat: MessageCircle,
} as const;

export type IconName = keyof typeof registry;

export function Icon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Component = registry[name as IconName] ?? Circle;
  return createElement(Component, { className, "aria-hidden": true });
}

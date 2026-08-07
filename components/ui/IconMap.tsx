import {
  Sparkles,
  Target,
  Gem,
  Layers,
  ShieldCheck,
  RefreshCcw,
  Hand,
  Clock,
  Award,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  sparkle: Sparkles,
  target: Target,
  gem: Gem,
  layers: Layers,
  shield: ShieldCheck,
  refresh: RefreshCcw,
  hand: Hand,
  clock: Clock,
  award: Award,
};

export function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? Sparkles;
}

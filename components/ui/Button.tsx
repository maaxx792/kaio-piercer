import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "shiny" | "ghost";
  external?: boolean;
  className?: string;
  icon?: ReactNode;
}

export function Button({
  href,
  children,
  variant = "shiny",
  external = false,
  className,
  icon,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded font-display text-[11px] font-bold tracking-[0.18em] uppercase transition-all duration-300";

  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );

  const classes = cn(
    base,
    variant === "shiny" && "shiny-cta",
    variant === "ghost" &&
      "ghost-cta text-ink-100 hover:text-white rounded-sm",
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

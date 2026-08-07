"use client";

import { Instagram, MapPin, Phone, ArrowUp } from "lucide-react";
import type { SiteData } from "@/lib/types";

export default function Footer({ data }: { data: SiteData }) {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-ink-800/60 bg-ink-950 px-6 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <div className="mb-10 flex select-none flex-col items-center text-center">
          <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-volt-400 sm:text-4xl">
            {data.titlePrimary}
          </h2>
          <span className="mt-1 block font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-3xl">
            {data.titleSecondary}
          </span>
        </div>

        <div className="mb-10 flex flex-col flex-wrap items-center justify-center gap-6 text-center font-display text-[10px] tracking-widest text-ink-400 sm:flex-row sm:text-xs">
          <a
            href={data.locations[0].googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-body font-medium transition-colors hover:text-volt-400"
          >
            <MapPin className="h-3.5 w-3.5" /> {data.locations[0].label}
          </a>
          <span className="hidden text-ink-700 sm:inline">•</span>
          <a
            href={`https://wa.me/${data.contact.phoneRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono transition-colors hover:text-volt-400"
          >
            <Phone className="h-3.5 w-3.5" /> {data.contact.phoneFormatted}
          </a>
          <span className="hidden text-ink-700 sm:inline">•</span>
          <a
            href={data.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-volt-400"
          >
            <Instagram className="h-3.5 w-3.5" /> @{data.socials.instagramHandle}
          </a>
        </div>

        <div className="mb-12 flex items-center gap-6">
          <a
            href={data.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="rounded-full border border-ink-800 bg-ink-900/40 p-3 text-ink-400 transition-all duration-300 hover:border-volt-500/30 hover:text-volt-400"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <button
            onClick={scrollTop}
            title="Voltar ao topo"
            className="rounded-full border border-ink-800 bg-ink-900/40 p-3 text-ink-400 transition-all duration-300 hover:border-volt-500/30 hover:text-volt-400"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>

        <div className="mb-8 h-px w-24 bg-ink-800" />

        <p className="text-center font-display text-[9px] leading-relaxed tracking-[0.3em] text-ink-600">
          © {new Date().getFullYear()} {data.companyName.toUpperCase()} · BODY PIERCING. TODOS OS DIREITOS RESERVADOS.
          <br />
          <span className="mt-1 block opacity-50">TEMPLATE PREMIUM REUTILIZÁVEL</span>
        </p>
      </div>
    </footer>
  );
}

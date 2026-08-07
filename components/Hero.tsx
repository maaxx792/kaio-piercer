"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowDown, Target } from "lucide-react";
import type { SiteData } from "@/lib/types";
import { Button } from "@/components/ui/Button";

export default function Hero({ data }: { data: SiteData }) {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[95vh] items-center justify-center overflow-hidden bg-ink-950 px-6 pt-28 pb-16 text-center lg:min-h-screen lg:px-12"
    >
      {/* Background photo, dimmed and grid-masked */}
      <div className="pointer-events-none absolute inset-0 z-0 h-full w-full select-none overflow-hidden">
        <Image
          src={data.heroBackground}
          alt={data.companyName}
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-grid-fade" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/40 to-ink-950/90" />
      </div>

      {/* Signature element: a precision reticle, echoing the anatomical
          targeting that happens before every needle placement */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, rotate: -8 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 select-none opacity-[0.35] sm:h-[560px] sm:w-[560px]"
      >
        <svg viewBox="0 0 200 200" className="h-full w-full animate-pulse-glow">
          <circle cx="100" cy="100" r="92" stroke="#2C74EC" strokeWidth="0.6" fill="none" />
          <circle cx="100" cy="100" r="66" stroke="#28E0F0" strokeWidth="0.4" fill="none" strokeDasharray="2 6" />
          <line x1="100" y1="2" x2="100" y2="30" stroke="#4F97FF" strokeWidth="0.6" />
          <line x1="100" y1="170" x2="100" y2="198" stroke="#4F97FF" strokeWidth="0.6" />
          <line x1="2" y1="100" x2="30" y2="100" stroke="#4F97FF" strokeWidth="0.6" />
          <line x1="170" y1="100" x2="198" y2="100" stroke="#4F97FF" strokeWidth="0.6" />
          <circle cx="100" cy="100" r="2.2" fill="#28E0F0" />
        </svg>
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center justify-center text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-volt-300"
        >
          <Target className="h-3 w-3" />
          {data.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-balance font-display text-3xl font-bold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          {data.heroTitle}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mx-auto mb-10 mt-6 max-w-2xl text-balance font-body text-sm font-light leading-relaxed text-ink-300 sm:text-base"
        >
          {data.heroSubtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mb-12 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          <Button href="#agendamento" variant="shiny" className="w-full sm:w-auto" icon={<Calendar className="h-4 w-4 shrink-0" />}>
            Agendar Perfuração
          </Button>
          <Button href="#galeria" variant="ghost" className="w-full sm:w-auto">
            Ver Trabalhos
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto flex w-full max-w-xl items-center justify-center gap-6 border-t border-ink-700/80 px-2 pt-8 text-center sm:gap-14"
        >
          {data.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="font-display text-2xl font-extrabold text-white sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-widest text-ink-400 sm:text-xs">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-60 transition-opacity hover:opacity-100 md:flex">
        <ArrowDown className="h-4 w-4 animate-bounce text-volt-400" />
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Instagram } from "lucide-react";
import type { SiteData } from "@/lib/types";
import { Button } from "@/components/ui/Button";

export default function Navbar({ data }: { data: SiteData }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none fixed top-0 left-0 z-50 w-full px-4 pt-6 sm:px-8">
      <div className="pointer-events-auto mx-auto flex max-w-7xl items-center justify-between">
        <a href="#inicio" className="flex flex-col leading-none">
          <span className="font-display text-base font-extrabold tracking-tight text-volt-400 uppercase sm:text-lg">
            {data.titlePrimary}
          </span>
          <span className="mt-0.5 font-display text-xs font-extrabold tracking-tight text-white uppercase sm:text-sm">
            {data.titleSecondary}
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full glass-panel px-2 py-2 md:flex">
          {data.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-2 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-ink-300 transition-all duration-300 hover:bg-white/5 hover:text-volt-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={data.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-ink-300 transition-colors duration-300 hover:text-volt-400"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button href="#agendamento" variant="shiny">
            Agendar
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center rounded-md border border-ink-600 bg-black/80 p-2.5 text-ink-200 backdrop-blur-md transition-all active:scale-95 md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-6 w-6 text-volt-400" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto fixed inset-x-4 top-20 z-50 flex flex-col gap-2 rounded-xl border border-ink-700 bg-black/95 p-6 text-center shadow-2xl backdrop-blur-2xl"
          >
            {data.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg py-3 font-display text-sm font-bold uppercase tracking-[0.18em] text-ink-200 transition-all hover:text-volt-400 active:bg-ink-800"
              >
                {item.label}
              </a>
            ))}
            <div className="my-2 h-px bg-ink-700" />
            <a
              href={data.socials.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 font-sans text-xs font-semibold text-ink-300 hover:text-volt-400"
            >
              <Instagram className="h-4 w-4 text-volt-500" /> @{data.socials.instagramHandle}
            </a>
            <Button href="#agendamento" variant="shiny" className="mt-1 w-full">
              Agendar Horário
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

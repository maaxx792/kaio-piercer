"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import type { SiteData } from "@/lib/types";

export default function Portfolio({ data }: { data: SiteData }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="galeria" className="relative overflow-hidden border-t border-ink-800/60 bg-ink-950 px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-[0.4em] text-volt-400 sm:text-xs">
              Galeria de Projetos
            </span>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
              Retratos de <span className="font-normal italic capitalize text-volt-400">Precisão</span>
            </h2>
          </div>
          <p className="max-w-xs text-left font-body text-xs font-light leading-relaxed text-ink-400 md:text-right">
            Clique em qualquer peça para ampliar e observar o acabamento de cada aplicação.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
          {data.portfolio.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => setActive(item.imageUrl)}
              className="group relative flex aspect-[3/4] cursor-zoom-in flex-col justify-end overflow-hidden rounded-sm border border-ink-800 bg-ink-900 transition-all duration-500 hover:border-volt-600/40"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/95 via-ink-950/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-95" />
              <div className="absolute right-3 top-3 z-20 rounded-full border border-volt-500/20 bg-black/85 px-2.5 py-1 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                <ZoomIn className="h-3 w-3 text-volt-300" />
              </div>
              <div className="relative z-10 translate-y-1 p-4 transition-transform duration-300 group-hover:translate-y-0">
                <span className="mb-1.5 inline-block rounded-full border border-volt-500/20 bg-volt-950/50 px-2.5 py-0.5 font-mono text-[8px] font-bold uppercase tracking-widest text-volt-300">
                  {item.tag}
                </span>
                <h3 className="font-display text-[11px] font-bold uppercase leading-tight tracking-wide text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 p-4 backdrop-blur-md">
            <div className="absolute inset-0 cursor-zoom-out" onClick={() => setActive(null)} />
            <button
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute right-6 top-6 z-[210] rounded-full border border-white/10 bg-black/85 p-3 text-white/70 backdrop-blur-md transition-all hover:border-white/25 hover:text-white active:scale-95"
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative flex max-h-[85vh] max-w-4xl items-center justify-center overflow-hidden rounded-sm border border-ink-800"
            >
              <Image
                src={active}
                alt="Projeto em detalhe"
                width={1000}
                height={1200}
                className="max-h-[85vh] w-auto object-contain"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

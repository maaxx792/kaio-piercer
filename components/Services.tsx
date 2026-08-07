"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/lib/types";
import { getIcon } from "@/components/ui/IconMap";
import { Button } from "@/components/ui/Button";

export default function Services({ data }: { data: SiteData }) {
  return (
    <section id="servicos" className="relative overflow-hidden border-t border-ink-800/60 bg-ink-950 px-6 py-24">
      <div className="pointer-events-none absolute right-0 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-[0.4em] text-volt-400 sm:text-xs">
              Menu de Atendimento
            </span>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl md:text-5xl">
              Nossas <span className="font-normal italic capitalize text-volt-400">Especialidades</span>
            </h2>
          </div>
          <p className="max-w-xs font-body text-xs font-light leading-relaxed text-ink-400">
            Toda perfuração começa com avaliação de anatomia — a técnica e a joia mudam de acordo com a região.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {data.services.map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="group relative flex flex-col rounded-sm border border-ink-800 bg-ink-900/30 p-6 transition-all duration-300 hover:border-volt-600/40 hover:bg-ink-900/60"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-volt-500/20 bg-volt-950/40 text-volt-400 transition-colors group-hover:text-cyan-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-volt-500/20 bg-volt-950/40 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-volt-300">
                    {service.priceLabel}
                  </span>
                </div>
                <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">
                  {service.name}
                </h3>
                <p className="mt-2.5 font-body text-xs font-light leading-relaxed text-ink-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <p className="mb-8 max-w-xl font-body text-[11px] italic leading-relaxed tracking-wide text-ink-500">
            {data.servicesNote}
          </p>
          <Button href="#agendamento" variant="shiny">
            Reservar Horário
          </Button>
        </div>
      </div>
    </section>
  );
}

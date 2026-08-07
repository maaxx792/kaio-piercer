"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import type { SiteData } from "@/lib/types";

export default function Testimonials({ data }: { data: SiteData }) {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden border-t border-ink-800/60 bg-ink-950 px-6 py-24"
    >
      <div className="pointer-events-none absolute right-0 top-1/4 h-[400px] w-[400px] rounded-full bg-volt-900/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-[0.4em] text-volt-400 sm:text-xs">
              Clientes & Experiências
            </span>
            <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl">
              O que sentem <span className="font-normal italic capitalize text-volt-400">na pele</span>
            </h2>
          </div>
          <p className="font-body text-xs font-light leading-relaxed text-ink-400 lg:col-span-7">
            Confiança, conforto e joalheria nobre — a experiência é pensada para não parecer clínica, mas continuar sendo tecnicamente rigorosa.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              className="group relative rounded-sm border border-ink-800 bg-ink-900/30 p-7 transition-colors duration-300 hover:border-volt-600/30"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.stars }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-volt-400 text-volt-400" />
                  ))}
                </div>
                <Quote className="h-4 w-4 text-volt-500/20 transition-colors group-hover:text-volt-500/40" />
              </div>
              <blockquote className="font-body text-sm font-light italic leading-relaxed tracking-wide text-ink-300">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3">
                <span className="h-px w-4 bg-volt-500/40 transition-all duration-300 group-hover:w-8" />
                <h4 className="font-display text-[11px] font-bold uppercase tracking-widest text-white">
                  {t.name}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

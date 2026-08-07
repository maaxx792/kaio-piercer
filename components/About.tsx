"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import type { SiteData } from "@/lib/types";

export default function About({ data }: { data: SiteData }) {
  return (
    <section id="sobre" className="relative overflow-hidden border-t border-ink-800/60 bg-ink-950 px-6 py-24">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-volt-900/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-[0.4em] text-volt-400">
            {data.about.eyebrow}
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl">
            {data.about.title}
            <span className="mt-1 block font-display font-normal italic capitalize text-volt-400">
              {data.about.highlight}
            </span>
          </h2>
          <div className="mt-6 h-px w-14 bg-volt-500" />
          <div className="mt-6 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-ink-400">
            <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
            Agulha catéter · Sem pistola
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="flex flex-col gap-5 lg:col-span-7"
        >
          {data.about.paragraphs.map((p, i) => (
            <p
              key={i}
              className="font-body text-sm font-light leading-relaxed text-ink-300 sm:text-base"
            >
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

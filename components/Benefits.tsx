"use client";

import { motion } from "framer-motion";
import type { SiteData } from "@/lib/types";
import { getIcon } from "@/components/ui/IconMap";

export default function Benefits({ data }: { data: SiteData }) {
  return (
    <section className="relative z-20 border-b border-ink-800/60 bg-ink-950 px-6 py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3.5 sm:gap-6 lg:grid-cols-4">
        {data.benefits.map((benefit, i) => {
          const Icon = getIcon(benefit.icon);
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-sm border border-ink-800 bg-ink-900/40 p-5 transition-all duration-300 hover:border-volt-600/40 hover:bg-ink-900/70 sm:p-7"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-volt-600/0 blur-2xl transition-all duration-500 group-hover:bg-volt-600/20" />
              <div className="relative mb-4 flex h-10 w-10 items-center justify-center rounded-sm border border-volt-500/20 bg-volt-950/40 text-volt-400">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="relative font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                {benefit.title}
              </h3>
              <p className="relative mt-2 font-body text-[11px] leading-relaxed text-ink-400 sm:text-xs">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

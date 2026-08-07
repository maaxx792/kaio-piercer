"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import type { SiteData } from "@/lib/types";
import { cn } from "@/lib/utils";

export default function FAQ({ data }: { data: SiteData }) {
  const [openId, setOpenId] = useState<string | null>(data.faq[0]?.id ?? null);

  return (
    <section id="faq" className="relative border-t border-ink-800/60 bg-ink-950 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-14 text-center">
          <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-[0.4em] text-volt-400 sm:text-xs">
            Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-4xl">
            Antes de <span className="font-normal italic capitalize text-volt-400">Furar</span>
          </h2>
        </div>

        <div className="divide-y divide-ink-800 rounded-sm border border-ink-800 bg-ink-900/30">
          {data.faq.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                >
                  <span className="font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
                    {item.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-volt-400 transition-transform duration-300",
                      isOpen && "rotate-45"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 font-body text-xs font-light leading-relaxed text-ink-400 sm:text-sm">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Check,
  Clock,
  MapPin,
  Navigation,
  Phone,
  Instagram,
} from "lucide-react";
import type { SiteData } from "@/lib/types";
import { buildWhatsAppLink } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function CTA({ data }: { data: SiteData }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [period, setPeriod] = useState<"manha" | "tarde" | "noite">("tarde");
  const [notes, setNotes] = useState("");
  const [sent, setSent] = useState(false);

  const periodLabel = { manha: "Manhã", tarde: "Tarde", noite: "Noite / Final de tarde" }[period];

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name || !phone) {
      alert("Preencha ao menos Nome e WhatsApp.");
      return;
    }
    const message = [
      `SOLICITAÇÃO DE AGENDAMENTO | ${data.companyName.toUpperCase()}`,
      `Nome: ${name}`,
      `WhatsApp: ${phone}`,
      `Serviço: ${service || "A decidir com o piercer"}`,
      `Período preferido: ${periodLabel}`,
      `Observações: ${notes || "Nenhuma"}`,
    ].join("\n");

    setSent(true);
    window.open(buildWhatsAppLink(data.contact.phoneRaw, message), "_blank");
    setTimeout(() => setSent(false), 6000);
  }

  const location = data.locations[0];

  return (
    <section id="agendamento" className="relative overflow-hidden border-t border-ink-800/60 bg-ink-950 px-6 py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-volt-600/5 blur-[130px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-12">
        {/* Location + schedule card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-between rounded-sm border border-ink-800 bg-ink-900/40 p-8 lg:col-span-5"
        >
          <div>
            <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-[0.4em] text-volt-400">
              Atendimento Exclusivo
            </span>
            <h2 className="mb-8 font-display text-2xl font-extrabold uppercase leading-none tracking-tight text-white sm:text-3xl">
              Reserve seu <span className="font-normal italic capitalize text-volt-400">Horário</span>
            </h2>

            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="h-fit rounded-sm border border-volt-500/20 bg-volt-950/30 p-3 text-volt-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                    Estúdio
                  </h4>
                  <p className="font-body text-sm font-semibold text-white">{location.label}</p>
                  <p className="mt-1 font-body text-xs text-ink-400">{location.addressLine}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-fit rounded-sm border border-volt-500/20 bg-volt-950/30 p-3 text-volt-400">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="w-full">
                  <h4 className="mb-2 font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                    Dias & Horários
                  </h4>
                  <div className="space-y-1.5">
                    {data.schedule.map((s) => (
                      <div key={s.day} className="flex justify-between gap-6 font-body text-xs">
                        <span className="text-ink-400">{s.day}</span>
                        <span className="font-mono font-semibold text-ink-200">{s.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-fit rounded-sm border border-volt-500/20 bg-volt-950/30 p-3 text-volt-400">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                    Contato Direto
                  </h4>
                  <p className="font-body text-sm font-semibold text-white">{data.contact.phoneFormatted}</p>
                  <p className="font-body text-xs text-ink-500">
                    No Uber / 99, busque por &ldquo;{data.contact.rideAppSearchTerm}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-fit rounded-sm border border-volt-500/20 bg-volt-950/30 p-3 text-volt-400">
                  <Instagram className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-display text-xs font-bold uppercase tracking-wider text-ink-400">
                    Instagram
                  </h4>
                  <a
                    href={data.socials.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold text-white transition-colors hover:text-volt-400"
                  >
                    @{data.socials.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-ink-800 pt-6 sm:flex-row">
            <Button href={location.googleMapsUrl} external variant="shiny" className="flex-1" icon={<Navigation className="h-3.5 w-3.5" />}>
              Google Maps
            </Button>
            <Button href={location.appleMapsUrl} external variant="ghost" className="flex-1">
              Apple Maps
            </Button>
          </div>
        </motion.div>

        {/* Booking form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-sm border border-ink-800 bg-ink-900/40 p-6 shadow-2xl sm:p-9 lg:col-span-7"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Nome completo *">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Seu nome completo"
                  className="input-field"
                />
              </Field>
              <Field label="WhatsApp *">
                <input
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(98) 90000-0000"
                  className="input-field"
                />
              </Field>
            </div>

            <Field label="Serviço desejado">
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="input-field appearance-none"
              >
                <option value="">Selecione...</option>
                {data.services.map((s) => (
                  <option key={s.id} value={s.name}>
                    {s.name}
                  </option>
                ))}
              </select>
            </Field>

            <div>
              <span className="mb-3 block font-display text-[10px] font-bold uppercase tracking-widest text-ink-400">
                Período do dia preferido
              </span>
              <div className="grid grid-cols-3 gap-2 rounded-sm border border-ink-800 bg-ink-950 p-1">
                {(["manha", "tarde", "noite"] as const).map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setPeriod(p)}
                    className={`rounded-sm py-3 font-display text-[10px] font-semibold uppercase tracking-widest transition-all ${
                      period === p
                        ? "bg-volt-500 text-black shadow-glow-sm"
                        : "text-ink-500 hover:text-ink-300"
                    }`}
                  >
                    {p === "manha" ? "Manhã" : p === "tarde" ? "Tarde" : "Noite"}
                  </button>
                ))}
              </div>
            </div>

            <Field label="Observações (opcional)">
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Ex: quero furar hélix e conch com joia em titânio..."
                className="input-field resize-y"
              />
            </Field>

            {sent ? (
              <div className="flex items-center justify-center gap-2 rounded-sm border border-volt-500/30 bg-volt-950/30 p-4 text-center font-body text-sm text-volt-300">
                <Check className="h-5 w-5 text-volt-400" />
                Abrindo o WhatsApp do {data.companyName}...
              </div>
            ) : (
              <button
                type="submit"
                className="shiny-cta flex w-full items-center justify-center gap-2 py-4 text-[11px] uppercase tracking-[0.18em]"
              >
                <Calendar className="h-4 w-4 shrink-0" />
                Solicitar Agendamento no WhatsApp
              </button>
            )}
            <p className="text-center font-body text-[10px] italic text-ink-600">
              * O botão acima abre a conversa no WhatsApp com seus dados prontos.
            </p>
          </form>
        </motion.div>
      </div>

      <style jsx global>{`
        .input-field {
          width: 100%;
          background: #080b10;
          border: 1px solid #161d2b;
          border-radius: 2px;
          padding: 0.9rem 1rem;
          font-size: 0.85rem;
          color: white;
        }
        .input-field::placeholder {
          color: #33405a;
        }
        .input-field:focus {
          outline: none;
          border-color: rgba(44, 116, 236, 0.6);
          box-shadow: 0 0 0 1px rgba(44, 116, 236, 0.25);
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block font-display text-[10px] font-bold uppercase tracking-widest text-ink-400">
        {label}
      </label>
      {children}
    </div>
  );
}

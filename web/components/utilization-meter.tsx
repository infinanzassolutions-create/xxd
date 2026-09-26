"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { AnimatedNumber } from "./animated-number";
import { usd } from "./format";
import { Slider } from "./slider";

const zones = [
  { upTo: 10, label: "Excelente", tone: "good", body: "Muestras que usas el crédito con mucha holgura." },
  { upTo: 30, label: "Saludable", tone: "good", body: "Estás dentro del rango que suele verse como un manejo sano." },
  { upTo: 50, label: "Atención", tone: "warn", body: "Empieza a pesar en contra. Conviene bajar el saldo antes de solicitar." },
  { upTo: 101, label: "Riesgo alto", tone: "bad", body: "Un prestamista lo leerá como dependencia del crédito." },
] as const;

const toneClasses = {
  good: { tag: "bg-green-pale text-green", icon: "✓", bar: "from-[#2E7D32] to-[#4CAF50]" },
  warn: { tag: "bg-[#FFF3E0] text-[#A64000]", icon: "!", bar: "from-[#E65100] to-[#FF9800]" },
  bad: { tag: "bg-red-pale text-red-dark", icon: "✕", bar: "from-[#B71C1C] to-[#E53935]" },
};

export function UtilizationMeter() {
  const [limit, setLimit] = useState(20000);
  const [balance, setBalance] = useState(9000);
  const used = Math.min(balance, limit);
  const pct = limit ? (used / limit) * 100 : 0;
  const zone = zones.find((z) => pct < z.upTo)!;
  const tone = toneClasses[zone.tone];

  return (
    <div className="rounded-card border border-gray-200 bg-white px-5 py-6 shadow-md md:p-10">
      <div className="space-y-5">
        <Slider label="Límite total de crédito" value={limit} min={1000} max={100000} step={1000} display={usd.format(limit)} onChange={(v) => { setLimit(v); if (balance > v) setBalance(v); }} />
        <Slider label="Saldo que usas hoy" value={used} min={0} max={limit} step={500} display={usd.format(used)} onChange={setBalance} />
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8" aria-live="polite">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <p className="font-display text-5xl font-black leading-none text-navy">
            <AnimatedNumber value={pct} format={(n) => `${Math.round(n)}%`} />
          </p>
          <span className={`rounded-tag px-2.5 py-[3px] text-xs font-semibold leading-tight ${tone.tag}`}>
            {tone.icon} {zone.label}
          </span>
        </div>

        <div className="relative mt-5">
          <div className="h-2.5 overflow-hidden rounded-full bg-gray-200">
            <motion.div
              className={`h-full rounded-full bg-gradient-to-r ${tone.bar}`}
              animate={{ width: `${pct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
          {/* 30% reference mark */}
          <div className="absolute -top-1 h-[18px] w-0.5 bg-navy" style={{ left: "30%" }} aria-hidden />
          <p className="mt-2 text-xs text-gray-600" style={{ paddingLeft: "calc(30% - 20px)" }}>30% recomendado</p>
        </div>

        <p className="mt-4 text-gray-600">{zone.body}</p>
      </div>
    </div>
  );
}

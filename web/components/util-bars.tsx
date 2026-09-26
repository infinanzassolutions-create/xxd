"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";

const rows = [
  { label: "Uso bajo", pct: 10, fill: "from-[#2E7D32] to-[#4CAF50]", tag: "Favorable", good: true },
  { label: "Uso moderado", pct: 30, fill: "from-[#E65100] to-[#FF9800]", tag: "Límite recomendado", good: true },
  { label: "Uso alto", pct: 75, fill: "from-[#B71C1C] to-[#E53935]", tag: "Señal de riesgo", good: false },
];

export function UtilBars() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  return (
    <div ref={ref} className="rounded-card border border-gray-200 bg-white p-5 shadow-sm md:p-10">
      <p className="mb-8 text-sm text-gray-600">Porcentaje del límite de crédito disponible que está en uso</p>
      <ul className="space-y-8">
        {rows.map((r, i) => (
          <li key={r.label}>
            <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-2">
              <span className="font-semibold text-gray-800">
                {r.label} <span className="font-normal text-gray-600">· {r.pct}%</span>
              </span>
              <span
                className={`rounded-tag px-2.5 py-[3px] text-xs font-semibold leading-tight ${
                  r.good ? "bg-green-pale text-green" : "bg-red-pale text-red-dark"
                }`}
              >
                {r.good ? "✓" : "✕"} {r.tag}
              </span>
            </div>
            <div
              className="h-2.5 overflow-hidden rounded-full bg-gray-200"
              role="img"
              aria-label={`${r.label}: ${r.pct}% del límite en uso`}
            >
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${r.fill}`}
                initial={false}
                animate={{ width: inView || reduce ? `${r.pct}%` : "0%" }}
                transition={inView ? { duration: 0.65, ease: "easeOut", delay: i * 0.08 } : { duration: 0 }}
                style={{ width: `${r.pct}%` }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

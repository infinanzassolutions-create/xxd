"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { AnimatedNumber } from "./animated-number";
import { usd } from "./format";
import { Slider } from "./slider";

function monthlyPayment(principal: number, annualRate: number, months: number) {
  const r = annualRate / 100 / 12;
  if (r === 0) return principal / months;
  return (principal * r) / (1 - Math.pow(1 + r, -months));
}

export function LoanSimulator() {
  const [amount, setAmount] = useState(50000);
  const [months, setMonths] = useState(36);
  const [rate, setRate] = useState(12);

  const payment = monthlyPayment(amount, rate, months);
  const total = payment * months;
  const interest = total - amount;
  const principalShare = (amount / total) * 100;

  return (
    <div className="grid overflow-hidden rounded-card border border-gray-200 bg-white shadow-md md:grid-cols-[1.1fr_1fr]">
      <div className="space-y-6 px-5 py-6 md:p-10">
        <Slider label="Monto que necesitas" value={amount} min={5000} max={500000} step={5000} display={usd.format(amount)} onChange={setAmount} />
        <Slider label="Plazo" value={months} min={6} max={120} step={6} display={`${months} meses`} onChange={setMonths} />
        <Slider
          label="Tasa anual estimada"
          value={rate}
          min={0}
          max={35}
          step={0.5}
          display={`${rate.toFixed(1)}%`}
          onChange={setRate}
          hint="Ajústala a la tasa de la oferta que estés evaluando. 12% es solo un punto de partida."
        />
      </div>

      <div className="flex flex-col justify-between gap-8 bg-navy px-5 py-6 text-white md:p-10" aria-live="polite">
        <div>
          <p className="text-sm text-white/60">Pago mensual estimado</p>
          <p className="mt-1 font-display text-[clamp(40px,5vw,56px)] font-black leading-none">
            <AnimatedNumber value={payment} format={(n) => usd.format(n)} />
          </p>
        </div>

        <div>
          <div className="flex h-3 overflow-hidden rounded-full bg-white/10" role="img" aria-label={`Capital ${Math.round(principalShare)}%, intereses ${100 - Math.round(principalShare)}% del total`}>
            <motion.div className="h-full bg-blue-light" animate={{ width: `${principalShare}%` }} transition={{ duration: 0.4, ease: "easeOut" }} />
            <div className="h-full flex-1 bg-white/35" />
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="flex items-center gap-2 text-white/60"><span className="h-2.5 w-2.5 rounded-full bg-blue-light" aria-hidden />Capital</dt>
              <dd className="mt-1 text-lg font-bold"><AnimatedNumber value={amount} format={(n) => usd.format(n)} /></dd>
            </div>
            <div>
              <dt className="flex items-center gap-2 text-white/60"><span className="h-2.5 w-2.5 rounded-full bg-white/35" aria-hidden />Intereses</dt>
              <dd className="mt-1 text-lg font-bold"><AnimatedNumber value={interest} format={(n) => usd.format(n)} /></dd>
            </div>
            <div className="col-span-2 border-t border-white/10 pt-4">
              <dt className="text-white/60">Total a pagar</dt>
              <dd className="mt-1 text-lg font-bold"><AnimatedNumber value={total} format={(n) => usd.format(n)} /></dd>
            </div>
          </dl>
        </div>

        <p className="text-xs leading-[1.5] text-white/60">
          Cálculo ilustrativo con pagos fijos mensuales. No es una oferta de crédito; las condiciones reales dependen del
          perfil de tu empresa y del prestamista.
        </p>
      </div>
    </div>
  );
}

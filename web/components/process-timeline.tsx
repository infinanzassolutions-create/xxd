"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

const steps = [
  { title: "Diagnóstico inicial", body: "Revisamos la situación actual de tu empresa y lo que quieres lograr." },
  { title: "Estructura en orden", body: "Ajustamos la base legal, contable y bancaria que hace falta." },
  { title: "Perfil de crédito", body: "Construimos o fortalecemos el crédito comercial de tu negocio." },
  { title: "Plan financiero", body: "Definimos presupuesto, proyecciones y el uso concreto del capital." },
  { title: "Solicitud de financiación", body: "Te acompañamos a presentar tu empresa ante las fuentes adecuadas." },
  { title: "Seguimiento", body: "Medimos resultados y ajustamos el plan a medida que el negocio crece." },
];

/** Vertical timeline whose line fills as the reader scrolls through it. */
export function ProcessTimeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  return (
    <ol ref={ref} className="relative pl-9 md:pl-12">
      <div className="absolute bottom-2 left-[15px] top-2 w-0.5 bg-gray-200" aria-hidden />
      <motion.div
        className="absolute bottom-2 left-[15px] top-2 w-0.5 origin-top bg-gradient-to-b from-blue to-blue-light"
        style={{ scaleY }}
        aria-hidden
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative pb-9 last:pb-0">
          <span
            className="absolute -left-[29px] top-[5px] h-4 w-4 rounded-full border-[3px] border-white bg-blue shadow-[0_0_0_2px_#1E88E5] md:-left-[41px]"
            aria-hidden
          />
          <p className="text-xs font-bold uppercase tracking-[2px] text-blue">Paso {i + 1}</p>
          <h3 className="mt-1 font-display text-2xl font-bold leading-[1.3] text-navy">{s.title}</h3>
          <p className="mt-1 text-gray-600">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

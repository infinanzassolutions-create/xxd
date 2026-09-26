"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { services, type ServiceId } from "./services-data";

const questions: { q: string; service: ServiceId }[] = [
  { q: "¿Tu empresa está registrada legalmente (LLC, corporación u otra entidad)?", service: "estructuracion" },
  { q: "¿Tiene su propio número de identificación fiscal (EIN)?", service: "estructuracion" },
  { q: "¿Tiene una cuenta bancaria comercial separada de la personal?", service: "estructuracion" },
  { q: "¿Tiene historial de crédito comercial a nombre de la empresa?", service: "credito" },
  { q: "¿Usa menos del 30% de sus límites de crédito disponibles?", service: "credito" },
  { q: "¿Tiene estados financieros de los últimos 12 meses?", service: "planificacion" },
  { q: "¿Tiene proyecciones y un plan claro de uso del capital?", service: "planificacion" },
  { q: "¿Tiene impuestos, licencias y permisos al día?", service: "cumplimiento" },
];

function verdict(score: number) {
  if (score >= 7) return { title: "Tu empresa está en buena posición", body: "Tienes la base que suelen revisar los prestamistas. El siguiente paso es elegir la fuente de capital adecuada y preparar la solicitud." };
  if (score >= 4) return { title: "Tu empresa está cerca", body: "Hay algunas piezas pendientes que conviene resolver antes de solicitar, para no gastar consultas de crédito en solicitudes débiles." };
  return { title: "Primero hay que preparar la base", body: "Solicitar ahora probablemente terminaría en rechazo. Con la estructura correcta, tu empresa puede llegar lista en pocos meses." };
}

export function ReadinessQuiz() {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const reduce = useReducedMotion();
  const step = answers.length;
  const done = step === questions.length;
  const score = answers.filter(Boolean).length;

  const answer = (yes: boolean) => setAnswers((a) => [...a, yes]);
  const back = () => setAnswers((a) => a.slice(0, -1));
  const reset = () => setAnswers([]);

  const gaps = [...new Set(questions.filter((_, i) => answers[i] === false).map((q) => q.service))];
  const slide = reduce ? {} : { initial: { opacity: 0, x: 24 }, animate: { opacity: 1, x: 0 }, exit: { opacity: 0, x: -24 } };

  return (
    <div className="overflow-hidden rounded-card border border-gray-200 bg-white shadow-md">
      {/* Progress */}
      <div className="h-1.5 bg-gray-200">
        <motion.div
          className="h-full bg-blue"
          animate={{ width: `${(step / questions.length) * 100}%` }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        />
      </div>

      <div className="min-h-[340px] px-5 py-6 md:px-10 md:py-10" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          {!done ? (
            <motion.div key={step} {...slide} transition={{ duration: 0.25 }}>
              <p className="text-xs font-bold uppercase tracking-[2px] text-blue">
                Pregunta {step + 1} de {questions.length}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-[1.3] text-navy">{questions[step].q}</h3>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-sm">
                <button
                  type="button"
                  onClick={() => answer(true)}
                  className="min-h-12 rounded-btn border-2 border-gray-200 font-bold text-navy transition-colors duration-[250ms] hover:border-green hover:bg-green-pale"
                >
                  ✓ Sí
                </button>
                <button
                  type="button"
                  onClick={() => answer(false)}
                  className="min-h-12 rounded-btn border-2 border-gray-200 font-bold text-navy transition-colors duration-[250ms] hover:border-red hover:bg-red-pale"
                >
                  ✕ No
                </button>
              </div>
              {step > 0 && (
                <button type="button" onClick={back} className="mt-6 min-h-11 text-sm font-semibold text-gray-600 hover:text-navy">
                  ← Pregunta anterior
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div key="result" {...slide} transition={{ duration: 0.3 }}>
              <div className="flex flex-wrap items-center gap-6">
                <ScoreRing score={score} total={questions.length} />
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-2xl font-bold leading-[1.3] text-navy">{verdict(score).title}</h3>
                  <p className="mt-2 text-gray-600">{verdict(score).body}</p>
                </div>
              </div>

              {gaps.length > 0 && (
                <div className="mt-8">
                  <p className="text-sm font-semibold text-gray-800">Dónde podemos ayudarte:</p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {gaps.map((id) => (
                      <li key={id}>
                        <a
                          href={`#servicio-${id}`}
                          className="inline-flex min-h-11 items-center rounded-full bg-blue-pale px-4 text-sm font-semibold text-blue transition-colors duration-[250ms] hover:bg-navy-pale"
                        >
                          {services.find((s) => s.id === id)!.title} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="rounded-btn bg-navy px-[34px] py-[15px] text-[15px] font-bold leading-tight text-white transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-blue"
                >
                  Revisar mi caso con un asesor
                </a>
                <button type="button" onClick={reset} className="min-h-11 px-4 text-sm font-semibold text-gray-600 hover:text-navy">
                  Repetir el test
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ScoreRing({ score, total }: { score: number; total: number }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const color = score >= 7 ? "#2E7D32" : score >= 4 ? "#E65100" : "#D32F2F";
  return (
    <div className="relative h-28 w-28 shrink-0" role="img" aria-label={`${score} de ${total} respuestas positivas`}>
      <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
        <circle cx="50" cy="50" r={r} fill="none" stroke="#E8ECF3" strokeWidth="9" />
        <motion.circle
          cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="9" strokeLinecap="round"
          strokeDasharray={c}
          initial={{ strokeDashoffset: c }}
          animate={{ strokeDashoffset: c * (1 - score / total) }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        />
      </svg>
      <span className="absolute inset-0 grid place-items-center font-display text-3xl font-black text-navy">
        {score}/{total}
      </span>
    </div>
  );
}

"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { services, type ServiceId } from "./services-data";

export function ServiceTabs() {
  const [active, setActive] = useState<ServiceId>("estructuracion");
  const reduce = useReducedMotion();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rootRef = useRef<HTMLDivElement>(null);

  // Links like #servicio-credito (from the quiz) open the matching tab.
  useEffect(() => {
    const sync = () => {
      const m = location.hash.match(/^#servicio-(\w+)$/);
      const found = m && services.find((s) => s.id === m[1]);
      if (found) {
        setActive(found.id);
        rootRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
      }
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [reduce]);

  const index = services.findIndex((s) => s.id === active);
  const current = services[index];

  const onKey = (e: React.KeyboardEvent) => {
    const delta = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!delta) return;
    e.preventDefault();
    const next = (index + delta + services.length) % services.length;
    setActive(services[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={rootRef} className="scroll-mt-24">
      <div
        role="tablist"
        aria-label="Servicios"
        onKeyDown={onKey}
        className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0"
      >
        {services.map((s, i) => {
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              ref={(el) => { tabRefs.current[i] = el; }}
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={selected}
              aria-controls="panel-servicio"
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(s.id)}
              className={`relative min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-colors duration-[250ms] ${
                selected ? "text-white" : "bg-white text-gray-600 hover:text-navy"
              }`}
            >
              {selected && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-navy"
                  transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 34 }}
                />
              )}
              <span className="relative">
                <span className="mr-1.5 opacity-60">{String(i + 1).padStart(2, "0")}</span>
                {s.short}
              </span>
            </button>
          );
        })}
      </div>

      <div
        id="panel-servicio"
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
        className="mt-6 overflow-hidden rounded-card border border-gray-200 bg-white shadow-sm"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid gap-8 px-5 py-6 md:grid-cols-[1.3fr_1fr] md:p-10"
          >
            <div>
              <span className="font-display text-6xl font-black leading-none text-blue-pale" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-[28px] font-bold leading-[1.25] text-navy">{current.title}</h3>
              <p className="mt-3 text-[17px] text-gray-600">{current.body}</p>
              <p className="mt-6 rounded-btn bg-navy-pale px-4 py-3 text-sm text-navy">
                <strong>Ideal si:</strong> {current.idealFor}
              </p>
            </div>
            <div className="rounded-card bg-gray-100 px-5 py-6 md:p-8">
              <p className="text-xs font-bold uppercase tracking-[2px] text-blue">Qué incluye</p>
              <ul className="mt-4 space-y-3">
                {current.includes.map((item) => (
                  <li key={item} className="flex gap-3 text-gray-800">
                    <span className="mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-green-pale text-[11px] font-bold text-green" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className="mt-6 inline-flex min-h-11 items-center text-sm font-bold text-blue hover:text-navy"
              >
                Consultar por este servicio →
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

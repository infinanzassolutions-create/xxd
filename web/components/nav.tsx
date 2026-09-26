"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#credito", label: "Crédito" },
  { href: "#proceso", label: "Cómo trabajamos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-gray-200 bg-white shadow-sm" aria-label="Principal">
      <div className="flex h-[68px] items-center justify-between px-5 md:px-10">
        <a href="#inicio" className="text-lg font-extrabold tracking-tight text-navy">
          Financore <span className="text-blue">Solutions</span>
        </a>

        <ul className="hidden items-center gap-8 text-[15px] font-medium text-gray-600 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition-colors duration-[250ms] hover:text-navy">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="https://financoresolutions.com"
            target="_blank"
            rel="noopener"
            className="hidden rounded-nav bg-blue px-[22px] py-2.5 text-sm font-bold text-white transition-colors duration-[250ms] hover:bg-navy-light sm:inline-block"
          >
            Contactar
          </a>
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-btn text-navy md:hidden"
            aria-expanded={open}
            aria-controls="menu-movil"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            id="menu-movil"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-gray-200 bg-white px-5 md:hidden"
          >
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3.5 font-medium text-gray-800">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pb-5 pt-2">
              <a href="https://financoresolutions.com" target="_blank" rel="noopener" className="block rounded-nav bg-blue py-3 text-center font-bold text-white">
                Contactar
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Position among siblings; staggers 80ms per step, max four steps. */
  index?: number;
};

/**
 * Scroll-triggered fadeUp (28px, 0.65s). Content is visible in the static HTML and
 * only hides once JS has mounted, so the page still reads if scripts never load.
 */
export function Reveal({ children, className, index = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const hidden = mounted && !inView && !reduce;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={hidden ? { opacity: 0, y: 28 } : { opacity: 1, y: 0 }}
      transition={hidden ? { duration: 0 } : { duration: 0.65, ease: "easeOut", delay: (index % 4) * 0.08 }}
    >
      {children}
    </motion.div>
  );
}

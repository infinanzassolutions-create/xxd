"use client";

import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import { useEffect } from "react";

/** Counts smoothly toward `value` whenever it changes. */
export function AnimatedNumber({ value, format }: { value: number; format: (n: number) => string }) {
  const reduce = useReducedMotion();
  const spring = useSpring(value, { stiffness: 140, damping: 22 });
  const text = useTransform(spring, format);

  useEffect(() => {
    if (reduce) spring.jump(value);
    else spring.set(value);
  }, [value, reduce, spring]);

  return <motion.span className="tabular-nums">{text}</motion.span>;
}

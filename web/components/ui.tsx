import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <span className="mb-4 inline-block rounded-full bg-blue-pale px-3.5 py-[5px] text-[11px] font-bold uppercase leading-tight tracking-[2.5px] text-blue">
      {children}
    </span>
  );
}

export function DividerLine() {
  return <div className="mb-6 h-1 w-14 rounded-tag bg-gradient-to-r from-blue to-gold" aria-hidden />;
}

export function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(28px,3.6vw,42px)] mb-5 font-bold leading-[1.25] text-navy ${className}`}>
      {children}
    </h2>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1100px] ${className}`}>{children}</div>;
}

export function Section({ id, children, className = "" }: { id?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-5 py-14 md:px-6 md:py-[88px] ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}

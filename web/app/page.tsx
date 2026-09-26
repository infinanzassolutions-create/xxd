import { LoanSimulator } from "@/components/loan-simulator";
import { Nav } from "@/components/nav";
import { ProcessTimeline } from "@/components/process-timeline";
import { ReadinessQuiz } from "@/components/readiness-quiz";
import { Reveal } from "@/components/reveal";
import { ServiceTabs } from "@/components/service-tabs";
import { services } from "@/components/services-data";
import { Container, DividerLine, H2, Section, SectionLabel } from "@/components/ui";
import { UtilizationMeter } from "@/components/utilization-meter";

const tools = [
  {
    href: "#test",
    title: "¿Está lista tu empresa para crédito?",
    body: "8 preguntas, 2 minutos, resultado al instante.",
    icon: <path d="M9 11l3 3 8-8M20 12v7a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2h9" />,
  },
  {
    href: "#simulador",
    title: "Simula tu financiación",
    body: "Monto, plazo y tasa: mira el pago mensual.",
    icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  },
  {
    href: "#credito",
    title: "Mide el uso de tu crédito",
    body: "La señal que más pesa en una solicitud.",
    icon: <path d="M12 3a9 9 0 109 9M12 12l5-5M12 3v4M21 12h-4" />,
  },
];

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <header
          id="inicio"
          className="flex min-h-screen items-center bg-[linear-gradient(155deg,#0D2B55_0%,#1565C0_55%,#1E88E5_100%)] px-5 pb-20 pt-[120px] md:px-6"
        >
          <Container className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <Reveal>
                <p className="mb-6 text-[11px] font-bold uppercase tracking-[2.5px] text-white/60">
                  Consultoría financiera para empresas
                </p>
              </Reveal>
              <Reveal index={1}>
                <h1 className="max-w-[16ch] font-display text-[clamp(36px,5.5vw,64px)] font-black leading-[1.15] text-white">
                  Descubre qué necesita tu empresa para <em className="text-gold-light">acceder a capital</em>.
                </h1>
              </Reveal>
              <Reveal index={2}>
                <p className="mt-6 max-w-[50ch] text-lg font-light leading-[1.6] text-white/[0.78]">
                  Usa nuestras herramientas gratuitas para medir dónde está tu negocio hoy. Después, te acompañamos a
                  estructurarlo, preparar tu crédito y planificar cada paso.
                </p>
              </Reveal>
              <Reveal index={3}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#test"
                    className="rounded-btn bg-gold px-[34px] py-[15px] text-[15px] font-bold leading-tight text-navy transition-transform duration-[250ms] hover:-translate-y-0.5"
                  >
                    Hacer el test gratis
                  </a>
                  <a
                    href="#contacto"
                    className="rounded-btn border-2 border-white/35 px-8 py-[13px] text-[15px] font-bold leading-tight text-white transition-colors duration-[250ms] hover:bg-white/10"
                  >
                    Hablar con un asesor
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal index={2}>
              <ul className="space-y-3" aria-label="Herramientas">
                {tools.map((t) => (
                  <li key={t.href}>
                    <a
                      href={t.href}
                      className="group flex items-center gap-4 rounded-card border border-white/15 bg-white/[0.08] p-5 text-white backdrop-blur-sm transition-[background-color,transform,border-color] duration-[250ms] hover:-translate-y-1 hover:border-white/35 hover:bg-white/[0.14]"
                    >
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-btn bg-white text-blue">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          {t.icon}
                        </svg>
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block font-bold leading-snug">{t.title}</span>
                        <span className="mt-0.5 block text-sm text-white/[0.78]">{t.body}</span>
                      </span>
                      <span className="text-xl text-white/60 transition-transform duration-[250ms] group-hover:translate-x-1" aria-hidden>
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </header>

        {/* TEST */}
        <Section id="test" className="scroll-mt-[68px] bg-white">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.35fr] lg:items-start">
            <Reveal>
              <SectionLabel>Test de preparación</SectionLabel>
              <H2>¿Tu empresa está lista para pedir crédito?</H2>
              <DividerLine />
              <p className="text-[17px] text-gray-600">
                Muchas solicitudes se rechazan no por falta de potencial, sino porque el negocio llega sin la preparación
                que el prestamista necesita ver. Responde con sinceridad: el resultado te dice qué resolver primero.
              </p>
            </Reveal>
            <Reveal index={1}>
              <ReadinessQuiz />
            </Reveal>
          </div>
        </Section>

        {/* SIMULADOR */}
        <Section id="simulador" className="scroll-mt-[68px]">
          <Reveal className="max-w-[640px]">
            <SectionLabel>Simulador</SectionLabel>
            <H2>Mira cuánto pagarías antes de solicitar.</H2>
            <DividerLine />
            <p className="mb-10 text-[17px] text-gray-600">
              Mueve los controles para comparar escenarios. Entender el costo total te ayuda a pedir el monto y el plazo
              correctos.
            </p>
          </Reveal>
          <Reveal index={1}>
            <LoanSimulator />
          </Reveal>
        </Section>

        {/* SERVICIOS */}
        <Section id="servicios" className="scroll-mt-[68px] bg-white">
          <Reveal className="max-w-[640px]">
            <SectionLabel>Servicios</SectionLabel>
            <H2>Cinco áreas, un solo acompañamiento.</H2>
            <DividerLine />
          </Reveal>
          <Reveal index={1}>
            <ServiceTabs />
          </Reveal>
        </Section>

        {/* CREDITO */}
        <Section id="credito" className="scroll-mt-[68px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <Reveal>
              <SectionLabel>Uso del crédito</SectionLabel>
              <H2>La señal que más pesa en tu solicitud.</H2>
              <DividerLine />
              <p className="text-[17px] text-gray-600">
                Los prestamistas miran qué parte de tu límite disponible estás usando. Mantenerla por debajo del 30% es
                una referencia común de manejo sano. Prueba con tus propios números.
              </p>
            </Reveal>
            <Reveal index={1}>
              <UtilizationMeter />
            </Reveal>
          </div>
        </Section>

        {/* CITA */}
        <section className="bg-[linear-gradient(135deg,#0D2B55_0%,#1565C0_100%)] px-6 py-20 text-center">
          <Reveal>
            <blockquote className="mx-auto max-w-[24ch] font-display text-[clamp(28px,3.6vw,42px)] font-bold leading-[1.25] text-white">
              Capital inteligente. Crecimiento estratégico. <em className="text-gold-light">Acompañamiento real.</em>
            </blockquote>
          </Reveal>
        </section>

        {/* PROCESO */}
        <Section id="proceso" className="scroll-mt-[68px] bg-white">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <Reveal className="lg:sticky lg:top-28 lg:self-start">
              <SectionLabel>Cómo trabajamos</SectionLabel>
              <H2>Seis pasos, de la primera conversación al capital.</H2>
              <DividerLine />
              <p className="text-[17px] text-gray-600">
                Cada empresa empieza en un punto distinto. El diagnóstico define por cuál paso comenzamos contigo.
              </p>
            </Reveal>
            <ProcessTimeline />
          </div>
        </Section>

        {/* CTA FINAL */}
        <section id="contacto" className="scroll-mt-[68px] border-t border-gold/20 bg-gold-pale px-5 py-14 text-center md:px-6 md:py-[88px]">
          <Reveal className="mx-auto max-w-[640px]">
            <H2>¿Listo para ordenar las finanzas de tu empresa?</H2>
            <p className="mx-auto mt-4 text-[17px] text-gray-600">
              Cuéntanos dónde está tu negocio hoy y hacia dónde quieres llevarlo. Te respondemos en español.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="mailto:info@financoresolutions.com"
                className="rounded-btn bg-navy px-[34px] py-[15px] text-[15px] font-bold leading-tight text-white transition-[background-color,transform] duration-[250ms] hover:-translate-y-0.5 hover:bg-blue"
              >
                Escríbenos
              </a>
              <a
                href="tel:+14707502003"
                className="rounded-btn border-2 border-navy/20 px-8 py-[13px] text-[15px] font-bold leading-tight text-navy transition-colors duration-[250ms] hover:border-navy"
              >
                Llamar al 470-750-2003
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-navy px-6 pb-9 pt-14 text-white/70">
        <div className="mx-auto grid max-w-[1100px] gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div>
            <p className="text-xl font-extrabold text-white">
              Financore <span className="text-gold-light">Solutions</span>
            </p>
            <p className="mt-3 max-w-[32ch] text-sm leading-[1.6]">
              Capital inteligente. Crecimiento estratégico. Acompañamiento real.
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[2px] text-gold-light">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-gold-light" href="mailto:info@financoresolutions.com">info@financoresolutions.com</a></li>
              <li><a className="hover:text-gold-light" href="tel:+14707502003">470-750-2003</a></li>
              <li><a className="hover:text-gold-light" href="tel:+18336661957">833-666-1957</a></li>
              <li><a className="hover:text-gold-light" href="https://financoresolutions.com" target="_blank" rel="noopener">financoresolutions.com</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-[2px] text-gold-light">Servicios</h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.id}><a className="hover:text-gold-light" href={`#servicio-${s.id}`}>{s.title}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-[1100px] border-t border-white/10 pt-6 text-[13px] text-white/35">
          © {new Date().getFullYear()} Financore Solutions. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
}

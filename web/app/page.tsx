import { Nav } from "@/components/nav";
import { Reveal } from "@/components/reveal";
import { Container, DividerLine, H2, Section, SectionLabel } from "@/components/ui";
import { UtilBars } from "@/components/util-bars";

const services = [
  {
    title: "Estructuración empresarial",
    body: "Ordenamos la base legal y financiera de tu empresa para que esté lista para operar, crecer y presentarse ante bancos e inversionistas.",
  },
  {
    title: "Financiación y crédito",
    body: "Preparamos el perfil de crédito de tu negocio y te acompañamos en la búsqueda del capital que mejor encaja con tu etapa.",
  },
  {
    title: "Planificación financiera (FP&A)",
    body: "Presupuestos, proyecciones y reportes que te muestran hacia dónde va el negocio antes de tomar cada decisión.",
  },
  {
    title: "Cumplimiento normativo y gestión de riesgos",
    body: "Identificamos lo que te expone y ponemos en orden los requisitos que tu empresa debe cumplir.",
  },
  {
    title: "Formación y mentoría",
    body: "Te enseñamos a leer tus números y a tomar decisiones financieras con criterio propio.",
  },
];

const problems = [
  "Empresas sin una estructura legal y contable clara que un banco pueda evaluar.",
  "Historial de crédito comercial inexistente o mezclado con el crédito personal.",
  "Solicitudes presentadas sin proyecciones ni un plan de uso del capital.",
  "Riesgos de cumplimiento que aparecen justo cuando se revisa la solicitud.",
];

const steps = [
  { title: "Diagnóstico inicial", body: "Revisamos la situación actual de tu empresa y lo que quieres lograr." },
  { title: "Estructura en orden", body: "Ajustamos la base legal, contable y bancaria que hace falta." },
  { title: "Perfil de crédito", body: "Construimos o fortalecemos el crédito comercial de tu negocio." },
  { title: "Plan financiero", body: "Definimos presupuesto, proyecciones y el uso concreto del capital." },
  { title: "Solicitud de financiación", body: "Te acompañamos a presentar tu empresa ante las fuentes adecuadas." },
  { title: "Seguimiento", body: "Medimos resultados y ajustamos el plan a medida que el negocio crece." },
];

const checklist = [
  { ok: true, text: "Empresa registrada y con cuenta bancaria comercial propia" },
  { ok: true, text: "Estados financieros y proyecciones al día" },
  { ok: true, text: "Uso del crédito por debajo del 30% del límite" },
  { ok: false, text: "Mezclar gastos personales con los del negocio" },
  { ok: false, text: "Solicitar varias líneas de crédito a la vez sin un plan" },
];

const stats = [
  { value: "5", label: "áreas de servicio" },
  { value: "6", label: "pasos de acompañamiento" },
  { value: "100%", label: "atención en español" },
];

function Check({ ok }: { ok: boolean }) {
  return (
    <span
      className={`mt-0.5 grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full text-[11px] font-bold ${
        ok ? "bg-green-pale text-green" : "bg-red-pale text-red-dark"
      }`}
      aria-label={ok ? "Recomendado" : "Evitar"}
    >
      {ok ? "✓" : "✕"}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* HERO */}
        <header
          id="inicio"
          className="flex min-h-screen items-center bg-[linear-gradient(155deg,#0D2B55_0%,#1565C0_55%,#1E88E5_100%)] px-6 pb-20 pt-[120px]"
        >
          <Container>
            <Reveal>
              <p className="mb-6 text-[11px] font-bold uppercase tracking-[2.5px] text-white/60">
                Consultoría financiera para empresas
              </p>
            </Reveal>
            <Reveal index={1}>
              <h1 className="max-w-[18ch] font-display text-[clamp(36px,5.5vw,68px)] font-black leading-[1.15] text-white">
                Capital inteligente para que tu empresa <em className="text-gold-light">crezca con estrategia</em>.
              </h1>
            </Reveal>
            <Reveal index={2}>
              <p className="mt-6 max-w-[56ch] text-lg font-light leading-[1.6] text-white/[0.78]">
                Estructuramos tu negocio, preparamos tu crédito y planificamos tus finanzas para que puedas acceder al
                capital que necesitas. Con acompañamiento real, de principio a fin.
              </p>
            </Reveal>
            <Reveal index={3}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="#contacto"
                  className="rounded-btn bg-gold px-[34px] py-[15px] text-[15px] font-bold leading-tight text-navy transition-transform duration-[250ms] hover:-translate-y-0.5"
                >
                  Agenda una consulta
                </a>
                <a
                  href="#servicios"
                  className="rounded-btn border-2 border-white/35 px-8 py-[13px] text-[15px] font-bold leading-tight text-white transition-colors duration-[250ms] hover:bg-white/10"
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>
            <Reveal index={4}>
              <dl className="mt-16 flex flex-wrap gap-x-12 gap-y-6">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-4xl font-black leading-none text-gold-light">{s.value}</dd>
                    <dd className="mt-2 text-sm text-white/60">{s.label}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </header>

        {/* PROBLEMA */}
        <Section className="bg-white">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
            <Reveal>
              <SectionLabel>El problema</SectionLabel>
              <H2>Por qué tantas empresas no consiguen financiación.</H2>
              <DividerLine />
              <p className="text-[17px] text-gray-600">
                Casi nunca es por falta de potencial. Es porque el negocio llega a la solicitud sin la preparación que el
                prestamista necesita ver.
              </p>
            </Reveal>
            <Reveal index={1}>
              <div className="rounded-[12px] border border-l-4 border-red/15 border-l-red bg-red-pale px-5 py-6 md:px-11 md:py-9">
                <p className="mb-4 font-bold text-red-dark">Los motivos más comunes de rechazo</p>
                <ul className="space-y-3">
                  {problems.map((p) => (
                    <li key={p} className="flex gap-3 text-gray-800">
                      <Check ok={false} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* SERVICIOS */}
        <Section id="servicios">
          <Reveal className="max-w-[640px]">
            <SectionLabel>Servicios</SectionLabel>
            <H2>Todo lo que tu empresa necesita para acceder a capital.</H2>
            <DividerLine />
          </Reveal>
          <div className="mt-6 grid grid-cols-[repeat(auto-fill,minmax(min(300px,100%),1fr))] gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} index={i}>
                <article className="group relative h-full overflow-hidden rounded-card border border-gray-200 bg-white px-5 py-6 transition-[border-color,transform,box-shadow] duration-[250ms] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-blue before:to-blue-light before:opacity-0 before:transition-opacity before:duration-[250ms] hover:-translate-y-1 hover:border-blue-light hover:shadow-md hover:before:opacity-100 md:px-7 md:py-8">
                  <span className="font-display text-5xl font-black leading-none text-blue-pale" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold leading-[1.3] text-navy">{s.title}</h3>
                  <p className="mt-3 text-sm leading-[1.6] text-gray-600">{s.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* VISUAL DE DATOS */}
        <Section id="credito" className="bg-white">
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
            <Reveal>
              <SectionLabel>Crédito</SectionLabel>
              <H2>Cómo leen los prestamistas el uso de tu crédito.</H2>
              <DividerLine />
              <p className="text-[17px] text-gray-600">
                Una de las señales que más pesa es qué parte de tu límite disponible estás usando. Mantenerla por debajo
                del 30% es una referencia común para mostrar un manejo sano.
              </p>
            </Reveal>
            <Reveal index={1}>
              <UtilBars />
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
        <Section id="proceso" className="bg-white">
          <Reveal className="max-w-[640px]">
            <SectionLabel>Cómo trabajamos</SectionLabel>
            <H2>Seis pasos, de la primera conversación al capital.</H2>
            <DividerLine />
          </Reveal>
          <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <ol className="relative pl-9 before:absolute before:bottom-2 before:left-[15px] before:top-2 before:w-0.5 before:bg-gradient-to-b before:from-blue before:via-blue-light before:to-transparent md:pl-12">
              {steps.map((s, i) => (
                <li key={s.title} className="relative pb-8 last:pb-0">
                  <Reveal index={i}>
                    <span
                      className="absolute -left-[29px] top-[5px] h-4 w-4 rounded-full border-[3px] border-white bg-blue shadow-[0_0_0_2px_#1E88E5] md:-left-[41px]"
                      aria-hidden
                    />
                    <p className="text-xs font-bold uppercase tracking-[2px] text-blue">Paso {i + 1}</p>
                    <h3 className="mt-1 font-display text-2xl font-bold leading-[1.3] text-navy">{s.title}</h3>
                    <p className="mt-1 text-gray-600">{s.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal index={1}>
              <div className="rounded-card border border-gray-200 bg-gray-100 px-5 py-6 md:sticky md:top-24 md:px-8 md:py-8">
                <h3 className="font-display text-2xl font-bold leading-[1.3] text-navy">¿Tu empresa está lista para pedir crédito?</h3>
                <ul className="mt-6 space-y-4">
                  {checklist.map((c) => (
                    <li key={c.text} className="flex gap-3">
                      <Check ok={c.ok} />
                      <span className="text-gray-800">{c.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* CTA FINAL */}
        <section id="contacto" className="border-t border-gold/20 bg-gold-pale px-5 py-14 text-center md:px-6 md:py-[88px]">
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
                <li key={s.title}><a className="hover:text-gold-light" href="#servicios">{s.title}</a></li>
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

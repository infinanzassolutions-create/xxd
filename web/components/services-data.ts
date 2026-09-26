export type ServiceId = "estructuracion" | "credito" | "planificacion" | "cumplimiento" | "formacion";

export const services: {
  id: ServiceId;
  title: string;
  short: string;
  body: string;
  includes: string[];
  idealFor: string;
}[] = [
  {
    id: "estructuracion",
    title: "Estructuración empresarial",
    short: "Estructura",
    body: "Ordenamos la base legal, fiscal y bancaria de tu empresa para que pueda operar, crecer y presentarse ante bancos e inversionistas.",
    includes: ["Revisión de la entidad legal y su registro", "Separación de finanzas personales y del negocio", "Documentación que piden los prestamistas"],
    idealFor: "Empresas nuevas o negocios que crecieron sin una estructura formal.",
  },
  {
    id: "credito",
    title: "Financiación y crédito",
    short: "Crédito",
    body: "Preparamos el perfil de crédito de tu negocio y te acompañamos en la búsqueda del capital que mejor encaja con tu etapa.",
    includes: ["Construcción del crédito comercial", "Estrategia de uso y utilización del crédito", "Acompañamiento en la solicitud de financiación"],
    idealFor: "Empresas que necesitan capital para crecer o que ya recibieron un rechazo.",
  },
  {
    id: "planificacion",
    title: "Planificación financiera (FP&A)",
    short: "FP&A",
    body: "Presupuestos, proyecciones y reportes que te muestran hacia dónde va el negocio antes de cada decisión.",
    includes: ["Presupuesto anual y seguimiento mensual", "Proyecciones de flujo de caja", "Plan de uso del capital para la solicitud"],
    idealFor: "Dueños que deciden con intuición y quieren hacerlo con números.",
  },
  {
    id: "cumplimiento",
    title: "Cumplimiento normativo y gestión de riesgos",
    short: "Cumplimiento",
    body: "Identificamos lo que expone a tu empresa y ponemos en orden los requisitos que debe cumplir.",
    includes: ["Diagnóstico de riesgos del negocio", "Calendario de obligaciones y licencias", "Controles para evitar sorpresas en una revisión"],
    idealFor: "Empresas en crecimiento que suman empleados, contratos o nuevos mercados.",
  },
  {
    id: "formacion",
    title: "Formación y mentoría",
    short: "Mentoría",
    body: "Te enseñamos a leer tus números y a tomar decisiones financieras con criterio propio.",
    includes: ["Sesiones uno a uno con un asesor", "Lectura de estados financieros", "Hábitos financieros para el equipo"],
    idealFor: "Emprendedores que quieren entender y dirigir sus propias finanzas.",
  },
];

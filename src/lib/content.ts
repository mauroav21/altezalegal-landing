export const site = {
  name: "Alteza Legal",
  legalName: "Alteza Legal",
  tagline:
    "Somos una firma de abogados especializados; brindamos servicios de calidad a todos nuestros clientes.",
  description:
    "Despacho jurídico especializado en Derecho Laboral, Civil, Familiar y Administrativo en Saltillo, Coahuila y Monterrey, Nuevo León.",
  phoneDisplay: "(844) 496 34 74",
  phoneHref: "+528444963474",
  email: "informes@altezalegal.com",
  address: {
    line1: "Calle Sonora 184 A int. 2",
    line2: "Col. República Oriente",
    city: "Saltillo, Coahuila",
    zip: "C.P. 25280",
  },
  cities: ["Saltillo", "Monterrey"],
  social: {
    facebook: "https://fb.com/Despachosaltillo/",
    instagram: "https://www.instagram.com/alteza.legal/",
  },
} as const;

export const whatsappHref = `https://wa.me/${site.phoneHref.replace("+", "")}?text=${encodeURIComponent(
  "Hola, me gustaría solicitar información sobre sus servicios legales."
)}`;

export const navLinks = [
  { href: "#nosotros", label: "Quiénes somos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const about = {
  paragraphs: [
    "ALTEZA LEGAL es un despacho jurídico especializado en distintas áreas del derecho, con enfoque en Derecho Laboral, Civil, Familiar y Administrativo; consolidado en la ciudad de Saltillo, Coahuila y Monterrey, Nuevo León.",
    "En ALTEZA LEGAL nos comprometemos a prestar servicios de asesoría jurídica de alta calidad y eficacia a nivel empresarial y particular, atendiendo las necesidades de nuestros clientes, trabajando con profesionalismo en la búsqueda de soluciones legales, preventivas y estratégicas.",
  ],
  pillars: [
    {
      title: "Misión",
      body: "Brindarle confianza a nuestro cliente estableciendo una comunicación directa en el seguimiento de los avances, logros y resultados en tiempo y forma. Nuestro equipo está integrado por profesionales del derecho capacitados constantemente, comprometidos en resolver cada asunto con alto sentido de responsabilidad.",
    },
    {
      title: "Visión",
      body: "Ser reconocidos como una firma de abogados especializados en asesoría, consultoría y representación legal a nivel nacional, distinguiéndonos por brindar al cliente una atención de alta calidad humana y personal. Nos consideramos apasionados por el Derecho, aportando calidad y confianza en nuestros servicios.",
    },
    {
      title: "Objetivo",
      body: "Atender oportunamente y de manera personalizada cada uno de los asuntos que llegan a nuestras manos.",
    },
  ],
} as const;

export type PracticeArea = {
  slug: string;
  name: string;
  summary: string;
  items: string[];
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "laboral",
    name: "Derecho Laboral",
    summary:
      "Vigilamos las relaciones individuales y colectivas de trabajo y la relación obrero-patronal dentro de la empresa.",
    items: [
      "Defensa patronal ante autoridades federales y locales del trabajo",
      "Asesoría y representación legal a trabajadores ante tribunales del trabajo",
      "Mediación laboral entre empresa y empleado",
      "Asistencia en citas conciliatorias",
      "Elaboración de amparos directos contra laudos",
      "Cálculo de indemnizaciones y finiquitos",
      "Elaboración de reglamentos y contratos de trabajo conforme a la reforma laboral",
      "Trámites de pensión ante el IMSS",
      "Cursos de capacitación en prevención de demandas laborales",
    ],
  },
  {
    slug: "civil",
    name: "Derecho Civil",
    summary:
      "Regulamos el estado civil de las personas y su vínculo con bienes, propiedad, obligaciones, contratos y sucesiones.",
    items: [
      "Elaboración y revisión de contratos civiles",
      "Elaboración de demandas y contestaciones civiles",
      "Redacción de todo tipo de escritos jurídicos",
      "Convenios judiciales",
      "Juicios ordinarios civiles",
      "Juicios sucesorios intestamentarios",
      "Juicios de arrendamiento",
      "Juicios de responsabilidad civil y daño moral",
      "Apelaciones e incidentes",
      "Rendición de cuentas e interdictos",
    ],
  },
  {
    slug: "familiar",
    name: "Derecho Familiar",
    summary:
      "Protegemos la organización de la familia, su desarrollo y convivencia estable dentro de un marco de derechos.",
    items: [
      "Divorcios voluntarios e incausados",
      "Pensiones alimenticias y su cancelación",
      "Declaración de concubinato",
      "Corrección de actas de nacimiento",
      "Convenios de guarda y custodia",
      "Reconocimiento de paternidad",
    ],
  },
  {
    slug: "administrativo",
    name: "Derecho Administrativo",
    summary:
      "Asesoramos a particulares y empresas en sus procedimientos ante la Administración General, Estatal o Local.",
    items: [
      "Aclaraciones de requerimientos administrativos",
      "Gestoría administrativa ante trámites de gobierno",
      "Presentación de recursos administrativos",
      "Cancelación de multas",
      "Trámites ante secretarías estatales y municipales",
      "Cancelación de gravamen ante el Registro Público",
      "Elaboración de amparos indirectos contra actos de autoridad",
    ],
  },
];

export const lawyerServices = {
  title: "Servicios para abogados",
  summary:
    "Apoyamos a colegas y despachos con presencia y trámites en Saltillo y Monterrey.",
  items: [
    "Corresponsalía jurídica en las ciudades de Saltillo y Monterrey",
    "Gestión y diligenciamiento de exhortos en Saltillo y Monterrey",
  ],
} as const;

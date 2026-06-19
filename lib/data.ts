/* =====================================================================
   Typed content for the Kids & Teens marketing site, with English +
   Spanish (ES) copy. Shared by the homepage, the location finder, the
   service pages, and the per-clinic pages.
   ===================================================================== */

export type ColorClass = "c-blue" | "c-mint" | "c-amber" | "c-violet" | "c-rose";

export interface CareType {
  title: string;
  titleEs: string;
  color: ColorClass;
  chip: string;
  chipEs: string;
  description: string;
  descriptionEs: string;
  meta: string[];
  metaEs: string[];
  iconKey: string;
}

export const care: CareType[] = [
  {
    title: "Primary Care",
    titleEs: "Atención Primaria",
    color: "c-blue",
    chip: "In person",
    chipEs: "En persona",
    description:
      "Well visits, sick visits & same-day care for children 0–21. Walk-ins welcome.",
    descriptionEs:
      "Chequeos, visitas por enfermedad y atención el mismo día para niños de 0 a 21 años. Sin cita previa.",
    meta: ["Mon–Fri · 9AM–6PM", "Walk-in & same-day"],
    metaEs: ["Lun–Vie · 9AM–6PM", "Sin cita y el mismo día"],
    iconKey: "M3 12h4l2 5 4-12 2 7h6",
  },
  {
    title: "Telehealth",
    titleEs: "Telesalud",
    color: "c-mint",
    chip: "Video",
    chipEs: "Video",
    description:
      "Connect with your doctor by video call from home — 7 days a week, including evenings.",
    descriptionEs:
      "Conéctese con su médico por videollamada desde casa — 7 días a la semana, incluso por la tarde.",
    meta: ["Mon–Sat · 9AM–9PM", "Sun · 12PM–6PM"],
    metaEs: ["Lun–Sáb · 9AM–9PM", "Dom · 12PM–6PM"],
    iconKey: "rect",
  },
  {
    title: "Urgent Care",
    titleEs: "Atención de Urgencia",
    color: "c-rose",
    chip: "Fast",
    chipEs: "Rápido",
    description:
      "Immediate booking confirmation and shorter wait times for kids who need to be seen now.",
    descriptionEs:
      "Confirmación inmediata y menos tiempo de espera para los niños que necesitan atención ahora.",
    meta: ["Immediate confirmation", "Less waiting, ages 0–21"],
    metaEs: ["Confirmación inmediata", "Menos espera, 0–21 años"],
    iconKey: "M12 2v20M2 12h20",
  },
  {
    title: "After-Hours Care",
    titleEs: "Atención Fuera de Horario",
    color: "c-amber",
    chip: "Evenings",
    chipEs: "Tardes",
    description:
      "Convenient evening & weekend hours for urgent needs, with full continuity of care.",
    descriptionEs:
      "Horarios cómodos por la tarde y fines de semana para necesidades urgentes, con continuidad de atención.",
    meta: ["Evenings & weekends", "Continuity of care"],
    metaEs: ["Tardes y fines de semana", "Continuidad de atención"],
    iconKey: "clock",
  },
  {
    title: "Family Practice",
    titleEs: "Medicina Familiar",
    color: "c-violet",
    chip: "All ages",
    chipEs: "Todas las edades",
    description:
      "Quality, compassionate care for everyone in the family — not just the little ones.",
    descriptionEs:
      "Atención de calidad y compasiva para toda la familia — no solo para los más pequeños.",
    meta: ["All ages welcome"],
    metaEs: ["Todas las edades"],
    iconKey: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
  },
  {
    title: "Newborn & Delivery",
    titleEs: "Recién Nacidos y Parto",
    color: "c-blue",
    chip: "New parents",
    chipEs: "Nuevos padres",
    description:
      "Delivering at a partner hospital? We'll arrange your pediatrician's first visit bedside.",
    descriptionEs:
      "¿Da a luz en un hospital asociado? Coordinamos la primera visita de su pediatra junto a su cama.",
    meta: ["Hospital first visit"],
    metaEs: ["Primera visita en el hospital"],
    iconKey: "heart",
  },
];

/* ----- Services (20). Each gets its own detail page at /services/<slug>. ----- */
export interface Service {
  slug: string;
  label: string;
  labelEs: string;
  dot: string;
  blurb: string;
  blurbEs: string;
  image: string;
}

// Each service gets a topically-matched Unsplash photo (landscape 16:9 crop so
// the wide hero box doesn't zoom into a face). If any photo 404s in the
// browser, <FallbackImage> swaps in SERVICE_IMAGE_FALLBACK (a known-good clinic
// image). We avoid the NCI stock photos — they have "Urologic Oncology Branch"
// text on the coat.
export const SERVICE_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1280&h=760&fit=crop&q=70";

const svcImg = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=1280&h=760&fit=crop&q=70`;

const rawSvcs: { label: string; labelEs: string; dot: string; img: string }[] = [
  { label: "Well Child Exam", labelEs: "Examen del Niño Sano", dot: "var(--blue)", img: "1666214280557-f1b5022eb634" },
  { label: "Sick Visit", labelEs: "Visita por Enfermedad", dot: "var(--rose)", img: "1538108149393-fbbd81895907" },
  { label: "Walk-Ins", labelEs: "Sin Cita Previa", dot: "var(--mint)", img: "1629909613654-28e377c37b09" },
  { label: "Same-Day Visit", labelEs: "Visita el Mismo Día", dot: "var(--amber)", img: "1576091160399-112ba8d25d1d" },
  { label: "Physicals", labelEs: "Exámenes Físicos", dot: "var(--violet)", img: "1571019613454-1cb2f99b2d8b" },
  { label: "ADHD & Behavioral", labelEs: "TDAH y Conducta", dot: "var(--blue)", img: "1509557965875-b88c97052f0e" },
  { label: "Adolescent Medicine", labelEs: "Medicina del Adolescente", dot: "var(--rose)", img: "1517841905240-472988babdf9" },
  { label: "Allergies", labelEs: "Alergias", dot: "var(--mint)", img: "1631815588090-d4bfec5b1ccb" },
  { label: "Asthma & Allergy", labelEs: "Asma y Alergia", dot: "var(--amber)", img: "1505751172876-fa1923c5c528" },
  { label: "Autism & Special Needs", labelEs: "Autismo y Necesidades Especiales", dot: "var(--violet)", img: "1503454537195-1dcabb73ffb9" },
  { label: "Childhood Obesity", labelEs: "Obesidad Infantil", dot: "var(--blue)", img: "1490645935967-10de6ba17061" },
  { label: "COVID-19 Vaccine", labelEs: "Vacuna COVID-19", dot: "var(--rose)", img: "1632053002990-1919f76e10e0" },
  { label: "Expectant Parents", labelEs: "Futuros Padres", dot: "var(--mint)", img: "1555252333-9f8e92e65df9" },
  { label: "Free Vaccines", labelEs: "Vacunas Gratuitas", dot: "var(--amber)", img: "1584515933487-779824d29309" },
  { label: "Newborn Care", labelEs: "Cuidado del Recién Nacido", dot: "var(--violet)", img: "1519689680058-324335c77eba" },
  { label: "Nutrition", labelEs: "Nutrición", dot: "var(--blue)", img: "1490645935967-10de6ba17061" },
  { label: "Infectious Disease", labelEs: "Enfermedades Infecciosas", dot: "var(--rose)", img: "1576086213369-97a306d36557" },
  { label: "Sports Injuries", labelEs: "Lesiones Deportivas", dot: "var(--mint)", img: "1530549387789-4c1017266635" },
  { label: "Teen Gynecology", labelEs: "Ginecología Adolescente", dot: "var(--amber)", img: "1559757148-5c350d0d3c56" },
  { label: "Telehealth", labelEs: "Telesalud", dot: "var(--violet)", img: "1576091160550-2173dba999ef" },
];

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip combining diacritics (e.g. La Cañada → la-canada)
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const services: Service[] = rawSvcs.map((s) => ({
  slug: slugify(s.label),
  label: s.label,
  labelEs: s.labelEs,
  dot: s.dot,
  image: svcImg(s.img),
  blurb: `Specialized pediatric care for ${s.label.toLowerCase()} at Kids & Teens Medical Group. Same-day and next-day visits are available across our 25 Los Angeles clinics for children and teens ages 0–21.`,
  blurbEs: `Atención pediátrica especializada en ${s.labelEs.toLowerCase()} en Kids & Teens Medical Group. Ofrecemos citas el mismo día o al día siguiente en nuestras 25 clínicas de Los Ángeles para niños y adolescentes de 0 a 21 años.`,
}));

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/** Shared "what to expect" bullets shown on every service page. */
export const SERVICE_POINTS = {
  en: [
    "Same-day & walk-in appointments",
    "Board-certified pediatric specialists",
    "Evening, weekend & telehealth options",
    "Bilingual care in English & Español",
    "All major insurance accepted",
  ],
  es: [
    "Citas el mismo día y sin cita previa",
    "Especialistas pediátricos certificados",
    "Opciones por la tarde, fin de semana y telesalud",
    "Atención bilingüe en inglés y español",
    "Aceptamos todos los seguros principales",
  ],
};

export const whyStats: { value: string; label: string; labelEs: string }[] = [
  { value: "25", label: "Clinics across Los Angeles", labelEs: "Clínicas en Los Ángeles" },
  { value: "18+", label: "Years caring for LA kids", labelEs: "Años cuidando a los niños de LA" },
  { value: "0–21", label: "Every age, infant to adult", labelEs: "Todas las edades, de bebé a adulto" },
  { value: "7 days", label: "Open every day of the week", labelEs: "Abierto todos los días" },
];

export const resources: {
  title: string;
  titleEs: string;
  color: ColorClass;
  subtitle: string;
  subtitleEs: string;
}[] = [
  { title: "Patient Portal", titleEs: "Portal del Paciente", color: "c-blue", subtitle: "Messages, results & records", subtitleEs: "Mensajes, resultados y registros" },
  { title: "Pay Online", titleEs: "Pagar en Línea", color: "c-mint", subtitle: "Quick & secure billing", subtitleEs: "Pago rápido y seguro" },
  { title: "Vaccine Schedule", titleEs: "Calendario de Vacunas", color: "c-amber", subtitle: "Download immunization chart", subtitleEs: "Descargue el calendario de vacunas" },
  { title: "Forms · Refills · Labs", titleEs: "Formularios · Recetas · Labs", color: "c-violet", subtitle: "Sports policy & paperwork", subtitleEs: "Documentos y formularios" },
  { title: "Our Doctors", titleEs: "Nuestros Médicos", color: "c-rose", subtitle: "Meet the medical team", subtitleEs: "Conozca al equipo médico" },
  { title: "Must-Watch Videos", titleEs: "Videos Recomendados", color: "c-blue", subtitle: "Learn from our experts", subtitleEs: "Aprenda de nuestros expertos" },
  { title: "Referrals", titleEs: "Referencias", color: "c-mint", subtitle: "Specialist referral requests", subtitleEs: "Solicitudes a especialistas" },
  { title: "Insurance", titleEs: "Seguros", color: "c-amber", subtitle: "We accept all insurance", subtitleEs: "Aceptamos todos los seguros" },
  { title: "Parent Resources", titleEs: "Recursos para Padres", color: "c-rose", subtitle: "Guides & downloads for parents", subtitleEs: "Guías y descargas para padres" },
];

export const stories: { tag: string; tagEs: string; title: string; titleEs: string; date: string; image: string }[] = [
  {
    tag: "Awareness",
    tagEs: "Concientización",
    title: "Celebrating Autism Awareness Month in Pediatric Care",
    titleEs: "Celebrando el Mes de Concientización sobre el Autismo",
    date: "April 5, 2024",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=640&h=400&fit=crop&q=70",
  },
  {
    tag: "Asthma",
    tagEs: "Asma",
    title: "Breathe Easy This Winter: Protecting Your Child from Asthma",
    titleEs: "Respire Tranquilo Este Invierno: Proteja a su Hijo del Asma",
    date: "December 13, 2023",
    image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=640&h=400&fit=crop&q=70",
  },
  {
    tag: "Safety",
    tagEs: "Seguridad",
    title: "Halloween Safety Tips Every Parent Should Know",
    titleEs: "Consejos de Seguridad de Halloween para Padres",
    date: "October 21, 2023",
    image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?w=640&h=400&fit=crop&q=70",
  },
  {
    tag: "Guide",
    tagEs: "Guía",
    title: "Pediatric ER vs. Urgent Care: What's the Difference?",
    titleEs: "Sala de Emergencias vs. Atención de Urgencia: ¿Cuál es la Diferencia?",
    date: "August 23, 2023",
    image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=640&h=400&fit=crop&q=70",
  },
];

/* ----- Locations: one shared source for the finder and the per-clinic pages. ----- */
export interface Location {
  city: string;
  slug: string;
  street: string;
  addr: string;
}

const rawLocs: { city: string; street: string; addr: string }[] = [
  { city: "Agoura Hills", street: "5115 Clareton Dr, Ste 150", addr: "5115 Clareton Dr, Ste 150, Agoura Hills, CA 91301" },
  { city: "Arcadia", street: "16 E Huntington Dr", addr: "16 E Huntington Dr, Arcadia, CA 91006" },
  { city: "Beverly Hills", street: "8733 Beverly Blvd, #200", addr: "8733 Beverly Blvd, #200, Los Angeles, CA 90048" },
  { city: "Canyon Country", street: "20655 Soledad Canyon Rd #25", addr: "20655 Soledad Canyon Rd #25, Santa Clarita, CA 91351" },
  { city: "Culver City", street: "3831 Hughes Ave, Ste 602", addr: "3831 Hughes Ave, Ste 602, Culver City, CA 90232" },
  { city: "Downey", street: "8201 4th St", addr: "8201 4th St, Downey, CA 90241" },
  { city: "Glendale", street: "1530 E Chevy Chase Dr, Ste 202", addr: "1530 E Chevy Chase Dr, Ste 202, Glendale, CA 91206" },
  { city: "Hollywood", street: "5255 W Sunset Blvd", addr: "5255 W Sunset Blvd, Los Angeles, CA 90027" },
  { city: "La Cañada", street: "1021 Foothill Blvd", addr: "1021 Foothill Blvd, La Cañada Flintridge, CA 91011" },
  { city: "La Mirada", street: "12675 La Mirada Blvd, #200", addr: "12675 La Mirada Blvd, #200, La Mirada, CA 90638" },
  { city: "Mission Hills", street: "10200 Sepulveda Blvd, Ste 220", addr: "10200 Sepulveda Blvd, Ste 220, Mission Hills, CA 91345" },
  { city: "Northridge", street: "8628 Reseda Blvd", addr: "8628 Reseda Blvd, Northridge, CA 91324" },
  { city: "Pasadena", street: "504 S Sierra Madre Blvd", addr: "504 S Sierra Madre Blvd, Pasadena, CA 91107" },
  { city: "Pico Rivera", street: "8337 Telegraph Rd #119", addr: "8337 Telegraph Rd #119, Pico Rivera, CA 90660" },
  { city: "San Fernando", street: "777 Truman St, Ste 105", addr: "777 Truman St, Ste 105, San Fernando, CA 91340" },
  { city: "San Pedro", street: "887 W 9th St", addr: "887 W 9th St, San Pedro, CA 90731" },
  { city: "Santa Monica", street: "2221 Lincoln Blvd #200", addr: "2221 Lincoln Blvd #200, Santa Monica, CA 90405" },
  { city: "Tarzana", street: "18372 Clark St Ste 226", addr: "18372 Clark St Ste 226, Tarzana, CA 91356" },
  { city: "Torrance", street: "3524 Torrance Blvd, Ste 101", addr: "3524 Torrance Blvd, Ste 101, Torrance, CA 90503" },
  { city: "Valencia", street: "24330 McBean Pkwy", addr: "24330 McBean Pkwy, Valencia, CA 91355" },
  { city: "Van Nuys", street: "14426 Gilmore St", addr: "14426 Gilmore St, Van Nuys, CA 91401" },
  { city: "West Hills", street: "7345 Medical Center Dr, #400", addr: "7345 Medical Center Dr, #400, West Hills, CA 91307" },
  { city: "Whittier", street: "13470 Telegraph Rd", addr: "13470 Telegraph Rd, Whittier, CA 90605" },
];

export const locations: Location[] = rawLocs.map((l) => ({ ...l, slug: slugify(l.city) }));

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

/* ----- Shared rich content for the per-service detail pages, modeled on the
   structure of the ktdoctor.com service pages (care approach + ongoing support
   + FAQ). These apply to every service so the pages read in depth. ----- */
export const SERVICE_HIGHLIGHTS: {
  title: string;
  titleEs: string;
  points: { en: string; es: string }[];
}[] = [
  {
    title: "Personalized monitoring",
    titleEs: "Monitoreo personalizado",
    points: [
      {
        en: "Visits scheduled around your child's needs — as often as every 1–3 months when active follow-up is needed.",
        es: "Visitas programadas según las necesidades de su hijo — hasta cada 1 a 3 meses cuando se necesita seguimiento.",
      },
      {
        en: "Higher-risk patients are connected to behavioral therapy, psychiatry, or specialty care.",
        es: "Los pacientes de mayor riesgo se conectan con terapia conductual, psiquiatría o atención especializada.",
      },
      {
        en: "Clear, written care plans that parents can follow at home.",
        es: "Planes de atención claros y por escrito que los padres pueden seguir en casa.",
      },
    ],
  },
  {
    title: "Coordinated, ongoing care",
    titleEs: "Atención coordinada y continua",
    points: [
      {
        en: "Coordination with Children's Hospital LA and trusted community specialists.",
        es: "Coordinación con Children's Hospital LA y especialistas de confianza de la comunidad.",
      },
      {
        en: "School & IEP paperwork review and referrals to regional centers or districts when appropriate.",
        es: "Revisión de documentos escolares e IEP y referencias a centros regionales o distritos cuando corresponde.",
      },
      {
        en: "In-person or telehealth follow-up, 7 days a week.",
        es: "Seguimiento en persona o por telesalud, los 7 días de la semana.",
      },
    ],
  },
];

export const SERVICE_FAQS: { q: string; qEs: string; a: string; aEs: string }[] = [
  {
    q: "Do you accept new patients?",
    qEs: "¿Aceptan pacientes nuevos?",
    a: "Yes — new and returning patients can book online in under a minute, with same-day and next-day appointments available across our 25 clinics.",
    aEs: "Sí — pacientes nuevos y existentes pueden reservar en línea en menos de un minuto, con citas el mismo día o al día siguiente en nuestras 25 clínicas.",
  },
  {
    q: "What ages do you care for?",
    qEs: "¿Qué edades atienden?",
    a: "We care for children and teens from birth through age 21.",
    aEs: "Atendemos a niños y adolescentes desde el nacimiento hasta los 21 años.",
  },
  {
    q: "Do you accept insurance?",
    qEs: "¿Aceptan seguro?",
    a: "We accept most major insurance plans, including any HMO/IPA. Affordable payment options are available for families without insurance.",
    aEs: "Aceptamos la mayoría de los planes de seguro, incluido cualquier HMO/IPA. Hay opciones de pago accesibles para familias sin seguro.",
  },
];

/* ----- Patient Resources hub (matches the site's Resources menu groups). ----- */
export interface ResourceLink {
  title: string;
  titleEs: string;
  desc: string;
  descEs: string;
  href: string;
  external?: boolean;
}

export const PATIENT_RESOURCES: {
  patient: ResourceLink[];
  quick: ResourceLink[];
} = {
  patient: [
    { title: "Vaccine Schedule", titleEs: "Calendario de Vacunas", desc: "Download the immunization chart", descEs: "Descargue el calendario de vacunas", href: "/parent-resources" },
    { title: "Patient Portal", titleEs: "Portal del Paciente", desc: "Messages, results & records", descEs: "Mensajes, resultados y registros", href: "https://healow.com/", external: true },
    { title: "Our Doctors", titleEs: "Nuestros Médicos", desc: "Meet the medical team", descEs: "Conozca al equipo médico", href: "https://healow.com/", external: true },
    { title: "Other Resources", titleEs: "Otros Recursos", desc: "Forms, refills & more", descEs: "Formularios, recetas y más", href: "/parent-resources" },
  ],
  quick: [
    { title: "Free Vaccinations", titleEs: "Vacunas Gratuitas", desc: "No-cost immunizations", descEs: "Vacunas sin costo", href: "/services/free-vaccines" },
    { title: "Baby on the Way?", titleEs: "¿Viene un Bebé?", desc: "Care for expectant parents", descEs: "Atención para futuros padres", href: "/services/expectant-parents" },
    { title: "Insurance", titleEs: "Seguros", desc: "We accept all insurance", descEs: "Aceptamos todos los seguros", href: "/about" },
  ],
};

/* ----- Parent Resources page download cards. ----- */
export const PARENT_RESOURCE_CARDS: {
  title: string;
  titleEs: string;
  body: string;
  bodyEs: string;
  cta: string;
  ctaEs: string;
  href: string;
}[] = [
  {
    title: "Vaccine Schedule",
    titleEs: "Calendario de Vacunas",
    body: "Why is vaccination important? Vaccines are one of the best ways to prevent illnesses and protect your child's health. They help build immunity and protect against diseases such as measles, mumps, rubella, chickenpox, and more.",
    bodyEs: "¿Por qué es importante la vacunación? Las vacunas son una de las mejores formas de prevenir enfermedades y proteger la salud de su hijo. Ayudan a desarrollar inmunidad contra enfermedades como el sarampión, las paperas, la rubéola, la varicela y más.",
    cta: "Download schedule",
    ctaEs: "Descargar calendario",
    href: "#",
  },
  {
    title: "Sports Physical",
    titleEs: "Examen Físico Deportivo",
    body: "Why are sports physicals essential? Sports physicals are an important part of identifying any underlying health conditions or potential risks that could affect a child's ability to engage in sports safely. These help keep young athletes healthy and safe.",
    bodyEs: "¿Por qué son esenciales los exámenes físicos deportivos? Ayudan a identificar condiciones de salud subyacentes o riesgos que podrían afectar la capacidad de un niño para practicar deportes de forma segura, manteniendo a los jóvenes atletas sanos y protegidos.",
    cta: "Download letter",
    ctaEs: "Descargar carta",
    href: "#",
  },
];

/** Clinic weekly hours (Mon=0 … Sun=6). Used for the hero "open today" badge. */
export const LOCATION_HOURS: [string, string][] = [
  ["Monday", "9:00 AM – 6:00 PM"],
  ["Tuesday", "9:00 AM – 6:00 PM"],
  ["Wednesday", "9:00 AM – 6:00 PM"],
  ["Thursday", "9:00 AM – 6:00 PM"],
  ["Friday", "9:00 AM – 6:00 PM"],
  ["Saturday", "9:00 AM – 1:00 PM"],
  ["Sunday", "Closed"],
];

/* ----- Per-clinic providers (representative placeholder data + photos). ----- */
export const LOCATION_DOCS: { name: string; role: string; roleEs: string; photo: string }[] = [
  {
    name: "Dr. A. Rivera, MD",
    role: "Pediatrics · English, Español",
    roleEs: "Pediatría · Inglés, Español",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Dr. S. Chen, MD",
    role: "Pediatrics · English, Mandarin",
    roleEs: "Pediatría · Inglés, Mandarín",
    photo: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Dr. M. Patel, MD",
    role: "Adolescent Medicine · English, Hindi",
    roleEs: "Medicina del Adolescente · Inglés, Hindi",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

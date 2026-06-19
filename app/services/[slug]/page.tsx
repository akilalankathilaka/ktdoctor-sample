import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import UtilityStrip from "@/components/UtilityStrip";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BookLink from "@/components/BookLink";
import FallbackImage from "@/components/FallbackImage";
import { T } from "@/components/LanguageProvider";
import {
  services,
  getService,
  SERVICE_POINTS,
  SERVICE_HIGHLIGHTS,
  SERVICE_FAQS,
  SERVICE_IMAGE_FALLBACK,
} from "@/lib/data";
import { CalendarIcon, PinIcon, CheckIcon, ArrowRight } from "@/components/icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return { title: "Services — Kids & Teens Medical Group" };
  return { title: `${svc.label} — Kids & Teens Medical Group`, description: svc.blurb };
}

const firstSentence = (s: string) => {
  const i = s.indexOf(". ");
  return i === -1 ? s : s.slice(0, i + 1);
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const related = services.filter((s) => s.slug !== svc.slug).slice(0, 8);
  const heroHighlight = SERVICE_HIGHLIGHTS[0];
  const bodyHighlight = SERVICE_HIGHLIGHTS[1];

  const overviewEn = `When a child needs ${svc.label.toLowerCase()} care, our board-certified pediatricians take time to evaluate, explain options in plain language, and build a plan with you — whether your child needs a one-time visit or ongoing support. The Kids & Teens team coordinates care across our 25 Los Angeles clinics, in person or by telehealth.`;
  const overviewEs = `Cuando un niño necesita atención de ${svc.labelEs.toLowerCase()}, nuestros pediatras certificados se toman el tiempo de evaluar, explicar las opciones con claridad y crear un plan con usted — ya sea una visita única o seguimiento continuo. El equipo de Kids & Teens coordina la atención en nuestras 25 clínicas de Los Ángeles, en persona o por telesalud.`;

  return (
    <>
      <UtilityStrip />
      <SiteHeader />

      <div className="crumb">
        <div className="wrap">
          <Link href="/">
            <T en="Home" es="Inicio" />
          </Link>
          <ChevronRight />
          <Link href="/#services">
            <T en="Services" es="Servicios" />
          </Link>
          <ChevronRight />
          <span className="cur">
            <ServiceLabel slug={svc.slug} />
          </span>
        </div>
      </div>

      {/* HERO — full-bleed image left, tinted content panel right */}
      <section className="svc-herosec">
        <div className="wrap">
          <div className="svc-hero">
        <div className="svc-hero-media">
          <FallbackImage src={svc.image} fallback={SERVICE_IMAGE_FALLBACK} alt="" />
        </div>
        <div className="svc-hero-body">
          <span className="eyebrow">
            <T en="Pediatric Services · Ages 0–21" es="Servicios Pediátricos · 0–21 años" />
          </span>
          <h1>
            <ServiceLabel slug={svc.slug} />
          </h1>
          <p className="lede">
            <T en={svc.blurb} es={svc.blurbEs} />
          </p>
          <div className="svc-mono">
            <h3>
              <T en={heroHighlight.title} es={heroHighlight.titleEs} />
            </h3>
            <div className="why-points">
              {heroHighlight.points.map((p) => (
                <div className="wp" key={p.en}>
                  <CheckIcon />
                  <T en={p.en} es={p.es} />
                </div>
              ))}
            </div>
          </div>
          <div className="svc-hero-cta">
            <BookLink className="btn btn-primary">
              <CalendarIcon />
              <T en="Book an appointment" es="Reservar una cita" />
            </BookLink>
            <Link className="btn btn-ghost" href="/#locations">
              <PinIcon />
              <T en="Find a clinic" es="Buscar una clínica" />
            </Link>
          </div>
        </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="block" style={{ paddingTop: 72, paddingBottom: 40 }}>
        <div className="wrap">
          <div className="svc-detail">
            <h2>
              <T en="Overview" es="Descripción general" />
            </h2>
            <p className="body">
              <T en={overviewEn} es={overviewEs} />
            </p>

            <h2>
              <T en={bodyHighlight.title} es={bodyHighlight.titleEs} />
            </h2>
            <div className="why-points">
              {bodyHighlight.points.map((p) => (
                <div className="wp" key={p.en}>
                  <CheckIcon />
                  <T en={p.en} es={p.es} />
                </div>
              ))}
            </div>

            <h2>
              <T en="What to expect" es="Qué esperar" />
            </h2>
            <div className="why-points">
              {SERVICE_POINTS.en.map((en, i) => (
                <div className="wp" key={en}>
                  <CheckIcon />
                  <T en={en} es={SERVICE_POINTS.es[i]} />
                </div>
              ))}
            </div>

            <h2>
              <T en="Frequently asked questions" es="Preguntas frecuentes" />
            </h2>
            <div className="faq-list">
              {SERVICE_FAQS.map((f) => (
                <div className="faq-item" key={f.q}>
                  <h4>
                    <T en={f.q} es={f.qEs} />
                  </h4>
                  <p>
                    <T en={f.a} es={f.aEs} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="block" style={{ paddingTop: 0, paddingBottom: 80 }}>
        <div className="wrap">
          <h2 style={{ fontSize: "clamp(26px,3vw,34px)" }}>
            <T en="Other services" es="Otros servicios" />
          </h2>
          <div className="rel-grid">
            {related.map((r) => (
              <Link className="rel-card" href={`/services/${r.slug}`} key={r.slug}>
                <h4>
                  <ServiceLabel slug={r.slug} />
                </h4>
                <p>
                  <T en={firstSentence(r.blurb)} es={firstSentence(r.blurbEs)} />
                </p>
                <span className="rel-more">
                  <T en="See details" es="Ver detalles" /> <ArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>
                <T en="Ready to book a visit?" es="¿Listo para reservar una visita?" />
              </h2>
              <p>
                <T
                  en="Same-day & next-day appointments for ages 0–21, online in under a minute."
                  es="Citas el mismo día o al día siguiente para edades 0–21, en línea en menos de un minuto."
                />
              </p>
            </div>
            <div className="cta-actions">
              <BookLink className="btn btn-light">
                <T en="Book Online" es="Reservar en Línea" />
                <ArrowRight />
              </BookLink>
              <a className="btn btn-outline" href="tel:+18183615437">
                <T en="Call" es="Llamar" /> (818) 361-5437
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ServiceLabel({ slug }: { slug: string }) {
  const svc = getService(slug);
  if (!svc) return null;
  return <T en={svc.label} es={svc.labelEs} />;
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

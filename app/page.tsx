"use client";

import Link from "next/link";
import UtilityStrip from "@/components/UtilityStrip";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import LocationFinder from "@/components/LocationFinder";
import Footer from "@/components/Footer";
import { useLang, tr } from "@/components/LanguageProvider";
import { KT, HEALOW_URL } from "@/lib/config";
import { care, services, whyStats, resources, stories } from "@/lib/data";
import {
  ArrowRight,
  CalendarCheckIcon,
  CalendarIcon,
  CareIcon,
  CheckIcon,
  ClockIcon,
  PhoneIcon,
  PinIcon,
  UserIcon,
  RESOURCE_ICONS,
} from "@/components/icons";

const whyPoints: [string, string][] = [
  ["Same-day & walk-in appointments", "Citas el mismo día y sin cita previa"],
  ["Evening, weekend & telehealth hours", "Horarios de tarde, fin de semana y telesalud"],
  ["Bilingual care, English & Español", "Atención bilingüe, inglés y español"],
  ["All major insurance accepted", "Aceptamos los seguros principales"],
];

const partners = [
  "Children's Hospital LA",
  "Cedars-Sinai",
  "LA Care",
  "Optum",
  "Molina Healthcare",
  "Regal Medical",
  "Providence LA",
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

// resource card destinations (matches resources[] order)
const resourceHref = (title: string): string | null => {
  const t = title.toLowerCase();
  if (t.includes("parent")) return "/parent-resources";
  if (t.includes("portal")) return KT.patientPortal;
  if (t.includes("pay")) return KT.payOnline;
  if (t.includes("doctor")) return KT.findDoctor;
  if (t.includes("referral")) return KT.referrals;
  if (t.includes("forms") || t.includes("refill") || t.includes("lab")) return KT.medRefills;
  return null;
};

export default function Home() {
  const { lang } = useLang();

  return (
    <>
      <UtilityStrip />
      <SiteHeader />

      <span id="top" />
      <Hero />

      {/* QUICK ACTIONS */}
      <div className="quick">
        <div className="wrap">
          <div className="quick-grid">
            <a className="qcard" href={HEALOW_URL} {...ext}>
              <span className="ico c-blue">
                <CalendarCheckIcon />
              </span>
              <h3>{tr(lang, "Book an Appointment", "Reservar una Cita")}</h3>
              <p>
                {tr(
                  lang,
                  "New & returning patients can book a same-day visit online in under a minute.",
                  "Pacientes nuevos y existentes pueden reservar una visita el mismo día en menos de un minuto."
                )}
              </p>
              <span className="go">
                {tr(lang, "Book now", "Reservar")} <ArrowRight />
              </span>
            </a>
            <a className="qcard" href={KT.findDoctor} {...ext}>
              <span className="ico c-mint">
                <UserIcon />
              </span>
              <h3>{tr(lang, "Find a Doctor", "Buscar un Médico")}</h3>
              <p>
                {tr(
                  lang,
                  "Choose the right pediatrician for your family from our trusted medical team.",
                  "Elija el pediatra ideal para su familia de nuestro equipo médico de confianza."
                )}
              </p>
              <span className="go">
                {tr(lang, "See providers", "Ver médicos")} <ArrowRight />
              </span>
            </a>
            <a className="qcard" href="#locations">
              <span className="ico c-amber">
                <PinIcon />
              </span>
              <h3>{tr(lang, "Find a Clinic", "Buscar una Clínica")}</h3>
              <p>
                {tr(
                  lang,
                  "25 locations across LA with addresses, hours, and contact details.",
                  "25 ubicaciones en LA con direcciones, horarios y datos de contacto."
                )}
              </p>
              <span className="go">
                {tr(lang, "View locations", "Ver ubicaciones")} <ArrowRight />
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* CARE */}
      <section className="block" id="care">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow plain" style={{ justifyContent: "center" }}>
              {tr(lang, "Ways to get care", "Formas de recibir atención")}
            </span>
            <h2>{tr(lang, "Care that fits your family's day", "Atención que se ajusta al día de su familia")}</h2>
            <p>
              {tr(
                lang,
                "From a sniffle to a sports injury — in person or on video, there's a fast, convenient way to see a pediatrician.",
                "Desde un resfriado hasta una lesión deportiva — en persona o por video, hay una forma rápida y cómoda de ver a un pediatra."
              )}
            </p>
          </div>
          <div className="care-grid">
            {care.map((c) => (
              <article className="care-card" key={c.title}>
                <span className={"chip " + c.color}>{tr(lang, c.chip, c.chipEs)}</span>
                <span className={"ico " + c.color}>
                  <CareIcon k={c.iconKey} />
                </span>
                <h3>{tr(lang, c.title, c.titleEs)}</h3>
                <p>{tr(lang, c.description, c.descriptionEs)}</p>
                <ul className="care-meta">
                  {(lang === "es" ? c.metaEs : c.meta).map((m) => (
                    <li key={m}>
                      <ClockIcon />
                      {m}
                    </li>
                  ))}
                </ul>
                <a className="care-link" href={HEALOW_URL} {...ext}>
                  {tr(lang, "Book now", "Reservar")} <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="block" id="locations" style={{ background: "var(--tint)" }}>
        <div className="wrap">
          <LocationFinder />
        </div>
      </section>

      {/* SERVICES */}
      <section className="block" id="services">
        <div className="wrap">
          <div
            className="sec-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "none",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow plain">{tr(lang, "20 specialties", "20 especialidades")}</span>
              <h2 style={{ fontSize: "clamp(32px,4vw,48px)", margin: "14px 0 0" }}>
                {tr(lang, "Comprehensive pediatric services", "Servicios pediátricos integrales")}
              </h2>
            </div>
            <p style={{ fontSize: 17, color: "var(--ink-2)", fontWeight: 500, maxWidth: "36ch" }}>
              {tr(
                lang,
                "One network, every kind of care your child might need — from everyday checkups to focused specialties.",
                "Una red, cada tipo de atención que su hijo pueda necesitar — desde chequeos hasta especialidades."
              )}
            </p>
          </div>
          <div className="svc-grid">
            {services.map((s) => (
              <Link className="svc-chip" href={`/services/${s.slug}`} key={s.slug}>
                <span className="dot" style={{ background: s.dot }} />
                {tr(lang, s.label, s.labelEs)}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="block" style={{ background: "var(--blue-tint)" }}>
        <div className="wrap">
          <div className="why-grid">
            <div className="why-copy">
              <span className="eyebrow plain">{tr(lang, "Why families choose us", "Por qué nos eligen las familias")}</span>
              <h2 style={{ fontSize: "clamp(32px,4vw,48px)", margin: "14px 0 18px" }}>
                {tr(
                  lang,
                  "Changing the way you think about children's health",
                  "Cambiando la forma de pensar sobre la salud infantil"
                )}
              </h2>
              <p style={{ fontSize: 18, color: "var(--ink-2)", fontWeight: 500, marginBottom: 26 }}>
                {tr(
                  lang,
                  "For 18 years, Kids & Teens Medical Group has been Southern California's leading provider of pediatric care with extended hours — built around your family's schedule.",
                  "Durante 18 años, Kids & Teens Medical Group ha sido el proveedor líder del sur de California en atención pediátrica con horarios extendidos — pensado para el horario de su familia."
                )}
              </p>
              <div className="why-points">
                {whyPoints.map(([en, es]) => (
                  <div className="wp" key={en}>
                    <CheckIcon />
                    {tr(lang, en, es)}
                  </div>
                ))}
              </div>
            </div>
            <div className="why-stats">
              {whyStats.map((s) => (
                <div className="why-stat" key={s.label}>
                  <b>{s.value}</b>
                  <span>{tr(lang, s.label, s.labelEs)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section className="block" id="resources">
        <div className="wrap">
          <div className="sec-head center">
            <span className="eyebrow plain" style={{ justifyContent: "center" }}>
              {tr(lang, "Everything in one place", "Todo en un solo lugar")}
            </span>
            <h2>{tr(lang, "Patient resources", "Recursos para pacientes")}</h2>
            <p>
              {tr(
                lang,
                "Portals, forms, schedules, and answers — no more hunting across the site.",
                "Portales, formularios, calendarios y respuestas — sin buscar por todo el sitio."
              )}
            </p>
          </div>
          <div className="res-grid">
            {resources.map((r, i) => {
              const href = resourceHref(r.title);
              const internal = href?.startsWith("/");
              const inner = (
                <>
                  <span className={"ico " + r.color}>{RESOURCE_ICONS[i]}</span>
                  <h4>{tr(lang, r.title, r.titleEs)}</h4>
                  <p>{tr(lang, r.subtitle, r.subtitleEs)}</p>
                </>
              );
              if (internal) {
                return (
                  <Link className="res-card" href={href!} key={r.title}>
                    {inner}
                  </Link>
                );
              }
              return href ? (
                <a className="res-card" href={href} key={r.title} {...ext}>
                  {inner}
                </a>
              ) : (
                <a className="res-card" href="#" key={r.title}>
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="partners">
        <div className="wrap">
          <p className="plabel">{tr(lang, "Trusted partners & affiliations", "Socios y afiliaciones de confianza")}</p>
          <div className="prow">
            {partners.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES */}
      <section className="block" id="about">
        <div className="wrap">
          <div
            className="sec-head"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              maxWidth: "none",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow plain">{tr(lang, "Parent resources & news", "Recursos y noticias para padres")}</span>
              <h2 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "14px 0 0" }}>
                {tr(lang, "Featured stories", "Historias destacadas")}
              </h2>
            </div>
            <a className="btn btn-ghost btn-sm" href="#">
              {tr(lang, "View all articles →", "Ver todos los artículos →")}
            </a>
          </div>
          <div className="story-grid">
            {stories.map((s) => (
              <a className="story-card" href="#" key={s.title}>
                <div className="story-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" loading="lazy" />
                </div>
                <div className="sbody">
                  <span className="tag">{tr(lang, s.tag, s.tagEs)}</span>
                  <h3>{tr(lang, s.title, s.titleEs)}</h3>
                  <span className="date">{s.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="block" style={{ background: "var(--tint)", paddingTop: 64, paddingBottom: 64 }}>
        <div className="wrap">
          <div className="testi">
            <div className="stars">★★★★★</div>
            <p>
              {tr(
                lang,
                "“The doctors actually listen, the wait is short, and there's always a clinic close by when my kids get sick. After 6 years I wouldn't take them anywhere else.”",
                "“Los médicos realmente escuchan, la espera es corta y siempre hay una clínica cerca cuando mis hijos se enferman. Después de 6 años no los llevaría a otro lugar.”"
              )}
            </p>
            <div className="by">
              <span className="av">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces&q=70"
                  alt=""
                />
              </span>
              <span>
                <b>{tr(lang, "A Kids & Teens parent", "Un padre de Kids & Teens")}</b>
                <br />
                <span className="muted">Los Angeles, CA</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="book">
        <div className="wrap">
          <div className="cta-inner">
            <div>
              <h2>{tr(lang, "Ready to book a same-day visit?", "¿Listo para reservar una visita el mismo día?")}</h2>
              <p>
                {tr(
                  lang,
                  "New & returning patients can book online in under a minute — or reach us by phone or text, in English or Español.",
                  "Pacientes nuevos y existentes pueden reservar en línea en menos de un minuto — o contáctenos por teléfono o texto, en inglés o español."
                )}
              </p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-light" href={HEALOW_URL} {...ext}>
                <CalendarIcon />
                {tr(lang, "Book Online", "Reservar en Línea")}
              </a>
              <a className="btn btn-outline" href={`tel:${KT.phone}`}>
                <PhoneIcon />
                {tr(lang, "Call", "Llamar")} {KT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

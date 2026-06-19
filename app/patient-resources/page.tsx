import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import UtilityStrip from "@/components/UtilityStrip";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { T } from "@/components/LanguageProvider";
import { PATIENT_RESOURCES, type ResourceLink } from "@/lib/data";
import {
  CalendarIcon,
  FileTextIcon,
  UserIcon,
  CheckIcon,
  CareIcon,
  LockIcon,
  ArrowRight,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Patient Resources — Kids & Teens Medical Group",
  description:
    "Patient portal, vaccine schedule, forms, insurance and quick services — everything Kids & Teens patients and parents need in one place.",
};

const iconFor = (title: string): ReactNode => {
  const t = title.toLowerCase();
  if (t.includes("vaccine") || t.includes("vacc")) return <CalendarIcon />;
  if (t.includes("portal")) return <FileTextIcon />;
  if (t.includes("doctor")) return <UserIcon />;
  if (t.includes("baby")) return <CareIcon k="heart" />;
  if (t.includes("insurance")) return <LockIcon />;
  if (t.includes("free")) return <CheckIcon />;
  return <FileTextIcon />;
};

const colorFor = (i: number) => ["c-blue", "c-mint", "c-amber", "c-violet", "c-rose"][i % 5];

function ResourceGrid({ items }: { items: ResourceLink[] }) {
  return (
    <div className="res-grid">
      {items.map((r, i) => {
        const inner = (
          <>
            <span className={"ico " + colorFor(i)}>{iconFor(r.title)}</span>
            <h4>
              <T en={r.title} es={r.titleEs} />
            </h4>
            <p>
              <T en={r.desc} es={r.descEs} />
            </p>
          </>
        );
        return r.external ? (
          <a className="res-card" href={r.href} key={r.title} target="_blank" rel="noopener noreferrer">
            {inner}
          </a>
        ) : (
          <Link className="res-card" href={r.href} key={r.title}>
            {inner}
          </Link>
        );
      })}
    </div>
  );
}

export default function PatientResourcesPage() {
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
          <span className="cur">
            <T en="Patient Resources" es="Recursos para Pacientes" />
          </span>
        </div>
      </div>

      <section className="block" style={{ paddingTop: 40 }}>
        <div className="wrap">
          <div className="sec-head" style={{ maxWidth: 720 }}>
            <span className="eyebrow plain">
              <T en="Everything in one place" es="Todo en un solo lugar" />
            </span>
            <h1 style={{ fontSize: "clamp(32px,4vw,48px)", margin: "14px 0 0" }}>
              <T en="Patient Resources" es="Recursos para Pacientes" />
            </h1>
            <p>
              <T
                en="Portals, forms, schedules, and quick services — no more hunting across the site."
                es="Portales, formularios, calendarios y servicios rápidos — sin buscar por todo el sitio."
              />
            </p>
          </div>

          <h3 style={{ fontSize: 18, margin: "40px 0 18px", letterSpacing: "-0.01em" }}>
            <T en="Patient Resources" es="Recursos para Pacientes" />
          </h3>
          <ResourceGrid items={PATIENT_RESOURCES.patient} />

          <h3 style={{ fontSize: 18, margin: "40px 0 18px", letterSpacing: "-0.01em" }}>
            <T en="Quick Services" es="Servicios Rápidos" />
          </h3>
          <ResourceGrid items={PATIENT_RESOURCES.quick} />

          <div style={{ marginTop: 36 }}>
            <Link className="btn btn-ghost btn-sm" href="/parent-resources">
              <T en="See parent resources" es="Ver recursos para padres" /> <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

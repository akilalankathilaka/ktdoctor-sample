"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { KT, HEALOW_URL } from "@/lib/config";
import { services, PATIENT_RESOURCES } from "@/lib/data";
import { useLang, tr } from "./LanguageProvider";
import { ChevronDown, MenuIcon, CloseIcon, CareIcon } from "./icons";
import Logo from "./Logo";

const careMega = [
  { title: "Primary Care", titleEs: "Atención Primaria", sub: "Well & sick visits, ages 0–21", subEs: "Chequeos y enfermedad, 0–21", color: "c-blue", icon: "M3 12h4l2 5 4-12 2 7h6" },
  { title: "Urgent Care", titleEs: "Atención de Urgencia", sub: "Immediate booking, less waiting", subEs: "Reserva inmediata, menos espera", color: "c-rose", icon: "M12 2v20M2 12h20" },
  { title: "Telehealth", titleEs: "Telesalud", sub: "Video visits, evenings too", subEs: "Visitas por video, también de tarde", color: "c-mint", icon: "rect" },
  { title: "After-Hours Care", titleEs: "Fuera de Horario", sub: "Evening & weekend hours", subEs: "Tardes y fines de semana", color: "c-amber", icon: "clock" },
  { title: "Family Practice", titleEs: "Medicina Familiar", sub: "Care for the whole family", subEs: "Atención para toda la familia", color: "c-violet", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" },
  { title: "Newborn & Delivery", titleEs: "Recién Nacidos", sub: "First visit at your hospital", subEs: "Primera visita en el hospital", color: "c-blue", icon: "heart" },
];

// three balanced columns of the 20 services for the mega-menu
const svcCols: { heading: string; headingEs: string; from: number; to: number }[] = [
  { heading: "Everyday Care", headingEs: "Atención Diaria", from: 0, to: 7 },
  { heading: "Specialties", headingEs: "Especialidades", from: 7, to: 14 },
  { heading: "Prevention & More", headingEs: "Prevención y Más", from: 14, to: 20 },
];

export default function SiteHeader() {
  const { lang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<"care" | "svc" | "res" | null>(null);
  const [drawer, setDrawer] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMega(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const enter = (m: "care" | "svc" | "res") => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(m);
  };
  const leave = () => {
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  return (
    <>
      <header className={"site" + (scrolled ? " scrolled" : "")} id="hdr">
        <div className="wrap">
          <nav className="nav">
            <Link className="logo" href="/">
              <Logo imgClassName="logo-img">
                <span className="m">K&amp;T</span>
                <span>
                  <b>Kids &amp; Teens</b>
                  <small>Medical Group · Los Angeles</small>
                </span>
              </Logo>
            </Link>
            <ul className="nav-links" id="navlinks" ref={navRef}>
              <li
                className={openMega === "care" ? "open" : ""}
                onMouseEnter={() => enter("care")}
                onMouseLeave={leave}
              >
                <button onClick={() => setOpenMega(openMega === "care" ? null : "care")}>
                  {tr(lang, "Care", "Atención")} <ChevronDown className="chev" />
                </button>
                <div className="mega mega-care">
                  {careMega.map((c) => (
                    <Link className="mega-item" href="/#care" key={c.title} onClick={() => setOpenMega(null)}>
                      <span className={"ico " + c.color}>
                        <CareIcon k={c.icon} />
                      </span>
                      <span>
                        <h4>{tr(lang, c.title, c.titleEs)}</h4>
                        <p>{tr(lang, c.sub, c.subEs)}</p>
                      </span>
                    </Link>
                  ))}
                </div>
              </li>
              <li
                className={openMega === "svc" ? "open" : ""}
                onMouseEnter={() => enter("svc")}
                onMouseLeave={leave}
              >
                <button onClick={() => setOpenMega(openMega === "svc" ? null : "svc")}>
                  {tr(lang, "Services", "Servicios")} <ChevronDown className="chev" />
                </button>
                <div className="mega mega-svc">
                  {svcCols.map((g) => (
                    <span key={g.heading} style={{ display: "contents" }}>
                      <span className="ch">{tr(lang, g.heading, g.headingEs)}</span>
                      {services.slice(g.from, g.to).map((s) => (
                        <Link href={`/services/${s.slug}`} key={s.slug} onClick={() => setOpenMega(null)}>
                          {tr(lang, s.label, s.labelEs)}
                        </Link>
                      ))}
                    </span>
                  ))}
                  <div className="mega-foot">
                    <span>{tr(lang, "20 specialties under one network", "20 especialidades en una red")}</span>
                    <Link href="/#services" onClick={() => setOpenMega(null)}>
                      {tr(lang, "View all services →", "Ver todos los servicios →")}
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/#locations">{tr(lang, "Locations", "Ubicaciones")}</Link>
              </li>
              <li>
                <a href={KT.findDoctor} target="_blank" rel="noopener noreferrer">
                  {tr(lang, "Find a Doctor", "Buscar Médico")}
                </a>
              </li>
              <li
                className={openMega === "res" ? "open" : ""}
                onMouseEnter={() => enter("res")}
                onMouseLeave={leave}
              >
                <button onClick={() => setOpenMega(openMega === "res" ? null : "res")}>
                  {tr(lang, "Resources", "Recursos")} <ChevronDown className="chev" />
                </button>
                <div className="mega mega-svc">
                  <span style={{ display: "contents" }}>
                    <span className="ch">{tr(lang, "Patient Resources", "Recursos para Pacientes")}</span>
                    {PATIENT_RESOURCES.patient.map((r) =>
                      r.external ? (
                        <a href={r.href} key={r.title} target="_blank" rel="noopener noreferrer" onClick={() => setOpenMega(null)}>
                          {tr(lang, r.title, r.titleEs)}
                        </a>
                      ) : (
                        <Link href={r.href} key={r.title} onClick={() => setOpenMega(null)}>
                          {tr(lang, r.title, r.titleEs)}
                        </Link>
                      )
                    )}
                  </span>
                  <span style={{ display: "contents" }}>
                    <span className="ch">{tr(lang, "Quick Services", "Servicios Rápidos")}</span>
                    {PATIENT_RESOURCES.quick.map((r) =>
                      r.external ? (
                        <a href={r.href} key={r.title} target="_blank" rel="noopener noreferrer" onClick={() => setOpenMega(null)}>
                          {tr(lang, r.title, r.titleEs)}
                        </a>
                      ) : (
                        <Link href={r.href} key={r.title} onClick={() => setOpenMega(null)}>
                          {tr(lang, r.title, r.titleEs)}
                        </Link>
                      )
                    )}
                  </span>
                  <div className="mega-foot">
                    <span>{tr(lang, "Forms, schedules & portals", "Formularios, calendarios y portales")}</span>
                    <Link href="/patient-resources" onClick={() => setOpenMega(null)}>
                      {tr(lang, "View all resources →", "Ver todos los recursos →")}
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link href="/about">{tr(lang, "About", "Nosotros")}</Link>
              </li>
            </ul>
            <div className="nav-cta">
              <a className="btn btn-ghost btn-sm hide" href={KT.findDoctor} target="_blank" rel="noopener noreferrer">
                {tr(lang, "Find a Doctor", "Buscar Médico")}
              </a>
              <a className="btn btn-primary btn-sm" href={HEALOW_URL} target="_blank" rel="noopener noreferrer">
                {tr(lang, "Book Now", "Reservar")}
              </a>
              <button className="burger" aria-label="Menu" onClick={() => setDrawer(true)}>
                <MenuIcon />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile nav drawer */}
      <div className={"mscrim" + (drawer ? " on" : "")} onClick={() => setDrawer(false)} />
      <aside className={"mnav" + (drawer ? " on" : "")} aria-hidden={!drawer}>
        <div className="mnav-head">
          <Link className="logo" href="/" onClick={() => setDrawer(false)}>
            <Logo imgClassName="logo-img">
              <span className="m">K&amp;T</span>
              <b>Kids &amp; Teens</b>
            </Logo>
          </Link>
          <button className="burger" aria-label="Close" onClick={() => setDrawer(false)}>
            <CloseIcon />
          </button>
        </div>
        <nav className="mnav-links">
          <Link href="/#care" onClick={() => setDrawer(false)}>{tr(lang, "Care", "Atención")}</Link>
          <Link href="/#services" onClick={() => setDrawer(false)}>{tr(lang, "Services", "Servicios")}</Link>
          <Link href="/#locations" onClick={() => setDrawer(false)}>{tr(lang, "Locations", "Ubicaciones")}</Link>
          <a href={KT.findDoctor} target="_blank" rel="noopener noreferrer" onClick={() => setDrawer(false)}>
            {tr(lang, "Find a Doctor", "Buscar Médico")}
          </a>
          <Link href="/patient-resources" onClick={() => setDrawer(false)}>{tr(lang, "Resources", "Recursos")}</Link>
          <Link href="/about" onClick={() => setDrawer(false)}>{tr(lang, "About", "Nosotros")}</Link>
        </nav>
        <div className="mnav-cta">
          <a className="btn btn-primary" href={HEALOW_URL} target="_blank" rel="noopener noreferrer" onClick={() => setDrawer(false)}>
            {tr(lang, "Book Now", "Reservar")}
          </a>
          <a className="btn btn-ghost" href={`tel:${KT.phone}`}>
            {tr(lang, "Call Us", "Llámenos")}
          </a>
        </div>
      </aside>
    </>
  );
}

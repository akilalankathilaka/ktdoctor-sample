"use client";

import Link from "next/link";
import { KT, HEALOW_URL } from "@/lib/config";
import { useLang, tr } from "./LanguageProvider";
import {
  PhoneIcon,
  ChatIcon,
  FacebookIcon,
  InstagramIcon,
  XIcon,
  YouTubeIcon,
} from "./icons";

export default function Footer() {
  const { lang } = useLang();
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="logo" href="/">
              <span className="m">K&amp;T</span>
              <span>
                <b style={{ color: "#fff" }}>Kids &amp; Teens</b>
                <small style={{ color: "rgba(255,255,255,.5)" }}>Medical Group · Los Angeles</small>
              </span>
            </Link>
            <p>
              {tr(
                lang,
                "The leading provider of pediatric care with extended hours in Southern California. Changing the way you think about children's health.",
                "El proveedor líder de atención pediátrica con horarios extendidos en el sur de California. Cambiando la forma de pensar sobre la salud infantil."
              )}
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook"><FacebookIcon /></a>
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="X"><XIcon /></a>
              <a href="#" aria-label="YouTube"><YouTubeIcon /></a>
            </div>
          </div>
          <div className="foot-cols">
            <div className="fc">
              <h5>{tr(lang, "Care", "Atención")}</h5>
              <Link href="/#care">{tr(lang, "Primary Care", "Atención Primaria")}</Link>
              <Link href="/#care">{tr(lang, "Urgent Care", "Atención de Urgencia")}</Link>
              <Link href="/#care">{tr(lang, "Telehealth", "Telesalud")}</Link>
              <Link href="/#care">{tr(lang, "After-Hours", "Fuera de Horario")}</Link>
              <Link href="/#care">{tr(lang, "Family Practice", "Medicina Familiar")}</Link>
            </div>
            <div className="fc">
              <h5>{tr(lang, "For Patients", "Para Pacientes")}</h5>
              <a href={HEALOW_URL} {...ext}>{tr(lang, "Book Appointment", "Reservar Cita")}</a>
              <a href={KT.findDoctor} {...ext}>{tr(lang, "Find a Doctor", "Buscar Médico")}</a>
              <Link href="/#locations">{tr(lang, "Locations", "Ubicaciones")}</Link>
              <Link href="/#services">{tr(lang, "Services", "Servicios")}</Link>
              <Link href="/#resources">{tr(lang, "Insurance", "Seguros")}</Link>
            </div>
            <div className="fc">
              <h5>{tr(lang, "Resources", "Recursos")}</h5>
              <a href={KT.patientPortal} {...ext}>{tr(lang, "Patient Portal", "Portal del Paciente")}</a>
              <a href={KT.payOnline} {...ext}>{tr(lang, "Pay Online", "Pagar en Línea")}</a>
              <a href={KT.medRefills} {...ext}>{tr(lang, "Forms & Refills", "Formularios y Recetas")}</a>
              <Link href="/#resources">{tr(lang, "Vaccine Schedule", "Calendario de Vacunas")}</Link>
              <Link href="/#about">{tr(lang, "Testimonials", "Testimonios")}</Link>
            </div>
            <div className="fc">
              <h5>{tr(lang, "Company", "Empresa")}</h5>
              <Link href="/about">{tr(lang, "About Us", "Nosotros")}</Link>
              <Link href="/#about">{tr(lang, "Careers", "Empleo")}</Link>
              <Link href="/#locations">{tr(lang, "Directory", "Directorio")}</Link>
              <Link href="/#">{tr(lang, "Terms", "Términos")}</Link>
              <Link href="/#">{tr(lang, "Privacy", "Privacidad")}</Link>
            </div>
          </div>
        </div>
        <div className="foot-contact">
          <a href={`tel:${KT.phone}`}>
            <PhoneIcon />
            {tr(lang, "Call", "Llamar")} {KT.phoneDisplay}
          </a>
          <a href={`sms:${KT.textEN}`}>
            <ChatIcon />
            Text English {KT.textENDisplay}
          </a>
          <a href={`sms:${KT.textES}`}>
            <ChatIcon />
            Texto Español {KT.textESDisplay}
          </a>
        </div>
        <div className="foot-base">
          <span>
            © 2026 Kids &amp; Teens Medical Group. {tr(lang, "All rights reserved.", "Todos los derechos reservados.")}
          </span>
          <span>Janesri De Silva MD, A Prof Corp.</span>
        </div>
      </div>
    </footer>
  );
}

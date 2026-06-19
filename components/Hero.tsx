"use client";

import { HEALOW_URL } from "@/lib/config";
import { useLang, tr } from "./LanguageProvider";
import { CalendarIcon, PinIcon } from "./icons";

const heroSlots = ["1:20", "2:40", "3:10", "4:30"];

export default function Hero() {
  const { lang } = useLang();

  const openHealow = () => window.open(HEALOW_URL, "_blank", "noopener");

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="d" />
            {tr(lang, "Pediatric care, simplified", "Atención pediátrica, simplificada")}
          </span>
          <h1>
            {tr(
              lang,
              "Healthcare your kids actually look forward to.",
              "Atención médica que sus hijos esperan con gusto."
            )}
          </h1>
          <p className="lede">
            {tr(
              lang,
              "Same-day visits, telehealth, and 25 clinics across Los Angeles — built around how your family really lives.",
              "Visitas el mismo día, telesalud y 25 clínicas en Los Ángeles — pensadas para la vida real de su familia."
            )}
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={HEALOW_URL} target="_blank" rel="noopener noreferrer">
              <CalendarIcon />
              {tr(lang, "Book a visit", "Reservar una visita")}
            </a>
            <a className="btn btn-ghost" href="#locations">
              <PinIcon />
              {tr(lang, "Find a clinic", "Buscar una clínica")}
            </a>
          </div>
          <div className="hero-trust">
            <div className="t">
              <b>25</b>
              <span>{tr(lang, "LA clinics", "Clínicas en LA")}</span>
            </div>
            <div className="sep" />
            <div className="t">
              <b>0–21</b>
              <span>{tr(lang, "Every age", "Toda edad")}</span>
            </div>
            <div className="sep" />
            <div className="t">
              <b>18+ yrs</b>
              <span>{tr(lang, "Of care", "De experiencia")}</span>
            </div>
            <div className="sep" />
            <div className="t">
              <b>4.9★</b>
              <span>{tr(lang, "4,000+ reviews", "4,000+ reseñas")}</span>
            </div>
          </div>
        </div>
        <div className="visual">
          {/* EHR / healthcare-software themed hero, with a fallback if the
              primary image fails to load. eslint-disable for plain <img>. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hero-img"
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1000&h=1100&fit=crop&q=70"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.dataset.fallback) {
                img.dataset.fallback = "1";
                img.src =
                  "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1000&h=1100&fit=crop&q=70";
              }
            }}
            alt={tr(
              lang,
              "Doctor talking with a patient in the office at Kids & Teens",
              "Médico conversando con un paciente en el consultorio de Kids & Teens"
            )}
          />
          <div className="float">
            <span className="av">
              {[
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces&q=70",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces&q=70",
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces&q=70",
              ].map((src) => (
                <span key={src}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="" />
                </span>
              ))}
            </span>
            <span>
              <b>4,000+</b>
              <small>{tr(lang, "5-star reviews", "reseñas 5 estrellas")}</small>
            </span>
          </div>
          <div className="bcard">
            <div className="row">
              <span className="dotg" />
              <span className="lab">{tr(lang, "NEXT AVAILABLE · TARZANA", "PRÓXIMA CITA · TARZANA")}</span>
            </div>
            <h4>{tr(lang, "Today, 2:40 PM", "Hoy, 2:40 PM")}</h4>
            <div className="slots">
              {heroSlots.map((t, i) => (
                <span
                  key={t}
                  className={"slot" + (i === 1 ? " on" : "")}
                  onClick={openHealow}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

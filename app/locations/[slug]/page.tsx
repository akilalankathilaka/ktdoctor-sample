import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import UtilityStrip from "@/components/UtilityStrip";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BookLink from "@/components/BookLink";
import { ClinicStatus } from "@/components/ClinicHours";
import { T } from "@/components/LanguageProvider";
import { locations, getLocation, LOCATION_DOCS } from "@/lib/data";
import { PinIcon, NavigationIcon, CalendarIcon } from "@/components/icons";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) return { title: "Location — Kids & Teens Medical Group" };
  return {
    title: `${loc.city} — Kids & Teens Medical Group`,
    description: `Pediatric clinic in ${loc.city}. ${loc.addr}. Same-day & next-day appointments for ages 0–21.`,
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const others = locations.filter((l) => l.slug !== loc.slug).slice(0, 4);
  const mapsEmbed =
    "https://www.google.com/maps?q=" + encodeURIComponent(loc.addr) + "&z=15&output=embed";
  const directions =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Kids & Teens Medical Group " + loc.addr);

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
          <Link href="/#locations">
            <T en="Locations" es="Ubicaciones" />
          </Link>
          <ChevronRight />
          <span className="cur">{loc.city}</span>
        </div>
      </div>

      <section className="lhero">
        <div className="wrap">
          <div>
            <span className="eyebrow">
              <T en="Pediatric clinic" es="Clínica pediátrica" /> · {loc.city}
            </span>
            <h1>Kids &amp; Teens — {loc.city}</h1>
            <div className="addr">
              <PinIcon />
              <span>{loc.addr}</span>
            </div>
            <ClinicStatus />
            <div className="lhero-cta">
              <BookLink className="btn btn-primary">
                <CalendarIcon />
                <T en="Book at this clinic" es="Reservar en esta clínica" />
              </BookLink>
              <a className="btn btn-ghost" href={directions} target="_blank" rel="noopener noreferrer">
                <NavigationIcon />
                <T en="Directions" es="Cómo llegar" />
              </a>
            </div>
          </div>
          <div className="lmap">
            <iframe
              src={mapsEmbed}
              loading="lazy"
              title={`Map of the ${loc.city} clinic`}
              referrerPolicy="no-referrer-when-downgrade"
            />
            <span className="chip">
              {loc.city} · <T en="interactive map" es="mapa interactivo" />
            </span>
          </div>
        </div>
      </section>

      <section className="lbody">
        <div className="wrap">
          <div className="panel" style={{ maxWidth: 760 }}>
            <h2>
              <T en="Providers at this location" es="Médicos en esta ubicación" />
            </h2>
            <div className="docs">
              {LOCATION_DOCS.map((d) => (
                <div className="doc" key={d.name}>
                  <span className="av">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={d.photo} alt={d.name} loading="lazy" />
                  </span>
                  <span>
                    <h4>{d.name}</h4>
                    <p>
                      <T en={d.role} es={d.roleEs} />
                    </p>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="other">
        <div className="wrap">
          <h2>
            <T en="Other nearby clinics" es="Otras clínicas cercanas" />
          </h2>
          <div className="other-grid">
            {others.map((o) => (
              <Link className="ocard" href={`/locations/${o.slug}`} key={o.slug}>
                <span className="pin">
                  <PinIcon />
                </span>
                <span>
                  <h4>{o.city}</h4>
                  <p>{o.addr.split(",")[0]}</p>
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
                <T en="Questions before you visit?" es="¿Preguntas antes de su visita?" />
              </h2>
              <p>
                <T
                  en="Call us in English or Español, 7 days a week."
                  es="Llámenos en inglés o español, 7 días a la semana."
                />
              </p>
            </div>
            <div className="cta-actions">
              <BookLink className="btn btn-light">
                <T en="Book online" es="Reservar en línea" />
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

function ChevronRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2}>
      <path d="M9 6l6 6-6 6" />
    </svg>
  );
}

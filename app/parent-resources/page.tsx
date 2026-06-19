import type { Metadata } from "next";
import Link from "next/link";
import UtilityStrip from "@/components/UtilityStrip";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { T } from "@/components/LanguageProvider";
import { PARENT_RESOURCE_CARDS } from "@/lib/data";
import { ArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Parent Resources — Kids & Teens Medical Group",
  description:
    "Guides and downloads to support your child's healthy development — vaccine schedules, sports physicals, and more.",
};

export default function ParentResourcesPage() {
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
          <Link href="/patient-resources">
            <T en="Resources" es="Recursos" />
          </Link>
          <ChevronRight />
          <span className="cur">
            <T en="Parent Resources" es="Recursos para Padres" />
          </span>
        </div>
      </div>

      <section className="lhero">
        <div className="wrap">
          <div className="lmap" style={{ height: 340 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&h=700&fit=crop&q=70"
              alt=""
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <span className="chip">25+ {""}<T en="locations" es="ubicaciones" /></span>
          </div>
          <div>
            <span className="eyebrow plain">
              <T en="For parents" es="Para padres" />
            </span>
            <h1 style={{ fontSize: "clamp(32px,4vw,46px)", margin: "12px 0 0" }}>
              <T en="Parent Resources" es="Recursos para Padres" />
            </h1>
            <p className="lede" style={{ maxWidth: "60ch" }}>
              <T
                en="There's no one right way to raise a child, and parenting a baby, toddler, preschooler, or teen can be a challenge. To help you do the best you can — and keep your child safe and healthy — here's important information and resources to support your child's healthy development."
                es="No hay una sola forma correcta de criar a un hijo, y ser padre de un bebé, niño pequeño, preescolar o adolescente puede ser un reto. Para ayudarle a hacerlo lo mejor posible — y mantener a su hijo sano y seguro — aquí tiene información y recursos importantes para apoyar el desarrollo saludable de su hijo."
              />
            </p>
          </div>
        </div>
      </section>

      <section className="lbody" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="dl-grid">
            {PARENT_RESOURCE_CARDS.map((c) => (
              <div className="panel dl-card" key={c.title}>
                <span
                  className="eyebrow plain"
                  style={{ textTransform: "uppercase", letterSpacing: "0.14em", fontSize: 11.5 }}
                >
                  Kids &amp; Teens Pediatric Office
                </span>
                <h3 style={{ fontSize: 24, margin: "10px 0 12px" }}>
                  <T en={c.title} es={c.titleEs} />
                </h3>
                <p style={{ fontSize: 14.5, color: "var(--ink-2)", fontWeight: 500, lineHeight: 1.6, flex: 1 }}>
                  <T en={c.body} es={c.bodyEs} />
                </p>
                <a
                  className="care-link"
                  href={c.href}
                  style={{ marginTop: 16 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <T en={c.cta} es={c.ctaEs} /> <ArrowRight />
                </a>
              </div>
            ))}
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

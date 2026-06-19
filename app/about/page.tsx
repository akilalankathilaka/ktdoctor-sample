import type { Metadata } from "next";
import UtilityStrip from "@/components/UtilityStrip";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import BookLink from "@/components/BookLink";
import { T } from "@/components/LanguageProvider";
import { CalendarIcon, PinIcon } from "@/components/icons";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Kids & Teens Medical Group",
  description:
    "Kids & Teens Medical Group is a pediatric practice dedicated to compassionate, comprehensive care for children and adolescents across Greater Los Angeles.",
};

export default function AboutPage() {
  return (
    <>
      <UtilityStrip />
      <SiteHeader />

      <section className="block">
        <div className="wrap">
          <div className="sec-head center" style={{ maxWidth: 760 }}>
            <span
              className="eyebrow plain"
              style={{
                justifyContent: "center",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: 13,
              }}
            >
              Kids &amp; Teens Pediatric Medical Group
            </span>
            <h1 style={{ fontSize: "clamp(34px,4.6vw,52px)", margin: "16px 0 0" }}>
              <T
                en="Caring For The Future Generations In Greater Los Angeles"
                es="Cuidando A Las Futuras Generaciones En El Gran Los Ángeles"
              />
            </h1>
          </div>

          <div
            style={{
              maxWidth: 720,
              margin: "32px auto 0",
              display: "flex",
              flexDirection: "column",
              gap: 22,
              textAlign: "center",
              color: "var(--ink-2)",
              fontSize: 17,
              fontWeight: 500,
              lineHeight: 1.7,
            }}
          >
            <p>
              <T
                en="Kids & Teens Medical Group is a pediatric practice dedicated to providing compassionate, comprehensive care for children and adolescents. Our team of board-certified pediatricians is committed to offering personalized care tailored to your child's unique needs. We offer a wide range of services, including routine check-ups, specialized care for conditions like allergies and ADHD, urgent care, prenatal consultations, and after-hours care."
                es="Kids & Teens Medical Group es una práctica pediátrica dedicada a brindar atención compasiva e integral para niños y adolescentes. Nuestro equipo de pediatras certificados se compromete a ofrecer atención personalizada según las necesidades únicas de su hijo. Ofrecemos una amplia gama de servicios, incluidos chequeos de rutina, atención especializada para afecciones como alergias y TDAH, atención de urgencia, consultas prenatales y atención fuera de horario."
              />
            </p>
            <p>
              <T
                en="With multiple locations throughout Los Angeles and beyond, we're here to serve your family's needs. We accept most major insurance plans, including any HMO/IPA. For those without insurance, we offer affordable payment options."
                es="Con múltiples ubicaciones en Los Ángeles y más allá, estamos aquí para atender las necesidades de su familia. Aceptamos la mayoría de los planes de seguro, incluido cualquier HMO/IPA. Para quienes no tienen seguro, ofrecemos opciones de pago accesibles."
              />
            </p>
            <p style={{ color: "var(--ink)", fontWeight: 600 }}>
              <T
                en="Rest assured, your child's health is our top priority. Schedule an appointment today and let us help your family thrive."
                es="Tenga la certeza de que la salud de su hijo es nuestra máxima prioridad. Reserve una cita hoy y permítanos ayudar a su familia a prosperar."
              />
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              marginTop: 34,
              flexWrap: "wrap",
            }}
          >
            <BookLink className="btn btn-primary">
              <CalendarIcon />
              <T en="Schedule an appointment" es="Reservar una cita" />
            </BookLink>
            <Link className="btn btn-ghost" href="/#locations">
              <PinIcon />
              <T en="Find a clinic" es="Buscar una clínica" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

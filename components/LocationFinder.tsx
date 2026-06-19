"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { locations } from "@/lib/data";
import { HEALOW_URL } from "@/lib/config";
import { useLang, tr } from "./LanguageProvider";
import { SearchIcon, PinIcon, ChevronRight } from "./icons";

export default function LocationFinder() {
  const { lang } = useLang();
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.toLowerCase().trim();
    if (!query) return locations;
    return locations.filter(
      (l) =>
        l.city.toLowerCase().includes(query) || l.street.toLowerCase().includes(query)
    );
  }, [q]);

  return (
    <div className="loc-layout">
      <div className="loc-left">
        <span className="eyebrow plain">{tr(lang, "25 clinics across LA", "25 clínicas en LA")}</span>
        <h2 style={{ fontSize: "clamp(32px,4vw,48px)", margin: "14px 0 16px" }}>
          {tr(lang, "A clinic in your neighborhood", "Una clínica en su vecindario")}
        </h2>
        <p style={{ fontSize: 18, color: "var(--ink-2)", fontWeight: 500, marginBottom: 24 }}>
          {tr(
            lang,
            "From the Valley to the South Bay, quality pediatric care is always close to home. Search to find your nearest location.",
            "Del Valle al South Bay, la atención pediátrica de calidad siempre está cerca. Busque su ubicación más cercana."
          )}
        </p>
        <div className="loc-search">
          <SearchIcon />
          <input
            type="text"
            placeholder={tr(lang, "Search by city or neighborhood…", "Busque por ciudad o vecindario…")}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            aria-label={tr(lang, "Search clinics by city or neighborhood", "Buscar clínicas por ciudad o vecindario")}
          />
        </div>
        <div className="map-tile">
          <iframe
            src="https://www.google.com/maps?q=Los+Angeles,CA&z=10&output=embed"
            loading="lazy"
            title={tr(lang, "Map of Los Angeles clinic locations", "Mapa de las clínicas en Los Ángeles")}
            referrerPolicy="no-referrer-when-downgrade"
          />
          <span className="photochip">{tr(lang, "25 LA clinics", "25 clínicas en LA")}</span>
        </div>
      </div>
      <div className="loc-right">
        <div className="loc-head">
          <b>{filtered.length}</b> {tr(lang, "locations", "ubicaciones")}
        </div>
        <div className="loc-list">
          {filtered.length === 0 ? (
            <div className="loc-empty">
              {tr(lang, `No clinics match “${q}.” Try another city.`, `Ninguna clínica coincide con “${q}.” Pruebe otra ciudad.`)}
            </div>
          ) : (
            filtered.map((l) => (
              <Link className="loc-item" href={`/locations/${l.slug}`} key={l.slug}>
                <span className="pin">
                  <PinIcon />
                </span>
                <span>
                  <h4>{l.city}</h4>
                  <p>{l.street}</p>
                </span>
                <span className="arr">
                  <ChevronRight />
                </span>
              </Link>
            ))
          )}
        </div>
        <a
          className="btn btn-primary"
          style={{ width: "100%", marginTop: 14 }}
          href={HEALOW_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {tr(lang, "Book a visit", "Reservar una visita")}
        </a>
      </div>
    </div>
  );
}

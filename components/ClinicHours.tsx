"use client";

import { useEffect, useState } from "react";
import { LOCATION_HOURS } from "@/lib/data";
import { useLang, tr } from "./LanguageProvider";

/** Mon=0 … Sun=6, computed on the client to avoid baking the build day into
 *  statically-generated pages (and to avoid a hydration mismatch). */
function useTodayIndex(): number {
  const [idx, setIdx] = useState(-1);
  useEffect(() => {
    setIdx((new Date().getDay() + 6) % 7);
  }, []);
  return idx;
}

export function ClinicStatus() {
  const { lang } = useLang();
  const today = useTodayIndex();

  if (today < 0) {
    return (
      <div className="status">
        <span className="dot" />
        <span>{tr(lang, "Open 7 days a week", "Abierto los 7 días")}</span>
      </div>
    );
  }
  const hrs = LOCATION_HOURS[today][1];
  const closed = hrs === "Closed";
  return (
    <div className="status">
      <span className="dot" />
      <span>
        {closed
          ? tr(lang, "Closed today", "Cerrado hoy")
          : `${tr(lang, "Open today", "Abierto hoy")} · ${hrs}`}
      </span>
    </div>
  );
}

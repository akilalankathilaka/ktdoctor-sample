"use client";

import { KT } from "@/lib/config";
import { PhoneIcon, ChatIcon } from "./icons";
import { useLang, tr } from "./LanguageProvider";

export default function UtilityStrip() {
  const { lang, setLang } = useLang();
  const isEs = lang === "es";
  return (
    <div className="strip">
      <div className="wrap">
        <div className="left">
          <a href={`tel:${KT.phone}`}>
            <PhoneIcon />
            {KT.phoneDisplay}
          </a>
          <span className="sep hide" />
          <a className="hide" href={`sms:${isEs ? KT.textES : KT.textEN}`}>
            <ChatIcon />
            {isEs ? KT.textESDisplay : KT.textENDisplay} {tr(lang, "Text us", "Envíenos un texto")}
          </a>
        </div>
        <div className="right">
          <a className="hide" href={KT.patientPortal} target="_blank" rel="noopener noreferrer">
            {tr(lang, "Patient Portal", "Portal del Paciente")}
          </a>
          <span className="sep hide" />
          <a className="hide" href={KT.payOnline} target="_blank" rel="noopener noreferrer">
            {tr(lang, "Pay Online", "Pagar en Línea")}
          </a>
          <div className="lang" role="group" aria-label="Language">
            <button className={!isEs ? "on" : ""} onClick={() => setLang("en")} aria-pressed={!isEs}>
              EN
            </button>
            <button className={isEs ? "on" : ""} onClick={() => setLang("es")} aria-pressed={isEs}>
              ES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

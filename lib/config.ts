/* =====================================================================
   KT — external integration config.

   We are redesigning ktdoctor.com. For now, every transactional link
   (book an appointment, pay online, patient portal login, find a doctor,
   refills/labs/referrals) redirects to healow.com. Swap these for the real
   healow / eClinicalWorks practice endpoints before launch via env vars.
   ===================================================================== */

/** Single redirect target for all appointment / payment / portal actions. */
export const HEALOW_URL = process.env.NEXT_PUBLIC_HEALOW_URL ?? "https://healow.com/";

export const KT = {
  healowOpenAccess: HEALOW_URL, // book an appointment
  patientPortal: HEALOW_URL, // portal log in
  payOnline: HEALOW_URL, // payments
  findDoctor: HEALOW_URL, // find a doctor
  medRefills: HEALOW_URL,
  labResults: HEALOW_URL,
  referrals: HEALOW_URL,
  practiceCode: process.env.NEXT_PUBLIC_PRACTICE_CODE ?? "KTMGLA",
  phone: "+18183615437",
  textEN: "+16262987121",
  textES: "+18184235637",
  phoneDisplay: "(818) 361-5437",
  textENDisplay: "(626) 298-7121",
  textESDisplay: "(818) 423-5637",
} as const;

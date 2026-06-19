/* Inline stroke-based icons ported verbatim from the design handoff so the
   UI stays pixel-accurate. Each renders a bare <svg>; sizing comes from CSS. */
import type { ReactNode } from "react";

type IconProps = { className?: string };

const stroke = (children: ReactNode, props: IconProps = {}) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    className={props.className}
  >
    {children}
  </svg>
);

export const PhoneIcon = (p: IconProps) =>
  stroke(
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
    p
  );

export const ChatIcon = (p: IconProps) =>
  stroke(
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />,
    p
  );

export const ChevronDown = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={p.className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const CalendarIcon = (p: IconProps) =>
  stroke(
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>,
    p
  );

export const CalendarCheckIcon = (p: IconProps) =>
  stroke(
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
    </>,
    p
  );

export const PinIcon = (p: IconProps) =>
  stroke(
    <>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </>,
    p
  );

export const UserIcon = (p: IconProps) =>
  stroke(
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>,
    p
  );

export const ArrowRight = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={p.className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const ChevronRight = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={p.className}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const SearchIcon = (p: IconProps) =>
  stroke(
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
    </>,
    p
  );

export const CheckIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className={p.className}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ClockIcon = (p: IconProps) =>
  stroke(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>,
    p
  );

export const LockIcon = (p: IconProps) =>
  stroke(
    <>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </>,
    p
  );

export const CloseIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={p.className}>
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export const ExternalIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} className={p.className}>
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export const MenuIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={p.className}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export const NavigationIcon = (p: IconProps) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className={p.className}>
    <path d="M3 11l19-9-9 19-2-8-8-2z" />
  </svg>
);

export const FaxIcon = (p: IconProps) =>
  stroke(
    <>
      <rect x="6" y="9" width="12" height="9" rx="1" />
      <path d="M6 9V4h12v5M8 18v3h8v-3" />
    </>,
    p
  );

export const GlobeIcon = (p: IconProps) =>
  stroke(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>,
    p
  );

/* ----- Care card icons (keyed) ----- */
export function CareIcon({ k }: { k: string }) {
  switch (k) {
    case "rect":
      return stroke(
        <>
          <rect x="2" y="4" width="15" height="16" rx="2" />
          <path d="m17 9 5-3v12l-5-3" />
        </>
      );
    case "clock":
      return stroke(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      );
    case "heart":
      return stroke(<path d="M12 21s-7-4.35-7-10a4 4 0 0 1 7-2.65A4 4 0 0 1 19 11c0 5.65-7 10-7 10z" />);
    default:
      return stroke(<path d={k} />);
  }
}

/* ----- Resource card icons (indexed, matches res[] order) ----- */
export const RESOURCE_ICONS = [
  stroke(
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </>
  ),
  stroke(
    <>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M12 11v6M9 14h6" />
    </>
  ),
  stroke(
    <>
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </>
  ),
  stroke(
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),
  stroke(
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  stroke(
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m10 9 5 3-5 3z" />
    </>
  ),
  stroke(
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z" />
  ),
  stroke(<path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />),
  stroke(
    <>
      <path d="M17 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M7 21v-2a4 4 0 0 1 3-3.87" />
      <circle cx="9" cy="7" r="3" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
];

/* ----- Social icons (filled) ----- */
export const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.5l.5-3H14V9z" />
  </svg>
);
export const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
  </svg>
);
export const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l8-9L3 3h6l4 5 5-5z" />
  </svg>
);
export const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12c0-3-.3-4-1-4.7-.6-.6-2-1-9-1s-8.4.4-9 1c-.7.7-1 1.7-1 4.7s.3 4 1 4.7c.6.6 2 1 9 1s8.4-.4 9-1c.7-.7 1-1.7 1-4.7zM10 15V9l5 3-5 3z" />
  </svg>
);

/* document icon used in footer "Patient Portal" link */
export const FileTextIcon = (p: IconProps) =>
  stroke(
    <>
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h4" />
    </>,
    p
  );
export const FileDollarIcon = (p: IconProps) =>
  stroke(
    <>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
      <path d="M12 11v6M9 14h6" />
    </>,
    p
  );

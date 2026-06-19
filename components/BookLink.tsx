import type { ReactNode } from "react";
import { HEALOW_URL } from "@/lib/config";

interface Props {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/** "Book" entry point — redirects to healow (ktdoctor.com handles real
 *  scheduling through healow; for now every booking action opens healow.com). */
export default function BookLink({ children, className, style }: Props) {
  return (
    <a
      href={HEALOW_URL}
      className={className}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

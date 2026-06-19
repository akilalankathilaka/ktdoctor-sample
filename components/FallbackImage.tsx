"use client";

import { useState } from "react";

interface Props {
  src: string;
  fallback: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** <img> that swaps to a known-good fallback if the primary source fails to
 *  load — so a hero image can never render broken. */
export default function FallbackImage({ src, fallback, alt = "", className, style }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}

"use client";

import { useEffect, useState, type ReactNode } from "react";

/**
 * Renders the brand mark. Shows the text fallback (`children`) by default so it
 * renders server-side and is never broken, then upgrades to /logo.png once that
 * image is confirmed to load. Drop the file at /public/logo.png to enable it.
 */
export default function Logo({
  children,
  imgClassName,
}: {
  children: ReactNode;
  imgClassName?: string;
}) {
  const [imageReady, setImageReady] = useState(false);

  useEffect(() => {
    const probe = new window.Image();
    probe.onload = () => setImageReady(true);
    probe.src = "/logo.png";
  }, []);

  if (imageReady) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src="/logo.png" alt="Kids & Teens Medical Group" className={imgClassName} />
    );
  }

  return <>{children}</>;
}

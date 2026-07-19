import Image from "next/image";
import Link from "next/link";

export type LogoVariant = "light" | "dark" | "compact";

interface LogoProps {
  /** "light" = dark-colored logo for light backgrounds. "dark" = white logo for dark backgrounds. */
  variant?: LogoVariant;
  className?: string;
  href?: string;
  priority?: boolean;
}

const LOGO_MAP: Record<LogoVariant, { src: string; width: number; height: number; alt: string }> = {
  light: { src: "/images/logo-dark.png", width: 300, height: 80, alt: "World Pet Association" },
  dark: { src: "/images/logo-light.png", width: 300, height: 80, alt: "World Pet Association" },
  compact: { src: "/images/logo-sm.png", width: 634, height: 634, alt: "WPA" },
};

export function Logo({ variant = "light", className, href, priority = false }: LogoProps) {
  const cfg = LOGO_MAP[variant];
  const img = (
    <Image
      src={cfg.src}
      alt={cfg.alt}
      width={cfg.width}
      height={cfg.height}
      priority={priority}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
  if (href) return <Link href={href}>{img}</Link>;
  return img;
}

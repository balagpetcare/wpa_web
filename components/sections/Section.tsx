import type { ReactNode } from "react";

export type SectionVariant = "white" | "light" | "navy" | "brand" | "gradient";

const VARIANT_CLASS: Record<SectionVariant, string> = {
  white: "section-white",
  light: "section-light",
  navy: "section-navy",
  brand: "section-brand",
  gradient: "section-gradient",
};

export function Section({
  children,
  variant = "white",
  className = "",
  style,
}: {
  children: ReactNode;
  variant?: SectionVariant;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section className={`section ${VARIANT_CLASS[variant]} ${className}`.trim()} style={style}>
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`section-header ${center ? "section-header--center" : ""}`}>
      {eyebrow && <p className="section-header__eyebrow">{eyebrow}</p>}
      <h2 className="section-header__title">{title}</h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
}

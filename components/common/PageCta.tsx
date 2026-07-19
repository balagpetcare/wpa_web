import Link from "next/link";
import { Section } from "../sections/Section";

export interface PageCtaLink {
  label: string;
  href: string;
}

export function PageCta({
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  extraCtas = [],
}: {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  extraCtas?: PageCtaLink[];
}) {
  return (
    <Section variant="gradient">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 16px",
              lineHeight: 1.25,
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: "1.0625rem", lineHeight: 1.7, color: "rgba(255,255,255,0.75)", margin: "0 0 32px" }}>
            {subtitle}
          </p>
          <div className="btn-group btn-group--center">
            <Link href={primaryHref} className="btn btn--primary btn--lg">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="btn btn--outline-light btn--lg">
              {secondaryLabel}
            </Link>
            {extraCtas.map((cta) => (
              <Link key={cta.label} href={cta.href} className="btn btn--outline-light btn--lg">
                {cta.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

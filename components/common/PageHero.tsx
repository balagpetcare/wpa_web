import Link from "next/link";

export interface PageHeroCta {
  label: string;
  href: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
}) {
  return (
    <section className="page-hero">
      <div className="page-hero__overlay" />
      <div className="container page-hero__content">
        <p className="page-hero__eyebrow">{eyebrow}</p>
        <h1 className="page-hero__title">{title}</h1>
        <p className="page-hero__subtitle">{subtitle}</p>
        {(primaryCta || secondaryCta) && (
          <div className="btn-group" style={{ marginTop: "32px" }}>
            {primaryCta && (
              <Link href={primaryCta.href} className="btn btn--primary btn--lg">
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn--outline-light btn--lg">
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

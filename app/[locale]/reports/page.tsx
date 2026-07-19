import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getImpactAndTrustContent } from "../../../lib/impactContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ReportsPage({ params }: PageProps) {
  const { locale } = await params;
  const { reports } = getImpactAndTrustContent(locale);

  return (
    <>
      <PageHero
        eyebrow={reports.hero.eyebrow}
        title={reports.hero.title}
        subtitle={reports.hero.subtitle}
        primaryCta={{ label: reports.hero.primaryLabel, href: `/${locale}${reports.hero.primaryHref}` }}
        secondaryCta={{ label: reports.hero.secondaryLabel, href: `/${locale}${reports.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={reports.fundUsage.eyebrow} title={reports.fundUsage.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px", marginBottom: "32px" }}>
            {reports.fundUsage.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
          <IconCardGrid items={reports.fundUsage.categories} columns={3} />
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader
            eyebrow={reports.reportTypes.eyebrow}
            title={reports.reportTypes.title}
            subtitle={reports.reportTypes.subtitle}
          />
          <IconCardGrid
            items={reports.reportTypes.items.map((item) => ({
              ...item,
              href: item.href ? `/${locale}${item.href}` : undefined,
            }))}
            columns={4}
          />
        </div>
      </Section>

      <PageCta
        title={reports.cta.title}
        subtitle={reports.cta.subtitle}
        primaryLabel={reports.cta.primaryLabel}
        primaryHref={`/${locale}${reports.cta.primaryHref}`}
        secondaryLabel={reports.cta.secondaryLabel}
        secondaryHref={`/${locale}${reports.cta.secondaryHref}`}
        extraCtas={reports.cta.extraCtas?.map((c) => ({ label: c.label, href: `/${locale}${c.href}` }))}
      />
    </>
  );
}

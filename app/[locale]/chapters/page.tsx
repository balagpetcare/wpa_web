import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Timeline } from "../../../components/common/Timeline";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getPagesContent } from "../../../lib/pagesContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ChaptersPage({ params }: PageProps) {
  const { locale } = await params;
  const { chapters } = getPagesContent(locale);

  return (
    <>
      <PageHero
        eyebrow={chapters.hero.eyebrow}
        title={chapters.hero.title}
        subtitle={chapters.hero.subtitle}
        primaryCta={{ label: chapters.hero.primaryLabel, href: `/${locale}${chapters.hero.primaryHref}` }}
        secondaryCta={{ label: chapters.hero.secondaryLabel, href: `/${locale}${chapters.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={chapters.intro.eyebrow} title={chapters.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {chapters.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="navy">
        <div className="container">
          <SectionHeader eyebrow={chapters.stats.eyebrow} title={chapters.stats.title} subtitle={chapters.stats.subtitle} />
          <div className="grid-4">
            {chapters.stats.items.map((stat) => (
              <div key={stat.label} className="card card--navy">
                <p style={{ fontSize: "2rem", fontWeight: 900, margin: "0 0 4px", color: "#fff" }}>{stat.value}</p>
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--brand-300)",
                    margin: 0,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader
            eyebrow={chapters.howChaptersWork.eyebrow}
            title={chapters.howChaptersWork.title}
            subtitle={chapters.howChaptersWork.subtitle}
          />
          <Timeline steps={chapters.howChaptersWork.steps} />
        </div>
      </Section>

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow={chapters.responsibilities.eyebrow}
            title={chapters.responsibilities.title}
            subtitle={chapters.responsibilities.subtitle}
          />
          <IconCardGrid items={chapters.responsibilities.items} columns={4} />
        </div>
      </Section>

      <PageCta
        title={chapters.cta.title}
        subtitle={chapters.cta.subtitle}
        primaryLabel={chapters.cta.primaryLabel}
        primaryHref={`/${locale}${chapters.cta.primaryHref}`}
        secondaryLabel={chapters.cta.secondaryLabel}
        secondaryHref={`/${locale}${chapters.cta.secondaryHref}`}
      />
    </>
  );
}

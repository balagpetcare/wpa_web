import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { IconCardGrid } from "../../../components/common/IconCardGrid";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getGetInvolvedContent } from "../../../lib/getInvolvedContent";
import { localizedHref as resolveHref } from "../../../lib/routes";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const { contact } = getGetInvolvedContent(locale);

  return (
    <>
      <PageHero
        eyebrow={contact.hero.eyebrow}
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
        primaryCta={{ label: contact.hero.primaryLabel, href: resolveHref(locale, contact.hero.primaryHref) }}
        secondaryCta={{ label: contact.hero.secondaryLabel, href: resolveHref(locale, contact.hero.secondaryHref) }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader eyebrow={contact.intro.eyebrow} title={contact.intro.title} center={false} />
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", maxWidth: "820px" }}>
            {contact.intro.paragraphs.map((paragraph, index) => (
              <p key={index} className="card__desc" style={{ fontSize: "1.0625rem" }}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section variant="light">
        <div className="container">
          <SectionHeader eyebrow={contact.channels.eyebrow} title={contact.channels.title} subtitle={contact.channels.subtitle} />
          <IconCardGrid
            items={contact.channels.items.map((item) => ({
              ...item,
              href: item.href ? resolveHref(locale, item.href) : undefined,
            }))}
            columns={3}
          />
        </div>
      </Section>

      <PageCta
        title={contact.cta.title}
        subtitle={contact.cta.subtitle}
        primaryLabel={contact.cta.primaryLabel}
        primaryHref={resolveHref(locale, contact.cta.primaryHref)}
        secondaryLabel={contact.cta.secondaryLabel}
        secondaryHref={resolveHref(locale, contact.cta.secondaryHref)}
      />
    </>
  );
}

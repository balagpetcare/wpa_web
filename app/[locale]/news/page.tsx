import Link from "next/link";
import { PageHero } from "../../../components/common/PageHero";
import { PageCta } from "../../../components/common/PageCta";
import { Section, SectionHeader } from "../../../components/sections/Section";
import { getNewsContent } from "../../../lib/newsContent";

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function NewsPage({ params }: PageProps) {
  const { locale } = await params;
  const news = getNewsContent(locale);

  return (
    <>
      <PageHero
        eyebrow={news.hero.eyebrow}
        title={news.hero.title}
        subtitle={news.hero.subtitle}
        primaryCta={{ label: news.hero.primaryLabel, href: `/${locale}${news.hero.primaryHref}` }}
        secondaryCta={{ label: news.hero.secondaryLabel, href: `/${locale}${news.hero.secondaryHref}` }}
      />

      <Section variant="white">
        <div className="container">
          <SectionHeader
            eyebrow="Latest"
            title="Program Stories & Updates"
            subtitle="Each story links to the program page it belongs to, where activity is kept current."
          />
          <div className="grid-3">
            {news.items.map((item) => (
              <Link key={item.title} href={`/${locale}${item.href}`} className="card card--hover">
                <p
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--brand)",
                    margin: "0 0 8px",
                  }}
                >
                  {item.category}
                </p>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.description}</p>
                <span className="card__link">Read more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      <PageCta
        title={news.cta.title}
        subtitle={news.cta.subtitle}
        primaryLabel={news.cta.primaryLabel}
        primaryHref={`/${locale}${news.cta.primaryHref}`}
        secondaryLabel={news.cta.secondaryLabel}
        secondaryHref={`/${locale}${news.cta.secondaryHref}`}
      />
    </>
  );
}

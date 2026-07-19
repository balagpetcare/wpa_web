import Link from "next/link";
import { ImageWithFallback } from "./ImageWithFallback";
import { Section, SectionHeader } from "../sections/Section";
import type { ProgramPageContent } from "../../lib/programsContent";

/**
 * Required image files — drop matching `.webp` files into
 * public/images/programs/donation/ and they appear automatically.
 * Until a file exists, ImageWithFallback renders a branded placeholder.
 */
const donationImageManifest = {
  hero: "/images/programs/donation/donation-hero.webp",
  step1: "/images/programs/donation/donation-step-1-purpose.webp",
  step2: "/images/programs/donation/donation-step-2-secure-payment.webp",
  step3: "/images/programs/donation/donation-step-3-fund-tracking.webp",
  step4: "/images/programs/donation/donation-step-4-program-delivery.webp",
  step5: "/images/programs/donation/donation-step-5-impact-reporting.webp",
  donorImpact: "/images/programs/donation/donation-donor-impact.webp",
  transparencyDashboard: "/images/programs/donation/donation-transparency-dashboard.webp",
  programRescue: "/images/programs/donation/donation-program-rescue.webp",
  programAdoption: "/images/programs/donation/donation-program-adoption.webp",
  programAwareness: "/images/programs/donation/donation-program-awareness.webp",
  ctaBackground: "/images/programs/donation/donation-cta-background.webp",
} as const;

const impactStats = [
  { label: "Total Raised", value: "$2.4M" },
  { label: "Programs Funded", value: "38" },
  { label: "Animals Helped", value: "61,200" },
  { label: "Countries Reached", value: "24" },
];

const participantIcons = ["💛", "🏢", "🌍", "🤝"] as const;

const transparencyBars = [
  { label: "Rescue & Treatment", value: 82 },
  { label: "Adoption & Rehoming", value: 64 },
  { label: "Awareness & Education", value: 47 },
];

export function DonationProgramPage({ locale, content }: { locale: string; content: ProgramPageContent }) {
  return (
    <>
      {/* 1. Hero */}
      <section className="donation-hero">
        <ImageWithFallback
          src={donationImageManifest.hero}
          alt="Donors and volunteers supporting WPA fundraising campaigns"
          label="Hero image"
          className="donation-hero__media"
          imgClassName="donation-hero__image"
        />
        <div className="donation-hero__overlay" />
        <div className="donation-hero__content container">
          <div className="donation-hero__grid">
            <div className="donation-hero__panel">
              <span className="badge badge--white">DONATION &amp; FUNDRAISING PROGRAM</span>
              <h1 className="donation-hero__title">{content.hero.title}</h1>
              <p className="donation-hero__desc">{content.hero.subtitle}</p>
              <div className="btn-group">
                <Link href={`/${locale}${content.hero.primaryHref}`} className="btn btn--white btn--lg">
                  {content.hero.primaryLabel}
                </Link>
                <Link href={`/${locale}${content.hero.secondaryHref}`} className="btn btn--outline-light btn--lg">
                  {content.hero.secondaryLabel}
                </Link>
              </div>
            </div>

            <div className="donation-dashboard" aria-label="Sample impact snapshot">
              <div className="donation-dashboard__header">
                <span className="donation-dashboard__dot" aria-hidden="true" />
                Live Impact Snapshot
              </div>
              <div className="donation-dashboard__grid">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="donation-dashboard__stat">
                    <span className="donation-dashboard__value">{stat.value}</span>
                    <span className="donation-dashboard__label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Process */}
      <Section variant="light" className="donation-section donation-section--pullup">
        <div className="container donation-container">
          <SectionHeader
            eyebrow={content.howItWorks.eyebrow}
            title="A Transparent, Trackable Path From You to Impact"
            subtitle={content.howItWorks.subtitle}
          />
          <div className="donation-steps" aria-label="Five-step donation process">
            {content.howItWorks.steps.map((step) => {
              const imageKey = `step${step.number}` as keyof typeof donationImageManifest;
              return (
                <article key={step.number} className="donation-step-card">
                  <div className="donation-step-card__connector" aria-hidden="true">
                    <span className="donation-step-card__badge">{step.number}</span>
                  </div>
                  <ImageWithFallback
                    src={donationImageManifest[imageKey]}
                    alt={`${step.title} visual`}
                    label={`Step ${step.number} image`}
                    className="donation-step-card__media"
                    imgClassName="donation-step-card__img"
                  />
                  <div className="donation-step-card__body">
                    <p className="donation-step-card__eyebrow">Step {step.number}</p>
                    <h3 className="donation-step-card__title">{step.title}</h3>
                    <p className="donation-step-card__desc">{step.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 3. Participants */}
      <Section variant="light" className="donation-section">
        <div className="container donation-container">
          <div className="donation-participants">
            <div className="donation-participants__content">
              <SectionHeader
                eyebrow={content.participants.eyebrow}
                title="Funding Animal Welfare, Together"
                subtitle={content.participants.subtitle}
                center={false}
              />
              <div className="donation-participants__grid">
                {content.participants.items.map((item, index) => (
                  <article key={item.title} className="card donation-participant-card">
                    <div className="donation-participant-card__icon" aria-hidden="true">
                      <span>{participantIcons[index] ?? item.icon}</span>
                    </div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>
            <ImageWithFallback
              src={donationImageManifest.donorImpact}
              alt="Donors and partners contributing to WPA campaigns"
              label="Donor impact image"
              className="donation-frame donation-frame--donor"
              imgClassName="donation-frame__img"
            />
          </div>
        </div>
      </Section>

      {/* 4. Benefits & impact */}
      <Section variant="navy" className="donation-section">
        <div className="container donation-container">
          <SectionHeader
            eyebrow={content.benefits.eyebrow}
            title="Why Transparent Fundraising Matters"
            subtitle={content.benefits.subtitle}
          />
          <div className="grid-4">
            {content.benefits.items.map((item) => (
              <article key={item.title} className="card card--navy donation-impact-card">
                <div className="card__icon">
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                </div>
                <h3 className="card__title">{item.title}</h3>
                <p className="card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Transparency */}
      <Section variant="white" className="donation-section">
        <div className="container donation-container">
          <div className="donation-transparency">
            <div>
              <SectionHeader
                eyebrow={content.trust.eyebrow}
                title="Transparency Built Into Every Contribution"
                subtitle={content.trust.subtitle}
                center={false}
              />
              <div className="grid-3">
                {content.trust.items.map((item) => (
                  <article key={item.title} className="card donation-trust-card">
                    <div className="card__icon">
                      <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                    </div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__desc">{item.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="donation-transparency__panel">
              <ImageWithFallback
                src={donationImageManifest.transparencyDashboard}
                alt="Preview of the public fund allocation dashboard"
                label="Transparency dashboard image"
                className="donation-frame donation-frame--dashboard"
                imgClassName="donation-frame__img"
              />
              <div className="donation-transparency__stats" aria-label="Sample fund allocation by program">
                {transparencyBars.map((bar) => (
                  <div key={bar.label} className="donation-transparency__bar-row">
                    <div className="donation-transparency__bar-label">
                      <span>{bar.label}</span>
                      <span>{bar.value}%</span>
                    </div>
                    <div className="donation-transparency__bar-track">
                      <div className="donation-transparency__bar-fill" style={{ width: `${bar.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 6. Programs funded */}
      <Section variant="light" className="donation-section donation-programs-section">
        <div className="container donation-container">
          <SectionHeader eyebrow={content.related.eyebrow} title="Programs Funded Through Donations" />
          <div className="donation-related-grid">
            {content.related.items.map((item, index) => {
              const imageSources = [
                donationImageManifest.programRescue,
                donationImageManifest.programAdoption,
                donationImageManifest.programAwareness,
              ];
              const imageLabels = ["Rescue program image", "Adoption program image", "Awareness program image"];
              const imageSrc = imageSources[index];

              return (
                <Link key={item.title} href={`/${locale}${item.href ?? "/what-we-do"}`} className="donation-related-card">
                  <ImageWithFallback
                    src={imageSrc}
                    alt={`${item.title} program preview`}
                    label={imageLabels[index] ?? item.title}
                    className="donation-related-card__media"
                    imgClassName="donation-related-card__img"
                  />
                  <div className="donation-related-card__body">
                    <div className="card__icon">
                      <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                    </div>
                    <h3 className="card__title">{item.title}</h3>
                    <p className="card__desc">{item.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </Section>

      {/* 7. Final CTA */}
      <section className="donation-cta">
        <ImageWithFallback
          src={donationImageManifest.ctaBackground}
          alt="Donation call to action background"
          label="CTA background image"
          className="donation-cta__media"
          imgClassName="donation-cta__img"
        />
        <div className="donation-cta__overlay" />
        <div className="container donation-cta__content">
          <div className="donation-cta__panel">
            <h2 className="donation-cta__title">Your Support Powers Real Change</h2>
            <p className="donation-cta__desc">{content.cta.subtitle}</p>
            <div className="btn-group btn-group--center">
              <Link href={`/${locale}${content.cta.primaryHref}`} className="btn btn--primary btn--lg">
                {content.cta.primaryLabel}
              </Link>
              <Link href={`/${locale}${content.cta.secondaryHref}`} className="btn btn--outline-light btn--lg">
                {content.cta.secondaryLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

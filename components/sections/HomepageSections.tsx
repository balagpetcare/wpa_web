import Link from "next/link";
import Image from "next/image";
import { Landmark, Stethoscope, Home, Users, BadgeDollarSign, Globe2, BarChart3, FileText, ShieldCheck, BadgeCheck } from "lucide-react";
import { Section, SectionHeader } from "./Section";
import type { HomeContent } from "../../lib/content";
import { localizedHref } from "../../lib/routes";

const homeAssets = {
  programs: [
    "/images/home/program-adoption.webp",
    "/images/home/program-rescue.webp",
    "/images/home/program-donation.webp",
    "/images/home/program-awareness.webp",
    "/images/home/program-vaccination.webp",
    "/images/home/program-membership.webp",
  ],
  featureStory: "/images/home/featured-bella-second-chance.webp",
  featureDonation: "/images/home/campaign-donation-lives-bg.webp",
  finalCta: "/images/home/cta-kind-world.webp",
  finalCtaMobile: "/images/home/cta-kind-world-mobile.webp",
};

const statIcons = [
  <svg key="1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21a9.2 9.2 0 0 1-8.5-6.2c-1.3-3.6.4-7.5 3.5-8.8a5 5 0 0 1 3.5 0c1 .4 2 .4 3 0a5 5 0 0 1 3.5 0c3.1 1.3 4.8 5.2 3.5 8.8A9.2 9.2 0 0 1 12 21z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/><circle cx="16.5" cy="7.5" r="1.5" fill="currentColor"/></svg>,
  <svg key="2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z"/><path d="M19 9h4v5h-4"/><path d="M8 8v4"/><path d="M6 10h4"/></svg>,
  <svg key="3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
  <svg key="4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  <svg key="5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
];
const processIcons = ["📝", "⚠️", "🚚", "💚", "🏠"];

function HomeImageFrame({
  src,
  alt,
  className,
  priority = false,
  sizes = "100vw",
}: {
  src?: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  if (!src) {
    return <div className={`home-fallback-image ${className ?? ""}`.trim()} aria-hidden="true" />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={className}
      sizes={sizes}
      style={{ objectFit: "cover", objectPosition: "center" }}
    />
  );
}

export function ImpactStatsSection({ content }: { content: HomeContent["impactStats"] }) {
  return (
    <section className="home-metrics-strip">
      <div className="container">
        <div className="home-metrics-scroll" role="list" aria-label={content.title}>
          {content.items.map((stat, index) => (
            <article key={stat.label} className="home-metric-card" role="listitem">
              <div className="home-metric-card__icon" aria-hidden="true">
                {statIcons[index] ?? "WP"}
              </div>
              <div>
                <p className="home-metric-card__value">{stat.value}</p>
                <p className="home-metric-card__label">{stat.label}</p>
                <p className="home-metric-card__note">{stat.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreProgramsSection({
  locale,
  content,
}: {
  locale: string;
  content: HomeContent["corePrograms"];
}) {
  return (
    <Section variant="white" className="home-section home-programs">
      <div className="container">
        <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} center />
        <div className="home-program-grid">
          {content.items.map((program, index) => (
            <Link key={program.title} href={localizedHref(locale, program.href)} className="home-program-card">
              <div className="home-program-card__media">
                <HomeImageFrame
                  src={homeAssets.programs[index]}
                  alt={program.title}
                  priority
                  sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 33vw"
                />
              </div>
              <div className="home-program-card__body">
                <div className="home-program-card__badge" aria-hidden="true">
                  {program.icon}
                </div>
                <h3 className="home-program-card__title">{program.title}</h3>
                <p className="home-program-card__desc">{program.description}</p>
                <span className="home-program-card__link">
                  {content.explore}
                  <span aria-hidden="true">&#8594;</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

const FURTAIL_APP_PREVIEW = "/images/home/program-rescue.webp"; // TODO: Replace with real app preview image e.g. "/images/home/furtail-app-preview.webp"
const FURTAIL_CTA_BG = "/images/home/hero-global-animal-welfare.webp"; // TODO: Replace with real CTA background image e.g. "/images/home/furtail-cta-bg.webp"
const APP_STORE_URL = "#"; // TODO: Update with real Apple App Store URL
const PLAY_STORE_URL = "#"; // TODO: Update with real Google Play Store URL

export function HowItWorksSection({
  locale,
  content,
}: {
  locale: string;
  content: HomeContent["howItWorks"];
}) {
  return (
    <>
      <Section variant="white" className="home-section fw-section">
      <div className="container">
        <div className="fw-header">
          <SectionHeader eyebrow={content.eyebrow} title={content.title} subtitle={content.subtitle} center />
          <div className="fw-badges">
            {content.badges.map((badge, i) => (
              <span key={i} className="fw-badge">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="fw-main">
          {/* App Preview Image */}
          <div className="fw-app-mockup">
            <div className="fw-app-frame-image">
              <HomeImageFrame 
                src={FURTAIL_APP_PREVIEW} 
                alt="Furtail App Preview" 
                sizes="(max-width: 1023px) 100vw, 360px"
              />
            </div>
          </div>

          {/* Workflow Steps */}
          <div className="fw-workflow">
            {content.steps.map((step, i) => (
              <div key={i} className="fw-step">
                <div className="fw-step-indicator">
                  <div className="fw-step-node">{step.number}</div>
                  {i < content.steps.length - 1 && <div className="fw-step-line" />}
                </div>
                <div className="fw-step-content">
                  <h3 className="fw-step-title">{step.title}</h3>
                  <p className="fw-step-desc">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Cards */}
        <div className="fw-features">
          {content.features.map((feat, i) => (
            <div key={i} className="fw-feature-card">
              <div className="fw-feature-icon">
                {i === 0 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>}
                {i === 1 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2z"/><path d="M19 9h4v5h-4"/><path d="M8 8v4"/><path d="M6 10h4"/></svg>}
                {i === 2 && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>}
              </div>
              <h4 className="fw-feature-title">{feat.title}</h4>
              <p className="fw-feature-desc">{feat.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="fw-stats">
          {content.stats.map((stat, i) => (
            <div key={i} className="fw-stat-item">
              <span className="fw-stat-value">
                <span className="fw-stat-dot"></span>
                {stat.value}
              </span>
              <span className="fw-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>

    {/* App Promo Section */}
    <section className="app-promo-section">
      <div className="app-promo-bg">
        <HomeImageFrame src={FURTAIL_CTA_BG} alt="" priority={false} sizes="100vw" />
        <div className="app-promo-overlay"></div>
      </div>
      <div className="container app-promo-container">
        <div className="app-promo-grid">
          <div className="app-promo-content">
            <span className="fw-cta-eyebrow">Furtail App Access</span>
            <h3>Ready to Make an Impact?</h3>
            <p>Report a case, support verified care, or download the Furtail app.</p>
            
            <div className="fw-ctas">
              <Link href={localizedHref(locale, "/rescue")} className="fw-btn fw-btn--primary">{content.ctas.primary}</Link>
              <Link href={localizedHref(locale, "/donation")} className="fw-btn fw-btn--secondary">{content.ctas.secondary}</Link>
              <Link href={localizedHref(locale, "/join")} className="fw-btn fw-btn--outline">{content.ctas.tertiary}</Link>
            </div>
            
            <div className="fw-store-links">
              <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="fw-store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.365 14.363c-.015-3.003 2.457-4.444 2.57-4.512-1.393-2.039-3.553-2.32-4.296-2.366-1.823-.186-3.56 1.073-4.484 1.073-.925 0-2.368-1.05-3.882-1.025-1.956.026-3.766 1.137-4.767 2.883-2.03 3.518-.518 8.706 1.455 11.558.966 1.393 2.102 2.952 3.593 2.898 1.442-.054 1.992-.93 3.639-.93 1.644 0 2.146.93 3.664.904 1.567-.027 2.548-1.42 3.497-2.812 1.096-1.6 1.547-3.151 1.57-3.23-.035-.015-3.033-1.164-3.059-4.441M14.655 5.545c.789-.958 1.32-2.287 1.176-3.616-1.144.047-2.518.762-3.328 1.737-.723.864-1.353 2.222-1.187 3.524 1.282.1 2.534-.698 3.339-1.645"/></svg>
                <div className="fw-store-text">
                  <span>Download on the</span>
                  <strong>App Store</strong>
                </div>
              </a>
              <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" className="fw-store-btn">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.57 2.946c-.22.219-.344.577-.344.99v16.128c0 .413.125.772.344.99L3.73 21.2l9.04-9.04v-.32L3.73 2.8l-.16.146zM13.298 11.63 16.89 15.2l.067.04c1.17.665 2.108 1.196 2.158 1.218.423.235.918.232 1.15-.012.164-.171.228-.466.115-.81a17.205 17.205 0 0 0-3.111-4.708l-3.971 3.97M13.298 12.37l-9.336-9.34C4.12 2.84 4.364 2.7 4.755 2.92l11.455 6.643-2.912 2.807zM16.11 15.658l-2.812-2.809-9.336 9.34c.158.19.403.332.793.112l11.355-6.643z"/></svg>
                <div className="fw-store-text">
                  <span>GET IT ON</span>
                  <strong>Google Play</strong>
                </div>
              </a>
            </div>
          </div>
          
          <div className="app-promo-visual">
            <div className="app-promo-device">
              <HomeImageFrame src={FURTAIL_APP_PREVIEW} alt="Furtail App" sizes="(max-width: 1023px) 100vw, 400px" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export function SplitHighlightSection({ locale }: { locale: string }) {
  const isBn = locale === "bn";

  return (
    <Section variant="white" className="home-section home-highlights">
      <div className="container">
        <div className="home-highlight-grid">
          <article className="home-story-card">
            <div className="home-story-card__media">
              <HomeImageFrame src={homeAssets.featureStory} alt={isBn ? "বেলার গল্প" : "Bella story"} sizes="(max-width: 1023px) 100vw, 50vw" />
            </div>
            <div className="home-story-card__overlay" />
            <div className="home-story-card__content">
              <p className="home-panel-eyebrow">{isBn ? "ফিচার্ড স্টোরি" : "Featured Story"}</p>
              <h3 className="home-story-card__title">{isBn ? "বেলার দ্বিতীয় সুযোগ" : "Bella's Second Chance"}</h3>
              <p className="home-story-card__desc">
                {isBn
                  ? "অবহেলিত অবস্থা থেকে উদ্ধার হওয়ার পর বেলা এখন নিরাপদ, সুস্থ, এবং স্থায়ী পরিবারের অপেক্ষায় নয়, নিজের নতুন ঘর পেয়েছে।"
                  : "Abandoned and alone, Bella was rescued just in time. Today she is healthy, safe, and finally home."}
              </p>
              <Link href={`/${locale}/adoption`} className="btn btn--primary btn--md">
                {isBn ? "বেলার গল্প" : "Read Bella's Story"}
              </Link>
              <div className="home-story-card__stats">
                <div>
                  <strong>45</strong>
                  <span>{isBn ? "দিন পরিচর্যায়" : "Days in Care"}</span>
                </div>
                <div>
                  <strong>3</strong>
                  <span>{isBn ? "ট্রিটমেন্ট" : "Treatments"}</span>
                </div>
                <div>
                  <strong>1</strong>
                  <span>{isBn ? "ফরএভার হোম" : "Forever Home"}</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>{isBn ? "ভালোবাসা ফিরে" : "Love Restored"}</span>
                </div>
              </div>
            </div>
          </article>

          <article className="home-donation-card">
            <div className="home-donation-card__media">
              <HomeImageFrame src={homeAssets.featureDonation} alt={isBn ? "ডোনেশন ক্যাম্পেইন" : "Donation campaign"} sizes="(max-width: 1023px) 100vw, 50vw" />
            </div>
            <div className="home-donation-card__overlay" />
            <div className="home-donation-card__content">
              <p className="home-panel-eyebrow">{isBn ? "লাইভ ক্যাম্পেইন" : "Live Campaign"}</p>
              <h3 className="home-donation-card__title">{isBn ? "আপনার ডোনেশন জীবন বদলায়" : "Your Donation Changes Lives"}</h3>
              <p className="home-donation-card__desc">
                {isBn
                  ? "প্রতিটি অনুদান রেসকিউ, চিকিৎসা, খাবার, আশ্রয়, আর পুনর্বাসনে সরাসরি কাজে লাগে।"
                  : "Every contribution funds rescue missions, medical care, food, shelter, and hope."}
              </p>
              <div className="home-progress">
                <div className="home-progress__header">
                  <strong>$73,860 raised</strong>
                  <span>$100,000 goal</span>
                </div>
                <div className="home-progress__track">
                  <div className="home-progress__fill" style={{ width: "74%" }} />
                </div>
                <div className="home-progress__footer">
                  <span>74%</span>
                  <span>{isBn ? "1,248 জন দাতা" : "1,248 donors and counting"}</span>
                </div>
              </div>
              <Link href={`/${locale}/donation`} className="btn btn--white btn--md">
                {isBn ? "এখনই দান করুন" : "Donate Now"}
              </Link>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}

const ECOSYSTEM_BG = "/images/home/stakeholder-ecosystem-bg.webp"; // TODO: Provide real background image

export function StakeholderCollaborationSection({
  locale,
  content,
}: {
  locale: string;
  content: HomeContent["globalCollaboration"];
}) {
  const items = [
    {
      title: content.items[0]?.title || "Government",
      description: content.items[0]?.description,
      icon: <Landmark />,
      label: "Policy"
    },
    {
      title: content.items[1]?.title || "Veterinary Clinics",
      description: content.items[1]?.description,
      icon: <Stethoscope />,
      label: "Care"
    },
    {
      title: "NGOs & Shelters",
      description: [content.items[2]?.description, content.items[3]?.description].filter(Boolean).join(" "),
      icon: <Home />,
      label: "Shelter"
    },
    {
      title: content.items[4]?.title || "Volunteers",
      description: content.items[4]?.description,
      icon: <Users />,
      label: "Response"
    },
    {
      title: content.items[5]?.title || "Donors",
      description: content.items[5]?.description,
      icon: <BadgeDollarSign />,
      label: "Funding"
    },
    {
      title: "Citizens",
      description: "Report, support, advocate, and help build a kinder world for animals.",
      icon: <Globe2 />,
      label: "Reporting"
    },
  ];

  return (
    <section className="ecosystem-section">
      <div className="ecosystem-bg">
        <HomeImageFrame src={ECOSYSTEM_BG} alt="" sizes="100vw" priority={false} />
        <div className="ecosystem-overlay" />
      </div>
      
      <div className="container relative z-10">
        <div className="ecosystem-header">
          <span className="ecosystem-eyebrow">GLOBAL COLLABORATION</span>
          <h2 className="ecosystem-title">{content.title}</h2>
          <p className="ecosystem-subtitle">
            WPA connects governments, clinics, NGOs, shelters, volunteers, donors, and citizens into one coordinated animal welfare network.
          </p>
        </div>
        
        <div className="ecosystem-summary">
          <div className="ecosystem-summary-item">Coordinated Programs</div>
          <div className="ecosystem-summary-item">Verified Partners</div>
          <div className="ecosystem-summary-item">Transparent Impact</div>
          <div className="ecosystem-summary-item">Community Action</div>
        </div>

        <div className="ecosystem-grid">
          {items.map((item) => (
            <div key={item.title} className="ecosystem-card">
              <div className="ecosystem-card-header">
                <div className="ecosystem-icon">{item.icon}</div>
                <span className="ecosystem-label">{item.label}</span>
              </div>
              <h3 className="ecosystem-title-card">{item.title}</h3>
              <p className="ecosystem-desc">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="ecosystem-cta">
          <Link href={localizedHref(locale, "/join")} className="btn btn--primary">Become a Partner</Link>
          <Link href={localizedHref(locale, "/awareness")} className="btn btn--secondary" style={{ border: '1px solid rgba(16, 27, 51, 0.2)' }}>Explore Programs</Link>
        </div>
      </div>
    </section>
  );
}

export function TransparencySection({
  locale,
  content,
}: {
  locale: string;
  content: HomeContent["transparency"];
}) {
  const isBn = locale === "bn";
  const items = [
    {
      title: "Fund Usage Reports",
      description: "Detailed breakdowns of how every donation is allocated.",
      icon: <BarChart3 />,
      label: "Traceable"
    },
    {
      title: "Public Annual Reports",
      description: "Comprehensive yearly reviews of our global activities.",
      icon: <FileText />,
      label: "Auditable"
    },
    {
      title: "Verified Partner Network",
      description: "Strictly vetted organizations and clinics we collaborate with.",
      icon: <ShieldCheck />,
      label: "Reviewed"
    },
    {
      title: "Certificate & Record Verification",
      description: "Blockchain-backed QR verification for all official records.",
      icon: <BadgeCheck />,
      label: "Verified"
    }
  ];

  return (
    <section className="transparency-section">
      <div className="transparency-bg" />
      <div className="container relative z-10">
        <div className="transparency-header">
          <span className="transparency-eyebrow">TRANSPARENCY & TRUST</span>
          <h2 className="transparency-title">Built on Verified, Accountable Impact</h2>
          <p className="transparency-subtitle">
            Every fund, partner, program, certificate, and outcome is traceable and publicly reviewable.
          </p>
        </div>

        <div className="transparency-summary">
          <div className="transparency-summary-item">Public Reporting</div>
          <div className="transparency-summary-item">Verified Partners</div>
          <div className="transparency-summary-item">QR-Based Records</div>
          <div className="transparency-summary-item">Donor Transparency</div>
        </div>

        <div className="transparency-grid">
          {items.map((item, index) => (
            <div key={item.title} className="transparency-card">
              <div className="transparency-card-header">
                <div className="transparency-icon">{item.icon}</div>
                <span className="transparency-label">{item.label}</span>
              </div>
              <h3 className="transparency-title-card">{item.title}</h3>
              <p className="transparency-desc">{item.description}</p>
              <Link href={`/${locale}${content.items[index]?.href || "/reports"}`} className="transparency-link">
                {index === 1 ? "View Reports" : index === 2 ? "View Partners" : index === 3 ? "Verify Now" : "View Reports"}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GLOBAL_MAP_BG = "/images/home/global-impact-map.webp"; // Optional background map image

export function GlobalNetworkMapSection({ locale }: { locale: string }) {
  const isBn = locale === "bn";
  const stats = [
    { value: "120+", label: isBn ? "দেশ ও শহর" : "Countries & Cities", desc: "Active regions globally" },
    { value: "500+", label: isBn ? "রেসকিউ টিম" : "Rescue Teams", desc: "Trained on-ground units" },
    { value: "300+", label: isBn ? "পার্টনার" : "Partner Organizations", desc: "Verified clinics & NGOs" },
    { value: "1M+", label: isBn ? "প্রভাবিত প্রাণ" : "Lives Touched", desc: "Animals rescued & treated" },
  ];

  return (
    <section className="global-impact-section">
      <div className="global-impact-bg">
        <HomeImageFrame src={GLOBAL_MAP_BG} alt="" sizes="100vw" priority={false} />
        <div className="global-impact-overlay" />
      </div>

      <div className="container relative z-10">
        <div className="global-impact-grid">
          
          <div className="global-impact-content">
            <span className="global-impact-eyebrow">{isBn ? "গ্লোবাল ইমপ্যাক্ট" : "Global Impact"}</span>
            <h2 className="global-impact-title">{isBn ? "প্রাণী কল্যাণে এক বিশ্ব সংযুক্ত" : "A World Connected for Animal Welfare"}</h2>
            <p className="global-impact-desc">
              {isBn
                ? "WPA 120টিরও বেশি দেশে তার ক্রমবর্ধমান নেটওয়ার্ক, chapter, এবং partner-এর মাধ্যমে কাজ করে।"
                : "WPA operates in over 120 countries through our growing network of chapters and partners. Programs, partners, and verified records connected through one powerful platform."}
            </p>
            <div className="global-impact-cta">
              <Link href={`/${locale}/chapters`} className="btn btn--primary">
                {isBn ? "আমাদের নেটওয়ার্ক" : "View Our Network"}
              </Link>
              <Link href={`/${locale}/join`} className="btn btn--outline-light">
                {isBn ? "পার্টনার হোন" : "Become a Partner"}
              </Link>
            </div>
          </div>

          <div className="global-impact-dashboard">
            <div className="global-impact-dashboard-header">
              <span className="live-indicator"><span className="pulse-dot"></span> Live Global Network</span>
            </div>
            <div className="global-impact-stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="global-impact-stat-card">
                  <div className="global-impact-stat-value">{stat.value}</div>
                  <div className="global-impact-stat-label">{stat.label}</div>
                  <div className="global-impact-stat-desc">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export function FaqTeaserSection({ locale }: { locale: string }) {
  const isBn = locale === "bn";
  const items = isBn
    ? [
        "আমি কীভাবে বিপদে থাকা প্রাণী রিপোর্ট করব?",
        "ডোনেশনের অর্থ কীভাবে ব্যবহার হয়?",
        "আমি কীভাবে সদস্য হতে পারি?",
        "আপনারা কি আমার দেশেও কাজ করেন?",
      ]
    : [
        "How can I report an animal in need?",
        "How are donations used?",
        "How can I become a member?",
        "Do you operate in my country?",
      ];

  return (
    <Section variant="white" className="home-section home-faq">
      <div className="container">
        <SectionHeader
          eyebrow={isBn ? "Questions & Answers" : "Questions & Answers"}
          title={isBn ? "প্রশ্ন আছে? উত্তরও আছে।" : "Got Questions? We've Got Answers."}
          center
        />
        <div className="home-faq-list home-faq-list--grid">
          {items.map((item) => (
            <button key={item} type="button" className="home-faq-item" aria-expanded="false">
              <span>{item}</span>
              <span aria-hidden="true">+</span>
            </button>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function FinalCtaSection({
  locale,
  content,
}: {
  locale: string;
  content: HomeContent["finalCta"];
}) {
  return (
    <Section variant="gradient" className="home-section home-final-cta">
      <div className="home-final-cta__media home-final-cta__media--desktop">
        <HomeImageFrame src={homeAssets.finalCta} alt="" />
      </div>
      <div className="home-final-cta__media home-final-cta__media--mobile">
        <HomeImageFrame src={homeAssets.finalCtaMobile} alt="" />
      </div>
      <div className="home-final-cta__overlay" />
      <div className="container">
        <div className="home-final-cta__panel">
          <p className="section-header__eyebrow">{content.eyebrow}</p>
          <h2 className="home-final-cta__title">{content.title}</h2>
          <p className="home-final-cta__desc">{content.subtitle}</p>
          <div className="home-final-cta__actions">
            <Link href={`/${locale}/join`} className="btn btn--primary btn--lg">
              {content.joinWpa}
            </Link>
            <Link href={`/${locale}/donation`} className="btn btn--white btn--lg">
              {content.donateNow}
            </Link>
            <Link href={`/${locale}/partners`} className="btn btn--outline-light btn--lg">
              {content.partnerWithUs}
            </Link>
            <Link href={`/${locale}/rescue`} className="btn btn--outline-light btn--lg">
              {content.reportRescue}
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

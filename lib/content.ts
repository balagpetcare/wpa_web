import type { Locale } from "./i18n";

// ─── Homepage content dictionary (en/bn) ────────────────────────────────────
// Enterprise NGO homepage copy for World Pet Association, locale-aware.

export type HeroPreset =
  | "full-width"
  | "dark-overlay"
  | "story-panels"
  | "video-background"
  | "clean-white"
  | "corporate-impact";

export interface HeroAction {
  label: string;
  href: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroFeatureChip {
  icon: string;
  label: string;
  href?: string;
}

export interface HeroStoryCard {
  id: string;
  title: string;
  description: string;
  image?: string;
}

export interface HeroImpactPanel {
  eyebrow: string;
  stats: HeroStat[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface HeroSlide {
  id: string;
  preset?: HeroPreset;
  eyebrow: string;
  badgeText?: string;
  title?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageMobile?: string;
  imagePosition?: string;
  mobileImagePosition?: string;
  videoSrc?: string;
  videoPoster?: string;
  primaryCta?: HeroAction;
  secondaryCta?: HeroAction;
  stats?: HeroStat[];
  featureChips?: HeroFeatureChip[];
  storyCards?: HeroStoryCard[];
  impactPanel?: HeroImpactPanel;
  headline?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export interface TrustBadge {
  icon: string;
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  note: string;
}

export interface ProgramItem {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface CollabItem {
  title: string;
  description: string;
  icon: string;
}

export interface TrustCard {
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface HomeContent {
  hero: {
    slides: HeroSlide[];
    trustBadges: TrustBadge[];
  };
  impactStats: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: StatItem[];
  };
  corePrograms: {
    eyebrow: string;
    title: string;
    subtitle: string;
    explore: string;
    items: ProgramItem[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { number: number; title: string; description: string }[];
    features: { title: string; description: string }[];
    badges: string[];
    stats: { label: string; value: string }[];
    ctas: { primary: string; secondary: string; tertiary: string };
  };
  globalCollaboration: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: CollabItem[];
    ctaLabel: string;
    ctaHref: string;
  };
  transparency: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: TrustCard[];
    reportsLabel: string;
    reportsHref: string;
  };
  finalCta: {
    eyebrow: string;
    title: string;
    subtitle: string;
    joinWpa: string;
    partnerWithUs: string;
    donateNow: string;
    reportRescue: string;
  };
}

export const heroSlidesEn: HeroSlide[] = [
  {
    id: "donation-transparency",
    preset: "full-width",
    eyebrow: "Trusted & Transparent",
    badgeText: "Verified Rescue Network",
    title: "Every Donation Tracked. Every Rescue Verified.",
    description:
      "From emergency treatment to vaccination drives, WPA operates through a verified partner network and publishes fund-usage reports so every contribution stays accountable.",
    backgroundImage: "/images/home/hero-global-animal-welfare.webp",
    backgroundImageMobile: "/images/home/hero-global-animal-welfare-mobile.webp",
    imagePosition: "center 28%",
    mobileImagePosition: "72% center",
    primaryCta: { label: "Join the Movement", href: "/join" },
    secondaryCta: { label: "Explore Programs", href: "/what-we-do" },
    featureChips: [
      { icon: "🚑", label: "Rescue", href: "/rescue" },
      { icon: "💚", label: "Protect", href: "/impact" },
      { icon: "📚", label: "Educate", href: "/awareness" },
      { icon: "🤝", label: "Empower", href: "/join" },
      { icon: "🌍", label: "Advocate", href: "/chapters" },
    ],
    impactPanel: {
      eyebrow: "Impact Snapshot",
      stats: [
        { value: "100,000+", label: "Animals Supported" },
        { value: "500+", label: "Rescue Network Teams" },
        { value: "120+", label: "Countries & Cities" },
        { value: "95%", label: "Donation Transparency" },
      ],
      ctaLabel: "See Our Impact",
      ctaHref: "/impact",
    },
  },
  {
    id: "rescue-dark-overlay",
    preset: "dark-overlay",
    eyebrow: "Rescue • Rehabilitate • Rehome",
    badgeText: "Field Response",
    title: "Small Act. Big Impact.",
    description:
      "Your support helps us rescue, treat, and rehabilitate animals in need. Together, we build a kinder, safer world for every life in our care.",
    backgroundImage: "/images/home/featured-bella-second-chance.webp",
    backgroundImageMobile: "/images/home/featured-bella-second-chance.webp",
    imagePosition: "center center",
    primaryCta: { label: "Donate Now", href: "/donation" },
    secondaryCta: { label: "Our Programs", href: "/what-we-do" },
    featureChips: [
      { icon: "🐾", label: "Adoption", href: "/adoption" },
      { icon: "🏥", label: "Medical Care", href: "/awareness" },
      { icon: "📍", label: "Rapid Dispatch", href: "/rescue" },
    ],
  },
  {
    id: "story-slider",
    preset: "story-panels",
    eyebrow: "Coordinated Care Journey",
    badgeText: "From Crisis to Recovery",
    title: "One Connected System. Four Critical Steps.",
    description:
      "WPA aligns rescue teams, clinics, shelters, and adoptive families inside one transparent journey that moves animals from distress to permanent care.",
    backgroundImage: "/images/home/campaign-donation-lives-bg.webp",
    backgroundImageMobile: "/images/home/hero-global-animal-welfare-mobile.webp",
    imagePosition: "center center",
    primaryCta: { label: "View Rescue Flow", href: "/rescue" },
    secondaryCta: { label: "Become a Partner", href: "/partners" },
    storyCards: [
      { id: "story-1", title: "Rescue", description: "We respond quickly to emergencies and save animals in distress.", image: "/images/home/program-rescue.webp" },
      { id: "story-2", title: "Care", description: "Providing medical care, shelter, and recovery support.", image: "/images/home/program-vaccination.webp" },
      { id: "story-3", title: "Rehabilitate", description: "Helping animals heal physically and emotionally.", image: "/images/home/program-awareness.webp" },
      { id: "story-4", title: "Rehome", description: "Matching loving families for a forever home.", image: "/images/home/program-adoption.webp" },
    ],
  },
  {
    id: "video-background",
    preset: "video-background",
    eyebrow: "Together for Animals",
    badgeText: "Video Mission Story",
    title: "Stronger Together for Animals",
    description:
      "We work across communities and borders to create lasting change through rescue, treatment, vaccination, and transparent collaboration.",
    backgroundImage: "/images/home/cta-kind-world.webp",
    backgroundImageMobile: "/images/home/cta-kind-world-mobile.webp",
    videoSrc: "/videos/home/wpa-hero.mp4",
    videoPoster: "/images/home/cta-kind-world.webp",
    imagePosition: "center center",
    primaryCta: { label: "Donate Now", href: "/donation" },
    secondaryCta: { label: "Explore Impact", href: "/impact" },
    featureChips: [
      { icon: "🎥", label: "Mission Film" },
      { icon: "🌐", label: "Global Chapters", href: "/chapters" },
      { icon: "📊", label: "Public Reports", href: "/reports" },
    ],
  },
  {
    id: "clean-white-image",
    preset: "clean-white",
    eyebrow: "Compassion in Action",
    badgeText: "Adoption & Recovery",
    title: "Every Life Deserves a Second Chance.",
    description:
      "Your kindness today can change tomorrow for animals waiting for treatment, shelter, rehabilitation, and a safe home.",
    backgroundImage: "/images/home/program-adoption.webp",
    backgroundImageMobile: "/images/home/program-adoption.webp",
    imagePosition: "center center",
    primaryCta: { label: "Donate Now", href: "/donation" },
    secondaryCta: { label: "See Our Impact", href: "/impact" },
  },
  {
    id: "corporate-impact",
    preset: "corporate-impact",
    eyebrow: "Global Impact",
    badgeText: "Enterprise Transparency",
    title: "A Global Network. A Local Impact.",
    description:
      "WPA partners with organizations, clinics, chapters, and volunteers in over 120 countries to protect animals and strengthen compassionate communities worldwide.",
    backgroundImage: "/images/home/hero-global-animal-welfare.webp",
    backgroundImageMobile: "/images/home/hero-global-animal-welfare-mobile.webp",
    imagePosition: "center 20%",
    mobileImagePosition: "72% center",
    primaryCta: { label: "Explore Our Network", href: "/chapters" },
    secondaryCta: { label: "View Reports", href: "/reports" },
    stats: [
      { value: "100,000+", label: "Animals Supported" },
      { value: "500+", label: "Rescue Teams" },
      { value: "300+", label: "Partner Organizations" },
      { value: "120+", label: "Countries & Cities" },
    ],
    impactPanel: {
      eyebrow: "Global Impact Snapshot",
      stats: [
        { value: "95%", label: "Programs Verified" },
        { value: "24/7", label: "Response Network" },
        { value: "1M+", label: "Lives Touched" },
      ],
      ctaLabel: "Partner With WPA",
      ctaHref: "/partners",
    },
  },
];

const en: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "Global animal welfare network",
        badgeText: "World Pet Association",
        headline: "Protecting Animals. Empowering Communities. Worldwide.",
        body: "WPA unites veterinary clinics, NGOs, local chapters, volunteers, and donors under one transparent, global platform for animal welfare — from rescue and adoption to vaccination and education.",
        ctaLabel: "Join the Movement",
        ctaHref: "/join",
        secondaryCtaLabel: "Explore Programs",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "Animals supported" },
          { value: "500+", label: "Rescue teams" },
          { value: "120+", label: "Country chapters" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "Trusted & transparent",
        badgeText: "Verified impact",
        headline: "Every Donation Tracked. Every Rescue Verified.",
        body: "From vaccination drives to emergency rescue, WPA operates through a verified partner network and publishes fund-usage reports so every contribution is accountable.",
        ctaLabel: "Join the Movement",
        ctaHref: "/join",
        secondaryCtaLabel: "Explore Programs",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "Partner organizations" },
          { value: "95%", label: "Funds to direct programs" },
          { value: "24/7", label: "Rescue response network" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "Adoption", href: "/adoption" },
      { icon: "🚑", label: "Rescue", href: "/rescue" },
      { icon: "❤️", label: "Donation", href: "/donation" },
      { icon: "📢", label: "Awareness", href: "/awareness" },
      { icon: "🌍", label: "Global Chapters", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "Our impact",
    title: "A Global Network Built for Measurable Impact",
    subtitle: "Every number reflects coordinated action across our rescue, adoption, and partner network — verified and reported transparently.",
    items: [
      { value: "100,000+", label: "Animals Supported", note: "Through rescue, adoption, vaccination, and care programs worldwide." },
      { value: "500+", label: "Rescue Network Teams", note: "Volunteer-led response teams active across partner regions." },
      { value: "300+", label: "Partner Organizations", note: "Veterinary clinics, NGOs, and shelters in our verified network." },
      { value: "120+", label: "Country & City Chapters", note: "Local chapters coordinating on-the-ground animal welfare action." },
      { value: "95%", label: "Donation Transparency", note: "Of funds directed to programs, tracked and publicly reported." },
    ],
  },
  corePrograms: {
    eyebrow: "Core programs",
    title: "Six Programs. One Global Mission.",
    subtitle: "WPA's core initiatives address the full lifecycle of animal welfare — from prevention and care to community and advocacy.",
    explore: "Explore",
    items: [
      { title: "Adoption", description: "Responsible matching of rescued animals with verified, loving homes worldwide.", href: "/adoption", icon: "🐾" },
      { title: "Rescue", description: "Rapid-response coordination for injured, abandoned, or at-risk animals.", href: "/rescue", icon: "🚑" },
      { title: "Donation & Fundraising", description: "Transparent, trackable funding for treatment, transport, and emergency care.", href: "/donation", icon: "❤️" },
      { title: "Awareness & Education", description: "Community campaigns promoting responsible, compassionate pet ownership.", href: "/awareness", icon: "📢" },
      { title: "Vaccination & Health Campaigns", description: "Large-scale vaccination and preventive health drives across partner regions.", href: "/awareness", icon: "💉" },
      { title: "Membership & Community", description: "A global network of members, volunteers, and advocates working together.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "FURTAIL-POWERED WELFARE SYSTEM",
    title: "How WPA Works Through Furtail",
    subtitle: "From a public post to verified care, transparent donations, and recovery updates — WPA connects people, clinics, NGOs, volunteers, and donors through one coordinated digital system.",
    steps: [
      { number: 1, title: "People Post or Report", description: "Citizens, pet owners, rescuers, and volunteers create welfare posts or report animal cases through the Furtail app." },
      { number: 2, title: "WPA Reviews & Verifies", description: "Local chapters verify location, urgency, media, partner needs, and donation eligibility." },
      { number: 3, title: "Partners Coordinate Care", description: "Clinics, NGOs, shelters, rescuers, and volunteers are assigned to treatment, rescue, shelter, or adoption support." },
      { number: 4, title: "Donations Power the Mission", description: "Verified cases and campaigns can collect donations through Furtail, with each contribution recorded." },
      { number: 5, title: "Updates Build Trust", description: "Donors and the public can follow progress posts, receipts, treatment updates, and final recovery stories." },
    ],
    features: [
      { title: "Create Welfare Posts", description: "Share rescue needs, adoption posts, lost pets, campaign updates, and awareness content directly from the Furtail app." },
      { title: "Collect & Give Donations", description: "Raise or contribute funds for treatment, food, shelter, vaccination, rescue, and emergency welfare cases." },
      { title: "Track Every Outcome", description: "Show receipts, fund usage, clinic updates, recovery progress, and final impact stories transparently." }
    ],
    badges: ["Verified Case", "Transparent Donation", "Clinic Assigned", "Digital Receipt", "Recovery Update"],
    stats: [
      { label: "Live Cases", value: "Real-time" },
      { label: "Donations Tracked", value: "Verified" },
      { label: "Partner Clinics", value: "Partner-led" },
      { label: "Recovery Updates", value: "Transparent" }
    ],
    ctas: {
      primary: "Report a Case",
      secondary: "Start a Donation",
      tertiary: "Explore Furtail App"
    }
  },
  globalCollaboration: {
    eyebrow: "Global collaboration",
    title: "One Platform, Every Stakeholder in Animal Welfare",
    subtitle: "WPA is built on collaboration — bringing governments, clinics, NGOs, shelters, volunteers, and donors onto one coordinated platform.",
    items: [
      { title: "Government", description: "Policy alignment, public health coordination, and regulatory partnership for animal welfare programs.", icon: "🏛️" },
      { title: "Veterinary Clinics", description: "Verified clinics deliver vaccination, treatment, and emergency medical care.", icon: "🏥" },
      { title: "NGOs", description: "Mission-aligned organizations extend WPA's reach across regions and communities.", icon: "🕊️" },
      { title: "Shelters", description: "Safe housing and rehabilitation for rescued animals awaiting adoption.", icon: "🏠" },
      { title: "Volunteers", description: "The people-powered backbone of rescue, transport, and community outreach.", icon: "🙌" },
      { title: "Donors", description: "Individuals and institutions funding transparent, verified impact worldwide.", icon: "💛" },
    ],
    ctaLabel: "Partner With WPA",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "Transparency & trust",
    title: "Built on Verified, Accountable Impact",
    subtitle: "WPA operates as a public trust — every fund, partner, and outcome is recorded and available for review.",
    items: [
      { title: "Fund Usage Reports", description: "Detailed breakdowns of how every donation is allocated across programs and regions.", icon: "📊", href: "/reports" },
      { title: "Public Annual Reports", description: "Independently reviewed annual reports published for full public accountability.", icon: "📄", href: "/reports" },
      { title: "Verified Partner Network", description: "Every clinic, NGO, and shelter is vetted before joining the WPA network.", icon: "✅", href: "/partners" },
      { title: "Certificate & Record Verification", description: "Digital certificates and QR-based records verify adoptions, vaccinations, and donations.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "View Public Reports",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "Take action",
    title: "Join the Global Movement for Safer, Healthier, and More Compassionate Animal Communities",
    subtitle: "Whether you give your time, your support, or your resources — every action moves us closer to a world where every animal is protected.",
    joinWpa: "Become a Member",
    partnerWithUs: "Partner With WPA",
    donateNow: "Donate Now",
    reportRescue: "Report a Rescue",
  },
};

const bn: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "বৈশ্বিক প্রাণী কল্যাণ নেটওয়ার্ক",
        badgeText: "ওয়ার্ল্ড পেট অ্যাসোসিয়েশন",
        headline: "প্রাণী রক্ষা। কমিউনিটির ক্ষমতায়ন। বিশ্বজুড়ে।",
        body: "WPA পশুচিকিৎসা ক্লিনিক, এনজিও, স্থানীয় চ্যাপ্টার, স্বেচ্ছাসেবক এবং দাতাদের একটি স্বচ্ছ, বৈশ্বিক প্ল্যাটফর্মে একত্রিত করে — উদ্ধার ও দত্তক থেকে টিকাদান ও শিক্ষা পর্যন্ত।",
        ctaLabel: "আন্দোলনে যোগ দিন",
        ctaHref: "/join",
        secondaryCtaLabel: "কর্মসূচি দেখুন",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "১,০০,০০০+", label: "সহায়তাপ্রাপ্ত প্রাণী" },
          { value: "৫০০+", label: "উদ্ধার দল" },
          { value: "১২০+", label: "দেশ চ্যাপ্টার" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "বিশ্বস্ত ও স্বচ্ছ",
        badgeText: "যাচাইকৃত প্রভাব",
        headline: "প্রতিটি দান ট্র্যাক করা হয়। প্রতিটি উদ্ধার যাচাইকৃত।",
        body: "টিকাদান কর্মসূচি থেকে জরুরি উদ্ধার পর্যন্ত, WPA একটি যাচাইকৃত অংশীদার নেটওয়ার্কের মাধ্যমে কাজ করে এবং তহবিল ব্যবহারের প্রতিবেদন প্রকাশ করে যাতে প্রতিটি অবদান জবাবদিহিমূলক থাকে।",
        ctaLabel: "আন্দোলনে যোগ দিন",
        ctaHref: "/join",
        secondaryCtaLabel: "কর্মসূচি দেখুন",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "৩০০+", label: "অংশীদার প্রতিষ্ঠান" },
          { value: "৯৫%", label: "সরাসরি কর্মসূচিতে তহবিল" },
          { value: "২৪/৭", label: "উদ্ধার প্রতিক্রিয়া নেটওয়ার্ক" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "দত্তক", href: "/adoption" },
      { icon: "🚑", label: "উদ্ধার", href: "/rescue" },
      { icon: "❤️", label: "দান", href: "/donation" },
      { icon: "📢", label: "সচেতনতা", href: "/awareness" },
      { icon: "🌍", label: "বৈশ্বিক চ্যাপ্টার", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "আমাদের প্রভাব",
    title: "পরিমাপযোগ্য প্রভাবের জন্য গড়া বৈশ্বিক নেটওয়ার্ক",
    subtitle: "প্রতিটি সংখ্যা আমাদের উদ্ধার, দত্তক এবং অংশীদার নেটওয়ার্কজুড়ে সমন্বিত কার্যক্রমকে প্রতিফলিত করে — স্বচ্ছভাবে যাচাই ও প্রতিবেদিত।",
    items: [
      { value: "১,০০,০০০+", label: "সহায়তাপ্রাপ্ত প্রাণী", note: "বিশ্বজুড়ে উদ্ধার, দত্তক, টিকাদান ও পরিচর্যা কর্মসূচির মাধ্যমে।" },
      { value: "৫০০+", label: "উদ্ধার নেটওয়ার্ক দল", note: "অংশীদার অঞ্চলজুড়ে সক্রিয় স্বেচ্ছাসেবক-চালিত প্রতিক্রিয়া দল।" },
      { value: "৩০০+", label: "অংশীদার প্রতিষ্ঠান", note: "আমাদের যাচাইকৃত নেটওয়ার্কে পশুচিকিৎসা ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র।" },
      { value: "১২০+", label: "দেশ ও শহর চ্যাপ্টার", note: "স্থানীয় চ্যাপ্টার মাঠপর্যায়ে প্রাণী কল্যাণ কার্যক্রম সমন্বয় করে।" },
      { value: "৯৫%", label: "দানের স্বচ্ছতা", note: "তহবিলের অংশ যা কর্মসূচিতে ব্যয় হয়, ট্র্যাক ও প্রকাশ্যে প্রতিবেদিত।" },
    ],
  },
  corePrograms: {
    eyebrow: "মূল কর্মসূচি",
    title: "ছয়টি কর্মসূচি। একটি বৈশ্বিক লক্ষ্য।",
    subtitle: "WPA-এর মূল উদ্যোগগুলো প্রাণী কল্যাণের সম্পূর্ণ চক্রকে সম্বোধন করে — প্রতিরোধ ও পরিচর্যা থেকে কমিউনিটি ও পক্ষসমর্থন পর্যন্ত।",
    explore: "দেখুন",
    items: [
      { title: "দত্তক", description: "বিশ্বজুড়ে উদ্ধারকৃত প্রাণীদের যাচাইকৃত, ভালোবাসাময় ঘরের সাথে দায়িত্বশীল মিলন।", href: "/adoption", icon: "🐾" },
      { title: "উদ্ধার", description: "আহত, পরিত্যক্ত বা ঝুঁকিপূর্ণ প্রাণীদের জন্য দ্রুত-সাড়া সমন্বয়।", href: "/rescue", icon: "🚑" },
      { title: "দান ও তহবিল সংগ্রহ", description: "চিকিৎসা, পরিবহন ও জরুরি যত্নের জন্য স্বচ্ছ, ট্র্যাকযোগ্য তহবিল।", href: "/donation", icon: "❤️" },
      { title: "সচেতনতা ও শিক্ষা", description: "দায়িত্বশীল ও সহানুভূতিশীল পোষা প্রাণী পালনের প্রচার কমিউনিটি প্রচারাভিযান।", href: "/awareness", icon: "📢" },
      { title: "টিকাদান ও স্বাস্থ্য কর্মসূচি", description: "অংশীদার অঞ্চলজুড়ে বৃহৎ পরিসরে টিকাদান ও প্রতিরোধমূলক স্বাস্থ্য কর্মসূচি।", href: "/awareness", icon: "💉" },
      { title: "সদস্যপদ ও কমিউনিটি", description: "সদস্য, স্বেচ্ছাসেবক ও সমর্থকদের একটি বৈশ্বিক নেটওয়ার্ক একসাথে কাজ করছে।", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "ফারটেইল-চালিত কল্যাণ ব্যবস্থা",
    title: "ফারটেইলের মাধ্যমে WPA কীভাবে কাজ করে",
    subtitle: "একটি পাবলিক পোস্ট থেকে যাচাইকৃত পরিচর্যা, স্বচ্ছ দান এবং পুনরুদ্ধারের আপডেট পর্যন্ত — WPA একটি সমন্বিত ডিজিটাল সিস্টেমের মাধ্যমে মানুষ, ক্লিনিক, এনজিও, স্বেচ্ছাসেবক এবং দাতাদের সংযুক্ত করে।",
    steps: [
      { number: 1, title: "মানুষ পোস্ট বা রিপোর্ট করে", description: "নাগরিক, পোষা প্রাণীর মালিক, উদ্ধারকারী এবং স্বেচ্ছাসেবকরা ফারটেইল অ্যাপের মাধ্যমে কল্যাণ পোস্ট বা প্রাণীর কেস রিপোর্ট করে।" },
      { number: 2, title: "WPA যাচাই করে", description: "স্থানীয় চ্যাপ্টার অবস্থান, জরুরি অবস্থা, মিডিয়া, অংশীদারের প্রয়োজন এবং অনুদানের যোগ্যতা যাচাই করে।" },
      { number: 3, title: "অংশীদাররা সমন্বয় করে", description: "ক্লিনিক, এনজিও, আশ্রয়কেন্দ্র, উদ্ধারকারী এবং স্বেচ্ছাসেবকদের চিকিৎসা, উদ্ধার, আশ্রয় বা দত্তক সহায়তার জন্য নিয়োগ করা হয়।" },
      { number: 4, title: "দান মিশনকে শক্তিশালী করে", description: "যাচাইকৃত কেস এবং প্রচারাভিযান ফারটেইলের মাধ্যমে অনুদান সংগ্রহ করতে পারে, প্রতিটি অবদান নথিভুক্ত করা হয়।" },
      { number: 5, title: "আপডেট বিশ্বাস তৈরি করে", description: "দাতা এবং সাধারণ মানুষ অগ্রগতির পোস্ট, রসিদ, চিকিৎসার আপডেট এবং চূড়ান্ত পুনরুদ্ধারের গল্পগুলি অনুসরণ করতে পারে।" },
    ],
    features: [
      { title: "কল্যাণ পোস্ট তৈরি করুন", description: "উদ্ধার প্রয়োজন, দত্তক পোস্ট, হারানো পোষা প্রাণী, প্রচারাভিযান আপডেট সরাসরি ফারটেইল অ্যাপ থেকে শেয়ার করুন।" },
      { title: "দান সংগ্রহ করুন ও দিন", description: "চিকিৎসা, খাবার, আশ্রয়, টিকাদান, উদ্ধার এবং জরুরি কল্যাণ কেসের জন্য তহবিল সংগ্রহ করুন বা অবদান রাখুন।" },
      { title: "প্রতিটি ফলাফল ট্র্যাক করুন", description: "রসিদ, তহবিল ব্যবহার, ক্লিনিক আপডেট, পুনরুদ্ধারের অগ্রগতি এবং চূড়ান্ত প্রভাবের গল্প স্বচ্ছভাবে দেখান।" }
    ],
    badges: ["যাচাইকৃত কেস", "স্বচ্ছ দান", "ক্লিনিক নির্ধারিত", "ডিজিটাল রসিদ", "পুনরুদ্ধার আপডেট"],
    stats: [
      { label: "লাইভ কেস", value: "রিয়েল-টাইম" },
      { label: "ট্র্যাককৃত দান", value: "যাচাইকৃত" },
      { label: "অংশীদার ক্লিনিক", value: "অংশীদার-চালিত" },
      { label: "পুনরুদ্ধার আপডেট", value: "স্বচ্ছ" }
    ],
    ctas: {
      primary: "একটি কেস রিপোর্ট করুন",
      secondary: "দান শুরু করুন",
      tertiary: "ফারটেইল অ্যাপ দেখুন"
    }
  },
  globalCollaboration: {
    eyebrow: "বৈশ্বিক সহযোগিতা",
    title: "একটি প্ল্যাটফর্ম, প্রাণী কল্যাণের প্রতিটি অংশীজন",
    subtitle: "WPA সহযোগিতার ভিত্তিতে গড়ে উঠেছে — সরকার, ক্লিনিক, এনজিও, আশ্রয়কেন্দ্র, স্বেচ্ছাসেবক ও দাতাদের একটি সমন্বিত প্ল্যাটফর্মে নিয়ে আসা।",
    items: [
      { title: "সরকার", description: "প্রাণী কল্যাণ কর্মসূচির জন্য নীতি সমন্বয়, জনস্বাস্থ্য সমন্বয় এবং নিয়ন্ত্রক অংশীদারিত্ব।", icon: "🏛️" },
      { title: "পশুচিকিৎসা ক্লিনিক", description: "যাচাইকৃত ক্লিনিক টিকাদান, চিকিৎসা ও জরুরি চিকিৎসা সেবা প্রদান করে।", icon: "🏥" },
      { title: "এনজিও", description: "লক্ষ্য-সংগতিপূর্ণ প্রতিষ্ঠানসমূহ WPA-এর পরিধি অঞ্চল ও কমিউনিটিজুড়ে বিস্তৃত করে।", icon: "🕊️" },
      { title: "আশ্রয়কেন্দ্র", description: "দত্তকের অপেক্ষায় থাকা উদ্ধারকৃত প্রাণীদের জন্য নিরাপদ আবাসন ও পুনর্বাসন।", icon: "🏠" },
      { title: "স্বেচ্ছাসেবক", description: "উদ্ধার, পরিবহন ও কমিউনিটি প্রচারের মানুষ-চালিত মেরুদণ্ড।", icon: "🙌" },
      { title: "দাতা", description: "বিশ্বজুড়ে স্বচ্ছ, যাচাইকৃত প্রভাবে অর্থায়নকারী ব্যক্তি ও প্রতিষ্ঠান।", icon: "💛" },
    ],
    ctaLabel: "WPA-এর সঙ্গী হোন",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "স্বচ্ছতা ও বিশ্বাস",
    title: "যাচাইকৃত, জবাবদিহিমূলক প্রভাবের উপর নির্মিত",
    subtitle: "WPA একটি পাবলিক ট্রাস্ট হিসেবে কাজ করে — প্রতিটি তহবিল, অংশীদার ও ফলাফল নথিভুক্ত এবং পর্যালোচনার জন্য উপলব্ধ।",
    items: [
      { title: "তহবিল ব্যবহার প্রতিবেদন", description: "কর্মসূচি ও অঞ্চলজুড়ে প্রতিটি দান কীভাবে বরাদ্দ করা হয় তার বিস্তারিত বিবরণ।", icon: "📊", href: "/reports" },
      { title: "জনসাধারণের বার্ষিক প্রতিবেদন", description: "সম্পূর্ণ জনসাধারণের জবাবদিহিতার জন্য স্বাধীনভাবে পর্যালোচিত বার্ষিক প্রতিবেদন প্রকাশিত হয়।", icon: "📄", href: "/reports" },
      { title: "যাচাইকৃত অংশীদার নেটওয়ার্ক", description: "প্রতিটি ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র WPA নেটওয়ার্কে যোগ দেওয়ার আগে যাচাই করা হয়।", icon: "✅", href: "/partners" },
      { title: "সার্টিফিকেট ও রেকর্ড যাচাই", description: "ডিজিটাল সার্টিফিকেট ও QR-ভিত্তিক রেকর্ড দত্তক, টিকাদান ও দান যাচাই করে।", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "পাবলিক প্রতিবেদন দেখুন",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "পদক্ষেপ নিন",
    title: "নিরাপদ, সুস্থ ও সহানুভূতিশীল প্রাণী কমিউনিটির বৈশ্বিক আন্দোলনে যোগ দিন",
    subtitle: "আপনার সময়, সমর্থন বা সম্পদ যাই দিন না কেন — প্রতিটি পদক্ষেপ আমাদের এমন একটি বিশ্বের কাছাকাছি নিয়ে যায় যেখানে প্রতিটি প্রাণী সুরক্ষিত।",
    joinWpa: "সদস্য হোন",
    partnerWithUs: "WPA-এর সঙ্গী হোন",
    donateNow: "এখনই দান করুন",
    reportRescue: "উদ্ধারের অনুরোধ জানান",
  },
};

// ─── AR (Arabic) ─────────────────────────────────────────────────────────────

const ar: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "شبكة عالمية لرفاهية الحيوان",
        badgeText: "World Pet Association",
        headline: "حماية الحيوانات. تمكين المجتمعات. حول العالم.",
        body: "توحّد WPA العيادات البيطرية والمنظمات غير الحكومية والفروع المحلية والمتطوعين والمتبرعين ضمن منصة عالمية واحدة شفافة لرفاهية الحيوان — من الإنقاذ والتبني إلى التطعيم والتوعية.",
        ctaLabel: "انضم إلى الحركة",
        ctaHref: "/join",
        secondaryCtaLabel: "استكشف البرامج",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "حيوان تمت مساعدته" },
          { value: "500+", label: "فريق إنقاذ" },
          { value: "120+", label: "فرع في دول مختلفة" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "موثوقة وشفافة",
        badgeText: "أثر موثّق",
        headline: "كل تبرع يُتتبّع. كل عملية إنقاذ يتم التحقق منها.",
        body: "من حملات التطعيم إلى عمليات الإنقاذ الطارئة، تعمل WPA من خلال شبكة شركاء موثّقة وتنشر تقارير استخدام الأموال ليبقى كل تبرع خاضعًا للمساءلة.",
        ctaLabel: "انضم إلى الحركة",
        ctaHref: "/join",
        secondaryCtaLabel: "استكشف البرامج",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "منظمة شريكة" },
          { value: "95%", label: "من الأموال تذهب مباشرة للبرامج" },
          { value: "24/7", label: "شبكة استجابة للإنقاذ" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "التبني", href: "/adoption" },
      { icon: "🚑", label: "الإنقاذ", href: "/rescue" },
      { icon: "❤️", label: "التبرع", href: "/donation" },
      { icon: "📢", label: "التوعية", href: "/awareness" },
      { icon: "🌍", label: "الفروع العالمية", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "أثرنا",
    title: "شبكة عالمية مبنية لتحقيق أثر قابل للقياس",
    subtitle: "كل رقم يعكس عملاً منسقًا عبر شبكاتنا للإنقاذ والتبني والشركاء — يتم التحقق منه والإبلاغ عنه بشفافية.",
    items: [
      { value: "100,000+", label: "حيوان تمت مساعدته", note: "من خلال برامج الإنقاذ والتبني والتطعيم والرعاية حول العالم." },
      { value: "500+", label: "فرق شبكة الإنقاذ", note: "فرق استجابة يقودها متطوعون نشطون في مناطق الشركاء." },
      { value: "300+", label: "منظمة شريكة", note: "عيادات بيطرية ومنظمات غير حكومية وملاجئ ضمن شبكتنا الموثّقة." },
      { value: "120+", label: "فرع في دول ومدن", note: "فروع محلية تنسّق العمل الميداني لرفاهية الحيوان." },
      { value: "95%", label: "شفافية التبرعات", note: "من الأموال الموجهة للبرامج، يتم تتبعها والإبلاغ عنها علنًا." },
    ],
  },
  corePrograms: {
    eyebrow: "البرامج الأساسية",
    title: "ستة برامج. رسالة عالمية واحدة.",
    subtitle: "تعالج مبادرات WPA الأساسية دورة حياة رفاهية الحيوان بأكملها — من الوقاية والرعاية إلى المجتمع والمناصرة.",
    explore: "استكشف",
    items: [
      { title: "التبني", description: "مطابقة مسؤولة للحيوانات المنقذة مع أسر محبة تم التحقق منها حول العالم.", href: "/adoption", icon: "🐾" },
      { title: "الإنقاذ", description: "تنسيق استجابة سريعة للحيوانات المصابة أو المهجورة أو المعرضة للخطر.", href: "/rescue", icon: "🚑" },
      { title: "التبرع وجمع التمويل", description: "تمويل شفاف وقابل للتتبع للعلاج والنقل والرعاية الطارئة.", href: "/donation", icon: "❤️" },
      { title: "التوعية والتثقيف", description: "حملات مجتمعية تروّج لتربية مسؤولة ورحيمة للحيوانات الأليفة.", href: "/awareness", icon: "📢" },
      { title: "حملات التطعيم والصحة", description: "حملات تطعيم وصحة وقائية واسعة النطاق عبر مناطق الشركاء.", href: "/awareness", icon: "💉" },
      { title: "العضوية والمجتمع", description: "شبكة عالمية من الأعضاء والمتطوعين والمناصرين يعملون معًا.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "نظام رعاية مدعوم من FURTAIL",
    title: "كيف تعمل WPA من خلال Furtail",
    subtitle: "من منشور عام إلى رعاية موثّقة وتبرعات شفافة وتحديثات التعافي — تربط WPA الأفراد والعيادات والمنظمات غير الحكومية والمتطوعين والمتبرعين عبر نظام رقمي منسّق واحد.",
    steps: [
      { number: 1, title: "الناس ينشرون أو يبلّغون", description: "يقوم المواطنون وأصحاب الحيوانات الأليفة والمنقذون والمتطوعون بإنشاء منشورات رعاية أو الإبلاغ عن حالات الحيوانات عبر تطبيق Furtail." },
      { number: 2, title: "WPA تراجع وتتحقق", description: "تتحقق الفروع المحلية من الموقع والإلحاح والوسائط واحتياجات الشركاء وأهلية التبرع." },
      { number: 3, title: "الشركاء ينسقون الرعاية", description: "يتم تعيين العيادات والمنظمات غير الحكومية والملاجئ والمنقذين والمتطوعين للعلاج أو الإنقاذ أو الإيواء أو دعم التبني." },
      { number: 4, title: "التبرعات تدعم الرسالة", description: "يمكن للحالات والحملات الموثّقة جمع التبرعات عبر Furtail، مع تسجيل كل مساهمة." },
      { number: 5, title: "التحديثات تبني الثقة", description: "يمكن للمتبرعين والجمهور متابعة منشورات التقدم والإيصالات وتحديثات العلاج وقصص التعافي النهائية." },
    ],
    features: [
      { title: "إنشاء منشورات الرعاية", description: "شارك احتياجات الإنقاذ ومنشورات التبني والحيوانات المفقودة وتحديثات الحملات والتوعية مباشرة من تطبيق Furtail." },
      { title: "جمع التبرعات وتقديمها", description: "اجمع أو ساهم بأموال للعلاج والغذاء والإيواء والتطعيم والإنقاذ وحالات الرعاية الطارئة." },
      { title: "تتبع كل نتيجة", description: "اعرض الإيصالات واستخدام الأموال وتحديثات العيادات وتقدم التعافي وقصص الأثر النهائية بشفافية." }
    ],
    badges: ["حالة موثّقة", "تبرع شفاف", "عيادة معيّنة", "إيصال رقمي", "تحديث التعافي"],
    stats: [
      { label: "حالات مباشرة", value: "لحظي" },
      { label: "تبرعات متتبَّعة", value: "موثّقة" },
      { label: "عيادات شريكة", value: "بقيادة الشركاء" },
      { label: "تحديثات التعافي", value: "شفافة" }
    ],
    ctas: {
      primary: "الإبلاغ عن حالة",
      secondary: "ابدأ تبرعًا",
      tertiary: "استكشف تطبيق Furtail"
    }
  },
  globalCollaboration: {
    eyebrow: "تعاون عالمي",
    title: "منصة واحدة، لكل أصحاب المصلحة في رفاهية الحيوان",
    subtitle: "بُنيت WPA على التعاون — بجمع الحكومات والعيادات والمنظمات غير الحكومية والملاجئ والمتطوعين والمتبرعين على منصة واحدة منسّقة.",
    items: [
      { title: "الحكومة", description: "مواءمة السياسات والتنسيق الصحي العام والشراكة التنظيمية لبرامج رفاهية الحيوان.", icon: "🏛️" },
      { title: "العيادات البيطرية", description: "تقدم العيادات الموثّقة التطعيم والعلاج والرعاية الطبية الطارئة.", icon: "🏥" },
      { title: "المنظمات غير الحكومية", description: "توسّع المنظمات المتوافقة مع الرسالة نطاق عمل WPA عبر المناطق والمجتمعات.", icon: "🕊️" },
      { title: "الملاجئ", description: "إيواء آمن وتأهيل للحيوانات المنقذة بانتظار التبني.", icon: "🏠" },
      { title: "المتطوعون", description: "العمود الفقري البشري للإنقاذ والنقل والتواصل المجتمعي.", icon: "🙌" },
      { title: "المتبرعون", description: "أفراد ومؤسسات يموّلون أثرًا شفافًا وموثّقًا حول العالم.", icon: "💛" },
    ],
    ctaLabel: "كن شريكًا لـ WPA",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "الشفافية والثقة",
    title: "مبنية على أثر موثّق وخاضع للمساءلة",
    subtitle: "تعمل WPA كمؤسسة ائتمانية عامة — يتم تسجيل كل تمويل وشريك ونتيجة وإتاحتها للمراجعة.",
    items: [
      { title: "تقارير استخدام الأموال", description: "تفصيل دقيق لكيفية تخصيص كل تبرع عبر البرامج والمناطق.", icon: "📊", href: "/reports" },
      { title: "التقارير السنوية العامة", description: "تقارير سنوية تمت مراجعتها بشكل مستقل ونُشرت لتحقيق مساءلة عامة كاملة.", icon: "📄", href: "/reports" },
      { title: "شبكة شركاء موثّقة", description: "يتم فحص كل عيادة ومنظمة غير حكومية وملجأ قبل الانضمام إلى شبكة WPA.", icon: "✅", href: "/partners" },
      { title: "التحقق من الشهادات والسجلات", description: "شهادات رقمية وسجلات قائمة على رمز QR تتحقق من عمليات التبني والتطعيم والتبرعات.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "عرض التقارير العامة",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "اتخذ إجراءً",
    title: "انضم إلى الحركة العالمية من أجل مجتمعات حيوانية أكثر أمانًا وصحة ورحمة",
    subtitle: "سواء منحت وقتك أو دعمك أو مواردك — كل إجراء يقربنا خطوة من عالم تُحمى فيه كل الحيوانات.",
    joinWpa: "كن عضوًا",
    partnerWithUs: "كن شريكًا لـ WPA",
    donateNow: "تبرع الآن",
    reportRescue: "أبلغ عن حالة إنقاذ",
  },
};

// ─── FR (French) ─────────────────────────────────────────────────────────────

const fr: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "Réseau mondial de protection animale",
        badgeText: "World Pet Association",
        headline: "Protéger les animaux. Renforcer les communautés. Partout dans le monde.",
        body: "WPA réunit cliniques vétérinaires, ONG, sections locales, bénévoles et donateurs au sein d'une plateforme mondiale unique et transparente pour le bien-être animal — du sauvetage à l'adoption, en passant par la vaccination et l'éducation.",
        ctaLabel: "Rejoindre le mouvement",
        ctaHref: "/join",
        secondaryCtaLabel: "Découvrir les programmes",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "Animaux aidés" },
          { value: "500+", label: "Équipes de secours" },
          { value: "120+", label: "Sections nationales" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "Fiable et transparente",
        badgeText: "Impact vérifié",
        headline: "Chaque don suivi. Chaque sauvetage vérifié.",
        body: "Des campagnes de vaccination aux sauvetages d'urgence, WPA opère via un réseau de partenaires vérifiés et publie des rapports d'utilisation des fonds afin que chaque contribution reste responsable.",
        ctaLabel: "Rejoindre le mouvement",
        ctaHref: "/join",
        secondaryCtaLabel: "Découvrir les programmes",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "Organisations partenaires" },
          { value: "95%", label: "Fonds versés directement aux programmes" },
          { value: "24/7", label: "Réseau d'intervention d'urgence" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "Adoption", href: "/adoption" },
      { icon: "🚑", label: "Sauvetage", href: "/rescue" },
      { icon: "❤️", label: "Don", href: "/donation" },
      { icon: "📢", label: "Sensibilisation", href: "/awareness" },
      { icon: "🌍", label: "Sections mondiales", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "Notre impact",
    title: "Un réseau mondial conçu pour un impact mesurable",
    subtitle: "Chaque chiffre reflète une action coordonnée à travers notre réseau de sauvetage, d'adoption et de partenaires — vérifiée et rapportée en toute transparence.",
    items: [
      { value: "100,000+", label: "Animaux aidés", note: "Grâce aux programmes de sauvetage, d'adoption, de vaccination et de soins dans le monde entier." },
      { value: "500+", label: "Équipes du réseau de secours", note: "Équipes d'intervention menées par des bénévoles, actives dans les régions partenaires." },
      { value: "300+", label: "Organisations partenaires", note: "Cliniques vétérinaires, ONG et refuges au sein de notre réseau vérifié." },
      { value: "120+", label: "Sections nationales et locales", note: "Sections locales coordonnant l'action de terrain en faveur du bien-être animal." },
      { value: "95%", label: "Transparence des dons", note: "Part des fonds destinés aux programmes, suivie et publiquement rapportée." },
    ],
  },
  corePrograms: {
    eyebrow: "Programmes principaux",
    title: "Six programmes. Une mission mondiale.",
    subtitle: "Les initiatives principales de WPA couvrent l'ensemble du cycle du bien-être animal — de la prévention et des soins à la communauté et au plaidoyer.",
    explore: "Découvrir",
    items: [
      { title: "Adoption", description: "Mise en relation responsable d'animaux sauvés avec des foyers aimants et vérifiés dans le monde entier.", href: "/adoption", icon: "🐾" },
      { title: "Sauvetage", description: "Coordination d'intervention rapide pour les animaux blessés, abandonnés ou en danger.", href: "/rescue", icon: "🚑" },
      { title: "Dons et collecte de fonds", description: "Financement transparent et traçable pour les soins, le transport et les urgences.", href: "/donation", icon: "❤️" },
      { title: "Sensibilisation et éducation", description: "Campagnes communautaires pour une possession d'animaux responsable et bienveillante.", href: "/awareness", icon: "📢" },
      { title: "Campagnes de vaccination et de santé", description: "Campagnes de vaccination et de santé préventive à grande échelle dans les régions partenaires.", href: "/awareness", icon: "💉" },
      { title: "Adhésion et communauté", description: "Un réseau mondial de membres, bénévoles et défenseurs travaillant ensemble.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "SYSTÈME DE PROTECTION ANIMÉ PAR FURTAIL",
    title: "Comment WPA fonctionne grâce à Furtail",
    subtitle: "D'une publication publique à des soins vérifiés, des dons transparents et des mises à jour de rétablissement — WPA relie particuliers, cliniques, ONG, bénévoles et donateurs au sein d'un système numérique coordonné unique.",
    steps: [
      { number: 1, title: "Les gens publient ou signalent", description: "Citoyens, propriétaires d'animaux, sauveteurs et bénévoles créent des publications de protection animale ou signalent des cas via l'application Furtail." },
      { number: 2, title: "WPA examine et vérifie", description: "Les sections locales vérifient le lieu, l'urgence, les médias, les besoins des partenaires et l'éligibilité au don." },
      { number: 3, title: "Les partenaires coordonnent les soins", description: "Cliniques, ONG, refuges, sauveteurs et bénévoles sont assignés au traitement, au sauvetage, à l'hébergement ou au soutien à l'adoption." },
      { number: 4, title: "Les dons alimentent la mission", description: "Les cas et campagnes vérifiés peuvent recueillir des dons via Furtail, chaque contribution étant enregistrée." },
      { number: 5, title: "Les mises à jour bâtissent la confiance", description: "Donateurs et public peuvent suivre les publications de progrès, les reçus, les mises à jour des traitements et les histoires de rétablissement finales." },
    ],
    features: [
      { title: "Créer des publications de protection animale", description: "Partagez besoins de sauvetage, publications d'adoption, animaux perdus et mises à jour de campagne directement depuis l'application Furtail." },
      { title: "Collecter et faire des dons", description: "Collectez ou contribuez des fonds pour le traitement, la nourriture, l'hébergement, la vaccination, le sauvetage et les cas d'urgence." },
      { title: "Suivre chaque résultat", description: "Affichez reçus, utilisation des fonds, mises à jour des cliniques, progrès du rétablissement et histoires d'impact final en toute transparence." }
    ],
    badges: ["Cas vérifié", "Don transparent", "Clinique assignée", "Reçu numérique", "Mise à jour du rétablissement"],
    stats: [
      { label: "Cas en direct", value: "Temps réel" },
      { label: "Dons suivis", value: "Vérifiés" },
      { label: "Cliniques partenaires", value: "Menées par les partenaires" },
      { label: "Mises à jour du rétablissement", value: "Transparentes" }
    ],
    ctas: {
      primary: "Signaler un cas",
      secondary: "Commencer un don",
      tertiary: "Découvrir l'application Furtail"
    }
  },
  globalCollaboration: {
    eyebrow: "Collaboration mondiale",
    title: "Une plateforme, tous les acteurs du bien-être animal",
    subtitle: "WPA est fondée sur la collaboration — réunissant gouvernements, cliniques, ONG, refuges, bénévoles et donateurs sur une plateforme coordonnée unique.",
    items: [
      { title: "Gouvernement", description: "Alignement des politiques, coordination de la santé publique et partenariat réglementaire pour les programmes de bien-être animal.", icon: "🏛️" },
      { title: "Cliniques vétérinaires", description: "Des cliniques vérifiées assurent vaccination, traitement et soins médicaux d'urgence.", icon: "🏥" },
      { title: "ONG", description: "Des organisations partageant notre mission étendent la portée de WPA à travers régions et communautés.", icon: "🕊️" },
      { title: "Refuges", description: "Hébergement sûr et réhabilitation pour les animaux sauvés en attente d'adoption.", icon: "🏠" },
      { title: "Bénévoles", description: "L'épine dorsale humaine du sauvetage, du transport et de la sensibilisation communautaire.", icon: "🙌" },
      { title: "Donateurs", description: "Particuliers et institutions finançant un impact transparent et vérifié dans le monde entier.", icon: "💛" },
    ],
    ctaLabel: "Devenir partenaire de WPA",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "Transparence et confiance",
    title: "Bâtie sur un impact vérifié et responsable",
    subtitle: "WPA fonctionne comme une fiducie publique — chaque fonds, partenaire et résultat est enregistré et disponible pour examen.",
    items: [
      { title: "Rapports d'utilisation des fonds", description: "Répartitions détaillées de la manière dont chaque don est alloué entre programmes et régions.", icon: "📊", href: "/reports" },
      { title: "Rapports annuels publics", description: "Rapports annuels examinés de manière indépendante, publiés pour une pleine redevabilité publique.", icon: "📄", href: "/reports" },
      { title: "Réseau de partenaires vérifiés", description: "Chaque clinique, ONG et refuge est contrôlé avant de rejoindre le réseau WPA.", icon: "✅", href: "/partners" },
      { title: "Vérification des certificats et registres", description: "Certificats numériques et registres à code QR vérifiant adoptions, vaccinations et dons.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "Voir les rapports publics",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "Passer à l'action",
    title: "Rejoignez le mouvement mondial pour des communautés animales plus sûres, plus saines et plus bienveillantes",
    subtitle: "Que vous donniez votre temps, votre soutien ou vos ressources — chaque geste nous rapproche d'un monde où chaque animal est protégé.",
    joinWpa: "Devenir membre",
    partnerWithUs: "Devenir partenaire de WPA",
    donateNow: "Faire un don maintenant",
    reportRescue: "Signaler un sauvetage",
  },
};

// ─── ES (Spanish) ─────────────────────────────────────────────────────────────

const es: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "Red mundial de bienestar animal",
        badgeText: "World Pet Association",
        headline: "Protegiendo animales. Empoderando comunidades. En todo el mundo.",
        body: "WPA une a clínicas veterinarias, ONG, capítulos locales, voluntarios y donantes en una única plataforma global y transparente para el bienestar animal — desde el rescate y la adopción hasta la vacunación y la educación.",
        ctaLabel: "Únete al movimiento",
        ctaHref: "/join",
        secondaryCtaLabel: "Explorar programas",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "Animales apoyados" },
          { value: "500+", label: "Equipos de rescate" },
          { value: "120+", label: "Capítulos de países" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "Confiable y transparente",
        badgeText: "Impacto verificado",
        headline: "Cada donación rastreada. Cada rescate verificado.",
        body: "Desde campañas de vacunación hasta rescates de emergencia, WPA opera a través de una red de socios verificados y publica informes de uso de fondos para que cada aporte sea responsable.",
        ctaLabel: "Únete al movimiento",
        ctaHref: "/join",
        secondaryCtaLabel: "Explorar programas",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "Organizaciones asociadas" },
          { value: "95%", label: "Fondos destinados directamente a programas" },
          { value: "24/7", label: "Red de respuesta de rescate" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "Adopción", href: "/adoption" },
      { icon: "🚑", label: "Rescate", href: "/rescue" },
      { icon: "❤️", label: "Donación", href: "/donation" },
      { icon: "📢", label: "Concienciación", href: "/awareness" },
      { icon: "🌍", label: "Capítulos globales", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "Nuestro impacto",
    title: "Una red global construida para un impacto medible",
    subtitle: "Cada cifra refleja la acción coordinada en nuestra red de rescate, adopción y socios — verificada y reportada con transparencia.",
    items: [
      { value: "100,000+", label: "Animales apoyados", note: "A través de programas de rescate, adopción, vacunación y cuidado en todo el mundo." },
      { value: "500+", label: "Equipos de la red de rescate", note: "Equipos de respuesta liderados por voluntarios activos en regiones asociadas." },
      { value: "300+", label: "Organizaciones asociadas", note: "Clínicas veterinarias, ONG y refugios dentro de nuestra red verificada." },
      { value: "120+", label: "Capítulos de países y ciudades", note: "Capítulos locales que coordinan la acción de bienestar animal sobre el terreno." },
      { value: "95%", label: "Transparencia de donaciones", note: "Fondos destinados a programas, rastreados y reportados públicamente." },
    ],
  },
  corePrograms: {
    eyebrow: "Programas principales",
    title: "Seis programas. Una misión global.",
    subtitle: "Las iniciativas principales de WPA abordan todo el ciclo del bienestar animal — desde la prevención y el cuidado hasta la comunidad y la incidencia.",
    explore: "Explorar",
    items: [
      { title: "Adopción", description: "Emparejamiento responsable de animales rescatados con hogares amorosos y verificados en todo el mundo.", href: "/adoption", icon: "🐾" },
      { title: "Rescate", description: "Coordinación de respuesta rápida para animales heridos, abandonados o en riesgo.", href: "/rescue", icon: "🚑" },
      { title: "Donación y recaudación de fondos", description: "Financiamiento transparente y rastreable para tratamiento, transporte y cuidado de emergencia.", href: "/donation", icon: "❤️" },
      { title: "Concienciación y educación", description: "Campañas comunitarias que promueven una tenencia responsable y compasiva de mascotas.", href: "/awareness", icon: "📢" },
      { title: "Campañas de vacunación y salud", description: "Campañas masivas de vacunación y salud preventiva en regiones asociadas.", href: "/awareness", icon: "💉" },
      { title: "Membresía y comunidad", description: "Una red global de miembros, voluntarios y defensores trabajando juntos.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "SISTEMA DE BIENESTAR IMPULSADO POR FURTAIL",
    title: "Cómo funciona WPA a través de Furtail",
    subtitle: "Desde una publicación pública hasta el cuidado verificado, donaciones transparentes y actualizaciones de recuperación — WPA conecta personas, clínicas, ONG, voluntarios y donantes mediante un sistema digital coordinado.",
    steps: [
      { number: 1, title: "Las personas publican o reportan", description: "Ciudadanos, dueños de mascotas, rescatistas y voluntarios crean publicaciones de bienestar o reportan casos de animales a través de la app Furtail." },
      { number: 2, title: "WPA revisa y verifica", description: "Los capítulos locales verifican la ubicación, urgencia, medios, necesidades de socios y elegibilidad para donaciones." },
      { number: 3, title: "Los socios coordinan el cuidado", description: "Clínicas, ONG, refugios, rescatistas y voluntarios son asignados a tratamiento, rescate, refugio o apoyo de adopción." },
      { number: 4, title: "Las donaciones impulsan la misión", description: "Los casos y campañas verificados pueden recaudar donaciones a través de Furtail, con cada aporte registrado." },
      { number: 5, title: "Las actualizaciones generan confianza", description: "Donantes y el público pueden seguir publicaciones de progreso, recibos, actualizaciones de tratamiento e historias finales de recuperación." },
    ],
    features: [
      { title: "Crear publicaciones de bienestar", description: "Comparte necesidades de rescate, publicaciones de adopción, mascotas perdidas y actualizaciones de campañas directamente desde la app Furtail." },
      { title: "Recaudar y realizar donaciones", description: "Recauda o contribuye fondos para tratamiento, alimento, refugio, vacunación, rescate y casos de bienestar de emergencia." },
      { title: "Rastrear cada resultado", description: "Muestra recibos, uso de fondos, actualizaciones de clínicas, progreso de recuperación e historias finales de impacto de forma transparente." }
    ],
    badges: ["Caso verificado", "Donación transparente", "Clínica asignada", "Recibo digital", "Actualización de recuperación"],
    stats: [
      { label: "Casos en vivo", value: "En tiempo real" },
      { label: "Donaciones rastreadas", value: "Verificadas" },
      { label: "Clínicas asociadas", value: "Lideradas por socios" },
      { label: "Actualizaciones de recuperación", value: "Transparentes" }
    ],
    ctas: {
      primary: "Reportar un caso",
      secondary: "Iniciar una donación",
      tertiary: "Explorar la app Furtail"
    }
  },
  globalCollaboration: {
    eyebrow: "Colaboración global",
    title: "Una plataforma, todos los actores del bienestar animal",
    subtitle: "WPA se construye sobre la colaboración — uniendo gobiernos, clínicas, ONG, refugios, voluntarios y donantes en una plataforma coordinada.",
    items: [
      { title: "Gobierno", description: "Alineación de políticas, coordinación de salud pública y asociación regulatoria para programas de bienestar animal.", icon: "🏛️" },
      { title: "Clínicas veterinarias", description: "Clínicas verificadas brindan vacunación, tratamiento y atención médica de emergencia.", icon: "🏥" },
      { title: "ONG", description: "Organizaciones alineadas con la misión extienden el alcance de WPA a regiones y comunidades.", icon: "🕊️" },
      { title: "Refugios", description: "Alojamiento seguro y rehabilitación para animales rescatados en espera de adopción.", icon: "🏠" },
      { title: "Voluntarios", description: "El respaldo humano del rescate, transporte y alcance comunitario.", icon: "🙌" },
      { title: "Donantes", description: "Individuos e instituciones que financian un impacto transparente y verificado en todo el mundo.", icon: "💛" },
    ],
    ctaLabel: "Asóciate con WPA",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "Transparencia y confianza",
    title: "Construida sobre un impacto verificado y responsable",
    subtitle: "WPA opera como un fideicomiso público — cada fondo, socio y resultado se registra y está disponible para su revisión.",
    items: [
      { title: "Informes de uso de fondos", description: "Desgloses detallados de cómo se asigna cada donación entre programas y regiones.", icon: "📊", href: "/reports" },
      { title: "Informes anuales públicos", description: "Informes anuales revisados de forma independiente y publicados para una plena rendición de cuentas pública.", icon: "📄", href: "/reports" },
      { title: "Red de socios verificados", description: "Cada clínica, ONG y refugio es evaluado antes de unirse a la red de WPA.", icon: "✅", href: "/partners" },
      { title: "Verificación de certificados y registros", description: "Certificados digitales y registros basados en códigos QR verifican adopciones, vacunaciones y donaciones.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "Ver informes públicos",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "Actúa",
    title: "Únete al movimiento global por comunidades animales más seguras, saludables y compasivas",
    subtitle: "Ya sea que dones tu tiempo, tu apoyo o tus recursos — cada acción nos acerca a un mundo donde cada animal está protegido.",
    joinWpa: "Hazte miembro",
    partnerWithUs: "Asóciate con WPA",
    donateNow: "Donar ahora",
    reportRescue: "Reportar un rescate",
  },
};

// ─── RU (Russian) ─────────────────────────────────────────────────────────────

const ru: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "Глобальная сеть защиты животных",
        badgeText: "World Pet Association",
        headline: "Защищаем животных. Расширяем возможности сообществ. По всему миру.",
        body: "WPA объединяет ветеринарные клиники, НКО, местные отделения, волонтёров и жертвователей на единой прозрачной глобальной платформе защиты животных — от спасения и усыновления до вакцинации и просвещения.",
        ctaLabel: "Присоединиться к движению",
        ctaHref: "/join",
        secondaryCtaLabel: "Изучить программы",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "Животным помогли" },
          { value: "500+", label: "Спасательных команд" },
          { value: "120+", label: "Национальных отделений" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "Надёжность и прозрачность",
        badgeText: "Подтверждённый результат",
        headline: "Каждое пожертвование отслеживается. Каждое спасение проверяется.",
        body: "От кампаний вакцинации до экстренного спасения — WPA работает через сеть проверенных партнёров и публикует отчёты об использовании средств, чтобы каждый вклад оставался подотчётным.",
        ctaLabel: "Присоединиться к движению",
        ctaHref: "/join",
        secondaryCtaLabel: "Изучить программы",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "Партнёрских организаций" },
          { value: "95%", label: "Средств напрямую на программы" },
          { value: "24/7", label: "Сеть экстренного реагирования" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "Усыновление", href: "/adoption" },
      { icon: "🚑", label: "Спасение", href: "/rescue" },
      { icon: "❤️", label: "Пожертвование", href: "/donation" },
      { icon: "📢", label: "Просвещение", href: "/awareness" },
      { icon: "🌍", label: "Глобальные отделения", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "Наш результат",
    title: "Глобальная сеть, созданная для измеримого результата",
    subtitle: "Каждая цифра отражает согласованные действия нашей сети спасения, усыновления и партнёров — проверенные и прозрачно отражённые в отчётах.",
    items: [
      { value: "100,000+", label: "Животным помогли", note: "Благодаря программам спасения, усыновления, вакцинации и ухода по всему миру." },
      { value: "500+", label: "Команд сети спасения", note: "Команды реагирования под руководством волонтёров, действующие в партнёрских регионах." },
      { value: "300+", label: "Партнёрских организаций", note: "Ветеринарные клиники, НКО и приюты в нашей проверенной сети." },
      { value: "120+", label: "Национальных и городских отделений", note: "Местные отделения координируют работу по защите животных на местах." },
      { value: "95%", label: "Прозрачность пожертвований", note: "Доля средств, направленная на программы, отслеживается и публично отражается в отчётах." },
    ],
  },
  corePrograms: {
    eyebrow: "Основные программы",
    title: "Шесть программ. Одна глобальная миссия.",
    subtitle: "Основные инициативы WPA охватывают весь цикл защиты животных — от профилактики и ухода до работы с сообществом и правозащиты.",
    explore: "Подробнее",
    items: [
      { title: "Усыновление", description: "Ответственный подбор спасённых животных для проверенных, любящих семей по всему миру.", href: "/adoption", icon: "🐾" },
      { title: "Спасение", description: "Координация быстрого реагирования для раненых, брошенных или животных в опасности.", href: "/rescue", icon: "🚑" },
      { title: "Пожертвования и сбор средств", description: "Прозрачное и отслеживаемое финансирование лечения, транспортировки и экстренной помощи.", href: "/donation", icon: "❤️" },
      { title: "Просвещение и образование", description: "Общественные кампании, продвигающие ответственное и заботливое содержание питомцев.", href: "/awareness", icon: "📢" },
      { title: "Вакцинация и оздоровительные кампании", description: "Масштабные кампании вакцинации и профилактического здоровья в партнёрских регионах.", href: "/awareness", icon: "💉" },
      { title: "Членство и сообщество", description: "Глобальная сеть членов, волонтёров и защитников, работающих сообща.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "СИСТЕМА ЗАЩИТЫ НА БАЗЕ FURTAIL",
    title: "Как работает WPA через Furtail",
    subtitle: "От публичного сообщения до проверенного ухода, прозрачных пожертвований и обновлений о выздоровлении — WPA объединяет людей, клиники, НКО, волонтёров и жертвователей в единой скоординированной цифровой системе.",
    steps: [
      { number: 1, title: "Люди публикуют или сообщают", description: "Граждане, владельцы животных, спасатели и волонтёры создают сообщения или сообщают о случаях с животными через приложение Furtail." },
      { number: 2, title: "WPA проверяет и подтверждает", description: "Местные отделения проверяют местоположение, срочность, материалы, потребности партнёров и право на пожертвования." },
      { number: 3, title: "Партнёры координируют уход", description: "Клиники, НКО, приюты, спасатели и волонтёры назначаются на лечение, спасение, приют или поддержку усыновления." },
      { number: 4, title: "Пожертвования питают миссию", description: "Подтверждённые случаи и кампании могут собирать пожертвования через Furtail, при этом каждый вклад фиксируется." },
      { number: 5, title: "Обновления укрепляют доверие", description: "Жертвователи и общественность могут следить за сообщениями о ходе дела, квитанциями, обновлениями лечения и итоговыми историями выздоровления." },
    ],
    features: [
      { title: "Создавайте сообщения о защите животных", description: "Делитесь потребностями в спасении, объявлениями об усыновлении, пропавшими питомцами и новостями кампаний прямо из приложения Furtail." },
      { title: "Собирайте и делайте пожертвования", description: "Собирайте средства или жертвуйте на лечение, питание, приют, вакцинацию, спасение и экстренные случаи." },
      { title: "Отслеживайте каждый результат", description: "Прозрачно показывайте квитанции, использование средств, обновления клиник, ход выздоровления и итоговые истории результата." }
    ],
    badges: ["Подтверждённый случай", "Прозрачное пожертвование", "Клиника назначена", "Электронная квитанция", "Обновление о выздоровлении"],
    stats: [
      { label: "Активные случаи", value: "В реальном времени" },
      { label: "Отслеженные пожертвования", value: "Подтверждены" },
      { label: "Партнёрские клиники", value: "Под руководством партнёров" },
      { label: "Обновления о выздоровлении", value: "Прозрачно" }
    ],
    ctas: {
      primary: "Сообщить о случае",
      secondary: "Начать пожертвование",
      tertiary: "Изучить приложение Furtail"
    }
  },
  globalCollaboration: {
    eyebrow: "Глобальное сотрудничество",
    title: "Единая платформа для всех участников защиты животных",
    subtitle: "WPA построена на сотрудничестве — объединяя правительства, клиники, НКО, приюты, волонтёров и жертвователей на единой скоординированной платформе.",
    items: [
      { title: "Правительство", description: "Согласование политики, координация общественного здравоохранения и регуляторное партнёрство для программ защиты животных.", icon: "🏛️" },
      { title: "Ветеринарные клиники", description: "Проверенные клиники предоставляют вакцинацию, лечение и экстренную медицинскую помощь.", icon: "🏥" },
      { title: "НКО", description: "Организации, разделяющие миссию, расширяют охват WPA по регионам и сообществам.", icon: "🕊️" },
      { title: "Приюты", description: "Безопасное жильё и реабилитация для спасённых животных, ожидающих усыновления.", icon: "🏠" },
      { title: "Волонтёры", description: "Человеческая основа спасения, транспортировки и работы с сообществом.", icon: "🙌" },
      { title: "Жертвователи", description: "Частные лица и организации, финансирующие прозрачный и подтверждённый результат по всему миру.", icon: "💛" },
    ],
    ctaLabel: "Стать партнёром WPA",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "Прозрачность и доверие",
    title: "Построено на подтверждённом, подотчётном результате",
    subtitle: "WPA действует как общественный траст — каждое финансирование, партнёр и результат фиксируются и доступны для проверки.",
    items: [
      { title: "Отчёты об использовании средств", description: "Подробная разбивка распределения каждого пожертвования по программам и регионам.", icon: "📊", href: "/reports" },
      { title: "Публичные годовые отчёты", description: "Независимо проверенные годовые отчёты, публикуемые для полной публичной подотчётности.", icon: "📄", href: "/reports" },
      { title: "Проверенная сеть партнёров", description: "Каждая клиника, НКО и приют проходят проверку перед присоединением к сети WPA.", icon: "✅", href: "/partners" },
      { title: "Проверка сертификатов и записей", description: "Цифровые сертификаты и записи с QR-кодом подтверждают усыновления, вакцинации и пожертвования.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "Просмотреть публичные отчёты",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "Действуйте",
    title: "Присоединяйтесь к глобальному движению за более безопасные, здоровые и заботливые сообщества животных",
    subtitle: "Дарите ли вы своё время, поддержку или ресурсы — каждое действие приближает нас к миру, где защищено каждое животное.",
    joinWpa: "Стать участником",
    partnerWithUs: "Стать партнёром WPA",
    donateNow: "Пожертвовать сейчас",
    reportRescue: "Сообщить о спасении",
  },
};

// ─── DE (German) ──────────────────────────────────────────────────────────────

const de: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "Globales Tierschutznetzwerk",
        badgeText: "World Pet Association",
        headline: "Tiere schützen. Gemeinschaften stärken. Weltweit.",
        body: "WPA vereint Tierarztpraxen, NGOs, lokale Ortsverbände, Freiwillige und Spender auf einer transparenten, globalen Plattform für Tierschutz — von Rettung und Vermittlung bis hin zu Impfungen und Aufklärung.",
        ctaLabel: "Der Bewegung beitreten",
        ctaHref: "/join",
        secondaryCtaLabel: "Programme entdecken",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "Unterstützte Tiere" },
          { value: "500+", label: "Rettungsteams" },
          { value: "120+", label: "Länder-Ortsverbände" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "Vertrauenswürdig und transparent",
        badgeText: "Verifizierte Wirkung",
        headline: "Jede Spende nachverfolgt. Jede Rettung verifiziert.",
        body: "Von Impfkampagnen bis zu Notfallrettungen arbeitet WPA über ein verifiziertes Partnernetzwerk und veröffentlicht Berichte zur Mittelverwendung, damit jeder Beitrag rechenschaftspflichtig bleibt.",
        ctaLabel: "Der Bewegung beitreten",
        ctaHref: "/join",
        secondaryCtaLabel: "Programme entdecken",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "Partnerorganisationen" },
          { value: "95%", label: "Mittel direkt für Programme" },
          { value: "24/7", label: "Rettungs-Reaktionsnetzwerk" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "Vermittlung", href: "/adoption" },
      { icon: "🚑", label: "Rettung", href: "/rescue" },
      { icon: "❤️", label: "Spende", href: "/donation" },
      { icon: "📢", label: "Aufklärung", href: "/awareness" },
      { icon: "🌍", label: "Globale Ortsverbände", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "Unsere Wirkung",
    title: "Ein globales Netzwerk für messbare Wirkung",
    subtitle: "Jede Zahl spiegelt koordiniertes Handeln in unserem Rettungs-, Vermittlungs- und Partnernetzwerk wider — verifiziert und transparent berichtet.",
    items: [
      { value: "100,000+", label: "Unterstützte Tiere", note: "Durch Rettungs-, Vermittlungs-, Impf- und Pflegeprogramme weltweit." },
      { value: "500+", label: "Teams des Rettungsnetzwerks", note: "Von Freiwilligen geleitete Einsatzteams, aktiv in Partnerregionen." },
      { value: "300+", label: "Partnerorganisationen", note: "Tierarztpraxen, NGOs und Tierheime in unserem verifizierten Netzwerk." },
      { value: "120+", label: "Länder- und Städte-Ortsverbände", note: "Lokale Ortsverbände koordinieren Tierschutzarbeit vor Ort." },
      { value: "95%", label: "Spendentransparenz", note: "Anteil der Mittel, der direkt in Programme fließt, nachverfolgt und öffentlich berichtet." },
    ],
  },
  corePrograms: {
    eyebrow: "Kernprogramme",
    title: "Sechs Programme. Eine globale Mission.",
    subtitle: "Die Kerninitiativen von WPA decken den gesamten Tierschutz-Lebenszyklus ab — von Prävention und Pflege bis hin zu Gemeinschaft und Interessenvertretung.",
    explore: "Entdecken",
    items: [
      { title: "Vermittlung", description: "Verantwortungsvolle Zusammenführung geretteter Tiere mit verifizierten, liebevollen Zuhause weltweit.", href: "/adoption", icon: "🐾" },
      { title: "Rettung", description: "Schnelle Einsatzkoordination für verletzte, ausgesetzte oder gefährdete Tiere.", href: "/rescue", icon: "🚑" },
      { title: "Spenden & Fundraising", description: "Transparente, nachvollziehbare Finanzierung für Behandlung, Transport und Notfallversorgung.", href: "/donation", icon: "❤️" },
      { title: "Aufklärung & Bildung", description: "Gemeinschaftskampagnen für verantwortungsvolle, einfühlsame Tierhaltung.", href: "/awareness", icon: "📢" },
      { title: "Impf- & Gesundheitskampagnen", description: "Groß angelegte Impf- und Präventivgesundheitskampagnen in Partnerregionen.", href: "/awareness", icon: "💉" },
      { title: "Mitgliedschaft & Gemeinschaft", description: "Ein globales Netzwerk von Mitgliedern, Freiwilligen und Fürsprechern, die zusammenarbeiten.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "VON FURTAIL ANGETRIEBENES TIERSCHUTZSYSTEM",
    title: "Wie WPA über Furtail funktioniert",
    subtitle: "Von einem öffentlichen Beitrag bis zu verifizierter Versorgung, transparenten Spenden und Genesungsupdates — WPA verbindet Menschen, Kliniken, NGOs, Freiwillige und Spender über ein koordiniertes digitales System.",
    steps: [
      { number: 1, title: "Menschen posten oder melden", description: "Bürger, Tierhalter, Retter und Freiwillige erstellen Tierschutzbeiträge oder melden Tierfälle über die Furtail-App." },
      { number: 2, title: "WPA prüft und verifiziert", description: "Lokale Ortsverbände verifizieren Standort, Dringlichkeit, Medien, Partnerbedarf und Spendenberechtigung." },
      { number: 3, title: "Partner koordinieren die Versorgung", description: "Kliniken, NGOs, Tierheime, Retter und Freiwillige werden für Behandlung, Rettung, Unterbringung oder Vermittlungsunterstützung eingesetzt." },
      { number: 4, title: "Spenden treiben die Mission an", description: "Verifizierte Fälle und Kampagnen können über Furtail Spenden sammeln, wobei jeder Beitrag erfasst wird." },
      { number: 5, title: "Updates schaffen Vertrauen", description: "Spender und die Öffentlichkeit können Fortschrittsbeiträgen, Belegen, Behandlungsupdates und abschließenden Genesungsgeschichten folgen." },
    ],
    features: [
      { title: "Tierschutzbeiträge erstellen", description: "Teilen Sie Rettungsbedarf, Vermittlungsbeiträge, vermisste Tiere und Kampagnenupdates direkt aus der Furtail-App." },
      { title: "Spenden sammeln & geben", description: "Sammeln oder spenden Sie Mittel für Behandlung, Futter, Unterbringung, Impfung, Rettung und Notfälle." },
      { title: "Jedes Ergebnis nachverfolgen", description: "Zeigen Sie Belege, Mittelverwendung, Klinikupdates, Genesungsfortschritt und abschließende Wirkungsgeschichten transparent an." }
    ],
    badges: ["Verifizierter Fall", "Transparente Spende", "Klinik zugewiesen", "Digitaler Beleg", "Genesungsupdate"],
    stats: [
      { label: "Live-Fälle", value: "Echtzeit" },
      { label: "Nachverfolgte Spenden", value: "Verifiziert" },
      { label: "Partnerkliniken", value: "Partnergeführt" },
      { label: "Genesungsupdates", value: "Transparent" }
    ],
    ctas: {
      primary: "Einen Fall melden",
      secondary: "Eine Spende starten",
      tertiary: "Furtail-App entdecken"
    }
  },
  globalCollaboration: {
    eyebrow: "Globale Zusammenarbeit",
    title: "Eine Plattform, alle Beteiligten im Tierschutz",
    subtitle: "WPA basiert auf Zusammenarbeit — sie bringt Regierungen, Kliniken, NGOs, Tierheime, Freiwillige und Spender auf einer koordinierten Plattform zusammen.",
    items: [
      { title: "Regierung", description: "Politische Abstimmung, Koordination im Bereich öffentliche Gesundheit und regulatorische Partnerschaft für Tierschutzprogramme.", icon: "🏛️" },
      { title: "Tierarztpraxen", description: "Verifizierte Kliniken bieten Impfung, Behandlung und medizinische Notfallversorgung.", icon: "🏥" },
      { title: "NGOs", description: "Organisationen mit gemeinsamer Mission erweitern die Reichweite von WPA über Regionen und Gemeinschaften hinweg.", icon: "🕊️" },
      { title: "Tierheime", description: "Sichere Unterbringung und Rehabilitation für gerettete Tiere, die auf Vermittlung warten.", icon: "🏠" },
      { title: "Freiwillige", description: "Das menschliche Rückgrat von Rettung, Transport und Gemeinschaftsarbeit.", icon: "🙌" },
      { title: "Spender", description: "Einzelpersonen und Institutionen, die transparente, verifizierte Wirkung weltweit finanzieren.", icon: "💛" },
    ],
    ctaLabel: "Partner von WPA werden",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "Transparenz & Vertrauen",
    title: "Aufgebaut auf verifizierter, rechenschaftspflichtiger Wirkung",
    subtitle: "WPA agiert als öffentlicher Treuhänder — jeder Mittelfluss, Partner und jedes Ergebnis wird erfasst und ist zur Überprüfung verfügbar.",
    items: [
      { title: "Berichte zur Mittelverwendung", description: "Detaillierte Aufschlüsselung, wie jede Spende auf Programme und Regionen verteilt wird.", icon: "📊", href: "/reports" },
      { title: "Öffentliche Jahresberichte", description: "Unabhängig geprüfte Jahresberichte, veröffentlicht für vollständige öffentliche Rechenschaftspflicht.", icon: "📄", href: "/reports" },
      { title: "Verifiziertes Partnernetzwerk", description: "Jede Klinik, NGO und jedes Tierheim wird geprüft, bevor sie dem WPA-Netzwerk beitreten.", icon: "✅", href: "/partners" },
      { title: "Zertifikats- & Registerprüfung", description: "Digitale Zertifikate und QR-basierte Register verifizieren Vermittlungen, Impfungen und Spenden.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "Öffentliche Berichte ansehen",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "Handeln Sie",
    title: "Schließen Sie sich der globalen Bewegung für sicherere, gesündere und mitfühlendere Tiergemeinschaften an",
    subtitle: "Ob Sie Ihre Zeit, Ihre Unterstützung oder Ihre Ressourcen geben — jede Handlung bringt uns einer Welt näher, in der jedes Tier geschützt ist.",
    joinWpa: "Mitglied werden",
    partnerWithUs: "Partner von WPA werden",
    donateNow: "Jetzt spenden",
    reportRescue: "Eine Rettung melden",
  },
};

// ─── ZH (Simplified Chinese) ────────────────────────────────────────────────

const zh: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "全球动物福利网络",
        badgeText: "World Pet Association",
        headline: "保护动物，赋能社区，遍布全球",
        body: "WPA将兽医诊所、非政府组织、地方分会、志愿者和捐赠者联合在一个透明的全球动物福利平台下——从救援和领养到疫苗接种和教育。",
        ctaLabel: "加入行动",
        ctaHref: "/join",
        secondaryCtaLabel: "了解项目",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "受助动物" },
          { value: "500+", label: "救援团队" },
          { value: "120+", label: "国家分会" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "值得信赖，公开透明",
        badgeText: "经核实的成果",
        headline: "每笔捐赠可追踪，每次救援可核实",
        body: "从疫苗接种到紧急救援，WPA通过经核实的合作伙伴网络运作，并发布资金使用报告，确保每份贡献都可问责。",
        ctaLabel: "加入行动",
        ctaHref: "/join",
        secondaryCtaLabel: "了解项目",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "合作伙伴机构" },
          { value: "95%", label: "资金直达项目" },
          { value: "24/7", label: "救援响应网络" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "领养", href: "/adoption" },
      { icon: "🚑", label: "救援", href: "/rescue" },
      { icon: "❤️", label: "捐赠", href: "/donation" },
      { icon: "📢", label: "宣传", href: "/awareness" },
      { icon: "🌍", label: "全球分会", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "我们的成果",
    title: "为可衡量的影响而建的全球网络",
    subtitle: "每个数字都反映了我们在救援、领养和合作伙伴网络中的协调行动——经核实并透明报告。",
    items: [
      { value: "100,000+", label: "受助动物", note: "通过全球救援、领养、疫苗接种和护理项目。" },
      { value: "500+", label: "救援网络团队", note: "活跃在合作地区的志愿者响应团队。" },
      { value: "300+", label: "合作伙伴机构", note: "我们核实网络中的兽医诊所、NGO和收容所。" },
      { value: "120+", label: "国家和城市分会", note: "协调当地动物福利行动的分会。" },
      { value: "95%", label: "捐赠透明度", note: "资金直接用于项目，可追踪并公开报告。" },
    ],
  },
  corePrograms: {
    eyebrow: "核心项目",
    title: "六大项目，一个全球使命",
    subtitle: "WPA的核心项目涵盖动物福利的全生命周期——从预防、护理到社区和倡导。",
    explore: "了解",
    items: [
      { title: "领养", description: "将获救动物与经过审核的爱心家庭进行负责任的匹配。", href: "/adoption", icon: "🐾" },
      { title: "救援", description: "针对受伤、被遗弃或处于危险中的动物的快速响应协调。", href: "/rescue", icon: "🚑" },
      { title: "捐赠与筹款", description: "用于治疗、运输和紧急护理的透明可追踪资金。", href: "/donation", icon: "❤️" },
      { title: "宣传与教育", description: "倡导负责任和富有同情心的宠物饲养的社区活动。", href: "/awareness", icon: "📢" },
      { title: "疫苗接种与健康活动", description: "在合作地区开展的大规模疫苗接种和预防性健康活动。", href: "/awareness", icon: "💉" },
      { title: "会员与社区", description: "全球会员、志愿者和倡导者携手合作的网络。", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "FURTAIL 驱动的福利系统",
    title: "WPA 如何通过 Furtail 运作",
    subtitle: "从公开帖子到经核实的护理、透明的捐赠和康复更新——WPA通过一个协调的数字系统连接民众、诊所、NGO、志愿者和捐赠者。",
    steps: [
      { number: 1, title: "民众发布或报告", description: "市民、宠物主人、救援人员和志愿者通过Furtail应用发布福利帖子或报告动物案例。" },
      { number: 2, title: "WPA审核与核实", description: "地方分会核实地点、紧急程度、媒体资料、合作伙伴需求和捐赠资格。" },
      { number: 3, title: "合作伙伴协调护理", description: "诊所、NGO、收容所、救援人员和志愿者被分配到治疗、救援、收容或领养支持。" },
      { number: 4, title: "捐赠推动使命", description: "经核实的案例和活动可通过Furtail募集捐款，每笔贡献均被记录。" },
      { number: 5, title: "更新建立信任", description: "捐赠者和公众可以跟踪进展帖子、收据、治疗更新和最终康复故事。" },
    ],
    features: [
      { title: "发布福利帖子", description: "直接从Furtail应用分享救援需求、领养帖子、寻宠信息和活动内容。" },
      { title: "募集与捐赠", description: "为治疗、食物、收容、疫苗接种、救援和紧急福利案例筹集或捐助资金。" },
      { title: "追踪每项成果", description: "透明展示收据、资金使用情况、诊所更新、康复进展和最终影响故事。" }
    ],
    badges: ["已核实案例", "透明捐赠", "已分配诊所", "电子收据", "康复更新"],
    stats: [
      { label: "实时案例", value: "实时" },
      { label: "捐赠追踪", value: "已核实" },
      { label: "合作诊所", value: "合作运营" },
      { label: "康复更新", value: "透明" }
    ],
    ctas: {
      primary: "报告案例",
      secondary: "发起捐赠",
      tertiary: "了解Furtail应用"
    }
  },
  globalCollaboration: {
    eyebrow: "全球协作",
    title: "一个平台，覆盖动物福利的所有参与者",
    subtitle: "WPA建立在协作基础上——将政府、诊所、NGO、收容所、志愿者和捐赠者汇聚到一个协调的平台上。",
    items: [
      { title: "政府", description: "政策协调、公共卫生协调和动物福利项目的监管合作。", icon: "🏛️" },
      { title: "兽医诊所", description: "经核实的诊所提供疫苗接种、治疗和紧急医疗服务。", icon: "🏥" },
      { title: "非政府组织", description: "使命一致的组织将WPA的影响力扩展到各个地区。", icon: "🕊️" },
      { title: "收容所", description: "为等待领养的获救动物提供安全住所和康复。", icon: "🏠" },
      { title: "志愿者", description: "救援、运输和社区宣传的人力骨干。", icon: "🙌" },
      { title: "捐赠者", description: "为透明、经核实的影响提供资金的个人和机构。", icon: "💛" },
    ],
    ctaLabel: "与WPA合作",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "透明与信任",
    title: "建立在经核实、可问责的成果之上",
    subtitle: "WPA作为公共信托运作——每笔资金、每个合作伙伴和每项成果都被记录并可查阅。",
    items: [
      { title: "资金使用报告", description: "详细说明每笔捐赠在各项目和地区的分配方式。", icon: "📊", href: "/reports" },
      { title: "年度公开报告", description: "经独立审核的年度报告，全面公开问责。", icon: "📄", href: "/reports" },
      { title: "经核实的合作伙伴网络", description: "每个诊所、NGO和收容所在加入WPA网络前都经过严格审核。", icon: "✅", href: "/partners" },
      { title: "证书与记录核实", description: "数字证书和基于QR码的记录可核实领养、疫苗接种和捐赠。", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "查看公开报告",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "采取行动",
    title: "加入全球运动，共建更安全、更健康、更有爱心的动物社区",
    subtitle: "无论您付出时间、支持还是资源——每项行动都让我们更接近一个每只动物都受到保护的世界。",
    joinWpa: "成为会员",
    partnerWithUs: "与WPA合作",
    donateNow: "立即捐赠",
    reportRescue: "报告救援",
  },
};

// ─── JA (Japanese) ──────────────────────────────────────────────────────────

const ja: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "グローバル動物福祉ネットワーク",
        badgeText: "World Pet Association",
        headline: "動物を守り、地域を力づける。世界中で。",
        body: "WPAは獣医クリニック、NGO、地域支部、ボランティア、寄付者を1つの透明なグローバルプラットフォームに結びつけます——救助、里親、予防接種、教育まで。",
        ctaLabel: "参加する",
        ctaHref: "/join",
        secondaryCtaLabel: "プログラムを見る",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "支援された動物" },
          { value: "500+", label: "救助チーム" },
          { value: "120+", label: "各国支部" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "信頼と透明性",
        badgeText: "検証済みの成果",
        headline: "すべての寄付を追跡。すべての救助を検証。",
        body: "予防接種から緊急救助まで、WPAは検証済みパートナーネットワークを通じて活動し、資金使用報告書を公開することで、すべての貢献に責任を持ちます。",
        ctaLabel: "参加する",
        ctaHref: "/join",
        secondaryCtaLabel: "プログラムを見る",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "パートナー団体" },
          { value: "95%", label: "直接プログラムへの資金" },
          { value: "24/7", label: "救助対応ネットワーク" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "里親募集", href: "/adoption" },
      { icon: "🚑", label: "救助", href: "/rescue" },
      { icon: "❤️", label: "寄付", href: "/donation" },
      { icon: "📢", label: "啓発", href: "/awareness" },
      { icon: "🌍", label: "グローバル支部", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "私たちの成果",
    title: "測定可能な成果のために構築されたグローバルネットワーク",
    subtitle: "すべての数字は、救助、里親、パートナーネットワーク全体での連携活動を反映しています——検証され、透明性をもって報告されます。",
    items: [
      { value: "100,000+", label: "支援された動物", note: "世界中の救助、里親、予防接種、ケアプログラムを通じて。" },
      { value: "500+", label: "救助ネットワークチーム", note: "パートナー地域で活動するボランティア主導の対応チーム。" },
      { value: "300+", label: "パートナー団体", note: "検証済みネットワーク内の獣医クリニック、NGO、保護施設。" },
      { value: "120+", label: "国・都市支部", note: "地域での動物福祉活動を調整する支部。" },
      { value: "95%", label: "寄付の透明性", note: "プログラムに直接使われた資金。追跡・公開報告済み。" },
    ],
  },
  corePrograms: {
    eyebrow: "コアプログラム",
    title: "6つのプログラム、1つのグローバルミッション",
    subtitle: "WPAのコアイニシアチブは、予防とケアからコミュニティと提言まで、動物福祉の全ライフサイクルに対応しています。",
    explore: "詳細を見る",
    items: [
      { title: "里親募集", description: "救助された動物を検証済みの愛情ある家庭に責任をもってマッチング。", href: "/adoption", icon: "🐾" },
      { title: "救助", description: "負傷・遺棄・危険な状態の動物への緊急対応コーディネート。", href: "/rescue", icon: "🚑" },
      { title: "寄付・資金調達", description: "治療、輸送、緊急ケアのための透明で追跡可能な資金。", href: "/donation", icon: "❤️" },
      { title: "啓発・教育", description: "責任あるペット飼育を促進するコミュニティキャンペーン。", href: "/awareness", icon: "📢" },
      { title: "予防接種・健康キャンペーン", description: "パートナー地域での大規模予防接種と予防的健康プログラム。", href: "/awareness", icon: "💉" },
      { title: "会員・コミュニティ", description: "世界中の会員、ボランティア、支援者が協力するネットワーク。", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "FURTAIL駆動の福祉システム",
    title: "WPAはFurtailを通じてどのように機能するか",
    subtitle: "公開投稿から検証済みのケア、透明な寄付、回復の更新まで——WPAは1つのデジタルシステムで人々、クリニック、NGO、ボランティア、寄付者をつなぎます。",
    steps: [
      { number: 1, title: "投稿・報告", description: "市民、ペットオーナー、救助者、ボランティアがFurtailアプリで福祉投稿や動物のケースを報告します。" },
      { number: 2, title: "WPAの審査・検証", description: "地域支部が場所、緊急性、メディア、パートナーの必要性、寄付の適格性を検証します。" },
      { number: 3, title: "パートナーによるケアの調整", description: "クリニック、NGO、保護施設、救助者、ボランティアが治療、救助、保護、里親サポートに割り当てられます。" },
      { number: 4, title: "寄付がミッションを支える", description: "検証済みのケースやキャンペーンはFurtailを通じて寄付を募集でき、すべての貢献が記録されます。" },
      { number: 5, title: "更新が信頼を築く", description: "寄付者や一般の人々は進捗投稿、領収書、治療の更新、回復のストーリーを追跡できます。" },
    ],
    features: [
      { title: "福祉投稿の作成", description: "Furtailアプリから救助の必要性、里親募集、迷子ペット、キャンペーン更新を直接共有。" },
      { title: "寄付の募集・寄付", description: "治療、食事、保護、予防接種、救助、緊急福祉ケースの資金を調達または寄付。" },
      { title: "すべての成果を追跡", description: "領収書、資金使用、クリニックの更新、回復の進捗、最終的なインパクトストーリーを透明に公開。" }
    ],
    badges: ["検証済みケース", "透明な寄付", "クリニック割り当て済み", "電子領収書", "回復の更新"],
    stats: [
      { label: "ライブケース", value: "リアルタイム" },
      { label: "追跡された寄付", value: "検証済み" },
      { label: "パートナークリニック", value: "パートナー運営" },
      { label: "回復の更新", value: "透明" }
    ],
    ctas: {
      primary: "ケースを報告",
      secondary: "寄付を開始",
      tertiary: "Furtailアプリを見る"
    }
  },
  globalCollaboration: {
    eyebrow: "グローバル連携",
    title: "1つのプラットフォームで、動物福祉のすべての関係者を",
    subtitle: "WPAは連携に基づいて構築されています——政府、クリニック、NGO、保護施設、ボランティア、寄付者を1つのプラットフォームに。",
    items: [
      { title: "政府", description: "動物福祉プログラムの政策調整、公衆衛生の連携、規制パートナーシップ。", icon: "🏛️" },
      { title: "獣医クリニック", description: "検証済みクリニックが予防接種、治療、緊急医療を提供。", icon: "🏥" },
      { title: "NGO", description: "ミッションに合致する団体がWPAの影響力を各地域に拡大。", icon: "🕊️" },
      { title: "保護施設", description: "里親を待つ救助動物の安全な住居とリハビリテーション。", icon: "🏠" },
      { title: "ボランティア", description: "救助、輸送、コミュニティ活動の人的な支え。", icon: "🙌" },
      { title: "寄付者", description: "透明で検証済みの成果に資金を提供する個人と団体。", icon: "💛" },
    ],
    ctaLabel: "WPAとパートナーシップを組む",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "透明性と信頼",
    title: "検証済みで責任ある成果の上に構築",
    subtitle: "WPAは公共の信頼として運営されています——すべての資金、パートナー、成果が記録され、確認可能です。",
    items: [
      { title: "資金使用報告書", description: "各寄付がプログラムや地域にどのように配分されたかの詳細な内訳。", icon: "📊", href: "/reports" },
      { title: "年次公開報告書", description: "完全に公開された説明責任のために、独立してレビューされた年次報告書。", icon: "📄", href: "/reports" },
      { title: "検証済みパートナーネットワーク", description: "すべてのクリニック、NGO、保護施設はWPAネットワーク参加前に審査を受けます。", icon: "✅", href: "/partners" },
      { title: "証明書・記録の検証", description: "デジタル証明書とQRコードベースの記録で、里親、予防接種、寄付を検証。", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "公開報告書を見る",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "行動を起こす",
    title: "より安全で健康で思いやりのある動物コミュニティのためのグローバルムーブメントに参加",
    subtitle: "時間、支援、リソースのいずれを提供しても——すべての行動がすべての動物が守られる世界に近づけます。",
    joinWpa: "会員になる",
    partnerWithUs: "WPAとパートナーシップを組む",
    donateNow: "今すぐ寄付",
    reportRescue: "救助を報告",
  },
};

// ─── KO (Korean) ────────────────────────────────────────────────────────────

const ko: HomeContent = {
  hero: {
    slides: [
      {
        id: "wpa-mission",
        eyebrow: "글로벌 동물 복지 네트워크",
        badgeText: "World Pet Association",
        headline: "동물을 보호하고, 지역사회에 힘을 실어줍니다. 전 세계적으로.",
        body: "WPA는 수의사 클리닉, NGO, 지역 지부, 자원봉사자, 기부자를 하나의 투명하고 글로벌한 플랫폼으로 연결합니다 — 구조와 입양부터 예방접종과 교육까지.",
        ctaLabel: "참여하기",
        ctaHref: "/join",
        secondaryCtaLabel: "프로그램 알아보기",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "100,000+", label: "지원받은 동물" },
          { value: "500+", label: "구조팀" },
          { value: "120+", label: "국가 지부" },
        ],
      },
      {
        id: "wpa-transparency",
        eyebrow: "신뢰와 투명성",
        badgeText: "검증된 성과",
        headline: "모든 기부는 추적되고, 모든 구조는 검증됩니다",
        body: "예방접종부터 긴급 구조까지, WPA는 검증된 파트너 네트워크를 통해 활동하고 자금 사용 보고서를 공개하여 모든 기여에 책임을 집니다.",
        ctaLabel: "참여하기",
        ctaHref: "/join",
        secondaryCtaLabel: "프로그램 알아보기",
        secondaryCtaHref: "/what-we-do",
        stats: [
          { value: "300+", label: "파트너 기관" },
          { value: "95%", label: "직접 프로그램 지원금" },
          { value: "24/7", label: "구조 대응 네트워크" },
        ],
      },
    ],
    trustBadges: [
      { icon: "🐾", label: "입양", href: "/adoption" },
      { icon: "🚑", label: "구조", href: "/rescue" },
      { icon: "❤️", label: "기부", href: "/donation" },
      { icon: "📢", label: "인식개선", href: "/awareness" },
      { icon: "🌍", label: "글로벌 지부", href: "/chapters" },
    ],
  },
  impactStats: {
    eyebrow: "우리의 성과",
    title: "측정 가능한 성과를 위해 구축된 글로벌 네트워크",
    subtitle: "모든 숫자는 구조, 입양, 파트너 네트워크 전반의 조정된 활동을 반영합니다 — 검증되고 투명하게 보고됩니다.",
    items: [
      { value: "100,000+", label: "지원받은 동물", note: "전 세계 구조, 입양, 예방접종, 돌봄 프로그램을 통해." },
      { value: "500+", label: "구조 네트워크 팀", note: "파트너 지역에서 활동 중인 자원봉사자 주도 대응팀." },
      { value: "300+", label: "파트너 기관", note: "검증된 네트워크 내 수의사 클리닉, NGO, 보호소." },
      { value: "120+", label: "국가 및 도시 지부", note: "지역 동물 복지 활동을 조율하는 지부." },
      { value: "95%", label: "기부 투명성", note: "프로그램에 직접 지원되고 추적·공개 보고된 자금." },
    ],
  },
  corePrograms: {
    eyebrow: "핵심 프로그램",
    title: "6개의 프로그램, 하나의 글로벌 미션",
    subtitle: "WPA의 핵심 이니셔티브는 예방과 돌봄부터 지역사회와 옹호까지, 동물 복지의 전 라이프사이클을 다룹니다.",
    explore: "자세히 보기",
    items: [
      { title: "입양", description: "구조된 동물을 검증된 가정과 책임감 있게 매칭합니다.", href: "/adoption", icon: "🐾" },
      { title: "구조", description: "부상, 유기, 위험에 처한 동물에 대한 신속한 대응 조율.", href: "/rescue", icon: "🚑" },
      { title: "기부 및 모금", description: "치료, 이송, 긴급 돌봄을 위한 투명하고 추적 가능한 자금.", href: "/donation", icon: "❤️" },
      { title: "인식개선 및 교육", description: "책임감 있고 반려동물을 존중하는 문화를 확산하는 지역사회 캠페인.", href: "/awareness", icon: "📢" },
      { title: "예방접종 및 건강 캠페인", description: "파트너 지역에서 대규모 예방접종과 예방 건강 프로그램.", href: "/awareness", icon: "💉" },
      { title: "회원 및 커뮤니티", description: "전 세계 회원, 자원봉사자, 지지자들이 함께 하는 네트워크.", href: "/join", icon: "🤝" },
    ],
  },
  howItWorks: {
    eyebrow: "FURTAIL 기반 복지 시스템",
    title: "WPA는 Furtail을 통해 어떻게 작동하나요",
    subtitle: "공개 신고부터 검증된 돌봄, 투명한 기부, 회복 업데이트까지 — WPA는 하나의 디지털 시스템으로 사람, 클리닉, NGO, 자원봉사자, 기부자를 연결합니다.",
    steps: [
      { number: 1, title: "신고 및 게시", description: "시민, 반려동물 소유자, 구조자, 자원봉사자가 Furtail 앱을 통해 복지 게시글이나 동물 사례를 신고합니다." },
      { number: 2, title: "WPA 검토 및 검증", description: "지역 지부가 위치, 긴급성, 미디어 자료, 파트너 필요성, 기부 자격을 검증합니다." },
      { number: 3, title: "파트너 돌봄 조율", description: "클리닉, NGO, 보호소, 구조자, 자원봉사자가 치료, 구조, 보호, 입양 지원에 배정됩니다." },
      { number: 4, title: "기부가 미션을 이끕니다", description: "검증된 사례와 캠페인은 Furtail을 통해 기부를 모을 수 있으며, 모든 기여가 기록됩니다." },
      { number: 5, title: "업데이트가 신뢰를 만듭니다", description: "기부자와 일반인은 진행 상황, 영수증, 치료 업데이트, 최종 회복 스토리를 추적할 수 있습니다." },
    ],
    features: [
      { title: "복지 게시글 작성", description: "Furtail 앱에서 직접 구조 요청, 입양 게시글, 실종 반려동물, 캠페인 업데이트를 공유하세요." },
      { title: "기부 모금 및 기부", description: "치료, 사료, 보호, 예방접종, 구조, 긴급 복지 사례를 위한 기금을 모으거나 기여하세요." },
      { title: "모든 성과 추적", description: "영수증, 자금 사용, 클리닉 업데이트, 회복 진행 상황, 최종 성과 스토리를 투명하게 보여줍니다." }
    ],
    badges: ["검증된 사례", "투명한 기부", "클리닉 배정 완료", "전자 영수증", "회복 업데이트"],
    stats: [
      { label: "실시간 사례", value: "실시간" },
      { label: "추적된 기부", value: "검증됨" },
      { label: "파트너 클리닉", value: "파트너 운영" },
      { label: "회복 업데이트", value: "투명" }
    ],
    ctas: {
      primary: "사례 신고하기",
      secondary: "기부 시작하기",
      tertiary: "Furtail 앱 알아보기"
    }
  },
  globalCollaboration: {
    eyebrow: "글로벌 협력",
    title: "하나의 플랫폼, 동물 복지의 모든 이해관계자",
    subtitle: "WPA는 협력을 바탕으로 구축되었습니다 — 정부, 클리닉, NGO, 보호소, 자원봉사자, 기부자를 하나의 플랫폼으로.",
    items: [
      { title: "정부", description: "동물 복지 프로그램의 정책 연계, 공중보건 조율, 규제 파트너십.", icon: "🏛️" },
      { title: "수의사 클리닉", description: "검증된 클리닉이 예방접종, 치료, 긴급 의료를 제공합니다.", icon: "🏥" },
      { title: "NGO", description: "미션을 함께하는 단체가 WPA의 영향력을 지역 전반으로 확대합니다.", icon: "🕊️" },
      { title: "보호소", description: "입양을 기다리는 구조 동물에게 안전한 숙소와 재활을 제공합니다.", icon: "🏠" },
      { title: "자원봉사자", description: "구조, 이송, 지역사회 활동의 사람 중심의 핵심입니다.", icon: "🙌" },
      { title: "기부자", description: "투명하고 검증된 성과에 자금을 지원하는 개인과 기관.", icon: "💛" },
    ],
    ctaLabel: "WPA와 파트너십 맺기",
    ctaHref: "/partners",
  },
  transparency: {
    eyebrow: "투명성과 신뢰",
    title: "검증되고 책임 있는 성과 위에 구축",
    subtitle: "WPA는 공공의 신뢰로 운영됩니다 — 모든 자금, 파트너, 성과가 기록되고 확인 가능합니다.",
    items: [
      { title: "자금 사용 보고서", description: "각 기부가 프로그램과 지역에 어떻게 배분되었는지에 대한 상세 내역.", icon: "📊", href: "/reports" },
      { title: "연간 공개 보고서", description: "독립적으로 검토된 연간 보고서, 완전한 공개 책임을 위해 발행.", icon: "📄", href: "/reports" },
      { title: "검증된 파트너 네트워크", description: "모든 클리닉, NGO, 보호소는 WPA 네트워크 가입 전 심사를 거칩니다.", icon: "✅", href: "/partners" },
      { title: "인증서 및 기록 검증", description: "디지털 인증서와 QR 코드 기반 기록으로 입양, 예방접종, 기부를 검증합니다.", icon: "🔒", href: "/reports" },
    ],
    reportsLabel: "공개 보고서 보기",
    reportsHref: "/reports",
  },
  finalCta: {
    eyebrow: "행동하기",
    title: "더 안전하고 건강하며 따뜻한 동물 커뮤니티를 위한 글로벌 운동에 참여하세요",
    subtitle: "시간, 지원, 자원을 주시든 — 모든 행동이 모든 동물이 보호되는 세상으로 우리를 가까이 데려갑니다.",
    joinWpa: "회원 가입",
    partnerWithUs: "WPA와 파트너십 맺기",
    donateNow: "지금 기부",
    reportRescue: "구조 신고",
  },
};

const dictionaries: Partial<Record<Locale, HomeContent>> = { en, bn, ar, fr, es, zh, ru, de, ja, ko };

export function getHomeContent(locale: string): HomeContent {
  return dictionaries[locale as Locale] ?? dictionaries.en!;
}

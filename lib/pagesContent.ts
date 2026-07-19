import type { Locale } from "./i18n";

// ─── Shared shapes ───────────────────────────────────────────────────────────

export interface HeroCopy {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface IconCard {
  title: string;
  description: string;
  icon: string;
  href?: string;
}

export interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

export interface StatCard {
  value: string;
  label: string;
}

// ─── About WPA ────────────────────────────────────────────────────────────────

export interface AboutContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  values: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  trust: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  stakeholders: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}

// ─── Mission & Vision ──────────────────────────────────────────────────────────

export interface MissionVisionContent {
  hero: HeroCopy;
  mission: { eyebrow: string; title: string; text: string };
  vision: { eyebrow: string; title: string; text: string };
  values: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  principles: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}

// ─── Governance ────────────────────────────────────────────────────────────────

export interface GovernanceContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  structure: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  accountability: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  flow: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}

// ─── Global Chapters ────────────────────────────────────────────────────────────

export interface ChaptersContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  stats: { eyebrow: string; title: string; subtitle: string; items: StatCard[] };
  howChaptersWork: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  responsibilities: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}

export interface PagesContent {
  about: AboutContent;
  missionVision: MissionVisionContent;
  governance: GovernanceContent;
  chapters: ChaptersContent;
}

// ─── EN ────────────────────────────────────────────────────────────────────────

const en: PagesContent = {
  about: {
    hero: {
      eyebrow: "About World Pet Association",
      title: "A Global Platform for Animal Welfare, Built on Trust",
      subtitle: "WPA connects pet owners, veterinarians, clinics, NGOs, shelters, volunteers, and donors into one coordinated, transparent network for animal welfare worldwide.",
      primaryLabel: "Our Mission & Vision",
      primaryHref: "/mission-vision",
      secondaryLabel: "Governance",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "Who we are",
      title: "An International Organization for Coordinated Animal Welfare",
      paragraphs: [
        "The World Pet Association (WPA) is a global, non-profit-aligned network established to bring structure, transparency, and accountability to animal welfare work across countries and communities.",
        "Rather than operating as a single, centralized charity, WPA functions as a coordination platform — connecting verified veterinary clinics, NGOs, shelters, volunteers, local chapters, and donors so that rescue, adoption, vaccination, and education efforts are consistent, trackable, and effective at scale.",
        "Every program WPA supports — from emergency rescue response to community vaccination campaigns — is designed to be transparent by default, with fund usage, partner verification, and outcomes available for public review.",
      ],
    },
    values: {
      eyebrow: "Our values",
      title: "Principles That Guide Every Program",
      subtitle: "These values are not aspirational statements — they are the operating standard for every chapter, partner, and program under WPA.",
      items: [
        { title: "Compassion", description: "Every animal is treated with dignity, regardless of species, location, or circumstance.", icon: "❤️" },
        { title: "Integrity", description: "We do what we say — publicly, consistently, and without exception.", icon: "🛡️" },
        { title: "Transparency", description: "Fund usage, partner status, and outcomes are open to public scrutiny.", icon: "🔍" },
        { title: "Collaboration", description: "No single organization can solve animal welfare alone — we work through partnership.", icon: "🤝" },
        { title: "Accountability", description: "Every chapter and partner is measured against clear, published standards.", icon: "✅" },
        { title: "Sustainability", description: "Programs are designed to be locally owned and long-term, not one-off interventions.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "Why WPA can be trusted",
      title: "Trust Is Built Into How We Operate",
      subtitle: "Trust isn't a promise — it's a structural feature of how WPA is governed and run.",
      items: [
        { title: "Transparent Operations", description: "Program activity, chapter performance, and partner status are documented and available for review.", icon: "📊" },
        { title: "Responsible Fund Management", description: "Donations are tracked from contribution to program spend, with public reporting on fund allocation.", icon: "💰" },
        { title: "Animal Welfare Ethics", description: "All rescue, treatment, and adoption practices follow documented animal welfare standards.", icon: "🐾" },
        { title: "Partner Verification", description: "Clinics, NGOs, and shelters are vetted before joining the network and reviewed on an ongoing basis.", icon: "🔒" },
        { title: "Local Chapter Coordination", description: "Country and city chapters operate under shared standards while staying accountable to WPA governance.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "Who we work with",
      title: "A Network Built for Every Stakeholder in Animal Welfare",
      subtitle: "WPA is designed so that every participant — individual or institutional — has a clear, meaningful role.",
      items: [
        { title: "Pet Owners", description: "Access adoption, vaccination, and responsible ownership resources through a trusted network.", icon: "🏠" },
        { title: "Veterinarians", description: "Join a verified professional network for referrals, campaigns, and collaborative care.", icon: "👩‍⚕️" },
        { title: "Clinics", description: "Participate in vaccination drives and treatment programs with transparent reporting.", icon: "🏥" },
        { title: "NGOs", description: "Extend your mission's reach through shared infrastructure and coordinated campaigns.", icon: "🕊️" },
        { title: "Shelters", description: "Coordinate intake, care, and adoption placement through the WPA chapter network.", icon: "🐕" },
        { title: "Volunteers", description: "Contribute time to rescue, transport, and community outreach efforts.", icon: "🙌" },
        { title: "Donors", description: "Fund verified, tracked programs with full visibility into impact and fund usage.", icon: "💛" },
        { title: "Government & Private Organizations", description: "Partner on policy, public health, and large-scale welfare initiatives.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Join a Global Network Built on Transparency and Trust",
      subtitle: "Whatever your role — pet owner, professional, organization, or supporter — there is a clear way to get involved.",
      primaryLabel: "Become a Member",
      primaryHref: "/join",
      secondaryLabel: "Partner With WPA",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "Mission & Vision",
      title: "Why WPA Exists, and the World We're Working Toward",
      subtitle: "Our mission defines what we do today. Our vision defines the world we're building toward, one coordinated program at a time.",
      primaryLabel: "About WPA",
      primaryHref: "/about",
      secondaryLabel: "Explore Programs",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "Our mission",
      title: "To Build a Transparent, Coordinated Global Network for Animal Welfare",
      text: "WPA exists to connect pet owners, veterinary professionals, NGOs, shelters, volunteers, and donors into one accountable system — so that rescue, adoption, vaccination, and education programs reach more animals, more reliably, with verifiable outcomes and responsible use of every donation.",
    },
    vision: {
      eyebrow: "Our vision",
      title: "A World Where Every Animal Is Protected, Everywhere",
      text: "We envision a future where responsible pet ownership is the norm, where no animal in distress goes unreported, where veterinary care and vaccination are accessible in every community, and where the systems supporting animal welfare are as transparent and trusted as any public institution.",
    },
    values: {
      eyebrow: "Values in action",
      title: "The Standards Behind Every Program",
      subtitle: "These are the same values that guide WPA's operations, translated into what they mean in day-to-day practice.",
      items: [
        { title: "Compassion First", description: "Every decision starts with what is best for the animal, not what is convenient.", icon: "❤️" },
        { title: "Evidence-Based Care", description: "Rescue, treatment, and adoption practices follow established veterinary and welfare standards.", icon: "🩺" },
        { title: "Open Reporting", description: "Outcomes, not just intentions, are published and available for review.", icon: "📄" },
        { title: "Shared Ownership", description: "Local chapters and partners are empowered, not just directed from the top.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "Operating principles",
      title: "How the Mission Becomes Action",
      subtitle: "A consistent operating model that turns mission and vision into measurable, repeatable impact.",
      steps: [
        { number: 1, title: "Set Verifiable Standards", description: "Every program area — rescue, adoption, vaccination — operates against a published standard." },
        { number: 2, title: "Verify Every Partner", description: "Clinics, NGOs, and shelters are vetted before joining, and reviewed on an ongoing basis." },
        { number: 3, title: "Coordinate Through Chapters", description: "Local chapters apply global standards while adapting to regional needs and regulations." },
        { number: 4, title: "Track Every Contribution", description: "Donations and resources are recorded from intake to program spend." },
        { number: 5, title: "Report Publicly", description: "Outcomes and fund usage are published for donors, partners, and the public." },
      ],
    },
    cta: {
      title: "Support a Mission Built on Measurable, Transparent Impact",
      subtitle: "Every contribution — time, funding, or partnership — moves WPA's mission and vision forward.",
      primaryLabel: "Donate Now",
      primaryHref: "/donation",
      secondaryLabel: "Become a Member",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "Governance & Leadership",
      title: "A Structure Designed for Accountability",
      subtitle: "WPA's governance model separates oversight, execution, and regional coordination — so no single body operates without review.",
      primaryLabel: "Public Reports",
      primaryHref: "/reports",
      secondaryLabel: "Partner Verification",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "How WPA is governed",
      title: "Layered Governance, Not a Single Point of Control",
      paragraphs: [
        "WPA operates through a layered governance structure designed to separate policy-setting, day-to-day execution, and regional coordination — so that no single group has unchecked authority over funds, partnerships, or program decisions.",
        "This structure exists to protect the integrity of the network: donors, partners, and the animals we serve all depend on decisions being made through defined processes, not individual discretion.",
        "Governance documentation, fund-usage reports, and partner-verification records are made available publicly, consistent with WPA's transparency commitments.",
      ],
    },
    structure: {
      eyebrow: "Organizational structure",
      title: "The Bodies That Govern WPA",
      subtitle: "Each governing body has a distinct mandate, with defined reporting lines to keep authority checked and accountable.",
      items: [
        { title: "Board of Trustees", description: "Sets long-term policy, approves major partnerships, and holds ultimate fiduciary responsibility for the organization.", icon: "🏛️" },
        { title: "Executive Leadership", description: "Manages day-to-day operations, program delivery, and cross-chapter coordination.", icon: "📋" },
        { title: "Regional Chapter Councils", description: "Country and city chapters elect or appoint local councils to adapt global standards to regional needs.", icon: "🌍" },
        { title: "Ethics & Animal Welfare Committee", description: "Reviews rescue, treatment, and adoption practices against documented welfare standards.", icon: "🐾" },
        { title: "Audit & Transparency Committee", description: "Independently reviews fund usage and publishes findings in public reports.", icon: "📊" },
        { title: "Partner Advisory Panel", description: "Veterinary, NGO, and shelter representatives advise on program design and partner standards.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "Accountability measures",
      title: "How Governance Stays Accountable in Practice",
      subtitle: "Structure alone isn't enough — these are the concrete mechanisms that keep every governing body in check.",
      items: [
        { title: "Independent Annual Audits", description: "Financial statements are reviewed by an independent party and published for public access.", icon: "📄" },
        { title: "Conflict-of-Interest Policy", description: "Trustees and executives must disclose conflicts before any partnership or funding decision.", icon: "⚖️" },
        { title: "Term Limits", description: "Board and committee terms are limited and staggered to prevent concentration of authority.", icon: "⏳" },
        { title: "Public Disclosure", description: "Governance policies, structure, and key decisions are published for anyone to review.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "Decision flow",
      title: "How a Decision Moves Through WPA",
      subtitle: "From policy to on-the-ground action, every decision follows a defined, reviewable path.",
      steps: [
        { number: 1, title: "Policy Set", description: "The Board of Trustees approves organization-wide standards and priorities." },
        { number: 2, title: "Executed by Leadership", description: "Executive leadership translates policy into operational programs." },
        { number: 3, title: "Adapted by Chapters", description: "Regional chapter councils apply standards to local context and regulation." },
        { number: 4, title: "Reviewed for Ethics", description: "The Ethics & Animal Welfare Committee reviews program practices." },
        { number: 5, title: "Audited & Published", description: "The Audit & Transparency Committee reviews outcomes and fund usage publicly." },
      ],
    },
    cta: {
      title: "Review Our Governance Documentation and Reports",
      subtitle: "Transparency isn't a claim — explore the reports and verification standards behind it.",
      primaryLabel: "View Public Reports",
      primaryHref: "/reports",
      secondaryLabel: "Contact WPA",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "Global Chapters",
      title: "Local Action, Coordinated Globally",
      subtitle: "WPA's country and city chapters bring global standards to local communities — coordinating rescue, adoption, and awareness where it matters most.",
      primaryLabel: "Start a Chapter",
      primaryHref: "/join",
      secondaryLabel: "Partner With Us",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "How chapters fit in",
      title: "The Local Layer of a Global Network",
      paragraphs: [
        "WPA chapters are locally coordinated groups — operating in specific countries or cities — that apply WPA's global standards for rescue, adoption, vaccination, and awareness to the realities of their region.",
        "Each chapter works with verified local clinics, NGOs, shelters, and volunteers, while reporting activity and fund usage back through WPA's governance structure for transparency and consistency.",
        "This model allows WPA to scale animal welfare impact without sacrificing local knowledge, regulatory compliance, or community trust.",
      ],
    },
    stats: {
      eyebrow: "Chapter network",
      title: "A Growing, Coordinated Global Presence",
      subtitle: "Figures reflect the coordinated chapter network WPA is building toward as verified partners and regions join.",
      items: [
        { value: "120+", label: "Country & City Chapters" },
        { value: "300+", label: "Verified Local Partners" },
        { value: "500+", label: "Chapter-Coordinated Rescue Teams" },
        { value: "24/7", label: "Local Response Coverage (Goal)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "How it works",
      title: "From Global Standard to Local Impact",
      subtitle: "Every chapter follows the same coordination model, adapted to local context.",
      steps: [
        { number: 1, title: "Chapter Formed", description: "A regional council is established, following WPA's chapter formation standards." },
        { number: 2, title: "Partners Verified", description: "Local clinics, NGOs, and shelters are vetted and onboarded to the network." },
        { number: 3, title: "Volunteers Mobilized", description: "The chapter recruits and coordinates local volunteers for rescue and outreach." },
        { number: 4, title: "Programs Delivered", description: "Vaccination drives, adoption events, and rescue response run under shared standards." },
        { number: 5, title: "Activity Reported", description: "Chapter outcomes and fund usage are reported back to WPA governance for transparency." },
      ],
    },
    responsibilities: {
      eyebrow: "Chapter responsibilities",
      title: "What Every Chapter Commits To",
      subtitle: "Local autonomy comes with shared, non-negotiable responsibilities.",
      items: [
        { title: "Partner Verification", description: "Only vetted clinics, NGOs, and shelters operate under the chapter's name.", icon: "🔒" },
        { title: "Transparent Reporting", description: "Activity and fund usage are reported on a regular, defined schedule.", icon: "📊" },
        { title: "Ethical Standards", description: "All rescue and care practices follow WPA's documented welfare standards.", icon: "🐾" },
        { title: "Community Coordination", description: "Chapters maintain open channels with local government and community groups.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Bring WPA's Network to Your City or Country",
      subtitle: "Whether you want to start a chapter, join an existing one, or partner locally — there's a defined path to get involved.",
      primaryLabel: "Become a Member",
      primaryHref: "/join",
      secondaryLabel: "Contact WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── BN ────────────────────────────────────────────────────────────────────────

const bn: PagesContent = {
  about: {
    hero: {
      eyebrow: "ওয়ার্ল্ড পেট অ্যাসোসিয়েশন সম্পর্কে",
      title: "বিশ্বাসের ভিত্তিতে গড়া প্রাণী কল্যাণের একটি বৈশ্বিক প্ল্যাটফর্ম",
      subtitle: "WPA পোষা প্রাণীর মালিক, পশুচিকিৎসক, ক্লিনিক, এনজিও, আশ্রয়কেন্দ্র, স্বেচ্ছাসেবক এবং দাতাদের বিশ্বজুড়ে একটি সমন্বিত, স্বচ্ছ নেটওয়ার্কে সংযুক্ত করে।",
      primaryLabel: "আমাদের লক্ষ্য ও দৃষ্টিভঙ্গি",
      primaryHref: "/mission-vision",
      secondaryLabel: "পরিচালনা কাঠামো",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "আমরা কারা",
      title: "সমন্বিত প্রাণী কল্যাণের জন্য একটি আন্তর্জাতিক প্রতিষ্ঠান",
      paragraphs: [
        "ওয়ার্ল্ড পেট অ্যাসোসিয়েশন (WPA) একটি বৈশ্বিক, অলাভজনক-সংযুক্ত নেটওয়ার্ক যা দেশ ও কমিউনিটিজুড়ে প্রাণী কল্যাণ কাজে কাঠামো, স্বচ্ছতা এবং জবাবদিহিতা আনার জন্য প্রতিষ্ঠিত।",
        "একক, কেন্দ্রীভূত দাতব্য সংস্থা হিসেবে কাজ না করে, WPA একটি সমন্বয় প্ল্যাটফর্ম হিসেবে কাজ করে — যাচাইকৃত পশুচিকিৎসা ক্লিনিক, এনজিও, আশ্রয়কেন্দ্র, স্বেচ্ছাসেবক, স্থানীয় চ্যাপ্টার এবং দাতাদের সংযুক্ত করে যাতে উদ্ধার, দত্তক, টিকাদান ও শিক্ষা কার্যক্রম সামঞ্জস্যপূর্ণ, ট্র্যাকযোগ্য এবং বৃহৎ পরিসরে কার্যকর হয়।",
        "WPA যে প্রতিটি কর্মসূচি সমর্থন করে — জরুরি উদ্ধার প্রতিক্রিয়া থেকে কমিউনিটি টিকাদান প্রচারাভিযান পর্যন্ত — তা ডিফল্টভাবে স্বচ্ছ হওয়ার জন্য ডিজাইন করা, যেখানে তহবিল ব্যবহার, অংশীদার যাচাইকরণ এবং ফলাফল জনসাধারণের পর্যালোচনার জন্য উপলব্ধ।",
      ],
    },
    values: {
      eyebrow: "আমাদের মূল্যবোধ",
      title: "প্রতিটি কর্মসূচিকে পরিচালনাকারী নীতিমালা",
      subtitle: "এই মূল্যবোধগুলো আকাঙ্ক্ষামূলক বিবৃতি নয় — এগুলো WPA-এর অধীন প্রতিটি চ্যাপ্টার, অংশীদার ও কর্মসূচির কার্যকরী মান।",
      items: [
        { title: "সহানুভূতি", description: "প্রজাতি, অবস্থান বা পরিস্থিতি নির্বিশেষে প্রতিটি প্রাণীকে মর্যাদার সাথে আচরণ করা হয়।", icon: "❤️" },
        { title: "সততা", description: "আমরা যা বলি তা করি — প্রকাশ্যে, সামঞ্জস্যপূর্ণভাবে, ব্যতিক্রম ছাড়াই।", icon: "🛡️" },
        { title: "স্বচ্ছতা", description: "তহবিল ব্যবহার, অংশীদারের অবস্থা এবং ফলাফল জনসাধারণের যাচাইয়ের জন্য উন্মুক্ত।", icon: "🔍" },
        { title: "সহযোগিতা", description: "কোনো একক প্রতিষ্ঠান একা প্রাণী কল্যাণ সমাধান করতে পারে না — আমরা অংশীদারিত্বের মাধ্যমে কাজ করি।", icon: "🤝" },
        { title: "জবাবদিহিতা", description: "প্রতিটি চ্যাপ্টার ও অংশীদার স্পষ্ট, প্রকাশিত মানদণ্ডের বিপরীতে মূল্যায়িত হয়।", icon: "✅" },
        { title: "স্থায়িত্ব", description: "কর্মসূচিগুলো স্থানীয়ভাবে মালিকানাধীন ও দীর্ঘমেয়াদী হওয়ার জন্য ডিজাইন করা, একবারের হস্তক্ষেপ নয়।", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "কেন WPA-কে বিশ্বাস করা যায়",
      title: "আমাদের কার্যপ্রণালীতেই বিশ্বাস অন্তর্ভুক্ত",
      subtitle: "বিশ্বাস কোনো প্রতিশ্রুতি নয় — এটি WPA কীভাবে পরিচালিত ও শাসিত হয় তার একটি কাঠামোগত বৈশিষ্ট্য।",
      items: [
        { title: "স্বচ্ছ কার্যক্রম", description: "কর্মসূচি কার্যক্রম, চ্যাপ্টার পারফরম্যান্স এবং অংশীদারের অবস্থা নথিভুক্ত ও পর্যালোচনার জন্য উপলব্ধ।", icon: "📊" },
        { title: "দায়িত্বশীল তহবিল ব্যবস্থাপনা", description: "অবদান থেকে কর্মসূচির ব্যয় পর্যন্ত দান ট্র্যাক করা হয়, তহবিল বরাদ্দের উপর জনসাধারণের প্রতিবেদনসহ।", icon: "💰" },
        { title: "প্রাণী কল্যাণ নীতিশাস্ত্র", description: "সকল উদ্ধার, চিকিৎসা ও দত্তক অনুশীলন নথিভুক্ত প্রাণী কল্যাণ মান অনুসরণ করে।", icon: "🐾" },
        { title: "অংশীদার যাচাইকরণ", description: "নেটওয়ার্কে যোগদানের আগে ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র যাচাই করা হয় এবং চলমানভাবে পর্যালোচিত হয়।", icon: "🔒" },
        { title: "স্থানীয় চ্যাপ্টার সমন্বয়", description: "দেশ ও শহর চ্যাপ্টার ভাগাভাগি মানদণ্ডের অধীনে কাজ করে, WPA পরিচালনার কাছে জবাবদিহি থেকে।", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "আমরা কাদের সাথে কাজ করি",
      title: "প্রাণী কল্যাণের প্রতিটি অংশীজনের জন্য গড়া নেটওয়ার্ক",
      subtitle: "WPA এমনভাবে ডিজাইন করা যে প্রতিটি অংশগ্রহণকারী — ব্যক্তি বা প্রাতিষ্ঠানিক — একটি স্পষ্ট, অর্থবহ ভূমিকা পায়।",
      items: [
        { title: "পোষা প্রাণীর মালিক", description: "একটি বিশ্বস্ত নেটওয়ার্কের মাধ্যমে দত্তক, টিকাদান ও দায়িত্বশীল মালিকানার সম্পদ অ্যাক্সেস করুন।", icon: "🏠" },
        { title: "পশুচিকিৎসক", description: "রেফারেল, প্রচারাভিযান ও সহযোগিতামূলক পরিচর্যার জন্য একটি যাচাইকৃত পেশাদার নেটওয়ার্কে যোগ দিন।", icon: "👩‍⚕️" },
        { title: "ক্লিনিক", description: "স্বচ্ছ প্রতিবেদনসহ টিকাদান কর্মসূচি ও চিকিৎসা কর্মসূচিতে অংশগ্রহণ করুন।", icon: "🏥" },
        { title: "এনজিও", description: "ভাগাভাগি অবকাঠামো ও সমন্বিত প্রচারাভিযানের মাধ্যমে আপনার লক্ষ্যের পরিধি বাড়ান।", icon: "🕊️" },
        { title: "আশ্রয়কেন্দ্র", description: "WPA চ্যাপ্টার নেটওয়ার্কের মাধ্যমে গ্রহণ, পরিচর্যা ও দত্তক স্থাপন সমন্বয় করুন।", icon: "🐕" },
        { title: "স্বেচ্ছাসেবক", description: "উদ্ধার, পরিবহন ও কমিউনিটি প্রচার কাজে সময় দিন।", icon: "🙌" },
        { title: "দাতা", description: "প্রভাব ও তহবিল ব্যবহারে সম্পূর্ণ দৃশ্যমানতাসহ যাচাইকৃত, ট্র্যাককৃত কর্মসূচিতে অর্থায়ন করুন।", icon: "💛" },
        { title: "সরকার ও বেসরকারি প্রতিষ্ঠান", description: "নীতি, জনস্বাস্থ্য ও বৃহৎ পরিসরের কল্যাণ উদ্যোগে অংশীদার হোন।", icon: "🏛️" },
      ],
    },
    cta: {
      title: "স্বচ্ছতা ও বিশ্বাসের উপর গড়া একটি বৈশ্বিক নেটওয়ার্কে যোগ দিন",
      subtitle: "আপনার ভূমিকা যাই হোক না কেন — পোষা প্রাণীর মালিক, পেশাদার, প্রতিষ্ঠান বা সমর্থক — যুক্ত হওয়ার একটি স্পষ্ট উপায় আছে।",
      primaryLabel: "সদস্য হোন",
      primaryHref: "/join",
      secondaryLabel: "WPA-এর সঙ্গী হোন",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "লক্ষ্য ও দৃষ্টিভঙ্গি",
      title: "কেন WPA বিদ্যমান, এবং আমরা যে বিশ্বের জন্য কাজ করছি",
      subtitle: "আমাদের লক্ষ্য আজ আমরা কী করি তা নির্ধারণ করে। আমাদের দৃষ্টিভঙ্গি সেই বিশ্বকে নির্ধারণ করে যা আমরা একটি একটি সমন্বিত কর্মসূচির মাধ্যমে গড়ে তুলছি।",
      primaryLabel: "WPA সম্পর্কে",
      primaryHref: "/about",
      secondaryLabel: "কর্মসূচি দেখুন",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "আমাদের লক্ষ্য",
      title: "প্রাণী কল্যাণের জন্য একটি স্বচ্ছ, সমন্বিত বৈশ্বিক নেটওয়ার্ক গড়া",
      text: "WPA পোষা প্রাণীর মালিক, পশুচিকিৎসা পেশাদার, এনজিও, আশ্রয়কেন্দ্র, স্বেচ্ছাসেবক ও দাতাদের একটি জবাবদিহিমূলক ব্যবস্থায় সংযুক্ত করার জন্য বিদ্যমান — যাতে উদ্ধার, দত্তক, টিকাদান ও শিক্ষা কর্মসূচি আরও বেশি প্রাণীর কাছে, আরও নির্ভরযোগ্যভাবে, যাচাইযোগ্য ফলাফল ও প্রতিটি দানের দায়িত্বশীল ব্যবহারসহ পৌঁছায়।",
    },
    vision: {
      eyebrow: "আমাদের দৃষ্টিভঙ্গি",
      title: "একটি বিশ্ব যেখানে প্রতিটি প্রাণী সর্বত্র সুরক্ষিত",
      text: "আমরা এমন একটি ভবিষ্যতের কল্পনা করি যেখানে দায়িত্বশীল পোষা প্রাণী পালন স্বাভাবিক নিয়ম, যেখানে বিপদগ্রস্ত কোনো প্রাণী রিপোর্টবিহীন থাকে না, যেখানে প্রতিটি কমিউনিটিতে পশুচিকিৎসা সেবা ও টিকাদান সহজলভ্য, এবং যেখানে প্রাণী কল্যাণ সমর্থনকারী ব্যবস্থা যেকোনো পাবলিক প্রতিষ্ঠানের মতোই স্বচ্ছ ও বিশ্বস্ত।",
    },
    values: {
      eyebrow: "কার্যক্ষেত্রে মূল্যবোধ",
      title: "প্রতিটি কর্মসূচির পেছনের মানদণ্ড",
      subtitle: "এগুলো একই মূল্যবোধ যা WPA-এর কার্যক্রম পরিচালনা করে, দৈনন্দিন অনুশীলনে অনূদিত।",
      items: [
        { title: "সহানুভূতি প্রথম", description: "প্রতিটি সিদ্ধান্ত শুরু হয় প্রাণীর জন্য যা সবচেয়ে ভালো তা দিয়ে, সুবিধাজনক যা তা দিয়ে নয়।", icon: "❤️" },
        { title: "প্রমাণ-ভিত্তিক পরিচর্যা", description: "উদ্ধার, চিকিৎসা ও দত্তক অনুশীলন প্রতিষ্ঠিত পশুচিকিৎসা ও কল্যাণ মান অনুসরণ করে।", icon: "🩺" },
        { title: "উন্মুক্ত প্রতিবেদন", description: "শুধু উদ্দেশ্য নয়, ফলাফল প্রকাশিত ও পর্যালোচনার জন্য উপলব্ধ।", icon: "📄" },
        { title: "ভাগাভাগি মালিকানা", description: "স্থানীয় চ্যাপ্টার ও অংশীদারদের ক্ষমতায়ন করা হয়, শুধু উপর থেকে নির্দেশিত নয়।", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "কার্যক্রম নীতিমালা",
      title: "লক্ষ্য কীভাবে কর্মে রূপান্তরিত হয়",
      subtitle: "একটি সামঞ্জস্যপূর্ণ কার্যক্রম মডেল যা লক্ষ্য ও দৃষ্টিভঙ্গিকে পরিমাপযোগ্য, পুনরাবৃত্তিযোগ্য প্রভাবে পরিণত করে।",
      steps: [
        { number: 1, title: "যাচাইযোগ্য মান নির্ধারণ", description: "প্রতিটি কর্মসূচি ক্ষেত্র — উদ্ধার, দত্তক, টিকাদান — একটি প্রকাশিত মানের বিপরীতে পরিচালিত হয়।" },
        { number: 2, title: "প্রতিটি অংশীদার যাচাই", description: "যোগদানের আগে ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র যাচাই করা হয় এবং চলমানভাবে পর্যালোচিত হয়।" },
        { number: 3, title: "চ্যাপ্টারের মাধ্যমে সমন্বয়", description: "স্থানীয় চ্যাপ্টার আঞ্চলিক চাহিদা ও নিয়মের সাথে খাপ খাইয়ে বৈশ্বিক মান প্রয়োগ করে।" },
        { number: 4, title: "প্রতিটি অবদান ট্র্যাক", description: "দান ও সম্পদ গ্রহণ থেকে কর্মসূচির ব্যয় পর্যন্ত নথিভুক্ত করা হয়।" },
        { number: 5, title: "প্রকাশ্যে প্রতিবেদন", description: "দাতা, অংশীদার ও জনসাধারণের জন্য ফলাফল ও তহবিল ব্যবহার প্রকাশিত হয়।" },
      ],
    },
    cta: {
      title: "পরিমাপযোগ্য, স্বচ্ছ প্রভাবের উপর গড়া একটি লক্ষ্যকে সমর্থন করুন",
      subtitle: "প্রতিটি অবদান — সময়, তহবিল বা অংশীদারিত্ব — WPA-এর লক্ষ্য ও দৃষ্টিভঙ্গিকে এগিয়ে নেয়।",
      primaryLabel: "এখনই দান করুন",
      primaryHref: "/donation",
      secondaryLabel: "সদস্য হোন",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "পরিচালনা ও নেতৃত্ব",
      title: "জবাবদিহিতার জন্য ডিজাইন করা একটি কাঠামো",
      subtitle: "WPA-এর পরিচালনা মডেল তদারকি, বাস্তবায়ন ও আঞ্চলিক সমন্বয়কে পৃথক করে — যাতে কোনো একক সংস্থা পর্যালোচনা ছাড়া কাজ না করে।",
      primaryLabel: "পাবলিক প্রতিবেদন",
      primaryHref: "/reports",
      secondaryLabel: "অংশীদার যাচাইকরণ",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "WPA কীভাবে পরিচালিত হয়",
      title: "স্তরযুক্ত পরিচালনা, একক নিয়ন্ত্রণ বিন্দু নয়",
      paragraphs: [
        "WPA একটি স্তরযুক্ত পরিচালনা কাঠামোর মাধ্যমে পরিচালিত হয় যা নীতি-নির্ধারণ, দৈনন্দিন বাস্তবায়ন এবং আঞ্চলিক সমন্বয়কে পৃথক করার জন্য ডিজাইন করা — যাতে তহবিল, অংশীদারিত্ব বা কর্মসূচি সিদ্ধান্তের উপর কোনো একক গোষ্ঠীর অনিয়ন্ত্রিত কর্তৃত্ব না থাকে।",
        "এই কাঠামো নেটওয়ার্কের অখণ্ডতা রক্ষার জন্য বিদ্যমান: দাতা, অংশীদার এবং আমরা যে প্রাণীদের সেবা করি তারা সবাই নির্ধারিত প্রক্রিয়ার মাধ্যমে সিদ্ধান্ত নেওয়ার উপর নির্ভর করে, ব্যক্তিগত বিবেচনার উপর নয়।",
        "পরিচালনা নথি, তহবিল ব্যবহারের প্রতিবেদন এবং অংশীদার-যাচাইকরণ রেকর্ড WPA-এর স্বচ্ছতা প্রতিশ্রুতির সাথে সামঞ্জস্যপূর্ণভাবে জনসাধারণের জন্য উপলব্ধ করা হয়।",
      ],
    },
    structure: {
      eyebrow: "সাংগঠনিক কাঠামো",
      title: "WPA পরিচালনাকারী সংস্থাসমূহ",
      subtitle: "প্রতিটি পরিচালনা সংস্থার একটি স্বতন্ত্র ম্যান্ডেট রয়েছে, কর্তৃত্বকে যাচাইকৃত ও জবাবদিহিমূলক রাখতে নির্ধারিত প্রতিবেদন লাইনসহ।",
      items: [
        { title: "বোর্ড অফ ট্রাস্টিজ", description: "দীর্ঘমেয়াদী নীতি নির্ধারণ করে, প্রধান অংশীদারিত্ব অনুমোদন করে এবং প্রতিষ্ঠানের চূড়ান্ত আর্থিক দায়িত্ব বহন করে।", icon: "🏛️" },
        { title: "নির্বাহী নেতৃত্ব", description: "দৈনন্দিন কার্যক্রম, কর্মসূচি প্রদান ও আন্তঃচ্যাপ্টার সমন্বয় পরিচালনা করে।", icon: "📋" },
        { title: "আঞ্চলিক চ্যাপ্টার কাউন্সিল", description: "দেশ ও শহর চ্যাপ্টার আঞ্চলিক প্রয়োজনের সাথে বৈশ্বিক মান খাপ খাওয়াতে স্থানীয় কাউন্সিল নির্বাচিত বা নিয়োগ করে।", icon: "🌍" },
        { title: "নীতিশাস্ত্র ও প্রাণী কল্যাণ কমিটি", description: "নথিভুক্ত কল্যাণ মানের বিপরীতে উদ্ধার, চিকিৎসা ও দত্তক অনুশীলন পর্যালোচনা করে।", icon: "🐾" },
        { title: "অডিট ও স্বচ্ছতা কমিটি", description: "তহবিল ব্যবহার স্বাধীনভাবে পর্যালোচনা করে এবং পাবলিক প্রতিবেদনে ফলাফল প্রকাশ করে।", icon: "📊" },
        { title: "অংশীদার উপদেষ্টা প্যানেল", description: "পশুচিকিৎসা, এনজিও ও আশ্রয়কেন্দ্র প্রতিনিধিরা কর্মসূচি ডিজাইন ও অংশীদার মান নিয়ে পরামর্শ দেন।", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "জবাবদিহিতার ব্যবস্থা",
      title: "বাস্তবে পরিচালনা কীভাবে জবাবদিহিমূলক থাকে",
      subtitle: "শুধু কাঠামো যথেষ্ট নয় — এগুলো হলো সুনির্দিষ্ট প্রক্রিয়া যা প্রতিটি পরিচালনা সংস্থাকে যাচাইকৃত রাখে।",
      items: [
        { title: "স্বাধীন বার্ষিক অডিট", description: "আর্থিক বিবৃতি একটি স্বাধীন পক্ষ দ্বারা পর্যালোচিত এবং জনসাধারণের জন্য প্রকাশিত হয়।", icon: "📄" },
        { title: "স্বার্থের দ্বন্দ্ব নীতি", description: "কোনো অংশীদারিত্ব বা তহবিল সিদ্ধান্তের আগে ট্রাস্টি ও নির্বাহীদের দ্বন্দ্ব প্রকাশ করতে হবে।", icon: "⚖️" },
        { title: "মেয়াদ সীমা", description: "কর্তৃত্বের কেন্দ্রীভবন রোধ করতে বোর্ড ও কমিটির মেয়াদ সীমিত ও পর্যায়ক্রমিক।", icon: "⏳" },
        { title: "জনসাধারণের প্রকাশ", description: "পরিচালনা নীতি, কাঠামো ও মূল সিদ্ধান্ত যে কারো পর্যালোচনার জন্য প্রকাশিত হয়।", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "সিদ্ধান্ত প্রবাহ",
      title: "WPA-এর মধ্য দিয়ে একটি সিদ্ধান্ত কীভাবে চলে",
      subtitle: "নীতি থেকে মাঠপর্যায়ের কর্ম পর্যন্ত, প্রতিটি সিদ্ধান্ত একটি নির্ধারিত, পর্যালোচনাযোগ্য পথ অনুসরণ করে।",
      steps: [
        { number: 1, title: "নীতি নির্ধারিত", description: "বোর্ড অফ ট্রাস্টিজ প্রতিষ্ঠান-ব্যাপী মান ও অগ্রাধিকার অনুমোদন করে।" },
        { number: 2, title: "নেতৃত্ব দ্বারা বাস্তবায়িত", description: "নির্বাহী নেতৃত্ব নীতিকে কার্যক্রম কর্মসূচিতে রূপান্তরিত করে।" },
        { number: 3, title: "চ্যাপ্টার দ্বারা খাপ খাওয়ানো", description: "আঞ্চলিক চ্যাপ্টার কাউন্সিল স্থানীয় প্রেক্ষাপট ও নিয়মে মান প্রয়োগ করে।" },
        { number: 4, title: "নীতিশাস্ত্রের জন্য পর্যালোচিত", description: "নীতিশাস্ত্র ও প্রাণী কল্যাণ কমিটি কর্মসূচি অনুশীলন পর্যালোচনা করে।" },
        { number: 5, title: "অডিট ও প্রকাশিত", description: "অডিট ও স্বচ্ছতা কমিটি ফলাফল ও তহবিল ব্যবহার প্রকাশ্যে পর্যালোচনা করে।" },
      ],
    },
    cta: {
      title: "আমাদের পরিচালনা নথি ও প্রতিবেদন পর্যালোচনা করুন",
      subtitle: "স্বচ্ছতা কোনো দাবি নয় — এর পেছনের প্রতিবেদন ও যাচাইকরণ মান দেখুন।",
      primaryLabel: "পাবলিক প্রতিবেদন দেখুন",
      primaryHref: "/reports",
      secondaryLabel: "WPA-কে জানান",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "বৈশ্বিক চ্যাপ্টার",
      title: "স্থানীয় কার্যক্রম, বৈশ্বিকভাবে সমন্বিত",
      subtitle: "WPA-এর দেশ ও শহর চ্যাপ্টার বৈশ্বিক মানকে স্থানীয় কমিউনিটিতে নিয়ে আসে — যেখানে সবচেয়ে বেশি প্রয়োজন সেখানে উদ্ধার, দত্তক ও সচেতনতা সমন্বয় করে।",
      primaryLabel: "একটি চ্যাপ্টার শুরু করুন",
      primaryHref: "/join",
      secondaryLabel: "আমাদের সঙ্গী হোন",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "চ্যাপ্টার কীভাবে খাপ খায়",
      title: "একটি বৈশ্বিক নেটওয়ার্কের স্থানীয় স্তর",
      paragraphs: [
        "WPA চ্যাপ্টার হলো স্থানীয়ভাবে সমন্বিত গোষ্ঠী — নির্দিষ্ট দেশ বা শহরে কাজ করে — যা উদ্ধার, দত্তক, টিকাদান ও সচেতনতার জন্য WPA-এর বৈশ্বিক মানকে তাদের অঞ্চলের বাস্তবতায় প্রয়োগ করে।",
        "প্রতিটি চ্যাপ্টার যাচাইকৃত স্থানীয় ক্লিনিক, এনজিও, আশ্রয়কেন্দ্র ও স্বেচ্ছাসেবকদের সাথে কাজ করে, একই সাথে স্বচ্ছতা ও সামঞ্জস্যের জন্য WPA-এর পরিচালনা কাঠামোর মাধ্যমে কার্যক্রম ও তহবিল ব্যবহার প্রতিবেদন করে।",
        "এই মডেল WPA-কে স্থানীয় জ্ঞান, নিয়ন্ত্রক সম্মতি বা কমিউনিটি বিশ্বাস ত্যাগ না করে প্রাণী কল্যাণ প্রভাব বৃদ্ধি করতে সক্ষম করে।",
      ],
    },
    stats: {
      eyebrow: "চ্যাপ্টার নেটওয়ার্ক",
      title: "একটি ক্রমবর্ধমান, সমন্বিত বৈশ্বিক উপস্থিতি",
      subtitle: "সংখ্যাগুলো সেই সমন্বিত চ্যাপ্টার নেটওয়ার্ককে প্রতিফলিত করে যা WPA যাচাইকৃত অংশীদার ও অঞ্চল যোগদানের সাথে সাথে গড়ে তুলছে।",
      items: [
        { value: "১২০+", label: "দেশ ও শহর চ্যাপ্টার" },
        { value: "৩০০+", label: "যাচাইকৃত স্থানীয় অংশীদার" },
        { value: "৫০০+", label: "চ্যাপ্টার-সমন্বিত উদ্ধার দল" },
        { value: "২৪/৭", label: "স্থানীয় প্রতিক্রিয়া কভারেজ (লক্ষ্য)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "এটি কীভাবে কাজ করে",
      title: "বৈশ্বিক মান থেকে স্থানীয় প্রভাব",
      subtitle: "প্রতিটি চ্যাপ্টার একই সমন্বয় মডেল অনুসরণ করে, স্থানীয় প্রেক্ষাপটে খাপ খাইয়ে।",
      steps: [
        { number: 1, title: "চ্যাপ্টার গঠিত", description: "WPA-এর চ্যাপ্টার গঠন মান অনুসরণ করে একটি আঞ্চলিক কাউন্সিল প্রতিষ্ঠিত হয়।" },
        { number: 2, title: "অংশীদার যাচাইকৃত", description: "স্থানীয় ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র যাচাই ও নেটওয়ার্কে যুক্ত করা হয়।" },
        { number: 3, title: "স্বেচ্ছাসেবক সংগঠিত", description: "চ্যাপ্টার উদ্ধার ও প্রচারের জন্য স্থানীয় স্বেচ্ছাসেবক নিয়োগ ও সমন্বয় করে।" },
        { number: 4, title: "কর্মসূচি প্রদান", description: "টিকাদান কর্মসূচি, দত্তক অনুষ্ঠান ও উদ্ধার প্রতিক্রিয়া ভাগাভাগি মানের অধীনে চলে।" },
        { number: 5, title: "কার্যক্রম প্রতিবেদিত", description: "চ্যাপ্টারের ফলাফল ও তহবিল ব্যবহার স্বচ্ছতার জন্য WPA পরিচালনায় প্রতিবেদন করা হয়।" },
      ],
    },
    responsibilities: {
      eyebrow: "চ্যাপ্টারের দায়িত্ব",
      title: "প্রতিটি চ্যাপ্টার যা প্রতিশ্রুতিবদ্ধ",
      subtitle: "স্থানীয় স্বায়ত্তশাসনের সাথে ভাগাভাগি, অ-আলোচনাযোগ্য দায়িত্ব আসে।",
      items: [
        { title: "অংশীদার যাচাইকরণ", description: "শুধুমাত্র যাচাইকৃত ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র চ্যাপ্টারের নামে কাজ করে।", icon: "🔒" },
        { title: "স্বচ্ছ প্রতিবেদন", description: "কার্যক্রম ও তহবিল ব্যবহার নিয়মিত, নির্ধারিত সময়সূচিতে প্রতিবেদন করা হয়।", icon: "📊" },
        { title: "নৈতিক মান", description: "সকল উদ্ধার ও পরিচর্যা অনুশীলন WPA-এর নথিভুক্ত কল্যাণ মান অনুসরণ করে।", icon: "🐾" },
        { title: "কমিউনিটি সমন্বয়", description: "চ্যাপ্টার স্থানীয় সরকার ও কমিউনিটি গোষ্ঠীর সাথে উন্মুক্ত যোগাযোগ বজায় রাখে।", icon: "🏛️" },
      ],
    },
    cta: {
      title: "আপনার শহর বা দেশে WPA-এর নেটওয়ার্ক নিয়ে আসুন",
      subtitle: "আপনি একটি চ্যাপ্টার শুরু করতে চান, একটি বিদ্যমান চ্যাপ্টারে যোগ দিতে চান, বা স্থানীয়ভাবে অংশীদার হতে চান — যুক্ত হওয়ার একটি নির্ধারিত পথ আছে।",
      primaryLabel: "সদস্য হোন",
      primaryHref: "/join",
      secondaryLabel: "WPA-কে জানান",
      secondaryHref: "/contact",
    },
  },
};

// ─── ZH (Simplified Chinese) ────────────────────────────────────────────────

const zh: PagesContent = {
  about: {
    hero: {
      eyebrow: "关于World Pet Association",
      title: "基于信任的全球动物福利平台",
      subtitle: "WPA将宠物主人、兽医、诊所、非政府组织、收容所、志愿者和捐赠者连接成一个协调、透明的全球动物福利网络。",
      primaryLabel: "我们的使命与愿景",
      primaryHref: "/mission-vision",
      secondaryLabel: "治理架构",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "我们是谁",
      title: "协调动物福利的国际组织",
      paragraphs: [
        "World Pet Association (WPA) 是一个全球性非营利网络，旨在为各国和社区的动物福利工作带来结构、透明度和问责制。",
        "WPA不是作为单一的集中化慈善机构运作，而是作为协调平台——连接经核实的兽医诊所、非政府组织、收容所、志愿者、地方分会和捐赠者，使救援、领养、疫苗接种和教育工作在规模上保持一致、可追踪和有效。",
        "WPA支持的每个项目——从紧急救援响应到社区疫苗接种活动——都以透明为默认设计，资金使用情况、合作伙伴验证和成果均可公开审查。",
      ],
    },
    values: {
      eyebrow: "我们的价值观",
      title: "指导每个项目的原则",
      subtitle: "这些价值观不是愿望性声明——它们是WPA每个分会、合作伙伴和项目的执行标准。",
      items: [
        { title: "同情心", description: "每只动物都受到有尊严的对待，无论品种、地点或环境。", icon: "❤️" },
        { title: "诚信", description: "我们说到做到——公开、一致、始终如一。", icon: "🛡️" },
        { title: "透明", description: "资金使用情况、合作伙伴状态和成果接受公众审查。", icon: "🔍" },
        { title: "协作", description: "没有单一组织能独自解决动物福利问题——我们通过合作伙伴关系开展工作。", icon: "🤝" },
        { title: "问责", description: "每个分会和合作伙伴都以明确、公开的标准进行衡量。", icon: "✅" },
        { title: "可持续", description: "项目旨在由地方自主且长期运行，而非一次性干预。", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "为什么可以信任WPA",
      title: "信任融入我们的运作方式",
      subtitle: "信任不是承诺——它是WPA治理和运营的结构性特征。",
      items: [
        { title: "透明运营", description: "项目活动、分会表现和合作伙伴状态均有记录并可供审查。", icon: "📊" },
        { title: "负责任的资金管理", description: "捐赠从贡献到项目支出全程追踪，公开报告资金分配。", icon: "💰" },
        { title: "动物福利伦理", description: "所有救援、治疗和领养实践都遵循成文的动物福利标准。", icon: "🐾" },
        { title: "合作伙伴验证", description: "诊所、NGO和收容所在加入网络前经过审核并持续审查。", icon: "🔒" },
        { title: "地方分会协调", description: "国家和城市分会在共同标准下运作，同时对WPA治理保持问责。", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "我们与谁合作",
      title: "为动物福利的每个参与者打造的网络",
      subtitle: "WPA的设计确保每个参与者——个人或机构——都有明确而有意义的角色。",
      items: [
        { title: "宠物主人", description: "通过可信网络获取领养、疫苗接种和负责任养宠资源。", icon: "🏠" },
        { title: "兽医", description: "加入经核实的专业网络，参与转诊、活动和协作护理。", icon: "👩‍⚕️" },
        { title: "诊所", description: "参与疫苗接种活动和治疗项目，透明报告。", icon: "🏥" },
        { title: "非政府组织", description: "通过共享基础设施和协调活动扩展使命影响力。", icon: "🕊️" },
        { title: "收容所", description: "通过WPA分会网络协调接收、护理和领养安置。", icon: "🐕" },
        { title: "志愿者", description: "为救援、运输和社区宣传贡献时间。", icon: "🙌" },
        { title: "捐赠者", description: "为经核实、可追踪的项目提供资金，完全了解影响和资金使用情况。", icon: "💛" },
        { title: "政府和私人机构", description: "在政策、公共卫生和大规模福利倡议方面展开合作。", icon: "🏛️" },
      ],
    },
    cta: {
      title: "加入建立在透明和信任基础上的全球网络",
      subtitle: "无论您的角色是什么——宠物主人、专业人士、机构或支持者——都有明确的参与方式。",
      primaryLabel: "成为会员",
      primaryHref: "/join",
      secondaryLabel: "与WPA合作",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "使命与愿景",
      title: "WPA为什么存在，以及我们努力创造的世界",
      subtitle: "我们的使命定义了今天做什么，我们的愿景定义了通过一个个协调项目正在建设的世界。",
      primaryLabel: "关于WPA",
      primaryHref: "/about",
      secondaryLabel: "了解项目",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "我们的使命",
      title: "构建透明、协调的全球动物福利网络",
      text: "WPA致力于将宠物主人、兽医专业人士、NGO、收容所、志愿者和捐赠者连接到一个问责的系统中——使救援、领养、疫苗接种和教育项目能够更可靠地惠及更多动物，并取得可验证的成果和对每笔捐款的负责任使用。",
    },
    vision: {
      eyebrow: "我们的愿景",
      title: "每只动物在任何地方都受到保护的世界",
      text: "我们设想这样一个未来：负责任地养宠成为常态，没有处于困境中的动物不被报告，每个社区都能获得兽医护理和疫苗接种，支持动物福利的系统与任何公共机构一样透明和可信。",
    },
    values: {
      eyebrow: "践行价值观",
      title: "每个项目背后的标准",
      subtitle: "这些是指导WPA运营的相同价值观，体现在日常实践中。",
      items: [
        { title: "同情心优先", description: "每个决定都从什么对动物最好开始，而不是什么最方便。", icon: "❤️" },
        { title: "循证护理", description: "救援、治疗和领养实践遵循既定的兽医和福利标准。", icon: "🩺" },
        { title: "公开报告", description: "发布的不仅是意图，还有成果，供审查。", icon: "📄" },
        { title: "共同所有", description: "地方分会和合作伙伴被赋权，而不是仅从上层指挥。", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "运营原则",
      title: "使命如何转化为行动",
      subtitle: "一致的运营模式将使命和愿景转化为可衡量、可复制的影响。",
      steps: [
        { number: 1, title: "设定可验证的标准", description: "每个项目领域——救援、领养、疫苗接种——都按照已发布的标准执行。" },
        { number: 2, title: "核实每个合作伙伴", description: "诊所、NGO和收容所在加入前经过审核并持续审查。" },
        { number: 3, title: "通过分会协调", description: "地方分会应用全球标准，同时适应地区需求和法规。" },
        { number: 4, title: "追踪每笔贡献", description: "捐赠和资源从接收到项目支出全程记录。" },
        { number: 5, title: "公开报告", description: "成果和资金使用情况向捐赠者、合作伙伴和公众发布。" },
      ],
    },
    cta: {
      title: "支持以可衡量、透明影响为基础的使命",
      subtitle: "每份贡献——时间、资金或合作伙伴关系——都在推动WPA的使命和愿景前进。",
      primaryLabel: "立即捐赠",
      primaryHref: "/donation",
      secondaryLabel: "成为会员",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "治理与领导",
      title: "为问责而设计的架构",
      subtitle: "WPA的治理模式将监督、执行和区域协调分离——确保没有单一机构在不受审查的情况下运作。",
      primaryLabel: "公开报告",
      primaryHref: "/reports",
      secondaryLabel: "合作伙伴验证",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "WPA如何治理",
      title: "分层治理，而非单点控制",
      paragraphs: [
        "WPA通过分层治理结构运作，旨在将政策制定、日常执行和区域协调分离——确保没有单一群体对资金、合作伙伴关系或项目决策拥有不受制约的权力。",
        "这一结构旨在保护网络的完整性：捐赠者、合作伙伴和我们服务的动物都依赖于通过既定流程而非个人判断做出的决策。",
        "治理文件、资金使用报告和合作伙伴验证记录均按照WPA的透明承诺向公众公开。",
      ],
    },
    structure: {
      eyebrow: "组织架构",
      title: "治理WPA的机构",
      subtitle: "每个治理机构都有明确的使命，具有定义好的报告线以保持权力的制约和问责。",
      items: [
        { title: "董事会", description: "制定长期政策，审批主要合作伙伴关系，对组织承担最终受托责任。", icon: "🏛️" },
        { title: "执行领导层", description: "管理日常运营、项目交付和跨分会协调。", icon: "📋" },
        { title: "区域分会理事会", description: "国家和城市分会选举或任命地方理事会，使全球标准适应地区需求。", icon: "🌍" },
        { title: "伦理与动物福利委员会", description: "按照成文福利标准审查救援、治疗和领养实践。", icon: "🐾" },
        { title: "审计与透明委员会", description: "独立审查资金使用情况并在公开报告中发布结果。", icon: "📊" },
        { title: "合作伙伴咨询小组", description: "兽医、NGO和收容所代表就项目设计和合作伙伴标准提供建议。", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "问责措施",
      title: "治理在实践中如何保持问责",
      subtitle: "仅有架构是不够的——这些是使每个治理机构保持制约的具体机制。",
      items: [
        { title: "独立年度审计", description: "财务报表由独立方审查并向公众公开。", icon: "📄" },
        { title: "利益冲突政策", description: "理事和高管在任何合作伙伴关系或资金决策前必须披露利益冲突。", icon: "⚖️" },
        { title: "任期限制", description: "董事会和委员会任期有限且错开，以防止权力集中。", icon: "⏳" },
        { title: "公开披露", description: "治理政策、架构和关键决策向所有人公开。", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "决策流程",
      title: "决策在WPA中的流转",
      subtitle: "从政策到实地行动，每个决策都遵循一条明确的、可审查的路径。",
      steps: [
        { number: 1, title: "政策制定", description: "董事会审批全组织范围和优先事项。" },
        { number: 2, title: "领导层执行", description: "执行领导层将政策转化为运营项目。" },
        { number: 3, title: "分会适配", description: "区域分会理事会将标准应用于地方环境和法规。" },
        { number: 4, title: "伦理审查", description: "伦理与动物福利委员会审查项目实践。" },
        { number: 5, title: "审计与发布", description: "审计与透明委员会公开审查成果和资金使用情况。" },
      ],
    },
    cta: {
      title: "查阅我们的治理文件和报告",
      subtitle: "透明不是口号——探索背后的报告和验证标准。",
      primaryLabel: "查看公开报告",
      primaryHref: "/reports",
      secondaryLabel: "联系WPA",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "全球分会",
      title: "地方行动，全球协调",
      subtitle: "WPA的国家和城市分会将全球标准带到当地社区——在最需要的地方协调救援、领养和宣传。",
      primaryLabel: "创办分会",
      primaryHref: "/join",
      secondaryLabel: "与我们合作",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "分会如何融入",
      title: "全球网络的地方层",
      paragraphs: [
        "WPA分会是地方协调的团体——在特定国家或城市运作——将WPA关于救援、领养、疫苗接种和宣传的全球标准应用于当地实际。",
        "每个分会与当地经核实的诊所、NGO、收容所和志愿者合作，同时通过WPA的治理结构报告活动和资金使用情况，以保持透明和一致。",
        "这一模式使WPA能够在不牺牲当地知识、法规合规或社区信任的情况下扩大动物福利的影响。",
      ],
    },
    stats: {
      eyebrow: "分会网络",
      title: "不断增长的协调全球布局",
      subtitle: "数据反映了WPA正在建设的协调分会网络，随着经核实的合作伙伴和地区的加入。",
      items: [
        { value: "120+", label: "国家和城市分会" },
        { value: "300+", label: "经核实的地方合作伙伴" },
        { value: "500+", label: "分会协调的救援团队" },
        { value: "24/7", label: "当地响应覆盖（目标）" },
      ],
    },
    howChaptersWork: {
      eyebrow: "运作方式",
      title: "从全球标准到地方影响",
      subtitle: "每个分会遵循相同的协调模式，根据当地环境调整。",
      steps: [
        { number: 1, title: "成立分会", description: "按照WPA的分会成立标准建立区域理事会。" },
        { number: 2, title: "验证合作伙伴", description: "当地诊所、NGO和收容所经审核后加入网络。" },
        { number: 3, title: "动员志愿者", description: "分会招募和协调当地志愿者进行救援和宣传。" },
        { number: 4, title: "交付项目", description: "在共同标准下开展疫苗接种、领养活动和救援响应。" },
        { number: 5, title: "报告活动", description: "分会成果和资金使用情况报告给WPA治理层以保持透明。" },
      ],
    },
    responsibilities: {
      eyebrow: "分会职责",
      title: "每个分会的承诺",
      subtitle: "地方自治伴随着共同的、不可协商的责任。",
      items: [
        { title: "合作伙伴验证", description: "只有经审核的诊所、NGO和收容所以分会名义运作。", icon: "🔒" },
        { title: "透明报告", description: "活动和资金使用情况按规定的定期日程报告。", icon: "📊" },
        { title: "伦理标准", description: "所有救援和护理实践遵循WPA成文的福利标准。", icon: "🐾" },
        { title: "社区协调", description: "分会与当地政府和社区团体保持开放的沟通渠道。", icon: "🏛️" },
      ],
    },
    cta: {
      title: "将WPA的网络带到您的城市或国家",
      subtitle: "无论您想创办分会、加入现有分会还是当地合作——都有明确的参与路径。",
      primaryLabel: "成为会员",
      primaryHref: "/join",
      secondaryLabel: "联系WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── JA (Japanese) ──────────────────────────────────────────────────────────

const ja: PagesContent = {
  about: {
    hero: {
      eyebrow: "World Pet Associationについて",
      title: "信頼に基づく動物福祉のグローバルプラットフォーム",
      subtitle: "WPAはペットオーナー、獣医師、クリニック、NGO、保護施設、ボランティア、寄付者を、世界中の動物福祉のための1つの連携された透明なネットワークにつなげます。",
      primaryLabel: "ミッションとビジョン",
      primaryHref: "/mission-vision",
      secondaryLabel: "ガバナンス",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "私たちについて",
      title: "連携された動物福祉のための国際団体",
      paragraphs: [
        "World Pet Association (WPA) は、各国やコミュニティの動物福祉活動に構造、透明性、説明責任をもたらすために設立されたグローバルな非営利ネットワークです。",
        "WPAは単一の中央集権的な慈善団体としてではなく、調整プラットフォームとして機能します——検証済みの獣医クリニック、NGO、保護施設、ボランティア、地域支部、寄付者をつなぎ、救助、里親、予防接種、教育の取り組みが一貫性があり、追跡可能で、大規模に効果的になるようにします。",
        "WPAが支援するすべてのプログラム——緊急救助対応からコミュニティ予防接種キャンペーンまで——デフォルトで透明に設計されており、資金使用、パートナー検証、成果は公開レビュー可能です。",
      ],
    },
    values: {
      eyebrow: "私たちの価値観",
      title: "すべてのプログラムを導く原則",
      subtitle: "これらの価値観は願望的な声明ではありません——WPAのすべての支部、パートナー、プログラムの運営基準です。",
      items: [
        { title: "慈愛", description: "すべての動物は種、場所、状況に関係なく尊厳をもって扱われます。", icon: "❤️" },
        { title: "誠実", description: "私たちは言ったことを実行します——公に、一貫して、例外なく。", icon: "🛡️" },
        { title: "透明性", description: "資金使用、パートナーステータス、成果は公開審査の対象です。", icon: "🔍" },
        { title: "協力", description: "単一の団体だけで動物福祉を解決することはできません——パートナーシップを通じて活動します。", icon: "🤝" },
        { title: "説明責任", description: "すべての支部とパートナーは明確な公開基準に基づいて評価されます。", icon: "✅" },
        { title: "持続可能性", description: "プログラムは地域主体で長期的に運営されるように設計されており、一回限りの介入ではありません。", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "WPAが信頼できる理由",
      title: "信頼は運営方法に組み込まれています",
      subtitle: "信頼は約束ではありません——WPAのガバナンスと運営の構造的な特徴です。",
      items: [
        { title: "透明な運営", description: "プログラムの活動、支部のパフォーマンス、パートナーステータスは文書化され、レビュー可能です。", icon: "📊" },
        { title: "責任ある資金管理", description: "寄付は拠出からプログラム支出まで追跡され、資金配分について公開報告されます。", icon: "💰" },
        { title: "動物福祉の倫理", description: "すべての救助、治療、里親の実践は文書化された動物福祉基準に従います。", icon: "🐾" },
        { title: "パートナー検証", description: "クリニック、NGO、保護施設はネットワーク参加前に審査され、継続的にレビューされます。", icon: "🔒" },
        { title: "地域支部の連携", description: "国・都市支部は共通基準の下で運営され、WPAガバナンスに説明責任を負います。", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "連携する関係者",
      title: "動物福祉のすべての関係者のためのネットワーク",
      subtitle: "WPAはすべての参加者——個人または団体——が明確で意味のある役割を持つように設計されています。",
      items: [
        { title: "ペットオーナー", description: "信頼できるネットワークを通じて里親、予防接種、責任ある飼育のリソースにアクセス。", icon: "🏠" },
        { title: "獣医師", description: "紹介、キャンペーン、協力的ケアのための検証済み専門ネットワークに参加。", icon: "👩‍⚕️" },
        { title: "クリニック", description: "透明な報告のもと、予防接種キャンペーンや治療プログラムに参加。", icon: "🏥" },
        { title: "NGO", description: "共有インフラと連携キャンペーンを通じてミッションの影響力を拡大。", icon: "🕊️" },
        { title: "保護施設", description: "WPA支部ネットワークを通じて受け入れ、ケア、里親あっせんを調整。", icon: "🐕" },
        { title: "ボランティア", description: "救助、輸送、コミュニティ活動に時間を貢献。", icon: "🙌" },
        { title: "寄付者", description: "影響と資金使用の完全な可視性をもって、検証済み・追跡可能なプログラムに資金提供。", icon: "💛" },
        { title: "政府・民間団体", description: "政策、公衆衛生、大規模福祉イニシアチブでパートナーシップ。", icon: "🏛️" },
      ],
    },
    cta: {
      title: "透明性と信頼に基づくグローバルネットワークに参加",
      subtitle: "あなたの役割が何であれ——ペットオーナー、専門家、団体、支援者——明確な参加方法があります。",
      primaryLabel: "会員になる",
      primaryHref: "/join",
      secondaryLabel: "WPAとパートナーシップを組む",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "ミッションとビジョン",
      title: "WPAが存在する理由と、私たちが目指す世界",
      subtitle: "ミッションは今日何をするかを定義します。ビジョンは、1つ1つの連携プログラムを通じて構築している世界を定義します。",
      primaryLabel: "WPAについて",
      primaryHref: "/about",
      secondaryLabel: "プログラムを見る",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "私たちのミッション",
      title: "透明で連携された動物福祉のグローバルネットワークを構築する",
      text: "WPAは、ペットオーナー、獣医師、NGO、保護施設、ボランティア、寄付者を1つの責任あるシステムに接続するために存在します——救助、里親、予防接種、教育プログラムが、検証可能な成果とすべての寄付の責任ある使用をもって、より多くの動物により確実に届くようにします。",
    },
    vision: {
      eyebrow: "私たちのビジョン",
      title: "すべての動物がどこでも守られる世界",
      text: "私たちは、責任あるペット飼育が当たり前になり、苦境にある動物が見逃されず、すべてのコミュニティで獣医療と予防接種が利用可能になり、動物福祉を支えるシステムがあらゆる公共機関と同じように透明で信頼される未来を思い描いています。",
    },
    values: {
      eyebrow: "実践における価値観",
      title: "すべてのプログラムの背後にある基準",
      subtitle: "これらはWPAの運営を導くのと同じ価値観を、日常の実践に翻訳したものです。",
      items: [
        { title: "慈愛を第一に", description: "すべての決定は動物にとって何が最善かから始まり、何が便利かではありません。", icon: "❤️" },
        { title: "エビデンスに基づくケア", description: "救助、治療、里親の実践は確立された獣医・福祉基準に従います。", icon: "🩺" },
        { title: "オープンな報告", description: "意図だけでなく成果も公開され、レビュー可能です。", icon: "📄" },
        { title: "共有されたオーナーシップ", description: "地域支部とパートナーは上から指示されるだけでなく、権限を与えられます。", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "運営原則",
      title: "ミッションを行動に変える方法",
      subtitle: "ミッションとビジョンを測定可能で再現性のあるインパクトに変える一貫した運営モデル。",
      steps: [
        { number: 1, title: "検証可能な基準を設定", description: "すべてのプログラム分野——救助、里親、予防接種——公開基準に基づいて運営されます。" },
        { number: 2, title: "すべてのパートナーを検証", description: "クリニック、NGO、保護施設は参加前に審査され、継続的にレビューされます。" },
        { number: 3, title: "支部を通じて調整", description: "地域支部は地域のニーズと規制に適応しながらグローバル基準を適用します。" },
        { number: 4, title: "すべての貢献を追跡", description: "寄付とリソースは受け入れからプログラム支出まで記録されます。" },
        { number: 5, title: "公開報告", description: "成果と資金使用は寄付者、パートナー、一般の人々に公開されます。" },
      ],
    },
    cta: {
      title: "測定可能で透明なインパクトに基づくミッションを支援",
      subtitle: "すべての貢献——時間、資金、パートナーシップ——がWPAのミッションとビジョンを前進させます。",
      primaryLabel: "今すぐ寄付",
      primaryHref: "/donation",
      secondaryLabel: "会員になる",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "ガバナンスとリーダーシップ",
      title: "説明責任のために設計された構造",
      subtitle: "WPAのガバナンスモデルは監督、実行、地域調整を分離します——どの単一の機関もレビューなしに運営されないようにします。",
      primaryLabel: "公開報告書",
      primaryHref: "/reports",
      secondaryLabel: "パートナー検証",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "WPAのガバナンス方法",
      title: "階層化されたガバナンス、単一のコントロールポイントではない",
      paragraphs: [
        "WPAは、政策決定、日常業務の実行、地域調整を分離するように設計された階層化されたガバナンス構造を通じて運営されています——資金、パートナーシップ、プログラム決定に対して単一のグループがチェックされていない権限を持たないようにします。",
        "この構造はネットワークの整合性を守るために存在します：寄付者、パートナー、そして私たちが奉仕する動物はすべて、個人の裁量ではなく定義されたプロセスを通じて決定が下されることに依存しています。",
        "ガバナンス文書、資金使用報告書、パートナー検証記録は、WPAの透明性のコミットメントに沿って公開されます。",
      ],
    },
    structure: {
      eyebrow: "組織構造",
      title: "WPAを統治する機関",
      subtitle: "各統治機関には明確な使命があり、権限を抑制し説明責任を負わせるための報告ラインが定義されています。",
      items: [
        { title: "理事会", description: "長期政策を設定し、主要なパートナーシップを承認し、組織に対する最終的な受託責任を負います。", icon: "🏛️" },
        { title: "執行部", description: "日常業務、プログラム提供、支部間の調整を管理します。", icon: "📋" },
        { title: "地域支部評議会", description: "国・都市支部は地域評議会を選出または任命し、グローバル基準を地域のニーズに適応させます。", icon: "🌍" },
        { title: "倫理・動物福祉委員会", description: "文書化された福祉基準に基づいて救助、治療、里親の実践をレビューします。", icon: "🐾" },
        { title: "監査・透明性委員会", description: "資金使用を独立してレビューし、公開報告書で結果を発表します。", icon: "📊" },
        { title: "パートナー諮問パネル", description: "獣医、NGO、保護施設の代表者がプログラム設計とパートナー基準について助言します。", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "説明責任の措置",
      title: "ガバナンスが実践的に説明責任を負う方法",
      subtitle: "構造だけでは不十分です——すべての統治機関を抑制する具体的なメカニズムです。",
      items: [
        { title: "独立年次監査", description: "財務諸表は独立した第三者によってレビューされ、公開されます。", icon: "📄" },
        { title: "利益相反ポリシー", description: "理事と役員はパートナーシップまたは資金決定の前に利益相反を開示する必要があります。", icon: "⚖️" },
        { title: "任期制限", description: "理事会と委員会の任期は制限され、ずらされており、権力の集中を防ぎます。", icon: "⏳" },
        { title: "公開開示", description: "ガバナンスポリシー、構造、主要な決定は誰でもレビューできるように公開されます。", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "決定フロー",
      title: "WPAでの決定の流れ",
      subtitle: "政策から現場の行動まで、すべての決定は定義されたレビュー可能なパスに従います。",
      steps: [
        { number: 1, title: "ポリシー設定", description: "理事会が組織全体の基準と優先事項を承認します。" },
        { number: 2, title: "執行部による実行", description: "執行部がポリシーを運用プログラムに変換します。" },
        { number: 3, title: "支部による適応", description: "地域支部評議会が基準を地域の文脈と規制に適用します。" },
        { number: 4, title: "倫理レビュー", description: "倫理・動物福祉委員会がプログラムの実践をレビューします。" },
        { number: 5, title: "監査と公開", description: "監査・透明性委員会が成果と資金使用を公開レビューします。" },
      ],
    },
    cta: {
      title: "ガバナンス文書と報告書をレビュー",
      subtitle: "透明性は主張ではありません——その背後にある報告書と検証基準をご覧ください。",
      primaryLabel: "公開報告書を見る",
      primaryHref: "/reports",
      secondaryLabel: "WPAに連絡",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "グローバル支部",
      title: "地域の行動、グローバルに連携",
      subtitle: "WPAの国・都市支部はグローバル基準を地域コミュニティにもたらします——最も重要な場所で救助、里親、啓発を調整します。",
      primaryLabel: "支部を設立",
      primaryHref: "/join",
      secondaryLabel: "パートナーになる",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "支部の役割",
      title: "グローバルネットワークの地域レイヤー",
      paragraphs: [
        "WPA支部は、特定の国や都市で活動する地域調整グループであり、救助、里親、予防接種、啓発に関するWPAのグローバル基準を地域の現実に適用します。",
        "各支部は検証済みの地域クリニック、NGO、保護施設、ボランティアと連携し、活動と資金使用をWPAのガバナンス構造を通じて報告して透明性と一貫性を保ちます。",
        "このモデルにより、WPAは地域の知識、規制遵守、コミュニティの信頼を犠牲にすることなく動物福祉のインパクトを拡大できます。",
      ],
    },
    stats: {
      eyebrow: "支部ネットワーク",
      title: "拡大する連携されたグローバルプレゼンス",
      subtitle: "数字は、検証済みパートナーと地域が参加する中でWPAが構築している連携支部ネットワークを反映しています。",
      items: [
        { value: "120+", label: "国・都市支部" },
        { value: "300+", label: "検証済み地域パートナー" },
        { value: "500+", label: "支部連携救助チーム" },
        { value: "24/7", label: "地域対応カバレッジ（目標）" },
      ],
    },
    howChaptersWork: {
      eyebrow: "仕組み",
      title: "グローバル基準から地域のインパクトへ",
      subtitle: "すべての支部は同じ連携モデルに従い、地域の文脈に適応します。",
      steps: [
        { number: 1, title: "支部設立", description: "WPAの支部設立基準に従って地域評議会が設立されます。" },
        { number: 2, title: "パートナー検証", description: "地域のクリニック、NGO、保護施設が審査されネットワークにオンボードされます。" },
        { number: 3, title: "ボランティア動員", description: "支部が救助と啓発のための地域ボランティアを募集・調整します。" },
        { number: 4, title: "プログラムの提供", description: "予防接種、里親イベント、救助対応が共通基準の下で運営されます。" },
        { number: 5, title: "活動報告", description: "支部の成果と資金使用が透明性のためにWPAガバナンスに報告されます。" },
      ],
    },
    responsibilities: {
      eyebrow: "支部の責任",
      title: "すべての支部が約束すること",
      subtitle: "地域の自律性には、共通の譲れない責任が伴います。",
      items: [
        { title: "パートナー検証", description: "審査済みのクリニック、NGO、保護施設のみが支部名で活動します。", icon: "🔒" },
        { title: "透明な報告", description: "活動と資金使用は定期的なスケジュールで報告されます。", icon: "📊" },
        { title: "倫理基準", description: "すべての救助とケアはWPAの文書化された福祉基準に従います。", icon: "🐾" },
        { title: "コミュニティ調整", description: "支部は地方政府とコミュニティグループとのオープンなチャネルを維持します。", icon: "🏛️" },
      ],
    },
    cta: {
      title: "あなたの都市や国にWPAネットワークをもたらす",
      subtitle: "支部を設立したい、既存の支部に参加したい、地域でパートナーシップを組みたい——明確な参加パスがあります。",
      primaryLabel: "会員になる",
      primaryHref: "/join",
      secondaryLabel: "WPAに連絡",
      secondaryHref: "/contact",
    },
  },
};

// ─── KO (Korean) ────────────────────────────────────────────────────────────

const ko: PagesContent = {
  about: {
    hero: {
      eyebrow: "World Pet Association 소개",
      title: "신뢰를 바탕으로 구축된 글로벌 동물 복지 플랫폼",
      subtitle: "WPA는 반려동물 소유자, 수의사, 클리닉, NGO, 보호소, 자원봉사자, 기부자를 전 세계 동물 복지를 위한 하나의 조율되고 투명한 네트워크로 연결합니다.",
      primaryLabel: "미션과 비전",
      primaryHref: "/mission-vision",
      secondaryLabel: "거버넌스",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "우리는 누구인가",
      title: "조율된 동물 복지를 위한 국제 기구",
      paragraphs: [
        "World Pet Association(WPA)은 국가와 지역사회 전반의 동물 복지 활동에 구조, 투명성, 책무성을 부여하기 위해 설립된 글로벌 비영리 네트워크입니다.",
        "단일 중앙 집중식 자선 단체로 운영되는 것이 아니라, WPA는 검증된 수의사 클리닉, NGO, 보호소, 자원봉사자, 지역 지부, 기부자를 연결하는 조정 플랫폼으로 기능하여 구조, 입양, 예방접종, 교육 활동이 일관성 있고, 추적 가능하며, 규모 있게 효과적이도록 합니다.",
        "WPA가 지원하는 모든 프로그램 — 긴급 구조 대응부터 지역사회 예방접종 캠페인까지 — 기본적으로 투명하게 설계되어 자금 사용, 파트너 검증, 성과를 공개 검토할 수 있습니다.",
      ],
    },
    values: {
      eyebrow: "우리의 가치",
      title: "모든 프로그램을 이끄는 원칙",
      subtitle: "이 가치는 희망적 선언이 아닙니다 — WPA 산하 모든 지부, 파트너, 프로그램의 운영 기준입니다.",
      items: [
        { title: "연민", description: "모든 동물은 종, 위치, 환경에 관계없이 존엄하게 대우받습니다.", icon: "❤️" },
        { title: "진실성", description: "우리는 말한 것을 실행합니다 — 공개적으로, 일관되게, 예외 없이.", icon: "🛡️" },
        { title: "투명성", description: "자금 사용, 파트너 상태, 성과는 공개 검증 대상입니다.", icon: "🔍" },
        { title: "협력", description: "어느 단일 기관도 혼자서 동물 복지를 해결할 수 없습니다 — 파트너십을 통해 활동합니다.", icon: "🤝" },
        { title: "책무성", description: "모든 지부와 파트너는 명확히 공개된 기준에 따라 평가됩니다.", icon: "✅" },
        { title: "지속가능성", description: "프로그램은 지역이 주도하고 장기적으로 운영되도록 설계되며, 일회성 개입이 아닙니다.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "WPA를 신뢰할 수 있는 이유",
      title: "신뢰는 운영 방식에 내재되어 있습니다",
      subtitle: "신뢰는 약속이 아닙니다 — WPA 거버넌스와 운영의 구조적 특징입니다.",
      items: [
        { title: "투명한 운영", description: "프로그램 활동, 지부 성과, 파트너 상태는 문서화되어 검토 가능합니다.", icon: "📊" },
        { title: "책임 있는 자금 관리", description: "기부는 기여부터 프로그램 지출까지 추적되며, 자금 배분에 대해 공개 보고됩니다.", icon: "💰" },
        { title: "동물 복지 윤리", description: "모든 구조, 치료, 입양 활동은 문서화된 동물 복지 기준을 따릅니다.", icon: "🐾" },
        { title: "파트너 검증", description: "클리닉, NGO, 보호소는 네트워크 가입 전 심사를 거치고 지속적으로 검토됩니다.", icon: "🔒" },
        { title: "지역 지부 조율", description: "국가 및 도시 지부는 공통 기준에 따라 운영되며 WPA 거버넌스에 책임이 있습니다.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "우리가 함께 하는 이들",
      title: "동물 복지의 모든 이해관계자를 위한 네트워크",
      subtitle: "WPA는 모든 참여자 — 개인 또는 기관 — 가 명확하고 의미 있는 역할을 갖도록 설계되었습니다.",
      items: [
        { title: "반려동물 소유자", description: "신뢰할 수 있는 네트워크를 통해 입양, 예방접종, 책임 있는 소유 리소스에 접근하세요.", icon: "🏠" },
        { title: "수의사", description: "의뢰, 캠페인, 협력적 진료를 위한 검증된 전문 네트워크에 가입하세요.", icon: "👩‍⚕️" },
        { title: "클리닉", description: "투명한 보고와 함께 예방접종 및 치료 프로그램에 참여하세요.", icon: "🏥" },
        { title: "NGO", description: "공유 인프라와 조율된 캠페인을 통해 미션의 영향력을 확장하세요.", icon: "🕊️" },
        { title: "보호소", description: "WPA 지부 네트워크를 통해 접수, 돌봄, 입양 배정을 조율하세요.", icon: "🐕" },
        { title: "자원봉사자", description: "구조, 이송, 지역사회 활동에 시간을 기여하세요.", icon: "🙌" },
        { title: "기부자", description: "영향과 자금 사용에 대한 완전한 가시성으로 검증되고 추적 가능한 프로그램에 자금을 지원하세요.", icon: "💛" },
        { title: "정부 및 민간 기관", description: "정책, 공중보건, 대규모 복지 이니셔티브에서 파트너십을 맺으세요.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "투명성과 신뢰 위에 구축된 글로벌 네트워크에 참여하세요",
      subtitle: "역할이 무엇이든 — 반려동물 소유자, 전문가, 기관, 지지자 — 명확한 참여 방법이 있습니다.",
      primaryLabel: "회원 가입",
      primaryHref: "/join",
      secondaryLabel: "WPA와 파트너십 맺기",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "미션과 비전",
      title: "WPA가 존재하는 이유, 그리고 우리가 만들어가는 세상",
      subtitle: "미션은 오늘 무엇을 하는지를 정의합니다. 비전은 조율된 프로그램 하나하나로 구축해 나가는 세상을 정의합니다.",
      primaryLabel: "WPA 소개",
      primaryHref: "/about",
      secondaryLabel: "프로그램 알아보기",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "우리의 미션",
      title: "투명하고 조율된 글로벌 동물 복지 네트워크를 구축하다",
      text: "WPA는 반려동물 소유자, 수의사 전문가, NGO, 보호소, 자원봉사자, 기부자를 하나의 책임 있는 시스템으로 연결하기 위해 존재합니다 — 구조, 입양, 예방접종, 교육 프로그램이 검증 가능한 성과와 모든 기부의 책임 있는 사용으로 더 많은 동물에게 더 확실하게 도달하도록 합니다.",
    },
    vision: {
      eyebrow: "우리의 비전",
      title: "모든 동물이 어디서나 보호되는 세상",
      text: "우리는 책임감 있는 반려동물 소유가 당연한 것이 되고, 위기에 처한 동물이 방치되지 않으며, 모든 지역사회에서 수의 진료와 예방접종이 이용 가능하고, 동물 복지를 지원하는 시스템이 어느 공공기관만큼 투명하고 신뢰받는 미래를 꿈꿉니다.",
    },
    values: {
      eyebrow: "실천하는 가치",
      title: "모든 프로그램의 기준",
      subtitle: "WPA 운영을 이끄는 동일한 가치를 일상 실천으로 번역한 것입니다.",
      items: [
        { title: "연민을 최우선으로", description: "모든 결정은 동물에게 가장 좋은 것에서 시작합니다, 편리함이 아닙니다.", icon: "❤️" },
        { title: "증거 기반 돌봄", description: "구조, 치료, 입양 활동은 확립된 수의·복지 기준을 따릅니다.", icon: "🩺" },
        { title: "공개 보고", description: "의도만이 아닌 성과도 공개되고 검토 가능합니다.", icon: "📄" },
        { title: "공유된 주인의식", description: "지역 지부와 파트너는 상부의 지시만이 아닌 권한을 부여받습니다.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "운영 원칙",
      title: "미션을 행동으로 전환하는 방법",
      subtitle: "미션과 비전을 측정 가능하고 재현 가능한 성과로 바꾸는 일관된 운영 모델.",
      steps: [
        { number: 1, title: "검증 가능한 기준 설정", description: "모든 프로그램 분야 — 구조, 입양, 예방접종 — 은 공개된 기준에 따라 운영됩니다." },
        { number: 2, title: "모든 파트너 검증", description: "클리닉, NGO, 보호소는 가입 전 심사되고 지속적으로 검토됩니다." },
        { number: 3, title: "지부를 통한 조율", description: "지역 지부는 지역 요구와 규정에 맞게 글로벌 기준을 적용합니다." },
        { number: 4, title: "모든 기여 추적", description: "기부와 자원은 접수부터 프로그램 지출까지 기록됩니다." },
        { number: 5, title: "공개 보고", description: "성과와 자금 사용은 기부자, 파트너, 일반인에게 공개됩니다." },
      ],
    },
    cta: {
      title: "측정 가능하고 투명한 성과에 기반한 미션을 지원하세요",
      subtitle: "모든 기여 — 시간, 자금, 파트너십 — 는 WPA의 미션과 비전을 전진시킵니다.",
      primaryLabel: "지금 기부",
      primaryHref: "/donation",
      secondaryLabel: "회원 가입",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "거버넌스와 리더십",
      title: "책무성을 위해 설계된 구조",
      subtitle: "WPA의 거버넌스 모델은 감독, 실행, 지역 조율을 분리합니다 — 어느 단일 기구도 검토 없이 운영되지 않도록 합니다.",
      primaryLabel: "공개 보고서",
      primaryHref: "/reports",
      secondaryLabel: "파트너 검증",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "WPA의 거버넌스 방식",
      title: "계층적 거버넌스, 단일 통제점이 아닙니다",
      paragraphs: [
        "WPA는 정책 수립, 일상 실행, 지역 조율을 분리하도록 설계된 계층적 거버넌스 구조를 통해 운영됩니다 — 자금, 파트너십, 프로그램 결정에 어느 단일 집단이 견제받지 않는 권한을 갖지 않도록 합니다.",
        "이 구조는 네트워크의 무결성을 보호하기 위해 존재합니다: 기부자, 파트너, 우리가 섬기는 동물 모두 개인의 재량이 아닌 정의된 프로세스를 통해 결정이 내려지는 것에 의존합니다.",
        "거버넌스 문서, 자금 사용 보고서, 파트너 검증 기록은 WPA의 투명성 약속에 따라 공개됩니다.",
      ],
    },
    structure: {
      eyebrow: "조직 구조",
      title: "WPA를 통치하는 기구들",
      subtitle: "각 통치 기구는 고유한 임무가 있으며, 권한을 견제하고 책임지게 하는 정의된 보고 라인이 있습니다.",
      items: [
        { title: "이사회", description: "장기 정책을 설정하고 주요 파트너십을 승인하며 조직에 대한 최종 수탁 책임을 집니다.", icon: "🏛️" },
        { title: "경영진", description: "일상 운영, 프로그램 제공, 지부 간 조율을 관리합니다.", icon: "📋" },
        { title: "지역 지부 위원회", description: "국가 및 도시 지부는 지역 위원회를 선출 또는 임명하여 글로벌 기준을 지역 요구에 맞게 적용합니다.", icon: "🌍" },
        { title: "윤리 및 동물 복지 위원회", description: "문서화된 복지 기준에 따라 구조, 치료, 입양 활동을 검토합니다.", icon: "🐾" },
        { title: "감사 및 투명성 위원회", description: "자금 사용을 독립적으로 검토하고 공개 보고서에서 결과를 발표합니다.", icon: "📊" },
        { title: "파트너 자문단", description: "수의사, NGO, 보호소 대표가 프로그램 설계와 파트너 기준에 대해 조언합니다.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "책무성 조치",
      title: "거버넌스가 실제로 책임 있게 유지되는 방법",
      subtitle: "구조만으로는 충분하지 않습니다 — 모든 통치 기구를 견제하는 구체적 메커니즘입니다.",
      items: [
        { title: "독립 연례 감사", description: "재무 제표는 독립 기관이 검토하고 대중에게 공개합니다.", icon: "📄" },
        { title: "이해충돌 정책", description: "이사와 임원은 파트너십 또는 자금 결정 전 이해충돌을 공개해야 합니다.", icon: "⚖️" },
        { title: "임기 제한", description: "이사회와 위원회 임기는 제한되고 교차되어 권한 집중을 방지합니다.", icon: "⏳" },
        { title: "공개 공시", description: "거버넌스 정책, 구조, 주요 결정은 누구나 검토할 수 있도록 공개됩니다.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "의사 결정 흐름",
      title: "WPA에서 결정이 어떻게 이루어지는가",
      subtitle: "정책에서 현장 활동까지, 모든 결정은 정의되고 검토 가능한 경로를 따릅니다.",
      steps: [
        { number: 1, title: "정책 수립", description: "이사회는 전사적 기준과 우선순위를 승인합니다." },
        { number: 2, title: "경영진 실행", description: "경영진이 정책을 운영 프로그램으로 전환합니다." },
        { number: 3, title: "지부 적용", description: "지역 지부 위원회가 기준을 지역 환경과 규정에 적용합니다." },
        { number: 4, title: "윤리 검토", description: "윤리 및 동물 복지 위원회가 프로그램 활동을 검토합니다." },
        { number: 5, title: "감사 및 공개", description: "감사 및 투명성 위원회가 성과와 자금 사용을 공개 검토합니다." },
      ],
    },
    cta: {
      title: "거버넌스 문서와 보고서를 검토하세요",
      subtitle: "투명성은 주장이 아닙니다 — 그背後의 보고서와 검증 기준을 확인하세요.",
      primaryLabel: "공개 보고서 보기",
      primaryHref: "/reports",
      secondaryLabel: "WPA에 연락",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "글로벌 지부",
      title: "지역의 행동, 글로벌 조율",
      subtitle: "WPA의 국가 및 도시 지부는 글로벌 기준을 지역 사회에 가져옵니다 — 가장 필요한 곳에서 구조, 입양, 인식개선을 조율합니다.",
      primaryLabel: "지부 설립",
      primaryHref: "/join",
      secondaryLabel: "파트너십 맺기",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "지부의 역할",
      title: "글로벌 네트워크의 지역 레이어",
      paragraphs: [
        "WPA 지부는 특정 국가나 도시에서 활동하는 지역 조정 그룹으로, 구조, 입양, 예방접종, 인식개선에 대한 WPA의 글로벌 기준을 지역 현실에 적용합니다.",
        "각 지부는 검증된 지역 클리닉, NGO, 보호소, 자원봉사자와 협력하며, 투명성과 일관성을 위해 WPA 거버넌스 구조를 통해 활동과 자금 사용을 보고합니다.",
        "이 모델은 WPA가 지역 지식, 규정 준수, 지역사회 신뢰를 희생하지 않으면서 동물 복지 영향을 확대할 수 있게 합니다.",
      ],
    },
    stats: {
      eyebrow: "지부 네트워크",
      title: "성장하는 조율된 글로벌 존재",
      subtitle: "수치는 검증된 파트너와 지역이 참여함에 따라 WPA가 구축하고 있는 조율된 지부 네트워크를 반영합니다.",
      items: [
        { value: "120+", label: "국가 및 도시 지부" },
        { value: "300+", label: "검증된 지역 파트너" },
        { value: "500+", label: "지부 조율 구조팀" },
        { value: "24/7", label: "지역 대응 커버리지 (목표)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "작동 방식",
      title: "글로벌 기준에서 지역 영향까지",
      subtitle: "모든 지부는 동일한 조율 모델을 따르며 지역 환경에 맞게 조정됩니다.",
      steps: [
        { number: 1, title: "지부 설립", description: "WPA의 지부 설립 기준에 따라 지역 위원회가 설립됩니다." },
        { number: 2, title: "파트너 검증", description: "지역 클리닉, NGO, 보호소가 심사를 거쳐 네트워크에 온보딩됩니다." },
        { number: 3, title: "자원봉사자 동원", description: "지부가 구조와 인식개선 활동을 위한 지역 자원봉사자를 모집하고 조율합니다." },
        { number: 4, title: "프로그램 실행", description: "예방접종, 입양 행사, 구조 대응이 공통 기준에 따라 운영됩니다." },
        { number: 5, title: "활동 보고", description: "지부의 성과와 자금 사용이 투명성을 위해 WPA 거버넌스에 보고됩니다." },
      ],
    },
    responsibilities: {
      eyebrow: "지부 책임",
      title: "모든 지부가 약속하는 것",
      subtitle: "지역 자율성에는 공통의 타협할 수 없는 책임이 따릅니다.",
      items: [
        { title: "파트너 검증", description: "심사된 클리닉, NGO, 보호소만 지부 이름으로 활동합니다.", icon: "🔒" },
        { title: "투명한 보고", description: "활동과 자금 사용은 정기적이고 정의된 일정에 보고됩니다.", icon: "📊" },
        { title: "윤리 기준", description: "모든 구조와 돌봄 활동은 WPA의 문서화된 복지 기준을 따릅니다.", icon: "🐾" },
        { title: "지역사회 조율", description: "지부는地方政府 및 지역사회 단체와 열린 소통 채널을 유지합니다.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "당신의 도시나 국가에 WPA 네트워크를 가져오세요",
      subtitle: "지부를 설립하든, 기존 지부에 가입하든, 지역에서 파트너십을 맺든 — 명확한 참여 경로가 있습니다.",
      primaryLabel: "회원 가입",
      primaryHref: "/join",
      secondaryLabel: "WPA에 연락",
      secondaryHref: "/contact",
    },
  },
};

// ─── AR (Arabic) ────────────────────────────────────────────────────────────

const ar: PagesContent = {
  about: {
    hero: {
      eyebrow: "عن World Pet Association",
      title: "منصة عالمية لرعاية الحيوان مبنية على الثقة",
      subtitle: "تربط WPA أصحاب الحيوانات الأليفة والأطباء البيطريين والعيادات والمنظمات غير الحكومية والملاجئ والمتطوعين والمتبرعين في شبكة عالمية واحدة منسقة وشفافة لرعاية الحيوان.",
      primaryLabel: "رسالتنا ورؤيتنا",
      primaryHref: "/mission-vision",
      secondaryLabel: "الحوكمة",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "من نحن",
      title: "منظمة دولية لرعاية حيوان منسقة",
      paragraphs: [
        "World Pet Association (WPA) هي شبكة عالمية غير ربحية تأسست لإضفاء الهيكلية والشفافية والمساءلة على العمل في مجال رعاية الحيوان عبر الدول والمجتمعات.",
        "بدلاً من العمل كجمعية خيرية مركزية واحدة، تعمل WPA كمنصة تنسيق — تربط العيادات البيطرية والمنظمات غير الحكومية والملاجئ والمتطوعين والفروع المحلية والمتبرعين الموثقين بحيث تكون جهود الإنقاذ والتبني والتطعيم والتوعية متسقة وقابلة للتتبع وفعالة على نطاق واسع.",
        "كل برنامج تدعمه WPA — من الاستجابة للإنقاذ الطارئ إلى حملات التطعيم المجتمعية — مصمم ليكون شفافًا بشكل افتراضي، مع إتاحة استخدام الأموال والتحقق من الشركاء والنتائج للمراجعة العامة.",
      ],
    },
    values: {
      eyebrow: "قيمنا",
      title: "المبادئ التي توجّه كل برنامج",
      subtitle: "هذه القيم ليست تصريحات طموحة — إنها المعيار التشغيلي لكل فرع وشريك وبرنامج تحت مظلة WPA.",
      items: [
        { title: "الرحمة", description: "يُعامل كل حيوان بكرامة، بغض النظر عن نوعه أو موقعه أو ظروفه.", icon: "❤️" },
        { title: "النزاهة", description: "نفعل ما نقول — علنًا وباستمرار ودون استثناء.", icon: "🛡️" },
        { title: "الشفافية", description: "استخدام الأموال وحالة الشركاء والنتائج مفتوحة للتدقيق العام.", icon: "🔍" },
        { title: "التعاون", description: "لا يمكن لأي منظمة بمفردها حل مشكلة رعاية الحيوان — نعمل من خلال الشراكة.", icon: "🤝" },
        { title: "المساءلة", description: "يُقيَّم كل فرع وشريك وفق معايير واضحة ومنشورة.", icon: "✅" },
        { title: "الاستدامة", description: "البرامج مصممة لتكون مملوكة محليًا وطويلة الأمد، وليست تدخلات لمرة واحدة.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "لماذا يمكن الوثوق بـ WPA",
      title: "الثقة مبنية في طريقة عملنا",
      subtitle: "الثقة ليست وعدًا — إنها سمة هيكلية في كيفية إدارة WPA وتشغيلها.",
      items: [
        { title: "عمليات شفافة", description: "أنشطة البرامج وأداء الفروع وحالة الشركاء موثقة ومتاحة للمراجعة.", icon: "📊" },
        { title: "إدارة مسؤولة للأموال", description: "تُتبَّع التبرعات من المساهمة إلى إنفاق البرنامج، مع تقارير عامة عن توزيع الأموال.", icon: "💰" },
        { title: "أخلاقيات رعاية الحيوان", description: "تتبع جميع ممارسات الإنقاذ والعلاج والتبني معايير رعاية حيوان موثقة.", icon: "🐾" },
        { title: "التحقق من الشركاء", description: "يتم فحص العيادات والمنظمات غير الحكومية والملاجئ قبل الانضمام إلى الشبكة ومراجعتها باستمرار.", icon: "🔒" },
        { title: "تنسيق الفروع المحلية", description: "تعمل فروع الدول والمدن وفق معايير مشتركة مع بقائها مسؤولة أمام حوكمة WPA.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "من نعمل معه",
      title: "شبكة مبنية لكل صاحب مصلحة في رعاية الحيوان",
      subtitle: "صُممت WPA بحيث يكون لكل مشارك — فردًا كان أو مؤسسة — دور واضح وذو معنى.",
      items: [
        { title: "أصحاب الحيوانات الأليفة", description: "الوصول إلى موارد التبني والتطعيم والملكية المسؤولة عبر شبكة موثوقة.", icon: "🏠" },
        { title: "الأطباء البيطريون", description: "الانضمام إلى شبكة مهنية موثقة للإحالات والحملات والرعاية التعاونية.", icon: "👩‍⚕️" },
        { title: "العيادات", description: "المشاركة في حملات التطعيم وبرامج العلاج مع تقارير شفافة.", icon: "🏥" },
        { title: "المنظمات غير الحكومية", description: "توسيع نطاق رسالتكم من خلال بنية تحتية مشتركة وحملات منسقة.", icon: "🕊️" },
        { title: "الملاجئ", description: "تنسيق الاستقبال والرعاية وتنسيب التبني عبر شبكة فروع WPA.", icon: "🐕" },
        { title: "المتطوعون", description: "المساهمة بالوقت في جهود الإنقاذ والنقل والتوعية المجتمعية.", icon: "🙌" },
        { title: "المتبرعون", description: "تمويل برامج موثقة ومتتبعة مع رؤية كاملة للأثر واستخدام الأموال.", icon: "💛" },
        { title: "الحكومات والمؤسسات الخاصة", description: "الشراكة في مبادرات السياسات والصحة العامة والرعاية واسعة النطاق.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "انضم إلى شبكة عالمية مبنية على الشفافية والثقة",
      subtitle: "أيًا كان دورك — صاحب حيوان أليف أو مختص أو مؤسسة أو داعم — هناك طريقة واضحة للمشاركة.",
      primaryLabel: "كن عضوًا",
      primaryHref: "/join",
      secondaryLabel: "الشراكة مع WPA",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "الرسالة والرؤية",
      title: "لماذا توجد WPA، والعالم الذي نسعى إليه",
      subtitle: "رسالتنا تحدد ما نفعله اليوم. رؤيتنا تحدد العالم الذي نبنيه، برنامجًا منسقًا تلو الآخر.",
      primaryLabel: "عن WPA",
      primaryHref: "/about",
      secondaryLabel: "استكشف البرامج",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "رسالتنا",
      title: "بناء شبكة عالمية شفافة ومنسقة لرعاية الحيوان",
      text: "توجد WPA لربط أصحاب الحيوانات الأليفة والمختصين البيطريين والمنظمات غير الحكومية والملاجئ والمتطوعين والمتبرعين في نظام واحد مسؤول — بحيث تصل برامج الإنقاذ والتبني والتطعيم والتوعية إلى مزيد من الحيوانات، بشكل أكثر موثوقية، مع نتائج قابلة للتحقق واستخدام مسؤول لكل تبرع.",
    },
    vision: {
      eyebrow: "رؤيتنا",
      title: "عالم تُحمى فيه كل الحيوانات، في كل مكان",
      text: "نتخيل مستقبلاً تكون فيه الملكية المسؤولة للحيوانات الأليفة هي القاعدة، حيث لا يُترك أي حيوان في محنة دون الإبلاغ عنه، حيث تكون الرعاية البيطرية والتطعيم متاحين في كل مجتمع، وحيث تكون الأنظمة الداعمة لرعاية الحيوان شفافة وموثوقة مثل أي مؤسسة عامة.",
    },
    values: {
      eyebrow: "القيم في الممارسة",
      title: "المعايير وراء كل برنامج",
      subtitle: "هذه هي نفس القيم التي توجّه عمليات WPA، مترجمة إلى ما تعنيه في الممارسة اليومية.",
      items: [
        { title: "الرحمة أولاً", description: "كل قرار يبدأ بما هو الأفضل للحيوان، وليس ما هو الأسهل.", icon: "❤️" },
        { title: "رعاية قائمة على الأدلة", description: "تتبع ممارسات الإنقاذ والعلاج والتبني معايير بيطرية ومعايير رعاية راسخة.", icon: "🩺" },
        { title: "تقارير مفتوحة", description: "تُنشر النتائج، لا النوايا فقط، وتكون متاحة للمراجعة.", icon: "📄" },
        { title: "ملكية مشتركة", description: "يتم تمكين الفروع المحلية والشركاء، لا مجرد توجيههم من الأعلى.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "مبادئ التشغيل",
      title: "كيف تتحول الرسالة إلى عمل",
      subtitle: "نموذج تشغيلي متسق يحوّل الرسالة والرؤية إلى أثر قابل للقياس والتكرار.",
      steps: [
        { number: 1, title: "وضع معايير قابلة للتحقق", description: "كل مجال برنامج — الإنقاذ، التبني، التطعيم — يعمل وفق معيار منشور." },
        { number: 2, title: "التحقق من كل شريك", description: "تُفحص العيادات والمنظمات غير الحكومية والملاجئ قبل الانضمام، وتُراجع باستمرار." },
        { number: 3, title: "التنسيق عبر الفروع", description: "تطبق الفروع المحلية المعايير العالمية مع التكيف مع الاحتياجات واللوائح الإقليمية." },
        { number: 4, title: "تتبع كل مساهمة", description: "تُسجَّل التبرعات والموارد من الاستلام إلى إنفاق البرنامج." },
        { number: 5, title: "الإبلاغ علنًا", description: "تُنشر النتائج واستخدام الأموال للمتبرعين والشركاء والجمهور." },
      ],
    },
    cta: {
      title: "ادعم رسالة مبنية على أثر قابل للقياس وشفاف",
      subtitle: "كل مساهمة — وقت أو تمويل أو شراكة — تدفع رسالة WPA ورؤيتها إلى الأمام.",
      primaryLabel: "تبرع الآن",
      primaryHref: "/donation",
      secondaryLabel: "كن عضوًا",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "الحوكمة والقيادة",
      title: "هيكل مصمم للمساءلة",
      subtitle: "يفصل نموذج حوكمة WPA بين الرقابة والتنفيذ والتنسيق الإقليمي — بحيث لا تعمل أي جهة واحدة دون مراجعة.",
      primaryLabel: "التقارير العامة",
      primaryHref: "/reports",
      secondaryLabel: "التحقق من الشركاء",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "كيف تُدار WPA",
      title: "حوكمة متعددة الطبقات، لا نقطة تحكم واحدة",
      paragraphs: [
        "تعمل WPA من خلال هيكل حوكمة متعدد الطبقات مصمم للفصل بين وضع السياسات والتنفيذ اليومي والتنسيق الإقليمي — بحيث لا تمتلك أي جهة سلطة غير مقيدة على الأموال أو الشراكات أو قرارات البرامج.",
        "يوجد هذا الهيكل لحماية سلامة الشبكة: يعتمد المتبرعون والشركاء والحيوانات التي نخدمها جميعًا على اتخاذ القرارات من خلال عمليات محددة، لا على التقدير الفردي.",
        "تُتاح وثائق الحوكمة وتقارير استخدام الأموال وسجلات التحقق من الشركاء للجمهور، بما يتماشى مع التزامات WPA بالشفافية.",
      ],
    },
    structure: {
      eyebrow: "الهيكل التنظيمي",
      title: "الهيئات التي تحكم WPA",
      subtitle: "لكل هيئة حاكمة ولاية متميزة، مع خطوط تقارير محددة للحفاظ على السلطة خاضعة للرقابة والمساءلة.",
      items: [
        { title: "مجلس الأمناء", description: "يضع السياسة طويلة الأمد ويوافق على الشراكات الكبرى ويتحمل المسؤولية الائتمانية النهائية عن المنظمة.", icon: "🏛️" },
        { title: "القيادة التنفيذية", description: "تدير العمليات اليومية وتقديم البرامج والتنسيق بين الفروع.", icon: "📋" },
        { title: "مجالس الفروع الإقليمية", description: "تنتخب أو تعيّن فروع الدول والمدن مجالس محلية لتكييف المعايير العالمية مع الاحتياجات الإقليمية.", icon: "🌍" },
        { title: "لجنة الأخلاقيات ورعاية الحيوان", description: "تراجع ممارسات الإنقاذ والعلاج والتبني وفق معايير رعاية موثقة.", icon: "🐾" },
        { title: "لجنة التدقيق والشفافية", description: "تراجع استخدام الأموال بشكل مستقل وتنشر النتائج في تقارير عامة.", icon: "📊" },
        { title: "لجنة استشارية للشركاء", description: "يقدم ممثلو الأطباء البيطريين والمنظمات غير الحكومية والملاجئ المشورة حول تصميم البرامج ومعايير الشركاء.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "تدابير المساءلة",
      title: "كيف تبقى الحوكمة خاضعة للمساءلة عمليًا",
      subtitle: "الهيكل وحده لا يكفي — هذه هي الآليات الملموسة التي تُبقي كل هيئة حاكمة خاضعة للرقابة.",
      items: [
        { title: "تدقيق سنوي مستقل", description: "تُراجع البيانات المالية من قبل جهة مستقلة وتُنشر لإتاحتها للجمهور.", icon: "📄" },
        { title: "سياسة تضارب المصالح", description: "يجب على الأمناء والتنفيذيين الإفصاح عن تضارب المصالح قبل أي قرار شراكة أو تمويل.", icon: "⚖️" },
        { title: "حدود المدة", description: "مدد عضوية المجلس واللجان محدودة ومتداخلة لمنع تركز السلطة.", icon: "⏳" },
        { title: "الإفصاح العام", description: "تُنشر سياسات الحوكمة وهيكلها والقرارات الرئيسية ليراجعها أي شخص.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "مسار القرار",
      title: "كيف ينتقل القرار عبر WPA",
      subtitle: "من السياسة إلى العمل الميداني، يتبع كل قرار مسارًا محددًا وقابلاً للمراجعة.",
      steps: [
        { number: 1, title: "وضع السياسة", description: "يوافق مجلس الأمناء على المعايير والأولويات على مستوى المنظمة." },
        { number: 2, title: "تنفيذ القيادة", description: "تترجم القيادة التنفيذية السياسة إلى برامج تشغيلية." },
        { number: 3, title: "تكييف الفروع", description: "تطبق مجالس الفروع الإقليمية المعايير على السياق واللوائح المحلية." },
        { number: 4, title: "المراجعة الأخلاقية", description: "تراجع لجنة الأخلاقيات ورعاية الحيوان ممارسات البرامج." },
        { number: 5, title: "التدقيق والنشر", description: "تراجع لجنة التدقيق والشفافية النتائج واستخدام الأموال علنًا." },
      ],
    },
    cta: {
      title: "راجع وثائق حوكمتنا وتقاريرنا",
      subtitle: "الشفافية ليست ادعاءً — استكشف التقارير ومعايير التحقق التي تقف خلفها.",
      primaryLabel: "عرض التقارير العامة",
      primaryHref: "/reports",
      secondaryLabel: "تواصل مع WPA",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "الفروع العالمية",
      title: "عمل محلي، منسق عالميًا",
      subtitle: "تجلب فروع WPA في الدول والمدن المعايير العالمية إلى المجتمعات المحلية — منسقة الإنقاذ والتبني والتوعية حيث تشتد الحاجة إليها.",
      primaryLabel: "أسس فرعًا",
      primaryHref: "/join",
      secondaryLabel: "الشراكة معنا",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "كيف تتناسب الفروع",
      title: "الطبقة المحلية لشبكة عالمية",
      paragraphs: [
        "فروع WPA هي مجموعات منسقة محليًا — تعمل في دول أو مدن محددة — تطبق معايير WPA العالمية للإنقاذ والتبني والتطعيم والتوعية على واقع منطقتها.",
        "يعمل كل فرع مع عيادات ومنظمات غير حكومية وملاجئ ومتطوعين محليين موثقين، مع إبلاغ الأنشطة واستخدام الأموال عبر هيكل حوكمة WPA لتحقيق الشفافية والاتساق.",
        "يتيح هذا النموذج لـ WPA توسيع نطاق أثر رعاية الحيوان دون التضحية بالمعرفة المحلية أو الامتثال التنظيمي أو ثقة المجتمع.",
      ],
    },
    stats: {
      eyebrow: "شبكة الفروع",
      title: "حضور عالمي منسق ومتنامٍ",
      subtitle: "تعكس الأرقام شبكة الفروع المنسقة التي تبنيها WPA مع انضمام الشركاء والمناطق الموثقة.",
      items: [
        { value: "120+", label: "فرعًا في الدول والمدن" },
        { value: "300+", label: "شريكًا محليًا موثقًا" },
        { value: "500+", label: "فريق إنقاذ منسق عبر الفروع" },
        { value: "24/7", label: "تغطية استجابة محلية (هدف)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "كيف يعمل الأمر",
      title: "من المعيار العالمي إلى الأثر المحلي",
      subtitle: "يتبع كل فرع نموذج التنسيق نفسه، مع التكيف مع السياق المحلي.",
      steps: [
        { number: 1, title: "تأسيس الفرع", description: "يُنشأ مجلس إقليمي وفق معايير WPA لتأسيس الفروع." },
        { number: 2, title: "التحقق من الشركاء", description: "تُفحص العيادات والمنظمات غير الحكومية والملاجئ المحلية وتُضم إلى الشبكة." },
        { number: 3, title: "تعبئة المتطوعين", description: "يجند الفرع ويُنسق متطوعين محليين للإنقاذ والتوعية." },
        { number: 4, title: "تقديم البرامج", description: "تُنفذ حملات التطعيم وفعاليات التبني والاستجابة للإنقاذ وفق معايير مشتركة." },
        { number: 5, title: "الإبلاغ عن النشاط", description: "تُبلَّغ نتائج الفرع واستخدام الأموال إلى حوكمة WPA لتحقيق الشفافية." },
      ],
    },
    responsibilities: {
      eyebrow: "مسؤوليات الفرع",
      title: "ما يلتزم به كل فرع",
      subtitle: "الاستقلالية المحلية تأتي مع مسؤوليات مشتركة غير قابلة للتفاوض.",
      items: [
        { title: "التحقق من الشركاء", description: "فقط العيادات والمنظمات غير الحكومية والملاجئ الموثقة تعمل تحت اسم الفرع.", icon: "🔒" },
        { title: "تقارير شفافة", description: "يُبلَّغ عن النشاط واستخدام الأموال وفق جدول زمني منتظم ومحدد.", icon: "📊" },
        { title: "معايير أخلاقية", description: "تتبع جميع ممارسات الإنقاذ والرعاية معايير رعاية موثقة لدى WPA.", icon: "🐾" },
        { title: "تنسيق مجتمعي", description: "تحافظ الفروع على قنوات مفتوحة مع الحكومة المحلية والمجموعات المجتمعية.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "أحضر شبكة WPA إلى مدينتك أو بلدك",
      subtitle: "سواء أردت تأسيس فرع أو الانضمام إلى فرع قائم أو الشراكة محليًا — هناك مسار واضح للمشاركة.",
      primaryLabel: "كن عضوًا",
      primaryHref: "/join",
      secondaryLabel: "تواصل مع WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── FR (French) ────────────────────────────────────────────────────────────

const fr: PagesContent = {
  about: {
    hero: {
      eyebrow: "À propos de World Pet Association",
      title: "Une plateforme mondiale pour le bien-être animal, fondée sur la confiance",
      subtitle: "WPA relie propriétaires d'animaux, vétérinaires, cliniques, ONG, refuges, bénévoles et donateurs au sein d'un réseau mondial coordonné et transparent pour le bien-être animal.",
      primaryLabel: "Notre mission et vision",
      primaryHref: "/mission-vision",
      secondaryLabel: "Gouvernance",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "Qui nous sommes",
      title: "Une organisation internationale pour un bien-être animal coordonné",
      paragraphs: [
        "World Pet Association (WPA) est un réseau mondial à but non lucratif créé pour apporter structure, transparence et redevabilité au travail en faveur du bien-être animal à travers les pays et les communautés.",
        "Plutôt que de fonctionner comme une organisation caritative unique et centralisée, WPA agit comme une plateforme de coordination — reliant cliniques vétérinaires vérifiées, ONG, refuges, bénévoles, chapitres locaux et donateurs afin que les efforts de sauvetage, d'adoption, de vaccination et d'éducation soient cohérents, traçables et efficaces à grande échelle.",
        "Chaque programme soutenu par WPA — de l'intervention d'urgence aux campagnes de vaccination communautaires — est conçu pour être transparent par défaut, avec l'utilisation des fonds, la vérification des partenaires et les résultats disponibles pour un examen public.",
      ],
    },
    values: {
      eyebrow: "Nos valeurs",
      title: "Les principes qui guident chaque programme",
      subtitle: "Ces valeurs ne sont pas de simples aspirations — elles constituent la norme opérationnelle de chaque chapitre, partenaire et programme au sein de WPA.",
      items: [
        { title: "Compassion", description: "Chaque animal est traité avec dignité, quels que soient son espèce, son lieu ou sa situation.", icon: "❤️" },
        { title: "Intégrité", description: "Nous faisons ce que nous disons — publiquement, systématiquement et sans exception.", icon: "🛡️" },
        { title: "Transparence", description: "L'utilisation des fonds, le statut des partenaires et les résultats sont ouverts à l'examen public.", icon: "🔍" },
        { title: "Collaboration", description: "Aucune organisation seule ne peut résoudre le problème du bien-être animal — nous travaillons en partenariat.", icon: "🤝" },
        { title: "Redevabilité", description: "Chaque chapitre et partenaire est évalué selon des normes claires et publiées.", icon: "✅" },
        { title: "Durabilité", description: "Les programmes sont conçus pour être détenus localement et pérennes, et non des interventions ponctuelles.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "Pourquoi WPA est digne de confiance",
      title: "La confiance est intégrée à notre fonctionnement",
      subtitle: "La confiance n'est pas une promesse — c'est une caractéristique structurelle de la manière dont WPA est gouvernée et gérée.",
      items: [
        { title: "Opérations transparentes", description: "L'activité des programmes, la performance des chapitres et le statut des partenaires sont documentés et disponibles pour examen.", icon: "📊" },
        { title: "Gestion responsable des fonds", description: "Les dons sont suivis de la contribution à la dépense du programme, avec des rapports publics sur l'allocation des fonds.", icon: "💰" },
        { title: "Éthique du bien-être animal", description: "Toutes les pratiques de sauvetage, de traitement et d'adoption suivent des normes documentées de bien-être animal.", icon: "🐾" },
        { title: "Vérification des partenaires", description: "Cliniques, ONG et refuges sont contrôlés avant de rejoindre le réseau et réévalués en continu.", icon: "🔒" },
        { title: "Coordination des chapitres locaux", description: "Les chapitres nationaux et municipaux opèrent selon des normes communes tout en restant redevables devant la gouvernance de WPA.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "Avec qui nous travaillons",
      title: "Un réseau conçu pour chaque partie prenante du bien-être animal",
      subtitle: "WPA est conçue pour que chaque participant — individuel ou institutionnel — ait un rôle clair et significatif.",
      items: [
        { title: "Propriétaires d'animaux", description: "Accédez à des ressources d'adoption, de vaccination et de possession responsable via un réseau de confiance.", icon: "🏠" },
        { title: "Vétérinaires", description: "Rejoignez un réseau professionnel vérifié pour les orientations, les campagnes et les soins collaboratifs.", icon: "👩‍⚕️" },
        { title: "Cliniques", description: "Participez aux campagnes de vaccination et aux programmes de traitement avec des rapports transparents.", icon: "🏥" },
        { title: "ONG", description: "Étendez la portée de votre mission grâce à une infrastructure partagée et des campagnes coordonnées.", icon: "🕊️" },
        { title: "Refuges", description: "Coordonnez l'accueil, les soins et le placement en adoption via le réseau de chapitres de WPA.", icon: "🐕" },
        { title: "Bénévoles", description: "Contribuez de votre temps aux efforts de sauvetage, de transport et de sensibilisation communautaire.", icon: "🙌" },
        { title: "Donateurs", description: "Financez des programmes vérifiés et suivis avec une visibilité totale sur l'impact et l'utilisation des fonds.", icon: "💛" },
        { title: "Gouvernements et organisations privées", description: "Devenez partenaire sur les politiques, la santé publique et les initiatives de bien-être à grande échelle.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Rejoignez un réseau mondial fondé sur la transparence et la confiance",
      subtitle: "Quel que soit votre rôle — propriétaire d'animal, professionnel, organisation ou soutien — il existe un moyen clair de s'impliquer.",
      primaryLabel: "Devenir membre",
      primaryHref: "/join",
      secondaryLabel: "Devenir partenaire de WPA",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "Mission et vision",
      title: "Pourquoi WPA existe, et le monde vers lequel nous œuvrons",
      subtitle: "Notre mission définit ce que nous faisons aujourd'hui. Notre vision définit le monde que nous construisons, un programme coordonné à la fois.",
      primaryLabel: "À propos de WPA",
      primaryHref: "/about",
      secondaryLabel: "Découvrir les programmes",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "Notre mission",
      title: "Construire un réseau mondial transparent et coordonné pour le bien-être animal",
      text: "WPA existe pour relier propriétaires d'animaux, professionnels vétérinaires, ONG, refuges, bénévoles et donateurs au sein d'un système redevable — afin que les programmes de sauvetage, d'adoption, de vaccination et d'éducation atteignent davantage d'animaux, de manière plus fiable, avec des résultats vérifiables et une utilisation responsable de chaque don.",
    },
    vision: {
      eyebrow: "Notre vision",
      title: "Un monde où chaque animal est protégé, partout",
      text: "Nous envisageons un avenir où la possession responsable d'animaux est la norme, où aucun animal en détresse ne reste sans signalement, où les soins vétérinaires et la vaccination sont accessibles dans chaque communauté, et où les systèmes soutenant le bien-être animal sont aussi transparents et fiables que toute institution publique.",
    },
    values: {
      eyebrow: "Les valeurs en action",
      title: "Les normes derrière chaque programme",
      subtitle: "Ce sont les mêmes valeurs qui guident les opérations de WPA, traduites en ce qu'elles signifient dans la pratique quotidienne.",
      items: [
        { title: "La compassion d'abord", description: "Chaque décision commence par ce qui est le mieux pour l'animal, et non par ce qui est le plus commode.", icon: "❤️" },
        { title: "Soins fondés sur des données probantes", description: "Les pratiques de sauvetage, de traitement et d'adoption suivent des normes vétérinaires et de bien-être établies.", icon: "🩺" },
        { title: "Rapports ouverts", description: "Les résultats, et pas seulement les intentions, sont publiés et disponibles pour examen.", icon: "📄" },
        { title: "Appropriation partagée", description: "Les chapitres locaux et les partenaires sont responsabilisés, et non simplement dirigés d'en haut.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "Principes opérationnels",
      title: "Comment la mission se transforme en action",
      subtitle: "Un modèle opérationnel cohérent qui transforme mission et vision en impact mesurable et reproductible.",
      steps: [
        { number: 1, title: "Établir des normes vérifiables", description: "Chaque domaine de programme — sauvetage, adoption, vaccination — fonctionne selon une norme publiée." },
        { number: 2, title: "Vérifier chaque partenaire", description: "Cliniques, ONG et refuges sont contrôlés avant de rejoindre le réseau, puis réévalués en continu." },
        { number: 3, title: "Coordonner via les chapitres", description: "Les chapitres locaux appliquent les normes mondiales tout en s'adaptant aux besoins et réglementations régionales." },
        { number: 4, title: "Suivre chaque contribution", description: "Les dons et ressources sont enregistrés de la réception à la dépense du programme." },
        { number: 5, title: "Rendre compte publiquement", description: "Les résultats et l'utilisation des fonds sont publiés pour les donateurs, les partenaires et le public." },
      ],
    },
    cta: {
      title: "Soutenez une mission fondée sur un impact mesurable et transparent",
      subtitle: "Chaque contribution — temps, financement ou partenariat — fait avancer la mission et la vision de WPA.",
      primaryLabel: "Faire un don",
      primaryHref: "/donation",
      secondaryLabel: "Devenir membre",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "Gouvernance et direction",
      title: "Une structure conçue pour la redevabilité",
      subtitle: "Le modèle de gouvernance de WPA sépare la supervision, l'exécution et la coordination régionale — afin qu'aucun organe unique n'opère sans contrôle.",
      primaryLabel: "Rapports publics",
      primaryHref: "/reports",
      secondaryLabel: "Vérification des partenaires",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Comment WPA est gouvernée",
      title: "Une gouvernance en plusieurs niveaux, pas un point de contrôle unique",
      paragraphs: [
        "WPA fonctionne selon une structure de gouvernance à plusieurs niveaux conçue pour séparer l'élaboration des politiques, l'exécution quotidienne et la coordination régionale — afin qu'aucun groupe unique n'ait d'autorité incontrôlée sur les fonds, les partenariats ou les décisions de programme.",
        "Cette structure existe pour protéger l'intégrité du réseau : les donateurs, les partenaires et les animaux que nous servons dépendent tous de décisions prises selon des processus définis, et non selon la discrétion individuelle.",
        "La documentation de gouvernance, les rapports sur l'utilisation des fonds et les dossiers de vérification des partenaires sont rendus publics, conformément aux engagements de transparence de WPA.",
      ],
    },
    structure: {
      eyebrow: "Structure organisationnelle",
      title: "Les organes qui gouvernent WPA",
      subtitle: "Chaque organe de gouvernance a un mandat distinct, avec des lignes de reporting définies pour maintenir l'autorité contrôlée et redevable.",
      items: [
        { title: "Conseil d'administration", description: "Établit la politique à long terme, approuve les partenariats majeurs et assume la responsabilité fiduciaire ultime de l'organisation.", icon: "🏛️" },
        { title: "Direction exécutive", description: "Gère les opérations quotidiennes, la mise en œuvre des programmes et la coordination inter-chapitres.", icon: "📋" },
        { title: "Conseils régionaux de chapitres", description: "Les chapitres nationaux et municipaux élisent ou nomment des conseils locaux pour adapter les normes mondiales aux besoins régionaux.", icon: "🌍" },
        { title: "Comité d'éthique et de bien-être animal", description: "Examine les pratiques de sauvetage, de traitement et d'adoption au regard de normes de bien-être documentées.", icon: "🐾" },
        { title: "Comité d'audit et de transparence", description: "Examine de manière indépendante l'utilisation des fonds et publie les conclusions dans des rapports publics.", icon: "📊" },
        { title: "Panel consultatif des partenaires", description: "Des représentants vétérinaires, d'ONG et de refuges conseillent sur la conception des programmes et les normes des partenaires.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "Mesures de redevabilité",
      title: "Comment la gouvernance reste redevable en pratique",
      subtitle: "La structure seule ne suffit pas — voici les mécanismes concrets qui maintiennent chaque organe de gouvernance sous contrôle.",
      items: [
        { title: "Audits annuels indépendants", description: "Les états financiers sont examinés par un tiers indépendant et publiés pour un accès public.", icon: "📄" },
        { title: "Politique de conflit d'intérêts", description: "Administrateurs et dirigeants doivent divulguer tout conflit avant toute décision de partenariat ou de financement.", icon: "⚖️" },
        { title: "Limites de mandat", description: "Les mandats du conseil et des comités sont limités et échelonnés pour éviter la concentration de l'autorité.", icon: "⏳" },
        { title: "Divulgation publique", description: "Politiques de gouvernance, structure et décisions clés sont publiées pour que chacun puisse les examiner.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "Flux de décision",
      title: "Comment une décision circule au sein de WPA",
      subtitle: "De la politique à l'action sur le terrain, chaque décision suit un parcours défini et vérifiable.",
      steps: [
        { number: 1, title: "Politique établie", description: "Le conseil d'administration approuve les normes et priorités à l'échelle de l'organisation." },
        { number: 2, title: "Exécutée par la direction", description: "La direction exécutive traduit la politique en programmes opérationnels." },
        { number: 3, title: "Adaptée par les chapitres", description: "Les conseils régionaux de chapitres appliquent les normes au contexte et à la réglementation locaux." },
        { number: 4, title: "Examinée sur le plan éthique", description: "Le comité d'éthique et de bien-être animal examine les pratiques des programmes." },
        { number: 5, title: "Auditée et publiée", description: "Le comité d'audit et de transparence examine publiquement les résultats et l'utilisation des fonds." },
      ],
    },
    cta: {
      title: "Consultez notre documentation de gouvernance et nos rapports",
      subtitle: "La transparence n'est pas une affirmation — explorez les rapports et les normes de vérification qui la sous-tendent.",
      primaryLabel: "Voir les rapports publics",
      primaryHref: "/reports",
      secondaryLabel: "Contacter WPA",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "Chapitres mondiaux",
      title: "Action locale, coordonnée mondialement",
      subtitle: "Les chapitres nationaux et municipaux de WPA apportent des normes mondiales aux communautés locales — coordonnant sauvetage, adoption et sensibilisation là où c'est le plus nécessaire.",
      primaryLabel: "Créer un chapitre",
      primaryHref: "/join",
      secondaryLabel: "Devenir partenaire",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Comment s'intègrent les chapitres",
      title: "La couche locale d'un réseau mondial",
      paragraphs: [
        "Les chapitres de WPA sont des groupes coordonnés localement — opérant dans des pays ou villes spécifiques — qui appliquent les normes mondiales de WPA en matière de sauvetage, d'adoption, de vaccination et de sensibilisation aux réalités de leur région.",
        "Chaque chapitre travaille avec des cliniques, ONG, refuges et bénévoles locaux vérifiés, tout en communiquant l'activité et l'utilisation des fonds via la structure de gouvernance de WPA pour assurer transparence et cohérence.",
        "Ce modèle permet à WPA d'accroître son impact en matière de bien-être animal sans sacrifier la connaissance locale, la conformité réglementaire ou la confiance de la communauté.",
      ],
    },
    stats: {
      eyebrow: "Réseau de chapitres",
      title: "Une présence mondiale coordonnée et croissante",
      subtitle: "Les chiffres reflètent le réseau de chapitres coordonné que WPA construit à mesure que des partenaires et régions vérifiés rejoignent le réseau.",
      items: [
        { value: "120+", label: "Chapitres nationaux et municipaux" },
        { value: "300+", label: "Partenaires locaux vérifiés" },
        { value: "500+", label: "Équipes de sauvetage coordonnées par les chapitres" },
        { value: "24/7", label: "Couverture de réponse locale (objectif)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "Comment cela fonctionne",
      title: "De la norme mondiale à l'impact local",
      subtitle: "Chaque chapitre suit le même modèle de coordination, adapté au contexte local.",
      steps: [
        { number: 1, title: "Chapitre créé", description: "Un conseil régional est établi, selon les normes de création de chapitre de WPA." },
        { number: 2, title: "Partenaires vérifiés", description: "Cliniques, ONG et refuges locaux sont contrôlés et intégrés au réseau." },
        { number: 3, title: "Bénévoles mobilisés", description: "Le chapitre recrute et coordonne des bénévoles locaux pour le sauvetage et la sensibilisation." },
        { number: 4, title: "Programmes mis en œuvre", description: "Campagnes de vaccination, événements d'adoption et réponses de sauvetage se déroulent selon des normes communes." },
        { number: 5, title: "Activité rapportée", description: "Les résultats et l'utilisation des fonds du chapitre sont rapportés à la gouvernance de WPA pour la transparence." },
      ],
    },
    responsibilities: {
      eyebrow: "Responsabilités du chapitre",
      title: "Ce à quoi chaque chapitre s'engage",
      subtitle: "L'autonomie locale s'accompagne de responsabilités communes et non négociables.",
      items: [
        { title: "Vérification des partenaires", description: "Seuls les cliniques, ONG et refuges contrôlés opèrent sous le nom du chapitre.", icon: "🔒" },
        { title: "Rapports transparents", description: "L'activité et l'utilisation des fonds sont rapportées selon un calendrier régulier et défini.", icon: "📊" },
        { title: "Normes éthiques", description: "Toutes les pratiques de sauvetage et de soin suivent les normes de bien-être documentées de WPA.", icon: "🐾" },
        { title: "Coordination communautaire", description: "Les chapitres maintiennent des canaux ouverts avec le gouvernement local et les groupes communautaires.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Apportez le réseau de WPA dans votre ville ou pays",
      subtitle: "Que vous souhaitiez créer un chapitre, en rejoindre un existant ou devenir partenaire localement — il existe un parcours défini pour vous impliquer.",
      primaryLabel: "Devenir membre",
      primaryHref: "/join",
      secondaryLabel: "Contacter WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── ES (Spanish) ───────────────────────────────────────────────────────────

const es: PagesContent = {
  about: {
    hero: {
      eyebrow: "Acerca de World Pet Association",
      title: "Una plataforma global para el bienestar animal, construida sobre la confianza",
      subtitle: "WPA conecta a propietarios de mascotas, veterinarios, clínicas, ONG, refugios, voluntarios y donantes en una red mundial coordinada y transparente para el bienestar animal.",
      primaryLabel: "Nuestra misión y visión",
      primaryHref: "/mission-vision",
      secondaryLabel: "Gobernanza",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "Quiénes somos",
      title: "Una organización internacional para el bienestar animal coordinado",
      paragraphs: [
        "World Pet Association (WPA) es una red mundial sin fines de lucro creada para aportar estructura, transparencia y rendición de cuentas al trabajo de bienestar animal en países y comunidades.",
        "En lugar de operar como una entidad benéfica única y centralizada, WPA funciona como una plataforma de coordinación, conectando clínicas veterinarias verificadas, ONG, refugios, voluntarios, capítulos locales y donantes para que los esfuerzos de rescate, adopción, vacunación y educación sean coherentes, rastreables y eficaces a gran escala.",
        "Cada programa que WPA apoya —desde la respuesta de rescate de emergencia hasta las campañas comunitarias de vacunación— está diseñado para ser transparente por defecto, con el uso de los fondos, la verificación de socios y los resultados disponibles para revisión pública.",
      ],
    },
    values: {
      eyebrow: "Nuestros valores",
      title: "Principios que guían cada programa",
      subtitle: "Estos valores no son declaraciones aspiracionales, sino el estándar operativo de cada capítulo, socio y programa dentro de WPA.",
      items: [
        { title: "Compasión", description: "Todos los animales son tratados con dignidad, sin importar su especie, ubicación o circunstancia.", icon: "❤️" },
        { title: "Integridad", description: "Hacemos lo que decimos, pública y sistemáticamente, sin excepción.", icon: "🛡️" },
        { title: "Transparencia", description: "El uso de los fondos, el estado de los socios y los resultados están abiertos al escrutinio público.", icon: "🔍" },
        { title: "Colaboración", description: "Ninguna organización puede resolver por sí sola el bienestar animal; trabajamos mediante alianzas.", icon: "🤝" },
        { title: "Rendición de cuentas", description: "Cada capítulo y socio se evalúa según estándares claros y publicados.", icon: "✅" },
        { title: "Sostenibilidad", description: "Los programas están diseñados para ser gestionados localmente y a largo plazo, no intervenciones puntuales.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "Por qué se puede confiar en WPA",
      title: "La confianza está integrada en cómo operamos",
      subtitle: "La confianza no es una promesa, es una característica estructural de cómo se gobierna y gestiona WPA.",
      items: [
        { title: "Operaciones transparentes", description: "La actividad de los programas, el desempeño de los capítulos y el estado de los socios están documentados y disponibles para revisión.", icon: "📊" },
        { title: "Gestión responsable de fondos", description: "Las donaciones se rastrean desde la contribución hasta el gasto del programa, con informes públicos sobre la asignación de fondos.", icon: "💰" },
        { title: "Ética del bienestar animal", description: "Todas las prácticas de rescate, tratamiento y adopción siguen estándares documentados de bienestar animal.", icon: "🐾" },
        { title: "Verificación de socios", description: "Clínicas, ONG y refugios son evaluados antes de unirse a la red y revisados de forma continua.", icon: "🔒" },
        { title: "Coordinación de capítulos locales", description: "Los capítulos de país y ciudad operan bajo estándares compartidos, siendo responsables ante la gobernanza de WPA.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "Con quién trabajamos",
      title: "Una red creada para cada parte interesada en el bienestar animal",
      subtitle: "WPA está diseñada para que cada participante, individual o institucional, tenga un rol claro y significativo.",
      items: [
        { title: "Propietarios de mascotas", description: "Accedan a recursos de adopción, vacunación y tenencia responsable a través de una red confiable.", icon: "🏠" },
        { title: "Veterinarios", description: "Únanse a una red profesional verificada para referencias, campañas y atención colaborativa.", icon: "👩‍⚕️" },
        { title: "Clínicas", description: "Participen en campañas de vacunación y programas de tratamiento con informes transparentes.", icon: "🏥" },
        { title: "ONG", description: "Amplíen el alcance de su misión mediante infraestructura compartida y campañas coordinadas.", icon: "🕊️" },
        { title: "Refugios", description: "Coordinen ingresos, cuidado y colocación en adopción a través de la red de capítulos de WPA.", icon: "🐕" },
        { title: "Voluntarios", description: "Aporten tiempo a esfuerzos de rescate, transporte y difusión comunitaria.", icon: "🙌" },
        { title: "Donantes", description: "Financien programas verificados y rastreados con total visibilidad del impacto y uso de los fondos.", icon: "💛" },
        { title: "Gobiernos y organizaciones privadas", description: "Colaboren en políticas, salud pública e iniciativas de bienestar a gran escala.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Únase a una red global construida sobre la transparencia y la confianza",
      subtitle: "Sea cual sea su rol —propietario de mascota, profesional, organización o simpatizante—, hay una forma clara de participar.",
      primaryLabel: "Hazte miembro",
      primaryHref: "/join",
      secondaryLabel: "Asóciese con WPA",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "Misión y visión",
      title: "Por qué existe WPA, y el mundo hacia el que trabajamos",
      subtitle: "Nuestra misión define lo que hacemos hoy. Nuestra visión define el mundo que estamos construyendo, un programa coordinado a la vez.",
      primaryLabel: "Acerca de WPA",
      primaryHref: "/about",
      secondaryLabel: "Explorar programas",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "Nuestra misión",
      title: "Construir una red global transparente y coordinada para el bienestar animal",
      text: "WPA existe para conectar a propietarios de mascotas, profesionales veterinarios, ONG, refugios, voluntarios y donantes en un sistema responsable, de modo que los programas de rescate, adopción, vacunación y educación lleguen a más animales, de manera más confiable, con resultados verificables y un uso responsable de cada donación.",
    },
    vision: {
      eyebrow: "Nuestra visión",
      title: "Un mundo donde todos los animales estén protegidos, en todas partes",
      text: "Imaginamos un futuro en el que la tenencia responsable de mascotas sea la norma, donde ningún animal en peligro quede sin ser reportado, donde la atención veterinaria y la vacunación sean accesibles en cada comunidad, y donde los sistemas que sustentan el bienestar animal sean tan transparentes y confiables como cualquier institución pública.",
    },
    values: {
      eyebrow: "Valores en acción",
      title: "Los estándares detrás de cada programa",
      subtitle: "Son los mismos valores que guían las operaciones de WPA, traducidos a lo que significan en la práctica diaria.",
      items: [
        { title: "Compasión primero", description: "Toda decisión comienza con lo que es mejor para el animal, no con lo que resulta conveniente.", icon: "❤️" },
        { title: "Cuidado basado en evidencia", description: "Las prácticas de rescate, tratamiento y adopción siguen estándares veterinarios y de bienestar establecidos.", icon: "🩺" },
        { title: "Informes abiertos", description: "Se publican los resultados, no solo las intenciones, y están disponibles para revisión.", icon: "📄" },
        { title: "Propiedad compartida", description: "Los capítulos locales y socios son empoderados, no simplemente dirigidos desde arriba.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "Principios operativos",
      title: "Cómo la misión se convierte en acción",
      subtitle: "Un modelo operativo coherente que convierte la misión y la visión en un impacto medible y repetible.",
      steps: [
        { number: 1, title: "Establecer estándares verificables", description: "Cada área de programa —rescate, adopción, vacunación— opera según un estándar publicado." },
        { number: 2, title: "Verificar a cada socio", description: "Clínicas, ONG y refugios son evaluados antes de unirse y revisados de forma continua." },
        { number: 3, title: "Coordinar a través de capítulos", description: "Los capítulos locales aplican estándares globales adaptándose a necesidades y normativas regionales." },
        { number: 4, title: "Rastrear cada contribución", description: "Las donaciones y recursos se registran desde su recepción hasta el gasto del programa." },
        { number: 5, title: "Informar públicamente", description: "Los resultados y el uso de los fondos se publican para donantes, socios y el público." },
      ],
    },
    cta: {
      title: "Apoye una misión basada en un impacto medible y transparente",
      subtitle: "Cada contribución —tiempo, financiamiento o alianza— impulsa la misión y visión de WPA.",
      primaryLabel: "Donar ahora",
      primaryHref: "/donation",
      secondaryLabel: "Hazte miembro",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "Gobernanza y liderazgo",
      title: "Una estructura diseñada para la rendición de cuentas",
      subtitle: "El modelo de gobernanza de WPA separa la supervisión, la ejecución y la coordinación regional, para que ningún organismo opere sin revisión.",
      primaryLabel: "Informes públicos",
      primaryHref: "/reports",
      secondaryLabel: "Verificación de socios",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Cómo se gobierna WPA",
      title: "Gobernanza en capas, no un único punto de control",
      paragraphs: [
        "WPA opera mediante una estructura de gobernanza en capas diseñada para separar la definición de políticas, la ejecución diaria y la coordinación regional, de modo que ningún grupo tenga autoridad sin control sobre fondos, alianzas o decisiones de programas.",
        "Esta estructura existe para proteger la integridad de la red: donantes, socios y los animales a los que servimos dependen de que las decisiones se tomen mediante procesos definidos, no según el criterio individual.",
        "La documentación de gobernanza, los informes de uso de fondos y los registros de verificación de socios se ponen a disposición del público, conforme a los compromisos de transparencia de WPA.",
      ],
    },
    structure: {
      eyebrow: "Estructura organizativa",
      title: "Los órganos que gobiernan WPA",
      subtitle: "Cada órgano de gobierno tiene un mandato distinto, con líneas de reporte definidas para mantener la autoridad controlada y responsable.",
      items: [
        { title: "Junta de fideicomisarios", description: "Establece la política a largo plazo, aprueba alianzas importantes y asume la responsabilidad fiduciaria última de la organización.", icon: "🏛️" },
        { title: "Liderazgo ejecutivo", description: "Gestiona las operaciones diarias, la entrega de programas y la coordinación entre capítulos.", icon: "📋" },
        { title: "Consejos regionales de capítulos", description: "Los capítulos de país y ciudad eligen o designan consejos locales para adaptar los estándares globales a las necesidades regionales.", icon: "🌍" },
        { title: "Comité de ética y bienestar animal", description: "Revisa las prácticas de rescate, tratamiento y adopción frente a estándares de bienestar documentados.", icon: "🐾" },
        { title: "Comité de auditoría y transparencia", description: "Revisa de forma independiente el uso de fondos y publica los hallazgos en informes públicos.", icon: "📊" },
        { title: "Panel asesor de socios", description: "Representantes veterinarios, de ONG y de refugios asesoran sobre el diseño de programas y los estándares de los socios.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "Medidas de rendición de cuentas",
      title: "Cómo la gobernanza se mantiene responsable en la práctica",
      subtitle: "La estructura por sí sola no basta; estos son los mecanismos concretos que mantienen a cada órgano de gobierno bajo control.",
      items: [
        { title: "Auditorías anuales independientes", description: "Los estados financieros son revisados por un tercero independiente y publicados para acceso público.", icon: "📄" },
        { title: "Política de conflicto de intereses", description: "Los fideicomisarios y ejecutivos deben divulgar conflictos antes de cualquier decisión de alianza o financiamiento.", icon: "⚖️" },
        { title: "Límites de mandato", description: "Los mandatos de la junta y comités son limitados y escalonados para evitar la concentración de autoridad.", icon: "⏳" },
        { title: "Divulgación pública", description: "Las políticas de gobernanza, la estructura y las decisiones clave se publican para que cualquiera pueda revisarlas.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "Flujo de decisiones",
      title: "Cómo se mueve una decisión dentro de WPA",
      subtitle: "De la política a la acción sobre el terreno, cada decisión sigue una ruta definida y revisable.",
      steps: [
        { number: 1, title: "Política establecida", description: "La junta de fideicomisarios aprueba estándares y prioridades para toda la organización." },
        { number: 2, title: "Ejecutada por el liderazgo", description: "El liderazgo ejecutivo traduce la política en programas operativos." },
        { number: 3, title: "Adaptada por los capítulos", description: "Los consejos regionales de capítulos aplican los estándares al contexto y la normativa locales." },
        { number: 4, title: "Revisada por ética", description: "El comité de ética y bienestar animal revisa las prácticas de los programas." },
        { number: 5, title: "Auditada y publicada", description: "El comité de auditoría y transparencia revisa públicamente los resultados y el uso de los fondos." },
      ],
    },
    cta: {
      title: "Revise nuestra documentación de gobernanza e informes",
      subtitle: "La transparencia no es una afirmación: explore los informes y los estándares de verificación detrás de ella.",
      primaryLabel: "Ver informes públicos",
      primaryHref: "/reports",
      secondaryLabel: "Contactar a WPA",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "Capítulos globales",
      title: "Acción local, coordinada globalmente",
      subtitle: "Los capítulos de país y ciudad de WPA llevan estándares globales a las comunidades locales, coordinando rescate, adopción y concientización donde más importa.",
      primaryLabel: "Iniciar un capítulo",
      primaryHref: "/join",
      secondaryLabel: "Asóciese con nosotros",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Cómo encajan los capítulos",
      title: "La capa local de una red global",
      paragraphs: [
        "Los capítulos de WPA son grupos coordinados localmente —que operan en países o ciudades específicos— que aplican los estándares globales de WPA en rescate, adopción, vacunación y concientización a la realidad de su región.",
        "Cada capítulo trabaja con clínicas, ONG, refugios y voluntarios locales verificados, mientras informa la actividad y el uso de fondos a través de la estructura de gobernanza de WPA para lograr transparencia y coherencia.",
        "Este modelo permite a WPA escalar el impacto en el bienestar animal sin sacrificar el conocimiento local, el cumplimiento normativo o la confianza de la comunidad.",
      ],
    },
    stats: {
      eyebrow: "Red de capítulos",
      title: "Una presencia global coordinada y en crecimiento",
      subtitle: "Las cifras reflejan la red de capítulos coordinada que WPA está construyendo a medida que se suman socios y regiones verificados.",
      items: [
        { value: "120+", label: "Capítulos de país y ciudad" },
        { value: "300+", label: "Socios locales verificados" },
        { value: "500+", label: "Equipos de rescate coordinados por capítulos" },
        { value: "24/7", label: "Cobertura de respuesta local (meta)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "Cómo funciona",
      title: "Del estándar global al impacto local",
      subtitle: "Cada capítulo sigue el mismo modelo de coordinación, adaptado al contexto local.",
      steps: [
        { number: 1, title: "Capítulo formado", description: "Se establece un consejo regional siguiendo los estándares de formación de capítulos de WPA." },
        { number: 2, title: "Socios verificados", description: "Clínicas, ONG y refugios locales son evaluados e incorporados a la red." },
        { number: 3, title: "Voluntarios movilizados", description: "El capítulo recluta y coordina voluntarios locales para el rescate y la difusión." },
        { number: 4, title: "Programas entregados", description: "Campañas de vacunación, eventos de adopción y respuesta de rescate operan bajo estándares compartidos." },
        { number: 5, title: "Actividad reportada", description: "Los resultados y el uso de fondos del capítulo se reportan a la gobernanza de WPA para la transparencia." },
      ],
    },
    responsibilities: {
      eyebrow: "Responsabilidades del capítulo",
      title: "A lo que se compromete cada capítulo",
      subtitle: "La autonomía local viene acompañada de responsabilidades compartidas e innegociables.",
      items: [
        { title: "Verificación de socios", description: "Solo clínicas, ONG y refugios evaluados operan bajo el nombre del capítulo.", icon: "🔒" },
        { title: "Informes transparentes", description: "La actividad y el uso de fondos se reportan según un cronograma regular y definido.", icon: "📊" },
        { title: "Estándares éticos", description: "Todas las prácticas de rescate y cuidado siguen los estándares de bienestar documentados de WPA.", icon: "🐾" },
        { title: "Coordinación comunitaria", description: "Los capítulos mantienen canales abiertos con el gobierno local y grupos comunitarios.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Traiga la red de WPA a su ciudad o país",
      subtitle: "Ya sea que desee iniciar un capítulo, unirse a uno existente o asociarse localmente, hay un camino definido para participar.",
      primaryLabel: "Hazte miembro",
      primaryHref: "/join",
      secondaryLabel: "Contactar a WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── RU (Russian) ───────────────────────────────────────────────────────────

const ru: PagesContent = {
  about: {
    hero: {
      eyebrow: "О World Pet Association",
      title: "Глобальная платформа для защиты животных, основанная на доверии",
      subtitle: "WPA объединяет владельцев домашних животных, ветеринаров, клиники, НКО, приюты, волонтёров и доноров в единую скоординированную, прозрачную сеть по всему миру для защиты животных.",
      primaryLabel: "Наша миссия и видение",
      primaryHref: "/mission-vision",
      secondaryLabel: "Управление",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "Кто мы",
      title: "Международная организация для скоординированной защиты животных",
      paragraphs: [
        "World Pet Association (WPA) — это глобальная некоммерческая сеть, созданная для внесения структуры, прозрачности и подотчётности в работу по защите животных в разных странах и сообществах.",
        "Вместо того чтобы действовать как единая централизованная благотворительная организация, WPA функционирует как координационная платформа, объединяющая проверенные ветеринарные клиники, НКО, приюты, волонтёров, местные отделения и доноров, чтобы усилия по спасению, усыновлению, вакцинации и просвещению были последовательными, отслеживаемыми и эффективными в масштабе.",
        "Каждая программа, которую поддерживает WPA — от экстренного реагирования на спасение до кампаний по вакцинации в сообществах — изначально разработана как прозрачная: использование средств, проверка партнёров и результаты доступны для общественного обзора.",
      ],
    },
    values: {
      eyebrow: "Наши ценности",
      title: "Принципы, которыми руководствуется каждая программа",
      subtitle: "Эти ценности — не декларации о намерениях, а операционный стандарт для каждого отделения, партнёра и программы WPA.",
      items: [
        { title: "Сострадание", description: "К каждому животному относятся с достоинством, независимо от вида, местоположения или обстоятельств.", icon: "❤️" },
        { title: "Честность", description: "Мы делаем то, что говорим — открыто, последовательно и без исключений.", icon: "🛡️" },
        { title: "Прозрачность", description: "Использование средств, статус партнёров и результаты открыты для общественного контроля.", icon: "🔍" },
        { title: "Сотрудничество", description: "Ни одна организация не может в одиночку решить проблему защиты животных — мы работаем через партнёрство.", icon: "🤝" },
        { title: "Подотчётность", description: "Каждое отделение и партнёр оцениваются по чётким, опубликованным стандартам.", icon: "✅" },
        { title: "Устойчивость", description: "Программы разработаны так, чтобы быть локально управляемыми и долгосрочными, а не разовыми вмешательствами.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "Почему WPA заслуживает доверия",
      title: "Доверие заложено в самой работе организации",
      subtitle: "Доверие — это не обещание, а структурная особенность того, как управляется и работает WPA.",
      items: [
        { title: "Прозрачная деятельность", description: "Деятельность программ, показатели отделений и статус партнёров документируются и доступны для проверки.", icon: "📊" },
        { title: "Ответственное управление средствами", description: "Пожертвования отслеживаются от взноса до расходования на программы, с публичной отчётностью о распределении средств.", icon: "💰" },
        { title: "Этика защиты животных", description: "Все практики спасения, лечения и усыновления следуют документированным стандартам защиты животных.", icon: "🐾" },
        { title: "Проверка партнёров", description: "Клиники, НКО и приюты проверяются перед вступлением в сеть и регулярно оцениваются впоследствии.", icon: "🔒" },
        { title: "Координация местных отделений", description: "Отделения в странах и городах работают по общим стандартам, оставаясь подотчётными руководству WPA.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "С кем мы работаем",
      title: "Сеть, созданная для каждой заинтересованной стороны в защите животных",
      subtitle: "WPA спроектирована так, чтобы каждый участник — частное лицо или организация — имел чёткую и значимую роль.",
      items: [
        { title: "Владельцы домашних животных", description: "Получайте доступ к ресурсам по усыновлению, вакцинации и ответственному содержанию через надёжную сеть.", icon: "🏠" },
        { title: "Ветеринары", description: "Присоединяйтесь к проверенной профессиональной сети для направлений, кампаний и совместного ухода.", icon: "👩‍⚕️" },
        { title: "Клиники", description: "Участвуйте в кампаниях по вакцинации и лечебных программах с прозрачной отчётностью.", icon: "🏥" },
        { title: "НКО", description: "Расширяйте охват своей миссии благодаря общей инфраструктуре и скоординированным кампаниям.", icon: "🕊️" },
        { title: "Приюты", description: "Координируйте приём, уход и размещение животных на усыновление через сеть отделений WPA.", icon: "🐕" },
        { title: "Волонтёры", description: "Уделяйте время спасению, транспортировке и работе с сообществом.", icon: "🙌" },
        { title: "Доноры", description: "Финансируйте проверенные, отслеживаемые программы с полной прозрачностью влияния и использования средств.", icon: "💛" },
        { title: "Государственные и частные организации", description: "Сотрудничайте в вопросах политики, общественного здравоохранения и масштабных инициатив по защите животных.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Присоединяйтесь к глобальной сети, основанной на прозрачности и доверии",
      subtitle: "Какой бы ни была ваша роль — владелец животного, специалист, организация или сторонник — есть понятный способ участвовать.",
      primaryLabel: "Стать участником",
      primaryHref: "/join",
      secondaryLabel: "Стать партнёром WPA",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "Миссия и видение",
      title: "Почему существует WPA, и мир, к которому мы стремимся",
      subtitle: "Наша миссия определяет, что мы делаем сегодня. Наше видение определяет мир, который мы строим, шаг за шагом через скоординированные программы.",
      primaryLabel: "О WPA",
      primaryHref: "/about",
      secondaryLabel: "Изучить программы",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "Наша миссия",
      title: "Построить прозрачную, скоординированную глобальную сеть для защиты животных",
      text: "WPA существует, чтобы объединить владельцев домашних животных, ветеринарных специалистов, НКО, приюты, волонтёров и доноров в единую подотчётную систему — чтобы программы спасения, усыновления, вакцинации и просвещения охватывали больше животных, более надёжно, с проверяемыми результатами и ответственным использованием каждого пожертвования.",
    },
    vision: {
      eyebrow: "Наше видение",
      title: "Мир, в котором каждое животное защищено, повсюду",
      text: "Мы представляем будущее, в котором ответственное содержание домашних животных является нормой, ни одно животное в беде не остаётся без внимания, ветеринарная помощь и вакцинация доступны в каждом сообществе, а системы, поддерживающие защиту животных, так же прозрачны и заслуживают доверия, как и любой государственный институт.",
    },
    values: {
      eyebrow: "Ценности в действии",
      title: "Стандарты, лежащие в основе каждой программы",
      subtitle: "Это те же ценности, которые направляют деятельность WPA, переведённые в то, что они означают в повседневной практике.",
      items: [
        { title: "Сострадание превыше всего", description: "Каждое решение начинается с того, что лучше для животного, а не с того, что удобно.", icon: "❤️" },
        { title: "Забота, основанная на доказательствах", description: "Практики спасения, лечения и усыновления следуют установленным ветеринарным и welfare-стандартам.", icon: "🩺" },
        { title: "Открытая отчётность", description: "Публикуются результаты, а не только намерения, и они доступны для проверки.", icon: "📄" },
        { title: "Совместная ответственность", description: "Местные отделения и партнёры наделяются полномочиями, а не просто получают указания сверху.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "Операционные принципы",
      title: "Как миссия превращается в действие",
      subtitle: "Последовательная операционная модель, превращающая миссию и видение в измеримое, воспроизводимое влияние.",
      steps: [
        { number: 1, title: "Установить проверяемые стандарты", description: "Каждая область программы — спасение, усыновление, вакцинация — работает по опубликованному стандарту." },
        { number: 2, title: "Проверить каждого партнёра", description: "Клиники, НКО и приюты проверяются перед вступлением и регулярно оцениваются впоследствии." },
        { number: 3, title: "Координировать через отделения", description: "Местные отделения применяют глобальные стандарты, адаптируясь к региональным потребностям и нормам." },
        { number: 4, title: "Отслеживать каждый вклад", description: "Пожертвования и ресурсы фиксируются от получения до расходования на программы." },
        { number: 5, title: "Публично отчитываться", description: "Результаты и использование средств публикуются для доноров, партнёров и общественности." },
      ],
    },
    cta: {
      title: "Поддержите миссию, основанную на измеримом, прозрачном влиянии",
      subtitle: "Каждый вклад — время, финансирование или партнёрство — продвигает миссию и видение WPA вперёд.",
      primaryLabel: "Пожертвовать сейчас",
      primaryHref: "/donation",
      secondaryLabel: "Стать участником",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "Управление и руководство",
      title: "Структура, созданная для подотчётности",
      subtitle: "Модель управления WPA разделяет надзор, исполнение и региональную координацию, чтобы ни один орган не действовал без проверки.",
      primaryLabel: "Публичные отчёты",
      primaryHref: "/reports",
      secondaryLabel: "Проверка партнёров",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Как управляется WPA",
      title: "Многоуровневое управление, а не единая точка контроля",
      paragraphs: [
        "WPA работает через многоуровневую структуру управления, предназначенную для разделения выработки политики, повседневного исполнения и региональной координации — чтобы ни одна группа не обладала неконтролируемой властью над средствами, партнёрствами или программными решениями.",
        "Эта структура существует для защиты целостности сети: доноры, партнёры и животные, которым мы служим, полагаются на то, что решения принимаются через определённые процессы, а не по индивидуальному усмотрению.",
        "Документация по управлению, отчёты об использовании средств и записи о проверке партнёров публикуются в открытом доступе в соответствии с обязательствами WPA по прозрачности.",
      ],
    },
    structure: {
      eyebrow: "Организационная структура",
      title: "Органы, управляющие WPA",
      subtitle: "У каждого органа управления есть чётко определённый мандат и линии отчётности, обеспечивающие контроль и подотчётность власти.",
      items: [
        { title: "Совет попечителей", description: "Устанавливает долгосрочную политику, утверждает крупные партнёрства и несёт итоговую фидуциарную ответственность за организацию.", icon: "🏛️" },
        { title: "Исполнительное руководство", description: "Управляет повседневной деятельностью, реализацией программ и координацией между отделениями.", icon: "📋" },
        { title: "Региональные советы отделений", description: "Отделения в странах и городах избирают или назначают местные советы для адаптации глобальных стандартов к региональным потребностям.", icon: "🌍" },
        { title: "Комитет по этике и защите животных", description: "Проверяет практики спасения, лечения и усыновления на соответствие документированным welfare-стандартам.", icon: "🐾" },
        { title: "Комитет по аудиту и прозрачности", description: "Независимо проверяет использование средств и публикует результаты в открытых отчётах.", icon: "📊" },
        { title: "Консультативная панель партнёров", description: "Представители ветеринарии, НКО и приютов консультируют по вопросам разработки программ и стандартов партнёров.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "Меры подотчётности",
      title: "Как управление остаётся подотчётным на практике",
      subtitle: "Одной структуры недостаточно — вот конкретные механизмы, обеспечивающие контроль каждого органа управления.",
      items: [
        { title: "Независимый ежегодный аудит", description: "Финансовая отчётность проверяется независимой стороной и публикуется в открытом доступе.", icon: "📄" },
        { title: "Политика конфликта интересов", description: "Попечители и руководители обязаны раскрывать конфликты интересов перед любым решением о партнёрстве или финансировании.", icon: "⚖️" },
        { title: "Ограничение сроков полномочий", description: "Сроки полномочий совета и комитетов ограничены и разнесены во времени, чтобы предотвратить концентрацию власти.", icon: "⏳" },
        { title: "Публичное раскрытие информации", description: "Политики управления, структура и ключевые решения публикуются для всеобщего ознакомления.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "Поток принятия решений",
      title: "Как решение движется через WPA",
      subtitle: "От политики до действий на местах каждое решение следует определённому, проверяемому пути.",
      steps: [
        { number: 1, title: "Установление политики", description: "Совет попечителей утверждает стандарты и приоритеты для всей организации." },
        { number: 2, title: "Исполнение руководством", description: "Исполнительное руководство переводит политику в операционные программы." },
        { number: 3, title: "Адаптация отделениями", description: "Региональные советы отделений применяют стандарты к местному контексту и нормативам." },
        { number: 4, title: "Проверка на соответствие этике", description: "Комитет по этике и защите животных проверяет практики программ." },
        { number: 5, title: "Аудит и публикация", description: "Комитет по аудиту и прозрачности публично проверяет результаты и использование средств." },
      ],
    },
    cta: {
      title: "Ознакомьтесь с нашей документацией по управлению и отчётами",
      subtitle: "Прозрачность — это не заявление, а факт: изучите отчёты и стандарты проверки, стоящие за ней.",
      primaryLabel: "Смотреть публичные отчёты",
      primaryHref: "/reports",
      secondaryLabel: "Связаться с WPA",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "Глобальные отделения",
      title: "Местные действия, скоординированные глобально",
      subtitle: "Отделения WPA в странах и городах привносят глобальные стандарты в местные сообщества, координируя спасение, усыновление и просвещение там, где это наиболее необходимо.",
      primaryLabel: "Основать отделение",
      primaryHref: "/join",
      secondaryLabel: "Стать партнёром",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Роль отделений в сети",
      title: "Локальный уровень глобальной сети",
      paragraphs: [
        "Отделения WPA — это локально скоординированные группы, работающие в конкретных странах или городах, которые применяют глобальные стандарты WPA по спасению, усыновлению, вакцинации и просвещению к реалиям своего региона.",
        "Каждое отделение работает с проверенными местными клиниками, НКО, приютами и волонтёрами, при этом отчитываясь о деятельности и использовании средств через структуру управления WPA для обеспечения прозрачности и последовательности.",
        "Эта модель позволяет WPA масштабировать влияние на защиту животных, не жертвуя местными знаниями, соблюдением нормативных требований или доверием сообщества.",
      ],
    },
    stats: {
      eyebrow: "Сеть отделений",
      title: "Растущее, скоординированное глобальное присутствие",
      subtitle: "Цифры отражают скоординированную сеть отделений, которую WPA строит по мере присоединения проверенных партнёров и регионов.",
      items: [
        { value: "120+", label: "Отделений в странах и городах" },
        { value: "300+", label: "Проверенных местных партнёров" },
        { value: "500+", label: "Спасательных команд, координируемых отделениями" },
        { value: "24/7", label: "Покрытие локального реагирования (цель)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "Как это работает",
      title: "От глобального стандарта к местному влиянию",
      subtitle: "Каждое отделение следует одной и той же модели координации, адаптированной к местному контексту.",
      steps: [
        { number: 1, title: "Отделение сформировано", description: "Региональный совет создаётся в соответствии со стандартами WPA по формированию отделений." },
        { number: 2, title: "Партнёры проверены", description: "Местные клиники, НКО и приюты проверяются и подключаются к сети." },
        { number: 3, title: "Волонтёры мобилизованы", description: "Отделение набирает и координирует местных волонтёров для спасения и просветительской работы." },
        { number: 4, title: "Программы реализованы", description: "Кампании по вакцинации, мероприятия по усыновлению и спасательные операции проводятся по общим стандартам." },
        { number: 5, title: "Деятельность отчитана", description: "Результаты и использование средств отделения передаются в руководство WPA для обеспечения прозрачности." },
      ],
    },
    responsibilities: {
      eyebrow: "Обязанности отделения",
      title: "К чему обязуется каждое отделение",
      subtitle: "Местная автономия сопровождается общими, не подлежащими обсуждению обязательствами.",
      items: [
        { title: "Проверка партнёров", description: "Только проверенные клиники, НКО и приюты действуют от имени отделения.", icon: "🔒" },
        { title: "Прозрачная отчётность", description: "Деятельность и использование средств отчитываются по регулярному, установленному графику.", icon: "📊" },
        { title: "Этические стандарты", description: "Все практики спасения и ухода следуют документированным welfare-стандартам WPA.", icon: "🐾" },
        { title: "Координация с сообществом", description: "Отделения поддерживают открытые каналы связи с местными органами власти и общественными группами.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Принесите сеть WPA в свой город или страну",
      subtitle: "Хотите ли вы основать отделение, присоединиться к существующему или стать местным партнёром — есть чёткий путь для участия.",
      primaryLabel: "Стать участником",
      primaryHref: "/join",
      secondaryLabel: "Связаться с WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── DE (German) ────────────────────────────────────────────────────────────

const de: PagesContent = {
  about: {
    hero: {
      eyebrow: "Über World Pet Association",
      title: "Eine globale Plattform für Tierschutz, aufgebaut auf Vertrauen",
      subtitle: "WPA verbindet Tierhalter, Tierärzte, Kliniken, NGOs, Tierheime, Freiwillige und Spender zu einem koordinierten, transparenten weltweiten Netzwerk für Tierschutz.",
      primaryLabel: "Unsere Mission & Vision",
      primaryHref: "/mission-vision",
      secondaryLabel: "Governance",
      secondaryHref: "/governance",
    },
    intro: {
      eyebrow: "Wer wir sind",
      title: "Eine internationale Organisation für koordinierten Tierschutz",
      paragraphs: [
        "Die World Pet Association (WPA) ist ein globales, gemeinnütziges Netzwerk, das gegründet wurde, um Struktur, Transparenz und Rechenschaftspflicht in die Tierschutzarbeit über Länder und Gemeinschaften hinweg zu bringen.",
        "Anstatt als einzelne, zentralisierte Wohltätigkeitsorganisation zu agieren, fungiert WPA als Koordinationsplattform — sie verbindet verifizierte Tierarztpraxen, NGOs, Tierheime, Freiwillige, lokale Ortsverbände und Spender, damit Rettungs-, Vermittlungs-, Impf- und Bildungsmaßnahmen konsistent, nachvollziehbar und im großen Maßstab wirksam sind.",
        "Jedes von WPA unterstützte Programm — von der Notfallrettung bis zu Impfkampagnen in Gemeinden — ist standardmäßig transparent konzipiert, mit öffentlich einsehbarer Mittelverwendung, Partnerverifizierung und Ergebnissen.",
      ],
    },
    values: {
      eyebrow: "Unsere Werte",
      title: "Grundsätze, die jedes Programm leiten",
      subtitle: "Diese Werte sind keine bloßen Absichtserklärungen — sie sind der operative Standard für jeden Ortsverband, Partner und jedes Programm bei WPA.",
      items: [
        { title: "Mitgefühl", description: "Jedes Tier wird mit Würde behandelt, unabhängig von Art, Ort oder Umständen.", icon: "❤️" },
        { title: "Integrität", description: "Wir tun, was wir sagen — öffentlich, konsequent und ohne Ausnahme.", icon: "🛡️" },
        { title: "Transparenz", description: "Mittelverwendung, Partnerstatus und Ergebnisse stehen der öffentlichen Prüfung offen.", icon: "🔍" },
        { title: "Zusammenarbeit", description: "Keine einzelne Organisation kann Tierschutz allein bewältigen — wir arbeiten in Partnerschaft.", icon: "🤝" },
        { title: "Rechenschaftspflicht", description: "Jeder Ortsverband und Partner wird an klaren, veröffentlichten Standards gemessen.", icon: "✅" },
        { title: "Nachhaltigkeit", description: "Programme sind auf lokale Trägerschaft und langfristigen Betrieb ausgelegt, nicht auf einmalige Maßnahmen.", icon: "🌱" },
      ],
    },
    trust: {
      eyebrow: "Warum WPA vertrauenswürdig ist",
      title: "Vertrauen ist fest in unsere Arbeitsweise eingebettet",
      subtitle: "Vertrauen ist kein Versprechen — es ist ein strukturelles Merkmal der Art und Weise, wie WPA geführt und betrieben wird.",
      items: [
        { title: "Transparente Abläufe", description: "Programmaktivitäten, Leistung der Ortsverbände und Partnerstatus werden dokumentiert und sind einsehbar.", icon: "📊" },
        { title: "Verantwortungsvolles Finanzmanagement", description: "Spenden werden vom Beitrag bis zur Programmausgabe nachverfolgt, mit öffentlicher Berichterstattung über die Mittelverwendung.", icon: "💰" },
        { title: "Tierschutzethik", description: "Alle Rettungs-, Behandlungs- und Vermittlungspraktiken folgen dokumentierten Tierschutzstandards.", icon: "🐾" },
        { title: "Partnerverifizierung", description: "Kliniken, NGOs und Tierheime werden vor dem Beitritt zum Netzwerk geprüft und laufend überprüft.", icon: "🔒" },
        { title: "Koordination lokaler Ortsverbände", description: "Landes- und Stadtverbände arbeiten nach gemeinsamen Standards und bleiben gegenüber der WPA-Governance rechenschaftspflichtig.", icon: "🌍" },
      ],
    },
    stakeholders: {
      eyebrow: "Mit wem wir zusammenarbeiten",
      title: "Ein Netzwerk für jeden Akteur im Tierschutz",
      subtitle: "WPA ist so gestaltet, dass jeder Teilnehmer — Einzelperson oder Institution — eine klare, bedeutsame Rolle hat.",
      items: [
        { title: "Tierhalter", description: "Zugang zu Ressourcen für Vermittlung, Impfung und verantwortungsvolle Tierhaltung über ein vertrauenswürdiges Netzwerk.", icon: "🏠" },
        { title: "Tierärzte", description: "Treten Sie einem verifizierten Fachnetzwerk für Überweisungen, Kampagnen und gemeinsame Versorgung bei.", icon: "👩‍⚕️" },
        { title: "Kliniken", description: "Nehmen Sie an Impfkampagnen und Behandlungsprogrammen mit transparenter Berichterstattung teil.", icon: "🏥" },
        { title: "NGOs", description: "Erweitern Sie die Reichweite Ihrer Mission durch gemeinsame Infrastruktur und koordinierte Kampagnen.", icon: "🕊️" },
        { title: "Tierheime", description: "Koordinieren Sie Aufnahme, Pflege und Vermittlung über das WPA-Ortsverbandsnetzwerk.", icon: "🐕" },
        { title: "Freiwillige", description: "Bringen Sie Ihre Zeit für Rettung, Transport und Öffentlichkeitsarbeit in der Gemeinde ein.", icon: "🙌" },
        { title: "Spender", description: "Finanzieren Sie verifizierte, nachverfolgte Programme mit voller Transparenz über Wirkung und Mittelverwendung.", icon: "💛" },
        { title: "Regierungs- und Privatorganisationen", description: "Arbeiten Sie bei Politik, öffentlicher Gesundheit und groß angelegten Tierschutzinitiativen zusammen.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Treten Sie einem globalen Netzwerk bei, das auf Transparenz und Vertrauen basiert",
      subtitle: "Ganz gleich, welche Rolle Sie einnehmen — Tierhalter, Fachperson, Organisation oder Unterstützer — es gibt einen klaren Weg, sich zu engagieren.",
      primaryLabel: "Mitglied werden",
      primaryHref: "/join",
      secondaryLabel: "Partner von WPA werden",
      secondaryHref: "/partners",
    },
  },
  missionVision: {
    hero: {
      eyebrow: "Mission & Vision",
      title: "Warum es WPA gibt, und die Welt, auf die wir hinarbeiten",
      subtitle: "Unsere Mission definiert, was wir heute tun. Unsere Vision definiert die Welt, die wir aufbauen — ein koordiniertes Programm nach dem anderen.",
      primaryLabel: "Über WPA",
      primaryHref: "/about",
      secondaryLabel: "Programme entdecken",
      secondaryHref: "/what-we-do",
    },
    mission: {
      eyebrow: "Unsere Mission",
      title: "Ein transparentes, koordiniertes globales Netzwerk für Tierschutz aufbauen",
      text: "WPA existiert, um Tierhalter, tierärztliches Fachpersonal, NGOs, Tierheime, Freiwillige und Spender zu einem rechenschaftspflichtigen System zu verbinden — damit Rettungs-, Vermittlungs-, Impf- und Bildungsprogramme mehr Tiere zuverlässiger erreichen, mit nachprüfbaren Ergebnissen und verantwortungsvollem Umgang mit jeder Spende.",
    },
    vision: {
      eyebrow: "Unsere Vision",
      title: "Eine Welt, in der jedes Tier überall geschützt ist",
      text: "Wir stellen uns eine Zukunft vor, in der verantwortungsvolle Tierhaltung die Norm ist, in der kein Tier in Not unentdeckt bleibt, in der tierärztliche Versorgung und Impfung in jeder Gemeinschaft zugänglich sind, und in der die Systeme, die den Tierschutz unterstützen, so transparent und vertrauenswürdig sind wie jede öffentliche Institution.",
    },
    values: {
      eyebrow: "Werte in der Praxis",
      title: "Die Standards hinter jedem Programm",
      subtitle: "Es sind dieselben Werte, die den Betrieb von WPA leiten, übersetzt in ihre Bedeutung für die tägliche Praxis.",
      items: [
        { title: "Mitgefühl zuerst", description: "Jede Entscheidung beginnt mit dem, was am besten für das Tier ist, nicht mit dem, was bequem ist.", icon: "❤️" },
        { title: "Evidenzbasierte Versorgung", description: "Rettungs-, Behandlungs- und Vermittlungspraktiken folgen etablierten tierärztlichen und Tierschutzstandards.", icon: "🩺" },
        { title: "Offene Berichterstattung", description: "Nicht nur Absichten, sondern Ergebnisse werden veröffentlicht und stehen zur Überprüfung offen.", icon: "📄" },
        { title: "Geteilte Verantwortung", description: "Lokale Ortsverbände und Partner werden befähigt, nicht nur von oben angeleitet.", icon: "🤝" },
      ],
    },
    principles: {
      eyebrow: "Betriebliche Grundsätze",
      title: "Wie die Mission zur Handlung wird",
      subtitle: "Ein konsistentes Betriebsmodell, das Mission und Vision in messbare, wiederholbare Wirkung verwandelt.",
      steps: [
        { number: 1, title: "Überprüfbare Standards festlegen", description: "Jeder Programmbereich — Rettung, Vermittlung, Impfung — arbeitet nach einem veröffentlichten Standard." },
        { number: 2, title: "Jeden Partner verifizieren", description: "Kliniken, NGOs und Tierheime werden vor dem Beitritt geprüft und laufend überprüft." },
        { number: 3, title: "Über Ortsverbände koordinieren", description: "Lokale Ortsverbände wenden globale Standards an und passen sich regionalen Bedürfnissen und Vorschriften an." },
        { number: 4, title: "Jeden Beitrag nachverfolgen", description: "Spenden und Ressourcen werden von der Erfassung bis zur Programmausgabe dokumentiert." },
        { number: 5, title: "Öffentlich berichten", description: "Ergebnisse und Mittelverwendung werden für Spender, Partner und die Öffentlichkeit veröffentlicht." },
      ],
    },
    cta: {
      title: "Unterstützen Sie eine Mission mit messbarer, transparenter Wirkung",
      subtitle: "Jeder Beitrag — Zeit, Finanzierung oder Partnerschaft — bringt die Mission und Vision von WPA voran.",
      primaryLabel: "Jetzt spenden",
      primaryHref: "/donation",
      secondaryLabel: "Mitglied werden",
      secondaryHref: "/join",
    },
  },
  governance: {
    hero: {
      eyebrow: "Governance & Führung",
      title: "Eine auf Rechenschaftspflicht ausgelegte Struktur",
      subtitle: "Das Governance-Modell von WPA trennt Aufsicht, Ausführung und regionale Koordination — sodass kein einzelnes Gremium ohne Überprüfung agiert.",
      primaryLabel: "Öffentliche Berichte",
      primaryHref: "/reports",
      secondaryLabel: "Partnerverifizierung",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Wie WPA geführt wird",
      title: "Mehrstufige Governance, kein einzelner Kontrollpunkt",
      paragraphs: [
        "WPA arbeitet über eine mehrstufige Governance-Struktur, die Politikgestaltung, tägliche Ausführung und regionale Koordination trennt — sodass keine einzelne Gruppe unkontrollierte Autorität über Mittel, Partnerschaften oder Programmentscheidungen hat.",
        "Diese Struktur existiert, um die Integrität des Netzwerks zu schützen: Spender, Partner und die Tiere, denen wir dienen, verlassen sich alle darauf, dass Entscheidungen durch definierte Prozesse getroffen werden und nicht nach individuellem Ermessen.",
        "Governance-Dokumentation, Berichte zur Mittelverwendung und Partnerverifizierungsunterlagen werden gemäß den Transparenzverpflichtungen von WPA öffentlich zugänglich gemacht.",
      ],
    },
    structure: {
      eyebrow: "Organisationsstruktur",
      title: "Die Gremien, die WPA führen",
      subtitle: "Jedes Führungsgremium hat ein eigenständiges Mandat mit definierten Berichtslinien, um Autorität kontrolliert und rechenschaftspflichtig zu halten.",
      items: [
        { title: "Kuratorium", description: "Legt langfristige Richtlinien fest, genehmigt größere Partnerschaften und trägt die letztendliche treuhänderische Verantwortung für die Organisation.", icon: "🏛️" },
        { title: "Geschäftsführung", description: "Verwaltet das Tagesgeschäft, die Programmumsetzung und die Koordination zwischen den Ortsverbänden.", icon: "📋" },
        { title: "Regionale Ortsverbandsräte", description: "Landes- und Stadtverbände wählen oder ernennen lokale Räte, um globale Standards an regionale Bedürfnisse anzupassen.", icon: "🌍" },
        { title: "Ethik- und Tierschutzausschuss", description: "Überprüft Rettungs-, Behandlungs- und Vermittlungspraktiken anhand dokumentierter Tierschutzstandards.", icon: "🐾" },
        { title: "Prüfungs- und Transparenzausschuss", description: "Überprüft unabhängig die Mittelverwendung und veröffentlicht die Ergebnisse in öffentlichen Berichten.", icon: "📊" },
        { title: "Partnerbeirat", description: "Vertreter aus Tiermedizin, NGOs und Tierheimen beraten zu Programmgestaltung und Partnerstandards.", icon: "🤝" },
      ],
    },
    accountability: {
      eyebrow: "Rechenschaftsmaßnahmen",
      title: "Wie Governance in der Praxis rechenschaftspflichtig bleibt",
      subtitle: "Struktur allein reicht nicht aus — dies sind die konkreten Mechanismen, die jedes Führungsgremium kontrollieren.",
      items: [
        { title: "Unabhängige Jahresprüfungen", description: "Jahresabschlüsse werden von einer unabhängigen Partei geprüft und veröffentlicht.", icon: "📄" },
        { title: "Interessenkonfliktrichtlinie", description: "Kuratoren und Führungskräfte müssen Interessenkonflikte vor jeder Partnerschafts- oder Finanzierungsentscheidung offenlegen.", icon: "⚖️" },
        { title: "Amtszeitbegrenzung", description: "Amtszeiten von Vorstand und Ausschüssen sind begrenzt und gestaffelt, um eine Machtkonzentration zu verhindern.", icon: "⏳" },
        { title: "Öffentliche Offenlegung", description: "Governance-Richtlinien, Struktur und wichtige Entscheidungen werden veröffentlicht, damit jeder sie einsehen kann.", icon: "🔓" },
      ],
    },
    flow: {
      eyebrow: "Entscheidungsfluss",
      title: "Wie sich eine Entscheidung durch WPA bewegt",
      subtitle: "Von der Politik bis zur Umsetzung vor Ort folgt jede Entscheidung einem definierten, überprüfbaren Weg.",
      steps: [
        { number: 1, title: "Richtlinie festgelegt", description: "Das Kuratorium genehmigt organisationsweite Standards und Prioritäten." },
        { number: 2, title: "Von der Führung umgesetzt", description: "Die Geschäftsführung übersetzt die Richtlinie in operative Programme." },
        { number: 3, title: "Von Ortsverbänden angepasst", description: "Regionale Ortsverbandsräte wenden Standards auf lokalen Kontext und Vorschriften an." },
        { number: 4, title: "Ethisch überprüft", description: "Der Ethik- und Tierschutzausschuss überprüft die Programmpraktiken." },
        { number: 5, title: "Geprüft & veröffentlicht", description: "Der Prüfungs- und Transparenzausschuss überprüft Ergebnisse und Mittelverwendung öffentlich." },
      ],
    },
    cta: {
      title: "Prüfen Sie unsere Governance-Dokumentation und Berichte",
      subtitle: "Transparenz ist keine Behauptung — erkunden Sie die Berichte und Verifizierungsstandards dahinter.",
      primaryLabel: "Öffentliche Berichte ansehen",
      primaryHref: "/reports",
      secondaryLabel: "WPA kontaktieren",
      secondaryHref: "/contact",
    },
  },
  chapters: {
    hero: {
      eyebrow: "Globale Ortsverbände",
      title: "Lokales Handeln, global koordiniert",
      subtitle: "Die Landes- und Stadtverbände von WPA bringen globale Standards in lokale Gemeinschaften — koordinieren Rettung, Vermittlung und Aufklärung dort, wo es am meisten zählt.",
      primaryLabel: "Ortsverband gründen",
      primaryHref: "/join",
      secondaryLabel: "Partner werden",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Wie Ortsverbände sich einfügen",
      title: "Die lokale Ebene eines globalen Netzwerks",
      paragraphs: [
        "WPA-Ortsverbände sind lokal koordinierte Gruppen — tätig in bestimmten Ländern oder Städten —, die die globalen WPA-Standards für Rettung, Vermittlung, Impfung und Aufklärung auf die Gegebenheiten ihrer Region anwenden.",
        "Jeder Ortsverband arbeitet mit verifizierten lokalen Kliniken, NGOs, Tierheimen und Freiwilligen zusammen und berichtet gleichzeitig über Aktivitäten und Mittelverwendung an die WPA-Governance-Struktur, um Transparenz und Konsistenz zu gewährleisten.",
        "Dieses Modell ermöglicht es WPA, die Wirkung im Tierschutz zu skalieren, ohne lokales Wissen, regulatorische Compliance oder das Vertrauen der Gemeinschaft zu opfern.",
      ],
    },
    stats: {
      eyebrow: "Ortsverbandsnetzwerk",
      title: "Eine wachsende, koordinierte globale Präsenz",
      subtitle: "Die Zahlen spiegeln das koordinierte Ortsverbandsnetzwerk wider, das WPA aufbaut, während verifizierte Partner und Regionen beitreten.",
      items: [
        { value: "120+", label: "Landes- und Stadtverbände" },
        { value: "300+", label: "Verifizierte lokale Partner" },
        { value: "500+", label: "Von Ortsverbänden koordinierte Rettungsteams" },
        { value: "24/7", label: "Lokale Reaktionsabdeckung (Ziel)" },
      ],
    },
    howChaptersWork: {
      eyebrow: "So funktioniert es",
      title: "Vom globalen Standard zur lokalen Wirkung",
      subtitle: "Jeder Ortsverband folgt demselben Koordinationsmodell, angepasst an den lokalen Kontext.",
      steps: [
        { number: 1, title: "Ortsverband gegründet", description: "Ein regionaler Rat wird gemäß den WPA-Standards zur Ortsverbandsgründung eingerichtet." },
        { number: 2, title: "Partner verifiziert", description: "Lokale Kliniken, NGOs und Tierheime werden geprüft und in das Netzwerk aufgenommen." },
        { number: 3, title: "Freiwillige mobilisiert", description: "Der Ortsverband rekrutiert und koordiniert lokale Freiwillige für Rettung und Öffentlichkeitsarbeit." },
        { number: 4, title: "Programme umgesetzt", description: "Impfkampagnen, Vermittlungsveranstaltungen und Rettungseinsätze laufen nach gemeinsamen Standards." },
        { number: 5, title: "Aktivität gemeldet", description: "Ergebnisse und Mittelverwendung des Ortsverbands werden zur Transparenz an die WPA-Governance gemeldet." },
      ],
    },
    responsibilities: {
      eyebrow: "Verantwortlichkeiten des Ortsverbands",
      title: "Wozu sich jeder Ortsverband verpflichtet",
      subtitle: "Lokale Autonomie geht mit gemeinsamen, nicht verhandelbaren Verantwortlichkeiten einher.",
      items: [
        { title: "Partnerverifizierung", description: "Nur geprüfte Kliniken, NGOs und Tierheime agieren unter dem Namen des Ortsverbands.", icon: "🔒" },
        { title: "Transparente Berichterstattung", description: "Aktivitäten und Mittelverwendung werden nach einem regelmäßigen, festgelegten Zeitplan gemeldet.", icon: "📊" },
        { title: "Ethische Standards", description: "Alle Rettungs- und Pflegepraktiken folgen den dokumentierten Tierschutzstandards von WPA.", icon: "🐾" },
        { title: "Koordination mit der Gemeinschaft", description: "Ortsverbände pflegen offene Kanäle mit lokalen Behörden und Gemeinschaftsgruppen.", icon: "🏛️" },
      ],
    },
    cta: {
      title: "Bringen Sie das Netzwerk von WPA in Ihre Stadt oder Ihr Land",
      subtitle: "Ob Sie einen Ortsverband gründen, einem bestehenden beitreten oder lokal Partner werden möchten — es gibt einen klar definierten Weg, sich zu engagieren.",
      primaryLabel: "Mitglied werden",
      primaryHref: "/join",
      secondaryLabel: "WPA kontaktieren",
      secondaryHref: "/contact",
    },
  },
};

const dictionaries: Partial<Record<Locale, PagesContent>> = { en, bn, ar, fr, es, zh, ru, de, ja, ko };

export function getPagesContent(locale: string): PagesContent {
  return dictionaries[locale as Locale] ?? dictionaries.en!;
}

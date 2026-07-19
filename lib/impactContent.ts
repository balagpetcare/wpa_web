import type { Locale } from "./i18n";
import type { HeroCopy, IconCard, TimelineStep } from "./pagesContent";

// ─── Shared shapes ───────────────────────────────────────────────────────────

export interface DashboardStat {
  value: string;
  label: string;
  note: string;
  icon: string;
}

interface CtaCopy {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  extraCtas?: { label: string; href: string }[];
}

export interface ImpactContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  metrics: { eyebrow: string; title: string; subtitle: string; items: DashboardStat[] };
  howMeasured: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  cta: CtaCopy;
}

export interface TransparencyContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  fundFlow: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  donorConfidence: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  trustFeatures: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  cta: CtaCopy;
}

export interface ReportsContent {
  hero: HeroCopy;
  fundUsage: { eyebrow: string; title: string; paragraphs: string[]; categories: IconCard[] };
  reportTypes: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  cta: CtaCopy;
}

export interface ImpactAndTrustContent {
  impact: ImpactContent;
  transparency: TransparencyContent;
  reports: ReportsContent;
}

// ─── EN ────────────────────────────────────────────────────────────────────────

const en: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "Our impact",
      title: "Measurable Impact, Reported Transparently",
      subtitle: "WPA tracks outcomes across every program — not just activity — so donors, partners, and the public can see real, verifiable results.",
      primaryLabel: "View Public Reports",
      primaryHref: "/reports",
      secondaryLabel: "Donate to Programs",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "How we define impact",
      title: "Impact Is Measured by Outcomes, Not Activity Alone",
      paragraphs: [
        "It's easy to report how many events were held or how much money was raised. WPA's impact reporting goes further — tracking what actually happened to the animals, communities, and partners involved in each program.",
        "Every figure below comes from data recorded through WPA's case tracking, partner reporting, and chapter activity systems — the same records used in our public reports and audits.",
      ],
    },
    metrics: {
      eyebrow: "Impact dashboard",
      title: "Where WPA's Network Stands Today",
      subtitle: "These figures reflect coordinated activity across chapters and verified partners, tracked toward WPA's published program targets.",
      items: [
        { value: "100,000+", label: "Animals Supported", note: "Through rescue, treatment, and care programs.", icon: "🐾" },
        { value: "15,000+", label: "Adoptions Facilitated", note: "Verified placements through the adoption program.", icon: "🏠" },
        { value: "60,000+", label: "Vaccination & Health Interventions", note: "Delivered through partner clinics and campaigns.", icon: "💉" },
        { value: "200+", label: "Awareness Campaigns Run", note: "Across local chapters and partner communities.", icon: "📢" },
        { value: "300+", label: "Verified Partner Organizations", note: "Clinics, NGOs, and shelters in the active network.", icon: "🤝" },
        { value: "120+", label: "Active Local Chapters", note: "Coordinating programs at the country and city level.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "How it's measured",
      title: "The Systems Behind Every Number",
      subtitle: "Each metric is backed by a specific tracking or reporting process, not a self-reported estimate.",
      items: [
        { title: "Case Tracking System", description: "Every rescue and adoption case receives a tracked ID from report to resolution.", icon: "📋" },
        { title: "Partner Activity Reporting", description: "Clinics and shelters report vaccination, treatment, and adoption activity on a regular schedule.", icon: "🏥" },
        { title: "Chapter Reporting", description: "Local chapters submit campaign and program activity to WPA governance for aggregation.", icon: "🌍" },
        { title: "Independent Review", description: "Aggregated figures are reviewed alongside financial audits before publication.", icon: "✅" },
      ],
    },
    cta: {
      title: "Support Programs With Measurable Impact",
      subtitle: "Every contribution is tracked against the same outcomes shown here.",
      primaryLabel: "Donate Now",
      primaryHref: "/donation",
      secondaryLabel: "Become a Partner",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "Request a Report", href: "/reports" },
        { label: "Join a Local Chapter", href: "/chapters" },
      ],
    },
  },

  transparency: {
    hero: {
      eyebrow: "Transparency",
      title: "Every Donation Tracked. Every Outcome Reported.",
      subtitle: "WPA treats transparency as an operating requirement, not a communications message — from campaign allocation to independent audit.",
      primaryLabel: "View Fund Usage",
      primaryHref: "/reports",
      secondaryLabel: "Donate Now",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "How WPA handles donations",
      title: "A Donation Handling Process Built for Scrutiny",
      paragraphs: [
        "Most donations to WPA are allocated to a specific campaign, program, or chapter — not a general, untracked pool — so contributors can see exactly what their gift supported.",
        "Fund usage is compiled into public reports on a recurring basis, receipts are issued for every contribution, and underlying records are maintained in an audit-ready format for independent review.",
        "This page explains the mechanics behind that process: how funds move from donation to disbursement, and how donors, partners, and the public can verify it.",
      ],
    },
    fundFlow: {
      eyebrow: "Fund flow",
      title: "How a Donation Moves Through WPA",
      subtitle: "The same path applies whether a donation is one-time, recurring, or tied to a specific campaign.",
      steps: [
        { number: 1, title: "Donation Received", description: "A contribution is received and a receipt is issued, recording amount, date, and purpose." },
        { number: 2, title: "Allocated to Campaign or Program", description: "Funds are recorded against the specific campaign, program, or chapter they were given to support." },
        { number: 3, title: "Disbursed to Verified Partners", description: "Funds are released to vetted clinics, shelters, or chapters delivering the relevant program." },
        { number: 4, title: "Activity Reported Back", description: "Partners and chapters report how funds were used and what outcomes resulted." },
        { number: 5, title: "Included in Public Reports", description: "Fund usage and outcomes are compiled into reports available for public and donor review." },
      ],
    },
    donorConfidence: {
      eyebrow: "Donor confidence",
      title: "Answers to the Questions Donors Ask Most",
      subtitle: "Transparency means being specific about mechanisms, not just repeating the word.",
      items: [
        { title: "Where Funds Go", description: "Every contribution is tagged to a program or campaign and tracked through disbursement, not pooled anonymously.", icon: "🔍" },
        { title: "How Cases Are Verified", description: "Rescue and treatment cases are tracked with a case ID from first report through resolution.", icon: "📋" },
        { title: "How Partners Are Checked", description: "Clinics, NGOs, and shelters are vetted before onboarding and reviewed on an ongoing basis.", icon: "✅" },
        { title: "How Impact Is Reported", description: "Outcomes are aggregated from partner and chapter reporting, then published in periodic reports.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "Built-in safeguards",
      title: "The Features That Make This Verifiable",
      subtitle: "",
      items: [
        { title: "Campaign-Based Allocation", description: "Donations are tied to specific campaigns or programs rather than a general, untracked fund.", icon: "🎯" },
        { title: "Public Reports", description: "Fund usage and program outcomes are published on a recurring basis for public review.", icon: "📄" },
        { title: "Donor Receipts", description: "Every contribution generates a receipt confirming amount, date, and purpose.", icon: "🧾" },
        { title: "Verified Usage Records", description: "Disbursements are recorded against the partner and program that received them.", icon: "🔒" },
        { title: "Audit-Ready Records", description: "Financial and program records are maintained in a format ready for independent audit.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "Review the Records Behind Our Transparency Commitments",
      subtitle: "Request a fund usage report, or support a program knowing exactly how contributions are tracked.",
      primaryLabel: "Request a Report",
      primaryHref: "/reports",
      secondaryLabel: "Donate Now",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Become a Partner", href: "/partners" },
        { label: "Join a Local Chapter", href: "/chapters" },
      ],
    },
  },

  reports: {
    hero: {
      eyebrow: "Public reports",
      title: "Fund Usage and Program Outcomes, Published Openly",
      subtitle: "WPA compiles fund usage and program activity into reports available to donors, partners, and the public — request the report type that matters to you.",
      primaryLabel: "Request a Report",
      primaryHref: "/contact",
      secondaryLabel: "How Transparency Works",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "Fund usage",
      title: "Where Donations Are Directed",
      paragraphs: [
        "Donations are allocated across a defined set of program categories rather than a single general fund, so both donors and auditors can trace spending to a specific purpose.",
        "WPA's stated priority is to direct the largest share of funds to direct program delivery — rescue, treatment, adoption support, and awareness — while keeping administrative overhead as low as responsible operations allow. Exact category-by-category figures for a given period are published in that period's fund usage report rather than summarized here, to avoid presenting rounded figures as precise financial statements.",
      ],
      categories: [
        { title: "Rescue & Emergency Treatment", description: "Field response, transport, and veterinary treatment for rescued animals.", icon: "🚑" },
        { title: "Adoption & Shelter Support", description: "Shelter care, health checks, and adoption program operations.", icon: "🐾" },
        { title: "Vaccination & Health Campaigns", description: "Large-scale vaccination drives and preventive health programs.", icon: "💉" },
        { title: "Awareness & Education", description: "Community campaigns on responsible ownership and animal welfare.", icon: "📢" },
        { title: "Chapter & Partner Coordination", description: "Supporting local chapters and verified partner operations.", icon: "🌍" },
        { title: "Administration & Governance", description: "Oversight, auditing, and the systems that keep the network accountable.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "Available reports",
      title: "Reports You Can Request",
      subtitle: "Each report type covers a different level of detail — from headline outcomes to independently reviewed financials.",
      items: [
        { title: "Annual Report", description: "A yearly summary of program outcomes, chapter growth, and overall fund usage.", icon: "📘", href: "/contact" },
        { title: "Fund Usage Report", description: "A period-by-period breakdown of donations received and how they were allocated.", icon: "📊", href: "/contact" },
        { title: "Chapter Activity Report", description: "Program and campaign activity for a specific country or city chapter.", icon: "🌍", href: "/contact" },
        { title: "Independent Audit Summary", description: "Findings from independent financial review of WPA's accounts.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "Request a Report or Support a Verified Program",
      subtitle: "Reports are provided on request through our team — reach out and specify the report type and period you need.",
      primaryLabel: "Request a Report",
      primaryHref: "/contact",
      secondaryLabel: "Donate Now",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Become a Partner", href: "/partners" },
        { label: "Join a Local Chapter", href: "/chapters" },
      ],
    },
  },
};

// ─── BN ────────────────────────────────────────────────────────────────────────

const bn: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "আমাদের প্রভাব",
      title: "পরিমাপযোগ্য প্রভাব, স্বচ্ছভাবে প্রতিবেদিত",
      subtitle: "WPA প্রতিটি কর্মসূচির ফলাফল ট্র্যাক করে — শুধু কার্যক্রম নয় — যাতে দাতা, অংশীদার ও জনসাধারণ প্রকৃত, যাচাইযোগ্য ফলাফল দেখতে পারেন।",
      primaryLabel: "পাবলিক প্রতিবেদন দেখুন",
      primaryHref: "/reports",
      secondaryLabel: "কর্মসূচিতে দান করুন",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "আমরা প্রভাব কীভাবে সংজ্ঞায়িত করি",
      title: "প্রভাব ফলাফল দ্বারা পরিমাপ করা হয়, শুধু কার্যক্রম দ্বারা নয়",
      paragraphs: [
        "কতগুলো অনুষ্ঠান অনুষ্ঠিত হয়েছে বা কত অর্থ সংগ্রহ করা হয়েছে তা প্রতিবেদন করা সহজ। WPA-এর প্রভাব প্রতিবেদন আরও এগিয়ে যায় — প্রতিটি কর্মসূচিতে জড়িত প্রাণী, কমিউনিটি ও অংশীদারদের সাথে প্রকৃতপক্ষে কী ঘটেছে তা ট্র্যাক করে।",
        "নিচের প্রতিটি সংখ্যা WPA-এর কেস ট্র্যাকিং, অংশীদার প্রতিবেদন ও চ্যাপ্টার কার্যক্রম ব্যবস্থার মাধ্যমে রেকর্ড করা তথ্য থেকে আসে — আমাদের পাবলিক প্রতিবেদন ও অডিটে ব্যবহৃত একই রেকর্ড।",
      ],
    },
    metrics: {
      eyebrow: "প্রভাব ড্যাশবোর্ড",
      title: "আজ WPA-এর নেটওয়ার্ক যেখানে দাঁড়িয়ে",
      subtitle: "এই সংখ্যাগুলো চ্যাপ্টার ও যাচাইকৃত অংশীদারজুড়ে সমন্বিত কার্যক্রম প্রতিফলিত করে, WPA-এর প্রকাশিত কর্মসূচি লক্ষ্যের দিকে ট্র্যাক করা।",
      items: [
        { value: "১,০০,০০০+", label: "সহায়তাপ্রাপ্ত প্রাণী", note: "উদ্ধার, চিকিৎসা ও পরিচর্যা কর্মসূচির মাধ্যমে।", icon: "🐾" },
        { value: "১৫,০০০+", label: "সম্পন্ন দত্তক", note: "দত্তক কর্মসূচির মাধ্যমে যাচাইকৃত স্থাপন।", icon: "🏠" },
        { value: "৬০,০০০+", label: "টিকাদান ও স্বাস্থ্য হস্তক্ষেপ", note: "অংশীদার ক্লিনিক ও প্রচারাভিযানের মাধ্যমে প্রদত্ত।", icon: "💉" },
        { value: "২০০+", label: "পরিচালিত সচেতনতা প্রচারাভিযান", note: "স্থানীয় চ্যাপ্টার ও অংশীদার কমিউনিটিজুড়ে।", icon: "📢" },
        { value: "৩০০+", label: "যাচাইকৃত অংশীদার প্রতিষ্ঠান", note: "সক্রিয় নেটওয়ার্কে ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র।", icon: "🤝" },
        { value: "১২০+", label: "সক্রিয় স্থানীয় চ্যাপ্টার", note: "দেশ ও শহর পর্যায়ে কর্মসূচি সমন্বয় করা।", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "এটি কীভাবে পরিমাপ করা হয়",
      title: "প্রতিটি সংখ্যার পেছনের ব্যবস্থা",
      subtitle: "প্রতিটি মেট্রিক একটি নির্দিষ্ট ট্র্যাকিং বা প্রতিবেদন প্রক্রিয়া দ্বারা সমর্থিত, স্ব-প্রতিবেদিত অনুমান নয়।",
      items: [
        { title: "কেস ট্র্যাকিং ব্যবস্থা", description: "প্রতিটি উদ্ধার ও দত্তক কেস রিপোর্ট থেকে সমাধান পর্যন্ত একটি ট্র্যাক করা আইডি পায়।", icon: "📋" },
        { title: "অংশীদার কার্যক্রম প্রতিবেদন", description: "ক্লিনিক ও আশ্রয়কেন্দ্র নিয়মিত সময়সূচিতে টিকাদান, চিকিৎসা ও দত্তক কার্যক্রম প্রতিবেদন করে।", icon: "🏥" },
        { title: "চ্যাপ্টার প্রতিবেদন", description: "স্থানীয় চ্যাপ্টার একত্রীকরণের জন্য WPA পরিচালনায় প্রচারাভিযান ও কর্মসূচি কার্যক্রম জমা দেয়।", icon: "🌍" },
        { title: "স্বাধীন পর্যালোচনা", description: "একত্রিত সংখ্যা প্রকাশের আগে আর্থিক অডিটের পাশাপাশি পর্যালোচিত হয়।", icon: "✅" },
      ],
    },
    cta: {
      title: "পরিমাপযোগ্য প্রভাবসহ কর্মসূচি সমর্থন করুন",
      subtitle: "প্রতিটি অবদান এখানে দেখানো একই ফলাফলের বিপরীতে ট্র্যাক করা হয়।",
      primaryLabel: "এখনই দান করুন",
      primaryHref: "/donation",
      secondaryLabel: "সঙ্গী হোন",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "একটি প্রতিবেদন অনুরোধ করুন", href: "/reports" },
        { label: "একটি স্থানীয় চ্যাপ্টারে যোগ দিন", href: "/chapters" },
      ],
    },
  },

  transparency: {
    hero: {
      eyebrow: "স্বচ্ছতা",
      title: "প্রতিটি দান ট্র্যাক করা হয়। প্রতিটি ফলাফল প্রতিবেদিত।",
      subtitle: "WPA স্বচ্ছতাকে একটি যোগাযোগ বার্তা নয়, একটি কার্যক্রম প্রয়োজনীয়তা হিসেবে বিবেচনা করে — প্রচারাভিযান বরাদ্দ থেকে স্বাধীন অডিট পর্যন্ত।",
      primaryLabel: "তহবিল ব্যবহার দেখুন",
      primaryHref: "/reports",
      secondaryLabel: "এখনই দান করুন",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "WPA কীভাবে দান পরিচালনা করে",
      title: "যাচাইয়ের জন্য নির্মিত একটি দান পরিচালনা প্রক্রিয়া",
      paragraphs: [
        "WPA-কে বেশিরভাগ দান একটি নির্দিষ্ট প্রচারাভিযান, কর্মসূচি বা চ্যাপ্টারে বরাদ্দ করা হয় — একটি সাধারণ, ট্র্যাকহীন পুলে নয় — যাতে অবদানকারীরা ঠিক দেখতে পারেন তাদের উপহার কী সমর্থন করেছে।",
        "তহবিল ব্যবহার নিয়মিতভাবে পাবলিক প্রতিবেদনে সংকলিত করা হয়, প্রতিটি অবদানের জন্য রসিদ জারি করা হয়, এবং অন্তর্নিহিত রেকর্ড স্বাধীন পর্যালোচনার জন্য একটি অডিট-প্রস্তুত ফরম্যাটে রক্ষণাবেক্ষণ করা হয়।",
        "এই পাতাটি সেই প্রক্রিয়ার পেছনের প্রক্রিয়া ব্যাখ্যা করে: তহবিল কীভাবে দান থেকে বিতরণে চলে যায়, এবং দাতা, অংশীদার ও জনসাধারণ কীভাবে এটি যাচাই করতে পারেন।",
      ],
    },
    fundFlow: {
      eyebrow: "তহবিল প্রবাহ",
      title: "WPA-এর মধ্য দিয়ে একটি দান কীভাবে চলে",
      subtitle: "একবারের, পুনরাবৃত্ত, বা একটি নির্দিষ্ট প্রচারাভিযানের সাথে যুক্ত যাই হোক না কেন একই পথ প্রযোজ্য।",
      steps: [
        { number: 1, title: "দান গৃহীত", description: "একটি অবদান গৃহীত হয় এবং পরিমাণ, তারিখ ও উদ্দেশ্য রেকর্ড করে একটি রসিদ জারি করা হয়।" },
        { number: 2, title: "প্রচারাভিযান বা কর্মসূচিতে বরাদ্দ", description: "তহবিল তারা যে নির্দিষ্ট প্রচারাভিযান, কর্মসূচি বা চ্যাপ্টার সমর্থন করার জন্য দেওয়া হয়েছিল তার বিপরীতে নথিভুক্ত করা হয়।" },
        { number: 3, title: "যাচাইকৃত অংশীদারদের কাছে বিতরণ", description: "প্রাসঙ্গিক কর্মসূচি প্রদানকারী যাচাইকৃত ক্লিনিক, আশ্রয়কেন্দ্র বা চ্যাপ্টারে তহবিল প্রকাশ করা হয়।" },
        { number: 4, title: "কার্যক্রম ফিরে প্রতিবেদিত", description: "অংশীদার ও চ্যাপ্টার প্রতিবেদন করে তহবিল কীভাবে ব্যবহৃত হয়েছে এবং কী ফলাফল হয়েছে।" },
        { number: 5, title: "পাবলিক প্রতিবেদনে অন্তর্ভুক্ত", description: "তহবিল ব্যবহার ও ফলাফল জনসাধারণ ও দাতা পর্যালোচনার জন্য উপলব্ধ প্রতিবেদনে সংকলিত করা হয়।" },
      ],
    },
    donorConfidence: {
      eyebrow: "দাতার আস্থা",
      title: "দাতারা সবচেয়ে বেশি যে প্রশ্ন করেন তার উত্তর",
      subtitle: "স্বচ্ছতা মানে শুধু শব্দটি পুনরাবৃত্তি করা নয়, প্রক্রিয়া সম্পর্কে নির্দিষ্ট হওয়া।",
      items: [
        { title: "তহবিল কোথায় যায়", description: "প্রতিটি অবদান একটি কর্মসূচি বা প্রচারাভিযানে ট্যাগ করা হয় এবং বিতরণ পর্যন্ত ট্র্যাক করা হয়, বেনামে পুল করা হয় না।", icon: "🔍" },
        { title: "কেসগুলো কীভাবে যাচাই করা হয়", description: "উদ্ধার ও চিকিৎসা কেস প্রথম রিপোর্ট থেকে সমাধান পর্যন্ত একটি কেস আইডি দিয়ে ট্র্যাক করা হয়।", icon: "📋" },
        { title: "অংশীদাররা কীভাবে যাচাই করা হয়", description: "ক্লিনিক, এনজিও ও আশ্রয়কেন্দ্র অনবোর্ডিংয়ের আগে যাচাই করা হয় এবং চলমানভাবে পর্যালোচিত হয়।", icon: "✅" },
        { title: "প্রভাব কীভাবে প্রতিবেদিত হয়", description: "ফলাফল অংশীদার ও চ্যাপ্টার প্রতিবেদন থেকে একত্রিত করা হয়, তারপর পর্যায়ক্রমিক প্রতিবেদনে প্রকাশিত হয়।", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "অন্তর্নির্মিত সুরক্ষা",
      title: "এটিকে যাচাইযোগ্য করে তোলার বৈশিষ্ট্য",
      subtitle: "",
      items: [
        { title: "প্রচারাভিযান-ভিত্তিক বরাদ্দ", description: "দান একটি সাধারণ, ট্র্যাকহীন তহবিলের পরিবর্তে নির্দিষ্ট প্রচারাভিযান বা কর্মসূচির সাথে যুক্ত।", icon: "🎯" },
        { title: "পাবলিক প্রতিবেদন", description: "জনসাধারণের পর্যালোচনার জন্য তহবিল ব্যবহার ও কর্মসূচির ফলাফল নিয়মিতভাবে প্রকাশিত হয়।", icon: "📄" },
        { title: "দাতা রসিদ", description: "প্রতিটি অবদান পরিমাণ, তারিখ ও উদ্দেশ্য নিশ্চিত করে একটি রসিদ তৈরি করে।", icon: "🧾" },
        { title: "যাচাইকৃত ব্যবহার রেকর্ড", description: "বিতরণ তারা যে অংশীদার ও কর্মসূচি পেয়েছে তার বিপরীতে নথিভুক্ত করা হয়।", icon: "🔒" },
        { title: "অডিট-প্রস্তুত রেকর্ড", description: "আর্থিক ও কর্মসূচি রেকর্ড স্বাধীন অডিটের জন্য প্রস্তুত একটি ফরম্যাটে রক্ষণাবেক্ষণ করা হয়।", icon: "🗂️" },
      ],
    },
    cta: {
      title: "আমাদের স্বচ্ছতা প্রতিশ্রুতির পেছনের রেকর্ড পর্যালোচনা করুন",
      subtitle: "একটি তহবিল ব্যবহার প্রতিবেদন অনুরোধ করুন, বা অবদান কীভাবে ট্র্যাক করা হয় তা ঠিক জেনে একটি কর্মসূচি সমর্থন করুন।",
      primaryLabel: "একটি প্রতিবেদন অনুরোধ করুন",
      primaryHref: "/reports",
      secondaryLabel: "এখনই দান করুন",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "সঙ্গী হোন", href: "/partners" },
        { label: "একটি স্থানীয় চ্যাপ্টারে যোগ দিন", href: "/chapters" },
      ],
    },
  },

  reports: {
    hero: {
      eyebrow: "পাবলিক প্রতিবেদন",
      title: "তহবিল ব্যবহার ও কর্মসূচির ফলাফল, প্রকাশ্যে প্রকাশিত",
      subtitle: "WPA দাতা, অংশীদার ও জনসাধারণের জন্য উপলব্ধ প্রতিবেদনে তহবিল ব্যবহার ও কর্মসূচি কার্যক্রম সংকলিত করে — আপনার জন্য গুরুত্বপূর্ণ প্রতিবেদনের ধরন অনুরোধ করুন।",
      primaryLabel: "একটি প্রতিবেদন অনুরোধ করুন",
      primaryHref: "/contact",
      secondaryLabel: "স্বচ্ছতা কীভাবে কাজ করে",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "তহবিল ব্যবহার",
      title: "দান কোথায় পরিচালিত হয়",
      paragraphs: [
        "দান একটি একক সাধারণ তহবিলের পরিবর্তে একটি নির্ধারিত কর্মসূচি বিভাগ জুড়ে বরাদ্দ করা হয়, যাতে দাতা ও অডিটর উভয়ই ব্যয় একটি নির্দিষ্ট উদ্দেশ্যে ট্রেস করতে পারেন।",
        "WPA-এর ঘোষিত অগ্রাধিকার হলো সরাসরি কর্মসূচি প্রদানে তহবিলের সবচেয়ে বড় অংশ পরিচালনা করা — উদ্ধার, চিকিৎসা, দত্তক সহায়তা ও সচেতনতা — একই সাথে প্রশাসনিক ওভারহেড দায়িত্বশীল কার্যক্রম যতটা সম্ভব কম রাখা। একটি নির্দিষ্ট সময়ের জন্য সঠিক বিভাগ-অনুযায়ী সংখ্যা এখানে সংক্ষিপ্ত করার পরিবর্তে সেই সময়ের তহবিল ব্যবহার প্রতিবেদনে প্রকাশিত হয়, যাতে গোলাকার সংখ্যাকে সুনির্দিষ্ট আর্থিক বিবৃতি হিসেবে উপস্থাপন করা এড়ানো যায়।",
      ],
      categories: [
        { title: "উদ্ধার ও জরুরি চিকিৎসা", description: "উদ্ধারকৃত প্রাণীদের জন্য মাঠ প্রতিক্রিয়া, পরিবহন ও পশুচিকিৎসা।", icon: "🚑" },
        { title: "দত্তক ও আশ্রয়কেন্দ্র সহায়তা", description: "আশ্রয়কেন্দ্র পরিচর্যা, স্বাস্থ্য পরীক্ষা ও দত্তক কর্মসূচি পরিচালনা।", icon: "🐾" },
        { title: "টিকাদান ও স্বাস্থ্য কর্মসূচি", description: "বৃহৎ পরিসরের টিকাদান কর্মসূচি ও প্রতিরোধমূলক স্বাস্থ্য কর্মসূচি।", icon: "💉" },
        { title: "সচেতনতা ও শিক্ষা", description: "দায়িত্বশীল মালিকানা ও প্রাণী কল্যাণ নিয়ে কমিউনিটি প্রচারাভিযান।", icon: "📢" },
        { title: "চ্যাপ্টার ও অংশীদার সমন্বয়", description: "স্থানীয় চ্যাপ্টার ও যাচাইকৃত অংশীদার কার্যক্রমে সহায়তা।", icon: "🌍" },
        { title: "প্রশাসন ও পরিচালনা", description: "তদারকি, অডিটিং ও নেটওয়ার্ককে জবাবদিহিমূলক রাখার ব্যবস্থা।", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "উপলব্ধ প্রতিবেদন",
      title: "আপনি যে প্রতিবেদন অনুরোধ করতে পারেন",
      subtitle: "প্রতিটি প্রতিবেদনের ধরন বিস্তারিত ভিন্ন স্তর কভার করে — মূল ফলাফল থেকে স্বাধীনভাবে পর্যালোচিত আর্থিক পর্যন্ত।",
      items: [
        { title: "বার্ষিক প্রতিবেদন", description: "কর্মসূচির ফলাফল, চ্যাপ্টার বৃদ্ধি ও সামগ্রিক তহবিল ব্যবহারের একটি বার্ষিক সারসংক্ষেপ।", icon: "📘", href: "/contact" },
        { title: "তহবিল ব্যবহার প্রতিবেদন", description: "প্রাপ্ত দান ও তা কীভাবে বরাদ্দ করা হয়েছে তার সময়কাল-অনুযায়ী বিভাজন।", icon: "📊", href: "/contact" },
        { title: "চ্যাপ্টার কার্যক্রম প্রতিবেদন", description: "একটি নির্দিষ্ট দেশ বা শহর চ্যাপ্টারের জন্য কর্মসূচি ও প্রচারাভিযান কার্যক্রম।", icon: "🌍", href: "/contact" },
        { title: "স্বাধীন অডিট সারসংক্ষেপ", description: "WPA-এর হিসাবের স্বাধীন আর্থিক পর্যালোচনা থেকে প্রাপ্ত ফলাফল।", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "একটি প্রতিবেদন অনুরোধ করুন বা একটি যাচাইকৃত কর্মসূচি সমর্থন করুন",
      subtitle: "আমাদের দলের মাধ্যমে অনুরোধে প্রতিবেদন প্রদান করা হয় — যোগাযোগ করুন এবং আপনার প্রয়োজনীয় প্রতিবেদনের ধরন ও সময়কাল নির্দিষ্ট করুন।",
      primaryLabel: "একটি প্রতিবেদন অনুরোধ করুন",
      primaryHref: "/contact",
      secondaryLabel: "এখনই দান করুন",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "সঙ্গী হোন", href: "/partners" },
        { label: "একটি স্থানীয় চ্যাপ্টারে যোগ দিন", href: "/chapters" },
      ],
    },
  },
};

// ─── ZH (Simplified Chinese) ────────────────────────────────────────────────

const zh: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "我们的成果",
      title: "可衡量的影响，透明报告",
      subtitle: "WPA追踪每个项目的成果——不仅仅是活动——让捐赠者、合作伙伴和公众看到真实、可验证的结果。",
      primaryLabel: "查看公开报告",
      primaryHref: "/reports",
      secondaryLabel: "为项目捐赠",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "我们如何定义影响",
      title: "影响以成果衡量，而非仅以活动",
      paragraphs: [
        "报告举办了多少活动或筹集了多少资金很容易。WPA的影响报告走得更远——追踪参与每个项目的动物、社区和合作伙伴实际发生了什么。",
        "以下每个数字都来自WPA的案例追踪、合作伙伴报告和分会活动系统记录的数据——与我们公开报告和审计中使用的记录相同。",
      ],
    },
    metrics: {
      eyebrow: "影响数据面板",
      title: "WPA网络今天的状况",
      subtitle: "这些数据反映了分会和经核实合作伙伴的协调活动，追踪WPA已发布的项目目标。",
      items: [
        { value: "100,000+", label: "受助动物", note: "通过救援、治疗和护理项目。", icon: "🐾" },
        { value: "15,000+", label: "促成领养", note: "通过领养项目的经核实安置。", icon: "🏠" },
        { value: "60,000+", label: "疫苗接种与健康干预", note: "通过合作诊所和活动交付。", icon: "💉" },
        { value: "200+", label: "开展的宣传活动", note: "覆盖地方分会和合作社区。", icon: "📢" },
        { value: "300+", label: "经核实的合作伙伴机构", note: "活跃网络中的诊所、NGO和收容所。", icon: "🤝" },
        { value: "120+", label: "活跃的地方分会", note: "在国家和城市层面协调项目。", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "如何衡量",
      title: "每个数字背后的系统",
      subtitle: "每项指标都有特定的追踪或报告流程支持，而非自我报告的估计。",
      items: [
        { title: "案例追踪系统", description: "每个救援和领养案例从报告到解决都获得追踪ID。", icon: "📋" },
        { title: "合作伙伴活动报告", description: "诊所和收容所定期报告疫苗接种、治疗和领养活动。", icon: "🏥" },
        { title: "分会报告", description: "地方分会向WPA治理层提交活动和项目数据进行汇总。", icon: "🌍" },
        { title: "独立审核", description: "汇总数据在发布前与财务审计一起审核。", icon: "✅" },
      ],
    },
    cta: {
      title: "支持具有可衡量影响的项目",
      subtitle: "每笔贡献都按照此处显示的相同成果进行追踪。",
      primaryLabel: "立即捐赠",
      primaryHref: "/donation",
      secondaryLabel: "成为合作伙伴",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "申请报告", href: "/reports" },
        { label: "加入地方分会", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "透明度",
      title: "每笔捐赠可追踪，每项成果可报告",
      subtitle: "WPA将透明度视为运营要求，而非传播信息——从活动分配到独立审计。",
      primaryLabel: "查看资金使用情况",
      primaryHref: "/reports",
      secondaryLabel: "立即捐赠",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "WPA如何处理捐赠",
      title: "为审查而建的捐赠处理流程",
      paragraphs: [
        "对WPA的大多数捐赠都被分配到特定活动、项目或分会——而不是一个通用的、不可追踪的资金池——因此贡献者可以确切看到他们的捐赠支持了什么。",
        "资金使用情况定期汇编成公开报告，每笔贡献都会发出收据，基础记录以备审计的格式维护，供独立审核。",
        "本页解释该流程背后的机制：资金如何从捐赠到拨付，以及捐赠者、合作伙伴和公众如何验证它。",
      ],
    },
    fundFlow: {
      eyebrow: "资金流向",
      title: "捐赠在WPA中的流转",
      subtitle: "无论捐赠是一次性、定期还是与特定活动挂钩，都适用相同的路径。",
      steps: [
        { number: 1, title: "收到捐赠", description: "收到贡献并发出收据，记录金额、日期和目的。" },
        { number: 2, title: "分配到活动或项目", description: "资金根据捐赠支持的具体活动、项目或分会进行记录。" },
        { number: 3, title: "拨付给经核实的合作伙伴", description: "资金发放给交付相关项目的经审核诊所、收容所或分会。" },
        { number: 4, title: "活动报告回馈", description: "合作伙伴和分会报告资金的使用方式和产生的成果。" },
        { number: 5, title: "纳入公开报告", description: "资金使用和成果汇编成报告，供公众和捐赠者审查。" },
      ],
    },
    donorConfidence: {
      eyebrow: "捐赠者信心",
      title: "捐赠者最常问的问题的答案",
      subtitle: "透明意味着对机制具体说明，而非仅仅重复这个词。",
      items: [
        { title: "资金去向", description: "每笔贡献都标记到项目或活动并追踪到拨付，而非匿名汇入资金池。", icon: "🔍" },
        { title: "案例如何核实", description: "救援和治疗案例从首次报告到解决都使用案例ID追踪。", icon: "📋" },
        { title: "合作伙伴如何审核", description: "诊所、NGO和收容所在入职前经过审核并持续审查。", icon: "✅" },
        { title: "影响如何报告", description: "成果从合作伙伴和分会报告中汇总，然后在定期报告中发布。", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "内置保障",
      title: "使其可验证的功能",
      subtitle: "",
      items: [
        { title: "基于活动的分配", description: "捐赠与特定活动或项目挂钩，而非通用不可追踪的资金。", icon: "🎯" },
        { title: "公开报告", description: "资金使用和项目成果定期发布供公众审查。", icon: "📄" },
        { title: "捐赠收据", description: "每笔贡献生成确认金额、日期和目的的收据。", icon: "🧾" },
        { title: "经核实的使用记录", description: "拨付根据接收的合作伙伴和项目记录。", icon: "🔒" },
        { title: "备审记录", description: "财务和项目记录以准备独立审计的格式维护。", icon: "🗂️" },
      ],
    },
    cta: {
      title: "审查我们透明承诺背后的记录",
      subtitle: "申请资金使用报告，或在确切知道贡献如何追踪的情况下支持项目。",
      primaryLabel: "申请报告",
      primaryHref: "/reports",
      secondaryLabel: "立即捐赠",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "成为合作伙伴", href: "/partners" },
        { label: "加入地方分会", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "公开报告",
      title: "资金使用和项目成果，公开发布",
      subtitle: "WPA将资金使用和项目活动汇编成报告，供捐赠者、合作伙伴和公众查阅——申请对您重要的报告类型。",
      primaryLabel: "申请报告",
      primaryHref: "/contact",
      secondaryLabel: "透明度如何运作",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "资金使用",
      title: "捐赠的流向",
      paragraphs: [
        "捐赠被分配到一组定义的项目类别，而非单一通用基金，因此捐赠者和审计者都可以追踪支出到特定目的。",
        "WPA的既定优先事项是将最大份额的资金用于直接项目交付——救援、治疗、领养支持和宣传——同时将行政开销保持在负责任运营允许的最低水平。给定期间的精确类别数据在该期间的资金使用报告中发布，而非在此处总结，以避免将四舍五入的数字作为精确的财务报表呈现。",
      ],
      categories: [
        { title: "救援与紧急治疗", description: "获救动物的现场响应、运输和兽医治疗。", icon: "🚑" },
        { title: "领养与收容所支持", description: "收容护理、健康检查和领养项目运营。", icon: "🐾" },
        { title: "疫苗接种与健康活动", description: "大规模疫苗接种活动和预防性健康项目。", icon: "💉" },
        { title: "宣传与教育", description: "关于负责任养宠和动物福利的社区活动。", icon: "📢" },
        { title: "分会与合作伙伴协调", description: "支持地方分会和经核实的合作伙伴运营。", icon: "🌍" },
        { title: "行政与治理", description: "监督、审计和保持网络问责的系统。", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "可用报告",
      title: "您可以申请的报告",
      subtitle: "每种报告类型涵盖不同级别的详细信息——从摘要成果到独立审核的财务报表。",
      items: [
        { title: "年度报告", description: "项目成果、分会发展和整体资金使用情况的年度总结。", icon: "📘", href: "/contact" },
        { title: "资金使用报告", description: "收到的捐赠及其分配方式的逐期细分。", icon: "📊", href: "/contact" },
        { title: "分会活动报告", description: "特定国家或城市分会的项目和活动。", icon: "🌍", href: "/contact" },
        { title: "独立审计摘要", description: "WPA账户独立财务审查的结果。", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "申请报告或支持经核实的项目",
      subtitle: "报告通过我们的团队按请求提供——联系我们并指定您需要的报告类型和期间。",
      primaryLabel: "申请报告",
      primaryHref: "/contact",
      secondaryLabel: "立即捐赠",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "成为合作伙伴", href: "/partners" },
        { label: "加入地方分会", href: "/chapters" },
      ],
    },
  },
};

// ─── JA (Japanese) ──────────────────────────────────────────────────────────

const ja: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "私たちのインパクト",
      title: "測定可能なインパクト、透明な報告",
      subtitle: "WPAはすべてのプログラムの成果を追跡します——活動だけでなく——寄付者、パートナー、一般の人々が実際の検証可能な結果を見られるようにします。",
      primaryLabel: "公開報告書を見る",
      primaryHref: "/reports",
      secondaryLabel: "プログラムに寄付",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "インパクトの定義方法",
      title: "インパクトは活動だけでなく成果で測定される",
      paragraphs: [
        "何件のイベントが開催されたか、いくら集金されたかを報告するのは簡単です。WPAのインパクト報告はさらに進んで——各プログラムに関与した動物、コミュニティ、パートナーに実際に何が起こったかを追跡します。",
        "以下のすべての数字は、WPAのケース追跡、パートナー報告、支部活動システムを通じて記録されたデータに基づいています——公開報告書と監査で使用されるのと同じ記録です。",
      ],
    },
    metrics: {
      eyebrow: "インパクトダッシュボード",
      title: "WPAのネットワークの現在の状況",
      subtitle: "これらの数字は支部と検証済みパートナー全体の連携活動を反映し、WPAの公開プログラムターゲットに向けて追跡されています。",
      items: [
        { value: "100,000+", label: "支援された動物", note: "救助、治療、ケアプログラムを通じて。", icon: "🐾" },
        { value: "15,000+", label: "あっせんされた里親", note: "里親プログラムを通じた検証済みの配置。", icon: "🏠" },
        { value: "60,000+", label: "予防接種・健康介入", note: "パートナークリニックとキャンペーンを通じて提供。", icon: "💉" },
        { value: "200+", label: "実施された啓発キャンペーン", note: "地域支部とパートナーコミュニティ全体で。", icon: "📢" },
        { value: "300+", label: "検証済みパートナー団体", note: "アクティブネットワーク内のクリニック、NGO、保護施設。", icon: "🤝" },
        { value: "120+", label: "アクティブな地域支部", note: "国・都市レベルでプログラムを調整。", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "測定方法",
      title: "すべての数字の背後にあるシステム",
      subtitle: "各指標は特定の追跡または報告プロセスによって裏付けられており、自己報告の推定ではありません。",
      items: [
        { title: "ケース追跡システム", description: "すべての救助・里親ケースは報告から解決まで追跡IDが付与されます。", icon: "📋" },
        { title: "パートナー活動報告", description: "クリニックと保護施設は定期的に予防接種、治療、里親活動を報告します。", icon: "🏥" },
        { title: "支部報告", description: "地域支部はキャンペーンとプログラム活動をWPAガバナンスに提出して集計します。", icon: "🌍" },
        { title: "独立レビュー", description: "集計数字は公開前に財務監査とともにレビューされます。", icon: "✅" },
      ],
    },
    cta: {
      title: "測定可能なインパクトのあるプログラムを支援",
      subtitle: "すべての貢献はここで示された同じ成果に対して追跡されます。",
      primaryLabel: "今すぐ寄付",
      primaryHref: "/donation",
      secondaryLabel: "パートナーになる",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "報告書をリクエスト", href: "/reports" },
        { label: "地域支部に参加", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "透明性",
      title: "すべての寄付を追跡。すべての成果を報告。",
      subtitle: "WPAは透明性をコミュニケーションメッセージではなく運営要件として扱います——キャンペーン配分から独立監査まで。",
      primaryLabel: "資金使用を見る",
      primaryHref: "/reports",
      secondaryLabel: "今すぐ寄付",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "WPAの寄付処理方法",
      title: "精査のために構築された寄付処理プロセス",
      paragraphs: [
        "WPAへのほとんどの寄付は、特定のキャンペーン、プログラム、または支部に配分されます——追跡不可能な一般プールではなく——貢献者は自分の寄付が何をサポートしたか正確に確認できます。",
        "資金使用は定期的に公開報告書に集計され、すべての貢献に領収書が発行され、基礎となる記録は独立レビューのために監査対応形式で維持されます。",
        "このページでは、そのプロセスの背後にある仕組み——資金が寄付から支出までどのように移動し、寄付者、パートナー、一般の人々がそれをどのように検証できるかを説明します。",
      ],
    },
    fundFlow: {
      eyebrow: "資金フロー",
      title: "寄付がWPAを通過する仕組み",
      subtitle: "寄付が1回限り、定期、特定のキャンペーンに紐付いているかに関係なく同じパスが適用されます。",
      steps: [
        { number: 1, title: "寄付の受領", description: "貢献を受領し、金額、日付、目的を記録した領収書を発行します。" },
        { number: 2, title: "キャンペーンまたはプログラムへの配分", description: "資金は寄付された特定のキャンペーン、プログラム、支部に対して記録されます。" },
        { number: 3, title: "検証済みパートナーへの支出", description: "関連プログラムを提供する審査済みクリニック、保護施設、支部に資金が放出されます。" },
        { number: 4, title: "活動の報告", description: "パートナーと支部が資金の使用方法と結果を報告します。" },
        { number: 5, title: "公開報告書への含入", description: "資金使用と成果が一般・寄付者レビュー用の報告書に集計されます。" },
      ],
    },
    donorConfidence: {
      eyebrow: "寄付者の信頼",
      title: "寄付者が最もよく尋ねる質問への回答",
      subtitle: "透明性とはメカニズムについて具体的にすることで、単語を繰り返すだけではありません。",
      items: [
        { title: "資金の使途", description: "すべての貢献はプログラムまたはキャンペーンにタグ付けされ、支出まで追跡されます。匿名でプールされません。", icon: "🔍" },
        { title: "ケースの検証方法", description: "救助・治療ケースは最初の報告から解決までケースIDで追跡されます。", icon: "📋" },
        { title: "パートナーのチェック方法", description: "クリニック、NGO、保護施設はオンボーディング前に審査され、継続的にレビューされます。", icon: "✅" },
        { title: "インパクトの報告方法", description: "成果はパートナー・支部報告から集計され、定期的な報告書で公開されます。", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "組み込みのセーフガード",
      title: "検証可能にする機能",
      subtitle: "",
      items: [
        { title: "キャンペーンベースの配分", description: "寄付は一般的な追跡不可能な基金ではなく特定のキャンペーン・プログラムに紐付けられます。", icon: "🎯" },
        { title: "公開報告書", description: "資金使用とプログラム成果は定期的に公開レビューのために発表されます。", icon: "📄" },
        { title: "寄付者領収書", description: "すべての貢献に金額、日付、目的を確認する領収書が発行されます。", icon: "🧾" },
        { title: "検証済み使用記録", description: "支出は受け取ったパートナーとプログラムに対して記録されます。", icon: "🔒" },
        { title: "監査対応記録", description: "財務・プログラム記録は独立監査に対応した形式で維持されます。", icon: "🗂️" },
      ],
    },
    cta: {
      title: "透明性コミットメントの背後にある記録をレビュー",
      subtitle: "資金使用報告書をリクエストするか、貢献の追跡方法を正確に知った上でプログラムを支援してください。",
      primaryLabel: "報告書をリクエスト",
      primaryHref: "/reports",
      secondaryLabel: "今すぐ寄付",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "パートナーになる", href: "/partners" },
        { label: "地域支部に参加", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "公開報告書",
      title: "資金使用とプログラム成果、公開で発表",
      subtitle: "WPAは資金使用とプログラム活動を寄付者、パートナー、一般の人々が利用できる報告書に集計します——重要な報告タイプをリクエストしてください。",
      primaryLabel: "報告書をリクエスト",
      primaryHref: "/contact",
      secondaryLabel: "透明性の仕組み",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "資金使用",
      title: "寄付の使途",
      paragraphs: [
        "寄付は単一の一般基金ではなく定義されたプログラムカテゴリに配分されるため、寄付者と監査人の両方が支出を特定の目的にトレースできます。",
        "WPAの優先事項は資金の最大割合を直接プログラム提供——救助、治療、里親サポート、啓発——に向けながら、管理オーバーヘッドを責任ある運営が許す限り低く抑えることです。所定期間の正確なカテゴリ別数字は、丸められた数字を正確な財務諸表として提示するのを避けるため、ここの要約ではなくその期間の資金使用報告書で公開されます。",
      ],
      categories: [
        { title: "救助・緊急治療", description: "救助動物の現場対応、輸送、獣医治療。", icon: "🚑" },
        { title: "里親・保護施設サポート", description: "保護ケア、健康チェック、里親プログラム運営。", icon: "🐾" },
        { title: "予防接種・健康キャンペーン", description: "大規模予防接種キャンペーンと予防的健康プログラム。", icon: "💉" },
        { title: "啓発・教育", description: "責任ある飼育と動物福祉に関するコミュニティキャンペーン。", icon: "📢" },
        { title: "支部・パートナー調整", description: "地域支部と検証済みパートナー運営のサポート。", icon: "🌍" },
        { title: "管理・ガバナンス", description: "監督、監査、ネットワークの責任を保つシステム。", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "利用可能な報告書",
      title: "リクエストできる報告書",
      subtitle: "各報告タイプは異なる詳細レベルをカバーします——主要成果から独立レビュー済みの財務まで。",
      items: [
        { title: "年次報告書", description: "プログラム成果、支部成長、全体的な資金使用の年間要約。", icon: "📘", href: "/contact" },
        { title: "資金使用報告書", description: "受領した寄付とその配分方法の期間別内訳。", icon: "📊", href: "/contact" },
        { title: "支部活動報告書", description: "特定の国・都市支部のプログラム・キャンペーン活動。", icon: "🌍", href: "/contact" },
        { title: "独立監査要約", description: "WPAの口座の独立財務レビューの結果。", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "報告書のリクエストまたは検証済みプログラムの支援",
      subtitle: "報告書はチームを通じてリクエストに応じて提供されます——必要な報告タイプと期間を指定してご連絡ください。",
      primaryLabel: "報告書をリクエスト",
      primaryHref: "/contact",
      secondaryLabel: "今すぐ寄付",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "パートナーになる", href: "/partners" },
        { label: "地域支部に参加", href: "/chapters" },
      ],
    },
  },
};

// ─── KO (Korean) ────────────────────────────────────────────────────────────

const ko: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "우리의 성과",
      title: "측정 가능한 성과, 투명하게 보고",
      subtitle: "WPA는 모든 프로그램의 성과를 추적합니다 — 단순 활동이 아닌 — 기부자, 파트너, 대중이 실제 검증 가능한 결과를 볼 수 있도록 합니다.",
      primaryLabel: "공개 보고서 보기",
      primaryHref: "/reports",
      secondaryLabel: "프로그램에 기부",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "성과를 어떻게 정의하는가",
      title: "성과는 활동만이 아닌 결과로 측정됩니다",
      paragraphs: [
        "몇 건의 행사가 열렸는지, 얼마가 모금되었는지 보고하는 것은 쉽습니다. WPA의 성과 보고는 더 나아갑니다 — 각 프로그램에 참여한 동물, 지역사회, 파트너에게 실제로 어떤 일이 일어났는지를 추적합니다.",
        "아래 각 수치는 WPA의 사례 추적, 파트너 보고, 지부 활동 시스템을 통해 기록된 데이터에서 나옵니다 — 공개 보고서와 감사에서 사용되는 동일한 기록입니다.",
      ],
    },
    metrics: {
      eyebrow: "성과 대시보드",
      title: "오늘날 WPA 네트워크의 현황",
      subtitle: "이 수치는 지부와 검증된 파트너 전반의 조율된 활동을 반영하며, WPA의 공개 프로그램 목표에 맞춰 추적됩니다.",
      items: [
        { value: "100,000+", label: "지원받은 동물", note: "구조, 치료, 돌봄 프로그램을 통해.", icon: "🐾" },
        { value: "15,000+", label: "지원된 입양", note: "입양 프로그램을 통한 검증된 배치.", icon: "🏠" },
        { value: "60,000+", label: "예방접종 및 건강 개입", note: "파트너 클리닉과 캠페인을 통해 제공.", icon: "💉" },
        { value: "200+", label: "실행된 인식 캠페인", note: "지역 지부와 파트너 지역사회 전반.", icon: "📢" },
        { value: "300+", label: "검증된 파트너 기관", note: "활성 네트워크 내 클리닉, NGO, 보호소.", icon: "🤝" },
        { value: "120+", label: "활성 지역 지부", note: "국가 및 도시 수준에서 프로그램 조율.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "측정 방법",
      title: "모든 숫자 뒤의 시스템",
      subtitle: "각 지표는 특정 추적 또는 보고 절차로 뒷받침되며, 자기 보고 추정이 아닙니다.",
      items: [
        { title: "사례 추적 시스템", description: "모든 구조·입양 사례는 신고부터 해결까지 추적 ID를 받습니다.", icon: "📋" },
        { title: "파트너 활동 보고", description: "클리닉과 보호소는 정기적으로 예방접종, 치료, 입양 활동을 보고합니다.", icon: "🏥" },
        { title: "지부 보고", description: "지역 지부가 캠페인과 프로그램 활동을 WPA 거버넌스에 제출해 집계합니다.", icon: "🌍" },
        { title: "독립 검토", description: "집계 수치는 공개 전 재무 감사와 함께 검토됩니다.", icon: "✅" },
      ],
    },
    cta: {
      title: "측정 가능한 성과가 있는 프로그램을 지원하세요",
      subtitle: "모든 기여는 여기에 표시된 동일한 결과에 대해 추적됩니다.",
      primaryLabel: "지금 기부",
      primaryHref: "/donation",
      secondaryLabel: "파트너 되기",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "보고서 요청", href: "/reports" },
        { label: "지역 지부 가입", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "투명성",
      title: "모든 기부는 추적되고, 모든 성과는 보고됩니다",
      subtitle: "WPA는 투명성을 커뮤니케이션 메시지가 아닌 운영 요구사항으로 취급합니다 — 캠페인 배정부터 독립 감사까지.",
      primaryLabel: "자금 사용 보기",
      primaryHref: "/reports",
      secondaryLabel: "지금 기부",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "WPA의 기부 처리 방식",
      title: "검토를 위해 구축된 기부 처리 절차",
      paragraphs: [
        "WPA에 대한 대부분의 기부는 특정 캠페인, 프로그램, 지부에 배정됩니다 — 추적 불가능한 일반 풀이 아니라 — 기여자는 자신의 기부가 무엇을 지원했는지 정확히 볼 수 있습니다.",
        "자금 사용은 정기적으로 공개 보고서로 집계되며, 모든 기여에 영수증이 발급되고, 기반 기록은 독립 검토를 위해 감사 준비 형식으로 유지됩니다.",
        "이 페이지는 그 절차 이면의 메커니즘을 설명합니다: 자금이 기부에서 지급까지 어떻게 이동하고, 기부자, 파트너, 대중이 어떻게 검증할 수 있는지.",
      ],
    },
    fundFlow: {
      eyebrow: "자금 흐름",
      title: "기부가 WPA에서 어떻게 이동하는가",
      subtitle: "일회성, 정기, 특정 캠페인 연결 모두 동일한 경로가 적용됩니다.",
      steps: [
        { number: 1, title: "기부 접수", description: "기여를 접수하고 금액, 날짜, 목적을 기록한 영수증을 발급합니다." },
        { number: 2, title: "캠페인 또는 프로그램 배정", description: "자금은 기부된 특정 캠페인, 프로그램, 지부에 대해 기록됩니다." },
        { number: 3, title: "검증된 파트너에 지급", description: "관련 프로그램을 제공하는 심사된 클리닉, 보호소, 지부에 자금이 지급됩니다." },
        { number: 4, title: "활동 보고", description: "파트너와 지부가 자금 사용 방식과 결과를 보고합니다." },
        { number: 5, title: "공개 보고서 포함", description: "자금 사용과 성과가 대중·기부자 검토용 보고서로 집계됩니다." },
      ],
    },
    donorConfidence: {
      eyebrow: "기부자 신뢰",
      title: "기부자가 가장 자주 묻는 질문에 대한 답변",
      subtitle: "투명성은 메커니즘에 대해 구체적으로 하는 것이지, 단어를 반복하는 것만이 아닙니다.",
      items: [
        { title: "자금의 행방", description: "모든 기여는 프로그램 또는 캠페인에 태그되고 지급까지 추적됩니다. 익명으로 풀에 넣지 않습니다.", icon: "🔍" },
        { title: "사례 검증 방식", description: "구조·치료 사례는 첫 신고부터 해결까지 사례 ID로 추적됩니다.", icon: "📋" },
        { title: "파트너 확인 방식", description: "클리닉, NGO, 보호소는 온보딩 전 심사되고 지속적으로 검토됩니다.", icon: "✅" },
        { title: "성과 보고 방식", description: "결과는 파트너·지부 보고에서 집계되어 정기 보고서로 공개됩니다.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "내재된 안전장치",
      title: "검증 가능하게 만드는 기능",
      subtitle: "",
      items: [
        { title: "캠페인 기반 배정", description: "기부는 일반 추적 불가능 기금이 아닌 특정 캠페인·프로그램에 연결됩니다.", icon: "🎯" },
        { title: "공개 보고서", description: "자금 사용과 프로그램 성과가 정기적으로 공개 검토를 위해 발표됩니다.", icon: "📄" },
        { title: "기부자 영수증", description: "모든 기여에 금액, 날짜, 목적을 확인하는 영수증이 발급됩니다.", icon: "🧾" },
        { title: "검증된 사용 기록", description: "지급은 받은 파트너와 프로그램에 대해 기록됩니다.", icon: "🔒" },
        { title: "감사 준비 기록", description: "재무·프로그램 기록이 독립 감사에 대비한 형식으로 유지됩니다.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "투명성 약속 뒤의 기록을 검토하세요",
      subtitle: "자금 사용 보고서를 요청하거나, 기여가 어떻게 추적되는지 정확히 알고 프로그램을 지원하세요.",
      primaryLabel: "보고서 요청",
      primaryHref: "/reports",
      secondaryLabel: "지금 기부",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "파트너 되기", href: "/partners" },
        { label: "지역 지부 가입", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "공개 보고서",
      title: "자금 사용과 프로그램 성과, 공개 발표",
      subtitle: "WPA는 자금 사용과 프로그램 활동을 기부자, 파트너, 대중이 이용할 수 있는 보고서로 집계합니다 — 중요한 보고서 유형을 요청하세요.",
      primaryLabel: "보고서 요청",
      primaryHref: "/contact",
      secondaryLabel: "투명성의 작동 방식",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "자금 사용",
      title: "기부의 행방",
      paragraphs: [
        "기부는 단일 일반 기금이 아닌 정의된 프로그램 카테고리에 배정되어, 기부자와 감사인 모두 지출을 특정 목적으로 추적할 수 있습니다.",
        "WPA의 우선순위는 자금의 가장 큰 부분을 직접 프로그램 제공 — 구조, 치료, 입양 지원, 인식개선 — 에 투입하면서, 행정 오버헤드를 책임 있는 운영이 허용하는 만큼 낮게 유지하는 것입니다. 특정 기간의 정확한 카테고리별 수치는 여기서 요약하는 대신 해당 기간의 자금 사용 보고서에 공개되며, 반올림된 수치를 정확한 재무제표로 제시하는 것을 피합니다.",
      ],
      categories: [
        { title: "구조 및 긴급 치료", description: "구조 동물의 현장 대응, 이송, 수의 치료.", icon: "🚑" },
        { title: "입양 및 보호소 지원", description: "보호 돌봄, 건강 검진, 입양 프로그램 운영.", icon: "🐾" },
        { title: "예방접종 및 건강 캠페인", description: "대규모 예방접종 캠페인과 예방 건강 프로그램.", icon: "💉" },
        { title: "인식개선 및 교육", description: "책임감 있는 소유와 동물 복지에 대한 지역사회 캠페인.", icon: "📢" },
        { title: "지부 및 파트너 조율", description: "지역 지부와 검증된 파트너 운영 지원.", icon: "🌍" },
        { title: "행정 및 거버넌스", description: "감독, 감사, 네트워크의 책무성을 유지하는 시스템.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "이용 가능한 보고서",
      title: "요청할 수 있는 보고서",
      subtitle: "각 보고서 유형은 다른 수준의 상세를 다룹니다 — 주요 성과부터 독립 검토된 재무까지.",
      items: [
        { title: "연례 보고서", description: "프로그램 성과, 지부 성장, 전반적 자금 사용의 연간 요약.", icon: "📘", href: "/contact" },
        { title: "자금 사용 보고서", description: "받은 기부와 배정 방식의 기간별 내역.", icon: "📊", href: "/contact" },
        { title: "지부 활동 보고서", description: "특정 국가 또는 도시 지부의 프로그램·캠페인 활동.", icon: "🌍", href: "/contact" },
        { title: "독립 감사 요약", description: "WPA 계정의 독립 재무 검토 결과.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "보고서 요청 또는 검증된 프로그램 지원",
      subtitle: "보고서는 팀을 통해 요청 시 제공됩니다 — 필요한 보고서 유형과 기간을 지정해 연락하세요.",
      primaryLabel: "보고서 요청",
      primaryHref: "/contact",
      secondaryLabel: "지금 기부",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "파트너 되기", href: "/partners" },
        { label: "지역 지부 가입", href: "/chapters" },
      ],
    },
  },
};

// ─── AR (Arabic) ────────────────────────────────────────────────────────────

const ar: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "أثرنا",
      title: "أثر قابل للقياس، تُقدَّم عنه تقارير شفافة",
      subtitle: "تتابع WPA النتائج في كل برنامج — وليس مجرد النشاط — حتى يتمكن المتبرعون والشركاء والجمهور من رؤية نتائج حقيقية وقابلة للتحقق.",
      primaryLabel: "عرض التقارير العامة",
      primaryHref: "/reports",
      secondaryLabel: "تبرّع للبرامج",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "كيف نعرّف الأثر",
      title: "يُقاس الأثر بالنتائج، لا بالنشاط وحده",
      paragraphs: [
        "من السهل الإبلاغ عن عدد الفعاليات التي أقيمت أو مقدار الأموال التي جُمعت. تذهب تقارير الأثر في WPA إلى أبعد من ذلك — إذ تتابع ما حدث فعلاً للحيوانات والمجتمعات والشركاء المشاركين في كل برنامج.",
        "يأتي كل رقم أدناه من بيانات مسجَّلة عبر أنظمة WPA لتتبع الحالات، وتقارير الشركاء، وأنشطة الفروع — وهي نفس السجلات المستخدمة في تقاريرنا العامة وعمليات التدقيق.",
      ],
    },
    metrics: {
      eyebrow: "لوحة معلومات الأثر",
      title: "أين تقف شبكة WPA اليوم",
      subtitle: "تعكس هذه الأرقام النشاط المنسّق عبر الفروع والشركاء الموثَّقين، ويجري تتبعها في مقابل أهداف البرامج المعلنة لدى WPA.",
      items: [
        { value: "100,000+", label: "حيوان تمت مساعدته", note: "من خلال برامج الإنقاذ والعلاج والرعاية.", icon: "🐾" },
        { value: "15,000+", label: "عملية تبنٍّ تم تسهيلها", note: "عمليات إسكان موثَّقة عبر برنامج التبني.", icon: "🏠" },
        { value: "60,000+", label: "تدخل تطعيم وصحي", note: "قُدِّمت عبر العيادات والحملات الشريكة.", icon: "💉" },
        { value: "200+", label: "حملة توعية أُطلقت", note: "عبر الفروع المحلية والمجتمعات الشريكة.", icon: "📢" },
        { value: "300+", label: "منظمة شريكة موثَّقة", note: "عيادات ومنظمات غير حكومية وملاجئ ضمن الشبكة الفعالة.", icon: "🤝" },
        { value: "120+", label: "فرع محلي نشط", note: "تنسّق البرامج على مستوى الدول والمدن.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "كيف يُقاس ذلك",
      title: "الأنظمة الكامنة وراء كل رقم",
      subtitle: "كل مؤشر مدعوم بعملية تتبع أو إبلاغ محددة، وليس تقديراً ذاتي الإبلاغ.",
      items: [
        { title: "نظام تتبع الحالات", description: "تحصل كل حالة إنقاذ وتبنٍّ على معرّف متابعة من لحظة الإبلاغ حتى الحل.", icon: "📋" },
        { title: "تقارير نشاط الشركاء", description: "تُبلغ العيادات والملاجئ عن أنشطة التطعيم والعلاج والتبني وفق جدول منتظم.", icon: "🏥" },
        { title: "تقارير الفروع", description: "ترفع الفروع المحلية أنشطة الحملات والبرامج إلى حوكمة WPA لتجميعها.", icon: "🌍" },
        { title: "مراجعة مستقلة", description: "تُراجَع الأرقام المجمَّعة إلى جانب عمليات التدقيق المالي قبل النشر.", icon: "✅" },
      ],
    },
    cta: {
      title: "ادعم برامج ذات أثر قابل للقياس",
      subtitle: "تُتابَع كل مساهمة مقابل النتائج نفسها الموضحة هنا.",
      primaryLabel: "تبرّع الآن",
      primaryHref: "/donation",
      secondaryLabel: "كن شريكاً",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "اطلب تقريراً", href: "/reports" },
        { label: "انضم إلى فرع محلي", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "الشفافية",
      title: "كل تبرّع يُتابَع. كل نتيجة يُبلَّغ عنها.",
      subtitle: "تتعامل WPA مع الشفافية كمتطلَّب تشغيلي، لا كرسالة تواصل — من تخصيص الحملات إلى التدقيق المستقل.",
      primaryLabel: "عرض استخدام الأموال",
      primaryHref: "/reports",
      secondaryLabel: "تبرّع الآن",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "كيف تتعامل WPA مع التبرعات",
      title: "عملية معالجة تبرعات مصمَّمة لتحمل التدقيق",
      paragraphs: [
        "تُخصَّص معظم التبرعات المقدَّمة لـ WPA لحملة أو برنامج أو فرع محدد — وليس لمجمَّع عام غير متابَع — بحيث يستطيع المتبرعون رؤية ما دعمته هبتهم بالضبط.",
        "يُجمَّع استخدام الأموال في تقارير عامة بشكل دوري، وتُصدر إيصالات لكل تبرّع، وتُحفظ السجلات الأساسية بصيغة جاهزة للتدقيق من قبل جهات مستقلة.",
        "توضح هذه الصفحة الآلية الكامنة وراء تلك العملية: كيف تنتقل الأموال من التبرّع إلى الصرف، وكيف يمكن للمتبرعين والشركاء والجمهور التحقق من ذلك.",
      ],
    },
    fundFlow: {
      eyebrow: "مسار الأموال",
      title: "كيف يتنقل التبرّع عبر WPA",
      subtitle: "ينطبق المسار نفسه سواء كان التبرّع لمرة واحدة أو متكرراً أو مرتبطاً بحملة محددة.",
      steps: [
        { number: 1, title: "استلام التبرّع", description: "تُستلم المساهمة ويُصدر إيصال يسجّل المبلغ والتاريخ والغرض." },
        { number: 2, title: "التخصيص لحملة أو برنامج", description: "تُسجَّل الأموال مقابل الحملة أو البرنامج أو الفرع المحدد الذي قُدِّمت لدعمه." },
        { number: 3, title: "الصرف للشركاء الموثَّقين", description: "تُصرف الأموال للعيادات أو الملاجئ أو الفروع المعتمدة التي تنفّذ البرنامج المعني." },
        { number: 4, title: "الإبلاغ عن النشاط", description: "يُبلغ الشركاء والفروع عن كيفية استخدام الأموال والنتائج المتحققة." },
        { number: 5, title: "الإدراج في التقارير العامة", description: "يُجمَّع استخدام الأموال والنتائج في تقارير متاحة لمراجعة الجمهور والمتبرعين." },
      ],
    },
    donorConfidence: {
      eyebrow: "ثقة المتبرعين",
      title: "إجابات عن الأسئلة الأكثر شيوعاً لدى المتبرعين",
      subtitle: "الشفافية تعني توضيح الآليات بدقة، لا مجرد تكرار الكلمة.",
      items: [
        { title: "إلى أين تذهب الأموال", description: "تُوسَم كل مساهمة ببرنامج أو حملة محددة وتُتابَع حتى الصرف، ولا تُجمَّع بشكل مجهول.", icon: "🔍" },
        { title: "كيف يتم التحقق من الحالات", description: "تُتابَع حالات الإنقاذ والعلاج بمعرّف حالة من أول بلاغ وحتى الحل.", icon: "📋" },
        { title: "كيف يُتحقق من الشركاء", description: "تُفحص العيادات والمنظمات غير الحكومية والملاجئ قبل الانضمام وتُراجَع بشكل مستمر.", icon: "✅" },
        { title: "كيف يُبلَّغ عن الأثر", description: "تُجمَّع النتائج من تقارير الشركاء والفروع، ثم تُنشر في تقارير دورية.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "ضمانات مدمجة",
      title: "الميزات التي تجعل هذا قابلاً للتحقق",
      subtitle: "",
      items: [
        { title: "تخصيص قائم على الحملات", description: "تُربط التبرعات بحملات أو برامج محددة بدلاً من صندوق عام غير متابَع.", icon: "🎯" },
        { title: "تقارير عامة", description: "يُنشر استخدام الأموال ونتائج البرامج بشكل دوري لمراجعة الجمهور.", icon: "📄" },
        { title: "إيصالات المتبرعين", description: "تُصدر كل مساهمة إيصالاً يؤكد المبلغ والتاريخ والغرض.", icon: "🧾" },
        { title: "سجلات استخدام موثَّقة", description: "تُسجَّل عمليات الصرف مقابل الشريك والبرنامج اللذين تلقياها.", icon: "🔒" },
        { title: "سجلات جاهزة للتدقيق", description: "تُحفظ السجلات المالية والبرامجية بصيغة جاهزة للتدقيق المستقل.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "راجع السجلات الكامنة وراء التزاماتنا بالشفافية",
      subtitle: "اطلب تقرير استخدام الأموال، أو ادعم برنامجاً وأنت تعرف بالضبط كيف تُتابَع المساهمات.",
      primaryLabel: "اطلب تقريراً",
      primaryHref: "/reports",
      secondaryLabel: "تبرّع الآن",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "كن شريكاً", href: "/partners" },
        { label: "انضم إلى فرع محلي", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "التقارير العامة",
      title: "استخدام الأموال ونتائج البرامج، منشورة علناً",
      subtitle: "تجمّع WPA استخدام الأموال ونشاط البرامج في تقارير متاحة للمتبرعين والشركاء والجمهور — اطلب نوع التقرير الذي يهمك.",
      primaryLabel: "اطلب تقريراً",
      primaryHref: "/contact",
      secondaryLabel: "كيف تعمل الشفافية",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "استخدام الأموال",
      title: "إلى أين تتجه التبرعات",
      paragraphs: [
        "تُخصَّص التبرعات عبر مجموعة محددة من فئات البرامج بدلاً من صندوق عام واحد، بحيث يستطيع المتبرعون والمدققون على حد سواء تتبّع الإنفاق إلى غرض محدد.",
        "تتمثل أولوية WPA المعلنة في توجيه الحصة الأكبر من الأموال إلى تنفيذ البرامج المباشر — الإنقاذ، والعلاج، ودعم التبني، والتوعية — مع إبقاء النفقات الإدارية عند أدنى مستوى تسمح به التشغيل المسؤول. تُنشر الأرقام الدقيقة لكل فئة عن فترة معينة في تقرير استخدام الأموال الخاص بتلك الفترة بدلاً من تلخيصها هنا، لتفادي عرض أرقام تقريبية كبيانات مالية دقيقة.",
      ],
      categories: [
        { title: "الإنقاذ والعلاج الطارئ", description: "الاستجابة الميدانية والنقل والعلاج البيطري للحيوانات المنقذة.", icon: "🚑" },
        { title: "التبني ودعم الملاجئ", description: "رعاية الملجأ، والفحوصات الصحية، وتشغيل برنامج التبني.", icon: "🐾" },
        { title: "حملات التطعيم والصحة", description: "حملات تطعيم واسعة النطاق وبرامج صحية وقائية.", icon: "💉" },
        { title: "التوعية والتثقيف", description: "حملات مجتمعية حول الملكية المسؤولة ورفاهية الحيوان.", icon: "📢" },
        { title: "تنسيق الفروع والشركاء", description: "دعم الفروع المحلية وعمليات الشركاء الموثَّقين.", icon: "🌍" },
        { title: "الإدارة والحوكمة", description: "الإشراف والتدقيق والأنظمة التي تحافظ على مساءلة الشبكة.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "التقارير المتاحة",
      title: "التقارير التي يمكنك طلبها",
      subtitle: "يغطي كل نوع من التقارير مستوى مختلفاً من التفاصيل — من النتائج الرئيسية إلى البيانات المالية المراجَعة باستقلالية.",
      items: [
        { title: "التقرير السنوي", description: "ملخص سنوي لنتائج البرامج، ونمو الفروع، والاستخدام الإجمالي للأموال.", icon: "📘", href: "/contact" },
        { title: "تقرير استخدام الأموال", description: "تفصيل دوري للتبرعات المستلمة وكيفية تخصيصها.", icon: "📊", href: "/contact" },
        { title: "تقرير نشاط الفروع", description: "نشاط البرامج والحملات لفرع بلد أو مدينة محدد.", icon: "🌍", href: "/contact" },
        { title: "ملخص التدقيق المستقل", description: "نتائج المراجعة المالية المستقلة لحسابات WPA.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "اطلب تقريراً أو ادعم برنامجاً موثَّقاً",
      subtitle: "تُقدَّم التقارير عند الطلب من خلال فريقنا — تواصل معنا وحدد نوع التقرير والفترة التي تحتاجها.",
      primaryLabel: "اطلب تقريراً",
      primaryHref: "/contact",
      secondaryLabel: "تبرّع الآن",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "كن شريكاً", href: "/partners" },
        { label: "انضم إلى فرع محلي", href: "/chapters" },
      ],
    },
  },
};

// ─── FR (French) ────────────────────────────────────────────────────────────

const fr: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "Notre impact",
      title: "Un impact mesurable, communiqué en toute transparence",
      subtitle: "WPA suit les résultats de chaque programme — pas seulement l'activité — afin que donateurs, partenaires et public puissent voir des résultats réels et vérifiables.",
      primaryLabel: "Consulter les rapports publics",
      primaryHref: "/reports",
      secondaryLabel: "Faire un don aux programmes",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Comment nous définissons l'impact",
      title: "L'impact se mesure aux résultats, pas seulement à l'activité",
      paragraphs: [
        "Il est facile de rapporter le nombre d'événements organisés ou les fonds collectés. Le reporting d'impact de WPA va plus loin — il suit ce qui est réellement arrivé aux animaux, aux communautés et aux partenaires impliqués dans chaque programme.",
        "Chaque chiffre ci-dessous provient de données enregistrées via les systèmes de suivi des cas, de reporting des partenaires et d'activité des sections locales de WPA — les mêmes registres utilisés dans nos rapports publics et audits.",
      ],
    },
    metrics: {
      eyebrow: "Tableau de bord d'impact",
      title: "Où en est le réseau WPA aujourd'hui",
      subtitle: "Ces chiffres reflètent l'activité coordonnée entre les sections locales et les partenaires vérifiés, suivie au regard des objectifs de programme publiés par WPA.",
      items: [
        { value: "100,000+", label: "Animaux soutenus", note: "Grâce aux programmes de sauvetage, de traitement et de soins.", icon: "🐾" },
        { value: "15,000+", label: "Adoptions facilitées", note: "Placements vérifiés via le programme d'adoption.", icon: "🏠" },
        { value: "60,000+", label: "Vaccinations et interventions de santé", note: "Réalisées via les cliniques partenaires et les campagnes.", icon: "💉" },
        { value: "200+", label: "Campagnes de sensibilisation menées", note: "Dans les sections locales et les communautés partenaires.", icon: "📢" },
        { value: "300+", label: "Organisations partenaires vérifiées", note: "Cliniques, ONG et refuges au sein du réseau actif.", icon: "🤝" },
        { value: "120+", label: "Sections locales actives", note: "Coordonnant des programmes à l'échelle nationale et municipale.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "Comment c'est mesuré",
      title: "Les systèmes derrière chaque chiffre",
      subtitle: "Chaque indicateur repose sur un processus précis de suivi ou de reporting, et non sur une estimation autodéclarée.",
      items: [
        { title: "Système de suivi des cas", description: "Chaque cas de sauvetage et d'adoption reçoit un identifiant suivi du signalement jusqu'à la résolution.", icon: "📋" },
        { title: "Reporting d'activité des partenaires", description: "Les cliniques et refuges signalent régulièrement leurs activités de vaccination, de traitement et d'adoption.", icon: "🏥" },
        { title: "Rapports des sections locales", description: "Les sections locales soumettent leurs activités de campagne et de programme à la gouvernance de WPA pour agrégation.", icon: "🌍" },
        { title: "Examen indépendant", description: "Les chiffres agrégés sont examinés parallèlement aux audits financiers avant publication.", icon: "✅" },
      ],
    },
    cta: {
      title: "Soutenez des programmes à impact mesurable",
      subtitle: "Chaque contribution est suivie au regard des mêmes résultats présentés ici.",
      primaryLabel: "Faire un don maintenant",
      primaryHref: "/donation",
      secondaryLabel: "Devenir partenaire",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "Demander un rapport", href: "/reports" },
        { label: "Rejoindre une section locale", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "Transparence",
      title: "Chaque don suivi. Chaque résultat rapporté.",
      subtitle: "WPA considère la transparence comme une exigence opérationnelle, et non un simple message de communication — de l'allocation des campagnes à l'audit indépendant.",
      primaryLabel: "Voir l'utilisation des fonds",
      primaryHref: "/reports",
      secondaryLabel: "Faire un don maintenant",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Comment WPA traite les dons",
      title: "Un processus de gestion des dons conçu pour résister à l'examen",
      paragraphs: [
        "La plupart des dons faits à WPA sont alloués à une campagne, un programme ou une section locale spécifique — et non à un fonds général non suivi — afin que les contributeurs voient exactement ce que leur don a soutenu.",
        "L'utilisation des fonds est compilée dans des rapports publics de manière récurrente, des reçus sont émis pour chaque contribution, et les registres sous-jacents sont tenus dans un format prêt à l'audit pour un examen indépendant.",
        "Cette page explique les mécanismes derrière ce processus : comment les fonds circulent du don au décaissement, et comment les donateurs, partenaires et le public peuvent le vérifier.",
      ],
    },
    fundFlow: {
      eyebrow: "Circulation des fonds",
      title: "Comment un don circule au sein de WPA",
      subtitle: "Le même parcours s'applique, que le don soit ponctuel, récurrent ou lié à une campagne spécifique.",
      steps: [
        { number: 1, title: "Don reçu", description: "Une contribution est reçue et un reçu est émis, enregistrant le montant, la date et l'objet." },
        { number: 2, title: "Alloué à une campagne ou un programme", description: "Les fonds sont enregistrés au regard de la campagne, du programme ou de la section locale spécifique qu'ils étaient destinés à soutenir." },
        { number: 3, title: "Décaissé vers des partenaires vérifiés", description: "Les fonds sont libérés vers des cliniques, refuges ou sections locales agréés qui mettent en œuvre le programme concerné." },
        { number: 4, title: "Activité rapportée en retour", description: "Les partenaires et sections locales rendent compte de l'utilisation des fonds et des résultats obtenus." },
        { number: 5, title: "Inclus dans les rapports publics", description: "L'utilisation des fonds et les résultats sont compilés dans des rapports accessibles au public et aux donateurs." },
      ],
    },
    donorConfidence: {
      eyebrow: "Confiance des donateurs",
      title: "Réponses aux questions les plus fréquentes des donateurs",
      subtitle: "La transparence signifie être précis sur les mécanismes, pas seulement répéter le mot.",
      items: [
        { title: "Où vont les fonds", description: "Chaque contribution est étiquetée à un programme ou une campagne et suivie jusqu'au décaissement, sans être regroupée anonymement.", icon: "🔍" },
        { title: "Comment les cas sont vérifiés", description: "Les cas de sauvetage et de traitement sont suivis avec un identifiant de cas du premier signalement jusqu'à la résolution.", icon: "📋" },
        { title: "Comment les partenaires sont contrôlés", description: "Cliniques, ONG et refuges sont vérifiés avant leur intégration et évalués en continu.", icon: "✅" },
        { title: "Comment l'impact est rapporté", description: "Les résultats sont agrégés à partir des rapports des partenaires et sections locales, puis publiés dans des rapports périodiques.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "Garanties intégrées",
      title: "Les fonctionnalités qui rendent cela vérifiable",
      subtitle: "",
      items: [
        { title: "Allocation par campagne", description: "Les dons sont liés à des campagnes ou programmes spécifiques plutôt qu'à un fonds général non suivi.", icon: "🎯" },
        { title: "Rapports publics", description: "L'utilisation des fonds et les résultats des programmes sont publiés de manière récurrente pour examen public.", icon: "📄" },
        { title: "Reçus aux donateurs", description: "Chaque contribution génère un reçu confirmant le montant, la date et l'objet.", icon: "🧾" },
        { title: "Registres d'utilisation vérifiés", description: "Les décaissements sont enregistrés au regard du partenaire et du programme qui les ont reçus.", icon: "🔒" },
        { title: "Registres prêts pour l'audit", description: "Les registres financiers et programmatiques sont tenus dans un format prêt pour un audit indépendant.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "Examinez les registres derrière nos engagements en matière de transparence",
      subtitle: "Demandez un rapport d'utilisation des fonds, ou soutenez un programme en sachant exactement comment les contributions sont suivies.",
      primaryLabel: "Demander un rapport",
      primaryHref: "/reports",
      secondaryLabel: "Faire un don maintenant",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Devenir partenaire", href: "/partners" },
        { label: "Rejoindre une section locale", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "Rapports publics",
      title: "Utilisation des fonds et résultats des programmes, publiés ouvertement",
      subtitle: "WPA compile l'utilisation des fonds et l'activité des programmes dans des rapports accessibles aux donateurs, partenaires et au public — demandez le type de rapport qui vous intéresse.",
      primaryLabel: "Demander un rapport",
      primaryHref: "/contact",
      secondaryLabel: "Comment fonctionne la transparence",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "Utilisation des fonds",
      title: "Où sont dirigés les dons",
      paragraphs: [
        "Les dons sont alloués à un ensemble défini de catégories de programmes plutôt qu'à un fonds général unique, afin que donateurs et auditeurs puissent tous deux tracer les dépenses jusqu'à un objectif précis.",
        "La priorité affichée de WPA est de diriger la plus grande part des fonds vers la mise en œuvre directe des programmes — sauvetage, traitement, soutien à l'adoption et sensibilisation — tout en maintenant les frais administratifs aussi bas que le permet une gestion responsable. Les chiffres exacts par catégorie pour une période donnée sont publiés dans le rapport d'utilisation des fonds de cette période plutôt que résumés ici, afin d'éviter de présenter des chiffres arrondis comme des états financiers précis.",
      ],
      categories: [
        { title: "Sauvetage et traitement d'urgence", description: "Intervention sur le terrain, transport et traitement vétérinaire pour les animaux secourus.", icon: "🚑" },
        { title: "Adoption et soutien aux refuges", description: "Soins en refuge, contrôles de santé et fonctionnement du programme d'adoption.", icon: "🐾" },
        { title: "Campagnes de vaccination et de santé", description: "Campagnes de vaccination à grande échelle et programmes de santé préventive.", icon: "💉" },
        { title: "Sensibilisation et éducation", description: "Campagnes communautaires sur la possession responsable et le bien-être animal.", icon: "📢" },
        { title: "Coordination des sections et des partenaires", description: "Soutien aux sections locales et aux opérations des partenaires vérifiés.", icon: "🌍" },
        { title: "Administration et gouvernance", description: "Supervision, audit et systèmes qui garantissent la redevabilité du réseau.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "Rapports disponibles",
      title: "Rapports que vous pouvez demander",
      subtitle: "Chaque type de rapport couvre un niveau de détail différent — des résultats principaux aux états financiers examinés de manière indépendante.",
      items: [
        { title: "Rapport annuel", description: "Un résumé annuel des résultats des programmes, de la croissance des sections locales et de l'utilisation globale des fonds.", icon: "📘", href: "/contact" },
        { title: "Rapport d'utilisation des fonds", description: "Une ventilation période par période des dons reçus et de leur allocation.", icon: "📊", href: "/contact" },
        { title: "Rapport d'activité des sections", description: "Activité des programmes et campagnes pour une section nationale ou municipale spécifique.", icon: "🌍", href: "/contact" },
        { title: "Résumé d'audit indépendant", description: "Conclusions de l'examen financier indépendant des comptes de WPA.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "Demandez un rapport ou soutenez un programme vérifié",
      subtitle: "Les rapports sont fournis sur demande par notre équipe — contactez-nous et précisez le type de rapport et la période souhaités.",
      primaryLabel: "Demander un rapport",
      primaryHref: "/contact",
      secondaryLabel: "Faire un don maintenant",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Devenir partenaire", href: "/partners" },
        { label: "Rejoindre une section locale", href: "/chapters" },
      ],
    },
  },
};

// ─── ES (Spanish) ───────────────────────────────────────────────────────────

const es: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "Nuestro impacto",
      title: "Impacto medible, reportado con transparencia",
      subtitle: "WPA hace seguimiento de los resultados en cada programa — no solo de la actividad — para que donantes, socios y el público puedan ver resultados reales y verificables.",
      primaryLabel: "Ver informes públicos",
      primaryHref: "/reports",
      secondaryLabel: "Donar a los programas",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Cómo definimos el impacto",
      title: "El impacto se mide por resultados, no solo por actividad",
      paragraphs: [
        "Es fácil informar cuántos eventos se realizaron o cuánto dinero se recaudó. El reporte de impacto de WPA va más allá — hace seguimiento de lo que realmente les sucedió a los animales, comunidades y socios involucrados en cada programa.",
        "Cada cifra a continuación proviene de datos registrados a través de los sistemas de seguimiento de casos, informes de socios y actividad de capítulos de WPA — los mismos registros utilizados en nuestros informes públicos y auditorías.",
      ],
    },
    metrics: {
      eyebrow: "Panel de impacto",
      title: "Dónde se encuentra hoy la red de WPA",
      subtitle: "Estas cifras reflejan la actividad coordinada entre capítulos y socios verificados, medida frente a los objetivos de programa publicados por WPA.",
      items: [
        { value: "100,000+", label: "Animales apoyados", note: "A través de programas de rescate, tratamiento y cuidado.", icon: "🐾" },
        { value: "15,000+", label: "Adopciones facilitadas", note: "Ubicaciones verificadas mediante el programa de adopción.", icon: "🏠" },
        { value: "60,000+", label: "Vacunaciones e intervenciones de salud", note: "Realizadas a través de clínicas y campañas asociadas.", icon: "💉" },
        { value: "200+", label: "Campañas de concientización realizadas", note: "En capítulos locales y comunidades asociadas.", icon: "📢" },
        { value: "300+", label: "Organizaciones socias verificadas", note: "Clínicas, ONG y refugios dentro de la red activa.", icon: "🤝" },
        { value: "120+", label: "Capítulos locales activos", note: "Coordinando programas a nivel de país y ciudad.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "Cómo se mide",
      title: "Los sistemas detrás de cada cifra",
      subtitle: "Cada métrica está respaldada por un proceso específico de seguimiento o reporte, no por una estimación autoinformada.",
      items: [
        { title: "Sistema de seguimiento de casos", description: "Cada caso de rescate y adopción recibe un identificador rastreado desde el reporte hasta la resolución.", icon: "📋" },
        { title: "Reporte de actividad de socios", description: "Clínicas y refugios reportan actividad de vacunación, tratamiento y adopción de forma regular.", icon: "🏥" },
        { title: "Reportes de capítulos", description: "Los capítulos locales presentan la actividad de campañas y programas a la gobernanza de WPA para su agregación.", icon: "🌍" },
        { title: "Revisión independiente", description: "Las cifras agregadas se revisan junto con las auditorías financieras antes de su publicación.", icon: "✅" },
      ],
    },
    cta: {
      title: "Apoya programas con impacto medible",
      subtitle: "Cada contribución se rastrea frente a los mismos resultados mostrados aquí.",
      primaryLabel: "Donar ahora",
      primaryHref: "/donation",
      secondaryLabel: "Conviértete en socio",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "Solicitar un informe", href: "/reports" },
        { label: "Unirse a un capítulo local", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "Transparencia",
      title: "Cada donación rastreada. Cada resultado reportado.",
      subtitle: "WPA trata la transparencia como un requisito operativo, no como un mensaje de comunicación — desde la asignación de campañas hasta la auditoría independiente.",
      primaryLabel: "Ver uso de fondos",
      primaryHref: "/reports",
      secondaryLabel: "Donar ahora",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Cómo maneja WPA las donaciones",
      title: "Un proceso de manejo de donaciones diseñado para resistir el escrutinio",
      paragraphs: [
        "La mayoría de las donaciones a WPA se asignan a una campaña, programa o capítulo específico — no a un fondo general sin seguimiento — de modo que los contribuyentes puedan ver exactamente qué apoyó su donación.",
        "El uso de fondos se compila en informes públicos de forma recurrente, se emiten recibos por cada contribución y los registros subyacentes se mantienen en un formato listo para auditoría para revisión independiente.",
        "Esta página explica la mecánica detrás de ese proceso: cómo se mueven los fondos desde la donación hasta el desembolso, y cómo los donantes, socios y el público pueden verificarlo.",
      ],
    },
    fundFlow: {
      eyebrow: "Flujo de fondos",
      title: "Cómo se mueve una donación a través de WPA",
      subtitle: "El mismo recorrido se aplica ya sea que la donación sea única, recurrente o esté vinculada a una campaña específica.",
      steps: [
        { number: 1, title: "Donación recibida", description: "Se recibe una contribución y se emite un recibo, registrando el monto, la fecha y el propósito." },
        { number: 2, title: "Asignada a campaña o programa", description: "Los fondos se registran frente a la campaña, programa o capítulo específico que fueron destinados a apoyar." },
        { number: 3, title: "Desembolsada a socios verificados", description: "Los fondos se liberan a clínicas, refugios o capítulos evaluados que ejecutan el programa correspondiente." },
        { number: 4, title: "Actividad reportada de vuelta", description: "Los socios y capítulos informan cómo se usaron los fondos y qué resultados se obtuvieron." },
        { number: 5, title: "Incluida en informes públicos", description: "El uso de fondos y los resultados se compilan en informes disponibles para revisión pública y de donantes." },
      ],
    },
    donorConfidence: {
      eyebrow: "Confianza del donante",
      title: "Respuestas a las preguntas que más hacen los donantes",
      subtitle: "Transparencia significa ser específico sobre los mecanismos, no solo repetir la palabra.",
      items: [
        { title: "A dónde van los fondos", description: "Cada contribución se etiqueta a un programa o campaña y se rastrea hasta el desembolso, sin agruparse de forma anónima.", icon: "🔍" },
        { title: "Cómo se verifican los casos", description: "Los casos de rescate y tratamiento se rastrean con un identificador de caso desde el primer reporte hasta la resolución.", icon: "📋" },
        { title: "Cómo se verifican los socios", description: "Clínicas, ONG y refugios son evaluados antes de su incorporación y revisados de forma continua.", icon: "✅" },
        { title: "Cómo se reporta el impacto", description: "Los resultados se agregan a partir de los reportes de socios y capítulos, y luego se publican en informes periódicos.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "Salvaguardas incorporadas",
      title: "Las características que hacen esto verificable",
      subtitle: "",
      items: [
        { title: "Asignación basada en campañas", description: "Las donaciones están vinculadas a campañas o programas específicos en lugar de a un fondo general sin seguimiento.", icon: "🎯" },
        { title: "Informes públicos", description: "El uso de fondos y los resultados de los programas se publican de forma recurrente para revisión pública.", icon: "📄" },
        { title: "Recibos para donantes", description: "Cada contribución genera un recibo que confirma el monto, la fecha y el propósito.", icon: "🧾" },
        { title: "Registros de uso verificados", description: "Los desembolsos se registran frente al socio y programa que los recibieron.", icon: "🔒" },
        { title: "Registros listos para auditoría", description: "Los registros financieros y de programas se mantienen en un formato listo para auditoría independiente.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "Revisa los registros detrás de nuestros compromisos de transparencia",
      subtitle: "Solicita un informe de uso de fondos, o apoya un programa sabiendo exactamente cómo se rastrean las contribuciones.",
      primaryLabel: "Solicitar un informe",
      primaryHref: "/reports",
      secondaryLabel: "Donar ahora",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Conviértete en socio", href: "/partners" },
        { label: "Unirse a un capítulo local", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "Informes públicos",
      title: "Uso de fondos y resultados de programas, publicados abiertamente",
      subtitle: "WPA compila el uso de fondos y la actividad de programas en informes disponibles para donantes, socios y el público — solicita el tipo de informe que te interese.",
      primaryLabel: "Solicitar un informe",
      primaryHref: "/contact",
      secondaryLabel: "Cómo funciona la transparencia",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "Uso de fondos",
      title: "Hacia dónde se dirigen las donaciones",
      paragraphs: [
        "Las donaciones se asignan a un conjunto definido de categorías de programa en lugar de a un único fondo general, de modo que tanto donantes como auditores puedan rastrear el gasto hasta un propósito específico.",
        "La prioridad declarada de WPA es dirigir la mayor parte de los fondos a la ejecución directa de programas — rescate, tratamiento, apoyo a la adopción y concientización — manteniendo al mismo tiempo los gastos administrativos tan bajos como lo permita una operación responsable. Las cifras exactas por categoría para un período determinado se publican en el informe de uso de fondos de ese período en lugar de resumirse aquí, para evitar presentar cifras redondeadas como estados financieros precisos.",
      ],
      categories: [
        { title: "Rescate y tratamiento de emergencia", description: "Respuesta de campo, transporte y tratamiento veterinario para animales rescatados.", icon: "🚑" },
        { title: "Adopción y apoyo a refugios", description: "Cuidado en refugios, chequeos de salud y operación del programa de adopción.", icon: "🐾" },
        { title: "Campañas de vacunación y salud", description: "Campañas de vacunación a gran escala y programas de salud preventiva.", icon: "💉" },
        { title: "Concientización y educación", description: "Campañas comunitarias sobre tenencia responsable y bienestar animal.", icon: "📢" },
        { title: "Coordinación de capítulos y socios", description: "Apoyo a capítulos locales y operaciones de socios verificados.", icon: "🌍" },
        { title: "Administración y gobernanza", description: "Supervisión, auditoría y los sistemas que mantienen la rendición de cuentas de la red.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "Informes disponibles",
      title: "Informes que puedes solicitar",
      subtitle: "Cada tipo de informe cubre un nivel de detalle diferente — desde resultados principales hasta estados financieros revisados de forma independiente.",
      items: [
        { title: "Informe anual", description: "Un resumen anual de los resultados de programas, el crecimiento de capítulos y el uso general de fondos.", icon: "📘", href: "/contact" },
        { title: "Informe de uso de fondos", description: "Un desglose período por período de las donaciones recibidas y cómo fueron asignadas.", icon: "📊", href: "/contact" },
        { title: "Informe de actividad de capítulos", description: "Actividad de programas y campañas para un capítulo específico de país o ciudad.", icon: "🌍", href: "/contact" },
        { title: "Resumen de auditoría independiente", description: "Hallazgos de la revisión financiera independiente de las cuentas de WPA.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "Solicita un informe o apoya un programa verificado",
      subtitle: "Los informes se proporcionan a solicitud a través de nuestro equipo — contáctanos y especifica el tipo de informe y el período que necesitas.",
      primaryLabel: "Solicitar un informe",
      primaryHref: "/contact",
      secondaryLabel: "Donar ahora",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Conviértete en socio", href: "/partners" },
        { label: "Unirse a un capítulo local", href: "/chapters" },
      ],
    },
  },
};

// ─── RU (Russian) ───────────────────────────────────────────────────────────

const ru: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "Наше влияние",
      title: "Измеримые результаты, прозрачная отчётность",
      subtitle: "WPA отслеживает результаты каждой программы — а не только активность — чтобы доноры, партнёры и общественность могли видеть реальные, проверяемые итоги.",
      primaryLabel: "Посмотреть публичные отчёты",
      primaryHref: "/reports",
      secondaryLabel: "Пожертвовать на программы",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Как мы определяем результат",
      title: "Результат измеряется итогами, а не только активностью",
      paragraphs: [
        "Легко сообщить, сколько мероприятий было проведено или сколько средств собрано. Отчётность WPA о результатах идёт дальше — она отслеживает, что на самом деле произошло с животными, сообществами и партнёрами, участвующими в каждой программе.",
        "Каждая цифра ниже основана на данных, зафиксированных через систему учёта случаев WPA, отчётность партнёров и деятельность отделений — те же записи, что используются в наших публичных отчётах и аудитах.",
      ],
    },
    metrics: {
      eyebrow: "Панель показателей влияния",
      title: "Текущее состояние сети WPA",
      subtitle: "Эти цифры отражают скоординированную деятельность отделений и проверенных партнёров, отслеживаемую относительно опубликованных целей программ WPA.",
      items: [
        { value: "100,000+", label: "Животных получили поддержку", note: "Через программы спасения, лечения и ухода.", icon: "🐾" },
        { value: "15,000+", label: "Организовано усыновлений", note: "Проверенные размещения через программу усыновления.", icon: "🏠" },
        { value: "60,000+", label: "Вакцинаций и медицинских вмешательств", note: "Проведено через партнёрские клиники и кампании.", icon: "💉" },
        { value: "200+", label: "Проведено просветительских кампаний", note: "В местных отделениях и партнёрских сообществах.", icon: "📢" },
        { value: "300+", label: "Проверенных партнёрских организаций", note: "Клиники, НКО и приюты в активной сети.", icon: "🤝" },
        { value: "120+", label: "Активных местных отделений", note: "Координируют программы на уровне стран и городов.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "Как это измеряется",
      title: "Системы, стоящие за каждой цифрой",
      subtitle: "Каждый показатель подкреплён конкретным процессом отслеживания или отчётности, а не самостоятельно заявленной оценкой.",
      items: [
        { title: "Система учёта случаев", description: "Каждый случай спасения и усыновления получает отслеживаемый идентификатор от подачи заявки до разрешения.", icon: "📋" },
        { title: "Отчётность партнёров о деятельности", description: "Клиники и приюты регулярно отчитываются о вакцинации, лечении и усыновлении.", icon: "🏥" },
        { title: "Отчётность отделений", description: "Местные отделения передают данные о кампаниях и программах в руководящий орган WPA для агрегации.", icon: "🌍" },
        { title: "Независимая проверка", description: "Агрегированные показатели проверяются наряду с финансовыми аудитами перед публикацией.", icon: "✅" },
      ],
    },
    cta: {
      title: "Поддержите программы с измеримым результатом",
      subtitle: "Каждый вклад отслеживается по тем же результатам, что показаны здесь.",
      primaryLabel: "Пожертвовать сейчас",
      primaryHref: "/donation",
      secondaryLabel: "Стать партнёром",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "Запросить отчёт", href: "/reports" },
        { label: "Присоединиться к местному отделению", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "Прозрачность",
      title: "Каждое пожертвование отслеживается. Каждый результат отражается в отчёте.",
      subtitle: "WPA рассматривает прозрачность как операционное требование, а не как коммуникационный посыл — от распределения кампаний до независимого аудита.",
      primaryLabel: "Посмотреть использование средств",
      primaryHref: "/reports",
      secondaryLabel: "Пожертвовать сейчас",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Как WPA обрабатывает пожертвования",
      title: "Процесс обработки пожертвований, устойчивый к проверке",
      paragraphs: [
        "Большинство пожертвований в WPA распределяются на конкретную кампанию, программу или отделение — а не в общий, неотслеживаемый фонд — чтобы жертвователи точно видели, что поддержал их вклад.",
        "Данные об использовании средств регулярно собираются в публичные отчёты, по каждому пожертвованию выдаётся квитанция, а первичные записи ведутся в формате, готовом к аудиту, для независимой проверки.",
        "Эта страница объясняет механизм, стоящий за этим процессом: как средства движутся от пожертвования до выплаты и как доноры, партнёры и общественность могут это проверить.",
      ],
    },
    fundFlow: {
      eyebrow: "Движение средств",
      title: "Как пожертвование движется через WPA",
      subtitle: "Один и тот же путь применяется независимо от того, разовое это пожертвование, регулярное или связанное с конкретной кампанией.",
      steps: [
        { number: 1, title: "Пожертвование получено", description: "Вклад принимается, и выдаётся квитанция с указанием суммы, даты и цели." },
        { number: 2, title: "Распределено на кампанию или программу", description: "Средства фиксируются в привязке к конкретной кампании, программе или отделению, которые они должны были поддержать." },
        { number: 3, title: "Выплачено проверенным партнёрам", description: "Средства направляются проверенным клиникам, приютам или отделениям, реализующим соответствующую программу." },
        { number: 4, title: "Отчёт о деятельности", description: "Партнёры и отделения сообщают, как были использованы средства и какие результаты достигнуты." },
        { number: 5, title: "Включено в публичные отчёты", description: "Использование средств и результаты включаются в отчёты, доступные для проверки общественностью и донорами." },
      ],
    },
    donorConfidence: {
      eyebrow: "Доверие доноров",
      title: "Ответы на наиболее частые вопросы доноров",
      subtitle: "Прозрачность означает конкретику в отношении механизмов, а не просто повторение самого слова.",
      items: [
        { title: "Куда идут средства", description: "Каждый вклад привязан к программе или кампании и отслеживается вплоть до выплаты, не объединяясь анонимно.", icon: "🔍" },
        { title: "Как проверяются случаи", description: "Случаи спасения и лечения отслеживаются с помощью идентификатора случая от первого сообщения до разрешения.", icon: "📋" },
        { title: "Как проверяются партнёры", description: "Клиники, НКО и приюты проверяются перед подключением и регулярно проверяются в дальнейшем.", icon: "✅" },
        { title: "Как отражается результат", description: "Результаты агрегируются из отчётности партнёров и отделений, а затем публикуются в периодических отчётах.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "Встроенные гарантии",
      title: "Функции, обеспечивающие проверяемость",
      subtitle: "",
      items: [
        { title: "Распределение по кампаниям", description: "Пожертвования привязаны к конкретным кампаниям или программам, а не к общему неотслеживаемому фонду.", icon: "🎯" },
        { title: "Публичные отчёты", description: "Использование средств и результаты программ регулярно публикуются для общественной проверки.", icon: "📄" },
        { title: "Квитанции для доноров", description: "Каждый вклад формирует квитанцию, подтверждающую сумму, дату и цель.", icon: "🧾" },
        { title: "Проверенные записи об использовании", description: "Выплаты фиксируются в привязке к партнёру и программе, которые их получили.", icon: "🔒" },
        { title: "Записи, готовые к аудиту", description: "Финансовые и программные записи ведутся в формате, готовом к независимому аудиту.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "Ознакомьтесь с записями, подтверждающими наши обязательства по прозрачности",
      subtitle: "Запросите отчёт об использовании средств или поддержите программу, точно зная, как отслеживаются пожертвования.",
      primaryLabel: "Запросить отчёт",
      primaryHref: "/reports",
      secondaryLabel: "Пожертвовать сейчас",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Стать партнёром", href: "/partners" },
        { label: "Присоединиться к местному отделению", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "Публичные отчёты",
      title: "Использование средств и результаты программ, открыто публикуемые",
      subtitle: "WPA объединяет данные об использовании средств и деятельности программ в отчёты, доступные донорам, партнёрам и общественности — запросите тип отчёта, который вас интересует.",
      primaryLabel: "Запросить отчёт",
      primaryHref: "/contact",
      secondaryLabel: "Как работает прозрачность",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "Использование средств",
      title: "Куда направляются пожертвования",
      paragraphs: [
        "Пожертвования распределяются по определённому набору программных категорий, а не в единый общий фонд, чтобы и доноры, и аудиторы могли отследить расходы до конкретной цели.",
        "Заявленный приоритет WPA — направлять наибольшую долю средств на непосредственную реализацию программ — спасение, лечение, поддержку усыновления и просвещение — при этом сохраняя административные расходы на минимально возможном уровне, допустимом при ответственной работе. Точные показатели по категориям за конкретный период публикуются в отчёте об использовании средств за этот период, а не приводятся здесь в кратком виде, чтобы избежать представления округлённых цифр как точной финансовой отчётности.",
      ],
      categories: [
        { title: "Спасение и экстренное лечение", description: "Реагирование на месте, транспортировка и ветеринарное лечение спасённых животных.", icon: "🚑" },
        { title: "Усыновление и поддержка приютов", description: "Уход в приюте, медицинские осмотры и работа программы усыновления.", icon: "🐾" },
        { title: "Кампании вакцинации и здоровья", description: "Масштабные кампании вакцинации и программы профилактического здоровья.", icon: "💉" },
        { title: "Просвещение и образование", description: "Общественные кампании об ответственном владении и благополучии животных.", icon: "📢" },
        { title: "Координация отделений и партнёров", description: "Поддержка местных отделений и деятельности проверенных партнёров.", icon: "🌍" },
        { title: "Администрирование и управление", description: "Надзор, аудит и системы, обеспечивающие подотчётность сети.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "Доступные отчёты",
      title: "Отчёты, которые вы можете запросить",
      subtitle: "Каждый тип отчёта охватывает разный уровень детализации — от ключевых результатов до независимо проверенной финансовой отчётности.",
      items: [
        { title: "Годовой отчёт", description: "Годовой обзор результатов программ, роста отделений и общего использования средств.", icon: "📘", href: "/contact" },
        { title: "Отчёт об использовании средств", description: "Разбивка по периодам полученных пожертвований и способа их распределения.", icon: "📊", href: "/contact" },
        { title: "Отчёт о деятельности отделения", description: "Деятельность программ и кампаний для конкретного странового или городского отделения.", icon: "🌍", href: "/contact" },
        { title: "Резюме независимого аудита", description: "Выводы независимой финансовой проверки счетов WPA.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "Запросите отчёт или поддержите проверенную программу",
      subtitle: "Отчёты предоставляются по запросу через нашу команду — свяжитесь с нами и укажите тип отчёта и период, который вам нужен.",
      primaryLabel: "Запросить отчёт",
      primaryHref: "/contact",
      secondaryLabel: "Пожертвовать сейчас",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Стать партнёром", href: "/partners" },
        { label: "Присоединиться к местному отделению", href: "/chapters" },
      ],
    },
  },
};

// ─── DE (German) ────────────────────────────────────────────────────────────

const de: ImpactAndTrustContent = {
  impact: {
    hero: {
      eyebrow: "Unsere Wirkung",
      title: "Messbare Wirkung, transparent berichtet",
      subtitle: "WPA verfolgt die Ergebnisse jedes Programms — nicht nur die Aktivität —, damit Spender, Partner und die Öffentlichkeit echte, überprüfbare Resultate sehen können.",
      primaryLabel: "Öffentliche Berichte ansehen",
      primaryHref: "/reports",
      secondaryLabel: "Für Programme spenden",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Wie wir Wirkung definieren",
      title: "Wirkung wird an Ergebnissen gemessen, nicht allein an Aktivität",
      paragraphs: [
        "Es ist einfach zu berichten, wie viele Veranstaltungen stattfanden oder wie viel Geld gesammelt wurde. Die Wirkungsberichte von WPA gehen weiter — sie verfolgen, was tatsächlich mit den Tieren, Gemeinschaften und Partnern geschah, die an jedem Programm beteiligt waren.",
        "Jede Zahl unten stammt aus Daten, die über die Fallverfolgung, Partnerberichte und die Aktivität der Ortsgruppen von WPA erfasst wurden — dieselben Aufzeichnungen, die auch in unseren öffentlichen Berichten und Prüfungen verwendet werden.",
      ],
    },
    metrics: {
      eyebrow: "Wirkungs-Dashboard",
      title: "Wo das Netzwerk von WPA heute steht",
      subtitle: "Diese Zahlen spiegeln koordinierte Aktivitäten der Ortsgruppen und geprüften Partner wider und werden an den veröffentlichten Programmzielen von WPA gemessen.",
      items: [
        { value: "100,000+", label: "Unterstützte Tiere", note: "Durch Rettungs-, Behandlungs- und Pflegeprogramme.", icon: "🐾" },
        { value: "15,000+", label: "Vermittelte Adoptionen", note: "Verifizierte Vermittlungen über das Adoptionsprogramm.", icon: "🏠" },
        { value: "60,000+", label: "Impfungen & Gesundheitsmaßnahmen", note: "Durchgeführt über Partnerkliniken und Kampagnen.", icon: "💉" },
        { value: "200+", label: "Durchgeführte Aufklärungskampagnen", note: "In lokalen Ortsgruppen und Partnergemeinschaften.", icon: "📢" },
        { value: "300+", label: "Verifizierte Partnerorganisationen", note: "Kliniken, NGOs und Tierheime im aktiven Netzwerk.", icon: "🤝" },
        { value: "120+", label: "Aktive Ortsgruppen", note: "Koordinieren Programme auf Landes- und Stadtebene.", icon: "🌍" },
      ],
    },
    howMeasured: {
      eyebrow: "Wie es gemessen wird",
      title: "Die Systeme hinter jeder Zahl",
      subtitle: "Jede Kennzahl wird durch einen spezifischen Erfassungs- oder Berichtsprozess gestützt, nicht durch eine selbst gemeldete Schätzung.",
      items: [
        { title: "Fallverfolgungssystem", description: "Jeder Rettungs- und Adoptionsfall erhält eine verfolgte ID vom Bericht bis zur Klärung.", icon: "📋" },
        { title: "Partner-Aktivitätsberichte", description: "Kliniken und Tierheime melden Impf-, Behandlungs- und Adoptionsaktivitäten regelmäßig.", icon: "🏥" },
        { title: "Berichte der Ortsgruppen", description: "Lokale Ortsgruppen übermitteln Kampagnen- und Programmaktivitäten zur Zusammenführung an die WPA-Führung.", icon: "🌍" },
        { title: "Unabhängige Überprüfung", description: "Aggregierte Zahlen werden vor der Veröffentlichung zusammen mit Finanzprüfungen überprüft.", icon: "✅" },
      ],
    },
    cta: {
      title: "Unterstützen Sie Programme mit messbarer Wirkung",
      subtitle: "Jeder Beitrag wird anhand derselben hier gezeigten Ergebnisse verfolgt.",
      primaryLabel: "Jetzt spenden",
      primaryHref: "/donation",
      secondaryLabel: "Partner werden",
      secondaryHref: "/partners",
      extraCtas: [
        { label: "Bericht anfordern", href: "/reports" },
        { label: "Einer Ortsgruppe beitreten", href: "/chapters" },
      ],
    },
  },
  transparency: {
    hero: {
      eyebrow: "Transparenz",
      title: "Jede Spende verfolgt. Jedes Ergebnis berichtet.",
      subtitle: "WPA behandelt Transparenz als operative Anforderung, nicht als Kommunikationsbotschaft — von der Kampagnenzuweisung bis zur unabhängigen Prüfung.",
      primaryLabel: "Mittelverwendung ansehen",
      primaryHref: "/reports",
      secondaryLabel: "Jetzt spenden",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Wie WPA mit Spenden umgeht",
      title: "Ein für Prüfungen ausgelegter Spendenverwaltungsprozess",
      paragraphs: [
        "Die meisten Spenden an WPA werden einer bestimmten Kampagne, einem Programm oder einer Ortsgruppe zugewiesen — nicht einem allgemeinen, unverfolgten Topf —, damit Spender genau sehen können, was ihre Gabe unterstützt hat.",
        "Die Mittelverwendung wird regelmäßig in öffentlichen Berichten zusammengestellt, für jeden Beitrag wird eine Quittung ausgestellt, und die zugrunde liegenden Aufzeichnungen werden in einem prüfungsbereiten Format für eine unabhängige Überprüfung geführt.",
        "Diese Seite erklärt die Mechanik hinter diesem Prozess: wie Mittel von der Spende bis zur Auszahlung fließen und wie Spender, Partner und die Öffentlichkeit dies überprüfen können.",
      ],
    },
    fundFlow: {
      eyebrow: "Mittelfluss",
      title: "Wie eine Spende durch WPA fließt",
      subtitle: "Derselbe Weg gilt unabhängig davon, ob eine Spende einmalig, wiederkehrend oder an eine bestimmte Kampagne gebunden ist.",
      steps: [
        { number: 1, title: "Spende erhalten", description: "Ein Beitrag wird entgegengenommen und eine Quittung ausgestellt, die Betrag, Datum und Zweck festhält." },
        { number: 2, title: "Kampagne oder Programm zugewiesen", description: "Mittel werden der spezifischen Kampagne, dem Programm oder der Ortsgruppe zugeordnet, die sie unterstützen sollten." },
        { number: 3, title: "An geprüfte Partner ausgezahlt", description: "Mittel werden an geprüfte Kliniken, Tierheime oder Ortsgruppen freigegeben, die das jeweilige Programm durchführen." },
        { number: 4, title: "Aktivität zurückgemeldet", description: "Partner und Ortsgruppen berichten, wie Mittel verwendet wurden und welche Ergebnisse erzielt wurden." },
        { number: 5, title: "In öffentliche Berichte aufgenommen", description: "Mittelverwendung und Ergebnisse werden in Berichten zusammengestellt, die für die öffentliche und Spenderprüfung verfügbar sind." },
      ],
    },
    donorConfidence: {
      eyebrow: "Vertrauen der Spender",
      title: "Antworten auf die häufigsten Fragen der Spender",
      subtitle: "Transparenz bedeutet, konkret über Mechanismen zu sein, nicht nur das Wort zu wiederholen.",
      items: [
        { title: "Wohin die Mittel gehen", description: "Jeder Beitrag wird einem Programm oder einer Kampagne zugeordnet und bis zur Auszahlung verfolgt, nicht anonym zusammengelegt.", icon: "🔍" },
        { title: "Wie Fälle verifiziert werden", description: "Rettungs- und Behandlungsfälle werden mit einer Fall-ID vom ersten Bericht bis zur Klärung verfolgt.", icon: "📋" },
        { title: "Wie Partner geprüft werden", description: "Kliniken, NGOs und Tierheime werden vor der Aufnahme geprüft und laufend überprüft.", icon: "✅" },
        { title: "Wie Wirkung berichtet wird", description: "Ergebnisse werden aus Partner- und Ortsgruppenberichten aggregiert und dann in regelmäßigen Berichten veröffentlicht.", icon: "📊" },
      ],
    },
    trustFeatures: {
      eyebrow: "Eingebaute Sicherungen",
      title: "Die Merkmale, die dies überprüfbar machen",
      subtitle: "",
      items: [
        { title: "Kampagnenbasierte Zuweisung", description: "Spenden sind an bestimmte Kampagnen oder Programme gebunden statt an einen allgemeinen, unverfolgten Fonds.", icon: "🎯" },
        { title: "Öffentliche Berichte", description: "Mittelverwendung und Programmergebnisse werden regelmäßig zur öffentlichen Prüfung veröffentlicht.", icon: "📄" },
        { title: "Spenderquittungen", description: "Jeder Beitrag erzeugt eine Quittung, die Betrag, Datum und Zweck bestätigt.", icon: "🧾" },
        { title: "Verifizierte Verwendungsnachweise", description: "Auszahlungen werden gegenüber dem Partner und Programm erfasst, die sie erhalten haben.", icon: "🔒" },
        { title: "Prüfungsbereite Aufzeichnungen", description: "Finanz- und Programmaufzeichnungen werden in einem für eine unabhängige Prüfung bereiten Format geführt.", icon: "🗂️" },
      ],
    },
    cta: {
      title: "Überprüfen Sie die Aufzeichnungen hinter unseren Transparenzverpflichtungen",
      subtitle: "Fordern Sie einen Mittelverwendungsbericht an oder unterstützen Sie ein Programm im genauen Wissen, wie Beiträge verfolgt werden.",
      primaryLabel: "Bericht anfordern",
      primaryHref: "/reports",
      secondaryLabel: "Jetzt spenden",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Partner werden", href: "/partners" },
        { label: "Einer Ortsgruppe beitreten", href: "/chapters" },
      ],
    },
  },
  reports: {
    hero: {
      eyebrow: "Öffentliche Berichte",
      title: "Mittelverwendung und Programmergebnisse, offen veröffentlicht",
      subtitle: "WPA fasst Mittelverwendung und Programmaktivität in Berichten zusammen, die Spendern, Partnern und der Öffentlichkeit zur Verfügung stehen — fordern Sie den für Sie relevanten Berichtstyp an.",
      primaryLabel: "Bericht anfordern",
      primaryHref: "/contact",
      secondaryLabel: "Wie Transparenz funktioniert",
      secondaryHref: "/transparency",
    },
    fundUsage: {
      eyebrow: "Mittelverwendung",
      title: "Wohin Spenden fließen",
      paragraphs: [
        "Spenden werden über einen festgelegten Satz von Programmkategorien verteilt, statt in einen einzigen allgemeinen Fonds, sodass sowohl Spender als auch Prüfer Ausgaben bis zu einem bestimmten Zweck zurückverfolgen können.",
        "Die erklärte Priorität von WPA ist es, den größten Anteil der Mittel in die direkte Programmdurchführung zu lenken — Rettung, Behandlung, Adoptionsunterstützung und Aufklärung — während der Verwaltungsaufwand so niedrig gehalten wird, wie es verantwortungsvoller Betrieb zulässt. Genaue kategoriegenaue Zahlen für einen bestimmten Zeitraum werden im Mittelverwendungsbericht dieses Zeitraums veröffentlicht statt hier zusammengefasst, um zu vermeiden, gerundete Zahlen als präzise Finanzberichte darzustellen.",
      ],
      categories: [
        { title: "Rettung & Notfallbehandlung", description: "Einsatz vor Ort, Transport und tierärztliche Behandlung geretteter Tiere.", icon: "🚑" },
        { title: "Adoption & Tierheimunterstützung", description: "Betreuung im Tierheim, Gesundheitschecks und Betrieb des Adoptionsprogramms.", icon: "🐾" },
        { title: "Impf- & Gesundheitskampagnen", description: "Groß angelegte Impfaktionen und präventive Gesundheitsprogramme.", icon: "💉" },
        { title: "Aufklärung & Bildung", description: "Gemeinschaftskampagnen zu verantwortungsvoller Tierhaltung und Tierwohl.", icon: "📢" },
        { title: "Koordination von Ortsgruppen & Partnern", description: "Unterstützung lokaler Ortsgruppen und geprüfter Partnereinrichtungen.", icon: "🌍" },
        { title: "Verwaltung & Governance", description: "Aufsicht, Prüfung und die Systeme, die die Rechenschaftspflicht des Netzwerks sicherstellen.", icon: "🏛️" },
      ],
    },
    reportTypes: {
      eyebrow: "Verfügbare Berichte",
      title: "Berichte, die Sie anfordern können",
      subtitle: "Jeder Berichtstyp deckt eine andere Detailebene ab — von zentralen Ergebnissen bis zu unabhängig geprüften Finanzdaten.",
      items: [
        { title: "Jahresbericht", description: "Eine jährliche Zusammenfassung der Programmergebnisse, des Wachstums der Ortsgruppen und der gesamten Mittelverwendung.", icon: "📘", href: "/contact" },
        { title: "Mittelverwendungsbericht", description: "Eine periodengenaue Aufschlüsselung der erhaltenen Spenden und ihrer Zuweisung.", icon: "📊", href: "/contact" },
        { title: "Bericht zur Ortsgruppenaktivität", description: "Programm- und Kampagnenaktivität für eine bestimmte Landes- oder Stadtgruppe.", icon: "🌍", href: "/contact" },
        { title: "Zusammenfassung der unabhängigen Prüfung", description: "Ergebnisse der unabhängigen Finanzprüfung der Konten von WPA.", icon: "✅", href: "/contact" },
      ],
    },
    cta: {
      title: "Fordern Sie einen Bericht an oder unterstützen Sie ein geprüftes Programm",
      subtitle: "Berichte werden auf Anfrage von unserem Team bereitgestellt — kontaktieren Sie uns und geben Sie den benötigten Berichtstyp und Zeitraum an.",
      primaryLabel: "Bericht anfordern",
      primaryHref: "/contact",
      secondaryLabel: "Jetzt spenden",
      secondaryHref: "/donation",
      extraCtas: [
        { label: "Partner werden", href: "/partners" },
        { label: "Einer Ortsgruppe beitreten", href: "/chapters" },
      ],
    },
  },
};

const dictionaries: Partial<Record<Locale, ImpactAndTrustContent>> = { en, bn, ar, fr, es, zh, ru, de, ja, ko };

export function getImpactAndTrustContent(locale: string): ImpactAndTrustContent {
  return dictionaries[locale as Locale] ?? dictionaries.en!;
}

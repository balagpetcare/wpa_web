import type { Locale } from "./i18n";
import type { HeroCopy, IconCard, TimelineStep } from "./pagesContent";

// ─── Shared shapes ───────────────────────────────────────────────────────────

interface CtaCopy {
  title: string;
  subtitle: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
}

export interface MembershipContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  audiences: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  benefits: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  howToJoin: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  cta: CtaCopy;
}

export interface PartnersContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  categories: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  process: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  cta: CtaCopy;
}

export interface VolunteerContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  roles: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  howToStart: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  cta: CtaCopy;
}

export interface ContactContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  channels: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  cta: CtaCopy;
}

export interface GetInvolvedContent {
  membership: MembershipContent;
  partners: PartnersContent;
  volunteer: VolunteerContent;
  contact: ContactContent;
}

// ─── EN ────────────────────────────────────────────────────────────────────────

const en: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "Membership",
      title: "Join a Verified Global Network for Animal Welfare",
      subtitle: "Membership connects pet owners, professionals, and organizations into one coordinated, accountable network — with a role defined for every kind of participant.",
      primaryLabel: "Apply for Membership",
      primaryHref: "/join",
      secondaryLabel: "Explore Programs",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Who membership is for",
      title: "Every Participant Has a Defined Role",
      paragraphs: [
        "WPA membership is not a single tier — it's a structure built around the different people and organizations that make animal welfare work: individuals who care for animals directly, professionals who provide treatment, and institutions that fund or coordinate programs at scale.",
        "Each membership type comes with its own verification requirements, responsibilities, and access — so that pet owners, veterinarians, clinics, shelters, NGOs, volunteers, donors, and corporate partners can all participate meaningfully, without diluting the standards each program depends on.",
      ],
    },
    audiences: {
      eyebrow: "Who can join",
      title: "Membership Categories",
      subtitle: "Every category below can apply for membership through the same verified process.",
      items: [
        { title: "Pet Owners", description: "Individuals seeking adoption, vaccination, and responsible-ownership resources.", icon: "🏠" },
        { title: "Veterinarians", description: "Licensed professionals joining the verified referral and care network.", icon: "👩‍⚕️" },
        { title: "Clinics", description: "Veterinary practices participating in vaccination and treatment programs.", icon: "🏥" },
        { title: "Shelters", description: "Facilities coordinating intake, care, and adoption placement.", icon: "🐕" },
        { title: "NGOs", description: "Mission-aligned organizations extending WPA's programs regionally.", icon: "🕊️" },
        { title: "Volunteers", description: "Individuals contributing time to rescue, outreach, and events.", icon: "🙌" },
        { title: "Donors", description: "Individuals and institutions funding verified, tracked programs.", icon: "💛" },
        { title: "Corporate Partners", description: "Businesses supporting programs through funding, skills, or CSR initiatives.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "Why join",
      title: "Benefits of WPA Membership",
      subtitle: "Membership gives every participant access to a coordinated, verified network — not just a name on a list.",
      items: [
        { title: "Verified Network Access", description: "Connect with vetted clinics, shelters, NGOs, and volunteers in your region.", icon: "🔒" },
        { title: "Program Participation", description: "Take part in adoption, rescue, vaccination, and awareness programs directly.", icon: "🤝" },
        { title: "Transparent Reporting", description: "See how programs and funds you support are tracked and reported.", icon: "📊" },
        { title: "Local Chapter Support", description: "Access coordination, resources, and training through your regional chapter.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "How to join",
      title: "A Clear, Verified Path to Membership",
      subtitle: "Every application follows the same transparent process, regardless of membership category.",
      steps: [
        { number: 1, title: "Submit an Application", description: "Choose your membership category and submit your details and area of interest." },
        { number: 2, title: "Verification Review", description: "WPA or your regional chapter reviews credentials where applicable (clinics, NGOs, shelters)." },
        { number: 3, title: "Onboarding", description: "Approved members receive access to programs, resources, and chapter coordination." },
        { number: 4, title: "Active Participation", description: "Members participate in programs, campaigns, and reporting according to their role." },
      ],
    },
    cta: {
      title: "Ready to Become a Member?",
      subtitle: "Whichever category fits you — individual, professional, or organization — the application process starts here.",
      primaryLabel: "Apply for Membership",
      primaryHref: "/join",
      secondaryLabel: "Contact WPA",
      secondaryHref: "/contact",
    },
  },

  partners: {
    hero: {
      eyebrow: "Partnerships",
      title: "Partner With a Verified, Transparent Animal Welfare Network",
      subtitle: "WPA partners with government bodies, private organizations, clinics, NGOs, and media and technology providers to scale animal welfare impact responsibly.",
      primaryLabel: "Start a Partnership Inquiry",
      primaryHref: "/contact",
      secondaryLabel: "View Public Reports",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Why organizations partner with WPA",
      title: "Partnership Built on Verification, Not Just Intent",
      paragraphs: [
        "WPA partners with organizations that can meaningfully extend the reach or effectiveness of animal welfare programs — not as a branding exercise, but as an operational relationship with defined responsibilities on both sides.",
        "Every partner category goes through a verification process appropriate to its role, and partnership activity is reported through WPA's transparency and governance structure alongside all other program data.",
      ],
    },
    categories: {
      eyebrow: "Who we partner with",
      title: "Partnership Categories",
      subtitle: "Each category contributes a different kind of capability to the network.",
      items: [
        { title: "Government Organizations", description: "Policy alignment, public health coordination, and regulatory partnership.", icon: "🏛️" },
        { title: "Private Organizations", description: "Businesses supporting programs through funding, resources, or infrastructure.", icon: "🏢" },
        { title: "Veterinary Clinics", description: "Verified clinics delivering vaccination, treatment, and emergency care.", icon: "🏥" },
        { title: "Shelters", description: "Facilities providing housing and rehabilitation for rescued animals.", icon: "🐕" },
        { title: "NGOs", description: "Mission-aligned organizations extending program reach across regions.", icon: "🕊️" },
        { title: "Media Partners", description: "Outlets and creators supporting awareness campaigns and public reporting.", icon: "📰" },
        { title: "Technology Partners", description: "Organizations supporting case tracking, reporting, and digital infrastructure.", icon: "💻" },
        { title: "CSR & Corporate Donors", description: "Companies funding programs through CSR initiatives and sponsorships.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "Partnership process",
      title: "How a Partnership Is Established",
      subtitle: "A defined, verifiable process for every partner category.",
      steps: [
        { number: 1, title: "Inquiry Submitted", description: "Organizations submit a partnership inquiry describing their proposed role and capacity." },
        { number: 2, title: "Review & Verification", description: "WPA reviews the inquiry and verifies credentials relevant to the partnership type." },
        { number: 3, title: "Agreement Defined", description: "Roles, responsibilities, and reporting expectations are documented for both sides." },
        { number: 4, title: "Onboarding", description: "The partner is onboarded into the relevant program or chapter network." },
        { number: 5, title: "Ongoing Reporting", description: "Partnership activity is reported through WPA's transparency structure." },
      ],
    },
    cta: {
      title: "Explore a Partnership With WPA",
      subtitle: "Whether you represent a government body, a business, or an aligned organization, every inquiry starts with a conversation.",
      primaryLabel: "Start a Partnership Inquiry",
      primaryHref: "/contact",
      secondaryLabel: "About WPA",
      secondaryHref: "/about",
    },
  },

  volunteer: {
    hero: {
      eyebrow: "Volunteer with WPA",
      title: "Give Time, Skills, or Presence — Every Role Matters",
      subtitle: "From field rescue to digital support, WPA's volunteer roles are structured so every skill set and availability level has a meaningful way to contribute.",
      primaryLabel: "Apply to Volunteer",
      primaryHref: "/join",
      secondaryLabel: "Explore Programs",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Why volunteers matter",
      title: "The People-Powered Core of Every Program",
      paragraphs: [
        "Behind every rescue, adoption, and awareness campaign is a network of volunteers — coordinating locally, supporting field operations, and helping WPA reach communities that formal institutions alone cannot.",
        "Volunteer roles are structured around real needs, not generic tasks, so contributors can find a role that matches their time, skills, and location — from occasional event support to ongoing field coordination.",
      ],
    },
    roles: {
      eyebrow: "Volunteer roles",
      title: "Ways to Get Involved",
      subtitle: "Each role has a defined scope so volunteers know exactly what they're signing up for.",
      items: [
        { title: "Rescue Support", description: "Assist with transport, first response, and coordination for reported rescue cases.", icon: "🚑" },
        { title: "Awareness Support", description: "Help deliver vaccination and responsible-ownership campaigns in your community.", icon: "📢" },
        { title: "Event Support", description: "Support adoption drives, vaccination camps, and fundraising events on the ground.", icon: "🎪" },
        { title: "Field Operations", description: "Join hands-on rescue, transport, and shelter support teams in your region.", icon: "🐾" },
        { title: "Digital Volunteer Roles", description: "Contribute remotely — content, translation, case coordination, or reporting support.", icon: "💻" },
        { title: "Donor & Community Ambassador", description: "Represent WPA in your community and help connect new donors and members.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "How to start",
      title: "From Application to Active Volunteer",
      subtitle: "A simple process to get matched with a role that fits.",
      steps: [
        { number: 1, title: "Submit an Application", description: "Tell us your location, availability, and the type of role you're interested in." },
        { number: 2, title: "Role Matching", description: "Your local chapter matches you to an active role based on current needs." },
        { number: 3, title: "Orientation", description: "New volunteers receive a briefing on WPA's standards and safety practices." },
        { number: 4, title: "Active Contribution", description: "Volunteers begin contributing, with ongoing support from their local chapter." },
      ],
    },
    cta: {
      title: "Ready to Volunteer?",
      subtitle: "Whatever time or skills you can offer, there's a role that fits.",
      primaryLabel: "Apply to Volunteer",
      primaryHref: "/join",
      secondaryLabel: "Contact WPA",
      secondaryHref: "/contact",
    },
  },

  contact: {
    hero: {
      eyebrow: "Contact WPA",
      title: "Reach the Right Team, Faster",
      subtitle: "Whether you have a general question, a partnership proposal, a media request, or want to volunteer — here's the most direct way to reach us.",
      primaryLabel: "Become a Member",
      primaryHref: "/join",
      secondaryLabel: "Partner With Us",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Before you reach out",
      title: "Routing Your Inquiry to the Right Team",
      paragraphs: [
        "WPA operates through local chapters and specialized program teams, so the fastest way to get a useful response is to reach out through the channel that matches your inquiry.",
        "For urgent animal-in-distress reports, use the Rescue program's reporting flow rather than general contact — it routes directly to the nearest available volunteer or clinic.",
      ],
    },
    channels: {
      eyebrow: "Contact channels",
      title: "Choose the Right Inquiry Type",
      subtitle: "Each channel is monitored by the team best equipped to respond.",
      items: [
        { title: "General Inquiries", description: "Questions about WPA, our programs, or how the organization operates.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "Partnership Inquiries", description: "Government, corporate, NGO, or institutional partnership proposals.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "Media Inquiries", description: "Press requests, interviews, and media partnership proposals.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "Volunteer & Membership", description: "Questions about applying as a volunteer or member.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "Donor Support", description: "Questions about donations, receipts, or fund usage reporting.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "Rescue Reporting", description: "Report an animal in distress through WPA's rescue program.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "Still Not Sure Who to Contact?",
      subtitle: "Send a general inquiry and our team will route it to the right people.",
      primaryLabel: "Email WPA",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "Call the Hotline",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── BN ────────────────────────────────────────────────────────────────────────

const bn: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "সদস্যপদ",
      title: "প্রাণী কল্যাণের জন্য একটি যাচাইকৃত বৈশ্বিক নেটওয়ার্কে যোগ দিন",
      subtitle: "সদস্যপদ পোষা প্রাণীর মালিক, পেশাদার ও প্রতিষ্ঠানকে একটি সমন্বিত, জবাবদিহিমূলক নেটওয়ার্কে সংযুক্ত করে — প্রতিটি ধরনের অংশগ্রহণকারীর জন্য একটি নির্ধারিত ভূমিকাসহ।",
      primaryLabel: "সদস্যপদের জন্য আবেদন করুন",
      primaryHref: "/join",
      secondaryLabel: "কর্মসূচি দেখুন",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "সদস্যপদ কাদের জন্য",
      title: "প্রতিটি অংশগ্রহণকারীর একটি নির্ধারিত ভূমিকা রয়েছে",
      paragraphs: [
        "WPA সদস্যপদ একক স্তর নয় — এটি বিভিন্ন মানুষ ও প্রতিষ্ঠানের চারপাশে গড়ে তোলা একটি কাঠামো যা প্রাণী কল্যাণ কাজকে সম্ভব করে: যারা সরাসরি প্রাণীর যত্ন নেয়, যারা চিকিৎসা প্রদান করে, এবং যেসব প্রতিষ্ঠান বৃহৎ পরিসরে কর্মসূচিতে অর্থায়ন বা সমন্বয় করে।",
        "প্রতিটি সদস্যপদ ধরনের নিজস্ব যাচাইকরণ প্রয়োজনীয়তা, দায়িত্ব ও প্রবেশাধিকার রয়েছে — যাতে পোষা প্রাণীর মালিক, পশুচিকিৎসক, ক্লিনিক, আশ্রয়কেন্দ্র, এনজিও, স্বেচ্ছাসেবক, দাতা ও কর্পোরেট অংশীদার সবাই অর্থবহভাবে অংশগ্রহণ করতে পারে, প্রতিটি কর্মসূচির নির্ভরশীল মান লঘু না করে।",
      ],
    },
    audiences: {
      eyebrow: "কারা যোগ দিতে পারে",
      title: "সদস্যপদ শ্রেণী",
      subtitle: "নিচের প্রতিটি শ্রেণী একই যাচাইকৃত প্রক্রিয়ার মাধ্যমে সদস্যপদের জন্য আবেদন করতে পারে।",
      items: [
        { title: "পোষা প্রাণীর মালিক", description: "দত্তক, টিকাদান ও দায়িত্বশীল মালিকানার সম্পদ খুঁজছেন এমন ব্যক্তি।", icon: "🏠" },
        { title: "পশুচিকিৎসক", description: "যাচাইকৃত রেফারেল ও পরিচর্যা নেটওয়ার্কে যোগ দেওয়া লাইসেন্সপ্রাপ্ত পেশাদার।", icon: "👩‍⚕️" },
        { title: "ক্লিনিক", description: "টিকাদান ও চিকিৎসা কর্মসূচিতে অংশগ্রহণকারী পশুচিকিৎসা প্রতিষ্ঠান।", icon: "🏥" },
        { title: "আশ্রয়কেন্দ্র", description: "গ্রহণ, পরিচর্যা ও দত্তক স্থাপন সমন্বয়কারী সুবিধা।", icon: "🐕" },
        { title: "এনজিও", description: "WPA-এর কর্মসূচি আঞ্চলিকভাবে বিস্তৃতকারী লক্ষ্য-সংগতিপূর্ণ প্রতিষ্ঠান।", icon: "🕊️" },
        { title: "স্বেচ্ছাসেবক", description: "উদ্ধার, প্রচার ও অনুষ্ঠানে সময় দেওয়া ব্যক্তি।", icon: "🙌" },
        { title: "দাতা", description: "যাচাইকৃত, ট্র্যাক করা কর্মসূচিতে অর্থায়নকারী ব্যক্তি ও প্রতিষ্ঠান।", icon: "💛" },
        { title: "কর্পোরেট অংশীদার", description: "তহবিল, দক্ষতা বা CSR উদ্যোগের মাধ্যমে কর্মসূচি সমর্থনকারী ব্যবসা।", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "কেন যোগ দেবেন",
      title: "WPA সদস্যপদের সুবিধা",
      subtitle: "সদস্যপদ প্রতিটি অংশগ্রহণকারীকে একটি সমন্বিত, যাচাইকৃত নেটওয়ার্কের প্রবেশাধিকার দেয় — শুধু তালিকায় একটি নাম নয়।",
      items: [
        { title: "যাচাইকৃত নেটওয়ার্ক প্রবেশাধিকার", description: "আপনার অঞ্চলে যাচাইকৃত ক্লিনিক, আশ্রয়কেন্দ্র, এনজিও ও স্বেচ্ছাসেবকদের সাথে সংযুক্ত হন।", icon: "🔒" },
        { title: "কর্মসূচি অংশগ্রহণ", description: "দত্তক, উদ্ধার, টিকাদান ও সচেতনতা কর্মসূচিতে সরাসরি অংশ নিন।", icon: "🤝" },
        { title: "স্বচ্ছ প্রতিবেদন", description: "আপনি যে কর্মসূচি ও তহবিল সমর্থন করেন তা কীভাবে ট্র্যাক ও প্রতিবেদন করা হয় তা দেখুন।", icon: "📊" },
        { title: "স্থানীয় চ্যাপ্টার সহায়তা", description: "আপনার আঞ্চলিক চ্যাপ্টারের মাধ্যমে সমন্বয়, সম্পদ ও প্রশিক্ষণ অ্যাক্সেস করুন।", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "কীভাবে যোগ দেবেন",
      title: "সদস্যপদের একটি স্পষ্ট, যাচাইকৃত পথ",
      subtitle: "সদস্যপদ শ্রেণী নির্বিশেষে প্রতিটি আবেদন একই স্বচ্ছ প্রক্রিয়া অনুসরণ করে।",
      steps: [
        { number: 1, title: "একটি আবেদন জমা দিন", description: "আপনার সদস্যপদ শ্রেণী বেছে নিন এবং আপনার বিবরণ ও আগ্রহের ক্ষেত্র জমা দিন।" },
        { number: 2, title: "যাচাইকরণ পর্যালোচনা", description: "WPA বা আপনার আঞ্চলিক চ্যাপ্টার প্রযোজ্য ক্ষেত্রে যোগ্যতা পর্যালোচনা করে (ক্লিনিক, এনজিও, আশ্রয়কেন্দ্র)।" },
        { number: 3, title: "অনবোর্ডিং", description: "অনুমোদিত সদস্যরা কর্মসূচি, সম্পদ ও চ্যাপ্টার সমন্বয়ে প্রবেশাধিকার পান।" },
        { number: 4, title: "সক্রিয় অংশগ্রহণ", description: "সদস্যরা তাদের ভূমিকা অনুযায়ী কর্মসূচি, প্রচারাভিযান ও প্রতিবেদনে অংশগ্রহণ করেন।" },
      ],
    },
    cta: {
      title: "সদস্য হতে প্রস্তুত?",
      subtitle: "যে শ্রেণীই আপনার সাথে মানানসই হোক — ব্যক্তি, পেশাদার বা প্রতিষ্ঠান — আবেদন প্রক্রিয়া এখান থেকে শুরু হয়।",
      primaryLabel: "সদস্যপদের জন্য আবেদন করুন",
      primaryHref: "/join",
      secondaryLabel: "WPA-কে জানান",
      secondaryHref: "/contact",
    },
  },

  partners: {
    hero: {
      eyebrow: "অংশীদারিত্ব",
      title: "একটি যাচাইকৃত, স্বচ্ছ প্রাণী কল্যাণ নেটওয়ার্কের সঙ্গী হোন",
      subtitle: "WPA সরকারি সংস্থা, বেসরকারি প্রতিষ্ঠান, ক্লিনিক, এনজিও এবং মিডিয়া ও প্রযুক্তি প্রদানকারীদের সাথে অংশীদারিত্ব করে দায়িত্বশীলভাবে প্রাণী কল্যাণ প্রভাব বৃদ্ধি করতে।",
      primaryLabel: "অংশীদারিত্ব অনুসন্ধান শুরু করুন",
      primaryHref: "/contact",
      secondaryLabel: "পাবলিক প্রতিবেদন দেখুন",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "কেন প্রতিষ্ঠানগুলো WPA-এর সাথে অংশীদার হয়",
      title: "শুধু উদ্দেশ্য নয়, যাচাইকরণের উপর গড়া অংশীদারিত্ব",
      paragraphs: [
        "WPA এমন প্রতিষ্ঠানের সাথে অংশীদার হয় যারা প্রাণী কল্যাণ কর্মসূচির পরিধি বা কার্যকারিতা অর্থবহভাবে বাড়াতে পারে — একটি ব্র্যান্ডিং কার্যক্রম হিসেবে নয়, বরং উভয় পক্ষের নির্ধারিত দায়িত্বসহ একটি কার্যক্রম সম্পর্ক হিসেবে।",
        "প্রতিটি অংশীদার শ্রেণী তার ভূমিকার উপযুক্ত একটি যাচাইকরণ প্রক্রিয়ার মধ্য দিয়ে যায়, এবং অংশীদারিত্ব কার্যক্রম অন্যান্য সকল কর্মসূচি তথ্যের পাশাপাশি WPA-এর স্বচ্ছতা ও পরিচালনা কাঠামোর মাধ্যমে প্রতিবেদন করা হয়।",
      ],
    },
    categories: {
      eyebrow: "আমরা কাদের সাথে অংশীদার",
      title: "অংশীদারিত্ব শ্রেণী",
      subtitle: "প্রতিটি শ্রেণী নেটওয়ার্কে ভিন্ন ধরনের সক্ষমতা প্রদান করে।",
      items: [
        { title: "সরকারি সংস্থা", description: "নীতি সমন্বয়, জনস্বাস্থ্য সমন্বয় এবং নিয়ন্ত্রক অংশীদারিত্ব।", icon: "🏛️" },
        { title: "বেসরকারি প্রতিষ্ঠান", description: "তহবিল, সম্পদ বা অবকাঠামোর মাধ্যমে কর্মসূচি সমর্থনকারী ব্যবসা।", icon: "🏢" },
        { title: "পশুচিকিৎসা ক্লিনিক", description: "টিকাদান, চিকিৎসা ও জরুরি সেবা প্রদানকারী যাচাইকৃত ক্লিনিক।", icon: "🏥" },
        { title: "আশ্রয়কেন্দ্র", description: "উদ্ধারকৃত প্রাণীদের জন্য আবাসন ও পুনর্বাসন প্রদানকারী সুবিধা।", icon: "🐕" },
        { title: "এনজিও", description: "অঞ্চলজুড়ে কর্মসূচির পরিধি বাড়ানো লক্ষ্য-সংগতিপূর্ণ প্রতিষ্ঠান।", icon: "🕊️" },
        { title: "মিডিয়া অংশীদার", description: "সচেতনতা প্রচারাভিযান ও পাবলিক প্রতিবেদন সমর্থনকারী আউটলেট ও নির্মাতা।", icon: "📰" },
        { title: "প্রযুক্তি অংশীদার", description: "কেস ট্র্যাকিং, প্রতিবেদন ও ডিজিটাল অবকাঠামো সমর্থনকারী প্রতিষ্ঠান।", icon: "💻" },
        { title: "CSR ও কর্পোরেট দাতা", description: "CSR উদ্যোগ ও স্পন্সরশিপের মাধ্যমে কর্মসূচিতে অর্থায়নকারী কোম্পানি।", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "অংশীদারিত্ব প্রক্রিয়া",
      title: "একটি অংশীদারিত্ব কীভাবে প্রতিষ্ঠিত হয়",
      subtitle: "প্রতিটি অংশীদার শ্রেণীর জন্য একটি নির্ধারিত, যাচাইযোগ্য প্রক্রিয়া।",
      steps: [
        { number: 1, title: "অনুসন্ধান জমা দেওয়া হয়েছে", description: "প্রতিষ্ঠানগুলো তাদের প্রস্তাবিত ভূমিকা ও সক্ষমতা বর্ণনা করে একটি অংশীদারিত্ব অনুসন্ধান জমা দেয়।" },
        { number: 2, title: "পর্যালোচনা ও যাচাইকরণ", description: "WPA অনুসন্ধান পর্যালোচনা করে এবং অংশীদারিত্বের ধরনের সাথে প্রাসঙ্গিক যোগ্যতা যাচাই করে।" },
        { number: 3, title: "চুক্তি নির্ধারিত", description: "উভয় পক্ষের জন্য ভূমিকা, দায়িত্ব ও প্রতিবেদনের প্রত্যাশা নথিভুক্ত করা হয়।" },
        { number: 4, title: "অনবোর্ডিং", description: "অংশীদারকে প্রাসঙ্গিক কর্মসূচি বা চ্যাপ্টার নেটওয়ার্কে অন্তর্ভুক্ত করা হয়।" },
        { number: 5, title: "চলমান প্রতিবেদন", description: "অংশীদারিত্ব কার্যক্রম WPA-এর স্বচ্ছতা কাঠামোর মাধ্যমে প্রতিবেদন করা হয়।" },
      ],
    },
    cta: {
      title: "WPA-এর সাথে একটি অংশীদারিত্ব অন্বেষণ করুন",
      subtitle: "আপনি একটি সরকারি সংস্থা, একটি ব্যবসা বা একটি সংগতিপূর্ণ প্রতিষ্ঠানের প্রতিনিধিত্ব করুন না কেন, প্রতিটি অনুসন্ধান একটি কথোপকথন দিয়ে শুরু হয়।",
      primaryLabel: "অংশীদারিত্ব অনুসন্ধান শুরু করুন",
      primaryHref: "/contact",
      secondaryLabel: "WPA সম্পর্কে",
      secondaryHref: "/about",
    },
  },

  volunteer: {
    hero: {
      eyebrow: "WPA-এর সাথে স্বেচ্ছাসেবক হোন",
      title: "সময়, দক্ষতা বা উপস্থিতি দিন — প্রতিটি ভূমিকা গুরুত্বপূর্ণ",
      subtitle: "মাঠপর্যায়ের উদ্ধার থেকে ডিজিটাল সহায়তা পর্যন্ত, WPA-এর স্বেচ্ছাসেবক ভূমিকা এমনভাবে গঠিত যাতে প্রতিটি দক্ষতা ও প্রাপ্যতার স্তরের একটি অর্থবহ অবদানের উপায় থাকে।",
      primaryLabel: "স্বেচ্ছাসেবক হতে আবেদন করুন",
      primaryHref: "/join",
      secondaryLabel: "কর্মসূচি দেখুন",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "কেন স্বেচ্ছাসেবক গুরুত্বপূর্ণ",
      title: "প্রতিটি কর্মসূচির মানুষ-চালিত মূল",
      paragraphs: [
        "প্রতিটি উদ্ধার, দত্তক ও সচেতনতা প্রচারাভিযানের পেছনে রয়েছে স্বেচ্ছাসেবকদের একটি নেটওয়ার্ক — স্থানীয়ভাবে সমন্বয় করা, মাঠ কার্যক্রম সমর্থন করা এবং WPA-কে এমন কমিউনিটিতে পৌঁছাতে সাহায্য করা যেখানে শুধু আনুষ্ঠানিক প্রতিষ্ঠান পৌঁছাতে পারে না।",
        "স্বেচ্ছাসেবক ভূমিকা প্রকৃত প্রয়োজনের চারপাশে গঠিত, সাধারণ কাজের চারপাশে নয়, যাতে অবদানকারীরা তাদের সময়, দক্ষতা ও অবস্থানের সাথে মানানসই একটি ভূমিকা খুঁজে পেতে পারেন — মাঝে মাঝে অনুষ্ঠান সহায়তা থেকে চলমান মাঠ সমন্বয় পর্যন্ত।",
      ],
    },
    roles: {
      eyebrow: "স্বেচ্ছাসেবক ভূমিকা",
      title: "যুক্ত হওয়ার উপায়",
      subtitle: "প্রতিটি ভূমিকার একটি নির্ধারিত পরিধি রয়েছে যাতে স্বেচ্ছাসেবকরা ঠিক জানেন তারা কীসে সাইন আপ করছেন।",
      items: [
        { title: "উদ্ধার সহায়তা", description: "রিপোর্ট করা উদ্ধার কেসের জন্য পরিবহন, প্রথম সাড়া ও সমন্বয়ে সহায়তা করুন।", icon: "🚑" },
        { title: "সচেতনতা সহায়তা", description: "আপনার কমিউনিটিতে টিকাদান ও দায়িত্বশীল মালিকানা প্রচারাভিযান প্রদানে সাহায্য করুন।", icon: "📢" },
        { title: "অনুষ্ঠান সহায়তা", description: "মাঠপর্যায়ে দত্তক অনুষ্ঠান, টিকাদান শিবির ও তহবিল সংগ্রহ অনুষ্ঠান সমর্থন করুন।", icon: "🎪" },
        { title: "মাঠ কার্যক্রম", description: "আপনার অঞ্চলে হাতে-কলমে উদ্ধার, পরিবহন ও আশ্রয়কেন্দ্র সহায়তা দলে যোগ দিন।", icon: "🐾" },
        { title: "ডিজিটাল স্বেচ্ছাসেবক ভূমিকা", description: "দূর থেকে অবদান রাখুন — বিষয়বস্তু, অনুবাদ, কেস সমন্বয় বা প্রতিবেদন সহায়তা।", icon: "💻" },
        { title: "দাতা ও কমিউনিটি অ্যাম্বাসাডর", description: "আপনার কমিউনিটিতে WPA-এর প্রতিনিধিত্ব করুন এবং নতুন দাতা ও সদস্য সংযুক্ত করতে সাহায্য করুন।", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "কীভাবে শুরু করবেন",
      title: "আবেদন থেকে সক্রিয় স্বেচ্ছাসেবক পর্যন্ত",
      subtitle: "উপযুক্ত একটি ভূমিকার সাথে মেলানোর একটি সহজ প্রক্রিয়া।",
      steps: [
        { number: 1, title: "একটি আবেদন জমা দিন", description: "আমাদের আপনার অবস্থান, প্রাপ্যতা ও আগ্রহের ভূমিকার ধরন জানান।" },
        { number: 2, title: "ভূমিকা মিলন", description: "আপনার স্থানীয় চ্যাপ্টার বর্তমান প্রয়োজনের ভিত্তিতে আপনাকে একটি সক্রিয় ভূমিকার সাথে মেলায়।" },
        { number: 3, title: "ওরিয়েন্টেশন", description: "নতুন স্বেচ্ছাসেবকরা WPA-এর মান ও নিরাপত্তা অনুশীলনের উপর একটি ব্রিফিং পান।" },
        { number: 4, title: "সক্রিয় অবদান", description: "স্বেচ্ছাসেবকরা তাদের স্থানীয় চ্যাপ্টারের চলমান সহায়তাসহ অবদান শুরু করেন।" },
      ],
    },
    cta: {
      title: "স্বেচ্ছাসেবক হতে প্রস্তুত?",
      subtitle: "আপনি যে সময় বা দক্ষতাই দিতে পারেন না কেন, একটি উপযুক্ত ভূমিকা আছে।",
      primaryLabel: "স্বেচ্ছাসেবক হতে আবেদন করুন",
      primaryHref: "/join",
      secondaryLabel: "WPA-কে জানান",
      secondaryHref: "/contact",
    },
  },

  contact: {
    hero: {
      eyebrow: "WPA-কে জানান",
      title: "দ্রুত সঠিক দলের কাছে পৌঁছান",
      subtitle: "আপনার একটি সাধারণ প্রশ্ন, একটি অংশীদারিত্ব প্রস্তাব, একটি মিডিয়া অনুরোধ থাকুক, বা আপনি স্বেচ্ছাসেবক হতে চান — আমাদের কাছে পৌঁছানোর সবচেয়ে সরাসরি উপায় এখানে।",
      primaryLabel: "সদস্য হোন",
      primaryHref: "/join",
      secondaryLabel: "আমাদের সঙ্গী হোন",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "যোগাযোগ করার আগে",
      title: "আপনার অনুসন্ধান সঠিক দলে রাউট করা",
      paragraphs: [
        "WPA স্থানীয় চ্যাপ্টার ও বিশেষায়িত কর্মসূচি দলের মাধ্যমে পরিচালিত হয়, তাই একটি দরকারী সাড়া পাওয়ার দ্রুততম উপায় হলো আপনার অনুসন্ধানের সাথে মিলে এমন চ্যানেলের মাধ্যমে যোগাযোগ করা।",
        "বিপদগ্রস্ত প্রাণীর জরুরি রিপোর্টের জন্য, সাধারণ যোগাযোগের পরিবর্তে উদ্ধার কর্মসূচির রিপোর্টিং প্রবাহ ব্যবহার করুন — এটি সরাসরি নিকটতম উপলব্ধ স্বেচ্ছাসেবক বা ক্লিনিকে রুট করে।",
      ],
    },
    channels: {
      eyebrow: "যোগাযোগ চ্যানেল",
      title: "সঠিক অনুসন্ধানের ধরন বেছে নিন",
      subtitle: "প্রতিটি চ্যানেল সাড়া দেওয়ার জন্য সবচেয়ে উপযুক্ত দল দ্বারা পর্যবেক্ষণ করা হয়।",
      items: [
        { title: "সাধারণ অনুসন্ধান", description: "WPA, আমাদের কর্মসূচি বা প্রতিষ্ঠান কীভাবে পরিচালিত হয় সে সম্পর্কে প্রশ্ন।", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "অংশীদারিত্ব অনুসন্ধান", description: "সরকারি, কর্পোরেট, এনজিও বা প্রাতিষ্ঠানিক অংশীদারিত্ব প্রস্তাব।", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "মিডিয়া অনুসন্ধান", description: "প্রেস অনুরোধ, সাক্ষাৎকার ও মিডিয়া অংশীদারিত্ব প্রস্তাব।", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "স্বেচ্ছাসেবক ও সদস্যপদ", description: "স্বেচ্ছাসেবক বা সদস্য হিসেবে আবেদন করা সম্পর্কে প্রশ্ন।", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "দাতা সহায়তা", description: "দান, রসিদ বা তহবিল ব্যবহার প্রতিবেদন সম্পর্কে প্রশ্ন।", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "উদ্ধার রিপোর্টিং", description: "WPA-এর উদ্ধার কর্মসূচির মাধ্যমে একটি বিপদগ্রস্ত প্রাণী রিপোর্ট করুন।", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "এখনও নিশ্চিত নন কার সাথে যোগাযোগ করবেন?",
      subtitle: "একটি সাধারণ অনুসন্ধান পাঠান এবং আমাদের দল এটি সঠিক মানুষের কাছে রাউট করবে।",
      primaryLabel: "WPA-কে ইমেইল করুন",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "হটলাইনে কল করুন",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── AR (Arabic) ────────────────────────────────────────────────────────────

const ar: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "العضوية",
      title: "انضم إلى شبكة عالمية موثقة لرفاهية الحيوان",
      subtitle: "تربط العضوية أصحاب الحيوانات الأليفة والمهنيين والمؤسسات في شبكة واحدة منسقة وخاضعة للمساءلة — مع دور محدد لكل نوع من المشاركين.",
      primaryLabel: "تقديم طلب عضوية",
      primaryHref: "/join",
      secondaryLabel: "استكشاف البرامج",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "لمن تُقدَّم العضوية",
      title: "لكل مشارك دور محدد",
      paragraphs: [
        "عضوية WPA ليست مستوى واحداً — بل هي هيكل مبني حول الأفراد والمؤسسات المختلفة التي تُشكّل عمل رفاهية الحيوان: الأفراد الذين يرعون الحيوانات مباشرة، والمهنيون الذين يقدمون العلاج، والمؤسسات التي تموّل أو تنسّق البرامج على نطاق واسع.",
        "يأتي كل نوع من العضوية بمتطلبات توثيق ومسؤوليات وصلاحيات خاصة به — بحيث يمكن لأصحاب الحيوانات الأليفة والأطباء البيطريين والعيادات والملاجئ والمنظمات غير الحكومية والمتطوعين والمتبرعين والشركاء من الشركات المشاركة بشكل هادف، دون تخفيف المعايير التي يعتمد عليها كل برنامج.",
      ],
    },
    audiences: {
      eyebrow: "من يمكنه الانضمام",
      title: "فئات العضوية",
      subtitle: "يمكن لكل فئة أدناه التقدم بطلب العضوية عبر نفس العملية الموثقة.",
      items: [
        { title: "أصحاب الحيوانات الأليفة", description: "أفراد يبحثون عن التبني والتطعيم وموارد الملكية المسؤولة.", icon: "🏠" },
        { title: "الأطباء البيطريون", description: "مهنيون مرخّصون ينضمون إلى شبكة الإحالة والرعاية الموثقة.", icon: "👩‍⚕️" },
        { title: "العيادات", description: "ممارسات بيطرية تشارك في برامج التطعيم والعلاج.", icon: "🏥" },
        { title: "الملاجئ", description: "مرافق تنسّق الاستقبال والرعاية وإيجاد أسر التبني.", icon: "🐕" },
        { title: "المنظمات غير الحكومية", description: "مؤسسات متوافقة الرسالة توسّع برامج WPA إقليمياً.", icon: "🕊️" },
        { title: "المتطوعون", description: "أفراد يساهمون بوقتهم في الإنقاذ والتوعية والفعاليات.", icon: "🙌" },
        { title: "المتبرعون", description: "أفراد ومؤسسات تموّل برامج موثقة وقابلة للتتبع.", icon: "💛" },
        { title: "شركاء الشركات", description: "شركات تدعم البرامج عبر التمويل أو المهارات أو مبادرات المسؤولية الاجتماعية.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "لماذا الانضمام",
      title: "فوائد عضوية WPA",
      subtitle: "تمنح العضوية كل مشارك إمكانية الوصول إلى شبكة منسقة وموثقة — وليس مجرد اسم على قائمة.",
      items: [
        { title: "الوصول إلى شبكة موثقة", description: "تواصل مع عيادات وملاجئ ومنظمات غير حكومية ومتطوعين معتمدين في منطقتك.", icon: "🔒" },
        { title: "المشاركة في البرامج", description: "شارك مباشرة في برامج التبني والإنقاذ والتطعيم والتوعية.", icon: "🤝" },
        { title: "تقارير شفافة", description: "اطّلع على كيفية تتبع وإعداد تقارير عن البرامج والأموال التي تدعمها.", icon: "📊" },
        { title: "دعم الفرع المحلي", description: "احصل على التنسيق والموارد والتدريب من خلال فرعك الإقليمي.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "كيفية الانضمام",
      title: "مسار واضح وموثّق للعضوية",
      subtitle: "يتبع كل طلب نفس العملية الشفافة، بغض النظر عن فئة العضوية.",
      steps: [
        { number: 1, title: "تقديم طلب", description: "اختر فئة عضويتك وقدّم بياناتك ومجال اهتمامك." },
        { number: 2, title: "مراجعة التوثيق", description: "تراجع WPA أو فرعك الإقليمي الاعتمادات حيثما ينطبق ذلك (العيادات، المنظمات غير الحكومية، الملاجئ)." },
        { number: 3, title: "التأهيل", description: "يحصل الأعضاء المقبولون على الوصول إلى البرامج والموارد وتنسيق الفروع." },
        { number: 4, title: "المشاركة الفعّالة", description: "يشارك الأعضاء في البرامج والحملات والتقارير وفق دورهم." },
      ],
    },
    cta: {
      title: "هل أنت مستعد لتصبح عضواً؟",
      subtitle: "أياً كانت الفئة التي تناسبك — فرد أو مهني أو مؤسسة — تبدأ عملية التقديم هنا.",
      primaryLabel: "تقديم طلب عضوية",
      primaryHref: "/join",
      secondaryLabel: "تواصل مع WPA",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "الشراكات",
      title: "كن شريكاً في شبكة موثقة وشفافة لرفاهية الحيوان",
      subtitle: "تتشارك WPA مع الهيئات الحكومية والمؤسسات الخاصة والعيادات والمنظمات غير الحكومية ومزودي الإعلام والتكنولوجيا لتوسيع أثر رفاهية الحيوان بمسؤولية.",
      primaryLabel: "بدء استفسار عن الشراكة",
      primaryHref: "/contact",
      secondaryLabel: "عرض التقارير العامة",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "لماذا تشارك المؤسسات مع WPA",
      title: "شراكة مبنية على التوثيق لا النوايا فقط",
      paragraphs: [
        "تتشارك WPA مع المؤسسات القادرة على توسيع نطاق أو فعالية برامج رفاهية الحيوان بشكل هادف — ليس كنشاط للعلامة التجارية، بل كعلاقة تشغيلية بمسؤوليات محددة على الجانبين.",
        "تمر كل فئة شراكة بعملية توثيق مناسبة لدورها، ويُبلّغ عن نشاط الشراكة عبر هيكل الشفافية والحوكمة الخاص بـ WPA جنباً إلى جنب مع كل بيانات البرامج الأخرى.",
      ],
    },
    categories: {
      eyebrow: "مع من نتشارك",
      title: "فئات الشراكة",
      subtitle: "تساهم كل فئة بنوع مختلف من القدرات في الشبكة.",
      items: [
        { title: "المؤسسات الحكومية", description: "التوافق في السياسات، والتنسيق الصحي العام، والشراكة التنظيمية.", icon: "🏛️" },
        { title: "المؤسسات الخاصة", description: "شركات تدعم البرامج عبر التمويل أو الموارد أو البنية التحتية.", icon: "🏢" },
        { title: "العيادات البيطرية", description: "عيادات موثقة تقدّم التطعيم والعلاج والرعاية الطارئة.", icon: "🏥" },
        { title: "الملاجئ", description: "مرافق توفّر الإيواء وإعادة التأهيل للحيوانات المنقذة.", icon: "🐕" },
        { title: "المنظمات غير الحكومية", description: "مؤسسات متوافقة الرسالة توسّع نطاق البرامج عبر المناطق.", icon: "🕊️" },
        { title: "شركاء الإعلام", description: "منافذ ومبدعون يدعمون حملات التوعية والتقارير العامة.", icon: "📰" },
        { title: "شركاء التكنولوجيا", description: "مؤسسات تدعم تتبّع الحالات والتقارير والبنية التحتية الرقمية.", icon: "💻" },
        { title: "المسؤولية الاجتماعية والمتبرعون من الشركات", description: "شركات تموّل البرامج عبر مبادرات المسؤولية الاجتماعية والرعايات.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "عملية الشراكة",
      title: "كيف تُبرَم الشراكة",
      subtitle: "عملية محددة وقابلة للتحقق لكل فئة شراكة.",
      steps: [
        { number: 1, title: "تقديم الاستفسار", description: "تقدّم المؤسسات استفسار شراكة يصف دورها المقترح وقدراتها." },
        { number: 2, title: "المراجعة والتوثيق", description: "تراجع WPA الاستفسار وتوثق الاعتمادات ذات الصلة بنوع الشراكة." },
        { number: 3, title: "تحديد الاتفاقية", description: "تُوثَّق الأدوار والمسؤوليات وتوقعات التقارير لكلا الطرفين." },
        { number: 4, title: "التأهيل", description: "يُدمَج الشريك في البرنامج أو شبكة الفروع ذات الصلة." },
        { number: 5, title: "التقارير المستمرة", description: "يُبلَّغ عن نشاط الشراكة عبر هيكل الشفافية الخاص بـ WPA." },
      ],
    },
    cta: {
      title: "استكشف شراكة مع WPA",
      subtitle: "سواء كنت تمثّل جهة حكومية أو شركة أو مؤسسة متوافقة، يبدأ كل استفسار بمحادثة.",
      primaryLabel: "بدء استفسار عن الشراكة",
      primaryHref: "/contact",
      secondaryLabel: "عن WPA",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "تطوّع مع WPA",
      title: "قدّم وقتك أو مهاراتك أو حضورك — كل دور مهم",
      subtitle: "من الإنقاذ الميداني إلى الدعم الرقمي، بُنيت أدوار التطوع في WPA بحيث يجد كل مستوى من المهارات والتفرغ طريقة مجدية للمساهمة.",
      primaryLabel: "تقديم طلب تطوع",
      primaryHref: "/join",
      secondaryLabel: "استكشاف البرامج",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "لماذا يهم المتطوعون",
      title: "القوة البشرية وراء كل برنامج",
      paragraphs: [
        "خلف كل عملية إنقاذ وتبنٍ وحملة توعية، توجد شبكة من المتطوعين — ينسّقون محلياً، ويدعمون العمليات الميدانية، ويساعدون WPA في الوصول إلى مجتمعات لا تستطيع المؤسسات الرسمية وحدها الوصول إليها.",
        "تُبنى أدوار التطوع حول احتياجات حقيقية، لا مهام عامة، بحيث يجد المساهمون دوراً يناسب وقتهم ومهاراتهم وموقعهم — من الدعم العرضي للفعاليات إلى التنسيق الميداني المستمر.",
      ],
    },
    roles: {
      eyebrow: "أدوار التطوع",
      title: "طرق المشاركة",
      subtitle: "لكل دور نطاق محدد بحيث يعرف المتطوعون بالضبط ما يشاركون فيه.",
      items: [
        { title: "دعم الإنقاذ", description: "المساعدة في النقل والاستجابة الأولى والتنسيق لحالات الإنقاذ المبلَّغ عنها.", icon: "🚑" },
        { title: "دعم التوعية", description: "المساعدة في تقديم حملات التطعيم والملكية المسؤولة في مجتمعك.", icon: "📢" },
        { title: "دعم الفعاليات", description: "دعم حملات التبني ومخيمات التطعيم وفعاليات جمع التبرعات ميدانياً.", icon: "🎪" },
        { title: "العمليات الميدانية", description: "انضم إلى فرق الإنقاذ والنقل ودعم الملاجئ العملية في منطقتك.", icon: "🐾" },
        { title: "أدوار التطوع الرقمي", description: "ساهم عن بُعد — المحتوى، الترجمة، تنسيق الحالات، أو دعم التقارير.", icon: "💻" },
        { title: "سفير المتبرعين والمجتمع", description: "مثّل WPA في مجتمعك وساعد في ربط المتبرعين والأعضاء الجدد.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "كيفية البدء",
      title: "من التقديم إلى التطوع الفعّال",
      subtitle: "عملية بسيطة للحصول على دور مناسب لك.",
      steps: [
        { number: 1, title: "تقديم طلب", description: "أخبرنا بموقعك وتفرّغك ونوع الدور الذي يهمّك." },
        { number: 2, title: "مطابقة الدور", description: "يطابقك فرعك المحلي مع دور فعّال بناءً على الاحتياجات الحالية." },
        { number: 3, title: "التوجيه", description: "يتلقى المتطوعون الجدد إحاطة حول معايير WPA وممارسات السلامة." },
        { number: 4, title: "المساهمة الفعّالة", description: "يبدأ المتطوعون بالمساهمة، بدعم مستمر من فرعهم المحلي." },
      ],
    },
    cta: {
      title: "هل أنت مستعد للتطوع؟",
      subtitle: "أياً كان الوقت أو المهارات التي يمكنك تقديمها، هناك دور يناسبك.",
      primaryLabel: "تقديم طلب تطوع",
      primaryHref: "/join",
      secondaryLabel: "تواصل مع WPA",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "تواصل مع WPA",
      title: "صِل إلى الفريق المناسب بشكل أسرع",
      subtitle: "سواء كان لديك سؤال عام، أو مقترح شراكة، أو طلب إعلامي، أو ترغب في التطوع — هذه هي أسرع طريقة للتواصل معنا.",
      primaryLabel: "كن عضواً",
      primaryHref: "/join",
      secondaryLabel: "تشارك معنا",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "قبل أن تتواصل",
      title: "توجيه استفسارك إلى الفريق المناسب",
      paragraphs: [
        "تعمل WPA من خلال فروع محلية وفرق برامج متخصصة، لذا فإن أسرع طريقة للحصول على رد مفيد هي التواصل عبر القناة المناسبة لاستفسارك.",
        "للإبلاغ عن حالات الطوارئ لحيوان في خطر، استخدم مسار الإبلاغ الخاص ببرنامج الإنقاذ بدلاً من التواصل العام — إذ يُوجَّه مباشرةً إلى أقرب متطوع أو عيادة متاحة.",
      ],
    },
    channels: {
      eyebrow: "قنوات التواصل",
      title: "اختر نوع الاستفسار المناسب",
      subtitle: "تتم مراقبة كل قناة من قبل الفريق الأنسب للرد.",
      items: [
        { title: "استفسارات عامة", description: "أسئلة حول WPA أو برامجنا أو كيفية عمل المؤسسة.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "استفسارات الشراكة", description: "مقترحات شراكة حكومية أو من الشركات أو المنظمات غير الحكومية أو المؤسسية.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "استفسارات إعلامية", description: "طلبات صحفية ومقابلات ومقترحات شراكة إعلامية.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "التطوع والعضوية", description: "أسئلة حول التقديم كمتطوع أو عضو.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "دعم المتبرعين", description: "أسئلة حول التبرعات أو الإيصالات أو تقارير استخدام الأموال.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "الإبلاغ عن حالات الإنقاذ", description: "أبلغ عن حيوان في خطر من خلال برنامج الإنقاذ في WPA.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "ما زلت غير متأكد ممن تتواصل معه؟",
      subtitle: "أرسل استفساراً عاماً وسيقوم فريقنا بتوجيهه إلى الأشخاص المناسبين.",
      primaryLabel: "راسل WPA عبر البريد الإلكتروني",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "اتصل بالخط الساخن",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── FR (French) ────────────────────────────────────────────────────────────

const fr: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "Adhésion",
      title: "Rejoignez un réseau mondial vérifié pour le bien-être animal",
      subtitle: "L'adhésion relie propriétaires d'animaux, professionnels et organisations au sein d'un réseau coordonné et responsable — avec un rôle défini pour chaque type de participant.",
      primaryLabel: "Demander l'adhésion",
      primaryHref: "/join",
      secondaryLabel: "Découvrir les programmes",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "À qui s'adresse l'adhésion",
      title: "Chaque participant a un rôle défini",
      paragraphs: [
        "L'adhésion à la WPA n'est pas un niveau unique — c'est une structure construite autour des différentes personnes et organisations qui font vivre le bien-être animal : les particuliers qui prennent soin directement des animaux, les professionnels qui prodiguent des soins, et les institutions qui financent ou coordonnent des programmes à grande échelle.",
        "Chaque type d'adhésion comporte ses propres exigences de vérification, responsabilités et accès — afin que propriétaires d'animaux, vétérinaires, cliniques, refuges, ONG, bénévoles, donateurs et partenaires d'entreprise puissent tous participer de manière significative, sans diluer les standards dont dépend chaque programme.",
      ],
    },
    audiences: {
      eyebrow: "Qui peut adhérer",
      title: "Catégories d'adhésion",
      subtitle: "Chaque catégorie ci-dessous peut demander l'adhésion via le même processus vérifié.",
      items: [
        { title: "Propriétaires d'animaux", description: "Particuliers en quête d'adoption, de vaccination et de ressources sur la possession responsable.", icon: "🏠" },
        { title: "Vétérinaires", description: "Professionnels agréés rejoignant le réseau vérifié d'orientation et de soins.", icon: "👩‍⚕️" },
        { title: "Cliniques", description: "Établissements vétérinaires participant aux programmes de vaccination et de traitement.", icon: "🏥" },
        { title: "Refuges", description: "Structures coordonnant l'accueil, les soins et le placement en adoption.", icon: "🐕" },
        { title: "ONG", description: "Organisations partageant notre mission qui étendent les programmes de la WPA à l'échelle régionale.", icon: "🕊️" },
        { title: "Bénévoles", description: "Particuliers consacrant du temps au sauvetage, à la sensibilisation et aux événements.", icon: "🙌" },
        { title: "Donateurs", description: "Particuliers et institutions finançant des programmes vérifiés et suivis.", icon: "💛" },
        { title: "Partenaires d'entreprise", description: "Entreprises soutenant les programmes par le financement, les compétences ou des initiatives RSE.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "Pourquoi adhérer",
      title: "Les avantages de l'adhésion à la WPA",
      subtitle: "L'adhésion donne à chaque participant l'accès à un réseau coordonné et vérifié — pas simplement un nom sur une liste.",
      items: [
        { title: "Accès à un réseau vérifié", description: "Connectez-vous avec des cliniques, refuges, ONG et bénévoles agréés dans votre région.", icon: "🔒" },
        { title: "Participation aux programmes", description: "Prenez part directement aux programmes d'adoption, de sauvetage, de vaccination et de sensibilisation.", icon: "🤝" },
        { title: "Reporting transparent", description: "Suivez comment les programmes et fonds que vous soutenez sont suivis et rapportés.", icon: "📊" },
        { title: "Soutien du chapitre local", description: "Accédez à la coordination, aux ressources et à la formation via votre chapitre régional.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "Comment adhérer",
      title: "Un parcours clair et vérifié vers l'adhésion",
      subtitle: "Chaque candidature suit le même processus transparent, quelle que soit la catégorie d'adhésion.",
      steps: [
        { number: 1, title: "Soumettre une candidature", description: "Choisissez votre catégorie d'adhésion et soumettez vos coordonnées et votre domaine d'intérêt." },
        { number: 2, title: "Examen de vérification", description: "La WPA ou votre chapitre régional examine les qualifications lorsque applicable (cliniques, ONG, refuges)." },
        { number: 3, title: "Intégration", description: "Les membres approuvés reçoivent l'accès aux programmes, ressources et à la coordination du chapitre." },
        { number: 4, title: "Participation active", description: "Les membres participent aux programmes, campagnes et rapports selon leur rôle." },
      ],
    },
    cta: {
      title: "Prêt à devenir membre ?",
      subtitle: "Quelle que soit la catégorie qui vous correspond — particulier, professionnel ou organisation — la candidature commence ici.",
      primaryLabel: "Demander l'adhésion",
      primaryHref: "/join",
      secondaryLabel: "Contacter la WPA",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "Partenariats",
      title: "Devenez partenaire d'un réseau vérifié et transparent pour le bien-être animal",
      subtitle: "La WPA s'associe à des organismes publics, des organisations privées, des cliniques, des ONG ainsi qu'à des partenaires médias et technologiques pour étendre son impact en matière de bien-être animal de façon responsable.",
      primaryLabel: "Lancer une demande de partenariat",
      primaryHref: "/contact",
      secondaryLabel: "Voir les rapports publics",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Pourquoi les organisations s'associent à la WPA",
      title: "Un partenariat fondé sur la vérification, pas seulement sur l'intention",
      paragraphs: [
        "La WPA s'associe à des organisations capables d'étendre concrètement la portée ou l'efficacité des programmes de bien-être animal — non pas comme un exercice de communication, mais comme une relation opérationnelle avec des responsabilités définies des deux côtés.",
        "Chaque catégorie de partenaire passe par un processus de vérification adapté à son rôle, et l'activité du partenariat est rapportée via la structure de transparence et de gouvernance de la WPA, aux côtés de toutes les autres données des programmes.",
      ],
    },
    categories: {
      eyebrow: "Avec qui nous nous associons",
      title: "Catégories de partenariat",
      subtitle: "Chaque catégorie apporte un type de capacité différent au réseau.",
      items: [
        { title: "Organismes publics", description: "Alignement des politiques, coordination de santé publique et partenariat réglementaire.", icon: "🏛️" },
        { title: "Organisations privées", description: "Entreprises soutenant les programmes par le financement, les ressources ou l'infrastructure.", icon: "🏢" },
        { title: "Cliniques vétérinaires", description: "Cliniques vérifiées assurant vaccination, traitement et soins d'urgence.", icon: "🏥" },
        { title: "Refuges", description: "Structures offrant hébergement et réhabilitation aux animaux sauvés.", icon: "🐕" },
        { title: "ONG", description: "Organisations partageant notre mission qui étendent la portée des programmes à travers les régions.", icon: "🕊️" },
        { title: "Partenaires médias", description: "Médias et créateurs soutenant les campagnes de sensibilisation et le reporting public.", icon: "📰" },
        { title: "Partenaires technologiques", description: "Organisations soutenant le suivi des dossiers, le reporting et l'infrastructure numérique.", icon: "💻" },
        { title: "Donateurs RSE et entreprises", description: "Entreprises finançant des programmes via des initiatives RSE et des parrainages.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "Processus de partenariat",
      title: "Comment un partenariat est établi",
      subtitle: "Un processus défini et vérifiable pour chaque catégorie de partenaire.",
      steps: [
        { number: 1, title: "Demande soumise", description: "Les organisations soumettent une demande de partenariat décrivant leur rôle et leur capacité proposés." },
        { number: 2, title: "Examen et vérification", description: "La WPA examine la demande et vérifie les qualifications pertinentes pour le type de partenariat." },
        { number: 3, title: "Accord défini", description: "Les rôles, responsabilités et attentes en matière de reporting sont documentés pour les deux parties." },
        { number: 4, title: "Intégration", description: "Le partenaire est intégré dans le programme ou le réseau de chapitre concerné." },
        { number: 5, title: "Reporting continu", description: "L'activité du partenariat est rapportée via la structure de transparence de la WPA." },
      ],
    },
    cta: {
      title: "Explorer un partenariat avec la WPA",
      subtitle: "Que vous représentiez un organisme public, une entreprise ou une organisation alignée, chaque demande commence par une conversation.",
      primaryLabel: "Lancer une demande de partenariat",
      primaryHref: "/contact",
      secondaryLabel: "À propos de la WPA",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "Devenir bénévole avec la WPA",
      title: "Offrez du temps, des compétences ou votre présence — chaque rôle compte",
      subtitle: "Du sauvetage sur le terrain au soutien numérique, les rôles bénévoles de la WPA sont structurés pour que chaque niveau de compétence et de disponibilité trouve une manière significative de contribuer.",
      primaryLabel: "Postuler comme bénévole",
      primaryHref: "/join",
      secondaryLabel: "Découvrir les programmes",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Pourquoi les bénévoles comptent",
      title: "Le cœur humain de chaque programme",
      paragraphs: [
        "Derrière chaque sauvetage, adoption et campagne de sensibilisation se trouve un réseau de bénévoles — coordonnant localement, soutenant les opérations sur le terrain et aidant la WPA à atteindre des communautés que les institutions formelles ne peuvent atteindre seules.",
        "Les rôles bénévoles sont structurés autour de besoins réels, et non de tâches génériques, afin que les contributeurs trouvent un rôle adapté à leur temps, leurs compétences et leur localisation — du soutien occasionnel lors d'événements à la coordination continue sur le terrain.",
      ],
    },
    roles: {
      eyebrow: "Rôles bénévoles",
      title: "Façons de s'impliquer",
      subtitle: "Chaque rôle a un périmètre défini afin que les bénévoles sachent exactement à quoi ils s'engagent.",
      items: [
        { title: "Soutien au sauvetage", description: "Aider au transport, à la première intervention et à la coordination des cas de sauvetage signalés.", icon: "🚑" },
        { title: "Soutien à la sensibilisation", description: "Aider à mener des campagnes de vaccination et de possession responsable dans votre communauté.", icon: "📢" },
        { title: "Soutien aux événements", description: "Soutenir les campagnes d'adoption, les camps de vaccination et les événements de collecte de fonds sur le terrain.", icon: "🎪" },
        { title: "Opérations sur le terrain", description: "Rejoignez les équipes de sauvetage, de transport et de soutien aux refuges dans votre région.", icon: "🐾" },
        { title: "Rôles de bénévolat numérique", description: "Contribuez à distance — contenu, traduction, coordination des dossiers ou soutien au reporting.", icon: "💻" },
        { title: "Ambassadeur donateurs et communauté", description: "Représentez la WPA dans votre communauté et aidez à mettre en relation nouveaux donateurs et membres.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "Comment commencer",
      title: "De la candidature au bénévolat actif",
      subtitle: "Un processus simple pour être associé à un rôle qui vous correspond.",
      steps: [
        { number: 1, title: "Soumettre une candidature", description: "Indiquez-nous votre localisation, votre disponibilité et le type de rôle qui vous intéresse." },
        { number: 2, title: "Attribution du rôle", description: "Votre chapitre local vous associe à un rôle actif en fonction des besoins actuels." },
        { number: 3, title: "Orientation", description: "Les nouveaux bénévoles reçoivent une présentation des standards et pratiques de sécurité de la WPA." },
        { number: 4, title: "Contribution active", description: "Les bénévoles commencent à contribuer, avec un soutien continu de leur chapitre local." },
      ],
    },
    cta: {
      title: "Prêt à devenir bénévole ?",
      subtitle: "Quel que soit le temps ou les compétences que vous pouvez offrir, un rôle vous correspond.",
      primaryLabel: "Postuler comme bénévole",
      primaryHref: "/join",
      secondaryLabel: "Contacter la WPA",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contacter la WPA",
      title: "Joignez la bonne équipe, plus rapidement",
      subtitle: "Que vous ayez une question générale, une proposition de partenariat, une demande média, ou que vous souhaitiez devenir bénévole — voici le moyen le plus direct de nous contacter.",
      primaryLabel: "Devenir membre",
      primaryHref: "/join",
      secondaryLabel: "Devenir partenaire",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Avant de nous contacter",
      title: "Orienter votre demande vers la bonne équipe",
      paragraphs: [
        "La WPA opère via des chapitres locaux et des équipes de programme spécialisées, donc le moyen le plus rapide d'obtenir une réponse utile est de nous contacter via le canal correspondant à votre demande.",
        "Pour les signalements urgents d'animaux en détresse, utilisez le circuit de signalement du programme de sauvetage plutôt que le contact général — il est directement acheminé vers le bénévole ou la clinique disponible la plus proche.",
      ],
    },
    channels: {
      eyebrow: "Canaux de contact",
      title: "Choisissez le bon type de demande",
      subtitle: "Chaque canal est surveillé par l'équipe la mieux placée pour y répondre.",
      items: [
        { title: "Demandes générales", description: "Questions sur la WPA, nos programmes ou le fonctionnement de l'organisation.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "Demandes de partenariat", description: "Propositions de partenariat gouvernemental, corporatif, ONG ou institutionnel.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "Demandes médias", description: "Demandes de presse, interviews et propositions de partenariat média.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "Bénévolat et adhésion", description: "Questions sur la candidature comme bénévole ou membre.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "Support aux donateurs", description: "Questions sur les dons, les reçus ou le reporting d'utilisation des fonds.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "Signalement de sauvetage", description: "Signalez un animal en détresse via le programme de sauvetage de la WPA.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "Vous ne savez toujours pas qui contacter ?",
      subtitle: "Envoyez une demande générale et notre équipe l'orientera vers les bonnes personnes.",
      primaryLabel: "Envoyer un e-mail à la WPA",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "Appeler la ligne d'urgence",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── ES (Spanish) ───────────────────────────────────────────────────────────

const es: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "Membresía",
      title: "Únase a una red global verificada por el bienestar animal",
      subtitle: "La membresía conecta a dueños de mascotas, profesionales y organizaciones en una red coordinada y responsable, con un rol definido para cada tipo de participante.",
      primaryLabel: "Solicitar membresía",
      primaryHref: "/join",
      secondaryLabel: "Explorar programas",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Para quién es la membresía",
      title: "Cada participante tiene un rol definido",
      paragraphs: [
        "La membresía de WPA no es un único nivel: es una estructura construida en torno a las diferentes personas y organizaciones que hacen posible el trabajo de bienestar animal: individuos que cuidan directamente a los animales, profesionales que brindan tratamiento e instituciones que financian o coordinan programas a gran escala.",
        "Cada tipo de membresía tiene sus propios requisitos de verificación, responsabilidades y niveles de acceso, de modo que dueños de mascotas, veterinarios, clínicas, refugios, ONG, voluntarios, donantes y socios corporativos puedan participar de manera significativa sin diluir los estándares de los que depende cada programa.",
      ],
    },
    audiences: {
      eyebrow: "Quién puede unirse",
      title: "Categorías de membresía",
      subtitle: "Cada una de las siguientes categorías puede solicitar membresía a través del mismo proceso verificado.",
      items: [
        { title: "Dueños de mascotas", description: "Personas que buscan adopción, vacunación y recursos sobre tenencia responsable.", icon: "🏠" },
        { title: "Veterinarios", description: "Profesionales con licencia que se unen a la red verificada de derivación y cuidado.", icon: "👩‍⚕️" },
        { title: "Clínicas", description: "Consultorios veterinarios que participan en programas de vacunación y tratamiento.", icon: "🏥" },
        { title: "Refugios", description: "Instalaciones que coordinan el ingreso, cuidado y colocación en adopción.", icon: "🐕" },
        { title: "ONG", description: "Organizaciones alineadas con la misión que amplían los programas de WPA a nivel regional.", icon: "🕊️" },
        { title: "Voluntarios", description: "Personas que dedican tiempo al rescate, la difusión y los eventos.", icon: "🙌" },
        { title: "Donantes", description: "Personas e instituciones que financian programas verificados y rastreados.", icon: "💛" },
        { title: "Socios corporativos", description: "Empresas que apoyan programas mediante financiamiento, habilidades o iniciativas de RSE.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "Por qué unirse",
      title: "Beneficios de la membresía WPA",
      subtitle: "La membresía brinda a cada participante acceso a una red coordinada y verificada, no solo un nombre en una lista.",
      items: [
        { title: "Acceso a una red verificada", description: "Conéctese con clínicas, refugios, ONG y voluntarios verificados en su región.", icon: "🔒" },
        { title: "Participación en programas", description: "Participe directamente en programas de adopción, rescate, vacunación y concientización.", icon: "🤝" },
        { title: "Informes transparentes", description: "Vea cómo se rastrean y reportan los programas y fondos que apoya.", icon: "📊" },
        { title: "Apoyo del capítulo local", description: "Acceda a coordinación, recursos y capacitación a través de su capítulo regional.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "Cómo unirse",
      title: "Un camino claro y verificado hacia la membresía",
      subtitle: "Toda solicitud sigue el mismo proceso transparente, sin importar la categoría de membresía.",
      steps: [
        { number: 1, title: "Enviar una solicitud", description: "Elija su categoría de membresía y envíe sus datos y área de interés." },
        { number: 2, title: "Revisión de verificación", description: "WPA o su capítulo regional revisa las credenciales cuando corresponde (clínicas, ONG, refugios)." },
        { number: 3, title: "Incorporación", description: "Los miembros aprobados reciben acceso a programas, recursos y coordinación de capítulo." },
        { number: 4, title: "Participación activa", description: "Los miembros participan en programas, campañas e informes según su rol." },
      ],
    },
    cta: {
      title: "¿Listo para convertirse en miembro?",
      subtitle: "Sea cual sea la categoría que le corresponda —individual, profesional u organización—, el proceso de solicitud comienza aquí.",
      primaryLabel: "Solicitar membresía",
      primaryHref: "/join",
      secondaryLabel: "Contactar a WPA",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "Alianzas",
      title: "Asóciese con una red verificada y transparente de bienestar animal",
      subtitle: "WPA se asocia con organismos gubernamentales, organizaciones privadas, clínicas, ONG y proveedores de medios y tecnología para ampliar el impacto en bienestar animal de manera responsable.",
      primaryLabel: "Iniciar una consulta de alianza",
      primaryHref: "/contact",
      secondaryLabel: "Ver informes públicos",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Por qué las organizaciones se asocian con WPA",
      title: "Una alianza basada en la verificación, no solo en la intención",
      paragraphs: [
        "WPA se asocia con organizaciones capaces de ampliar de manera significativa el alcance o la efectividad de los programas de bienestar animal, no como un ejercicio de imagen, sino como una relación operativa con responsabilidades definidas para ambas partes.",
        "Cada categoría de socio pasa por un proceso de verificación adecuado a su rol, y la actividad de la alianza se reporta a través de la estructura de transparencia y gobernanza de WPA junto con todos los demás datos de los programas.",
      ],
    },
    categories: {
      eyebrow: "Con quién nos asociamos",
      title: "Categorías de alianza",
      subtitle: "Cada categoría aporta un tipo distinto de capacidad a la red.",
      items: [
        { title: "Organismos gubernamentales", description: "Alineación de políticas, coordinación de salud pública y alianza regulatoria.", icon: "🏛️" },
        { title: "Organizaciones privadas", description: "Empresas que apoyan programas mediante financiamiento, recursos o infraestructura.", icon: "🏢" },
        { title: "Clínicas veterinarias", description: "Clínicas verificadas que brindan vacunación, tratamiento y atención de emergencia.", icon: "🏥" },
        { title: "Refugios", description: "Instalaciones que brindan alojamiento y rehabilitación a animales rescatados.", icon: "🐕" },
        { title: "ONG", description: "Organizaciones alineadas con la misión que amplían el alcance de los programas entre regiones.", icon: "🕊️" },
        { title: "Socios de medios", description: "Medios y creadores que apoyan campañas de concientización e informes públicos.", icon: "📰" },
        { title: "Socios tecnológicos", description: "Organizaciones que apoyan el seguimiento de casos, informes e infraestructura digital.", icon: "💻" },
        { title: "RSE y donantes corporativos", description: "Empresas que financian programas mediante iniciativas de RSE y patrocinios.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "Proceso de alianza",
      title: "Cómo se establece una alianza",
      subtitle: "Un proceso definido y verificable para cada categoría de socio.",
      steps: [
        { number: 1, title: "Consulta enviada", description: "Las organizaciones envían una consulta de alianza describiendo su rol y capacidad propuestos." },
        { number: 2, title: "Revisión y verificación", description: "WPA revisa la consulta y verifica las credenciales relevantes para el tipo de alianza." },
        { number: 3, title: "Acuerdo definido", description: "Se documentan roles, responsabilidades y expectativas de informes para ambas partes." },
        { number: 4, title: "Incorporación", description: "El socio se incorpora al programa o a la red de capítulos correspondiente." },
        { number: 5, title: "Informes continuos", description: "La actividad de la alianza se reporta a través de la estructura de transparencia de WPA." },
      ],
    },
    cta: {
      title: "Explore una alianza con WPA",
      subtitle: "Ya sea que represente a un organismo gubernamental, una empresa o una organización alineada, toda consulta comienza con una conversación.",
      primaryLabel: "Iniciar una consulta de alianza",
      primaryHref: "/contact",
      secondaryLabel: "Acerca de WPA",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "Sea voluntario con WPA",
      title: "Ofrezca tiempo, habilidades o presencia: cada rol importa",
      subtitle: "Desde el rescate de campo hasta el apoyo digital, los roles de voluntariado de WPA están estructurados para que cada nivel de habilidad y disponibilidad tenga una forma significativa de contribuir.",
      primaryLabel: "Postularse como voluntario",
      primaryHref: "/join",
      secondaryLabel: "Explorar programas",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Por qué importan los voluntarios",
      title: "El motor humano detrás de cada programa",
      paragraphs: [
        "Detrás de cada rescate, adopción y campaña de concientización hay una red de voluntarios: coordinando localmente, apoyando operaciones de campo y ayudando a WPA a llegar a comunidades que las instituciones formales por sí solas no pueden alcanzar.",
        "Los roles de voluntariado se estructuran en torno a necesidades reales, no tareas genéricas, para que los colaboradores encuentren un rol acorde a su tiempo, habilidades y ubicación, desde apoyo ocasional en eventos hasta coordinación continua en el campo.",
      ],
    },
    roles: {
      eyebrow: "Roles de voluntariado",
      title: "Formas de participar",
      subtitle: "Cada rol tiene un alcance definido para que los voluntarios sepan exactamente en qué se están inscribiendo.",
      items: [
        { title: "Apoyo al rescate", description: "Ayude con el transporte, la primera respuesta y la coordinación de casos de rescate reportados.", icon: "🚑" },
        { title: "Apoyo a la concientización", description: "Ayude a impartir campañas de vacunación y tenencia responsable en su comunidad.", icon: "📢" },
        { title: "Apoyo en eventos", description: "Apoye jornadas de adopción, campañas de vacunación y eventos de recaudación de fondos sobre el terreno.", icon: "🎪" },
        { title: "Operaciones de campo", description: "Únase a equipos prácticos de rescate, transporte y apoyo a refugios en su región.", icon: "🐾" },
        { title: "Roles de voluntariado digital", description: "Contribuya de forma remota: contenido, traducción, coordinación de casos o apoyo en informes.", icon: "💻" },
        { title: "Embajador de donantes y comunidad", description: "Represente a WPA en su comunidad y ayude a conectar nuevos donantes y miembros.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "Cómo empezar",
      title: "De la solicitud al voluntariado activo",
      subtitle: "Un proceso sencillo para encontrar un rol que se ajuste a usted.",
      steps: [
        { number: 1, title: "Enviar una solicitud", description: "Cuéntenos su ubicación, disponibilidad y el tipo de rol que le interesa." },
        { number: 2, title: "Asignación de rol", description: "Su capítulo local lo asigna a un rol activo según las necesidades actuales." },
        { number: 3, title: "Orientación", description: "Los nuevos voluntarios reciben una capacitación sobre los estándares y prácticas de seguridad de WPA." },
        { number: 4, title: "Contribución activa", description: "Los voluntarios comienzan a contribuir, con apoyo continuo de su capítulo local." },
      ],
    },
    cta: {
      title: "¿Listo para ser voluntario?",
      subtitle: "Cualquiera que sea el tiempo o las habilidades que pueda ofrecer, hay un rol adecuado para usted.",
      primaryLabel: "Postularse como voluntario",
      primaryHref: "/join",
      secondaryLabel: "Contactar a WPA",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "Contactar a WPA",
      title: "Llegue al equipo correcto, más rápido",
      subtitle: "Ya sea que tenga una pregunta general, una propuesta de alianza, una solicitud de prensa, o quiera ser voluntario, aquí está la forma más directa de contactarnos.",
      primaryLabel: "Hágase miembro",
      primaryHref: "/join",
      secondaryLabel: "Asóciese con nosotros",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Antes de contactarnos",
      title: "Enrutando su consulta al equipo correcto",
      paragraphs: [
        "WPA opera a través de capítulos locales y equipos de programas especializados, por lo que la forma más rápida de obtener una respuesta útil es contactar a través del canal que coincida con su consulta.",
        "Para reportes urgentes de animales en peligro, use el flujo de reportes del programa de Rescate en lugar del contacto general: se enruta directamente al voluntario o clínica disponible más cercana.",
      ],
    },
    channels: {
      eyebrow: "Canales de contacto",
      title: "Elija el tipo de consulta correcto",
      subtitle: "Cada canal es monitoreado por el equipo mejor equipado para responder.",
      items: [
        { title: "Consultas generales", description: "Preguntas sobre WPA, nuestros programas o cómo opera la organización.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "Consultas de alianzas", description: "Propuestas de alianza gubernamental, corporativa, de ONG o institucional.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "Consultas de prensa", description: "Solicitudes de prensa, entrevistas y propuestas de alianzas mediáticas.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "Voluntariado y membresía", description: "Preguntas sobre cómo postularse como voluntario o miembro.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "Soporte a donantes", description: "Preguntas sobre donaciones, recibos o informes de uso de fondos.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "Reporte de rescate", description: "Reporte un animal en peligro a través del programa de rescate de WPA.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "¿Aún no está seguro con quién contactar?",
      subtitle: "Envíe una consulta general y nuestro equipo la enrutará a las personas correctas.",
      primaryLabel: "Enviar correo a WPA",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "Llamar a la línea directa",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── RU (Russian) ───────────────────────────────────────────────────────────

const ru: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "Членство",
      title: "Присоединяйтесь к проверенной глобальной сети защиты животных",
      subtitle: "Членство объединяет владельцев животных, специалистов и организации в единую скоординированную и подотчётную сеть — с чётко определённой ролью для каждого типа участника.",
      primaryLabel: "Подать заявку на членство",
      primaryHref: "/join",
      secondaryLabel: "Изучить программы",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Кому подходит членство",
      title: "У каждого участника есть определённая роль",
      paragraphs: [
        "Членство в WPA — это не единый уровень, а структура, выстроенная вокруг разных людей и организаций, обеспечивающих работу по защите животных: людей, которые непосредственно заботятся о животных, специалистов, оказывающих лечение, и учреждений, финансирующих или координирующих программы в крупном масштабе.",
        "Каждый тип членства имеет собственные требования к проверке, обязанности и уровень доступа — чтобы владельцы животных, ветеринары, клиники, приюты, НКО, волонтёры, доноры и корпоративные партнёры могли содержательно участвовать, не размывая стандарты, на которые опирается каждая программа.",
      ],
    },
    audiences: {
      eyebrow: "Кто может присоединиться",
      title: "Категории членства",
      subtitle: "Каждая из перечисленных ниже категорий может подать заявку на членство через один и тот же проверенный процесс.",
      items: [
        { title: "Владельцы животных", description: "Люди, ищущие возможности усыновления, вакцинации и ресурсы по ответственному содержанию.", icon: "🏠" },
        { title: "Ветеринары", description: "Лицензированные специалисты, присоединяющиеся к проверенной сети направлений и ухода.", icon: "👩‍⚕️" },
        { title: "Клиники", description: "Ветеринарные учреждения, участвующие в программах вакцинации и лечения.", icon: "🏥" },
        { title: "Приюты", description: "Учреждения, координирующие приём, уход и передачу животных в новые семьи.", icon: "🐕" },
        { title: "НКО", description: "Организации, разделяющие миссию, расширяющие программы WPA на региональном уровне.", icon: "🕊️" },
        { title: "Волонтёры", description: "Люди, посвящающие время спасению, просвещению и мероприятиям.", icon: "🙌" },
        { title: "Доноры", description: "Частные лица и учреждения, финансирующие проверенные и отслеживаемые программы.", icon: "💛" },
        { title: "Корпоративные партнёры", description: "Компании, поддерживающие программы через финансирование, экспертизу или инициативы КСО.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "Зачем присоединяться",
      title: "Преимущества членства в WPA",
      subtitle: "Членство даёт каждому участнику доступ к скоординированной, проверенной сети — а не просто имя в списке.",
      items: [
        { title: "Доступ к проверенной сети", description: "Свяжитесь с проверенными клиниками, приютами, НКО и волонтёрами в вашем регионе.", icon: "🔒" },
        { title: "Участие в программах", description: "Непосредственно участвуйте в программах усыновления, спасения, вакцинации и просвещения.", icon: "🤝" },
        { title: "Прозрачная отчётность", description: "Следите за тем, как отслеживаются и отчитываются программы и средства, которые вы поддерживаете.", icon: "📊" },
        { title: "Поддержка местного отделения", description: "Получайте координацию, ресурсы и обучение через ваше региональное отделение.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "Как присоединиться",
      title: "Понятный и проверенный путь к членству",
      subtitle: "Каждая заявка проходит один и тот же прозрачный процесс, независимо от категории членства.",
      steps: [
        { number: 1, title: "Подать заявку", description: "Выберите категорию членства и предоставьте свои данные и сферу интересов." },
        { number: 2, title: "Проверка данных", description: "WPA или ваше региональное отделение проверяет квалификацию там, где это применимо (клиники, НКО, приюты)." },
        { number: 3, title: "Введение в программу", description: "Одобренные члены получают доступ к программам, ресурсам и координации отделения." },
        { number: 4, title: "Активное участие", description: "Члены участвуют в программах, кампаниях и отчётности в соответствии со своей ролью." },
      ],
    },
    cta: {
      title: "Готовы стать членом?",
      subtitle: "Какая бы категория вам ни подходила — частное лицо, специалист или организация — процесс подачи заявки начинается здесь.",
      primaryLabel: "Подать заявку на членство",
      primaryHref: "/join",
      secondaryLabel: "Связаться с WPA",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "Партнёрство",
      title: "Станьте партнёром проверенной и прозрачной сети защиты животных",
      subtitle: "WPA сотрудничает с государственными органами, частными организациями, клиниками, НКО, а также медиа- и технологическими партнёрами, чтобы ответственно масштабировать влияние в сфере защиты животных.",
      primaryLabel: "Начать запрос о партнёрстве",
      primaryHref: "/contact",
      secondaryLabel: "Посмотреть публичные отчёты",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Почему организации сотрудничают с WPA",
      title: "Партнёрство, основанное на проверке, а не только на намерениях",
      paragraphs: [
        "WPA сотрудничает с организациями, способными содержательно расширить охват или эффективность программ защиты животных — не в качестве брендингового мероприятия, а как операционные отношения с чётко определёнными обязанностями с обеих сторон.",
        "Каждая категория партнёров проходит проверку, соответствующую её роли, а деятельность партнёрства отражается в структуре прозрачности и управления WPA наряду со всеми остальными данными по программам.",
      ],
    },
    categories: {
      eyebrow: "С кем мы сотрудничаем",
      title: "Категории партнёрства",
      subtitle: "Каждая категория привносит в сеть свой тип возможностей.",
      items: [
        { title: "Государственные организации", description: "Согласование политики, координация в сфере общественного здравоохранения и нормативное партнёрство.", icon: "🏛️" },
        { title: "Частные организации", description: "Компании, поддерживающие программы через финансирование, ресурсы или инфраструктуру.", icon: "🏢" },
        { title: "Ветеринарные клиники", description: "Проверенные клиники, оказывающие вакцинацию, лечение и неотложную помощь.", icon: "🏥" },
        { title: "Приюты", description: "Учреждения, предоставляющие жильё и реабилитацию для спасённых животных.", icon: "🐕" },
        { title: "НКО", description: "Организации, разделяющие миссию, расширяющие охват программ по регионам.", icon: "🕊️" },
        { title: "Медиапартнёры", description: "СМИ и авторы, поддерживающие информационные кампании и публичную отчётность.", icon: "📰" },
        { title: "Технологические партнёры", description: "Организации, поддерживающие отслеживание случаев, отчётность и цифровую инфраструктуру.", icon: "💻" },
        { title: "КСО и корпоративные доноры", description: "Компании, финансирующие программы через инициативы КСО и спонсорство.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "Процесс партнёрства",
      title: "Как устанавливается партнёрство",
      subtitle: "Чёткий, проверяемый процесс для каждой категории партнёров.",
      steps: [
        { number: 1, title: "Подача запроса", description: "Организации подают запрос о партнёрстве с описанием предполагаемой роли и возможностей." },
        { number: 2, title: "Проверка и рассмотрение", description: "WPA рассматривает запрос и проверяет квалификацию, относящуюся к типу партнёрства." },
        { number: 3, title: "Определение соглашения", description: "Роли, обязанности и ожидания по отчётности документируются для обеих сторон." },
        { number: 4, title: "Введение в программу", description: "Партнёр включается в соответствующую программу или сеть отделений." },
        { number: 5, title: "Постоянная отчётность", description: "Деятельность партнёрства отражается через структуру прозрачности WPA." },
      ],
    },
    cta: {
      title: "Изучите возможности партнёрства с WPA",
      subtitle: "Представляете ли вы государственный орган, компанию или организацию-единомышленника — каждый запрос начинается с разговора.",
      primaryLabel: "Начать запрос о партнёрстве",
      primaryHref: "/contact",
      secondaryLabel: "О WPA",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "Станьте волонтёром WPA",
      title: "Дарите время, навыки или присутствие — каждая роль важна",
      subtitle: "От полевого спасения до цифровой поддержки — волонтёрские роли WPA структурированы так, чтобы каждый уровень навыков и занятости мог найти значимый способ внести вклад.",
      primaryLabel: "Подать заявку на волонтёрство",
      primaryHref: "/join",
      secondaryLabel: "Изучить программы",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Почему волонтёры важны",
      title: "Человеческое ядро каждой программы",
      paragraphs: [
        "За каждым спасением, усыновлением и просветительской кампанией стоит сеть волонтёров — координирующих работу на местах, поддерживающих полевые операции и помогающих WPA доходить до сообществ, недоступных одним лишь официальным учреждениям.",
        "Волонтёрские роли выстроены вокруг реальных потребностей, а не общих задач, чтобы участники могли найти роль, соответствующую их времени, навыкам и местоположению — от эпизодической поддержки мероприятий до постоянной координации на местах.",
      ],
    },
    roles: {
      eyebrow: "Волонтёрские роли",
      title: "Способы участия",
      subtitle: "У каждой роли есть чётко определённый объём, чтобы волонтёры точно знали, на что они подписываются.",
      items: [
        { title: "Поддержка спасения", description: "Помощь с транспортировкой, первичным реагированием и координацией по заявленным случаям спасения.", icon: "🚑" },
        { title: "Поддержка просвещения", description: "Помощь в проведении кампаний по вакцинации и ответственному содержанию животных в вашем сообществе.", icon: "📢" },
        { title: "Поддержка мероприятий", description: "Поддержка дней усыновления, пунктов вакцинации и мероприятий по сбору средств на местах.", icon: "🎪" },
        { title: "Полевые операции", description: "Присоединяйтесь к практическим командам спасения, транспортировки и поддержки приютов в вашем регионе.", icon: "🐾" },
        { title: "Цифровые волонтёрские роли", description: "Вносите вклад удалённо — контент, перевод, координация случаев или поддержка отчётности.", icon: "💻" },
        { title: "Посол доноров и сообщества", description: "Представляйте WPA в своём сообществе и помогайте привлекать новых доноров и членов.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "Как начать",
      title: "От заявки до активного волонтёрства",
      subtitle: "Простой процесс подбора подходящей роли.",
      steps: [
        { number: 1, title: "Подать заявку", description: "Расскажите нам о своём местоположении, доступности и типе роли, которая вас интересует." },
        { number: 2, title: "Подбор роли", description: "Ваше местное отделение подберёт вам активную роль исходя из текущих потребностей." },
        { number: 3, title: "Ориентация", description: "Новые волонтёры получают инструктаж по стандартам и практикам безопасности WPA." },
        { number: 4, title: "Активный вклад", description: "Волонтёры начинают вносить вклад при постоянной поддержке своего местного отделения." },
      ],
    },
    cta: {
      title: "Готовы стать волонтёром?",
      subtitle: "Какое бы время или навыки вы ни могли предложить, для вас найдётся подходящая роль.",
      primaryLabel: "Подать заявку на волонтёрство",
      primaryHref: "/join",
      secondaryLabel: "Связаться с WPA",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "Связаться с WPA",
      title: "Быстрее свяжитесь с нужной командой",
      subtitle: "Есть ли у вас общий вопрос, предложение о партнёрстве, запрос от СМИ или желание стать волонтёром — вот самый прямой способ связаться с нами.",
      primaryLabel: "Стать членом",
      primaryHref: "/join",
      secondaryLabel: "Стать партнёром",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Прежде чем обратиться",
      title: "Направление вашего запроса нужной команде",
      paragraphs: [
        "WPA работает через местные отделения и специализированные программные команды, поэтому самый быстрый способ получить полезный ответ — обратиться через канал, соответствующий вашему запросу.",
        "Для срочных сообщений о животных, находящихся в опасности, используйте систему отчётности программы спасения, а не общую форму связи — она напрямую направляется ближайшему доступному волонтёру или клинике.",
      ],
    },
    channels: {
      eyebrow: "Каналы связи",
      title: "Выберите правильный тип запроса",
      subtitle: "Каждый канал отслеживается командой, наиболее подготовленной для ответа.",
      items: [
        { title: "Общие вопросы", description: "Вопросы о WPA, наших программах или работе организации.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "Запросы о партнёрстве", description: "Государственные, корпоративные, НКО или институциональные предложения о партнёрстве.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "Запросы СМИ", description: "Запросы прессы, интервью и предложения о медиапартнёрстве.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "Волонтёрство и членство", description: "Вопросы о подаче заявки в качестве волонтёра или члена.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "Поддержка доноров", description: "Вопросы о пожертвованиях, квитанциях или отчётности об использовании средств.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "Сообщение о спасении", description: "Сообщите о животном в опасности через программу спасения WPA.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "Всё ещё не уверены, с кем связаться?",
      subtitle: "Отправьте общий запрос, и наша команда направит его нужным людям.",
      primaryLabel: "Написать WPA по электронной почте",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "Позвонить на горячую линию",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── DE (German) ────────────────────────────────────────────────────────────

const de: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "Mitgliedschaft",
      title: "Treten Sie einem verifizierten globalen Netzwerk für Tierschutz bei",
      subtitle: "Die Mitgliedschaft verbindet Tierhalter, Fachleute und Organisationen in einem koordinierten, verantwortlichen Netzwerk — mit einer klar definierten Rolle für jede Art von Teilnehmer.",
      primaryLabel: "Mitgliedschaft beantragen",
      primaryHref: "/join",
      secondaryLabel: "Programme entdecken",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Für wen die Mitgliedschaft gedacht ist",
      title: "Jeder Teilnehmer hat eine definierte Rolle",
      paragraphs: [
        "Die WPA-Mitgliedschaft ist keine einzelne Stufe — sie ist eine Struktur, die um die verschiedenen Menschen und Organisationen herum aufgebaut ist, die Tierschutzarbeit möglich machen: Einzelpersonen, die sich direkt um Tiere kümmern, Fachleute, die Behandlung anbieten, und Institutionen, die Programme in großem Umfang finanzieren oder koordinieren.",
        "Jede Mitgliedschaftsart hat ihre eigenen Verifizierungsanforderungen, Verantwortlichkeiten und Zugriffsrechte — so können Tierhalter, Tierärzte, Kliniken, Tierheime, NGOs, Freiwillige, Spender und Unternehmenspartner alle sinnvoll teilnehmen, ohne die Standards zu verwässern, auf die sich jedes Programm verlässt.",
      ],
    },
    audiences: {
      eyebrow: "Wer beitreten kann",
      title: "Mitgliedschaftskategorien",
      subtitle: "Jede der folgenden Kategorien kann sich über denselben verifizierten Prozess um Mitgliedschaft bewerben.",
      items: [
        { title: "Tierhalter", description: "Personen, die Adoption, Impfung und Ressourcen für verantwortungsvolle Tierhaltung suchen.", icon: "🏠" },
        { title: "Tierärzte", description: "Lizenzierte Fachleute, die dem verifizierten Überweisungs- und Pflegenetzwerk beitreten.", icon: "👩‍⚕️" },
        { title: "Kliniken", description: "Tierarztpraxen, die an Impf- und Behandlungsprogrammen teilnehmen.", icon: "🏥" },
        { title: "Tierheime", description: "Einrichtungen, die Aufnahme, Pflege und Vermittlung zur Adoption koordinieren.", icon: "🐕" },
        { title: "NGOs", description: "Missionskonforme Organisationen, die die Programme der WPA regional erweitern.", icon: "🕊️" },
        { title: "Freiwillige", description: "Personen, die Zeit für Rettung, Öffentlichkeitsarbeit und Veranstaltungen einbringen.", icon: "🙌" },
        { title: "Spender", description: "Einzelpersonen und Institutionen, die verifizierte, nachverfolgte Programme finanzieren.", icon: "💛" },
        { title: "Unternehmenspartner", description: "Unternehmen, die Programme durch Finanzierung, Fachwissen oder CSR-Initiativen unterstützen.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "Warum beitreten",
      title: "Vorteile der WPA-Mitgliedschaft",
      subtitle: "Die Mitgliedschaft gibt jedem Teilnehmer Zugang zu einem koordinierten, verifizierten Netzwerk — nicht nur einen Namen auf einer Liste.",
      items: [
        { title: "Zugang zu verifiziertem Netzwerk", description: "Vernetzen Sie sich mit geprüften Kliniken, Tierheimen, NGOs und Freiwilligen in Ihrer Region.", icon: "🔒" },
        { title: "Programmteilnahme", description: "Nehmen Sie direkt an Adoptions-, Rettungs-, Impf- und Aufklärungsprogrammen teil.", icon: "🤝" },
        { title: "Transparente Berichterstattung", description: "Sehen Sie, wie die von Ihnen unterstützten Programme und Mittel nachverfolgt und berichtet werden.", icon: "📊" },
        { title: "Unterstützung durch lokale Ortsgruppe", description: "Greifen Sie über Ihre regionale Ortsgruppe auf Koordination, Ressourcen und Schulungen zu.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "So treten Sie bei",
      title: "Ein klarer, verifizierter Weg zur Mitgliedschaft",
      subtitle: "Jede Bewerbung folgt demselben transparenten Prozess, unabhängig von der Mitgliedschaftskategorie.",
      steps: [
        { number: 1, title: "Bewerbung einreichen", description: "Wählen Sie Ihre Mitgliedschaftskategorie und reichen Sie Ihre Angaben und Interessengebiete ein." },
        { number: 2, title: "Verifizierungsprüfung", description: "WPA oder Ihre regionale Ortsgruppe prüft gegebenenfalls die Qualifikationen (Kliniken, NGOs, Tierheime)." },
        { number: 3, title: "Einführung", description: "Genehmigte Mitglieder erhalten Zugang zu Programmen, Ressourcen und Ortsgruppenkoordination." },
        { number: 4, title: "Aktive Teilnahme", description: "Mitglieder nehmen entsprechend ihrer Rolle an Programmen, Kampagnen und Berichten teil." },
      ],
    },
    cta: {
      title: "Bereit, Mitglied zu werden?",
      subtitle: "Welche Kategorie auch zu Ihnen passt — Einzelperson, Fachperson oder Organisation — der Bewerbungsprozess beginnt hier.",
      primaryLabel: "Mitgliedschaft beantragen",
      primaryHref: "/join",
      secondaryLabel: "WPA kontaktieren",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "Partnerschaften",
      title: "Arbeiten Sie mit einem verifizierten, transparenten Tierschutznetzwerk zusammen",
      subtitle: "WPA arbeitet mit Regierungsstellen, privaten Organisationen, Kliniken, NGOs sowie Medien- und Technologiepartnern zusammen, um die Wirkung im Tierschutz verantwortungsvoll zu skalieren.",
      primaryLabel: "Partnerschaftsanfrage starten",
      primaryHref: "/contact",
      secondaryLabel: "Öffentliche Berichte ansehen",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Warum Organisationen mit WPA zusammenarbeiten",
      title: "Partnerschaft basiert auf Verifizierung, nicht nur auf Absicht",
      paragraphs: [
        "WPA arbeitet mit Organisationen zusammen, die die Reichweite oder Wirksamkeit von Tierschutzprogrammen sinnvoll erweitern können — nicht als Marketingmaßnahme, sondern als operative Beziehung mit klar definierten Verantwortlichkeiten auf beiden Seiten.",
        "Jede Partnerkategorie durchläuft einen ihrer Rolle angemessenen Verifizierungsprozess, und die Partnerschaftsaktivität wird über die Transparenz- und Governance-Struktur der WPA zusammen mit allen anderen Programmdaten berichtet.",
      ],
    },
    categories: {
      eyebrow: "Mit wem wir zusammenarbeiten",
      title: "Partnerschaftskategorien",
      subtitle: "Jede Kategorie trägt eine unterschiedliche Art von Kompetenz zum Netzwerk bei.",
      items: [
        { title: "Regierungsorganisationen", description: "Politische Abstimmung, Koordination im Bereich öffentliche Gesundheit und regulatorische Partnerschaft.", icon: "🏛️" },
        { title: "Private Organisationen", description: "Unternehmen, die Programme durch Finanzierung, Ressourcen oder Infrastruktur unterstützen.", icon: "🏢" },
        { title: "Tierarztkliniken", description: "Verifizierte Kliniken, die Impfung, Behandlung und Notfallversorgung anbieten.", icon: "🏥" },
        { title: "Tierheime", description: "Einrichtungen, die geretteten Tieren Unterkunft und Rehabilitation bieten.", icon: "🐕" },
        { title: "NGOs", description: "Missionskonforme Organisationen, die die Reichweite von Programmen über Regionen hinweg erweitern.", icon: "🕊️" },
        { title: "Medienpartner", description: "Medien und Kreative, die Aufklärungskampagnen und öffentliche Berichterstattung unterstützen.", icon: "📰" },
        { title: "Technologiepartner", description: "Organisationen, die Fallverfolgung, Berichterstattung und digitale Infrastruktur unterstützen.", icon: "💻" },
        { title: "CSR- und Unternehmensspender", description: "Unternehmen, die Programme durch CSR-Initiativen und Sponsoring finanzieren.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "Partnerschaftsprozess",
      title: "Wie eine Partnerschaft zustande kommt",
      subtitle: "Ein definierter, überprüfbarer Prozess für jede Partnerkategorie.",
      steps: [
        { number: 1, title: "Anfrage eingereicht", description: "Organisationen reichen eine Partnerschaftsanfrage ein, in der ihre vorgeschlagene Rolle und Kapazität beschrieben wird." },
        { number: 2, title: "Prüfung und Verifizierung", description: "WPA prüft die Anfrage und verifiziert die für die Partnerschaftsart relevanten Qualifikationen." },
        { number: 3, title: "Vereinbarung festgelegt", description: "Rollen, Verantwortlichkeiten und Berichterwartungen werden für beide Seiten dokumentiert." },
        { number: 4, title: "Einführung", description: "Der Partner wird in das entsprechende Programm oder Ortsgruppennetzwerk eingebunden." },
        { number: 5, title: "Laufende Berichterstattung", description: "Die Partnerschaftsaktivität wird über die Transparenzstruktur der WPA berichtet." },
      ],
    },
    cta: {
      title: "Erkunden Sie eine Partnerschaft mit WPA",
      subtitle: "Ob Sie eine Regierungsstelle, ein Unternehmen oder eine gleichgesinnte Organisation vertreten — jede Anfrage beginnt mit einem Gespräch.",
      primaryLabel: "Partnerschaftsanfrage starten",
      primaryHref: "/contact",
      secondaryLabel: "Über WPA",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "Bei WPA ehrenamtlich engagieren",
      title: "Geben Sie Zeit, Fähigkeiten oder Präsenz — jede Rolle zählt",
      subtitle: "Von der Feldrettung bis zur digitalen Unterstützung sind die Freiwilligenrollen der WPA so strukturiert, dass jedes Kompetenz- und Verfügbarkeitsniveau eine sinnvolle Möglichkeit zum Beitrag findet.",
      primaryLabel: "Als Freiwilliger bewerben",
      primaryHref: "/join",
      secondaryLabel: "Programme entdecken",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "Warum Freiwillige wichtig sind",
      title: "Der menschliche Kern jedes Programms",
      paragraphs: [
        "Hinter jeder Rettung, Adoption und Aufklärungskampagne steht ein Netzwerk von Freiwilligen — die lokal koordinieren, Feldeinsätze unterstützen und der WPA helfen, Gemeinschaften zu erreichen, die formale Institutionen allein nicht erreichen können.",
        "Freiwilligenrollen sind um reale Bedürfnisse herum strukturiert, nicht um generische Aufgaben, sodass Mitwirkende eine Rolle finden können, die zu ihrer Zeit, ihren Fähigkeiten und ihrem Standort passt — von gelegentlicher Veranstaltungsunterstützung bis hin zu laufender Feldkoordination.",
      ],
    },
    roles: {
      eyebrow: "Freiwilligenrollen",
      title: "Möglichkeiten zur Mitwirkung",
      subtitle: "Jede Rolle hat einen definierten Umfang, damit Freiwillige genau wissen, worauf sie sich einlassen.",
      items: [
        { title: "Rettungsunterstützung", description: "Unterstützung bei Transport, Erstreaktion und Koordination gemeldeter Rettungsfälle.", icon: "🚑" },
        { title: "Aufklärungsunterstützung", description: "Helfen Sie, Impf- und Kampagnen zur verantwortungsvollen Tierhaltung in Ihrer Gemeinde durchzuführen.", icon: "📢" },
        { title: "Veranstaltungsunterstützung", description: "Unterstützen Sie Adoptionsaktionen, Impfcamps und Spendenveranstaltungen vor Ort.", icon: "🎪" },
        { title: "Feldeinsätze", description: "Schließen Sie sich praktischen Rettungs-, Transport- und Tierheim-Unterstützungsteams in Ihrer Region an.", icon: "🐾" },
        { title: "Digitale Freiwilligenrollen", description: "Tragen Sie remote bei — Inhalte, Übersetzung, Fallkoordination oder Berichtsunterstützung.", icon: "💻" },
        { title: "Spender- und Community-Botschafter", description: "Vertreten Sie WPA in Ihrer Gemeinde und helfen Sie, neue Spender und Mitglieder zu gewinnen.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "So starten Sie",
      title: "Von der Bewerbung zum aktiven Freiwilligen",
      subtitle: "Ein einfacher Prozess, um mit einer passenden Rolle zusammengebracht zu werden.",
      steps: [
        { number: 1, title: "Bewerbung einreichen", description: "Teilen Sie uns Ihren Standort, Ihre Verfügbarkeit und die Art der Rolle mit, an der Sie interessiert sind." },
        { number: 2, title: "Rollenzuordnung", description: "Ihre lokale Ortsgruppe ordnet Sie basierend auf aktuellen Bedürfnissen einer aktiven Rolle zu." },
        { number: 3, title: "Einführung", description: "Neue Freiwillige erhalten eine Einweisung in die Standards und Sicherheitspraktiken der WPA." },
        { number: 4, title: "Aktiver Beitrag", description: "Freiwillige beginnen mit ihrem Beitrag, mit laufender Unterstützung durch ihre lokale Ortsgruppe." },
      ],
    },
    cta: {
      title: "Bereit, sich ehrenamtlich zu engagieren?",
      subtitle: "Welche Zeit oder Fähigkeiten Sie auch anbieten können, es gibt eine passende Rolle.",
      primaryLabel: "Als Freiwilliger bewerben",
      primaryHref: "/join",
      secondaryLabel: "WPA kontaktieren",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "WPA kontaktieren",
      title: "Erreichen Sie das richtige Team schneller",
      subtitle: "Ob Sie eine allgemeine Frage, einen Partnerschaftsvorschlag, eine Medienanfrage haben oder sich ehrenamtlich engagieren möchten — hier ist der direkteste Weg, uns zu erreichen.",
      primaryLabel: "Mitglied werden",
      primaryHref: "/join",
      secondaryLabel: "Partner werden",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "Bevor Sie sich melden",
      title: "Leiten Sie Ihre Anfrage an das richtige Team weiter",
      paragraphs: [
        "WPA arbeitet über lokale Ortsgruppen und spezialisierte Programmteams, daher ist der schnellste Weg zu einer hilfreichen Antwort der Kontakt über den Kanal, der zu Ihrer Anfrage passt.",
        "Für dringende Meldungen über Tiere in Not verwenden Sie bitte den Meldeweg des Rettungsprogramms anstelle des allgemeinen Kontakts — er wird direkt an den nächstgelegenen verfügbaren Freiwilligen oder die nächste Klinik weitergeleitet.",
      ],
    },
    channels: {
      eyebrow: "Kontaktkanäle",
      title: "Wählen Sie die richtige Anfrageart",
      subtitle: "Jeder Kanal wird vom Team überwacht, das am besten für die Beantwortung geeignet ist.",
      items: [
        { title: "Allgemeine Anfragen", description: "Fragen zu WPA, unseren Programmen oder wie die Organisation arbeitet.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "Partnerschaftsanfragen", description: "Regierungs-, Unternehmens-, NGO- oder institutionelle Partnerschaftsvorschläge.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "Medienanfragen", description: "Presseanfragen, Interviews und Medienpartnerschaftsvorschläge.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "Freiwilligenarbeit und Mitgliedschaft", description: "Fragen zur Bewerbung als Freiwilliger oder Mitglied.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "Spenderunterstützung", description: "Fragen zu Spenden, Quittungen oder Berichten zur Mittelverwendung.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "Rettungsmeldung", description: "Melden Sie ein Tier in Not über das Rettungsprogramm der WPA.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "Immer noch unsicher, wen Sie kontaktieren sollen?",
      subtitle: "Senden Sie eine allgemeine Anfrage, und unser Team leitet sie an die richtigen Personen weiter.",
      primaryLabel: "WPA per E-Mail kontaktieren",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "Hotline anrufen",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── ZH (Simplified Chinese) ────────────────────────────────────────────────

const zh: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "会员",
      title: "加入经核实的全球动物福利网络",
      subtitle: "会员资格将宠物主人、专业人士和机构连接成一个协调、问责的网络——为每种类型的参与者定义明确的角色。",
      primaryLabel: "申请会员",
      primaryHref: "/join",
      secondaryLabel: "了解项目",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "会员面向谁",
      title: "每个参与者都有明确的角色",
      paragraphs: [
        "WPA会员不是单一层级——它是围绕使动物福利工作的不同个人和机构构建的结构：直接照顾动物的个人、提供治疗的专业人士、以及大规模资助或协调项目的机构。",
        "每种会员类型都有自己的验证要求、责任和权限——因此宠物主人、兽医、诊所、收容所、NGO、志愿者、捐赠者和企业伙伴都可以有意义地参与，而不会降低每个项目依赖的标准。",
      ],
    },
    audiences: {
      eyebrow: "谁可以加入",
      title: "会员类别",
      subtitle: "以下每个类别都可以通过相同的经核实流程申请会员。",
      items: [
        { title: "宠物主人", description: "寻求领养、疫苗接种和负责任养宠资源的个人。", icon: "🏠" },
        { title: "兽医", description: "加入经核实的转诊和护理网络的持证专业人士。", icon: "👩‍⚕️" },
        { title: "诊所", description: "参与疫苗接种和治疗项目的兽医机构。", icon: "🏥" },
        { title: "收容所", description: "协调接收、护理和领养安置的设施。", icon: "🐕" },
        { title: "非政府组织", description: "在区域扩展WPA项目的使命一致机构。", icon: "🕊️" },
        { title: "志愿者", description: "为救援、宣传和活动贡献时间的个人。", icon: "🙌" },
        { title: "捐赠者", description: "为经核实、可追踪项目提供资金的个人和机构。", icon: "💛" },
        { title: "企业伙伴", description: "通过资金、技能或企业社会责任倡议支持项目的企业。", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "为什么加入",
      title: "WPA会员的益处",
      subtitle: "会员资格让每个参与者都能访问协调、经核实的网络——不仅仅是名单上的一个名字。",
      items: [
        { title: "经核实的网络访问", description: "与您所在地区经审核的诊所、收容所、NGO和志愿者连接。", icon: "🔒" },
        { title: "项目参与", description: "直接参与领养、救援、疫苗接种和宣传活动。", icon: "🤝" },
        { title: "透明报告", description: "查看您支持的项目和资金如何追踪和报告。", icon: "📊" },
        { title: "地方分会支持", description: "通过您的区域分会获取协调、资源和培训。", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "如何加入",
      title: "清晰、经核实的会员路径",
      subtitle: "每份申请都遵循相同的透明流程，无论会员类别。",
      steps: [
        { number: 1, title: "提交申请", description: "选择您的会员类别并提交详细信息和感兴趣的领域。" },
        { number: 2, title: "验证审核", description: "WPA或您的区域分会审核相关凭证（诊所、NGO、收容所）。" },
        { number: 3, title: "入职", description: "获批会员获得项目、资源和分会协调的访问权限。" },
        { number: 4, title: "积极参与", description: "会员根据各自角色参与项目、活动和报告。" },
      ],
    },
    cta: {
      title: "准备好成为会员了吗？",
      subtitle: "无论哪种类别适合您——个人、专业人士或机构——申请流程从这里开始。",
      primaryLabel: "申请会员",
      primaryHref: "/join",
      secondaryLabel: "联系WPA",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "合作伙伴关系",
      title: "与经核实、透明的动物福利网络合作",
      subtitle: "WPA与政府机构、私人组织、诊所、NGO以及媒体和技术提供商合作，负责任地扩大动物福利影响。",
      primaryLabel: "发起合作咨询",
      primaryHref: "/contact",
      secondaryLabel: "查看公开报告",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "为什么机构与WPA合作",
      title: "建立在验证而非仅意图上的合作",
      paragraphs: [
        "WPA与能够有意义地扩展动物福利项目覆盖范围或效果的机构合作——不是品牌宣传，而是双方都有明确责任的运营关系。",
        "每个合作类别都经过与其角色相适应的验证流程，合作活动通过WPA的透明和治理结构与其他所有项目数据一起报告。",
      ],
    },
    categories: {
      eyebrow: "我们与谁合作",
      title: "合作类别",
      subtitle: "每个类别为网络贡献不同类型的能力。",
      items: [
        { title: "政府机构", description: "政策协调、公共卫生协调和监管合作伙伴关系。", icon: "🏛️" },
        { title: "私人组织", description: "通过资金、资源或基础设施支持项目的企业。", icon: "🏢" },
        { title: "兽医诊所", description: "提供疫苗接种、治疗和紧急护理的经核实诊所。", icon: "🏥" },
        { title: "收容所", description: "为获救动物提供住所和康复的设施。", icon: "🐕" },
        { title: "非政府组织", description: "跨区域扩展项目覆盖的使命一致机构。", icon: "🕊️" },
        { title: "媒体伙伴", description: "支持宣传活动和公开报告的媒体和创作者。", icon: "📰" },
        { title: "技术伙伴", description: "支持案例追踪、报告和数字基础设施的机构。", icon: "💻" },
        { title: "企业社会责任与企业捐赠者", description: "通过企业社会责任倡议和赞助为项目提供资金的公司。", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "合作流程",
      title: "如何建立合作伙伴关系",
      subtitle: "每个合作类别的明确、可验证流程。",
      steps: [
        { number: 1, title: "提交咨询", description: "机构提交合作咨询，描述其提议的角色和能力。" },
        { number: 2, title: "审核与验证", description: "WPA审核咨询并验证与合作类型相关的凭证。" },
        { number: 3, title: "定义协议", description: "为双方记录角色、责任和报告期望。" },
        { number: 4, title: "入职", description: "合作伙伴被纳入相关项目或分会网络。" },
        { number: 5, title: "持续报告", description: "合作活动通过WPA的透明结构进行报告。" },
      ],
    },
    cta: {
      title: "探索与WPA的合作",
      subtitle: "无论您代表政府机构、企业还是使命一致的机构，每次咨询都从对话开始。",
      primaryLabel: "发起合作咨询",
      primaryHref: "/contact",
      secondaryLabel: "关于WPA",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "加入WPA志愿者",
      title: "贡献时间、技能或存在——每个角色都很重要",
      subtitle: "从现场救援到数字支持，WPA的志愿者角色经过结构化设计，使每种技能和时间可用性都有有意义的贡献方式。",
      primaryLabel: "申请志愿者",
      primaryHref: "/join",
      secondaryLabel: "了解项目",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "为什么志愿者很重要",
      title: "每个项目的人力核心",
      paragraphs: [
        "每次救援、领养和宣传活动的背后都有一个志愿者网络——在当地协调、支持现场运营、帮助WPA接触仅靠正式机构无法到达的社区。",
        "志愿者角色围绕真实需求而非通用任务构建，因此贡献者可以找到与其时间、技能和地点匹配的角色——从偶尔的活动支持到持续的现场协调。",
      ],
    },
    roles: {
      eyebrow: "志愿者角色",
      title: "参与方式",
      subtitle: "每个角色都有明确的范围，让志愿者确切知道自己将做什么。",
      items: [
        { title: "救援支持", description: "协助运输、首次响应和报告救援案例的协调。", icon: "🚑" },
        { title: "宣传支持", description: "在社区帮助开展疫苗接种和负责任养宠活动。", icon: "📢" },
        { title: "活动支持", description: "在现场支持领养活动、疫苗接种营和筹款活动。", icon: "🎪" },
        { title: "现场运营", description: "加入您所在地区的现场救援、运输和收容所支持团队。", icon: "🐾" },
        { title: "数字志愿者角色", description: "远程贡献——内容、翻译、案例协调或报告支持。", icon: "💻" },
        { title: "捐赠者与社区大使", description: "在社区中代表WPA，帮助连接新捐赠者和会员。", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "如何开始",
      title: "从申请到活跃志愿者",
      subtitle: "匹配适合角色的简单流程。",
      steps: [
        { number: 1, title: "提交申请", description: "告诉我们您的位置、可用时间和感兴趣的角色类型。" },
        { number: 2, title: "角色匹配", description: "您的地方分会根据当前需求将您匹配到活跃角色。" },
        { number: 3, title: "入职培训", description: "新志愿者获得WPA标准和安全实践简介。" },
        { number: 4, title: "积极贡献", description: "志愿者开始贡献，并获得地方分会的持续支持。" },
      ],
    },
    cta: {
      title: "准备好成为志愿者了吗？",
      subtitle: "无论您能提供什么时间或技能，都有适合的角色。",
      primaryLabel: "申请志愿者",
      primaryHref: "/join",
      secondaryLabel: "联系WPA",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "联系WPA",
      title: "更快联系到正确的团队",
      subtitle: "无论您有一般问题、合作提案、媒体请求还是想做志愿者——这里是联系我们的最直接方式。",
      primaryLabel: "成为会员",
      primaryHref: "/join",
      secondaryLabel: "与我们合作",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "在联系我们之前",
      title: "将您的咨询路由到正确的团队",
      paragraphs: [
        "WPA通过地方分会和专业项目团队运作，因此获得有用回应的最快方式是通过与您的咨询匹配的渠道联系。",
        "对于紧急动物困境报告，请使用救援项目的报告流程而不是一般联系方式——它会直接路由到最近可用的志愿者或诊所。",
      ],
    },
    channels: {
      eyebrow: "联系渠道",
      title: "选择正确的咨询类型",
      subtitle: "每个渠道由最有能力响应的团队监控。",
      items: [
        { title: "一般咨询", description: "关于WPA、我们的项目或组织运营方式的问题。", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "合作咨询", description: "政府、企业、NGO或机构合作提案。", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "媒体咨询", description: "新闻请求、采访和媒体合作提案。", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "志愿者与会员", description: "关于申请志愿者或会员的问题。", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "捐赠者支持", description: "关于捐赠、收据或资金使用情况报告的问题。", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "救援报告", description: "通过WPA的救援项目报告困境中的动物。", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "仍不确定联系谁？",
      subtitle: "发送一般咨询，我们的团队会将其路由到正确的人。",
      primaryLabel: "邮件联系WPA",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "拨打热线",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── JA (Japanese) ──────────────────────────────────────────────────────────

const ja: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "会員",
      title: "動物福祉のための検証済みグローバルネットワークに参加",
      subtitle: "会員制度はペットオーナー、専門家、団体を1つの連携された責任あるネットワークにつなげます——すべての参加者に明確な役割が定義されています。",
      primaryLabel: "会員に申し込む",
      primaryHref: "/join",
      secondaryLabel: "プログラムを見る",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "会員の対象",
      title: "すべての参加者に定義された役割",
      paragraphs: [
        "WPAの会員制度は単一のティアではありません——動物福祉を支える様々な人々と団体の周りに構築された構造です：直接動物の世話をする個人、治療を提供する専門家、大規模なプログラムの資金提供や調整を行う機関。",
        "各会員タイプには独自の検証要件、責任、アクセス権があります——ペットオーナー、獣医師、クリニック、保護施設、NGO、ボランティア、寄付者、企業パートナーがすべて意味のある参加をでき、各プログラムが依存する基準を薄めることなく。",
      ],
    },
    audiences: {
      eyebrow: "参加できる人",
      title: "会員カテゴリ",
      subtitle: "以下の各カテゴリは同じ検証済みプロセスで会員に申し込めます。",
      items: [
        { title: "ペットオーナー", description: "里親、予防接種、責任ある飼育リソースを求める個人。", icon: "🏠" },
        { title: "獣医師", description: "検証済みの紹介・ケアネットワークに参加するライセンス専門職。", icon: "👩‍⚕️" },
        { title: "クリニック", description: "予防接種・治療プログラムに参加する獣医施設。", icon: "🏥" },
        { title: "保護施設", description: "受け入れ、ケア、里親あっせんを調整する施設。", icon: "🐕" },
        { title: "NGO", description: "WPAのプログラムを地域的に拡大するミッションアライン団体。", icon: "🕊️" },
        { title: "ボランティア", description: "救助、啓発、イベントに時間を貢献する個人。", icon: "🙌" },
        { title: "寄付者", description: "検証済み・追跡可能なプログラムに資金提供する個人・団体。", icon: "💛" },
        { title: "企業パートナー", description: "資金、スキル、CSRイニシアチブでプログラムを支援する企業。", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "参加する理由",
      title: "WPA会員のメリット",
      subtitle: "会員はすべての参加者に連携された検証済みネットワークへのアクセスを提供します——単なる名簿の名前ではありません。",
      items: [
        { title: "検証済みネットワークアクセス", description: "地域の審査済みクリニック、保護施設、NGO、ボランティアとつながります。", icon: "🔒" },
        { title: "プログラム参加", description: "里親、救助、予防接種、啓発プログラムに直接参加します。", icon: "🤝" },
        { title: "透明な報告", description: "支援するプログラムと資金の追跡・報告方法を確認できます。", icon: "📊" },
        { title: "地域支部サポート", description: "地域支部を通じて調整、リソース、トレーニングにアクセスできます。", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "参加方法",
      title: "明確で検証済みの会員へのパス",
      subtitle: "すべての申請は会員カテゴリに関係なく同じ透明なプロセスに従います。",
      steps: [
        { number: 1, title: "申請を提出", description: "会員カテゴリを選択し、詳細と関心分野を提出します。" },
        { number: 2, title: "検証レビュー", description: "WPAまたは地域支部が該当する資格をレビューします（クリニック、NGO、保護施設）。" },
        { number: 3, title: "オンボーディング", description: "承認された会員はプログラム、リソース、支部調整へのアクセスを受け取ります。" },
        { number: 4, title: "積極的な参加", description: "会員は役割に応じてプログラム、キャンペーン、報告に参加します。" },
      ],
    },
    cta: {
      title: "会員になる準備はできましたか？",
      subtitle: "どのカテゴリが合っても——個人、専門家、団体——申請プロセスはここから始まります。",
      primaryLabel: "会員に申し込む",
      primaryHref: "/join",
      secondaryLabel: "WPAに連絡",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "パートナーシップ",
      title: "検証済みで透明な動物福祉ネットワークとパートナーシップを組む",
      subtitle: "WPAは政府機関、民間団体、クリニック、NGO、メディア・テクノロジープロバイダーとパートナーシップを組み、動物福祉のインパクトを責任をもって拡大します。",
      primaryLabel: "パートナーシップ相談を開始",
      primaryHref: "/contact",
      secondaryLabel: "公開報告書を見る",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "団体がWPAとパートナーシップを組む理由",
      title: "意図だけでなく検証に基づくパートナーシップ",
      paragraphs: [
        "WPAは動物福祉プログラムの到達範囲や効果を意味的に拡大できる団体とパートナーシップを組みます——ブランディング演習ではなく、両側に定義された責任を持つ運用関係として。",
        "すべてのパートナーカテゴリは役割に適した検証プロセスを経て、パートナーシップ活動は他のすべてのプログラムデータとともにWPAの透明性とガバナンス構造を通じて報告されます。",
      ],
    },
    categories: {
      eyebrow: "パートナーシップの対象",
      title: "パートナーシップカテゴリ",
      subtitle: "各カテゴリはネットワークに異なる種類的能力を提供します。",
      items: [
        { title: "政府機関", description: "政策調整、公衆衛生連携、規制パートナーシップ。", icon: "🏛️" },
        { title: "民間団体", description: "資金、リソース、インフラでプログラムを支援する企業。", icon: "🏢" },
        { title: "獣医クリニック", description: "予防接種、治療、緊急ケアを提供する検証済みクリニック。", icon: "🏥" },
        { title: "保護施設", description: "救助動物の住宅とリハビリテーションを提供する施設。", icon: "🐕" },
        { title: "NGO", description: "地域全体にプログラムの到達を拡大するミッションアライン団体。", icon: "🕊️" },
        { title: "メディアパートナー", description: "啓発キャンペーンと公開報告を支援するメディアとクリエイター。", icon: "📰" },
        { title: "テクノロジーパートナー", description: "ケース追跡、報告、デジタルインフラを支援する団体。", icon: "💻" },
        { title: "CSR・企業寄付者", description: "CSRイニシアチブとスポンサーシップでプログラムに資金提供する企業。", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "パートナーシッププロセス",
      title: "パートナーシップの確立方法",
      subtitle: "すべてのパートナーカテゴリに定義された検証可能なプロセス。",
      steps: [
        { number: 1, title: "相談の提出", description: "団体が提案する役割と能力を説明するパートナーシップ相談を提出します。" },
        { number: 2, title: "レビューと検証", description: "WPAが相談をレビューし、パートナーシップタイプに関連する資格を検証します。" },
        { number: 3, title: "合意の定義", description: "両側の役割、責任、報告期待が文書化されます。" },
        { number: 4, title: "オンボーディング", description: "パートナーが関連プログラムまたは支部ネットワークにオンボードされます。" },
        { number: 5, title: "継続的な報告", description: "パートナーシップ活動はWPAの透明性構造を通じて報告されます。" },
      ],
    },
    cta: {
      title: "WPAとのパートナーシップを探る",
      subtitle: "政府機関、企業、アライン団体のいずれを代表しても、すべての相談は会話から始まります。",
      primaryLabel: "パートナーシップ相談を開始",
      primaryHref: "/contact",
      secondaryLabel: "WPAについて",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "WPAでボランティア",
      title: "時間、スキル、存在を提供——すべての役割が重要",
      subtitle: "現場救助からデジタルサポートまで、WPAのボランティア役割はすべてのスキルセットと可用性レベルに意味のある貢献方法があるように構造化されています。",
      primaryLabel: "ボランティアに申し込む",
      primaryHref: "/join",
      secondaryLabel: "プログラムを見る",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "ボランティアが重要な理由",
      title: "すべてのプログラムの人力コア",
      paragraphs: [
        "すべての救助、里親、啓発キャンペーンの背後にはボランティアのネットワークがあります——地域で調整し、現場活動を支援し、WPAが公式機関だけでは到達できないコミュニティに届くのを助けています。",
        "ボランティア役割は一般的なタスクではなく実際のニーズを中心に構造化されているため、貢献者は時間、スキル、場所に合った役割を見つけることができます——時折のイベントサポートから継続的な現場調整まで。",
      ],
    },
    roles: {
      eyebrow: "ボランティアの役割",
      title: "参加方法",
      subtitle: "各役割には定義された範囲があり、ボランティアは自分が何にサインアップするか正確にわかります。",
      items: [
        { title: "救助サポート", description: "報告された救助ケースの輸送、初動対応、調整を支援します。", icon: "🚑" },
        { title: "啓発サポート", description: "コミュニティで予防接種と責任ある飼育キャンペーンの提供を支援します。", icon: "📢" },
        { title: "イベントサポート", description: "現場で里親イベント、予防接種キャンプ、資金調達イベントをサポートします。", icon: "🎪" },
        { title: "現場活動", description: "地域の現場救助、輸送、保護施設サポートチームに参加します。", icon: "🐾" },
        { title: "デジタルボランティア", description: "リモートで貢献——コンテンツ、翻訳、ケース調整、報告サポート。", icon: "💻" },
        { title: "寄付者・コミュニティアンバサダー", description: "コミュニティでWPAを代表し、新しい寄付者や会員の接続を支援します。", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "始め方",
      title: "申請からアクティブボランティアまで",
      subtitle: "合った役割にマッチするシンプルなプロセス。",
      steps: [
        { number: 1, title: "申請を提出", description: "場所、可用性、興味のある役割タイプを教えてください。" },
        { number: 2, title: "役割マッチング", description: "地域支部が現在のニーズに基づいてアクティブな役割にマッチします。" },
        { number: 3, title: "オリエンテーション", description: "新しいボランティアはWPAの基準と安全実践についてブリーフィングを受けます。" },
        { number: 4, title: "積極的な貢献", description: "ボランティアは地域支部からの継続的なサポートを受けて貢献を開始します。" },
      ],
    },
    cta: {
      title: "ボランティアの準備はできましたか？",
      subtitle: "どんな時間やスキルでも、合う役割があります。",
      primaryLabel: "ボランティアに申し込む",
      primaryHref: "/join",
      secondaryLabel: "WPAに連絡",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "WPAに連絡",
      title: "適切なチームにより早く連絡",
      subtitle: "一般的な質問、パートナーシップ提案、メディアリクエスト、ボランティア希望——ここに最も直接的な連絡方法があります。",
      primaryLabel: "会員になる",
      primaryHref: "/join",
      secondaryLabel: "パートナーになる",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "連絡する前に",
      title: "お問い合わせを適切なチームにルーティング",
      paragraphs: [
        "WPAは地域支部と専門プログラムチームを通じて運営されているため、有用な回答を得る最速の方法は、お問い合わせに合ったチャネルで連絡することです。",
        "緊急の動物窮状報告には、一般的な連絡ではなく救助プログラムの報告フローを使用してください——最寄りの利用可能なボランティアまたはクリニックに直接ルーティングされます。",
      ],
    },
    channels: {
      eyebrow: "連絡チャネル",
      title: "適切なお問い合わせタイプを選択",
      subtitle: "各チャネルは最も対応能力のあるチームによって監視されています。",
      items: [
        { title: "一般的なお問い合わせ", description: "WPA、プログラム、組織の運営方法に関する質問。", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "パートナーシップお問い合わせ", description: "政府、企業、NGO、機関パートナーシップ提案。", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "メディアお問い合わせ", description: "プレスリクエスト、インタビュー、メディアパートナーシップ提案。", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "ボランティア・会員", description: "ボランティアまたは会員の申請に関する質問。", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "寄付者サポート", description: "寄付、領収書、資金使用報告に関する質問。", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "救助報告", description: "WPAの救助プログラムを通じて窮状の動物を報告。", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "まだ誰に連絡すればいいかわかりませんか？",
      subtitle: "一般的なお問い合わせを送信すれば、チームが適切な担当者にルーティングします。",
      primaryLabel: "WPAにメール",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "ホットラインに電話",
      secondaryHref: "tel:+1234567890",
    },
  },
};

// ─── KO (Korean) ────────────────────────────────────────────────────────────

const ko: GetInvolvedContent = {
  membership: {
    hero: {
      eyebrow: "회원",
      title: "검증된 글로벌 동물 복지 네트워크에 가입하세요",
      subtitle: "회원 자격은 반려동물 소유자, 전문가, 기관을 하나의 조율되고 책임 있는 네트워크로 연결합니다 — 모든 유형의 참여자에게 명확한 역할이 정의됩니다.",
      primaryLabel: "회원 신청",
      primaryHref: "/join",
      secondaryLabel: "프로그램 알아보기",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "회원이란 누구인가",
      title: "모든 참여자에게 정의된 역할이 있습니다",
      paragraphs: [
        "WPA 회원 자격은 단일 등급이 아닙니다 — 동물 복지 활동을 가능하게 하는 다양한 사람들과 기관을 중심으로 구축된 구조입니다: 직접 동물을 돌보는 개인, 치료를 제공하는 전문가, 대규모 프로그램에 자금을 지원하거나 조율하는 기관.",
        "각 회원 유형에는 고유한 검증 요건, 책임, 접근 권한이 있습니다 — 그래서 반려동물 소유자, 수의사, 클리닉, 보호소, NGO, 자원봉사자, 기부자, 기업 파트너 모두 의미 있게 참여할 수 있으며, 각 프로그램이 의존하는 기준을 희석하지 않습니다.",
      ],
    },
    audiences: {
      eyebrow: "누가 가입할 수 있나요",
      title: "회원 카테고리",
      subtitle: "아래 각 카테고리는 동일한 검증된 절차로 회원에 신청할 수 있습니다.",
      items: [
        { title: "반려동물 소유자", description: "입양, 예방접종, 책임감 있는 소유 리소스를 찾는 개인.", icon: "🏠" },
        { title: "수의사", description: "검증된 의뢰·돌봄 네트워크에 가입하는 면허 전문가.", icon: "👩‍⚕️" },
        { title: "클리닉", description: "예방접종·치료 프로그램에 참여하는 수의 기관.", icon: "🏥" },
        { title: "보호소", description: "접수, 돌봄, 입양 배정을 조율하는 시설.", icon: "🐕" },
        { title: "NGO", description: "WPA의 프로그램을 지역적으로 확장하는 미션 일치 기관.", icon: "🕊️" },
        { title: "자원봉사자", description: "구조, 인식개선, 행사에 시간을 기여하는 개인.", icon: "🙌" },
        { title: "기부자", description: "검증되고 추적 가능한 프로그램에 자금을 지원하는 개인·기관.", icon: "💛" },
        { title: "기업 파트너", description: "자금, 기술, CSR 이니셔티브로 프로그램을 지원하는 기업.", icon: "🏢" },
      ],
    },
    benefits: {
      eyebrow: "가입하는 이유",
      title: "WPA 회원의 혜택",
      subtitle: "회원 자격은 모든 참여자에게 조율되고 검증된 네트워크에 대한 접근을 제공합니다 — 단순한 명단의 이름이 아닙니다.",
      items: [
        { title: "검증된 네트워크 접근", description: "지역의 심사된 클리닉, 보호소, NGO, 자원봉사자와 연결됩니다.", icon: "🔒" },
        { title: "프로그램 참여", description: "입양, 구조, 예방접종, 인식개선 프로그램에 직접 참여합니다.", icon: "🤝" },
        { title: "투명한 보고", description: "지원하는 프로그램과 자금이 어떻게 추적·보고되는지 확인합니다.", icon: "📊" },
        { title: "지역 지부 지원", description: "지역 지부를 통해 조율, 리소스, 교육에 접근합니다.", icon: "🌍" },
      ],
    },
    howToJoin: {
      eyebrow: "가입 방법",
      title: "명확하고 검증된 회원 경로",
      subtitle: "모든 신청은 회원 카테고리에 관계없이 동일한 투명한 절차를 따릅니다.",
      steps: [
        { number: 1, title: "신청서 제출", description: "회원 카테고리를 선택하고 상세 정보와 관심 분야를 제출합니다." },
        { number: 2, title: "검증 검토", description: "WPA 또는 지역 지부가 해당 자격을 검토합니다(클리닉, NGO, 보호소)." },
        { number: 3, title: "온보딩", description: "승인된 회원은 프로그램, 리소스, 지부 조율에 대한 접근을 받습니다." },
        { number: 4, title: "적극적 참여", description: "회원은 역할에 따라 프로그램, 캠페인, 보고에 참여합니다." },
      ],
    },
    cta: {
      title: "회원이 될 준비가 되셨나요?",
      subtitle: "어떤 카테고리가 맞든 — 개인, 전문가, 기관 — 신청 절차는 여기서 시작합니다.",
      primaryLabel: "회원 신청",
      primaryHref: "/join",
      secondaryLabel: "WPA에 연락",
      secondaryHref: "/contact",
    },
  },
  partners: {
    hero: {
      eyebrow: "파트너십",
      title: "검증되고 투명한 동물 복지 네트워크와 파트너십을 맺으세요",
      subtitle: "WPA는 정부 기관, 민간 기관, 클리닉, NGO, 미디어 및 기술 제공자와 파트너십을 맺어 책임감 있게 동물 복지 영향력을 확대합니다.",
      primaryLabel: "파트너십 문의 시작",
      primaryHref: "/contact",
      secondaryLabel: "공개 보고서 보기",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "기관이 WPA와 파트너십을 맺는 이유",
      title: "의도가 아닌 검증에 기반한 파트너십",
      paragraphs: [
        "WPA는 동물 복지 프로그램의 도달 범위나 효과를 의미 있게 확장할 수 있는 기관과 파트너십을 맺습니다 — 브랜딩 행사가 아니라, 양측에 정의된 책임이 있는 운영 관계로.",
        "모든 파트너 카테고리는 역할에 적합한 검증 절차를 거치며, 파트너십 활동은 다른 모든 프로그램 데이터와 함께 WPA의 투명성과 거버넌스 구조를 통해 보고됩니다.",
      ],
    },
    categories: {
      eyebrow: "우리가 파트너십을 맺는 곳",
      title: "파트너십 카테고리",
      subtitle: "각 카테고리는 네트워크에 다른 종류의 능력을 기여합니다.",
      items: [
        { title: "정부 기관", description: "정책 연계, 공중보건 조율, 규제 파트너십.", icon: "🏛️" },
        { title: "민간 기관", description: "자금, 리소스, 인프라로 프로그램을 지원하는 기업.", icon: "🏢" },
        { title: "수의 클리닉", description: "예방접종, 치료, 긴급 의료를 제공하는 검증된 클리닉.", icon: "🏥" },
        { title: "보호소", description: "구조 동물에게 숙소와 재활을 제공하는 시설.", icon: "🐕" },
        { title: "NGO", description: "지역 전반에 프로그램 도달을 확장하는 미션 일치 기관.", icon: "🕊️" },
        { title: "미디어 파트너", description: "인식개선 캠페인과 공개 보고를 지원하는 매체와 크리에이터.", icon: "📰" },
        { title: "기술 파트너", description: "사례 추적, 보고, 디지털 인프라를 지원하는 기관.", icon: "💻" },
        { title: "CSR 및 기업 기부자", description: "CSR 이니셔티브와 스폰서십으로 프로그램에 자금을 지원하는 기업.", icon: "💛" },
      ],
    },
    process: {
      eyebrow: "파트너십 절차",
      title: "파트너십이 어떻게 수립되는가",
      subtitle: "모든 파트너 카테고리에 대한 정의되고 검증 가능한 절차.",
      steps: [
        { number: 1, title: "문의 제출", description: "기관이 제안하는 역할과 능력을 설명하는 파트너십 문의를 제출합니다." },
        { number: 2, title: "검토 및 검증", description: "WPA가 문의를 검토하고 파트너십 유형에 관련된 자격을 검증합니다." },
        { number: 3, title: "합의 정의", description: "양측의 역할, 책임, 보고 기대가 문서화됩니다." },
        { number: 4, title: "온보딩", description: "파트너가 관련 프로그램 또는 지부 네트워크에 온보딩됩니다." },
        { number: 5, title: "지속적 보고", description: "파트너십 활동은 WPA의 투명성 구조를 통해 보고됩니다." },
      ],
    },
    cta: {
      title: "WPA와의 파트너십을 탐색하세요",
      subtitle: "정부 기관, 기업, 미션 일치 기관 중 어디를 대표하든, 모든 문의는 대화에서 시작합니다.",
      primaryLabel: "파트너십 문의 시작",
      primaryHref: "/contact",
      secondaryLabel: "WPA 소개",
      secondaryHref: "/about",
    },
  },
  volunteer: {
    hero: {
      eyebrow: "WPA 자원봉사",
      title: "시간, 기술, 존재를 기부하세요 — 모든 역할이 중요합니다",
      subtitle: "현장 구조부터 디지털 지원까지, WPA의 자원봉사 역할은 모든 기술과 가용성 수준에 의미 있는 기여 방법이 있도록 구조화됩니다.",
      primaryLabel: "자원봉사 신청",
      primaryHref: "/join",
      secondaryLabel: "프로그램 알아보기",
      secondaryHref: "/what-we-do",
    },
    intro: {
      eyebrow: "자원봉사자가 중요한 이유",
      title: "모든 프로그램의 사람 중심 핵심",
      paragraphs: [
        "모든 구조, 입양, 인식개선 캠페인 뒤에는 자원봉사자 네트워크가 있습니다 — 지역에서 조율하고, 현장 활동을 지원하고, WPA가 공식 기관만으로는 도달할 수 없는 지역사회에 닿도록 돕습니다.",
        "자원봉사 역할은 일반적 업무가 아닌 실제 필요를 중심으로 구조화되어, 기여자가 시간, 기술, 위치에 맞는 역할을 찾을 수 있습니다 — 가끔의 행사 지원부터 지속적인 현장 조율까지.",
      ],
    },
    roles: {
      eyebrow: "자원봉사 역할",
      title: "참여 방법",
      subtitle: "각 역할은 정의된 범위가 있어 자원봉사자가 정확히 무엇에 참여하는지 압니다.",
      items: [
        { title: "구조 지원", description: "신고된 구조 사례의 이송, 초기 대응, 조율을 지원합니다.", icon: "🚑" },
        { title: "인식개선 지원", description: "지역사회에서 예방접종과 책임감 있는 소유 캠페인 제공을 돕습니다.", icon: "📢" },
        { title: "행사 지원", description: "현장에서 입양 행사, 예방접종 캠프, 모금 행사를 지원합니다.", icon: "🎪" },
        { title: "현장 운영", description: "지역의 현장 구조, 이송, 보호소 지원 팀에 합류합니다.", icon: "🐾" },
        { title: "디지털 자원봉사", description: "원격으로 기여 — 콘텐츠, 번역, 사례 조율, 보고 지원.", icon: "💻" },
        { title: "기부자 및 지역사회 대사", description: "지역사회에서 WPA를 대표하고 새 기부자와 회원을 연결합니다.", icon: "🌟" },
      ],
    },
    howToStart: {
      eyebrow: "시작 방법",
      title: "신청에서 활동하는 자원봉사자까지",
      subtitle: "맞는 역할과 매칭되는 간단한 절차.",
      steps: [
        { number: 1, title: "신청서 제출", description: "위치, 가용성, 관심 있는 역할 유형을 알려주세요." },
        { number: 2, title: "역할 매칭", description: "지역 지부가 현재 필요에 따라 활성 역할에 매칭합니다." },
        { number: 3, title: "오리엔테이션", description: "새 자원봉사자는 WPA 기준과 안전 실천에 대한 브리핑을 받습니다." },
        { number: 4, title: "적극적 기여", description: "자원봉사자는 지역 지부의 지속적인 지원과 함께 기여를 시작합니다." },
      ],
    },
    cta: {
      title: "자원봉사할 준비가 되셨나요?",
      subtitle: "어떤 시간이나 기술을 제공하든, 맞는 역할이 있습니다.",
      primaryLabel: "자원봉사 신청",
      primaryHref: "/join",
      secondaryLabel: "WPA에 연락",
      secondaryHref: "/contact",
    },
  },
  contact: {
    hero: {
      eyebrow: "WPA에 연락",
      title: "올바른 팀에 더 빨리 연락하세요",
      subtitle: "일반 질문, 파트너십 제안, 미디어 요청, 자원봉사 희망 — 여기에 연락하는 가장 직접적인 방법이 있습니다.",
      primaryLabel: "회원 가입",
      primaryHref: "/join",
      secondaryLabel: "파트너십 맺기",
      secondaryHref: "/partners",
    },
    intro: {
      eyebrow: "연락하기 전에",
      title: "문의사항을 올바른 팀으로 전달",
      paragraphs: [
        "WPA는 지역 지부와 전문 프로그램 팀을 통해 운영되므로, 유용한 답변을 얻는 가장 빠른 방법은 문의에 맞는 채널로 연락하는 것입니다.",
        "긴급 동물 위기 신고의 경우, 일반 연락처가 아닌 구조 프로그램의 신고 절차를 이용하세요 — 가장 가까운 이용 가능한 자원봉사자나 클리닉으로 직접 전달됩니다.",
      ],
    },
    channels: {
      eyebrow: "연락 채널",
      title: "올바른 문의 유형을 선택하세요",
      subtitle: "각 채널은 가장 대응 능력 있는 팀이 모니터링합니다.",
      items: [
        { title: "일반 문의", description: "WPA, 프로그램, 기관 운영 방식에 대한 질문.", icon: "✉️", href: "mailto:info@wpa.org" },
        { title: "파트너십 문의", description: "정부, 기업, NGO, 기관 파트너십 제안.", icon: "🤝", href: "mailto:partners@wpa.org" },
        { title: "미디어 문의", description: "언론 요청, 인터뷰, 미디어 파트너십 제안.", icon: "📰", href: "mailto:media@wpa.org" },
        { title: "자원봉사 및 회원", description: "자원봉사자 또는 회원 신청에 대한 질문.", icon: "🙌", href: "mailto:join@wpa.org" },
        { title: "기부자 지원", description: "기부, 영수증, 자금 사용 보고에 대한 질문.", icon: "💛", href: "mailto:donors@wpa.org" },
        { title: "구조 신고", description: "WPA의 구조 프로그램을 통해 위기에 처한 동물을 신고합니다.", icon: "🚑", href: "/rescue" },
      ],
    },
    cta: {
      title: "아직 누구에게 연락해야 할지 모르시겠나요?",
      subtitle: "일반 문의를 보내주시면 우리 팀이 올바른 담당자로 전달합니다.",
      primaryLabel: "WPA에 이메일 보내기",
      primaryHref: "mailto:info@wpa.org",
      secondaryLabel: "핫라인에 전화",
      secondaryHref: "tel:+1234567890",
    },
  },
};

const dictionaries: Partial<Record<Locale, GetInvolvedContent>> = { en, bn, ar, fr, es, zh, ru, de, ja, ko };

export function getGetInvolvedContent(locale: string): GetInvolvedContent {
  return dictionaries[locale as Locale] ?? dictionaries.en!;
}

import type { Locale } from "./i18n";
import type { HeroCopy, IconCard, TimelineStep } from "./pagesContent";

// ─── Shared shape for every program page ─────────────────────────────────────

export interface ProgramPageContent {
  hero: HeroCopy;
  intro: { eyebrow: string; title: string; paragraphs: string[] };
  howItWorks: { eyebrow: string; title: string; subtitle: string; steps: TimelineStep[] };
  participants: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  benefits: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  trust: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
  related: { eyebrow: string; title: string; items: IconCard[] };
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}

export interface ProgramsContent {
  overview: {
    hero: HeroCopy;
    intro: { eyebrow: string; title: string; paragraphs: string[] };
    programs: { eyebrow: string; title: string; subtitle: string; items: IconCard[] };
    cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
  };
  adoption: ProgramPageContent;
  rescue: ProgramPageContent;
  donation: ProgramPageContent;
  awareness: ProgramPageContent;
}

// ─── EN ────────────────────────────────────────────────────────────────────────

const en: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "What we do",
      title: "Five Coordinated Programs, One Global Mission",
      subtitle: "WPA runs a connected set of programs that cover the full lifecycle of animal welfare — from prevention and rescue to adoption, funding, and education.",
      primaryLabel: "Become a Member",
      primaryHref: "/join",
      secondaryLabel: "Donate Now",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "How the programs connect",
      title: "Each Program Solves a Different Part of the Same Problem",
      paragraphs: [
        "Animal welfare fails when efforts are fragmented — a rescue with nowhere to place an animal, a donation with no visible impact, a vaccination drive with no public awareness behind it.",
        "WPA's programs are designed to work together: awareness reduces the number of animals in crisis, rescue responds quickly when a crisis happens, adoption gives rescued animals a permanent home, and transparent donation funding keeps every program running.",
        "Every program operates under the same verification, chapter coordination, and transparency standards described in our governance and trust commitments.",
      ],
    },
    programs: {
      eyebrow: "Our programs",
      title: "Explore Each Program",
      subtitle: "Each program has its own dedicated page covering how it works, who can participate, and how impact is tracked.",
      items: [
        { title: "Adoption", description: "Verified listings and responsible matching connect rescued animals with screened, loving homes.", icon: "🐾", href: "/adoption" },
        { title: "Rescue", description: "Emergency reporting and volunteer coordination for animals in distress, anywhere.", icon: "🚑", href: "/rescue" },
        { title: "Donation & Fundraising", description: "Transparent, campaign-based funding for treatment, transport, and emergency care.", icon: "❤️", href: "/donation" },
        { title: "Awareness & Education", description: "Community campaigns on responsible ownership, vaccination, and animal welfare.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Ready to Take Part in WPA's Programs?",
      subtitle: "Whether you want to adopt, report a rescue, donate, or spread awareness — there's a clear way to start.",
      primaryLabel: "Join WPA",
      primaryHref: "/join",
      secondaryLabel: "Partner With Us",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "Adoption program",
      title: "Verified Adoption, From First Match to Forever Home",
      subtitle: "WPA's adoption program connects rescued animals with screened, responsible adopters through a verified listing and handover process.",
      primaryLabel: "Browse Adoptable Pets",
      primaryHref: "/adoption",
      secondaryLabel: "List an Animal for Adoption",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "How adoption works at WPA",
      title: "A Verified Path From Rescue to Responsible Home",
      paragraphs: [
        "Every animal listed for adoption through WPA comes from a verified source — a partner shelter, rescue team, or registered owner — so adopters know an animal's background, health status, and behavioral notes before they apply.",
        "Adoption is not a transaction — it's a screened match. WPA's process is designed to protect both the animal and the adopter, reducing the risk of animals being re-abandoned or placed in unsuitable homes.",
        "Support doesn't end at handover: WPA's post-adoption resources help new pet owners through the first weeks and months of care.",
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From Verified Listing to Safe Handover",
      subtitle: "A consistent five-step process for every adoption, regardless of chapter or region.",
      steps: [
        { number: 1, title: "Verified Pet Listing", description: "Shelters, rescue teams, and owners submit animals with health records and behavioral notes for listing." },
        { number: 2, title: "Adopter Application", description: "Prospective adopters submit an application describing their home, experience, and expectations." },
        { number: 3, title: "Adopter Screening", description: "WPA or the partner shelter reviews the application, and may conduct a home or reference check." },
        { number: 4, title: "Safe Handover", description: "A structured handover includes health documentation, a care briefing, and signed adoption terms." },
        { number: 5, title: "Post-Adoption Support", description: "Follow-up check-ins and access to veterinary and behavioral resources for the first months." },
      ],
    },
    participants: {
      eyebrow: "Who can participate",
      title: "Adoption Involves Every Part of the Network",
      subtitle: "Each participant has a defined role in keeping the adoption process safe and accountable.",
      items: [
        { title: "Rescue Teams & Shelters", description: "List rescued animals with verified health and behavioral information.", icon: "🏠" },
        { title: "Registered Owners", description: "Rehome animals responsibly through a verified listing rather than informal channels.", icon: "🧑‍🤝‍🧑" },
        { title: "Prospective Adopters", description: "Apply, complete screening, and receive an animal matched to their home and experience.", icon: "🐾" },
        { title: "Veterinary Partners", description: "Provide health checks and documentation before and after adoption.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "Benefits & impact",
      title: "Why Verified Adoption Matters",
      subtitle: "A structured process produces better outcomes for animals, adopters, and the wider community.",
      items: [
        { title: "Fewer Return & Re-Abandonment Cases", description: "Screening reduces mismatches that lead to animals being given up again.", icon: "✅" },
        { title: "Healthier Starts", description: "Verified health records mean adopters know what care an animal needs from day one.", icon: "🩺" },
        { title: "Shelter Capacity Relief", description: "Every successful adoption frees up shelter space for the next animal in need.", icon: "🏠" },
        { title: "Ongoing Support", description: "New adopters aren't left alone after handover — help is available when questions arise.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Trust & safety",
      title: "Built-In Safeguards for Every Adoption",
      subtitle: "",
      items: [
        { title: "Verified Listings Only", description: "Animals are listed only through vetted shelters, rescue teams, or registered owners.", icon: "🔒" },
        { title: "Documented Screening", description: "Every adopter application and screening decision is recorded for accountability.", icon: "📋" },
        { title: "Structured Handover", description: "A standard handover checklist protects both the animal and the adopter.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Related programs",
      title: "Programs That Connect With Adoption",
      items: [
        { title: "Rescue", description: "Many adoptable animals begin their journey through WPA's rescue network.", icon: "🚑", href: "/rescue" },
        { title: "Awareness & Education", description: "Learn about responsible pet ownership before and after adopting.", icon: "📢", href: "/awareness" },
        { title: "Donation & Fundraising", description: "Support the shelters and clinics that make adoption possible.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Ready to Give a Rescued Animal a Home?",
      subtitle: "Start an adoption application or list an animal in need of a home today.",
      primaryLabel: "Start Adoption Process",
      primaryHref: "/join",
      secondaryLabel: "Contact WPA",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "Rescue program",
      title: "Rapid Response for Animals in Distress",
      subtitle: "WPA's rescue network connects citizen reports with volunteers, clinics, and shelters — coordinating every case from first report to full recovery.",
      primaryLabel: "Report a Rescue",
      primaryHref: "/rescue",
      secondaryLabel: "Join a Rescue Team",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "How rescue works at WPA",
      title: "From a Single Report to a Coordinated Response",
      paragraphs: [
        "Animals in distress are often found by ordinary citizens who don't know who to contact or what happens next. WPA's rescue program exists to close that gap — turning a single report into a coordinated, trackable response.",
        "Once a case is reported, it is routed to the nearest available volunteer or partner clinic, with status updates recorded at every stage so reporters and coordinators can see progress in real time.",
        "Rescue doesn't end at pickup — every case is followed through treatment, rehabilitation, and, where appropriate, transition into the adoption program.",
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From Emergency Report to Recovery",
      subtitle: "A structured, trackable process for every case, regardless of severity.",
      steps: [
        { number: 1, title: "Emergency Reporting", description: "Anyone can report an animal in distress with a location and description, any time." },
        { number: 2, title: "Volunteer & Clinic Coordination", description: "The nearest available volunteer or partner clinic is notified and dispatched." },
        { number: 3, title: "Case Tracking", description: "Every case receives a tracked ID so its status is visible from report to resolution." },
        { number: 4, title: "Treatment & Rehabilitation", description: "Partner clinics provide medical treatment and recovery care as needed." },
        { number: 5, title: "Status Updates & Outcome", description: "Reporters and coordinators receive updates through recovery, adoption, or safe release." },
      ],
    },
    participants: {
      eyebrow: "Who can participate",
      title: "Rescue Depends on a Coordinated Network",
      subtitle: "Every case moves through several hands, each with a clear responsibility.",
      items: [
        { title: "Citizens & Reporters", description: "Report animals in distress and provide critical first information.", icon: "📍" },
        { title: "Volunteers", description: "Respond to reports, transport animals, and support field coordination.", icon: "🙌" },
        { title: "Veterinary Clinics", description: "Provide emergency treatment, diagnosis, and rehabilitation care.", icon: "🏥" },
        { title: "Local Chapters", description: "Coordinate volunteers and clinics within their region for faster response.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "Benefits & impact",
      title: "Why Coordinated Rescue Matters",
      subtitle: "A structured network responds faster and more reliably than isolated efforts.",
      items: [
        { title: "Faster Response Times", description: "Routing reports to the nearest available team reduces time-to-help.", icon: "⏱️" },
        { title: "No Case Falls Through", description: "Tracked case IDs mean every report is followed to a resolution.", icon: "📋" },
        { title: "Higher Recovery Rates", description: "Coordinated treatment and rehabilitation improve outcomes for injured animals.", icon: "🩺" },
        { title: "Community Trust", description: "Visible status updates build confidence that reports lead to real action.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Trust & safety",
      title: "Accountability at Every Stage of a Rescue",
      subtitle: "",
      items: [
        { title: "Verified Responders", description: "Only vetted volunteers and partner clinics are dispatched to active cases.", icon: "🔒" },
        { title: "Transparent Case Tracking", description: "Every case has a visible status, from report to resolution.", icon: "📊" },
        { title: "Documented Treatment", description: "Medical care and outcomes are recorded for each rescued animal.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "Related programs",
      title: "Programs That Connect With Rescue",
      items: [
        { title: "Adoption", description: "Rehabilitated animals without an owner move into the adoption program.", icon: "🐾", href: "/adoption" },
        { title: "Donation & Fundraising", description: "Emergency treatment and transport are funded through tracked donations.", icon: "❤️", href: "/donation" },
        { title: "Awareness & Education", description: "Community awareness helps more cases get reported early.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "See an Animal in Distress? Report It Now.",
      subtitle: "Every report matters. Join our rescue network as a volunteer or support it with a donation.",
      primaryLabel: "Report a Rescue",
      primaryHref: "/rescue",
      secondaryLabel: "Become a Volunteer",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "Donation & fundraising program",
      title: "Every Donation Tracked, Every Impact Reported",
      subtitle: "WPA funds rescue, treatment, adoption, and awareness through transparent, campaign-based fundraising — with public reporting on how every contribution is used.",
      primaryLabel: "Donate Now",
      primaryHref: "/donation",
      secondaryLabel: "View Public Reports",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "How donations work at WPA",
      title: "Funding With a Visible, Trackable Path",
      paragraphs: [
        "Donations to WPA are directed toward specific purposes — emergency rescue, medical treatment, vaccination campaigns, shelter support, or general operations — so donors know exactly what their contribution supports.",
        "Many donations are raised through campaign-based fundraising, tied to a specific case, chapter, or initiative, with progress and outcomes visible to contributors.",
        "Every donation generates a receipt, and fund usage is aggregated into public reports so the entire network — donors, partners, and the public — can review how resources are spent.",
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From Contribution to Public Report",
      subtitle: "A transparent path for every donation, whether one-time, recurring, or campaign-based.",
      steps: [
        { number: 1, title: "Choose a Purpose or Campaign", description: "Donors select a program area, active campaign, or general fund to support." },
        { number: 2, title: "Contribute Securely", description: "Donations are processed and a receipt is issued for every contribution." },
        { number: 3, title: "Funds Allocated & Tracked", description: "Contributions are recorded against the specific program or campaign they support." },
        { number: 4, title: "Programs Delivered", description: "Funds are disbursed to rescue, treatment, adoption, or awareness activities." },
        { number: 5, title: "Public Impact Reporting", description: "Fund usage and outcomes are published in regular public reports." },
      ],
    },
    participants: {
      eyebrow: "Who can participate",
      title: "Funding Animal Welfare, Together",
      subtitle: "Donation and fundraising involve donors, campaign organizers, and the programs they support.",
      items: [
        { title: "Individual Donors", description: "Contribute one-time or recurring donations to programs or campaigns.", icon: "💛" },
        { title: "Institutional Donors", description: "Corporations and foundations fund large-scale programs and partnerships.", icon: "🏢" },
        { title: "Chapter Fundraisers", description: "Local chapters run campaigns for regional needs and emergencies.", icon: "🌍" },
        { title: "Partner Organizations", description: "NGOs and clinics apply for program funding tied to specific initiatives.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "Benefits & impact",
      title: "Why Transparent Fundraising Matters",
      subtitle: "Trust in fund usage is the foundation of a sustainable donation program.",
      items: [
        { title: "Full Visibility", description: "Donors can see exactly which programs and cases their contribution supported.", icon: "🔍" },
        { title: "Higher Program Impact", description: "Tracked allocation ensures funds go where they're needed most.", icon: "📈" },
        { title: "Verified Receipts", description: "Every contribution is documented for the donor's own records.", icon: "🧾" },
        { title: "Public Accountability", description: "Regular reports keep the entire network accountable to donors and partners.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "Trust & safety",
      title: "Transparency Built Into Every Contribution",
      subtitle: "",
      items: [
        { title: "Donor Receipts", description: "Every donation generates a receipt confirming amount, purpose, and date.", icon: "🧾" },
        { title: "Tracked Fund Allocation", description: "Contributions are recorded against the specific program or campaign they support.", icon: "📊" },
        { title: "Public Impact Reports", description: "Fund usage and outcomes are published for donors, partners, and the public.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Related programs",
      title: "Programs Funded Through Donations",
      items: [
        { title: "Rescue", description: "Emergency response and treatment are funded through donations.", icon: "🚑", href: "/rescue" },
        { title: "Adoption", description: "Shelter care and medical checks before adoption rely on donor funding.", icon: "🐾", href: "/adoption" },
        { title: "Awareness & Education", description: "Vaccination and education campaigns are funded through donations.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Fund Verified, Transparent Animal Welfare Programs",
      subtitle: "Every contribution is tracked, reported, and directed to programs that need it most.",
      primaryLabel: "Donate Now",
      primaryHref: "/donation",
      secondaryLabel: "View Public Reports",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "Awareness & education program",
      title: "Building a Culture of Responsible, Compassionate Pet Ownership",
      subtitle: "WPA's awareness program educates communities on responsible pet ownership, vaccination, and animal welfare — reducing the number of animals in crisis before it happens.",
      primaryLabel: "Explore Resources",
      primaryHref: "/awareness",
      secondaryLabel: "Join a Local Campaign",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "How awareness works at WPA",
      title: "Prevention Through Education",
      paragraphs: [
        "Many animal welfare crises — abandonment, disease outbreaks, unsafe handling — are preventable through basic education. WPA's awareness program exists to reach communities before a crisis happens, not just respond after.",
        "Campaigns cover responsible pet ownership, vaccination schedules, animal welfare ethics, and safe reporting practices, delivered through local chapters, partner clinics, and digital resources.",
        "Resources are developed with multilingual access in mind, so education reaches communities in the language they understand best, not just the languages WPA operates in by default.",
      ],
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "From Campaign Design to Community Reach",
      subtitle: "A repeatable model for delivering education where it's needed most.",
      steps: [
        { number: 1, title: "Identify Community Needs", description: "Local chapters assess gaps in awareness, vaccination coverage, or reporting practices." },
        { number: 2, title: "Design the Campaign", description: "Campaigns are built around a specific topic — vaccination, adoption, or safe handling." },
        { number: 3, title: "Deliver Through Partners", description: "Clinics, schools, and community groups help distribute campaign materials and events." },
        { number: 4, title: "Provide Multilingual Resources", description: "Educational materials are made available in the languages the community needs." },
        { number: 5, title: "Measure & Report Reach", description: "Campaign reach and outcomes are tracked and reported back through WPA's network." },
      ],
    },
    participants: {
      eyebrow: "Who can participate",
      title: "Awareness Reaches Every Part of the Community",
      subtitle: "Education programs are built with multiple contributors and audiences in mind.",
      items: [
        { title: "Pet Owners", description: "Learn responsible ownership practices and vaccination schedules.", icon: "🏠" },
        { title: "Schools & Community Groups", description: "Host awareness sessions and youth education programs.", icon: "🏫" },
        { title: "Veterinary Clinics", description: "Deliver vaccination guidance and health education alongside care.", icon: "🏥" },
        { title: "Volunteers", description: "Distribute materials and lead local awareness events.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "Benefits & impact",
      title: "Why Awareness Reduces the Need for Rescue",
      subtitle: "Prevention is more effective, and more humane, than crisis response alone.",
      items: [
        { title: "Fewer Abandonment Cases", description: "Responsible ownership education reduces the drivers of abandonment.", icon: "📉" },
        { title: "Higher Vaccination Coverage", description: "Awareness campaigns increase participation in preventive health programs.", icon: "💉" },
        { title: "Safer Reporting", description: "Communities that understand the rescue process report cases earlier and more accurately.", icon: "📍" },
        { title: "Wider Reach", description: "Multilingual resources ensure education isn't limited by language barriers.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "Trust & safety",
      title: "Education Grounded in Verified Standards",
      subtitle: "",
      items: [
        { title: "Veterinary-Reviewed Content", description: "Health and vaccination guidance is reviewed by verified veterinary partners.", icon: "🩺" },
        { title: "Locally Adapted Campaigns", description: "Chapters adapt materials to local regulation and community context.", icon: "🌍" },
        { title: "Tracked Reach & Outcomes", description: "Campaign impact is measured and reported, not assumed.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "Related programs",
      title: "Programs That Connect With Awareness",
      items: [
        { title: "Rescue", description: "Better-informed communities report distress cases earlier.", icon: "🚑", href: "/rescue" },
        { title: "Adoption", description: "Education helps set new adopters up for long-term success.", icon: "🐾", href: "/adoption" },
        { title: "Donation & Fundraising", description: "Campaigns are funded through transparent, tracked donations.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Help Build a More Informed, Compassionate Community",
      subtitle: "Bring an awareness campaign to your community or support one already underway.",
      primaryLabel: "Join a Campaign",
      primaryHref: "/volunteers",
      secondaryLabel: "Contact WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── BN ────────────────────────────────────────────────────────────────────────

const bn: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "আমরা যা করি",
      title: "পাঁচটি সমন্বিত কর্মসূচি, একটি বৈশ্বিক লক্ষ্য",
      subtitle: "WPA প্রাণী কল্যাণের সম্পূর্ণ চক্র জুড়ে সংযুক্ত কর্মসূচি পরিচালনা করে — প্রতিরোধ ও উদ্ধার থেকে দত্তক, তহবিল ও শিক্ষা পর্যন্ত।",
      primaryLabel: "সদস্য হোন",
      primaryHref: "/join",
      secondaryLabel: "এখনই দান করুন",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "কর্মসূচিগুলো কীভাবে সংযুক্ত",
      title: "প্রতিটি কর্মসূচি একই সমস্যার ভিন্ন অংশ সমাধান করে",
      paragraphs: [
        "প্রচেষ্টা বিচ্ছিন্ন হলে প্রাণী কল্যাণ ব্যর্থ হয় — একটি উদ্ধার যার স্থাপনের জায়গা নেই, একটি দান যার দৃশ্যমান প্রভাব নেই, একটি টিকাদান কর্মসূচি যার পেছনে জনসচেতনতা নেই।",
        "WPA-এর কর্মসূচিগুলো একসাথে কাজ করার জন্য ডিজাইন করা: সচেতনতা সংকটে থাকা প্রাণীর সংখ্যা কমায়, উদ্ধার সংকট ঘটলে দ্রুত সাড়া দেয়, দত্তক উদ্ধারকৃত প্রাণীদের একটি স্থায়ী ঘর দেয়, এবং স্বচ্ছ দান তহবিল প্রতিটি কর্মসূচি সচল রাখে।",
        "প্রতিটি কর্মসূচি আমাদের পরিচালনা ও বিশ্বাস প্রতিশ্রুতিতে বর্ণিত একই যাচাইকরণ, চ্যাপ্টার সমন্বয় ও স্বচ্ছতা মানের অধীনে পরিচালিত হয়।",
      ],
    },
    programs: {
      eyebrow: "আমাদের কর্মসূচি",
      title: "প্রতিটি কর্মসূচি দেখুন",
      subtitle: "প্রতিটি কর্মসূচির নিজস্ব উৎসর্গীকৃত পাতা আছে যা এটি কীভাবে কাজ করে, কে অংশগ্রহণ করতে পারে এবং প্রভাব কীভাবে ট্র্যাক করা হয় তা কভার করে।",
      items: [
        { title: "দত্তক", description: "যাচাইকৃত তালিকা ও দায়িত্বশীল মিলন উদ্ধারকৃত প্রাণীদের যাচাইকৃত, ভালোবাসাময় ঘরের সাথে সংযুক্ত করে।", icon: "🐾", href: "/adoption" },
        { title: "উদ্ধার", description: "যেকোনো স্থানে বিপদগ্রস্ত প্রাণীদের জন্য জরুরি রিপোর্টিং ও স্বেচ্ছাসেবক সমন্বয়।", icon: "🚑", href: "/rescue" },
        { title: "দান ও তহবিল সংগ্রহ", description: "চিকিৎসা, পরিবহন ও জরুরি যত্নের জন্য স্বচ্ছ, প্রচারাভিযান-ভিত্তিক তহবিল।", icon: "❤️", href: "/donation" },
        { title: "সচেতনতা ও শিক্ষা", description: "দায়িত্বশীল মালিকানা, টিকাদান ও প্রাণী কল্যাণ নিয়ে কমিউনিটি প্রচারাভিযান।", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "WPA-এর কর্মসূচিতে অংশ নিতে প্রস্তুত?",
      subtitle: "আপনি দত্তক নিতে চান, উদ্ধারের রিপোর্ট করতে চান, দান করতে চান, বা সচেতনতা ছড়াতে চান — শুরু করার একটি স্পষ্ট উপায় আছে।",
      primaryLabel: "WPA-তে যোগ দিন",
      primaryHref: "/join",
      secondaryLabel: "আমাদের সঙ্গী হোন",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "দত্তক কর্মসূচি",
      title: "যাচাইকৃত দত্তক, প্রথম মিলন থেকে চিরস্থায়ী ঘর পর্যন্ত",
      subtitle: "WPA-এর দত্তক কর্মসূচি একটি যাচাইকৃত তালিকা ও হস্তান্তর প্রক্রিয়ার মাধ্যমে উদ্ধারকৃত প্রাণীদের যাচাইকৃত, দায়িত্বশীল দত্তকগ্রহীতাদের সাথে সংযুক্ত করে।",
      primaryLabel: "দত্তকযোগ্য প্রাণী দেখুন",
      primaryHref: "/adoption",
      secondaryLabel: "দত্তকের জন্য প্রাণী তালিকাভুক্ত করুন",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "WPA-তে দত্তক কীভাবে কাজ করে",
      title: "উদ্ধার থেকে দায়িত্বশীল ঘর পর্যন্ত একটি যাচাইকৃত পথ",
      paragraphs: [
        "WPA-এর মাধ্যমে দত্তকের জন্য তালিকাভুক্ত প্রতিটি প্রাণী একটি যাচাইকৃত উৎস থেকে আসে — একটি অংশীদার আশ্রয়কেন্দ্র, উদ্ধার দল, বা নিবন্ধিত মালিক — যাতে দত্তকগ্রহীতারা আবেদনের আগে প্রাণীর পটভূমি, স্বাস্থ্য অবস্থা ও আচরণগত নোট জানতে পারেন।",
        "দত্তক কোনো লেনদেন নয় — এটি একটি যাচাইকৃত মিলন। WPA-এর প্রক্রিয়া প্রাণী ও দত্তকগ্রহীতা উভয়কে রক্ষা করার জন্য ডিজাইন করা, যা প্রাণীদের পুনরায় পরিত্যক্ত হওয়া বা অনুপযুক্ত ঘরে স্থাপনের ঝুঁকি কমায়।",
        "সহায়তা হস্তান্তরেই শেষ হয় না: WPA-এর দত্তক-পরবর্তী সম্পদ নতুন পোষা প্রাণীর মালিকদের প্রথম সপ্তাহ ও মাসগুলোর পরিচর্যায় সাহায্য করে।",
      ],
    },
    howItWorks: {
      eyebrow: "এটি কীভাবে কাজ করে",
      title: "যাচাইকৃত তালিকা থেকে নিরাপদ হস্তান্তর পর্যন্ত",
      subtitle: "চ্যাপ্টার বা অঞ্চল নির্বিশেষে প্রতিটি দত্তকের জন্য একটি সামঞ্জস্যপূর্ণ পাঁচ-ধাপ প্রক্রিয়া।",
      steps: [
        { number: 1, title: "যাচাইকৃত পোষা প্রাণী তালিকা", description: "আশ্রয়কেন্দ্র, উদ্ধার দল ও মালিকরা স্বাস্থ্য রেকর্ড ও আচরণগত নোটসহ প্রাণী তালিকাভুক্ত করেন।" },
        { number: 2, title: "দত্তকগ্রহীতার আবেদন", description: "সম্ভাব্য দত্তকগ্রহীতারা তাদের ঘর, অভিজ্ঞতা ও প্রত্যাশা বর্ণনা করে আবেদন জমা দেন।" },
        { number: 3, title: "দত্তকগ্রহীতা যাচাই", description: "WPA বা অংশীদার আশ্রয়কেন্দ্র আবেদন পর্যালোচনা করে এবং বাড়ি বা রেফারেন্স চেক করতে পারে।" },
        { number: 4, title: "নিরাপদ হস্তান্তর", description: "একটি সংগঠিত হস্তান্তরে স্বাস্থ্য নথি, একটি পরিচর্যা ব্রিফিং এবং স্বাক্ষরিত দত্তক শর্তাবলী অন্তর্ভুক্ত থাকে।" },
        { number: 5, title: "দত্তক-পরবর্তী সহায়তা", description: "প্রথম কয়েক মাসের জন্য ফলো-আপ চেক-ইন এবং পশুচিকিৎসা ও আচরণগত সম্পদে প্রবেশাধিকার।" },
      ],
    },
    participants: {
      eyebrow: "কে অংশগ্রহণ করতে পারে",
      title: "দত্তক নেটওয়ার্কের প্রতিটি অংশকে জড়িত করে",
      subtitle: "দত্তক প্রক্রিয়াকে নিরাপদ ও জবাবদিহিমূলক রাখতে প্রতিটি অংশগ্রহণকারীর একটি নির্ধারিত ভূমিকা রয়েছে।",
      items: [
        { title: "উদ্ধার দল ও আশ্রয়কেন্দ্র", description: "যাচাইকৃত স্বাস্থ্য ও আচরণগত তথ্যসহ উদ্ধারকৃত প্রাণী তালিকাভুক্ত করে।", icon: "🏠" },
        { title: "নিবন্ধিত মালিক", description: "অনানুষ্ঠানিক মাধ্যমের পরিবর্তে একটি যাচাইকৃত তালিকার মাধ্যমে দায়িত্বশীলভাবে প্রাণীকে নতুন ঘরে দেন।", icon: "🧑‍🤝‍🧑" },
        { title: "সম্ভাব্য দত্তকগ্রহীতা", description: "আবেদন করুন, যাচাই সম্পন্ন করুন এবং তাদের ঘর ও অভিজ্ঞতার সাথে মেলানো একটি প্রাণী পান।", icon: "🐾" },
        { title: "পশুচিকিৎসা অংশীদার", description: "দত্তকের আগে ও পরে স্বাস্থ্য পরীক্ষা ও নথিপত্র প্রদান করে।", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "সুবিধা ও প্রভাব",
      title: "কেন যাচাইকৃত দত্তক গুরুত্বপূর্ণ",
      subtitle: "একটি সংগঠিত প্রক্রিয়া প্রাণী, দত্তকগ্রহীতা ও বৃহত্তর কমিউনিটির জন্য ভালো ফলাফল তৈরি করে।",
      items: [
        { title: "কম ফেরত ও পুনঃপরিত্যাগের ঘটনা", description: "যাচাইকরণ অমিল কমায় যা প্রাণীদের আবার পরিত্যক্ত হওয়ার দিকে নিয়ে যায়।", icon: "✅" },
        { title: "স্বাস্থ্যকর সূচনা", description: "যাচাইকৃত স্বাস্থ্য রেকর্ড মানে দত্তকগ্রহীতারা প্রথম দিন থেকেই জানেন কী পরিচর্যা প্রয়োজন।", icon: "🩺" },
        { title: "আশ্রয়কেন্দ্রের ক্ষমতা মুক্তি", description: "প্রতিটি সফল দত্তক পরবর্তী প্রয়োজনীয় প্রাণীর জন্য আশ্রয়কেন্দ্রের স্থান মুক্ত করে।", icon: "🏠" },
        { title: "চলমান সহায়তা", description: "নতুন দত্তকগ্রহীতারা হস্তান্তরের পর একা থাকেন না — প্রশ্ন উঠলে সাহায্য পাওয়া যায়।", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "বিশ্বাস ও নিরাপত্তা",
      title: "প্রতিটি দত্তকের জন্য অন্তর্নির্মিত সুরক্ষা",
      subtitle: "",
      items: [
        { title: "শুধুমাত্র যাচাইকৃত তালিকা", description: "প্রাণী শুধুমাত্র যাচাইকৃত আশ্রয়কেন্দ্র, উদ্ধার দল বা নিবন্ধিত মালিকদের মাধ্যমে তালিকাভুক্ত হয়।", icon: "🔒" },
        { title: "নথিভুক্ত যাচাইকরণ", description: "প্রতিটি দত্তকগ্রহীতার আবেদন ও যাচাইকরণ সিদ্ধান্ত জবাবদিহিতার জন্য নথিভুক্ত করা হয়।", icon: "📋" },
        { title: "সংগঠিত হস্তান্তর", description: "একটি স্ট্যান্ডার্ড হস্তান্তর চেকলিস্ট প্রাণী ও দত্তকগ্রহীতা উভয়কে রক্ষা করে।", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "সম্পর্কিত কর্মসূচি",
      title: "দত্তকের সাথে সংযুক্ত কর্মসূচি",
      items: [
        { title: "উদ্ধার", description: "অনেক দত্তকযোগ্য প্রাণী WPA-এর উদ্ধার নেটওয়ার্কের মাধ্যমে তাদের যাত্রা শুরু করে।", icon: "🚑", href: "/rescue" },
        { title: "সচেতনতা ও শিক্ষা", description: "দত্তক নেওয়ার আগে ও পরে দায়িত্বশীল পোষা প্রাণী পালন সম্পর্কে জানুন।", icon: "📢", href: "/awareness" },
        { title: "দান ও তহবিল সংগ্রহ", description: "দত্তককে সম্ভব করে তোলা আশ্রয়কেন্দ্র ও ক্লিনিককে সমর্থন করুন।", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "একটি উদ্ধারকৃত প্রাণীকে ঘর দিতে প্রস্তুত?",
      subtitle: "আজই একটি দত্তক আবেদন শুরু করুন বা ঘরের প্রয়োজনে একটি প্রাণী তালিকাভুক্ত করুন।",
      primaryLabel: "দত্তক প্রক্রিয়া শুরু করুন",
      primaryHref: "/join",
      secondaryLabel: "WPA-কে জানান",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "উদ্ধার কর্মসূচি",
      title: "বিপদগ্রস্ত প্রাণীদের জন্য দ্রুত সাড়া",
      subtitle: "WPA-এর উদ্ধার নেটওয়ার্ক নাগরিক রিপোর্টকে স্বেচ্ছাসেবক, ক্লিনিক ও আশ্রয়কেন্দ্রের সাথে সংযুক্ত করে — প্রথম রিপোর্ট থেকে সম্পূর্ণ পুনরুদ্ধার পর্যন্ত প্রতিটি কেস সমন্বয় করে।",
      primaryLabel: "উদ্ধারের রিপোর্ট করুন",
      primaryHref: "/rescue",
      secondaryLabel: "একটি উদ্ধার দলে যোগ দিন",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPA-তে উদ্ধার কীভাবে কাজ করে",
      title: "একটি একক রিপোর্ট থেকে একটি সমন্বিত সাড়া পর্যন্ত",
      paragraphs: [
        "বিপদগ্রস্ত প্রাণী প্রায়ই সাধারণ নাগরিকরা খুঁজে পান যারা জানেন না কার সাথে যোগাযোগ করতে হবে বা পরবর্তীতে কী ঘটে। WPA-এর উদ্ধার কর্মসূচি এই ফাঁক পূরণ করার জন্য বিদ্যমান — একটি একক রিপোর্টকে একটি সমন্বিত, ট্র্যাকযোগ্য সাড়ায় পরিণত করে।",
        "একবার একটি কেস রিপোর্ট করা হলে, এটি নিকটতম উপলব্ধ স্বেচ্ছাসেবক বা অংশীদার ক্লিনিকে রুট করা হয়, প্রতিটি পর্যায়ে স্ট্যাটাস আপডেট নথিভুক্ত করা হয় যাতে রিপোর্টকারী ও সমন্বয়কারীরা রিয়েল টাইমে অগ্রগতি দেখতে পারেন।",
        "উদ্ধার সংগ্রহেই শেষ হয় না — প্রতিটি কেস চিকিৎসা, পুনর্বাসন এবং যেখানে উপযুক্ত, দত্তক কর্মসূচিতে রূপান্তরের মাধ্যমে অনুসরণ করা হয়।",
      ],
    },
    howItWorks: {
      eyebrow: "এটি কীভাবে কাজ করে",
      title: "জরুরি রিপোর্ট থেকে পুনরুদ্ধার পর্যন্ত",
      subtitle: "তীব্রতা নির্বিশেষে প্রতিটি কেসের জন্য একটি সংগঠিত, ট্র্যাকযোগ্য প্রক্রিয়া।",
      steps: [
        { number: 1, title: "জরুরি রিপোর্টিং", description: "যে কেউ যেকোনো সময় অবস্থান ও বিবরণসহ একটি বিপদগ্রস্ত প্রাণী রিপোর্ট করতে পারেন।" },
        { number: 2, title: "স্বেচ্ছাসেবক ও ক্লিনিক সমন্বয়", description: "নিকটতম উপলব্ধ স্বেচ্ছাসেবক বা অংশীদার ক্লিনিককে জানানো ও পাঠানো হয়।" },
        { number: 3, title: "কেস ট্র্যাকিং", description: "প্রতিটি কেস একটি ট্র্যাক করা আইডি পায় যাতে এর স্ট্যাটাস রিপোর্ট থেকে সমাধান পর্যন্ত দৃশ্যমান থাকে।" },
        { number: 4, title: "চিকিৎসা ও পুনর্বাসন", description: "অংশীদার ক্লিনিক প্রয়োজন অনুযায়ী চিকিৎসা ও পুনরুদ্ধার পরিচর্যা প্রদান করে।" },
        { number: 5, title: "স্ট্যাটাস আপডেট ও ফলাফল", description: "রিপোর্টকারী ও সমন্বয়কারীরা পুনরুদ্ধার, দত্তক বা নিরাপদ মুক্তির মাধ্যমে আপডেট পান।" },
      ],
    },
    participants: {
      eyebrow: "কে অংশগ্রহণ করতে পারে",
      title: "উদ্ধার একটি সমন্বিত নেটওয়ার্কের উপর নির্ভর করে",
      subtitle: "প্রতিটি কেস বিভিন্ন হাত দিয়ে চলে যায়, প্রতিটির একটি স্পষ্ট দায়িত্ব রয়েছে।",
      items: [
        { title: "নাগরিক ও রিপোর্টকারী", description: "বিপদগ্রস্ত প্রাণী রিপোর্ট করে এবং গুরুত্বপূর্ণ প্রাথমিক তথ্য প্রদান করে।", icon: "📍" },
        { title: "স্বেচ্ছাসেবক", description: "রিপোর্টে সাড়া দেয়, প্রাণী পরিবহন করে এবং মাঠপর্যায়ের সমন্বয়ে সহায়তা করে।", icon: "🙌" },
        { title: "পশুচিকিৎসা ক্লিনিক", description: "জরুরি চিকিৎসা, রোগ নির্ণয় ও পুনর্বাসন পরিচর্যা প্রদান করে।", icon: "🏥" },
        { title: "স্থানীয় চ্যাপ্টার", description: "দ্রুত সাড়ার জন্য তাদের অঞ্চলে স্বেচ্ছাসেবক ও ক্লিনিক সমন্বয় করে।", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "সুবিধা ও প্রভাব",
      title: "কেন সমন্বিত উদ্ধার গুরুত্বপূর্ণ",
      subtitle: "একটি সংগঠিত নেটওয়ার্ক বিচ্ছিন্ন প্রচেষ্টার চেয়ে দ্রুত ও আরও নির্ভরযোগ্যভাবে সাড়া দেয়।",
      items: [
        { title: "দ্রুততর সাড়া সময়", description: "নিকটতম উপলব্ধ দলে রিপোর্ট রুট করা সাহায্যের সময় কমায়।", icon: "⏱️" },
        { title: "কোনো কেস বাদ যায় না", description: "ট্র্যাক করা কেস আইডি মানে প্রতিটি রিপোর্ট একটি সমাধান পর্যন্ত অনুসরণ করা হয়।", icon: "📋" },
        { title: "উচ্চতর পুনরুদ্ধার হার", description: "সমন্বিত চিকিৎসা ও পুনর্বাসন আহত প্রাণীদের জন্য ফলাফল উন্নত করে।", icon: "🩺" },
        { title: "কমিউনিটি বিশ্বাস", description: "দৃশ্যমান স্ট্যাটাস আপডেট আস্থা তৈরি করে যে রিপোর্ট প্রকৃত পদক্ষেপের দিকে নিয়ে যায়।", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "বিশ্বাস ও নিরাপত্তা",
      title: "একটি উদ্ধারের প্রতিটি পর্যায়ে জবাবদিহিতা",
      subtitle: "",
      items: [
        { title: "যাচাইকৃত প্রতিক্রিয়াকারী", description: "শুধুমাত্র যাচাইকৃত স্বেচ্ছাসেবক ও অংশীদার ক্লিনিক সক্রিয় কেসে পাঠানো হয়।", icon: "🔒" },
        { title: "স্বচ্ছ কেস ট্র্যাকিং", description: "প্রতিটি কেসের রিপোর্ট থেকে সমাধান পর্যন্ত একটি দৃশ্যমান স্ট্যাটাস রয়েছে।", icon: "📊" },
        { title: "নথিভুক্ত চিকিৎসা", description: "প্রতিটি উদ্ধারকৃত প্রাণীর জন্য চিকিৎসা পরিচর্যা ও ফলাফল নথিভুক্ত করা হয়।", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "সম্পর্কিত কর্মসূচি",
      title: "উদ্ধারের সাথে সংযুক্ত কর্মসূচি",
      items: [
        { title: "দত্তক", description: "মালিকহীন পুনর্বাসিত প্রাণী দত্তক কর্মসূচিতে চলে যায়।", icon: "🐾", href: "/adoption" },
        { title: "দান ও তহবিল সংগ্রহ", description: "জরুরি চিকিৎসা ও পরিবহন ট্র্যাক করা দানের মাধ্যমে অর্থায়ন করা হয়।", icon: "❤️", href: "/donation" },
        { title: "সচেতনতা ও শিক্ষা", description: "কমিউনিটি সচেতনতা আরও কেস তাড়াতাড়ি রিপোর্ট হতে সাহায্য করে।", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "একটি বিপদগ্রস্ত প্রাণী দেখেছেন? এখনই রিপোর্ট করুন।",
      subtitle: "প্রতিটি রিপোর্ট গুরুত্বপূর্ণ। আমাদের উদ্ধার নেটওয়ার্কে স্বেচ্ছাসেবক হিসেবে যোগ দিন বা দান দিয়ে সমর্থন করুন।",
      primaryLabel: "উদ্ধারের রিপোর্ট করুন",
      primaryHref: "/rescue",
      secondaryLabel: "স্বেচ্ছাসেবক হোন",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "দান ও তহবিল সংগ্রহ কর্মসূচি",
      title: "প্রতিটি দান ট্র্যাক করা, প্রতিটি প্রভাব প্রতিবেদিত",
      subtitle: "WPA স্বচ্ছ, প্রচারাভিযান-ভিত্তিক তহবিল সংগ্রহের মাধ্যমে উদ্ধার, চিকিৎসা, দত্তক ও সচেতনতায় অর্থায়ন করে — প্রতিটি অবদান কীভাবে ব্যবহৃত হয় তার জনসাধারণের প্রতিবেদনসহ।",
      primaryLabel: "এখনই দান করুন",
      primaryHref: "/donation",
      secondaryLabel: "পাবলিক প্রতিবেদন দেখুন",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "WPA-তে দান কীভাবে কাজ করে",
      title: "একটি দৃশ্যমান, ট্র্যাকযোগ্য পথসহ অর্থায়ন",
      paragraphs: [
        "WPA-কে দান নির্দিষ্ট উদ্দেশ্যে পরিচালিত হয় — জরুরি উদ্ধার, চিকিৎসা, টিকাদান কর্মসূচি, আশ্রয়কেন্দ্র সহায়তা, বা সাধারণ কার্যক্রম — যাতে দাতারা ঠিক জানেন তাদের অবদান কী সমর্থন করে।",
        "অনেক দান প্রচারাভিযান-ভিত্তিক তহবিল সংগ্রহের মাধ্যমে সংগৃহীত হয়, একটি নির্দিষ্ট কেস, চ্যাপ্টার বা উদ্যোগের সাথে যুক্ত, অবদানকারীদের কাছে অগ্রগতি ও ফলাফল দৃশ্যমান সহ।",
        "প্রতিটি দান একটি রসিদ তৈরি করে, এবং তহবিল ব্যবহার পাবলিক প্রতিবেদনে একত্রিত করা হয় যাতে সম্পূর্ণ নেটওয়ার্ক — দাতা, অংশীদার ও জনসাধারণ — সম্পদ কীভাবে ব্যয় হয় তা পর্যালোচনা করতে পারেন।",
      ],
    },
    howItWorks: {
      eyebrow: "এটি কীভাবে কাজ করে",
      title: "অবদান থেকে পাবলিক প্রতিবেদন পর্যন্ত",
      subtitle: "একবারের, পুনরাবৃত্ত বা প্রচারাভিযান-ভিত্তিক যাই হোক না কেন, প্রতিটি দানের জন্য একটি স্বচ্ছ পথ।",
      steps: [
        { number: 1, title: "একটি উদ্দেশ্য বা প্রচারাভিযান বেছে নিন", description: "দাতারা সমর্থনের জন্য একটি কর্মসূচি ক্ষেত্র, সক্রিয় প্রচারাভিযান বা সাধারণ তহবিল বেছে নেন।" },
        { number: 2, title: "নিরাপদে অবদান দিন", description: "দান প্রক্রিয়া করা হয় এবং প্রতিটি অবদানের জন্য একটি রসিদ জারি করা হয়।" },
        { number: 3, title: "তহবিল বরাদ্দ ও ট্র্যাক করা", description: "অবদানগুলো তারা যে নির্দিষ্ট কর্মসূচি বা প্রচারাভিযান সমর্থন করে তার বিপরীতে নথিভুক্ত করা হয়।" },
        { number: 4, title: "কর্মসূচি প্রদান", description: "তহবিল উদ্ধার, চিকিৎসা, দত্তক বা সচেতনতা কার্যক্রমে বিতরণ করা হয়।" },
        { number: 5, title: "পাবলিক প্রভাব প্রতিবেদন", description: "তহবিল ব্যবহার ও ফলাফল নিয়মিত পাবলিক প্রতিবেদনে প্রকাশিত হয়।" },
      ],
    },
    participants: {
      eyebrow: "কে অংশগ্রহণ করতে পারে",
      title: "একসাথে প্রাণী কল্যাণে অর্থায়ন",
      subtitle: "দান ও তহবিল সংগ্রহে দাতা, প্রচারাভিযান আয়োজক এবং তারা যে কর্মসূচি সমর্থন করে তা জড়িত।",
      items: [
        { title: "ব্যক্তি দাতা", description: "কর্মসূচি বা প্রচারাভিযানে একবারের বা পুনরাবৃত্ত দান দেন।", icon: "💛" },
        { title: "প্রাতিষ্ঠানিক দাতা", description: "কর্পোরেশন ও ফাউন্ডেশন বৃহৎ পরিসরের কর্মসূচি ও অংশীদারিত্বে অর্থায়ন করে।", icon: "🏢" },
        { title: "চ্যাপ্টার তহবিল সংগ্রহকারী", description: "স্থানীয় চ্যাপ্টার আঞ্চলিক প্রয়োজন ও জরুরি অবস্থার জন্য প্রচারাভিযান চালায়।", icon: "🌍" },
        { title: "অংশীদার প্রতিষ্ঠান", description: "এনজিও ও ক্লিনিক নির্দিষ্ট উদ্যোগের সাথে যুক্ত কর্মসূচি তহবিলের জন্য আবেদন করে।", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "সুবিধা ও প্রভাব",
      title: "কেন স্বচ্ছ তহবিল সংগ্রহ গুরুত্বপূর্ণ",
      subtitle: "তহবিল ব্যবহারে বিশ্বাস একটি টেকসই দান কর্মসূচির ভিত্তি।",
      items: [
        { title: "সম্পূর্ণ দৃশ্যমানতা", description: "দাতারা ঠিক দেখতে পারেন তাদের অবদান কোন কর্মসূচি ও কেস সমর্থন করেছে।", icon: "🔍" },
        { title: "উচ্চতর কর্মসূচি প্রভাব", description: "ট্র্যাক করা বরাদ্দ নিশ্চিত করে তহবিল যেখানে সবচেয়ে বেশি প্রয়োজন সেখানে যায়।", icon: "📈" },
        { title: "যাচাইকৃত রসিদ", description: "প্রতিটি অবদান দাতার নিজের রেকর্ডের জন্য নথিভুক্ত করা হয়।", icon: "🧾" },
        { title: "পাবলিক জবাবদিহিতা", description: "নিয়মিত প্রতিবেদন সম্পূর্ণ নেটওয়ার্ককে দাতা ও অংশীদারদের কাছে জবাবদিহিমূলক রাখে।", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "বিশ্বাস ও নিরাপত্তা",
      title: "প্রতিটি অবদানে অন্তর্নির্মিত স্বচ্ছতা",
      subtitle: "",
      items: [
        { title: "দাতা রসিদ", description: "প্রতিটি দান পরিমাণ, উদ্দেশ্য ও তারিখ নিশ্চিত করে একটি রসিদ তৈরি করে।", icon: "🧾" },
        { title: "ট্র্যাক করা তহবিল বরাদ্দ", description: "অবদানগুলো তারা যে নির্দিষ্ট কর্মসূচি বা প্রচারাভিযান সমর্থন করে তার বিপরীতে নথিভুক্ত হয়।", icon: "📊" },
        { title: "পাবলিক প্রভাব প্রতিবেদন", description: "দাতা, অংশীদার ও জনসাধারণের জন্য তহবিল ব্যবহার ও ফলাফল প্রকাশিত হয়।", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "সম্পর্কিত কর্মসূচি",
      title: "দানের মাধ্যমে অর্থায়িত কর্মসূচি",
      items: [
        { title: "উদ্ধার", description: "জরুরি সাড়া ও চিকিৎসা দানের মাধ্যমে অর্থায়ন করা হয়।", icon: "🚑", href: "/rescue" },
        { title: "দত্তক", description: "দত্তকের আগে আশ্রয়কেন্দ্র পরিচর্যা ও চিকিৎসা পরীক্ষা দাতার তহবিলের উপর নির্ভর করে।", icon: "🐾", href: "/adoption" },
        { title: "সচেতনতা ও শিক্ষা", description: "টিকাদান ও শিক্ষা প্রচারাভিযান দানের মাধ্যমে অর্থায়ন করা হয়।", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "যাচাইকৃত, স্বচ্ছ প্রাণী কল্যাণ কর্মসূচিতে অর্থায়ন করুন",
      subtitle: "প্রতিটি অবদান ট্র্যাক, প্রতিবেদিত ও যেখানে সবচেয়ে বেশি প্রয়োজন সেই কর্মসূচিতে পরিচালিত হয়।",
      primaryLabel: "এখনই দান করুন",
      primaryHref: "/donation",
      secondaryLabel: "পাবলিক প্রতিবেদন দেখুন",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "সচেতনতা ও শিক্ষা কর্মসূচি",
      title: "দায়িত্বশীল, সহানুভূতিশীল পোষা প্রাণী পালনের সংস্কৃতি গড়া",
      subtitle: "WPA-এর সচেতনতা কর্মসূচি দায়িত্বশীল পোষা প্রাণী পালন, টিকাদান ও প্রাণী কল্যাণ নিয়ে কমিউনিটিকে শিক্ষিত করে — সংকট ঘটার আগেই বিপদগ্রস্ত প্রাণীর সংখ্যা কমায়।",
      primaryLabel: "সম্পদ দেখুন",
      primaryHref: "/awareness",
      secondaryLabel: "একটি স্থানীয় প্রচারাভিযানে যোগ দিন",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPA-তে সচেতনতা কীভাবে কাজ করে",
      title: "শিক্ষার মাধ্যমে প্রতিরোধ",
      paragraphs: [
        "অনেক প্রাণী কল্যাণ সংকট — পরিত্যাগ, রোগের প্রাদুর্ভাব, অনিরাপদ পরিচালনা — মৌলিক শিক্ষার মাধ্যমে প্রতিরোধযোগ্য। WPA-এর সচেতনতা কর্মসূচি সংকট ঘটার আগেই কমিউনিটিতে পৌঁছানোর জন্য বিদ্যমান, শুধু পরে সাড়া দেওয়ার জন্য নয়।",
        "প্রচারাভিযানগুলো দায়িত্বশীল পোষা প্রাণী পালন, টিকাদান সময়সূচি, প্রাণী কল্যাণ নীতিশাস্ত্র এবং নিরাপদ রিপোর্টিং অনুশীলন কভার করে, স্থানীয় চ্যাপ্টার, অংশীদার ক্লিনিক ও ডিজিটাল সম্পদের মাধ্যমে প্রদান করা হয়।",
        "সম্পদগুলো বহুভাষিক প্রবেশাধিকার মাথায় রেখে তৈরি করা হয়, যাতে শিক্ষা কমিউনিটিতে তাদের সবচেয়ে ভালো বোঝা ভাষায় পৌঁছায়, শুধু WPA যে ভাষায় ডিফল্টভাবে কাজ করে তা নয়।",
      ],
    },
    howItWorks: {
      eyebrow: "এটি কীভাবে কাজ করে",
      title: "প্রচারাভিযান ডিজাইন থেকে কমিউনিটি পৌঁছানো পর্যন্ত",
      subtitle: "যেখানে সবচেয়ে বেশি প্রয়োজন সেখানে শিক্ষা প্রদানের জন্য একটি পুনরাবৃত্তিযোগ্য মডেল।",
      steps: [
        { number: 1, title: "কমিউনিটির প্রয়োজন চিহ্নিত করুন", description: "স্থানীয় চ্যাপ্টার সচেতনতা, টিকাদান কভারেজ বা রিপোর্টিং অনুশীলনে ফাঁক মূল্যায়ন করে।" },
        { number: 2, title: "প্রচারাভিযান ডিজাইন করুন", description: "প্রচারাভিযানগুলো একটি নির্দিষ্ট বিষয়ের চারপাশে তৈরি করা হয় — টিকাদান, দত্তক বা নিরাপদ পরিচালনা।" },
        { number: 3, title: "অংশীদারদের মাধ্যমে প্রদান করুন", description: "ক্লিনিক, স্কুল ও কমিউনিটি গোষ্ঠী প্রচারাভিযান সামগ্রী ও অনুষ্ঠান বিতরণে সাহায্য করে।" },
        { number: 4, title: "বহুভাষিক সম্পদ প্রদান করুন", description: "শিক্ষামূলক সামগ্রী কমিউনিটির প্রয়োজনীয় ভাষায় উপলব্ধ করা হয়।" },
        { number: 5, title: "পৌঁছানো পরিমাপ ও প্রতিবেদন করুন", description: "প্রচারাভিযানের পৌঁছানো ও ফলাফল WPA-এর নেটওয়ার্কের মাধ্যমে ট্র্যাক ও প্রতিবেদন করা হয়।" },
      ],
    },
    participants: {
      eyebrow: "কে অংশগ্রহণ করতে পারে",
      title: "সচেতনতা কমিউনিটির প্রতিটি অংশে পৌঁছায়",
      subtitle: "শিক্ষা কর্মসূচি একাধিক অবদানকারী ও শ্রোতাদের মাথায় রেখে তৈরি করা।",
      items: [
        { title: "পোষা প্রাণীর মালিক", description: "দায়িত্বশীল মালিকানা অনুশীলন ও টিকাদান সময়সূচি শিখুন।", icon: "🏠" },
        { title: "স্কুল ও কমিউনিটি গোষ্ঠী", description: "সচেতনতা সেশন ও যুব শিক্ষা কর্মসূচি আয়োজন করে।", icon: "🏫" },
        { title: "পশুচিকিৎসা ক্লিনিক", description: "পরিচর্যার পাশাপাশি টিকাদান নির্দেশনা ও স্বাস্থ্য শিক্ষা প্রদান করে।", icon: "🏥" },
        { title: "স্বেচ্ছাসেবক", description: "সামগ্রী বিতরণ করে ও স্থানীয় সচেতনতা অনুষ্ঠানের নেতৃত্ব দেয়।", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "সুবিধা ও প্রভাব",
      title: "কেন সচেতনতা উদ্ধারের প্রয়োজন কমায়",
      subtitle: "প্রতিরোধ একা সংকট প্রতিক্রিয়ার চেয়ে বেশি কার্যকর ও মানবিক।",
      items: [
        { title: "কম পরিত্যাগের ঘটনা", description: "দায়িত্বশীল মালিকানা শিক্ষা পরিত্যাগের কারণ কমায়।", icon: "📉" },
        { title: "উচ্চতর টিকাদান কভারেজ", description: "সচেতনতা প্রচারাভিযান প্রতিরোধমূলক স্বাস্থ্য কর্মসূচিতে অংশগ্রহণ বাড়ায়।", icon: "💉" },
        { title: "নিরাপদ রিপোর্টিং", description: "যে কমিউনিটি উদ্ধার প্রক্রিয়া বোঝে তারা কেসগুলো আগে ও আরও সঠিকভাবে রিপোর্ট করে।", icon: "📍" },
        { title: "বৃহত্তর পৌঁছানো", description: "বহুভাষিক সম্পদ নিশ্চিত করে শিক্ষা ভাষার বাধা দ্বারা সীমাবদ্ধ নয়।", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "বিশ্বাস ও নিরাপত্তা",
      title: "যাচাইকৃত মানের ভিত্তিতে শিক্ষা",
      subtitle: "",
      items: [
        { title: "পশুচিকিৎসক-পর্যালোচিত বিষয়বস্তু", description: "স্বাস্থ্য ও টিকাদান নির্দেশনা যাচাইকৃত পশুচিকিৎসা অংশীদারদের দ্বারা পর্যালোচিত।", icon: "🩺" },
        { title: "স্থানীয়ভাবে খাপ খাওয়ানো প্রচারাভিযান", description: "চ্যাপ্টার স্থানীয় নিয়ম ও কমিউনিটি প্রেক্ষাপটে সামগ্রী খাপ খাওয়ায়।", icon: "🌍" },
        { title: "ট্র্যাক করা পৌঁছানো ও ফলাফল", description: "প্রচারাভিযানের প্রভাব পরিমাপ ও প্রতিবেদন করা হয়, অনুমান করা হয় না।", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "সম্পর্কিত কর্মসূচি",
      title: "সচেতনতার সাথে সংযুক্ত কর্মসূচি",
      items: [
        { title: "উদ্ধার", description: "আরও সচেতন কমিউনিটি বিপদের ঘটনা আগে রিপোর্ট করে।", icon: "🚑", href: "/rescue" },
        { title: "দত্তক", description: "শিক্ষা নতুন দত্তকগ্রহীতাদের দীর্ঘমেয়াদী সাফল্যের জন্য প্রস্তুত করতে সাহায্য করে।", icon: "🐾", href: "/adoption" },
        { title: "দান ও তহবিল সংগ্রহ", description: "প্রচারাভিযানগুলো স্বচ্ছ, ট্র্যাক করা দানের মাধ্যমে অর্থায়ন করা হয়।", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "আরও তথ্যসমৃদ্ধ, সহানুভূতিশীল কমিউনিটি গড়তে সাহায্য করুন",
      subtitle: "আপনার কমিউনিটিতে একটি সচেতনতা প্রচারাভিযান নিয়ে আসুন বা ইতিমধ্যে চলমান একটিকে সমর্থন করুন।",
      primaryLabel: "একটি প্রচারাভিযানে যোগ দিন",
      primaryHref: "/volunteers",
      secondaryLabel: "WPA-কে জানান",
      secondaryHref: "/contact",
    },
  },
};

// ─── AR (Arabic) ─────────────────────────────────────────────────────────────

const ar: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "ما نقوم به",
      title: "خمسة برامج منسقة، رسالة عالمية واحدة",
      subtitle: "تدير WPA مجموعة مترابطة من البرامج تغطي دورة حياة رعاية الحيوان بأكملها — من الوقاية والإنقاذ إلى التبني والتمويل والتوعية.",
      primaryLabel: "كن عضوًا",
      primaryHref: "/join",
      secondaryLabel: "تبرع الآن",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "كيف ترتبط البرامج ببعضها",
      title: "كل برنامج يحل جزءًا مختلفًا من نفس المشكلة",
      paragraphs: [
        "تفشل رعاية الحيوان عندما تكون الجهود مجزأة — عملية إنقاذ بلا مكان لإيواء الحيوان، تبرع بلا أثر واضح، حملة تطعيم بلا توعية عامة تدعمها.",
        "صُممت برامج WPA للعمل معًا: التوعية تقلل عدد الحيوانات في أزمة، والإنقاذ يستجيب بسرعة عند وقوع الأزمة، والتبني يمنح الحيوانات المُنقذة منزلًا دائمًا، والتمويل الشفاف عبر التبرعات يبقي كل برنامج قائمًا.",
        "يعمل كل برنامج وفق نفس معايير التحقق وتنسيق الفروع والشفافية الموضحة في التزاماتنا الخاصة بالحوكمة والثقة.",
      ],
    },
    programs: {
      eyebrow: "برامجنا",
      title: "استكشف كل برنامج",
      subtitle: "لكل برنامج صفحته المخصصة التي توضح كيفية عمله، ومن يمكنه المشاركة، وكيف يُتتبع أثره.",
      items: [
        { title: "التبني", description: "قوائم موثقة ومطابقة مسؤولة تربط الحيوانات المُنقذة بمنازل مُدقَّقة ومحبة.", icon: "🐾", href: "/adoption" },
        { title: "الإنقاذ", description: "بلاغات طارئة وتنسيق تطوعي للحيوانات المكروبة في أي مكان.", icon: "🚑", href: "/rescue" },
        { title: "التبرع وجمع التبرعات", description: "تمويل شفاف قائم على الحملات للعلاج والنقل والرعاية الطارئة.", icon: "❤️", href: "/donation" },
        { title: "التوعية والتعليم", description: "حملات مجتمعية حول الملكية المسؤولة والتطعيم ورعاية الحيوان.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "مستعد للمشاركة في برامج WPA؟",
      subtitle: "سواء أردت التبني، أو الإبلاغ عن إنقاذ، أو التبرع، أو نشر التوعية — هناك طريقة واضحة للبدء.",
      primaryLabel: "انضم إلى WPA",
      primaryHref: "/join",
      secondaryLabel: "كن شريكًا لنا",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "برنامج التبني",
      title: "تبني موثّق، من أول مطابقة إلى منزل دائم",
      subtitle: "يربط برنامج التبني في WPA الحيوانات المُنقذة بمتبنّين مُدقَّقين ومسؤولين من خلال عملية إدراج وتسليم موثقة.",
      primaryLabel: "تصفح الحيوانات المتاحة للتبني",
      primaryHref: "/adoption",
      secondaryLabel: "أدرج حيوانًا للتبني",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "كيف يعمل التبني في WPA",
      title: "مسار موثّق من الإنقاذ إلى منزل مسؤول",
      paragraphs: [
        "كل حيوان مدرج للتبني عبر WPA يأتي من مصدر موثّق — ملجأ شريك، أو فريق إنقاذ، أو مالك مسجّل — بحيث يعرف المتبنّون خلفية الحيوان وحالته الصحية وملاحظاته السلوكية قبل تقديم الطلب.",
        "التبني ليس معاملة — إنه مطابقة مدروسة. صُممت عملية WPA لحماية الحيوان والمتبني معًا، مما يقلل من خطر التخلي عن الحيوانات مجددًا أو وضعها في منازل غير مناسبة.",
        "الدعم لا ينتهي عند التسليم: تساعد موارد WPA لما بعد التبني أصحاب الحيوانات الجدد خلال الأسابيع والأشهر الأولى من الرعاية.",
      ],
    },
    howItWorks: {
      eyebrow: "كيف تعمل العملية",
      title: "من الإدراج الموثّق إلى التسليم الآمن",
      subtitle: "عملية ثابتة من خمس خطوات لكل تبني، بغض النظر عن الفرع أو المنطقة.",
      steps: [
        { number: 1, title: "إدراج موثّق للحيوان", description: "تقدم الملاجئ وفرق الإنقاذ والمالكون الحيوانات مع سجلات صحية وملاحظات سلوكية للإدراج." },
        { number: 2, title: "طلب المتبني", description: "يقدم المتبنّون المحتملون طلبًا يصف منزلهم وخبرتهم وتوقعاتهم." },
        { number: 3, title: "فحص المتبني", description: "تراجع WPA أو الملجأ الشريك الطلب، وقد تُجري فحصًا منزليًا أو تحقق من المراجع." },
        { number: 4, title: "تسليم آمن", description: "يشمل التسليم المنظم توثيقًا صحيًا وإحاطة رعاية وشروط تبني موقّعة." },
        { number: 5, title: "دعم ما بعد التبني", description: "متابعات دورية ووصول إلى الموارد البيطرية والسلوكية خلال الأشهر الأولى." },
      ],
    },
    participants: {
      eyebrow: "من يمكنه المشاركة",
      title: "التبني يشمل كل جزء من الشبكة",
      subtitle: "لكل مشارك دور محدد في الحفاظ على أمان ومساءلة عملية التبني.",
      items: [
        { title: "فرق الإنقاذ والملاجئ", description: "تدرج الحيوانات المُنقذة مع معلومات صحية وسلوكية موثقة.", icon: "🏠" },
        { title: "المالكون المسجّلون", description: "يعيدون توطين الحيوانات بمسؤولية عبر إدراج موثّق بدلًا من القنوات غير الرسمية.", icon: "🧑‍🤝‍🧑" },
        { title: "المتبنّون المحتملون", description: "يقدمون الطلب، ويكملون الفحص، ويحصلون على حيوان يطابق منزلهم وخبرتهم.", icon: "🐾" },
        { title: "الشركاء البيطريون", description: "يقدمون الفحوصات الصحية والتوثيق قبل التبني وبعده.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "الفوائد والأثر",
      title: "لماذا يهم التبني الموثّق",
      subtitle: "العملية المنظمة تنتج نتائج أفضل للحيوانات والمتبنّين والمجتمع الأوسع.",
      items: [
        { title: "حالات إعادة وتخلٍّ أقل", description: "الفحص يقلل من عدم التطابق الذي يؤدي إلى التخلي عن الحيوانات مجددًا.", icon: "✅" },
        { title: "بدايات أكثر صحة", description: "السجلات الصحية الموثقة تعني أن المتبنّين يعرفون الرعاية اللازمة من اليوم الأول.", icon: "🩺" },
        { title: "تخفيف عبء الملاجئ", description: "كل تبني ناجح يحرر مساحة في الملجأ لحيوان آخر بحاجة إليها.", icon: "🏠" },
        { title: "دعم مستمر", description: "لا يُترك المتبنّون الجدد وحدهم بعد التسليم — المساعدة متاحة عند ظهور الأسئلة.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "الثقة والأمان",
      title: "ضمانات مدمجة لكل عملية تبني",
      subtitle: "",
      items: [
        { title: "قوائم موثّقة فقط", description: "تُدرج الحيوانات فقط عبر ملاجئ أو فرق إنقاذ أو مالكين مسجّلين مُدقَّقين.", icon: "🔒" },
        { title: "فحص موثّق", description: "يُسجَّل كل طلب متبني وقرار فحص لضمان المساءلة.", icon: "📋" },
        { title: "تسليم منظم", description: "قائمة تحقق تسليم موحدة تحمي الحيوان والمتبني معًا.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "برامج ذات صلة",
      title: "برامج مرتبطة بالتبني",
      items: [
        { title: "الإنقاذ", description: "تبدأ العديد من الحيوانات القابلة للتبني رحلتها عبر شبكة الإنقاذ في WPA.", icon: "🚑", href: "/rescue" },
        { title: "التوعية والتعليم", description: "تعرّف على الملكية المسؤولة للحيوانات الأليفة قبل التبني وبعده.", icon: "📢", href: "/awareness" },
        { title: "التبرع وجمع التبرعات", description: "ادعم الملاجئ والعيادات التي تجعل التبني ممكنًا.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "مستعد لمنح حيوان مُنقذ منزلًا؟",
      subtitle: "ابدأ طلب تبني أو أدرج حيوانًا بحاجة إلى منزل اليوم.",
      primaryLabel: "ابدأ عملية التبني",
      primaryHref: "/join",
      secondaryLabel: "تواصل مع WPA",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "برنامج الإنقاذ",
      title: "استجابة سريعة للحيوانات المكروبة",
      subtitle: "تربط شبكة الإنقاذ في WPA بلاغات المواطنين بالمتطوعين والعيادات والملاجئ — منسقةً كل حالة من أول بلاغ حتى التعافي الكامل.",
      primaryLabel: "أبلغ عن حالة إنقاذ",
      primaryHref: "/rescue",
      secondaryLabel: "انضم إلى فريق إنقاذ",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "كيف يعمل الإنقاذ في WPA",
      title: "من بلاغ واحد إلى استجابة منسقة",
      paragraphs: [
        "غالبًا ما يجد المواطنون العاديون حيوانات مكروبة دون أن يعرفوا من يتصلون به أو ما الذي يحدث بعد ذلك. يهدف برنامج الإنقاذ في WPA لسد هذه الفجوة — بتحويل بلاغ واحد إلى استجابة منسقة وقابلة للتتبع.",
        "بمجرد الإبلاغ عن حالة، تُوجَّه إلى أقرب متطوع متاح أو عيادة شريكة، مع تسجيل تحديثات الحالة في كل مرحلة حتى يتمكن المبلّغون والمنسقون من رؤية التقدم في الوقت الفعلي.",
        "الإنقاذ لا ينتهي عند الالتقاط — تُتابع كل حالة عبر العلاج وإعادة التأهيل، وعند الاقتضاء، الانتقال إلى برنامج التبني.",
      ],
    },
    howItWorks: {
      eyebrow: "كيف تعمل العملية",
      title: "من بلاغ طارئ إلى التعافي",
      subtitle: "عملية منظمة وقابلة للتتبع لكل حالة، بغض النظر عن شدتها.",
      steps: [
        { number: 1, title: "الإبلاغ الطارئ", description: "يمكن لأي شخص الإبلاغ عن حيوان مكروب مع الموقع والوصف، في أي وقت." },
        { number: 2, title: "تنسيق المتطوعين والعيادات", description: "يُبلَّغ أقرب متطوع متاح أو عيادة شريكة ويُرسَل." },
        { number: 3, title: "تتبع الحالة", description: "تحصل كل حالة على معرف تتبع بحيث تكون حالتها مرئية من البلاغ حتى الحل." },
        { number: 4, title: "العلاج وإعادة التأهيل", description: "تقدم العيادات الشريكة العلاج الطبي ورعاية التعافي حسب الحاجة." },
        { number: 5, title: "تحديثات الحالة والنتيجة", description: "يتلقى المبلّغون والمنسقون تحديثات عبر التعافي أو التبني أو الإطلاق الآمن." },
      ],
    },
    participants: {
      eyebrow: "من يمكنه المشاركة",
      title: "الإنقاذ يعتمد على شبكة منسقة",
      subtitle: "تمر كل حالة عبر عدة أيدٍ، لكل منها مسؤولية واضحة.",
      items: [
        { title: "المواطنون والمبلّغون", description: "يبلّغون عن الحيوانات المكروبة ويقدمون معلومات أولية حاسمة.", icon: "📍" },
        { title: "المتطوعون", description: "يستجيبون للبلاغات وينقلون الحيوانات ويدعمون التنسيق الميداني.", icon: "🙌" },
        { title: "العيادات البيطرية", description: "تقدم العلاج الطارئ والتشخيص ورعاية إعادة التأهيل.", icon: "🏥" },
        { title: "الفروع المحلية", description: "تنسق المتطوعين والعيادات في منطقتها لاستجابة أسرع.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "الفوائد والأثر",
      title: "لماذا يهم الإنقاذ المنسق",
      subtitle: "الشبكة المنظمة تستجيب بشكل أسرع وأكثر موثوقية من الجهود المعزولة.",
      items: [
        { title: "أوقات استجابة أسرع", description: "توجيه البلاغات إلى أقرب فريق متاح يقلل زمن وصول المساعدة.", icon: "⏱️" },
        { title: "لا حالة تسقط دون متابعة", description: "معرّفات الحالات المتتبعة تعني متابعة كل بلاغ حتى الحل.", icon: "📋" },
        { title: "معدلات تعافٍ أعلى", description: "العلاج وإعادة التأهيل المنسقان يحسّنان نتائج الحيوانات المصابة.", icon: "🩺" },
        { title: "ثقة المجتمع", description: "تحديثات الحالة المرئية تبني الثقة بأن البلاغات تؤدي إلى إجراء حقيقي.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "الثقة والأمان",
      title: "المساءلة في كل مرحلة من مراحل الإنقاذ",
      subtitle: "",
      items: [
        { title: "مستجيبون موثّقون", description: "لا يُرسَل إلى الحالات النشطة سوى متطوعين وعيادات شريكة مُدقَّقين.", icon: "🔒" },
        { title: "تتبع شفاف للحالات", description: "لكل حالة وضع مرئي، من البلاغ حتى الحل.", icon: "📊" },
        { title: "علاج موثّق", description: "تُسجَّل الرعاية الطبية والنتائج لكل حيوان تم إنقاذه.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "برامج ذات صلة",
      title: "برامج مرتبطة بالإنقاذ",
      items: [
        { title: "التبني", description: "تنتقل الحيوانات المُعاد تأهيلها بلا مالك إلى برنامج التبني.", icon: "🐾", href: "/adoption" },
        { title: "التبرع وجمع التبرعات", description: "يُموَّل العلاج الطارئ والنقل من خلال تبرعات متتبعة.", icon: "❤️", href: "/donation" },
        { title: "التوعية والتعليم", description: "التوعية المجتمعية تساعد في الإبلاغ عن المزيد من الحالات مبكرًا.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "شاهدت حيوانًا مكروبًا؟ أبلغ الآن.",
      subtitle: "كل بلاغ مهم. انضم إلى شبكة الإنقاذ لدينا كمتطوع أو ادعمها بتبرع.",
      primaryLabel: "أبلغ عن حالة إنقاذ",
      primaryHref: "/rescue",
      secondaryLabel: "كن متطوعًا",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "برنامج التبرع وجمع التبرعات",
      title: "كل تبرع متتبَّع، كل أثر مُبلَّغ عنه",
      subtitle: "تموّل WPA الإنقاذ والعلاج والتبني والتوعية من خلال جمع تبرعات شفاف قائم على الحملات — مع تقارير عامة حول كيفية استخدام كل مساهمة.",
      primaryLabel: "تبرع الآن",
      primaryHref: "/donation",
      secondaryLabel: "عرض التقارير العامة",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "كيف تعمل التبرعات في WPA",
      title: "تمويل بمسار واضح وقابل للتتبع",
      paragraphs: [
        "توجَّه التبرعات إلى WPA لأغراض محددة — إنقاذ طارئ، علاج طبي، حملات تطعيم، دعم الملاجئ، أو عمليات عامة — بحيث يعرف المتبرعون بالضبط ما تدعمه مساهمتهم.",
        "يُجمَع الكثير من التبرعات من خلال حملات جمع تبرعات مرتبطة بحالة أو فرع أو مبادرة محددة، مع تقدم ونتائج مرئية للمساهمين.",
        "يولّد كل تبرع إيصالًا، ويُجمَّع استخدام الأموال في تقارير عامة بحيث يمكن للشبكة بأكملها — المتبرعون والشركاء والجمهور — مراجعة كيفية إنفاق الموارد.",
      ],
    },
    howItWorks: {
      eyebrow: "كيف تعمل العملية",
      title: "من المساهمة إلى التقرير العام",
      subtitle: "مسار شفاف لكل تبرع، سواء كان لمرة واحدة أو متكررًا أو قائمًا على حملة.",
      steps: [
        { number: 1, title: "اختر غرضًا أو حملة", description: "يختار المتبرعون مجال برنامج أو حملة نشطة أو صندوقًا عامًا لدعمه." },
        { number: 2, title: "ساهم بأمان", description: "تُعالَج التبرعات ويُصدَر إيصال لكل مساهمة." },
        { number: 3, title: "تخصيص الأموال وتتبعها", description: "تُسجَّل المساهمات مقابل البرنامج أو الحملة المحددة التي تدعمها." },
        { number: 4, title: "تنفيذ البرامج", description: "تُصرَف الأموال لأنشطة الإنقاذ أو العلاج أو التبني أو التوعية." },
        { number: 5, title: "تقارير الأثر العامة", description: "يُنشَر استخدام الأموال والنتائج في تقارير عامة منتظمة." },
      ],
    },
    participants: {
      eyebrow: "من يمكنه المشاركة",
      title: "تمويل رعاية الحيوان، معًا",
      subtitle: "يشمل التبرع وجمع التبرعات المتبرعين ومنظمي الحملات والبرامج التي يدعمونها.",
      items: [
        { title: "المتبرعون الأفراد", description: "يقدمون تبرعات لمرة واحدة أو متكررة للبرامج أو الحملات.", icon: "💛" },
        { title: "المتبرعون المؤسسيون", description: "تموّل الشركات والمؤسسات برامج وشراكات واسعة النطاق.", icon: "🏢" },
        { title: "جامعو تبرعات الفروع", description: "تدير الفروع المحلية حملات للاحتياجات وحالات الطوارئ الإقليمية.", icon: "🌍" },
        { title: "المنظمات الشريكة", description: "تتقدم المنظمات غير الحكومية والعيادات لطلب تمويل برامج مرتبط بمبادرات محددة.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "الفوائد والأثر",
      title: "لماذا يهم جمع التبرعات الشفاف",
      subtitle: "الثقة في استخدام الأموال هي أساس برنامج تبرعات مستدام.",
      items: [
        { title: "شفافية كاملة", description: "يمكن للمتبرعين رؤية بالضبط أي البرامج والحالات التي دعمتها مساهمتهم.", icon: "🔍" },
        { title: "أثر برامج أعلى", description: "التخصيص المتتبع يضمن وصول الأموال إلى حيث تكون الحاجة الأكبر.", icon: "📈" },
        { title: "إيصالات موثّقة", description: "تُوثَّق كل مساهمة لسجلات المتبرع الخاصة.", icon: "🧾" },
        { title: "مساءلة عامة", description: "التقارير المنتظمة تُبقي الشبكة بأكملها مسؤولة أمام المتبرعين والشركاء.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "الثقة والأمان",
      title: "الشفافية مدمجة في كل مساهمة",
      subtitle: "",
      items: [
        { title: "إيصالات المتبرع", description: "يولّد كل تبرع إيصالًا يؤكد المبلغ والغرض والتاريخ.", icon: "🧾" },
        { title: "تخصيص أموال متتبَّع", description: "تُسجَّل المساهمات مقابل البرنامج أو الحملة المحددة التي تدعمها.", icon: "📊" },
        { title: "تقارير أثر عامة", description: "يُنشَر استخدام الأموال والنتائج للمتبرعين والشركاء والجمهور.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "برامج ذات صلة",
      title: "برامج ممولة من خلال التبرعات",
      items: [
        { title: "الإنقاذ", description: "تُموَّل الاستجابة الطارئة والعلاج من خلال التبرعات.", icon: "🚑", href: "/rescue" },
        { title: "التبني", description: "تعتمد رعاية الملاجئ والفحوصات الطبية قبل التبني على تمويل المتبرعين.", icon: "🐾", href: "/adoption" },
        { title: "التوعية والتعليم", description: "تُموَّل حملات التطعيم والتعليم من خلال التبرعات.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "موّل برامج رعاية حيوان موثّقة وشفافة",
      subtitle: "كل مساهمة تُتتبع، ويُبلَّغ عنها، وتُوجَّه إلى البرامج الأكثر احتياجًا.",
      primaryLabel: "تبرع الآن",
      primaryHref: "/donation",
      secondaryLabel: "عرض التقارير العامة",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "برنامج التوعية والتعليم",
      title: "بناء ثقافة ملكية مسؤولة ورحيمة للحيوانات الأليفة",
      subtitle: "يثقّف برنامج التوعية في WPA المجتمعات حول الملكية المسؤولة للحيوانات الأليفة والتطعيم ورعاية الحيوان — مما يقلل عدد الحيوانات في أزمة قبل وقوعها.",
      primaryLabel: "استكشف الموارد",
      primaryHref: "/awareness",
      secondaryLabel: "انضم إلى حملة محلية",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "كيف تعمل التوعية في WPA",
      title: "الوقاية من خلال التعليم",
      paragraphs: [
        "يمكن الوقاية من العديد من أزمات رعاية الحيوان — التخلي، تفشي الأمراض، التعامل غير الآمن — من خلال التعليم الأساسي. يهدف برنامج التوعية في WPA للوصول إلى المجتمعات قبل وقوع الأزمة، لا مجرد الاستجابة بعد ذلك.",
        "تغطي الحملات الملكية المسؤولة للحيوانات الأليفة، وجداول التطعيم، وأخلاقيات رعاية الحيوان، وممارسات الإبلاغ الآمنة، وتُقدَّم عبر الفروع المحلية والعيادات الشريكة والموارد الرقمية.",
        "تُطوَّر الموارد مع مراعاة الوصول متعدد اللغات، بحيث يصل التعليم إلى المجتمعات باللغة التي يفهمونها أفضل، لا فقط اللغات التي تعمل بها WPA افتراضيًا.",
      ],
    },
    howItWorks: {
      eyebrow: "كيف تعمل العملية",
      title: "من تصميم الحملة إلى وصولها للمجتمع",
      subtitle: "نموذج قابل للتكرار لتقديم التعليم حيث تشتد الحاجة إليه.",
      steps: [
        { number: 1, title: "تحديد احتياجات المجتمع", description: "تقيّم الفروع المحلية الفجوات في التوعية أو تغطية التطعيم أو ممارسات الإبلاغ." },
        { number: 2, title: "تصميم الحملة", description: "تُبنى الحملات حول موضوع محدد — التطعيم أو التبني أو التعامل الآمن." },
        { number: 3, title: "التقديم عبر الشركاء", description: "تساعد العيادات والمدارس والمجموعات المجتمعية في توزيع مواد الحملة وفعالياتها." },
        { number: 4, title: "توفير موارد متعددة اللغات", description: "تُتاح المواد التعليمية باللغات التي يحتاجها المجتمع." },
        { number: 5, title: "قياس الوصول والإبلاغ عنه", description: "تُتبَّع نتائج ووصول الحملة ويُبلَّغ عنها عبر شبكة WPA." },
      ],
    },
    participants: {
      eyebrow: "من يمكنه المشاركة",
      title: "التوعية تصل إلى كل جزء من المجتمع",
      subtitle: "بُنيت برامج التعليم مع مراعاة عدة مساهمين وجماهير.",
      items: [
        { title: "أصحاب الحيوانات الأليفة", description: "يتعلمون ممارسات الملكية المسؤولة وجداول التطعيم.", icon: "🏠" },
        { title: "المدارس والمجموعات المجتمعية", description: "تستضيف جلسات توعية وبرامج تعليم للشباب.", icon: "🏫" },
        { title: "العيادات البيطرية", description: "تقدم إرشادات التطعيم والتثقيف الصحي إلى جانب الرعاية.", icon: "🏥" },
        { title: "المتطوعون", description: "يوزعون المواد ويقودون فعاليات التوعية المحلية.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "الفوائد والأثر",
      title: "لماذا تقلل التوعية الحاجة إلى الإنقاذ",
      subtitle: "الوقاية أكثر فعالية وإنسانية من الاستجابة للأزمات وحدها.",
      items: [
        { title: "حالات تخلٍّ أقل", description: "تعليم الملكية المسؤولة يقلل من دوافع التخلي.", icon: "📉" },
        { title: "تغطية تطعيم أعلى", description: "حملات التوعية تزيد المشاركة في برامج الصحة الوقائية.", icon: "💉" },
        { title: "إبلاغ أكثر أمانًا", description: "المجتمعات التي تفهم عملية الإنقاذ تبلّغ عن الحالات بشكل أبكر وأدق.", icon: "📍" },
        { title: "وصول أوسع", description: "الموارد متعددة اللغات تضمن ألا يكون التعليم محدودًا بحواجز اللغة.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "الثقة والأمان",
      title: "تعليم مبني على معايير موثّقة",
      subtitle: "",
      items: [
        { title: "محتوى مراجَع بيطريًا", description: "يراجع الشركاء البيطريون الموثّقون إرشادات الصحة والتطعيم.", icon: "🩺" },
        { title: "حملات مكيّفة محليًا", description: "تكيّف الفروع المواد وفق اللوائح المحلية والسياق المجتمعي.", icon: "🌍" },
        { title: "وصول ونتائج متتبَّعة", description: "يُقاس أثر الحملة ويُبلَّغ عنه، لا يُفترض.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "برامج ذات صلة",
      title: "برامج مرتبطة بالتوعية",
      items: [
        { title: "الإنقاذ", description: "المجتمعات الأكثر وعيًا تبلّغ عن حالات الكرب مبكرًا.", icon: "🚑", href: "/rescue" },
        { title: "التبني", description: "التعليم يساعد في تهيئة المتبنّين الجدد لنجاح طويل الأمد.", icon: "🐾", href: "/adoption" },
        { title: "التبرع وجمع التبرعات", description: "تُموَّل الحملات من خلال تبرعات شفافة ومتتبَّعة.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "ساعد في بناء مجتمع أكثر وعيًا ورحمة",
      subtitle: "أطلق حملة توعية في مجتمعك أو ادعم واحدة جارية بالفعل.",
      primaryLabel: "انضم إلى حملة",
      primaryHref: "/volunteers",
      secondaryLabel: "تواصل مع WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── FR (French) ─────────────────────────────────────────────────────────────

const fr: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "Ce que nous faisons",
      title: "Cinq programmes coordonnés, une mission mondiale",
      subtitle: "WPA gère un ensemble connecté de programmes couvrant l'intégralité du cycle de vie du bien-être animal — de la prévention et du sauvetage à l'adoption, au financement et à l'éducation.",
      primaryLabel: "Devenir membre",
      primaryHref: "/join",
      secondaryLabel: "Faire un don maintenant",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Comment les programmes se rejoignent",
      title: "Chaque programme résout une part différente du même problème",
      paragraphs: [
        "Le bien-être animal échoue lorsque les efforts sont fragmentés — un sauvetage sans endroit où placer un animal, un don sans impact visible, une campagne de vaccination sans sensibilisation publique derrière elle.",
        "Les programmes de WPA sont conçus pour fonctionner ensemble : la sensibilisation réduit le nombre d'animaux en crise, le sauvetage réagit rapidement lorsqu'une crise survient, l'adoption offre un foyer permanent aux animaux sauvés, et le financement transparent par les dons maintient chaque programme en activité.",
        "Chaque programme fonctionne selon les mêmes normes de vérification, de coordination des sections et de transparence décrites dans nos engagements de gouvernance et de confiance.",
      ],
    },
    programs: {
      eyebrow: "Nos programmes",
      title: "Découvrez chaque programme",
      subtitle: "Chaque programme dispose de sa propre page dédiée expliquant son fonctionnement, qui peut y participer, et comment l'impact est mesuré.",
      items: [
        { title: "Adoption", description: "Des annonces vérifiées et une mise en relation responsable relient les animaux sauvés à des foyers contrôlés et aimants.", icon: "🐾", href: "/adoption" },
        { title: "Sauvetage", description: "Signalement d'urgence et coordination des bénévoles pour les animaux en détresse, partout.", icon: "🚑", href: "/rescue" },
        { title: "Dons et collecte de fonds", description: "Un financement transparent, basé sur des campagnes, pour le traitement, le transport et les soins d'urgence.", icon: "❤️", href: "/donation" },
        { title: "Sensibilisation et éducation", description: "Des campagnes communautaires sur la possession responsable, la vaccination et le bien-être animal.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Prêt à participer aux programmes de WPA ?",
      subtitle: "Que vous souhaitiez adopter, signaler un sauvetage, faire un don ou sensibiliser — il existe une manière claire de commencer.",
      primaryLabel: "Rejoindre WPA",
      primaryHref: "/join",
      secondaryLabel: "Devenir partenaire",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "Programme d'adoption",
      title: "Une adoption vérifiée, de la première mise en relation au foyer définitif",
      subtitle: "Le programme d'adoption de WPA relie les animaux sauvés à des adoptants contrôlés et responsables grâce à un processus d'annonce et de remise vérifié.",
      primaryLabel: "Parcourir les animaux à adopter",
      primaryHref: "/adoption",
      secondaryLabel: "Proposer un animal à l'adoption",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "Comment fonctionne l'adoption chez WPA",
      title: "Un parcours vérifié du sauvetage à un foyer responsable",
      paragraphs: [
        "Chaque animal proposé à l'adoption via WPA provient d'une source vérifiée — un refuge partenaire, une équipe de sauvetage ou un propriétaire enregistré — afin que les adoptants connaissent l'historique, l'état de santé et les notes comportementales de l'animal avant de postuler.",
        "L'adoption n'est pas une transaction — c'est une mise en relation contrôlée. Le processus de WPA est conçu pour protéger à la fois l'animal et l'adoptant, réduisant le risque d'abandon répété ou de placement dans un foyer inadapté.",
        "Le soutien ne s'arrête pas à la remise : les ressources post-adoption de WPA aident les nouveaux propriétaires pendant les premières semaines et les premiers mois de soins.",
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "De l'annonce vérifiée à la remise en toute sécurité",
      subtitle: "Un processus cohérent en cinq étapes pour chaque adoption, quelle que soit la section ou la région.",
      steps: [
        { number: 1, title: "Annonce d'animal vérifiée", description: "Refuges, équipes de sauvetage et propriétaires soumettent des animaux avec dossiers de santé et notes comportementales pour l'annonce." },
        { number: 2, title: "Candidature de l'adoptant", description: "Les adoptants potentiels soumettent une candidature décrivant leur foyer, leur expérience et leurs attentes." },
        { number: 3, title: "Contrôle de l'adoptant", description: "WPA ou le refuge partenaire examine la candidature, et peut effectuer une visite du domicile ou une vérification de références." },
        { number: 4, title: "Remise sécurisée", description: "Une remise structurée comprend la documentation de santé, un briefing sur les soins et des conditions d'adoption signées." },
        { number: 5, title: "Accompagnement post-adoption", description: "Des suivis réguliers et un accès aux ressources vétérinaires et comportementales pendant les premiers mois." },
      ],
    },
    participants: {
      eyebrow: "Qui peut participer",
      title: "L'adoption implique chaque partie du réseau",
      subtitle: "Chaque participant a un rôle défini pour garantir la sécurité et la responsabilité du processus d'adoption.",
      items: [
        { title: "Équipes de sauvetage et refuges", description: "Proposent des animaux sauvés avec des informations de santé et de comportement vérifiées.", icon: "🏠" },
        { title: "Propriétaires enregistrés", description: "Replacent des animaux de façon responsable via une annonce vérifiée plutôt que des canaux informels.", icon: "🧑‍🤝‍🧑" },
        { title: "Adoptants potentiels", description: "Postulent, réalisent le contrôle et reçoivent un animal adapté à leur foyer et à leur expérience.", icon: "🐾" },
        { title: "Partenaires vétérinaires", description: "Fournissent des bilans de santé et de la documentation avant et après l'adoption.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "Bénéfices et impact",
      title: "Pourquoi l'adoption vérifiée est importante",
      subtitle: "Un processus structuré produit de meilleurs résultats pour les animaux, les adoptants et la communauté au sens large.",
      items: [
        { title: "Moins de retours et de nouveaux abandons", description: "Le contrôle réduit les mauvaises adéquations qui conduisent à l'abandon répété des animaux.", icon: "✅" },
        { title: "Des débuts plus sains", description: "Les dossiers de santé vérifiés permettent aux adoptants de connaître dès le premier jour les soins nécessaires.", icon: "🩺" },
        { title: "Soulagement de la capacité des refuges", description: "Chaque adoption réussie libère une place au refuge pour le prochain animal dans le besoin.", icon: "🏠" },
        { title: "Accompagnement continu", description: "Les nouveaux adoptants ne sont pas laissés seuls après la remise — de l'aide est disponible en cas de questions.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Confiance et sécurité",
      title: "Des garanties intégrées pour chaque adoption",
      subtitle: "",
      items: [
        { title: "Annonces vérifiées uniquement", description: "Les animaux sont proposés uniquement par des refuges, équipes de sauvetage ou propriétaires enregistrés contrôlés.", icon: "🔒" },
        { title: "Contrôle documenté", description: "Chaque candidature d'adoptant et décision de contrôle est enregistrée à des fins de responsabilisation.", icon: "📋" },
        { title: "Remise structurée", description: "Une liste de contrôle standard de remise protège à la fois l'animal et l'adoptant.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Programmes liés",
      title: "Programmes liés à l'adoption",
      items: [
        { title: "Sauvetage", description: "De nombreux animaux adoptables commencent leur parcours via le réseau de sauvetage de WPA.", icon: "🚑", href: "/rescue" },
        { title: "Sensibilisation et éducation", description: "Renseignez-vous sur la possession responsable avant et après l'adoption.", icon: "📢", href: "/awareness" },
        { title: "Dons et collecte de fonds", description: "Soutenez les refuges et cliniques qui rendent l'adoption possible.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Prêt à offrir un foyer à un animal sauvé ?",
      subtitle: "Commencez une demande d'adoption ou proposez un animal ayant besoin d'un foyer dès aujourd'hui.",
      primaryLabel: "Démarrer le processus d'adoption",
      primaryHref: "/join",
      secondaryLabel: "Contacter WPA",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "Programme de sauvetage",
      title: "Réponse rapide pour les animaux en détresse",
      subtitle: "Le réseau de sauvetage de WPA relie les signalements citoyens aux bénévoles, cliniques et refuges — coordonnant chaque cas du premier signalement au rétablissement complet.",
      primaryLabel: "Signaler un sauvetage",
      primaryHref: "/rescue",
      secondaryLabel: "Rejoindre une équipe de sauvetage",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Comment fonctionne le sauvetage chez WPA",
      title: "D'un simple signalement à une réponse coordonnée",
      paragraphs: [
        "Les animaux en détresse sont souvent trouvés par de simples citoyens qui ne savent pas qui contacter ni ce qui se passe ensuite. Le programme de sauvetage de WPA existe pour combler cette lacune — transformant un simple signalement en une réponse coordonnée et traçable.",
        "Une fois un cas signalé, il est acheminé vers le bénévole disponible le plus proche ou une clinique partenaire, avec des mises à jour de statut enregistrées à chaque étape afin que les signaleurs et les coordinateurs puissent suivre les progrès en temps réel.",
        "Le sauvetage ne s'arrête pas à la prise en charge — chaque cas est suivi tout au long du traitement, de la réhabilitation et, le cas échéant, de la transition vers le programme d'adoption.",
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "Du signalement d'urgence au rétablissement",
      subtitle: "Un processus structuré et traçable pour chaque cas, quelle que soit sa gravité.",
      steps: [
        { number: 1, title: "Signalement d'urgence", description: "N'importe qui peut signaler un animal en détresse avec un lieu et une description, à tout moment." },
        { number: 2, title: "Coordination bénévoles et clinique", description: "Le bénévole disponible le plus proche ou la clinique partenaire est averti et dépêché." },
        { number: 3, title: "Suivi du cas", description: "Chaque cas reçoit un identifiant de suivi afin que son statut soit visible du signalement à la résolution." },
        { number: 4, title: "Traitement et réhabilitation", description: "Les cliniques partenaires fournissent un traitement médical et des soins de rétablissement selon les besoins." },
        { number: 5, title: "Mises à jour de statut et résultat", description: "Les signaleurs et les coordinateurs reçoivent des mises à jour jusqu'au rétablissement, à l'adoption ou à la remise en liberté en toute sécurité." },
      ],
    },
    participants: {
      eyebrow: "Qui peut participer",
      title: "Le sauvetage repose sur un réseau coordonné",
      subtitle: "Chaque cas passe par plusieurs mains, chacune ayant une responsabilité claire.",
      items: [
        { title: "Citoyens et signaleurs", description: "Signalent les animaux en détresse et fournissent des informations initiales cruciales.", icon: "📍" },
        { title: "Bénévoles", description: "Répondent aux signalements, transportent les animaux et soutiennent la coordination sur le terrain.", icon: "🙌" },
        { title: "Cliniques vétérinaires", description: "Fournissent des soins d'urgence, un diagnostic et des soins de réhabilitation.", icon: "🏥" },
        { title: "Sections locales", description: "Coordonnent les bénévoles et les cliniques de leur région pour une réponse plus rapide.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "Bénéfices et impact",
      title: "Pourquoi le sauvetage coordonné est important",
      subtitle: "Un réseau structuré répond plus rapidement et de façon plus fiable que des efforts isolés.",
      items: [
        { title: "Temps de réponse plus rapides", description: "Acheminer les signalements vers l'équipe disponible la plus proche réduit le délai d'assistance.", icon: "⏱️" },
        { title: "Aucun cas n'est abandonné", description: "Les identifiants de cas suivis garantissent que chaque signalement est suivi jusqu'à sa résolution.", icon: "📋" },
        { title: "Taux de rétablissement plus élevés", description: "Un traitement et une réhabilitation coordonnés améliorent les résultats pour les animaux blessés.", icon: "🩺" },
        { title: "Confiance de la communauté", description: "Des mises à jour de statut visibles renforcent la confiance que les signalements mènent à une action réelle.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Confiance et sécurité",
      title: "Responsabilisation à chaque étape d'un sauvetage",
      subtitle: "",
      items: [
        { title: "Intervenants vérifiés", description: "Seuls des bénévoles contrôlés et des cliniques partenaires sont dépêchés sur les cas actifs.", icon: "🔒" },
        { title: "Suivi transparent des cas", description: "Chaque cas dispose d'un statut visible, du signalement à la résolution.", icon: "📊" },
        { title: "Traitement documenté", description: "Les soins médicaux et les résultats sont enregistrés pour chaque animal sauvé.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "Programmes liés",
      title: "Programmes liés au sauvetage",
      items: [
        { title: "Adoption", description: "Les animaux réhabilités sans propriétaire intègrent le programme d'adoption.", icon: "🐾", href: "/adoption" },
        { title: "Dons et collecte de fonds", description: "Le traitement d'urgence et le transport sont financés par des dons suivis.", icon: "❤️", href: "/donation" },
        { title: "Sensibilisation et éducation", description: "La sensibilisation communautaire aide à signaler davantage de cas plus tôt.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Vous voyez un animal en détresse ? Signalez-le maintenant.",
      subtitle: "Chaque signalement compte. Rejoignez notre réseau de sauvetage en tant que bénévole ou soutenez-le par un don.",
      primaryLabel: "Signaler un sauvetage",
      primaryHref: "/rescue",
      secondaryLabel: "Devenir bénévole",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "Programme de dons et de collecte de fonds",
      title: "Chaque don suivi, chaque impact rapporté",
      subtitle: "WPA finance le sauvetage, le traitement, l'adoption et la sensibilisation grâce à une collecte de fonds transparente, basée sur des campagnes — avec des rapports publics sur l'utilisation de chaque contribution.",
      primaryLabel: "Faire un don maintenant",
      primaryHref: "/donation",
      secondaryLabel: "Voir les rapports publics",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Comment fonctionnent les dons chez WPA",
      title: "Un financement au parcours visible et traçable",
      paragraphs: [
        "Les dons à WPA sont dirigés vers des objectifs précis — sauvetage d'urgence, traitement médical, campagnes de vaccination, soutien aux refuges ou opérations générales — afin que les donateurs sachent exactement ce que soutient leur contribution.",
        "De nombreux dons sont collectés via des campagnes de financement, liées à un cas, une section ou une initiative spécifique, avec des progrès et des résultats visibles pour les contributeurs.",
        "Chaque don génère un reçu, et l'utilisation des fonds est agrégée dans des rapports publics afin que l'ensemble du réseau — donateurs, partenaires et public — puisse examiner comment les ressources sont dépensées.",
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "De la contribution au rapport public",
      subtitle: "Un parcours transparent pour chaque don, qu'il soit ponctuel, récurrent ou lié à une campagne.",
      steps: [
        { number: 1, title: "Choisir un objectif ou une campagne", description: "Les donateurs sélectionnent un domaine de programme, une campagne active ou un fonds général à soutenir." },
        { number: 2, title: "Contribuer en toute sécurité", description: "Les dons sont traités et un reçu est délivré pour chaque contribution." },
        { number: 3, title: "Fonds alloués et suivis", description: "Les contributions sont enregistrées par rapport au programme ou à la campagne spécifique qu'elles soutiennent." },
        { number: 4, title: "Programmes réalisés", description: "Les fonds sont décaissés vers les activités de sauvetage, de traitement, d'adoption ou de sensibilisation." },
        { number: 5, title: "Rapports publics d'impact", description: "L'utilisation des fonds et les résultats sont publiés dans des rapports publics réguliers." },
      ],
    },
    participants: {
      eyebrow: "Qui peut participer",
      title: "Financer le bien-être animal, ensemble",
      subtitle: "Les dons et la collecte de fonds impliquent les donateurs, les organisateurs de campagnes et les programmes qu'ils soutiennent.",
      items: [
        { title: "Donateurs individuels", description: "Contribuent par des dons ponctuels ou récurrents aux programmes ou campagnes.", icon: "💛" },
        { title: "Donateurs institutionnels", description: "Les entreprises et fondations financent des programmes et partenariats à grande échelle.", icon: "🏢" },
        { title: "Collecteurs de fonds des sections", description: "Les sections locales mènent des campagnes pour les besoins et urgences régionaux.", icon: "🌍" },
        { title: "Organisations partenaires", description: "Les ONG et cliniques sollicitent un financement de programme lié à des initiatives spécifiques.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "Bénéfices et impact",
      title: "Pourquoi la collecte de fonds transparente est importante",
      subtitle: "La confiance dans l'utilisation des fonds est le fondement d'un programme de dons durable.",
      items: [
        { title: "Visibilité totale", description: "Les donateurs peuvent voir exactement quels programmes et cas leur contribution a soutenus.", icon: "🔍" },
        { title: "Impact accru des programmes", description: "L'allocation suivie garantit que les fonds vont là où ils sont le plus nécessaires.", icon: "📈" },
        { title: "Reçus vérifiés", description: "Chaque contribution est documentée pour les propres dossiers du donateur.", icon: "🧾" },
        { title: "Responsabilité publique", description: "Des rapports réguliers maintiennent l'ensemble du réseau responsable envers les donateurs et partenaires.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "Confiance et sécurité",
      title: "La transparence intégrée à chaque contribution",
      subtitle: "",
      items: [
        { title: "Reçus de donateurs", description: "Chaque don génère un reçu confirmant le montant, l'objectif et la date.", icon: "🧾" },
        { title: "Allocation des fonds suivie", description: "Les contributions sont enregistrées par rapport au programme ou à la campagne spécifique qu'elles soutiennent.", icon: "📊" },
        { title: "Rapports publics d'impact", description: "L'utilisation des fonds et les résultats sont publiés pour les donateurs, les partenaires et le public.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Programmes liés",
      title: "Programmes financés grâce aux dons",
      items: [
        { title: "Sauvetage", description: "La réponse d'urgence et le traitement sont financés par des dons.", icon: "🚑", href: "/rescue" },
        { title: "Adoption", description: "Les soins en refuge et les bilans médicaux avant l'adoption reposent sur le financement des donateurs.", icon: "🐾", href: "/adoption" },
        { title: "Sensibilisation et éducation", description: "Les campagnes de vaccination et d'éducation sont financées par des dons.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Financez des programmes de bien-être animal vérifiés et transparents",
      subtitle: "Chaque contribution est suivie, rapportée et dirigée vers les programmes qui en ont le plus besoin.",
      primaryLabel: "Faire un don maintenant",
      primaryHref: "/donation",
      secondaryLabel: "Voir les rapports publics",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "Programme de sensibilisation et d'éducation",
      title: "Bâtir une culture de possession animale responsable et compatissante",
      subtitle: "Le programme de sensibilisation de WPA éduque les communautés sur la possession responsable des animaux, la vaccination et le bien-être animal — réduisant le nombre d'animaux en crise avant qu'elle ne survienne.",
      primaryLabel: "Explorer les ressources",
      primaryHref: "/awareness",
      secondaryLabel: "Rejoindre une campagne locale",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Comment fonctionne la sensibilisation chez WPA",
      title: "La prévention par l'éducation",
      paragraphs: [
        "De nombreuses crises de bien-être animal — abandon, épidémies, manipulation dangereuse — sont évitables grâce à une éducation de base. Le programme de sensibilisation de WPA existe pour atteindre les communautés avant qu'une crise ne survienne, pas seulement pour réagir après.",
        "Les campagnes couvrent la possession responsable d'animaux, les calendriers de vaccination, l'éthique du bien-être animal et les pratiques de signalement sécurisées, diffusées par les sections locales, les cliniques partenaires et les ressources numériques.",
        "Les ressources sont conçues avec un accès multilingue à l'esprit, afin que l'éducation atteigne les communautés dans la langue qu'elles comprennent le mieux, et non uniquement les langues dans lesquelles WPA opère par défaut.",
      ],
    },
    howItWorks: {
      eyebrow: "Comment ça marche",
      title: "De la conception de campagne à la portée communautaire",
      subtitle: "Un modèle reproductible pour dispenser l'éducation là où elle est le plus nécessaire.",
      steps: [
        { number: 1, title: "Identifier les besoins de la communauté", description: "Les sections locales évaluent les lacunes en matière de sensibilisation, de couverture vaccinale ou de pratiques de signalement." },
        { number: 2, title: "Concevoir la campagne", description: "Les campagnes sont construites autour d'un sujet précis — vaccination, adoption ou manipulation sécurisée." },
        { number: 3, title: "Diffuser via des partenaires", description: "Cliniques, écoles et groupes communautaires aident à distribuer le matériel et les événements de campagne." },
        { number: 4, title: "Fournir des ressources multilingues", description: "Les supports éducatifs sont mis à disposition dans les langues dont la communauté a besoin." },
        { number: 5, title: "Mesurer et rapporter la portée", description: "La portée et les résultats de la campagne sont suivis et rapportés via le réseau de WPA." },
      ],
    },
    participants: {
      eyebrow: "Qui peut participer",
      title: "La sensibilisation touche chaque partie de la communauté",
      subtitle: "Les programmes éducatifs sont conçus en tenant compte de multiples contributeurs et publics.",
      items: [
        { title: "Propriétaires d'animaux", description: "Apprennent les pratiques de possession responsable et les calendriers de vaccination.", icon: "🏠" },
        { title: "Écoles et groupes communautaires", description: "Organisent des sessions de sensibilisation et des programmes d'éducation des jeunes.", icon: "🏫" },
        { title: "Cliniques vétérinaires", description: "Dispensent des conseils de vaccination et une éducation à la santé en parallèle des soins.", icon: "🏥" },
        { title: "Bénévoles", description: "Distribuent le matériel et animent les événements de sensibilisation locaux.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "Bénéfices et impact",
      title: "Pourquoi la sensibilisation réduit le besoin de sauvetage",
      subtitle: "La prévention est plus efficace, et plus humaine, que la réponse aux crises seule.",
      items: [
        { title: "Moins de cas d'abandon", description: "L'éducation à la possession responsable réduit les facteurs d'abandon.", icon: "📉" },
        { title: "Couverture vaccinale plus élevée", description: "Les campagnes de sensibilisation augmentent la participation aux programmes de santé préventive.", icon: "💉" },
        { title: "Signalement plus sûr", description: "Les communautés qui comprennent le processus de sauvetage signalent les cas plus tôt et plus précisément.", icon: "📍" },
        { title: "Portée plus large", description: "Les ressources multilingues garantissent que l'éducation n'est pas limitée par les barrières linguistiques.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "Confiance et sécurité",
      title: "Une éducation fondée sur des normes vérifiées",
      subtitle: "",
      items: [
        { title: "Contenu validé par des vétérinaires", description: "Les conseils de santé et de vaccination sont examinés par des partenaires vétérinaires vérifiés.", icon: "🩺" },
        { title: "Campagnes adaptées localement", description: "Les sections adaptent les supports à la réglementation locale et au contexte communautaire.", icon: "🌍" },
        { title: "Portée et résultats suivis", description: "L'impact des campagnes est mesuré et rapporté, non supposé.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "Programmes liés",
      title: "Programmes liés à la sensibilisation",
      items: [
        { title: "Sauvetage", description: "Des communautés mieux informées signalent les cas de détresse plus tôt.", icon: "🚑", href: "/rescue" },
        { title: "Adoption", description: "L'éducation aide à préparer les nouveaux adoptants à un succès durable.", icon: "🐾", href: "/adoption" },
        { title: "Dons et collecte de fonds", description: "Les campagnes sont financées par des dons transparents et suivis.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Aidez à bâtir une communauté plus informée et compatissante",
      subtitle: "Lancez une campagne de sensibilisation dans votre communauté ou soutenez-en une déjà en cours.",
      primaryLabel: "Rejoindre une campagne",
      primaryHref: "/volunteers",
      secondaryLabel: "Contacter WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── ES (Spanish) ────────────────────────────────────────────────────────────

const es: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "Lo que hacemos",
      title: "Cinco programas coordinados, una misión global",
      subtitle: "WPA gestiona un conjunto conectado de programas que cubren todo el ciclo de vida del bienestar animal — desde la prevención y el rescate hasta la adopción, la financiación y la educación.",
      primaryLabel: "Hazte miembro",
      primaryHref: "/join",
      secondaryLabel: "Donar ahora",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Cómo se conectan los programas",
      title: "Cada programa resuelve una parte diferente del mismo problema",
      paragraphs: [
        "El bienestar animal falla cuando los esfuerzos están fragmentados — un rescate sin lugar donde ubicar a un animal, una donación sin impacto visible, una campaña de vacunación sin concienciación pública detrás.",
        "Los programas de WPA están diseñados para funcionar juntos: la concienciación reduce el número de animales en crisis, el rescate responde rápidamente cuando ocurre una crisis, la adopción da a los animales rescatados un hogar permanente, y la financiación transparente mediante donaciones mantiene cada programa en marcha.",
        "Cada programa opera bajo los mismos estándares de verificación, coordinación de capítulos y transparencia descritos en nuestros compromisos de gobernanza y confianza.",
      ],
    },
    programs: {
      eyebrow: "Nuestros programas",
      title: "Explora cada programa",
      subtitle: "Cada programa tiene su propia página dedicada que explica cómo funciona, quién puede participar y cómo se mide el impacto.",
      items: [
        { title: "Adopción", description: "Listados verificados y una vinculación responsable conectan a los animales rescatados con hogares evaluados y amorosos.", icon: "🐾", href: "/adoption" },
        { title: "Rescate", description: "Reportes de emergencia y coordinación de voluntarios para animales en peligro, en cualquier lugar.", icon: "🚑", href: "/rescue" },
        { title: "Donaciones y recaudación de fondos", description: "Financiación transparente basada en campañas para tratamiento, transporte y atención de emergencia.", icon: "❤️", href: "/donation" },
        { title: "Concienciación y educación", description: "Campañas comunitarias sobre la tenencia responsable, la vacunación y el bienestar animal.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "¿Listo para participar en los programas de WPA?",
      subtitle: "Ya sea que quieras adoptar, reportar un rescate, donar o difundir la concienciación — hay una forma clara de empezar.",
      primaryLabel: "Únete a WPA",
      primaryHref: "/join",
      secondaryLabel: "Sé nuestro socio",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "Programa de adopción",
      title: "Adopción verificada, desde la primera coincidencia hasta el hogar definitivo",
      subtitle: "El programa de adopción de WPA conecta a los animales rescatados con adoptantes evaluados y responsables mediante un proceso verificado de listado y entrega.",
      primaryLabel: "Ver mascotas en adopción",
      primaryHref: "/adoption",
      secondaryLabel: "Poner un animal en adopción",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "Cómo funciona la adopción en WPA",
      title: "Un camino verificado del rescate a un hogar responsable",
      paragraphs: [
        "Todo animal listado para adopción a través de WPA proviene de una fuente verificada — un refugio asociado, un equipo de rescate o un propietario registrado — para que los adoptantes conozcan el historial, el estado de salud y las notas de comportamiento del animal antes de postularse.",
        "La adopción no es una transacción, es una coincidencia evaluada. El proceso de WPA está diseñado para proteger tanto al animal como al adoptante, reduciendo el riesgo de que los animales sean abandonados nuevamente o ubicados en hogares inadecuados.",
        "El apoyo no termina en la entrega: los recursos posadopción de WPA ayudan a los nuevos dueños de mascotas durante las primeras semanas y meses de cuidado.",
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Del listado verificado a la entrega segura",
      subtitle: "Un proceso consistente de cinco pasos para cada adopción, sin importar el capítulo o la región.",
      steps: [
        { number: 1, title: "Listado de mascota verificado", description: "Refugios, equipos de rescate y propietarios presentan animales con registros de salud y notas de comportamiento para el listado." },
        { number: 2, title: "Solicitud del adoptante", description: "Los posibles adoptantes presentan una solicitud describiendo su hogar, experiencia y expectativas." },
        { number: 3, title: "Evaluación del adoptante", description: "WPA o el refugio asociado revisa la solicitud, y puede realizar una visita al hogar o una verificación de referencias." },
        { number: 4, title: "Entrega segura", description: "Una entrega estructurada incluye documentación de salud, una sesión informativa de cuidado y términos de adopción firmados." },
        { number: 5, title: "Apoyo posadopción", description: "Seguimientos periódicos y acceso a recursos veterinarios y de comportamiento durante los primeros meses." },
      ],
    },
    participants: {
      eyebrow: "Quién puede participar",
      title: "La adopción involucra a toda la red",
      subtitle: "Cada participante tiene un rol definido para mantener el proceso de adopción seguro y responsable.",
      items: [
        { title: "Equipos de rescate y refugios", description: "Listan animales rescatados con información de salud y comportamiento verificada.", icon: "🏠" },
        { title: "Propietarios registrados", description: "Reubican animales de forma responsable a través de un listado verificado en lugar de canales informales.", icon: "🧑‍🤝‍🧑" },
        { title: "Posibles adoptantes", description: "Postulan, completan la evaluación y reciben un animal que coincide con su hogar y experiencia.", icon: "🐾" },
        { title: "Socios veterinarios", description: "Proporcionan chequeos de salud y documentación antes y después de la adopción.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "Beneficios e impacto",
      title: "Por qué importa la adopción verificada",
      subtitle: "Un proceso estructurado produce mejores resultados para los animales, los adoptantes y la comunidad en general.",
      items: [
        { title: "Menos devoluciones y reabandonos", description: "La evaluación reduce las incompatibilidades que llevan a que los animales sean abandonados de nuevo.", icon: "✅" },
        { title: "Comienzos más saludables", description: "Los registros de salud verificados significan que los adoptantes saben qué cuidados necesita el animal desde el primer día.", icon: "🩺" },
        { title: "Alivio de la capacidad del refugio", description: "Cada adopción exitosa libera espacio en el refugio para el próximo animal necesitado.", icon: "🏠" },
        { title: "Apoyo continuo", description: "Los nuevos adoptantes no quedan solos tras la entrega — hay ayuda disponible cuando surgen dudas.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Confianza y seguridad",
      title: "Salvaguardas integradas en cada adopción",
      subtitle: "",
      items: [
        { title: "Solo listados verificados", description: "Los animales se listan únicamente a través de refugios, equipos de rescate o propietarios registrados evaluados.", icon: "🔒" },
        { title: "Evaluación documentada", description: "Cada solicitud de adoptante y decisión de evaluación se registra para rendir cuentas.", icon: "📋" },
        { title: "Entrega estructurada", description: "Una lista de verificación estándar de entrega protege tanto al animal como al adoptante.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Programas relacionados",
      title: "Programas conectados con la adopción",
      items: [
        { title: "Rescate", description: "Muchos animales adoptables comienzan su camino a través de la red de rescate de WPA.", icon: "🚑", href: "/rescue" },
        { title: "Concienciación y educación", description: "Infórmate sobre la tenencia responsable de mascotas antes y después de adoptar.", icon: "📢", href: "/awareness" },
        { title: "Donaciones y recaudación de fondos", description: "Apoya a los refugios y clínicas que hacen posible la adopción.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "¿Listo para dar un hogar a un animal rescatado?",
      subtitle: "Comienza una solicitud de adopción o lista un animal que necesita un hogar hoy mismo.",
      primaryLabel: "Iniciar proceso de adopción",
      primaryHref: "/join",
      secondaryLabel: "Contactar a WPA",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "Programa de rescate",
      title: "Respuesta rápida para animales en peligro",
      subtitle: "La red de rescate de WPA conecta los reportes ciudadanos con voluntarios, clínicas y refugios — coordinando cada caso desde el primer reporte hasta la recuperación total.",
      primaryLabel: "Reportar un rescate",
      primaryHref: "/rescue",
      secondaryLabel: "Únete a un equipo de rescate",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Cómo funciona el rescate en WPA",
      title: "De un solo reporte a una respuesta coordinada",
      paragraphs: [
        "Los animales en peligro a menudo son encontrados por ciudadanos comunes que no saben a quién contactar ni qué sucede después. El programa de rescate de WPA existe para cerrar esa brecha — convirtiendo un solo reporte en una respuesta coordinada y rastreable.",
        "Una vez que se reporta un caso, se dirige al voluntario disponible más cercano o a una clínica asociada, con actualizaciones de estado registradas en cada etapa para que los denunciantes y coordinadores puedan ver el progreso en tiempo real.",
        "El rescate no termina en la recogida — cada caso se sigue a través del tratamiento, la rehabilitación y, cuando corresponde, la transición al programa de adopción.",
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Del reporte de emergencia a la recuperación",
      subtitle: "Un proceso estructurado y rastreable para cada caso, sin importar la gravedad.",
      steps: [
        { number: 1, title: "Reporte de emergencia", description: "Cualquier persona puede reportar un animal en peligro con ubicación y descripción, en cualquier momento." },
        { number: 2, title: "Coordinación de voluntarios y clínicas", description: "Se notifica y despacha al voluntario disponible más cercano o a la clínica asociada." },
        { number: 3, title: "Seguimiento del caso", description: "Cada caso recibe un identificador de seguimiento para que su estado sea visible desde el reporte hasta la resolución." },
        { number: 4, title: "Tratamiento y rehabilitación", description: "Las clínicas asociadas brindan tratamiento médico y cuidados de recuperación según sea necesario." },
        { number: 5, title: "Actualizaciones de estado y resultado", description: "Los denunciantes y coordinadores reciben actualizaciones a través de la recuperación, la adopción o la liberación segura." },
      ],
    },
    participants: {
      eyebrow: "Quién puede participar",
      title: "El rescate depende de una red coordinada",
      subtitle: "Cada caso pasa por varias manos, cada una con una responsabilidad clara.",
      items: [
        { title: "Ciudadanos y denunciantes", description: "Reportan animales en peligro y proporcionan información inicial crítica.", icon: "📍" },
        { title: "Voluntarios", description: "Responden a los reportes, transportan animales y apoyan la coordinación de campo.", icon: "🙌" },
        { title: "Clínicas veterinarias", description: "Brindan tratamiento de emergencia, diagnóstico y cuidados de rehabilitación.", icon: "🏥" },
        { title: "Capítulos locales", description: "Coordinan voluntarios y clínicas dentro de su región para una respuesta más rápida.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "Beneficios e impacto",
      title: "Por qué importa el rescate coordinado",
      subtitle: "Una red estructurada responde más rápido y de manera más confiable que los esfuerzos aislados.",
      items: [
        { title: "Tiempos de respuesta más rápidos", description: "Dirigir los reportes al equipo disponible más cercano reduce el tiempo de ayuda.", icon: "⏱️" },
        { title: "Ningún caso se pierde", description: "Los identificadores de caso rastreados significan que cada reporte se sigue hasta su resolución.", icon: "📋" },
        { title: "Tasas de recuperación más altas", description: "El tratamiento y la rehabilitación coordinados mejoran los resultados para los animales heridos.", icon: "🩺" },
        { title: "Confianza de la comunidad", description: "Las actualizaciones de estado visibles generan confianza en que los reportes conducen a acciones reales.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Confianza y seguridad",
      title: "Rendición de cuentas en cada etapa de un rescate",
      subtitle: "",
      items: [
        { title: "Respondedores verificados", description: "Solo se despachan voluntarios evaluados y clínicas asociadas a casos activos.", icon: "🔒" },
        { title: "Seguimiento transparente de casos", description: "Cada caso tiene un estado visible, desde el reporte hasta la resolución.", icon: "📊" },
        { title: "Tratamiento documentado", description: "La atención médica y los resultados se registran para cada animal rescatado.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "Programas relacionados",
      title: "Programas conectados con el rescate",
      items: [
        { title: "Adopción", description: "Los animales rehabilitados sin dueño pasan al programa de adopción.", icon: "🐾", href: "/adoption" },
        { title: "Donaciones y recaudación de fondos", description: "El tratamiento de emergencia y el transporte se financian mediante donaciones rastreadas.", icon: "❤️", href: "/donation" },
        { title: "Concienciación y educación", description: "La concienciación comunitaria ayuda a que se reporten más casos de manera temprana.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "¿Ves un animal en peligro? Repórtalo ahora.",
      subtitle: "Cada reporte importa. Únete a nuestra red de rescate como voluntario o apóyala con una donación.",
      primaryLabel: "Reportar un rescate",
      primaryHref: "/rescue",
      secondaryLabel: "Hazte voluntario",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "Programa de donación y recaudación de fondos",
      title: "Cada donación rastreada, cada impacto reportado",
      subtitle: "WPA financia el rescate, el tratamiento, la adopción y la concienciación mediante una recaudación de fondos transparente basada en campañas — con informes públicos sobre cómo se usa cada contribución.",
      primaryLabel: "Donar ahora",
      primaryHref: "/donation",
      secondaryLabel: "Ver informes públicos",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Cómo funcionan las donaciones en WPA",
      title: "Financiación con un camino visible y rastreable",
      paragraphs: [
        "Las donaciones a WPA se dirigen a propósitos específicos — rescate de emergencia, tratamiento médico, campañas de vacunación, apoyo a refugios u operaciones generales — para que los donantes sepan exactamente qué apoya su contribución.",
        "Muchas donaciones se recaudan mediante campañas de financiación, vinculadas a un caso, capítulo o iniciativa específica, con progreso y resultados visibles para los contribuyentes.",
        "Cada donación genera un recibo, y el uso de los fondos se agrega en informes públicos para que toda la red — donantes, socios y el público — pueda revisar cómo se gastan los recursos.",
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "De la contribución al informe público",
      subtitle: "Un camino transparente para cada donación, ya sea única, recurrente o basada en campaña.",
      steps: [
        { number: 1, title: "Elegir un propósito o campaña", description: "Los donantes seleccionan un área de programa, una campaña activa o un fondo general que apoyar." },
        { number: 2, title: "Contribuir de forma segura", description: "Las donaciones se procesan y se emite un recibo por cada contribución." },
        { number: 3, title: "Fondos asignados y rastreados", description: "Las contribuciones se registran frente al programa o campaña específicos que apoyan." },
        { number: 4, title: "Programas ejecutados", description: "Los fondos se destinan a actividades de rescate, tratamiento, adopción o concienciación." },
        { number: 5, title: "Informes públicos de impacto", description: "El uso de los fondos y los resultados se publican en informes públicos regulares." },
      ],
    },
    participants: {
      eyebrow: "Quién puede participar",
      title: "Financiando el bienestar animal, juntos",
      subtitle: "La donación y la recaudación de fondos involucran a donantes, organizadores de campañas y los programas que apoyan.",
      items: [
        { title: "Donantes individuales", description: "Contribuyen con donaciones únicas o recurrentes a programas o campañas.", icon: "💛" },
        { title: "Donantes institucionales", description: "Empresas y fundaciones financian programas y asociaciones a gran escala.", icon: "🏢" },
        { title: "Recaudadores de fondos de capítulos", description: "Los capítulos locales gestionan campañas para necesidades y emergencias regionales.", icon: "🌍" },
        { title: "Organizaciones asociadas", description: "ONG y clínicas solicitan financiación de programas vinculada a iniciativas específicas.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "Beneficios e impacto",
      title: "Por qué importa la recaudación de fondos transparente",
      subtitle: "La confianza en el uso de los fondos es la base de un programa de donaciones sostenible.",
      items: [
        { title: "Visibilidad total", description: "Los donantes pueden ver exactamente qué programas y casos apoyó su contribución.", icon: "🔍" },
        { title: "Mayor impacto del programa", description: "La asignación rastreada garantiza que los fondos vayan donde más se necesitan.", icon: "📈" },
        { title: "Recibos verificados", description: "Cada contribución se documenta para los registros propios del donante.", icon: "🧾" },
        { title: "Rendición de cuentas pública", description: "Los informes regulares mantienen a toda la red responsable ante donantes y socios.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "Confianza y seguridad",
      title: "Transparencia integrada en cada contribución",
      subtitle: "",
      items: [
        { title: "Recibos de donantes", description: "Cada donación genera un recibo que confirma el monto, el propósito y la fecha.", icon: "🧾" },
        { title: "Asignación de fondos rastreada", description: "Las contribuciones se registran frente al programa o campaña específicos que apoyan.", icon: "📊" },
        { title: "Informes públicos de impacto", description: "El uso de los fondos y los resultados se publican para donantes, socios y el público.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Programas relacionados",
      title: "Programas financiados mediante donaciones",
      items: [
        { title: "Rescate", description: "La respuesta de emergencia y el tratamiento se financian mediante donaciones.", icon: "🚑", href: "/rescue" },
        { title: "Adopción", description: "El cuidado en refugios y los chequeos médicos antes de la adopción dependen de la financiación de los donantes.", icon: "🐾", href: "/adoption" },
        { title: "Concienciación y educación", description: "Las campañas de vacunación y educación se financian mediante donaciones.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Financia programas de bienestar animal verificados y transparentes",
      subtitle: "Cada contribución se rastrea, se reporta y se dirige a los programas que más lo necesitan.",
      primaryLabel: "Donar ahora",
      primaryHref: "/donation",
      secondaryLabel: "Ver informes públicos",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "Programa de concienciación y educación",
      title: "Construyendo una cultura de tenencia responsable y compasiva de mascotas",
      subtitle: "El programa de concienciación de WPA educa a las comunidades sobre la tenencia responsable de mascotas, la vacunación y el bienestar animal — reduciendo el número de animales en crisis antes de que ocurra.",
      primaryLabel: "Explorar recursos",
      primaryHref: "/awareness",
      secondaryLabel: "Únete a una campaña local",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Cómo funciona la concienciación en WPA",
      title: "Prevención mediante la educación",
      paragraphs: [
        "Muchas crisis de bienestar animal — abandono, brotes de enfermedades, manejo inseguro — se pueden prevenir mediante educación básica. El programa de concienciación de WPA existe para llegar a las comunidades antes de que ocurra una crisis, no solo para responder después.",
        "Las campañas cubren la tenencia responsable de mascotas, calendarios de vacunación, ética del bienestar animal y prácticas seguras de reporte, entregadas a través de capítulos locales, clínicas asociadas y recursos digitales.",
        "Los recursos se desarrollan pensando en el acceso multilingüe, para que la educación llegue a las comunidades en el idioma que mejor entienden, no solo en los idiomas en los que WPA opera por defecto.",
      ],
    },
    howItWorks: {
      eyebrow: "Cómo funciona",
      title: "Del diseño de la campaña al alcance comunitario",
      subtitle: "Un modelo repetible para entregar educación donde más se necesita.",
      steps: [
        { number: 1, title: "Identificar necesidades de la comunidad", description: "Los capítulos locales evalúan las brechas en concienciación, cobertura de vacunación o prácticas de reporte." },
        { number: 2, title: "Diseñar la campaña", description: "Las campañas se construyen en torno a un tema específico — vacunación, adopción o manejo seguro." },
        { number: 3, title: "Entregar a través de socios", description: "Clínicas, escuelas y grupos comunitarios ayudan a distribuir materiales y eventos de la campaña." },
        { number: 4, title: "Proveer recursos multilingües", description: "Los materiales educativos se ponen a disposición en los idiomas que la comunidad necesita." },
        { number: 5, title: "Medir y reportar el alcance", description: "El alcance y los resultados de la campaña se rastrean y reportan a través de la red de WPA." },
      ],
    },
    participants: {
      eyebrow: "Quién puede participar",
      title: "La concienciación llega a cada parte de la comunidad",
      subtitle: "Los programas educativos se diseñan pensando en múltiples colaboradores y audiencias.",
      items: [
        { title: "Dueños de mascotas", description: "Aprenden prácticas de tenencia responsable y calendarios de vacunación.", icon: "🏠" },
        { title: "Escuelas y grupos comunitarios", description: "Organizan sesiones de concienciación y programas de educación juvenil.", icon: "🏫" },
        { title: "Clínicas veterinarias", description: "Brindan orientación sobre vacunación y educación en salud junto con la atención.", icon: "🏥" },
        { title: "Voluntarios", description: "Distribuyen materiales y lideran eventos de concienciación locales.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "Beneficios e impacto",
      title: "Por qué la concienciación reduce la necesidad de rescate",
      subtitle: "La prevención es más efectiva, y más humana, que la respuesta a crisis por sí sola.",
      items: [
        { title: "Menos casos de abandono", description: "La educación sobre tenencia responsable reduce los factores que impulsan el abandono.", icon: "📉" },
        { title: "Mayor cobertura de vacunación", description: "Las campañas de concienciación aumentan la participación en programas de salud preventiva.", icon: "💉" },
        { title: "Reportes más seguros", description: "Las comunidades que entienden el proceso de rescate reportan casos más temprano y con mayor precisión.", icon: "📍" },
        { title: "Mayor alcance", description: "Los recursos multilingües garantizan que la educación no esté limitada por barreras del idioma.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "Confianza y seguridad",
      title: "Educación basada en estándares verificados",
      subtitle: "",
      items: [
        { title: "Contenido revisado por veterinarios", description: "La orientación sobre salud y vacunación es revisada por socios veterinarios verificados.", icon: "🩺" },
        { title: "Campañas adaptadas localmente", description: "Los capítulos adaptan los materiales a la normativa local y al contexto comunitario.", icon: "🌍" },
        { title: "Alcance y resultados rastreados", description: "El impacto de la campaña se mide y reporta, no se supone.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "Programas relacionados",
      title: "Programas conectados con la concienciación",
      items: [
        { title: "Rescate", description: "Las comunidades mejor informadas reportan casos de emergencia más temprano.", icon: "🚑", href: "/rescue" },
        { title: "Adopción", description: "La educación ayuda a preparar a los nuevos adoptantes para el éxito a largo plazo.", icon: "🐾", href: "/adoption" },
        { title: "Donaciones y recaudación de fondos", description: "Las campañas se financian mediante donaciones transparentes y rastreadas.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Ayuda a construir una comunidad más informada y compasiva",
      subtitle: "Trae una campaña de concienciación a tu comunidad o apoya una que ya está en marcha.",
      primaryLabel: "Únete a una campaña",
      primaryHref: "/volunteers",
      secondaryLabel: "Contactar a WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── RU (Russian) ────────────────────────────────────────────────────────────

const ru: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "Чем мы занимаемся",
      title: "Пять скоординированных программ, одна глобальная миссия",
      subtitle: "WPA реализует взаимосвязанный набор программ, охватывающий весь жизненный цикл заботы о животных — от профилактики и спасения до усыновления, финансирования и просвещения.",
      primaryLabel: "Стать участником",
      primaryHref: "/join",
      secondaryLabel: "Пожертвовать сейчас",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Как связаны программы",
      title: "Каждая программа решает свою часть одной и той же проблемы",
      paragraphs: [
        "Забота о животных терпит неудачу, когда усилия разрознены — спасение без места для размещения животного, пожертвование без видимого результата, кампания по вакцинации без общественной осведомлённости.",
        "Программы WPA спроектированы так, чтобы работать сообща: просвещение снижает число животных в кризисной ситуации, спасение быстро реагирует, когда кризис происходит, усыновление даёт спасённым животным постоянный дом, а прозрачное финансирование за счёт пожертвований поддерживает работу каждой программы.",
        "Каждая программа действует по единым стандартам проверки, координации отделений и прозрачности, описанным в наших обязательствах по управлению и доверию.",
      ],
    },
    programs: {
      eyebrow: "Наши программы",
      title: "Изучите каждую программу",
      subtitle: "У каждой программы есть собственная страница, где описано, как она работает, кто может участвовать и как отслеживается результат.",
      items: [
        { title: "Усыновление", description: "Проверенные объявления и ответственный подбор соединяют спасённых животных с проверенными, заботливыми семьями.", icon: "🐾", href: "/adoption" },
        { title: "Спасение", description: "Экстренные сообщения и координация волонтёров для животных в беде, где бы они ни находились.", icon: "🚑", href: "/rescue" },
        { title: "Пожертвования и сбор средств", description: "Прозрачное финансирование на основе кампаний для лечения, транспортировки и экстренной помощи.", icon: "❤️", href: "/donation" },
        { title: "Просвещение и образование", description: "Общественные кампании об ответственном содержании животных, вакцинации и заботе о животных.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Готовы принять участие в программах WPA?",
      subtitle: "Хотите ли вы усыновить животное, сообщить о спасении, пожертвовать средства или распространять информацию — есть понятный способ начать.",
      primaryLabel: "Присоединиться к WPA",
      primaryHref: "/join",
      secondaryLabel: "Стать партнёром",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "Программа усыновления",
      title: "Проверенное усыновление, от первого совпадения до постоянного дома",
      subtitle: "Программа усыновления WPA соединяет спасённых животных с проверенными, ответственными усыновителями через процесс верифицированных объявлений и передачи.",
      primaryLabel: "Посмотреть животных для усыновления",
      primaryHref: "/adoption",
      secondaryLabel: "Разместить животное для усыновления",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "Как работает усыновление в WPA",
      title: "Проверенный путь от спасения к ответственному дому",
      paragraphs: [
        "Каждое животное, размещённое для усыновления через WPA, поступает из проверенного источника — партнёрского приюта, спасательной команды или зарегистрированного владельца — поэтому усыновители узнают историю животного, состояние здоровья и особенности поведения ещё до подачи заявки.",
        "Усыновление — это не сделка, а тщательно проверенное соответствие. Процесс WPA разработан для защиты как животного, так и усыновителя, снижая риск повторного отказа от животного или размещения в неподходящей семье.",
        "Поддержка не заканчивается на передаче: ресурсы WPA после усыновления помогают новым владельцам животных в первые недели и месяцы ухода.",
      ],
    },
    howItWorks: {
      eyebrow: "Как это работает",
      title: "От проверенного объявления к безопасной передаче",
      subtitle: "Единый пятиэтапный процесс для каждого усыновления, независимо от отделения или региона.",
      steps: [
        { number: 1, title: "Проверенное объявление о животном", description: "Приюты, спасательные команды и владельцы подают животных с медицинскими записями и заметками о поведении для размещения." },
        { number: 2, title: "Заявка усыновителя", description: "Потенциальные усыновители подают заявку с описанием своего дома, опыта и ожиданий." },
        { number: 3, title: "Проверка усыновителя", description: "WPA или партнёрский приют рассматривает заявку и может провести проверку дома или рекомендаций." },
        { number: 4, title: "Безопасная передача", description: "Структурированная передача включает медицинскую документацию, инструктаж по уходу и подписанные условия усыновления." },
        { number: 5, title: "Поддержка после усыновления", description: "Регулярные проверки и доступ к ветеринарным и поведенческим ресурсам в первые месяцы." },
      ],
    },
    participants: {
      eyebrow: "Кто может участвовать",
      title: "Усыновление вовлекает каждую часть сети",
      subtitle: "У каждого участника есть чётко определённая роль в обеспечении безопасности и подотчётности процесса усыновления.",
      items: [
        { title: "Спасательные команды и приюты", description: "Размещают спасённых животных с проверенной информацией о здоровье и поведении.", icon: "🏠" },
        { title: "Зарегистрированные владельцы", description: "Ответственно передают животных в новые семьи через проверенное объявление, а не через неформальные каналы.", icon: "🧑‍🤝‍🧑" },
        { title: "Потенциальные усыновители", description: "Подают заявку, проходят проверку и получают животное, подходящее их дому и опыту.", icon: "🐾" },
        { title: "Ветеринарные партнёры", description: "Проводят осмотры здоровья и оформляют документы до и после усыновления.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "Преимущества и результат",
      title: "Почему важно проверенное усыновление",
      subtitle: "Структурированный процесс даёт лучшие результаты для животных, усыновителей и общества в целом.",
      items: [
        { title: "Меньше возвратов и повторных отказов", description: "Проверка снижает несоответствия, которые приводят к повторному отказу от животных.", icon: "✅" },
        { title: "Более здоровое начало", description: "Проверенные медицинские записи означают, что усыновители знают, какой уход нужен животному с первого дня.", icon: "🩺" },
        { title: "Освобождение места в приюте", description: "Каждое успешное усыновление освобождает место в приюте для следующего нуждающегося животного.", icon: "🏠" },
        { title: "Постоянная поддержка", description: "Новые усыновители не остаются одни после передачи — помощь доступна, когда возникают вопросы.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Доверие и безопасность",
      title: "Встроенные гарантии для каждого усыновления",
      subtitle: "",
      items: [
        { title: "Только проверенные объявления", description: "Животные размещаются только через проверенные приюты, спасательные команды или зарегистрированных владельцев.", icon: "🔒" },
        { title: "Задокументированная проверка", description: "Каждая заявка усыновителя и решение о проверке фиксируются для подотчётности.", icon: "📋" },
        { title: "Структурированная передача", description: "Стандартный контрольный список передачи защищает как животное, так и усыновителя.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Связанные программы",
      title: "Программы, связанные с усыновлением",
      items: [
        { title: "Спасение", description: "Многие животные, доступные для усыновления, начинают свой путь через спасательную сеть WPA.", icon: "🚑", href: "/rescue" },
        { title: "Просвещение и образование", description: "Узнайте об ответственном содержании животных до и после усыновления.", icon: "📢", href: "/awareness" },
        { title: "Пожертвования и сбор средств", description: "Поддержите приюты и клиники, которые делают усыновление возможным.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Готовы дать дом спасённому животному?",
      subtitle: "Начните заявку на усыновление или разместите объявление о животном, которому нужен дом, уже сегодня.",
      primaryLabel: "Начать процесс усыновления",
      primaryHref: "/join",
      secondaryLabel: "Связаться с WPA",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "Программа спасения",
      title: "Быстрое реагирование для животных в беде",
      subtitle: "Спасательная сеть WPA соединяет сообщения граждан с волонтёрами, клиниками и приютами — координируя каждый случай от первого сообщения до полного восстановления.",
      primaryLabel: "Сообщить о спасении",
      primaryHref: "/rescue",
      secondaryLabel: "Присоединиться к спасательной команде",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Как работает спасение в WPA",
      title: "От одного сообщения к скоординированному ответу",
      paragraphs: [
        "Животных в беде часто находят обычные граждане, которые не знают, к кому обратиться и что происходит дальше. Программа спасения WPA существует, чтобы устранить этот разрыв, превращая единичное сообщение в скоординированный, отслеживаемый ответ.",
        "После того как случай зарегистрирован, он направляется ближайшему доступному волонтёру или партнёрской клинике, с фиксацией обновлений статуса на каждом этапе, чтобы заявители и координаторы могли видеть прогресс в реальном времени.",
        "Спасение не заканчивается на подборе животного — каждый случай сопровождается на всех этапах лечения, реабилитации и, при необходимости, перехода в программу усыновления.",
      ],
    },
    howItWorks: {
      eyebrow: "Как это работает",
      title: "От экстренного сообщения до выздоровления",
      subtitle: "Структурированный, отслеживаемый процесс для каждого случая, независимо от его тяжести.",
      steps: [
        { number: 1, title: "Экстренное сообщение", description: "Любой может сообщить о животном в беде, указав местоположение и описание, в любое время." },
        { number: 2, title: "Координация волонтёров и клиник", description: "Уведомляется и направляется ближайший доступный волонтёр или партнёрская клиника." },
        { number: 3, title: "Отслеживание случая", description: "Каждый случай получает идентификатор отслеживания, чтобы его статус был виден от сообщения до разрешения." },
        { number: 4, title: "Лечение и реабилитация", description: "Партнёрские клиники предоставляют медицинское лечение и восстановительный уход по мере необходимости." },
        { number: 5, title: "Обновления статуса и результат", description: "Заявители и координаторы получают обновления вплоть до выздоровления, усыновления или безопасного выпуска." },
      ],
    },
    participants: {
      eyebrow: "Кто может участвовать",
      title: "Спасение зависит от скоординированной сети",
      subtitle: "Каждый случай проходит через несколько рук, у каждой из которых есть чёткая ответственность.",
      items: [
        { title: "Граждане и заявители", description: "Сообщают о животных в беде и предоставляют важную первичную информацию.", icon: "📍" },
        { title: "Волонтёры", description: "Реагируют на сообщения, перевозят животных и поддерживают координацию на местах.", icon: "🙌" },
        { title: "Ветеринарные клиники", description: "Оказывают экстренную помощь, ставят диагноз и проводят реабилитационный уход.", icon: "🏥" },
        { title: "Местные отделения", description: "Координируют волонтёров и клиники в своём регионе для более быстрого реагирования.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "Преимущества и результат",
      title: "Почему важно скоординированное спасение",
      subtitle: "Структурированная сеть реагирует быстрее и надёжнее, чем разрозненные усилия.",
      items: [
        { title: "Более быстрое время реагирования", description: "Направление сообщений ближайшей доступной команде сокращает время до помощи.", icon: "⏱️" },
        { title: "Ни один случай не остаётся без внимания", description: "Отслеживаемые идентификаторы случаев означают, что каждое сообщение доводится до разрешения.", icon: "📋" },
        { title: "Более высокий уровень выздоровления", description: "Скоординированное лечение и реабилитация улучшают результаты для пострадавших животных.", icon: "🩺" },
        { title: "Доверие сообщества", description: "Видимые обновления статуса укрепляют уверенность в том, что сообщения приводят к реальным действиям.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Доверие и безопасность",
      title: "Подотчётность на каждом этапе спасения",
      subtitle: "",
      items: [
        { title: "Проверенные спасатели", description: "К активным случаям направляются только проверенные волонтёры и партнёрские клиники.", icon: "🔒" },
        { title: "Прозрачное отслеживание случаев", description: "Каждый случай имеет видимый статус, от сообщения до разрешения.", icon: "📊" },
        { title: "Задокументированное лечение", description: "Медицинская помощь и результаты фиксируются для каждого спасённого животного.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "Связанные программы",
      title: "Программы, связанные со спасением",
      items: [
        { title: "Усыновление", description: "Реабилитированные животные без владельца переходят в программу усыновления.", icon: "🐾", href: "/adoption" },
        { title: "Пожертвования и сбор средств", description: "Экстренное лечение и транспортировка финансируются за счёт отслеживаемых пожертвований.", icon: "❤️", href: "/donation" },
        { title: "Просвещение и образование", description: "Общественная осведомлённость помогает сообщать о большем числе случаев раньше.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Видите животное в беде? Сообщите об этом прямо сейчас.",
      subtitle: "Каждое сообщение имеет значение. Присоединяйтесь к нашей спасательной сети в качестве волонтёра или поддержите её пожертвованием.",
      primaryLabel: "Сообщить о спасении",
      primaryHref: "/rescue",
      secondaryLabel: "Стать волонтёром",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "Программа пожертвований и сбора средств",
      title: "Каждое пожертвование отслеживается, каждый результат отражается в отчёте",
      subtitle: "WPA финансирует спасение, лечение, усыновление и просвещение за счёт прозрачного сбора средств на основе кампаний — с публичной отчётностью об использовании каждого взноса.",
      primaryLabel: "Пожертвовать сейчас",
      primaryHref: "/donation",
      secondaryLabel: "Посмотреть публичные отчёты",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Как работают пожертвования в WPA",
      title: "Финансирование с прозрачным, отслеживаемым путём",
      paragraphs: [
        "Пожертвования WPA направляются на конкретные цели — экстренное спасение, медицинское лечение, кампании по вакцинации, поддержку приютов или общую деятельность — чтобы жертвователи точно знали, что поддерживает их взнос.",
        "Многие пожертвования собираются в рамках кампаний по сбору средств, привязанных к конкретному случаю, отделению или инициативе, с прогрессом и результатами, видимыми для вкладчиков.",
        "Каждое пожертвование формирует квитанцию, а использование средств агрегируется в публичных отчётах, чтобы вся сеть — жертвователи, партнёры и общественность — могли проверить, как расходуются ресурсы.",
      ],
    },
    howItWorks: {
      eyebrow: "Как это работает",
      title: "От взноса к публичному отчёту",
      subtitle: "Прозрачный путь для каждого пожертвования, будь то разовое, регулярное или на основе кампании.",
      steps: [
        { number: 1, title: "Выбор цели или кампании", description: "Жертвователи выбирают направление программы, активную кампанию или общий фонд для поддержки." },
        { number: 2, title: "Безопасный вклад", description: "Пожертвования обрабатываются, и для каждого взноса выдаётся квитанция." },
        { number: 3, title: "Распределение и отслеживание средств", description: "Взносы регистрируются в привязке к конкретной программе или кампании, которую они поддерживают." },
        { number: 4, title: "Реализация программ", description: "Средства направляются на деятельность по спасению, лечению, усыновлению или просвещению." },
        { number: 5, title: "Публичная отчётность о результатах", description: "Использование средств и результаты публикуются в регулярных публичных отчётах." },
      ],
    },
    participants: {
      eyebrow: "Кто может участвовать",
      title: "Финансирование заботы о животных вместе",
      subtitle: "В пожертвования и сбор средств вовлечены жертвователи, организаторы кампаний и программы, которые они поддерживают.",
      items: [
        { title: "Частные жертвователи", description: "Вносят разовые или регулярные пожертвования в программы или кампании.", icon: "💛" },
        { title: "Институциональные жертвователи", description: "Корпорации и фонды финансируют масштабные программы и партнёрства.", icon: "🏢" },
        { title: "Сборщики средств отделений", description: "Местные отделения проводят кампании для региональных нужд и чрезвычайных ситуаций.", icon: "🌍" },
        { title: "Партнёрские организации", description: "НКО и клиники подают заявки на финансирование программ, привязанное к конкретным инициативам.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "Преимущества и результат",
      title: "Почему важен прозрачный сбор средств",
      subtitle: "Доверие к использованию средств — основа устойчивой программы пожертвований.",
      items: [
        { title: "Полная прозрачность", description: "Жертвователи могут точно увидеть, какие программы и случаи поддержал их взнос.", icon: "🔍" },
        { title: "Более высокий эффект программ", description: "Отслеживаемое распределение гарантирует, что средства идут туда, где они нужнее всего.", icon: "📈" },
        { title: "Проверенные квитанции", description: "Каждый взнос документируется для собственных записей жертвователя.", icon: "🧾" },
        { title: "Публичная подотчётность", description: "Регулярные отчёты сохраняют ответственность всей сети перед жертвователями и партнёрами.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "Доверие и безопасность",
      title: "Прозрачность заложена в каждый взнос",
      subtitle: "",
      items: [
        { title: "Квитанции для жертвователей", description: "Каждое пожертвование формирует квитанцию, подтверждающую сумму, цель и дату.", icon: "🧾" },
        { title: "Отслеживаемое распределение средств", description: "Взносы регистрируются в привязке к конкретной программе или кампании, которую они поддерживают.", icon: "📊" },
        { title: "Публичные отчёты о результатах", description: "Использование средств и результаты публикуются для жертвователей, партнёров и общественности.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Связанные программы",
      title: "Программы, финансируемые за счёт пожертвований",
      items: [
        { title: "Спасение", description: "Экстренное реагирование и лечение финансируются за счёт пожертвований.", icon: "🚑", href: "/rescue" },
        { title: "Усыновление", description: "Уход в приютах и медицинские осмотры перед усыновлением зависят от финансирования жертвователей.", icon: "🐾", href: "/adoption" },
        { title: "Просвещение и образование", description: "Кампании по вакцинации и образованию финансируются за счёт пожертвований.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Финансируйте проверенные, прозрачные программы заботы о животных",
      subtitle: "Каждый взнос отслеживается, отражается в отчётах и направляется на программы, которые нуждаются в нём больше всего.",
      primaryLabel: "Пожертвовать сейчас",
      primaryHref: "/donation",
      secondaryLabel: "Посмотреть публичные отчёты",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "Программа просвещения и образования",
      title: "Формирование культуры ответственного и заботливого содержания животных",
      subtitle: "Программа просвещения WPA обучает сообщества ответственному содержанию животных, вакцинации и заботе о животных — снижая число животных в кризисной ситуации ещё до её наступления.",
      primaryLabel: "Изучить ресурсы",
      primaryHref: "/awareness",
      secondaryLabel: "Присоединиться к местной кампании",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Как работает просвещение в WPA",
      title: "Профилактика через образование",
      paragraphs: [
        "Многие кризисные ситуации в сфере заботы о животных — отказ от животных, вспышки заболеваний, небезопасное обращение — можно предотвратить с помощью базового образования. Программа просвещения WPA существует, чтобы достигать сообществ до наступления кризиса, а не только реагировать после него.",
        "Кампании охватывают ответственное содержание животных, графики вакцинации, этику заботы о животных и практики безопасного информирования, реализуемые через местные отделения, партнёрские клиники и цифровые ресурсы.",
        "Ресурсы разрабатываются с учётом многоязычного доступа, чтобы образование достигало сообществ на языке, который они понимают лучше всего, а не только на языках, на которых WPA работает по умолчанию.",
      ],
    },
    howItWorks: {
      eyebrow: "Как это работает",
      title: "От разработки кампании к охвату сообщества",
      subtitle: "Повторяемая модель предоставления образования там, где оно нужнее всего.",
      steps: [
        { number: 1, title: "Определение потребностей сообщества", description: "Местные отделения оценивают пробелы в осведомлённости, охвате вакцинацией или практиках информирования." },
        { number: 2, title: "Разработка кампании", description: "Кампании строятся вокруг конкретной темы — вакцинации, усыновления или безопасного обращения." },
        { number: 3, title: "Реализация через партнёров", description: "Клиники, школы и общественные группы помогают распространять материалы и мероприятия кампании." },
        { number: 4, title: "Предоставление многоязычных ресурсов", description: "Образовательные материалы предоставляются на языках, необходимых сообществу." },
        { number: 5, title: "Измерение и отчётность об охвате", description: "Охват и результаты кампании отслеживаются и передаются через сеть WPA." },
      ],
    },
    participants: {
      eyebrow: "Кто может участвовать",
      title: "Просвещение охватывает каждую часть сообщества",
      subtitle: "Образовательные программы строятся с учётом множества участников и аудиторий.",
      items: [
        { title: "Владельцы животных", description: "Изучают практики ответственного содержания и графики вакцинации.", icon: "🏠" },
        { title: "Школы и общественные группы", description: "Проводят информационные сессии и молодёжные образовательные программы.", icon: "🏫" },
        { title: "Ветеринарные клиники", description: "Предоставляют рекомендации по вакцинации и санитарное просвещение наряду с лечением.", icon: "🏥" },
        { title: "Волонтёры", description: "Распространяют материалы и проводят местные информационные мероприятия.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "Преимущества и результат",
      title: "Почему просвещение снижает потребность в спасении",
      subtitle: "Профилактика эффективнее и гуманнее, чем только реагирование на кризисы.",
      items: [
        { title: "Меньше случаев отказа от животных", description: "Образование в области ответственного содержания снижает факторы, ведущие к отказу от животных.", icon: "📉" },
        { title: "Более высокий охват вакцинацией", description: "Информационные кампании повышают участие в программах профилактического здоровья.", icon: "💉" },
        { title: "Более безопасное информирование", description: "Сообщества, понимающие процесс спасения, сообщают о случаях раньше и точнее.", icon: "📍" },
        { title: "Более широкий охват", description: "Многоязычные ресурсы гарантируют, что образование не ограничено языковыми барьерами.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "Доверие и безопасность",
      title: "Образование, основанное на проверенных стандартах",
      subtitle: "",
      items: [
        { title: "Контент, проверенный ветеринарами", description: "Рекомендации по здоровью и вакцинации проверяются проверенными ветеринарными партнёрами.", icon: "🩺" },
        { title: "Локально адаптированные кампании", description: "Отделения адаптируют материалы к местному законодательству и контексту сообщества.", icon: "🌍" },
        { title: "Отслеживаемый охват и результаты", description: "Влияние кампании измеряется и отражается в отчётах, а не предполагается.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "Связанные программы",
      title: "Программы, связанные с просвещением",
      items: [
        { title: "Спасение", description: "Более информированные сообщества сообщают о случаях бедствия раньше.", icon: "🚑", href: "/rescue" },
        { title: "Усыновление", description: "Образование помогает подготовить новых усыновителей к долгосрочному успеху.", icon: "🐾", href: "/adoption" },
        { title: "Пожертвования и сбор средств", description: "Кампании финансируются за счёт прозрачных, отслеживаемых пожертвований.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Помогите построить более информированное и заботливое сообщество",
      subtitle: "Привнесите информационную кампанию в своё сообщество или поддержите уже проводимую.",
      primaryLabel: "Присоединиться к кампании",
      primaryHref: "/volunteers",
      secondaryLabel: "Связаться с WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── DE (German) ─────────────────────────────────────────────────────────────

const de: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "Was wir tun",
      title: "Fünf koordinierte Programme, eine globale Mission",
      subtitle: "WPA betreibt ein vernetztes Set von Programmen, die den gesamten Lebenszyklus des Tierschutzes abdecken — von Prävention und Rettung bis hin zu Vermittlung, Finanzierung und Aufklärung.",
      primaryLabel: "Mitglied werden",
      primaryHref: "/join",
      secondaryLabel: "Jetzt spenden",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "Wie die Programme zusammenhängen",
      title: "Jedes Programm löst einen anderen Teil desselben Problems",
      paragraphs: [
        "Tierschutz scheitert, wenn Bemühungen fragmentiert sind — eine Rettung ohne Unterbringungsort für ein Tier, eine Spende ohne sichtbare Wirkung, eine Impfkampagne ohne öffentliche Aufklärung dahinter.",
        "Die Programme von WPA sind darauf ausgelegt, zusammenzuarbeiten: Aufklärung verringert die Zahl der Tiere in einer Krise, Rettung reagiert schnell, wenn eine Krise eintritt, Vermittlung gibt geretteten Tieren ein dauerhaftes Zuhause, und transparente Spendenfinanzierung hält jedes Programm am Laufen.",
        "Jedes Programm arbeitet nach denselben Standards für Verifizierung, Koordination der Ortsgruppen und Transparenz, die in unseren Governance- und Vertrauensverpflichtungen beschrieben sind.",
      ],
    },
    programs: {
      eyebrow: "Unsere Programme",
      title: "Entdecken Sie jedes Programm",
      subtitle: "Jedes Programm hat eine eigene Seite, die erklärt, wie es funktioniert, wer teilnehmen kann und wie die Wirkung erfasst wird.",
      items: [
        { title: "Vermittlung", description: "Verifizierte Angebote und verantwortungsvolle Vermittlung verbinden gerettete Tiere mit geprüften, liebevollen Zuhause.", icon: "🐾", href: "/adoption" },
        { title: "Rettung", description: "Notfallmeldungen und Koordination von Freiwilligen für Tiere in Not, überall.", icon: "🚑", href: "/rescue" },
        { title: "Spenden & Spendensammlung", description: "Transparente, kampagnenbasierte Finanzierung für Behandlung, Transport und Notfallversorgung.", icon: "❤️", href: "/donation" },
        { title: "Aufklärung & Bildung", description: "Gemeinschaftskampagnen zu verantwortungsvoller Tierhaltung, Impfungen und Tierschutz.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Bereit, an den Programmen von WPA teilzunehmen?",
      subtitle: "Ob Sie vermitteln möchten, eine Rettung melden, spenden oder Aufklärung verbreiten möchten — es gibt einen klaren Weg, um anzufangen.",
      primaryLabel: "WPA beitreten",
      primaryHref: "/join",
      secondaryLabel: "Partner werden",
      secondaryHref: "/partners",
    },
  },

  adoption: {
    hero: {
      eyebrow: "Vermittlungsprogramm",
      title: "Verifizierte Vermittlung, vom ersten Match bis zum dauerhaften Zuhause",
      subtitle: "Das Vermittlungsprogramm von WPA verbindet gerettete Tiere mit geprüften, verantwortungsbewussten Interessenten über einen verifizierten Angebots- und Übergabeprozess.",
      primaryLabel: "Vermittlungstiere durchsuchen",
      primaryHref: "/adoption",
      secondaryLabel: "Ein Tier zur Vermittlung anbieten",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "Wie die Vermittlung bei WPA funktioniert",
      title: "Ein verifizierter Weg von der Rettung zu einem verantwortungsvollen Zuhause",
      paragraphs: [
        "Jedes Tier, das über WPA zur Vermittlung angeboten wird, stammt aus einer verifizierten Quelle — einem Partnertierheim, einem Rettungsteam oder einem registrierten Besitzer —, sodass Interessenten die Vorgeschichte, den Gesundheitszustand und Verhaltenshinweise des Tieres kennen, bevor sie sich bewerben.",
        "Vermittlung ist kein Geschäft — es ist ein geprüftes Match. Der Prozess von WPA soll sowohl das Tier als auch den neuen Besitzer schützen und das Risiko verringern, dass Tiere erneut abgegeben oder in ungeeignete Zuhause vermittelt werden.",
        "Die Unterstützung endet nicht mit der Übergabe: Die Ressourcen von WPA nach der Vermittlung helfen neuen Tierbesitzern in den ersten Wochen und Monaten der Pflege.",
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      title: "Vom verifizierten Angebot zur sicheren Übergabe",
      subtitle: "Ein einheitlicher fünfstufiger Prozess für jede Vermittlung, unabhängig von Ortsgruppe oder Region.",
      steps: [
        { number: 1, title: "Verifiziertes Tierangebot", description: "Tierheime, Rettungsteams und Besitzer reichen Tiere mit Gesundheitsunterlagen und Verhaltenshinweisen zur Auflistung ein." },
        { number: 2, title: "Bewerbung der Interessenten", description: "Interessenten reichen eine Bewerbung ein, die ihr Zuhause, ihre Erfahrung und ihre Erwartungen beschreibt." },
        { number: 3, title: "Prüfung der Interessenten", description: "WPA oder das Partnertierheim prüft die Bewerbung und kann eine Haus- oder Referenzprüfung durchführen." },
        { number: 4, title: "Sichere Übergabe", description: "Eine strukturierte Übergabe umfasst Gesundheitsdokumentation, eine Pflegeeinweisung und unterzeichnete Vermittlungsbedingungen." },
        { number: 5, title: "Unterstützung nach der Vermittlung", description: "Regelmäßige Nachkontrollen und Zugang zu tierärztlichen und verhaltensbezogenen Ressourcen in den ersten Monaten." },
      ],
    },
    participants: {
      eyebrow: "Wer kann teilnehmen",
      title: "Vermittlung bezieht jeden Teil des Netzwerks ein",
      subtitle: "Jeder Teilnehmer hat eine definierte Rolle, um den Vermittlungsprozess sicher und nachvollziehbar zu halten.",
      items: [
        { title: "Rettungsteams & Tierheime", description: "Bieten gerettete Tiere mit verifizierten Gesundheits- und Verhaltensinformationen an.", icon: "🏠" },
        { title: "Registrierte Besitzer", description: "Vermitteln Tiere verantwortungsvoll über ein verifiziertes Angebot statt über informelle Kanäle.", icon: "🧑‍🤝‍🧑" },
        { title: "Interessenten", description: "Bewerben sich, durchlaufen die Prüfung und erhalten ein Tier, das zu ihrem Zuhause und ihrer Erfahrung passt.", icon: "🐾" },
        { title: "Tierärztliche Partner", description: "Bieten Gesundheitschecks und Dokumentation vor und nach der Vermittlung.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "Vorteile & Wirkung",
      title: "Warum verifizierte Vermittlung wichtig ist",
      subtitle: "Ein strukturierter Prozess führt zu besseren Ergebnissen für Tiere, neue Besitzer und die weitere Gemeinschaft.",
      items: [
        { title: "Weniger Rückgaben & erneute Abgaben", description: "Die Prüfung verringert Fehlanpassungen, die zur erneuten Abgabe von Tieren führen.", icon: "✅" },
        { title: "Gesündere Anfänge", description: "Verifizierte Gesundheitsunterlagen bedeuten, dass neue Besitzer von Anfang an wissen, welche Pflege ein Tier benötigt.", icon: "🩺" },
        { title: "Entlastung der Tierheimkapazität", description: "Jede erfolgreiche Vermittlung schafft Platz im Tierheim für das nächste Tier in Not.", icon: "🏠" },
        { title: "Laufende Unterstützung", description: "Neue Besitzer werden nach der Übergabe nicht allein gelassen — Hilfe ist verfügbar, wenn Fragen auftauchen.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Vertrauen & Sicherheit",
      title: "Eingebaute Schutzmaßnahmen für jede Vermittlung",
      subtitle: "",
      items: [
        { title: "Nur verifizierte Angebote", description: "Tiere werden nur über geprüfte Tierheime, Rettungsteams oder registrierte Besitzer angeboten.", icon: "🔒" },
        { title: "Dokumentierte Prüfung", description: "Jede Bewerbung und jede Prüfungsentscheidung wird zur Rechenschaftspflicht erfasst.", icon: "📋" },
        { title: "Strukturierte Übergabe", description: "Eine standardisierte Übergabecheckliste schützt sowohl das Tier als auch den neuen Besitzer.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Verwandte Programme",
      title: "Programme, die mit der Vermittlung zusammenhängen",
      items: [
        { title: "Rettung", description: "Viele vermittelbare Tiere beginnen ihre Reise über das Rettungsnetzwerk von WPA.", icon: "🚑", href: "/rescue" },
        { title: "Aufklärung & Bildung", description: "Erfahren Sie mehr über verantwortungsvolle Tierhaltung vor und nach der Vermittlung.", icon: "📢", href: "/awareness" },
        { title: "Spenden & Spendensammlung", description: "Unterstützen Sie die Tierheime und Kliniken, die Vermittlung möglich machen.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Bereit, einem geretteten Tier ein Zuhause zu geben?",
      subtitle: "Starten Sie noch heute eine Vermittlungsbewerbung oder bieten Sie ein Tier an, das ein Zuhause braucht.",
      primaryLabel: "Vermittlungsprozess starten",
      primaryHref: "/join",
      secondaryLabel: "WPA kontaktieren",
      secondaryHref: "/contact",
    },
  },

  rescue: {
    hero: {
      eyebrow: "Rettungsprogramm",
      title: "Schnelle Reaktion für Tiere in Not",
      subtitle: "Das Rettungsnetzwerk von WPA verbindet Bürgermeldungen mit Freiwilligen, Kliniken und Tierheimen — und koordiniert jeden Fall von der ersten Meldung bis zur vollständigen Genesung.",
      primaryLabel: "Eine Rettung melden",
      primaryHref: "/rescue",
      secondaryLabel: "Einem Rettungsteam beitreten",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Wie Rettung bei WPA funktioniert",
      title: "Von einer einzelnen Meldung zu einer koordinierten Reaktion",
      paragraphs: [
        "Tiere in Not werden oft von einfachen Bürgern gefunden, die nicht wissen, wen sie kontaktieren sollen oder was als Nächstes passiert. Das Rettungsprogramm von WPA existiert, um diese Lücke zu schließen — indem es eine einzelne Meldung in eine koordinierte, nachverfolgbare Reaktion verwandelt.",
        "Sobald ein Fall gemeldet wurde, wird er an den nächstgelegenen verfügbaren Freiwilligen oder eine Partnerklinik weitergeleitet, wobei bei jedem Schritt Statusaktualisierungen erfasst werden, damit Melder und Koordinatoren den Fortschritt in Echtzeit verfolgen können.",
        "Rettung endet nicht mit der Abholung — jeder Fall wird durch Behandlung, Rehabilitation und, wo angemessen, den Übergang in das Vermittlungsprogramm begleitet.",
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      title: "Von der Notfallmeldung zur Genesung",
      subtitle: "Ein strukturierter, nachverfolgbarer Prozess für jeden Fall, unabhängig vom Schweregrad.",
      steps: [
        { number: 1, title: "Notfallmeldung", description: "Jeder kann jederzeit ein Tier in Not mit Standort und Beschreibung melden." },
        { number: 2, title: "Koordination von Freiwilligen & Klinik", description: "Der nächstgelegene verfügbare Freiwillige oder die Partnerklinik wird benachrichtigt und entsendet." },
        { number: 3, title: "Fallverfolgung", description: "Jeder Fall erhält eine nachverfolgte ID, sodass sein Status von der Meldung bis zur Lösung sichtbar ist." },
        { number: 4, title: "Behandlung & Rehabilitation", description: "Partnerkliniken bieten bei Bedarf medizinische Behandlung und Genesungspflege." },
        { number: 5, title: "Statusaktualisierungen & Ergebnis", description: "Melder und Koordinatoren erhalten Updates bis zur Genesung, Vermittlung oder sicheren Freilassung." },
      ],
    },
    participants: {
      eyebrow: "Wer kann teilnehmen",
      title: "Rettung hängt von einem koordinierten Netzwerk ab",
      subtitle: "Jeder Fall durchläuft mehrere Hände, jede mit einer klaren Verantwortung.",
      items: [
        { title: "Bürger & Melder", description: "Melden Tiere in Not und liefern wichtige Erstinformationen.", icon: "📍" },
        { title: "Freiwillige", description: "Reagieren auf Meldungen, transportieren Tiere und unterstützen die Koordination vor Ort.", icon: "🙌" },
        { title: "Tierkliniken", description: "Bieten Notfallbehandlung, Diagnose und Rehabilitationspflege.", icon: "🏥" },
        { title: "Lokale Ortsgruppen", description: "Koordinieren Freiwillige und Kliniken in ihrer Region für eine schnellere Reaktion.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "Vorteile & Wirkung",
      title: "Warum koordinierte Rettung wichtig ist",
      subtitle: "Ein strukturiertes Netzwerk reagiert schneller und zuverlässiger als isolierte Bemühungen.",
      items: [
        { title: "Schnellere Reaktionszeiten", description: "Die Weiterleitung von Meldungen an das nächstgelegene verfügbare Team verkürzt die Zeit bis zur Hilfe.", icon: "⏱️" },
        { title: "Kein Fall geht verloren", description: "Nachverfolgte Fall-IDs bedeuten, dass jede Meldung bis zu einer Lösung verfolgt wird.", icon: "📋" },
        { title: "Höhere Genesungsraten", description: "Koordinierte Behandlung und Rehabilitation verbessern die Ergebnisse für verletzte Tiere.", icon: "🩺" },
        { title: "Vertrauen der Gemeinschaft", description: "Sichtbare Statusaktualisierungen stärken das Vertrauen, dass Meldungen zu echtem Handeln führen.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "Vertrauen & Sicherheit",
      title: "Rechenschaftspflicht in jeder Phase einer Rettung",
      subtitle: "",
      items: [
        { title: "Verifizierte Einsatzkräfte", description: "Nur geprüfte Freiwillige und Partnerkliniken werden zu aktiven Fällen entsendet.", icon: "🔒" },
        { title: "Transparente Fallverfolgung", description: "Jeder Fall hat einen sichtbaren Status, von der Meldung bis zur Lösung.", icon: "📊" },
        { title: "Dokumentierte Behandlung", description: "Medizinische Versorgung und Ergebnisse werden für jedes gerettete Tier erfasst.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "Verwandte Programme",
      title: "Programme, die mit Rettung zusammenhängen",
      items: [
        { title: "Vermittlung", description: "Rehabilitierte Tiere ohne Besitzer wechseln in das Vermittlungsprogramm.", icon: "🐾", href: "/adoption" },
        { title: "Spenden & Spendensammlung", description: "Notfallbehandlung und Transport werden durch nachverfolgte Spenden finanziert.", icon: "❤️", href: "/donation" },
        { title: "Aufklärung & Bildung", description: "Gemeinschaftliches Bewusstsein hilft, mehr Fälle frühzeitig zu melden.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Sehen Sie ein Tier in Not? Melden Sie es jetzt.",
      subtitle: "Jede Meldung zählt. Werden Sie Freiwilliger in unserem Rettungsnetzwerk oder unterstützen Sie es mit einer Spende.",
      primaryLabel: "Eine Rettung melden",
      primaryHref: "/rescue",
      secondaryLabel: "Freiwilliger werden",
      secondaryHref: "/volunteers",
    },
  },

  donation: {
    hero: {
      eyebrow: "Spenden- & Spendensammlungsprogramm",
      title: "Jede Spende nachverfolgt, jede Wirkung dokumentiert",
      subtitle: "WPA finanziert Rettung, Behandlung, Vermittlung und Aufklärung durch transparente, kampagnenbasierte Spendensammlung — mit öffentlichen Berichten darüber, wie jeder Beitrag verwendet wird.",
      primaryLabel: "Jetzt spenden",
      primaryHref: "/donation",
      secondaryLabel: "Öffentliche Berichte ansehen",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "Wie Spenden bei WPA funktionieren",
      title: "Finanzierung mit einem sichtbaren, nachverfolgbaren Weg",
      paragraphs: [
        "Spenden an WPA werden auf bestimmte Zwecke ausgerichtet — Notfallrettung, medizinische Behandlung, Impfkampagnen, Tierheimunterstützung oder allgemeiner Betrieb —, sodass Spender genau wissen, was ihr Beitrag unterstützt.",
        "Viele Spenden werden durch kampagnenbasierte Spendensammlungen erhoben, die an einen bestimmten Fall, eine Ortsgruppe oder eine Initiative gebunden sind, wobei Fortschritt und Ergebnisse für die Beitragenden sichtbar sind.",
        "Jede Spende erzeugt eine Quittung, und die Mittelverwendung wird in öffentlichen Berichten zusammengefasst, sodass das gesamte Netzwerk — Spender, Partner und die Öffentlichkeit — überprüfen kann, wie Ressourcen ausgegeben werden.",
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      title: "Vom Beitrag zum öffentlichen Bericht",
      subtitle: "Ein transparenter Weg für jede Spende, ob einmalig, wiederkehrend oder kampagnenbasiert.",
      steps: [
        { number: 1, title: "Einen Zweck oder eine Kampagne wählen", description: "Spender wählen einen Programmbereich, eine aktive Kampagne oder einen allgemeinen Fonds zur Unterstützung." },
        { number: 2, title: "Sicher beitragen", description: "Spenden werden verarbeitet, und für jeden Beitrag wird eine Quittung ausgestellt." },
        { number: 3, title: "Mittel zugewiesen & nachverfolgt", description: "Beiträge werden dem jeweiligen Programm oder der Kampagne, die sie unterstützen, zugeordnet erfasst." },
        { number: 4, title: "Programme umgesetzt", description: "Mittel werden für Rettungs-, Behandlungs-, Vermittlungs- oder Aufklärungsaktivitäten ausgeschüttet." },
        { number: 5, title: "Öffentliche Wirkungsberichte", description: "Mittelverwendung und Ergebnisse werden in regelmäßigen öffentlichen Berichten veröffentlicht." },
      ],
    },
    participants: {
      eyebrow: "Wer kann teilnehmen",
      title: "Gemeinsam Tierschutz finanzieren",
      subtitle: "Spenden und Spendensammlung umfassen Spender, Kampagnenorganisatoren und die Programme, die sie unterstützen.",
      items: [
        { title: "Einzelspender", description: "Leisten einmalige oder wiederkehrende Spenden an Programme oder Kampagnen.", icon: "💛" },
        { title: "Institutionelle Spender", description: "Unternehmen und Stiftungen finanzieren groß angelegte Programme und Partnerschaften.", icon: "🏢" },
        { title: "Spendensammler der Ortsgruppen", description: "Lokale Ortsgruppen führen Kampagnen für regionale Bedürfnisse und Notfälle durch.", icon: "🌍" },
        { title: "Partnerorganisationen", description: "NGOs und Kliniken bewerben sich um Programmfinanzierung im Zusammenhang mit bestimmten Initiativen.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "Vorteile & Wirkung",
      title: "Warum transparente Spendensammlung wichtig ist",
      subtitle: "Vertrauen in die Mittelverwendung ist die Grundlage eines nachhaltigen Spendenprogramms.",
      items: [
        { title: "Volle Transparenz", description: "Spender können genau sehen, welche Programme und Fälle ihr Beitrag unterstützt hat.", icon: "🔍" },
        { title: "Höhere Programmwirkung", description: "Nachverfolgte Zuweisung stellt sicher, dass Mittel dorthin fließen, wo sie am dringendsten benötigt werden.", icon: "📈" },
        { title: "Verifizierte Quittungen", description: "Jeder Beitrag wird für die eigenen Unterlagen des Spenders dokumentiert.", icon: "🧾" },
        { title: "Öffentliche Rechenschaftspflicht", description: "Regelmäßige Berichte halten das gesamte Netzwerk gegenüber Spendern und Partnern rechenschaftspflichtig.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "Vertrauen & Sicherheit",
      title: "Transparenz in jeden Beitrag eingebaut",
      subtitle: "",
      items: [
        { title: "Spenderquittungen", description: "Jede Spende erzeugt eine Quittung, die Betrag, Zweck und Datum bestätigt.", icon: "🧾" },
        { title: "Nachverfolgte Mittelzuweisung", description: "Beiträge werden dem jeweiligen Programm oder der Kampagne, die sie unterstützen, zugeordnet erfasst.", icon: "📊" },
        { title: "Öffentliche Wirkungsberichte", description: "Mittelverwendung und Ergebnisse werden für Spender, Partner und die Öffentlichkeit veröffentlicht.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "Verwandte Programme",
      title: "Durch Spenden finanzierte Programme",
      items: [
        { title: "Rettung", description: "Notfallreaktion und Behandlung werden durch Spenden finanziert.", icon: "🚑", href: "/rescue" },
        { title: "Vermittlung", description: "Tierheimpflege und medizinische Untersuchungen vor der Vermittlung hängen von der Finanzierung durch Spender ab.", icon: "🐾", href: "/adoption" },
        { title: "Aufklärung & Bildung", description: "Impf- und Bildungskampagnen werden durch Spenden finanziert.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "Finanzieren Sie verifizierte, transparente Tierschutzprogramme",
      subtitle: "Jeder Beitrag wird nachverfolgt, dokumentiert und den Programmen zugeführt, die ihn am dringendsten benötigen.",
      primaryLabel: "Jetzt spenden",
      primaryHref: "/donation",
      secondaryLabel: "Öffentliche Berichte ansehen",
      secondaryHref: "/reports",
    },
  },

  awareness: {
    hero: {
      eyebrow: "Aufklärungs- & Bildungsprogramm",
      title: "Aufbau einer Kultur verantwortungsvoller, mitfühlender Tierhaltung",
      subtitle: "Das Aufklärungsprogramm von WPA klärt Gemeinschaften über verantwortungsvolle Tierhaltung, Impfungen und Tierschutz auf — und verringert die Zahl der Tiere in einer Krise, bevor sie eintritt.",
      primaryLabel: "Ressourcen entdecken",
      primaryHref: "/awareness",
      secondaryLabel: "Einer lokalen Kampagne beitreten",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "Wie Aufklärung bei WPA funktioniert",
      title: "Prävention durch Bildung",
      paragraphs: [
        "Viele Tierschutzkrisen — Aussetzung, Krankheitsausbrüche, unsicherer Umgang — sind durch grundlegende Bildung vermeidbar. Das Aufklärungsprogramm von WPA existiert, um Gemeinschaften vor dem Eintreten einer Krise zu erreichen, nicht nur danach zu reagieren.",
        "Die Kampagnen decken verantwortungsvolle Tierhaltung, Impfpläne, Tierschutzethik und sichere Meldepraktiken ab, vermittelt durch lokale Ortsgruppen, Partnerkliniken und digitale Ressourcen.",
        "Ressourcen werden mit mehrsprachigem Zugang entwickelt, damit Bildung Gemeinschaften in der Sprache erreicht, die sie am besten verstehen, nicht nur in den Sprachen, in denen WPA standardmäßig arbeitet.",
      ],
    },
    howItWorks: {
      eyebrow: "So funktioniert es",
      title: "Vom Kampagnendesign zur Reichweite in der Gemeinschaft",
      subtitle: "Ein wiederholbares Modell, um Bildung dort zu vermitteln, wo sie am dringendsten benötigt wird.",
      steps: [
        { number: 1, title: "Bedürfnisse der Gemeinschaft ermitteln", description: "Lokale Ortsgruppen bewerten Lücken bei Bewusstsein, Impfabdeckung oder Meldepraktiken." },
        { number: 2, title: "Kampagne gestalten", description: "Kampagnen werden um ein bestimmtes Thema herum aufgebaut — Impfung, Vermittlung oder sicherer Umgang." },
        { number: 3, title: "Über Partner vermitteln", description: "Kliniken, Schulen und Gemeinschaftsgruppen helfen bei der Verteilung von Kampagnenmaterialien und -veranstaltungen." },
        { number: 4, title: "Mehrsprachige Ressourcen bereitstellen", description: "Bildungsmaterialien werden in den von der Gemeinschaft benötigten Sprachen zur Verfügung gestellt." },
        { number: 5, title: "Reichweite messen & berichten", description: "Reichweite und Ergebnisse der Kampagne werden über das Netzwerk von WPA nachverfolgt und berichtet." },
      ],
    },
    participants: {
      eyebrow: "Wer kann teilnehmen",
      title: "Aufklärung erreicht jeden Teil der Gemeinschaft",
      subtitle: "Bildungsprogramme werden unter Berücksichtigung mehrerer Mitwirkender und Zielgruppen aufgebaut.",
      items: [
        { title: "Tierbesitzer", description: "Lernen verantwortungsvolle Haltungspraktiken und Impfpläne.", icon: "🏠" },
        { title: "Schulen & Gemeinschaftsgruppen", description: "Veranstalten Aufklärungssitzungen und Jugendbildungsprogramme.", icon: "🏫" },
        { title: "Tierkliniken", description: "Bieten Impfberatung und Gesundheitsaufklärung neben der Versorgung.", icon: "🏥" },
        { title: "Freiwillige", description: "Verteilen Materialien und leiten lokale Aufklärungsveranstaltungen.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "Vorteile & Wirkung",
      title: "Warum Aufklärung den Bedarf an Rettung verringert",
      subtitle: "Prävention ist wirksamer und humaner als Krisenreaktion allein.",
      items: [
        { title: "Weniger Aussetzungsfälle", description: "Aufklärung über verantwortungsvolle Haltung verringert die Ursachen für Aussetzung.", icon: "📉" },
        { title: "Höhere Impfabdeckung", description: "Aufklärungskampagnen erhöhen die Teilnahme an präventiven Gesundheitsprogrammen.", icon: "💉" },
        { title: "Sicherere Meldungen", description: "Gemeinschaften, die den Rettungsprozess verstehen, melden Fälle früher und genauer.", icon: "📍" },
        { title: "Größere Reichweite", description: "Mehrsprachige Ressourcen stellen sicher, dass Bildung nicht durch Sprachbarrieren eingeschränkt wird.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "Vertrauen & Sicherheit",
      title: "Bildung, die auf verifizierten Standards beruht",
      subtitle: "",
      items: [
        { title: "Tierärztlich geprüfte Inhalte", description: "Gesundheits- und Impfberatung wird von verifizierten tierärztlichen Partnern geprüft.", icon: "🩺" },
        { title: "Lokal angepasste Kampagnen", description: "Ortsgruppen passen Materialien an lokale Vorschriften und den Gemeinschaftskontext an.", icon: "🌍" },
        { title: "Nachverfolgte Reichweite & Ergebnisse", description: "Die Wirkung der Kampagne wird gemessen und berichtet, nicht angenommen.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "Verwandte Programme",
      title: "Programme, die mit Aufklärung zusammenhängen",
      items: [
        { title: "Rettung", description: "Besser informierte Gemeinschaften melden Notfälle früher.", icon: "🚑", href: "/rescue" },
        { title: "Vermittlung", description: "Bildung hilft, neue Besitzer auf langfristigen Erfolg vorzubereiten.", icon: "🐾", href: "/adoption" },
        { title: "Spenden & Spendensammlung", description: "Kampagnen werden durch transparente, nachverfolgte Spenden finanziert.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "Helfen Sie, eine informiertere, mitfühlendere Gemeinschaft aufzubauen",
      subtitle: "Bringen Sie eine Aufklärungskampagne in Ihre Gemeinschaft oder unterstützen Sie eine bereits laufende.",
      primaryLabel: "Einer Kampagne beitreten",
      primaryHref: "/volunteers",
      secondaryLabel: "WPA kontaktieren",
      secondaryHref: "/contact",
    },
  },
};

// ─── ZH (Simplified Chinese) ────────────────────────────────────────────────

const zh: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "我们的项目",
      title: "五个协调项目，一个全球使命",
      subtitle: "WPA运行一系列相互连接的项目，涵盖动物福利的全生命周期——从预防、救援到领养、资金和教育。",
      primaryLabel: "成为会员",
      primaryHref: "/join",
      secondaryLabel: "立即捐赠",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "项目如何连接",
      title: "每个项目解决同一问题的不同部分",
      paragraphs: [
        "当努力分散时，动物福利就会失败——一次救援无处安置动物，一笔捐赠看不到影响，一场疫苗接种活动缺乏公众意识。",
        "WPA的项目设计为协同工作：意识减少危机中的动物数量，救援在危机发生时快速响应，领养为获救动物提供永久家园，透明的捐赠资金让每个项目持续运行。",
        "每个项目都遵循相同的验证、分会协调和透明标准，正如我们的治理和信任承诺中所述。",
      ],
    },
    programs: {
      eyebrow: "我们的项目",
      title: "了解每个项目",
      subtitle: "每个项目都有专属页面，介绍其运作方式、参与方式以及如何追踪影响。",
      items: [
        { title: "领养", description: "经核实的列表和负责任的匹配将获救动物与经过审核的爱心家庭连接。", icon: "🐾", href: "/adoption" },
        { title: "救援", description: "动物遇险时的紧急报告和志愿者协调，无论地点。", icon: "🚑", href: "/rescue" },
        { title: "捐赠与筹款", description: "基于活动的透明资金，用于治疗、运输和紧急护理。", icon: "❤️", href: "/donation" },
        { title: "宣传与教育", description: "关于负责任养宠、疫苗接种和动物福利的社区活动。", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "准备好参与WPA的项目了吗？",
      subtitle: "无论您想领养、报告救援、捐赠还是传播意识——都有明确的开始方式。",
      primaryLabel: "加入WPA",
      primaryHref: "/join",
      secondaryLabel: "与我们合作",
      secondaryHref: "/partners",
    },
  },
  adoption: {
    hero: {
      eyebrow: "领养项目",
      title: "经核实的领养，从首次匹配到永久家园",
      subtitle: "WPA的领养项目通过经核实的列表和交接流程，将获救动物与经过审核的负责任领养者连接。",
      primaryLabel: "浏览可领养宠物",
      primaryHref: "/adoption",
      secondaryLabel: "发布动物领养信息",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "WPA的领养如何运作",
      title: "从救援到负责任家庭的经核实路径",
      paragraphs: [
        "通过WPA发布领养的每只动物都来自经核实的来源——合作伙伴收容所、救援团队或注册主人——因此领养者在申请前就知道动物的背景、健康状况和行为记录。",
        "领养不是交易——而是经过审核的匹配。WPA的流程旨在保护动物和领养者，降低动物被再次遗弃或安置在不合适家庭的风险。",
        "支持不会在交接时结束：WPA的领养后资源帮助新宠物主人度过最初几周和几个月的护理。",
      ],
    },
    howItWorks: {
      eyebrow: "运作方式",
      title: "从经核实的列表到安全交接",
      subtitle: "每个领养都遵循一致的五步流程，无论分会或地区。",
      steps: [
        { number: 1, title: "经核实的宠物列表", description: "收容所、救援团队和主人提交动物健康记录和行为记录进行列表。" },
        { number: 2, title: "领养者申请", description: "潜在领养者提交申请，描述其家庭、经验和期望。" },
        { number: 3, title: "领养者审核", description: "WPA或合作收容所审查申请，可能进行家访或推荐人核查。" },
        { number: 4, title: "安全交接", description: "结构化交接包括健康文件、护理简报和签署领养条款。" },
        { number: 5, title: "领养后支持", description: "前几个月的跟进检查和兽医及行为资源访问。" },
      ],
    },
    participants: {
      eyebrow: "谁可以参与",
      title: "领养涉及网络的每个部分",
      subtitle: "每个参与者在保持领养流程安全和问责方面都有明确的角色。",
      items: [
        { title: "救援团队与收容所", description: "发布经核实的健康和行为信息的获救动物列表。", icon: "🏠" },
        { title: "注册主人", description: "通过经核实的列表负责任地重新安置动物，而不是通过非正式渠道。", icon: "🧑‍🤝‍🧑" },
        { title: "潜在领养者", description: "申请、完成审核并接收与其家庭和经验匹配的动物。", icon: "🐾" },
        { title: "兽医合作伙伴", description: "在领养前后提供健康检查和文件。", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "益处与影响",
      title: "为什么经核实的领养很重要",
      subtitle: "结构化的流程为动物、领养者和更广泛的社区产生更好的结果。",
      items: [
        { title: "减少退回与再次遗弃", description: "审核减少导致动物再次被放弃的不匹配。", icon: "✅" },
        { title: "更健康的开始", description: "经核实的健康记录意味着领养者从第一天就知道需要什么护理。", icon: "🩺" },
        { title: "收容所容量释放", description: "每次成功的领养都为下一只需要帮助的动物释放收容空间。", icon: "🏠" },
        { title: "持续支持", description: "新领养者在交接后不会被孤立——有疑问时可获得帮助。", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "信任与安全",
      title: "每次领养的内置保障",
      subtitle: "",
      items: [
        { title: "仅限经核实的列表", description: "动物仅通过经审核的收容所、救援团队或注册主人列表。", icon: "🔒" },
        { title: "有记录的审核", description: "每次领养者申请和审核决定都被记录以确保问责。", icon: "📋" },
        { title: "结构化交接", description: "标准交接清单保护动物和领养者。", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "相关项目",
      title: "与领养相关的项目",
      items: [
        { title: "救援", description: "许多可领养动物通过WPA的救援网络开始它们的旅程。", icon: "🚑", href: "/rescue" },
        { title: "宣传与教育", description: "在领养前后了解负责任的宠物饲养。", icon: "📢", href: "/awareness" },
        { title: "捐赠与筹款", description: "支持使领养成为可能的收容所和诊所。", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "准备好给获救动物一个家了吗？",
      subtitle: "立即开始领养申请或发布需要家园的动物信息。",
      primaryLabel: "开始领养流程",
      primaryHref: "/join",
      secondaryLabel: "联系WPA",
      secondaryHref: "/contact",
    },
  },
  rescue: {
    hero: {
      eyebrow: "救援项目",
      title: "困境动物的快速响应",
      subtitle: "WPA的救援网络将市民报告与志愿者、诊所和收容所连接——从首次报告到完全恢复，协调每个案例。",
      primaryLabel: "报告救援",
      primaryHref: "/rescue",
      secondaryLabel: "加入救援团队",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPA的救援如何运作",
      title: "从单次报告到协调响应",
      paragraphs: [
        "困境中的动物通常由不知道联系谁或接下来会发生什么的普通市民发现。WPA的救援项目旨在弥合这一差距——将单次报告转变为可追踪的协调响应。",
        "报告案例后，会路由到最近可用的志愿者或合作诊所，在每个阶段记录状态更新，以便报告者和协调者可以实时查看进展。",
        "救援不会在接走后结束——每个案例都会跟进治疗、康复，并在适当时转入领养项目。",
      ],
    },
    howItWorks: {
      eyebrow: "运作方式",
      title: "从紧急报告到康复",
      subtitle: "每个案例的结构化可追踪流程，无论严重程度。",
      steps: [
        { number: 1, title: "紧急报告", description: "任何人都可以随时报告困境动物并提供地点和描述。" },
        { number: 2, title: "志愿者与诊所协调", description: "通知并派遣最近可用的志愿者或合作诊所。" },
        { number: 3, title: "案例追踪", description: "每个案例获得追踪ID，状态从报告到解决全程可见。" },
        { number: 4, title: "治疗与康复", description: "合作诊所根据需要提供医疗和康复护理。" },
        { number: 5, title: "状态更新与结果", description: "报告者和协调者在康复、领养或安全释放期间获得更新。" },
      ],
    },
    participants: {
      eyebrow: "谁可以参与",
      title: "救援依赖协调网络",
      subtitle: "每个案例经过多人之手，每个都有明确的责任。",
      items: [
        { title: "市民与报告者", description: "报告困境动物并提供关键初始信息。", icon: "📍" },
        { title: "志愿者", description: "响应报告、运输动物、支持现场协调。", icon: "🙌" },
        { title: "兽医诊所", description: "提供紧急治疗、诊断和康复护理。", icon: "🏥" },
        { title: "地方分会", description: "在区域内协调志愿者和诊所，加速响应。", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "益处与影响",
      title: "为什么协调救援很重要",
      subtitle: "结构化网络比孤立努力更快更可靠地响应。",
      items: [
        { title: "更快的响应时间", description: "将报告路由到最近的可用团队减少援助时间。", icon: "⏱️" },
        { title: "没有案例被遗漏", description: "追踪案例ID意味着每个报告都跟到解决。", icon: "📋" },
        { title: "更高的康复率", description: "协调治疗和康复改善受伤动物的结果。", icon: "🩺" },
        { title: "社区信任", description: "可见的状态更新建立报告能带来实际行动的信心。", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "信任与安全",
      title: "救援每个阶段的问责",
      subtitle: "",
      items: [
        { title: "经核实的响应者", description: "只有经审核的志愿者和合作诊所被派遣到活跃案例。", icon: "🔒" },
        { title: "透明案例追踪", description: "每个案例都有可见的状态，从报告到解决。", icon: "📊" },
        { title: "记录治疗", description: "每只获救动物的医疗护理和结果均被记录。", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "相关项目",
      title: "与救援相关的项目",
      items: [
        { title: "领养", description: "无主的康复动物转入领养项目。", icon: "🐾", href: "/adoption" },
        { title: "捐赠与筹款", description: "紧急治疗和运输通过可追踪的捐赠资助。", icon: "❤️", href: "/donation" },
        { title: "宣传与教育", description: "社区意识帮助更多案例被及早报告。", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "看到困境中的动物？立即报告。",
      subtitle: "每份报告都很重要。作为志愿者加入我们的救援网络或通过捐赠支持它。",
      primaryLabel: "报告救援",
      primaryHref: "/rescue",
      secondaryLabel: "成为志愿者",
      secondaryHref: "/volunteers",
    },
  },
  donation: {
    hero: {
      eyebrow: "捐赠与筹款项目",
      title: "每笔捐赠可追踪，每份影响可报告",
      subtitle: "WPA通过基于活动的透明筹款为救援、治疗、领养和意识提供资金——公开报告每笔贡献的使用方式。",
      primaryLabel: "立即捐赠",
      primaryHref: "/donation",
      secondaryLabel: "查看公开报告",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "WPA的捐赠如何运作",
      title: "可见、可追踪的资金路径",
      paragraphs: [
        "对WPA的捐赠被定向到特定目的——紧急救援、医疗、疫苗接种活动、收容所支持或一般运营——因此捐赠者确切知道他们的贡献支持什么。",
        "许多捐赠通过基于活动的筹款筹集，与特定案例、分会或倡议挂钩，贡献者可以看到进展和结果。",
        "每笔捐赠都会生成收据，资金使用情况汇总到公开报告中，以便整个网络——捐赠者、合作伙伴和公众——审查资源的使用方式。",
      ],
    },
    howItWorks: {
      eyebrow: "运作方式",
      title: "从贡献到公开报告",
      subtitle: "每笔捐赠的透明路径，无论是一次性、定期还是基于活动的。",
      steps: [
        { number: 1, title: "选择目的或活动", description: "捐赠者选择支持的项目领域、活跃活动或一般基金。" },
        { number: 2, title: "安全贡献", description: "处理捐赠并为每笔贡献发出收据。" },
        { number: 3, title: "资金分配与追踪", description: "贡献根据支持的具体项目或活动进行记录。" },
        { number: 4, title: "项目交付", description: "资金拨付给救援、治疗、领养或意识活动。" },
        { number: 5, title: "公开影响报告", description: "资金使用和结果在定期公开报告中发布。" },
      ],
    },
    participants: {
      eyebrow: "谁可以参与",
      title: "共同资助动物福利",
      subtitle: "捐赠和筹款涉及捐赠者、活动组织者和他们支持的项目。",
      items: [
        { title: "个人捐赠者", description: "向项目或活动提供一次性或定期捐赠。", icon: "💛" },
        { title: "机构捐赠者", description: "企业和基金会为大规模项目和合作伙伴关系提供资金。", icon: "🏢" },
        { title: "分会筹款人", description: "地方分会为区域需求和紧急情况开展活动。", icon: "🌍" },
        { title: "合作伙伴机构", description: "NGO和诊所申请与特定倡议挂钩的项目资金。", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "益处与影响",
      title: "为什么透明筹款很重要",
      subtitle: "对资金使用的信任是可持续捐赠项目的基础。",
      items: [
        { title: "完全可见", description: "捐赠者可以确切看到他们的贡献支持了哪些项目和案例。", icon: "🔍" },
        { title: "更高的项目影响", description: "追踪分配确保资金流向最需要的地方。", icon: "📈" },
        { title: "经核实的收据", description: "每笔贡献都有文件记录供捐赠者留存。", icon: "🧾" },
        { title: "公开问责", description: "定期报告保持整个网络对捐赠者和合作伙伴的问责。", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "信任与安全",
      title: "每笔贡献的内置透明",
      subtitle: "",
      items: [
        { title: "捐赠收据", description: "每笔捐赠生成确认金额、目的和日期的收据。", icon: "🧾" },
        { title: "追踪资金分配", description: "贡献根据支持的具体项目或活动进行记录。", icon: "📊" },
        { title: "公开影响报告", description: "资金使用和结果向捐赠者、合作伙伴和公众发布。", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "相关项目",
      title: "通过捐赠资助的项目",
      items: [
        { title: "救援", description: "紧急响应和治疗通过捐赠资助。", icon: "🚑", href: "/rescue" },
        { title: "领养", description: "领养前的收容护理和体检依赖捐赠者资金。", icon: "🐾", href: "/adoption" },
        { title: "宣传与教育", description: "疫苗接种和教育活动通过捐赠资助。", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "资助经核实、透明的动物福利项目",
      subtitle: "每笔贡献都被追踪、报告并定向到最需要的地方。",
      primaryLabel: "立即捐赠",
      primaryHref: "/donation",
      secondaryLabel: "查看公开报告",
      secondaryHref: "/reports",
    },
  },
  awareness: {
    hero: {
      eyebrow: "宣传与教育项目",
      title: "培养负责任、富有同情心的宠物饲养文化",
      subtitle: "WPA的意识项目教育社区关于负责任的宠物饲养、疫苗接种和动物福利——在危机发生前减少困境中的动物数量。",
      primaryLabel: "了解资源",
      primaryHref: "/awareness",
      secondaryLabel: "加入当地活动",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPA的意识如何运作",
      title: "通过教育预防",
      paragraphs: [
        "许多动物福利危机——遗弃、疾病爆发、不安全的处理方式——可以通过基本教育预防。WPA的意识项目旨在在危机发生前接触社区，而不仅仅是事后响应。",
        "活动涵盖负责任的宠物饲养、疫苗接种计划、动物福利伦理和安全报告实践，通过地方分会、合作诊所和数字资源提供。",
        "资源开发考虑多语言访问，因此教育以社区最理解的语言接触社区，而不仅仅是WPA默认使用的语言。",
      ],
    },
    howItWorks: {
      eyebrow: "运作方式",
      title: "从活动设计到社区覆盖",
      subtitle: "在最需要的地方提供教育的可复制模式。",
      steps: [
        { number: 1, title: "识别社区需求", description: "地方分会评估意识、疫苗接种覆盖或报告实践的差距。" },
        { number: 2, title: "设计活动", description: "围绕特定主题构建活动——疫苗接种、领养或安全处理。" },
        { number: 3, title: "通过合作伙伴提供", description: "诊所、学校和社区团体帮助分发活动材料和举办活动。" },
        { number: 4, title: "提供多语言资源", description: "教育材料以社区需要的语言提供。" },
        { number: 5, title: "衡量和报告覆盖", description: "活动覆盖和结果通过WPA网络追踪和报告。" },
      ],
    },
    participants: {
      eyebrow: "谁可以参与",
      title: "意识触及社区的每个部分",
      subtitle: "教育项目考虑了多个贡献者和受众。",
      items: [
        { title: "宠物主人", description: "了解负责任饲养实践和疫苗接种计划。", icon: "🏠" },
        { title: "学校与社区团体", description: "举办意识讲座和青年教育项目。", icon: "🏫" },
        { title: "兽医诊所", description: "在护理的同时提供疫苗接种指导和健康教育。", icon: "🏥" },
        { title: "志愿者", description: "分发材料并主导当地意识活动。", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "益处与影响",
      title: "为什么意识减少救援需求",
      subtitle: "预防比单独应对危机更有效、更人道。",
      items: [
        { title: "减少遗弃案例", description: "负责任饲养教育减少遗弃的驱动因素。", icon: "📉" },
        { title: "更高的疫苗接种覆盖", description: "意识活动增加预防性健康项目的参与。", icon: "💉" },
        { title: "更安全的报告", description: "了解救援流程的社区更早更准确地报告案例。", icon: "📍" },
        { title: "更广泛的覆盖", description: "多语言资源确保教育不受语言障碍限制。", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "信任与安全",
      title: "基于经核实标准的教育",
      subtitle: "",
      items: [
        { title: "兽医审核内容", description: "健康和疫苗接种指导由经核实的兽医合作伙伴审核。", icon: "🩺" },
        { title: "当地适配活动", description: "分会根据当地法规和社区环境调整材料。", icon: "🌍" },
        { title: "追踪覆盖与结果", description: "活动影响经过衡量和报告，而非假设。", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "相关项目",
      title: "与意识相关的项目",
      items: [
        { title: "救援", description: "信息更充分的社区更早报告困境案例。", icon: "🚑", href: "/rescue" },
        { title: "领养", description: "教育帮助新领养者为长期成功做好准备。", icon: "🐾", href: "/adoption" },
        { title: "捐赠与筹款", description: "活动通过透明、可追踪的捐赠资助。", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "帮助建立更知情、更有同情心的社区",
      subtitle: "将意识活动带到您的社区或支持正在进行的活动。",
      primaryLabel: "加入活动",
      primaryHref: "/volunteers",
      secondaryLabel: "联系WPA",
      secondaryHref: "/contact",
    },
  },
};

// ─── JA (Japanese) ──────────────────────────────────────────────────────────

const ja: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "私たちの活動",
      title: "5つの連携プログラム、1つのグローバルミッション",
      subtitle: "WPAは動物福祉の全ライフサイクルをカバーする相互接続プログラムを運営しています——予防、救助から里親、資金、教育まで。",
      primaryLabel: "会員になる",
      primaryHref: "/join",
      secondaryLabel: "今すぐ寄付",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "プログラムの連携",
      title: "各プログラムが同じ問題の異なる部分を解決する",
      paragraphs: [
        "取り組みが断片化されると動物福祉は失敗します——行き場のない救助、目に見える影響のない寄付、公衆の意識がない予防接種キャンペーン。",
        "WPAのプログラムは連携して機能するように設計されています：意識は危機にある動物の数を減らし、救助は危機発生時に迅速に対応し、里親は救助動物に永住の場を与え、透明な寄付資金がすべてのプログラムを維持します。",
        "すべてのプログラムは、ガバナンスと信頼の約束で説明されている同じ検証、支部連携、透明性基準の下で運営されています。",
      ],
    },
    programs: {
      eyebrow: "私たちのプログラム",
      title: "各プログラムを見る",
      subtitle: "各プログラムには、仕組み、参加方法、影響の追跡方法を説明する専用ページがあります。",
      items: [
        { title: "里親募集", description: "検証済みのリストと責任あるマッチングで、救助動物を審査済みの愛情ある家庭につなげます。", icon: "🐾", href: "/adoption" },
        { title: "救助", description: "どこでも苦境の動物のための緊急報告とボランティア連携。", icon: "🚑", href: "/rescue" },
        { title: "寄付・資金調達", description: "治療、輸送、緊急ケアのための透明なキャンペーンベースの資金。", icon: "❤️", href: "/donation" },
        { title: "啓発・教育", description: "責任ある飼育、予防接種、動物福祉に関するコミュニティキャンペーン。", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "WPAのプログラムに参加する準備はできましたか？",
      subtitle: "里親、救助報告、寄付、啓発のいずれであっても——明確な始め方があります。",
      primaryLabel: "WPAに参加",
      primaryHref: "/join",
      secondaryLabel: "パートナーになる",
      secondaryHref: "/partners",
    },
  },
  adoption: {
    hero: {
      eyebrow: "里親プログラム",
      title: "最初のマッチングから終生の家まで、検証済みの里親募集",
      subtitle: "WPAの里親プログラムは、検証済みのリストと引き渡しプロセスを通じて、救助動物を審査済みの責任ある里親につなげます。",
      primaryLabel: "里親募集ペットを見る",
      primaryHref: "/adoption",
      secondaryLabel: "動物を里親募集する",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "WPAの里親の仕組み",
      title: "救助から責任ある家庭への検証済みパス",
      paragraphs: [
        "WPAを通じて里親募集されるすべての動物は検証済みの来源——パートナー保護施設、救助チーム、登録オーナー——から来ており、里親は申請前に動物の背景、健康状態、行動ノートを知ることができます。",
        "里親は取引ではなく、審査済みのマッチングです。WPAのプロセスは動物と里親の両方を保護し、動物が再び放棄されたり不適切な家庭に置かれたりするリスクを減らすように設計されています。",
        "サポートは引き渡しで終わりません：WPAの里親後リソースは、新しいペットオーナーが最初の数週間と数ヶ月のケアを乗り越えるのを助けます。",
      ],
    },
    howItWorks: {
      eyebrow: "仕組み",
      title: "検証済みリストから安全な引き渡しまで",
      subtitle: "支部や地域に関係なく、すべての里親募集に一貫した5ステップのプロセス。",
      steps: [
        { number: 1, title: "検証済みペットリスト", description: "保護施設、救助チーム、オーナーが健康記録と行動ノートを添えて動物をリストします。" },
        { number: 2, title: "里親申請", description: "里親希望者が家庭、経験、期待を記述した申請書を提出します。" },
        { number: 3, title: "里親審査", description: "WPAまたはパートナー保護施設が申請書をレビューし、家庭訪問または身元確認を行う場合があります。" },
        { number: 4, title: "安全な引き渡し", description: "構造化された引き渡しには健康文書、ケアブリーフィング、署名済み里親規約が含まれます。" },
        { number: 5, title: "里親後サポート", description: "最初の数ヶ月間のフォローアップチェックインと獣医・行動リソースへのアクセス。" },
      ],
    },
    participants: {
      eyebrow: "参加できる人",
      title: "里親はネットワークのすべての部分を関与させる",
      subtitle: "各参加者は里親プロセスを安全で責任あるものにするための明確な役割を持っています。",
      items: [
        { title: "救助チーム・保護施設", description: "検証済みの健康・行動情報で救助動物をリストします。", icon: "🏠" },
        { title: "登録オーナー", description: "非公式なチャネルではなく検証済みのリストを通じて責任ある新しい家を見つけます。", icon: "🧑‍🤝‍🧑" },
        { title: "里親希望者", description: "申請し、審査を完了し、家庭と経験に合った動物を受け取ります。", icon: "🐾" },
        { title: "獣医パートナー", description: "里親の前後に健康チェックと文書を提供します。", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "メリットと影響",
      title: "検証済み里親が重要な理由",
      subtitle: "構造化されたプロセスは動物、里親、より広いコミュニティにより良い結果をもたらします。",
      items: [
        { title: "返品・再放棄の減少", description: "審査が動物の再放棄につながるミスマッチを減らします。", icon: "✅" },
        { title: "より健康的なスタート", description: "検証済み健康記録で里親は初日から必要なケアがわかります。", icon: "🩺" },
        { title: "保護施設の容量緩和", description: "成功した里親は次の動物のためのスペースを空けます。", icon: "🏠" },
        { title: "継続サポート", description: "新しい里親は引き渡し後に放置されません——質問があればサポートが得られます。", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "信頼と安全",
      title: "すべての里親に組み込まれたセーフガード",
      subtitle: "",
      items: [
        { title: "検証済みリストのみ", description: "動物は審査済みの保護施設、救助チーム、登録オーナーを通じてのみリストされます。", icon: "🔒" },
        { title: "文書化された審査", description: "すべての里親申請と審査決定は説明責任のために記録されます。", icon: "📋" },
        { title: "構造化された引き渡し", description: "標準引き渡しチェックリストが動物と里親の両方を保護します。", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "関連プログラム",
      title: "里親に関連するプログラム",
      items: [
        { title: "救助", description: "多くの里親募集動物はWPAの救助ネットワークを通じて旅を始めます。", icon: "🚑", href: "/rescue" },
        { title: "啓発・教育", description: "里親の前後に責任あるペット飼育について学びます。", icon: "📢", href: "/awareness" },
        { title: "寄付・資金調達", description: "里親を可能にする保護施設とクリニックを支援します。", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "救助動物に家を与える準備はできましたか？",
      subtitle: "里親申請を開始するか、家を必要とする動物を今日リストしてください。",
      primaryLabel: "里親プロセスを開始",
      primaryHref: "/join",
      secondaryLabel: "WPAに連絡",
      secondaryHref: "/contact",
    },
  },
  rescue: {
    hero: {
      eyebrow: "救助プログラム",
      title: "苦境の動物への迅速な対応",
      subtitle: "WPAの救助ネットワークは市民報告をボランティア、クリニック、保護施設につなげます——最初の報告から完全な回復まで、すべてのケースを連携します。",
      primaryLabel: "救助を報告",
      primaryHref: "/rescue",
      secondaryLabel: "救助チームに参加",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPAの救助の仕組み",
      title: "単一の報告から連携された対応まで",
      paragraphs: [
        "苦境の動物は、誰に連絡すればよいか、次に何が起こるかわからない一般市民によって発見されることがよくあります。WPAの救助プログラムはそのギャップを埋めるために存在します——単一の報告を追跡可能で連携された対応に変えます。",
        "ケースが報告されると、最寄りの利用可能なボランティアまたはパートナークリニックにルーティングされ、各段階でステータス更新が記録されるため、報告者とコーディネーターはリアルタイムで進捗を確認できます。",
        "救助は回収で終わりません——すべてのケースは治療、リハビリテーション、適切な場合は里親プログラムへの移行まで追跡されます。",
      ],
    },
    howItWorks: {
      eyebrow: "仕組み",
      title: "緊急報告から回復まで",
      subtitle: "重症度に関係なく、すべてのケースの構造化された追跡可能なプロセス。",
      steps: [
        { number: 1, title: "緊急報告", description: "誰でもいつでも場所と説明で苦境の動物を報告できます。" },
        { number: 2, title: "ボランティア・クリニック連携", description: "最寄りの利用可能なボランティアまたはパートナークリニックに通知・派遣されます。" },
        { number: 3, title: "ケース追跡", description: "すべてのケースに追跡IDが割り当てられ、報告から解決までステータスが可視化されます。" },
        { number: 4, title: "治療・リハビリテーション", description: "パートナークリニックが必要に応じて医療と回復ケアを提供します。" },
        { number: 5, title: "ステータス更新と結果", description: "報告者とコーディネーターは回復、里親、または安全なリリースを通じて更新を受け取ります。" },
      ],
    },
    participants: {
      eyebrow: "参加できる人",
      title: "救助は連携ネットワークに依存する",
      subtitle: "すべてのケースはいくつかの手を経て進み、それぞれに明確な責任があります。",
      items: [
        { title: "市民・報告者", description: "苦境の動物を報告し、重要な初期情報を提供します。", icon: "📍" },
        { title: "ボランティア", description: "報告に対応し、動物を輸送し、現場調整をサポートします。", icon: "🙌" },
        { title: "獣医クリニック", description: "緊急治療、診断、リハビリケアを提供します。", icon: "🏥" },
        { title: "地域支部", description: "地域内のボランティアとクリニックを調整して迅速な対応を実現します。", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "メリットと影響",
      title: "連携された救助が重要な理由",
      subtitle: "構造化されたネットワークは孤立した取り組みよりも迅速で確実に対応します。",
      items: [
        { title: "より迅速な対応時間", description: "最寄りの利用可能なチームに報告をルーティングすることで救助時間を短縮します。", icon: "⏱️" },
        { title: "ケースの脱落なし", description: "追跡ケースIDにより、すべての報告が解決まで追跡されます。", icon: "📋" },
        { title: "高い回復率", description: "連携された治療とリハビリが負傷動物の転帰を改善します。", icon: "🩺" },
        { title: "コミュニティ信頼", description: "可視的なステータス更新が報告が実際の行動につながるという信頼を築きます。", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "信頼と安全",
      title: "救助のすべての段階で説明責任",
      subtitle: "",
      items: [
        { title: "検証済み対応者", description: "審査済みのボランティアとパートナークリニックのみがアクティブなケースに派遣されます。", icon: "🔒" },
        { title: "透明なケース追跡", description: "すべてのケースに報告から解決まで可視的なステータスがあります。", icon: "📊" },
        { title: "文書化された治療", description: "各救助動物の医療と結果が記録されます。", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "関連プログラム",
      title: "救助に関連するプログラム",
      items: [
        { title: "里親募集", description: "オーナーのいない回復動物は里親プログラムに移行します。", icon: "🐾", href: "/adoption" },
        { title: "寄付・資金調達", description: "緊急治療と輸送は追跡された寄付で資金調達されます。", icon: "❤️", href: "/donation" },
        { title: "啓発・教育", description: "コミュニティの意識により、より多くのケースが早期に報告されます。", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "苦境の動物を見ましたか？今すぐ報告してください。",
      subtitle: "すべての報告が重要です。ボランティアとして救助ネットワークに参加するか、寄付でサポートしてください。",
      primaryLabel: "救助を報告",
      primaryHref: "/rescue",
      secondaryLabel: "ボランティアになる",
      secondaryHref: "/volunteers",
    },
  },
  donation: {
    hero: {
      eyebrow: "寄付・資金調達プログラム",
      title: "すべての寄付を追跡、すべての影響を報告",
      subtitle: "WPAは透明なキャンペーンベースの資金調達を通じて救助、治療、里親、啓発に資金を提供します——各貢献の使用方法を公開報告します。",
      primaryLabel: "今すぐ寄付",
      primaryHref: "/donation",
      secondaryLabel: "公開報告書を見る",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "WPAの寄付の仕組み",
      title: "可視的で追跡可能な資金のパス",
      paragraphs: [
        "WPAへの寄付は特定の目的——緊急救助、医療、予防接種キャンペーン、保護施設サポート、または一般運営——に向けられるため、寄付者は自分の貢献が何をサポートするか正確にわかります。",
        "多くの寄付はキャンペーンベースの資金調達を通じて集められ、特定のケース、支部、イニシアチブに紐付けられ、貢献者に進捗と結果が可視化されます。",
        "すべての寄付に領収書が発行され、資金使用は公開報告書に集約されるため、ネットワーク全体——寄付者、パートナー、一般の人々——が資源の使途をレビューできます。",
      ],
    },
    howItWorks: {
      eyebrow: "仕組み",
      title: "貢献から公開報告まで",
      subtitle: "一回限り、定期、キャンペーンベースのいずれの寄付にも透明なパス。",
      steps: [
        { number: 1, title: "目的またはキャンペーンを選択", description: "寄付者はサポートするプログラム分野、アクティブキャンペーン、または一般基金を選択します。" },
        { number: 2, title: "安全に寄付", description: "寄付が処理され、すべての貢献に領収書が発行されます。" },
        { number: 3, title: "資金の配分と追跡", description: "貢献はサポートする特定のプログラムまたはキャンペーンに対して記録されます。" },
        { number: 4, title: "プログラムの提供", description: "資金は救助、治療、里親、啓発活動に支払われます。" },
        { number: 5, title: "公開影響報告", description: "資金使用と成果が定期的な公開報告書で発表されます。" },
      ],
    },
    participants: {
      eyebrow: "参加できる人",
      title: "動物福祉への資金提供を共に",
      subtitle: "寄付と資金調達は寄付者、キャンペーン主催者、サポートするプログラムを関与させます。",
      items: [
        { title: "個人寄付者", description: "プログラムまたはキャンペーンに1回または定期的な寄付をします。", icon: "💛" },
        { title: "機関寄付者", description: "企業と財団が大規模プログラムとパートナーシップに資金提供します。", icon: "🏢" },
        { title: "支部資金調達", description: "地域支部が地域のニーズと緊急事態のキャンペーンを実行します。", icon: "🌍" },
        { title: "パートナー団体", description: "NGOとクリニックが特定のイニシアチブに紐付いたプログラム資金を申請します。", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "メリットと影響",
      title: "透明な資金調達が重要な理由",
      subtitle: "資金使用への信頼が持続可能な寄付プログラムの基盤です。",
      items: [
        { title: "完全な可視性", description: "寄付者は貢献がどのプログラムとケースをサポートしたか正確に確認できます。", icon: "🔍" },
        { title: "より高いプログラム影響", description: "追跡された配分により、資金が最も必要な場所に届きます。", icon: "📈" },
        { title: "検証済み領収書", description: "すべての貢献は寄付者の記録のために文書化されます。", icon: "🧾" },
        { title: "公開説明責任", description: "定期的な報告がネットワーク全体を寄付者とパートナーに対して責任ある状態に保ちます。", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "信頼と安全",
      title: "すべての貢献に組み込まれた透明性",
      subtitle: "",
      items: [
        { title: "寄付者領収書", description: "すべての寄付に金額、目的、日付を確認する領収書が発行されます。", icon: "🧾" },
        { title: "追跡された資金配分", description: "貢献はサポートする特定のプログラムまたはキャンペーンに対して記録されます。", icon: "📊" },
        { title: "公開影響報告書", description: "資金使用と成果が寄付者、パートナー、一般の人々に公開されます。", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "関連プログラム",
      title: "寄付で資金提供されるプログラム",
      items: [
        { title: "救助", description: "緊急対応と治療は寄付で資金提供されます。", icon: "🚑", href: "/rescue" },
        { title: "里親募集", description: "里親前の保護ケアと健康チェックは寄付者の資金に依存します。", icon: "🐾", href: "/adoption" },
        { title: "啓発・教育", description: "予防接種と教育キャンペーンは寄付で資金提供されます。", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "検証済みで透明な動物福祉プログラムに資金提供",
      subtitle: "すべての貢献は追跡・報告され、最も必要なプログラムに向けられます。",
      primaryLabel: "今すぐ寄付",
      primaryHref: "/donation",
      secondaryLabel: "公開報告書を見る",
      secondaryHref: "/reports",
    },
  },
  awareness: {
    hero: {
      eyebrow: "啓発・教育プログラム",
      title: "責任ある慈愛に満ちたペット飼育の文化を築く",
      subtitle: "WPAの啓発プログラムは責任あるペット飼育、予防接種、動物福祉についてコミュニティを教育します——危機が起こる前に苦境の動物の数を減らします。",
      primaryLabel: "リソースを見る",
      primaryHref: "/awareness",
      secondaryLabel: "地域キャンペーンに参加",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPAの啓発の仕組み",
      title: "教育による予防",
      paragraphs: [
        "多くの動物福祉危機——放棄、疾病発生、安全でない取り扱い——は基本的な教育で予防可能です。WPAの啓発プログラムは危機が起こる前にコミュニティに届くために存在し、事後対応だけではありません。",
        "キャンペーンは責任あるペット飼育、予防接種スケジュール、動物福祉倫理、安全な報告慣行をカバーし、地域支部、パートナークリニック、デジタルリソースを通じて提供されます。",
        "リソースは多言語アクセスを考慮して開発されており、教育はコミュニティが最も理解する言語で届き、WPAがデフォルトで運営する言語だけではありません。",
      ],
    },
    howItWorks: {
      eyebrow: "仕組み",
      title: "キャンペーン設計からコミュニティへの到達まで",
      subtitle: "最も必要な場所に教育を届けるための再現可能なモデル。",
      steps: [
        { number: 1, title: "コミュニティニーズの特定", description: "地域支部が意識、予防接種カバー率、報告慣行のギャップを評価します。" },
        { number: 2, title: "キャンペーン設計", description: "特定のトピック——予防接種、里親募集、安全な取り扱い——を中心にキャンペーンを構築します。" },
        { number: 3, title: "パートナーを通じて提供", description: "クリニック、学校、コミュニティグループがキャンペーン資料とイベントの配布を支援します。" },
        { number: 4, title: "多言語リソースの提供", description: "教育資料はコミュニティが必要とする言語で提供されます。" },
        { number: 5, title: "到達と結果の測定・報告", description: "キャンペーンの到達と成果はWPAのネットワークを通じて追跡・報告されます。" },
      ],
    },
    participants: {
      eyebrow: "参加できる人",
      title: "啓発はコミュニティのすべての部分に届く",
      subtitle: "教育プログラムは複数の貢献者とオーディエンスを考慮して構築されています。",
      items: [
        { title: "ペットオーナー", description: "責任ある飼育慣行と予防接種スケジュールを学びます。", icon: "🏠" },
        { title: "学校・コミュニティグループ", description: "啓発セッションと青少年教育プログラムを主催します。", icon: "🏫" },
        { title: "獣医クリニック", description: "ケアとともに予防接種ガイダンスと健康教育を提供します。", icon: "🏥" },
        { title: "ボランティア", description: "資料を配布し、地域の啓発イベントをリードします。", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "メリットと影響",
      title: "啓発が救助の必要性を減らす理由",
      subtitle: "予防は危機対応のみよりも効果的で人道的です。",
      items: [
        { title: "放棄ケースの減少", description: "責任ある飼育教育が放棄の要因を減らします。", icon: "📉" },
        { title: "予防接種カバー率の向上", description: "啓発キャンペーンが予防的健康プログラムへの参加を増やします。", icon: "💉" },
        { title: "より安全な報告", description: "救助プロセスを理解するコミュニティはケースをより早く正確に報告します。", icon: "📍" },
        { title: "より広い到達", description: "多言語リソースが教育を言語障壁で制限されないようにします。", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "信頼と安全",
      title: "検証済み基準に基づく教育",
      subtitle: "",
      items: [
        { title: "獣医レビュー済みコンテンツ", description: "健康と予防接種のガイダンスは検証済み獣医パートナーによってレビューされます。", icon: "🩺" },
        { title: "地域適応キャンペーン", description: "支部は資料を地域の規制とコミュニティの文脈に適応させます。", icon: "🌍" },
        { title: "追跡された到達と結果", description: "キャンペーンの影響は測定・報告され、推定ではありません。", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "関連プログラム",
      title: "啓発に関連するプログラム",
      items: [
        { title: "救助", description: "より情報のあるコミュニティは苦境のケースを早期に報告します。", icon: "🚑", href: "/rescue" },
        { title: "里親募集", description: "教育は新しい里親の長期的な成功を準備するのに役立ちます。", icon: "🐾", href: "/adoption" },
        { title: "寄付・資金調達", description: "キャンペーンは透明で追跡された寄付で資金提供されます。", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "より情報のある慈愛に満ちたコミュニティの構築を支援",
      subtitle: "あなたのコミュニティに啓発キャンペーンを持ってくるか、すでに進行中のキャンペーンをサポートしてください。",
      primaryLabel: "キャンペーンに参加",
      primaryHref: "/volunteers",
      secondaryLabel: "WPAに連絡",
      secondaryHref: "/contact",
    },
  },
};

// ─── KO (Korean) ────────────────────────────────────────────────────────────

const ko: ProgramsContent = {
  overview: {
    hero: {
      eyebrow: "우리의 활동",
      title: "5개의 조율된 프로그램, 하나의 글로벌 미션",
      subtitle: "WPA는 동물 복지의 전 라이프사이클을 다루는 연계된 프로그램을 운영합니다 — 예방과 구조부터 입양, 자금, 교육까지.",
      primaryLabel: "회원 가입",
      primaryHref: "/join",
      secondaryLabel: "지금 기부",
      secondaryHref: "/donation",
    },
    intro: {
      eyebrow: "프로그램이 어떻게 연결되는가",
      title: "각 프로그램은 같은 문제의 다른 부분을 해결합니다",
      paragraphs: [
        "노력이 분산되면 동물 복지는 실패합니다 — 동물을 놓아줄 곳이 없는 구조, 눈에 보이는 영향이 없는 기부, 대중 인식이 없는 예방접종 캠페인.",
        "WPA의 프로그램은 함께 작동하도록 설계되었습니다: 인식은 위기에 처한 동물의 수를 줄이고, 구조는 위기가 발생했을 때 신속히 대응하며, 입양은 구조된 동물에게 영구적인 집을 제공하고, 투명한 기부 자금이 모든 프로그램을 지속시킵니다.",
        "모든 프로그램은 거버넌스와 신뢰 약속에서 설명된 동일한 검증, 지부 조율, 투명성 기준에 따라 운영됩니다.",
      ],
    },
    programs: {
      eyebrow: "우리의 프로그램",
      title: "각 프로그램 알아보기",
      subtitle: "각 프로그램에는 작동 방식, 참여 방법, 성과 추적 방법을 다루는 전용 페이지가 있습니다.",
      items: [
        { title: "입양", description: "검증된 목록과 책임감 있는 매칭으로 구조된 동물을 심사된 가정과 연결합니다.", icon: "🐾", href: "/adoption" },
        { title: "구조", description: "위험에 처한 동물에 대한 긴급 신고와 자원봉사자 조율, 어디서든.", icon: "🚑", href: "/rescue" },
        { title: "기부 및 모금", description: "치료, 이송, 긴급 돌봄을 위한 투명하고 캠페인 기반 자금.", icon: "❤️", href: "/donation" },
        { title: "인식개선 및 교육", description: "책임감 있는 소유, 예방접종, 동물 복지에 대한 지역사회 캠페인.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "WPA 프로그램에 참여할 준비가 되셨나요?",
      subtitle: "입양, 구조 신고, 기부, 인식 확산 — 명확한 시작 방법이 있습니다.",
      primaryLabel: "WPA 가입",
      primaryHref: "/join",
      secondaryLabel: "파트너십 맺기",
      secondaryHref: "/partners",
    },
  },
  adoption: {
    hero: {
      eyebrow: "입양 프로그램",
      title: "검증된 입양, 첫 매칭부터 영원한 집까지",
      subtitle: "WPA의 입양 프로그램은 검증된 목록과 인도 절차를 통해 구조된 동물을 심사된 책임감 있는 입양자와 연결합니다.",
      primaryLabel: "입양 가능한 반려동물 보기",
      primaryHref: "/adoption",
      secondaryLabel: "입양 동물 등록하기",
      secondaryHref: "/join",
    },
    intro: {
      eyebrow: "WPA의 입양 방식",
      title: "구조에서 책임감 있는 가정까지 검증된 경로",
      paragraphs: [
        "WPA를 통해 입양 목록에 오른 모든 동물은 검증된 출처 — 파트너 보호소, 구조팀, 등록된 소유자 — 에서 오므로, 입양자는 신청 전에 동물의 배경, 건강 상태, 행동 정보를 알 수 있습니다.",
        "입양은 거래가 아닙니다 — 심사된 매칭입니다. WPA의 절차는 동물과 입양자 모두를 보호하도록 설계되어, 동물이 재유기되거나 부적절한 가정에 배치되는 위험을 줄입니다.",
        "지원은 인도에서 끝나지 않습니다: WPA의 입양 후 리소스는 새로운 반려동물 소유자가 처음 몇 주와 몇 달의 돌봄을 잘乗り越도록 돕습니다.",
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      title: "검증된 목록에서 안전한 인도까지",
      subtitle: "지부나 지역에 관계없이 모든 입양에 일관된 5단계 절차.",
      steps: [
        { number: 1, title: "검증된 반려동물 목록", description: "보호소, 구조팀, 소유자가 건강 기록과 행동 정보를 첨부해 동물을 등록합니다." },
        { number: 2, title: "입양자 신청", description: "잠재적 입양자가 가정, 경험, 기대를 기술한 신청서를 제출합니다." },
        { number: 3, title: "입양자 심사", description: "WPA 또는 파트너 보호소가 신청서를 검토하고, 가정 방문이나 추천인 확인을 할 수 있습니다." },
        { number: 4, title: "안전한 인도", description: "구조화된 인도에는 건강 문서, 돌봄 브리핑, 서명된 입양 조건이 포함됩니다." },
        { number: 5, title: "입양 후 지원", description: "처음 몇 달 동안의 후속 점검과 수의·행동 리소스 접근." },
      ],
    },
    participants: {
      eyebrow: "누가 참여할 수 있나요",
      title: "입양은 네트워크의 모든 부분을 참여시킵니다",
      subtitle: "각 참여자는 입양 절차를 안전하고 책임 있게 유지하는 명확한 역할이 있습니다.",
      items: [
        { title: "구조팀 및 보호소", description: "검증된 건강·행동 정보로 구조된 동물을 목록에 등록합니다.", icon: "🏠" },
        { title: "등록된 소유자", description: "비공식 경로가 아닌 검증된 목록을 통해 책임감 있게 동물을 새 집에 보냅니다.", icon: "🧑‍🤝‍🧑" },
        { title: "잠재적 입양자", description: "신청하고 심사를 완료한 후 가정과 경험에 맞는 동물을 받습니다.", icon: "🐾" },
        { title: "수의 파트너", description: "입양 전후 건강 검진과 문서를 제공합니다.", icon: "🏥" },
      ],
    },
    benefits: {
      eyebrow: "혜택과 영향",
      title: "검증된 입양이 중요한 이유",
      subtitle: "구조화된 절차는 동물, 입양자, 지역사회 모두에 더 나은 결과를 만듭니다.",
      items: [
        { title: "반환 및 재유기 감소", description: "심사가 동물의 재유기로 이어지는 불일치를 줄입니다.", icon: "✅" },
        { title: "더 건강한 시작", description: "검증된 건강 기록으로 입양자는 첫날부터 필요한 돌봄을 압니다.", icon: "🩺" },
        { title: "보호소 수용력 확보", description: "성공적인 입양 하나마다 다음 도움이 필요한 동물을 위한 공간이 확보됩니다.", icon: "🏠" },
        { title: "지속적인 지원", description: "새 입양자는 인도 후 방치되지 않습니다 — 질문이 있을 때 지원을 받을 수 있습니다.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "신뢰와 안전",
      title: "모든 입양에 내재된 안전장치",
      subtitle: "",
      items: [
        { title: "검증된 목록만", description: "동물은 심사된 보호소, 구조팀, 등록된 소유자를 통해서만 등록됩니다.", icon: "🔒" },
        { title: "문서화된 심사", description: "모든 입양 신청과 심사 결정은 책무성을 위해 기록됩니다.", icon: "📋" },
        { title: "구조화된 인도", description: "표준 인도 체크리스트가 동물과 입양자 모두를 보호합니다.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "관련 프로그램",
      title: "입양과 연결된 프로그램",
      items: [
        { title: "구조", description: "많은 입양 가능 동물이 WPA의 구조 네트워크를 통해 여정을 시작합니다.", icon: "🚑", href: "/rescue" },
        { title: "인식개선 및 교육", description: "입양 전후 책임감 있는 반려동물 소유에 대해 배우세요.", icon: "📢", href: "/awareness" },
        { title: "기부 및 모금", description: "입양을 가능하게 하는 보호소와 클리닉을 지원하세요.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "구조된 동물에게 집을 줄 준비가 되셨나요?",
      subtitle: "입양 신청을 시작하거나 오늘 집이 필요한 동물을 등록하세요.",
      primaryLabel: "입양 절차 시작",
      primaryHref: "/join",
      secondaryLabel: "WPA에 연락",
      secondaryHref: "/contact",
    },
  },
  rescue: {
    hero: {
      eyebrow: "구조 프로그램",
      title: "위기에 처한 동물에 대한 신속한 대응",
      subtitle: "WPA의 구조 네트워크는 시민 신고를 자원봉사자, 클리닉, 보호소와 연결합니다 — 첫 신고부터 완전한 회복까지 모든 사례를 조율합니다.",
      primaryLabel: "구조 신고",
      primaryHref: "/rescue",
      secondaryLabel: "구조팀 가입",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPA의 구조 방식",
      title: "단일 신고에서 조율된 대응까지",
      paragraphs: [
        "위기에 처한 동물은 누구에게 연락해야 할지, 다음에 무슨 일이 일어날지 모르는 일반 시민에 의해 발견되곤 합니다. WPA의 구조 프로그램은 그 간극을 메우기 위해 존재합니다 — 단일 신고를 추적 가능하고 조율된 대응으로 바꿉니다.",
        "사례가 신고되면 가장 가까운 이용 가능한 자원봉사자나 파트너 클리닉으로 전달되며, 각 단계에서 상태 업데이트가 기록되어 신고자와 조정자가 실시간으로 진행 상황을 볼 수 있습니다.",
        "구조는 수거에서 끝나지 않습니다 — 모든 사례는 치료, 재활, 적절한 경우 입양 프로그램으로의 전환까지 추적됩니다.",
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      title: "긴급 신고에서 회복까지",
      subtitle: "심각도에 관계없이 모든 사례에 대한 구조화되고 추적 가능한 절차.",
      steps: [
        { number: 1, title: "긴급 신고", description: "누구나 언제든지 위치와 설명으로 위기에 처한 동물을 신고할 수 있습니다." },
        { number: 2, title: "자원봉사자 및 클리닉 조율", description: "가장 가까운 이용 가능한 자원봉사자나 파트너 클리닉에 통보되고 파견됩니다." },
        { number: 3, title: "사례 추적", description: "모든 사례에 추적 ID가 부여되어 신고부터 해결까지 상태가 공개됩니다." },
        { number: 4, title: "치료 및 재활", description: "파트너 클리닉이 필요에 따라 의료와 회복 돌봄을 제공합니다." },
        { number: 5, title: "상태 업데이트 및 결과", description: "신고자와 조정자는 회복, 입양, 안전한 방생까지 업데이트를 받습니다." },
      ],
    },
    participants: {
      eyebrow: "누가 참여할 수 있나요",
      title: "구조는 조율된 네트워크에 의존합니다",
      subtitle: "모든 사례는 여러 손을 거치며, 각각 명확한 책임이 있습니다.",
      items: [
        { title: "시민 및 신고자", description: "위기에 처한 동물을 신고하고 중요한 초기 정보를 제공합니다.", icon: "📍" },
        { title: "자원봉사자", description: "신고에 대응하고, 동물을 이송하며, 현장 조율을 지원합니다.", icon: "🙌" },
        { title: "수의 클리닉", description: "긴급 치료, 진단, 재활 돌봄을 제공합니다.", icon: "🏥" },
        { title: "지역 지부", description: "지역 내 자원봉사자와 클리닉을 조율해 더 빠른 대응을 가능하게 합니다.", icon: "🌍" },
      ],
    },
    benefits: {
      eyebrow: "혜택과 영향",
      title: "조율된 구조가 중요한 이유",
      subtitle: "구조화된 네트워크는 고립된 노력보다 더 빠르고 확실하게 대응합니다.",
      items: [
        { title: "더 빠른 대응 시간", description: "가장 가까운 이용 가능한 팀으로 신고를 전달해 도움 시간을 단축합니다.", icon: "⏱️" },
        { title: "어떤 사례도 누락되지 않음", description: "추적 사례 ID는 모든 신고가 해결까지 추적됨을 의미합니다.", icon: "📋" },
        { title: "더 높은 회복률", description: "조율된 치료와 재활이 부상 동물의 결과를 개선합니다.", icon: "🩺" },
        { title: "지역사회 신뢰", description: "공개된 상태 업데이트가 신고가 실제 행동으로 이어진다는 신뢰를 만듭니다.", icon: "🤝" },
      ],
    },
    trust: {
      eyebrow: "신뢰와 안전",
      title: "구조의 모든 단계에서 책무성",
      subtitle: "",
      items: [
        { title: "검증된 대응자", description: "심사된 자원봉사자와 파트너 클리닉만 활성 사례에 파견됩니다.", icon: "🔒" },
        { title: "투명한 사례 추적", description: "모든 사례는 신고부터 해결까지 공개된 상태가 있습니다.", icon: "📊" },
        { title: "문서화된 치료", description: "각 구조 동물의 의료와 결과가 기록됩니다.", icon: "🐾" },
      ],
    },
    related: {
      eyebrow: "관련 프로그램",
      title: "구조와 연결된 프로그램",
      items: [
        { title: "입양", description: "소유자가 없는 재활 동물은 입양 프로그램으로 이동합니다.", icon: "🐾", href: "/adoption" },
        { title: "기부 및 모금", description: "긴급 치료와 이송은 추적된 기부로 자금이 조달됩니다.", icon: "❤️", href: "/donation" },
        { title: "인식개선 및 교육", description: "지역사회 인식이 더 많은 사례를 조기에 신고하게 합니다.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "위기에 처한 동물을 보셨나요? 지금 신고하세요.",
      subtitle: "모든 신고가 중요합니다. 자원봉사자로 구조 네트워크에 가입하거나 기부로 지원하세요.",
      primaryLabel: "구조 신고",
      primaryHref: "/rescue",
      secondaryLabel: "자원봉사자 되기",
      secondaryHref: "/volunteers",
    },
  },
  donation: {
    hero: {
      eyebrow: "기부 및 모금 프로그램",
      title: "모든 기부는 추적되고, 모든 영향은 보고됩니다",
      subtitle: "WPA는 투명하고 캠페인 기반의 모금을 통해 구조, 치료, 입양, 인식개선에 자금을 지원합니다 — 모든 기여의 사용 방식을 공개 보고합니다.",
      primaryLabel: "지금 기부",
      primaryHref: "/donation",
      secondaryLabel: "공개 보고서 보기",
      secondaryHref: "/reports",
    },
    intro: {
      eyebrow: "WPA의 기부 방식",
      title: "눈에 보이고 추적 가능한 자금의 경로",
      paragraphs: [
        "WPA에 대한 기부는 특정 목적 — 긴급 구조, 의료, 예방접종 캠페인, 보호소 지원, 일반 운영 — 으로 전달되므로 기부자는 자신의 기여가 무엇을 지원하는지 정확히 알 수 있습니다.",
        "많은 기부는 캠페인 기반 모금을 통해 모이며, 특정 사례, 지부, 이니셔티브에 연결되어 기여자가 진행 상황과 결과를 볼 수 있습니다.",
        "모든 기부에는 영수증이 발급되며, 자금 사용은 공개 보고서로 집계되어 전체 네트워크 — 기부자, 파트너, 일반 대중 — 이 자원 사용 방식을 검토할 수 있습니다.",
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      title: "기여에서 공개 보고서까지",
      subtitle: "일회성, 정기, 캠페인 기반 모두에 투명한 경로.",
      steps: [
        { number: 1, title: "목적 또는 캠페인 선택", description: "기부자는 지원할 프로그램 분야, 활성 캠페인, 일반 기금을 선택합니다." },
        { number: 2, title: "안전한 기여", description: "기부가 처리되고 모든 기여에 영수증이 발급됩니다." },
        { number: 3, title: "자금 배정 및 추적", description: "기여는 지원하는 특정 프로그램이나 캠페인에 대해 기록됩니다." },
        { number: 4, title: "프로그램 실행", description: "자금이 구조, 치료, 입양, 인식개선 활동에 지급됩니다." },
        { number: 5, title: "공개 영향 보고", description: "자금 사용과 성과가 정기적인 공개 보고서로 발표됩니다." },
      ],
    },
    participants: {
      eyebrow: "누가 참여할 수 있나요",
      title: "함께 동물 복지에 자금을 지원",
      subtitle: "기부와 모금은 기부자, 캠페인 주최자, 지원하는 프로그램이 참여합니다.",
      items: [
        { title: "개인 기부자", description: "프로그램이나 캠페인에 일회성 또는 정기 기부를 합니다.", icon: "💛" },
        { title: "기관 기부자", description: "기업과 재단이 대규모 프로그램과 파트너십에 자금을 지원합니다.", icon: "🏢" },
        { title: "지부 모금", description: "지역 지부가 지역 요구와 긴급 상황에 대한 캠페인을 운영합니다.", icon: "🌍" },
        { title: "파트너 기관", description: "NGO와 클리닉이 특정 이니셔티브에 연결된 프로그램 자금을 신청합니다.", icon: "🤝" },
      ],
    },
    benefits: {
      eyebrow: "혜택과 영향",
      title: "투명한 모금이 중요한 이유",
      subtitle: "자금 사용에 대한 신뢰는 지속 가능한 기부 프로그램의 기반입니다.",
      items: [
        { title: "완전한 가시성", description: "기부자는 자신의 기여가 어떤 프로그램과 사례를 지원했는지 정확히 볼 수 있습니다.", icon: "🔍" },
        { title: "더 높은 프로그램 영향", description: "추적된 배정으로 자금이 가장 필요한 곳으로 갑니다.", icon: "📈" },
        { title: "검증된 영수증", description: "모든 기여는 기부자의 기록을 위해 문서화됩니다.", icon: "🧾" },
        { title: "공개 책무성", description: "정기적인 보고서가 전체 네트워크를 기부자와 파트너에게 책임 있게 유지합니다.", icon: "📊" },
      ],
    },
    trust: {
      eyebrow: "신뢰와 안전",
      title: "모든 기여에 내재된 투명성",
      subtitle: "",
      items: [
        { title: "기부자 영수증", description: "모든 기부에 금액, 목적, 날짜를 확인하는 영수증이 발급됩니다.", icon: "🧾" },
        { title: "추적된 자금 배정", description: "기여는 지원하는 특정 프로그램이나 캠페인에 대해 기록됩니다.", icon: "📊" },
        { title: "공개 영향 보고서", description: "자금 사용과 성과가 기부자, 파트너, 일반인에게 공개됩니다.", icon: "📄" },
      ],
    },
    related: {
      eyebrow: "관련 프로그램",
      title: "기부로 지원되는 프로그램",
      items: [
        { title: "구조", description: "긴급 대응과 치료는 기부로 자금이 조달됩니다.", icon: "🚑", href: "/rescue" },
        { title: "입양", description: "입양 전 보호 돌봄과 건강 검진은 기부자 자금에 의존합니다.", icon: "🐾", href: "/adoption" },
        { title: "인식개선 및 교육", description: "예방접종과 교육 캠페인은 기부로 자금이 조달됩니다.", icon: "📢", href: "/awareness" },
      ],
    },
    cta: {
      title: "검증되고 투명한 동물 복지 프로그램에 자금을 지원하세요",
      subtitle: "모든 기여는 추적·보고되며 가장 필요한 프로그램으로 전달됩니다.",
      primaryLabel: "지금 기부",
      primaryHref: "/donation",
      secondaryLabel: "공개 보고서 보기",
      secondaryHref: "/reports",
    },
  },
  awareness: {
    hero: {
      eyebrow: "인식개선 및 교육 프로그램",
      title: "책임감 있고 따뜻한 반려동물 소유 문화를 만들다",
      subtitle: "WPA의 인식 프로그램은 지역사회에 책임감 있는 반려동물 소유, 예방접종, 동물 복지를 교육합니다 — 위기가 일어나기 전에 위기에 처한 동물의 수를 줄입니다.",
      primaryLabel: "자료 보기",
      primaryHref: "/awareness",
      secondaryLabel: "지역 캠페인 참여",
      secondaryHref: "/volunteers",
    },
    intro: {
      eyebrow: "WPA의 인식 방식",
      title: "교육을 통한 예방",
      paragraphs: [
        "많은 동물 복지 위기 — 유기, 질병 발발, 안전하지 않은 다루기 — 는 기본 교육으로 예방 가능합니다. WPA의 인식 프로그램은 위기가 일어나기 전에 지역사회에 도달하기 위해 존재하며,事後 대응만이 아닙니다.",
        "캠페인은 책임감 있는 반려동물 소유, 예방접종 일정, 동물 복지 윤리, 안전한 신고 관행을 다루며, 지역 지부, 파트너 클리닉, 디지털 자료를 통해 제공됩니다.",
        "자료는 다국어 접근을 고려하여 개발되어, 교육이 지역사회가 가장 잘 이해하는 언어로 도달하며 WPA가 기본적으로 운영하는 언어만이 아닙니다.",
      ],
    },
    howItWorks: {
      eyebrow: "작동 방식",
      title: "캠페인 설계에서 지역사회 도달까지",
      subtitle: "가장 필요한 곳에 교육을 제공하는 재현 가능한 모델.",
      steps: [
        { number: 1, title: "지역사회 요구 파악", description: "지역 지부가 인식, 예방접종 커버리지, 신고 관행의 격차를 평가합니다." },
        { number: 2, title: "캠페인 설계", description: "특정 주제 — 예방접종, 입양, 안전한 다루기 — 를 중심으로 캠페인을 구축합니다." },
        { number: 3, title: "파트너를 통한 제공", description: "클리닉, 학교, 지역사회 단체가 캠페인 자료와 행사 배포를 돕습니다." },
        { number: 4, title: "다국어 자료 제공", description: "교육 자료가 지역사회가 필요로 하는 언어로 제공됩니다." },
        { number: 5, title: "도달 측정 및 보고", description: "캠페인 도달과 성과는 WPA 네트워크를 통해 추적되고 보고됩니다." },
      ],
    },
    participants: {
      eyebrow: "누가 참여할 수 있나요",
      title: "인식은 지역사회의 모든 부분에 도달합니다",
      subtitle: "교육 프로그램은 여러 기여자와 대상을 고려하여 구축됩니다.",
      items: [
        { title: "반려동물 소유자", description: "책임감 있는 소유 관행과 예방접종 일정을 배웁니다.", icon: "🏠" },
        { title: "학교 및 지역사회 단체", description: "인식 세션과 청소년 교육 프로그램을 주최합니다.", icon: "🏫" },
        { title: "수의 클리닉", description: "진료와 함께 예방접종 가이드와 건강 교육을 제공합니다.", icon: "🏥" },
        { title: "자원봉사자", description: "자료를 배포하고 지역 인식 행사를 이끕니다.", icon: "🙌" },
      ],
    },
    benefits: {
      eyebrow: "혜택과 영향",
      title: "인식이 구조의 필요성을 줄이는 이유",
      subtitle: "예방은 위기 대응보다 더 효과적이고 인도적입니다.",
      items: [
        { title: "유기 사례 감소", description: "책임감 있는 소유 교육이 유기의 원인을 줄입니다.", icon: "📉" },
        { title: "더 높은 예방접종 커버리지", description: "인식 캠페인이 예방 건강 프로그램 참여를 높입니다.", icon: "💉" },
        { title: "더 안전한 신고", description: "구조 절차를 이해하는 지역사회는 사례를 더 빠르고 정확하게 신고합니다.", icon: "📍" },
        { title: "더 넓은 도달", description: "다국어 자료가 교육이 언어 장벽에 제한되지 않도록 합니다.", icon: "🌐" },
      ],
    },
    trust: {
      eyebrow: "신뢰와 안전",
      title: "검증된 기준에 기반한 교육",
      subtitle: "",
      items: [
        { title: "수의사 검토 콘텐츠", description: "건강과 예방접종 가이드는 검증된 수의 파트너가 검토합니다.", icon: "🩺" },
        { title: "지역 적응 캠페인", description: "지부는 자료를 지역 규정과 지역사회 환경에 맞게 조정합니다.", icon: "🌍" },
        { title: "추적된 도달과 성과", description: "캠페인 영향은 측정·보고되며 가정이 아닙니다.", icon: "📊" },
      ],
    },
    related: {
      eyebrow: "관련 프로그램",
      title: "인식과 연결된 프로그램",
      items: [
        { title: "구조", description: "정보가 더 많은 지역사회가 위기 사례를 더 일찍 신고합니다.", icon: "🚑", href: "/rescue" },
        { title: "입양", description: "교육이 새 입양자의 장기적 성공을 준비하는 데 도움이 됩니다.", icon: "🐾", href: "/adoption" },
        { title: "기부 및 모금", description: "캠페인은 투명하고 추적된 기부로 자금이 조달됩니다.", icon: "❤️", href: "/donation" },
      ],
    },
    cta: {
      title: "더 정보 있고 따뜻한 지역사회를 만드는 데 도와주세요",
      subtitle: "지역사회에 인식 캠페인을 가져오거나 이미 진행 중인 캠페인을 지원하세요.",
      primaryLabel: "캠페인 참여",
      primaryHref: "/volunteers",
      secondaryLabel: "WPA에 연락",
      secondaryHref: "/contact",
    },
  },
};

const dictionaries: Partial<Record<Locale, ProgramsContent>> = { en, bn, ar, fr, es, zh, ru, de, ja, ko };

export function getProgramsContent(locale: string): ProgramsContent {
  return dictionaries[locale as Locale] ?? dictionaries.en!;
}

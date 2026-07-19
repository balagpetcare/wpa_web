import type { Locale } from "./i18n";
import type { HeroCopy } from "./pagesContent";

export interface NewsItem {
  title: string;
  description: string;
  category: string;
  href: string;
}

export interface NewsContent {
  hero: HeroCopy;
  items: NewsItem[];
  cta: { title: string; subtitle: string; primaryLabel: string; primaryHref: string; secondaryLabel: string; secondaryHref: string };
}

const en: NewsContent = {
  hero: {
    eyebrow: "News & updates",
    title: "Stories, Campaigns, and Updates From WPA",
    subtitle: "Vaccination drives, rescue network updates, and responsible-ownership awareness — organized by program area.",
    primaryLabel: "Explore Programs",
    primaryHref: "/what-we-do",
    secondaryLabel: "View Public Reports",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "Why Pet Vaccination Saves Lives",
      description: "How routine vaccination protects pets and communities from preventable disease outbreaks.",
      category: "Awareness",
      href: "/awareness",
    },
    {
      title: "A Guide to Responsible Adoption",
      description: "What to know before adopting — matching the right pet with the right home.",
      category: "Adoption",
      href: "/adoption",
    },
    {
      title: "Inside WPA's Rescue Network",
      description: "How volunteer rescue teams coordinate emergency response across partner regions.",
      category: "Rescue",
      href: "/rescue",
    },
  ],
  cta: {
    title: "Follow WPA's Work Across Every Program",
    subtitle: "Program pages are updated as campaigns, chapters, and reports evolve.",
    primaryLabel: "Explore Programs",
    primaryHref: "/what-we-do",
    secondaryLabel: "Contact WPA",
    secondaryHref: "/contact",
  },
};

const bn: NewsContent = {
  hero: {
    eyebrow: "সংবাদ ও আপডেট",
    title: "WPA-এর গল্প, প্রচারাভিযান ও আপডেট",
    subtitle: "টিকাদান কর্মসূচি, উদ্ধার নেটওয়ার্ক আপডেট এবং দায়িত্বশীল মালিকানা সচেতনতা — কর্মসূচি ক্ষেত্র অনুযায়ী সংগঠিত।",
    primaryLabel: "কর্মসূচি দেখুন",
    primaryHref: "/what-we-do",
    secondaryLabel: "পাবলিক প্রতিবেদন দেখুন",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "কেন পোষা প্রাণীর টিকাদান জীবন বাঁচায়",
      description: "নিয়মিত টিকাদান কীভাবে প্রতিরোধযোগ্য রোগের প্রাদুর্ভাব থেকে প্রাণী ও কমিউনিটিকে রক্ষা করে।",
      category: "সচেতনতা",
      href: "/awareness",
    },
    {
      title: "দায়িত্বশীল দত্তক গ্রহণের নির্দেশিকা",
      description: "দত্তক নেওয়ার আগে যা জানা দরকার — সঠিক প্রাণীর সাথে সঠিক ঘরের মিল করা।",
      category: "দত্তক",
      href: "/adoption",
    },
    {
      title: "WPA-এর উদ্ধার নেটওয়ার্কের ভেতরে",
      description: "স্বেচ্ছাসেবক উদ্ধার দলগুলো কীভাবে অংশীদার অঞ্চলজুড়ে জরুরি সাড়া সমন্বয় করে।",
      category: "উদ্ধার",
      href: "/rescue",
    },
  ],
  cta: {
    title: "প্রতিটি কর্মসূচিতে WPA-এর কাজ অনুসরণ করুন",
    subtitle: "প্রচারাভিযান, চ্যাপ্টার ও প্রতিবেদনের বিবর্তনের সাথে সাথে কর্মসূচি পাতাগুলো আপডেট করা হয়।",
    primaryLabel: "কর্মসূচি দেখুন",
    primaryHref: "/what-we-do",
    secondaryLabel: "WPA-কে জানান",
    secondaryHref: "/contact",
  },
};

// ─── ZH (Simplified Chinese) ────────────────────────────────────────────────

const zh: NewsContent = {
  hero: {
    eyebrow: "新闻与更新",
    title: "WPA的故事、活动和更新",
    subtitle: "疫苗接种活动、救援网络更新和负责任养宠意识——按项目领域分类。",
    primaryLabel: "了解项目",
    primaryHref: "/what-we-do",
    secondaryLabel: "查看公开报告",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "为什么宠物疫苗接种能拯救生命",
      description: "常规疫苗接种如何保护宠物和社区免受可预防的疾病爆发。",
      category: "宣传",
      href: "/awareness",
    },
    {
      title: "负责任领养指南",
      description: "领养前需要知道什么——将合适的宠物与合适的家庭匹配。",
      category: "领养",
      href: "/adoption",
    },
    {
      title: "走进WPA的救援网络",
      description: "志愿者救援团队如何在合作地区协调紧急响应。",
      category: "救援",
      href: "/rescue",
    },
  ],
  cta: {
    title: "关注WPA在每个项目中的工作",
    subtitle: "项目页面随活动、分会和报告的发展而更新。",
    primaryLabel: "了解项目",
    primaryHref: "/what-we-do",
    secondaryLabel: "联系WPA",
    secondaryHref: "/contact",
  },
};

// ─── JA (Japanese) ──────────────────────────────────────────────────────────

const ja: NewsContent = {
  hero: {
    eyebrow: "ニュースと更新",
    title: "WPAからのストーリー、キャンペーン、更新",
    subtitle: "予防接種キャンペーン、救助ネットワーク更新、責任ある飼育の啓発——プログラム分野別に整理。",
    primaryLabel: "プログラムを見る",
    primaryHref: "/what-we-do",
    secondaryLabel: "公開報告書を見る",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "ペットの予防接種が命を救う理由",
      description: "定期的な予防接種がペットとコミュニティを予防可能な疾病発生から守る仕組み。",
      category: "啓発",
      href: "/awareness",
    },
    {
      title: "責任ある里親募集のガイド",
      description: "里親になる前に知っておくべきこと——正しいペットを正しい家庭にマッチング。",
      category: "里親募集",
      href: "/adoption",
    },
    {
      title: "WPAの救助ネットワークの内部",
      description: "ボランティア救助チームがパートナー地域で緊急対応を調整する方法。",
      category: "救助",
      href: "/rescue",
    },
  ],
  cta: {
    title: "すべてのプログラムでWPAの活動をフォロー",
    subtitle: "プログラムページはキャンペーン、支部、報告書の進展に合わせて更新されます。",
    primaryLabel: "プログラムを見る",
    primaryHref: "/what-we-do",
    secondaryLabel: "WPAに連絡",
    secondaryHref: "/contact",
  },
};

// ─── KO (Korean) ────────────────────────────────────────────────────────────

const ko: NewsContent = {
  hero: {
    eyebrow: "뉴스 및 업데이트",
    title: "WPA의 이야기, 캠페인, 업데이트",
    subtitle: "예방접종 캠페인, 구조 네트워크 업데이트, 책임감 있는 소유 인식 — 프로그램 분야별로 정리.",
    primaryLabel: "프로그램 알아보기",
    primaryHref: "/what-we-do",
    secondaryLabel: "공개 보고서 보기",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "반려동물 예방접종이 생명을 구하는 이유",
      description: "정기적인 예방접종이 반려동물과 지역사회를 예방 가능한 질병 발발로부터 어떻게 보호하는지.",
      category: "인식개선",
      href: "/awareness",
    },
    {
      title: "책임감 있는 입양 가이드",
      description: "입양 전 알아야 할 것 — 올바른 반려동물을 올바른 가정과 매칭하기.",
      category: "입양",
      href: "/adoption",
    },
    {
      title: "WPA 구조 네트워크의 내부",
      description: "자원봉사 구조팀이 파트너 지역에서 긴급 대응을 어떻게 조율하는지.",
      category: "구조",
      href: "/rescue",
    },
  ],
  cta: {
    title: "모든 프로그램에서 WPA의 활동을 팔로우하세요",
    subtitle: "프로그램 페이지는 캠페인, 지부, 보고서의 발전에 따라 업데이트됩니다.",
    primaryLabel: "프로그램 알아보기",
    primaryHref: "/what-we-do",
    secondaryLabel: "WPA에 연락",
    secondaryHref: "/contact",
  },
};

// ─── AR (Arabic) ────────────────────────────────────────────────────────────

const ar: NewsContent = {
  hero: {
    eyebrow: "الأخبار والتحديثات",
    title: "قصص وحملات وتحديثات من WPA",
    subtitle: "حملات التطعيم، تحديثات شبكة الإنقاذ، والتوعية بالملكية المسؤولة — منظمة حسب مجال البرنامج.",
    primaryLabel: "استكشف البرامج",
    primaryHref: "/what-we-do",
    secondaryLabel: "عرض التقارير العامة",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "لماذا ينقذ تطعيم الحيوانات الأليفة الأرواح",
      description: "كيف يحمي التطعيم الروتيني الحيوانات الأليفة والمجتمعات من تفشي الأمراض التي يمكن الوقاية منها.",
      category: "توعية",
      href: "/awareness",
    },
    {
      title: "دليل التبني المسؤول",
      description: "ما يجب معرفته قبل التبني — مطابقة الحيوان الأليف المناسب مع المنزل المناسب.",
      category: "التبني",
      href: "/adoption",
    },
    {
      title: "داخل شبكة الإنقاذ التابعة لـ WPA",
      description: "كيف تنسق فرق الإنقاذ التطوعية الاستجابة للطوارئ عبر المناطق الشريكة.",
      category: "الإنقاذ",
      href: "/rescue",
    },
  ],
  cta: {
    title: "تابع عمل WPA عبر كل برنامج",
    subtitle: "يتم تحديث صفحات البرامج مع تطور الحملات والفروع والتقارير.",
    primaryLabel: "استكشف البرامج",
    primaryHref: "/what-we-do",
    secondaryLabel: "تواصل مع WPA",
    secondaryHref: "/contact",
  },
};

// ─── FR (French) ────────────────────────────────────────────────────────────

const fr: NewsContent = {
  hero: {
    eyebrow: "Actualités et mises à jour",
    title: "Histoires, campagnes et actualités de WPA",
    subtitle: "Campagnes de vaccination, mises à jour du réseau de sauvetage et sensibilisation à la propriété responsable — organisées par domaine de programme.",
    primaryLabel: "Explorer les programmes",
    primaryHref: "/what-we-do",
    secondaryLabel: "Voir les rapports publics",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "Pourquoi la vaccination des animaux de compagnie sauve des vies",
      description: "Comment la vaccination de routine protège les animaux de compagnie et les communautés contre les épidémies évitables.",
      category: "Sensibilisation",
      href: "/awareness",
    },
    {
      title: "Guide de l'adoption responsable",
      description: "Ce qu'il faut savoir avant d'adopter — associer le bon animal au bon foyer.",
      category: "Adoption",
      href: "/adoption",
    },
    {
      title: "À l'intérieur du réseau de sauvetage de WPA",
      description: "Comment les équipes de sauvetage bénévoles coordonnent la réponse d'urgence dans les régions partenaires.",
      category: "Sauvetage",
      href: "/rescue",
    },
  ],
  cta: {
    title: "Suivez le travail de WPA à travers chaque programme",
    subtitle: "Les pages des programmes sont mises à jour à mesure que les campagnes, les chapitres et les rapports évoluent.",
    primaryLabel: "Explorer les programmes",
    primaryHref: "/what-we-do",
    secondaryLabel: "Contacter WPA",
    secondaryHref: "/contact",
  },
};

// ─── ES (Spanish) ───────────────────────────────────────────────────────────

const es: NewsContent = {
  hero: {
    eyebrow: "Noticias y actualizaciones",
    title: "Historias, campañas y actualizaciones de WPA",
    subtitle: "Campañas de vacunación, actualizaciones de la red de rescate y concienciación sobre la tenencia responsable — organizadas por área de programa.",
    primaryLabel: "Explorar programas",
    primaryHref: "/what-we-do",
    secondaryLabel: "Ver informes públicos",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "Por qué la vacunación de mascotas salva vidas",
      description: "Cómo la vacunación rutinaria protege a las mascotas y a las comunidades de brotes de enfermedades prevenibles.",
      category: "Concienciación",
      href: "/awareness",
    },
    {
      title: "Guía para una adopción responsable",
      description: "Qué saber antes de adoptar — emparejar a la mascota adecuada con el hogar adecuado.",
      category: "Adopción",
      href: "/adoption",
    },
    {
      title: "Dentro de la red de rescate de WPA",
      description: "Cómo los equipos de rescate voluntarios coordinan la respuesta de emergencia en las regiones asociadas.",
      category: "Rescate",
      href: "/rescue",
    },
  ],
  cta: {
    title: "Sigue el trabajo de WPA en cada programa",
    subtitle: "Las páginas de los programas se actualizan a medida que evolucionan las campañas, los capítulos y los informes.",
    primaryLabel: "Explorar programas",
    primaryHref: "/what-we-do",
    secondaryLabel: "Contactar a WPA",
    secondaryHref: "/contact",
  },
};

// ─── RU (Russian) ───────────────────────────────────────────────────────────

const ru: NewsContent = {
  hero: {
    eyebrow: "Новости и обновления",
    title: "Истории, кампании и обновления от WPA",
    subtitle: "Кампании вакцинации, обновления сети спасения и просвещение об ответственном содержании животных — организовано по программным направлениям.",
    primaryLabel: "Изучить программы",
    primaryHref: "/what-we-do",
    secondaryLabel: "Посмотреть публичные отчёты",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "Почему вакцинация домашних животных спасает жизни",
      description: "Как плановая вакцинация защищает домашних животных и сообщества от вспышек предотвратимых заболеваний.",
      category: "Просвещение",
      href: "/awareness",
    },
    {
      title: "Руководство по ответственному усыновлению",
      description: "Что нужно знать перед усыновлением — подбор подходящего питомца для подходящего дома.",
      category: "Усыновление",
      href: "/adoption",
    },
    {
      title: "Внутри спасательной сети WPA",
      description: "Как волонтёрские спасательные команды координируют экстренное реагирование в партнёрских регионах.",
      category: "Спасение",
      href: "/rescue",
    },
  ],
  cta: {
    title: "Следите за работой WPA в каждой программе",
    subtitle: "Страницы программ обновляются по мере развития кампаний, отделений и отчётов.",
    primaryLabel: "Изучить программы",
    primaryHref: "/what-we-do",
    secondaryLabel: "Связаться с WPA",
    secondaryHref: "/contact",
  },
};

// ─── DE (German) ────────────────────────────────────────────────────────────

const de: NewsContent = {
  hero: {
    eyebrow: "Nachrichten & Updates",
    title: "Geschichten, Kampagnen und Updates von WPA",
    subtitle: "Impfkampagnen, Updates zum Rettungsnetzwerk und Aufklärung zu verantwortungsvoller Tierhaltung — organisiert nach Programmbereich.",
    primaryLabel: "Programme entdecken",
    primaryHref: "/what-we-do",
    secondaryLabel: "Öffentliche Berichte ansehen",
    secondaryHref: "/reports",
  },
  items: [
    {
      title: "Warum die Impfung von Haustieren Leben rettet",
      description: "Wie Routineimpfungen Haustiere und Gemeinschaften vor vermeidbaren Krankheitsausbrüchen schützen.",
      category: "Aufklärung",
      href: "/awareness",
    },
    {
      title: "Ein Leitfaden für verantwortungsvolle Adoption",
      description: "Was man vor der Adoption wissen sollte — das richtige Haustier mit dem richtigen Zuhause zusammenbringen.",
      category: "Adoption",
      href: "/adoption",
    },
    {
      title: "Einblick in das Rettungsnetzwerk von WPA",
      description: "Wie ehrenamtliche Rettungsteams die Notfallreaktion in Partnerregionen koordinieren.",
      category: "Rettung",
      href: "/rescue",
    },
  ],
  cta: {
    title: "Verfolgen Sie die Arbeit von WPA in jedem Programm",
    subtitle: "Programmseiten werden aktualisiert, sobald sich Kampagnen, Ortsverbände und Berichte weiterentwickeln.",
    primaryLabel: "Programme entdecken",
    primaryHref: "/what-we-do",
    secondaryLabel: "WPA kontaktieren",
    secondaryHref: "/contact",
  },
};

const dictionaries: Partial<Record<Locale, NewsContent>> = { en, bn, ar, fr, es, zh, ru, de, ja, ko };

export function getNewsContent(locale: string): NewsContent {
  return dictionaries[locale as Locale] ?? dictionaries.en!;
}

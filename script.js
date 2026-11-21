const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }));
}
document.querySelectorAll("#year").forEach(el => el.textContent = new Date().getFullYear());

const form = document.querySelector("#partner-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const status = document.querySelector("#form-status");
    status.textContent = "Thanks! This is a preview form only. It is not connected to a submission service yet.";
  });
}
// Language switcher
const translations = {
  en: {
    academy: "Academy",
    traffic: "Traffic Sources",
    partnership: "Partnership",
    about: "About",
    apply: "Apply now",
    eyebrow: "LEARN · CONNECT · GROW",
    heroCopy: "Practical affiliate marketing guidance for creators, publishers, and experienced traffic partners. Build your skills, understand your options, and start a conversation.",
    academyTitle: "THE AFFILIATE ACADEMY",
    academyHeading: "Learn the fundamentals.",
    academySubheading: "Make informed moves.",
    academyDescription: "Clear, practical resources to help you understand affiliate marketing and build a more thoughtful approach to traffic.",
    academyCard1Kicker: "01 / START HERE",
    academyCard1Title: "Affiliate marketing basics",
    academyCard1Text: "Understand the model, common terms, tracking, and how partnerships typically work.",
    academyCard1Link: "Explore learning path",
    academyCard2Kicker: "02 / BUILD",
    academyCard2Title: "Traffic strategy",
    academyCard2Text: "Learn how content, communities, search, and paid media can fit different strategies.",
    academyCard2Link: "Explore traffic sources",
    academyCard3Kicker: "03 / IMPROVE",
    academyCard3Title: "Measure and optimize",
    academyCard3Text: "Get familiar with useful metrics, testing, audience quality, and sustainable growth.",
    academyCard3Link: "Explore partnership"
    trafficTitle: "TRAFFIC SOURCES",
    trafficHeading: "Different channels.",
    trafficSubheading: "Different opportunities.",
    trafficDescription: "Choose the channels that match your audience, experience, and local requirements.",
    trafficVideoTitle: "Short-form video",
    trafficVideoText: "TikTok, Reels, and creator-led content.",
    trafficCommunityTitle: "Communities",
    trafficCommunityText: "Telegram channels, groups, and niche communities.",
    trafficSeoTitle: "SEO & publishing",
    trafficSeoText: "Websites, blogs, and search-led content.",
    trafficPaidTitle: "Paid media",
    trafficPaidText: "Campaign planning, testing, and responsible optimization.",
    trafficNote: "Always check platform rules, local laws, advertising requirements, and the applicable partner-program terms before promoting any offer."
  },

  fr: {
    academy: "Académie",
    traffic: "Sources de trafic",
    partnership: "Partenariat",
    about: "À propos",
    apply: "Postuler",
    eyebrow: "APPRENDRE · CONNECTER · GRANDIR",
    heroCopy: "Des conseils pratiques en marketing d'affiliation pour les créateurs, éditeurs et partenaires expérimentés.",
    academyTitle: "L'ACADÉMIE D'AFFILIATION",
    academyHeading: "Apprenez les fondamentaux.",
    academySubheading: "Faites des choix éclairés.",
    academyDescription: "Des ressources claires et pratiques pour comprendre le marketing d'affiliation et développer une approche réfléchie du trafic.",
    academyCard1Kicker: "01 / COMMENCER",
    academyCard1Title: "Les bases du marketing d'affiliation",
    academyCard1Text: "Comprenez le modèle, les termes courants, le suivi et le fonctionnement des partenariats.",
    academyCard1Link: "Découvrir le parcours",
    academyCard2Kicker: "02 / DÉVELOPPER",
    academyCard2Title: "Stratégie de trafic",
    academyCard2Text: "Découvrez comment le contenu, les communautés, la recherche et la publicité peuvent servir différentes stratégies.",
    academyCard2Link: "Découvrir les sources de trafic",
    academyCard3Kicker: "03 / OPTIMISER",
    academyCard3Title: "Mesurer et optimiser",
    academyCard3Text: "Familiarisez-vous avec les indicateurs utiles, les tests, la qualité de l'audience et la croissance durable.",
    academyCard3Link: "Découvrir le partenariat"
    trafficTitle: "SOURCES DE TRAFIC",
    trafficHeading: "Différents canaux.",
    trafficSubheading: "Différentes opportunités.",
    trafficDescription: "Choisissez les canaux adaptés à votre audience, votre expérience et aux exigences locales.",
    trafficVideoTitle: "Vidéos courtes",
    trafficVideoText: "TikTok, Reels et contenu créé par les créateurs.",
    trafficCommunityTitle: "Communautés",
    trafficCommunityText: "Chaînes Telegram, groupes et communautés spécialisées.",
    trafficSeoTitle: "SEO et publication",
    trafficSeoText: "Sites web, blogs et contenu optimisé pour les moteurs de recherche.",
    trafficPaidTitle: "Publicité payante",
    trafficPaidText: "Planification des campagnes, tests et optimisation responsable.",
    trafficNote: "Vérifiez toujours les règles des plateformes, les lois locales, les exigences publicitaires et les conditions du programme partenaire avant toute promotion."
  },

  ar: {
    academy: "الأكاديمية",
    traffic: "مصادر الزيارات",
    partnership: "الشراكة",
    about: "من نحن",
    apply: "قدّم الآن",
    eyebrow: "تعلّم · تواصل · تطوّر",
    heroCopy: "إرشادات عملية في التسويق بالعمولة لصناع المحتوى والناشرين وشركاء التسويق.",
    academyTitle: "أكاديمية التسويق بالعمولة",
    academyHeading: "تعلّم الأساسيات.",
    academySubheading: "اتخذ قرارات مدروسة.",
    academyDescription: "موارد واضحة وعملية تساعدك على فهم التسويق بالعمولة وبناء استراتيجية مدروسة لجلب الزيارات.",
    academyCard1Kicker: "01 / ابدأ من هنا",
    academyCard1Title: "أساسيات التسويق بالعمولة",
    academyCard1Text: "تعرّف على نموذج العمل والمصطلحات الشائعة والتتبع وكيفية عمل الشراكات.",
    academyCard1Link: "اكتشف مسار التعلم",
    academyCard2Kicker: "02 / طوّر",
    academyCard2Title: "استراتيجية الزيارات",
    academyCard2Text: "تعلّم كيف يمكن للمحتوى والمجتمعات ومحركات البحث والإعلانات المدفوعة أن تخدم استراتيجيات مختلفة.",
    academyCard2Link: "اكتشف مصادر الزيارات",
    academyCard3Kicker: "03 / حسّن",
    academyCard3Title: "القياس والتحسين",
    academyCard3Text: "تعرّف على المؤشرات المهمة والاختبارات وجودة الجمهور والنمو المستدام.",
    academyCard3Link: "اكتشف الشراكة"
    trafficTitle: "مصادر الزيارات",
    trafficHeading: "قنوات مختلفة.",
    trafficSubheading: "فرص متنوعة.",
    trafficDescription: "اختر القنوات التي تناسب جمهورك وخبرتك والمتطلبات المحلية.",
    trafficVideoTitle: "الفيديوهات القصيرة",
    trafficVideoText: "تيك توك وريلز ومحتوى صناع المحتوى.",
    trafficCommunityTitle: "المجتمعات",
    trafficCommunityText: "قنوات تيليغرام والمجموعات والمجتمعات المتخصصة.",
    trafficSeoTitle: "تحسين محركات البحث والنشر",
    trafficSeoText: "المواقع الإلكترونية والمدونات والمحتوى الموجه لمحركات البحث.",
    trafficPaidTitle: "الإعلانات المدفوعة",
    trafficPaidText: "تخطيط الحملات واختبارها وتحسينها بمسؤولية.",
    trafficNote: "تحقق دائماً من قواعد المنصات والقوانين المحلية ومتطلبات الإعلان وشروط برنامج الشراكة المعمول بها قبل الترويج لأي عرض."
  },

  de: {
    academy: "Akademie",
    traffic: "Traffic-Quellen",
    partnership: "Partnerschaft",
    about: "Über uns",
    apply: "Jetzt bewerben",
    eyebrow: "LERNEN · VERNETZEN · WACHSEN",
    heroCopy: "Praktische Affiliate-Marketing-Tipps für Creator, Publisher und erfahrene Traffic-Partner.",
    academyTitle: "DIE AFFILIATE-AKADEMIE",
    academyHeading: "Lerne die Grundlagen.",
    academySubheading: "Triff fundierte Entscheidungen.",
    academyDescription: "Klare, praktische Ressourcen, um Affiliate-Marketing zu verstehen und einen durchdachten Ansatz für Traffic aufzubauen.",
    academyCard1Kicker: "01 / HIER STARTEN",
    academyCard1Title: "Grundlagen des Affiliate-Marketings",
    academyCard1Text: "Verstehe das Modell, wichtige Begriffe, Tracking und die typische Funktionsweise von Partnerschaften.",
    academyCard1Link: "Lernpfad entdecken",
    academyCard2Kicker: "02 / AUFBAUEN",
    academyCard2Title: "Traffic-Strategie",
    academyCard2Text: "Lerne, wie Inhalte, Communities, Suchmaschinen und bezahlte Medien zu verschiedenen Strategien passen.",
    academyCard2Link: "Traffic-Quellen entdecken",
    academyCard3Kicker: "03 / VERBESSERN",
    academyCard3Title: "Messen und optimieren",
    academyCard3Text: "Lerne wichtige Kennzahlen, Tests, Zielgruppenqualität und nachhaltiges Wachstum kennen.",
    academyCard3Link: "Partnerschaft entdecken"
    trafficTitle: "TRAFFIC-QUELLEN",
    trafficHeading: "Verschiedene Kanäle.",
    trafficSubheading: "Verschiedene Möglichkeiten.",
    trafficDescription: "Wähle die Kanäle, die zu deiner Zielgruppe, Erfahrung und den lokalen Anforderungen passen.",
    trafficVideoTitle: "Kurzvideos",
    trafficVideoText: "TikTok, Reels und Inhalte von Creatorn.",
    trafficCommunityTitle: "Communities",
    trafficCommunityText: "Telegram-Kanäle, Gruppen und spezialisierte Communities.",
    trafficSeoTitle: "SEO und Publishing",
    trafficSeoText: "Websites, Blogs und suchmaschinenorientierte Inhalte.",
    trafficPaidTitle: "Bezahlte Werbung",
    trafficPaidText: "Kampagnenplanung, Tests und verantwortungsvolle Optimierung.",
    trafficNote: "Prüfe vor jeder Bewerbung eines Angebots stets die Plattformregeln, lokalen Gesetze, Werbeanforderungen und geltenden Partnerprogramm-Bedingungen."
  }
};
function changeLanguage(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const links = document.querySelectorAll(".main-nav a");
  links[0].textContent = t.academy;
  links[1].textContent = t.traffic;
  links[2].textContent = t.partnership;
  links[3].textContent = t.about;
  links[4].textContent = t.apply;

  document.querySelector(".hero .eyebrow").textContent = t.eyebrow;
  document.querySelector(".hero-copy").textContent = t.heroCopy;
  document.querySelector('[data-i18n="academyTitle"]').textContent = t.academyTitle;
  document.querySelector('[data-i18n="academyHeading"]').textContent = t.academyHeading;
  document.querySelector('[data-i18n="academySubheading"]').textContent = t.academySubheading;
  document.querySelector('[data-i18n="academyDescription"]').textContent = t.academyDescription;
  document.querySelector('[data-i18n="academyCard1Kicker"]').textContent = t.academyCard1Kicker;
  document.querySelector('[data-i18n="academyCard1Title"]').textContent = t.academyCard1Title;
  document.querySelector('[data-i18n="academyCard1Text"]').textContent = t.academyCard1Text;
  document.querySelector('[data-i18n="academyCard1Link"]').textContent = t.academyCard1Link;
  document.querySelector('[data-i18n="academyCard2Kicker"]').textContent = t.academyCard2Kicker;
  document.querySelector('[data-i18n="academyCard2Title"]').textContent = t.academyCard2Title;
  document.querySelector('[data-i18n="academyCard2Text"]').textContent = t.academyCard2Text;
  document.querySelector('[data-i18n="academyCard2Link"]').textContent = t.academyCard2Link;
  document.querySelector('[data-i18n="academyCard3Kicker"]').textContent = t.academyCard3Kicker;
  document.querySelector('[data-i18n="academyCard3Title"]').textContent = t.academyCard3Title;
  document.querySelector('[data-i18n="academyCard3Text"]').textContent = t.academyCard3Text;
  document.querySelector('[data-i18n="academyCard3Link"]').textContent = t.academyCard3Link;
  document.querySelector('[data-i18n="trafficTitle"]').textContent = t.trafficTitle;
  document.querySelector('[data-i18n="trafficHeading"]').textContent = t.trafficHeading;
  document.querySelector('[data-i18n="trafficSubheading"]').textContent = t.trafficSubheading;
  document.querySelector('[data-i18n="trafficDescription"]').textContent = t.trafficDescription;
  document.querySelector('[data-i18n="trafficVideoTitle"]').textContent = t.trafficVideoTitle;
  document.querySelector('[data-i18n="trafficVideoText"]').textContent = t.trafficVideoText;
  document.querySelector('[data-i18n="trafficCommunityTitle"]').textContent = t.trafficCommunityTitle;
  document.querySelector('[data-i18n="trafficCommunityText"]').textContent = t.trafficCommunityText;
  document.querySelector('[data-i18n="trafficSeoTitle"]').textContent = t.trafficSeoTitle;
  document.querySelector('[data-i18n="trafficSeoText"]').textContent = t.trafficSeoText;
  document.querySelector('[data-i18n="trafficPaidTitle"]').textContent = t.trafficPaidTitle;
  document.querySelector('[data-i18n="trafficPaidText"]').textContent = t.trafficPaidText;
  document.querySelector('[data-i18n="trafficNote"]').textContent = t.trafficNote;
  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("siteLanguage") || "en";
changeLanguage(savedLanguage);

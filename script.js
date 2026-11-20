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
  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("siteLanguage") || "en";
changeLanguage(savedLanguage);

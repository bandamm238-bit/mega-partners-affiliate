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
    academyCard3Link: "Explore partnership",
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
    trafficNote: "Always check platform rules, local laws, advertising requirements, and the applicable partner-program terms before promoting any offer.",
    partnersTitle: "PARTNERSHIP PATHS",
    partnersHeading: "Wherever you are",
    partnersSubheading: "in your journey.",
    beginnerTag: "NEW TO AFFILIATE MARKETING",
    beginnerTitle: "I'm getting started",
    beginnerDescription: "Build a foundation before choosing a traffic channel or applying to a program.",
    beginnerPoint1: "Understand the basics",
    beginnerPoint2: "Choose a suitable channel",
    beginnerPoint3: "Learn about compliance",
    beginnerButton: "Start learning",
    proTag: "ALREADY HAVE TRAFFIC",
    proTitle: "I'm an experienced partner",
    proDescription: "Share your traffic profile and discuss whether a partnership could be a fit.",
    proPoint1: "Present your channels",
    proPoint2: "Share audience and geo details",
    proPoint3: "Discuss terms and next steps",
    proButton: "Discuss a partnership",
    proButton: "Discuss a partnership",
    applyEyebrow: "LET'S START A CONVERSATION",
    applyHeading: "Tell us about your audience.",
    applyDescription: "Share a few details about your experience and traffic sources. We can then understand your goals and discuss possible next steps.",
    applyPoint1: "✓ No guaranteed earnings claims",
    applyPoint2: "✓ Clear, relevant information",
    applyPoint3: "✓ Reviewed for partnership fit",
    formHeading: "Partner inquiry",
    formRequired: "Fields marked * are required.",
    formName: "Full name *",
    formContact: "Email or preferred contact *",
    formCountry: "Country *",
    formExperience: "Experience *",
    formTraffic: "Main traffic source *",
    formDetails: "Tell us about your audience",
    formSubmit: "Prepare inquiry",
    formDisclaimer: "This demo form does not send or store submissions yet. A secure submission method will be connected before launch.",
    placeholderName: "Your name",
    placeholderContact: "Email, Telegram, or other contact",
    placeholderCountry: "Your country",
    placeholderDetails: "Your channels, audience size, GEOs, and goals (optional)",
    optionSelect: "Select one",
    optionBeginner: "Just getting started",
    optionSome: "Some experience",
    optionExperienced: "Experienced affiliate",
    optionChannel: "Select a channel",
    optionTikTok: "TikTok / short-form video",
    optionTelegram: "Telegram / communities",
    optionSEO: "Website / SEO",
    optionSocial: "Instagram / social media",
    optionPaid: "Paid media",
    optionOther: "Other"
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
    academyCard3Link: "Découvrir le partenariat",
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
    trafficNote: "Vérifiez toujours les règles des plateformes, les lois locales, les exigences publicitaires et les conditions du programme partenaire avant toute promotion.",
    partnersTitle: "PARCOURS DE PARTENARIAT",
    partnersHeading: "Où que vous soyez",
    partnersSubheading: "dans votre parcours.",
    beginnerTag: "DÉBUTANT EN MARKETING D'AFFILIATION",
    beginnerTitle: "Je débute",
    beginnerDescription: "Construisez de bonnes bases avant de choisir une source de trafic ou de rejoindre un programme.",
    beginnerPoint1: "Comprendre les bases",
    beginnerPoint2: "Choisir un canal adapté",
    beginnerPoint3: "Connaître les règles de conformité",
    beginnerButton: "Commencer à apprendre",
    proTag: "VOUS AVEZ DÉJÀ DU TRAFIC",
    proTitle: "Je suis un partenaire expérimenté",
    proDescription: "Présentez vos sources de trafic et discutons d'une éventuelle collaboration.",
    proPoint1: "Présenter vos canaux",
    proPoint2: "Partager les informations sur votre audience et vos GEO",
    proPoint3: "Discuter des conditions et des prochaines étapes",
    proButton: "Discuter d'un partenariat",
    proButton: "Discuter d'un partenariat",
applyEyebrow: "COMMENÇONS UNE CONVERSATION",
applyHeading: "Parlez-nous de votre audience.",
applyDescription: "Partagez quelques informations sur votre expérience et vos sources de trafic afin que nous puissions comprendre vos objectifs et discuter des prochaines étapes.",
applyPoint1: "✓ Aucune promesse de gains garantis",
applyPoint2: "✓ Des informations claires et pertinentes",
applyPoint3: "✓ Évaluation de la compatibilité du partenariat",
formHeading: "Demande de partenariat",
formRequired: "Les champs marqués * sont obligatoires.",
formName: "Nom complet *",
formContact: "E-mail ou moyen de contact préféré *",
formCountry: "Pays *",
formExperience: "Expérience *",
formTraffic: "Principale source de trafic *",
formDetails: "Parlez-nous de votre audience",
formSubmit: "Préparer la demande",
formDisclaimer: "Ce formulaire de démonstration n'envoie et ne stocke pas encore les demandes. Un système d'envoi sécurisé sera connecté avant le lancement.",
placeholderName: "Votre nom",
placeholderContact: "E-mail, Telegram ou autre contact",
placeholderCountry: "Votre pays",
placeholderDetails: "Vos canaux, taille de l'audience, GEOs et objectifs (facultatif)",
optionSelect: "Sélectionnez une option",
optionBeginner: "Je débute",
optionSome: "Quelques expériences",
optionExperienced: "Affilié expérimenté",
optionChannel: "Sélectionnez un canal",
optionTikTok: "TikTok / vidéos courtes",
optionTelegram: "Telegram / communautés",
optionSEO: "Site web / SEO",
optionSocial: "Instagram / réseaux sociaux",
optionPaid: "Publicité payante",
optionOther: "Autre"
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
    academyCard3Link: "اكتشف الشراكة",
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
    trafficNote: "تحقق دائماً من قواعد المنصات والقوانين المحلية ومتطلبات الإعلان وشروط برنامج الشراكة المعمول بها قبل الترويج لأي عرض.",
    partnersTitle: "مسارات الشراكة",
    partnersHeading: "أينما كنت",
    partnersSubheading: "في رحلتك.",
    beginnerTag: "جديد في التسويق بالعمولة",
    beginnerTitle: "أريد البدء",
    beginnerDescription: "ابنِ أساساً جيداً قبل اختيار مصدر الزيارات أو التقدم إلى برنامج شراكة.",
    beginnerPoint1: "فهم الأساسيات",
    beginnerPoint2: "اختيار القناة المناسبة",
    beginnerPoint3: "التعرّف على قواعد الامتثال",
    beginnerButton: "ابدأ التعلم",
    proTag: "لديك زيارات بالفعل",
    proTitle: "أنا شريك ذو خبرة",
    proDescription: "شاركنا تفاصيل مصادر الزيارات لديك، ولنناقش مدى ملاءمة الشراكة.",
    proPoint1: "عرض قنواتك",
    proPoint2: "مشاركة تفاصيل الجمهور والمناطق الجغرافية",
    proPoint3: "مناقشة الشروط والخطوات التالية",
    proButton: "ناقش الشراكة",
    proButton: "ناقش الشراكة",
applyEyebrow: "لنبدأ الحوار",
applyHeading: "أخبرنا عن جمهورك.",
applyDescription: "شاركنا بعض التفاصيل حول خبرتك ومصادر الزيارات لديك، حتى نفهم أهدافك ونناقش الخطوات التالية الممكنة.",
applyPoint1: "✓ لا توجد وعود بأرباح مضمونة",
applyPoint2: "✓ معلومات واضحة وذات صلة",
applyPoint3: "✓ مراجعة مدى ملاءمة الشراكة",
formHeading: "طلب شراكة",
formRequired: "الحقول التي تحمل علامة * إلزامية.",
formName: "الاسم الكامل *",
formContact: "البريد الإلكتروني أو وسيلة التواصل المفضلة *",
formCountry: "البلد *",
formExperience: "مستوى الخبرة *",
formTraffic: "مصدر الزيارات الرئيسي *",
formDetails: "أخبرنا عن جمهورك",
formSubmit: "تجهيز الطلب",
formDisclaimer: "هذا النموذج تجريبي ولا يرسل الطلبات أو يخزنها حالياً. سيتم ربطه بنظام إرسال آمن قبل الإطلاق.",
placeholderName: "اسمك",
placeholderContact: "البريد الإلكتروني أو تيليغرام أو وسيلة تواصل أخرى",
placeholderCountry: "بلدك",
placeholderDetails: "قنواتك وحجم جمهورك والمناطق الجغرافية وأهدافك (اختياري)",
optionSelect: "اختر خياراً",
optionBeginner: "مبتدئ",
optionSome: "لدي بعض الخبرة",
optionExperienced: "مسوّق بالعمولة ذو خبرة",
optionChannel: "اختر قناة",
optionTikTok: "تيك توك / فيديوهات قصيرة",
optionTelegram: "تيليغرام / المجتمعات",
optionSEO: "موقع إلكتروني / تحسين محركات البحث",
optionSocial: "إنستغرام / وسائل التواصل الاجتماعي",
optionPaid: "الإعلانات المدفوعة",
optionOther: "أخرى"
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
    academyCard3Link: "Partnerschaft entdecken",
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
    trafficNote: "Prüfe vor jeder Bewerbung eines Angebots stets die Plattformregeln, lokalen Gesetze, Werbeanforderungen und geltenden Partnerprogramm-Bedingungen.",
    partnersTitle: "PARTNERSCHAFTSWEGE",
    partnersHeading: "Wo auch immer du",
    partnersSubheading: "auf deinem Weg stehst.",
    beginnerTag: "NEU IM AFFILIATE-MARKETING",
    beginnerTitle: "Ich möchte anfangen",
    beginnerDescription: "Schaffe eine Grundlage, bevor du einen Traffic-Kanal auswählst oder dich für ein Programm bewirbst.",
    beginnerPoint1: "Die Grundlagen verstehen",
    beginnerPoint2: "Einen passenden Kanal wählen",
    beginnerPoint3: "Compliance-Anforderungen kennenlernen",
    beginnerButton: "Jetzt lernen",
    proTag: "DU HAST BEREITS TRAFFIC",
    proTitle: "Ich bin ein erfahrener Partner",
    proDescription: "Teile dein Traffic-Profil und bespreche, ob eine Partnerschaft passen könnte.",
    proPoint1: "Deine Kanäle vorstellen",
    proPoint2: "Informationen zu Zielgruppe und GEOs teilen",
    proPoint3: "Bedingungen und nächste Schritte besprechen",
    proButton: "Partnerschaft besprechen",
    proButton: "Partnerschaft besprechen",
applyEyebrow: "LASS UNS INS GESPRÄCH KOMMEN",
applyHeading: "Erzähl uns von deiner Zielgruppe.",
applyDescription: "Teile einige Informationen über deine Erfahrung und Traffic-Quellen, damit wir deine Ziele verstehen und mögliche nächste Schritte besprechen können.",
applyPoint1: "✓ Keine garantierten Verdienstversprechen",
applyPoint2: "✓ Klare und relevante Informationen",
applyPoint3: "✓ Prüfung der Partnerschaftseignung",
formHeading: "Partnerschaftsanfrage",
formRequired: "Mit * markierte Felder sind Pflichtfelder.",
formName: "Vollständiger Name *",
formContact: "E-Mail oder bevorzugte Kontaktmöglichkeit *",
formCountry: "Land *",
formExperience: "Erfahrung *",
formTraffic: "Haupt-Traffic-Quelle *",
formDetails: "Erzähl uns von deiner Zielgruppe",
formSubmit: "Anfrage vorbereiten",
formDisclaimer: "Dieses Demo-Formular sendet und speichert noch keine Anfragen. Vor dem Start wird eine sichere Übermittlungsmethode eingerichtet.",
placeholderName: "Dein Name",
placeholderContact: "E-Mail, Telegram oder andere Kontaktmöglichkeit",
placeholderCountry: "Dein Land",
placeholderDetails: "Deine Kanäle, Zielgruppengröße, GEOs und Ziele (optional)",
optionSelect: "Bitte auswählen",
optionBeginner: "Ich fange gerade erst an",
optionSome: "Etwas Erfahrung",
optionExperienced: "Erfahrener Affiliate",
optionChannel: "Kanal auswählen",
optionTikTok: "TikTok / Kurzvideos",
optionTelegram: "Telegram / Communities",
optionSEO: "Website / SEO",
optionSocial: "Instagram / soziale Medien",
optionPaid: "Bezahlte Werbung",
optionOther: "Sonstiges"
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
  document.querySelector('[data-i18n="partnersTitle"]').textContent = t.partnersTitle;
  document.querySelector('[data-i18n="partnersHeading"]').textContent = t.partnersHeading;
  document.querySelector('[data-i18n="partnersSubheading"]').textContent = t.partnersSubheading;
  document.querySelector('[data-i18n="beginnerTag"]').textContent = t.beginnerTag;
  document.querySelector('[data-i18n="beginnerTitle"]').textContent = t.beginnerTitle;
  document.querySelector('[data-i18n="beginnerDescription"]').textContent = t.beginnerDescription;
  document.querySelector('[data-i18n="beginnerPoint1"]').textContent = t.beginnerPoint1;
  document.querySelector('[data-i18n="beginnerPoint2"]').textContent = t.beginnerPoint2;
  document.querySelector('[data-i18n="beginnerPoint3"]').textContent = t.beginnerPoint3;
  document.querySelector('[data-i18n="beginnerButton"]').textContent = t.beginnerButton;
  document.querySelector('[data-i18n="proTag"]').textContent = t.proTag;
  document.querySelector('[data-i18n="proTitle"]').textContent = t.proTitle;
  document.querySelector('[data-i18n="proDescription"]').textContent = t.proDescription;
  document.querySelector('[data-i18n="proPoint1"]').textContent = t.proPoint1;
  document.querySelector('[data-i18n="proPoint2"]').textContent = t.proPoint2;
  document.querySelector('[data-i18n="proPoint3"]').textContent = t.proPoint3;
  document.querySelector('[data-i18n="proButton"]').textContent = t.proButton;
  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("siteLanguage") || "en";
changeLanguage(savedLanguage);

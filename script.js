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
    heroCopy: "Practical affiliate marketing guidance for creators, publishers, and experienced traffic partners. Build your skills, understand your options, and start a conversation."
  },
  fr: {
    academy: "Académie",
    traffic: "Sources de trafic",
    partnership: "Partenariat",
    about: "À propos",
    apply: "Postuler",
    eyebrow: "APPRENDRE · CONNECTER · GRANDIR",
    heroCopy: "Des conseils pratiques en marketing d'affiliation pour les créateurs, éditeurs et partenaires expérimentés."
  },
  ar: {
    academy: "الأكاديمية",
    traffic: "مصادر الزيارات",
    partnership: "الشراكة",
    about: "من نحن",
    apply: "قدّم الآن",
    eyebrow: "تعلّم · تواصل · تطوّر",
    heroCopy: "إرشادات عملية في التسويق بالعمولة لصناع المحتوى والناشرين وشركاء التسويق."
  },
  de: {
    academy: "Akademie",
    traffic: "Traffic-Quellen",
    partnership: "Partnerschaft",
    about: "Über uns",
    apply: "Jetzt bewerben",
    eyebrow: "LERNEN · VERNETZEN · WACHSEN",
    heroCopy: "Praktische Affiliate-Marketing-Tipps für Creator, Publisher und erfahrene Traffic-Partner."
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

  localStorage.setItem("siteLanguage", lang);
}

document.querySelectorAll("[data-lang]").forEach(button => {
  button.addEventListener("click", () => {
    changeLanguage(button.dataset.lang);
  });
});

const savedLanguage = localStorage.getItem("siteLanguage") || "en";
changeLanguage(savedLanguage);

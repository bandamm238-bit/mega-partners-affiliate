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

/* ============================
   MENU JAVASCRIPT
   ============================ */

export const urlToRoot = (event) => {
  event.preventDefault();
  history.replaceState(null, "", "/");
  window.scrollTo({ top: 0 });
};

export default function headerSetup() {
  const header = document.getElementById("header"),
    navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close"),
    navLink = document.querySelectorAll(".nav__link"),
    navLogo = document.querySelector(".nav__logo");

  const showMenu = () => {
    navMenu.classList.add("show-menu");
    navLink.forEach((item) => {
      item.style = "";
    });
    navToggle.style = "";
    document.body.classList.add("menu-open"); // ⛔️ disable scroll
    document.documentElement.classList.add("menu-open");
  };
  const hiddenMenu = () => {
    navMenu.classList.remove("show-menu");
    document.body.classList.remove("menu-open"); // ✅ enable scroll
    document.documentElement.classList.remove("menu-open");
  };

  const blurHeader = () => {
    // Add a class if the bottom offset is greater than 50 of the viewport
    window.scrollY >= 50
      ? header.classList.add("blur-header")
      : header.classList.remove("blur-header");
  };

  /* Menu show */
  if (navToggle) {
    navToggle.addEventListener("click", showMenu);
  }

  /* Menu hidden */
  if (navClose || navLink) {
    navClose.addEventListener("click", hiddenMenu);
    navLink.forEach((n) => n.addEventListener("click", hiddenMenu));
  }

  /* Logo Click */
  if (navLogo) {
    navLogo.addEventListener("click", urlToRoot);
  }

  /* Blur Header */
  window.addEventListener("scroll", blurHeader);
}

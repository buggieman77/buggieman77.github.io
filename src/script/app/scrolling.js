/* ============================
   SCROLL UP BUTTON JAVASCRIPT
   ============================ */
import { urlToRoot } from "./header.js";

export default function scrollingPage() {
  const button = document.getElementById("scroll-up"),
    sections = document.querySelectorAll("section[id]");

  const showButton = () => {
    window.scrollY >= 750
      ? button.classList.add("show-scroll")
      : button.classList.remove("show-scroll");
  };
  const showActiveSection = () => {
    sections.forEach((currentSection) => {
      const sectionId = currentSection.getAttribute("id"),
        sectionsClass = document.querySelector(
          `.nav__menu a[href*="${sectionId}"]`
        );

      if (sectionsClass) {
        const sectionHeight = currentSection.offsetHeight,
          sectionTop = currentSection.offsetTop - 58,
          scrollDown = window.scrollY;
        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionsClass.classList.add("active-link");
        } else {
          sectionsClass.classList.remove("active-link");
        }
      }
    });
  };

  window.addEventListener("scroll", showButton);
  window.addEventListener("scroll", showActiveSection);

  button.addEventListener("click", urlToRoot);
}

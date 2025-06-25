/* ============================
   JAVASCRIPT LIBRARY 
   ============================ */
import "remixicon/fonts/remixicon.css";
import ScrollReveal from "scrollreveal";

/* === SCROLL REVEAL === */

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 400,

  // reset: true, // animation repeat
});

sr.reveal(`.home__data,.home__social`);
sr.reveal(`.nav__link`, { interval: "300" });
sr.reveal(`.home__image,.skills`, { origin: "bottom" });
sr.reveal(`.about__data,.nav__logo`, { origin: "left" });
sr.reveal(`.about__image`, { origin: "right" });
sr.reveal(`.services__card, .projects__card`, {
  interval: "300",
  origin: "bottom",
});
sr.reveal(`.contact .section__subtitle`, {
  origin: "left",
  distance: "500px",
});
sr.reveal(`.contact .section__title`, { origin: "right", distance: "500px" });
sr.reveal(`.contact__group .right`, { origin: "right", distance: "50px" });
sr.reveal(`.contact__group .left`, { origin: "left", distance: "50px" });
sr.reveal(`.bottom,.contact__button,.footer__social-link`, {
  interval: "500",
  origin: "bottom",
  delay: 400,
});
sr.reveal(`.left`, { origin: "left", distance: "100px" });
sr.reveal(`.right`, { origin: "right", distance: "100px" });
sr.reveal(`.footer__copy`, { origin: "right", distance: "100px" });

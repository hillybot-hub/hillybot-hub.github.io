/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SCROLL UP BUTTON ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*=============== SCROLLREVEAL ANIMATIONS ===============*/
if (window.ScrollReveal) {
  const sr = ScrollReveal({
    origin: "bottom",
    distance: "40px",
    duration: 1200,
    delay: 200,
    reset: false,
  });

  sr.reveal(".home__name, .home__description, .home__social, .home__scroll-text", {
    interval: 150,
  });
  sr.reveal(".about__container, .services__item, .projects__card, .contact__container", {
    interval: 100,
  });
}

/*=============== EMAILJS (demo only) ===============*/
// Replace YOUR_PUBLIC_KEY / YOUR_SERVICE_ID / YOUR_TEMPLATE_ID when ready
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent successfully ✅ (demo only)");
    contactForm.reset();
  });
}

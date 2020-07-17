/************************/
/*       Variable       */
/************************/

const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-item");
const header = document.querySelector("header");

/************************/
/*     Event Handlers   */
/************************/

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `menuitems 0.5s ease forwards ${index / 5 + 0.5}s`;
    }
  });
});

header.addEventListener("scroll", () => {
  header.style.display = "none";
});

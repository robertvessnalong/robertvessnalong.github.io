/************************/
/*       Variable       */
/************************/

const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-item");

/************************/
/*     Event Handlers   */
/************************/

hamburgerMenu.addEventListener("click", () => {
  //Toggle Open Class for Hamburger Menu
  navMenu.classList.toggle("open");

  // Animating Links
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `menuitems 0.5s ease forwards ${index / 5 + 0.5}s`;
    }
  });
  //Rotate Hamburger to 'X'
  hamburgerMenu.classList.toggle("toggle");
});

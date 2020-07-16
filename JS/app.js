/************************/
/*       Variable       */
/************************/

const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");

/************************/
/*     Event Handlers   */
/************************/

hamburgerMenu.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

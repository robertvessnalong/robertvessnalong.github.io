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
    //This will close the menu when an a link is pressed
    link.addEventListener("click", () => {
      navMenu.classList.remove("open"); //Will Remove the open class from Nav Menu
      hamburgerMenu.classList.remove("toggle"); //Will remove toggle class from Hamburger Menu
      navLinks.forEach((link) => (link.style.animation = "")); // For each link will remove animatons so they can be added again
    });
  });
  //Rotate Hamburger to 'X'
  hamburgerMenu.classList.toggle("toggle");
});

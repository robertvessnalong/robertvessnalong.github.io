/************************/
/*       Variable       */
/************************/

const hamburgerMenu = document.querySelector("#hamburger-menu");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-item");
const screen = window.matchMedia("(min-width: 1024px)");
const viewWorkBtn = document.querySelector("#viewwork");
const headlineContainer = document.querySelector("#headline-container");
const portfolio = document.querySelector("#portfolio");

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

//Media Query Function
viewWorkBtn.addEventListener("click", () => {
  if (screen.matches) {
    headlineContainer.classList.add("remove");
    setTimeout(() => {
      portfolio.classList.add("add");
    }, 2000);
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth <= 1024) {
    headlineContainer.classList.remove("remove");
    portfolio.classList.remove("add");
  }
});

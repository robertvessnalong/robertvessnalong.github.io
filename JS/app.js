const projectBtn = document.getElementById("project-btn");
const projectConainter = document.getElementById("project-container");

projectBtn.addEventListener("click", (e) => {
  const button = e.target.tagName;
  if (button === "BUTTON") {
    projectConainter.style.display = "block";
  }
});

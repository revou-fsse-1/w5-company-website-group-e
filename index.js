// navbar slide function
const menyToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector("nav ul");

menyToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

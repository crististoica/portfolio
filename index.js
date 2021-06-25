const hamburgerMenu = document.querySelector("#hamburger-menu");
const topLine = document.querySelector(".top-line");
const middleLine = document.querySelector(".middle-line");
const bottomLine = document.querySelector(".bottom-line");
const links = document.querySelector(".links");
const linkElements = document.querySelectorAll(".link");

hamburgerMenu.addEventListener("click", () => {
  topLine.classList.toggle("top-line-active");
  middleLine.classList.toggle("middle-line-active");
  bottomLine.classList.toggle("bottom-line-active");
  links.classList.toggle("links-active");
});

linkElements.forEach((link) => {
  link.addEventListener("click", () => {
    topLine.classList.remove("top-line-active");
    middleLine.classList.remove("middle-line-active");
    bottomLine.classList.remove("bottom-line-active");
    links.classList.remove("links-active");
  });
});

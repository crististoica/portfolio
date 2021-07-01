const hamburgerMenu = document.querySelector("#hamburger-menu");
const topLine = document.querySelector(".top-line");
const middleLine = document.querySelector(".middle-line");
const bottomLine = document.querySelector(".bottom-line");
const links = document.querySelector(".links");
const linkElements = document.querySelectorAll(".link");
const contactHelp = document.querySelector(".contact-help");
const contactHelpMessage = document.querySelector(".contact-help-message");
const closeHelp = document.querySelector(".close-help");

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

contactHelp.addEventListener("click", () => {
  document.querySelector("html").style.overflowY = "hidden";
  contactHelpMessage.classList.add("active");
  setTimeout(() => {
    contactHelpMessage
      .querySelector(".help-message-body")
      .classList.add("active");
  }, 600);
});

closeHelp.addEventListener("click", () => {
  document.querySelector("html").style.overflowY = "auto";
  contactHelpMessage
    .querySelector(".help-message-body")
    .classList.remove("active");
  setTimeout(() => {
    contactHelpMessage.classList.remove("active");
  }, 600);
});

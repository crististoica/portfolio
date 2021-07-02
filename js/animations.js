const sideNavToggleContainer = document.querySelector(
  ".side-nav-toggle-container"
);
const sideNav = document.querySelector(".side-nav");
const sideNavLinks = document.querySelectorAll(".side-nav-ul > li");

const sections = document.querySelectorAll("section");
const homeSection = document.querySelector("#home");

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".animate").forEach((el) => {
          el.classList.add("slide");
        });
      } else {
        entry.target.querySelectorAll(".animate").forEach((el) => {
          el.classList.remove("slide");
        });
      }
    });
  },
  {
    threshold: 0.1,
  }
);

const sideNavObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        sideNav.style.display = "flex";
      } else {
        sideNav.style.display = "none";
      }
    });
  },
  { rootMargin: "-150px" }
);

sections.forEach((section) => animationObserver.observe(section));
sideNavObserver.observe(homeSection);

sideNavToggleContainer.addEventListener("click", toggleSideNav);
sideNavLinks.forEach((link) => link.addEventListener("click", toggleSideNav));

function toggleSideNav() {
  document.querySelector("#side-nav-toggle").classList.toggle("active");
  document.querySelector(".side-nav").classList.toggle("active");
}

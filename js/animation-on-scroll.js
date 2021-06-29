const sections = document.querySelectorAll("section");

const animationObserver = new IntersectionObserver(
  (entries, obsv) => {
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
    rootMargin: "-250px",
  }
);

sections.forEach((section) => animationObserver.observe(section));

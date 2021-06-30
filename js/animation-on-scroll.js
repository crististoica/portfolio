const sections = document.querySelectorAll("section");

const animationObserver = new IntersectionObserver(
  (entries, obsv) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("Intersectiong");
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
    // rootMargin: "-250px 0px",
  }
);

sections.forEach((section) => animationObserver.observe(section));

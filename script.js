document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");

  const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px"
  };

  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
          }
      });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });
});

   document.addEventListener("DOMContentLoaded", () => {
    const animatedItems = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    animatedItems.forEach((el, i) => {
      // stagger delay if attribute exists
      if (el.dataset.delay) {
        el.style.setProperty("--delay", el.dataset.delay + "ms");
      }
      observer.observe(el);
    });
  });
 

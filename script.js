// Simple scroll-based animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".fact-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = "scale(1.05)";
        entry.target.style.transition = "transform 0.5s ease";
      } else {
        entry.target.style.transform = "scale(1)";
      }
    });
  }, {
    threshold: 0.5
  });

  cards.forEach(card => observer.observe(card));
});

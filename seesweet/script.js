document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".toggle");

  toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
      const prodotti = toggle.nextElementSibling;

      // Toggle classico
      if (prodotti.style.display === "block") {
        prodotti.style.display = "none";
      } else {
        prodotti.style.display = "block";
      }
    });
  });
});

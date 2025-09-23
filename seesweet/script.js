document.addEventListener("DOMContentLoaded", () => {
  // Toggle categorie
  document.querySelectorAll(".categoria .toggle").forEach(toggle => {
    toggle.addEventListener("click", () => {
      const prodotti = toggle.nextElementSibling;
      prodotti.style.display = (prodotti.style.display === "block") ? "none" : "block";
    });
  });

  // Ricerca nei prodotti (opzionale)
  const searchInput = document.getElementById("search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      let query = searchInput.value.toLowerCase();
      document.querySelectorAll("article").forEach(article => {
        let text = article.innerText.toLowerCase();
        article.style.display = text.includes(query) ? "" : "none";
      });
    });
  }
});

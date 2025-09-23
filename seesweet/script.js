document.addEventListener("DOMContentLoaded", () => {
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

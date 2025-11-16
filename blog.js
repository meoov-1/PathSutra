// Toggle full content on click
function toggleArticle(card) {
  const fullContent = card.querySelector(".full-content");
  const readMore = card.querySelector(".read-more");
  fullContent.classList.toggle("hidden");
  if (fullContent.classList.contains("hidden")) {
    readMore.textContent = "Read More";
  } else {
    readMore.textContent = "Show Less";
  }
}

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) scrollTopBtn.classList.add("show");
  else scrollTopBtn.classList.remove("show");
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

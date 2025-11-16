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

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// button to take into top
function toggleScroll() {
    if (window.scrollY > 0) {
        // At the top → scroll to bottom
        window.scrollTo({ top: 0, behavior: "smooth" });
    } 
}
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

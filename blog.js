// Toggle article content
function toggleArticle(cardElement) {
    const content = cardElement.querySelector('.card-content');
    const preview = cardElement.querySelector('.card-preview');
    
    // Toggle the hidden class
    content.classList.toggle('hidden');
    preview.classList.toggle('hidden');
    
    // Add smooth scroll animation
    cardElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Add animation on scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe timeline items and team cards
    document.querySelectorAll('.timeline-item, .team-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
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
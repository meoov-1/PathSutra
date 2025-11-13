// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const form = this;
    const formStatus = document.getElementById('formStatus');
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.name || !data.email || !data.message) {
        showStatus('Please fill in all required fields', 'error');
        return;
    }
    
    // Validate email
    if (!isValidEmail(data.email)) {
        showStatus('Please enter a valid email address', 'error');
        return;
    }
    
    // Simulate sending (in a real app, you'd send to a server)
    showStatus('Sending...', 'loading');
    
    setTimeout(() => {
        // Success message
        showStatus('Thank you! Your message has been sent successfully. We\'ll get back to you soon!', 'success');
        
        // Reset form
        form.reset();
        
        // Clear status after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);
    }, 1500);
});

// Validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show form status
function showStatus(message, type) {
    const formStatus = document.getElementById('formStatus');
    formStatus.textContent = message;
    formStatus.className = 'form-status ' + type;
}

// Toggle FAQ items
function toggleFAQ(element) {
    const content = element.nextElementSibling;
    const isHidden = content.classList.contains('hidden');
    
    // Close all other FAQs
    document.querySelectorAll('.faq-content').forEach(item => {
        item.classList.add('hidden');
    });
    
    document.querySelectorAll('.faq-item h3').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current FAQ
    if (isHidden) {
        content.classList.remove('hidden');
        element.classList.add('active');
    }
}

// Add smooth scroll
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
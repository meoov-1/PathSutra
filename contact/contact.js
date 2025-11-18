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


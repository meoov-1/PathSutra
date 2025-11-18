

(function() {
  'use strict';

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    

    const menuToggle = document.getElementById('menuToggle');
    const navbar = document.getElementById('navbar');
    
    if (menuToggle && navbar) {
      // Toggle menu on hamburger click
      menuToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        menuToggle.classList.toggle('active');
        navbar.classList.toggle('active');
      });

      // Close menu when clicking nav items
      const navItems = document.querySelectorAll('.nav-item, #contact-btn');
      navItems.forEach(function(item) {
        item.addEventListener('click', function() {
          menuToggle.classList.remove('active');
          navbar.classList.remove('active');
        });
      });

      // Close menu when clicking outside
      document.addEventListener('click', function(e) {
        if (!menuToggle.contains(e.target) && !navbar.contains(e.target)) {
          menuToggle.classList.remove('active');
          navbar.classList.remove('active');
        }
      });

      // Close menu on ESC key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navbar.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navbar.classList.remove('active');
        }
      });
    }

    // ========================================
    // HEADER SCROLL EFFECT
    // ========================================
    const header = document.getElementById('header');
    let lastScroll = 0;
    
    if (header) {
      window.addEventListener('scroll', function() {
        const currentScroll = window.scrollY;
        
        // Add 'scrolled' class when scrolling down
        if (currentScroll > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
      }, { passive: true });
    }


    // Automatically highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-item');
    
    navLinks.forEach(function(link) {
      const linkPage = link.getAttribute('href');
      
      // Check if this link matches current page
      if (linkPage === currentPage || 
          (currentPage === '' && linkPage === 'index.html') ||
          (currentPage === '/' && linkPage === 'index.html')) {
        link.classList.add('active');
      }
    });


    if ('ontouchstart' in window) {
      const touchElements = document.querySelectorAll('.nav-item, #contact-btn, .menu-toggle');
      
      touchElements.forEach(function(el) {
        el.addEventListener('touchstart', function() {
          this.style.transform = 'scale(0.98)';
        }, { passive: true });
        
        el.addEventListener('touchend', function() {
          this.style.transform = '';
        }, { passive: true });
      });
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(function(link) {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          e.preventDefault();
          
          // Close mobile menu if open
          if (menuToggle && navbar) {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
          }
          
          // Smooth scroll to target
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = targetElement.offsetTop - headerHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });

    function debounce(func, wait) {
      let timeout;
      return function executedFunction(...args) {
        const later = function() {
          clearTimeout(timeout);
          func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
      };
    }

    if (menuToggle && navbar) {
      const focusableElements = navbar.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];
        
        navbar.addEventListener('keydown', function(e) {
          if (e.key === 'Tab' && navbar.classList.contains('active')) {
            if (e.shiftKey) {
              // Shift + Tab
              if (document.activeElement === firstFocusable) {
                e.preventDefault();
                lastFocusable.focus();
              }
            } else {
              // Tab
              if (document.activeElement === lastFocusable) {
                e.preventDefault();
                firstFocusable.focus();
              }
            }
          }
        });
      }
    }

    console.log('%c PathSutra Navigation Loaded ✓', 
      'background: linear-gradient(135deg, #1c5e91, #f69220); color: white; padding: 8px 16px; border-radius: 4px; font-weight: bold;'
    );
  });

})();
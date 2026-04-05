// Unify Electronics Lab - Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mobile Menu Toggle
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-open');
        });

        // Handle dropdowns on mobile
        navLinks.querySelectorAll('.dropdown > a, .dropdown-submenu > a').forEach((dropdownLink) => {
            dropdownLink.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    const parent = dropdownLink.parentElement;
                    parent.classList.toggle('dropdown-open');
                }
            });
        });

        navLinks.querySelectorAll('a:not([href="#"])').forEach((link) => {
            link.addEventListener('click', () => {
                if (!link.parentElement.classList.contains('dropdown') && !link.parentElement.classList.contains('dropdown-submenu')) {
                    navLinks.classList.remove('nav-open');
                }
            });
        });
    }

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInElements = document.querySelectorAll(
        '.feature-card, .product-card, .info-card, .catalog-card, .aux-card, .blog-card, .showcase-card, .leader-card, .tech-card, .solution-card'
    );

    if (!fadeInElements.length) {
        return;
    }

    fadeInElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeInElements.forEach(el => {
        observer.observe(el);
    });
});

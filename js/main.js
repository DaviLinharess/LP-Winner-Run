document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Menu Toggle ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Change icon
            const icon = mobileToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.querySelector('i').classList.replace('ph-x', 'ph-list');
            });
        });
    }

    // --- Arenas Tabs Logic ---
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active class to clicked button
            btn.classList.add('active');

            // Show corresponding pane
            const targetId = btn.getAttribute('data-target');
            const targetPane = document.getElementById(targetId);
            if (targetPane) {
                targetPane.classList.add('active');
            }
        });
    });

    // --- FAQ Accordion Logic (Animated) ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if(question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Fecha todos os outros
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Abre o atual se não estava aberto
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });

    // --- Infinite Marquee Carousel Logic ---
    const carouselTrack = document.querySelector('.carousel-track');
    if (carouselTrack) {
        // Clone the slides to create an infinite loop effect for the CSS Marquee
        const slides = Array.from(carouselTrack.children);
        slides.forEach(slide => {
            const clone = slide.cloneNode(true);
            // Hide clones from screen readers to prevent duplicate announcements
            clone.setAttribute('aria-hidden', 'true');
            carouselTrack.appendChild(clone);
        });
        
        // The animation itself is now handled purely by CSS (@keyframes scrollMarquee)
        // which provides a much smoother, hardware-accelerated experience.
    }
});

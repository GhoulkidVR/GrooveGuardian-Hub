document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .info-grid, .getbot-card');

    // Initial styling for fade-in effect
    elements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = 'scale(0.9)'; // Initial scale for a slight zoom effect
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease'; // Combined transition
    });

    // Intersection Observer setup
    const observerOptions = {
        threshold: 0.2, // Element becomes visible when 20% is in the viewport
        rootMargin: '0px 0px -50px 0px' // Trigger animation slightly before reaching the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'scale(1)'; // Restore scale to normal
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);

    // Observe each element for animation
    elements.forEach(el => observer.observe(el));
});

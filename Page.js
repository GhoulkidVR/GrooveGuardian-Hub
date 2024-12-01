document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.card, .info-grid, .getbot-card');

    // Apply initial styles for fade-in and zoom effect
    elements.forEach(el => {
        Object.assign(el.style, {
            opacity: '0',
            transform: 'scale(0.9)', // Slight zoom-out effect
            transition: 'opacity 0.6s ease, transform 0.6s ease'
        });
    });

    // Intersection Observer options
    const observerOptions = {
        threshold: 0.2, // Element visible when 20% is in the viewport
        rootMargin: '0px 0px -50px 0px' // Trigger animation before entering the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const { target } = entry;
                target.style.opacity = '1';
                target.style.transform = 'scale(1)'; // Reset to original size
                observer.unobserve(target); // Stop observing after animation
            }
        });
    }, observerOptions);

    // Attach the observer to each element
    elements.forEach(el => observer.observe(el));
});
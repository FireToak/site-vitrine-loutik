(() => {
    // Année Footer
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Menu Mobile
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuButton && mobileMenu) {
        const toggleMenu = () => {
            const isShown = mobileMenu.style.display === 'block';
            mobileMenu.style.display = isShown ? 'none' : 'block';
            menuButton.setAttribute('aria-expanded', (!isShown).toString());
        };

        menuButton.addEventListener('click', toggleMenu);

        // Reset menu on resize (optionnel, évite menu bloqué après passage en desktop)
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                mobileMenu.style.display = '';
                menuButton.removeAttribute('aria-expanded');
            }
        });
    }

    // Animations au Scroll (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');
    if ('IntersectionObserver' in window && faders.length) {
        const appearOptions = {
            threshold: 0,
            rootMargin: '0px 0px -100px 0px'
        };

        const appearOnScroll = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => appearOnScroll.observe(fader));
    } else {
        // Fallback : afficher tout
        faders.forEach(f => f.classList.add('is-visible'));
    }
})();
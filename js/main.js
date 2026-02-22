/* ============================================
   MAIN — Nexus Food Intelligence
   Initialization and orchestration
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // === Initialize Lucide Icons ===
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // === Smooth scroll for anchor links ===
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                const offset = 80; // navbar height
                const top = target.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });

    // === Track CTA Clicks (GA4 ready) ===
    const ctaButtons = document.querySelectorAll('[id^="cta-"], [id^="hero-cta-"], #navbar-cta, #whatsapp-float');

    ctaButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const label = btn.id || btn.textContent.trim();

            // GA4 Event (if available)
            if (typeof gtag === 'function') {
                gtag('event', 'cta_click', {
                    event_category: 'conversion',
                    event_label: label,
                    value: 1
                });
            }

            // Console log for dev
            console.log(`[Nexus] CTA Click: ${label}`);
        });
    });

    // === Preload critical images ===
    const preloadImages = [
        'assets/images/logo.png',
        'assets/images/IMAGENS DA TELA DO CELULAR E DE ADMINISTRADOR DO CLIENTE.png'
    ];
    preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // === Log ===
    console.log('%c🚀 Nexus Food Intelligence — Landing Page Loaded', 'color: #10b981; font-size: 14px; font-weight: bold;');
});

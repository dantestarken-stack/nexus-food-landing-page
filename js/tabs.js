/* ============================================
   TABS — Nexus Food Intelligence
   Feature tabs navigation
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tabs__btn');
    const tabPanels = document.querySelectorAll('.tabs__panel');

    if (!tabButtons.length) return;

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            // Deactivate all
            tabButtons.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-selected', 'false');
            });
            tabPanels.forEach(p => p.classList.remove('active'));

            // Activate selected
            btn.classList.add('active');
            btn.setAttribute('aria-selected', 'true');

            const panel = document.querySelector(`.tabs__panel[data-panel="${target}"]`);
            if (panel) {
                panel.classList.add('active');
            }
        });
    });

    // Keyboard navigation (arrows)
    const tabNav = document.querySelector('.tabs__nav');
    if (tabNav) {
        tabNav.addEventListener('keydown', (e) => {
            const tabs = Array.from(tabButtons);
            const current = tabs.findIndex(t => t.classList.contains('active'));

            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                e.preventDefault();
                const next = (current + 1) % tabs.length;
                tabs[next].click();
                tabs[next].focus();
            }

            if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = (current - 1 + tabs.length) % tabs.length;
                tabs[prev].click();
                tabs[prev].focus();
            }
        });
    }
});

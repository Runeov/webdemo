document.addEventListener('DOMContentLoaded', () => {
    const character = document.querySelector('.character');
    const headlight = document.querySelector('.headlight');
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => {
            // Calculate positions
            const charRect = character.getBoundingClientRect();
            const itemRect = item.getBoundingClientRect();
            const angle = Math.atan2(itemRect.top - charRect.top, itemRect.left - charRect.left);
            const distance = Math.hypot(itemRect.left - charRect.left, itemRect.top - charRect.top);

            // Animate headlight beam
            headlight.style.width = `${distance}px`;
            headlight.style.height = `100px`; // Cone width
            headlight.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
            headlight.style.opacity = 1;

            // Highlight item
            item.style.filter = 'brightness(1.5) drop-shadow(0 0 20px #fff)';
        });

        item.addEventListener('mouseleave', () => {
            headlight.style.opacity = 0;
            headlight.style.width = 0;
            item.style.filter = 'none';
        });
    });
});


navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.getAttribute('href');
        // Animate character
        character.style.transition = 'transform 1s ease, opacity 1s ease';
        character.style.transform = 'translate(-50%, -50%) scale(1.2)';
        character.style.opacity = 0;

        setTimeout(() => {
            window.location.hash = target; // Or smooth scroll to section
            character.style.opacity = 1; // Reset for future
            character.style.transform = 'translate(-50%, -50%) scale(1)';
        }, 1000);
    });
});
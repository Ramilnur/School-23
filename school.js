document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    let isMenuOpen = false;

    menuToggle.addEventListener('click', () => {
        isMenuOpen = !isMenuOpen;
        menu.style.display = isMenuOpen ? 'block' : 'none';
    });

    // Slider functionality
    const slides = document.querySelector('.slides');
    const totalSlides = slides.children.length;
    let index = 0;

    setInterval(() => {
        index = (index + 1) % totalSlides;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }, 3000);
});
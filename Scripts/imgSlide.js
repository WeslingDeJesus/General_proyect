document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.image-slide');
    const navButtons = document.querySelectorAll('.nav-button');

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            } else if (i < index) {
                slide.style.transform = 'translateX(0)';
            } else {
                slide.style.transform = 'translateX(0)';
            }
        });
    }

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const index = parseInt(button.getAttribute('data-slide'));
            showSlide(index);
        });
    });

    // Initializar el primer slide
    showSlide(0);
});
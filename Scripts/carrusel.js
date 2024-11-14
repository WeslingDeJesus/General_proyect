document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const images = document.querySelectorAll('.carrusel-inner img');
    let currentIndex = 0;
    const intervalTime = 3000; 
    let intervalId;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    prevButton.addEventListener('click', () => {
        prevImage();
        resetInterval();
    });

    nextButton.addEventListener('click', () => {
        nextImage();
        resetInterval();
    });

    // Inicializar primera imagen
    showImage(currentIndex);

    // Iniciar intervalo automático
    intervalId = setInterval(nextImage, intervalTime);

    // Resetear intervalo cuando se Haga clic en los botones
    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextImage, intervalTime);
    }
});


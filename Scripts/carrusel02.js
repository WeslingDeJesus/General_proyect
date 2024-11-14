document.addEventListener('DOMContentLoaded', function () {
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

    // Inicializar primera imagen
    showImage(currentIndex);

    // Iniciar intervalo automático
    intervalId = setInterval(nextImage, intervalTime);

});


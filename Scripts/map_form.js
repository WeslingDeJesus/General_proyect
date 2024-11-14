// Mapa con Leaflet
document.addEventListener('DOMContentLoaded', function () {
    const generalSegurosCoords = [18.4577426,-69.9348866];
    const map = L.map('map').setView(generalSegurosCoords, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap Contributors'
    }).addTo(map);

    L.marker(generalSegurosCoords)
        .addTo(map)
        .bindPopup('Oficina principal, Av. Sarasota #39, Torre Sarasota Center')
        .openPopup();
});

// Validación de formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío del formulario
    
    const nombre = document.getElementById('nombre').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const cedula = document.getElementById('cedula').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    // Validación básica
    if (!nombre || !apellidos || !cedula || !email || !mensaje) {
        alert('Por favor, completa todos los campos requeridos.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    alert('Formulario enviado correctamente.');
    // Aquí se puede realizar el envío de datos a un servidor o hacer alguna otra acción
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
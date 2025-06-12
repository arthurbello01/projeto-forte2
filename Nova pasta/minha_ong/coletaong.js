
document.addEventListener("DOMContentLoaded", function () {
 
  const latitude = -3.7327;
  const longitude = -38.5270;


  const map = L.map('map').setView([latitude, longitude], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([latitude, longitude]).addTo(map)
    .bindPopup('ORG Ecosimples LTDA<br>Rua Alvorada, Nº 155')
    .openPopup();
});


const images = document.querySelectorAll('.gallery-item img');
let currentIndex = 0;

// Create lightbox elements dynamically
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
  <span class="close-btn" onclick="closeLightbox()">&times;</span>
  <img id="lightbox-img" src="" alt="Expanded">
  <div class="lightbox-controls">
    <button class="lightbox-button" onclick="changeImage(-1)">❮</button>
    <button class="lightbox-button" onclick="changeImage(1)">❯</button>
  </div>
`;
document.body.appendChild(lightbox);

// Add click event to images
images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showLightbox(img.src);
  });
});

function showLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  lightbox.style.display = 'flex';
}

function closeLightbox() {
  lightbox.style.display = 'none';
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = images[currentIndex].src;
}

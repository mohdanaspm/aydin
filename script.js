const gallery = document.getElementById('gallery');
const collageImages = [
  "WhatsApp Image 2025-07-26 at 5.08.15 PM (1).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.15 PM.jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.16 PM (1).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.16 PM.jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (1).jpeg"
];

const imageFiles = [
  "WhatsApp Image 2025-07-26 at 5.08.15 PM (1).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.15 PM.jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.16 PM (1).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.16 PM.jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (1).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (10).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (2).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (3).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (4).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (5).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (6).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (7).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (8).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM (9).jpeg",
  "WhatsApp Image 2025-07-26 at 5.08.17 PM.jpeg"
].filter(file => !collageImages.includes(file));

imageFiles.forEach((file, index) => {
  const img = document.createElement('img');
  img.src = `./photos/${file}`;
  img.alt = `Photo ${index + 1}`;
  gallery.appendChild(img);
});

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.classList.add('page-load-effect');

  setTimeout(() => {
    body.classList.remove('page-load-effect');
  }, 2000);

  const carousel = document.getElementById('carousel');
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  function showNextImage() {
    images[currentIndex].classList.remove('visible');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('visible');
  }

  function applyRandomEffect(image) {
    const effects = ['fade', 'zoom', 'rotate', 'blur', 'slide'];
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    image.classList.add(randomEffect);
    setTimeout(() => image.classList.remove(randomEffect), 1000);
  }

  setInterval(() => {
    applyRandomEffect(images[currentIndex]);
    showNextImage();
  }, 3000);
});
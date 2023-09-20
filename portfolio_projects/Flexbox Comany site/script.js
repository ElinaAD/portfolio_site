

/* Product Page slider */

let images = ["img/product-slider1.png", "img/product-slider2.png", "img/product-slider3.png","img/product-slider2.png", "img/product-slider4.png"];
let currentIndex = 0;

function slide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  updateMainImage();
}

function updateMainImage() {
  document.getElementById("main-image").src = images[currentIndex];
}

function setMainImage(index) {
  currentIndex = index;
  updateMainImage();
}

document.addEventListener('DOMContentLoaded', (event) => {
  let thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => setMainImage(index));
  });
});
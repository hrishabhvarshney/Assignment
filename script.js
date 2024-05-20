let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;

function showNextSlide() {
  // Check if currentIndex is at the last index
  if (currentIndex === totalItems - 3) {
    // If currentIndex is at the last index, reset it to 0
    currentIndex = 0;
  } else {
    // If currentIndex is not at the last index, increment it
    currentIndex++;
  }
  
  // Calculate offset to slide to the next image
  const offset = -currentIndex * 100 + '%';
  
  // Apply transform to slide to the next image
  document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
}

// Change slide every 3 seconds
setInterval(showNextSlide, 3000);

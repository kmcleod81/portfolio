// Select all small circles, the large circle, and the image-display
const smallCircles = document.querySelectorAll('.small-circle');
const largeCircle = document.getElementById('large-circle');
const displayImage = document.getElementById('display-image');

// Add a click event listener to each small circle
smallCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    // Retrieve URLs from data attributes
    const largeImageSrc = circle.getAttribute('data-large');
    const displayImageSrc = circle.getAttribute('data-display');

    // Update the large circle's background image
    largeCircle.style.backgroundImage = `url(${largeImageSrc})`;

    // Update the display image's src attribute
    displayImage.src = displayImageSrc;
  });
});

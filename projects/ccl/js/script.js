// Select all small circles, the large circle, the display image, and the overlay text
const smallCircles = document.querySelectorAll('.small-circle');
const largeCircle = document.getElementById('large-circle');
const displayImage = document.getElementById('display-image');
const overlayText = document.getElementById('overlay-text');

// Add a click event listener to each small circle
smallCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    // Retrieve the data attributes for the large image, display image, and overlay text
    const largeImageSrc = circle.getAttribute('data-large');
    const displayImageSrc = circle.getAttribute('data-display');
    const overlayTextContent = circle.getAttribute('data-text');

    // Update the large circle's background image
    largeCircle.style.backgroundImage = `url(${largeImageSrc})`;

    // Update the display image's src attribute
    displayImage.src = displayImageSrc;

    // Update the overlay text content
    overlayText.textContent = overlayTextContent;
  });
});

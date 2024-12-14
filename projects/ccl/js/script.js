const smallCircles = document.querySelectorAll('.small-circle');
const displayImage = document.getElementById('display-image');

smallCircles.forEach((circle) => {
  circle.addEventListener('click', () => {
    const imgSrc = circle.getAttribute('data-img');
    displayImage.src = imgSrc;
  });
});

$(document).ready(() => {
    $('.parallax').parallax();
});

// Materialize JS to make carousel function
var elems = document.querySelectorAll(".carousel");
var instances = M.Carousel.init(elems);

var instance = M.Carousel.init({
    fullWidth: true,
    indicators: true,
});

$('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
});
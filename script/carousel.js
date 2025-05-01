$(document).ready(function () {
  $(".carousel").slick({
    dots: true, // Show navigation dots
    infinite: true, // Loop infinitely
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Only one slide visible at a time
    slidesToScroll: 1, // Scroll one slide at a time
    arrows: true, // Show next/prev arrows
    autoplay: true, // Enable auto-sliding
    autoplaySpeed: 2000, // Wait time between slides (ms)
    pauseOnHover: true, // Pause autoplay on hover
    adaptiveHeight: true, // Adjust container height based on content
  });
});

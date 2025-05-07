$(document).ready(function() {
  $('.carousel').slick({
    dots: true,          // Little circles at the bottom
    infinite: true,      // Infinite loop
    speed: 500,          // Transition speed (ms)
    slidesToShow: 1,     // How many images to show at once
    slidesToScroll: 1,   // How many images to scroll on transition
    arrows: true,        // Show right-left arrows
    autoplay: true,      // Automatically slide
    autoplaySpeed: 2000, // Slide every 2 seconds
    pauseOnHover: true,  // Pause on hover
    adaptiveHeight: true // Adjust height according to the image
  });
});
$(document).ready(function () {
  // Initialize Isotope on the grid with masonry layout
  var iso = new Isotope(".projects-grid", {
    itemSelector: ".project-card",
    layoutMode: "masonry",
    masonry: {
      columnWidth: 270, // Sets base column width
      gutter: 30, // Gap between items
    },
  });

  // Handle filter clicks
  $(".project-categories a").on("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior

    var filterValue = $(this).attr("data-filter"); // Get filter class
    iso.arrange({ filter: filterValue }); // Filter the grid

    // Update active filter button UI
    $(".project-categories a").removeClass("active");
    $(this).addClass("active");
  });

  // Mark "All" filter as active by default
  $('.project-categories a[data-filter="*"]').addClass("active");
});

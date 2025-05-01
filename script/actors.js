$(document).ready(function () {
  // Initialize Masonry grid layout
  var $grid = $(".actors-grid").masonry({
    itemSelector: ".actor-card",
    columnWidth: ".actor-card",
    percentPosition: true,
    gutter: 20,
  });

  // Filtering functionality
  $(".filter-btn").on("click", function () {
    // Update active state
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    const filterValue = $(this).attr("data-filter");

    // Show all or filtered actor cards
    if (filterValue === "*") {
      $(".actor-card").show();
    } else {
      $(".actor-card").hide();
      $(`.actor-card${filterValue}`).show(); // e.g. ".actor-card.movies"
    }

    // Recalculate layout
    $grid.masonry("layout");
  });
});

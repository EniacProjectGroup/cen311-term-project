$(document).ready(function() {
    // Isotope başlatma
    var iso = new Isotope('.projects-grid', {
        itemSelector: '.project-card', 
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 270,
            gutter: 30
        }
    });

    // Filtering functionality
    $('.project-categories a').on('click', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        iso.arrange({ filter: filterValue });

        // set active filter
        $('.project-categories a').removeClass('active');
        $(this).addClass('active');
    });

    // initially the "All" filter is active
    $('.project-categories a[data-filter="*"]').addClass('active');
});

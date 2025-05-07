$(document).ready(function() {
    // Masonry grid
    var $grid = $('.actors-grid').masonry({
        itemSelector: '.actor-card',
        columnWidth: '.actor-card',
        percentPosition: true,
        gutter: 20
    });

    // Filtering functionality
    $('.filter-btn').on('click', function() {
        // update button
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filterValue = $(this).attr('data-filter');
        
        if (filterValue === '*') {
            $('.actor-card').show();
        } else {
            $('.actor-card').hide();
            $(filterValue).show();
        }
        // Reorganize the Masonry layout
        $grid.masonry('layout');
    });
});
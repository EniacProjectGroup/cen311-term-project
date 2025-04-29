$(document).ready(function() {
    // Masonry grid için
    var $grid = $('.actors-grid').masonry({
        itemSelector: '.actor-card',
        columnWidth: '.actor-card',
        percentPosition: true,
        gutter: 20
    });

    // Filtreleme işlevselliği
    $('.filter-btn').on('click', function() {
        // Aktif butonu güncelle
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
        
        const filterValue = $(this).attr('data-filter');
        
        if (filterValue === '*') {
            $('.actor-card').show();
        } else {
            $('.actor-card').hide();
            $(filterValue).show();
        }
        
        // Masonry layout'u yeniden düzenle
        $grid.masonry('layout');
    });
});
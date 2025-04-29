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

    // Filtreleme işlevi
    $('.project-categories a').on('click', function(e) {
        e.preventDefault();
        var filterValue = $(this).attr('data-filter');
        iso.arrange({ filter: filterValue });

        // Aktif filtreyi belirtme
        $('.project-categories a').removeClass('active');
        $(this).addClass('active');
    });

    // Başlangıçta "All" filtresi aktif
    $('.project-categories a[data-filter="*"]').addClass('active');
});

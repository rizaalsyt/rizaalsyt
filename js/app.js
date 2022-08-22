

$('.page-scroll').on('click', function(e) {

    // ambil isi href 

    let tujuan = $(this).attr('href');
    
    let elementTujuan = $(tujuan)

    // pindadkan scroll

    $(`body`).animate({
        scrollTop: elementTujuan.offset().top - 50
    }, 1250, 'swing');
});
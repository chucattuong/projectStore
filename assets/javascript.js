

//slick slider
$(document).ready(function(){
    $(".featured_products-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='ti-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='ti-angle-right' aria-hidden='true'></i></button>"
    });
    $("#slide .slide-wrapper .slide-items").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        autoplay: true,
        pauseOnFocus: false,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='ti-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='ti-angle-right' aria-hidden='true'></i></button>"
    });
})
//slick slider end
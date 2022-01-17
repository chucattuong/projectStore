

//slick slider
$(document).ready(function(){
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
    $(".featured_products-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        draggable: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='ti-angle-left' aria-hidden='true'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='ti-angle-right' aria-hidden='true'></i></button>"
    });
})
//slick slider end

const navSlide = () =>{
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')
    
    burger.addEventListener('click',()=>{
        // toggle nav
        nav.classList.toggle('nav-active')

        // animate links
        navLinks.forEach((link ,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
            }
        })
        //burger animation
        burger.classList.toggle('toggle')
    });

}

navSlide();
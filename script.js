import { Gradient } from './Gradient.js'
  
// Create your instance
const gradient = new Gradient()

// Call `initGradient` with the selector to your canvas
gradient.initGradient('#gradient-canvas')



/* FEEDBACK owl carousel script */

$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplayTimeOut:2000,
    autoplayHoverPause:true,
    nav:true,
    navText: ['<i class="fas fa-angle-left" aria-hidden="true"></i>','<i class="fas fa-angle-right" aria-hidden="true"></i>'],
    navContainer: '.carousel .custom-nav',
    responsive: {
        0:{
            items: 1
        },
        900:{
            items: 2
        },
        1500:{
            items: 3
        }
    }
});

$("#n-about").click(function() {
    $('.content').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
});

$("#n-works").click(function() {
    $('.content').animate({
        scrollTop: $("#works").offset().top
    }, 2000);
});

$("#n-services").click(function() {
    $('.content').animate({
        scrollTop: $("#services").offset().top
    }, 2000);
});

$("#n-reviews").click(function() {
    $('.content').animate({
        scrollTop: $("#reviews").offset().top
    }, 2000);
});

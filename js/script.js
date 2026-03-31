$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,         
    margin: 20,          
    nav: false,          
    dots: true,          
    responsive:{
        0:{
            items: 2    
        },
        480:{
            items:  2    
        },
        768:{
            items: 4    
        },
        1000:{
            items: 6     
        }
    }
  });

  $('.menu-toggle').click(function() {
        $('.nav-links').stop().slideToggle(300);
        
        let expanded = $(this).attr('aria-expanded') === 'true';
        $(this).attr('aria-expanded', !expanded);
    });

    $(window).resize(function() {
        if ($(window).width() > 1024) {
            $('.nav-links').removeAttr('style');
        }
    });

});
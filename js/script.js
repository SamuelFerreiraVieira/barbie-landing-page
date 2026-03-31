$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop: false,         // Como são poucos atores, pode deixar false ou true
    margin: 20,          // Espaço entre as fotos
    nav: false,          // Remove as setas (o layout não parece ter setas)
    dots: true,          // Mantém os pontinhos de navegação
    responsive:{
        0:{
            items: 1     // 1 ator por vez no celular muito pequeno
        },
        480:{
            items: 2     // 2 atores no celular
        },
        768:{
            items: 4     // 4 atores no tablet
        },
        1000:{
            items: 6     // 6 atores no desktop (como no layout)
        }
    }
  });
});
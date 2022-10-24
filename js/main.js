$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
         
            margin:15,
            autoplay: true,
            dots: true,
            responsive: {
              0: {
                  items:1,
                  nav: false,
               },
        }}
    )

  });
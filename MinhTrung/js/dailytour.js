$(document).ready(function(){


    var width  = $(window).width();

    var temp = (23/100) * width;
    temp += 'px';

  $('.slider').slick({

   centerMode: true,
   cssEase: 'linear',    
   autoplay: true,
   prevArrow: '.left',
   nextArrow: '.right',
   centerPadding: temp,
   slidesToShow: 1,
   responsive: [
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: temp,
         slidesToShow: 1
       }
     },
     {
       breakpoint: 480,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: temp,
         slidesToShow: 1
       }
     }
   ]
  });
});
$(document).ready(function(){


    var width  = $(window).width();

    var temp = (20/100) * width;
    temp += 'px';
    var temp1 = (15/100) * width;
    temp1 += 'px';

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
  $('.slider2').slick({

   centerMode: true,
   // cssEase: 'linear',    
   autoplay: true,
   prevArrow: ' .left2',
   nextArrow: ' .right2',
   centerPadding: temp1,
   slidesToShow: 2,
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
  $('.slider3').slick({

   centerMode: true,
   cssEase: 'linear',    
   autoplay: true,
   prevArrow: '.left3',
   nextArrow: '.right3',
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
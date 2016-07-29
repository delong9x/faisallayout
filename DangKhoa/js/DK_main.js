/*slider*/
$('#myCarousel').carousel({
              interval: 10000,
              cycle : true
            })

            $('.carousel .item').each(function(){
              var next = $(this).next();
              if (!next.length) {
                next = $(this).siblings(':first');
              }
              next.children(':first-child').clone().appendTo($(this));
            });
/*set height*/
 var _left=$('.border-contact').outerHeight();
            var _right=$('.bg-img').outerHeight();
            
            
            if(_left>_right) {
                
                $('.bg-img').css('height', _left + "px");
            }
            else {
                $('.border-contact').css('height', _right + "px");
            }
/*slider main*/

$(document).ready(function(){


    var width  = $(window).width();

    var temp = (20/100) * width;
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
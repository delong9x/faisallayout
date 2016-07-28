$(document).ready(function(){
    $('.autoplay').slick({
	  slidesToShow: 4,
	  prevArrow: '.left',
 	  nextArrow: '.right',
	  slidesToScroll: 1,
	  autoplay: true,
	  autoplaySpeed: 3000,
	});
});

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
	});
});
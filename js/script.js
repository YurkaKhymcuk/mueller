$(document).ready(function(){

	$("#unig_fo_partner").owlCarousel({
     loop: true,
     items: 3,
     autoplay: true,
     nav: true,
     margin: 30,
     navText:['<button type="button" class="btn slider-left-btn"> </button>','<button type="button" class="btn slider-right-btn"> </button>'],
     
     responsive:{
     	0: {
          items: 1
     	},
     	640: {
          items: 2
     	},
     	860:{
     	  items: 3
     	},
     	1280: {
          items: 3
     	}
     }
  });
	$("#unig_fo_news").owlCarousel({
     loop: true,
     items: 3,
     autoplay: true,
     nav: true,
     margin: 30,
     navText:['<button type="button" class="btn slider-fo-news-left-btn"> </button>','<button type="button" class="btn slider-fo-news-right-btn"> </button>'],
     
     responsive:{
     	0: {
          items: 1
     	},
     	640: {
          items: 2
     	},
     	860:{
     	  items: 3
     	},
     	1280: {
          items: 3
     	}
     }
  });

	
			$(window).scroll(function () {
				if ($(this).scrollTop() > 900) {
					$('#scroller').fadeIn();
				} else {
					$('#scroller').fadeOut();
				}
			});
		 
			
			$('#scroller').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
});
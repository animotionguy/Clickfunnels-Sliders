(function ( $ ) {
  $.fn.cfCarousel = function ( carouselsettings ) {

    var settings = $.extend( {}, $.fn.cfCarousel.defaults, carouselsettings );

    return this.each(function () {
		$(this).find(settings.slides).wrap("<li></li>");
		$(this).unslider(
	      {
	        selectors: {
	          container: settings.container,
	          slides: 'li'
	        },
	        autoplay: settings.autoplay,
	        infinite: settings.infinite,
	        arrows: settings.arrows,
	        delay: settings.delay,
	        animation: settings.animation,
	        nav: settings.nav
	      });

		$(this).on("mouseover",function () {
			$(this).unslider('stop');
		});

		$(this).on("mouseout",function () {
			$(this).unslider('start');
		});
	});
  }

  $.fn.cfCarousel.defaults = {
    container: ".col-inner",
    slides: ".elImageWrapper",
    autoplay: true,
    infinite: true,
    arrows: false,
    delay: 3000,
    animation: "horizontal",
    nav: false
  };
}
(jQuery));

(function ( $ ) {
  $.fn.cfCarousel = function ( options ) {

    var settings = $.extend( {}, $.fn.cfCarousel.defaults, options);

    return this.each(function () {
		$(this).find(settings.slide).wrap("<div></div>");
		$(this).slick(
	      {
          slide: 'div',
          centermode: settings.centermode,
          dots: settings.dots,
	        autoplay: settings.autoplay,
	        infinite: settings.infinite,
	        arrows: settings.arrows,
          pauseonHover: settings.pauseonHover,
          pauseOnDotsHover:settings.pauseOnDotsHover,
	        autoplaySpeed: settings.autoplaySpeed,
	      });
	});
  }

  $( 'section[ title=Carousel ]' ).addClass('carousel');

  $.fn.cfCarousel.defaults = {
    slide: ".elImageWrapper",
    centermode: true,
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: false,
    autoplaySpeed:8000,
  };
}(jQuery));

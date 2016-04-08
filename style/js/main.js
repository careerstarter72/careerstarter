/*-----------------------------------------------------------------------------------*/
/*	CUSTOM FUNCTIONS
/*-----------------------------------------------------------------------------------*/
jQuery.fn.setAllToMaxHeight = function(){
	return this.css({ 'height' : '' }).height( Math.max.apply(this, jQuery.map( this , function(e){ return jQuery(e).height() }) ) );
}
/*-----------------------------------------------------------------------------------*/
/*	DOCUMENT READY JS
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
"use strict";    
	
	var $window = jQuery(window);
	
	jQuery('.full-height').height($window.height());
	jQuery('.service').setAllToMaxHeight();
	jQuery('.team-member .col-md-6').setAllToMaxHeight();
	
	$window.resize(function(){
		jQuery('.service').setAllToMaxHeight();
		jQuery('.full-height').height($window.height());
		jQuery('.team-member .col-md-6').setAllToMaxHeight();
	});
	
	jQuery('#down-link').click(function(){
		var the_ID = jQuery(this).parents('#header-video').next().attr('id');
		jQuery("html, body").animate({ scrollTop: jQuery('#' + the_ID).offset().top - 81 }, 500);
		return false;
	});
	
	jQuery('a[href^="#"]:not([href="#"])').click(function(){
		var url = $(this).attr('href');
		setTimeout(function(){
			jQuery("html, body").animate({ scrollTop: $(url).offset().top - 81 }, 1400);
		}, 400);
		return false;
	});
	
	jQuery('#menu-toggle').click(function(){
		jQuery(this).toggleClass('active');
		jQuery('.top-bar + nav').toggleClass('active');
		return false;
	});
	
	//Videos
	jQuery(".video-container").fitVids();
	
	//Owl Carousel
	jQuery('.owl-carousel').owlCarousel({
		items: 1,
		autoHeight: true,
		lazyLoad: true
	});
	
});
/*-----------------------------------------------------------------------------------*/
/*	CONTACT FORM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';

	//CONTACT FORM
	jQuery('#contactform').submit(function(){

		var action = jQuery(this).attr('action');

		jQuery("#message").slideUp(750,function() {
		jQuery('#message').hide();

 		jQuery('#submit').attr('disabled','disabled');

		$.post(action, {
			name: jQuery('#name').val(),
			email: jQuery('#email').val(),
			website: jQuery('#website').val(),
			comments: jQuery('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				jQuery('#message').slideDown('slow');
				jQuery('#submit').removeAttr('disabled');
				if(data.match('success') != null) jQuery('#contactform').slideUp('slow');
				jQuery(window).trigger('resize');
			}
		);

		});

		return false;

	});
	
});
/*-----------------------------------------------------------------------------------*/
/*	AJAX PORTFOLIO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';

	/**
	 * AJAX Portfolio
	 */
	jQuery('body').on('click', '#container a', function(){
		
		jQuery(this).attr('data-ajax-active', 'true');
		
		var url = jQuery(this).attr('href');
		
		jQuery('#loader').isotope( 'remove', jQuery('.item') );
		
		jQuery("html, body").animate({ scrollTop: jQuery('#loader').offset().top - 81 }, 250);
		
		jQuery.get(url, function(data){
			var $data = jQuery(data).filter('.single-portfolio.full');
			
			imagesLoaded( $data, function(){
				
				$data.find('.owl-carousel').owlCarousel({
					items: 1,
					autoHeight: true,
					lazyLoad: true
				});
				
				//Videos
				$data.find(".video-container").fitVids();
				
				jQuery('#loader').prepend( $data ).isotope( 'prepended', $data );
				
				setTimeout(function(){
					jQuery('#loader').isotope('layout');
					jQuery('#loader').css('min-height', '' );
					jQuery(window).trigger('resize');
				}, 600);
				
			});
			
		});
		
		return false;
	});
	
	/**
	 * Close Portfolio
	 */
	jQuery('body').on('click', '#portfolio-close', function(){
		jQuery('#container a').attr('data-ajax-active', '');
		jQuery('#loader').isotope( 'remove', jQuery('.item') ).isotope('layout');
		setTimeout(function(){
			jQuery("html, body").animate({ scrollTop: jQuery('#loader').offset().top - $header.outerHeight() }, 250);
		}, 300);
		return false;
	});
	
	/**
	 * Prev Portfolio
	 */
	jQuery('body').on('click', '#portfolio-prev', function(){
		
		jQuery('#loader').css('min-height', jQuery('#loader').height() );
		var $current = jQuery('#container a[data-ajax-active="true"]'),
			$prev = $current.parent().parent().prev().find('a');
		
		if( $prev.length ){
			$current.attr('data-ajax-active', '');
			$prev.trigger('click');
		} else {
			jQuery('#container a').last().trigger('click');
		}
		
		jQuery('#loader').isotope( 'remove', jQuery('.item') ).isotope('layout');
	
		return false;
		
	});
	
	/**
	 * Next Portfolio
	 */
	jQuery('body').on('click', '#portfolio-next', function(){
		
		jQuery('#loader').css('min-height', jQuery('#loader').height() );
		var $current = jQuery('#container a[data-ajax-active="true"]'),
			$next = $current.parent().parent().next().find('a');
		
		if( $next.length ){
			$current.attr('data-ajax-active', '');
			$next.trigger('click');
		} else {
			jQuery('#container a').first().trigger('click');
		}
		
		jQuery('#loader').isotope( 'remove', jQuery('.item') ).isotope('layout');
	
		return false;
		
	});
	
	/**
	 * Load more functionality
	 */
	jQuery('.load-more-btn').click(function(){
		
		var $this = jQuery(this),
			url = $this.attr('href');
			
		$this.text($this.attr('data-loading'));
		
		jQuery.get(url, function(data){
			var $data = jQuery(data);
			
			imagesLoaded( $data, function(){

				jQuery('#container').append( $data ).isotope( 'appended', $data );
				
				setTimeout(function(){
					jQuery(window).trigger('resize');
					$this.slideUp();
				}, 600);
				
			});
			
		});
		
		return false;
	});
	
});
jQuery(window).load(function($) {
	
	/**
	 * Start Isotope
	 */
	var $container = jQuery('#container');
	$container.isotope({
		itemSelector: '.item'
	});
	
	/**
	 * Isotope Filter Buttons
	 */
	jQuery('#filters a').click(function () {
	
	    jQuery('#filters a').removeClass('active');
	    jQuery(this).addClass('active');
	
	    var selector = jQuery(this).attr('href');
	    jQuery('#container').isotope({
	        filter: selector
	    });
	
	    return false;
	});
	
	/**
	 * Start AJAX Loader Isotope
	 */
	var $container = jQuery('#loader');
	$container.isotope({
		itemSelector: '.item'
	});
});
/*-----------------------------------------------------------------------------------*/
/*	WINDOW READY JS
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function(){
"use strict"; 
	
	var $window = jQuery(window);
	
	jQuery('.full-height').height($window.height());
	jQuery('.service').setAllToMaxHeight();
	jQuery('.team-member .col-md-6').setAllToMaxHeight();
	
});
/*-----------------------------------------------------------------------------------*/
/*	INSTAGRAM
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($){
'use strict';
	
	jQuery('.instafeed').each(function() {
	    jQuery(this).attr('id', 'instafeed');
	});
	var instagramFeed = new Instafeed({
	    get: 'user',
	    userId: 1215763826,
	    limit: 6,
	    accessToken: '1215763826.467ede5.aa54392aa9eb46f0b9e7191f7211ec3a',
	    resolution: 'low_resolution',
	    template: '<div class="item small"><div class="item-inner"><a href="{{link}}"><img src="{{image}}" /><div class="project-title"><div class="title-wrapper"><i class="fa fa-link"></i></div></div></a></div></div>',
	});
	jQuery('#instafeed').each(function() {
	    instagramFeed.run();
	});

});
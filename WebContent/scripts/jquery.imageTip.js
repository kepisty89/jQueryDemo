	
	/* * * * * * * * * * * * * * * * * * *
	 * Image tool-tip plugin for jQuery. *
	 * * * * * * * * * * * * * * * * * * */

(function($){
	
	// Plugin name and definition.
	$.fn.imageTip = function(imageData){
		
	// Log plugin work.
	console.log("ImageTip plugin is working now.");
		
	// Set default options for options parameter.
	var settings = $.extend({ imgSrc: "imageThing" }, imageData);

	// Plugin functions.
	var changeTooltipPosition = function(event) {
		var tooltipX = event.pageX - 8;
		var tooltipY = event.pageY + 8;
		$('div.tooltip').css({top: tooltipY, left: tooltipX});
	};
 
	var showTooltip = function(event) {
		$('div.tooltip').remove();
		$('<div class="tooltip"><img src="' + settings.imgSrc + '" /></div>').appendTo('body').hide().fadeIn();
		changeTooltipPosition(event);
	};
 
	var hideTooltip = function() {
		$('div.tooltip').fadeOut();		
	};
 
 	// Plugin execution.
 	// Binding is used.
	this.bind({
		mousemove  : changeTooltipPosition,
		mouseenter : showTooltip,
		mouseleave : hideTooltip
		});
	};

	return this;
	
})(jQuery);
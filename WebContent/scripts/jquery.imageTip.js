(function($){
	
	// Plugin name and definition.
	$.fn.imagetip = function(imageData){
		
		console.log("image tip working!");
		
		// Set default options for options parameter.
		var settings = $.extend({ imgSrc: "./images/not_found.jpg", divId: "imageTipNOT_SET" }, imageData);
		
		// This - input on which this plugin is called.
		$(this).parent().append('<div id="' + settings.divId + '"></div>');		
		$('#' + settings.divId).append('<img src="' + setting.imgSrc + '" />');		
		
		console.log("image tip end.");
	};
	
})(jQuery);
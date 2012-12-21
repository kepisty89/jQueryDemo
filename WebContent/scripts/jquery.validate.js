	
	/* * * * * * * * * * * * * * * * *
	 * Validation plugin for jQuery. *
	 * * * * * * * * * * * * * * * * */

(function($){

	$.fn.validateEmpty = function(validationData){

		// Log plugin work.
		console.log("ValidateEmpty plugin working...");

		// Set default options.
		var settings = $.extend(
			{ errorText: "Cannot be empty!", suggestionText: "Fill this field." }, 
			validationData);

		// Check if field is empty, if is - show suggestion.
		$(this).blur(function(){

			var text = $(this).val();

			if ($.trim(text) === ""){
				$(this).val(settings.suggestionText);
				$(this).css('color', '#99A2C7');
				$(this).parent().parent().css('background-color', '#BD2D2D');
			}else{
				$(this).css('color', 'black');
			}
		});

		// Check if field has suggestion shown.
		$(this).focus(function(){
			
			$(this).css('color', 'black');

			if (settings.suggestionText == $(this).val()) {
				$(this).val("");		
			}
		});
	};

})(jQuery);
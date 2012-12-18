$(document).ready(function() {
	
	// Color swap variable;
	var swt = false;

	// Change form background color.
	$('.formField').hover(function(){

		var color = $(this).css("background-color");
		changeColor(swt, $(this));
		swt = !swt;
	});

	var changeColor = function(event, divElement) {

		if (event) {			
			divElement.css("background-color", "#DFF2E7");
		}else{			
			divElement.css("background-color", "#D8EBF0");
		};
	}	


	/* Tooltips */

	$(".toolTip").hover(function() {
        tip = $(this).find('.tip');
        tip.fadeIn();
    }, function() {
        tip.fadeOut('fast');
    });

});

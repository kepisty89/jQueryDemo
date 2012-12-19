$(document).ready(function() {
	
	// Color swap variable;
	var swt = false;

	var changeColor = function(event, divElement) {
		if (event) {			
			divElement.css("background-color", "#EADB38");
		}else{			
			divElement.css("background-color", "#FAF4B6");
		};
	}	

	// Change form background color.
	$('.formField').hover(function(){
		var color = $(this).css("background-color");
		changeColor(swt, $(this));
		swt = !swt;
	});
	
	/* Tooltips */

	$('.toolTip').hover(function() {
        tip = $(this).find('.tip');
        tip.fadeIn();
    }, function() {
        tip.fadeOut('fast');
    });

    /* Validation */
    $('input').validateEmpty( {errorText: "Fill this!", suggestionText: "Please fill this field"} );

    // CapsLock info.
	var capsLockPressed = false;

    $('body').keydown(function(event) {
  		if(event.keyCode == 20){
  			capsLockPressed = !capsLockPressed;
  			if (capsLockPressed) {
  				alert("CapsLock pressed is ON!");
  			};  			
  		}
	});

});

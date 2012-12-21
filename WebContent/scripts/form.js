$(document).ready(function() {	

	/* 
	 * Change form background color.
	 */
	$('.formField').hover(function(){
		var color = $(this).css("background-color");
		changeColor(swt, $(this));
		swt = !swt;
	});
	
	/* 
	 * Color swap.
	 */
	var swt = false;
	var changeColor = function(event, divElement) {
		if (event) {			
			divElement.css("background-color", "#EADB38");
		}else{			
			divElement.css("background-color", "#FAF4B6");
		};
	}

	/* 
	 * Tooltips 
	 */
	$('.toolTip').hover(function() {		
        tip = $(this).find('.tip');
        tip.fadeIn();
    }, function() {
        tip.fadeOut('fast');
    });

    /* 
     * Validation 
     */
    $('input').each(function(){
    	$(this).validateEmpty( {errorText: "Fill this field!", suggestionText: "Enter your " + $(this).attr("name")} );
    });

    /*
     * CapsLock info.	
     */
	$('.popUp').hide();
    $('body').keypress(function(event) {    	
    	var key = String.fromCharCode(event.which);    	
		if (key.toUpperCase() === key && key.toLowerCase() !== key && !event.shiftKey) {		
        	$('.popUp').text("CapsLock is ON!").slideToggle().delay(1300).slideToggle();
        	console.log("Caps lock is ON.");
    	}  	
	});

	/*
	 * Done button click.
	 */
	$('#hwThankYou').hide();
	$('.checkFormButton').click(function(){		
		var anyError = false;
		$('input').each(function(){
			if($(this).css("color") === "rgb(153, 162, 199)" || $(this).val() === ""){
				console.log($(this).css("color"));
				if($(this).attr("name") !== "sendIt"){					
					$(this).parent().parent().css("background-color", "#BD2D2D");
					anyError = true;
				}
			}
		});

		if (anyError) {
			$('.popUp').text("There are some errors. :(").slideToggle().delay(1000).slideToggle();
		}
		else{
			$('#hwForm').fadeOut('slow');
			$('#hwThankYou').delay(500).fadeIn('slow');
		}
	});

	/*
	 * Sliding 'what is done' menu.
	 */
	$('.whatsDone').children().hide();
	$('.whatsDone').click(function(){

		// Slide all children.
		$(this).children().slideToggle();	

		// Prevent sliding when clicking 
		// on children items that are NOT same (whatsDone) class.
	}).children(':not(".whatsDone")').click(function(){
		return false;
	});	
});
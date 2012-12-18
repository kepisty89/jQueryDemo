/** * * * * * * * * * * * * * * * * * * * * * *  
 * Task 1 - Effects.
 ** * * * * * * * * * * * * * * * * * * * * * **/
$(document).ready(function () {

	/**
	 * Sliding menu.
	 */	
	// Slide up menu first time, when DOM is ready.
	$('.menuItem').children().hide();

	$('.menuItem').click(function(){

		// Slide all children.
		$(this).children().slideToggle();	

		// Prevent sliding when clicking 
		// on children items that are NOT same (menuItem) class.
	}).children(':not(".menuItem")').click(function(){
		return false;
	});	
	
	/**
	 * Animate.
	 */
	$('#pacman').click(function(){			
		$(this).animate({"left": "-=210px"}, 1000, function(){
			$('#dot1').text("");
		});
		
		$(this).animate({"left": "-=90px"}, 700, function(){
			$('#dot2').text("");
		});
		
		$(this).animate({"left": "-=75px"}, 700, function(){
			$('#dot3').text("");
		});		
	});
	
	/**
	 * Tabs.
	 */	
	// Hide not used tabs.
	$('div[id*="tabContent"]').hide();
	$('div[id*="tabContent1"]').show();
	
	$('li[id*="tabHeader"]').click(function(){
		
		// Hide all tabs.
		$('div[id*="tabContent"]').hide();
		
		// Get header id.
		var tabId = $(this).attr("tabId");
		
		// Show tab content.
		$('div[id*="tabContent' + tabId + '"]').show();
		
		// Set this tab selected.
		$('li[id*="tabHeader"]').removeAttr("class");
		$(this).attr('class', 'selectedTab');
		
	});

	/**
	 * Accordion.
	 */
	 $('.accordionItem').children().hide();
	 $('.accordionItem').click(function(){
	 	
	 	// Get current accordion item index.
	 	var clickedIndex = $(this).index();	 

		// If clicked index is different than others - fold them.	 	
	 	$('.accordionItem').each(function(index){

	 		if (clickedIndex != $(this).index()){
	 			$(this).children().slideUp();
	 		}else{	 			
	 			$(this).children().slideToggle();
	 		}
	 		
	 	});

	 }).children().click(function(){
	 	return false;
	 });

});
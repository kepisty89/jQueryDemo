/** * * * * * * * * * * * * * * * * * * * * * *  
 * Task 1 - Effects.
 ** * * * * * * * * * * * * * * * * * * * * * **/
$(document).ready(function () {

	/**
	 * Sliding menu.
	 */
	$('.menuItem').children().slideToggle();
	$('.menuItem').click(function(){	
		$(this).children().slideToggle();		
	}).children().click(function(){
		return false;
	});	
	
	/**
	 * Animate.
	 */
	$('#pacman').click(function(){			
		$(this).animate({"left": "-=210px"}, 1000, function(){
			$('#dot1').text("");
		});
		
		$(this).animate({"left": "-=110px"}, 700, function(){
			$('#dot2').text("");
		});
		
		$(this).animate({"left": "-=110px"}, 700, function(){
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
	// TODO
	
});
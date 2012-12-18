$(document).ready(function () {

	console.log("Tips working!");
	$('.imageTip').hide();

	$('#effectsInput').imageTip( {imgSrc: "./images/imageTip1.png"} );
	$('#formInput').imageTip( {imgSrc: "./images/imageTip2.png"} );

});
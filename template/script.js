jQuery(function()
{

	$("#exemple-deux").mouseover(function() {
 		$("#exemple-un").css("opacity", "1");
 		$("#exemple-un").css("transition", "opacity 2s");

		$("#exemple-trois" ).css("opacity", "1");
		$("#exemple-trois").css("transition", "opacity 2s");

	});

	$("#un").mouseover(function() {
		$(".1").css("opacity", "1");
		$(".1").css("transition", "1s");
	});
	$("#deux").mouseover(function() {
		$(".2").css("opacity", "1");
		$(".2").css("transition", "1s");
	});
	$("#trois").mouseover(function() {
		$(".3").css("opacity", "1");
		$(".3").css("transition", "1s");
	});
	$("#quatre").mouseover(function() {
		$(".4").css("opacity", "1");
		$(".4").css("transition", "1s");
	});
	$("#cinq").mouseover(function() {
		$(".5").css("opacity", "1");
		$(".5").css("transition", "1s");
	});

});

ScrollReveal().reveal('.slidebottom', {delay:50, duration: 1500, distance: '60px', origine: 'bottom'});

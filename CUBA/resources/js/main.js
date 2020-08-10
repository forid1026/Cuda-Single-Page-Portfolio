$(document).ready(function(){

	// STICKY
	$(".js-service-section").waypoint(function(direction){
		if(direction == "down"){
			$("nav").addClass("sticky");
		}
		else
		{
			$("nav").removeClass("sticky");
		}
	});



	// MIXITUP(PORTFOLIO)
	var mixer = mixitup('.items');

});
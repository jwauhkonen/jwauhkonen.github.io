$(document).scroll(function() {
	var transitionPoint = 160 + $(window).height();

	if ($(document).scrollTop() > (160 + $('#to-top-button').height())) {
		$('#to-top-button').css({
			display: 'block',
			position: 'fixed',
			bottom: '.5em',
			top: ''
		})
	} else if ($(document).scrollTop() > 160) {
		$('#to-top-button').css({
			display: 'block',
			position: 'absolute',
			top: transitionPoint
		})
	} else {
		$('#to-top-button').css("display", "none");
	}
});
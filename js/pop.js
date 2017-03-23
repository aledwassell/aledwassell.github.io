const $ = require('jquery');
require('magnific-popup');

$(document).ready(function(){
	$('.open-popup').magnificPopup({
  type:'inline',
  midClick: true,
	zoom: {
		enabled: true,
		duration: 600,
		easing: 'ease-in-out'
	}
	});
});

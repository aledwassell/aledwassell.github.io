const $ = require('jquery');
require('magnific-popup');

$(document).ready(function(){
	$('.ajax-popup-link').magnificPopup({
  type:'ajax',
	ajax: {
		settings: null,
		cursor: 'mfp-ajax-cur',
		tError: '<a href="%url%">The content</a> could not be loaded.'
	},
  midClick: true,
	zoom: {
		enabled: true,
		duration: 600,
		easing: 'ease-in-out'
	}
	});
});

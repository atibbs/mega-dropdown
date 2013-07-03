// site.js

$(document).ready(function() {
	$('.mobile-menu-toggle').on('click', function(e) {
		e.preventDefault();
		$('.parent-menu').toggleClass('open');
	});

	$('.mobile-search-toggle').on('click', function(e) {
		e.preventDefault();
		$('#searchform').toggleClass('open');
	});
});
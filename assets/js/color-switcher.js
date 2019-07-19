$(document).ready(function() {
	$('.color-pallet').click(function(e) {
		var color = $(this).attr('title');
		
		e.preventDefault();
	});
	$('#scheme-source').attr('href', 'css/schemes/gray.css');
	
	$('.panel-ticker').click(function() {
		$('#section-colors').toggleClass('panel-close', 'panel-open', 1000);
		$('#section-colors').toggleClass('panel-open', 'panel-close', 1000);
	})
	return false;
});
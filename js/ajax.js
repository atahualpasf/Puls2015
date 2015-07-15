$(function() {
	$.get('../logos_footer.html', function(data) {
		$('footer').append(data);
	});
});
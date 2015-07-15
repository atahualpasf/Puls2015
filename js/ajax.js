$(function() {
	$.get('../logos_footer.html', function(data) {
		$('footer').append(data);
	});

	$.getJSON('../data/usuario.json', function(data) {
		var avatar = new Image();
		avatar.src = data.avatar;
		avatar.title = data.nombre + ' '  + data.apellido;
		$('#avatar').append(avatar);
	})
});
var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#publicar'),
	$list = $('#contenido'),
	$post = $('.item').first();

var id = setInterval(function() {
	sessionStorage.setItem('titulo', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000)

if (localStorage.getItem('autosave')) {
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url'));
}

// Funciones
function mostrarFormulario() {
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost () {
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();
	$list.prepend($clone);
	mostrarFormulario();
	$titulo.val('');
	$url.val('');
	//$form[0].reset();
	$clone.fadeIn();
	
	return false;
}

// Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost );
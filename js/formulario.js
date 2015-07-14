var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#publicar'),
	$list = $('#contenido'),
	$post = $('.item').first();

// Funciones
function mostrarFormulario() {
	$form.slideToggle();
	return false;
}

function agregarPost () {
	return false;
}

// Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost );
var $favorito = $('.icon-star');

function mostrarAlerta() {
	alert("Hola mundo");
	return false;
}

$favorito.click( mostrarAlerta );
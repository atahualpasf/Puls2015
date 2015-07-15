var geo = navigator.geolocation,
	opciones = {};

function geo_error() {
	console.log('Hhmmmm...this is akward...no puedo saber donde estas');
}

function geo_success(position) {
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
	var mapa = new Image();
	mapa.src = "http://maps.googleapis.com/maps/api/staticmap?zoom=13&size=200x200&sensor=false&center="+lat+','+lon;
	$('#geo').append(mapa);
}

geo.getCurrentPosition(geo_success, geo_error, opciones);